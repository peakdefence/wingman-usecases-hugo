---
title: Answering a security questionnaire
kb: security-questionnaire
weight: 30
summary: "For someone who has just received a long customer security questionnaire, for example from a bank: how to triage it, answer only from what is in place, handle the contract clauses that come with it, attach the right evidence, and say 'planned' honestly. One prompt turns the questions into a mapped answer table."
regulations:
- ISO/IEC 27001:2022
- DORA Art. 28 to 30
- NIS2 Art. 21
audience: CTOs, security and compliance leads, account managers handling customer due diligence
uc: new-requirements
updated: 2026-11-25
---

A spreadsheet with two hundred questions has arrived from a customer, often a bank or another regulated company, with a deadline and a contract attached. The answers become part of the customer's supplier file and are sometimes written into the contract, so an answer that overstates what you do is a commitment you cannot keep. This guide shows how to work through the questionnaire quickly without saying more than is true, and the prompt at the end turns the questions into a table of proposed answers mapped to controls and ISO 27001.

## How to use this guide

1. Read the triage section and decide who in the company can confirm answers for each area (infrastructure, development, HR, suppliers, legal).
2. Paste the prompt into a fresh chat with any capable LLM. Paste the questions, then describe what is in place. Remove customer names, people's names, internal hostnames, secrets and anything the questionnaire marks confidential.
3. Check every proposed answer with the person who owns that area before it is sent. The table is a draft; the person who signs the questionnaire is answerable for it.

## Triage first

Before answering anything, sort the questions. Most questionnaires mix a few hundred questions into perhaps twenty topics, and many ask the same thing in different words.

1. **Map each question to a control.** Name the control that would answer it: access control, backup, logging, incident handling, supplier management, secure development and so on. Questions that map to the same control get consistent answers.
2. **Map the control to a standard clause.** Use ISO/IEC 27001 Annex A or clauses 4 to 10 as the common reference, even if you are not certified. It gives the customer a familiar anchor and gives you a structure to reuse next time.
3. **Answer only from what is in place.** "In place" means it operates today and you could show a record of it. A policy that exists but is not followed is not in place.
4. **Mark gaps as gaps.** "No" or "Not currently" is an acceptable answer. A false "Yes" found later in an audit or after an incident damages the relationship far more than an honest gap now.
5. **Never overstate.** Avoid "always", "all", "fully" and "real-time" unless they are literally true. Prefer the scope that is true: "MFA is enforced for all staff accounts in the identity provider; two legacy service accounts are excluded and listed."
6. **Flag what you cannot answer.** Some questions need legal, HR or a supplier to answer. Some cannot be answered truthfully as asked, because the premise does not fit your service. Say so and offer the closest accurate statement.

## Common topics and where they map

| Question topic | ISO 27001:2022 reference | Typical evidence |
|---|---|---|
| Security policy and roles | Clauses 5.2 and 5.3; A.5.1, A.5.2 | Approved policy with date and approver; role descriptions |
| Risk assessment | Clauses 6.1.2 and 8.2 | Risk method and a dated extract of the risk register |
| Access control and MFA | A.5.15, A.5.18, A.8.5 | Identity provider settings screenshot; last access review record |
| Staff screening and training | A.6.1, A.6.3 | Screening procedure; training completion report |
| Supplier management | A.5.19 to A.5.22 | Supplier list with assessments; standard contract clauses |
| Cloud services | A.5.23 | List of cloud providers and their certifications |
| Incident management | A.5.24 to A.5.28 | Incident procedure; anonymised incident log extract |
| Business continuity and backup | A.5.30, A.8.13 | Recovery objectives; last restore test record |
| Vulnerability management and testing | A.8.8, A.8.29 | Scan or penetration test summary, findings closed |
| Logging and monitoring | A.8.15, A.8.16 | Retention settings; alerting description |
| Encryption | A.8.24 | Description of encryption at rest and in transit |
| Secure development and change | A.8.25, A.8.28, A.8.32 | Pull request rules; pipeline checks; change records |

## Reuse answers

Keep the final answers, with the control, the clause, the evidence and the date, in one place. The next questionnaire will ask most of the same things. Review the stored answers when a control changes and at least once a year, because an old answer that is no longer true is the same problem as an overstatement. Where the customer accepts it, a short security overview document, or a standard format such as a shared assessment questionnaire, can replace many individual answers.

## Contract clauses that come with it

Banks and other financial entities often attach a security annex, a data processing agreement or audit and termination clauses, partly because DORA requires them to have certain provisions in contracts with ICT service providers. Treat each clause as a requirement:

- Can you meet it today? If not, by when, and at what effort?
- Does it conflict with an answer in the questionnaire, or with your own supplier contracts? A clause on notifying incidents within a fixed number of hours must fit what your hosting provider tells you, and when.
- Does it give the customer audit or access rights you need to scope, such as notice periods, frequency and confidentiality?
- Does it require you to pass obligations on to your subcontractors?

Send the clauses you cannot meet back as proposed changes, with the reason, before the questionnaire answers are final. The answers and the contract must say the same thing.

## Evidence to attach

Attach evidence only where it is asked for or clearly helps, and share the minimum: a dated extract, a screenshot of a setting, a summary rather than a full report. Remove internal hostnames, IP addresses, people's names and details that would help an attacker. Penetration test reports are usually shared as an executive summary or shown on a call rather than sent. Certificates from your cloud providers cover their part, not yours; say which part they cover.

## Answering "planned" honestly

A planned control is acceptable to most customers if the answer is specific. A good "planned" answer has four parts: what will be in place, by when, who owns it, and what is done in the meantime. For example: "Quarterly access reviews for production systems are planned from March 2027, owned by the head of infrastructure. Until then, access is limited to five engineers and removed on the day someone leaves, through the offboarding checklist." Do not mark something planned unless someone has agreed to do it and a date exists. If it is only an intention, say it is not in place.

## Prompt: questionnaire answer table

{{< prompt id="security-questionnaire-answers" title="Security questionnaire answer drafter" >}}
You are helping a company answer a security questionnaire from a customer, often a bank or another regulated organisation. You draft honest answers based only on what the company tells you is in place, map each question to a control and an ISO/IEC 27001:2022 reference, and identify which questions cannot be answered truthfully as asked. You do not decide what the company commits to; the person who signs the questionnaire does.

Reply in the language the user writes in, unless they ask for another one. Draft the answers in the language of the questionnaire unless I ask otherwise.

Ground rules
- Never invent facts about the company, its controls, its certifications, its suppliers or its evidence. If I have not told you something is in place, it is not in place.
- Never overstate. Do not use "always", "all", "fully", "continuously" or "real-time" unless I have confirmed it is literally true. State the actual scope and exceptions.
- Status is one of: In place (operates today and a record exists), Partly (exists but with gaps in coverage or records; say which), Planned (only if I give an owner and a date), Not in place.
- For ISO 27001 references, use the 2022 clause numbers (4 to 10) and Annex A control numbers only when you are certain of them; otherwise write the control name and [TO CONFIRM: reference]. Do not cite laws, regulations or legal deadlines unless I give you the text.
- Remind me at the start to remove customer names, people's names, hostnames, IP addresses, secrets and anything marked confidential before pasting.
- Ask one question at a time and wait for the answer.

Step 1. Collect the material
Ask me, one at a time:
1. To paste the questions (with their numbers or IDs), or as many as fit, and say whether more will follow.
2. What the company does, roughly how many people, and which service the customer uses.
3. Whether the company holds any certification or attestation, and its scope and date. If none, say none.
4. To describe what is in place, area by area: policies and roles; risk assessment; access control and MFA; staff screening, onboarding, offboarding and training; supplier management and cloud providers; incident management; backup and continuity; vulnerability management and testing; logging and monitoring; encryption; secure development and change; physical security; personal data handling. Accept short answers and "nothing".
5. What evidence exists for each area and what may be shared with the customer.
6. Whether a contract, security annex or data processing agreement came with the questionnaire; if so, ask me to paste the relevant clauses.
Then list any area where my description is too thin to answer the questions, and ask follow-up questions one at a time, only for those areas.

Step 2. Group the questions
Group the questions by control and list duplicates and near-duplicates, so they get consistent answers. Show the grouping briefly and ask me to confirm before drafting.

Step 3. Draft the answer table
Produce a table with these columns: question ID; question (shortened if long); proposed answer; control; ISO 27001 clause or Annex A reference; status (In place / Partly / Planned / Not in place); evidence to attach (specific, minimal, with what to redact). Answers are short, factual and limited to what I told you. For Partly, state what is covered and what is not. For Planned, state what, by when, who owns it and what is done in the meantime. For Not in place, say so plainly and, if relevant, what reduces the risk today.

Step 4. Questions that cannot be answered truthfully
List separately every question that cannot be answered truthfully with the information given, or whose premise does not fit the service. For each: why, who in the company could answer it (by role), and an accurate alternative answer if one exists.

Step 5. Contract clauses
If clauses were provided, produce a table: clause; what it requires; can we meet it today (yes / partly / no); conflicts with an answer above or with our supplier terms; proposed change or comment to send back. Do not give legal advice; mark clauses that need review by counsel.

Step 6. Close
Give a short summary: number of questions by status, the main gaps, the commitments implied by Planned answers with their dates and owners, and the answers that must be checked by a named area owner before sending. Remind me that the person who signs is answerable for every answer, and that the final answers should be stored with their evidence and date for reuse.

Begin with the reminder about removing confidential details, then ask question 1.
{{< /prompt >}}

{{< wingman uc="new-requirements" stage="2" >}}
In WINGMAN a contract clause or questionnaire requirement can be added as a single requirement record and linked to the controls and evidence that already exist, so the gap is visible and the next questionnaire starts from the same links.
{{< /wingman >}}

## What the prompt does not do

It does not know what your company does beyond what you tell it, it does not check your evidence, and it does not give legal advice on the contract. It drafts consistent, honest answers and shows you where the truthful answer is "no" or "not yet", so you can decide before you sign.
