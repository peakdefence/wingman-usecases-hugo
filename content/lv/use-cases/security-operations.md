---
title: Drošības darbību vadība
uc: security-operations
group: operations
weight: 160
summary: Vadīt drošības darbu ar plāniem un uzdevumiem, ar kopsavilkumiem, atgādinājumiem un eskalācijām, un jautāt "kas jāizdara" visam, ko modelis zina.
standards:
- ISO 27001
- NIS2 21. pants
stages:
- title: Plāni
  text: Katra programma ir plāns ar atbildīgo lomu.
  nodes:
  - plan
  - role
  - task
  links:
  - role-plan
  - task-plan
  ai: Parāda progresu katram plānam.
  decides: CISO.
- title: Ikdienas darbs
  text: Uzdevumi rodas no kontrolēm, ievainojamībām, incidentiem un konstatējumiem un nonāk pie cilvēkiem.
  nodes:
  - task
  - person
  - control
  - vulnerability
  - incident
  - finding
  links:
  - person-task
  - control-task
  - vulnerability-task
  - incident-task
  - finding-task
  ai: No saitēm atbild, "kas jāizdara šonedēļ".
  decides: Katrs cilvēks.
- title: Kopsavilkumi un atgādinājumi
  text: Kopsavilkumi par to, kam pienācis termiņš, kas nokavēts vai bloķēts, un atgādinājumi īpašniekiem.
  nodes:
  - task
  - person
  - plan
  links:
  - person-task
  - task-plan
  ai: Sagatavo kopsavilkumu un pēc jūsu apstiprinājuma sūta atgādinājumus jūsu vārdā.
  decides: Jūs apstiprināt katru sūtījumu.
- title: Eskalācija
  text: Kavējumi kritiskā darbā tiek nodoti atbildīgajai lomai.
  nodes:
  - role
  - plan
  - task
  links:
  - role-plan
  - task-plan
  ai: Ierosina eskalācijas pēc ietekmes.
  decides: Atbildīgā loma.
- title: No signāliem uz darbu
  text: Jauni signāli kļūst par uzdevumiem, ja nepieciešama rīcība.
  nodes:
  - signal
  - incident
  - vulnerability
  - task
  links:
  - signal-incident
  - signal-vulnerability
  - vulnerability-task
  ai: Izvērtē signālus un ierosina darbus.
  decides: Drošības vadītājs izlemj.
---
