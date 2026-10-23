# AI-supported audit application: design discussion, draft 0.1

Status: 1.0, agreed MVP design. Section 0 lists the decisions, section 13 the defaults taken for the remaining questions; any of them can be reopened during implementation. Decisions taken so far are in section 0; open questions are collected in section 13.

## 0. Decisions so far

| Decision | Consequence |
|---|---|
| Single auditor for now | No accounts, roles or reviewer sign-off in the MVP. One API token; MCP over stdio needs none. The data model keeps `actor` on every revision so a team mode can be added without migration. |
| The auditee does not log in | No auditee portal. Pending evidence is chased by the auditor; the app produces reminder texts and the auditor forwards them. Auditee feedback on findings is entered by the auditor as `finding_comment` of kind `auditee response`. |
| Requirement sources come from the auditor's spreadsheets, uploaded Markdown and PDF documents | No seeded standard texts shipped with the app. |
| Import is done by the LLM agent over MCP, not by server-side parsers | The app stores the source file and offers text extraction as a helper. The skill reads the file, decides the clause granularity with the auditor, and creates each requirement as an individual entity through MCP, with a pointer back into the file; it creates links the same way. The same skill path serves PDF, Excel and Markdown. Every entry is editable one by one in the UI and over MCP. See section 3.1, "Import". |
| Generic audit criteria are drafted by the skill only on request | The import skill creates clause text and hierarchy; `criteria_md` on library requirements is filled when the auditor asks, per clause or per source. |
| Link types are an editable table | `link_type` rows seeded with sub_requirement, equivalent, more_detailed_than, similar, interprets, supersedes; each with label, inverse label, `directional` flag and whether `score` applies. Editable in the UI; mapping tools validate against it. |
| Server-side AI in the MVP is embeddings only, local or cloud at the operator's choice; all other reasoning runs in the MCP client's model | The app calls one configured embedding model through LiteLLM (e.g. a local Ollama model or a cloud embedding API). No other server-side LLM calls exist in the MVP; the client-driven path is the only reasoning path. Phase 2 server-driven jobs stay optional. |
| Audit type is a label | Internal, external and supplier audits share one workflow; the type appears in the report and can later gate behaviour if needed. |
| Parent status is never derived from sub-requirements | The matrix shows children's grades under the parent for information; the parent's assessment is always the auditor's own. |
| Grading scheme is fixed once the first assessment is confirmed | Before that it can be changed freely; after, the app refuses the change. |
| Freezing | The audit is frozen when the report is approved. Reopening requires a reason, is logged, and any later report is a new version; the frozen report version is kept. |
| History granularity and LLM content | Every field change is a JSON patch revision with a periodic full snapshot. For LLM calls only metadata is stored (model, purpose, run id, token counts), never prompt or response content. |
| "Not verifiable" is a valid final verdict | A follow-up item may end as `not verifiable`, and an assessment may end as "no reasonable assurance" (or the scheme's equivalent), with the report stating clearly that conformity or nonconformity could not be established. The app never forces a conversion into a finding. |
| Sources and requirements are kept long term, independent of any audit | The requirement library (sources, requirements, links between requirements) is a top-level, cross-organisation store. See section 3.1. |
| Mappings between requirements are created in the app through the LLM over MCP, not imported | Imports carry no mapping columns. The MCP surface has the full link lifecycle (propose in batch, confirm, reject, edit, retire, list with provenance), each mapping run is recorded as a `mapping_run`, and the UI offers CRUD on links with when, how and by what each link was created. See section 3.1, "Mapping workflow". |
| A new audit starts from scratch or as a clone of a previous audit | Cloning copies the scope (requirement instances with their customisations, dimensions, applicability, audit-local links) and nothing from fieldwork or results (no events, evidence, assessments, findings). See section 3.2, "Starting from a previous audit". |
| Audits belong to an audit programme; a follow-up audit checks the previous report's findings | When the auditor marks a new audit as part of the same programme as previous audits, their confirmed findings and follow-up tasks are brought in as `finding_follow_up` items to be verified (fixed, partially fixed, not fixed, not verifiable). See section 3.6, "Follow-up of previous findings". |
| Cloning may offer the previous plan as a draft | Optional at clone time: events copied without dates, coverage kept, agendas kept as drafts, status `planned`. Default off. |
| Follow-up covers nonconformities by default; the auditor can add observations and opportunities for improvement, all or selected | At audit creation (and later), the follow-up selection is: all nonconformities (default, cannot be deselected without a reason), plus all observations, all OFIs, or individually picked items. |
| A repeat finding carries a marker and links to the previous finding | `finding.repeat_of_follow_up_id` and `is_repeat`; the report shows the marker and references the previous finding and audit. |
| Library links among cloned requirements are copied into the audit at clone time and are editable there | `audit_requirement_link` rows with provenance `inherited`, then owned by the audit. |
| Mapping tools work on the library and on an audit's instances, with a `scope` parameter | Changes to library links never propagate to existing audits; an audit's links stay as at clone time unless the auditor edits them or explicitly pulls a refresh. |
| Requirements used in an audit are cloned into the audit as instances, keeping a link to the original | `audit_requirement` is a full copy of the library requirement (ref, title, text, criteria) at clone time, with `origin_requirement_id` and the origin revision. The instance is freely customised for that audit; the library is untouched. The app shows the diff from the origin and can offer, never apply, a refresh from the library. See section 3.2. |
| Applicability per dimension can be "not applicable" | `applicability` is recorded per requirement × dimension with a mandatory justification for `not_applicable`; no assessment row is created for that pair, and the report lists the exclusions Statement of Applicability style. See section 3.2. |
| The status-to-grade derivation table lives separately from the grading scheme and is used by the skill, not enforced by the app | A `derivation_rule_set` entity (documentation status × operation status → proposed grade of a given scheme) is stored and versioned in the app and read by the skill through MCP when it proposes a grade. The app records which rule set version a proposal used but never applies the table itself; the confirmed grade is always the auditor's. See section 3.6. |
| One default rule set per grading scheme | `grading_scheme.default_rule_set_id`; no per-audit override in the MVP. The entity stays separate so an override can be added later without a model change. |


## 1. What the app is, and what it is not

The app is the **system of record for one or more audits**: organisations, requirement sources, audits, their scopes, plans, meetings, evidence, findings and conclusions, with a full change history. It is hosted locally (single `docker compose up`) and is driven mostly through MCP by an LLM client. It replaces the folder of Markdown working files that the current `wingman-audit` skill uses as its audit record, while keeping that format as its import/export format.

The app does **not** do the auditing. Reasoning (scoping proposals, document review, agendas, transcript analysis, draft findings) is done by skills running in an LLM client (Claude Desktop, Claude Code, or a local agent runner behind LiteLLM). The app stores what the skills produce, tells them where the audit stands, and enforces the few rules that must not depend on a prompt: identifiers, status workflows, confirmation gates, and history.

Three sources shape the design:

- the WINGMAN data model in `data/graph.yaml` (audit, requirement, document, asset, evidence, finding, conclusion, task, plan, role, person, risk);
- the `auditing` and `audit-scopes` use cases (`content/en/use-cases/`), in particular "one audit, several scopes, one conclusion per requirement and scope";
- the `wingman-audit` skill conventions: one block per requirement, `E-`/`M-`/`P-`/`F-` identifiers, documentation and operation status as separate axes, an append-only log, "stated is not operated", "proposals then confirmation".

## 2. Design principles

1. **Proposal and confirmation are different records.** Every AI-generated object (requirement extracted from a policy, draft finding, proposed grade, proposed agenda) is stored with status `proposed` and the model that produced it. It becomes authoritative only when a human confirms it. This is the same suggestion/accept pattern WINGMAN uses and the only defensible position for an audit opinion.
2. **Provenance on everything.** Each record and each revision carries who or what wrote it: auditor, auditee, reviewer, or `ai` with model id, skill name and the tool call that produced it.
3. **Append-only history.** Nothing is overwritten. Every change is a revision; deletions are tombstones. Closed audits are frozen.
4. **Stable, human-readable identifiers inside an audit** (`R-012`, `M02`, `E-004`, `P-003`, `F-002`, `C-012.B`), so that transcripts, notes and the report can refer to them in plain text, plus UUIDs for machines.
5. **Portable record.** A whole audit exports to the skill's workspace format (Markdown plus an `evidence/` folder) and imports from it. The auditor is never locked in, and the existing skill keeps working during the transition.
6. **Small operational footprint.** One database, one API process, one object store, optional LiteLLM. A graph database is not required (section 5).

## 3. Domain model

Names follow WINGMAN where the concept is the same, so a later integration (import requirements and controls from a WINGMAN tenant, push findings and tasks back) is a mapping, not a translation.

Two scopes of data exist in the app: the **requirement library** (sources, requirements, links; shared across all organisations and audits, kept indefinitely) and **engagement data** (organisation, its documents, its internal requirements, its audits). Internal requirement sources belong to an organisation but live in the same tables as external sources, so cross-source links work uniformly.

### 3.1 Organisation and reference data

| Entity | Purpose | Key fields |
|---|---|---|
| `organisation` | The auditee. One per client, many audits over time. | name; `profile_md` (description, services, technology and supplier stack in Markdown); structured `units` (teams, services, sites) that audits can pick as dimensions; attachments |
| `person` | People at the auditee and on the audit team. | name, unit, role titles, contact; `kind`: auditor, auditee, reviewer |
| `requirement_source` | A standard, law, contract, or the auditee's own policy set. | title, publisher, version (e.g. ISO/IEC 27001:2022), language, `kind`: external or internal; `organisation_id` when internal; licence note (see Q11) |
| `requirement` | One clause. | `source_id`, `ref` (identifier in the source, e.g. A.5.15), title, `text_md` (verbatim), `criteria_md` (generic audit criteria), `location` in the source file (page and paragraph, sheet and row, or heading path), `extra` key-values, `import_run_id`, `origin_document_id` when extracted from an auditee document, status `proposed`, `confirmed` or `retired` |
| `import_run` | One LLM import session from a source file, for traceability. | started by and when, source, file, model id, counts, summary, closed at |
| `requirement_link` | Typed edge between requirements, within or across sources. | from, to, `type`: sub_requirement, equivalent, more_detailed_than, similar, interprets; `score` 0..1 where meaningful; `rationale_md`; `basis`: manual or ai; `mapping_run_id`; status: proposed, confirmed, rejected, retired; decided by and when |
| `link_type` | Controlled vocabulary of link types, editable. | code, label, inverse label (`v` and `p` as in WINGMAN), `directional`, `uses_score`, description, active |
| `mapping_run` | One LLM mapping session between sources, for traceability. | started by and when, sources or requirement set, link types, method, model id, counts, summary, closed at |

Internal requirements extracted from policies are ordinary `requirement` rows in an internal `requirement_source` owned by the organisation, linked to the external clause with `more_detailed_than` or `interprets`. That keeps one list, one block per requirement, and lets the scope selector treat them like any other requirement.

#### The requirement library

Sources, requirements and the links between them form a **library that outlives any audit**. This has four consequences for the model.

1. **Audits clone, then own.** Putting a requirement in scope copies it into an `audit_requirement` instance (section 3.2) together with the library revision it was copied from. The audit works only on its instances; a later correction in the library never changes an audit, and an audit's customisations never leak into the library unless the auditor promotes them explicitly (`promote_to_library`, which creates a new library revision with provenance "from audit X").
2. **Source files are kept.** Every source keeps its original files (spreadsheet, Markdown, PDF) in the object store, plus the extracted text, and every requirement carries a `location` pointing back into the file (sheet and row, heading path, or page and paragraph). The auditor can always open the clause in its original.
3. **Links are library data with their own provenance.** A `requirement_link` records how it came to be: `manual` (auditor, in the UI or by an explicit MCP call), `ai` (proposed by a model or by vector similarity in a mapping run, with score, rationale, model id and the run id). Import of mapping sheets is not an MVP path. AI links stay `proposed` until confirmed, and a confirmed link is never overwritten by a later run; a new proposal for an existing pair is a new revision of the same link, with the old status kept in history.
4. **Sources have versions.** A new edition (ISO 27001:2013 to 2022) is a new `requirement_source` with a `supersedes` link to the old one, and requirement-level `requirement_link` rows of type `equivalent` or `more_detailed_than` between the editions, proposed by AI and confirmed by the auditor. Old audits keep pointing at the old edition. Nothing in the library is ever deleted; a source or requirement can be `retired` with a date.

#### Import

The app does not parse requirement files into requirements. It gives the skill the material and the tools, and records what the skill did.

What the app provides:

- `create_requirement_source` with title, publisher, version, language, kind, `granularity` (chosen with the auditor; see below) and licence note.
- `upload_source_file(source_id, file)`: keeps the original (PDF, XLSX, CSV, Markdown, DOCX) in the object store.
- `get_source_file_text(file_id, range)`: extracted text for the skill to read, in slices: PDF by page range (pymupdf, with OCR fallback and a readability warning), spreadsheets by sheet and row range as a Markdown table, Markdown and DOCX as text with heading offsets. This is a convenience; an MCP client that can read the file itself may skip it.
- `create_requirement` and the batch form `create_requirements([...])`: `source_id`, `ref`, `title`, `text_md`, optional `criteria_md`, `location` (page and paragraph, or sheet and row, or heading path), `parent_ref` for sub-clauses, `import_run_id`. Each row is an independent entity with its own revisions.
- `update_requirement`, `retire_requirement`, `get_requirement`, `get_requirement_history`, `search_requirements`, `list_requirements(source, filter)`.
- `start_import_run(source_id, file_id)` and `close_import_run`: like a mapping run, this records who ran the import, when, from which file, with which model, how many requirements were created, and the skill's summary (granularity used, clauses skipped and why). Requirements created without a run are allowed and show as `manual`.

What the skill does (one skill, whatever the file type): reads the file in slices, agrees the clause granularity with the auditor (one requirement per numbered clause, or per "shall" sentence; recorded on the source), proposes the list of refs and titles for a quick sanity check, creates the requirements in batches with locations, creates `sub_requirement` links for the hierarchy, and reports what it could not read. For a spreadsheet it decides itself which columns are ref, title, text and criteria and keeps the rest as `extra` key-values on the requirement. Nothing in this path is specific to the file type except how the text is sliced.

Why this split: the skill can handle layouts nobody anticipated (two-column PDFs, spreadsheets with merged header rows, Markdown with inconsistent headings) without a release of the app, and the record of what was created from which file by which model is the same as for mappings.

#### Mapping workflow

Mapping is done by the auditor in an LLM session against the app's MCP, in three steps, with the app keeping the record.

1. **Start a run.** `start_mapping_run(source_a, source_b | scope, link_types, method)` creates a `mapping_run`: who started it, when, the pair of sources (or a list of requirements), the link types wanted, the method (`model`, `similarity`, `both`), and the model id the client reports. Optional: `candidates(run_id)` returns, per requirement in A, the top-k requirements in B by vector similarity with scores, so the skill reads a short list instead of the whole source.
2. **Propose in batch.** The skill reads both sides and calls `propose_links(run_id, [{from, to, type, score, rationale_md}])`. Each proposal becomes a `requirement_link` with status `proposed`, provenance `ai`, run id, model, score and rationale. Proposing a pair that already has a confirmed link is recorded as a `note` on that link, not as a new link; proposing a pair that has a rejected link reopens it as `proposed` with a new revision.
3. **Decide.** The auditor reviews in the UI or by MCP: `confirm_link`, `reject_link` (with reason), `update_link` (type, score, rationale), `retire_link` (soft delete, with reason), `create_link` (manual, immediately confirmed). Each decision is a revision with actor and time. `close_mapping_run` records counts (proposed, confirmed, rejected, pending) and a summary.

Rules:

- Links are directional where the type is (`sub_requirement`, `more_detailed_than`, `interprets`) and symmetric where it is not (`equivalent`, `similar`); the app stores one row per pair and renders the inverse reading, as WINGMAN does with `v` and `p`.
- A link always has a `type` from the `link_type` table; `score` is accepted only where the type has `uses_score`. New types are added in the UI, not in code.
- A `rationale_md` is required for AI proposals (why these two clauses match) and optional for manual links. It is what the auditor reads when deciding.
- Everything is visible: list views show status, type, score, created by (person or model), run, created at, decided by, decided at, and a history tab per link.

MCP, in addition to the lifecycle calls above: `list_links(filter by source, requirement, type, status, run, actor)`, `get_link_history`, `list_mapping_runs`, `get_mapping_run`, `unmapped_requirements(source_a, source_b)` (clauses in A with no confirmed link into B), `mapping_matrix(source_a, source_b)` (a compact table for the report or for the skill).

Scope. Every mapping call takes `scope = library` (default) or `scope = audit:<id>`. In audit scope the same tools create and manage `audit_requirement_link` rows between the audit's instances, with the same statuses and provenance. Library links and audit links are independent after clone time: changing, confirming or retiring a link in the library does not touch any audit, and `diff_from_origin` lists link differences next to text differences so the auditor can pull a library change in deliberately, if ever.

UI: a mapping page per pair of sources (or, in audit scope, for the audit's instances) showing A's requirements on the left, their proposed and confirmed links to B on the right with scores and rationale, bulk confirm and reject, an "unmapped" filter, and a runs list with their statistics. Every link opens to a detail with its full history.

### 3.2 Audit configuration

| Entity | Purpose | Key fields |
|---|---|---|
| `grading_scheme` | The conformity criteria set used by an audit. | name; ordered `grades` with code, label, severity rank, colour, and whether it counts as nonconformity. Seeded: ISO 19011 set (conformity, minor NC, major NC, observation, OFI), the skill's set (compliant, RfI, minor, major, no reasonable assurance), a CMMI-style 0..5 maturity scale; custom schemes allowed |
| `derivation_rule_set` | How documentation and operation status map to a proposed grade. Separate from the scheme; several rule sets can target one scheme. | `grading_scheme_id`, name, version, `rules` (documentation status × operation status → grade, with an optional condition text such as "Major if the gap defeats the requirement's purpose"), `notes_md`. Seeded with the table from the skill's `conventions.md`. Read by skills via MCP; never applied by the app |
| `audit_programme` | A series of audits of one organisation against the same objective (e.g. the ISMS internal audit programme), as in WINGMAN's plan → audit edge. | `organisation_id`, title, objective_md, cadence, status |
| `audit` | One engagement. | `organisation_id`, `programme_id` nullable, `cloned_from_audit_id` nullable, `follows_up_audit_ids` (previous audits in the programme whose findings are to be verified), title, type (internal, external, supplier), period, dates, working language, `risk_profile_md`, `grading_scheme_id`, `scope_mode`: single or multi; status: planning, fieldwork, reporting, closed, frozen |
| `dimension` | A scope within a multi-scope audit (a product, team, service or site). | `audit_id`, name, optional link to an `organisation.unit` or a WINGMAN asset id |
| `audit_requirement` | An audit-local **instance** of a requirement: a clone of the library row at the moment it was put in scope, customised for this audit. | `audit_id`, display id `R-nnn`, `origin_requirement_id` and `origin_revision` (null for requirements created inside the audit), `ref`, `title`, `text_md`, `criteria_md`, `notes_md`, process, roles, `in_scope` with removal date and reason instead of deletion |
| `applicability` | Whether a requirement applies in a dimension. One row per `audit_requirement` × `dimension` (one row per requirement in single-scope audits). | `status`: applicable, not_applicable; `justification_md` (mandatory for not_applicable); decided by and when; status proposed or confirmed |

Dimensions in WINGMAN terms are the `audit-asset` edge; in the app they are a first-class list so applicability per requirement can be recorded before any asset register exists.

Instance rules:

- Cloning copies ref, title, verbatim text and generic criteria. Everything on the instance is editable; the library row is not touched. The usual customisation is `criteria_md` (how this clause is to be judged for this customer) and `notes_md`; editing `text_md` is allowed but the UI marks the instance as "text differs from source" so a report can quote the original where required.
- The instance keeps `origin_revision`. The UI and a `diff_from_origin` tool show what was changed locally and what changed in the library since cloning. A `refresh_from_origin` tool proposes a merge; the auditor accepts field by field. Nothing is refreshed automatically.
- Requirements can also be created directly in the audit with no origin (an ad hoc customer requirement, or an internal requirement extracted from a policy during this audit). They live only in that audit until the auditor promotes them to the library, which creates a library requirement (in an internal source of the organisation, or any chosen source) and sets the instance's origin to it.
- Links between instances inside an audit (`audit_requirement_link`) are the audit's own. At clone time the library links among the cloned requirements are copied as instance links with provenance `inherited`, so the audit has a complete, editable picture without depending on later library changes. Links to library requirements that are not in scope are not copied but can be looked up through the origin.
- The report quotes the instance. Where the instance text differs from the origin, the report can show both, with the library source and revision cited.
- Removing an instance from scope keeps it with `in_scope = false`, date and reason, as before.

#### Starting from a previous audit

When creating an audit the auditor chooses **from scratch** (scope built from the library) or **clone a previous audit** of the same organisation. Cloning copies, as new rows with provenance `cloned from audit X`:

- requirement instances with their customised text, criteria, notes, process and roles; `origin_requirement_id` and `origin_revision` are carried over unchanged, so the new audit still knows which library revision it ultimately descends from, and `diff_from_origin` keeps working;
- dimensions, and applicability per requirement × dimension with its justifications;
- audit-local links between instances;
- the grading scheme and scope mode;
- optionally the previous plan as a starting draft (decided): events copied with status `planned` and no dates, participants kept, coverage rows re-pointed to the cloned instances, agendas kept as drafts marked "from audit X"; the plan Markdown is copied as version 1 with status `draft`. Default off, offered as a checkbox at clone time.

Not cloned: event records, evidence, pending evidence, assessments, findings, comments, follow-up tasks, the report. Instances removed from scope in the previous audit are offered in a separate list, not cloned by default.

If the previous audit is in the same programme, cloning also sets `follows_up_audit_ids`, which triggers the follow-up mechanism in section 3.6. The two choices are independent: an audit can follow up a previous one with a scope built from scratch, or clone a scope without following up.

Applicability rules:

- Default is `applicable` everywhere; the auditor (or a skill, as a proposal) sets `not_applicable` with a justification.
- A `not_applicable` pair gets no `assessment`, is excluded from the coverage check, and is listed in the report under exclusions with its justification, in the style of a Statement of Applicability.
- Changing applicability after an assessment exists is allowed but creates a revision and, if an assessment is already confirmed, requires a reason; the assessment is kept with status `superseded`, not deleted.

### 3.3 Organisation knowledge and risk

| Entity | Purpose | Key fields |
|---|---|---|
| `document` | A file or text the auditee provided, or the auditor collected. | `organisation_id`, optional `audit_id`, title, kind (policy, procedure, register, org chart, minutes, other), version and approval date if known, file ref, extracted text, readability warnings |
| `document_chunk` | Text chunks with embeddings for retrieval and similarity. | `document_id`, position, text, embedding |
| `claimed_control` | How the organisation says it meets a requirement, from document review. | `audit_requirement_id`, `document_id`, paragraph refs, summary, `documentation_status`: not, partially, documented; status proposed or confirmed |
| `risk_item` | A line in the organisational audit risk profile. | `audit_id`, title, description, likelihood and impact if available, source (auditee register, auditor, ai), linked `audit_requirement`s and `dimension`s |

`audit.risk_profile_md` stays the narrative. `risk_item` rows make the profile usable by the planner (which requirements and dimensions to go deep on) and traceable in the report.

### 3.4 Planning

| Entity | Purpose | Key fields |
|---|---|---|
| `audit_plan` | The plan as a versioned Markdown document. | `audit_id`, version, `plan_md`, status: draft, agreed, superseded; agreed by and when |
| `audit_event` | A meeting, walkthrough, site visit, system demo or document review session. | `audit_id`, display id `Mnn`, title, kind, scheduled start and duration, location, participants (persons), `agenda_md`, status: planned, held, cancelled |
| `event_coverage` | What an event is meant to verify. | `event_id`, `audit_requirement_id`, `dimension_id` nullable, priority, questions, "what would prove operation", evidence to request |

One requirement appears in many `event_coverage` rows (several events, several dimensions). The plan document is regenerated from events plus narrative, so iterations of the plan are versions and the schedule stays structured.

### 3.5 Fieldwork

| Entity | Purpose | Key fields |
|---|---|---|
| `event_record` | Raw material from an event. | `event_id`, kind: transcript, auditor notes, auditee statement, recording; text or file ref; consent flag for recordings |
| `evidence` | An artefact or a described observation. | `audit_id`, display id `E-nnn`, title, `description_md` (what it shows and why it is applicable), file refs (zero or many), received from, received at, `event_id` if collected in an event, `valid_until` (WINGMAN: evidence expires), approval by auditee |
| `evidence_link` | Evidence to what it supports. | `evidence_id`, target: `audit_requirement` (with `dimension_id` nullable), `claimed_control`, or `finding`; `direction`: supports compliance, supports noncompliance, neutral; proposed or confirmed |
| `pending_evidence` | A promise to provide something later. | `audit_id`, display id `P-nnn`, what, requirements and dimensions, promised by (person), promised at (event), due, status: open, received, overdue, closed_as_finding; `received_as` evidence id |
| `sampling` | Sampling decision per requirement and dimension. | population, exportable in full, method, size, picks, result evidence ids |

A statement in a meeting is an interview reference, not evidence (skill rule). The app models that as an `event_record` excerpt cited from an `assessment` or `finding`, not as an `evidence` row, unless the auditor decides to promote it.

### 3.6 Results

Two layers, because they answer different questions:

| Entity | Purpose | Key fields |
|---|---|---|
| `assessment` | The status of one requirement in one dimension (or the whole audit when `dimension_id` is null). Exactly one per `audit_requirement` × dimension whose applicability is `applicable`. | `documentation_status`, `operation_status` (not verified, not operating, operating with gaps, operating effectively), `proposed_grade` with `derivation_rule_set_id` and version used, `confirmed_grade` (from the audit's grading scheme), `basis_md` with evidence and event references, confirmed by and when |
| `finding` | A narrated observation: gap, consequence, recommendation. Zero or many per assessment; one finding may concern several requirements or dimensions (a systemic gap). | `audit_id`, display id `F-nnn`, `grade` (from the scheme), `requirement_md`, `gap_md`, `consequence_md`, `recommendation_md`, `is_repeat`, `repeat_of_follow_up_id`, `status` (workflow below), targets via `finding_link` to `audit_requirement` × `dimension`, evidence via `evidence_link` |
| `finding_comment` | Discussion and auditee feedback. | `finding_id`, author (person or ai), `text_md`, kind: auditor note, auditee response, reviewer comment, decision |
| `follow_up_task` | Corrective action agreed on a finding. | `finding_id`, description, owner, due, status; exportable to WINGMAN tasks |
| `finding_follow_up` | Verification, in this audit, of a finding from a previous audit in the same programme. | `audit_id`, `previous_finding_id`, display id `FU-nnn`, the previous finding's grade and text (read-only copy), its follow-up tasks and their last status, `verdict`: fixed, partially fixed, not fixed, not verifiable, `basis_md` with evidence and event refs, `resulting_finding_id` nullable, confirmed by and when |

Finding status workflow, enforced by the app: `draft` → `proposed` (complete: requirement, evidence, gap, consequence all present) → `with_auditee` (feedback invited) → `confirmed` (becomes the conclusion for its targets; sets `assessment.confirmed_grade`) or `withdrawn`. A confirmed finding is what WINGMAN calls a conclusion. The app refuses `proposed` while any of the four parts is missing, which is the skill's finding discipline made structural.

#### Follow-up of previous findings

When an audit lists `follows_up_audit_ids`, the app creates `finding_follow_up` items from the confirmed findings of those audits according to the audit's **follow-up selection**: every grade the scheme marks as nonconformity is included by default and can only be excluded item by item with a reason; observations and opportunities for improvement are included either all of a kind or individually picked (`follow_up_selection`: `{nonconformities: all, observations: all | none | [ids], improvements: all | none | [ids], excluded: [{id, reason}]}`). The selection can be changed while the audit is in planning; items dropped later are kept with status `excluded` and the reason. Each item carries a read-only copy of the previous finding, its grade, its evidence references and its follow-up tasks with their last known status. The previous report itself (the `document` of kind `report`) is attached to the new audit as reading material.

What happens with them:

- **Planning.** Each follow-up item is a coverage target like a requirement: the coverage check reports follow-ups with no event, and agendas get a "previous findings to verify" block with the original gap and the corrective action promised. The skill is expected to plan them early, since an unfixed major from last year is usually the most important thing to establish.
- **Fieldwork.** Evidence links can target a `finding_follow_up`. Pending evidence can be promised against it.
- **Verdict.** The auditor confirms a verdict per item. `not fixed` or `partially fixed` normally produces a new finding in this audit (`resulting_finding_id`), typically with raised severity because it is a repeat; the skill proposes it, the auditor decides. `fixed` closes the item with the evidence that shows it. `not verifiable` is kept visible in the report as such.
- **Repeat marker (decided).** A finding created from a follow-up item has `is_repeat = true` and `repeat_of_follow_up_id`, which resolves to the previous finding, its audit and its report. The matrix, the finding page and the report show a repeat marker with "repeats F-007 of audit 2025" and a link; `list_findings` can filter on it. The chain is followed across several audits, so a finding repeated three years running shows its full lineage.
- **Instances.** A follow-up item is matched to this audit's requirement instances through the previous finding's targets and their `origin_requirement_id`, so it lands on the right row of the matrix even when the scope was rebuilt from the library. If no instance matches (the requirement is out of scope this time), the item is still verified but flagged "requirement not in scope".
- **Report.** A dedicated section lists previous findings and their verdicts, which most audit standards expect from a follow-up audit.

Single-scope audits are the special case `scope_mode = single`: one implicit dimension, one assessment per requirement, and the UI hides the dimension column.

### 3.7 History and provenance

| Entity | Purpose | Key fields |
|---|---|---|
| `revision` | Every write to every entity. | entity type and id, version number, `actor` (person id or `ai`), `model` and `skill` when ai, `tool_call_id`, timestamp, `change` as JSON patch plus a full snapshot every n revisions, `reason` |
| `audit_log` | The human-readable append-only log (skill file `60-audit-log.md`). | audit id, timestamp, subject display id, old → new, basis, stage. Derived from revisions for status fields and written explicitly for decisions |

### 3.8 Mapping to the WINGMAN graph

| WINGMAN | App |
|---|---|
| audit | `audit` |
| audit → asset (scoped to) | `dimension` |
| audit → requirement (tests) | `audit_requirement` (audit-local instance with `origin_requirement_id` to the library) |
| requirement → requirement (maps to) | `requirement_link` with type |
| requirement → document (interpreted in), control → document | `claimed_control`, internal `requirement` with `origin_document_id` |
| audit → document (reads) | `document` |
| plan → audit (schedules) | `audit_programme` (the programme), `audit_plan`, `audit_event` (the engagement plan) |
| audit → evidence, evidence → finding | `evidence`, `evidence_link` |
| audit → finding (raises) | `finding` |
| finding → conclusion (becomes), conclusion → requirement (judges) | `finding.status = confirmed`, `assessment.confirmed_grade` per requirement and dimension |
| finding → task (resolved by) | `follow_up_task`; `pending_evidence` is also a task in WINGMAN terms |
| person → role | `person` with role titles; roles are not a separate entity in the MVP (see Q4) |
| risk | `risk_item`, `audit.risk_profile_md` |

## 4. Process flow and where the AI acts

| Stage | Auditor does | AI skill does (via MCP) | App enforces |
|---|---|---|---|
| 0 Organisation | creates organisation, uploads org material | drafts `profile_md` from uploads and public sources, proposes units | provenance, revisions |
| 1 Audit set-up | creates audit, picks grading scheme, scope mode, dimensions | proposes dimensions from org units; proposes requirement selection from sources and risk profile | one `audit_requirement` per selected requirement, display ids |
| 2 Documents | uploads policies, registers | extracts text; proposes internal requirements linked to external clauses; proposes claimed controls with paragraph refs; builds risk items from a risk register | nothing becomes `confirmed` without a human; unreadable documents flagged |
| 3 Risk profile | reviews or dictates | drafts and iterates `risk_profile_md`, pulls recent external events about the organisation | versions |
| 4 Plan | agrees schedule, people | proposes events, coverage, agendas, sampling; runs coverage check (every in-scope requirement × dimension has an event or a documented reason) | plan versions; coverage gap report is a query, not a prompt |
| 5 Fieldwork | leads events, records notes, uploads files | live support: next questions, "listen for", logs promised evidence; turns transcripts and files into proposed evidence and links | `E-`, `P-` ids; approval flags; consent on recordings |
| 6 Assessment | confirms statuses | proposes documentation and operation status, proposed grade, draft findings with the four parts | one assessment per requirement × dimension; finding completeness gate |
| 7 Review | discusses with auditee, decides | summarises feedback, proposes status changes | workflow transitions, comments, who decided |
| 8 Report | approves | generates the report from the record via MCP resources, in the skill's template | export of the frozen record |

## 5. Storage: is a graph database needed?

Recommendation: **PostgreSQL with pgvector, not a graph database**, for the MVP and probably for good.

Reasons:

- The graph is small (a few thousand requirements, hundreds of links per audit) and the queries are shallow: one or two hops (requirement → links → requirements; evidence → requirement; finding → evidence). Recursive CTEs over a `link` table handle this comfortably.
- Version history and provenance (section 3.7) are much simpler in a relational store. Versioned graphs are a research topic; versioned rows are a trigger.
- Similarity between requirements is a vector problem, not a graph problem. pgvector gives cosine similarity over `requirement.text_md` and `document_chunk` embeddings in the same database, and the result is stored as a `requirement_link` of type `similar` with a score.
- One container fewer. Backups are `pg_dump`.

Keep the door open: all typed relations go through one `link` table (`from_type, from_id, to_type, to_id, type, score, metadata, provenance`), mirroring WINGMAN's edge list. If richer traversals are ever needed, Apache AGE adds openCypher inside the same PostgreSQL, or the `link` table is exported to Neo4j for analysis.

Files (uploads, evidence, exports) go to an S3-compatible store (MinIO container) or a plain volume behind the same interface. Full-text search via PostgreSQL `tsvector`.

For a single auditor on a laptop, SQLite plus `sqlite-vec` would also work. It would mean two storage back ends to test, so the proposal is PostgreSQL only.

## 6. Architecture

```
docker compose
  api        FastAPI (Python): REST + MCP server (streamable HTTP, and stdio for local clients)
             background jobs: text extraction, OCR, chunking, embeddings, transcript processing
  db         PostgreSQL 16 + pgvector
  files      MinIO (or a volume)
  litellm    LiteLLM proxy with its config.yaml; in the MVP used only for the embedding model (local Ollama or a cloud API)
  ollama     optional: local embedding model (and, later, local chat models for the agent runner)
  ui         optional: minimal web UI (server-rendered HTMX or a small SPA), read and edit per entity
```

Python because the MCP SDK, LiteLLM, document parsing (pymupdf, python-docx, unstructured) and embedding libraries are all native there.

### 6.1 Two ways an LLM touches the app

1. **Client-driven (interactive).** An MCP client (Claude Desktop, Claude Code, or a local agent runner) calls the app's MCP tools. The skills live in the client. The model is whatever the client uses. The app does not call any LLM here.
2. **Server-driven (background).** In the MVP this is **embeddings only** (decided): the app embeds requirement texts and document chunks through LiteLLM with one configured model, local (e.g. Ollama) or cloud, at the operator's choice. Changing the embedding model re-embeds the library in a background job and is recorded, since similarity candidates depend on it. Any further server-side jobs (internal requirement extraction, transcript to evidence) are phase 2 and optional; the design keeps the per-job model setting for them.

Both paths write through the same service layer, so revisions and provenance are identical whether a human in Claude Desktop or a background job made the change. A consequence of the decision above: the app works with no LLM credentials at all except for the embedding model, and even that can be a local container.

### 6.2 Running the same skills on cloud or local models

- With Claude: connect Claude Desktop or Claude Code to the app's MCP endpoint; skills are installed in the client as today.
- With LiteLLM: LiteLLM exposes an Anthropic-compatible `/v1/messages` endpoint as well as OpenAI-compatible ones. Claude Code and the Claude Agent SDK can be pointed at it with `ANTHROPIC_BASE_URL`, which lets the existing skills run against OpenAI or local models with no changes to the skills. For a fully local stack, a small agent runner container (Claude Agent SDK or an OpenAI-tools loop) with the skills mounted as files, talking to LiteLLM and to the app's MCP endpoint. Tool-calling quality of local models varies a lot; this needs a test matrix before promising it.

Skills themselves are plain Markdown and should live in a `skills/` folder of the app repository, versioned with the tool surface they depend on.

## 7. MCP surface (first cut)

Tools are grouped by stage. Names are indicative.

- Organisation: `list_organisations`, `get_organisation`, `upsert_organisation`, `upload_organisation_attachment`
- Requirements: `list_requirement_sources`, `create_requirement_source`, `upload_source_file`, `get_source_file_text`, `start_import_run`, `close_import_run`, `create_requirement`, `create_requirements`, `update_requirement`, `retire_requirement`, `confirm_requirement`, `list_requirements`, `search_requirements` (text and vector), `get_requirement`, `get_requirement_history`, `find_similar_requirements`; mapping lifecycle: `start_mapping_run`, `candidates`, `propose_links`, `confirm_link`, `reject_link`, `update_link`, `retire_link`, `create_link`, `close_mapping_run`, `list_links`, `get_link_history`, `list_mapping_runs`, `unmapped_requirements`, `mapping_matrix`
- Audit: `create_audit` (from scratch or `clone_from_audit` with `include_plan`, and `follows_up_audits` with `follow_up_selection`), `set_follow_up_selection`, `list_audit_programmes`, `upsert_audit_programme`, `list_finding_follow_ups`, `set_follow_up_verdict`, `get_audit_status` (the "where are we" call every skill makes first), `set_scope_mode`, `upsert_dimensions`, `add_requirements_to_scope` (clones from the library), `create_audit_requirement` (no origin), `update_audit_requirement`, `diff_from_origin`, `refresh_from_origin` (proposal), `promote_to_library`, `link_audit_requirements`, `remove_from_scope` (with reason), `set_applicability` (with justification), `applicability_report` (exclusions per dimension), `set_criteria_override`, `list_grading_schemes`, `get_derivation_rules` (for the audit's scheme), `set_risk_profile`
- Documents: `upload_document`, `get_document_text`, `search_documents`, `propose_claimed_control`, `confirm_claimed_control`, `propose_risk_items`
- Planning: `propose_plan_version`, `agree_plan`, `upsert_event`, `set_event_coverage`, `coverage_report` (requirements × dimensions with no coverage), `upsert_sampling`
- Fieldwork: `add_event_record` (notes, transcript, file), `register_evidence`, `link_evidence`, `approve_evidence`, `register_pending_evidence`, `update_pending_evidence`, `pending_evidence_reminders`
- Results: `propose_assessment`, `confirm_assessment`, `propose_finding`, `transition_finding`, `comment_on_finding`, `create_follow_up_task`
- History: `get_history` (entity), `get_audit_log`, `diff_revisions`
- Export: `export_workspace` (skill format), `import_workspace`, `report_data` (everything the report template needs, in one structured payload)

Resources (read-only, URI-addressable, so a skill can `@`-reference them): `audit://{id}/requirements.md` (the `10-requirements.md` view), `audit://{id}/plan.md`, `audit://{id}/events/{Mnn}/agenda.md`, `audit://{id}/findings.md`, `audit://{id}/follow-ups.md`, `audit://{id}/log.md`, `audit://{id}/report-data.json`.

Prompts: one per stage, mirroring the skill's stage references, so a client without the skill installed still gets the method.

Rule for every write tool: it takes an optional `provenance` block (skill, model, reason). When called from an AI client without it, the server records `actor = ai, model = unknown` and the UI shows it as unverified.

## 8. Minimal UI

Server-rendered pages, one per entity type, with list, detail, edit, history tab, and Markdown rendering. Three views justify slightly more work:

- the requirement matrix: requirements × dimensions with documentation status, operation status, grade, evidence count, open pending items, and coverage;
- the plan calendar: events on a timeline with coverage counts;
- the finding review page: finding, its evidence, comments, status transitions, with auditee feedback entered by the auditor;
- the library page: sources with their files and import runs; requirements as individual editable records with text, criteria, original location (opens the file at the page or row), links, and history;
- the mapping page per pair of sources (section 3.1, "Mapping workflow"): proposed and confirmed links with score, rationale, origin run and history, bulk confirm and reject, unmapped filter.

No auditee-facing pages (decision in section 0). Should that change, the pending-evidence page is the first candidate and brings accounts with it.

## 9. Report generation and portability

The report is generated by a skill from `report_data` (or the `report-data.json` resource) using the skill's `assets/report-template.md`. The app stores the generated report as a `document` of kind `report` linked to the audit, with its own versions. Freezing an audit snapshots `report_data` so later edits cannot change what was reported.

`export_workspace` produces exactly the folder layout in the skill's `conventions.md` (`00-engagement.md` … `90-report.md`, `meetings/`, `evidence/`). `import_workspace` reads one back. This makes the current skill and the new app interoperable from day one and gives a plain-text archive format for long-term retention.

## 10. Security and privacy

- Audit records contain personal data (names in transcripts, HR samples) and confidential policies. Default deployment binds to localhost or a private network; TLS termination is the operator's job.
- Authentication: single auditor with an API token (decided); MCP over stdio needs none. Multi-user would need accounts and roles; the revision model already records the actor, so it is additive.
- Recordings and transcripts carry a consent flag; the skill's "transcribes locally" promise should hold: transcription via a local Whisper container or the client, never a third-party transcription service by default.
- Encryption at rest is left to the volume; secrets (LLM keys) live in LiteLLM's config, not in the app database.
- Every outbound LLM call is logged (model, purpose, token counts, no content) so the auditor can state in the report which models touched the record.

## 11. Phasing

**MVP (one auditor, no auditee access)**
requirement library with source file storage, text extraction helper, import runs and requirement CRUD over MCP (the skill creates the entries); mapping workflow over MCP with mapping runs, link lifecycle, vector similarity candidates and the mapping UI; organisation; audits with scope mode and dimensions, documents with text extraction, plan versions and events with coverage, event records, evidence with links, pending evidence, assessments and findings with workflow, revisions, MCP tools and resources above, workspace export and import, minimal UI. Server-side AI is embeddings only, local or cloud; all reasoning in the client's model.

**Phase 2**
server-driven jobs via LiteLLM (internal requirement extraction, claimed controls, transcript to evidence), grading schemes beyond the seeded ones, report freezing, library analytics (which clauses are most often nonconforming across audits).

**Phase 3**
WINGMAN integration (import requirements, controls, documents, people from a tenant; push findings and tasks), multi-audit views per organisation (year on year per requirement, follow-up of last year's findings), local agent runner for fully offline operation, and, if ever wanted, team mode and an auditee page.

## 12. Things in the original list that this design changes

- "One finding per requirement" becomes **one assessment per requirement × dimension, zero or many findings**, because a systemic gap spans requirements and a requirement can carry both a nonconformity and an opportunity for improvement. The assessment keeps the one-row-per-requirement property for the matrix and the report.
- Internal requirements are not a separate entity; they are requirements in an internal source of the organisation (library) or audit-local instances without an origin until promoted, linked to the external clause.
- Requirements in scope are **clones**, not references (decided). The cost is that a library correction has to be pulled into each audit deliberately; the benefit is that an audit is self-contained, customisable and stable, and that a frozen audit never depends on the library.
- The audit plan is both a Markdown document and a set of structured events, so iterations are versions and coverage can be checked by a query.
- Graph database replaced by a relational `link` table plus vector similarity.

## 13. Questions, decisions and defaults

**Scope and users**

1. ~~Single auditor or audit team?~~ Decided: single auditor.
2. ~~Does the auditee log in?~~ Decided: no.
3. ~~Audit type changes workflow?~~ Decided: label only.
4. Roles: default taken, persons with role titles; a `role` entity is phase 3 with the WINGMAN integration.

**Requirements**

5. ~~Where do sources come from?~~ Decided: the auditor's spreadsheets, Markdown and PDF uploads, kept long term in a shared library.
6. Source editions: default taken, a new source with `supersedes` plus requirement-level links.
7. ~~Criteria levels?~~ Resolved by cloning: generic criteria on the library requirement, customised criteria on the audit instance. A per-organisation level would be a "clone from last audit of this organisation" shortcut rather than a third storage level. Wanted?
7a. ~~New audit from library or from previous audit?~~ Decided: either, chosen at creation; cloning copies scope only, never evidence or findings; previous findings are followed up when the audit is in the same programme.
7b. ~~Copy library links at clone time?~~ Decided: yes, copied and editable in the audit.
7c. ~~Offer the previous plan as a draft?~~ Decided: yes, optional, default off.
7d. ~~Follow-up scope?~~ Decided: nonconformities by default, observations and OFIs all or selected at the auditor's choice. `not verifiable` may stand as a final verdict, stated clearly in the report.
7e. ~~Repeat marker?~~ Decided: marker and links to the previous finding; escalation stays with the skill and the auditor.
8. ~~Link types fixed or editable?~~ Decided: editable `link_type` table, seeded.
8a. ~~Mapping tools on audit instances too?~~ Decided: both, via a `scope` parameter; library changes never propagate to audits.
9. Confirming internal requirements: default taken, the auditor alone (the auditee does not log in); the auditee's agreement, if sought, is recorded as a note.
10. ~~Derive parent status from children?~~ Decided: never; shown for information only.
11. ~~Ship seeded standard texts?~~ Decided by the source decision: no seeded texts, the auditor imports what they hold. The library is private to the instance.
11a. ~~Clause granularity?~~ Resolved by the import decision: the skill agrees it with the auditor per source and records it on the source; default numbered clause.
11b. ~~Draft generic criteria at import?~~ Decided: only on request.
11c. ~~Mapping columns in spreadsheets?~~ Decided: no; mapping is done through the LLM over MCP with full CRUD and provenance in the UI. A mapping-sheet reader is dropped from the MVP.
11d. Embeddings on import: default taken, computed automatically; links only inside a run.

**Scopes and dimensions**

12. Dimensions: default taken, free-form named dimensions with an optional `kind` (unit, service, site, supplier, period), so nothing is excluded.
13. ~~Not applicable per dimension?~~ Decided: yes, with mandatory justification, reported as exclusions.
14. Finding default in multi-scope audits: default taken, the UI proposes one finding per dimension and offers "all dimensions" as a one-click alternative.

**Planning and fieldwork**

15. Non-meeting events: default taken, yes, same coverage mechanics.
16. Sampling: default taken, first-class `sampling` rows, rendered into the agenda.
17. Transcripts: default taken, pasted text or uploaded files in the MVP; live streaming is phase 3 with the local agent runner.
18. Evidence approval: default taken, an optional `approved_by_auditee` flag on every item, required by the skill only for transcript-derived evidence, as today.
19. Evidence validity: default taken, `valid_until` kept as an optional field for the WINGMAN export; not used by the audit workflow.

**Results**

20. ~~Grading scheme change?~~ Decided: fixed once the first assessment is confirmed.
21. ~~Where does the derivation table live?~~ Decided: as its own versioned entity in the app, read and applied by the skill, never by the app.
21a. ~~Rule set per audit?~~ Decided: one default rule set per scheme for now.
22. Auditee feedback: default taken, recorded as comments of kind `auditee response`, including a proposed grade if they make one; only the auditor changes the finding.
23. ~~Freezing?~~ Decided: frozen at report approval; reopening with a reason; later reports are new versions.

**History and AI**

24. ~~History granularity?~~ Decided: every field change as a JSON patch, periodic snapshots.
25. ~~Store LLM content?~~ Decided: metadata only.
26. ~~Which jobs must run fully local?~~ Decided: server-side AI is embeddings only, local or cloud at the operator's choice; everything else runs in the client's model.
27. Consistency checks: default taken, a `gaps` tool and UI panel with the rules listed, in the spirit of WINGMAN's gap list.

**Operations**

28. ~~Single instance or shared?~~ Follows from single auditor: one instance, several organisations and audits, one shared library.
29. Backup: default taken, the workspace export is the archive format per audit; database backups are the operator's `pg_dump`, documented in the deployment guide, not scheduled by the app.
30. UI language: default taken, English only in the MVP, strings externalised so Latvian can follow.
