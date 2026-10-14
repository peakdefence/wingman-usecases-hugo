---
title: Lomas un RACI
uc: roles-raci
group: accountability
weight: 110
summary: Padarīt atbildību skaidru un atrast nepilnības pārklājumā un konfliktus pienākumu nošķiršanā.
standards:
- ISO 27001 5.3
- NIS2 20. pants
- DORA 5. pants
stages:
- title: Lomas
  text: Lomas ir noteiktas dokumentos, un tās pilda cilvēki.
  nodes:
  - role
  - document
  - person
  links:
  - role-document
  - person-role
  ai: Sagatavo lomu aprakstus no organizācijas struktūras.
  decides: Vadība apstiprina.
- title: RACI katram ierakstam
  text: Kas ir izpildītājs, atbildīgais, konsultējamais un informējamais par riskiem, kontrolēm, aktīviem, plāniem un incidentiem.
  nodes:
  - role
  - risk
  - control
  - asset
  - plan
  - incident
  links:
  - role-risk
  - role-control
  - role-asset
  - role-plan
  - role-incident
  ai: Izveido RACI matricu no saitēm.
  decides: Lomu izpildītāji apstiprina.
- title: Pārklājuma nepilnības
  text: Tiek uzskaitīti ieraksti bez atbildīgās lomas.
  nodes:
  - role
  - control
  - risk
  links:
  - role-control
  - role-risk
  ai: Uzskaita ierakstus bez īpašnieka pa jomām.
  decides: CISO nozīmē īpašniekus.
- title: Pienākumu nošķiršana
  text: Viena persona pilda lomas, kurām jābūt nošķirtām, piemēram, izmaiņu ieviešanu un apstiprināšanu.
  nodes:
  - person
  - role
  links:
  - person-role
  ai: Atzīmē nesavienojamas kombinācijas pēc jūsu noteiktiem noteikumiem.
  decides: Vadība izlemj.
  conflict: true
- title: Aizvietotāji un nodošana
  text: Kad cilvēks aiziet, viņa lomas pāriet aizvietotājam, un visi ieraksti seko.
  nodes:
  - person
  - role
  - task
  links:
  - person-role
  - person-task
  ai: Uzskaita visu, kas pieder aizejošajam darbiniekam.
  decides: Vadītājs pārdala.
---
