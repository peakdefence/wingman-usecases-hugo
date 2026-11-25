---
title: "Ziņojumi CERT.LV par incidentu: struktūras piemērs"
weight: 70
summary: Nozīmīga incidenta ziņojumu uzbūve, sagatavota no incidenta ieraksta. Nav regulatora veidne; termiņi jāpārbauda normatīvajā aktā.
for: [solo]
use_cases: [incident-handling]
---

**Struktūras piemērs, nav regulatora veidne.** Tas parāda, ko WINGMAN glabā incidenta ierakstā un ko sagatavo katram ziņojumam. Termiņi atzīmēti ar „pārbaudīt normatīvajā aktā”, jo tos nosaka spēkā esošais regulējums, nevis šis piemērs.

**Piemēra aģentūra**, izdomāta valsts iestāde. **Incidents:** INC-07, iestādes e-pakalpojumu portāls nebija pieejams 9 stundas pakalpojumatteices uzbrukuma dēļ, 2026. gada 12. novembris.

## Klasifikācija

| Kritērijs (no noteikumiem, kā ielādēts) | Šajā incidentā |
|---|---|
| Skartais pakalpojums | E-pakalpojumu portāls, būtisks pakalpojums |
| Ilgums | 9 stundas |
| Skartie lietotāji | Aptuveni 14 000 neizdevušās sesijas |
| Skartie dati | Nav konstatēti |
| Pārrobežu ietekme | Nav konstatēta |

**Ierosināts: nozīmīgs.** WINGMAN ierosināja ar šo pamatojumu 10.42; R. Grava, kiberdrošības pārvaldnieks, apstiprināja 10.55.

## Ziņojumi

| Ziņojums | Saturs | Termiņš | Nosūtīja, kad |
|---|---|---|---|
| Agrīnais brīdinājums | Ka ir aizdomas par nozīmīgu incidentu, skartais pakalpojums, vai tas var būt ļaunprātīgs | pārbaudīt normatīvajā aktā | R. Grava, 12.11. 14.10 |
| Paziņojums par incidentu | Klasifikācija, sākotnējais smaguma un ietekmes novērtējums, kompromitācijas pazīmes | pārbaudīt normatīvajā aktā | R. Grava, 13.11. 09.30 |
| Starpziņojums | Statuss pēc pieprasījuma vai situācijai mainoties | pēc pieprasījuma | – |
| Gala ziņojums | Apraksts, pamatcēlonis, veiktie pasākumi, pārrobežu ietekme | pārbaudīt normatīvajā aktā | gaidāms |

Katra ziņojuma melnrakstu WINGMAN sagatavo no incidenta ieraksta. R. Grava to labo, apstiprina un nosūta CERT.LV; WINGMAN to nesūta.

## Veiktie pasākumi

Plūsmas filtrēšana pie mitināšanas pakalpojuma sniedzēja ieslēgta 11.20; pakalpojums atjaunots 19.05. Turpmākie uzdevumi: līguma grozījumi par aizsardzību pret pakalpojumatteices uzbrukumiem (īpašnieks: IT vadītājs, termiņš 31. janvāris) un procedūras mācības (īpašnieks: R. Grava, termiņš 31. marts).

## Kas saglabājas ierakstā

Incidents ir daļa no iestādes kiberincidentu žurnāla. Katram iepriekš minētajam solim saglabājas cilvēks un laiks, ko iestata sistēma, un vēsturi nevar labot vai dzēst.
