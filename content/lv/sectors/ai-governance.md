---
title: MI pārvaldība – ISO 42001, EN 18286 un ES MI akts
short: MI pārvaldība
sector: ai-governance
weight: 40
summary: Uzskatīt katru MI lietojumu par aktīvu ar saviem riskiem, kontrolēm un darba plānu un parādīt atbilstību ES MI aktam no tiem pašiem ierakstiem.
audience: Organizācijas, kas izstrādā, nodrošina vai izmanto MI sistēmas, no iekšējiem asistentiem līdz augsta riska sistēmām ES tirgū.
standards:
- ISO/IEC 42001:2023
- EN 18286:2026
- ES MI akts (ES) 2024/1689
- ISO/IEC 23894
stages:
- title: MI lietojumu uzskaite
  text: Katrs MI lietojums ir aktīvs, kas sasaistīts ar izmantotajiem modeļiem, datiem, sistēmām un piegādātājiem, ar biznesa īpašnieku.
  nodes:
  - asset
  - supplier
  - role
  links:
  - asset-asset
  - supplier-asset
  - role-asset
  ai: Sagatavo ierakstus no iepirkumu, sistēmu un aptauju ierakstiem un atrod MI funkcijas esošajos rīkos.
  decides: Lietojumu īpašnieki apstiprina.
- title: Klasifikācija un loma
  text: Katram lietojumam nosaka MI akta riska kategoriju un organizācijas lomu – nodrošinātājs vai uzturētājs. Tas nosaka piemērojamos pienākumus.
  nodes:
  - asset
  - requirement
  - document
  links:
  - requirement-requirement
  - document-asset
  ai: Ierosina kategoriju un lomu ar rakstisku pamatojumu.
  decides: MI pārvaldības vadītājs izlemj.
- title: Ietekmes un risku novērtējums
  text: Riskus cilvēkiem, organizācijai un sabiedrībai novērtē katram lietojumam, kopā ar MI sistēmas ietekmes novērtējumu.
  nodes:
  - risk
  - asset
  - threat
  - document
  links:
  - risk-asset
  - threat-risk
  - document-asset
  ai: Ierosina riskus, piemēram, neobjektivitāti, modeļa novirzi, ļaunprātīgu izmantošanu un datu noplūdi, no lietojuma apraksta.
  decides: Risku īpašnieki novērtē un izvēlas apstrādi.
- title: Kontroles un darba plāns
  text: ISO 42001 A pielikuma kontroles, EN 18286 kvalitātes vadības prasības un MI akta pienākumi tiek sasaistīti ar kontrolēm. Trūkstošās kļūst par darba plānu.
  nodes:
  - requirement
  - control
  - risk
  - task
  - plan
  links:
  - requirement-control
  - control-risk
  - control-task
  - task-plan
  ai: Atkārtoti izmanto ISO 27001 un VDAR kontroles, kur tās jau ir piemērojamas, un uzskaita pārējās.
  decides: Kontroļu īpašnieki apņemas ievērot termiņus.
- title: Cilvēka uzraudzība un monitorings
  text: Uzraudzības pienākumi ir piesaistīti lomām. Monitoringa signāli un nopietni incidenti atgriežas riskos un lietojuma ierakstā.
  nodes:
  - role
  - signal
  - incident
  - risk
  links:
  - role-incident
  - signal-risk
  - signal-incident
  - incident-risk
  ai: Uzrauga darbības un sūdzību signālus un seko ziņošanas termiņiem par nopietniem incidentiem.
  decides: Uzraudzības loma rīkojas.
- title: Atbilstība un audits
  text: Tehniskā dokumentācija, pierādījumi un iekšējie auditi parāda atbilstību katrai prasībai – sertifikācijai vai MI aktam.
  nodes:
  - audit
  - requirement
  - evidence
  - conclusion
  links:
  - audit-requirement
  - audit-evidence
  - conclusion-requirement
  ai: Sagatavo dokumentāciju un pierādījumus katram pienākumam un norāda, kas trūkst.
  decides: Auditors secina.
registers:
- entity: asset
  title: MI lietojumu reģistrs
  text: Katrs MI lietojums un sistēma ar mērķi, īpašnieku, riska kategoriju, nodrošinātāja vai uzturētāja lomu, modeļiem, datiem un atkarībām.
- entity: risk
  title: MI risku reģistrs
  text: Riski katram lietojumam cilvēkiem, organizācijai un sabiedrībai, novērtēti tajā pašā skalā kā pārējais reģistrs.
- entity: document
  title: Ietekmes novērtējumi un tehniskā dokumentācija
  text: MI sistēmu ietekmes novērtējumi, pamattiesību ietekmes novērtējumi, tehniskā dokumentācija un lietošanas instrukcijas, sasaistīti ar lietojumu.
- entity: requirement
  title: Pienākumu katalogs
  text: ISO 42001, EN 18286 un MI akta panti kā punktu līmeņa ieraksti, sasaistīti savstarpēji un ar ISO 27001 un VDAR.
- entity: control
  title: MI kontroles
  text: Datu pārvaldības, pārredzamības, cilvēka uzraudzības, žurnalēšanas, precizitātes un noturības kontroles, katra ar īpašnieku un pierādījumiem.
- entity: supplier
  title: Modeļu un MI pakalpojumu sniedzēji
  text: Modeļu, platformu un MI funkciju nodrošinātāji ar līgumiem, lietošanas noteikumiem un novērtējumiem.
- entity: plan
  title: MI atbilstības darba plāns
  text: Uzdevumi nepilnību novēršanai ar atbildīgajiem un termiņiem, apkopoti pa lietojumiem un pa pienākumiem.
use_cases:
- uc: eu-ai-act
  text: Šī skatpunkta kodols. MI lietojumu reģistrs, klasifikācija, riski un kontroles un uzraudzība lietošanā.
- uc: new-requirements
  text: Jaunas vadlīnijas, standarti un īstenošanas akti tiek sasaistīti ar esošajām kontrolēm, nevis sākta jauna programma.
- uc: gdpr-dpia
  text: Lietojumi, kas apstrādā personas datus, izmanto tos pašus ierakstus kā DPIA, tāpēc novērtējumu veic vienreiz.
- uc: supplier-evaluation
  text: Modeļu un MI pakalpojumu sniedzējus novērtē pirms izmantošanas, un to izmaiņas nonāk risku reģistrā.
- uc: change-management
  text: Jauna modeļa versija vai jauns mērķis ir izmaiņa, ko novērtē pirms ieviešanas.
- uc: auditing
  text: Iekšējie auditi atbilstoši ISO 42001 vai EN 18286 ar secinājumiem par katru punktu.
- uc: roles-raci
  text: Nodrošinātāja un uzturētāja pienākumi, cilvēka uzraudzība un MI pratība ir piesaistīti konkrētām lomām.
questions:
- q: Kuras MI sistēmas mēs izmantojam, un kuras no tām ir augsta riska?
  a: No MI lietojumu reģistra uz katram reģistrēto kategoriju un lomu, ar pamatojumu un to, kas lēma.
- q: Ko MI akts prasa no mums šim lietojumam, un kas vēl trūkst?
  a: No lietojuma uz piemērojamajiem pienākumiem, uz kontrolēm, kas tos izpilda, uz to pierādījumiem. Pienākumi bez kontroles ir darba plāns.
- q: Vai esošās ISO 27001 kontroles var izmantot ISO 42001?
  a: Prasības ir sasaistītas starp standartiem, tāpēc kontrole, kas jau izpilda ISO 27001 punktu, parāda, kur tā izpilda arī ISO 42001 vai EN 18286 punktu.
- q: Kam jārīkojas, ja MI sistēma darbojas nepareizi?
  a: No incidenta uz lietojumu, uz uzraudzības lomu un riskiem, ko tas īsteno, ar ziņošanas termiņu, ja tas ir nopietns incidents.
---

ISO/IEC 42001 nosaka MI pārvaldības sistēmu. EN 18286, kas publicēts 2026. gadā, nosaka kvalitātes vadības sistēmu, kas nodrošinātājiem nepieciešama ES MI akta vajadzībām. Pats MI akts nosaka pienākumus nodrošinātājiem un uzturētājiem atkarībā no katras MI sistēmas riska kategorijas.

Visi trīs sākas vienā vietā: jāzina, kādi MI lietojumi pastāv, ko katrs dara un kam tas pieder. WINGMAN katrs MI lietojums ir aktīvs, tāpēc tam ir tās pašas saites kā visam pārējam: riski, kontroles, piegādātāji, dokumenti, incidenti un auditi. Jau ieviestās ISO 27001 un VDAR kontroles tiek izmantotas atkārtoti, un darbā pārvēršas tikai reālās nepilnības.
