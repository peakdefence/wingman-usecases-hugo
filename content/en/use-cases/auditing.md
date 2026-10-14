---
title: Auditing
uc: auditing
group: assurance
weight: 10
summary: Plan, run and close an internal or external audit on the records the organisation already keeps.
standards:
- ISO 27001
- NIS2
- DORA
stages:
- title: Scope
  text: Select the requirements in scope and the products, services or sites they apply to.
  nodes:
  - audit
  - requirement
  - asset
  links:
  - audit-requirement
  - audit-asset
  ai: The audit skill builds the requirement list from WINGMAN or from a checklist workbook, with company context.
  decides: The auditor confirms scope and period.
- title: Claimed controls
  text: Read policies and procedures to learn how the organisation says it meets each requirement.
  nodes:
  - audit
  - document
  - control
  - requirement
  links:
  - audit-document
  - control-document
  - requirement-control
  ai: Each requirement is marked documented, partly documented or not documented, with paragraph references. Unreadable documents are flagged.
  decides: The auditor reviews the mapping.
- title: Plan and interviews
  text: Interview topics come from company context, the risks the company named and the risks WINGMAN found. The auditor leads each interview.
  nodes:
  - audit
  - plan
  - risk
  - role
  - person
  links:
  - plan-audit
  - role-risk
  - person-role
  ai: Proposes topics and follow-up questions; transcribes locally.
  decides: The auditor decides what to ask.
- title: Evidence
  text: Collect records, samples and screenshots, check their validity, and compare what is done with what is written.
  nodes:
  - audit
  - evidence
  - control
  links:
  - audit-evidence
  - control-evidence
  ai: Promised evidence is tracked with due dates; transcripts and screenshots become evidence once the auditee approves them.
  decides: The auditee approves what was recorded.
- title: Reasonable assurance
  text: For each requirement, decide whether the evidence gives reasonable assurance. Where it does not, raise a finding.
  nodes:
  - audit
  - requirement
  - evidence
  - finding
  links:
  - audit-finding
  - evidence-finding
  - audit-requirement
  ai: Drafts findings with evidence and paragraph references and proposes severity.
  decides: The auditor confirms or changes each finding.
- title: Conclusions and follow-up
  text: Confirmed findings become conclusions per requirement. Nonconformities get corrective tasks in a plan, and the report goes back into WINGMAN.
  nodes:
  - finding
  - conclusion
  - requirement
  - task
  - plan
  - role
  links:
  - finding-conclusion
  - conclusion-requirement
  - finding-task
  - task-plan
  - role-plan
  ai: Proposes corrective tasks with owners and dates from each finding.
  decides: Management accepts the fix plan.
---
