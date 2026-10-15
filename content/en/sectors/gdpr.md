---
title: GDPR and data protection
short: GDPR
sector: gdpr
weight: 60
summary: Keep the record of processing, DPIAs, processors, data subject requests and breaches as linked records, so accountability can be shown at any time.
audience: Any organisation that processes personal data in the EU, as controller or processor, and its data protection officer.
standards:
- GDPR (EU) 2016/679
- Personal Data Processing Law (Latvia)
- ISO/IEC 27701
- ISO 27001
stages:
- title: Record of processing
  text: Each processing activity is an asset, linked to the systems and data it uses, the processors involved and a business owner. Together they form the record of processing activities (Art. 30).
  nodes:
  - asset
  - supplier
  - role
  links:
  - asset-asset
  - supplier-asset
  - role-asset
  ai: Drafts processing activities from systems, contracts and existing privacy notices.
  decides: Process owners confirm; the DPO reviews.
- title: Purpose and legal basis
  text: Purpose, legal basis, retention and the information given to data subjects are written down per activity, together with legitimate interest assessments where needed.
  nodes:
  - requirement
  - document
  - asset
  links:
  - requirement-document
  - document-asset
  ai: Proposes the legal basis and retention from the purpose, and flags activities with no privacy notice.
  decides: The DPO advises; the controller decides.
- title: DPIA and risks
  text: High-risk processing gets a DPIA. Risks to data subjects sit on the processing activity, with the measures that reduce them.
  nodes:
  - document
  - asset
  - risk
  - control
  links:
  - document-asset
  - risk-asset
  - control-risk
  ai: Screens new activities for DPIA triggers and reuses existing security controls as measures.
  decides: The DPO gives an opinion; the owner accepts the residual risk.
- title: Processors and transfers
  text: Processors carry their data processing agreements, sub-processors and transfer safeguards, and are assessed before use.
  nodes:
  - supplier
  - document
  - audit
  - risk
  links:
  - supplier-document
  - audit-supplier
  - risk-supplier
  ai: Checks agreements for the required terms and lists transfers outside the EEA without safeguards.
  decides: Procurement and the DPO approve.
- title: Requests and breaches
  text: Data subject requests are tracked against their deadline. Personal data breaches are assessed for notification to the supervisory authority within 72 hours and to the people affected.
  nodes:
  - signal
  - incident
  - document
  - task
  - role
  links:
  - signal-incident
  - incident-document
  - incident-task
  - role-incident
  ai: Finds the activities and systems a request or breach concerns, tracks deadlines and drafts the notifications.
  decides: The DPO advises; the controller decides on notification.
- title: Accountability
  text: Controls, evidence and audits show the principles are met, per requirement and per processing activity.
  nodes:
  - control
  - evidence
  - audit
  - conclusion
  - requirement
  links:
  - control-evidence
  - audit-control
  - audit-requirement
  - conclusion-requirement
  ai: Assembles the accountability pack per article and flags expired evidence.
  decides: The DPO reports to management.
registers:
- entity: asset
  title: Record of processing activities
  text: Processing activities with purpose, categories of data and data subjects, recipients, retention, systems and owner.
- entity: supplier
  title: Processor and recipient register
  text: Processors and sub-processors with agreements, locations, transfer safeguards and assessment dates.
- entity: document
  title: DPIAs, notices and assessments
  text: DPIAs, legitimate interest assessments, privacy notices and data processing agreements, linked to the activities they cover.
- entity: risk
  title: Privacy risks
  text: Risks to the rights and freedoms of data subjects per activity, on the same scale as the rest of the register.
- entity: incident
  title: Breach register
  text: Every personal data breach with assessment, notification decision, notices sent and follow-up, including those not notified.
- entity: task
  title: Data subject requests
  text: Access, erasure, rectification and objection requests with their deadline, owner and outcome.
- entity: control
  title: Technical and organisational measures
  text: Security and privacy measures (Art. 32) with owners and evidence, shared with ISO 27001.
use_cases:
- uc: gdpr-dpia
  text: The core of this angle. The record of processing and DPIAs, with risks and measures per activity.
- uc: supplier-evaluation
  text: Processors are assessed before use, with data processing agreements and transfer safeguards kept on the supplier.
- uc: incident-handling
  text: Personal data breaches follow the 72-hour notification decision, with the assessment kept even when nothing is notified.
- uc: change-management
  text: A new purpose, system or processor triggers privacy by design and a DPIA screening before go-live.
- uc: regular-reviews
  text: The record of processing, retention and processor agreements are reviewed on schedule.
- uc: roles-raci
  text: Controller, processor and DPO duties sit with roles, with the DPO's independence visible.
- uc: auditing
  text: Data protection audits per article and per processing activity, with findings tracked to closure.
- uc: new-requirements
  text: New guidance from supervisory authorities and the EDPB is mapped to existing measures.
questions:
- q: Where do we process this person's data?
  a: From the data subject category to the processing activities, to the systems and processors that hold the data. That answers access and erasure requests.
- q: Does this breach need to be notified, and by when?
  a: From the breach to the activities and data affected and the risks to people, with the 72-hour deadline and the decision recorded.
- q: Which processors receive personal data outside the EEA?
  a: From the processor to its locations and sub-processors, with the transfer safeguard on file or missing.
- q: Which high-risk activities have no DPIA?
  a: Processing activities flagged as high risk with no linked DPIA show up as gaps.
---

The GDPR asks controllers not only to comply but to be able to show it. That means a current record of processing, a legal basis per purpose, DPIAs for high-risk processing, processor agreements, a working process for data subject requests and breach notification, and security measures appropriate to the risk. In Latvia, the Personal Data Processing Law complements the GDPR and the Data State Inspectorate supervises it.

In WINGMAN, processing activities are assets, so they link to the same systems, suppliers, risks and controls as the rest of the information security programme. The DPO works from the same records as the security team, and the measures that meet ISO 27001 also show up as GDPR measures.
