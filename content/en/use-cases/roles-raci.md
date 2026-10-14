---
title: Roles and RACI
uc: roles-raci
group: accountability
weight: 110
summary: Make responsibilities explicit, and find gaps in coverage and conflicts in segregation of duties.
standards:
- ISO 27001 5.3
- NIS2 Art. 20
- DORA Art. 5
stages:
- title: Roles
  text: Roles are defined in documents and held by people.
  nodes:
  - role
  - document
  - person
  links:
  - role-document
  - person-role
  ai: Drafts role descriptions from the organisation structure.
  decides: Management approves.
- title: RACI on every record
  text: Who is responsible, accountable, consulted and informed for risks, controls, assets, plans and incidents.
  nodes:
  - role
  - risk
  - control
  - asset
  - plan
  - incident
  links:
  - role-risk
  - role-control
  - role-asset
  - role-plan
  - role-incident
  ai: Builds the RACI matrix from the links.
  decides: Role holders confirm.
- title: Coverage gaps
  text: Records with no accountable role are listed.
  nodes:
  - role
  - control
  - risk
  links:
  - role-control
  - role-risk
  ai: Lists unowned records by area.
  decides: The CISO assigns owners.
- title: Segregation of duties
  text: One person holding roles that should be separate, such as implementing and approving changes.
  nodes:
  - person
  - role
  links:
  - person-role
  ai: Flags conflicting combinations from rules you set.
  decides: Management decides.
  conflict: true
- title: Deputies and handover
  text: When a person leaves, their roles move to a deputy and every record follows.
  nodes:
  - person
  - role
  - task
  links:
  - person-role
  - person-task
  ai: Lists everything the leaver owns.
  decides: The manager reassigns.
---
