---
title: One risk change, from signal to history
weight: 30
summary: A vulnerability that is being exploited moves a risk rating. This sample shows the signal, the suggestion the AI raised, the person who accepted it, and what the records keep.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**Example Co.** Risk **R-07: Customer data exposed through the identity server**. Example Co. runs the identity server itself. Risk owner: A. Ozola (Head of IT). Likelihood and impact are rated 1 to 5; the score is the two multiplied.

## The signal

1 October 2026, 08:40: the vulnerability scanner reports CVE-2026-XXXXX on the identity server, and the advisory says it is listed in CISA's Known Exploited Vulnerabilities catalogue. WINGMAN classifies the signal as a vulnerability with a confidence score and links it to the identity server asset, which carries R-07. J. Liepa (IT lead) confirms the classification at 08:55. The asset record shows the server's admin console is reachable from the internet; the scanner shows the vendor's fix is not yet installed.

## The suggestion

WINGMAN opened a review of R-07 because a linked vulnerability changed. Its suggestion:

> Likelihood 2 → 4. The identity server has a vulnerability that is known to be exploited, the vendor's fix is not installed, and the admin console is reachable from the internet. Impact stays at 4.

The suggestion is its own record on the risk, with this description, the proposed change and its status. A. Ozola accepted it, added a task to install the fix, and completed the review. Accepted suggestions take effect when the review is completed.

## What the history keeps

| Time (set by the system) | Who | What changed | Before | After |
|---|---|---|---|---|
| 1 Oct 2026, 09:14 | A. Ozola (Head of IT) | Likelihood | 2 | 4 |
| 1 Oct 2026, 09:14 | A. Ozola (Head of IT) | Score | 8 | 16 |
| 1 Oct 2026, 09:15 | A. Ozola (Head of IT) | Linked tasks | – | Install the vendor's fix on the identity server, due 3 Oct |
| 1 Oct 2026, 09:15 | A. Ozola (Head of IT) | Last reviewed | 12 Jul 2026 | 1 Oct 2026 |
| 1 Oct 2026, 09:15 | WINGMAN | Brief | previous version | refreshed; model recorded |

The history cannot be edited or deleted. It records A. Ozola as the person who made the change, because A. Ozola accepted the suggestion. The suggestion that proposed it, with its reasoning, stays on the risk as a separate record marked accepted.

A score of 16 is above the risk appetite of 12, so the risk is on the agenda of the next management review.
