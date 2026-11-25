---
title: Darbojas ar jūsu MI asistentu
short: Darbojas ar jūsu MI asistentu
slug_id: assistants
weight: 10
summary: WINGMAN uztur ierakstus, un asistents, ko jau lietojat, ar tiem strādā. Šajā lapā aprakstīts, kā tie savienojas, ko asistents var darīt un kas ir prasme.
media: [ask-scope, ask-skill-task-1-help, ask-incident-detect-1-suggestion]
ask:
- Savienojuma dati un pieslēgšanās veids mūsu organizācijai
- Kur iegūt prasmes un kā tās uzstādīt
- Pilns MCP rīku saraksts
- Kādu MI konfigurāciju jūs ieteiktu mums
- Vai manas prasmes var darboties Ask Wingman
next:
  title: Apskatiet WINGMAN, kas savienots ar asistentu
  text: Varam parādīt, kā Claude strādā ar izdomāta uzņēmuma ierakstiem, no jautājuma līdz pieņemtām izmaiņām.
  ask: Demonstrācija, kā WINGMAN strādā kopā ar Claude, uz izdomāta uzņēmuma piemēra
---

## Kā asistents savienojas

WINGMAN darbina MCP serveri. MCP (Model Context Protocol) ir atvērts standarts, kas ļauj MI asistentam izmantot rīkus un datus. To var izmantot Claude, ChatGPT un citi asistenti, kas atbalsta MCP savienotājus.

Jūs pieslēdzaties ar organizācijai piešķirto pieslēgšanās veidu, OAuth vai pilnvaras atslēgu (token), izmantojot savus piekļuves datus. Pēc tam asistents strādā ar jūsu tiesībām. Tiesības tiek noteiktas katram cilvēkam un katram ierakstu veidam: lasīšana, rakstīšana un dzēšana. Kāds var lasīt visu, mainīt riskus un uzdevumus, bet nemainīt dokumentus un lietotāju datus. Asistents saņem tieši šādu piekļuvi, un papildus tai var ieviest vēl citas kontroles.

Katrai organizācijai ir sava darba vide, ko WINGMAN sauc par projektu. Savienojumu var ierobežot ar vienu projektu vai vēl šaurāk, tāpēc asistents, kas strādā vienam klientam, nevar piekļūt cita klienta ierakstiem.

## Ko asistents var darīt

- **Lasīt un meklēt.** Ierakstus un saites starp tiem, ieraksta vēsturi un komentārus, dokumentus un pielikumus un katra ieraksta kopsavilkumu: īsu aprakstu, ko WINGMAN MI uzraksta no ieraksta un atjauno, kad ieraksts mainās.
- **Ierosināt izmaiņas.** Viens ieteikums ir viena izmaiņa: lauks, saite vai jauns ieraksts, ar aprakstu, kas mainās un kāpēc. Cilvēks to pieņem vai noraida. Sk. [Kā tiek kontrolēts MI]({{< relref "ai-control" >}}).
- **Mainīt ierakstus tieši.** Veidot un atjaunināt ierakstus, tos sasaistīt, augšupielādēt dokumentus un norādīt pierādījumus audita konstatējumam. Tikai tur, kur to atļauj cilvēka tiesības.
- **Sagatavot pārskatīšanas.** Atvērt pārskatīšanas uzdevumu un aprakstīt ierosināto iznākumu. Pārskatīšanas pabeigšana ir pārskatītāja lēmums.
- **Administrēt.** Cilvēkus, grupas un piekļuves lomas. Tikai administratoram.
- **Uzzināt.** Meklēt aktuālu informāciju publiskajā tīmeklī ar WINGMAN iebūvēto meklēšanu vai ārēju meklēšanas pakalpojumu, nošķirti no jūsu ierakstiem.

## Prasmes

Prasme ir rakstiska procedūra, ko asistents soli pa solim izpilda ar jūsu ierakstiem: kādus jautājumus uzdot, kādā secībā, ko pārbaudīt, pirms kaut ko veidot, un ko atstāt cilvēka ziņā. Darbu dara asistents; prasme nodrošina, ka tas notiek vienādi neatkarīgi no sesijas, cilvēka vai klienta.

Prasmes, kas strādā ar WINGMAN:

- **Ietvara ieviešana.** Jebkurš regulējums vai standarts: ISO 27001, NIS2, DORA, SOC 2 un citi. Prasme darbojas Claude Code ar WINGMAN ierakstiem un izved vienu cilvēku cauri visai ieviešanai posmos, kurus var pārtraukt un turpināt. Tā izveido ieviešanas arhitektūru: kontekstu un tvērumu, prasības, risku darbnīcu, kontroles, kas sagrupētas darba virzienos, un uzdevumus, kas sadalīti starp cilvēkiem, kuri tos veiks, un tas viss tiek izveidots WINGMAN. Tā sagatavo politikas un procedūras no organizācijas paša konteksta un izsūta tās pārskatīšanai, apstiprināšanai un iepazīšanai. Ieviešanas darbs aizņem dienas, nevis mēnešus; lai kontroles darbotos pietiekami ilgi un to varētu pierādīt, joprojām vajadzīgs laiks. [ISO 27001 no nulles, pirmās trīs dienas]({{< relref "/samples/iso27001-first-days" >}})
- **Risku identificēšana.** Intervija ar riska īpašnieku pa vienam jautājumam, katru nosaukto apdraudējumu vispirms salīdzinot ar esošajiem riskiem. [Risku identificēšana]({{< relref "/use-cases/risk-identification" >}})
- **Risku apstrāde un reģistra kvalitāte.** Apstrādes priekšlikums katram riskam, ko apstiprina īpašnieks, un reģistra pārbaude, vai netrūkst īpašnieku, vērtējumu, kontroļu un saišu. [Risku pārskatīšana un apstrāde]({{< relref "/use-cases/risk-review" >}})
- **Darbības ietekmes analīze.** Pakalpojumu pa pakalpojumam, kopā ar īpašnieku; katram pakalpojumam tiek izveidota viena kontrole, kurā fiksēta ietekme laika gaitā un atjaunošanas mērķi. [Darbības ietekmes analīze]({{< relref "/use-cases/business-impact-analysis" >}})
- **Izmaiņu novērtējums.** Plānotu izmaiņu šķirošana un, ja vajag, drošības ietekmes novērtējums izmaiņu padomei. [Izmaiņu pārvaldība]({{< relref "/use-cases/change-management" >}})
- **Iekšējais audits.** Tvērums, dokumentu izvērtēšana, interviju plāns, pierādījumi, konstatējumi un ziņojums. Audita prasme lasa WINGMAN, neko tajā nemainot, un audita darba dokumentus glabā kā Markdown failus mapē, kas paliek auditora rīcībā. [Audits]({{< relref "/use-cases/auditing" >}})

WINGMAN iekšienē **Ask Wingman** ir iebūvēts asistents, kas atveras blakus jebkuram ierakstam. Tas piedāvā prasmes, sagrupētas pa jomām: incidentu komunikācija, risku analīze, audita plāns, vadības pārskats, darbības ietekmes analīze un MI lietojuma izvērtēšana.

Claude prasme ir instrukciju kopums jūsu pašu Claude kontā. Varat uzrakstīt savas prasmes savai metodei, un tās paliek jums.

## Kurš modelis dara darbu

Ja pieslēdzaties ar MCP, modelis ir tas, kas ir jūsu asistentā. To izvēlaties jūs, saskaņā ar savu līgumu ar tā nodrošinātāju.

WINGMAN iekšienē kopsavilkumus, Ask Wingman atbildes un ieteikumus raksta modelis, kas iestatīts jūsu organizācijai. Atkarībā no šīs konfigurācijas tas darbojas mākonī, mākonī ar ierobežojumu tikai uz ES vai pilnībā lokālā izvietojumā, un modeli var nodrošināt Peak Defence. Katrā MI rakstītā kopsavilkumā saglabājas, kurš modelis to uzrakstīja.
