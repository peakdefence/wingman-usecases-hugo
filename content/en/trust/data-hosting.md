---
title: Data, hosting and AI
short: Data, hosting and AI
slug_id: data
weight: 30
draft: true
summary: Where your records are stored, which AI services see them, and what you can take with you.
---

<!--
DRAFT. Not built until `draft: false`. Fill in every [bracket] with a confirmed fact, delete what cannot be
confirmed, then translate to content/lv/trust/data-hosting.md. Tone: the site's privacy page.

Confirmed by Peak Defence on 2026-11-25:
- The model behind briefs, Ask Wingman and suggestions is set per customer: cloud, EU-restricted cloud,
  or a fully local deployment; Peak Defence can provide the model. (Staging used an Anthropic Claude
  model through an EU endpoint.)
- Web search uses either the built-in search or an external service.
- MCP access follows the signing-in user's permissions (read, write, delete, per entity type), with
  further controls possible; a connection can be restricted to one project or narrower.
- Sign-in to MCP: OAuth or a token, with credentials the organisation is given.
- Record history cannot be edited or deleted.
- A read-only auditor role can be configured.
-->

## Where your records are stored

Records, documents and attachments are stored in [country/region] by [hosting provider]. Backups are kept in [region] for [period].

## Which AI services see your data

- **Briefs, Ask Wingman and suggestions inside WINGMAN** are written by a model set up for your organisation: in the cloud, in a cloud restricted to the EU, or entirely in a local deployment; Peak Defence can provide the model. [For each option: provider, region, what is sent, retention and training terms.]
- **Web search** uses WINGMAN's built-in search or an external service. [Confirm that only the query is sent, and name the external provider.]
- **Your own assistant over MCP** receives the records it reads, under your own agreement with its provider. We do not see that conversation.
- Can WINGMAN be used with AI switched off? [answer]

## Sub-processors

[List with purpose and location, or a link to the list.]

## Access and sign-in

[Single sign-on, multi-factor authentication, access roles, how Peak Defence staff can access a tenant.]

## Export and leaving

Each organisation has its own workspace, and its data can be exported. [Formats, whether links between records and files are included, who can run it, what happens to the data after the contract ends.]

## Our own security

[Certifications held by Peak Defence, how to report a vulnerability, where to find the data processing agreement.]
