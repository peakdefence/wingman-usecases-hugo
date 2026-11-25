---
title: Viena riska izmaiņa no signāla līdz vēsturei
weight: 30
summary: Ievainojamība, ko jau izmanto uzbrucēji, maina riska vērtējumu. Paraugs parāda signālu, ierobežošanu, MI ierosināto ieteikumu, cilvēku, kurš to pieņēma, apstrādi un to, kas saglabājas vēsturē.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**SIA „Piemērs”.** Risks **R-07: Klientu dati tiek atklāti caur identitātes serveri**. Identitātes serveri uzņēmums uztur pats. Riska īpašnieks: A. Ozola (IT direktore). Varbūtību un ietekmi vērtē skalā no 1 līdz 5; vērtējums ir abu reizinājums. Riska apetīte: 12.

## Signāls

2026. gada 1. oktobris, plkst. 08.40: ievainojamību skeneris ziņo par CVE-2026-41872 (šim paraugam izdomāts identifikators) identitātes serverī. WINGMAN klasificē signālu kā ievainojamību un sasaista to ar identitātes servera aktīvu, kuram ir risks R-07. Plkst. 08.55 J. Liepa (IT vadītājs) apstiprina klasifikāciju un pats pārbauda CISA zināmi izmantoto ievainojamību katalogu (KEV): ievainojamība tajā iekļauta kopš 29. septembra. Aktīva ierakstā redzams, ka administrēšanas konsole ir pieejama no interneta; skeneris rāda, ka ražotāja labojums nav uzstādīts.

## Ierobežošana

Plkst. 09.05 J. Liepa atslēdz administrēšanas konsoles piekļuvi no interneta. Uzdevums tiek izveidots un slēgts WINGMAN, ugunsmūra izmaiņa pievienota kā pierādījums.

## Ieteikums

Tā kā mainījās saistīta ievainojamība, WINGMAN atvēra R-07 pārskatīšanu un plkst. 09.10 izveidoja ieteikumu:

> Varbūtība 2 → 4. Identitātes serverī ir ievainojamība, ko zināmi izmanto uzbrucēji, un ražotāja labojums nav uzstādīts. Administrēšanas konsole līdz plkst. 09.05 bija pieejama no interneta. Ietekme paliek 4.

A. Ozola ieteikumu pieņēma plkst. 09.14 un pabeidza pārskatīšanu plkst. 09.16, fiksējot pagaidu apstrādes lēmumu: uzstādīt ražotāja labojumu līdz 3. oktobrim un līdz tam pieņemt atlikušo risku, kamēr konsole ir atslēgta no interneta. Viņa informēja valdes priekšsēdētāju e-pastā; e-pasts pievienots riskam.

## Kompromitācijas pārbaude

Konsole bija pieejama laikā, kad ievainojamību jau zināmi izmantoja. No plkst. 09.30 līdz 11.00 J. Liepa pārskata konsoles piekļuves žurnālus no 29. septembra līdz plkst. 09.05 un nomaina administratoru piekļuves datus. Nezināmu pieslēgšanos nav. Žurnālu izraksts un piekļuves datu nomaiņas ieraksts pievienoti kā pierādījumi un sasaistīti ar R-07.

## Apstrāde

3. oktobris, plkst. 14.20: J. Liepa uzstāda labojumu un slēdz uzdevumu, pievienojot skenera rezultātu. Plkst. 14.40 A. Ozola atkārtoti pārskata R-07 un novērtē varbūtību atpakaļ uz 2.

## Kas saglabājas vēsturē

| Laiks (iestata sistēma) | Kurš | Kas mainījās | Pirms | Pēc |
|---|---|---|---|---|
| 01.10.2026. plkst. 09.14 | A. Ozola (IT direktore) | Ieteikums: varbūtība 2 → 4 | ierosināts | pieņemts |
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Varbūtība, no pieņemtā ieteikuma | 2 | 4 |
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Vērtējums | 8 | 16 |
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Apstrāde | – | Pagaidu: labojums līdz 3. okt., līdz tam atlikušais risks pieņemts |
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Saistītie uzdevumi | – | Uzstādīt ražotāja labojumu, J. Liepa, termiņš 3. okt. |
| 01.10.2026. plkst. 09.17 | WINGMAN | Kopsavilkums | iepriekšējā versija | atjaunots |
| 01.10.2026. plkst. 11.02 | J. Liepa (IT vadītājs) | Pierādījumi | – | Piekļuves žurnālu pārskats, piekļuves datu nomaiņa |
| 03.10.2026. plkst. 14.20 | J. Liepa (IT vadītājs) | Uzdevums: uzstādīt ražotāja labojumu | atvērts | izpildīts; pievienots skenera rezultāts |
| 03.10.2026. plkst. 14.40 | A. Ozola (IT direktore) | Varbūtība | 4 | 2 |
| 03.10.2026. plkst. 14.40 | A. Ozola (IT direktore) | Vērtējums | 16 | 8 |

Vēsturi nevar labot vai dzēst. Ieteikuma pieņemšana ir atsevišķs ieraksts tā cilvēka vārdā, kurš to pieņēma. Kopsavilkums ir apraksts, ko WINGMAN uzraksta lasīšanai; tas nemaina riska laukus.

## Eskalācija

Vērtējums 16 divas dienas pārsniedza riska apetīti 12, un tam bija fiksēts pagaidu lēmums. Vadības pārskats 14. oktobrī apstiprināja apstrādi un lēma par papildu soli administrēšanas konsolei.
