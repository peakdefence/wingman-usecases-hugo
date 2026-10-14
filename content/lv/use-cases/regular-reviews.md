---
title: Regulāras pārskatīšanas
uc: regular-reviews
group: operations
weight: 100
summary: Veikt labajā praksē paredzētās pārskatīšanas (aktīvi, dokumenti, riski, incidenti, piekļuves) pēc kalendāra, nevis pēc atmiņas.
standards:
- ISO 27001
- NIS2
- DORA
stages:
- title: Pārskatīšanu kalendārs
  text: Viens plāns ietver visas atkārtotās pārskatīšanas ar to biežumu.
  nodes:
  - plan
  - role
  links:
  - role-plan
  ai: Izveido kalendāru no prasībām, kas paredz pārskatīšanas.
  decides: CISO apstiprina.
- title: Aktīvi un piegādātāji
  text: Īpašnieki apstiprina, ka viņu aktīvi, atkarības un piegādātāji ir aktuāli.
  nodes:
  - plan
  - asset
  - supplier
  - role
  links:
  - plan-asset
  - role-asset
  - supplier-asset
  ai: Katram īpašniekam uzskaita novecojušos ierakstus.
  decides: Īpašnieki apstiprina.
- title: Dokumenti
  text: Politikas un procedūras tiek pārskatītas savā ciklā.
  nodes:
  - plan
  - document
  - role
  links:
  - plan-document
  - role-document
  ai: Izceļ, kas mainījies kopš iepriekšējās versijas.
  decides: Dokumentu īpašnieki apstiprina.
- title: Riski un incidenti
  text: Riski tiek pārskatīti kopā ar perioda incidentiem.
  nodes:
  - plan
  - risk
  - incident
  links:
  - plan-risk
  - incident-risk
  ai: Sagatavo pārskatīšanas materiālus.
  decides: Risku īpašnieki izlemj.
- title: Piekļuves
  text: 'Piekļuves pārskats ir kontrole ar pierādījumiem katrā periodā: kurš pilda kuru lomu un kam ir kāda piekļuve.'
  nodes:
  - control
  - evidence
  - person
  - role
  links:
  - control-evidence
  - person-role
  ai: Salīdzina piekļuves sarakstus ar lomām.
  decides: Vadītāji apstiprina.
- title: Kavējumi
  text: Nokavētas pārskatīšanas parādās kā nokavēti uzdevumi ar atbildīgajiem.
  nodes:
  - task
  - person
  - plan
  links:
  - person-task
  - task-plan
  ai: Pēc jūsu apstiprinājuma sūta atgādinājumus jūsu vārdā.
  decides: Jūs izlemjat, kam atgādināt.
---
