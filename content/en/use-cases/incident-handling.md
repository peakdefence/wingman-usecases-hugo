---
title: Incident handling
uc: incident-handling
group: operations
weight: 30
summary: Support every stage of an incident, from the first signal to the risk review it should trigger.
standards:
- NIS2 Art. 23
- DORA
- GDPR Art. 33
stages:
- title: Detection
  text: Monitoring alerts, supplier notices and threat news arrive as signals. Signals already tied to risks and assets are recognised sooner.
  nodes:
  - signal
  - incident
  - risk
  - supplier
  links:
  - signal-incident
  - signal-risk
  - signal-supplier
  ai: Groups related signals and proposes whether to open an incident.
  decides: The incident manager decides.
- title: Triage
  text: Affected services, everything that depends on them, and the risks involved set the severity and the reporting duties.
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
  ai: Proposes severity and whether NIS2, DORA or GDPR thresholds are met, with the deadlines that follow.
  decides: The incident manager classifies.
- title: Resolution
  text: Responders get their next steps as tasks, and the controls that failed or held are known.
  nodes:
  - incident
  - task
  - person
  - control
  links:
  - incident-task
  - person-task
  - control-task
  ai: Guides technicians step by step from runbooks linked to the affected assets.
  decides: Responders act; the incident manager closes.
- title: Communication
  text: Notices to the authority, customers, users and suppliers are drafted, sent and kept with the incident.
  nodes:
  - incident
  - document
  - supplier
  - role
  links:
  - incident-document
  - incident-supplier
  - role-incident
  ai: Drafts the authority report and the customer notice in time for the deadline.
  decides: The incident manager approves and sends.
- title: Post-mortem and risk review
  text: Root cause analysis links the incident to the risks it realised. A risk review is triggered as part of the post-mortem.
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
  ai: Guides the post-mortem and proposes rating changes and new controls.
  decides: The risk owner approves the changes.
---
