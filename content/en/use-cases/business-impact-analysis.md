---
title: Business impact analysis
uc: business-impact-analysis
group: risk
weight: 140
summary: Assess how long each service can be down and what recovery it needs, from the services, risks and controls already recorded.
standards:
- ISO 22301
- DORA Art. 11
- NIS2 Art. 21
stages:
- title: Services
  text: Service offerings with their supporting assets and suppliers.
  nodes:
  - asset
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: The BIA skill prefills services and dependencies from WINGMAN.
  decides: Service owners confirm.
- title: Impact over time
  text: One BIA control per service records the impact over time and the recovery objectives.
  nodes:
  - control
  - asset
  links:
  - control-asset
  ai: Interviews service by service and never infers recovery time from uptime figures.
  decides: Service owners decide.
- title: Risks and incidents
  text: Outage risks and past incidents on each service.
  nodes:
  - risk
  - asset
  - incident
  links:
  - risk-asset
  - incident-asset
  ai: Proposes related risks.
  decides: Risk owners confirm.
- title: Recovery controls and tests
  text: Recovery controls, their tests as tasks, and test results as evidence.
  nodes:
  - control
  - task
  - evidence
  links:
  - control-task
  - control-evidence
  ai: Records testing needs as actions.
  decides: Owners plan the tests.
---
