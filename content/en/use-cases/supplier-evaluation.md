---
title: Supplier evaluation
uc: supplier-evaluation
group: operations
weight: 40
summary: Evaluate a supplier for feasibility before onboarding, and keep watching it afterwards.
standards:
- NIS2 Art. 21
- DORA
- ISO 27001 A.5.19–5.22
stages:
- title: Register
  text: Record what the supplier will provide and which services and data depend on it.
  nodes:
  - supplier
  - asset
  links:
  - supplier-asset
  - asset-asset
  ai: Fills the supplier record from the request and public sources.
  decides: The requester confirms.
- title: Criticality and risk
  text: Criticality follows from the assets it touches. Existing third-party risks are reused.
  nodes:
  - supplier
  - risk
  - asset
  links:
  - risk-supplier
  - risk-asset
  ai: Proposes criticality and matching risks.
  decides: The risk owner confirms.
- title: Evaluation
  text: Questionnaire, certifications, contract and data processing terms, exit plan.
  nodes:
  - audit
  - supplier
  - document
  - evidence
  links:
  - audit-supplier
  - supplier-document
  - audit-evidence
  ai: Reviews the answers against the evidence received and lists gaps.
  decides: Security and procurement review.
- title: Decision
  text: Approve, approve with conditions, or reject. Conditions become controls and tasks.
  nodes:
  - role
  - risk
  - control
  - task
  links:
  - role-risk
  - control-risk
  - control-task
  ai: Drafts the decision record and the conditions.
  decides: The accountable role decides.
- title: Monitoring
  text: Supplier signals and scheduled re-evaluations keep the record current.
  nodes:
  - signal
  - supplier
  - plan
  - asset
  links:
  - signal-supplier
  - plan-asset
  ai: Watches for supplier news and certificate expiry.
  decides: The supplier owner acts.
---
