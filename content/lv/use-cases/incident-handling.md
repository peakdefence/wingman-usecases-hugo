---
title: Incidentu pārvaldība
uc: incident-handling
group: operations
weight: 30
summary: Atbalsts katrā incidenta posmā, no pirmā signāla līdz risku pārskatīšanai, ko tam vajadzētu izraisīt.
standards:
- NIS2 23. pants
- DORA
- VDAR 33. pants
stages:
- title: Atklāšana
  text: Monitoringa brīdinājumi, piegādātāju paziņojumi un draudu jaunumi ienāk kā signāli. Signāli, kas jau saistīti ar riskiem un aktīviem, tiek atpazīti ātrāk.
  nodes:
  - signal
  - incident
  - risk
  - supplier
  links:
  - signal-incident
  - signal-risk
  - signal-supplier
  ai: Sagrupē saistītos signālus un ierosina, vai atvērt incidentu.
  decides: Incidentu vadītājs izlemj.
- title: Izvērtēšana
  text: Skartie pakalpojumi, viss, kas no tiem atkarīgs, un iesaistītie riski nosaka nopietnību un ziņošanas pienākumus.
  nodes:
  - incident
  - asset
  - risk
  - role
  links:
  - incident-asset
  - asset-asset
  - incident-risk
  - role-incident
  ai: Ierosina nopietnību un to, vai sasniegti NIS2, DORA vai VDAR sliekšņi, ar no tā izrietošajiem termiņiem.
  decides: Incidentu vadītājs klasificē.
- title: Novēršana
  text: Reaģētāji saņem nākamos soļus kā uzdevumus, un ir zināms, kuras kontroles nenostrādāja vai nostrādāja.
  nodes:
  - incident
  - task
  - person
  - control
  links:
  - incident-task
  - person-task
  - control-task
  ai: Soli pa solim vada tehniķus pēc instrukcijām, kas saistītas ar skartajiem aktīviem.
  decides: Reaģētāji rīkojas; incidentu vadītājs slēdz.
- title: Komunikācija
  text: Paziņojumi iestādei, klientiem, lietotājiem un piegādātājiem tiek sagatavoti, nosūtīti un saglabāti pie incidenta.
  nodes:
  - incident
  - document
  - supplier
  - role
  links:
  - incident-document
  - incident-supplier
  - role-incident
  ai: Sagatavo ziņojumu iestādei un paziņojumu klientiem laikus līdz termiņam.
  decides: Incidentu vadītājs apstiprina un nosūta.
- title: Pēcincidenta analīze un risku pārskatīšana
  text: Pamatcēloņu analīze sasaista incidentu ar riskiem, ko tas īstenoja. Pēcincidenta analīzes ietvaros tiek uzsākta risku pārskatīšana.
  nodes:
  - incident
  - risk
  - plan
  - control
  - task
  links:
  - incident-risk
  - plan-risk
  - control-risk
  - control-task
  ai: Vada pēcincidenta analīzi un ierosina vērtējumu izmaiņas un jaunas kontroles.
  decides: Riska īpašnieks apstiprina izmaiņas.
---
