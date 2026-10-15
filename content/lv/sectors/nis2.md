---
title: NIS2 un Nacionālās kiberdrošības likums
short: NIS2
sector: nis2
weight: 10
summary: Vadīt būtiska vai svarīga subjekta informācijas drošības funkciju no viena reģistra, kurā ir piegādātāji, aktīvi, riski, incidenti, ievainojamības, draudi un uzdevumi.
audience: Būtiskie un svarīgie subjekti saskaņā ar NIS2, tostarp valsts un pašvaldību institūcijas un privātie pakalpojumu sniedzēji, uz kuriem attiecas Nacionālās kiberdrošības likums.
standards:
- NIS2 (ES) 2022/2555
- Nacionālās kiberdrošības likums
- MK noteikumi Nr. 397
- ISO 27001
stages:
- title: Tvērums un reģistrācija
  text: Pakalpojumi, uz kuriem attiecas likums, ir aktīvi, kas sasaistīti ar sistēmām, datiem un piegādātājiem, no kuriem tie ir atkarīgi. Šī karte ir tvērums.
  nodes:
  - asset
  - supplier
  - requirement
  links:
  - asset-asset
  - supplier-asset
  ai: Sagatavo pakalpojumu karti no esošajiem sistēmu, līgumu un iepirkumu ierakstiem.
  decides: Kiberdrošības pārvaldnieks apstiprina tvērumu.
- title: Minimālās prasības sasaistītas
  text: Katra likuma un noteikumu prasība ir ieraksts, kas sasaistīts ar ISO 27001 punktiem un jau ieviestām kontrolēm. Tas, kas paliek, ir nepilnības.
  nodes:
  - requirement
  - control
  - document
  links:
  - requirement-requirement
  - requirement-control
  - control-document
  ai: Sasaista prasības ar esošajām kontrolēm un uzskaita prasības bez kontroles.
  decides: Kiberdrošības pārvaldnieks saskaņo nepilnību sarakstu.
- title: Riski, draudi un ievainojamības
  text: Riski ir piesaistīti tvēruma pakalpojumiem. Draudi un ievainojamības padara scenārijus konkrētus un maina novērtējumu starp pārskatīšanām.
  nodes:
  - risk
  - asset
  - threat
  - vulnerability
  links:
  - risk-asset
  - threat-risk
  - vulnerability-asset
  - vulnerability-risk
  ai: Ierosina riskus no nozares draudu ainas un atvērtajām ievainojamībām.
  decides: Risku īpašnieki novērtē un izvēlas apstrādi.
- title: Vadības atbildība
  text: Vadības institūcija apstiprina risku pārvaldības pasākumus un uzrauga to izpildi. Pienākumi ir piesaistīti lomām, tāpēc personāla maiņa nepārtrauc atbildības ķēdi.
  nodes:
  - role
  - person
  - risk
  - control
  - plan
  links:
  - person-role
  - role-risk
  - role-control
  - role-plan
  ai: Sagatavo apstiprināšanas materiālus un uzskaita ierakstus bez atbildīgās lomas.
  decides: Vadības institūcija apstiprina.
- title: Incidenti un ziņošana
  text: Signāli tiek izvērtēti un pārvērsti incidentos. Katram nozīmīgam incidentam ir ziņošanas termiņi, nosūtītie ziņojumi un turpmākais darbs.
  nodes:
  - signal
  - incident
  - asset
  - document
  - task
  links:
  - signal-incident
  - incident-asset
  - incident-document
  - incident-task
  ai: Klasificē nozīmīgumu, seko 24 h, 72 h un viena mēneša termiņiem un sagatavo ziņojumus.
  decides: Incidentu vadītājs izlemj, par ko ziņot.
- title: Pierādījumi un audits
  text: Kontrolēm ir pierādījumi ar derīguma termiņu. Kiberdrošības audits izmanto tos pašus ierakstus, ar kuriem strādā drošības funkcija.
  nodes:
  - control
  - evidence
  - audit
  - finding
  - task
  links:
  - control-evidence
  - audit-control
  - audit-finding
  - finding-task
  ai: Uzskaita novecojušos pierādījumus un sagatavo audita materiālus katrai prasībai.
  decides: Auditors secina; īpašnieki novērš konstatējumus.
registers:
- entity: supplier
  title: Piegādes ķēdes reģistrs
  text: Katrs piegādātājs ar pakalpojumiem, ko tas sniedz, datiem, ko tas skar, kritiskumu, līguma nosacījumiem un novērtēšanas datumu. Piegādātāju incidenti un paziņojumi ir sasaistīti tieši ar to.
- entity: asset
  title: Aktīvu un pakalpojumu uzskaite
  text: Likuma tvērumā esošie pakalpojumi, sistēmas un dati, uz kuriem tie balstās, īpašnieki un kritiskums, ar atkarībām kā saitēm.
- entity: risk
  title: Risku reģistrs
  text: Riski katram pakalpojumam, apkopoti subjekta līmeņa riskos, ar varbūtību, ietekmi, apstrādi un kontrolēm, kas tos mazina.
- entity: incident
  title: Incidentu reģistrs
  text: Hronoloģija, nozīmīgums, ievērotie ziņošanas termiņi, ziņojumi CERT.LV un gūtās mācības, kas sasaistītas ar riskiem.
- entity: vulnerability
  title: Ievainojamību reģistrs
  text: Skenēšanas, ielaušanās testu un brīdinājumu rezultāti, piesaistīti aktīviem, ar novēršanas uzdevumiem un termiņiem.
- entity: threat
  title: Draudu reģistrs
  text: Nozarei būtiski apdraudējuma avoti un notikumi, ko papildina draudu izlūkošanas signāli un kas sasaistīti ar riskiem, kurus tie ietekmē.
- entity: requirement
  title: Prasību katalogs
  text: Likuma panti un noteikumu minimālās prasības, katra kā atsevišķs ieraksts, sasaistītas ar ISO 27001 un kontrolēm.
- entity: task
  title: Darba plāns
  text: Korektīvās darbības, risku apstrādes uzdevumi un regulārās pārskatīšanas, katrs ar atbildīgo un termiņu, apkopoti gada plānā.
use_cases:
- uc: supplier-evaluation
  text: Piegādes ķēdes drošība, kā to prasa likums. Kritiskos piegādātājus novērtē pirms sadarbības, un piegādātāju paziņojumi nonāk risku reģistrā.
- uc: incident-handling
  text: Agrīnais brīdinājums 24 stundās, paziņojums 72 stundās, gala ziņojums mēneša laikā. Termiņi un ziņojumi ir incidenta ierakstā.
- uc: new-requirements
  text: Kad mainās likums vai noteikumi, jaunās prasības sasaista ar jau ieviestām kontrolēm, un uzdevumos pārvēršas tikai reālās nepilnības.
- uc: risk-review
  text: Visu apdraudējumu risku novērtējums katram pakalpojumam, ar apstrādi, ko vadības institūcija var apstiprināt.
- uc: vulnerability-impact
  text: CERT.LV brīdinājumi un skeneru rezultāti nonāk uz aktīviem, kuros ir attiecīgā ievainojamība.
- uc: management-review
  text: Vadības institūcija redz riska pakāpi, incidentus un nokavētos darbus un apstiprina pasākumus; protokoli un lēmumi tiek saglabāti.
- uc: roles-raci
  text: Kiberdrošības pārvaldnieks, vadības institūcija un kontroļu īpašnieki ir lomas ar rakstiski noteiktiem pienākumiem un aizvietotājiem.
- uc: auditing
  text: Regulārais kiberdrošības audits notiek uz tiem pašiem ierakstiem, ar secinājumiem par katru prasību.
questions:
- q: Vai varam uzraugošajai iestādei parādīt, ko mēs darbinām, kas to piegādā un kā tas ir aizsargāts?
  a: No tvēruma pakalpojumiem uz sistēmām un piegādātājiem, no kuriem tie ir atkarīgi, uz to riskiem un kontrolēm, kas šos riskus mazina.
- q: Kuri piegādātāji šodien ietekmētu būtisku pakalpojumu, ja tie pārtrauktu darbību?
  a: No pakalpojuma uz aktīviem, no kuriem tas atkarīgs, uz piegādātājiem, kas tos nodrošina, ar to kritiskumu un novērtēšanas datumu.
- q: Vai iekļaujamies incidenta ziņošanas termiņā?
  a: Katram nozīmīgam incidentam redzami piemērojamie termiņi, kas un kad nosūtīts un kas vēl jāizdara.
- q: Kurām minimālajām prasībām nav strādājošas kontroles?
  a: Prasības bez kontroles vai ar kontrolēm, kuru pierādījumi ir novecojuši, parādās kā nepilnības pirms audita.
---

NIS2 prasa vairāk nekā dokumentu kopumu. Subjektam jāzina, ko tas darbina, no kā tas ir atkarīgs, kādus riskus tas nes un kā tiek pārvaldīti incidenti, un tā vadības institūcijai pasākumi jāapstiprina un jāuzrauga. Latvijā NIS2 ir pārņemta Nacionālās kiberdrošības likumā, un Ministru kabineta noteikumi Nr. 397 „Minimālās kiberdrošības prasības” nosaka prasības no pārvaldības un kiberdrošības pārvaldnieka lomas līdz incidentu klasifikācijai, rezerves kopijām, šifrēšanai un ārpakalpojumiem. Par nozīmīgiem incidentiem ziņo CERT.LV.

WINGMAN uztur tos kā sasaistītus reģistrus vienā modelī, līdzīgi kā ISO 27001 informācijas drošības pārvaldības sistēmā. Informācijas drošības funkcija strādā no viena avota: tas, ko redz uzraugošā iestāde, auditors un vadības institūcija, ir tas pats, ar ko strādā drošības komanda.
