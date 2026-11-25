---
title: Es auditēju, un katram apgalvojumam jābūt izsekojamam līdz pierādījumam
short: Ko redz auditors
summary: Iekšējiem un piegādātāju auditoriem, kas strādā ar WINGMAN, un sertifikācijas auditoriem, kas to redz uz auditējamā ekrāna. Šī lapa pasaka, ko rāda ieraksti, ko dara MI un ko tas nedara.
weight: 50
slug_id: auditor
problems:
- q: Katru auditu sāku akli, ar PDF mapi.
  a: Pirms audita uz vietas dokumenti tiek izlasīti pret tvēruma prasībām. Katra prasība ir atzīmēta kā dokumentēta, daļēji dokumentēta vai nedokumentēta, ar atsaucēm uz punktiem. Nelasāmi dokumenti tiek atzīmēti.
- q: MI pārliecinoši atsaucas uz nepareizo punktu.
  a: Katrai sasaistei ir atsauce uz punktu, un katram dokumentam ir versija, tāpēc varat atvērt dokumentu un pārbaudīt. Sasaiste ir ierosinājums, un auditors to pārskata. Atsauču pārbaude paliek auditora darbs.
- q: Intervijā apsolītie pierādījumi nekad neatnāk.
  a: Apsolītie pierādījumi tiek izsekoti ar termiņu, tāpēc ziņojuma dienā trūkstošais ir saraksts, nevis atmiņa.
- q: Kopsavilkumā pazuda atruna, kas bija svarīga.
  a: Intervijas tiek transkribētas, un transkripts tiek glabāts kā pierādījums, kad intervētais apstiprina, ka tas ir precīzs. Konstatējums var uz to atsaukties, tāpēc sākotnējie vārdi ir pieejami, ja kopsavilkums tiek apstrīdēts.
- q: Redzu gludas politikas, ko neviens neievēro.
  a: 'Dokuments parāda deklarēto kontroli. Pierādījums parāda, vai tā darbojas: tajā ir, kas, kad un kurš to ievācis un līdz kuram laikam tas ir derīgs. Pierādījums ar beigušos termiņu neskaitās.'
- q: Kurš to izlēma, un uz kāda pamata?
  a: MI izmaiņas ienāk kā ieteikumi ar pamatojumu. Konkrēts cilvēks katru pieņem vai noraida, un līdz tam nekas netiek ierakstīts. Konstatējumiem un secinājumiem šis cilvēks ir auditors. Konstatējums norāda pierādījumus, uz kuriem tas balstās.
- q: Viena prasība, trīs produkti, trīs dažādas atbildes.
  a: 'Auditam var būt vairāki tvērumi. Katra kontrole aizsargā savu produktu, pierādījumi tiek vākti katram tvērumam, un katrs secinājums saglabā savu tvērumu: atbilstība vienam produktam, neatbilstība citam.'
terms:
- t: Deklarētā kontrole
  d: Tas, ko organizācijas dokumenti apgalvo, ka tā dara. Vai tas tiek darīts, ir atsevišķs jautājums, uz kuru atbild pierādījums.
- t: Pierādījums
  d: 'Apliecinājums, ka kontrole tiešām notikusi: ieraksts, ekrānuzņēmums, žurnāla izraksts. Tam ir datums, un tā derīgums beidzas.'
- t: Konstatējums un secinājums
  d: 'Konstatējums ir audita laikā fiksēts novērojums. Kad auditors to apstiprina, secinājums ir rezultāts šai prasībai: atbilstība vai neatbilstība.'
- t: Prasme
  d: Procedūra, ko jūsu MI asistents soli pa solim izpilda ar jūsu WINGMAN ierakstiem, piemēram, risku intervija vai audits. Tā darbojas asistentā, ko jau lietojat, piemēram, Claude.
does:
  knowledge: Prasība, deklarētā kontrole, dokuments, pierādījums, konstatējums un secinājums ir atsevišķi sasaistīti ieraksti. Ziņojuma apgalvojumam var izsekot līdz tam, uz ko tas balstās, visur, kur šāda saite ir izveidota, un konstatējumam jānorāda savi pierādījumi.
  projects: Audita prasme iet cauri tvērumam, deklarētajām kontrolēm, plānam un intervijām, pierādījumiem, konstatējumiem un secinājumiem. Prasību saraksts nāk no WINGMAN vai no jūsu pašu kontrolsaraksta.
  regular: Audita programma ir gada plānā. Korektīvās darbības ir uzdevumi ar īpašniekiem un termiņiem, un pagājušā gada konstatējumam var izsekot līdz uzdevumam, pierādījumam un secinājumam.
  events: Audita periodā notikušie incidenti un izmaiņas ir ieraksti ar datumiem, pieejami izlasei tāpat kā jebkuri citi.
prompt:
  title: Pārbaudiet MI dokumentu izvērtējumu, pirms uz to paļaujaties
  text: |-
    Tu palīdzi vadošajam auditoram, kurš strādā saskaņā ar ISO 19011. Auditors vēlas redzēt, cik tālu var uzticēties MI veiktam dokumentu izvērtējumam. Atbildi latviski.

    Es ielīmēšu vienu politiku vai procedūru bez nosaukumiem un vārdiem un pēc tam īsu prasību sarakstu (piemēram, piecas ISO 27001 A pielikuma kontroles).

    Katrai prasībai sniedz tabulas rindu ar:
    - Vērtējumu: dokumentēta, daļēji dokumentēta vai nedokumentēta.
    - Precīziem dokumenta vārdiem, kas pamato vērtējumu, citējot, ar sadaļas vai punkta numuru, kāds tas ir dokumentā.
    - Ko dokuments apgalvo, ka tiek darīts, vienā teikumā.
    - Kāds pierādījums parādītu, ka tas tiešām tiek darīts, un jautājumu, kas man jāuzdod intervijā.

    Noteikumi:
    - Citē tikai tekstu, kas ir dokumentā. Ja nevari citēt, vērtējums ir „nedokumentēta”.
    - Nekad neizsecini kontroli no dokumenta vispārējā toņa.
    - Atzīmē katru atrunu („vajadzētu”, „ja iespējams”, „plānots”) un pasaki, kā tā vājina apgalvojumu.
    - Nevērtē, vai kontrole darbojas; dokuments to nevar parādīt.

    Nobeigumā nosauc trīs atsauces, kuras man vispirms jāpārbauda ar roku, un kāpēc.
media:
- risk-accept-2-accepted
- ctl-detail
- doc-list
yours_title: Ko WINGMAN nedara
yours_lede: Pateikts skaidri, jo tie ir auditora spriedumi.
yours:
- Tas neizlemj, kas ir pierādījums. Auditējamais apstiprina, ka transkripts vai ekrānuzņēmums atspoguļo teikto vai parādīto; vai ar to pietiek, vērtē auditors.
- Tas neizvēlas izlasi. Tas ierosina izlases katram tvērumam; izlasi veic auditors.
- Tas neizdara secinājumus. Tas sagatavo konstatējumu melnrakstus un ierosina smagumu; auditors katru apstiprina vai maina.
- Tas neparāda, ka kontrole darbojas. Saite starp ierakstiem parāda, ka kāds to ir deklarējis; tikai pierādījums parāda, ka tā notikusi.
- Tas neatrisina piekrišanu. Intervijas ierakstīšanai vai transkribēšanai vajadzīga tās dalībnieku piekrišana.
ask:
- Tikai lasāma piekļuve ārējam auditoram
- Kā tiek iestatīti datumi ierakstos un vai ieraksta vēsturi var mainīt
- Kā tiek atzīmēts MI sagatavots teksts pēc tam, kad cilvēks to pieņēmis
- Audita darba dokumentu eksports
- Kā tiek nodalīti viena auditora klienti
- Kur tiek glabāti dati un kurš MI modelis apstrādā dokumentus
use_cases:
- auditing
- audit-scopes
- supplier-evaluation
sectors:
- iso27001-soc2
next:
  title: Izsekojiet vienai prasībai no apgalvojuma līdz secinājumam
  text: 'Varam izrādīt auditu ar izdomāto uzņēmumu: viena prasība, tās deklarētā kontrole, pierādījums, konstatējums un secinājums.'
---
