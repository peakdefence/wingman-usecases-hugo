---
title: Audit document review
kb: audit-document-review
weight: 40
summary: "How to use an LLM to map policies and procedures to requirements before fieldwork, where the mapping fails, and how to check it before it reaches your audit plan."
regulations:
- ISO 19011
- ISO 27001 9.2
audience: Internal auditors, supplier auditors, compliance leads preparing an audit
uc: auditing
updated: 2026-11-25
---

Before the first interview an auditor reads the policies and procedures to learn how the organisation says it meets each requirement. An LLM can do the first pass of that mapping in minutes. It can also produce a mapping that looks complete and is wrong in ways that are hard to see. This guide explains what a document review can establish, where AI mapping fails, how to check it, and how to carry the results into the audit plan.

## How to use this guide

1. Decide the audit criteria first: the requirements in scope, by text, not only by number.
2. Anonymise one document at a time. Remove names, customer names, internal hostnames, IP ranges and anything the organisation marked confidential that the mapping does not need.
3. Paste the prompt below into a fresh chat, then the document, then the text of the selected requirements. Answer its questions one at a time.
4. Check the output with the rules in "How to check the output" before you rely on any of it.
5. Move the results into your audit plan as topics to test, not as findings.

Make sure the terms of the LLM service allow you to process the client's or supplier's documents. If they do not, use a model the organisation runs itself or do the review by hand.

## What a document review can and cannot establish

A policy describes a claimed control: what the organisation intends to do, who is responsible, how often. A document review can tell you whether a requirement is addressed in writing, how precisely, and where the documents disagree with each other. It cannot tell you whether the control operates. A backup procedure that says "restore tests are performed quarterly" is evidence that a restore test is required, not that one has ever been run.

Keep the two apart in your working papers:

| Question | Source | What it shows |
|---|---|---|
| Is the requirement addressed in writing? | Policies, procedures, standards | Claimed control |
| Is the claim specific enough to be tested? | The same documents | Whether you can design a test |
| Does the control operate as described? | Records, logs, tickets, samples, observation, interviews | Operation |
| Has it operated over the audit period? | Records across the period | Operating effectiveness |

The use of ISO 19011 terms matters when results are reported. Audit criteria are the requirements you use as the reference. Audit evidence is records, statements of fact or other information that is relevant to the criteria and verifiable. An audit finding is the result of evaluating the collected audit evidence against the audit criteria; it can show conformity, nonconformity or an opportunity for improvement. An audit conclusion is the outcome of the audit, reached after considering the audit objectives and all findings. A document mapping is neither. It is preparation: it tells you what to look for. "Not documented" in the mapping can become a finding only once you have confirmed it, for example by asking whether another document covers the requirement.

## Where AI mapping fails

These failures are common, and they are all plausible to the reader:

- **Invented paragraph numbers.** The model cites "section 4.3" when the document has no numbering, or numbers the sections itself and presents them as the document's own.
- **Reciting the standard from memory.** Given only a requirement number, the model fills in the text it remembers, which may be from another edition, another standard or a paraphrase. The mapping is then done against criteria you did not set. Always paste the requirement text.
- **Inferring from tone.** A document that sounds mature ("we take a risk-based approach to access management") is marked as meeting a requirement for periodic access reviews, although no review is described.
- **Dropping qualifiers.** "Should", "where possible", "where feasible", "as appropriate", "by exception" and "subject to management approval" disappear from the summary. A requirement that must be met becomes one that is met when convenient, and the mapping reads "documented".
- **Missing limiting passages.** An exception clause, a scope exclusion or a later paragraph that contradicts the earlier one is not connected to the requirement it weakens.
- **Merging versions.** If several versions were pasted in the same chat, the model may quote one and date it with another.

## How to check the output

Three rules catch most errors.

**Spot-check rule.** Before using the mapping, pick at least three references and find them in the source document yourself: the prompt names the three it is least certain of. Add any reference that supports a "documented" verdict on a requirement that is central to the audit. If one of them is wrong, check every reference in that mapping.

**Quote-or-nothing rule.** A verdict of "documented" or "partly documented" must rest on an exact quote that you can find with a text search. A paraphrase is not a reference. If the model cannot quote, the verdict is "not documented" until you find the passage.

**Document version.** Every row carries the document title, version and date as written in the document. If the document has no version or date, say so; that is itself a point to raise, and it means you cannot later show which text you reviewed. Keep a copy of the exact version in your working papers.

## Carrying results into the audit plan and interviews

- **Documented** requirements become tests of operation: which record, sample or observation would show the control working over the period.
- **Partly documented** requirements become interview topics: ask the owner how the qualified or missing part is handled in practice, then ask for the record.
- **Not documented** requirements become questions first ("Is this covered somewhere else?") and possible findings only after the answer.
- Contradictions between documents go on the plan as a topic of their own, with both quotes.
- Keep the mapping as a working paper with its date and the versions reviewed. When a finding is written later, it cites the evidence you collected, not the mapping.

## Prompt: document-to-requirement mapping

Paste the prompt, then the document, then the requirement text when asked. Use one document per chat so quotes and versions cannot mix.

{{< prompt id="audit-document-review-mapping" title="Document-to-requirement mapping for audit preparation" >}}
You are an assistant to an auditor preparing for audit fieldwork. You map one policy or procedure document to a set of requirements that the auditor provides. You are preparing the auditor's work, not auditing: you do not write audit findings or audit conclusions, and you do not say whether a control operates.

Reply in the language the user writes in, unless they ask for another one.

Ground rules
- Work only from the document and the requirement text I paste in this chat. Never recite a standard, law or regulation from memory, never add requirements I did not paste, and never invent legal deadlines, citations or facts.
- Every reference must be an exact quote copied from the document, with the section number or heading exactly as it appears in the document. If the document has no section numbers, use the nearest heading. Never invent or renumber sections. If you cannot quote a passage, there is no reference.
- Do not infer from tone or general wording. A requirement is addressed only by text that addresses it.
- Keep every qualifier ("should", "may", "where possible", "where feasible", "as appropriate", "by exception", "subject to approval", "aim to") inside the quote and flag it.
- Ask one question at a time and wait for the answer.
- Remind me once, at the start, to remove names, customer details and other confidential information before pasting, and not to paste documents the service's terms do not allow.

Step 1. Collect the material, one question at a time
1. Ask me to paste one anonymised document. When it arrives, state the title, version and date exactly as written in the document; if any of them is missing, say "not stated in the document". Ask me to confirm.
2. Ask me to paste the text of the requirements in scope, each with its identifier. If I give only identifiers or numbers, ask for the text and do not continue without it.
3. Ask whether there are other documents in scope that I will review separately, so you can note where a requirement may be covered elsewhere.

Step 2. Map each requirement
For each requirement, produce a block with these fields:
- Requirement: identifier and a short label taken from the text I pasted.
- Document: title, version and date as written in the document.
- Verdict: one of
  documented: the requirement is addressed fully and unconditionally, and you can quote the text;
  partly documented: there is quotable text, but it covers only part of the requirement, or it is qualified (contains a qualifier from the list above or similar), or it is limited by an exception or scope exclusion;
  not documented: there is no text you can quote that addresses the requirement.
- Quotes: each exact quote with its section number or heading. For "not documented", write "none".
- Qualifiers flagged: each qualifier found in the quotes and what it weakens.
- Limiting or contradicting passages: quotes elsewhere in the document that narrow, exclude or contradict the quoted text, with section or heading. Write "none found" if there are none.
- What is missing: for "partly documented", the part of the requirement the text does not cover.
- Evidence of operation: the records, logs, samples or observations that would show the control operates over the audit period.
- Interview question: one open question for the control owner that would show how this works in practice.

Step 3. Summarise
Give a table: requirement, verdict, number of quotes, qualifiers yes or no. List contradictions within the document. List the requirements that may be covered by another document in scope.

Step 4. Close
End with "Check these three references by hand first": the three quotes you are least certain of, or that carry the most weight for a "documented" verdict, each with section or heading and the reason to check it. Remind me that this mapping shows claimed controls only, that every quote must be found in the source before use, and that findings come from evidence collected during the audit.

Begin with Step 1, question 1.
{{< /prompt >}}

{{< wingman uc="auditing" stage="2" >}}
In WINGMAN the requirements in scope are already records linked to controls and documents, so the mapping starts from those links. The audit skill reads WINGMAN without changing it and keeps the mapping as Markdown working papers that the auditor holds.
{{< /wingman >}}

## What the prompt does not do

It does not establish that any control operates, write findings or reach an audit conclusion. It does not know the requirement text unless you paste it, and it cannot tell you whether another document covers a gap. It gives you a checked starting point for the audit plan and a record of which version of which document you read.
