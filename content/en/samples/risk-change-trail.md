---
title: One risk change, from signal to history
weight: 30
summary: A vulnerability advisory moves a risk rating. This sample shows the suggestion the AI raised, the person who accepted it, and what the history keeps.
for: [ciso]
use_cases: [vulnerability-impact, risk-review]
---

**Example Co.** Risk **R-07: Customer data exposed through the identity provider**. Owner: Head of IT.

## The signal

21 October 2026: a vendor advisory reports a critical, actively exploited vulnerability in the identity provider's admin console. It arrives as a signal, is classified as a vulnerability, and is linked to the identity provider asset, which carries risk R-07.

## The suggestion

Raised by WINGMAN's AI when the risk review opened:

> Likelihood 2 → 4. The identity provider is exposed to an actively exploited vulnerability (EPSS 0.95), no patch has been applied yet, and the admin console is reachable from the internet. Impact stays at 4.

The risk owner accepted it, added a remediation task, and completed the review. Until the review was completed, the change could be undone.

## What the history keeps

| Time (set by the system) | Who | What changed | Before | After |
|---|---|---|---|---|
| 21 Oct 2026, 09:14 | Head of IT | Likelihood | 2 | 4 |
| 21 Oct 2026, 09:14 | Head of IT | Score | 8 | 16 |
| 21 Oct 2026, 09:15 | Head of IT | Linked tasks | – | Patch the identity provider, due 23 Oct |
| 21 Oct 2026, 09:15 | Head of IT | Last reviewed | 12 Jul 2026 | 21 Oct 2026 |
| 21 Oct 2026, 09:15 | WINGMAN | Brief | previous version | refreshed; model recorded |

The history cannot be edited or deleted. The change is recorded under the risk owner's name because the risk owner accepted it.
