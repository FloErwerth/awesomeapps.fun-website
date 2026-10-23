---
layout: default
title: Privacy Policy – PUBG Stream Report
permalink: /pubg-stream-report/privacy/
lang: en
---

# Privacy Policy for the app “PUBG Stream Report”

Last updated: 14 October 2026 · [Deutsche Fassung]({{ site.baseurl }}/pubg-stream-report/datenschutz/)

This is a translation. If the versions differ, the [German version]({{ site.baseurl }}/pubg-stream-report/datenschutz/) applies.

This policy tells you which data the app “PUBG Stream Report” (iOS and Android), the website pubgstreamreport.com and this website process, why, on which legal basis, and what rights you have.

## 1. Controller

Florian Erwerth<br>
{{ site.address }}<br>
Email: {{ site.email }}

There is no data protection officer. The law does not require one.

## 2. Overview

- You do not need an account with name, email or password. The app creates an **anonymous account** on first launch.
- The app stores the **PUBG names** you search for. If PUBG finds a name, it can appear to other users as a **name suggestion**, without any link to you (see section 3).
- The app shows **ads** from Google AdMob. It uses your device's advertising ID only with your consent.
- A **one-time purchase** removes the ads.
- The app sends **anonymous usage events** to Aptabase in the EU, without PUBG names and without an identifier (see section 9).
- For searches, the app uses **public data** from the PUBG API and from Twitch. This data also concerns other players and streamers (see section 5).
- With a **share link** you can pass on a scene. The website pubgstreamreport.com shows it without cookies and without an account. The Twitch video only loads when you click “Load video” (see section 11).

## 3. Anonymous account and searches (Supabase)

**Data:** a random account ID, a sign-in token, the PUBG names you search for (the last 10 in “recent searches”), your search jobs (PUBG name, time window, time, status), the encounters you hide, and technical data such as IP address and time of the request.

**Note:** You can search for any PUBG name, including another person's name. We cannot check who owns a name.

**Purpose:** The app needs this data to run your searches and to show your recent searches and results.

**Legal basis:** Art. 6(1)(b) GDPR (providing the app you want to use).

**Recipient:** Supabase Pte. Ltd., 65 Chulia Street #38-02/03, OCBC Centre, Singapore 049513, as processor. The database is located in the EU (Paris, France). Access from the USA and Singapore is possible, based on the EU Standard Contractual Clauses (Art. 46(2)(c) GDPR).

### Name suggestions

When you type a PUBG name in the app, it shows up to 5 matching PUBG names as **name suggestions**, starting from 3 characters.

**Data:** only the PUBG name. It comes from two sources:

- PUBG names that a user searched for and that PUBG found. A name you search for can therefore also appear to other users as a name suggestion.
- PUBG names of streamers, once we have confirmed the link between Twitch channel and PUBG account (see section 5).

**What is not shared:** A name suggestion contains no account, no time and no Twitch channel. Other users therefore do not see who searched for the name, when someone searched, or whether the name belongs to a streamer.

**Purpose:** The PUBG API only finds the exact name, and upper and lower case matter. Name suggestions show the name in the correct spelling, so fewer searches end without a result.

**Legal basis:** Art. 6(1)(f) GDPR. Our legitimate interest, and that of our users, is that a search finds the intended player. PUBG names are public: PUBG shows them in matches and in the public PUBG API. We only show names that PUBG found, and at most 5 at a time.

**Recipients:** other users of the app.

**Deletion:** If you delete a name from “recent searches”, it stays a name suggestion. If you want a name to no longer appear as a name suggestion, write to {{ site.email }} (see section 14). Retention: see section 13.

## 4. Data on your device

The app stores on your device:

- the sign-in token of the anonymous account,
- the time of your last visit per searched name,
- your choice in the ad consent form (Google),
- a random RevenueCat user ID and your purchase status,
- downloaded app updates.

This is strictly necessary for the app to work (§ 25(2) no. 2 TDDDG). The advertising ID is read for ads only with your consent (§ 25(1) TDDDG, see section 6).

## 5. Encounter search and data about streamers and other players

### How the search works

Our service runs on a server in Germany (netcup GmbH, Emmy-Noether-Straße 10, 76131 Karlsruhe, Germany, as processor) or on a computer owned by the controller in Germany.

When you search for a PUBG name, the service asks the public **PUBG API** for that name's matches of the last 14 days. It sends the PUBG name to **KRAFTON, Inc.**, 231 Teheran-ro, Gangnam-gu, Seoul 06142, South Korea. KRAFTON is a controller in its own right. South Korea is covered by an EU adequacy decision (Art. 45 GDPR).

The service then asks the **Twitch API** of Twitch Interactive, Inc., USA, for matching streams and videos. It sends no data about you to Twitch, only channel names and time windows.

### Data about other people (Art. 14 GDPR)

**Other PUBG players:** from public match data of the PUBG API: PUBG name, account ID, team, kills and knocks with weapon, distance and time.

**Twitch streamers:** from public Twitch data:

- channel name, times of PUBG live streams, videos (VODs) and whether they are available,
- the **streamer's PUBG name**, read by text recognition (OCR) from the watermark that PUBG shows in the game image, using Twitch's public live stream preview images,
- the link between Twitch channel and PUBG account.

**Purpose:** We show users the moments when they appeared in a stream, with a link to that point in the video. We also show the PUBG name of a streamer with a confirmed link as a name suggestion, without the Twitch channel and without any hint that it belongs to a streamer (see section 3).

**Legal basis:** Art. 6(1)(f) GDPR. Our legitimate interest, and that of our users, is finding these moments. The data is public: streamers broadcast their game image publicly, and the PUBG API is a public interface.

**Profiling:** We do not analyse interests or behaviour. We only link channel and PUBG account so we can match streams to matches. There is no automated decision-making within the meaning of Art. 22 GDPR.

**Retention:** see section 13.

> **Objection:** If you are a player or streamer and do not want your data to be processed or to appear in results, write to {{ site.email }} (see section 14).

## 6. Ads (Google AdMob)

The app shows a banner from **Google AdMob** on the results screen. Provider: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.

**Consent:** On first launch the app asks for your consent with Google's consent form (EU and EEA). On iOS, Apple also asks whether the app may track you across apps (App Tracking Transparency).

**With consent**, Google uses your device's advertising ID (IDFA on iOS, advertising ID on Android), IP address, device type, operating system, app version, language and information about which ads you see and tap. Google uses this for personalised ads and ad measurement. Legal basis: Art. 6(1)(a) GDPR and § 25(1) TDDDG.

**Without consent**, Google shows at most “limited ads”: without advertising ID, without storing anything on your device, and not personalised. Google still processes, for example, IP address and device information for delivery, billing and fraud prevention. Legal basis: Art. 6(1)(f) GDPR. Our legitimate interest is funding the app with ads.

**Responsibility:** We may be joint controllers with Google for collecting the data in the app (Art. 26 GDPR). Google alone is responsible for what it does with the data afterwards.

**Withdrawal:** You can withdraw your consent in the app at any time: start screen → “Datenschutz-Einstellungen” (privacy settings). On iOS you can also turn off tracking under Settings → Privacy & Security → Tracking.

**Transfer to the USA:** Google may transfer data to the USA. Google LLC is certified under the EU-US Data Privacy Framework (Art. 45 GDPR).

More: [Google Privacy Policy](https://policies.google.com/privacy) and [How Google uses information from apps](https://policies.google.com/technologies/partner-sites).

## 7. “Remove ads” purchase (RevenueCat, Apple, Google)

**Apple** (App Store) or **Google** (Google Play) process the purchase. We do not see payment data such as credit cards. Apple and Google are responsible for payments themselves; their privacy policies apply.

To know that you bought it, the app uses **RevenueCat, Inc.**, 1032 E Brandon Blvd #3003, Brandon, FL 33511, USA, as processor.

**Data:** a random RevenueCat user ID, purchase receipt (product, time, transaction ID), device type, operating system, app version, IP address, country and currency.

**Legal basis:** Art. 6(1)(b) GDPR (performing the purchase). Retention for tax purposes: Art. 6(1)(c) GDPR.

**Transfer to the USA:** based on the EU Standard Contractual Clauses (Art. 46(2)(c) GDPR).

## 8. App updates (Expo)

The app downloads small updates via **EAS Update** from 650 Industries, Inc. (Expo), USA, as processor. On launch the app checks whether an update exists.

**Data:** IP address, operating system, app version, update channel and random technical identifiers.

**Legal basis:** Art. 6(1)(f) GDPR. Our legitimate interest is fixing bugs quickly.

**Transfer to the USA:** 650 Industries, Inc. is certified under the EU-US Data Privacy Framework (Art. 45 GDPR).

## 9. Usage statistics (Aptabase)

The app sends anonymous **usage events** to **Aptabase**. A usage event says, for example, “app opened”, “search started” or “scene opened”. This shows us which features the app needs and where errors happen. Provider: Technov Solutions SRL, Str. Fabricii, Nr. 47, Bucharest, Romania, as processor.

**Data:** the name of the usage event with fixed values (for example “time window 3 days” or “reason: offline”), time, a random session ID, operating system and version, app version, build number and SDK version. Your IP address is also transmitted by the connection.

**No PUBG names, no streamers, no account ID, no advertising ID:** The app sends nothing that can link a usage event to you or to your anonymous account.

**No persistent identifier:** The app stores nothing on your device for Aptabase. The session ID only lives in memory. After one hour without use, or when the app restarts, a new one is created. Aptabase uses the IP address and device type only briefly, to determine the country or region and to derive an identifier for one day. This daily identifier is a hash with a random value that Aptabase deletes within 48 hours. Aptabase does not store the IP address.

**Legal basis:** Art. 6(1)(f) GDPR. Our legitimate interest is improving the app and finding errors. Because the data is anonymous and nothing is stored on your device, the app does not ask for consent.

**Location:** The data stays in the EU (servers in Germany). Aptabase's sub-processors are Tinybird Data S.L. (Spain) and Amazon Web Services EMEA SARL (Luxembourg), processing in the EU.

**Retention:** see section 13.

More: [Aptabase Privacy Policy](https://aptabase.com/legal/privacy).

## 10. Links to Twitch

When you tap a moment, the app opens the video in the Twitch app or in the browser. From then on, the [Twitch Privacy Notice](https://www.twitch.tv/p/legal/privacy-notice/) applies. The app itself sends no data about you to Twitch.

## 11. Share links and the website pubgstreamreport.com

### Share link

In the app you can share an encounter. The app creates a **share link** for it (`https://pubgstreamreport.com/s/` with a code) and passes it to your device's share menu. The share text normally contains this link. If the app cannot create a share link (for example without internet), the text contains the link to the scene on Twitch instead. Anyone who opens that link goes directly to Twitch (see section 10). You decide whom you send the link to.

**Data:** The link only contains a random 10-character code, no data about you. At Supabase (see section 3) we store the code, the encounter and the time the link was created. We do not store who shared it: the code belongs to the encounter, not to your account. Anyone who shares the same encounter gets the same link.

**What the link shows:** Anyone who opens the link sees the encounter: kill or knock, the player's PUBG name, the streamer's name, weapon, distance, time and a link to the scene on Twitch. They see no account and not who shared it.

**Purpose:** You can show a scene to others, including people without the app.

**Legal basis:** Art. 6(1)(f) GDPR. Our legitimate interest, and that of our users, is passing on scenes they found. The data about streamers and other players comes from public streams and matches (see section 5). The code is random so that nobody can retrieve all encounters through share links.

**Opening in the app:** If you open a share link with the app, it loads the encounter with your anonymous account from Supabase (see section 3) and opens the scene on Twitch (see section 10).

**Retention:** The share link works as long as the encounter is stored. When we delete the encounter, we also delete its share link (see section 13).

### The website pubgstreamreport.com

If someone opens a share link without the app, the website pubgstreamreport.com shows the scene. The website has a start page and the share page.

**Hosting:** The website runs on our server in Germany at netcup GmbH (see section 5), as processor. When you visit it, your browser sends technically necessary data such as IP address, time, requested address and browser type. The web server writes no access logs, so it does not store this data. The server itself fetches the certificate for the encrypted connection (HTTPS) from Let's Encrypt. It sends no data about visitors for this.

**No cookies, no account:** The website sets no cookies, stores no session and creates no account. It shows no ads, sends no usage events and loads no fonts, images or scripts from other providers. The only exception is the Twitch player, and only after your click (see below).

**Supabase:** The share page loads the encounter for the code directly from Supabase (see section 3), with a public key and without an account. As with the app, Supabase receives your IP address and technical data of the request.

**Legal basis:** Art. 6(1)(f) GDPR. Our legitimate interest is showing shared scenes without the app as well.

### Twitch video (only after a click)

The share page first shows only our own placeholder with the button “Load video”. Until then it loads nothing from Twitch. Only after your click does it load the Twitch player (player.twitch.tv). Provider: Twitch Interactive, Inc., USA.

**Data:** Twitch then receives data such as your IP address, browser information, the address of our page and which video you watch. Twitch sets cookies in your browser.

**Legal basis:** your consent by clicking “Load video” (Art. 6(1)(a) GDPR and § 25(1) TDDDG). The page does not remember the click. **Withdrawal:** If you reload or leave the page, the player is gone and no further data goes to Twitch. On your next visit you see the placeholder again. You can delete Twitch cookies in your browser.

**Responsibility:** We may be joint controllers with Twitch for embedding the player (Art. 26 GDPR). Twitch alone is responsible for what it does with the data afterwards.

**Transfer to the USA:** Twitch may transfer data to the USA. The Twitch Privacy Notice explains how Twitch safeguards this.

The link “Open scene on Twitch” leads directly to twitch.tv. From then on, the Twitch Privacy Notice applies.

More: [Twitch Privacy Notice](https://www.twitch.tv/p/legal/privacy-notice/).

## 12. App stores and this website

**App stores:** Apple and Google are responsible for downloading the app.

**This website** with the privacy policy and legal notice is hosted on GitHub Pages by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you visit it, GitHub processes your IP address and technical data, for example for security. Legal basis: Art. 6(1)(f) GDPR. Our legitimate interest is providing this information free of charge. GitHub is certified under the EU-US Data Privacy Framework (Art. 45 GDPR). More: [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## 13. How long we keep data

- **Account, search jobs, recent searches and hidden encounters:** until you ask us to delete them. If you delete the app, you lose the anonymous account, and we can no longer link it to you.
- **Name suggestions:** as long as there is a search that found the name, or a confirmed link with this name. A name drops out when a later search for it ends without a result, or when the PUBG account has a newer name. Deleting a name from “recent searches” does not remove a name suggestion.
- **Match data from the PUBG API:** 14 days.
- **Times when we checked live streams:** 14 days.
- **Found encounters, live streams and links between Twitch channel and PUBG account:** until an objection or until we no longer need them.
- **Share links:** as long as the encounter is stored. When we delete the encounter, we also delete its share link.
- **Technical logs at Supabase:** a few days, depending on the plan.
- **Service log:** overwritten continuously once it reaches a fixed size.
- **Visits to the website pubgstreamreport.com:** not stored (no access logs).
- **Usage events at Aptabase:** at most 5 years. The daily identifier stops working within 48 hours, because Aptabase deletes the random value behind it.
- **Purchase data:** held by Apple, Google and RevenueCat. We keep tax records as long as the law requires (§ 147 AO).

## 14. Your rights

You have the right to:

- **access** your data (Art. 15 GDPR)
- **rectification** (Art. 16 GDPR)
- **erasure** (Art. 17 GDPR)
- **restriction** of processing (Art. 18 GDPR)
- **data portability** (Art. 20 GDPR)
- **withdraw** consent at any time, with effect for the future (Art. 7(3) GDPR)

> **Your right to object (Art. 21 GDPR)**
>
> Where we process data based on Art. 6(1)(f) GDPR (legitimate interest), you can object at any time on grounds relating to your particular situation. We will then stop processing this data unless we have compelling legitimate grounds that override your interests. This applies in particular to data about streamers and other players (section 5). Write to {{ site.email }}.

For all requests, email {{ site.email }}. Because your account is anonymous, please send us the PUBG names you searched for and roughly when, so we can find your account.

**Complaints:** You can lodge a complaint with a data protection supervisory authority (Art. 77 GDPR). Ours is the Bavarian Data Protection Authority (Bayerisches Landesamt für Datenschutzaufsicht, BayLDA), Promenade 18, 91522 Ansbach, Germany, [www.lda.bayern.de](https://www.lda.bayern.de).

## 15. Providing data

You do not have to provide any data. Without a PUBG name, however, the app cannot search.

## 16. Children

The app is not directed at people under 18.

## 17. Changes

We update this policy when the app or the law changes. The version on this page applies.
