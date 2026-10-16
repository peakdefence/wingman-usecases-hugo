---
title: Management review
uc: management-review
group: compliance
weight: 120
summary: Prepare the ISO 27001 management review and NIS2 management body oversight with complete inputs, logged decisions and planned follow-up.
standards:
- ISO 27001 9.3
- NIS2 Art. 20
- DORA Art. 5
stages:
- title: Schedule
  text: The review is a recurring item in the plan, with the accountable role.
  nodes:
  - plan
  - role
  links:
  - role-plan
  ai: Builds the agenda from ISO 27001 clause 9.3.
  decides: The CISO.
  media:
  - task-calendar
  - plans-list
- title: Collect inputs
  text: Status of earlier actions, audit conclusions, risk changes, incidents, signals and supplier performance.
  nodes:
  - conclusion
  - requirement
  - risk
  - incident
  - signal
  - task
  links:
  - conclusion-requirement
  - incident-risk
  - signal-risk
  ai: Assembles the pack from the records.
  decides: The CISO reviews it.
- title: Meeting and minutes
  text: Decisions are recorded in the minutes as a document.
  nodes:
  - document
  - role
  links:
  - role-document
  ai: Drafts the minutes from notes.
  decides: The management body approves.
- title: Decisions to tasks
  text: Each decision leads to tasks in a plan with owners and dates.
  nodes:
  - document
  - task
  - plan
  links:
  - document-task
  - task-plan
  ai: Proposes the tasks.
  decides: Owners accept.
- title: Next time
  text: Open actions become inputs to the next review.
  nodes:
  - task
  - plan
  links:
  - task-plan
  ai: Tracks open actions.
  decides: The CISO.
---
