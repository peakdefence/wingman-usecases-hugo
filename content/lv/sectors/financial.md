---
title: Finanšu nozare – DORA, MiCA un uzraudzības prasības
short: Finanšu nozare
sector: financial
weight: 20
summary: Vadīt operacionālo, finanšu, reputācijas un citu nefinanšu risku pārvaldību vienā modelī un notvert notikumus, kuriem tā būtu jāmaina.
audience: Bankas, maksājumu un elektroniskās naudas iestādes, ieguldījumu brokeru sabiedrības, apdrošinātāji un kriptoaktīvu pakalpojumu sniedzēji, kā arī IKT pakalpojumu sniedzēji, kas tos apkalpo.
standards:
- DORA (ES) 2022/2554
- MiCA (ES) 2023/1114
- ECB / VUM uzraudzības prasības
- EBI vadlīnijas par iekšējo pārvaldību un ārpakalpojumiem
- ISO 31000
stages:
- title: Risku taksonomija un apetīte
  text: Augšējā līmenī ir uzņēmuma riski – operacionālais, finanšu, reputācijas, atbilstības, uzvedības un IKT risks. Procesu riski tiek apkopoti tajos, katram ir īpašnieks un vieta risku apetītē.
  nodes:
  - risk
  - role
  - document
  links:
  - risk-risk
  - role-risk
  - role-document
  ai: Ierosina hierarhiju no esošā reģistra un risku apetītes paziņojuma.
  decides: Risku pārvaldības funkcija ierosina; vadības institūcija apstiprina.
- title: Procesi un kritiskās funkcijas
  text: Biznesa procesi un kritiskās vai svarīgās funkcijas ir aktīvi, kas sasaistīti ar sistēmām, datiem un trešajām pusēm, no kurām tie ir atkarīgi.
  nodes:
  - asset
  - supplier
  - document
  links:
  - asset-asset
  - supplier-asset
  - supplier-document
  ai: Sagatavo funkciju karti un iezīmē trešās puses, kas atbalsta kritiskās funkcijas.
  decides: Procesu īpašnieki apstiprina.
- title: Risku un kontroļu pašnovērtējums
  text: Īpašnieki novērtē savu procesu riskus un kontroles, kas tos mazina. Novērtējums ir plānots cikls, nevis izklājlapa, ko reizi gadā izsūta visiem.
  nodes:
  - risk
  - control
  - plan
  - role
  links:
  - control-risk
  - plan-risk
  - role-control
  ai: Iepriekš aizpilda novērtējumu no iepriekšējā cikla, kopš tā notikušajiem notikumiem un kontroļu pierādījumiem.
  decides: Risku īpašnieki novērtē; otrā aizsardzības līnija apstrīd.
- title: Galvenie riska rādītāji un notikumi
  text: Rādītāji, kas pārsniedz sliekšņus, ziņas par uzņēmumu vai nozari, klientu sūdzības un piegādātāju paziņojumi ienāk kā signāli un maina riskus starp novērtējumiem.
  nodes:
  - signal
  - risk
  - supplier
  - threat
  links:
  - signal-risk
  - signal-supplier
  - signal-threat
  ai: Uzrauga rādītājus un ziņas un sasaista katru signālu ar riskiem, uz kuriem tas attiecas.
  decides: Risku īpašnieki izvērtē.
- title: Zaudējumu notikumi un incidenti
  text: Operacionālo zaudējumu notikumi, gandrīz notikušie gadījumi un nozīmīgi ar IKT saistīti incidenti tiek reģistrēti vienreiz, ar cēloni, īstenotajiem riskiem un nosūtītajiem ziņojumiem.
  nodes:
  - incident
  - risk
  - asset
  - document
  - task
  links:
  - incident-risk
  - incident-asset
  - incident-document
  - incident-task
  ai: Klasificē notikumu, sagatavo pamatcēloņa analīzi un ziņojumus un ierosina novērtējuma izmaiņas.
  decides: Risku īpašnieks un risku pārvaldības funkcija apstiprina.
- title: Ziņošana un uzraudzība
  text: Vadības institūcija redz riska pakāpi pret apetīti, notikumus un nokavētās darbības. Iekšējais audits pārbauda tos pašus ierakstus.
  nodes:
  - role
  - plan
  - audit
  - finding
  - conclusion
  links:
  - role-plan
  - plan-audit
  - audit-finding
  - finding-conclusion
  ai: Sagatavo risku ziņojumu un uzraudzības materiālus no aktuālajiem ierakstiem.
  decides: Vadības institūcija lemj par darbībām.
registers:
- entity: risk
  title: Nefinanšu risku reģistrs
  text: Operacionālie, reputācijas, atbilstības, uzvedības, modeļu, ārpakalpojumu un IKT riski vienā hierarhijā, novērtēti vienā skalā un sasaistīti ar apetīti.
- entity: asset
  title: Procesi un kritiskās funkcijas
  text: Biznesa procesi, produkti un kritiskās vai svarīgās funkcijas, ar sistēmām, datiem un trešajām pusēm aiz katras.
- entity: supplier
  title: Trešo pušu un ārpakalpojumu reģistrs
  text: IKT trešo pušu līgumi un citi ārpakalpojumi ar funkcijām, ko tie atbalsta, līgumiem, izejas plāniem un novērtējumiem. Pamats DORA informācijas reģistram.
- entity: signal
  title: Rādītāju un notikumu plūsma
  text: Galvenie riska rādītāji, sūdzības, mediju un nozares ziņas, piegādātāju paziņojumi un uzraudzības iestādes saziņa, katrs izvērtēts un sasaistīts ar riskiem.
- entity: incident
  title: Zaudējumu notikumu un incidentu žurnāls
  text: Zaudējumu notikumi, gandrīz notikušie gadījumi un nozīmīgi incidenti ar cēloni, ietekmi, īstenotajiem riskiem, ziņošanu un turpmākajām darbībām.
- entity: control
  title: Kontroļu bibliotēka
  text: Kontroles ar īpašniekiem, biežumu un pierādījumiem, pārbaudītas pašnovērtējumos un iekšējā auditā.
- entity: requirement
  title: Regulējošās prasības
  text: DORA, MiCA, EBI vadlīnijas un uzraudzības prasības kā punktu līmeņa ieraksti, sasaistīti starp ietvariem, lai viena kontrole derētu vairākām prasībām.
use_cases:
- uc: risk-identification
  text: Uz intervijām balstīta risku identificēšana katram procesam, kas papildina operacionālo risku hierarhiju, nevis vienreizējs seminārs.
- uc: risk-review
  text: Risku un kontroļu pašnovērtējums ar otrās līnijas apstrīdēšanu, plānots un uzraudzīts kā plāns.
- uc: incident-handling
  text: Zaudējumu notikumi un nozīmīgi ar IKT saistīti incidenti tiek reģistrēti vienreiz, ar klasifikāciju, ziņošanu un gūtajām mācībām, kas atjaunina riskus.
- uc: supplier-evaluation
  text: Trešo pušu risks saskaņā ar DORA un ārpakalpojumu vadlīnijām, no novērtējuma pirms līguma līdz izejas plāniem, papildinot informācijas reģistru.
- uc: business-impact-analysis
  text: Kritiskās vai svarīgās funkcijas ar ietekmes pielaidēm, atjaunošanas mērķiem un atkarībām aiz tām.
- uc: new-requirements
  text: Jaunas uzraudzības prasības vai MiCA prasības tiek sasaistītas ar esošajām kontrolēm, pirms kāds sāk rakstīt jaunu politiku.
- uc: management-review
  text: Vadības institūcija pārskata riska pakāpi pret risku apetīti, notikumus un novēršanas statusu.
- uc: change-management
  text: Jauni produkti un būtiskas izmaiņas tiek novērtētas no riska viedokļa pirms ieviešanas.
questions:
- q: Kāda šobrīd ir mūsu riska pakāpe pret apetīti?
  a: No uzņēmuma riskiem uz procesu riskiem zem tiem, ar aktuālo novērtējumu, notikumiem un rādītājiem, kas to mainīja, un ieviestajām kontrolēm.
- q: Kuriem šī ceturkšņa notikumiem vajadzēja mainīt riska novērtējumu?
  a: No signāliem un zaudējumu notikumiem uz riskiem, ko tie norāda vai īsteno, parādot, kuri novērtējumi ir pārskatīti un kuri nav.
- q: Kuras kritiskās funkcijas ir atkarīgas no vienas trešās puses?
  a: No funkcijas uz aktīviem, uz kuriem tā balstās, uz piegādātājiem, kas tos nodrošina, ar līgumiem un izejas plāniem.
- q: Vai informācijas reģistrs ir pilnīgs?
  a: Piegādātāji bez sasaistītas funkcijas, līguma vai novērtējuma parādās kā nepilnības pirms iesniegšanas termiņa.
---

Finanšu uzraudzības iestādes skatās uz visu nefinanšu risku kopumu, ne tikai uz IKT. DORA nosaka noteikumus IKT riskam, incidentu ziņošanai, noturības testēšanai un IKT trešajām pusēm. MiCA kriptoaktīvu pakalpojumu sniedzējiem nosaka prasības pārvaldībai, interešu konfliktiem, sūdzību izskatīšanai, ārpakalpojumiem un darbības nepārtrauktībai. Uzraudzības prasības, tostarp ECB prasības nozīmīgām iestādēm un EBI vadlīnijas, prasa risku taksonomiju, apetīti, pašnovērtējumus, zaudējumu datus un vadības institūcijas uzraudzību.

Liela daļa šī darba joprojām notiek manuāli: pašnovērtējumi izklājlapās, notikumi tiek vākti e-pastā, rādītāji atsevišķā pārskatā. WINGMAN sistēmā riski, kontroles, notikumi un trešās puses ir sasaistīti ieraksti, tāpēc notikums atjaunina risku, uz kuru tas attiecas, un vadības institūcija redz vienu kopainu.
