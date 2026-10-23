---
layout: default
title: Datenschutzerklärung – PUBG Stream Report
permalink: /pubg-stream-report/datenschutz/
lang: de
---

# Datenschutzerklärung für die App „PUBG Stream Report“

Stand: 14. Oktober 2026 · [English version]({{ site.baseurl }}/pubg-stream-report/privacy/)

Diese Erklärung sagt dir, welche Daten die App „PUBG Stream Report“ (iOS und Android), die Website pubgstreamreport.com und diese Website verarbeiten, warum, auf welcher Rechtsgrundlage und welche Rechte du hast.

## 1. Verantwortlicher

Florian Erwerth<br>
{{ site.address }}<br>
E-Mail: {{ site.email }}

Einen Datenschutzbeauftragten gibt es nicht. Er ist gesetzlich nicht vorgeschrieben.

## 2. Überblick

- Du brauchst kein Konto mit Name, E-Mail oder Passwort. Die App legt beim ersten Start ein **anonymes Konto** an.
- Die App speichert die **PUBG-Namen**, nach denen du suchst. Findet PUBG einen Namen, kann er anderen Nutzern als **Namensvorschlag** erscheinen, ohne Bezug zu dir (siehe Abschnitt 3).
- Die App zeigt **Werbung** von Google AdMob. Die Werbe-ID deines Geräts nutzt sie nur mit deiner Einwilligung.
- Mit einem **einmaligen Kauf** kannst du die Werbung entfernen.
- Die App sendet **anonyme Nutzungsereignisse** an Aptabase in der EU, ohne PUBG-Namen und ohne Kennung (siehe Abschnitt 9).
- Für die Suche nutzt die App **öffentliche Daten** aus der PUBG API und von Twitch. Diese Daten betreffen auch andere Spieler und Streamer (siehe Abschnitt 5).
- Mit einem **Teilen-Link** kannst du eine Szene weitergeben. Die Website pubgstreamreport.com zeigt sie ohne Cookies und ohne Konto. Das Video von Twitch lädt erst, wenn du auf „Video laden“ klickst (siehe Abschnitt 11).

## 3. Anonymes Konto und Suchen (Supabase)

**Welche Daten:** eine zufällige Konto-ID, ein Anmelde-Token, die PUBG-Namen, nach denen du suchst (in der Liste „Letzte Suchanfragen“ die letzten 10), deine Suchaufträge (PUBG-Name, Zeitraum, Zeitpunkt, Stand), die Begegnungen, die du ausblendest, sowie technische Daten wie IP-Adresse und Zeitpunkt der Anfrage.

**Hinweis:** Du kannst nach jedem PUBG-Namen suchen, auch nach dem Namen einer anderen Person. Wir können nicht prüfen, wem ein Name gehört.

**Zweck:** Die App braucht diese Daten, damit sie deine Suchen ausführen und dir deine letzten Suchen und Ergebnisse zeigen kann.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Bereitstellung der App, die du nutzen willst).

**Empfänger:** Supabase Pte. Ltd., 65 Chulia Street #38-02/03, OCBC Centre, Singapur 049513, als Auftragsverarbeiter. Die Datenbank steht in der EU (Paris, Frankreich). Ein Zugriff aus den USA und aus Singapur ist möglich. Dafür gelten die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).

### Namensvorschläge

Wenn du in der App einen PUBG-Namen tippst, zeigt sie dir ab 3 Zeichen bis zu 5 passende PUBG-Namen als **Namensvorschläge**.

**Welche Daten:** nur der PUBG-Name. Er stammt aus zwei Quellen:

- PUBG-Namen, nach denen ein Nutzer gesucht hat und die PUBG gefunden hat. Auch ein Name, nach dem du suchst, kann so anderen Nutzern als Namensvorschlag erscheinen.
- PUBG-Namen von Streamern, wenn wir die Zuordnung von Twitch-Kanal zu PUBG-Konto bestätigt haben (siehe Abschnitt 5).

**Was nicht geteilt wird:** Ein Namensvorschlag enthält kein Konto, keinen Zeitpunkt und keinen Twitch-Kanal. Andere Nutzer sehen also nicht, wer nach dem Namen gesucht hat, wann jemand gesucht hat und ob der Name zu einem Streamer gehört.

**Zweck:** Die PUBG API findet nur den genauen Namen, und Groß- und Kleinschreibung zählt. Namensvorschläge zeigen den Namen in der richtigen Schreibweise, damit weniger Suchen ohne Treffer enden.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse und das unserer Nutzer ist, dass eine Suche den gemeinten Spieler findet. PUBG-Namen sind öffentlich: PUBG zeigt sie in Matches und in der öffentlichen PUBG API. Wir zeigen nur Namen, die PUBG gefunden hat, und höchstens 5 auf einmal.

**Empfänger:** andere Nutzer der App.

**Löschen:** Wenn du einen Namen aus „Letzte Suchanfragen“ löschst, bleibt er ein Namensvorschlag. Soll ein Name nicht mehr als Namensvorschlag erscheinen, schreib uns an {{ site.email }} (siehe Abschnitt 14). Speicherdauer: siehe Abschnitt 13.

## 4. Daten auf deinem Gerät

Die App speichert auf deinem Gerät:

- das Anmelde-Token des anonymen Kontos,
- den Zeitpunkt deines letzten Besuchs pro gesuchtem Namen,
- deine Entscheidung zur Werbe-Einwilligung (Formular von Google),
- eine zufällige Nutzer-ID von RevenueCat und den Stand deines Kaufs,
- heruntergeladene App-Updates.

Das ist für die Funktion der App unbedingt nötig (§ 25 Abs. 2 Nr. 2 TDDDG). Das Auslesen der Werbe-ID für Werbung geschieht nur mit deiner Einwilligung (§ 25 Abs. 1 TDDDG, siehe Abschnitt 6).

## 5. Suche nach Begegnungen und Daten über Streamer und andere Spieler

### So funktioniert die Suche

Unser Dienst läuft auf einem Server in Deutschland (netcup GmbH, Emmy-Noether-Straße 10, 76131 Karlsruhe, als Auftragsverarbeiter) oder auf einem eigenen Computer des Verantwortlichen in Deutschland.

Wenn du einen PUBG-Namen suchst, fragt der Dienst die öffentliche **PUBG API** nach den Matches dieses Namens der letzten 14 Tage. Dazu sendet er den PUBG-Namen an **KRAFTON, Inc.**, 231 Teheran-ro, Gangnam-gu, Seoul 06142, Südkorea. KRAFTON ist dafür selbst verantwortlich. Für Südkorea gibt es einen Angemessenheitsbeschluss der EU-Kommission (Art. 45 DSGVO).

Dann fragt der Dienst die **Twitch API** von Twitch Interactive, Inc., USA, nach passenden Streams und Videos. Dabei sendet er keine Daten über dich an Twitch, nur Namen von Kanälen und Zeiträume.

### Welche Daten über andere Personen wir verarbeiten (Art. 14 DSGVO)

**Andere PUBG-Spieler:** aus den öffentlichen Match-Daten der PUBG API: PUBG-Name, Konto-ID, Team, Kills und Knocks mit Waffe, Entfernung und Zeitpunkt.

**Twitch-Streamer:** aus öffentlichen Daten von Twitch:

- Kanalname, Zeitpunkte von PUBG-Livestreams, Videos (VODs) und deren Verfügbarkeit,
- der **PUBG-Name des Streamers**. Den lesen wir per Texterkennung (OCR) aus dem Wasserzeichen, das PUBG im Spielbild zeigt. Dazu nutzen wir die öffentlichen Vorschaubilder der Livestreams von Twitch.
- die Zuordnung von Twitch-Kanal zu PUBG-Konto.

**Zweck:** Wir zeigen Nutzern die Momente, in denen sie in einem Stream zu sehen waren, mit einem Link zur passenden Stelle im Video. Den PUBG-Namen eines Streamers mit bestätigter Zuordnung zeigen wir außerdem als Namensvorschlag, ohne Twitch-Kanal und ohne Hinweis auf den Streamer (siehe Abschnitt 3).

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse und das unserer Nutzer ist, diese Momente zu finden. Die Daten sind öffentlich: Streamer zeigen ihr Spielbild selbst öffentlich, und die PUBG API ist eine öffentliche Schnittstelle.

**Profiling:** Wir werten keine Interessen oder Verhaltensweisen aus. Wir verknüpfen nur Kanal und PUBG-Konto, damit wir Streams einem Match zuordnen können. Es gibt keine automatisierten Entscheidungen im Sinne von Art. 22 DSGVO.

**Speicherdauer:** siehe Abschnitt 13.

> **Widerspruch:** Wenn du als Spieler oder Streamer nicht möchtest, dass deine Daten verarbeitet werden oder in Ergebnissen erscheinen, schreib uns an {{ site.email }} (siehe Abschnitt 14).

## 6. Werbung (Google AdMob)

Die App zeigt auf der Ergebnis-Seite einen Werbebanner von **Google AdMob**. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.

**Einwilligung:** Beim ersten Start fragt die App mit dem Formular von Google nach deiner Einwilligung (in der EU und im EWR). Auf iOS fragt Apple zusätzlich, ob die App dich über Apps hinweg verfolgen darf (App Tracking Transparency).

**Mit Einwilligung** nutzt Google die Werbe-ID deines Geräts (IDFA auf iOS, Werbe-ID auf Android), IP-Adresse, Gerätetyp, Betriebssystem, App-Version, Spracheinstellung und Angaben dazu, welche Anzeigen du siehst und anklickst. Damit zeigt Google personalisierte Werbung und misst den Erfolg von Anzeigen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.

**Ohne Einwilligung** zeigt Google höchstens „eingeschränkte Werbung“ (Limited Ads): ohne Werbe-ID, ohne Speicherung auf deinem Gerät und nicht personalisiert. Dabei verarbeitet Google zum Beispiel IP-Adresse und Geräte-Infos für Auslieferung, Abrechnung und Schutz vor Betrug. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist, die App mit Werbung zu finanzieren.

**Verantwortung:** Für das Erheben der Daten in der App können wir gemeinsam mit Google verantwortlich sein (Art. 26 DSGVO). Für alles, was Google danach mit den Daten macht, ist Google allein verantwortlich.

**Widerruf:** Du kannst deine Einwilligung jederzeit in der App widerrufen: Startseite → „Datenschutz-Einstellungen“. Auf iOS kannst du Tracking auch unter Einstellungen → Datenschutz & Sicherheit → Tracking ausschalten.

**Übermittlung in die USA:** Google kann Daten in die USA übermitteln. Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO).

Mehr dazu: [Datenschutzerklärung von Google](https://policies.google.com/privacy) und [Wie Google Daten aus Apps nutzt](https://policies.google.com/technologies/partner-sites).

## 7. Kauf „Werbung entfernen“ (RevenueCat, Apple, Google)

Den Kauf wickeln **Apple** (App Store) oder **Google** (Google Play) ab. Wir sehen keine Zahlungsdaten wie Kreditkarten. Für die Zahlung sind Apple und Google selbst verantwortlich. Es gelten ihre Datenschutzerklärungen.

Damit die App weiß, dass du gekauft hast, nutzen wir **RevenueCat, Inc.**, 1032 E Brandon Blvd #3003, Brandon, FL 33511, USA, als Auftragsverarbeiter.

**Welche Daten:** eine zufällige Nutzer-ID von RevenueCat, Kaufbeleg (Produkt, Zeitpunkt, Transaktions-ID), Gerätetyp, Betriebssystem, App-Version, IP-Adresse, Land und Währung.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. b DSGVO (Erfüllung des Kaufs). Aufbewahrung für Steuerzwecke: Art. 6 Abs. 1 lit. c DSGVO.

**Übermittlung in die USA:** auf Grundlage der Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO).

## 8. App-Updates (Expo)

Die App lädt kleine Updates direkt über **EAS Update** von 650 Industries, Inc. (Expo), USA, als Auftragsverarbeiter. Beim Start fragt die App, ob es ein Update gibt.

**Welche Daten:** IP-Adresse, Betriebssystem, App-Version, Update-Kanal und zufällige technische Kennungen.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist, Fehler schnell zu beheben.

**Übermittlung in die USA:** 650 Industries, Inc. ist unter dem EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO).

## 9. Nutzungsstatistik (Aptabase)

Die App sendet anonyme **Nutzungsereignisse** an **Aptabase**. Ein Nutzungsereignis sagt zum Beispiel „App geöffnet“, „Suche gestartet“ oder „Szene geöffnet“. So sehen wir, welche Funktionen die App braucht und wo Fehler passieren. Anbieter ist Technov Solutions SRL, Str. Fabricii, Nr. 47, Bukarest, Rumänien, als Auftragsverarbeiter.

**Welche Daten:** der Name des Nutzungsereignisses mit festen Werten (zum Beispiel „Zeitraum 3 Tage“ oder „Grund: offline“), Zeitpunkt, eine zufällige Sitzungs-ID, Betriebssystem und Version, App-Version, Build-Nummer und Version des SDK. Dazu kommt die IP-Adresse durch die Verbindung.

**Keine PUBG-Namen, keine Streamer, keine Konto-ID, keine Werbe-ID:** Die App sendet nichts, womit man ein Nutzungsereignis mit dir oder deinem anonymen Konto verbinden kann.

**Keine dauerhafte Kennung:** Die App speichert für Aptabase nichts auf deinem Gerät. Die Sitzungs-ID lebt nur im Speicher. Nach einer Stunde ohne Nutzung oder nach einem Neustart der App entsteht eine neue. Aptabase nutzt IP-Adresse und Gerätetyp nur kurz, um das Land oder die Region zu bestimmen und eine Kennung für einen Tag zu bilden. Diese Tages-Kennung ist ein Hash mit einem Zufallswert, den Aptabase nach spätestens 48 Stunden löscht. Die IP-Adresse speichert Aptabase nicht.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist, die App zu verbessern und Fehler zu finden. Weil die Daten anonym sind und nichts auf deinem Gerät gespeichert wird, fragt die App nicht nach einer Einwilligung.

**Ort:** Die Daten bleiben in der EU (Server in Deutschland). Unterauftragsverarbeiter von Aptabase sind Tinybird Data S.L. (Spanien) und Amazon Web Services EMEA SARL (Luxemburg), mit Verarbeitung in der EU.

**Speicherdauer:** siehe Abschnitt 13.

Mehr dazu: [Datenschutzerklärung von Aptabase](https://aptabase.com/legal/privacy).

## 10. Links zu Twitch

Wenn du einen Moment antippst, öffnet die App das Video in der Twitch-App oder im Browser. Ab dann gilt die [Datenschutzerklärung von Twitch](https://www.twitch.tv/p/legal/privacy-notice/). Die App selbst sendet keine Daten über dich an Twitch.

## 11. Teilen-Links und die Website pubgstreamreport.com

### Teilen-Link

In der App kannst du eine Begegnung teilen. Die App erstellt dafür einen **Teilen-Link** (`https://pubgstreamreport.com/s/` mit einem Code) und gibt ihn an das Teilen-Menü deines Geräts. Der Text zum Teilen enthält normalerweise diesen Link. Kann die App keinen Teilen-Link erstellen (zum Beispiel ohne Internet), enthält der Text stattdessen den Link zur Szene bei Twitch. Wer diesen Link öffnet, kommt direkt zu Twitch (siehe Abschnitt 10). Wem du den Link schickst, entscheidest du.

**Welche Daten:** Der Link enthält nur einen zufälligen Code aus 10 Zeichen, keine Daten über dich. Bei Supabase (siehe Abschnitt 3) speichern wir den Code, die Begegnung und den Zeitpunkt, zu dem der Link entstanden ist. Wir speichern nicht, wer geteilt hat: Der Code hängt an der Begegnung, nicht an deinem Konto. Wer dieselbe Begegnung teilt, bekommt denselben Link.

**Was der Link zeigt:** Wer den Link öffnet, sieht die Begegnung: Kill oder Knock, den PUBG-Namen des Spielers, den Namen des Streamers, Waffe, Entfernung, Zeitpunkt und einen Link zur Szene bei Twitch. Er sieht kein Konto und nicht, wer geteilt hat.

**Zweck:** Du kannst eine Szene anderen zeigen, auch Personen ohne die App.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse und das unserer Nutzer ist, gefundene Szenen weiterzugeben. Die Daten über Streamer und andere Spieler stammen aus öffentlichen Streams und Matches (siehe Abschnitt 5). Der Code ist zufällig, damit niemand alle Begegnungen über Teilen-Links abrufen kann.

**Öffnen in der App:** Öffnest du einen Teilen-Link mit der App, lädt sie die Begegnung mit deinem anonymen Konto bei Supabase (siehe Abschnitt 3) und öffnet die Szene bei Twitch (siehe Abschnitt 10).

**Speicherdauer:** Der Teilen-Link gilt, solange die Begegnung gespeichert ist. Löschen wir die Begegnung, löschen wir ihren Teilen-Link mit (siehe Abschnitt 13).

### Die Website pubgstreamreport.com

Öffnet jemand einen Teilen-Link ohne die App, zeigt die Website pubgstreamreport.com die Szene. Die Website hat eine Startseite und die Teilen-Seite.

**Hosting:** Die Website liegt auf unserem Server in Deutschland bei der netcup GmbH (siehe Abschnitt 5), als Auftragsverarbeiter. Beim Aufruf sendet dein Browser technisch nötige Daten wie IP-Adresse, Zeitpunkt, aufgerufene Adresse und Browser-Typ. Der Webserver schreibt keine Zugriffs-Logs, er speichert diese Daten also nicht. Das Zertifikat für die verschlüsselte Verbindung (HTTPS) holt der Server selbst bei Let's Encrypt. Dabei sendet er keine Daten über Besucher.

**Keine Cookies, kein Konto:** Die Website setzt keine Cookies, speichert keine Sitzung und legt kein Konto an. Sie zeigt keine Werbung, sendet keine Nutzungsereignisse und lädt keine Schriften, Bilder oder Skripte von anderen Anbietern. Ausnahme ist der Player von Twitch, aber erst nach deinem Klick (siehe unten).

**Supabase:** Die Teilen-Seite lädt die Begegnung zum Code direkt bei Supabase (siehe Abschnitt 3), mit einem öffentlichen Schlüssel und ohne Konto. Supabase erhält dabei wie bei der App deine IP-Adresse und technische Daten der Anfrage.

**Rechtsgrundlage:** Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist, geteilte Szenen auch ohne die App zu zeigen.

### Video von Twitch (erst nach Klick)

Die Teilen-Seite zeigt zuerst nur einen eigenen Platzhalter mit dem Knopf „Video laden“. Bis dahin lädt sie nichts von Twitch. Erst nach deinem Klick lädt sie den Player von Twitch (player.twitch.tv). Anbieter ist Twitch Interactive, Inc., USA.

**Welche Daten:** Twitch erhält dann Daten wie deine IP-Adresse, Browser-Infos, die Adresse unserer Seite und welches Video du ansiehst. Twitch setzt Cookies in deinem Browser.

**Rechtsgrundlage:** deine Einwilligung durch den Klick auf „Video laden“ (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG). Die Seite merkt sich den Klick nicht. **Widerruf:** Lädst du die Seite neu oder verlässt du sie, ist der Player weg und es gehen keine weiteren Daten an Twitch. Beim nächsten Aufruf siehst du wieder den Platzhalter. Cookies von Twitch kannst du in deinem Browser löschen.

**Verantwortung:** Für das Einbinden des Players können wir gemeinsam mit Twitch verantwortlich sein (Art. 26 DSGVO). Für alles, was Twitch danach mit den Daten macht, ist Twitch allein verantwortlich.

**Übermittlung in die USA:** Twitch kann Daten in die USA übermitteln. Wie Twitch das absichert, steht in der Datenschutzerklärung von Twitch.

Der Link „Szene bei Twitch öffnen“ führt direkt zu twitch.tv. Ab dann gilt die Datenschutzerklärung von Twitch.

Mehr dazu: [Datenschutzerklärung von Twitch](https://www.twitch.tv/p/legal/privacy-notice/).

## 12. App Stores und diese Website

**App Stores:** Für den Download der App sind Apple und Google selbst verantwortlich.

**Diese Website** mit Datenschutzerklärung und Impressum liegt bei GitHub Pages von GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf verarbeitet GitHub deine IP-Adresse und technische Daten, zum Beispiel für die Sicherheit. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse ist, diese Informationen kostenlos bereitzustellen. GitHub ist unter dem EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO). Mehr dazu: [GitHub Privacy Statement](https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement).

## 13. Wie lange wir Daten speichern

- **Konto, Suchaufträge, letzte Suchen und ausgeblendete Begegnungen:** bis du die Löschung verlangst. Löschst du die App, verlierst du das anonyme Konto. Wir können es dir dann nicht mehr zuordnen.
- **Namensvorschläge:** solange es eine Suche gibt, die den Namen gefunden hat, oder eine bestätigte Zuordnung mit diesem Namen. Ein Name fällt weg, wenn eine spätere Suche nach ihm ohne Treffer endet oder das PUBG-Konto einen neueren Namen hat. Das Löschen aus „Letzte Suchanfragen“ entfernt keinen Namensvorschlag.
- **Match-Daten aus der PUBG API:** 14 Tage.
- **Zeitpunkte, zu denen wir Livestreams geprüft haben:** 14 Tage.
- **Gefundene Begegnungen, Livestreams und Zuordnungen von Twitch-Kanal zu PUBG-Konto:** bis zu einem Widerspruch oder bis wir sie nicht mehr brauchen.
- **Teilen-Links:** solange die Begegnung gespeichert ist. Mit der Begegnung löschen wir auch ihren Teilen-Link.
- **Technische Logs bei Supabase:** einige Tage, je nach Tarif.
- **Log des Dienstes:** wird laufend überschrieben, sobald es eine feste Größe erreicht.
- **Zugriffe auf die Website pubgstreamreport.com:** werden nicht gespeichert (keine Zugriffs-Logs).
- **Nutzungsereignisse bei Aptabase:** höchstens 5 Jahre. Die Tages-Kennung entfällt nach spätestens 48 Stunden, weil Aptabase den Zufallswert dazu löscht.
- **Kaufdaten:** liegen bei Apple, Google und RevenueCat. Belege für die Steuer bewahren wir auf, so lange das Gesetz es verlangt (§ 147 AO).

## 14. Deine Rechte

Du hast das Recht auf:

- **Auskunft** über deine Daten (Art. 15 DSGVO)
- **Berichtigung** (Art. 16 DSGVO)
- **Löschung** (Art. 17 DSGVO)
- **Einschränkung** der Verarbeitung (Art. 18 DSGVO)
- **Datenübertragbarkeit** (Art. 20 DSGVO)
- **Widerruf** einer Einwilligung, jederzeit und mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)

> **Dein Recht auf Widerspruch (Art. 21 DSGVO)**
>
> Wenn wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten (berechtigtes Interesse), kannst du jederzeit widersprechen. Gründe dafür müssen sich aus deiner besonderen Situation ergeben. Dann verarbeiten wir diese Daten nicht mehr, außer wir haben zwingende schutzwürdige Gründe, die deine Interessen überwiegen. Das betrifft vor allem Daten über Streamer und andere Spieler (Abschnitt 5). Schreib dafür an {{ site.email }}.

Für alle Anfragen schreib eine E-Mail an {{ site.email }}. Weil dein Konto anonym ist, schick uns bitte die PUBG-Namen, nach denen du gesucht hast, und ungefähr den Zeitpunkt. So können wir dein Konto finden.

**Beschwerde:** Du kannst dich bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO). Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, [www.lda.bayern.de](https://www.lda.bayern.de).

## 15. Pflicht zur Angabe von Daten

Du musst keine Daten angeben. Ohne PUBG-Namen kann die App aber nicht suchen.

## 16. Kinder

Die App richtet sich nicht an Personen unter 18 Jahren.

## 17. Änderungen

Wir passen diese Erklärung an, wenn sich die App oder das Recht ändert. Es gilt die Fassung auf dieser Seite.
