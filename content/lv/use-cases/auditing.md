---
title: Audits
uc: auditing
group: assurance
weight: 10
summary: Plānot, veikt un noslēgt iekšējo vai ārējo auditu, izmantojot ierakstus, kas organizācijai jau ir.
standards:
- ISO 27001
- NIS2
- DORA
stages:
- title: Tvērums
  text: Izvēlas tvērumā esošās prasības un produktus, pakalpojumus vai vietas, uz kurām tās attiecas.
  nodes:
  - audit
  - requirement
  - asset
  links:
  - audit-requirement
  - audit-asset
  ai: Audita prasme izveido prasību sarakstu no WINGMAN vai kontrolsaraksta, ņemot vērā uzņēmuma kontekstu.
  decides: Auditors apstiprina tvērumu un periodu.
- title: Deklarētās kontroles
  text: Izlasa politikas un procedūras, lai saprastu, kā organizācija apgalvo, ka izpilda katru prasību.
  nodes:
  - audit
  - document
  - control
  - requirement
  links:
  - audit-document
  - control-document
  - requirement-control
  ai: Katra prasība tiek atzīmēta kā dokumentēta, daļēji dokumentēta vai nedokumentēta, ar atsaucēm uz rindkopām. Nelasāmi dokumenti tiek atzīmēti.
  decides: Auditors pārskata sasaisti.
- title: Plāns un intervijas
  text: Interviju tēmas balstās uz uzņēmuma kontekstu, uzņēmuma nosauktajiem riskiem un WINGMAN atrastajiem riskiem. Katru interviju vada auditors.
  nodes:
  - audit
  - plan
  - risk
  - role
  - person
  links:
  - plan-audit
  - role-risk
  - person-role
  ai: Ierosina tēmas un papildjautājumus; transkribē lokāli.
  decides: Auditors izlemj, ko jautāt.
- title: Pierādījumi
  text: Savāc ierakstus, izlases un ekrānuzņēmumus, pārbauda to derīgumu un salīdzina darīto ar uzrakstīto.
  nodes:
  - audit
  - evidence
  - control
  links:
  - audit-evidence
  - control-evidence
  ai: Apsolītie pierādījumi tiek izsekoti ar termiņiem; transkripti un ekrānuzņēmumi kļūst par pierādījumiem pēc auditējamā apstiprinājuma.
  decides: Auditējamais apstiprina ierakstīto.
- title: Pamatota pārliecība
  text: Katrai prasībai izlemj, vai pierādījumi sniedz pamatotu pārliecību. Ja nesniedz, reģistrē konstatējumu.
  nodes:
  - audit
  - requirement
  - evidence
  - finding
  links:
  - audit-finding
  - evidence-finding
  - audit-requirement
  ai: Sagatavo konstatējumu projektus ar pierādījumiem un atsaucēm un ierosina nopietnību.
  decides: Auditors apstiprina vai maina katru konstatējumu.
- title: Secinājumi un turpmākā rīcība
  text: Apstiprinātie konstatējumi kļūst par secinājumiem katrai prasībai. Neatbilstībām tiek izveidoti korektīvie uzdevumi plānā, un ziņojums atgriežas WINGMAN.
  nodes:
  - finding
  - conclusion
  - requirement
  - task
  - plan
  - role
  links:
  - finding-conclusion
  - conclusion-requirement
  - finding-task
  - task-plan
  - role-plan
  ai: No katra konstatējuma ierosina korektīvos uzdevumus ar atbildīgajiem un termiņiem.
  decides: Vadība pieņem novēršanas plānu.
---
