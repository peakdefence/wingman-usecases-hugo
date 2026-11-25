---
title: What the management body must approve and oversee
kb: management-body-nis2
weight: 60
summary: "What NIS2 Article 20 asks of the management body, what to ask for at each review, what a good decision request contains, which records show oversight later, and a prompt that produces a one-page oversight plan."
regulations:
- NIS2 Art. 20
- NIS2 Art. 21
- ISO 27001 9.3
audience: CEOs, board members
uc: management-review
updated: 2026-11-25
---

NIS2 makes cybersecurity a duty of the management body, not only of the IT department. The duty is short to state and easy to get wrong in practice: approving a document once a year is not oversight, and an auditor or authority will ask what the board actually decided and what happened next. This guide sets out what is required, how to run it with little ceremony, and what to keep so that the oversight can be shown later.

## How to use this guide

1. Read the duties and the warning signs, and compare them with how your last two reviews went.
2. Paste the prompt into a fresh chat in any capable LLM and answer its questions. It produces a one-page oversight plan you can bring to the next board meeting.
3. Agree the plan with your security lead, put the next four review dates in the calendar, and keep the plan with the board papers.

Before pasting anything into a public LLM service, remove names, figures and details of open weaknesses that you would not send outside the organisation.

## What Article 20 requires

Article 20 of NIS2 places four duties on the management bodies of essential and important entities:

- **Approve** the cybersecurity risk-management measures the entity takes to comply with Article 21. These cover, among other things, risk analysis and security policies, incident handling, business continuity, supply chain security, security in acquisition and development, assessing the effectiveness of measures, basic cyber hygiene and training, cryptography, access control and asset management, and multi-factor authentication where appropriate.
- **Oversee** their implementation. Approval is a starting point; the board must follow whether the measures are actually in place and working.
- **Be accountable.** Members of the management body can be held liable for infringements of these obligations by the entity. National law decides how.
- **Follow training.** Members must follow training so that they have enough knowledge and skills to identify risks and assess cybersecurity risk-management practices and their impact on the services the entity provides. Member states are to encourage entities to offer similar training to employees regularly.

The directive does not say how often the board must meet on the subject or what form approval takes. National law may add detail; check against the law in force. If you also run an ISO 27001 management system, the management review in clause 9.3 can carry this oversight in the same meeting.

## What to ask for at each review

Ask for the same short set of inputs every time, so that changes show:

- Risks above the agreed risk appetite, what is being done about each, and by when.
- Status of the actions decided at the previous review: done, on track, late, with the reason for lateness.
- Significant incidents and near misses since the last review, what was reported to the authority, and what was learnt.
- Audit and assessment results, open nonconformities and their fix dates.
- Supplier issues: critical suppliers with incidents, missing contract clauses or overdue assessments.
- Status of the Article 21 measures: which are in place, which are partly in place, which are not started.
- Training: who on the board and in the organisation has completed it.
- The decisions the security lead needs from the board.

## What a good decision request contains

Each item put to the board should let a non-specialist decide in a few minutes:

| Element | What it says |
|---|---|
| What is asked | One decision: approve, fund, accept a risk, choose between options |
| Why now | The risk or requirement behind it, in plain words |
| Cost | Money, staff time and duration |
| Consequence of no | What the organisation lives with if the board declines, stated honestly |
| Who proposes | The named owner who will carry it out |
| Deadline | When the decision is needed and when the work would be done |

A request that cannot state the consequence of a no is not ready. A request without a named proposer tends to come back next quarter unchanged.

## Records that show oversight later

When an authority, auditor or court asks whether the board oversaw cybersecurity, the answer is in the records, not in recollection:

- Minutes that record what was presented, the questions asked and the answers given.
- Each decision written as a decision, with the names of those who took it and the date.
- Each decision turned into tasks with an owner and a due date, followed to completion.
- The papers the board received before the meeting, with the date they were sent.
- Training records for each member.
- Risk acceptances with the reasoning and the name of the person who accepted.

## A quarterly rhythm

| When | What |
|---|---|
| Two weeks before | Security lead collects inputs and drafts decision requests |
| One week before | Papers go to the board, with enough time to read them |
| The meeting | 30 to 60 minutes: risks above appetite, overdue actions, decisions |
| Within a week after | Minutes approved; decisions become tasks with owners and dates |
| Once a year | Approve the risk-management measures as a whole, review the risk appetite, plan board training |

## Warning signs

- Papers are signed the day before the meeting, or the day after.
- The minutes say "noted" and record no decisions.
- The same overdue items appear every quarter with new dates and no consequence.
- Decision requests arrive with no cost or no consequence of saying no.
- Nobody on the board can say which risks are above the appetite.
- Training was done once, years ago, by some members.
- The security lead presents, but no board member asks a question that is recorded.

The site has a worked [quarterly management review pack]({{< relref "/samples/management-review-pack" >}}) that shows decision requests in this form.

## Prompt: a one-page oversight plan

{{< prompt id="management-body-nis2-oversight-plan" title="Management body oversight plan" >}}
You are an assistant that helps a chief executive or board member plan how the management body will approve and oversee the organisation's cybersecurity risk-management measures, as required by Article 20 of the EU NIS2 directive. You produce a one-page oversight plan. You are not a lawyer; say so once at the start.

Reply in the language the user writes in, unless they ask for another one.

Ground rules
- Ask one question at a time and wait for the answer. Keep the interview to about eight to ten questions.
- Work only from what I tell you. Never invent facts, legal deadlines, article numbers, national law provisions or citations. Where national law may add requirements, write "check against the law in force".
- Remind me at the start to remove names, figures and details of open weaknesses I would not share outside the organisation; roles are enough.

Questions, one at a time
1. What the organisation does, roughly how large it is, and whether it is an essential or important entity under NIS2, or does not yet know.
2. How the management body is made up (board, management board, supervisory board) and who on it is responsible for cybersecurity.
3. Who the security lead is (as a role), and to whom they report.
4. How cybersecurity reached the management body in the last year: how often, in what form, and what was decided.
5. Whether the cybersecurity risk-management measures have been formally approved, when, and in what document.
6. Whether there is an agreed risk appetite, and whether the board knows which risks are above it.
7. Which actions from earlier reviews are open or overdue.
8. What training the board members have had and when.
9. Which audits, assessments, incidents or customer demands are expected in the next twelve months.
10. What the executive most wants to be able to show to an authority or auditor a year from now.

Output: a one-page oversight plan with these sections
1. Position today: three to five sentences, plain, including the gaps you see.
2. Decisions to ask for at the next review: up to five, each with what is asked, why now, likely cost as a range or "to be estimated", the consequence of no, and the proposer as a role.
3. Questions for the security lead: eight to twelve questions the executive should ask before or at each review, specific to what I told you.
4. Standing agenda and quarterly rhythm: dates relative to the meeting, and what happens once a year.
5. What to be able to show: the records that will prove approval, oversight and training, who keeps each, and where.
6. Warning signs to watch for in this organisation.
Keep it to one page. End by noting that this is a planning aid, not legal advice, and that national law and the competent authority may set further requirements.

Begin by stating that you are not a lawyer, giving the reminder about confidential details, and asking question 1.
{{< /prompt >}}

{{< wingman uc="management-review" stage="3" >}}
In WINGMAN the management review pack is assembled from the records, including each decision request with its cost and consequence, and the decisions taken become tasks with owners, so the next review starts from what was actually done.
{{< /wingman >}}

## What the prompt does not do

It does not decide for the board, assess whether your measures meet Article 21, or tell you what your national law adds. It gives the executive a short plan for what to ask, what to decide and what to keep, so that oversight is real and can be shown later.
