---
title: Audit with several scopes
uc: audit-scopes
group: assurance
weight: 20
summary: 'One audit, several products: the same requirement can be met by different controls in each scope, and concluded separately.'
standards:
- ISO 27001
- SOC 2
- Customer audits
stages:
- title: Two scopes
  text: Product A and Product B are both assets in the audit scope.
  nodes:
  - audit
  - asset
  links:
  - audit-asset
  - asset-asset
  ai: Scopes are read from the asset register with their dependencies.
  decides: The auditor agrees the scopes.
- title: Different controls per product
  text: Access rights are met by SSO-based reviews for Product A and by a manual quarterly review for Product B. Each control protects its own product.
  nodes:
  - requirement
  - control
  - asset
  links:
  - requirement-control
  - control-asset
  ai: Lists, per requirement, which control applies to which scope, and flags scopes with none.
  decides: Control owners confirm the mapping.
- title: Evidence per scope
  text: Evidence is collected per control, so each product is tested on what it actually runs.
  nodes:
  - control
  - evidence
  - audit
  links:
  - control-evidence
  - audit-evidence
  ai: Proposes samples per scope.
  decides: The auditor samples.
- title: Conclusion per scope
  text: A requirement can be compliant for Product A and a nonconformity for Product B. Each conclusion keeps its scope.
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
  ai: Drafts one conclusion per requirement and scope.
  decides: The auditor confirms.
- title: Shared follow-up
  text: The fix for Product B can reuse the control already proven for Product A.
  nodes:
  - task
  - control
  - plan
  links:
  - control-task
  - task-plan
  ai: Suggests reusing existing controls before creating new ones.
  decides: The control owner decides.
---
