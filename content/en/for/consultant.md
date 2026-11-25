---
title: I run security programmes for several clients
short: For consultants and vCISOs
summary: Your method is your product, and context switching is your largest cost. WINGMAN keeps each client's programme as a current record, and your AI assistant runs the same procedure on each of them.
weight: 60
slug_id: consultant
problems:
- q: Monday is one client, Tuesday another. I lose time re-reading my own notes.
  a: 'The Brief is written each morning from that client''s records: where risk concentrates, what is overdue, which gaps are open. You start from the current state, not from your last notes.'
- q: My junior's risk workshop looks different from mine.
  a: A skill follows the same steps every time. The risk interview asks one question at a time, matches each concern to existing risks before creating a new one, and links assets, suppliers and controls. You can also build your own skill set to use with WINGMAN, so the steps are your method, and use skills to build policy templates to your own preferences.
- q: The registers drift between my visits.
  a: Reviews are tasks for the client's own owners, on a calendar. Register checks list what has gone stale, so your visit starts with a list, not with a reconciliation.
- q: I chase evidence by email, client after client.
  a: Tasks carry owners and due dates, and late ones are listed by name. Reminders are drafted for you and go out in your name after you approve them.
- q: At month end the client asks what they got for the retainer.
  a: Completed reviews, accepted changes, closed tasks and new evidence are dated records in the client's register. The work is visible there, not only in your invoice.
- q: When the engagement ends, the client gets a zip file.
  a: Each client has its own workspace, and its data can be exported. What you build stays there as linked records, owned by roles at the client, and remains usable when you leave.
- q: I worry about mixing clients when I use AI tools.
  a: Each client's records sit in that client's own workspace, not in a chat project you keep tidy by hand. An assistant's connection can be restricted to a single client's project, or narrower, so one session cannot reach another client's records.
terms:
- t: Skill
  d: A procedure your AI assistant follows step by step on your WINGMAN records, such as a risk interview or an audit. It runs in the assistant you already use, for example Claude.
- t: The Brief
  d: A short written summary of the state of the programme, produced by WINGMAN's AI every morning from the records.
- t: Plan
  d: A set of recurring or one-off tasks toward one goal, such as the yearly calendar of reviews.
- t: Signal
  d: 'A sign that something is changing: a monitoring alert, a scanner result, a supplier''s notice, threat news, or something a colleague reports.'
does:
  knowledge: 'Each client has its own workspace with its own record: requirements, assets, risks, controls, suppliers and evidence, linked. The data can be exported.'
  projects: 'Skills cover the engagements you already sell: a framework implementation, a risk identification, a business impact analysis, an internal audit. Frameworks come with their requirements loaded, and you can add single requirements. For an audit you can bring your own checklist workbook.'
  regular: Plans generate the recurring reviews between your visits. The management review pack is assembled from the records.
  events: A signal at a client is classified and linked to the assets and risks it touches, so you see what it concerns before you pick up the phone.
prompt:
  title: What state is this client in?
  lede: It asks about one client, then gives you a one-page state, what depends on your memory and a handover list.
  text: |-
    You are helping an independent security consultant who runs programmes for several client organisations. Answer in the language I write in.

    Ask me the questions below one at a time and wait for each answer. Do not ask for client names or confidential details; I will describe one client in general terms.
    1. What does the client do, how large is it, and which standard or law are you working toward?
    2. What have you delivered so far, and where does it live (documents, spreadsheets, a tool)?
    3. What does the client's own staff do between your visits, and how do you know it was done?
    4. Which evidence are you still waiting for, and from whom?
    5. What would the client have to do alone if your engagement ended next month?
    6. What do you report to the client each month?

    Then give me:
    - A one-page state of this client: done, in progress, stale, missing.
    - What depends on my memory and not on anything the client holds.
    - Which decisions are waiting for the client, and since when.
    - A handover list: what a successor or an internal hire would need.
    - A monthly report outline that shows the work done and the decisions waiting for the client.
    - The three recurring tasks I should hand to the client's own people, with a reminder cadence.
    Give the state as a table I can paste into a spreadsheet.
media:
- ask-scope
- plans-list
- set-access
yours:
- Your judgement and your method. A skill follows steps; what to ask next and what a rating should be is yours and the owner's.
- The client relationship. Owners at the client confirm their own risks and controls.
- Review of what you accept. A suggestion you accept is your decision, on the record.
ask:
- Who can see the skills and templates you build
- Partner licensing and pricing
- One view across all your clients
- 'Who holds the contract for a client''s workspace: you or the client'
- How Peak Defence's own consulting relates to partners
use_cases:
- risk-identification
- business-impact-analysis
- auditing
- new-requirements
- regular-reviews
sectors:
- iso27001-soc2
- nis2
next:
  title: Try your next workshop on one client
  text: We can run a risk identification on the fictional company with you, or set one up for a client of yours.
  ask: A risk identification run together, on a fictional company or for one of my clients
linkedin: true
---
