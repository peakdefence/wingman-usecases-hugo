---
title: Viena audita prasība no apgalvojuma līdz secinājumam
weight: 20
summary: Kā iekšējā auditā tiek izsekota viena prasība, no dokumenta, kas deklarē kontroli, līdz secinājumam, korekcijai un pārbaudei, vai novēršana iedarbojās.
for: [auditor, start]
use_cases: [auditing, audit-scopes]
---

**Piemērs SIA.** Iekšējais audits pēc ISO/IEC 27001:2022, periods no 2026. gada 1. aprīļa līdz 21. septembrim, audits uz vietas no 22. līdz 26. septembrim. Divi tvērumi: produkts A un produkts B. Auditore: I. Dreimane, iekšējā auditore, nav iesaistīta neviena produkta izstrādē. Smagumu nosaka pēc organizācijas iekšējā audita procedūras: neatbilstība ir būtiska, ja prasība netiek izpildīta sistemātiski vai visā procesā.

Šeit izsekotā prasība ir **A pielikuma 8.32 Izmaiņu pārvaldība** **produkta B** tvērumā. Audita kritēriji ir šī kontrole un organizācijas pašas izmaiņu pārvaldības procedūra (8.1. punkts prasa, lai procesi tiek veikti, kā plānots).

## Apgalvojums

| | |
|---|---|
| Dokuments | Izmaiņu pārvaldības procedūra, 3. versija, apstiprināta 2026. gada 2. februārī |
| Punkts | 4.2: „Katru izmaiņu ražošanas vidē pirms izlaišanas pārskata otrs inženieris.” |
| Sasaiste | Dokumentēta. Ierosināja audita prasme; auditore atvēra 4.2. punktu un apstiprināja. |

## Intervija

M. Kalns, izstrādes vadītājs un izmaiņu pārvaldības procesa īpašnieks, 23. septembris. Intervētais 25. septembrī apstiprināja, ka transkripts ir precīzs. Konstatējumā citēts: „Produktam B mēs parasti pārskatām, bet steidzamie labojumi tiek izlaisti vispirms un pārskatīti pēc tam, ja kāds atceras.”

## Kopa un izlase

Kopa tika saskaņota ar izlaišanas žurnālu, ne tikai ar izmaiņu ierakstiem. 24. septembra žurnāla eksports aptver visu periodu. Produktam B tajā ir 41 izlaišana ražošanas vidē. 38 ir izmaiņu ieraksti (CHG-211 līdz CHG-248); 3 steidzamie labojumi tika izlaisti bez izmaiņu ieraksta.

Izlase: 10 izmaiņu ieraksti, izvēlēti nejauši (sākumvērtība saglabāta darba dokumentos), un visi 3 neierakstītie steidzamie labojumi.

| Pārbaudīts | Rezultāts |
|---|---|
| CHG-214, 219, 227, 231, 240, 245 | Otrā pārskatīšana pirms izlaišanas |
| CHG-223, 242 | Pārskatīts pēc izlaišanas |
| CHG-236 (steidzams labojums), CHG-247 (steidzams labojums) | Nav pārskatīts |
| 3 neierakstīti steidzamie labojumi (izlaišanas žurnāls: 14. maijs, 2. jūlijs, 19. augusts) | Nav izmaiņu ieraksta, nav pārskatīts |

Nejaušā izlase: 4 no 10 bez pārskatīšanas pirms izlaišanas. Neierakstītie steidzamie labojumi: 3 no 3 bez jebkādas pārskatīšanas. Piecas no septiņām kļūmēm bija steidzamie labojumi.

## Norādītie pierādījumi

| Pierādījums | Nozīme |
|---|---|
| Izlaišanas žurnāla eksports, 24. septembris, 41 ieraksts | Norāda uz neatbilstību |
| Izmaiņu ieraksti CHG-223, 236, 242, 247 | Norāda uz neatbilstību |
| Intervijas transkripts, 23. septembris, apstiprināts 25. septembrī | Norāda uz neatbilstību |
| Izmaiņu pārvaldības procedūra, 3. versija, 4.2. punkts | Konteksts |
| Produkts A: izlaišanas žurnāls un izmaiņu ieraksti, izlase no 10 | Apliecina atbilstību |
| Produkts A: izlaides procesa konfigurācijas eksports, 24. septembris | Apliecina atbilstību |

## Konstatējums un secinājums

**Konstatējums:** Būtiska neatbilstība. Produkta B izmaiņas ražošanas vidē tiek ieviestas bez procedūrā prasītās otrās pārskatīšanas: 4 no 10 izlases izmaiņām un visi 3 steidzamie labojumi, kas ieviesti bez izmaiņu ieraksta. Kļūme ir sistemātiska: steidzamie labojumi apiet izlaides procesu, un procesa īpašnieks apstiprināja, ka pārskatīšana ir atkarīga no atmiņas. Melnrakstu ar pierādījumiem sagatavoja audita prasme; smagumu noteica auditore 2. oktobrī.

**Produkts A** salīdzinājumam: kopa saskaņota ar izlaišanas žurnālu, 52 izlaišanas un 52 izmaiņu ieraksti. Nejaušā izlasē 10, visas pārskatītas pirms izlaišanas; izlaides process prasa otro apstiprinājumu (konfigurācijas eksports, 24. septembris). Atbilstība.

**Secinājums par A.8.32:** produkts A atbilst; produktam B būtiska neatbilstība. Katrs secinājums saglabā savu tvērumu.

## Turpmākā rīcība

- **Pamatcēlonis:** steidzamos labojumus izlaiž ārpus izlaides procesa, tāpēc uz tiem neattiecas tā apstiprināšanas solis.
- **Korekcija:** 7 nepārskatīto izlaišanu pārskatīšana pēc fakta un 28 nepārbaudīto izmaiņu ierakstu salīdzināšana ar izlaišanas žurnālu līdz 31. oktobrim. Īpašnieks M. Kalns.
- **Korektīvā darbība:** steidzamos labojumus virzīt caur to pašu apstiprināšanas soli, kas produktam A. Īpašnieks M. Kalns, termiņš 2026. gada 15. decembris.
- **Efektivitātes pārbaude:** 2027. gada martā atkārtota izlase no produkta B janvāra un februāra izlaišanām, salīdzinot ar izlaišanas žurnālu. Īpašniece I. Dreimane. Izpildīta, ja katra izlases izlaišana un katrs žurnālā redzamais steidzamais labojums pirms izlaišanas ir pārskatīts.

Vadība apstiprināja novēršanas plānu pārskatā 14. oktobrī.
