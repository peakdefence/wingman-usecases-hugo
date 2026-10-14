---
title: Risku identificēšana
uc: risk-identification
group: risk
weight: 80
summary: Atrast jaunus riskus bez dublikātiem, sasaistīt tos ar visu attiecīgo un ļaut signāliem uzsākt identificēšanu vai atkārtotu pārskatīšanu.
standards:
- ISO 27001 6.1.2
- ISO 31000
- NIS2 21. pants
stages:
- title: Jautāt īpašniekam
  text: Intervija par mērķiem, par kuriem īpašnieks atbild, un to, kas tos apdraud.
  nodes:
  - role
  - person
  - risk
  links:
  - person-role
  - role-risk
  ai: Vada interviju pa vienam jautājumam.
  decides: Īpašnieks atbild.
- title: Salīdzināt pirms veidot
  text: Katrs apdraudējums tiek salīdzināts ar esošajiem riskiem pareizajā līmenī, pirms tiek veidots kaut kas jauns.
  nodes:
  - risk
  links:
  - risk-risk
  ai: Ierosina atbilstības un veido risku tikai tad, ja nekas neatbilst.
  decides: Īpašnieks apstiprina katru atbilstību.
- title: Sasaistīt
  text: Tiek sasaistīti aktīvi, piegādātāji, draudi un esošās kontroles.
  nodes:
  - risk
  - asset
  - supplier
  - threat
  - control
  links:
  - risk-asset
  - risk-supplier
  - threat-risk
  - control-risk
  ai: Pirms jebkura saistītā ieraksta izveides vispirms meklē esošos.
  decides: Īpašnieks apstiprina katru saiti.
- title: Signāli
  text: Kopā ar risku tiek reģistrēti indikatori, kas liecinātu par tā izmaiņām. Jauni signāli uzsāk identificēšanu vai atkārtotu pārskatīšanu.
  nodes:
  - signal
  - risk
  - threat
  links:
  - signal-risk
  - signal-threat
  ai: Ierosina indikatorus un sliekšņus.
  decides: Īpašnieks piekrīt.
- title: Plānotās kontroles
  text: Kontrolēm, kas vēl jāievieš, tiek izveidoti uzdevumi ar atbildīgajiem un termiņiem.
  nodes:
  - control
  - task
  - plan
  links:
  - control-task
  - task-plan
  ai: Sagatavo uzdevumus.
  decides: Īpašnieki pieņem.
---
