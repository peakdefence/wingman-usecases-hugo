---
title: Financial sector – DORA, MiCA and supervisory expectations
short: Financial sector
sector: financial
weight: 20
summary: Run operational, financial, reputational and other non-financial risk management on one model, and catch the events that should move it.
audience: Banks, payment and e-money institutions, investment firms, insurers and crypto-asset service providers, and the ICT providers that serve them.
standards:
- DORA (EU) 2022/2554
- MiCA (EU) 2023/1114
- ECB / SSM supervisory expectations
- EBA guidelines on internal governance and outsourcing
- ISO 31000
stages:
- title: Risk taxonomy and appetite
  text: Enterprise risks for operational, financial, reputational, compliance, conduct and ICT risk sit at the top. Process risks roll up into them, each with an owner and a place in the risk appetite.
  nodes:
  - risk
  - role
  - document
  links:
  - risk-risk
  - role-risk
  - role-document
  ai: Proposes the hierarchy from the existing register and the risk appetite statement.
  decides: The risk management function proposes; the management body approves.
  media:
  - risk-detail
  - risk-matrix
- title: Processes and critical functions
  text: Business processes and critical or important functions are assets, linked to the systems, data and third parties they depend on.
  nodes:
  - asset
  - supplier
  - document
  links:
  - asset-asset
  - supplier-asset
  - supplier-document
  ai: Drafts the function map and flags third parties that support critical functions.
  decides: Process owners confirm.
- title: Risk and control self-assessment
  text: Owners assess their process risks and the controls that reduce them. The assessment is a scheduled plan, not a spreadsheet sent round once a year.
  nodes:
  - risk
  - control
  - plan
  - role
  links:
  - control-risk
  - plan-risk
  - role-control
  ai: Pre-fills the assessment from last cycle, events since then and control evidence.
  decides: Risk owners rate; the second line challenges.
  media:
  - task-review-card
  - risk-accept-1-suggestion
  - risk-accept-2-accepted
  - risk-confirm-3-completed
- title: Key risk indicators and events
  text: Indicators crossing thresholds, news about the firm or its sector, customer complaints and supplier notices arrive as signals and move risks between assessments.
  nodes:
  - signal
  - risk
  - supplier
  - threat
  links:
  - signal-risk
  - signal-supplier
  - signal-threat
  ai: Watches indicators and news, and links each signal to the risks it concerns.
  decides: Risk owners triage.
  media:
  - sig-report-1-form
  - sig-inbox
  - notif-email-signal
- title: Loss and incident events
  text: Operational loss events, near misses and major ICT-related incidents are recorded once, with their cause, the risks they realised and the notices sent.
  nodes:
  - incident
  - risk
  - asset
  - document
  - task
  links:
  - incident-risk
  - incident-asset
  - incident-document
  - incident-task
  ai: Classifies the event, drafts root cause and reporting, and proposes rating changes.
  decides: The risk owner and the risk function confirm.
  media:
  - inc-detail
- title: Reporting and oversight
  text: The management body sees exposure against appetite, events and overdue actions. Internal audit tests the same records.
  nodes:
  - role
  - plan
  - audit
  - finding
  - conclusion
  links:
  - role-plan
  - plan-audit
  - audit-finding
  - finding-conclusion
  ai: Drafts the risk report and the oversight pack from current records.
  decides: The management body decides on actions.
  media:
  - brief-top
registers:
- entity: risk
  title: Non-financial risk register
  text: Operational, reputational, compliance, conduct, model, outsourcing and ICT risks in one hierarchy, scored on the same scale and linked to appetite.
- entity: asset
  title: Processes and critical functions
  text: Business processes, products and critical or important functions, with the systems, data and third parties behind each.
- entity: supplier
  title: Third-party and outsourcing register
  text: ICT third-party arrangements and other outsourcing, with the functions they support, contracts, exit plans and assessments. The basis for the DORA register of information.
- entity: signal
  title: Indicators and events feed
  text: Key risk indicators, complaints, media and sector news, supplier notices and supervisory communications, each triaged and linked to risks.
- entity: incident
  title: Loss event and incident log
  text: Loss events, near misses and major incidents with cause, impact, realised risks, reporting and follow-up.
- entity: control
  title: Control library
  text: Controls with owners, frequency and evidence, tested in self-assessments and by internal audit.
- entity: requirement
  title: Regulatory obligations
  text: DORA, MiCA, EBA guidelines and supervisory expectations as clause-level records, mapped across frameworks so one control counts for several.
use_cases:
- uc: risk-identification
  text: Interview-based risk identification per process, feeding the operational risk hierarchy instead of a one-off workshop.
- uc: risk-review
  text: Risk and control self-assessment with second-line challenge, scheduled and tracked as a plan.
- uc: incident-handling
  text: Loss events and major ICT-related incidents are recorded once, with classification, reporting and lessons learned that update risks.
- uc: supplier-evaluation
  text: Third-party risk under DORA and outsourcing guidelines, from pre-contract assessment to exit plans, feeding the register of information.
- uc: business-impact-analysis
  text: Critical or important functions with impact tolerances, recovery objectives and the dependencies behind them.
- uc: new-requirements
  text: New supervisory expectations or MiCA requirements are mapped to existing controls before anyone writes a new policy.
- uc: management-review
  text: The management body reviews exposure against risk appetite, events and remediation status.
- uc: change-management
  text: New products and material changes are assessed for risk before they go live.
questions:
- q: What is our exposure against appetite right now?
  a: From the enterprise risks to the process risks below them, with current ratings, the events and indicators that moved them, and the controls in place.
- q: Which events this quarter should have changed a risk rating?
  a: From signals and loss events to the risks they indicate or realise, showing which ratings were reviewed and which were not.
- q: Which critical functions depend on a single third party?
  a: From the function to the assets it runs on, to the suppliers that provide them, with contracts and exit plans.
- q: Is the register of information complete?
  a: Suppliers with no linked function, contract or assessment show up as gaps before the submission is due.
---

Financial regulators look at the whole of non-financial risk, not only ICT. DORA sets the rules for ICT risk, incident reporting, resilience testing and ICT third parties. MiCA brings governance, conflicts of interest, complaints handling, outsourcing and business continuity to crypto-asset service providers. Supervisory expectations, including those of the ECB for significant institutions and the EBA guidelines, ask for a risk taxonomy, appetite, self-assessments, loss data and management body oversight.

Most of this work is still manual: self-assessments in spreadsheets, events collected by email, indicators in a separate report. In WINGMAN, risks, controls, events and third parties are linked records, so an event updates the risk it concerns, and the management body sees one picture.
