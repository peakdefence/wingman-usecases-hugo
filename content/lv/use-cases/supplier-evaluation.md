---
title: Piegādātāju novērtēšana
uc: supplier-evaluation
group: operations
weight: 40
summary: Novērtēt piegādātāja piemērotību pirms sadarbības sākšanas un turpināt to uzraudzīt arī pēc tam.
standards:
- NIS2 21. pants
- DORA
- ISO 27001 A.5.19–5.22
stages:
- title: Reģistrēšana
  text: Reģistrē, ko piegādātājs nodrošinās un kuri pakalpojumi un dati no tā būs atkarīgi.
  nodes:
  - supplier
  - asset
  links:
  - supplier-asset
  - asset-asset
  ai: Aizpilda piegādātāja ierakstu no pieprasījuma un publiskiem avotiem.
  decides: Pieprasītājs apstiprina.
- title: Kritiskums un risks
  text: Kritiskums izriet no aktīviem, ko tas skar. Esošie trešo pušu riski tiek izmantoti atkārtoti.
  nodes:
  - supplier
  - risk
  - asset
  links:
  - risk-supplier
  - risk-asset
  ai: Ierosina kritiskumu un atbilstošos riskus.
  decides: Riska īpašnieks apstiprina.
- title: Novērtēšana
  text: Anketa, sertifikāti, līguma un datu apstrādes noteikumi, izejas plāns.
  nodes:
  - audit
  - supplier
  - document
  - evidence
  links:
  - audit-supplier
  - supplier-document
  - audit-evidence
  ai: Pārbauda atbildes pret saņemtajiem pierādījumiem un uzskaita nepilnības.
  decides: Pārskata drošības un iepirkumu speciālisti.
- title: Lēmums
  text: Apstiprināt, apstiprināt ar nosacījumiem vai noraidīt. Nosacījumi kļūst par kontrolēm un uzdevumiem.
  nodes:
  - role
  - risk
  - control
  - task
  links:
  - role-risk
  - control-risk
  - control-task
  ai: Sagatavo lēmuma ierakstu un nosacījumus.
  decides: Atbildīgā loma izlemj.
- title: Uzraudzība
  text: Piegādātāju signāli un plānotas atkārtotas novērtēšanas uztur ierakstu aktuālu.
  nodes:
  - signal
  - supplier
  - plan
  - asset
  links:
  - signal-supplier
  - plan-asset
  ai: Seko piegādātāju jaunumiem un sertifikātu derīguma termiņiem.
  decides: Piegādātāja īpašnieks rīkojas.
---
