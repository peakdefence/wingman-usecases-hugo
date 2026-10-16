# Media library — how screenshots and recordings of WINGMAN are stored and used

This file is written for whoever (or whatever) creates and updates content on this site: a person, or an
agent such as Claude with the `wingman-demo-capture` skill. Read it before touching `data/media.yaml`,
`static/media/` or the `media:` lists in use-case front matter. The feature map behind it (every use-case
stage mapped to a WINGMAN screen, with fit and gaps) lives in the working doc
"WINGMAN feature map and capture plan"; this file is the part that must stay with the repo.

## Where things live

| What | Where |
|---|---|
| The files (stills and recordings) | `static/media/<id>.<ext>` — the id is the file name |
| One entry per file: what it shows, for whom, in which language | `data/media.yaml` |
| Which captures a use-case stage shows | `media: [ids]` on the stage in `content/en/use-cases/<uc>.md` |
**Rendering is not wired up yet.** No layout reads `data/media.yaml` or the `media:` lists, and there is no
`/library/` page. Both are planned: a figure strip under each use-case stage, and a browsable catalogue at
`/library/` grouped by screen. Until then the data is the map from stages to captures for later.

Only the English use-case file carries `media:`. The plan is for the Latvian page to show the same captures
for the stage at the same index (falling back to the English stage), so translations never repeat the ids,
with captions from `data/media.yaml` in the page language and English as fallback. Unknown ids and entries
with `status: pending` are to be skipped silently, so a stage may reference a capture that is planned but
not yet dropped in.

## The entry

```yaml
- id: task-review-card            # stable key; also the file name
  file: media/task-review-card.jpg
  type: image                     # image | gif | video
  area: tasks                     # the WINGMAN screen, see the list below
  action: false                   # true for a recording of the user doing something
  entities: [task, risk]          # ids from data/graph.yaml that are visible in the capture
  env: dev                        # dev | stage — the tenant; record ids in the caption exist there
  sequence: { key: risk-accept, step: 2 }   # optional: stills that belong to one flow, in order
  width: 1105
  height: 1092
  status: pending                 # only while the file is missing
  title:   { en: "…", lv: "…" }
  caption: { en: "…", lv: "…" }   # one or two sentences: what the viewer is looking at and why it matters
```

Areas: `brief`, `plans`, `tasks`, `risks`, `controls`, `requirements`, `assets`, `vulnerabilities`,
`incidents`, `signals`, `threats`, `documents`, `audits`, `graph`, `ask` (the Ask Wingman panel),
`palette` (⌘K), `settings`, `email` (notifications outside the app).

Naming: `<area-or-flow>-<what>` for a still (`risk-matrix`, `plan-activities`), `<flow>` for a recording
(`ask-incident-detect`), `<flow>-<n>-<state>` for the stills that narrate a recording step by step
(`risk-accept-1-suggestion`, `risk-accept-2-accepted`, `risk-confirm-3-completed`). A recording and its
stills share the `sequence.key`.

## What exists today (16 October 2026)

Stills are JPEG or PNG from a 1105×1092 (dev) or 1232×960 (stage) viewport, light theme, sidebar open,
Ask Wingman closed unless the capture is about it. Recordings are GIFs at 1232×960 from the stage tenant
(`status: pending` until the files are copied into `static/media/`; they are large — downscale to 960 px
wide and ≤ 12 fps before committing, or convert to MP4 and set `type: video`).

| Flow or screen | Ids | Tells the story of |
|---|---|---|
| Daily brief and register checks | `brief-top`, `brief-gaps` | security-operations, risk-review 5, roles-raci 3, new-requirements 2 |
| Plans and the review cadence | `plans-list`, `plan-detail`, `plan-activities`, `task-calendar` | regular-reviews 1, risk-review 1, management-review 1 |
| A review task, end to end | `task-review-card`, `task-review-start`, `ask-skill-task` (+ `-1-help`, `-2-completed`) | risk-review 1–2, regular-reviews 4 |
| Accepting a suggestion on a risk | `risk-review-card`, `risk-accept-1-suggestion`, `risk-accept-2-accepted`, `risk-confirm-3-completed` | risk-review 4, incident-handling 5, change-management 5 |
| Reporting and triaging a signal | `sig-report-1-form`, `sig-report-2-reviewing`, `sig-inbox`, `notif-email-signal` | risk-identification 4, incident-handling 1, security-operations 5 |
| Chat-driven incident registration | `ask-incident-detect` (+ `-1-suggestion`, `-2-accepted`), `inc-detail-registered` | incident-handling 1 |
| Incident triage with suggestions | `ask-skill-incident-triage` (+ `-1-steps` … `-4-accepted`) | incident-handling 2–3 and 5 |
| Authority notification | `ask-skill-incident-authority-notice` (+ `-1`, `-2`), `ask-skill-incident-triage-2-notice` | incident-handling 4 |
| Records and their links | `risk-list`, `risk-matrix`, `risk-detail`, `ctl-detail`, `req-detail`, `asset-list`, `asset-detail`, `vuln-list`, `vuln-detail`, `inc-detail`, `doc-list` | most "link" stages |
| The graph | `rec-graph`, `graph-global` | vulnerability-impact 2, new-requirements 3, any dependency stage |
| Entry points | `ask-scope`, `palette-create`, `set-access` | incident-handling 4, change-management 4, roles-raci 1 |

## How to combine captures on a stage

A stage carries one idea; its media strip should show that idea in two to four frames, in the order a
reader would experience it. The pattern that works:

1. **The trigger** — where the person is when the stage starts (an email, the Brief, a task, a signal card).
2. **The AI part** — what WINGMAN prepared or proposed (a brief, a suggestion card, a skill's steps).
3. **The decision** — the human accepting, skipping, confirming, choosing an outcome.
4. **The result** — the record afterwards (status changed, score moved, task done, incident linked).

Put the recording first when one exists, then the stills that let a reader see the frames at their own
pace. Reuse a still across stages freely — one capture of the Brief's gap list serves five use cases — but
do not put the same still twice on one page unless the two stages really look at different parts of it.
Keep captions about what is visible; the stage `text` and `ai` fields already say what the stage means.

Where the use-case text promises something the UI does not show (audit evidence and findings, segregation
of duties, document diffs, RACI beyond owner pairs), leave the stage without media rather than show an
unrelated screen; the gaps are listed in the feature-map doc.

## Capturing new material

Setup: the stage tenant for anything involving chat or skills (its AI worker answers in 20–40 s); dev or
stage for plain screens. Viewport 1232×960 or wider, light theme, sidebar open. Before recording a flow,
make sure the records it needs exist and look right (an incident with status and type, a risk with an
open review, a task with a brief). Record the whole arc from trigger to result; stop on the changed state.
Blur member e-mails, webhook secrets and anything from a customer tenant.

Then: drop the file into `static/media/`, add the entry to `data/media.yaml` with title and caption in
both languages, and add the id to the stage(s) it belongs to. Once rendering is wired up, open `/library/` and the use-case
page in `hugo server` and check the strip. If a recording is still on someone's machine, add its entry with
`status: pending` so the stills carry the stage meanwhile.

Record ids seen in captions (INCIDENT-29043, RSK-1487, TSK-25129 …) are demo data on the named tenant and
may change; they are fine on the public site, but do not treat them as stable references.

## Known issues to keep out of the frame

Seen on 16 October 2026: the Tasks board view renders empty because its columns do not match the task
statuses; the Overdue quick view counts completed and cancelled tasks; clicking a skill chip while a record
is scoped can send the label as text and mis-route (type the ask in words instead); the triage skill can
emit a suggestion with a wrong id followed by a corrected duplicate. Crop or re-record around these until
they are fixed.
