---
title: I look after security alone, next to another job
short: For one-person security functions
summary: You are the cybersecurity manager, the incident manager and the risk coordinator, and you also have another job. WINGMAN keeps the registers the law expects and prepares the reports from them, so they are not written from nothing each time.
weight: 40
slug_id: solo
problems:
- q: The self-assessment report is written from nothing every time.
  a: The report is generated from the records. For each requirement it lists the controls, their status and valid evidence and proposes a fulfilment level with reasons. The conclusion per requirement is kept for next time.
- q: Friday, 16:40. Is this incident significant?
  a: The requirements of the regulation come loaded as records. WINGMAN proposes the classification against its criteria, with reasons, tracks the deadlines and drafts each report to CERT.LV from the incident record. You decide and you send.
- q: The continuity plan was approved once and never tested.
  a: A business impact analysis records, for each service, how long it can be down and what recovery it needs. Recovery tests are tasks with dates and their results are kept as evidence, so "when was this last tested" has an answer.
- q: Nothing reminds me. I find out the access review was due in March.
  a: One plan holds every recurring review with its cadence. Tasks go to the owners of the systems, late ones are listed by name, and reminders go out in your name after you approve them.
- q: Management gives me ten minutes at the end of a meeting.
  a: The approval pack is prepared from the records, and the minutes are drafted from your notes. Decisions become tasks with owners, and unfinished ones are carried into the next review.
- q: Every page talks about a CISO, an incident manager and a risk owner. That is all me.
  a: Roles are separate from people, and one person can hold several. The record still shows which role decided, so the duties can be split later without rebuilding anything.
- q: My suppliers are a contract list in Excel.
  a: A supplier is a record linked to the services it provides, its contract, its evaluation date and the risks it is involved in. Once a supplier's incident notice is recorded as a signal, the links show which services it touches.
terms:
- t: Signal
  d: 'A sign that something is changing: a monitoring alert, a scanner result, a supplier''s notice, threat news, or something a colleague reports.'
- t: Role
  d: A responsibility separate from the person who holds it, such as risk owner or incident manager. One person can hold several roles.
- t: Control
  d: Something you do to reduce a risk or meet a requirement, such as enforcing multi-factor login or reviewing admin accounts every quarter.
- t: Evidence
  d: 'Proof that a control actually ran: a record, a screenshot, a log export. It has a date and it expires.'
does:
  knowledge: Services under the law, the systems and suppliers they depend on, risks, incidents and requirements are linked registers. The requirements come loaded when you select the framework; each one is a record linked to the controls in place.
  projects: A risk interview or a business impact analysis runs one question at a time with the service owner. What they say becomes records they confirm.
  regular: Reviews follow a calendar. Evidence shows when it is about to expire. The self-assessment report and the management review are prepared from the records.
  events: Alerts, notices and reports arrive as signals. Each one is assessed and becomes an incident record when it needs to. A significant incident carries its reports and deadlines, and the incidents together form the cyber incident log.
prompt:
  title: What do I owe under the law, and what is missing?
  lede: It asks about your duties and registers, then gives you what is missing and a twelve-month calendar sized for a few hours a week.
  text: |-
    You are helping a cybersecurity manager who works alone and can give security only part of their time, in an organisation covered by national NIS2 legislation. Answer in the language I write in.

    Ask me the questions below one at a time and wait for each answer. My answers will be general. Do not ask for the organisation's name, system names, IP addresses, people's names or details of vulnerabilities.
    1. What kind of organisation is it, how many people, and which law and regulation apply?
    2. Which duties with dates do you know of (self-assessment, risk and continuity plan, incident reporting, audit)?
    3. Which registers exist today, and in what form (services, systems, suppliers, risks, incidents)?
    4. Which recurring checks should happen, and which actually happened in the last year?
    5. Who on the management side is responsible, and when did they last decide something?
    6. What would you do in the first hour of a suspected significant incident?

    Then give me:
    - A list of my duties as I described them, each with what exists and what is missing.
    - A calendar for the next twelve months, month by month, sized for a few hours a week.
    - What to ask of management, in one page.
    - A first-hour checklist for an incident.
    You do not know my national law. Do not state legal deadlines or criteria as facts; mark each one "check against the law" and tell me which document to check.
media:
- task-calendar
- plan-activities
- brief-gaps
yours:
- 'Every decision and signature: the classification, the report, the acceptance of a risk.'
- Interpreting the law. Check requirement texts and deadlines against the law and the regulation in force.
- Getting owners to answer. WINGMAN sends the task and the reminder; it cannot make a colleague reply.
ask:
- Importing the Word and Excel files you already have
- Whether a public body may use AI hosted in a cloud service on this data, and how WINGMAN works without it
- Where the data is hosted
- Price, licence unit and how it fits a procurement procedure
- How many hours a month it takes one person
use_cases:
- regular-reviews
- incident-handling
- management-review
- business-impact-analysis
- supplier-evaluation
sectors:
- nis2
next:
  title: See the self-assessment report come from the records
  text: We can show the report and an incident report draft on the fictional company, in Latvian.
  ask: A sample self-assessment report and a CERT.LV incident report draft, on a fictional organisation
---
