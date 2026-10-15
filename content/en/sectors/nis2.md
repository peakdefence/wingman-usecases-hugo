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
- title: Incidents and reporting
  text: Signals are triaged into incidents. Each significant incident carries its reporting deadlines, the notices sent and the follow-up work.
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
  ai: Classifies severity, tracks the 24 h, 72 h and one-month deadlines and drafts the notices.
  decides: The incident manager decides what is reported.
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
  title: Incident register
  text: Timeline, severity, reporting deadlines met, notices to the national CSIRT and lessons learned linked back to risks.
- entity: vulnerability
  title: Vulnerability register
  text: Findings from scans, pentests and advisories, located on assets, with remediation tasks and due dates.
- entity: threat
  title: Threat register
  text: Actors and events relevant to the sector, fed by threat intelligence signals and linked to the risks they drive.
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
  text: Early warning in 24 hours, notification in 72 hours, final report within a month. Deadlines and notices sit on the incident record.
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
  text: The periodic cybersecurity audit runs on the same records, with conclusions per requirement.
questions:
- q: Can we show the supervisor what we run, who supplies it and how it is protected?
  a: From the services in scope to the systems and suppliers they depend on, to the risks on them and the controls that reduce those risks.
- q: Which suppliers would hit an essential service if they failed today?
  a: From the service to the assets it depends on, to the suppliers that provide them, with their criticality and evaluation date.
- q: Are we on time with the incident report?
  a: Each significant incident shows the deadlines that apply, what was sent and when, and what remains.
- q: Which minimum requirements have no working control?
  a: Requirements with no control, or with controls whose evidence has expired, appear as gaps before the audit does.
---

NIS2 asks for more than a set of documents. The entity must know what it runs, who it depends on, which risks it carries and how incidents are handled, and its management body must approve and oversee the measures. In Latvia, the National Cybersecurity Law (Nacionālās kiberdrošības likums) transposes NIS2, and Cabinet Regulation No. 397 sets the minimum cybersecurity requirements, from governance and the cybersecurity manager role to incident classification, backups, encryption and outsourcing. Significant incidents are reported to CERT.LV, the national CSIRT.

WINGMAN keeps these as linked registers in one model, the way an ISO 27001 ISMS would. The information security office works from one source: what the supervisor, the auditor and the management body see is what the office runs on.
