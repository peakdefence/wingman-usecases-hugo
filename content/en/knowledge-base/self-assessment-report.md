---
title: Self-assessment report for NKDC
kb: self-assessment-report
weight: 80
summary: "How the cybersecurity manager of a Latvian essential or important entity prepares the self-assessment report for NKDC from current evidence, with a prompt that assesses one requirement at a time."
regulations:
- Nacionālās kiberdrošības likums
- MK noteikumi Nr. 397
- NIS2 Art. 21
audience: Cybersecurity managers, responsible members of management, heads of institutions
uc: new-requirements
updated: 2026-11-25
---

Essential and important entities in Latvia submit a cybersecurity self-assessment report to NKDC, the National Cybersecurity Centre, under the National Cybersecurity Law (Nacionālās kiberdrošības likums) and Cabinet Regulation No. 397. The report states, requirement by requirement, how far the entity meets the security requirements and what it is doing about the rest. It is usually prepared by the cybersecurity manager (kiberdrošības pārvaldnieks). This guide describes how to prepare it from evidence that is valid on the report date, rather than by updating last year's document, and gives a prompt that drafts the assessment of one requirement at a time.

The frequency, the deadline, the legal form of the report, the template and the assessment scale are set by the legal act and by NKDC. They are not stated here: check them against the law in force and NKDC's guidance (pārbaudīt spēkā esošajā normatīvajā aktā / NKDC norādījumos) each time you prepare the report. Requirement numbers are shown as [x].

## What the report is for

The report gives NKDC a picture of the entity's actual security position. A report that says "met" everywhere and cannot be backed up when NKDC asks for evidence is worse than one that shows gaps honestly with a plan to close them.

## How to use this guide

1. Take the list of requirements from the current text of Cabinet Regulation No. 397 and from NKDC's template, not from last year's report.
2. For each requirement, collect what is in place now and the evidence, with dates.
3. Paste the prompt below into a fresh chat. Then give it one requirement at a time: the requirement text, a description of what is in place and the evidence.
4. Copy each output row into your working table. Work through the list of points the prompt says a person must confirm.
5. Map the proposed assessment onto NKDC's own scale. The prompt uses a neutral working scale (met, partly met, not met, not applicable) because NKDC's scale must be taken from NKDC.
6. Have the report reviewed and approved, then keep the working table for next time.

Before pasting anything into a public LLM service, remove names, system names, IP addresses, supplier names and anything else confidential that the assessment does not need. Describe systems by role ("e-services portal", "finance system").

## What each requirement needs

| Element | What it contains | Typical weakness |
|---|---|---|
| Assessment | The level of fulfilment on NKDC's scale | Chosen by feeling, not from the evidence |
| Justification | Two or three sentences: what is in place, how far it covers the requirement, what is missing | Repeats the requirement text |
| Controls | The measures that meet the requirement: policy, procedure, technical setting, contract clause | A policy is named but nobody operates it |
| Evidence | Records that show the control works, each with a date, valid on the report date | Out of date, or "available on request" with nothing behind it |
| Gaps | Each gap as a task: what is to be done, owner, due date | "To be improved" with no owner or date |

Evidence is valid on the report date if it reflects the current state: a configuration export or report from this period, a restore test inside the interval your own procedure sets, a policy whose review date has not passed, a training record for the current staff. Evidence from before a major change (a new system, a reorganisation, a new supplier) usually needs to be replaced.

## Preparing the report from evidence

Start from the requirement list and the evidence, not from last year's text. Last year's report is useful for one thing: comparing. Once this year's assessment of a requirement is drafted, look at last year's and ask what changed and why. If the assessment improved, the evidence should show what was done. If it got worse, say so; a change in scope or a new system often explains it.

For partly met and not met requirements, each gap becomes a task with one owner (a named person or role) and a due date that the owner has agreed to. Gaps that need budget or a decision by management should be marked as such, so that the responsible member of management sees them before signing.

Where a requirement does not apply, write why in one sentence (for example, the entity does not operate the type of system the requirement concerns). Check whether NKDC's template allows "not applicable" at all before using it.

## Who approves

Three people normally stand behind the report:

- **The cybersecurity manager** prepares it, checks each assessment against the evidence and signs off the working table.
- **The responsible member of management** (the member of the management body responsible for cybersecurity) reviews it, in particular the gaps, the tasks and the resources they need, and agrees it. Under NIS2 Art. 20 the management body approves the cybersecurity risk-management measures and oversees their implementation, so the gaps are its business.
- **The head of the institution** approves the report before submission.

Who signs and in what form depends on the entity's internal rules and on what the law in force and NKDC require. Record who reviewed and approved and on which date.

## Keeping the assessment for next time

Keep the working table, not only the submitted report: for each requirement, the assessment, the justification, the controls, the evidence with dates and locations, and the gap tasks. Next time you start from it, check every piece of evidence again, and see at once which tasks were completed and which requirements moved. Track the gap tasks between reports; a gap reported twice with the same task and a moved due date is a finding in its own right.

## Common mistakes

- **Copying last year's report.** The wording looks right, the dates do not. Controls that stopped working, systems that were added and staff who left are all invisible.
- **Claiming controls without evidence.** "Met" with a policy name but no record that the policy is applied. If NKDC asks, there is nothing to show.
- **Gaps without owners or dates.** "Will be improved" is not a plan. Every gap needs a task, an owner and a due date.
- **Evidence that has expired.** A restore test from two years ago, a risk assessment that predates the current systems.
- **Assessment by the wrong person.** The cybersecurity manager should not assess a control alone when someone else operates it. Ask the owner and record the source.

## Prompt: assess one requirement

The prompt asks for one requirement at a time and returns one table row per requirement, plus a list of what a person must confirm. Use it for as many requirements as you need in the same chat; at the end, ask it for the full table.

{{< prompt id="self-assessment-report-requirement" title="Self-assessment report: assess one requirement" >}}
You are an assistant helping the cybersecurity manager of an organisation prepare a cybersecurity self-assessment report. You draft the assessment of one requirement at a time from the facts the user gives you. A person decides the final assessment; you only propose.

Reply in the language the user writes in, unless they ask for another one.

Ground rules
- Work only from what I give you. Never invent facts, controls, evidence, dates, owners, legal deadlines, requirement numbers or citations of legal acts. Where something is missing, write [TO CONFIRM: what is needed].
- Do not state the report deadline, its legal form or the authority's assessment scale. Write "check against the law in force and the authority's guidance" where they matter.
- Use this working scale unless I give you the authority's scale: met, partly met, not met, not applicable. If I give you another scale, use that one.
- Evidence counts only if it has a date and reflects the state on the report date. Mark evidence without a date, or older than the interval I say my procedures set, as "not valid on the report date".
- A requirement is "met" only if every part of it has a control in place and valid evidence. If any part lacks either, propose "partly met" or "not met" and say which part.
- Every gap becomes a task: what is to be done, owner, due date. If I do not give an owner or date, write [TO CONFIRM: owner] or [TO CONFIRM: due date]; never make them up.
- Remind me once, at the start, to remove names of people, system names, IP addresses and other confidential details before pasting.
- Ask one question at a time and wait for the answer.

Step 1. Set up
Ask me, one question at a time: the report date (the date the data is as of); the assessment scale to use, or confirm the working scale; whether I want to paste last year's assessment for comparison.

Step 2. One requirement
Ask me to paste, for one requirement: the requirement text (with its reference, for example "Regulation No. 397, point [x]"), a description of what is in place, the evidence with dates, and who operates the control. If something needed for the assessment is missing, ask for it, one question at a time, at most three questions per requirement. Then produce:

a) One table row with these columns:
Requirement (reference and short title) | Proposed assessment | Justification (two or three sentences: what is in place, how far it covers the requirement, what is missing) | Controls | Evidence with dates (and whether each is valid on the report date) | Gaps as tasks (what, owner, due date)

b) "To be confirmed by a person": a numbered list of every point a person must check before the row is used, such as owner and dates, whether evidence is current, whether a part of the requirement applies, and the mapping to the authority's scale.

c) If I gave last year's assessment: one sentence on what changed and whether the evidence supports the change.

Then ask whether I want to continue with the next requirement.

Step 3. Close
When I say I am done, produce: the full table with all rows; a list of all gap tasks sorted by due date, with tasks missing an owner or date listed first; a combined list of everything to be confirmed; and a reminder that the report must be reviewed by the cybersecurity manager, agreed by the responsible member of management and approved by the head of the institution, and that the deadline, form and scale must be checked against the law in force and the authority's guidance.

Begin with Step 1.
{{< /prompt >}}

{{< wingman uc="new-requirements" stage="5" >}}
In WINGMAN the self-assessment report for NKDC is produced from the current records whenever it is due: requirements linked to controls, controls to evidence, gaps to tasks with owners. Changes proposed by AI arrive as suggestions that a named person accepts or rejects. See the [structural example]({{< relref "/samples/self-assessment-structure" >}}).
{{< /wingman >}}

## What the prompt does not do

It does not know the current text of Cabinet Regulation No. 397, NKDC's template, the deadline or the scale, and it does not check whether your evidence exists. It does not replace the review by the cybersecurity manager or the approval by management. It drafts a consistent row per requirement, so that the people who sign can see what each assessment rests on.
