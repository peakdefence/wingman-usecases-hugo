---
title: Es atbildu par drošību, bet nevaru novērtēt, kādā stāvoklī esam
short: Valdei un vadītājam
summary: NIS2 prasa, lai vadības institūcija apstiprina kiberdrošības pasākumus un uzrauga tos. WINGMAN dod skatu, ko varat izlasīt bez tulka, un saglabā ierakstu par to, ko un kad izlēmāt.
weight: 10
slug_id: board
problems:
- q: Es atbildu personīgi, bet nevarētu parādīt, ko esmu darījis.
  a: 'Vadības pārskats ir ieraksts: kas tika iesniegts, ko vadības institūcija izlēma un kad. Katrs lēmums kļūst par uzdevumu, kura izpildi varat redzēt. Tā ir jūsu uzraudzības liecība.'
- q: Es parakstu to, kas atnāk dienu pirms sēdes.
  a: 'Vadības pārskats ir regulārs darbs ar datumu un atbildīgo lomu. Tā materiāli tiek salikti no ierakstiem: iepriekšējie lēmumi, auditu rezultāti, risku izmaiņas, incidenti un piegādātāju sniegums. Tas nav atkarīgs no tā, vai kāds iepriekšējā vakarā sagatavo slaidus.'
- q: Drošību redzu reizi gadā slaidos, kurus nesaprotu.
  a: 'Pārskats ir īss kopsavilkums, ko WINGMAN MI katru rītu uzraksta no ierakstiem, teikumos: kur koncentrējas risks, kas ir nosegts, kam jāpievērš uzmanība. Tajā uzskaitītās nepilnības ved uz ierakstiem aiz tām, tāpēc drošības vadītājs to var pārbaudīt un jūs varat jautāt par jebkuru rindu.'
- q: IT vadītājs saka, ka viss ir kārtībā. Es to nevaru pārbaudīt.
  a: 'Nepilnības ir uzskaitītas konkrēti: riski bez īpašnieka, tiesību aktu prasības, kuru izpildei nekas netiek darīts, uzdevumi, kas kavējas vairāk nekā 30 dienas, dokumenti, ko neviens nav apstiprinājis. Katra ved uz ierakstu un atbildīgo cilvēku. Saraksts ir tik labs, cik labi ir ieraksti, un tos aktuālus uztur regulārās pārskatīšanas.'
- q: Ja mūsu vienīgais drošības cilvēks aiziet, viss aiziet līdzi.
  a: Ieraksti pieder lomām, nevis cilvēkiem. Piešķiriet lomu pēctecim, un riski, kontroles un uzdevumi seko.
- q: Kas notiek, kad kaut kas noiet greizi?
  a: 'Incidenta ieraksts parāda, cik tas ir smags, kādi ziņojumi un līdz kuram laikam jāiesniedz (pēc NIS2: agrīnais brīdinājums 24 stundās un paziņojums 72 stundās) un kas vada reaģēšanu. WINGMAN sagatavo ziņojumu melnrakstus; tos apstiprina un nosūta konkrēts cilvēks.'
terms:
- t: Pārskats
  d: Īss rakstisks kopsavilkums par programmas stāvokli, ko WINGMAN MI katru rītu sagatavo no ierakstiem.
- t: Vadības pārskats
  d: Regulāra sanāksme, kurā vadība izvērtē drošības stāvokli un lemj, ko darīt. Tās protokols tiek saglabāts kā ieraksts.
- t: Kontrole
  d: Tas, ko darāt, lai mazinātu risku vai izpildītu prasību, piemēram, obligāta daudzfaktoru autentifikācija vai administratoru kontu pārskatīšana reizi ceturksnī.
- t: Loma
  d: Atbildība, kas nodalīta no cilvēka, kurš to pilda, piemēram, riska īpašnieks vai incidentu vadītājs. Viens cilvēks var pildīt vairākas lomas.
does:
  knowledge: Jūs lasāt kopsavilkumu, kas uzrakstīts no tiem pašiem ierakstiem, ar kuriem strādā jūsu drošības cilvēki, un tā nepilnības ved uz ierakstu aiz tām.
  projects: Kad sāk attiekties jauns likums vai standarts, darbs kļūst par plānu ar atbildīgo lomu, uzdevumiem un termiņiem. Tā gaitu varat redzēt, nevienam nejautājot.
  regular: Vadības pārskats notiek jūsu noteiktajā ritmā (mūsu piemērā reizi ceturksnī). Lēmumi tiek ierakstīti protokolā, katrs kļūst par uzdevumu ar īpašnieku, un neizpildītie tiek iekļauti nākamajā pārskatā.
  events: Incidentam ir tā termiņi, ziņojumu melnraksti un turpmākie uzdevumi. Pēc tam ieraksts parāda, kas un kad tika izdarīts.
prompt:
  title: Kādā stāvoklī esmu kā atbildīgā persona?
  lede: Tā uzdod septiņus jautājumus pa vienam un pēc tam pasaka, kādā stāvoklī esat, kādus lēmumus pieprasīt un ko jums vajadzētu spēt parādīt.
  text: |-
    Tu konsultē uzņēmuma vadītāju vai valdes locekli bez tehniskas izglītības, kurš atbild par kiberdrošību (piemēram, saskaņā ar NIS2 vai DORA). Atbildi latviski.

    Uzdod man tālāk minētos jautājumus pa vienam un gaidi katru atbildi. Neprasi uzņēmuma nosaukumu vai konfidenciālu informāciju.
    1. Ar ko organizācija nodarbojas, cik tajā ir cilvēku un kurš likums vai klients padara drošību par tavu atbildību?
    2. Kurš ikdienā rūpējas par drošību, un vai tas ir viņa vienīgais darbs?
    3. Kad vadība pēdējoreiz formāli izskatīja drošību, un kas tika izlemts?
    4. Kurus drošības dokumentus, ja tādi ir, tu pēdējā gada laikā esi personīgi apstiprinājis?
    5. Ja šonakt sāktos nopietns incidents, kam zvanītu un kurš izlemtu, vai jāziņo iestādei?
    6. Kā tu šodien uzzinātu, vai saskaņotie pasākumi tiešām tiek pildīti?
    7. Kas notiek, ja 2. jautājumā minētais cilvēks aiziet?

    Pēc tam sniedz man:
    - Kādā stāvoklī esmu, piecos vienkāršos teikumos.
    - Trīs lēmumus, kas man jāpieprasa nākamajā vadības sēdē.
    - Piecus jautājumus cilvēkam, kurš rūpējas par drošību.
    - Ko man vajadzētu spēt parādīt, ja kāds jautātu, kā es uzraudzīju drošību.
    - Cik stundu ceturksnī man tam jārēķinās veltīt un no kā tas atkarīgs.
    Skaidri norādi, kur atbilde ir atkarīga no nacionālajiem tiesību aktiem, kas man jāpārbauda. Neizdomā juridiskas prasības.
    Visu atbildi ietilpini vienā lappusē.
media:
- brief-top
- brief-gaps
- task-overdue
yours:
- Pasākumu un protokola apstiprināšana. WINGMAN sagatavo materiālus un protokola melnrakstu; apstiprina vadības institūcija.
- Lēmumi par to, kurus riskus pieņemt un ko finansēt.
- Jūsu pašu apmācība. WINGMAN reģistrē, kurš ir apmācīts un kurš iepazinies ar politiku; pašu kursu tas nenodrošina.
ask:
- Cik tas maksā naudā un jūsu cilvēku laikā
- Kur tiek glabāti dati un kuri MI pakalpojumi tos redz
- Kuras jūsu lieluma un nozares organizācijas to izmanto
use_cases:
- management-review
- roles-raci
- incident-handling
sectors:
- nis2
- financial
next:
  title: Apskatiet vadības skatu piemērā
  text: Varam izrādīt Pārskatu un vadības pārskatu uz izdomāta uzņēmuma ar reālistiskiem ierakstiem vai ar jūsu pašu ierakstiem.
  ask: '30 minūšu demonstrācija: Pārskats un vadības pārskats uz izdomāta uzņēmuma piemēra'
---
