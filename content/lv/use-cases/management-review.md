---
title: Vadības pārskats
uc: management-review
group: compliance
weight: 120
summary: Sagatavot ISO 27001 vadības pārskatu un NIS2 vadības struktūras uzraudzību ar pilnīgiem ievaddatiem, reģistrētiem lēmumiem un plānotu turpmāko rīcību.
standards:
- ISO 27001 9.3
- NIS2 20. pants
- DORA 5. pants
stages:
- title: Grafiks
  text: Pārskats ir atkārtots punkts plānā ar atbildīgo lomu.
  nodes:
  - plan
  - role
  links:
  - role-plan
  ai: Sagatavo darba kārtību pēc ISO 27001 9.3. punkta.
  decides: CISO.
- title: Ievaddatu apkopošana
  text: Iepriekšējo darbību statuss, audita secinājumi, risku izmaiņas, incidenti, signāli un piegādātāju darbība.
  nodes:
  - conclusion
  - requirement
  - risk
  - incident
  - signal
  - task
  links:
  - conclusion-requirement
  - incident-risk
  - signal-risk
  ai: Apkopo materiālus no ierakstiem.
  decides: CISO tos pārskata.
- title: Sanāksme un protokols
  text: Lēmumi tiek ierakstīti protokolā kā dokuments.
  nodes:
  - document
  - role
  links:
  - role-document
  ai: Sagatavo protokola projektu no piezīmēm.
  decides: Vadības struktūra apstiprina.
- title: No lēmumiem uz uzdevumiem
  text: Katrs lēmums rada uzdevumus plānā ar atbildīgajiem un termiņiem.
  nodes:
  - document
  - task
  - plan
  links:
  - document-task
  - task-plan
  ai: Ierosina uzdevumus.
  decides: Atbildīgie pieņem.
- title: Nākamreiz
  text: Atvērtās darbības kļūst par ievaddatiem nākamajam pārskatam.
  nodes:
  - task
  - plan
  links:
  - task-plan
  ai: Seko atvērtajām darbībām.
  decides: CISO.
---
