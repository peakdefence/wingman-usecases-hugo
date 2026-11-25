---
title: Klients prasa ISO 27001, bet mums nav drošības komandas
short: Sākt no nulles
summary: Lai sāktu, nav vajadzīga drošības nodaļa. Jāzina darbu secība un vajadzīga viena vieta, kur glabājas katrs rezultāts, lai nākamais solis balstītos uz iepriekšējo.
weight: 20
slug_id: start
problems:
- q: Es nezinu, ar ko sākt.
  a: 'Prasme ir procedūra, ko jūsu MI asistents, piemēram, Claude, soli pa solim izpilda, būdams pieslēgts WINGMAN. Ieviešanas prasme iet cauri noteiktiem posmiem, kurus var pārtraukt un turpināt: jūsu konteksts, prasības, dokumenti, risku darbnīca (intervija par to, kas var noiet greizi), kontroles un ceļa karte. Katrs posms atstāj ierakstus, ko izmanto nākamais.'
- q: Es nezinu terminus, un ir neērti jautāt.
  a: Asistents uzdod vienu jautājumu pēc otra vienkāršiem vārdiem un paskaidro terminu, kad tas vajadzīgs. Tie daži, bez kuriem neiztikt, ir zemāk.
- q: Baidos, ka beigās būs mape ar politikām, ko neviens neievēro.
  a: Politika ir sasaistīta ar kontrolēm, ko tā apraksta, un kontrolei vajadzīgs pierādījums, ka tā notikusi. Kontrole bez derīga pierādījuma parādās kā nepilnība, tāpēc papīrs bez prakses jums ir redzams, pirms to ierauga auditors.
- q: Tas viss gulstas uz mani, papildus manam darbam.
  a: Asistents sagatavo, jūs apstiprināt. Regulārie darbi, piemēram, piekļuves pārskatīšana vai piegādātāju pārbaudes, kļūst par uzdevumiem cilvēkiem, kas šīs sistēmas uztur, ar atgādinājumiem, tāpēc viss nav jāatceras jums.
- q: Mans lielākais klients atsūtīja drošības anketu un līguma punktu.
  a: Klienta prasība ir tāds pats ieraksts kā citas. Līguma punkts ir sasaistīts ar kontroli, kas to izpilda, un ar atbilstošajiem standarta punktiem, tāpēc viena kontrole atbild gan klientam, gan auditoram. Šajā vietnē nav parādīts rīks, kas anketu aizpildītu jūsu vietā.
terms:
- t: IDVS
  d: 'Informācijas drošības pārvaldības sistēma (angliski ISMS). To sertificē ISO 27001: kā uzņēmums lemj par drošību, to īsteno un pārbauda. Tā nav programmatūra.'
- t: Prasme
  d: Procedūra, ko jūsu MI asistents soli pa solim izpilda ar jūsu WINGMAN ierakstiem, piemēram, risku intervija vai audits. Tā darbojas asistentā, ko jau lietojat, piemēram, Claude.
- t: Kontrole
  d: Tas, ko darāt, lai mazinātu risku vai izpildītu prasību, piemēram, obligāta daudzfaktoru autentifikācija vai administratoru kontu pārskatīšana reizi ceturksnī.
- t: Piemērojamības paziņojums
  d: Standarta kontroļu saraksts, kurā norādīts, kuras uz jums attiecas, kāpēc, un vai tās ir ieviestas.
- t: Pierādījums
  d: 'Apliecinājums, ka kontrole tiešām notikusi: ieraksts, ekrānuzņēmums, žurnāla izraksts. Tam ir datums, un tā derīgums beidzas.'
- t: Loma
  d: Atbildība, kas nodalīta no cilvēka, kurš to pilda, piemēram, riska īpašnieks vai incidentu vadītājs. Viens cilvēks var pildīt vairākas lomas.
does:
  knowledge: Sāciet no tā, kas jums jau darbojas. Produkti, sistēmas, dati un piegādātāji kļūst par aktīviem ar īpašniekiem; tvēruma apraksts tiek sagatavots no tiem.
  projects: Jūs izvēlaties ietvaru, un tā prasības tiek ielādētas kā ieraksti. Tās tiek salīdzinātas ar to, ko jau darāt, pēc tā, ko pastāstāt asistentam, un pēc jūsu esošajiem dokumentiem. Katra ir atzīmēta kā nosegta, daļēji nosegta vai atvērta; atvērtās kļūst par ieviešamām kontrolēm, uzdevumiem un plānu.
  regular: Pārskatīšanu kalendārs tiek veidots no prasībām, kas tās paredz. Īpašnieki saņem uzdevumus un atgādinājumus; jūs redzat, kas kavējas un kam tas pieder.
  events: Ikviens var ziņot par kaut ko aizdomīgu. Aprakstiet sarunā, kas noticis, un WINGMAN sagatavo incidenta ierakstu kā ieteikumu, ko apstiprina cilvēks.
prompt:
  title: Ar ko sākt ISO 27001?
  lede: Tā jautā par jūsu uzņēmumu un klienta termiņu un pēc tam sniedz tvērumu, darbus pēc kārtas un lēmumus, ko varat pieņemt tikai jūs.
  text: |-
    Tu esi pieredzējis ISO 27001 ieviesējs un palīdzi tehniskam uzņēmuma dibinātājam bez drošības pieredzes. Lieto vienkāršus vārdus un paskaidro katru terminu, kad to lieto pirmo reizi. Atbildi latviski.

    Uzdod man tālāk minētos jautājumus pa vienam un gaidi katru atbildi. Neprasi uzņēmuma nosaukumu vai konfidenciālu informāciju.
    1. Ko uzņēmums veido vai uztur, un cik tajā ir cilvēku?
    2. Kurš pieprasīja ISO 27001, un līdz kuram laikam?
    3. Kur darbojas produkts (kurš mākonis, kuri galvenie pakalpojumi), un kā cilvēki autentificējas?
    4. Kādas drošības prakses jau pastāv, kaut neformāli (piekļuves pārskatīšana, rezerves kopijas, koda pārskatīšana, darbinieku pieņemšana un atbrīvošana)?
    5. Kuri ārējie uzņēmumi, ja tie pieviltu, varētu apturēt produktu vai atklāt klientu datus?
    6. Kurš bez tevis varētu tam veltīt dažas stundas nedēļā?
    7. Ja klients atsūtīja drošības anketu, ielīmē trīs tās jautājumus.

    Pēc tam sniedz man:
    - Ierosinātu tvērumu divos teikumos.
    - Darbus pēc kārtas, sešos līdz astoņos soļos, katram norādot, ko tas rada un kas ir vajadzīgs.
    - Ko varu izmantot no tā, kas jau pastāv.
    - Piecus lēmumus, ko varu pieņemt tikai es.
    - Ko sertifikācijas auditors lūgs parādīt.
    - Vai NIS2 varētu attiekties uz šādu uzņēmumu, un kas jāpārbauda.
    Norādi ilguma un iekšējo darba stundu diapazonu, kas šāda lieluma uzņēmumam parasti vajadzīgs, un pasaki, no kā tie ir atkarīgi. Cenas nenosauc. Politikas vēl neraksti.
media:
- ask-scope
- plans-list
- doc-list
yours:
- Lēmumi. Asistents var sagatavot tvērumu, risku vai politiku; kādam, kas pazīst uzņēmumu, jāapstiprina, ka tā ir taisnība.
- Kontroļu izpilde. WINGMAN seko, ka rezerves kopiju tests ir noticis, un glabā tā pierādījumu; pašu testu tas neveic.
- Sertifikācijas audits. To veic akreditēta sertifikācijas institūcija saskaņā ar atsevišķu līgumu ar jums.
ask:
- Cik ilgi tas aizņem un cik maksā jūsu lieluma uzņēmumam
- Cik daudz jūsu inženieru laika tas prasa
- Vai pieredzējis cilvēks pa ceļam pārskata jūsu lēmumus
- Ar kurām jūsu sistēmām tas savienojas
- Atbildes uz klientu drošības anketām no ierakstiem
use_cases:
- new-requirements
- risk-identification
- regular-reviews
- auditing
sectors:
- iso27001-soc2
- nis2
next:
  title: Apskatiet pirmo posmu jums līdzīgā uzņēmumā
  text: Varam izrādīt ieviešanas sākumu uz izdomāta programmatūras uzņēmuma ar reālistiskiem ierakstiem vai sākt ar jūsu pašu tvērumu.
  ask: Pirmā ieviešanas posma demonstrācija uz izdomāta programmatūras uzņēmuma piemēra
---
