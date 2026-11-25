---
title: Viena riska izmaiņa no signāla līdz vēsturei
weight: 30
summary: Ievainojamības brīdinājums maina riska vērtējumu. Paraugs parāda MI ierosināto ieteikumu, cilvēku, kurš to pieņēma, un to, kas saglabājas vēsturē.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**Piemērs SIA.** Risks **R-07: Klientu dati tiek atklāti caur identitātes pakalpojumu**. Īpašnieks: IT vadītājs.

## Signāls

2026. gada 21. oktobris: ražotāja brīdinājums ziņo par kritisku, aktīvi izmantotu ievainojamību identitātes pakalpojuma administrēšanas konsolē. Tas ienāk kā signāls, tiek klasificēts kā ievainojamība un sasaistīts ar identitātes pakalpojuma aktīvu, kuram ir risks R-07.

## Ieteikums

WINGMAN MI to izveidoja, kad tika atvērta riska pārskatīšana:

> Varbūtība 2 → 4. Identitātes pakalpojums ir pakļauts aktīvi izmantotai ievainojamībai (EPSS 0,95), labojums vēl nav uzstādīts, un administrēšanas konsole ir pieejama no interneta. Ietekme paliek 4.

Riska īpašnieks to pieņēma, pievienoja novēršanas uzdevumu un pabeidza pārskatīšanu. Kamēr pārskatīšana nebija pabeigta, izmaiņu varēja atsaukt.

## Kas saglabājas vēsturē

| Laiks (iestata sistēma) | Kurš | Kas mainījās | Pirms | Pēc |
|---|---|---|---|---|
| 21.10.2026. 09.14 | IT vadītājs | Varbūtība | 2 | 4 |
| 21.10.2026. 09.14 | IT vadītājs | Vērtējums | 8 | 16 |
| 21.10.2026. 09.15 | IT vadītājs | Saistītie uzdevumi | – | Uzstādīt labojumu identitātes pakalpojumā, termiņš 23. okt. |
| 21.10.2026. 09.15 | IT vadītājs | Pēdējā pārskatīšana | 12.07.2026. | 21.10.2026. |
| 21.10.2026. 09.15 | WINGMAN | Kopsavilkums | iepriekšējā versija | atjaunots; modelis fiksēts |

Vēsturi nevar labot vai dzēst. Izmaiņa ir fiksēta riska īpašnieka vārdā, jo riska īpašnieks to pieņēma.
