---
title: ISO 27001 from zero
kb: iso27001-from-zero
weight: 20
summary: "For a technical founder or CTO whose customer wants ISO 27001 within a year: what the standard asks for in plain words, the order of the work, a rough calendar, the decisions only you can make, and a prompt that turns your answers into a scope and a plan."
regulations:
- ISO/IEC 27001:2022
audience: Technical founders, CTOs, heads of engineering with no security team
uc: new-requirements
updated: 2026-11-25
---

A customer has written ISO 27001 into the contract and you have twelve months. Nobody in the company has done this before. This guide explains what is actually being asked, in which order to do it, and where the calendar time goes. The prompt at the end interviews you and produces a first scope, an ordered plan with effort ranges and the list of decisions that only the company can make.

## How to use this guide

1. Read the next two sections once.
2. Paste the prompt into a fresh chat with any capable LLM and answer its questions one at a time. Describe your company in general terms; remove customer names, people's names and anything confidential.
3. Take the output to the people who will do the work and to whoever signs off spending. The hours are ranges, and the certification body has the last word on audit timing.

## What ISO 27001 asks for, in plain words

ISO/IEC 27001 does not prescribe a set of technical settings. It asks you to run a management system for information security, usually called the ISMS, and to show that it works. The requirements are in clauses 4 to 10; Annex A lists 93 controls you consider against your risks.

| Term | What it means in practice |
|---|---|
| ISMS | How you decide, do, check and improve security: roles, a policy, a risk process, documents, records and reviews. Not a tool or a folder of policies. |
| Scope | The part of the company the certificate covers: which products, services, locations, teams and supporting IT. It is written on the certificate. |
| Risk assessment | A repeatable method for finding what could go wrong with your information, how likely and how bad it is, and who owns each risk. You run it, record it and repeat it. |
| Risk treatment | For each risk, a decision: reduce it with controls, avoid it, share it, or accept it. Accepting is allowed when a named owner signs it. |
| Statement of Applicability | One table listing all 93 Annex A controls: applicable or not, why, and whether implemented. Auditors read it first. |
| Controls | The measures themselves: access reviews, backups, onboarding and offboarding, supplier checks, logging, secure development, incident handling and so on. |
| Evidence | Records that show a control operates: tickets, logs, review notes, training records, signed approvals. A policy is not evidence that anyone follows it. |
| Internal audit | A planned check, by someone who did not do the work, that the ISMS meets the standard and your own rules. Findings are recorded and fixed. |
| Management review | Top management looks at results, risks, audit findings and changes at planned intervals, and makes decisions that are recorded. |
| Certification | An accredited certification body audits in two stages. Stage 1 checks the documents and whether you are ready. Stage 2 checks that the system operates as described. The certificate then needs surveillance audits every year and renewal every three years. |

## The order of the work

| Step | What it produces | Who is needed |
|---|---|---|
| 1. Scope and context | A written scope, the list of interested parties and their requirements (including the customer contract), the main assets and suppliers | Founder or CTO; one person from operations |
| 2. Roles and policy | A named ISMS owner, top-level responsibilities, an information security policy signed by management | Management; the ISMS owner |
| 3. Risk method and assessment | A risk method, a risk register with owners, a treatment plan | ISMS owner; owners of the main systems and processes |
| 4. Statement of Applicability | The SoA, with a reason for each control included or excluded | ISMS owner, reviewed by the CTO |
| 5. Controls and documents | The missing controls built, a small set of procedures people actually use, awareness training delivered | Engineering, IT, HR, whoever runs suppliers and contracts |
| 6. Operation and evidence | Several months of records: access reviews, backup tests, incidents, changes, supplier checks, training | Control owners, as part of their normal work |
| 7. Internal audit and management review | An audit report with findings and corrective actions; minutes of a management review with decisions | An internal auditor independent of the work (often external); management |
| 8. Certification | Stage 1 and Stage 2 audits, nonconformities closed, the certificate | ISMS owner; everyone interviewed by the auditor |

## A rough twelve-month calendar

- **Months 1 to 2:** steps 1 to 3. Choose and contact a certification body early; ask how long the system must have operated before Stage 2 and when they have auditors free.
- **Months 3 to 5:** steps 4 and 5. Most of the effort is here.
- **Months 5 to 9:** step 6. Controls run and records accumulate. This time cannot be compressed by working harder.
- **Months 8 to 10:** step 7. Leave time to fix what the internal audit finds.
- **Months 10 to 12:** Stage 1, then Stage 2 some weeks later, then closing any nonconformities.

The certification body sets its own minimums for audit duration, the gap between Stage 1 and Stage 2 and how much operating history it expects. Ask them before you promise a date to the customer.

## Decisions only the company can make

- **The scope.** Which products and teams are in, and whether corporate IT is included. It must cover the service the customer buys.
- **Who owns the ISMS** and how much of their time it gets. A side project for someone already at full load is the usual reason for slipping.
- **Risk appetite.** Which risk level you accept without further treatment, and who may accept risks above it.
- **Which controls to exclude** and the reason for each.
- **Build, buy or borrow:** what you do yourselves, which tools you adopt, whether you hire a consultant or an external internal auditor.
- **Which certification body** and the target audit dates.
- **What the customer is told** about progress, and when.

## Common mistakes

- **Policies nobody follows.** Downloaded templates describe a company that does not exist. The auditor asks people what they do and checks the records. Write fewer documents and make them match reality.
- **Scope too wide.** Including every office, product and legacy system multiplies the work. Start with what the customer buys and what supports it.
- **No evidence of operation.** Controls switched on a month before the audit leave no history. Start recording from the moment a control exists: a ticket for each access review, a note for each backup restore test.
- **Risk assessment as a one-off.** It must be repeatable and repeated, and the SoA must follow from it.
- **Management absent.** Policy approval, risk acceptance and the management review need top management. A CTO alone is not enough if there is a CEO.

The [first three days of an implementation]({{< relref "/samples/iso27001-first-days" >}}) shows what the first steps can look like for a 60-person software company.

## Prompt: scope, plan and decisions

{{< prompt id="iso27001-from-zero-plan" title="ISO 27001 first plan interviewer" >}}
You are helping the founder or CTO of a small or medium-sized company that must achieve ISO/IEC 27001:2022 certification, usually because a customer requires it. They have no security background. Your job is to interview them and produce three things: a draft scope statement, an ordered implementation plan with ranges of effort in hours, and a list of decisions only the company can make. You are not an auditor or a certification body; say so once at the start.

Reply in the language the user writes in, unless they ask for another one.

Ground rules
- Ask one question at a time. Wait for the answer before asking the next. Keep each question short and explain in one sentence why you ask it if the reason is not obvious.
- Use plain words. When you use a term from the standard (ISMS, Statement of Applicability, risk treatment, internal audit, management review, Stage 1, Stage 2), explain it in one sentence the first time.
- Work only from what I tell you. Never invent facts about my company, my customer's requirements, legal deadlines, certification body rules or clause numbers you are not certain of. Where something is unknown, write [TO CONFIRM: what is needed].
- Do not quote prices, day rates or fees for anything (consultants, tools, certification bodies). Give effort in ranges of hours of the company's own people, and say where external help is commonly used, without cost.
- Tell me at the start to leave out customer names, people's names and confidential details; roles and general descriptions are enough.
- Say clearly that the certification body sets minimum audit durations, the time between Stage 1 and Stage 2 and how much operating history it expects, and that I must confirm these with the body I choose.

Interview (one question at a time, skip what is already answered)
1. What the company does and sells, in two sentences, and roughly how many people work there.
2. What the customer asked for exactly: certification or "alignment", by which date, for which service, and whether the requirement is in a signed contract.
3. Which products or services the customer uses, and which teams build, run and support them.
4. Where the product runs (cloud providers, own servers, regions) and where people work (offices, remote, countries).
5. Company IT: laptops, email, identity provider or single sign-on, how people sign in to production.
6. The ten or so most important suppliers (hosting, code repository, support desk, payment, outsourcing).
7. What already exists: any policies, onboarding and offboarding checklists, backups and restore tests, access reviews, logging, incident handling, security testing, training. Ask for honest answers, including "nothing".
8. Other requirements that apply: personal data and GDPR role, sector rules the customer mentioned, other customer questionnaires.
9. Who could own the ISMS and how many hours per week they could give it; who in management will approve policies and accept risks.
10. Whether the company would use outside help (a consultant, an external internal auditor) and whether a certification body has been chosen.
After the last answer, summarise what you understood in a short list and ask me to correct it before you write the output.

Output
A. Draft scope statement: two to four sentences naming the services, the teams, the locations and the supporting IT that are in scope, followed by a list of what is out of scope and why, and the interfaces with what is out. Point out if the scope does not cover what the customer buys.
B. Ordered plan in a table with these columns: step; what it produces; who is needed (roles); effort range in hours for the company's own people; calendar weeks; dependencies. Use these steps unless my answers justify a change: 1 scope and context; 2 roles and information security policy; 3 risk method, risk assessment and treatment plan; 4 Statement of Applicability; 5 missing controls and the documents people use, with awareness training; 6 operating the controls and collecting evidence; 7 internal audit and management review; 8 Stage 1 and Stage 2 certification audits. Base the effort ranges on my answers about size, existing practice and available time, and state the assumptions behind each range. Put the steps on a calendar ending at the customer's date and mark where the plan is tight.
C. Decisions only the company can make: for each, the decision, why it matters, the options, who should decide, and by when in the plan. Include at least the scope, the ISMS owner and their time, risk appetite and who may accept risks, controls to exclude, build or buy or outside help, the certification body and audit dates, and what to tell the customer.
D. The three largest risks to the date, and what would reduce each.
E. Open questions and assumptions.

End by reminding me that the plan is a draft, that the effort ranges depend on the assumptions listed, and that audit timing must be confirmed with the certification body.

Begin by introducing yourself in two sentences, reminding me to leave out names and confidential details, and asking question 1.
{{< /prompt >}}

{{< wingman uc="new-requirements" stage="4" >}}
In WINGMAN the implementation skill loads the ISO 27001 requirements as records and builds the plan, the risk register and the documents in days, with tasks for the people who will do the work. Running the controls long enough to prove them still takes the months shown above.
{{< /wingman >}}

## What the prompt does not do

It does not write your policies, assess your risks or tell you whether you will pass. It gives you a first scope, an order of work and the decisions to put in front of management, so the year starts with a plan rather than a pile of templates.
