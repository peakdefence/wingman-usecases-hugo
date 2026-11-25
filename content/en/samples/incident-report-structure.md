---
title: "Incident reports to CERT.LV: a structural example"
weight: 70
summary: The shape of the reports for a significant incident, prepared from the incident record. Not the regulator's template; deadlines are to be checked against the regulation.
for: [solo]
use_cases: [incident-handling]
---

**Structural example, not the regulator's template.** It shows what WINGMAN keeps on the incident record and drafts for each report. Deadlines are marked "check against the regulation" because they are set by the law in force, not by this example.

**Example Agency**, a fictional public body. **Incident:** INC-07, the agency's e-services portal unavailable for 9 hours after a denial-of-service attack, 12 November 2026.

## Classification

| Criterion (from the regulation, as loaded) | This incident |
|---|---|
| Service affected | E-services portal, an essential service |
| Duration | 9 hours |
| Users affected | About 14,000 attempted sessions failed |
| Data affected | None found |
| Cross-border effect | None found |

**Proposed: significant.** Proposed by WINGMAN with these reasons at 10:42; confirmed by R. Grava, cybersecurity manager, at 10:55.

## Reports

| Report | What it contains | Deadline | Sent by, when |
|---|---|---|---|
| Early warning | That a significant incident is suspected, the affected service, whether it may be malicious | check against the regulation | R. Grava, 12 Nov 14:10 |
| Incident notification | Classification, first assessment of severity and impact, indicators | check against the regulation | R. Grava, 13 Nov 09:30 |
| Progress report | Status on request, or when the situation changes | when requested | – |
| Final report | Description, root cause, measures taken, cross-border impact | check against the regulation | due |

Each report is drafted by WINGMAN from the incident record. R. Grava edits and approves it and sends it to CERT.LV; WINGMAN does not send it.

## Actions taken

Traffic filtering enabled with the hosting provider at 11:20; service restored at 19:05. Follow-up tasks: a contract amendment for DDoS protection (owner: head of IT, due 31 January) and an exercise of the procedure (owner: R. Grava, due 31 March).

## What the record keeps

The incident is part of the agency's cyber incident log. Every step above carries the person and the time, set by the system, and the history cannot be edited or deleted.
