---
title: Viena riska izmaiņa no signāla līdz vēsturei
weight: 30
summary: Ievainojamība, ko jau izmanto uzbrucēji, maina riska vērtējumu. Paraugs parāda signālu, ierobežošanu, MI ierosināto ieteikumu, cilvēku, kurš to pieņēma, un to, kas saglabājas vēsturē.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**Piemērs SIA.** Risks **R-07: Klientu dati tiek atklāti caur identitātes serveri**. Identitātes serveri Piemērs SIA uztur pats. Riska īpašnieks: A. Ozola (IT direktore). Varbūtību un ietekmi vērtē skalā no 1 līdz 5; vērtējums ir abu reizinājums. Riska apetīte: 12.

## Signāls

2026. gada 1. oktobris, plkst. 08.40: ievainojamību skeneris ziņo par CVE-2026-41872 (šim paraugam izdomāts identifikators) identitātes serverī. WINGMAN klasificē signālu kā ievainojamību ar ticamības vērtējumu un sasaista to ar identitātes servera aktīvu, kuram ir risks R-07. Plkst. 08.55 J. Liepa (IT vadītājs) apstiprina klasifikāciju un pats pārbauda CISA zināmi izmantoto ievainojamību katalogu (KEV): ievainojamība tajā iekļauta kopš 29. septembra. Aktīva ierakstā redzams, ka administrēšanas konsole ir pieejama no interneta; skeneris rāda, ka ražotāja labojums nav uzstādīts.

## Ierobežošana

Plkst. 09.05 J. Liepa atslēdz administrēšanas konsoles piekļuvi no interneta. Uzdevums tiek izveidots un slēgts WINGMAN, ugunsmūra izmaiņa pievienota kā pierādījums.

## Ieteikums

Tā kā mainījās saistīta ievainojamība, WINGMAN atvēra R-07 pārskatīšanu un plkst. 09.10 izveidoja ieteikumu:

> Varbūtība 2 → 4. Identitātes serverī ir ievainojamība, ko zināmi izmanto uzbrucēji, un ražotāja labojums nav uzstādīts. Administrēšanas konsole līdz plkst. 09.05 bija pieejama no interneta. Ietekme paliek 4.

A. Ozola ieteikumu pieņēma plkst. 09.14, pievienoja uzdevumu uzstādīt labojumu un pabeidza pārskatīšanu plkst. 09.16. Pieņemtie ieteikumi stājas spēkā, kad pārskatīšana ir pabeigta, tāpēc tālāk redzamajām izmaiņām ir laiks 09.16.

## Kas saglabājas vēsturē

| Laiks (iestata sistēma) | Kurš | Kas mainījās | Pirms | Pēc |
|---|---|---|---|---|
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Varbūtība, no pieņemta ieteikuma | 2 | 4 |
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Vērtējums | 8 | 16 |
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Saistītie uzdevumi | – | Uzstādīt ražotāja labojumu identitātes serverī, J. Liepa, termiņš 3. okt. |
| 01.10.2026. plkst. 09.16 | A. Ozola (IT direktore) | Pēdējā pārskatīšana | 12.07.2026. | 01.10.2026. |
| 01.10.2026. plkst. 09.17 | WINGMAN | Kopsavilkums | iepriekšējā versija | atjaunots; modelis norādīts |

Vēsturi nevar labot vai dzēst. Ieteikuma pieņemšana vēsturē ir fiksēta kā atsevišķs ieraksts tā cilvēka vārdā, kurš to pieņēma. Kopsavilkums ir apraksts, ko WINGMAN uzraksta lasīšanai; tas nemaina riska laukus.

## Eskalācija

16 pārsniedz riska apetīti 12. A. Ozola tajā pašā dienā informēja valdes priekšsēdētāju, un R-07 apstrāde ir 1. lēmums vadības pārskatā 14. oktobrī. Labojums tika uzstādīts 3. oktobrī.
