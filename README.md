# WINGMAN use cases site

A Hugo site (no theme dependency, Hugo extended ≥ 0.146). Multilingual: English at `/`, Latvian at `/lv/`.

```
hugo server            # local preview at http://localhost:1313
hugo --gc --minify     # build to public/
```

## Where things live

| What | Where |
|---|---|
| Data model structure (entity types, positions, links, questions, gaps, use-case groups) | `data/graph.yaml` |
| Data model texts per language | `data/<lang>/model.yaml` |
| Use cases, one page each, with stages in front matter | `content/<lang>/use-cases/<id>.md` |
| Videos (YouTube ids, titles per language, linked use cases) | `data/videos.yaml` |
| Case studies | `content/<lang>/case-studies/*.md` |
| Interface strings | `i18n/<lang>.toml` |
| Layouts, styles, script | `layouts/`, `assets/css/main.css`, `assets/js/main.js` |

Fonts (Rubik, Nunito, Maven Pro) are self-hosted in `static/fonts/`. The site makes no third-party requests except YouTube thumbnails; the player loads from `youtube-nocookie.com` only after a visitor clicks play.

## Add a video

Append an entry to `data/videos.yaml`:

```yaml
- youtube: abc123XYZ          # id from youtu.be/<id>
  lang: en                    # language spoken in the video
  use_cases: [incident-handling]
  title: { en: "...", lv: "..." }
  description: { en: "...", lv: "..." }
```

It appears on the home page, the Videos page and every listed use-case page. Set `model: true` for videos about the data model itself.

## Add a case study

```
hugo new content/en/case-studies/my-case.md
```

Fill in the front matter (`client`, `sector`, `standards`, `use_cases`, `videos`) and set `draft: false` to publish. Keep it anonymised: no company, people or tool names, and only results the client has confirmed. Put the Latvian version at the same file name under `content/lv/case-studies/` so the language switch links them. Each use-case page lists the case studies whose `use_cases` include it.

The example `internal-iso-27001-audit.md` is a draft skeleton and is not built until `draft: false`. Preview drafts with `hugo server -D`.

## Add or change a use case

Copy a file in `content/en/use-cases/`. Each stage has:

- `title`, `text`, `ai` (what WINGMAN and AI propose), `decides` (who confirms);
- `nodes`: entity ids lit on the graph;
- `links`: edges as `from-to`, either order, which must exist in `data/graph.yaml`;
- `conflict: true` (optional): draws the link as a conflict, e.g. segregation of duties.

`group` is one of `assurance`, `risk`, `operations`, `compliance`, `accountability`. `uc` is the stable id used by videos and case studies. Translate at the same file name under each language folder.

## Add a language (e.g. Estonian)

1. In `hugo.toml`, add `[languages.et]` with `languageName`, `languageCode`, `contentDir = "content/et"` and a `weight`.
2. Copy `i18n/en.toml` to `i18n/et.toml` and translate it.
3. Copy `data/en/model.yaml` to `data/et/model.yaml` and translate it. Any key you leave out falls back to English.
4. Copy `content/en/` to `content/et/` and translate it. Untranslated pages simply don't exist in that language.
5. Add `et:` titles and descriptions to `data/videos.yaml`. These fall back to `en`.

The language switcher and the `hreflang` tags pick up new languages automatically.

## Deep links

- `/#e-risk` opens an entity in the explorer.
- `/#questions` and `/#gaps` open those explorer modes.
- `/use-cases/<id>/#stage-3` opens a use case at a stage.
