---
title: ISO 27001 from zero, the first three days
weight: 5
summary: A 60-person software company with no security team runs the implementation skill on WINGMAN. What the first three days produce, who does what afterwards, and what still takes calendar time.
for: [start, consultant]
use_cases: [new-requirements, risk-identification]
---

**Example Labs**, a 60-person software company. A bank customer wants ISO 27001 certification within twelve months. There is no security person; the CTO, T. Ozols, runs it with Claude Code, the implementation skill and WINGMAN. The skill works on WINGMAN's records and creates its tasks there, so every result is kept for the next step and for the people who will do the work.

## Day 1, morning: context and scope

The skill asks one question at a time: what the company builds, where it runs, how people sign in, who the customers are, which suppliers matter, who can help. From the answers:

- **Scope:** "The development, operation and support of the Example Labs analytics platform, run on a public cloud from the Riga and Tallinn offices. Corporate IT is included as far as it supports the platform."
- **Assets created, each with an owner:** the analytics platform, the cloud account, the code repository, the identity provider, the customer database, the support desk, and 9 suppliers.
- **Framework loaded:** ISO/IEC 27001:2022, the requirements of clauses 4 to 10 and the 93 Annex A controls, as requirement records.

## Day 1, afternoon: where the company stands

The skill matches each requirement to what the company already does, from the CTO's answers and the documents that exist (an onboarding checklist, a backup script, the cloud provider's settings).

| | Clauses 4 to 10 | Annex A controls |
|---|---|---|
| Covered | 3 | 16 |
| Partly covered | 9 | 22 |
| Open | 18 | 48 |
| Not applicable, with the reason | – | 7 |
| Total | 30, as loaded; all apply | 93 |

The Annex A decisions, with their reasons, become the first version of the Statement of Applicability: the list of controls that apply, why, and whether they are in place.

Then a risk workshop with the CTO and the lead engineer, one question at a time: 14 risks, each linked to the assets it affects and to the controls that would reduce it.

## Day 2: the implementation plan

Open and partly covered requirements become controls to build, grouped into workstreams. Each workstream has an owner and tasks with estimated hours and due dates, spread over about twelve weeks, so the work is split between people instead of left with the CTO.

| Workstream | Owner | Tasks | Hours |
|---|---|---|---|
| Access and identity | Lead engineer | 14 | 60 |
| Secure development and change | Lead engineer | 11 | 50 |
| Operations, backup and logging | Platform engineer | 15 | 70 |
| People: onboarding, awareness, leavers | HR lead | 8 | 30 |
| Suppliers and contracts | Office manager | 7 | 25 |
| Management system: policy, risk, internal audit, management review | CTO | 18 | 90 |

## Days 2 and 3: policies and procedures, out to people

The skill drafts the documents from the company's own context, not from a generic template. 13 documents: the information security policy, the Statement of Applicability, the risk treatment plan, an acceptable use policy, and procedures for access, change, backup, logging, incidents, suppliers, onboarding, leavers and internal audit.

Each document is its own record in WINGMAN, with an owner. Its owner gets a review task and the CTO an approval task. Once approved, it is distributed as tasks to the people it applies to: 60 staff for acceptable use, 14 engineers for change management. Who has not yet completed theirs is a list of open tasks.

## The customer's questionnaire

Each of the bank's 240 questions is mapped to a control and a clause. Three of them:

| Bank's question | Control | ISO 27001 | Status today |
|---|---|---|---|
| Do you enforce multi-factor authentication for all administrative access? | MFA for the cloud console and code repository | A.8.5 | In place; evidence attached |
| How are production changes reviewed? | Second review in the release pipeline | A.8.32 | Partly: in place for releases, not yet for hotfixes |
| Do you test restores from backup? | Quarterly restore test | A.8.13 | Planned: first test due in week 6; no evidence yet |

The other 237 are mapped the same way. Questions that point to a control still being built are listed as gaps, not answered.

## Decisions only the CTO makes

1. The scope statement.
2. Which risks to accept, and at what score.
3. Which Annex A controls are not applicable, and why.
4. Who owns each workstream.
5. When to book the certification body.

## What three days do and do not do

Three days produce the scope, the gap analysis, the risk register, the plan with tasks for each person, and the documents: the part that usually takes months of meetings. Doing the work in the plan takes weeks. Proving it takes longer: controls have to run and leave evidence before an auditor can test them. Then come an internal audit, a management review, and the certification body's two audits, the first of the documents and the second of the controls in operation. How many months of records your certification body wants to see is a question for them; WINGMAN shows, control by control, which ones have the evidence.
