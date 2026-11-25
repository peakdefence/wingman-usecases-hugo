---
title: "Ziņošana CERT.LV par nozīmīgu incidentu: struktūras piemērs"
weight: 70
summary: Nozīmīga incidenta ziņojumu uzbūve, sagatavota no incidenta ieraksta. Nav oficiālā veidne; termiņi jāpārbauda Nacionālās kiberdrošības likumā.
for: [solo]
use_cases: [incident-handling]
---

**Struktūras piemērs, nav oficiālā veidne.** Tas parāda, ko WINGMAN glabā incidenta ierakstā un ko sagatavo katram ziņojumam. Norādītie termiņi ir NIS2 direktīvas 23. pantā noteiktie, skaitot no konstatēšanas brīža; pārbaudiet tos spēkā esošajā Nacionālās kiberdrošības likumā.

**Piemēra aģentūra**, izdomāta valsts iestāde. **Incidents:** INC-07, iestādes e-pakalpojumu portāls nebija pieejams 9 stundas pakalpojumatteices (DDoS) uzbrukuma dēļ. **Konstatēts:** 2026. gada 12. novembrī plkst. 09.58. Termiņi tiek skaitīti no šī brīža.

## Klasifikācija

| Kritērijs (no ielādētajiem noteikumiem) | Šajā incidentā |
|---|---|
| Skartais pakalpojums | E-pakalpojumu portāls, iestādes kritisks pakalpojums |
| Ilgums | 9 stundas |
| Neizdevušās sesijas | Aptuveni 14 000 |
| Skartie dati | Nav konstatēti |
| Pārrobežu ietekme | Nav konstatēta |

**Ierosināts: nozīmīgs.** WINGMAN ierosināja plkst. 10.42 ar šādu pamatojumu; R. Grava, kiberdrošības pārvaldnieks, apstiprināja plkst. 10.55. A. Lāce, par kiberdrošību atbildīgā vadības pārstāve, informēta plkst. 11.05.

## Ziņojumi

| Ziņojums | Saturs | Termiņš | Nosūtīja, kad |
|---|---|---|---|
| Agrīnais brīdinājums | Aizdomas par nozīmīgu incidentu; skartais pakalpojums; vai iespējama ļaunprātīga darbība | 24 h | R. Grava, 12.11. plkst. 14.10 |
| Paziņojums par incidentu | Klasifikācija, sākotnējais smaguma un ietekmes novērtējums, kompromitācijas pazīmes | 72 h | R. Grava, 13.11. plkst. 09.30 |
| Starpziņojums | Statuss pēc pieprasījuma vai situācijai mainoties | pēc pieprasījuma | – |
| Gala ziņojums | Apraksts, pamatcēlonis, veiktie pasākumi, pārrobežu ietekme | 1 mēnesis pēc paziņojuma | līdz 13.12. |

Katra ziņojuma melnrakstu WINGMAN sagatavo no incidenta ieraksta. R. Grava to labo, apstiprina un nosūta CERT.LV; WINGMAN to nesūta.

## Veiktie pasākumi

Datplūsmas filtrēšana pie mitināšanas pakalpojuma sniedzēja ieslēgta plkst. 11.20; pakalpojums atjaunots plkst. 19.05. Turpmākie uzdevumi: līguma grozījumi par aizsardzību pret DDoS uzbrukumiem (īpašnieks: IT vadītājs, termiņš 31. janvāris) un procedūras mācības (īpašnieks: R. Grava, termiņš 31. marts).

## Kas saglabājas ierakstā

Incidents ir daļa no iestādes kiberincidentu žurnāla. Katram iepriekš minētajam solim saglabājas, kas to veica, un sistēmas fiksētais laiks, un vēsturi nevar labot vai dzēst.
