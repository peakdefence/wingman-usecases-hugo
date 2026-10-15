---
title: Cyber Resilience Act
short: CRA
sector: cra
weight: 50
summary: Design CRA compliance into how products are built and supported, from risk assessment and SBOM to vulnerability handling and reporting.
audience: Manufacturers, importers and distributors of products with digital elements placed on the EU market, including software vendors.
standards:
- CRA (EU) 2024/2847
- CRA Annex I essential requirements
- ISO/IEC 27001
- IEC 62443-4-1
stages:
- title: Products in scope
  text: Each product with digital elements is an asset, with its versions, components and support period. Its CRA class decides the conformity route.
  nodes:
  - asset
  - requirement
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: Proposes the product class with reasons and lists third-party components from the SBOM.
  decides: The product owner confirms.
- title: Product risk assessment
  text: Cybersecurity risks are assessed per product and kept up to date across its support period. The assessment is part of the technical documentation.
  nodes:
  - risk
  - asset
  - threat
  - document
  links:
  - risk-asset
  - threat-risk
  - document-asset
  ai: Proposes risks from the product's architecture, components and threat picture.
  decides: Product security confirms.
- title: Essential requirements as controls
  text: Each Annex I requirement maps to controls in the development lifecycle, many already in place for ISO 27001 or IEC 62443.
  nodes:
  - requirement
  - control
  - document
  - task
  links:
  - requirement-control
  - requirement-requirement
  - control-document
  - control-task
  ai: Maps requirements to existing controls and drafts tasks for the gaps.
  decides: Engineering leads commit.
- title: Vulnerability handling
  text: Vulnerabilities in the product and its components are tracked with severity, fix and security update, for as long as the product is supported.
  nodes:
  - signal
  - vulnerability
  - asset
  - task
  links:
  - signal-vulnerability
  - vulnerability-asset
  - vulnerability-task
  ai: Matches advisories against the SBOM and proposes severity.
  decides: Product security decides on fixes and disclosure.
- title: Reporting
  text: Actively exploited vulnerabilities and severe incidents carry their 24 h, 72 h and final report deadlines, with the notices sent.
  nodes:
  - vulnerability
  - incident
  - document
  - role
  links:
  - incident-document
  - role-incident
  ai: Tracks deadlines and drafts the notifications and user information.
  decides: The responsible role decides what is reported.
- title: Conformity
  text: Technical documentation, evidence and the conformity assessment show each requirement is met, before the EU declaration of conformity is signed.
  nodes:
  - audit
  - requirement
  - evidence
  - conclusion
  links:
  - audit-requirement
  - audit-evidence
  - conclusion-requirement
  ai: Assembles the technical file per requirement and flags gaps.
  decides: Management signs the declaration.
registers:
- entity: asset
  title: Product and component register
  text: Products with digital elements, versions, support periods, CRA class and the components each version contains.
- entity: supplier
  title: Component suppliers
  text: Open-source projects and commercial suppliers of components, with their due diligence and support status.
- entity: risk
  title: Product risk assessments
  text: Cybersecurity risks per product, kept current through the support period.
- entity: vulnerability
  title: Vulnerability register
  text: Vulnerabilities per product and component, with severity, fix, security update and disclosure.
- entity: incident
  title: Reportable events
  text: Actively exploited vulnerabilities and severe incidents with deadlines, notices and follow-up.
- entity: requirement
  title: Essential requirements
  text: Annex I requirements on product security and vulnerability handling, mapped to development controls.
- entity: document
  title: Technical documentation
  text: Risk assessment, SBOM, design and test records, user information and the declaration of conformity per product.
use_cases:
- uc: vulnerability-impact
  text: Advisories are matched against product components, so the affected products and versions are known within hours.
- uc: incident-handling
  text: Actively exploited vulnerabilities and severe incidents follow the reporting deadlines, with notices kept on the record.
- uc: change-management
  text: Each release is assessed for security impact, and the record becomes part of the technical documentation.
- uc: supplier-evaluation
  text: Due diligence on third-party and open-source components before they enter the product.
- uc: new-requirements
  text: Harmonised standards and guidance under the CRA are mapped onto controls already in place.
- uc: risk-identification
  text: Product teams identify risks for each product, which the CRA requires to be documented and updated.
- uc: auditing
  text: Internal checks against the essential requirements before conformity assessment.
questions:
- q: Which of our products and versions contain this vulnerable component?
  a: From the advisory to the vulnerability, to the components and the products and versions that carry them.
- q: Is this vulnerability reportable, and by when?
  a: The vulnerability record shows whether it is actively exploited, the deadlines that apply and what has been sent.
- q: Which essential requirements does this product not yet meet?
  a: From the product to the Annex I requirements, to the controls that meet them and their evidence. What has no control is the work plan.
- q: Which products are still in their support period?
  a: Each product record carries its support period, so security update duties are visible per version.
---

The Cyber Resilience Act sets cybersecurity requirements for products with digital elements throughout their life: secure design and development, a risk assessment, an SBOM, vulnerability handling and security updates for the support period, and conformity assessment before the product carries the CE marking. Reporting of actively exploited vulnerabilities and severe incidents applies from September 2026; the remaining obligations follow in December 2027.

Like NIS2, the CRA is easier to meet as a system than as a project. In WINGMAN, products and their components are assets, the essential requirements are mapped to development controls, and vulnerabilities, incidents and documentation are linked to the product they concern.
