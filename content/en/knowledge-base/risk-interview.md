---
title: Risk identification interview
kb: risk-interview
weight: 70
summary: "How to run a risk identification interview with a business owner: prepare, ask about goals, match concerns to existing risks, write risks as scenarios, rate them on a stated scale and send the owner something to confirm."
regulations:
- ISO 27001 6.1.2
- ISO 31000
- NIS2 Art. 21
audience: Security leads, risk managers, consultants running risk interviews
uc: risk-identification
updated: 2026-11-25
---

A risk register built from a threat catalogue tends to list the same risks in every organisation and to miss the ones that matter to this one. The business owner knows what they are trying to achieve, what they depend on and what has gone wrong before. A good interview turns that knowledge into a small number of risks the owner recognises as theirs, written so that they can be rated, treated and reviewed.

## How to use this guide

1. Prepare as described below, including the rating scale and the existing risk list.
2. Run the interview yourself. Use the prompt during or after the conversation to structure notes, or let the owner answer it directly with you present.
3. Do not enter names, customer names or confidential details into the chat. Refer to people by role and to systems by a generic label if the real name is sensitive.
4. Check the output, then send the owner the summary to confirm. Nothing goes into the register until the owner has confirmed it.

## Why ask about goals rather than read out threats

ISO 31000 describes risk as the effect of uncertainty on objectives. Starting from the owner's objectives keeps the interview on what the organisation would actually lose. Reading out a list of threats ("ransomware, phishing, insider, DDoS...") gets polite agreement to all of them and no information about which matter, what the consequence would be or what is already in place. It also moves the conversation into the security team's vocabulary, where the owner is least sure of themselves.

Ask instead what the owner must deliver this year, what they depend on to deliver it, and what would stop them. Threats come in later, as the causes of the events the owner described.

## Preparation

- **Scope.** One owner, one area of responsibility: a process, a service or a department. Agree it in advance.
- **Existing risks.** Extract the current risks in that area from the register, with descriptions and ratings. You will match against them, so you need them in front of you.
- **Rating scale.** Have the organisation's likelihood and impact scales with their definitions. If there are none, agree one before the interview and state it in the output.
- **Context.** Recent incidents, audit findings, supplier changes and planned projects in the area.
- **Time.** About an hour. Longer interviews produce longer lists, not better ones.

## How to phrase questions

| Instead of | Ask |
|---|---|
| "Are you worried about ransomware?" | "What would stop your team delivering this month?" |
| "Do you have a backup policy?" | "If the system was gone tomorrow, what would you do first?" |
| "Is data loss a risk?" | "Which information would hurt most if a competitor or the press saw it?" |
| "Rate this from 1 to 5." | "Has this happened, here or somewhere similar? How long could you work around it?" |

Ask one question at a time. Use the owner's words in the notes. When the owner names a control ("we have a second supplier"), ask how they know it works.

## Match before creating

For each concern, check the existing list before writing a new risk. A concern may be the same as an existing risk, a more specific case of it, or a cause of it. Duplicates split the history of a risk across several entries and make ratings inconsistent. Create a new risk only when nothing fits, and record why the closest existing risk does not.

## Writing a risk as a scenario

A risk statement names a cause, an event and a consequence for an objective:

> Because *invoices are approved by a single person with no second check* (cause), *a fraudulent supplier invoice is paid* (event), *leading to direct financial loss and a delayed month-end close* (consequence).

A one-word risk ("fraud", "cloud") cannot be rated or treated, because it does not say what happens or to what.

## Rating likelihood and impact

Rate on the organisation's stated scale, and write the reason next to each rating: frequency of similar events, the owner's experience, controls in place, the size of the consequence. A rating without a reason cannot be reviewed next year. If no scale exists, the following is an example only:

| Rating | Likelihood | Impact |
|---|---|---|
| 1 | Not expected in the next 5 years | Noticeable inconvenience, no customer effect |
| 2 | Possible within 5 years | Short disruption, internal cost |
| 3 | Possible within a year | Customer-visible disruption or contractual issue |
| 4 | Likely within a year | Significant loss, regulatory attention |
| 5 | Expected or already occurring | Threat to the service or the organisation |

Rate the current risk with the controls that exist today, not those that are planned.

## Linking assets, suppliers and controls

For each risk, note the assets it concerns (systems, data, premises, people by role), the suppliers involved and the controls the owner named. This is what lets a later change, incident or supplier problem find the risks it affects.

## Indicators

Ask what would show the risk changing: a rising number of failed logins, a supplier missing deadlines, staff turnover in a key role, a growing backlog. One or two indicators per risk is enough. They tell you when to review the risk before the annual cycle comes round.

## What to send the owner afterwards

Within a few days, send the risks as scenarios with proposed ratings and reasons, the controls they named, the matches to existing risks, and the open questions. Ask them to confirm, correct or reject each item by a date. The owner's confirmation is what makes the risk theirs.

## Prompt: risk identification interview

{{< prompt id="risk-interview-owner" title="Risk identification interview with a business owner" >}}
You are an interviewer helping a security lead or consultant identify risks with a business owner. You ask the owner about their goals and what threatens them, one question at a time, and at the end you produce a list of risks for the owner to confirm. You propose; the owner decides.

Reply in the language the user writes in, unless they ask for another one.

Ground rules
- At the start, ask the user not to enter names of people, customers or suppliers, or other confidential details. Use roles and generic labels. If such details appear, do not repeat them and remind the user once.
- Ask exactly one question per message and wait for the answer. Follow up on vague answers before moving on.
- Use the owner's own words. Never invent facts, incidents, numbers, controls, legal deadlines or citations. If something is not known, record it as an open question.
- Do not read out a threat catalogue. Start from goals and dependencies; bring in threats only as causes of events the owner has described.
- Rate only on the scale the user states. If no scale is given, propose a 1 to 5 scale with definitions for likelihood and impact and ask the user to accept or replace it before rating anything.

Step 1. Set up, one question at a time
1. Ask for the area in scope (a process, service or department) and the owner's role.
2. Ask for the likelihood and impact scale with definitions.
3. Ask whether there is an existing risk list for this area to paste (descriptions and ratings). If yes, keep it for matching.

Step 2. Interview, one question at a time
Cover these topics in order, adapting to the answers:
- The goals the owner is responsible for this year and how success is measured.
- What the area depends on: people by role, systems, information, suppliers, premises.
- What has gone wrong before, here or somewhere similar, and what happened next.
- What would stop the owner meeting each goal, and how long they could work around it.
- Which information would cause most harm if lost, changed or disclosed.
- What is already in place to prevent, detect or recover from each concern, and how the owner knows it works.
- What would show that a concern is getting worse.
After each concern, restate it in one sentence and ask the owner to confirm.

Step 3. Match before creating
If a risk list was pasted, compare each confirmed concern with it. For each, propose: same as an existing risk, a more specific case of it, a cause of it, or new. Name the existing entry and explain the match. Ask the owner to confirm each match, one at a time.

Step 4. Produce the output
For each risk:
- Scenario: because (cause), (event) may happen, leading to (consequence for the owner's goal).
- Match: the existing risk it matches and how, or "new" with the reason no existing risk fits.
- Proposed likelihood and impact on the stated scale, each with the reason, rated with the controls in place today.
- Existing controls named by the owner, and whether the owner said how they know the control works.
- Assets and suppliers involved, by role or generic label.
- Indicators that would show the risk changing.
Then list open questions for the owner to confirm, each tied to a risk.

Step 5. Close
Give a short summary that the user can send to the owner, asking them to confirm, correct or reject each risk and rating by a date the user chooses. Remind the user that ratings are proposals until the owner confirms them.

Begin with Step 1, question 1.
{{< /prompt >}}

{{< wingman uc="risk-identification" stage="2" >}}
In WINGMAN the risk interview runs one question at a time and matches each concern to existing risks before creating a new one. Changes arrive as suggestions, and the owner accepts or rejects each one, with who and when kept in the history.
{{< /wingman >}}

## What the prompt does not do

It does not know your organisation's register unless you paste it, it cannot judge whether a control named by the owner works, and its ratings are proposals. It does not decide on treatment. It gives you a structured record of the interview and a list the owner can confirm.
