---
title: Our registers drift apart, and the risk register only moves before an audit
short: For CISOs and security leads
summary: The programme works, but it runs on spreadsheets, reminders and your memory. WINGMAN keeps the registers as one set of linked records and moves them when something happens, not when the audit is due.
weight: 30
slug_id: ciso
problems:
- q: The week before the audit I reconcile the registers by hand.
  a: 'Checks run on every record, all the time: risks without an owner or a score, requirements without a control, controls without valid evidence, tasks more than 30 days late. Each gap links to the records behind it.'
- q: Nobody else could run this if I left.
  a: Risks, controls, assets and plans are owned by roles. Assign the role to a successor and every record follows, with its tasks and evidence.
- q: Reviews happen when I remember to chase them.
  a: A plan generates the review tasks at its cadence, one per risk, asset or policy. Late ones are listed with the assignee's name, and reminders go out in your name after you approve them.
- q: Scanner findings never reach the risk register.
  a: Vulnerabilities arrive from scanners and penetration-test tools with CVE, CVSS and EPSS, linked to the assets that carry them and the risks they raise. Remediation is ordered by the risk on critical assets, not by scanner severity alone.
- q: Incidents happen, and the ratings stay as they were.
  a: An incident is linked to the risk it made real. The next review of that risk opens with what changed since the last one and a proposed rating change with its reasoning.
- q: I can't let an agent write to the register unsupervised.
  a: Changes arrive as suggestions with their reasons. A person accepts or skips each one, and nothing is written until the review is completed.
does:
  knowledge: Every record exists once. A control links to the risks it reduces, the clauses it meets and the evidence that proves it, so the registers cannot disagree.
  projects: A new framework is mapped clause by clause to the controls you already have. One control can count for several standards; what is left is the gap.
  regular: Asset, risk, document, access and supplier reviews run on a calendar. Evidence carries an expiry date and is flagged before it lapses. The management review pack is assembled from the records.
  events: A scanner result, a supplier notice or threat news arrives as a signal. WINGMAN classifies it, shows what it touches and proposes a risk, an incident or tasks; the owner accepts or rejects.
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
- Import from your spreadsheets, and export of every record and link
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
---
