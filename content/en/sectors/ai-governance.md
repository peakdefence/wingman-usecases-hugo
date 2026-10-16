---
title: AI governance – ISO 42001, EN 18286 and the EU AI Act
short: AI governance
sector: ai-governance
weight: 40
summary: Treat each AI use case as an asset with its own risks, controls and work plan, and show conformity with the EU AI Act from the same records.
audience: Organisations that develop, provide or deploy AI systems, from internal assistants to high-risk systems placed on the EU market.
standards:
- ISO/IEC 42001:2023
- EN 18286:2026
- EU AI Act (EU) 2024/1689
- ISO/IEC 23894
stages:
- title: AI use case inventory
  text: Each AI use case is an asset, linked to the models, data, systems and suppliers it uses, with a business owner.
  nodes:
  - asset
  - supplier
  - role
  links:
  - asset-asset
  - supplier-asset
  - role-asset
  ai: Drafts entries from procurement, system and survey records, and finds AI features in existing tools.
  decides: Use case owners confirm.
  media:
  - asset-list
- title: Classification and role
  text: Each use case gets an AI Act risk category and the organisation's role, provider or deployer. That decides which obligations apply.
  nodes:
  - asset
  - requirement
  - document
  links:
  - requirement-requirement
  - document-asset
  ai: Proposes category and role with the reasons written down.
  decides: The AI governance lead decides.
- title: Impact and risk assessment
  text: Risks to people, the organisation and society are assessed per use case, alongside the AI system impact assessment.
  nodes:
  - risk
  - asset
  - threat
  - document
  links:
  - risk-asset
  - threat-risk
  - document-asset
  ai: Proposes risks such as bias, drift, misuse and data leakage from the use case description.
  decides: Risk owners rate and choose a treatment.
  media:
  - task-review-start
  - ask-skill-task
  - ask-skill-task-1-help
- title: Controls and work plan
  text: ISO 42001 Annex A controls, EN 18286 quality management requirements and AI Act obligations map to controls. Missing ones become a work plan.
  nodes:
  - requirement
  - control
  - risk
  - task
  - plan
  links:
  - requirement-control
  - control-risk
  - control-task
  - task-plan
  ai: Reuses ISO 27001 and GDPR controls where they already apply and lists the rest.
  decides: Control owners commit to dates.
- title: Human oversight and monitoring
  text: Oversight duties sit with roles. Monitoring signals and serious incidents feed back into risks and the use case record.
  nodes:
  - role
  - signal
  - incident
  - risk
  links:
  - role-incident
  - signal-risk
  - signal-incident
  - incident-risk
  ai: Watches performance and complaint signals and tracks reporting deadlines for serious incidents.
  decides: The oversight role acts.
- title: Conformity and audit
  text: Technical documentation, evidence and internal audits show conformity per requirement, for certification or for the AI Act.
  nodes:
  - audit
  - requirement
  - evidence
  - conclusion
  links:
  - audit-requirement
  - audit-evidence
  - conclusion-requirement
  ai: Assembles documentation and evidence per obligation and flags what is missing.
  decides: The auditor concludes.
registers:
- entity: asset
  title: AI use case registry
  text: Every AI use case and system with purpose, owner, risk category, provider or deployer role, models, data and dependencies.
- entity: risk
  title: AI risk register
  text: Risks per use case to people, the organisation and society, rated on the same scale as the rest of the register.
- entity: document
  title: Impact assessments and technical documentation
  text: AI system impact assessments, fundamental rights impact assessments, technical documentation and instructions for use, linked to the use case.
- entity: requirement
  title: Obligations catalogue
  text: ISO 42001, EN 18286 and AI Act articles as clause-level records, mapped to each other and to ISO 27001 and GDPR.
- entity: control
  title: AI controls
  text: Data governance, transparency, human oversight, logging, accuracy and robustness controls, each with an owner and evidence.
- entity: supplier
  title: Model and AI service providers
  text: Providers of models, platforms and AI features, with contracts, usage terms and assessments.
- entity: plan
  title: AI compliance work plan
  text: The tasks to close gaps, with owners and dates, rolled up per use case and per obligation.
use_cases:
- uc: eu-ai-act
  text: The core of this angle. The AI use case registry, classification, risks and controls, and monitoring in use.
- uc: new-requirements
  text: New guidance, standards and implementing acts are mapped onto existing controls instead of starting a new programme.
- uc: gdpr-dpia
  text: Use cases that process personal data share their records with the DPIA, so the assessment is done once.
- uc: supplier-evaluation
  text: Model and AI service providers are evaluated before use, and their changes reach the risk register.
- uc: change-management
  text: A new model version or a new purpose is a change, assessed before it goes live.
- uc: auditing
  text: Internal audits against ISO 42001 or EN 18286, with conclusions per clause.
- uc: roles-raci
  text: Provider and deployer duties, human oversight and AI literacy sit with named roles.
questions:
- q: Which AI systems do we use, and which of them are high-risk?
  a: From the AI use case registry to the category and role recorded for each, with the reasons and who decided.
- q: What does the AI Act require of us for this use case, and what is still missing?
  a: From the use case to its applicable obligations, to the controls that meet them, to their evidence. Obligations with no control are the work plan.
- q: Can existing ISO 27001 controls count for ISO 42001?
  a: Requirements are mapped across standards, so a control that already meets an ISO 27001 clause shows where it also meets an ISO 42001 or EN 18286 one.
- q: Who has to act when an AI system misbehaves?
  a: From the incident to the use case, to the oversight role and the risks it realises, with the reporting deadline if it is a serious incident.
---

ISO/IEC 42001 sets up an AI management system. EN 18286, published in 2026, specifies the quality management system that providers need for EU AI Act purposes. The AI Act itself places obligations on providers and deployers according to the risk category of each AI system.

All three start in the same place: knowing which AI use cases exist, what each one does and who owns it. In WINGMAN each AI use case is an asset, so it takes the same links as everything else: risks, controls, suppliers, documents, incidents and audits. Controls already in place for ISO 27001 and GDPR are reused, and only the real gaps become work.
