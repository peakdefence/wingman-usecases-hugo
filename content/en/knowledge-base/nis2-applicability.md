---
title: Does NIS2 apply to you?
kb: nis2-applicability
weight: 50
summary: "How the NIS2 directive decides who is in scope, what changes between essential and important entities, how it reaches suppliers indirectly, and a prompt that works out a reasoned first answer for your organisation."
regulations:
- NIS2 Art. 2 and 3
- NIS2 Annex I and II
- Nacionālās kiberdrošības likums
audience: CEOs, CTOs, security officers
uc: new-requirements
updated: 2026-11-25
---

Many organisations are unsure whether NIS2 applies to them, and the question is usually asked by someone who has to decide whether to spend money on it. The directive gives a clear logic, but the final answer depends on the national law that transposes it and, in some countries, on a decision by the competent authority. This guide explains the logic, and the prompt below works through your case one question at a time and gives a reasoned first answer with what to check next.

## How to use this guide

1. Read the logic below once, so the questions the prompt asks make sense.
2. Open a fresh chat in any capable LLM, paste the prompt and answer its questions. Have your staff numbers, annual turnover and balance sheet total, and a list of your main activities and customers at hand.
3. Treat the result as a starting point. Check it against the national law in force in each member state where you operate and, where the answer is "possibly", ask the competent authority or counsel.

Before pasting anything into a public LLM service, remove names, customer identifiers and figures you do not need. Ranges (for example "between 50 and 249 staff") are enough for this question.

## The logic of the directive

NIS2 asks two questions first: what you do, and how big you are.

**Sector.** The organisation must be of a type listed in Annex I (sectors of high criticality) or Annex II (other critical sectors). What counts is the activity, not the company's name or its main business code: a manufacturer that also runs a data centre service for others may be in scope for that activity.

| Annex I: sectors of high criticality | Annex II: other critical sectors |
|---|---|
| Energy; transport; banking; financial market infrastructures; health; drinking water; waste water; digital infrastructure; ICT service management (business to business); public administration; space | Postal and courier services; waste management; manufacture, production and distribution of chemicals; production, processing and distribution of food; manufacturing (including medical devices, computer, electronic and optical products, electrical equipment, machinery, motor vehicles and other transport equipment); digital providers (online marketplaces, search engines, social networking platforms); research |

Each sector is divided into sub-sectors and types of entity in the annex itself. Read the line that matches your activity rather than the sector heading.

**Size.** As a rule, the directive covers entities that are at least medium-sized under the EU definition in Commission Recommendation 2003/361/EC. A medium-sized enterprise has fewer than 250 staff and either an annual turnover of no more than EUR 50 million or an annual balance sheet total of no more than EUR 43 million; a small enterprise has fewer than 50 staff and turnover or balance sheet of no more than EUR 10 million. An entity above the medium-sized ceilings is large. Under the Recommendation, figures of partner and linked enterprises can have to be added to your own, so a small subsidiary of a large group may not count as small.

**Where size does not matter.** Some entities are covered whatever their size. These include providers of public electronic communications networks or publicly available electronic communications services, trust service providers, top-level domain name registries and DNS service providers. Member states must also include, regardless of size, an entity that is the sole provider in that country of a service essential for critical societal or economic activities, or whose disruption could significantly affect public safety, security or health. Public administration entities of central government are covered as the member state defines them, and member states may also cover regional and local public administration. Entities identified as critical entities under the Critical Entities Resilience Directive are covered too.

**Exclusions and overlaps.** Public administration entities that carry out activities in national security, public security, defence or law enforcement are excluded. Where a sector-specific EU act imposes requirements at least equivalent to NIS2, such as DORA for financial entities, those requirements apply in place of the corresponding NIS2 provisions.

## Essential or important

If you are in scope, you are either an essential or an important entity. In broad terms, large entities in Annex I sectors are essential, and medium-sized entities in Annex I and medium-sized or large entities in Annex II are important. Several types are essential regardless of size, among them qualified trust service providers, top-level domain name registries, DNS service providers and central government entities; medium-sized providers of public electronic communications are also essential. Member states can designate further entities as essential.

| | Essential entities | Important entities |
|---|---|---|
| Obligations | Risk-management measures (Art. 21), incident reporting (Art. 23), management body duties (Art. 20) | The same |
| Supervision | Proactive: inspections, audits and information requests can happen at any time | Reactive: after evidence or indications that the entity does not comply |
| Maximum administrative fines | At least EUR 10 million or 2 % of worldwide annual turnover, whichever is higher | At least EUR 7 million or 1.4 % of worldwide annual turnover, whichever is higher |

The obligations are the same; what differs is how closely the authority watches and how high the ceiling for fines is. For essential entities the directive also allows, as a last resort, a temporary ban on a person at chief executive or legal representative level from exercising managerial functions.

## Indirect reach through your customers

Even if the law does not apply to you, NIS2 can still reach you. Entities in scope must address supply chain security, including the security of their relationships with direct suppliers and service providers. In practice this arrives as security questionnaires, contract clauses on incident notice and audit rights, and requests for evidence of controls. If you provide IT, software, hosting, managed services or components to entities in scope, expect these requirements whether or not you are in scope yourself, and plan for them as you would for a customer requirement.

## The national law decides

NIS2 is a directive, so the obligations that bind you are those of the national law in each member state where you are established or, for some digital services, where you have your main establishment. National laws can add sectors or entities, define public administration, and set how registration works.

In Latvia, the directive is transposed by the Nacionālās kiberdrošības likums and its implementing Cabinet regulations. The competent authority decides on registration of essential and important entities, and the law sets national duties of its own, such as a designated cybersecurity manager (kiberdrošības pārvaldnieks). Check the thresholds, registration steps and deadlines against the law in force, not against this page.

## Prompt: a first applicability assessment

{{< prompt id="nis2-applicability-assessment" title="NIS2 applicability first assessment" >}}
You are an assistant that helps an executive or security officer form a first, reasoned view on whether the EU NIS2 directive (Directive (EU) 2022/2555) is likely to apply to their organisation, and what to check next. You are not a lawyer and you do not give legal conclusions. Say so once at the start and once in the final output.

Reply in the language the user writes in, unless they ask for another one.

Ground rules
- Ask one question at a time and wait for the answer. Ask between five and eight questions in total. If an answer is unclear, ask one follow-up on that point before moving on.
- Work only from what I tell you and from the text of the directive. Never invent facts, thresholds, legal deadlines, article numbers or citations. If you are not sure of a provision, say so and tell me to check it.
- Do not state national law provisions, point numbers, registration deadlines or authority procedures as facts. Write "check against the law in force" where the national law decides.
- Remind me at the start to remove names, customer identifiers and confidential figures; ranges are enough.

Questions to cover, one at a time, in this order
1. What the organisation does: its main activities and services, and any secondary activities (for example running a data centre, hosting, managed IT services, energy supply, transport, manufacturing of particular products, research).
2. Size: number of staff (headcount range), annual turnover and annual balance sheet total (ranges), and whether the organisation belongs to a group, with partner or linked enterprises.
3. Where it is established and in which EU member states it provides services.
4. Whether it is a public body, and if so at which level (central government, regional, local) and whether its activities concern national security, public security, defence or law enforcement.
5. Whether it is supervised under a sector-specific EU act such as DORA, or is a provider of public electronic communications, a trust service provider, a DNS service provider or a top-level domain registry.
6. Whether it provides services or products to organisations that are, or are likely to be, in scope of NIS2, and whether those customers already send security requirements.
7. Whether it has already been contacted by, or registered with, a national competent authority, or identified as a critical entity.
Ask an eighth question only if the answers so far leave the assessment open.

Assessment
Then produce:
1. A short summary of the facts I gave, with any assumptions marked.
2. Sector match: which Annex I or Annex II sector, sub-sector and type of entity seems to match each activity, quoting the annex wording you rely on, or "no match found" with your reasoning.
3. Size test: whether the organisation appears small, medium-sized or large under Recommendation 2003/361/EC, noting where group figures could change this, and whether any size-independent category applies.
4. Likely answer: one of "likely in scope", "possibly in scope" or "likely not in scope", and, if in scope, whether it looks like an essential or an important entity, with the reasons. Say what single fact would most change the answer.
5. Indirect reach: whether customers in scope are likely to pass supply chain requirements to the organisation, and what those usually look like.
6. What to check in the national law of each member state named: sector list and any additions, size rules, public administration scope, registration with the competent authority, and national duties, each marked "check against the law in force".
7. Next steps: three to six concrete actions with a suggested owner role, for example confirm with the competent authority, ask counsel for a written opinion, gather group figures, prepare for customer questionnaires, or start a gap assessment against the risk-management measures.
End by repeating that this is a first assessment, not a legal conclusion, and that the national law and the competent authority decide.

Begin by stating that you are not a lawyer, giving the reminder about confidential details, and asking question 1.
{{< /prompt >}}

{{< wingman uc="new-requirements" stage="1" >}}
Once the answer is yes, or a customer contract asks for NIS2-level measures, selecting the framework in WINGMAN loads its requirements as records; a single contract clause can be added as a requirement on its own and linked to the controls that meet it.
{{< /wingman >}}

## What the prompt does not do

It does not give a legal opinion, it does not know your national law in detail, and it cannot register you or tell you how the competent authority will decide. It gives you a reasoned first view, the facts that drive it and a short list of what to check, so the conversation with counsel or the authority starts from the right questions.
