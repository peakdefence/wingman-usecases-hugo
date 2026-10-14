---
title: Risku pārskatīšana un apstrāde
uc: risk-review
group: risk
weight: 70
summary: Pārskatīt riskus ar visu kopš pēdējās reizes savākto kontekstu, plānot to apstrādi un uzturēt vairākus risku līmeņus saskaņotus.
standards:
- ISO 27001 6.1, 8.2
- NIS2 21. pants
- DORA 6. pants
stages:
- title: Plānota pārskatīšana
  text: Pārskatīšana pienāk savā ciklā, un īpašnieks ir zināms.
  nodes:
  - plan
  - risk
  - role
  links:
  - plan-risk
  - role-risk
  ai: Laikus sagatavo pārskatīšanas materiālus.
  decides: Riska īpašnieks.
- title: Konteksts kopš pēdējās reizes
  text: Incidenti, kas risku īstenoja, signāli, kas uz to norāda, ievainojamības, kas to palielina, nokavēti uzdevumi.
  nodes:
  - risk
  - incident
  - signal
  - vulnerability
  - task
  links:
  - incident-risk
  - signal-risk
  - vulnerability-risk
  ai: Apkopo izmaiņas un ierosina jaunu vērtējumu.
  decides: Īpašnieks izvērtē.
- title: Vairāki līmeņi
  text: Procesu riski apkopojas uzņēmuma līmeņa riskos, un izmaiņas vienā līmenī ir redzamas otrā.
  nodes:
  - risk
  links:
  - risk-risk
  ai: Pārbauda, vai vērtējumi ir saskaņoti starp līmeņiem.
  decides: Risku vadītājs.
- title: Apstrādes plāns
  text: Mazināt, pieņemt, nodot vai novērst. Apstrāde kļūst par kontrolēm un uzdevumiem plānā.
  nodes:
  - risk
  - control
  - task
  - plan
  links:
  - control-risk
  - control-task
  - task-plan
  ai: Sagatavo apstrādes priekšlikumu katram riskam.
  decides: Īpašnieks apstiprina.
- title: Reģistra pārbaude
  text: Riski bez lēmuma, īpašnieka, kontroles vai uzdevuma tiek atrasti, pirms tos atrod auditors.
  nodes:
  - risk
  - role
  - control
  - task
  links:
  - role-risk
  - control-risk
  ai: Reģistra pārbaude uzskaita katru nepilnību ar saiti.
  decides: Labojumi tiek apstiprināti pa vienam.
---
