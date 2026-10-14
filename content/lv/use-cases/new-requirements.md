---
title: Jaunas prasības
uc: new-requirements
group: compliance
weight: 90
summary: Ieviest jaunu regulējumu vai standartu, atkārtoti izmantojot un sasaistot esošo, un pārējo virzīt ar uzdevumiem un plāniem.
standards:
- NIS2
- DORA
- CRA
- ISO 27001
stages:
- title: Importēšana
  text: Punkti tiek importēti burtiski un sasaistīti ar punktiem, ko jau sedz citi standarti.
  nodes:
  - requirement
  links:
  - requirement-requirement
  ai: Ierosina punktu sasaisti.
  decides: Atbilstības vadītājs apstiprina.
- title: Nepilnību analīze
  text: Katram punktam tiek atrastas esošās kontroles un to pierādījumi.
  nodes:
  - requirement
  - control
  - evidence
  links:
  - requirement-control
  - control-evidence
  ai: Atzīmē katru punktu kā segtu, daļēji segtu vai atvērtu.
  decides: Kontroļu īpašnieki apstiprina.
- title: Konteksts
  text: Riski, aktīvi un dokumenti, ko jaunie punkti skar, tiek sasaistīti, lai ietekme būtu redzama.
  nodes:
  - requirement
  - control
  - risk
  - asset
  - document
  links:
  - control-risk
  - control-asset
  - requirement-document
  ai: Atrod skartos aktīvus un politikas.
  decides: Īpašnieki apstiprina.
- title: Ieviešana
  text: Atvērtie punkti kļūst par ieviešamām kontrolēm, uzdevumiem un plānu ar atbildīgo lomu.
  nodes:
  - control
  - task
  - plan
  - role
  links:
  - control-task
  - task-plan
  - role-plan
  ai: Sagatavo ieviešanas plānu.
  decides: Atbildīgā loma apstiprina.
- title: Pierādīšana
  text: Tiek savākti pierādījumi, un audits pārbauda jaunos punktus.
  nodes:
  - control
  - evidence
  - audit
  - requirement
  links:
  - control-evidence
  - audit-requirement
  ai: Seko pierādījumu derīguma termiņiem.
  decides: Auditors izdara secinājumus.
---
