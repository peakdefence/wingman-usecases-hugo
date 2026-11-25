---
title: A quarterly management review pack
weight: 10
summary: What the management body receives before a quarterly review, and what is recorded after it. Every line comes from a record that can be opened.
for: [board, solo]
use_cases: [management-review]
---

**Example Co.**, a 120-person software company. **Review:** Q3 2026, held on 14 October 2026. **Prepared from the records on:** 13 October 2026.

Risks are rated for likelihood and impact on a scale of 1 to 5; the score is the two multiplied. The agreed risk appetite: a score of 12 or more needs a treatment decision or a recorded acceptance by the management body. Below 12, the risk owner may accept it.

## Decisions requested

1. **Treat a risk above our limit.** R-07 "Customer data exposed through the identity server" rose from 8 to 16 on 1 October, when a vulnerability in the server was found to be actively exploited. Already done: the server's admin console was taken off the internet the same day, and the vendor's fix was installed on 3 October. Proposed: add a second sign-in check in front of the admin console, about EUR 4,000, by 30 November; the risk owner then expects the score to return to 8. If we decline, the console is protected only by the fix and a network rule. Proposed by the risk owner, A. Ozola (Head of IT).
2. **Fund a fix below the limit.** "Only one engineer can operate the cloud platform" scores 9, so the owner could accept it, but the fix needs budget: train a second engineer, about EUR 6,500 and 15 working days, by Q1 2027. If not funded, the owner accepts the risk and records why; if the engineer then leaves, recovering from a platform failure could take days. Proposed by M. Kalns (Head of Engineering).
3. **Approve a policy.** Access management policy, version 4. What changes for staff: admin accounts are reviewed every quarter, and shared accounts are removed by 30 November.
4. **Fund a test.** An external penetration test of the customer portal in Q4, estimated at EUR 18,000. If we decline, the portal goes another year without an outside check, and two bank customers require one annually.
5. **Accept the fix plan for the audit's major nonconformity.** Production changes to Product B were released without the required review. Plan: route hotfixes through the release pipeline's approval gate by 15 December, review the unreviewed changes by 31 October, re-check in March. Owner M. Kalns.

## Where we stand

From the Brief, written by WINGMAN's AI from the records on 13 October (the model is recorded in the history): risk is concentrated on the customer portal and the identity server it depends on. 41 of 47 applicable controls have valid evidence, up from 36 at the last review; the target is 47 before the certification audit in March. The 6 without it: supplier review of the payroll provider, restore test of the customer database, admin account review, security awareness for new joiners, logging review, and the business continuity exercise. Three controls have evidence that expires before the next review.

## What changed since the last review

| Area | Change | Records |
|---|---|---|
| Risks | 3 new, 2 rated higher, 1 closed | R-31, R-32, R-33; R-07 (8 → 16) and R-12 up; R-04 closed |
| Incidents | Phishing email, contained the same day. Hosting outage of 3 hours, caused by the provider; classified as not significant by J. Liepa (IT lead), with reasons, so no report was due | INC-18, INC-19 |
| Audit | Internal ISO 27001 audit: 1 major nonconformity (production changes released without the required review, A.8.32), 2 observations | AUD-3 |
| Suppliers | Payroll provider reported a breach; assessed, no Example Co. data affected | SIG-44 |
| Evidence | 4 pieces of evidence, for 3 controls, expire before the next review | 3 controls |

## Overdue work

| Task | Owner | Due | Late by |
|---|---|---|---|
| Remove unused admin accounts | J. Liepa (IT lead) | 30 Sep | 13 days |
| Test restore of the customer database | M. Kalns (Head of Engineering) | 15 Sep | 28 days |

## Decisions from the last review

| Decision (Q2) | Status |
|---|---|
| Adopt multi-factor sign-in for all staff | Done 12 Aug; evidence attached |
| Run a business impact analysis for the customer portal | In progress; 2 of 3 services done |
| Review the payroll provider's contract | Not started; brought back to this review |

## Recorded after the meeting

The minutes are kept as a document record: what was presented, what was decided, and who approved it. Decision 1: treatment funded. Decision 2: training funded. Decision 3: approved. Decision 4: approved up to EUR 20,000. Decision 5: fix plan accepted. Approved by K. Bērziņš (CEO) and L. Vītola (CFO) on 14 October. Each decision became a task with an owner and a due date, and unfinished ones return at the next review. Every change carries the person who made it and the time, and the history cannot be edited or deleted.
