---
title: Izmaiņu pārvaldība
uc: change-management
group: operations
weight: 50
summary: Novērtēt plānotu izmaiņu ietekmi, izlemt nepieciešamās kontroles pirms un pēc tām un rezultātā uzturēt vienotus ierakstus.
standards:
- ISO 27001 A.8.32
- DORA
- NIS2 21. pants
stages:
- title: Izvērtēšana
  text: Izmaiņu pieprasījums tiek pārbaudīts pret aktivizēšanas noteikumiem. Zem sliekšņa tiek izveidots īss ieraksts, virs tā – pilns novērtējums.
  nodes:
  - document
  - asset
  links:
  - document-asset
  ai: Piemēro aktivizēšanas noteikumus; iniciators var eskalēt, bet ne pazemināt.
  decides: Inženieris un drošības pārskatītājs.
- title: Ietekme
  text: Skartie aktīvi un no tiem atkarīgie, esošie riski un atvērtās ievainojamības tajos.
  nodes:
  - asset
  - risk
  - vulnerability
  links:
  - asset-asset
  - risk-asset
  - vulnerability-asset
  ai: Vispirms meklē esošos riskus un ierosina jaunu tikai tad, ja nekas neatbilst.
  decides: Pārskatītājs apstiprina.
- title: Kontroles pirms un pēc
  text: Esošās kontroles tiek atrastas un izmantotas atkārtoti; trūkstošās tiek ierosinātas kā priekšnosacījumi vai pārbaudes pēc izmaiņām.
  nodes:
  - control
  - risk
  - asset
  - requirement
  links:
  - control-risk
  - control-asset
  - requirement-control
  ai: Uzskaita kontroles, kas vajadzīgas pirms un pēc izmaiņām, kopā ar prasībām.
  decides: Kontroļu īpašnieki piekrīt.
- title: Lēmums
  text: Izmaiņu padome apstiprina novērtējumu. Tās lēmums rada priekšnosacījumu uzdevumus ar atbildīgajiem un termiņiem.
  nodes:
  - role
  - document
  - task
  links:
  - document-task
  - role-document
  ai: Sagatavo novērtējumu padomei vienkāršā valodā.
  decides: Izmaiņu padome izlemj.
- title: Pēc izmaiņām
  text: Riska līmeņi, kontroles un uzdevumi tiek atjaunoti tajos pašos ierakstos, tāpēc nākamās izmaiņas sākas no aktuāliem datiem.
  nodes:
  - control
  - task
  - plan
  - risk
  links:
  - control-task
  - task-plan
  - control-risk
  ai: Pēc apstiprināšanas reģistrē saskaņotos atjauninājumus.
  decides: Īpašnieki apstiprina katru atjauninājumu.
---
