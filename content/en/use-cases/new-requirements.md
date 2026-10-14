---
title: New requirements
uc: new-requirements
group: compliance
weight: 90
summary: Implement a new regulation or standard by reusing and linking what already exists, then drive the rest with tasks and plans.
standards:
- NIS2
- DORA
- CRA
- ISO 27001
stages:
- title: Import
  text: Clauses are imported verbatim and mapped to clauses already covered by other standards.
  nodes:
  - requirement
  links:
  - requirement-requirement
  ai: Proposes clause-to-clause mappings.
  decides: The compliance lead confirms.
- title: Gap analysis
  text: Existing controls and their evidence are looked up for each clause.
  nodes:
  - requirement
  - control
  - evidence
  links:
  - requirement-control
  - control-evidence
  ai: Marks each clause covered, partly covered or open.
  decides: Control owners confirm.
- title: Context
  text: The risks, assets and documents the new clauses touch are linked, so impact is visible.
  nodes:
  - requirement
  - control
  - risk
  - asset
  - document
  links:
  - control-risk
  - control-asset
  - requirement-document
  ai: Finds affected assets and policies.
  decides: Owners confirm.
- title: Implement
  text: Open clauses become controls to build, tasks and a plan with an accountable role.
  nodes:
  - control
  - task
  - plan
  - role
  links:
  - control-task
  - task-plan
  - role-plan
  ai: Drafts the implementation plan.
  decides: The accountable role approves.
- title: Prove
  text: Evidence is collected and an audit tests the new clauses.
  nodes:
  - control
  - evidence
  - audit
  - requirement
  links:
  - control-evidence
  - audit-requirement
  ai: Tracks evidence expiry.
  decides: The auditor concludes.
---
