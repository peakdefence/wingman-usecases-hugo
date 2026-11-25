---
title: "Pašvērtējuma ziņojums: struktūras piemērs"
weight: 60
summary: Kiberdrošības pašvērtējuma ziņojuma uzbūve saskaņā ar Nacionālās kiberdrošības likumu, sagatavota no WINGMAN ierakstiem. Nav regulatora veidne.
for: [solo]
use_cases: [new-requirements, management-review]
---

**Struktūras piemērs, nav regulatora veidne.** Tas parāda, ko WINGMAN saliek no ierakstiem un no kurienes nāk katra daļa. Iesniedzot ziņojumu, šie lauki tiek pārnesti regulatora veidnē; prasību numuri šeit norādīti kā [x], un WINGMAN tos ņem no ielādētajiem prasību ierakstiem.

**Piemēra aģentūra**, izdomāta valsts iestāde ar 250 darbiniekiem, būtisks subjekts saskaņā ar Nacionālās kiberdrošības likumu. **Periods:** 2026. gads. **Sagatavots no ierakstiem:** 2026. gada 20. novembrī, sagatavoja kiberdrošības pārvaldnieks R. Grava.

## Prasības un to izpilde

| Prasība | Ierosinātais līmenis | Pamatojums | Kontroles un pierādījumi | Nepilnības kā uzdevumi |
|---|---|---|---|---|
| MK noteikumi Nr. 397, [x]. p.: iecelts kiberdrošības pārvaldnieks | Izpildīta | Iecelts ar iestādes vadītāja rīkojumu; noteikts aizvietotājs | CTL-01; rīkojums, 12.02.2026. | – |
| [x]. p.: risku pārvaldība | Daļēji izpildīta | Riski novērtēti 4 no 6 pakalpojumiem | CTL-04; risku reģistrs, pārskatīšana 03.11. | Novērtēt atlikušos 2 pakalpojumus līdz 15.01. |
| [x]. p.: rezerves kopijas | Izpildīta | Ikdienas rezerves kopijas, atjaunošana pārbaudīta reizi ceturksnī | CTL-11; atjaunošanas tests, 22.10. | – |
| [x]. p.: šifrēšana | Daļēji izpildīta | Klēpjdatori šifrēti; rezerves kopijas glabāšanā nav šifrētas | CTL-12; iekārtu atskaite, 18.11. | Šifrēt rezerves kopijas līdz 31.01. |
| [x]. p.: ārpakalpojumi un piegādātāji | Nav izpildīta | 3 no 7 kritiskajiem piegādātājiem līgumā nav drošības prasību | CTL-15 | Grozīt 3 līgumus līdz 31.03. |
| [x]. p.: incidentu klasificēšana un ziņošana | Izpildīta | Klasificēti pēc kritērijiem; ziņojumi nosūtīti laikā | CTL-20; kiberincidentu žurnāls, 2 incidenti | – |

Ierosinātie līmeņi ir melnraksts. Skalu aizstāj ar regulatora noteikto skalu, un katru līmeni apstiprina cilvēks.

## Uz ko balstās ziņojums

Katrs līmenis ir sasaistīts ar kontrolēm, to statusu un pierādījumiem, kas ir derīgi ziņojuma datumā. Prasības bez kontroles vai ar beigušos pierādījumu derīgumu tiek uzskaitītas kā nepilnības, pirms kāds paraksta.

## Apstiprināšana

R. Grava (kiberdrošības pārvaldnieks) pārskatīja 25. novembrī; iestādes vadītājs apstiprināja 2. decembrī. Abas darbības fiksētas vēsturē ar laiku, un vēsturi nevar labot vai dzēst. Secinājums par katru prasību saglabājas nākamā gada ziņojumam.
