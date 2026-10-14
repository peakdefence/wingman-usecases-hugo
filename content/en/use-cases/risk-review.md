---
title: Risk review and treatment
uc: risk-review
group: risk
weight: 70
summary: Review risks with all the context gathered since last time, plan their treatment, and keep several levels of risk consistent.
standards:
- ISO 27001 6.1, 8.2
- NIS2 Art. 21
- DORA Art. 6
stages:
- title: Scheduled review
  text: The review comes round on its cycle, and the owner is known.
  nodes:
  - plan
  - risk
  - role
  links:
  - plan-risk
  - role-risk
  ai: Prepares the review pack in advance.
  decides: The risk owner.
- title: Context since last time
  text: Incidents that realised the risk, signals that point to it, vulnerabilities that raise it, overdue tasks.
  nodes:
  - risk
  - incident
  - signal
  - vulnerability
  - task
  links:
  - incident-risk
  - signal-risk
  - vulnerability-risk
  ai: Summarises what changed and proposes a new rating.
  decides: The owner judges.
- title: Several levels
  text: Process risks roll up into enterprise risks, and a change at one level is visible at the other.
  nodes:
  - risk
  links:
  - risk-risk
  ai: Checks that ratings are consistent across levels.
  decides: The risk manager.
- title: Treatment plan
  text: Treat, accept, transfer or avoid. Treatment becomes controls and tasks in a plan.
  nodes:
  - risk
  - control
  - task
  - plan
  links:
  - control-risk
  - control-task
  - task-plan
  ai: Drafts the treatment proposal for each risk.
  decides: The owner approves.
- title: Register check
  text: Risks without a decision, owner, control or task are found before an auditor finds them.
  nodes:
  - risk
  - role
  - control
  - task
  links:
  - role-risk
  - control-risk
  ai: The register check lists each gap with a link.
  decides: Fixes are confirmed one by one.
---
