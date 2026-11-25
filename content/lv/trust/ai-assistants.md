---
title: Strādā ar jūsu MI asistentu
short: Strādā ar jūsu MI asistentu
slug_id: assistants
weight: 10
summary: WINGMAN uztur ierakstus, un asistents, ko jau lietojat, ar tiem strādā. Šī lapa pasaka, kā tie savienojas, ko asistents var darīt un kas ir prasme.
media: [ask-scope, ask-skill-task-1-help, ask-incident-detect-1-suggestion]
ask:
- Pilns MCP rīku saraksts
- Ar kuriem asistentiem tas ir pārbaudīts
- Kuru modeli izmanto Ask Wingman un ierakstu kopsavilkumi, un kur tas darbojas
- Vai manas prasmes var darboties Ask Wingman iekšienē
next:
  title: Apskatiet WINGMAN, kas savienots ar asistentu
  text: Varam parādīt, kā Claude strādā ar izdomāta uzņēmuma ierakstiem, no jautājuma līdz pieņemtām izmaiņām.
  ask: Demonstrācija, kā WINGMAN strādā kopā ar Claude, uz izdomāta uzņēmuma piemēra
---

## Kā asistents savienojas

WINGMAN darbina MCP serveri. MCP (Model Context Protocol) ir atvērts standarts, kas ļauj MI asistentam izmantot rīkus un datus. To var izmantot Claude, ChatGPT un citi asistenti, kas atbalsta MCP savienotājus.

Asistents pieslēdzas ar jūsu WINGMAN kontu un strādā jūsu vārdā. Tas redz tos projektus, kurus redz jūsu konts, un katrā darbībā norāda projektu, kurā strādā. Savienojumu var ierobežot tikai ar lasīšanu; ierakstu mainīšanai vajadzīgas rakstīšanas tiesības.

Katrai organizācijai ir savs projekts. Konsultants, kuram ir vairāki klienti, strādā katra klienta projektā pēc kārtas.

## Ko asistents var darīt

- **Lasīt un meklēt.** Ierakstus un saites starp tiem, ieraksta vēsturi un komentārus, dokumentus un pielikumus un īso kopsavilkumu, ko WINGMAN uztur katram ierakstam.
- **Ierosināt izmaiņas.** Viens ieteikums ir viena izmaiņa: lauks, saite vai jauns ieraksts, ar aprakstu, kas mainās un kāpēc. Cilvēks to pieņem vai noraida. Sk. [Kā tiek kontrolēts MI]({{< relref "ai-control" >}}).
- **Mainīt ierakstus tieši.** Veidot un atjaunināt ierakstus, tos sasaistīt, augšupielādēt dokumentus un norādīt pierādījumus audita konstatējumam. Tikai ar rakstīšanas tiesībām.
- **Veikt pārskatīšanas.** Atvērt pārskatīšanas uzdevumu un pabeigt riska pārskatīšanu.
- **Administrēt.** Cilvēkus, grupas un piekļuves lomas. Tikai administratoram.
- **Uzzināt.** Meklēt aktuālu informāciju publiskajā tīmeklī, nošķirti no jūsu ierakstiem.

## Prasmes

Prasme ir rakstiska procedūra, ko asistents soli pa solim izpilda ar jūsu ierakstiem: kādus jautājumus uzdot, kādā secībā, ko pārbaudīt, pirms kaut ko veidot, un ko atstāt cilvēka ziņā. Darbu dara asistents; prasme nodrošina, ka tas notiek vienādi neatkarīgi no sesijas, cilvēka vai klienta.

Prasmes, kas strādā ar WINGMAN:

- **Ietvara ieviešana.** ISO 27001, NIS2, DORA, SOC 2 vai cits prasību kopums, posmos, kurus var pārtraukt un turpināt: konteksts, prasības, dokumenti, risku darbnīca, kontroles un ceļa karte. [Jaunas prasības]({{< relref "/use-cases/new-requirements" >}})
- **Risku identificēšana.** Intervija ar riska īpašnieku pa vienam jautājumam, katru nosaukto apdraudējumu vispirms salīdzinot ar esošajiem riskiem. [Risku identificēšana]({{< relref "/use-cases/risk-identification" >}})
- **Risku apstrāde un reģistra kvalitāte.** Apstrādes priekšlikums katram riskam, ko apstiprina īpašnieks, un reģistra pārbaude, vai netrūkst īpašnieku, vērtējumu, kontroļu un saišu. [Risku pārskatīšana un apstrāde]({{< relref "/use-cases/risk-review" >}})
- **Darbības ietekmes analīze.** Pakalpojumu pa pakalpojumam, kopā ar īpašnieku, fiksējot vienu kontroli katram pakalpojumam. [Darbības ietekmes analīze]({{< relref "/use-cases/business-impact-analysis" >}})
- **Izmaiņu novērtējums.** Plānotu izmaiņu šķirošana un, ja vajag, drošības ietekmes novērtējums izmaiņu padomei. [Izmaiņu pārvaldība]({{< relref "/use-cases/change-management" >}})
- **Iekšējais audits.** Tvērums, dokumentu izvērtēšana, interviju plāns, pierādījumi, konstatējumi un ziņojums. Tā lasa WINGMAN, neko tajā nemainot, un audita darba dokumentus glabā kā failus, kas paliek auditora rīcībā. [Audits]({{< relref "/use-cases/auditing" >}})

WINGMAN iekšienē **Ask Wingman** piedāvā prasmes jebkuram ierakstam, sagrupētas pa jomām: incidentu komunikācija, risku analīze, audita plāns, vadības pārskats, darbības ietekmes analīze un MI lietojuma izvērtēšana.

Claude prasme ir instrukciju kopums jūsu pašu kontā. Varat uzrakstīt savas prasmes savai metodei, un tās paliek jums.

## Kurš modelis dara darbu

Ja pieslēdzaties ar MCP, modelis ir tas, kas ir jūsu asistentā. To izvēlaties jūs, saskaņā ar savu līgumu ar tā nodrošinātāju. Ask Wingman un ierakstu kopsavilkumi WINGMAN iekšienē izmanto modeli, ko darbina WINGMAN; tas ir viens no jautājumiem zemāk.
