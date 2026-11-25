---
title: One audit requirement, from claim to conclusion
weight: 20
summary: How a single requirement is traced in an internal audit, from the document that claims the control to the conclusion, the correction and the check that the fix worked.
for: [auditor, start]
use_cases: [auditing, audit-scopes]
---

**Example Co.** Internal audit against ISO/IEC 27001:2022, period 1 April to 30 September 2026, fieldwork 22 to 26 September. Two scopes: Product A and Product B. Auditor: I. Kalniņa, internal auditor, not involved in either product's engineering.

The requirement traced here is **Annex A 8.32 Change management** in the scope of **Product B**. The audit criteria are the control and the organisation's own change management procedure (clause 8.1 asks that processes are carried out as planned).

## The claim

| | |
|---|---|
| Document | Change management procedure, version 3, approved 2 February 2026 |
| Paragraph | 4.2: "Every production change is reviewed by a second engineer before release." |
| Mapping | Documented. Proposed by the audit skill; the auditor opened paragraph 4.2 and confirmed. |

## The interview

M. Kalns, Head of Engineering, 23 September. Transcript confirmed as accurate by the interviewee on 25 September. Quoted in the finding: "For Product B we usually review, but hotfixes go out first and get reviewed after, if someone remembers."

## Population and sample

The population was reconciled against the deployment log, not only the change records. Product B had 41 production deployments in the period. 38 have change records (CHG-211 to CHG-248); 3 hotfixes were deployed with no change record at all.

Sample: 10 change records chosen at random (the seed is kept in the working papers), plus all 3 unrecorded hotfixes.

| Tested | Result |
|---|---|
| CHG-214, 219, 227, 231, 240, 245 | Second review before release |
| CHG-223, 242 | Reviewed after release |
| CHG-236, 247 | No review |
| 3 unrecorded hotfixes (deployment log 14 May, 2 July, 19 August) | No change record, no review |

7 of 13 tested deployments did not have the review the procedure requires. Five of the seven were hotfixes.

## Evidence cited

| Evidence | Stance |
|---|---|
| Deployment log export, 24 September, 41 entries | Indicates a nonconformity |
| Change records CHG-223, 236, 242, 247 | Indicates a nonconformity |
| Interview transcript, 23 September, confirmed 25 September | Indicates a nonconformity |
| Change management procedure v3, paragraph 4.2 | Context |

## Finding and conclusion

**Finding:** Major nonconformity. Production changes to Product B are released without the second review the procedure requires: 7 of 13 tested deployments, including hotfixes with no change record. The failure is systematic: the hotfix path bypasses the release pipeline, and the process owner confirmed review depends on memory. Drafted with its evidence by the audit skill; graded by the auditor on 2 October.

**Product A**, for comparison: 10 of 52 changes sampled, all reviewed before release; the release pipeline enforces a second approval (configuration export, 24 September). Conformity.

**Conclusion for A.8.32:** Product A conforms; Product B major nonconformity. Each conclusion keeps its scope.

## Follow-up

- **Root cause:** hotfixes are deployed outside the release pipeline, so its approval gate never applies to them.
- **Correction:** retrospective review of the 7 unreviewed deployments by 31 October. Owner M. Kalns.
- **Corrective action:** route hotfixes through the same pipeline gate as Product A. Owner M. Kalns, due 15 December 2026.
- **Effectiveness check:** re-sample Product B deployments for January and February 2027 against the deployment log, in March 2027.

Management accepted the fix plan at the review on 14 October.
