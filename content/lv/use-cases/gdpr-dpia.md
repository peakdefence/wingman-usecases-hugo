---
title: VDAR un DPIA
uc: gdpr-dpia
group: compliance
weight: 130
summary: Uzturēt apstrādes ķēdes un to riskus aktuālus un atbalstīt novērtējumus par ietekmi uz datu aizsardzību.
standards:
- VDAR 30. pants
- VDAR 35. pants
stages:
- title: Apstrādes reģistrs
  text: Katra apstrādes darbība ir aktīvs, kas sasaistīts ar izmantotajām sistēmām, datiem un piegādātājiem.
  nodes:
  - asset
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: Sagatavo apstrādes ķēdi no sistēmu un piegādātāju ierakstiem.
  decides: DAS apstiprina.
- title: Riski personām
  text: Riski ķēdē, tostarp piegādātāju un datu nosūtīšanas riski.
  nodes:
  - risk
  - asset
  - supplier
  - threat
  links:
  - risk-asset
  - risk-supplier
  - threat-risk
  ai: Ierosina riskus pēc apstrādes mērķa un datu veidiem.
  decides: DAS novērtē.
- title: Pasākumi
  text: Kontroles, kas aizsargā datus, un VDAR panti, ko tās izpilda.
  nodes:
  - control
  - risk
  - asset
  - requirement
  links:
  - control-risk
  - control-asset
  - requirement-control
  ai: Atkārtoti izmanto esošās kontroles.
  decides: Kontroļu īpašnieki apstiprina.
- title: DPIA ieraksts
  text: Novērtējums ir dokuments, kas sasaistīts ar aptverto darbību, konsultējoties ar DAS.
  nodes:
  - document
  - asset
  - role
  links:
  - document-asset
  - role-document
  ai: Sagatavo DPIA projektu no saistītajiem ierakstiem.
  decides: Pārzinis apstiprina.
- title: Pārskatīšana izmaiņu gadījumā
  text: DPIA tiek pārskatīts savā ciklā un ikreiz, kad signāls vai izmaiņas skar ķēdi.
  nodes:
  - plan
  - document
  - signal
  - risk
  links:
  - plan-document
  - signal-risk
  ai: Atzīmē izmaiņas ķēdē.
  decides: DAS.
---
