---
title: One audit requirement, from claim to conclusion
weight: 20
summary: How a single requirement is traced in an internal audit, from the document that claims the control to the conclusion, the correction and the check that the fix worked.
for: [auditor, ciso, start]
use_cases: [auditing, audit-scopes]
---

**Example Co.** Internal audit against ISO/IEC 27001:2022, period 1 April to 21 September 2026, fieldwork 22 to 26 September. Two scopes: Product A and Product B. Auditor: I. Dreimane, internal auditor, not involved in either product's engineering. Grading follows the organisation's internal audit procedure: a nonconformity is major when a requirement is not met systematically or across a whole process, and minor when the failure is isolated and the process still achieves its purpose.

The requirement traced here is **Annex A 8.32 Change management** in the scope of **Product B**. The audit criteria are the control and the organisation's own change management procedure (clause 8.1 asks that processes are carried out as planned).

## The claim

| | |
|---|---|
| Document | Change management procedure, version 3, approved 2 February 2026 |
| Paragraph | 4.2: "Every production change is reviewed by a second engineer before release." |
| Mapping | Documented. Proposed by the audit skill; the auditor opened paragraph 4.2 and confirmed. |

## The interview

M. Kalns, Head of Engineering and owner of the change management process, 23 September. Transcript confirmed as accurate by the interviewee on 25 September. Quoted in the finding: "For Product B we usually review, but hotfixes go out first and get reviewed after, if someone remembers."

## Population and sample

The population was reconciled against the deployment log, not only the change records. The log export of 24 September covers the whole period and records how each deployment was made: through the release pipeline or by hand. Product B had 41 production deployments in it. 38 have change records (CHG-211 to CHG-248); 3 hotfixes were deployed with no change record at all.

Sample: 10 change records chosen at random (the seed is kept in the working papers), plus all 3 unrecorded hotfixes.

| Tested | Result |
|---|---|
| CHG-214, 219, 227, 231, 240, 245 | Second review before release |
| CHG-223, 242 | Reviewed after release |
| CHG-236 (hotfix), CHG-247 (hotfix) | No review |
| 3 unrecorded hotfixes (deployment log 14 May, 2 July, 19 August) | No change record, no review |

Random sample: 4 of 10 without the review before release. Unrecorded hotfixes: 3 of 3 without any review. Five of the seven failures were hotfixes, and the log shows all five were deployed by hand, outside the pipeline.

## Evidence cited

| Evidence | Stance |
|---|---|
| Deployment log export, 24 September, 41 entries with deployment method | Indicates a nonconformity |
| Interviews with the engineers of CHG-223 and 242, 24 September | Indicates a nonconformity |
| Change records CHG-223, 236, 242, 247 | Indicates a nonconformity |
| Interview transcript, 23 September, confirmed 25 September | Indicates a nonconformity |
| Product B: release pipeline configuration export, 24 September (no approval gate) | Indicates a nonconformity |
| Change management procedure v3, paragraph 4.2 | Context |
| Product A: deployment log export of 24 September and change records CHG-102, 109, 115, 121, 126, 133, 138, 144, 149, 151 | Supports conformity |
| Product A: release pipeline configuration export, 24 September | Supports conformity |

## Finding and conclusion

**Finding:** Major nonconformity. Production changes to Product B are released without the second review the procedure requires: 4 of 10 sampled changes, and all 3 hotfixes deployed with no change record. The failure is systematic: Product B's pipeline has no approval gate, hotfixes bypass the pipeline, and the process owner confirmed that reviewing hotfixes after release depends on memory. Drafted with its evidence by the audit skill; graded by the auditor on 2 October.

**Product A**, for comparison: population reconciled against the deployment log, 52 deployments and 52 change records. 10 sampled at random, all reviewed before release; the release pipeline enforces a second approval (configuration export, 24 September). Conformity.

**Conclusion for A.8.32:** Product A conforms; Product B major nonconformity. Each conclusion keeps its scope.

## Follow-up

- **Root cause:** Product B's release pipeline has no enforced approval gate (configuration export, 24 September). Normal changes rely on engineers asking for a review, as the two engineers who made CHG-223 and 242 confirmed in interview on 24 September; hotfixes bypass the pipeline entirely, as with CHG-236, 247 and the 3 unrecorded deployments.
- **Correction:** retrospective review of the 7 deployments not reviewed before release, and a check of the 28 untested change records against the deployment log, by 31 October. Owner M. Kalns.
- **Corrective action:** add the same enforced approval gate as Product A to Product B's pipeline, and route hotfixes through it. Owner M. Kalns, due 15 December 2026.
- **Effectiveness check:** in March 2027, re-sample Product B deployments for January and February against the deployment log. Owner I. Dreimane. Passed if every sampled deployment, and every hotfix in the log, was reviewed before release.

Management accepted the fix plan at the review on 14 October (minutes, decision 5).
