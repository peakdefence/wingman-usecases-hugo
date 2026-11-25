---
title: One audit requirement, from claim to conclusion
weight: 20
summary: How a single requirement is traced in an internal audit, from the document that claims the control to the conclusion and the corrective task.
for: [auditor]
use_cases: [auditing, audit-scopes]
---

**Example Co.** Internal ISO 27001 audit, period 1 April to 30 September 2026, two scopes: Product A and Product B. The requirement traced here is **A.8.32 Change management**, in the scope of **Product B**.

## The claim

| | |
|---|---|
| Document | Change management procedure, version 3, approved 2 February 2026 |
| Paragraph | 4.2: "Every production change is reviewed by a second engineer before release." |
| Mapping | Documented. Proposed by the audit skill; the auditor checked the paragraph and confirmed. |

## The interview

Head of Engineering, 9 October 2026. Transcript confirmed as accurate by the interviewee on 10 October. Quoted in the finding: "For Product B we usually review, but hotfixes go out first and get reviewed after, if someone remembers."

## The sample

Population: 38 production changes to Product B in the audit period, listed from the change records with their dates. The auditor drew 10. Four had no second review before release, and two of those had no review at all.

## Evidence cited

| Evidence | Stance |
|---|---|
| Change records CHG-211 to CHG-248, export of 10 October | Indicates a nonconformity |
| Interview transcript, 9 October, confirmed 10 October | Indicates a nonconformity |
| Change management procedure v3, paragraph 4.2 | Context |

## Finding and conclusion

**Finding:** Minor nonconformity. Production changes to Product B are released without the second review the procedure requires (4 of 10 sampled). Drafted with its evidence by the audit skill; graded and confirmed by the auditor on 11 October.

**Conclusion for A.8.32:** Product A compliant; Product B minor nonconformity. Each conclusion keeps its scope.

## Follow-up

Corrective task: "Enforce the second review for Product B hotfixes in the release pipeline", owner Head of Engineering, due 15 December 2026. Management accepted the fix plan on 14 October. The fix reuses the control already proven for Product A.
