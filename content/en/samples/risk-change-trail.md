---
title: One risk change, from signal to history
weight: 30
summary: A vulnerability that is being exploited moves a risk rating. This sample shows the signal, the containment, the suggestion the AI raised, the person who accepted it, the treatment, and what the history keeps.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**Example Co.** Risk **R-07: Customer data exposed through the identity server**. Example Co. runs the identity server itself. Risk owner: A. Ozola (Head of IT). Likelihood and impact are rated 1 to 5; the score is the two multiplied. Risk appetite: 12.

## The signal

1 October 2026, 08:40: the vulnerability scanner reports CVE-2026-41872 (a fictional identifier for this sample) on the identity server. WINGMAN classifies the signal as a vulnerability and links it to the identity server asset, which carries R-07. At 08:55 J. Liepa (IT lead) confirms the classification and checks CISA's Known Exploited Vulnerabilities catalogue directly: the vulnerability has been listed since 29 September. The asset record shows the admin console is reachable from the internet; the scanner shows the vendor's fix is not installed.

## Containment

09:05: J. Liepa removes internet access to the admin console. The task is created and closed in WINGMAN with the firewall change attached as evidence.

## The suggestion

Because a linked vulnerability changed, WINGMAN opened a review of R-07 and raised a suggestion at 09:10:

> Likelihood 2 → 4. The identity server has a vulnerability that is known to be exploited and the vendor's fix is not installed. The admin console was reachable from the internet until 09:05. Impact stays at 4.

A. Ozola accepted the suggestion at 09:14 and completed the review at 09:16, recording an interim treatment decision: install the vendor's fix by 3 October, and accept the residual risk until then, with the console off the internet. She informed the CEO by email; the email is attached to the risk.

## Checking for compromise

The console was exposed while the vulnerability was known to be exploited. 09:30 to 11:00: J. Liepa reviews the console's access logs from 29 September to 09:05 and rotates the admin credentials. No unknown logins. The log extract and the rotation record are attached as evidence and linked to R-07.

## Treatment

3 October, 14:20: J. Liepa installs the fix and closes the task with the scanner result attached. 14:40: A. Ozola reviews R-07 again and rates likelihood back to 2.

## What the history keeps

| Time (set by the system) | Who | What changed | Before | After |
|---|---|---|---|---|
| 1 Oct 2026, 09:14 | A. Ozola (Head of IT) | Suggestion: likelihood 2 → 4 | proposed | accepted |
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Likelihood, from the accepted suggestion | 2 | 4 |
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Score | 8 | 16 |
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Treatment | – | Interim: fix by 3 Oct, residual accepted until then |
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Linked tasks | – | Install the vendor's fix, J. Liepa, due 3 Oct |
| 1 Oct 2026, 09:17 | WINGMAN | Brief | previous version | refreshed |
| 1 Oct 2026, 11:02 | J. Liepa (IT lead) | Evidence | – | Access log review, credential rotation |
| 3 Oct 2026, 14:20 | J. Liepa (IT lead) | Task: install the vendor's fix | open | done; scan result attached |
| 3 Oct 2026, 14:40 | A. Ozola (Head of IT) | Likelihood | 4 | 2 |
| 3 Oct 2026, 14:40 | A. Ozola (Head of IT) | Score | 16 | 8 |

The history cannot be edited or deleted. Accepting the suggestion is its own entry, under the name of the person who accepted it. The brief is a summary WINGMAN writes for reading; it does not change the risk's fields.

## Escalation

16 was above the appetite of 12 for two days, under a recorded interim decision. The management review on 14 October confirmed the treatment and decided on a further step for the admin console.
