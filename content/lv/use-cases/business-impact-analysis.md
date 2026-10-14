---
title: Darbības ietekmes analīze
uc: business-impact-analysis
group: risk
weight: 140
summary: Novērtēt, cik ilgi katrs pakalpojums var nedarboties un kāda atjaunošana tam nepieciešama, balstoties uz jau reģistrētajiem pakalpojumiem, riskiem un kontrolēm.
standards:
- ISO 22301
- DORA 11. pants
- NIS2 21. pants
stages:
- title: Pakalpojumi
  text: Pakalpojumi ar tos atbalstošajiem aktīviem un piegādātājiem.
  nodes:
  - asset
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: BIA prasme iepriekš aizpilda pakalpojumus un atkarības no WINGMAN.
  decides: Pakalpojumu īpašnieki apstiprina.
- title: Ietekme laikā
  text: Viena BIA kontrole katram pakalpojumam reģistrē ietekmi laikā un atjaunošanas mērķus.
  nodes:
  - control
  - asset
  links:
  - control-asset
  ai: Intervē pa pakalpojumiem un nekad nesecina atjaunošanas laiku no pieejamības rādītājiem.
  decides: Pakalpojumu īpašnieki izlemj.
- title: Riski un incidenti
  text: Pārtraukumu riski un iepriekšējie incidenti katram pakalpojumam.
  nodes:
  - risk
  - asset
  - incident
  links:
  - risk-asset
  - incident-asset
  ai: Ierosina saistītos riskus.
  decides: Risku īpašnieki apstiprina.
- title: Atjaunošanas kontroles un testi
  text: Atjaunošanas kontroles, to testi kā uzdevumi un testu rezultāti kā pierādījumi.
  nodes:
  - control
  - task
  - evidence
  links:
  - control-task
  - control-evidence
  ai: Reģistrē testēšanas vajadzības kā darbības.
  decides: Īpašnieki plāno testus.
---
