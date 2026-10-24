// Counts the Claude tokens and the commits for each app and writes
// _data/stats.yml, which the home page and the app pages show.
//
// Tokens: Claude Code keeps a log of every session in ~/.claude/projects.
// Each reply in it carries its token usage and the folder the session ran
// in, and that folder says which app the reply was for. Claude Code deletes
// logs after cleanupPeriodDays (30 by default), so the tokens of each day go
// into scripts/token-days.json, and a day whose logs are gone keeps the count
// it had there. Run this at least once a month, or the days in between are
// lost.
//
// The tokens come in three parts: the chat Claude reads again for every reply
// (the cache), what it reads for the first time, and what it writes. Only the
// last two count as the tokens of an app; the cache shows only as its share
// of all three.
//
// Commits: every commit on every branch of the app's repositories, each
// commit once.
//
// Tokens per day: the tokens of the apps, spread over the days since the
// first reply for an app. The home page counts on from the last count at
// that speed, so the number keeps running between two runs.
//
//   bun scripts/app-stats.ts
//
// With --publish it also commits _data/stats.yml and pushes it, so the site
// stays current on its own. A Stop hook in ~/.claude/settings.json runs it
// that way after each Claude reply; it then does the work at most every 15
// minutes, and only on main.
//
//   bun scripts/app-stats.ts --publish
//
// Each step prints a line, and the end shows every number with its change.

import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const development = join(homedir(), "development");
const site = join(import.meta.dir, "..");
const publish = process.argv.includes("--publish");
const message = "Update the Claude tokens and commits";
const started = Date.now();

function log(text: string) {
  const seconds = ((Date.now() - started) / 1000).toFixed(1).padStart(5);
  console.log(`[${seconds} s] ${text}`);
}

function git(...args: string[]) {
  const run = Bun.spawnSync(["git", "-C", site, ...args]);
  const result = { ok: run.exitCode === 0, out: run.stdout.toString().trim() };
  if (!result.ok) log(`git ${args.join(" ")} failed: ${run.stderr.toString().trim()}`);
  return result;
}

if (publish) {
  // The time of the last run, which also keeps two sessions from running
  // this at once.
  const stamp = join(site, ".git", "app-stats-published");
  const last = await stat(stamp).then((s) => s.mtimeMs).catch(() => 0);
  const minutes = (Date.now() - last) / 60_000;
  if (minutes < 15) {
    log(`Skipped: the last run was ${Math.floor(minutes)} min ago, the next one is due after 15.`);
    process.exit(0);
  }
  // A branch, a rebase or a merge in progress is work of its own: leave it.
  const branch = git("symbolic-ref", "--short", "-q", "HEAD").out;
  if (branch !== "main") {
    log(`Skipped: the site is on ${branch || "no branch"}, not on main.`);
    process.exit(0);
  }
  await writeFile(stamp, "");
}

// Per app: the folders its sessions ran in, and its repositories.
const apps: Record<string, { folders: RegExp[]; repos: string[] }> = {
  plopp: {
    folders: [/\/development\/bubble-wrap-app(\/|$)/],
    repos: ["bubble-wrap-app"],
  },
  grammgenau: {
    folders: [/\/development\/grammgenau(\/|$)/],
    repos: ["grammgenau"],
  },
  movenote: {
    folders: [/\/development\/workout-tracker[^/]*(\/|$)/, /\/\.t3\/worktrees\/workout-tracker(\/|$)/],
    repos: ["workout-tracker", "workout-tracker-server"],
  },
  "pubg-stream-report": {
    folders: [/\/development\/pubg-[^/]*(\/|$)/],
    repos: ["pubg-streamer-encounters"],
  },
};

const out = join(site, "_data", "stats.yml");
const ledger = join(site, "scripts", "token-days.json");
const slugs = Object.keys(apps);

const parts = ["again", "fresh", "written"] as const;
type Part = (typeof parts)[number];
type Counts = Record<Part, number>;
// Per day (UTC), per app.
type Days = Record<string, Record<string, Counts>>;
const zero = (): Counts => ({ again: 0, fresh: 0, written: 0 });

async function* logs(dir: string): AsyncGenerator<string> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* logs(path);
    else if (entry.name.endsWith(".jsonl")) yield path;
  }
}

function appOf(cwd: string): string | undefined {
  const path = cwd.replaceAll("\\", "/").toLowerCase();
  return slugs.find((slug) => apps[slug].folders.some((re) => re.test(path)));
}

// The tokens of each day, and the time of the first reply for an app, as far
// as the logs still go back.
async function countTokens(): Promise<{ days: Days; first: number }> {
  const days: Days = {};
  let first = Infinity;
  // A reply is logged once per content block, each time with the same usage.
  const seen = new Set<string>();
  let files = 0;
  let replies = 0;
  for await (const file of logs(join(homedir(), ".claude", "projects"))) {
    files++;
    for (const line of (await readFile(file, "utf8")).split("\n")) {
      if (!line.includes('"usage"')) continue;
      let entry;
      try {
        entry = JSON.parse(line);
      } catch {
        continue;
      }
      const usage = entry.message?.usage;
      const slug = entry.cwd && appOf(entry.cwd);
      const time = Date.parse(entry.timestamp);
      if (entry.type !== "assistant" || !usage || !slug || !time) continue;
      const id = `${entry.message.id}:${entry.requestId}`;
      if (seen.has(id)) continue;
      seen.add(id);
      replies++;
      first = Math.min(first, time);
      const day = ((days[new Date(time).toISOString().slice(0, 10)] ??= {})[slug] ??= zero());
      day.again += usage.cache_read_input_tokens ?? 0;
      day.fresh += (usage.input_tokens ?? 0) + (usage.cache_creation_input_tokens ?? 0);
      day.written += usage.output_tokens ?? 0;
    }
  }
  log(`Read ${files.toLocaleString("de-DE")} Claude logs: ${replies.toLocaleString("de-DE")} replies for the apps.`);
  return { days, first };
}

async function countCommits(repos: string[]): Promise<number> {
  const hashes = new Set<string>();
  for (const repo of repos) {
    const git = Bun.spawnSync(["git", "-C", join(development, repo), "rev-list", "--all"]);
    if (git.exitCode !== 0) throw new Error(`git rev-list failed in ${repo}: ${git.stderr}`);
    for (const hash of git.stdout.toString().split("\n")) if (hash) hashes.add(hash);
  }
  return hashes.size;
}

// "1,2 Mrd." or "345 Mio." as the German page shows it, "1.2B" or "345M" on
// the English one.
function label(n: number, locale: "de-DE" | "en-US" = "de-DE"): string {
  const de = locale === "de-DE";
  const [value, unit] = n >= 1e9 ? [n / 1e9, de ? " Mrd." : "B"] : [n / 1e6, de ? " Mio." : "M"];
  const digits = value < 10 ? 1 : 0;
  return `${value.toLocaleString(locale, { minimumFractionDigits: digits, maximumFractionDigits: digits })}${unit}`;
}

log("Counting the tokens in ~/.claude/projects …");
const { days: counted, first } = await countTokens();
const before = await readFile(out, "utf8").catch(() => "");
const old = (slug: string, key: string) =>
  Number(before.match(new RegExp(`^  ${slug}:\\n(?:    .*\\n)*?    ${key}: (\\d+)`, "m"))?.[1] ?? 0);

// A day only grows while its logs are there, and shrinks when Claude Code
// deletes them. So each day keeps the highest count it ever had.
//
// The ledger is the only memory of the days whose logs are gone. Without it,
// or with a value in it that is not a number, the totals would drop, and
// --publish would push that. So stop instead.
const ledgerText = await readFile(ledger, "utf8").catch(() => undefined);
if (ledgerText === undefined && Number(before.match(/^tokens: (\d+)/m)?.[1] ?? 0) > 0) {
  log("Stopped: scripts/token-days.json is missing, but _data/stats.yml has tokens. Restore it from git.");
  process.exit(1);
}
const known: Days = JSON.parse(ledgerText ?? "{}");
const broken = Object.entries(known).flatMap(([day, perApp]) =>
  Object.entries(perApp)
    .filter(([, counts]) => parts.some((part) => !Number.isFinite(counts?.[part])))
    .map(([slug]) => `${day} ${slug}`),
);
if (broken.length) {
  log(`Stopped: scripts/token-days.json has counts that are not numbers: ${broken.join(", ")}.`);
  process.exit(1);
}
for (const [day, perApp] of Object.entries(counted)) {
  for (const [slug, counts] of Object.entries(perApp)) {
    const kept = ((known[day] ??= {})[slug] ??= zero());
    for (const part of parts) kept[part] = Math.max(kept[part], counts[part]);
  }
}
const gone = Object.entries(known).filter(([day, perApp]) => Object.keys(perApp).some((slug) => !counted[day]?.[slug]));
if (gone.length) log(`${gone.length} day(s) keep counts whose logs are gone.`);
const sorted = Object.fromEntries(Object.keys(known).sort().map((day) => [day, known[day]]));
await writeFile(ledger, JSON.stringify(sorted, null, 2) + "\n");

// An app that is no longer in the list above keeps its days in the ledger,
// but they do not count. If it was renamed, rename it in the ledger too.
const tokens: Record<string, number> = Object.fromEntries(slugs.map((slug) => [slug, 0]));
const byPart = zero();
const unknown = new Set<string>();
for (const perApp of Object.values(known)) {
  for (const [slug, counts] of Object.entries(perApp)) {
    if (!(slug in tokens)) {
      unknown.add(slug);
      continue;
    }
    for (const part of parts) byPart[part] += counts[part];
    tokens[slug] += counts.fresh + counts.written;
  }
}

if (unknown.size) log(`Not counted: ${[...unknown].join(", ")} in scripts/token-days.json is no app of this script.`);

log(`Counting the commits in ${slugs.flatMap((slug) => apps[slug].repos).length} repositories …`);
const commits: Record<string, number> = {};
for (const slug of slugs) commits[slug] = await countCommits(apps[slug].repos);

const sum = (counts: Record<string, number>) => Object.values(counts).reduce((a, b) => a + b, 0);

// The first day stays even when its logs are gone.
const oldSince = before.match(/^since: "?([^"\s]+)/m)?.[1];
const since = [oldSince, Number.isFinite(first) ? new Date(first).toISOString() : undefined]
  .filter((time): time is string => !!time)
  .sort()[0];
const now = new Date();
const days = since ? Math.max(1, (now.getTime() - Date.parse(since)) / 86_400_000) : 1;
const perDay = Math.round(sum(tokens) / days);
// "97,1" of every hundred tokens, the cache included.
const share = (part: Part, locale: string) =>
  ((byPart[part] / Math.max(1, sum(byPart))) * 100).toLocaleString(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

const yml = [
  "# Written by scripts/app-stats.ts. Run it again rather than editing this.",
  `updated: ${now.toISOString().slice(0, 10)}`,
  `updated_at: "${now.toISOString()}"`,
  `since: "${since ?? now.toISOString()}"`,
  `tokens: ${sum(tokens)}`,
  `tokens_with_cache: ${sum(byPart)}`,
  `tokens_label: "${label(sum(tokens))}"`,
  `tokens_label_en: "${label(sum(tokens), "en-US")}"`,
  `tokens_digits: "${sum(tokens).toLocaleString("de-DE")}"`,
  `tokens_digits_en: "${sum(tokens).toLocaleString("en-US")}"`,
  `tokens_per_day: ${perDay}`,
  `tokens_per_day_label: "${label(perDay)}"`,
  `tokens_per_day_label_en: "${label(perDay, "en-US")}"`,
  "parts:",
  ...parts.flatMap((part) => {
    const partPerDay = Math.round(byPart[part] / days);
    return [
      `  ${part}:`,
      `    tokens: ${byPart[part]}`,
      `    share_label: "${share(part, "de-DE")} %"`,
      `    share_label_en: "${share(part, "en-US")}%"`,
      `    tokens_digits: "${byPart[part].toLocaleString("de-DE")}"`,
      `    tokens_digits_en: "${byPart[part].toLocaleString("en-US")}"`,
      `    tokens_per_day: ${partPerDay}`,
      `    tokens_per_day_label: "${label(partPerDay)}"`,
      `    tokens_per_day_label_en: "${label(partPerDay, "en-US")}"`,
    ];
  }),
  `commits: ${sum(commits)}`,
  `commits_label: "${sum(commits).toLocaleString("de-DE")}"`,
  `commits_label_en: "${sum(commits).toLocaleString("en-US")}"`,
  "apps:",
  ...slugs.flatMap((slug) => [
    `  ${slug}:`,
    `    tokens: ${tokens[slug]}`,
    `    tokens_label: "${label(tokens[slug])}"`,
    `    tokens_label_en: "${label(tokens[slug], "en-US")}"`,
    `    commits: ${commits[slug]}`,
    `    commits_label: "${commits[slug].toLocaleString("de-DE")}"`,
    `    commits_label_en: "${commits[slug].toLocaleString("en-US")}"`,
  ]),
  "",
].join("\n");

// Every number, with how much it grew since the last run.
const grew = (now: number, then: number, format: (n: number) => string) =>
  now === then ? "" : ` (${now > then ? "+" : "-"}${format(Math.abs(now - then))})`;
const tokensText = (n: number) => (n < 1e6 ? `${n.toLocaleString("de-DE")}` : label(n));
const rows = [
  ...slugs.map((slug) => ({
    App: slug,
    Tokens: `${label(tokens[slug])}${grew(tokens[slug], old(slug, "tokens"), tokensText)}`,
    Commits: `${commits[slug]}${grew(commits[slug], old(slug, "commits"), String)}`,
  })),
  {
    App: "all",
    Tokens: `${label(sum(tokens))}${grew(sum(tokens), Number(before.match(/^tokens: (\d+)/m)?.[1] ?? 0), tokensText)}`,
    Commits: `${sum(commits)}${grew(sum(commits), Number(before.match(/^commits: (\d+)/m)?.[1] ?? 0), String)}`,
  },
];
console.table(Object.fromEntries(rows.map(({ App, ...row }) => [App, row])));

// The home page counts on from updated_at at the tokens per day. Without a
// new time it would count on too far in the hours without Claude for an app,
// so every run writes the time and the tokens per day, and the page counts
// on from the real count again. A new time alone is no news, though: "Stand"
// on the page stays the day the numbers last changed.
const withoutDate = (text: string) => text.replace(/^ *(updated|updated_at|since|tokens_per_day\w*): .*$/gm, "");
const changed = withoutDate(yml) !== withoutDate(before);
const oldUpdated = before.match(/^updated: .*$/m)?.[0];
await writeFile(out, changed || !oldUpdated ? yml : yml.replace(/^updated: .*$/m, oldUpdated));
log(changed ? "Wrote _data/stats.yml." : "Numbers unchanged; wrote the new time to _data/stats.yml.");

if (publish) {
  const files = ["_data/stats.yml", "scripts/token-days.json"];
  if (git("status", "--porcelain", "--", ...files).out) {
    git("add", "--", ...files);
    if (git("commit", "-q", "-m", message, "--", ...files).ok) {
      log(`Committed ${git("rev-parse", "--short", "HEAD").out}.`);
    }
  }
  // Push only commits of this script, never work that is not pushed yet.
  const ahead = git("log", "origin/main..HEAD", "--format=%s").out;
  if (!ahead) log("Nothing to push.");
  else if (!ahead.split("\n").every((subject) => subject === message)) {
    log("Not pushed: main has other commits that are not pushed yet.");
  } else if (git("push", "-q", "origin", "main").ok) {
    log(`Pushed ${ahead.split("\n").length} commit(s).`);
  }
}
