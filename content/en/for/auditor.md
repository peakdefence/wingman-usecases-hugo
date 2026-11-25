---
title: I audit, and every statement must trace to its evidence
short: What an auditor sees
summary: For internal and supplier auditors who work in WINGMAN, and for certification auditors who meet it on an auditee's screen. This page says what the records show, what the AI does, and what it does not do.
weight: 50
slug_id: auditor
problems:
- q: I start every engagement blind, with a folder of PDFs.
  a: Before fieldwork the documents are read against the requirements in scope. Each requirement is marked documented, partly documented or not documented, with paragraph references. Unreadable documents are flagged.
- q: AI cites the wrong paragraph with confidence.
  a: Each mapping carries its paragraph reference, and each document its version, so you can open the document and check. The mapping is a proposal, and the auditor reviews it. Checking references stays the auditor's work.
- q: Evidence promised in an interview never arrives.
  a: Promised evidence is tracked with a due date, so what is still missing on report day is a list, not a memory.
- q: The summary lost the qualifier that mattered.
  a: Interviews are transcribed, and the transcript is kept as evidence once the interviewee confirms it is accurate. A finding can cite it, so the original words are there when a summary is disputed.
- q: I see fluent policies that nobody runs.
  a: 'A document shows the claimed control. Evidence shows whether it operates: it records what was collected, when and by whom, and until when it is valid. Evidence past its validity date is flagged; whether evidence from the audit period is sufficient stays the auditor''s call.'
- q: Who decided this, and on what basis?
  a: AI changes arrive as suggestions with their reasons. A named person accepts or rejects each one, and nothing is written until then. For findings and conclusions that person is the auditor. A finding cites the evidence it rests on. Each change is kept in the record's history with who made it and when; the time is set by the system, and the history cannot be edited or deleted.
- q: One requirement, three products, three different answers.
  a: 'An audit can have several scopes. Each control protects its own product, evidence is collected per scope, and each conclusion keeps its scope: compliant for one product, a nonconformity for another.'
terms:
- t: Claimed control
  d: What the organisation's documents say it does. Whether it is done is a separate question, answered by evidence.
- t: Evidence
  d: 'Proof that a control actually ran: a record, a screenshot, a log export. It has a date and it expires.'
- t: Finding
  d: 'In ISO 19011, the result of evaluating audit evidence against a requirement: conformity or nonconformity. In WINGMAN a finding is recorded when it is raised, and the auditor confirms or changes it.'
- t: Conclusion
  d: In WINGMAN, the confirmed result for one requirement in one scope. ISO 19011 uses “audit conclusion” for the outcome of the audit as a whole, drawn from all the findings.
- t: Skill
  d: A procedure your AI assistant follows step by step on your WINGMAN records, such as a risk interview or an audit. It runs in the assistant you already use, for example Claude.
does:
  knowledge: Requirement, claimed control, document, evidence, finding and conclusion are separate linked records. A statement in the report can be followed back to what it rests on wherever that link was made, and a finding must cite its evidence. A read-only auditor role can be configured, so you see the records and their history without being able to change them.
  projects: The audit skill works through scope, claimed controls, plan and interviews, evidence, findings and conclusions. The requirement list comes from WINGMAN or from your own checklist workbook. An assistant's connection can be restricted to one client's project.
  regular: The audit programme sits in the yearly plan. Corrective actions are tasks with owners and dates, and last year's finding can be followed to its task, its evidence and the conclusion.
  events: Incidents and changes in the audit period are records with dates, available for sampling like any other.
prompt:
  title: Test an AI document review before you rely on it
  lede: Paste one anonymised policy and the text of a few requirements. It maps them with quotes and paragraph numbers, so you can see where an AI review goes wrong before you rely on one.
  text: |-
    You are assisting a lead auditor who follows ISO 19011. The auditor wants to see how far an AI document review can be trusted. Answer in the language I write in.

    I will paste one policy or procedure with names removed, and then the text of a short list of requirements (for example five ISO 27001 Annex A controls). Use only the requirement text I paste, not your memory of the standard.

    For each requirement, give me a table row with:
    - The document version or date, as it appears in the document.
    - Verdict: documented, partly documented or not documented.
    - The exact words of the document that support the verdict, quoted, with the section or paragraph number as it appears in the document.
    - What the document claims is done, in one sentence.
    - What evidence would show it is actually done, and the question I should ask in the interview.

    Rules:
    - Quote only text that is in the document. If you cannot quote it, the verdict is "not documented".
    - Never infer a control from the general tone of the document.
    - Mark any qualifier ("should", "where possible", "planned") and say how it weakens the claim.
    - "Partly documented" means you can quote support, but it is incomplete or qualified.
    - If the document has no section numbers, give the heading; never invent a number.
    - Quote any passage that limits or contradicts the claim, including scope exclusions.
    - Do not judge whether the control operates; a document cannot show that.

    End with the three references I should check by hand first, and why.
media:
- risk-accept-2-accepted
- ctl-detail
- doc-list
yours_title: What WINGMAN does not do
yours_lede: Stated plainly, because these judgements belong to the auditor and to the people audited, not to software.
yours:
- It does not decide what counts as evidence. The auditee confirms that a transcript or a screenshot records what was said or shown; whether it is sufficient is the auditor's judgement.
- It does not choose the sample. A sample it proposes per scope is only a suggestion; the auditor draws the sample and can ignore the proposal.
- It does not conclude. It drafts findings and proposes a severity; the auditor confirms or changes each one.
- It does not show that a control operates. A link between records shows that someone claimed it; only evidence shows it ran.
- It does not settle consent. Recording or transcribing an interview needs the agreement of the people in it.
ask:
- How AI-drafted text is marked after a person accepts it
- Export of audit working papers
- Where data is hosted and which AI model processes documents
use_cases:
- auditing
- audit-scopes
- supplier-evaluation
sectors:
- iso27001-soc2
next:
  title: Follow one requirement from claim to conclusion
  text: 'We can walk through an audit on the fictional company: one requirement, its claimed control, the evidence, the finding and the conclusion.'
  ask: A walk-through of one requirement from claimed control to conclusion, on a fictional company
---
