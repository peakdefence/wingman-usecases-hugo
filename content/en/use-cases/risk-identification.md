---
title: Risk identification
uc: risk-identification
group: risk
weight: 80
summary: Find new risks without duplicates, link them to everything relevant, and let signals start identification or a re-review.
standards:
- ISO 27001 6.1.2
- ISO 31000
- NIS2 Art. 21
stages:
- title: Ask the owner
  text: An interview about the goals the owner is responsible for and what threatens them.
  nodes:
  - role
  - person
  - risk
  links:
  - person-role
  - role-risk
  ai: Runs the interview one question at a time.
  decides: The owner answers.
- title: Match before creating
  text: Each concern is matched to existing risks at the right level before anything new is created.
  nodes:
  - risk
  links:
  - risk-risk
  ai: Proposes matches and creates a risk only when nothing fits.
  decides: The owner confirms each match.
- title: Link
  text: Assets, suppliers, threats and existing controls are linked.
  nodes:
  - risk
  - asset
  - supplier
  - threat
  - control
  links:
  - risk-asset
  - risk-supplier
  - threat-risk
  - control-risk
  ai: Searches before creating any linked record.
  decides: The owner approves each link.
- title: Signals
  text: Indicators that would show the risk is changing are recorded with it. New signals start identification or a re-review.
  nodes:
  - signal
  - risk
  - threat
  links:
  - signal-risk
  - signal-threat
  ai: Proposes indicators and thresholds.
  decides: The owner agrees.
- title: Planned controls
  text: Controls still to be built get tasks with owners and dates.
  nodes:
  - control
  - task
  - plan
  links:
  - control-task
  - task-plan
  ai: Drafts the tasks.
  decides: Owners accept.
---
