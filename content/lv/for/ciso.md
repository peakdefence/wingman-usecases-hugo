---
title: Mūsu reģistri pamazām atšķiras, un risku reģistrs mainās tikai pirms audita
short: Drošības vadītājiem
summary: Programma darbojas, bet tā balstās uz izklājlapām, atgādinājumiem un jūsu atmiņu vai uz atbilstības rīku, kas netiek tālāk par savām veidnēm. WINGMAN uztur reģistrus kā vienus sasaistītus ierakstus, kurus jūsu MI asistents lasa un kuriem ierosina izmaiņas, un maina tos tad, kad kaut kas notiek, nevis tad, kad tuvojas audits.
weight: 30
slug_id: ciso
problems:
- q: Nedēļu pirms audita es ar roku saskaņoju reģistrus.
  a: 'Reģistru pārbaudes aptver visus ierakstus, nevis izlasi: riski bez īpašnieka vai vērtējuma, prasības bez kontroles, kontroles bez derīga pierādījuma, uzdevumi, kas kavējas vairāk nekā 30 dienas. Katra nepilnība ved uz ierakstiem aiz tās.'
- q: Ja es aizietu, neviens cits to nevarētu vadīt.
  a: Riski, kontroles, aktīvi un plāni pieder lomām. Piešķiriet lomu pēctecim, un katrs ieraksts seko līdz ar uzdevumiem un pierādījumiem.
- q: Pārskatīšanas notiek tad, kad atceros tās pieprasīt.
  a: Plāns veido pārskatīšanas uzdevumus savā ritmā, pa vienam katram riskam, aktīvam vai politikai. Kavētie ir uzskaitīti ar izpildītāja vārdu, un atgādinājumi tiek sūtīti jūsu vārdā pēc tam, kad tos apstiprināt.
- q: Skeneru atradumi nekad nenonāk risku reģistrā.
  a: Ievainojamības ienāk no skeneriem un ielaušanās testu rīkiem ar CVE, CVSS un EPSS, sasaistītas ar aktīviem, kuros tās atrodas, un riskiem, ko tās palielina. Novēršanu sakārto pēc riska kritiskajiem aktīviem, ne tikai pēc skenera smaguma.
- q: Incidenti notiek, bet vērtējumi paliek, kādi bija.
  a: Incidents ir sasaistīts ar risku, kas īstenojies. Nākamā šī riska pārskatīšana sākas ar to, kas mainījies kopš iepriekšējās, un ar ierosinātu vērtējuma maiņu ar pamatojumu.
- q: Mani MI darba procesi katru sarunu sāk ar iekopētu kontekstu.
  a: Tādi asistenti kā Claude un ChatGPT pieslēdzas WINGMAN ar MCP un strādā ar ierakstiem. Prasme nolasa to, kas tur ir, ierosina izmaiņas un atstāj rezultātu nākamajam solim, tāpēc reģistrs nav jākopē sarunā.
- q: Es nevaru ļaut aģentam bez uzraudzības rakstīt reģistrā.
  a: Izmaiņas ienāk kā ieteikumi ar pamatojumu. Cilvēks katru pieņem vai izlaiž, un nekas netiek ierakstīts, kamēr pārskatīšana nav pabeigta.
- q: Mani piegādātāji ir citā izklājlapā.
  a: Piegādātājs ir ieraksts, kas sasaistīts ar pakalpojumiem, ko tas nodrošina, līgumu un izejas plānu, novērtēšanas datumu un riskiem. Finanšu sektora uzņēmumiem tas ir DORA informācijas reģistra pamats.
terms:
- t: Prasme
  d: Procedūra, ko jūsu MI asistents soli pa solim izpilda ar jūsu WINGMAN ierakstiem, piemēram, risku intervija vai audits. Tā darbojas asistentā, ko jau lietojat, piemēram, Claude.
- t: MCP
  d: Atvērts standarts, kas ļauj MI asistentam izmantot rīkus un datus. Ar to Claude vai ChatGPT pieslēdzas WINGMAN.
- t: Signāls
  d: 'Pazīme, ka kaut kas mainās: monitoringa brīdinājums, skenera rezultāts, piegādātāja paziņojums, brīdinājums par apdraudējumu vai kolēģa ziņojums.'
- t: Pārskats
  d: Īss rakstisks kopsavilkums par programmas stāvokli, ko WINGMAN MI katru rītu sagatavo no ierakstiem.
- t: Reģistra pārbaude
  d: Noteikums, ko WINGMAN piemēro katram ierakstam, lai atrastu nepilnības, piemēram, risku bez īpašnieka vai kontroli bez derīga pierādījuma.
does:
  knowledge: Katrs ieraksts eksistē vienreiz. Kontrole ir sasaistīta ar riskiem, ko tā mazina, punktiem, ko tā izpilda, un pierādījumiem, kas to pierāda, tāpēc reģistri nevar pamazām atšķirties. Tie joprojām var būt kļūdaini, un tam ir vajadzīgas pārskatīšanas. Jūsu datus var eksportēt.
  projects: Izvēlieties ietvaru, un tā prasības tiek ielādētas kā ieraksti, vai pievienojiet atsevišķas prasības, piemēram, līguma punktu. Katra tiek sasaistīta ar kontrolēm, kas jums jau ir. Viena kontrole var derēt vairākiem standartiem; atlikušais ir nepilnība.
  regular: Aktīvu, risku, dokumentu, piekļuves un piegādātāju pārskatīšanas notiek pēc kalendāra. Pierādījumam ir derīguma termiņš, un par tā beigām tiek brīdināts iepriekš. Vadības pārskata materiāli tiek salikti no ierakstiem.
  events: Skenera rezultāts, piegādātāja paziņojums vai brīdinājums par apdraudējumu ienāk kā signāls. WINGMAN to klasificē, parāda, ko tas skar, un ierosina risku, incidentu vai uzdevumus; īpašnieks pieņem vai noraida.
prompt:
  title: Kur mana programma balstās uz atmiņu?
  lede: Tā jautā par jūsu reģistriem un MI lietošanu un pēc tam parāda, kur programma balstās uz atmiņu un kur reģistri var būt pretrunā.
  text: |-
    Tu esi kolēģis recenzents drošības vadītājam, kurš vada izveidotu drošības un atbilstības programmu. Runā tieši. Atbildi latviski.

    Uzdod man tālāk minētos jautājumus pa vienam un gaidi katru atbildi. Neprasi uzņēmuma nosaukumu vai konfidenciālu informāciju.
    1. Kādus reģistrus tu uzturi (riski, kontroles, aktīvi, piegādātāji, pierādījumi, incidenti), un kādos rīkos?
    2. Kad risku reģistrs pēdējoreiz mainījās ārpus gatavošanās auditam, un kas to izraisīja?
    3. Kā skenera atradums vai piegādātāja paziņojums par incidentu šodien nonāk līdz riska vērtējumam?
    4. Kādas regulāras pārskatīšanas pastāv, un kā tu uzzini, ka kāda ir izlaista?
    5. Ja tevis nebūtu trīs mēnešus, ko tavs vietnieks nespētu izdarīt?
    6. Kur šajā darbā lieto MI asistentus, ko tie lasa un raksta un ko saglabā asistenta nodrošinātājs?
    7. Kā tu šodien atbildi uz klientu drošības anketām?

    Pēc tam sniedz man:
    - Vietas, kur programma ir atkarīga no viena cilvēka atmiņas.
    - Vietas, kur divi reģistri var būt pretrunā, un kā es to pamanītu.
    - Trīs notikumus, kam būtu jāmaina riska vērtējums, bet kas to pašlaik nemaina.
    - Katram MI lietojumam: ko apstiprina cilvēks un kur šis apstiprinājums ir fiksēts.
    - Trīs izmaiņas ar lielāko ietekmi par mazāko darbu.
    - Kurus valdes rādītājus es apkopoju ar roku.
    Nepilnības sniedz tabulā, ko varu ielīmēt izklājlapā. Neiesaki produktus.
media:
- brief-gaps
- task-review-start
- vuln-detail
- risk-detail
yours:
- 'Lēmumi par riskiem: vērtējumus, apstrādi un pieņemšanu apstiprina riska īpašnieks.'
- Šķirošanas lēmums. WINGMAN ierosina klasifikāciju ar ticamības vērtējumu; izlemj cilvēks.
- Tas, kas tiek nosūtīts. Ziņojumi un atgādinājumi tiek sagatavoti un nosūtīti pēc tam, kad tos apstiprināt.
ask:
- Imports no jūsu izklājlapām un eksporta formāti
- Kuri skeneri, mākoņplatformas un uzdevumu sistēmas ir savienojamas
- Datu glabāšanas vieta, apakšapstrādātāji un kurš MI modelis redz datus
- API un MCP rīku saraksts
- Cena un iespēja izmēģināt bez sarunas
use_cases:
- security-operations
- regular-reviews
- risk-review
- vulnerability-impact
- supplier-evaluation
sectors:
- iso27001-soc2
- financial
next:
  title: Apskatiet to ar saviem reģistriem
  text: Varam izrādīt reģistru pārbaudes, riska pārskatīšanu un ievainojamību ar jūsu pašu ierakstiem.
  ask: Reģistru pārbaužu, riska pārskatīšanas un ievainojamības demonstrācija uz izdomāta uzņēmuma piemēra
---
