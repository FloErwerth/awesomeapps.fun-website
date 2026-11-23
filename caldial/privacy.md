---
layout: default
title: Privacy Policy – CalDial
description: "Which data the app CalDial processes, why, and what rights you have."
permalink: /caldial/privacy/
lang: en
---

# Privacy Policy for the app “CalDial”

Last updated: 23 November 2026 · [Deutsche Fassung]({{ site.baseurl }}/caldial/datenschutz/)

This is a translation. If the versions differ, the [German version]({{ site.baseurl }}/caldial/datenschutz/) applies.

This policy tells you which data the app “CalDial” (iOS and Android) processes, why, on which legal basis, and what rights you have. CalDial used to be called “Grammgenau”.

## 1. Controller

Florian Erwerth<br>
{{ site.address }}<br>
E-mail: {{ site.email }}

There is no data protection officer. The law does not require one.

## 2. Overview

- You need **no account**. There is no name, no e-mail and no password.
- The app **stores your entries on your device** (body data, goal, weigh-ins, food, workouts). We have no server where they are kept.
- The app can **read data from Apple Health or Health Connect** if you allow it. This data stays on your device (section 4).
- The app measures **usage only with your consent**, and never your values (section 6).
- **Voice control** sends the text of your sentence to an AI (section 7). Not every version of the app has it.
- In the **test version** you can send us feedback with a screenshot (section 10).
- The app shows **no ads** and does not track you across apps.

## 3. Data on your device

The app stores on your device:

- what you enter at the start and in your profile: sex, date of birth, height, goal, activity, macros,
- your entries: weigh-ins, calories eaten, steps, workouts and planned workouts, breaks, answers in the weekly check-in,
- data you take over from Apple Health, Health Connect, Wahoo or Polar (sections 4 and 5), including, if you allow it, the start of your period,
- settings, for example your reminders and your answers about usage measurement and voice control,
- random identifiers for usage measurement and voice control (sections 6 and 7),
- the access keys for Wahoo and Polar, in the protected storage of your device,
- a random RevenueCat user ID and the state of your subscription (section 8),
- downloaded app updates (section 9).

**Purpose:** The app works out your daily target from this data and shows you your progress.

**Legal basis:** Art. 6(1)(b) GDPR (providing the app you want to use). For health data (weight, workouts, period), your explicit consent (Art. 9(2)(a) GDPR), which you give when you enter it or allow it to be read. Storing it on your device is strictly necessary for the app to work (Section 25(2) no. 2 TDDDG).

**Deleting:** In the app under Profil → “Datenschutz und Daten” → “Alle Daten löschen”. This deletes all of the app's data on this device. What is in Apple Health or Health Connect stays there. Deleting the app also deletes its data.

**Backups:** If you back up your device with iCloud (Apple) or Google's backup, the backup may contain the app's data. You set this up in your device settings. Apple and Google are responsible for it.

## 4. Apple Health and Health Connect

If you allow it, the app reads from **Apple Health** (iOS) or **Health Connect** (Android): weight, height, workouts (with calories, distance and power), steps, calories eaten and, if you allow it separately, the start of your period. On iOS also sex and date of birth. The app also reads in the background, so new workouts and weigh-ins arrive without opening the app.

**The app writes nothing to Apple Health or Health Connect.**

**The data stays on your device.** The app sends no values from Apple Health or Health Connect to us or anyone else. It does not use them for advertising and does not pass them on.

**Purpose:** Your daily target gets closer to what you really need, and you have to enter less by hand.

**Legal basis:** your explicit consent (Art. 9(2)(a) and Art. 6(1)(a) GDPR), which you give in Apple's or Google's dialog. You can withdraw it there at any time for each kind of data: iOS Settings → Health → Data Access &amp; Devices → CalDial; Android Health Connect → App permissions → CalDial.

## 5. Wahoo and Polar

You can connect the app to your **Wahoo** or **Polar** account. The app then loads your workouts from there. You sign in in the browser at Wahoo or Polar. The app receives an access key and stores it protected on your device. With Polar, the app registers your Polar user ID so that Polar releases the workouts. A small service at Cloudflare (section 7) exchanges Polar's sign-in code for the key. It stores nothing.

**Legal basis:** Art. 6(1)(b) GDPR (the connection you set up), for health data Art. 9(2)(a) GDPR.

Wahoo Fitness (USA) and Polar Electro Oy (Finland) are responsible for their own services. Their privacy policies apply. You can disconnect at any time in the app.

## 6. Usage measurement (PostHog)

**Only with your consent.** At the start the app asks whether it may measure usage. You can change this at any time: Profil → “Datenschutz und Daten” → “Nutzung messen”. Without consent the app sends nothing.

**Which data:** what you do in the app, for example “weigh-in entered” or “screen opened”, with fixed values such as “by hand” or “from Health”; also time, app version, operating system and a random identifier. The IP address arrives with the connection. The app **never sends your values**: no weight, no calories, no data from Health. It sends no device model, no language, no time zone and no location. It does not record screens.

**Purpose:** finding bugs and making the app better.

**Legal basis:** your consent (Art. 6(1)(a) GDPR and Section 25(1) TDDDG). You can withdraw at any time with the switch above. If you consent again later, a new identifier is created.

**Recipient:** PostHog Inc., 2261 Market Street #4008, San Francisco, CA 94114, USA, as processor. The data is stored on servers in the EU (Frankfurt). Access from the USA is possible. The EU Commission's Standard Contractual Clauses apply to it (Art. 46(2)(c) GDPR).

## 7. Voice control (Anthropic, Cloudflare)

In some versions of the app you can control CalDial with your voice or a sentence, for example “Log 80 kilos”.

**Recognising speech:** Your device turns your voice into text, on the device itself where possible. If the iPhone cannot do this on the device, the recording goes to Apple. On Android the recording goes to Google only if you explicitly allow it. Otherwise you type the sentence. Apple and Google are responsible for this. The app itself sends no recording.

**Which data:** the text of your sentence, date and time, the screen you are on, up to 20 earlier sentences of the same conversation with what the app made of them, and a random identifier of the device. The app does not send your stored data. What you say may itself contain values, for example a weight.

**Purpose:** The AI understands your sentence and suggests to the app what to enter. You confirm every suggestion yourself.

**Legal basis:** your consent (Art. 6(1)(a) GDPR, for health information Art. 9(2)(a) GDPR). You give it when you set up voice control. You can stop using it at any time.

**Recipients:**

- **Cloudflare, Inc.**, 101 Townsend Street, San Francisco, CA 94107, USA, as processor. Our service at Cloudflare passes the sentence on to the AI. It does not store the sentence and does not write it to logs. It counts, in the EU, how much each identifier uses per day. Cloudflare is certified under the EU-US Data Privacy Framework (Art. 45 GDPR).
- **Anthropic, PBC**, 548 Market Street, PMB 90375, San Francisco, CA 94104, USA (AI “Claude”), as processor. Transfer to the USA on the basis of the EU Commission's Standard Contractual Clauses (Art. 46(2)(c) GDPR).

## 8. Subscription (RevenueCat, Apple, Google)

**Apple** (App Store) or **Google** (Google Play) handle the subscription. We see no payment data. Apple and Google are responsible for the payment.

So that the app knows whether you have a subscription, we use **RevenueCat, Inc.**, 1032 E Brandon Blvd #3003, Brandon, FL 33511, USA, as processor.

**Which data:** a random RevenueCat user ID, the receipt (product, time, transaction ID), device type, operating system, app version, IP address, country and currency.

**Legal basis:** Art. 6(1)(b) GDPR (performing the subscription). Keeping records for tax purposes: Art. 6(1)(c) GDPR.

**Transfer to the USA:** on the basis of the EU Commission's Standard Contractual Clauses (Art. 46(2)(c) GDPR).

## 9. App updates (Expo)

The app loads small updates directly through **EAS Update** by 650 Industries, Inc. (Expo), USA, as processor. At launch the app asks whether there is an update.

**Which data:** IP address, operating system, app version, update channel and random technical identifiers.

**Legal basis:** Art. 6(1)(f) GDPR. Our legitimate interest is to fix bugs quickly.

**Transfer to the USA:** 650 Industries, Inc. is certified under the EU-US Data Privacy Framework (Art. 45 GDPR).

## 10. Feedback in the test version {#feedback}

Only in the **test version** (TestFlight and Google Play testing) can you send us feedback: under Profil → “Feedback geben” or after a screenshot. The app sends nothing before you tap “Senden”.

**Which data:**

- the kind (bug, improvement, idea) and your text,
- if you send it after a screenshot: an **image of the screen**. It can show anything that was visible, including health data such as weight or calories,
- app version, operating system and the screen you were on,
- the IP address, with the connection.

The app sends no name, no e-mail and no identifier of your device.

**Purpose:** finding bugs and improving the app before it is released to everyone.

**Legal basis:** your consent (Art. 6(1)(a) GDPR), for health data in the text or image your explicit consent (Art. 9(2)(a) GDPR). You give it when you send the feedback. You can withdraw it at any time by e-mail to {{ site.email }}. We then delete your feedback as far as we can match it to you. Please send us the approximate time and the text.

**How it works:**

1. Our service at **Cloudflare** (section 7) stores the feedback in storage in the EU (Cloudflare R2, EU jurisdiction).
2. Every morning our service sends the new feedback to **Anthropic** (AI “Claude”, section 7). Claude reads the text and image, assigns the feedback to a topic, gives it a priority and summarises everything. Anthropic does not use the data for training.
3. Our service writes the feedback and its classification into a spreadsheet and puts the image in a folder at **Google Workspace**. It then sends us an e-mail with the summary. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, as processor. Google may transfer data to the USA. Google LLC is certified under the EU-US Data Privacy Framework (Art. 45 GDPR). The spreadsheet and the folder are not shared.

**Retention:** 30 days at Cloudflare, 90 days in the spreadsheet, folder and e-mail. After that we delete the feedback.

## 11. Reminders, ratings and links

The app schedules **reminders** on your device. It uses no push service and sends no data for them.

**Ratings:** If the app asks for a rating, Apple or Google shows the window for it. We do not learn how you rate.

**Links** to this website open in the browser. Section 12 then applies.

## 12. App stores and this website

**App stores:** Apple and Google are responsible for downloading the app.

**This website**, with the privacy policy and legal notice, is hosted on GitHub Pages by GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. When you visit, GitHub processes your IP address and technical data, for example for security. Legal basis: Art. 6(1)(f) GDPR. Our legitimate interest is to provide this information free of charge. GitHub is certified under the EU-US Data Privacy Framework (Art. 45 GDPR). More: [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## 13. How long we keep data

- **Data on your device:** until you delete it in the app or delete the app.
- **Usage measurement at PostHog:** at most 2 years. After you withdraw, the app sends nothing more.
- **Voice control:** Cloudflare does not store the sentence. We use the count per identifier and day only for the daily limit.
- **Feedback:** 30 days at Cloudflare, 90 days at Google Workspace (section 10).
- **Purchase data:** is held by Apple, Google and RevenueCat. We keep tax records as long as the law requires (Section 147 AO).

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
> Where we process data on the basis of Art. 6(1)(f) GDPR (legitimate interest), you can object at any time on grounds relating to your particular situation. Write to {{ site.email }}.

For any request, send an e-mail to {{ site.email }}. Most data is only on your device, where you can see and delete it yourself. Since you have no account, we can only find data at PostHog, Cloudflare or Google with your help, for example the time and text of a feedback.

**Complaint:** You can complain to a data protection supervisory authority (Art. 77 GDPR). The authority responsible for us is the Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, Germany, [www.lda.bayern.de](https://www.lda.bayern.de).

## 15. Obligation to provide data

You do not have to provide any data. Without weight, height, age and sex, however, the app cannot work out a daily target.

## 16. No automated decisions

The app works out your daily target from what you enter. It is a suggestion for you, not a decision with legal effect within the meaning of Art. 22 GDPR.

## 17. Children

The app is not intended for people under 16.

## 18. Changes

We update this policy when the app or the law changes. The version on this page applies.
