---
title: ISO 27001 from zero, the first three days
weight: 5
summary: A 60-person software company with no security team runs the implementation skill on WINGMAN. What comes out of each day, who does what, and what still takes calendar time.
for: [start, consultant]
use_cases: [new-requirements, risk-identification]
---

**Example Labs**, a 60-person software company. A bank customer wants ISO 27001 certification within twelve months. There is no security person; the CTO, T. Ozols, runs it with Claude Code, the implementation skill and WINGMAN. The skill works on WINGMAN's records and creates its tasks there, so every result is kept for the next step and for the people who will do the work.

## Day 1, morning: context and scope

The skill asks one question at a time: what the company builds, where it runs, how people sign in, who the customers are, which suppliers matter, who can help. From the answers:

- **Scope:** "The development, operation and support of the Example Labs analytics platform, run on a public cloud from the Riga and Tallinn offices. Corporate IT is included as far as it supports the platform."
- **Assets created, each with an owner:** the analytics platform, the cloud account, the code repository, the identity provider, the customer database, the support desk, and 9 suppliers.
- **Framework loaded:** ISO/IEC 27001:2022, clauses 4 to 10 and the 93 Annex A controls, as requirement records.

## Day 1, afternoon: where the company stands

The skill matches each requirement to what the company already does, from the CTO's answers and the documents that exist (an onboarding checklist, a backup script, the cloud provider's settings).

| | Requirements |
|---|---|
| Covered | 19 |
| Partly covered | 31 |
| Open | 43 |
| Not applicable, with the reason | 7 |

Then a risk workshop with the CTO and the lead engineer, one question at a time: 14 risks, each linked to the assets it affects and to the controls that would reduce it.

## Day 2: the implementation architecture

Open and partly covered requirements become controls to build, grouped into workstreams. Each workstream has an owner and tasks with hours and due dates, so the work is split between people, not left with the CTO.

| Workstream | Owner | Tasks | Hours |
|---|---|---|---|
| Access and identity | Lead engineer | 9 | 22 |
| Secure development and change | Lead engineer | 7 | 18 |
| Operations, backup and logging | Platform engineer | 8 | 20 |
| People: onboarding, awareness, leavers | HR lead | 6 | 10 |
| Suppliers and contracts | Office manager | 5 | 8 |
| Management system: policy, risk, audit, review | CTO | 11 | 26 |

## Days 2 and 3: policies and procedures, out to people

The skill drafts the documents from the company's own context, not from a generic template: an information security policy, an acceptable use policy, and procedures for access, change, backup, incidents, suppliers, onboarding and leavers. 11 documents in all, each with an owner.

Each document gets a review task for its owner and an approval task for the CTO. Once approved, it goes out as an acknowledgement task to the people it applies to: 60 staff for acceptable use, 14 engineers for change management. Who has read it, and who has not, is a list.

## The customer's questionnaire

Three of the bank's 240 questions, answered from the records:

| Bank's question | Control | ISO 27001 |
|---|---|---|
| Do you enforce multi-factor authentication for all administrative access? | MFA for the cloud console and code repository | A.8.5 |
| How are production changes reviewed? | Second review in the release pipeline | A.8.32 |
| Do you test restores from backup? | Quarterly restore test, with evidence | A.8.13 |

## Decisions only the CTO makes

1. The scope statement.
2. Which risks to accept, and at what score.
3. Which Annex A controls are not applicable, and why.
4. Who owns each workstream.
5. When to book the certification body.

## What three days does not shorten

The implementation work above takes days instead of months. Proving it does not: controls have to run, and leave evidence, before an auditor can test them. Then comes an internal audit, a management review, and the certification body's stage 1 and stage 2 audits. How many months of records your certification body wants to see is a question for them; WINGMAN shows, control by control, which ones have the evidence.
