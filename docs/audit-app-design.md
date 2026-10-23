# AI-supported audit application: design discussion, draft 0.1

Status: discussion draft 0.3. Decisions taken so far are in section 0; open questions are collected in section 13.

## 0. Decisions so far

| Decision | Consequence |
|---|---|
| Single auditor for now | No accounts, roles or reviewer sign-off in the MVP. One API token; MCP over stdio needs none. The data model keeps `actor` on every revision so a team mode can be added without migration. |
| The auditee does not log in | No auditee portal. Pending evidence is chased by the auditor; the app produces reminder texts and the auditor forwards them. Auditee feedback on findings is entered by the auditor as `finding_comment` of kind `auditee response`. |
| Requirement sources come from the auditor's spreadsheets, uploaded Markdown and PDF documents | Import formats for the MVP: XLSX/CSV with column mapping, Markdown with a heading convention, PDF via extraction with AI-proposed clause splitting that the auditor confirms. No seeded standard texts shipped with the app. |
| Sources and requirements are kept long term, independent of any audit | The requirement library (sources, requirements, links between requirements) is a top-level, cross-organisation store. See section 3.1. |
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
| `requirement` | One clause. | `source_id`, `ref` (identifier in the source, e.g. A.5.15), title, `text_md` (verbatim), `criteria_md` (generic audit criteria), `origin_document_id` and paragraph ref when extracted from an auditee document, status `proposed` or `confirmed` |
| `requirement_link` | Typed edge between requirements, within or across sources. | from, to, `type`: sub_requirement, equivalent, more_detailed_than, similar, interprets; `score` 0..1 for similarity; `basis`: manual, imported mapping, ai; status |

Internal requirements extracted from policies are ordinary `requirement` rows in an internal `requirement_source` owned by the organisation, linked to the external clause with `more_detailed_than` or `interprets`. That keeps one list, one block per requirement, and lets the scope selector treat them like any other requirement.

#### The requirement library

Sources, requirements and the links between them form a **library that outlives any audit**. This has four consequences for the model.

1. **Audits clone, then own.** Putting a requirement in scope copies it into an `audit_requirement` instance (section 3.2) together with the library revision it was copied from. The audit works only on its instances; a later correction in the library never changes an audit, and an audit's customisations never leak into the library unless the auditor promotes them explicitly (`promote_to_library`, which creates a new library revision with provenance "from audit X").
2. **Source files are kept.** Every import keeps the original file (`source_file` on `requirement_source`: the spreadsheet, the Markdown, the PDF) in the object store, plus the extracted text and a per-requirement pointer back into it (sheet and row, heading path, or PDF page and paragraph). The auditor can always open the clause in its original.
3. **Links are library data with their own provenance.** A `requirement_link` records how it came to be: `manual` (auditor), `imported` (a mapping sheet, e.g. a NIS2 to ISO 27001 crosswalk, with the mapping document kept as a source of kind `mapping`), or `ai` (proposed from vector similarity or a model's reading, with the score and the model id). AI links stay `proposed` until confirmed, and a confirmed link is never overwritten by a later AI run; a new proposal with a different score is a new revision of the link.
4. **Sources have versions.** A new edition (ISO 27001:2013 to 2022) is a new `requirement_source` with a `supersedes` link to the old one, and requirement-level `requirement_link` rows of type `equivalent` or `more_detailed_than` between the editions, proposed by AI and confirmed by the auditor. Old audits keep pointing at the old edition. Nothing in the library is ever deleted; a source or requirement can be `retired` with a date.

Import pipeline, one tool with three readers:

| Input | Reader | What the auditor confirms |
|---|---|---|
| XLSX or CSV | column mapping (ref, title, text, extra columns kept as key-value) with a saved mapping profile per spreadsheet layout | the mapping once per layout, then only anomalies (empty refs, duplicates) |
| Markdown | heading convention: `## <ref> <title>` followed by body; or a front-matter table | the parsed list, shown side by side with the text |
| PDF | text extraction (pymupdf), OCR fallback, then an AI pass that proposes clause boundaries, refs and titles with page refs | every proposed clause; nothing enters the library from a PDF unconfirmed |

Where to draw the clause boundary (one requirement per numbered clause, or per "shall" sentence) is the auditor's choice per source and is recorded on the source (`granularity`), because mappings between sources only make sense at comparable granularity. Sub-clauses are `requirement` rows linked to their parent with `sub_requirement`.

### 3.2 Audit configuration

| Entity | Purpose | Key fields |
|---|---|---|
| `grading_scheme` | The conformity criteria set used by an audit. | name; ordered `grades` with code, label, severity rank, colour, and whether it counts as nonconformity. Seeded: ISO 19011 set (conformity, minor NC, major NC, observation, OFI), the skill's set (compliant, RfI, minor, major, no reasonable assurance), a CMMI-style 0..5 maturity scale; custom schemes allowed |
| `derivation_rule_set` | How documentation and operation status map to a proposed grade. Separate from the scheme; several rule sets can target one scheme. | `grading_scheme_id`, name, version, `rules` (documentation status × operation status → grade, with an optional condition text such as "Major if the gap defeats the requirement's purpose"), `notes_md`. Seeded with the table from the skill's `conventions.md`. Read by skills via MCP; never applied by the app |
| `audit` | One engagement. | `organisation_id`, title, type (internal, external, supplier), period, dates, working language, `risk_profile_md`, `grading_scheme_id`, `scope_mode`: single or multi; status: planning, fieldwork, reporting, closed, frozen |
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
| `finding` | A narrated observation: gap, consequence, recommendation. Zero or many per assessment; one finding may concern several requirements or dimensions (a systemic gap). | `audit_id`, display id `F-nnn`, `grade` (from the scheme), `requirement_md`, `gap_md`, `consequence_md`, `recommendation_md`, `status` (workflow below), targets via `finding_link` to `audit_requirement` × `dimension`, evidence via `evidence_link` |
| `finding_comment` | Discussion and auditee feedback. | `finding_id`, author (person or ai), `text_md`, kind: auditor note, auditee response, reviewer comment, decision |
| `follow_up_task` | Corrective action agreed on a finding. | `finding_id`, description, owner, due, status; exportable to WINGMAN tasks |

Finding status workflow, enforced by the app: `draft` → `proposed` (complete: requirement, evidence, gap, consequence all present) → `with_auditee` (feedback invited) → `confirmed` (becomes the conclusion for its targets; sets `assessment.confirmed_grade`) or `withdrawn`. A confirmed finding is what WINGMAN calls a conclusion. The app refuses `proposed` while any of the four parts is missing, which is the skill's finding discipline made structural.

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
| plan → audit (schedules) | `audit_plan`, `audit_event` |
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
  litellm    optional: LiteLLM proxy with its config.yaml (providers, model aliases, routing)
  ui         optional: minimal web UI (server-rendered HTMX or a small SPA), read and edit per entity
```

Python because the MCP SDK, LiteLLM, document parsing (pymupdf, python-docx, unstructured) and embedding libraries are all native there.

### 6.1 Two ways an LLM touches the app

1. **Client-driven (interactive).** An MCP client (Claude Desktop, Claude Code, or a local agent runner) calls the app's MCP tools. The skills live in the client. The model is whatever the client uses. The app does not call any LLM here.
2. **Server-driven (background).** The app itself calls an LLM for jobs that should not depend on a chat session: extracting text and internal requirement candidates from an uploaded policy, embedding chunks, turning a transcript into proposed evidence, nightly similarity linking. These calls go through LiteLLM, with a per-job model setting (`jobs.extract_requirements.model = anthropic/claude-...`, `jobs.embed.model = ollama/nomic-embed-text`, and so on), falling back to an instance default.

Both paths write through the same service layer, so revisions and provenance are identical whether a human in Claude Desktop or a background job made the change.

### 6.2 Running the same skills on cloud or local models

- With Claude: connect Claude Desktop or Claude Code to the app's MCP endpoint; skills are installed in the client as today.
- With LiteLLM: LiteLLM exposes an Anthropic-compatible `/v1/messages` endpoint as well as OpenAI-compatible ones. Claude Code and the Claude Agent SDK can be pointed at it with `ANTHROPIC_BASE_URL`, which lets the existing skills run against OpenAI or local models with no changes to the skills. For a fully local stack, a small agent runner container (Claude Agent SDK or an OpenAI-tools loop) with the skills mounted as files, talking to LiteLLM and to the app's MCP endpoint. Tool-calling quality of local models varies a lot; this needs a test matrix before promising it.

Skills themselves are plain Markdown and should live in a `skills/` folder of the app repository, versioned with the tool surface they depend on.

## 7. MCP surface (first cut)

Tools are grouped by stage. Names are indicative.

- Organisation: `list_organisations`, `get_organisation`, `upsert_organisation`, `upload_organisation_attachment`
- Requirements: `list_requirement_sources`, `import_requirement_source` (CSV, XLSX, Markdown, JSON), `search_requirements` (text and vector), `get_requirement`, `propose_requirement` (AI-extracted, status proposed), `confirm_requirement`, `link_requirements`, `find_similar_requirements`
- Audit: `create_audit`, `get_audit_status` (the "where are we" call every skill makes first), `set_scope_mode`, `upsert_dimensions`, `add_requirements_to_scope` (clones from the library), `create_audit_requirement` (no origin), `update_audit_requirement`, `diff_from_origin`, `refresh_from_origin` (proposal), `promote_to_library`, `link_audit_requirements`, `remove_from_scope` (with reason), `set_applicability` (with justification), `applicability_report` (exclusions per dimension), `set_criteria_override`, `list_grading_schemes`, `get_derivation_rules` (for the audit's scheme), `set_risk_profile`
- Documents: `upload_document`, `get_document_text`, `search_documents`, `propose_claimed_control`, `confirm_claimed_control`, `propose_risk_items`
- Planning: `propose_plan_version`, `agree_plan`, `upsert_event`, `set_event_coverage`, `coverage_report` (requirements × dimensions with no coverage), `upsert_sampling`
- Fieldwork: `add_event_record` (notes, transcript, file), `register_evidence`, `link_evidence`, `approve_evidence`, `register_pending_evidence`, `update_pending_evidence`, `pending_evidence_reminders`
- Results: `propose_assessment`, `confirm_assessment`, `propose_finding`, `transition_finding`, `comment_on_finding`, `create_follow_up_task`
- History: `get_history` (entity), `get_audit_log`, `diff_revisions`
- Export: `export_workspace` (skill format), `import_workspace`, `report_data` (everything the report template needs, in one structured payload)

Resources (read-only, URI-addressable, so a skill can `@`-reference them): `audit://{id}/requirements.md` (the `10-requirements.md` view), `audit://{id}/plan.md`, `audit://{id}/events/{Mnn}/agenda.md`, `audit://{id}/findings.md`, `audit://{id}/log.md`, `audit://{id}/report-data.json`.

Prompts: one per stage, mirroring the skill's stage references, so a client without the skill installed still gets the method.

Rule for every write tool: it takes an optional `provenance` block (skill, model, reason). When called from an AI client without it, the server records `actor = ai, model = unknown` and the UI shows it as unverified.

## 8. Minimal UI

Server-rendered pages, one per entity type, with list, detail, edit, history tab, and Markdown rendering. Three views justify slightly more work:

- the requirement matrix: requirements × dimensions with documentation status, operation status, grade, evidence count, open pending items, and coverage;
- the plan calendar: events on a timeline with coverage counts;
- the finding review page: finding, its evidence, comments, status transitions, with auditee feedback entered by the auditor;
- the library page: sources with their files, requirements with text and original location, and a link editor that shows proposed links with scores next to confirmed ones.

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
requirement library with XLSX/CSV, Markdown and PDF import, source files kept, typed links with provenance and vector similarity proposals; organisation; audits with scope mode and dimensions, documents with text extraction, plan versions and events with coverage, event records, evidence with links, pending evidence, assessments and findings with workflow, revisions, MCP tools and resources above, workspace export and import, minimal UI. No server-driven AI except embeddings; all reasoning in the client.

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

## 13. Open questions

**Scope and users**

1. ~~Single auditor or audit team?~~ Decided: single auditor.
2. ~~Does the auditee log in?~~ Decided: no.
3. External audits on behalf of a certification body versus internal audits: do we need the audit type to change the workflow (for example, mandatory closing meeting, mandatory grading scheme) or only the label?
4. Should roles (CISO, control owner) be modelled as in WINGMAN, or are persons with role titles enough for an audit record?

**Requirements**

5. ~~Where do sources come from?~~ Decided: the auditor's spreadsheets, Markdown and PDF uploads, kept long term in a shared library.
6. Versioning of sources (ISO 27001:2013 → 2022): proposed as a new source with `supersedes` plus requirement-level links (section 3.1). Agree?
7. ~~Criteria levels?~~ Resolved by cloning: generic criteria on the library requirement, customised criteria on the audit instance. A per-organisation level would be a "clone from last audit of this organisation" shortcut rather than a third storage level. Wanted?
7a. When a new audit for the same organisation starts, should scope be built from the library, or offered as a clone of the previous audit's instances (keeping their customised criteria and notes), with origin links preserved?
7b. Should library links among cloned requirements be copied into the audit at clone time (proposed), or always read through the origin?
8. Which link types matter in practice? The list (sub-requirement, equivalent, more detailed than, similar, interprets) can grow; do you want it fixed or free with a controlled vocabulary?
9. Who may confirm an AI-proposed internal requirement into scope: the auditor alone, or should the auditee agree that the policy says what the AI claims?
10. Should the app compute coverage of a requirement by its sub-requirements (all children compliant implies parent compliant), or is that always the auditor's judgement?
11. ~~Ship seeded standard texts?~~ Decided by the source decision: no seeded texts, the auditor imports what they hold. The library is private to the instance.
11a. Clause granularity: one requirement per numbered clause, or per "shall" sentence? Proposed: per source, chosen at import and recorded, defaulting to the numbered clause.
11b. For PDF imports, should the AI also propose the generic `criteria_md` for each clause at import time, or only split the text and leave criteria to be written when the clause is first used in an audit?
11c. Do your existing spreadsheets already contain cross-standard mappings (e.g. a NIS2 to ISO 27001 column)? If so, the mapping-sheet reader belongs in the MVP.
11d. Should similarity proposals run automatically whenever a new source is imported (every new clause against the whole library), or only on request for a chosen pair of sources?

**Scopes and dimensions**

12. Are dimensions always organisational (team, service, site), or also temporal (period before and after a change) or supplier-based?
13. ~~Not applicable per dimension?~~ Decided: yes, with mandatory justification, reported as exclusions.
14. Is one finding across several dimensions, or one conclusion for the whole audit when all dimensions are compliant, the common case? That decides the default the UI offers.

**Planning and fieldwork**

15. Should the plan include non-meeting events (system walkthrough, document review session, site visit, sampling session) with the same coverage mechanics? The design assumes yes.
16. Should sampling plans be first-class (as above) or part of the agenda text?
17. How do transcripts arrive: pasted text, uploaded files, or a live local transcription stream? Live changes the API shape.
18. Does evidence need an auditee approval step for every item, or only for transcript-derived evidence as the skill does today?
19. Evidence validity period (WINGMAN: evidence expires) is important for continuous assurance; is it relevant in a point-in-time audit, or is it only kept for the WINGMAN export?

**Results**

20. Must the grading scheme be fixed when the audit starts, or can it change before reporting (with re-mapping of grades)?
21. ~~Where does the derivation table live?~~ Decided: as its own versioned entity in the app, read and applied by the skill, never by the app.
21a. ~~Rule set per audit?~~ Decided: one default rule set per scheme for now.
22. What does "auditee feedback" change: only the text and status of a finding, or can the auditee propose a different grade that the auditor accepts or rejects?
23. When is an audit frozen, and who may reopen it? Does a reopened audit get a new version of the report?

**History and AI**

24. How granular should the history be: every field change (JSON patch) or every save? Every field change is proposed.
25. Should the content of LLM prompts and responses be stored for traceability, or only metadata? Storing content helps audits of the audit but multiplies the data to protect.
26. Which background jobs must run without any cloud model (fully local)? That decides which local models have to be evaluated for the MVP.
27. Should the app check and report consistency rules itself (requirement in scope with no coverage, finding without evidence, confirmed assessment with pending evidence still open), in the spirit of WINGMAN's gap list? Proposed: yes, as a `gaps` tool and a UI panel.

**Operations**

28. ~~Single instance or shared?~~ Follows from single auditor: one instance, several organisations and audits, one shared library.
29. Backup and retention: audit records are often required for years. Is the workspace export the archive format, or do we also need database backups scheduled from the app?
30. Languages: the record is multilingual (requirements verbatim in their language, working language per audit). Is UI localisation (English, Latvian) needed in the MVP?
