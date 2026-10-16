---
title: Security operations control
uc: security-operations
group: operations
weight: 160
summary: Run security work through plans and tasks, with briefs, reminders and escalations, and ask "what needs to be done" against everything the model knows.
standards:
- ISO 27001
- NIS2 Art. 21
stages:
- title: Plans
  text: Every programme is a plan with an accountable role.
  nodes:
  - plan
  - role
  - task
  links:
  - role-plan
  - task-plan
  media:
  - plans-list
  ai: Shows progress per plan.
  decides: The CISO.
- title: Daily work
  text: Tasks come from controls, vulnerabilities, incidents and findings, and land with people.
  nodes:
  - task
  - person
  - control
  - vulnerability
  - incident
  - finding
  links:
  - person-task
  - control-task
  - vulnerability-task
  - incident-task
  - finding-task
  media:
  - brief-top
  - task-list
  ai: Answers "what needs to be done this week" from the links.
  decides: Each person.
- title: Briefs and reminders
  text: Briefs on what is due, late or blocked, and reminders to owners.
  nodes:
  - task
  - person
  - plan
  links:
  - person-task
  - task-plan
  media:
  - brief-top
  - notif-email-signal
  ai: Writes the brief and sends reminders in your name after you approve them.
  decides: You approve each send.
- title: Escalation
  text: Delays on critical work go to the accountable role.
  nodes:
  - role
  - plan
  - task
  links:
  - role-plan
  - task-plan
  media:
  - task-overdue
  ai: Proposes escalations by impact.
  decides: The accountable role.
- title: Signals into work
  text: New signals become tasks when they need action.
  nodes:
  - signal
  - incident
  - vulnerability
  - task
  links:
  - signal-incident
  - signal-vulnerability
  - vulnerability-task
  media:
  - sig-inbox
  - ask-skill-incident-triage-4-accepted
  ai: Triages signals into proposed work.
  decides: The security lead decides.
---
