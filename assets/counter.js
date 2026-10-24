// Runs the token counters on the home page (_includes/stats.html). The last
// count is from the time in data-at; since then each counter grows by its
// tokens per day, spread evenly over every millisecond. It is a guess
// between two counts, and the next count puts it right again. A counter
// without data-at starts when the page opens.

(function () {
  const counters = [...document.querySelectorAll('[data-counter]')].flatMap((el) => {
    const tokens = el.dataset.tokens?.trim() ? Number(el.dataset.tokens) : NaN;
    const perMs = Number(el.dataset.perDay) / 86_400_000;
    const at = el.dataset.at ? Date.parse(el.dataset.at) : Date.now();
    // A number that is missing or did not parse would show as "NaN" or count
    // up from 0; such a counter keeps the count the page was built with.
    if (!Number.isFinite(tokens) || !(perMs > 0) || !Number.isFinite(at)) return [];
    return [{ el, tokens, perMs, at, format: new Intl.NumberFormat(el.dataset.locale), shown: '' }];
  });
  if (!counters.length) return;

  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The font has no digits of one width, so each digit gets a box of its
  // own. Otherwise the number would change its width on every step, and
  // everything next to it would jump.
  function show() {
    const time = Date.now();
    for (const c of counters) {
      const now = c.format.format(Math.max(c.tokens, Math.floor(c.tokens + c.perMs * (time - c.at))));
      if (now === c.shown) continue;
      c.shown = now;
      c.el.innerHTML = now.replace(/\d/g, '<span class="stats-digit">$&</span>');
    }
  }

  // Count only while a counter is on the screen. The number comes from the
  // clock, so it is right again as soon as it shows.
  const seen = new Set();
  let running = false;
  function tick() {
    if (!seen.size) {
      running = false;
      return;
    }
    show();
    if (still) setTimeout(tick, 1000);
    else requestAnimationFrame(tick);
  }
  const watch = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) seen.add(entry.target);
      else seen.delete(entry.target);
    }
    if (seen.size && !running) {
      running = true;
      tick();
    }
  });

  show();
  for (const c of counters) watch.observe(c.el);
})();
