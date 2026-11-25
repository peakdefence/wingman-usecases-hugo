---
title: Viena riska izmaiņa no signāla līdz vēsturei
weight: 30
summary: Ievainojamība, ko jau izmanto uzbrucēji, maina riska vērtējumu. Paraugs parāda signālu, MI ierosināto ieteikumu, cilvēku, kurš to pieņēma, un to, kas saglabājas ierakstos.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**Piemērs SIA.** Risks **R-07: Klientu dati tiek atklāti caur identitātes serveri**. Identitātes serveri Piemērs SIA uztur pats. Riska īpašnieks: A. Ozola (IT direktore). Varbūtību un ietekmi vērtē skalā no 1 līdz 5; vērtējums ir abu reizinājums.

## Signāls

2026. gada 1. oktobris, 08.40: ievainojamību skeneris ziņo par CVE-2026-XXXXX identitātes serverī, un brīdinājumā norādīts, ka tā ir iekļauta CISA zināmi izmantoto ievainojamību katalogā (KEV). WINGMAN klasificē signālu kā ievainojamību ar ticamības vērtējumu un sasaista to ar identitātes servera aktīvu, kuram ir risks R-07. J. Liepa (IT vadītājs) klasifikāciju apstiprina 08.55. Aktīva ierakstā redzams, ka servera administrēšanas konsole ir pieejama no interneta; skeneris rāda, ka ražotāja labojums vēl nav uzstādīts.

## Ieteikums

WINGMAN atvēra R-07 pārskatīšanu, jo mainījās saistīta ievainojamība. Tā ieteikums:

> Varbūtība 2 → 4. Identitātes serverī ir ievainojamība, ko zināmi izmanto uzbrucēji, ražotāja labojums nav uzstādīts, un administrēšanas konsole ir pieejama no interneta. Ietekme paliek 4.

Ieteikums ir atsevišķs ieraksts pie riska ar šo aprakstu, ierosināto izmaiņu un statusu. A. Ozola to pieņēma, pievienoja uzdevumu uzstādīt labojumu un pabeidza pārskatīšanu. Pieņemtie ieteikumi stājas spēkā, kad pārskatīšana ir pabeigta.

## Kas saglabājas vēsturē

| Laiks (iestata sistēma) | Kurš | Kas mainījās | Pirms | Pēc |
|---|---|---|---|---|
| 01.10.2026. 09.14 | A. Ozola (IT direktore) | Varbūtība | 2 | 4 |
| 01.10.2026. 09.14 | A. Ozola (IT direktore) | Vērtējums | 8 | 16 |
| 01.10.2026. 09.15 | A. Ozola (IT direktore) | Saistītie uzdevumi | – | Uzstādīt ražotāja labojumu identitātes serverī, termiņš 3. okt. |
| 01.10.2026. 09.15 | A. Ozola (IT direktore) | Pēdējā pārskatīšana | 12.07.2026. | 01.10.2026. |
| 01.10.2026. 09.15 | WINGMAN | Kopsavilkums | iepriekšējā versija | atjaunots; modelis fiksēts |

Vēsturi nevar labot vai dzēst. Tajā A. Ozola ir norādīta kā izmaiņu veicēja, jo viņa pieņēma ieteikumu. Ieteikums, kas izmaiņu ierosināja, kopā ar pamatojumu paliek pie riska kā atsevišķs ieraksts ar statusu „pieņemts”.

Vērtējums 16 pārsniedz riska apetīti 12, tāpēc risks ir iekļauts nākamā vadības pārskata darba kārtībā.
