---
title: "Reporting a significant incident to CERT.LV: a structural example"
weight: 70
summary: The shape of the reports for a significant incident, prepared from the incident record. Not the official template; deadlines to be checked against the national law.
for: [solo, board]
use_cases: [incident-handling]
---

**Structural example, not the official template.** It shows what WINGMAN keeps on the incident record and drafts for each report. WINGMAN takes the deadlines from the loaded requirements of the National Cybersecurity Law and Regulation No. 397. This example uses the deadlines of NIS2 Article 23, counted from detection, and shows the date and time each one falls due.

**Example Agency**, a fictional public body. **Incident:** INC-07, the agency's e-services portal unavailable for 9 hours after a denial-of-service (DDoS) attack. **Detected:** 12 November 2026, 09:58. The deadlines run from this moment.

## Classification

| Criterion (from the loaded regulation) | This incident |
|---|---|
| Service affected | E-services portal, a critical service of the agency |
| Duration | 9 hours |
| Unsuccessful sessions | About 14,000 |
| Data affected | None found |
| Cross-border effect | None found |

**Proposed: significant.** Proposed by WINGMAN at 10:42, on the grounds in the table; confirmed by R. Grava, cybersecurity manager, at 10:55. A. Lāce, the member of management responsible for cybersecurity, informed at 11:05.

## Reports

| Report | What it contains | Due | Sent (who, when) |
|---|---|---|---|
| Early warning | A significant incident is suspected; the affected service; whether malicious action is possible | 24 h: by 13 Nov, 09:58 | R. Grava, 12 Nov, 14:10 |
| Incident notification | Classification, first assessment of severity and impact, indicators of compromise | 72 h: by 15 Nov, 09:58 | R. Grava, 13 Nov, 09:30 |
| Progress report | Status, on request or when the situation changes | on request | – |
| Final report | Description, root cause, measures taken, cross-border impact | 1 month after the notification: by 13 Dec | – |

Each report is drafted by WINGMAN from the incident record. R. Grava edits and approves it and sends it to CERT.LV; WINGMAN does not send it.

## Actions taken

Traffic filtering enabled with the hosting provider at 11:20; service restored at 19:05. Follow-up tasks: a contract amendment for DDoS protection (owner: head of IT, due 31 January) and an exercise of the procedure (owner: R. Grava, due 31 March).

## What the record keeps

The incident is part of the agency's cyber incident log. Every step above carries who did it and the time set by the system, and the history cannot be edited or deleted.
