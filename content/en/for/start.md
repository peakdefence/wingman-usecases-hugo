---
title: A customer asks for ISO 27001, and we have no security team
short: Starting from zero
summary: You do not need a security department to start. You need to know the order of the work, and one place where each result is kept so the next step builds on it.
weight: 20
slug_id: start
problems:
- q: I don't know what to do first.
  a: 'A skill is a procedure your AI assistant, for example Claude, follows step by step while connected to WINGMAN. The implementation skill works through fixed stages that you can stop and resume: your context, the requirements, the documents, a risk workshop (an interview about what could go wrong), the controls and a roadmap. Each stage leaves records the next one uses.'
- q: I don't know the vocabulary, and I'm embarrassed to ask.
  a: The assistant asks one question at a time in plain words and explains a term when it needs one. The few you cannot avoid are listed below.
- q: I'm afraid of ending up with a binder of policies nobody follows.
  a: A policy is linked to the controls it describes, and a control needs evidence that it ran. A control with no valid evidence shows up as a gap, so paper without practice is visible to you before it is visible to an auditor.
- q: It all lands on me, on top of my job.
  a: The assistant drafts and you confirm. Recurring work, such as access reviews or supplier checks, becomes tasks for the people who run those systems, with reminders, so it is not all yours to remember.
- q: My biggest customer sent a security questionnaire and a contract clause.
  a: A customer's requirement is a record like any other. A contract clause is mapped to the control that meets it and to the matching clauses of the standard, so one control answers the customer and the auditor. This site does not show a tool that fills in a questionnaire for you.
terms:
- t: ISMS
  d: 'Information security management system. It is what ISO 27001 certifies: how your company decides, carries out and checks its security, not a piece of software.'
- t: Skill
  d: A procedure your AI assistant follows step by step on your WINGMAN records, such as a risk interview or an audit. It runs in the assistant you already use, for example Claude.
- t: Control
  d: Something you do to reduce a risk or meet a requirement, such as enforcing multi-factor login or reviewing admin accounts every quarter.
- t: Statement of Applicability
  d: The list of the standard's controls, saying which apply to you, why, and whether they are in place.
- t: Evidence
  d: 'Proof that a control actually ran: a record, a screenshot, a log export. It has a date and it expires.'
- t: Role
  d: A responsibility separate from the person who holds it, such as risk owner or incident manager. One person can hold several roles.
does:
  knowledge: Start from what you already run. Products, systems, data and suppliers become assets with owners; the scope statement is drafted from them.
  projects: You select the framework, and its requirements are loaded as records. They are matched to what you already do, from what you tell the assistant and the documents you have. Each one is marked covered, partly covered or open; the open ones become controls to build, tasks and a plan.
  regular: A review calendar is built from the requirements that ask for reviews. Owners get their tasks and reminders; you see what is late and whose it is.
  events: Anyone can report something odd. Describe what happened in the chat and WINGMAN drafts the incident record as a suggestion for a person to accept.
prompt:
  title: What do I do first for ISO 27001?
  text: |-
    You are an experienced ISO 27001 implementer helping a technical founder with no security background. Use plain words and explain each term the first time you use it. Answer in the language I write in.

    Ask me the questions below one at a time and wait for each answer. Do not ask for company names or confidential details.
    1. What does the company build or run, and how many people work there?
    2. Who asked for ISO 27001, and by when?
    3. Where does the product run (which cloud, which main services), and how do people log in?
    4. Which security practices already exist, even informally (access reviews, backups, code review, onboarding and offboarding)?
    5. Which outside companies could take the product down or expose customer data if they failed?
    6. Who could give a few hours a week to this, besides you?

    Then give me:
    - A proposed scope in two sentences.
    - The work in order, in six to eight steps, each with what it produces and who is needed.
    - What I can reuse from what already exists.
    - The five decisions only I can make.
    - What a certification auditor will ask to see.
    Do not give durations or prices as facts; say what they depend on. Do not write policies yet.
media:
- ask-scope
- plans-list
- doc-list
yours:
- The decisions. The assistant can draft a scope, a risk or a policy; someone who knows the company has to confirm that it is true.
- Running the controls. WINGMAN tracks that the backup test happened and keeps its evidence; it does not run the test.
- The certification audit. An accredited certification body does it, under a separate contract with you.
ask:
- How long it takes and what it costs for a company of your size
- How much of your engineers' time it needs
- Whether an experienced person reviews your decisions along the way
- Which of your systems it connects to
- Answering customer security questionnaires from the record
use_cases:
- new-requirements
- risk-identification
- regular-reviews
- auditing
sectors:
- iso27001-soc2
- nis2
next:
  title: See the first stage on a company like yours
  text: We can walk through the start of an implementation on the fictional company, or begin with your own scope.
---
