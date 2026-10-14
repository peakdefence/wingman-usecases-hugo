---
title: Change management
uc: change-management
group: operations
weight: 50
summary: Assess a planned change for impact, decide the controls needed before and after it, and keep one set of records as the result.
standards:
- ISO 27001 A.8.32
- DORA
- NIS2 Art. 21
stages:
- title: Triage
  text: The change request is checked against trigger rules. Below the threshold it gets a short record; above it, a full assessment.
  nodes:
  - document
  - asset
  links:
  - document-asset
  ai: Applies the trigger rules; the initiator can escalate but not downgrade.
  decides: The engineer and the security reviewer.
- title: Impact
  text: Affected assets and their dependants, existing risks and open vulnerabilities on them.
  nodes:
  - asset
  - risk
  - vulnerability
  links:
  - asset-asset
  - risk-asset
  - vulnerability-asset
  ai: Looks up existing risks first and proposes a new one only when nothing fits.
  decides: The reviewer confirms.
- title: Controls before and after
  text: Existing controls are looked up and reused; missing ones are proposed as pre-conditions or post-change checks.
  nodes:
  - control
  - risk
  - asset
  - requirement
  links:
  - control-risk
  - control-asset
  - requirement-control
  ai: Lists pre-required and post-required controls with their requirements.
  decides: Control owners agree.
- title: Decision
  text: The change board approves the assessment. Its decision leads to pre-condition tasks with owners and dates.
  nodes:
  - role
  - document
  - task
  links:
  - document-task
  - role-document
  ai: Prepares the assessment for the board in plain language.
  decides: The change board decides.
- title: After the change
  text: Risk levels, controls and tasks are updated in the same records, so the next change starts from current data.
  nodes:
  - control
  - task
  - plan
  - risk
  links:
  - control-task
  - task-plan
  - control-risk
  ai: Records the agreed updates after approval.
  decides: Owners confirm each update.
---
