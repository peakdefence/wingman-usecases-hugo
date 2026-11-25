---
title: I am accountable for security and cannot judge where we stand
short: For the board and CEO
summary: NIS2 makes the management body approve the cybersecurity measures and oversee them. WINGMAN gives you a view you can read without a translator, and keeps the record of what you decided and when.
weight: 10
slug_id: board
problems:
- q: I am personally accountable, and I could not show what I did about it.
  a: 'The management review is a record: what was presented, what the management body decided, and when. Each decision becomes a task you can see finished. That is the trace of your oversight.'
- q: I sign what arrives the day before the meeting.
  a: 'The management review is a recurring item with a date and an accountable role. Its pack is assembled from the records: earlier actions, audit results, risk changes, incidents and supplier performance. It does not depend on someone compiling slides the night before.'
- q: I see security once a year, in a slide deck I do not understand.
  a: 'The Brief is a short summary that WINGMAN''s AI writes every morning from the records, in sentences: where risk concentrates, what is covered, what to watch. The gaps it lists link to the records behind them, so your security lead can check it and you can ask about any line.'
- q: My IT manager says we are fine. I cannot check.
  a: 'Gaps are listed by name: risks with no owner, legal requirements nothing is done about, tasks more than 30 days late, documents nobody approved. Each one links to the record and the person responsible. The list is as good as the records, which the routine reviews keep current.'
- q: If our one security person leaves, it all leaves with them.
  a: Records belong to roles, not to people. Assign the role to a successor and the risks, controls and tasks follow.
- q: What happens when something goes wrong?
  a: The incident record shows how severe it is, which reports are due and by when (under NIS2, an early warning in 24 hours and a notification in 72), and who leads. WINGMAN drafts the reports; a named person approves and sends them.
terms:
- t: The Brief
  d: A short written summary of the state of the programme, produced by WINGMAN's AI every morning from the records.
- t: Management review
  d: The regular meeting where management looks at the state of security and decides what to do. Its minutes are kept as a record.
- t: Control
  d: Something you do to reduce a risk or meet a requirement, such as enforcing multi-factor login or reviewing admin accounts every quarter.
- t: Role
  d: A responsibility separate from the person who holds it, such as risk owner or incident manager. One person can hold several roles.
does:
  knowledge: You read a summary written from the same records your security people work on, and its gaps lead to the record behind them.
  projects: When a new law or standard applies, the work becomes a plan with an accountable role, tasks and dates. You can follow its progress without asking.
  regular: The management review comes round at the interval you set (quarterly in our example). Decisions are recorded in the minutes, each becomes a task with an owner, and unfinished ones return at the next review.
  events: An incident carries its deadlines, its draft reports and the follow-up tasks. Afterwards the record shows what was done and when.
prompt:
  title: Where do I stand as the accountable person?
  text: |-
    You are advising a non-technical chief executive or board member who is accountable for cybersecurity (for example under NIS2 or DORA). Answer in the language I write in.

    Ask me the questions below one at a time and wait for each answer. Do not ask for company names or confidential details.
    1. What does the organisation do, how many people work there, and which law or customer makes security your responsibility?
    2. Who looks after security day to day, and is it their only job?
    3. When did management last formally review security, and what was decided?
    4. Which security documents have you personally approved in the past year?
    5. If a serious incident started tonight, who would be called, and who decides whether an authority must be told?
    6. How would you know today whether the agreed measures are actually carried out?
    7. What happens if the person from question 2 leaves?

    Then give me:
    - Where I stand, in five plain sentences.
    - Three decisions I should ask for at the next management meeting.
    - Five questions to put to the person who looks after security.
    - What I should be able to show if someone asked how I oversaw security.
    Say clearly where the answer depends on national law that I should check. Do not invent legal requirements.
media:
- brief-top
- brief-gaps
- task-overdue
yours:
- Approving the measures and the minutes. WINGMAN prepares the pack and drafts the minutes; the management body approves.
- Deciding which risks to accept and what to fund.
- Your own training. WINGMAN records who was trained and who acknowledged a policy; it does not provide the course.
ask:
- What it costs, in money and in your people's time
- Where the data is hosted and which AI services see it
- Which organisations of your size and sector use it
use_cases:
- management-review
- roles-raci
- incident-handling
sectors:
- nis2
- financial
next:
  title: See the management view on real records
  text: We can walk you through the Brief and a management review, on the fictional company or on your own records.
---
