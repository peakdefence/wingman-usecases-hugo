---
title: ES MI akts
uc: eu-ai-act
group: compliance
weight: 150
summary: Uzturēt MI lietojumu reģistru un sasaistīt katru lietojumu ar tā pienākumiem, riskiem un kontrolēm.
standards:
- ES MI akts
- ISO/IEC 42001
stages:
- title: MI lietojumu reģistrs
  text: Katrs MI lietojums ir aktīvs, kas sasaistīts ar izmantotajām sistēmām, datiem un piegādātājiem.
  nodes:
  - asset
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: Sagatavo ierakstus no iepirkumu un sistēmu ierakstiem.
  decides: Lietojumu īpašnieki apstiprina.
- title: Klasifikācija
  text: Riska kategorija nosaka piemērojamos pienākumus, un tie tiek sasaistīti ar jau citur izpildītiem pienākumiem.
  nodes:
  - requirement
  - asset
  links:
  - requirement-requirement
  ai: Ierosina kategoriju ar pamatojumu.
  decides: Atbilstības vadītājs izlemj.
- title: Riski un kontroles
  text: Lietojuma riski un kontroles, kas izpilda pienākumus.
  nodes:
  - risk
  - asset
  - control
  - requirement
  links:
  - risk-asset
  - control-risk
  - requirement-control
  ai: Atkārtoti izmanto esošās kontroles.
  decides: Īpašnieki apstiprina.
- title: Lomas
  text: Nodrošinātāja vai uzturētāja pienākumi ir piesaistīti lomām.
  nodes:
  - role
  - asset
  links:
  - role-asset
  ai: Uzskaita pienākumus katrai lomai.
  decides: Vadība nozīmē.
- title: Pierādījumi un uzraudzība
  text: Pierādījumi katrai kontrolei un signāli no sistēmas uzraudzības lietošanā.
  nodes:
  - control
  - evidence
  - signal
  - risk
  links:
  - control-evidence
  - signal-risk
  ai: Seko pierādījumu derīgumam un incidentiem.
  decides: Īpašnieki rīkojas.
---
