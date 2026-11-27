---
title: Audits ar vairākiem tvērumiem
uc: audit-scopes
group: assurance
weight: 20
summary: 'Viens audits, vairāki produkti: vienu prasību katrā tvērumā var izpildīt dažādas kontroles, un secinājumi tiek izdarīti atsevišķi.'
standards:
- ISO 27001
- SOC 2
- Klientu auditi
stages:
- title: Divi tvērumi
  text: Produkts A un produkts B ir aktīvi audita tvērumā.
  nodes:
  - audit
  - asset
  links:
  - audit-asset
  - asset-asset
  ai: Tvērumi tiek nolasīti no aktīvu reģistra kopā ar atkarībām.
  decides: Auditors saskaņo tvērumus.
- title: Dažādas kontroles katram produktam
  text: Prasību par piekļuves tiesībām produktam A izpilda uz SSO balstīta piekļuves tiesību pārskatīšana, produktam B – manuāla pārskatīšana reizi ceturksnī. Katra kontrole aizsargā savu produktu.
  nodes:
  - requirement
  - control
  - asset
  links:
  - requirement-control
  - control-asset
  ai: Katrai prasībai parāda, kura kontrole attiecas uz kuru tvērumu, un atzīmē tvērumus bez kontroles.
  decides: Kontroļu īpašnieki apstiprina sasaisti.
- title: Pierādījumi katram tvērumam
  text: Pierādījumi tiek vākti katrai kontrolei, tāpēc katrs produkts tiek pārbaudīts pēc tā, kas tajā tiešām darbojas.
  nodes:
  - control
  - evidence
  - audit
  links:
  - control-evidence
  - audit-evidence
  ai: Var ierosināt izlasi katram tvērumam; izlasi veic auditors.
  decides: Auditors veic izlasi.
- title: Secinājums katram tvērumam
  text: Produktam A prasība var būt izpildīta, bet produktam B var būt konstatēta neatbilstība. Katrs secinājums saglabā savu tvērumu.
  nodes:
  - finding
  - conclusion
  - requirement
  - asset
  - audit
  links:
  - finding-conclusion
  - conclusion-requirement
  - audit-asset
  ai: Sagatavo vienu secinājumu katrai prasībai un tvērumam.
  decides: Auditors apstiprina.
- title: Kopīga turpmākā rīcība
  text: Lai novērstu neatbilstību produktam B, var izmantot kontroli, kuras darbība jau pierādīta produktam A.
  nodes:
  - task
  - control
  - plan
  links:
  - control-task
  - task-plan
  ai: Iesaka vispirms izmantot esošās kontroles un tikai tad veidot jaunas.
  decides: Kontroles īpašnieks.
---
