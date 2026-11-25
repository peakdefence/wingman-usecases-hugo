---
title: "Pašvērtējuma ziņojums: struktūras piemērs"
weight: 60
summary: Kiberdrošības pašvērtējuma ziņojuma uzbūve, ko saskaņā ar Nacionālās kiberdrošības likumu iesniedz NKDC, sagatavota no WINGMAN ierakstiem. Nav NKDC veidne.
for: [solo]
use_cases: [new-requirements, management-review]
---

**Struktūras piemērs, nav NKDC veidne.** Pašvērtējuma ziņojumu iesniedz Nacionālajam kiberdrošības centram (NKDC). WINGMAN to sagatavo no aktuālajiem ierakstiem katru reizi, kad tas jāiesniedz, tāpēc katrs ziņojums balstās uz tās dienas datiem, nevis uz pagājušā gada dokumentu. Piemērs parāda, kas tajā ietilpst un no kurienes nāk katra daļa. Iesniedzot ziņojumu, šie lauki tiek pārnesti NKDC veidnē; prasību numuri šeit norādīti kā [x], un WINGMAN tos ņem no ielādētajiem prasību ierakstiem.

**Piemēra aģentūra**, izdomāta valsts iestāde ar 250 darbiniekiem, būtisks subjekts saskaņā ar Nacionālās kiberdrošības likumu. **Periods:** 2026. gads. **Dati uz:** 2026. gada 20. novembri; sagatavoja kiberdrošības pārvaldnieks R. Grava.

## Prasības un to izpilde

| Prasība | Ierosinātais izpildes novērtējums | Pamatojums | Kontroles un pierādījumi | Novēršanas uzdevumi |
|---|---|---|---|---|
| MK noteikumi Nr. 397, [x]. p.: iecelts kiberdrošības pārvaldnieks | Izpildīta | Iecelts ar iestādes vadītāja rīkojumu; noteikts aizvietotājs | CTL-01; rīkojums, 12.02.2026. | – |
| MK noteikumi Nr. 397, [x]. p.: risku pārvaldība | Daļēji izpildīta | Riski novērtēti 4 no 6 pakalpojumiem | CTL-04; risku reģistrs, pārskatīšana 03.11. | Novērtēt atlikušos 2 pakalpojumus līdz 15.01. |
| MK noteikumi Nr. 397, [x]. p.: rezerves kopijas | Izpildīta | Ikdienas rezerves kopijas, atjaunošana pārbaudīta reizi ceturksnī | CTL-11; atjaunošanas tests, 22.10. | – |
| MK noteikumi Nr. 397, [x]. p.: drošības notikumu žurnālu glabāšanas termiņš (termiņš jāpārbauda normatīvajā aktā; piemērā izmantoti 18 mēneši) | Daļēji izpildīta | 4 no 6 sistēmām žurnāli glabājas 18 mēnešus; e-pakalpojumu portālam – 6 mēnešus | CTL-17; žurnālu glabāšanas iestatījumi, eksports 14.11. | Pagarināt portāla žurnālu glabāšanu līdz noteiktajam termiņam līdz 31.12. |
| MK noteikumi Nr. 397, [x]. p.: šifrēšana | Daļēji izpildīta | Klēpjdatori šifrēti; rezerves kopijas glabāšanā nav šifrētas | CTL-12; iekārtu atskaite, 18.11. | Šifrēt rezerves kopijas līdz 31.01. |
| MK noteikumi Nr. 397, [x]. p.: ārpakalpojumi un piegādātāji | Nav izpildīta | 3 no 7 kritiskajiem piegādātājiem līgumā nav drošības prasību | CTL-15 | Grozīt 3 līgumus līdz 31.03. |
| MK noteikumi Nr. 397, [x]. p.: incidentu klasificēšana un ziņošana | Izpildīta | Klasificēti pēc kritērijiem; ziņojumi nosūtīti laikā | CTL-20; kiberincidentu žurnāls, 2 incidenti | – |

Ierosinātie novērtējumi ir melnraksts. Skalu aizstāj ar NKDC noteikto skalu, un katru novērtējumu apstiprina cilvēks.

## Uz ko balstās ziņojums

Katrs novērtējums ir sasaistīts ar kontrolēm, to statusu un pierādījumiem, kas ir derīgi ziņojuma datumā. Prasības bez kontroles vai ar pierādījumiem, kuru derīgums beidzies, tiek uzskaitītas kā nepilnības, pirms ziņojumu paraksta.

## Apstiprināšana

R. Grava (kiberdrošības pārvaldnieks) pārskatīja 25. novembrī; A. Lāce, par kiberdrošību atbildīgā vadības pārstāve, saskaņoja 28. novembrī; iestādes vadītājs apstiprināja 2. decembrī. Visas trīs darbības fiksētas vēsturē ar sistēmas fiksēto laiku, un vēsturi nevar labot vai dzēst. Katras prasības novērtējums saglabājas, tāpēc nākamais ziņojums parāda, kas mainījies.
