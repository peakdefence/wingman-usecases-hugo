---
title: Works with your AI assistant
short: Works with your AI assistant
slug_id: assistants
weight: 10
summary: WINGMAN keeps the record, and the assistant you already use does the work on it. This page says how they connect, what the assistant can do, and what a skill is.
media: [ask-scope, ask-skill-task-1-help, ask-incident-detect-1-suggestion]
ask:
- The full list of MCP tools
- Which assistants you have tested it with
- Which model Ask Wingman and the briefs use, and where it runs
- Whether my own skills can run inside Ask Wingman
next:
  title: See WINGMAN connected to an assistant
  text: We can show Claude working on a fictional company's records, from a question to an accepted change.
  ask: A walk-through of WINGMAN connected to Claude, on a fictional company
---

## How the assistant connects

WINGMAN runs an MCP server. MCP, the Model Context Protocol, is an open standard that lets an AI assistant use tools and data. Claude, ChatGPT and other assistants that support MCP connectors can use it.

The assistant signs in with your own WINGMAN account and works as you. It sees the projects your account can see, and every call names the project it works in. A connection can be limited to reading; changing records needs write access.

Each organisation has its own project. A consultant with several clients works in each client's project in turn.

## What the assistant can do

- **Read and search.** Records and the links between them, a record's history and comments, documents and attachments, and the short brief WINGMAN keeps for each record.
- **Propose a change.** One suggestion is one change: a field, a link or a new record, with a description of what changes and why. A person accepts or rejects it. See [How AI is controlled]({{< relref "ai-control" >}}).
- **Change records directly.** Create and update records, link them, upload documents and cite evidence for an audit finding. Only with write access.
- **Run reviews.** Open a review task and complete a risk review.
- **Administer.** People, groups and access roles. Only for an administrator.
- **Look things up.** Search the public web for current information, kept apart from your records.

## Skills

A skill is a written procedure the assistant follows step by step on your records: which questions to ask, in which order, what to check before creating anything, and what to leave for a person to decide. The assistant does the work; the skill keeps it consistent from one session, person or client to the next.

Skills that work with WINGMAN:

- **Framework implementation.** ISO 27001, NIS2, DORA, SOC 2 or another requirement set, in stages you can stop and resume: context, requirements, documents, a risk workshop, controls and a roadmap. [New requirements]({{< relref "/use-cases/new-requirements" >}})
- **Risk identification.** An interview with a risk owner, one question at a time, matching each concern to existing risks before creating a new one. [Risk identification]({{< relref "/use-cases/risk-identification" >}})
- **Risk treatment and register quality.** A treatment proposal per risk for the owner to confirm, and a check of the register for missing owners, ratings, controls and links. [Risk review and treatment]({{< relref "/use-cases/risk-review" >}})
- **Business impact analysis.** Service by service, with the owner, recorded as one control per service. [Business impact analysis]({{< relref "/use-cases/business-impact-analysis" >}})
- **Change assessment.** Triage of a planned change and, where needed, a security impact assessment for the change board. [Change management]({{< relref "/use-cases/change-management" >}})
- **Internal audit.** Scope, document review, interview plan, evidence, findings and the report. It reads WINGMAN without changing it and keeps the working papers as files the auditor holds. [Auditing]({{< relref "/use-cases/auditing" >}})

Inside WINGMAN, **Ask Wingman** offers skills on any record, grouped by area: incident communications, risk analysis, audit plan, management review, business impact analysis and AI use case review.

In Claude, a skill is a set of instructions kept in your own account. You can write your own for your own method, and it stays with you.

## Which model does the work

When you connect through MCP, the model is the one in your assistant. You choose it, under your own agreement with its provider. Ask Wingman and the briefs inside WINGMAN use a model that WINGMAN runs; that is one of the questions below.
