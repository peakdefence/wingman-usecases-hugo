---
title: GDPR and DPIA
uc: gdpr-dpia
group: compliance
weight: 130
summary: Keep processing chains and their risks current, and support data protection impact assessments.
standards:
- GDPR Art. 30
- GDPR Art. 35
stages:
- title: Processing register
  text: Each processing activity is an asset, linked to the systems, data and suppliers it uses.
  nodes:
  - asset
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: Drafts the processing chain from system and supplier records.
  decides: The DPO confirms.
- title: Risks to individuals
  text: Risks on the chain, including supplier and transfer risks.
  nodes:
  - risk
  - asset
  - supplier
  - threat
  links:
  - risk-asset
  - risk-supplier
  - threat-risk
  ai: Proposes risks from the processing purpose and the data types.
  decides: The DPO assesses.
- title: Measures
  text: Controls that protect the data, and the GDPR articles they meet.
  nodes:
  - control
  - risk
  - asset
  - requirement
  links:
  - control-risk
  - control-asset
  - requirement-control
  ai: Reuses existing controls.
  decides: Control owners confirm.
- title: DPIA record
  text: The assessment is a document linked to the activity it covers, with the DPO consulted.
  nodes:
  - document
  - asset
  - role
  links:
  - document-asset
  - role-document
  ai: Drafts the DPIA from the linked records.
  decides: The controller signs off.
- title: Review on change
  text: The DPIA is reviewed on its cycle and whenever a signal or a change touches the chain.
  nodes:
  - plan
  - document
  - signal
  - risk
  links:
  - plan-document
  - signal-risk
  ai: Flags changes to the chain.
  decides: The DPO.
---
