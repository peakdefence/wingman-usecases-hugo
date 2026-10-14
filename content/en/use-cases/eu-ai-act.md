---
title: EU AI Act
uc: eu-ai-act
group: compliance
weight: 150
summary: Keep an AI use case registry and link each use case to its obligations, risks and controls.
standards:
- EU AI Act
- ISO/IEC 42001
stages:
- title: AI use case registry
  text: Each AI use case is an asset, linked to the systems, data and suppliers it uses.
  nodes:
  - asset
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: Drafts entries from procurement and system records.
  decides: Use case owners confirm.
- title: Classification
  text: The risk category decides which obligations apply, and they map to obligations already met elsewhere.
  nodes:
  - requirement
  - asset
  links:
  - requirement-requirement
  ai: Proposes the category with reasons.
  decides: The compliance lead decides.
- title: Risks and controls
  text: Risks of the use case and the controls that meet the obligations.
  nodes:
  - risk
  - asset
  - control
  - requirement
  links:
  - risk-asset
  - control-risk
  - requirement-control
  ai: Reuses existing controls.
  decides: Owners confirm.
- title: Roles
  text: Provider or deployer duties sit with roles.
  nodes:
  - role
  - asset
  links:
  - role-asset
  ai: Lists duties per role.
  decides: Management assigns.
- title: Evidence and monitoring
  text: Evidence for each control, and signals from monitoring the system in use.
  nodes:
  - control
  - evidence
  - signal
  - risk
  links:
  - control-evidence
  - signal-risk
  ai: Tracks evidence expiry and incidents.
  decides: Owners act.
---
