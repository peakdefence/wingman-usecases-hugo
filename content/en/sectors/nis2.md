---
title: NIS2 and national cybersecurity law
short: NIS2
sector: nis2
weight: 10
summary: Run the information security office of an essential or important entity from one registry of suppliers, assets, risks, incidents, vulnerabilities, threats and tasks.
audience: Essential and important entities under NIS2, including state and municipal bodies and private operators covered by the Latvian National Cybersecurity Law.
standards:
- NIS2 (EU) 2022/2555
- Nacionālās kiberdrošības likums
- MK noteikumi Nr. 397
- ISO 27001
stages:
- title: Scope and registration
  text: Services that fall under the law are recorded as assets, with the systems, data and suppliers they depend on. That map is the scope.
  nodes:
  - asset
  - supplier
  - requirement
  links:
  - asset-asset
  - supplier-asset
  ai: Drafts the service map from existing system, contract and procurement records.
  decides: The cybersecurity manager confirms the scope.
- title: Minimum requirements mapped
  text: Each requirement of the law and the regulation is a record, mapped to ISO 27001 clauses and to controls already in place. Gaps are what is left.
  nodes:
  - requirement
  - control
  - document
  links:
  - requirement-requirement
  - requirement-control
  - control-document
  ai: Maps the clauses to existing controls and lists those with no control.
  decides: The cybersecurity manager agrees the gap list.
  media:
  - req-detail
  - ctl-detail
- title: Risks, threats and vulnerabilities
  text: Risks sit on the services in scope. Threats and vulnerabilities make the scenarios concrete and move ratings between reviews.
  nodes:
  - risk
  - asset
  - threat
  - vulnerability
  links:
  - risk-asset
  - threat-risk
  - vulnerability-asset
  - vulnerability-risk
  ai: Proposes risks from the sector threat picture and open vulnerabilities.
  decides: Risk owners rate and choose a treatment.
  media:
  - vuln-detail
  - risk-detail
- title: Management body accountability
  text: The management body approves the risk management measures and oversees them. Roles carry the duties, so a change of staff does not break the chain.
  nodes:
  - role
  - person
  - risk
  - control
  - plan
  links:
  - person-role
  - role-risk
  - role-control
  - role-plan
  ai: Prepares the approval pack and lists records with no owner role.
  decides: The management body approves.
  media:
  - brief-top
- title: Incidents and reporting
  text: Signals are triaged into incidents and classified against the significance criteria of Regulation No. 397. A significant incident carries the reports to CERT.LV, from the early warning and notification to progress and final reports, and the follow-up work. The incidents form the cyber incident log.
  nodes:
  - signal
  - incident
  - asset
  - document
  - task
  links:
  - signal-incident
  - incident-asset
  - incident-document
  - incident-task
  ai: Proposes the classification with reasons, tracks the deadlines and drafts each report in the structure the guidelines require, from the incident record.
  decides: The incident manager decides what is reported.
  media:
  - ask-skill-incident-authority-notice
  - ask-skill-incident-authority-notice-1
  - ask-skill-incident-triage-2-notice
- title: Self-assessment report
  text: The self-assessment report evaluates each formal requirement against the controls in place and their evidence. It is generated from the records, not written from scratch, and the conclusion per requirement is kept for next time.
  nodes:
  - requirement
  - control
  - evidence
  - conclusion
  - document
  links:
  - requirement-control
  - control-evidence
  - conclusion-requirement
  - requirement-document
  ai: Generates the report. For each requirement it lists the controls, their status and valid evidence, proposes a fulfilment level with reasons, and lists the gaps as tasks.
  decides: The cybersecurity manager reviews; the management body approves before submission.
- title: Proof and audit
  text: Controls carry evidence with expiry dates. The cybersecurity audit reads the same records the office runs on.
  nodes:
  - control
  - evidence
  - audit
  - finding
  - task
  links:
  - control-evidence
  - audit-control
  - audit-finding
  - finding-task
  ai: Lists expired evidence and assembles the audit pack per requirement.
  decides: The auditor concludes; owners fix findings.
  media:
  - brief-gaps
registers:
- entity: supplier
  title: Supply-chain register
  text: Each supplier with the services it provides, the data it touches, its criticality, contract terms and evaluation date. Supplier incidents and notices link straight to it.
- entity: asset
  title: Asset and service inventory
  text: Services in scope of the law, the systems and data they run on, owners and criticality, with dependencies drawn as links.
- entity: risk
  title: Risk register
  text: Risks per service, rolled up into entity-level risks, with likelihood, impact, treatment and the controls that reduce them.
- entity: incident
  title: Incident register and cyber incident log
  text: Timeline, classification against the regulation's criteria, reports to CERT.LV with their deadlines, and lessons learned linked back to risks.
- entity: vulnerability
  title: Vulnerability register
  text: Findings from scans, pentests and advisories, located on assets, with remediation tasks and due dates.
- entity: threat
  title: Threat register
  text: Actors and events relevant to the sector, fed by threat intelligence signals and linked to the risks they drive.
- entity: conclusion
  title: Self-assessment results
  text: The fulfilment level of each requirement with the controls and evidence it rests on, generated into the self-assessment report and comparable from one cycle to the next.
- entity: requirement
  title: Requirements catalogue
  text: The articles of the law and the minimum requirements of the regulation, one record per requirement, mapped to ISO 27001 and to controls.
- entity: task
  title: Work plan
  text: Corrective actions, treatment tasks and recurring reviews, each with an owner and a due date, rolled up into the annual plan.
use_cases:
- uc: supplier-evaluation
  text: Supply-chain security as the law asks for it. Critical suppliers are evaluated before onboarding, and supplier notices reach the risk register.
- uc: incident-handling
  text: Classification against the regulation's significance criteria, then the early warning in 24 hours, the notification in 72 hours, progress reports and the final report to CERT.LV, drafted from the incident record.
- uc: new-requirements
  text: When the law or the regulation changes, the new clauses are mapped to controls already in place and only the real gaps become tasks.
- uc: risk-review
  text: An all-hazards risk assessment per service, with treatments the management body can approve.
- uc: vulnerability-impact
  text: Advisories from the national CSIRT and scanner results land on the assets that carry them.
- uc: management-review
  text: The management body sees exposure, incidents, overdue work and approves the measures, with minutes and decisions kept.
- uc: roles-raci
  text: The cybersecurity manager, the management body and control owners are roles with written duties and deputies.
- uc: auditing
  text: The self-assessment and the periodic cybersecurity audit run on the same records, with conclusions per requirement.
questions:
- q: Can we show the supervisor what we run, who supplies it and how it is protected?
  a: From the services in scope to the systems and suppliers they depend on, to the risks on them and the controls that reduce those risks.
- q: Which suppliers would hit an essential service if they failed today?
  a: From the service to the assets it depends on, to the suppliers that provide them, with their criticality and evaluation date.
- q: Are we on time with the incident report?
  a: Each significant incident shows the deadlines that apply, what was sent and when, and what remains.
- q: Can we produce the self-assessment report today?
  a: Yes. From each requirement to its controls, their status and evidence. WINGMAN generates the report with a proposed fulfilment level per requirement, and gaps are listed before anyone signs.
- q: Is this incident significant, and what must CERT.LV receive?
  a: The incident record shows the classification against the regulation's criteria with reasons, the reports due and their deadlines, and drafts of each report.
- q: Which minimum requirements have no working control?
  a: Requirements with no control, or with controls whose evidence has expired, appear as gaps before the audit does.
---

NIS2 asks for more than a set of documents. The entity must know what it runs, who it depends on, which risks it carries and how incidents are handled, and its management body must approve and oversee the measures. In Latvia, the National Cybersecurity Law (Nacionālās kiberdrošības likums) transposes NIS2, and Cabinet Regulation No. 397 sets the minimum cybersecurity requirements, from governance and the cybersecurity manager role to incident classification, backups, encryption and outsourcing. Significant incidents are reported to CERT.LV, the national CSIRT, following the classification and reporting guidelines of the regulation, and entities submit a cybersecurity self-assessment report that evaluates how each requirement is met.

WINGMAN keeps these as linked registers in one model, the way an ISO 27001 ISMS would. The information security office works from one source: what the supervisor, the auditor and the management body see is what the office runs on. The incident reports and the self-assessment report are generated from the same records, so they match what is actually in place.
