---
title: Our registers drift apart, and the risk register only moves before an audit
short: For CISOs and security leads
summary: The programme works, but it runs on spreadsheets, reminders and your memory, or on a compliance tool that stops at its templates. WINGMAN keeps the registers as one set of linked records that your AI assistant reads and proposes changes to, and it moves them when something happens, not when the audit is due.
weight: 30
slug_id: ciso
problems:
- q: The week before the audit I reconcile the registers by hand.
  a: 'Register checks run across every record, not a sample: risks without an owner or a score, requirements without a control, controls without valid evidence, tasks more than 30 days late. Each gap links to the records behind it.'
- q: Nobody else could run this if I left.
  a: Risks, controls, assets and plans are owned by roles. Assign the role to a successor and every record follows, with its tasks and evidence.
- q: Reviews happen when I remember to chase them.
  a: A plan generates the review tasks at its cadence, one per risk, asset or policy. Late ones are listed with the assignee's name, and reminders go out in your name after you approve them.
- q: Scanner findings never reach the risk register.
  a: Vulnerabilities arrive from scanners and penetration-test tools with CVE, CVSS and EPSS, linked to the assets that carry them and the risks they raise. Remediation is ordered by the risk on critical assets, not by scanner severity alone.
- q: Incidents happen, and the ratings stay as they were.
  a: An incident is linked to the risk it made real. The next review of that risk opens with what changed since the last one and a proposed rating change with its reasoning.
- q: My AI workflows start every chat from pasted context.
  a: Assistants such as Claude and ChatGPT connect to WINGMAN over MCP and work on the record. A skill reads what is there, proposes changes and leaves the result for the next step, so you do not paste the register into a chat.
- q: I can't let an agent write to the register unsupervised.
  a: Changes arrive as suggestions with their reasons. A person accepts or skips each one, and nothing is written until the review is completed.
- q: My suppliers live in a second sheet.
  a: A supplier is a record linked to the services it provides, its contract and exit plan, its evaluation date and its risks. For financial entities this is the basis of the DORA register of information.
terms:
- t: Skill
  d: A procedure your AI assistant follows step by step on your WINGMAN records, such as a risk interview or an audit. It runs in the assistant you already use, for example Claude.
- t: MCP
  d: An open standard that lets an AI assistant use tools and data. It is how Claude or ChatGPT connects to WINGMAN.
- t: Signal
  d: 'A sign that something is changing: a monitoring alert, a scanner result, a supplier''s notice, threat news, or something a colleague reports.'
- t: The Brief
  d: A short written summary of the state of the programme, produced by WINGMAN's AI every morning from the records.
- t: Register check
  d: A rule WINGMAN applies to every record to find gaps, such as a risk with no owner or a control with no valid evidence.
does:
  knowledge: Every record exists once. A control links to the risks it reduces, the clauses it meets and the evidence that proves it, so the registers cannot drift apart. They can still be wrong, which is what the reviews are for. Your data can be exported.
  projects: Select a framework and its requirements are loaded as records, or add single requirements such as a contract clause. Each is mapped to the controls you already have. One control can count for several standards; what is left is the gap.
  regular: Asset, risk, document, access and supplier reviews run on a calendar. Evidence carries an expiry date and is flagged before it lapses. The management review pack is assembled from the records.
  events: A scanner result, a supplier notice or threat news arrives as a signal. WINGMAN classifies it, shows what it touches and proposes a risk, an incident or tasks; the owner accepts or rejects.
prompt:
  title: Where does my programme depend on memory?
  lede: It asks about your registers and your use of AI, then shows where the programme depends on memory and where registers can disagree.
  text: |-
    You are a peer reviewer for a security leader who runs an established security and compliance programme. Be direct. Answer in the language I write in.

    Ask me the questions below one at a time and wait for each answer. Do not ask for company names or confidential details.
    1. Which registers do you keep (risks, controls, assets, suppliers, evidence, incidents), and in which tools?
    2. When did the risk register last change outside audit preparation, and what caused the change?
    3. How does a scanner finding or a supplier's incident notice reach a risk rating today?
    4. Which recurring reviews exist, and how do you know one was missed?
    5. If you were away for three months, what could your deputy not do?
    6. Where do you use AI assistants in this work, what do they read and write, and what does the assistant's provider retain?
    7. How do you answer customer security questionnaires today?

    Then give me:
    - The places where the programme depends on one person's memory.
    - The places where two registers can disagree, and how I would notice.
    - The three events that should move a risk rating but currently do not.
    - For each use of AI, what a person approves and where that approval is recorded.
    - The three changes with the largest effect for the least work.
    - Which board metrics I assemble by hand.
    Present the gaps as a table I can paste into a spreadsheet. Do not recommend products.
media:
- brief-gaps
- task-review-start
- vuln-detail
- risk-detail
yours:
- 'The risk decisions: ratings, treatments and acceptances are confirmed by the risk owner.'
- The triage call. WINGMAN proposes a classification with a confidence score; a person decides.
- What goes out. Reports and reminders are drafted for you and sent after you approve them.
ask:
- Import from your spreadsheets, and the export formats
- Which scanners, cloud platforms and ticketing tools connect
- Hosting, sub-processors and which AI model sees the data
- The API and the list of MCP tools
- Pricing, and a way to try it without a call
use_cases:
- security-operations
- regular-reviews
- risk-review
- vulnerability-impact
- supplier-evaluation
sectors:
- iso27001-soc2
- financial
next:
  title: See it on your own registers
  text: We can walk through the register checks, a risk review and a vulnerability on your own records.
  ask: A walk-through of the register checks, a risk review and a vulnerability, on a fictional company
---
