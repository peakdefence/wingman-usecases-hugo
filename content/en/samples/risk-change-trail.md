---
title: One risk change, from signal to history
weight: 30
summary: A vulnerability that is being exploited moves a risk rating. This sample shows the signal, the containment, the suggestion the AI raised, the person who accepted it, and what the history keeps.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**Example Co.** Risk **R-07: Customer data exposed through the identity server**. Example Co. runs the identity server itself. Risk owner: A. Ozola (Head of IT). Likelihood and impact are rated 1 to 5; the score is the two multiplied. Risk appetite: 12.

## The signal

1 October 2026, 08:40: the vulnerability scanner reports CVE-2026-41872 (a fictional identifier for this sample) on the identity server. WINGMAN classifies the signal as a vulnerability, with a confidence score, and links it to the identity server asset, which carries R-07. At 08:55 J. Liepa (IT lead) confirms the classification and checks CISA's Known Exploited Vulnerabilities catalogue directly: the vulnerability has been listed since 29 September. The asset record shows the admin console is reachable from the internet; the scanner shows the vendor's fix is not installed.

## Containment

09:05: J. Liepa removes internet access to the admin console. The task is created and closed in WINGMAN with the firewall change attached as evidence.

## The suggestion

Because a linked vulnerability changed, WINGMAN opened a review of R-07 and raised a suggestion at 09:10:

> Likelihood 2 → 4. The identity server has a vulnerability that is known to be exploited and the vendor's fix is not installed. The admin console was reachable from the internet until 09:05. Impact stays at 4.

A. Ozola accepted the suggestion at 09:14, added a task to install the fix, and completed the review at 09:16. Accepted suggestions take effect when the review is completed, so the changes below carry 09:16.

## What the history keeps

| Time (set by the system) | Who | What changed | Before | After |
|---|---|---|---|---|
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Likelihood, from an accepted suggestion | 2 | 4 |
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Score | 8 | 16 |
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Linked tasks | – | Install the vendor's fix on the identity server, J. Liepa, due 3 Oct |
| 1 Oct 2026, 09:16 | A. Ozola (Head of IT) | Last reviewed | 12 Jul 2026 | 1 Oct 2026 |
| 1 Oct 2026, 09:17 | WINGMAN | Brief | previous version | refreshed; model recorded |

The history cannot be edited or deleted. Accepting the suggestion is recorded in the history as its own entry, under the name of the person who accepted it. The brief is a summary WINGMAN writes for reading; it does not change the risk's fields.

## Escalation

16 is above the appetite of 12. A. Ozola informed the CEO the same day, and treatment of R-07 is decision 1 at the management review on 14 October. The fix was installed on 3 October.
