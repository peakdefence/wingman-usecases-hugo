---
title: Regular reviews
uc: regular-reviews
group: operations
weight: 100
summary: Run the reviews good practice expects (assets, documents, risks, incidents, access) on a calendar instead of from memory.
standards:
- ISO 27001
- NIS2
- DORA
stages:
- title: Review calendar
  text: One plan holds every recurring review with its cadence.
  nodes:
  - plan
  - role
  links:
  - role-plan
  ai: Builds the calendar from the requirements that ask for reviews.
  decides: The CISO approves.
- title: Assets and suppliers
  text: Owners confirm their assets, dependencies and suppliers are current.
  nodes:
  - plan
  - asset
  - supplier
  - role
  links:
  - plan-asset
  - role-asset
  - supplier-asset
  ai: Lists stale records per owner.
  decides: Owners confirm.
- title: Documents
  text: Policies and procedures come up for review on their cycle.
  nodes:
  - plan
  - document
  - role
  links:
  - plan-document
  - role-document
  ai: Highlights what changed since the last version.
  decides: Document owners approve.
- title: Risks and incidents
  text: Risks are reviewed together with the incidents of the period.
  nodes:
  - plan
  - risk
  - incident
  links:
  - plan-risk
  - incident-risk
  ai: Prepares the review pack.
  decides: Risk owners decide.
- title: Access
  text: 'Access review is a control with evidence each period: who holds which role and which access.'
  nodes:
  - control
  - evidence
  - person
  - role
  links:
  - control-evidence
  - person-role
  ai: Compares access lists with roles.
  decides: Managers confirm.
- title: Delays
  text: Overdue reviews show up as late tasks with their owners.
  nodes:
  - task
  - person
  - plan
  links:
  - person-task
  - task-plan
  ai: Sends reminders in your name after you approve them.
  decides: You decide who is reminded.
---
