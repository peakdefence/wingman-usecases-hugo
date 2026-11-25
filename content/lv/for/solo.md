---
title: Par drošību rūpējos viens, līdztekus citam darbam
short: Valsts iestādēm un vienam cilvēkam
summary: Jūs esat kiberdrošības pārvaldnieks, incidentu vadītājs un risku koordinators, un jums ir arī cits darbs. WINGMAN uztur reģistrus, ko prasa Nacionālās kiberdrošības likums, un sagatavo ziņojumus no tiem, lai tie nebūtu katru reizi jāraksta no nulles.
weight: 40
slug_id: solo
problems:
- q: Pašvērtējuma ziņojumu katru reizi rakstu no nulles.
  a: Ziņojums NKDC tiek sagatavots no aktuālajiem ierakstiem katru reizi, kad tas jāiesniedz, tāpēc tas balstās uz tās dienas datiem. Katrai prasībai tas uzskaita kontroles, to statusu un derīgos pierādījumus un ierosina novērtējumu ar pamatojumu. Katras prasības novērtējums saglabājas, tāpēc nākamais ziņojums parāda, kas mainījies.
- q: Piektdiena, 16.40. Vai šis incidents ir nozīmīgs?
  a: MK noteikumu Nr. 397 prasības ir ielādētas kā ieraksti. WINGMAN ierosina klasifikāciju pēc to kritērijiem ar pamatojumu, seko termiņiem un no incidenta ieraksta sagatavo katra CERT.LV iesniedzamā ziņojuma melnrakstu. Izlemjat un nosūtāt jūs.
- q: Nepārtrauktības plāns ir vienreiz apstiprināts un nekad nav pārbaudīts.
  a: Darbības ietekmes analīze katram pakalpojumam fiksē, cik ilgi tas drīkst nedarboties un kāda atjaunošana tam vajadzīga. Atjaunošanas testi ir uzdevumi ar datumiem, un to rezultāti tiek glabāti kā pierādījumi, tāpēc uz jautājumu „kad tas pēdējoreiz pārbaudīts” ir atbilde.
- q: Nekas man neatgādina. Uzzinu, ka piekļuves pārskatīšanai bija jānotiek martā.
  a: Vienā plānā ir visas regulārās pārskatīšanas ar to ritmu. Uzdevumi nonāk pie sistēmu īpašniekiem, pie kavētajiem norādīts atbildīgais, un atgādinājumi tiek sūtīti jūsu vārdā pēc tam, kad tos apstiprināt.
- q: Vadība man atvēl desmit minūtes sēdes beigās.
  a: Apstiprināšanas materiāli tiek sagatavoti no ierakstiem, un protokola melnraksts top no jūsu piezīmēm. Lēmumi kļūst par uzdevumiem ar īpašniekiem, un neizpildītie tiek iekļauti nākamajā pārskatā.
- q: Visur rakstīts par CISO, incidentu vadītāju un riska īpašnieku. Tas viss esmu es.
  a: Lomas ir nodalītas no cilvēkiem, un viens cilvēks var pildīt vairākas. Ierakstā redzams arī, kurā lomā lēmums pieņemts, tāpēc pienākumus vēlāk var sadalīt, neko nepārbūvējot.
- q: Mani piegādātāji ir līgumu saraksts Excel.
  a: Piegādātājs ir ieraksts, kas sasaistīts ar pakalpojumiem, ko tas nodrošina, līgumu, novērtēšanas datumu un riskiem, kuros tas iesaistīts. Kad piegādātāja paziņojums par incidentu ir reģistrēts kā signāls, saites parāda, kurus pakalpojumus tas skar.
- q: Neesmu pārliecināts, vai šos datus drīkstam nodot mākoņpakalpojumā izvietotam MI.
  a: 'Modelis, kas raksta kopsavilkumus, ieteikumus un Ask Wingman atbildes, tiek iestatīts jūsu organizācijai: mākonī, mākonī ar ierobežojumu tikai uz ES vai pilnībā lokālā izvietojumā, un modeli var nodrošināt Peak Defence.'
terms:
- t: Signāls
  d: 'Pazīme, ka kaut kas mainās: monitoringa brīdinājums, skenera rezultāts, piegādātāja paziņojums, brīdinājums par apdraudējumu vai kolēģa ziņojums.'
- t: Loma
  d: Atbildība, kas nodalīta no cilvēka, kurš to pilda, piemēram, riska īpašnieks vai incidentu vadītājs. Viens cilvēks var pildīt vairākas lomas.
- t: Kontrole
  d: Tas, ko darāt, lai mazinātu risku vai izpildītu prasību, piemēram, obligāta daudzfaktoru autentifikācija vai administratoru kontu pārskatīšana reizi ceturksnī.
- t: Pierādījums
  d: 'Apliecinājums, ka kontrole tiešām notikusi: ieraksts, ekrānuzņēmums, žurnāla izraksts. Tam ir datums, un tā derīgums beidzas.'
does:
  knowledge: Likuma tvērumā esošie pakalpojumi, sistēmas un piegādātāji, no kuriem tie atkarīgi, riski, incidenti un prasības ir sasaistīti reģistri. Prasības tiek ielādētas, kad izvēlaties ietvaru; katra ir ieraksts, kas sasaistīts ar ieviestajām kontrolēm.
  projects: Risku intervija vai darbības ietekmes analīze notiek pa vienam jautājumam kopā ar pakalpojuma īpašnieku. Viņa teiktais kļūst par ierakstiem, ko viņš apstiprina.
  regular: Pārskatīšanas notiek pēc kalendāra. Ir redzams, kuriem pierādījumiem beidzas derīguma termiņš. Pašvērtējuma ziņojums un vadības pārskats tiek sagatavoti no ierakstiem.
  events: Brīdinājumi, paziņojumi un ziņojumi ienāk kā signāli. Katrs tiek izvērtēts, un vajadzības gadījumā tiek izveidots incidenta ieraksts. Nozīmīgam incidentam ir tā ziņojumi un termiņi, un incidenti kopā veido kiberincidentu žurnālu.
prompt:
  title: Kas man jāizpilda pēc likuma un kas trūkst?
  lede: Tā jautā par jūsu pienākumiem un reģistriem un pēc tam sniedz to, kas trūkst, un divpadsmit mēnešu kalendāru dažām stundām nedēļā.
  text: |-
    Tu palīdzi kiberdrošības pārvaldniekam, kurš strādā viens un drošībai var veltīt tikai daļu laika, organizācijā, uz kuru attiecas Nacionālās kiberdrošības likums. Atbildi latviski.

    Uzdod man tālāk minētos jautājumus pa vienam un gaidi katru atbildi. Atbildes būs vispārīgas; neprasi organizācijas nosaukumu, sistēmu nosaukumus, IP adreses, personu vārdus vai ievainojamību detaļas.
    1. Kāda veida organizācija tā ir, cik tajā ir cilvēku un kuri likumi un noteikumi uz to attiecas?
    2. Kādus pienākumus ar termiņiem tu zini (pašvērtējums, kiberrisku pārvaldības un darbības nepārtrauktības plāns, ziņošana par incidentiem, audits)?
    3. Kādi reģistri šodien pastāv un kādā formā (pakalpojumi, sistēmas, piegādātāji, riski, incidenti)?
    4. Kādām regulārām pārbaudēm būtu jānotiek, un kuras pēdējā gada laikā tiešām notika?
    5. Kurš no vadības ir atbildīgs, un kad viņš pēdējoreiz kaut ko izlēma?
    6. Ko tu darītu pirmajā stundā, ja būtu aizdomas par nozīmīgu incidentu?

    Pēc tam sniedz man:
    - Manu pienākumu sarakstu, kā es tos aprakstīju, katram norādot, kas pastāv un kas trūkst.
    - Kalendāru nākamajiem divpadsmit mēnešiem, pa mēnešiem, rēķinoties ar dažām stundām nedēļā.
    - Ko prasīt vadībai, vienā lappusē.
    - Pirmās stundas kontrolsarakstu incidentam.
    Tu nezini spēkā esošo tiesību aktu redakciju. Nenorādi termiņus vai kritērijus kā faktus; pie katra atzīmē „pārbaudīt normatīvajā aktā” un pasaki, kurā dokumentā.
media:
- task-calendar
- plan-activities
- brief-gaps
yours:
- 'Katrs lēmums un paraksts: klasifikācija, ziņojums, riska pieņemšana.'
- Normatīvo aktu interpretācija. Pārbaudiet prasību tekstus un termiņus pēc spēkā esošā likuma un noteikumiem.
- Panākt, lai īpašnieki atbild. WINGMAN nosūta uzdevumu un atgādinājumu; kolēģa vietā tas neatbildēs.
ask:
- Jūsu esošo Word un Excel failu imports
- Kādu MI konfigurāciju jūs ieteiktu valsts iestādei
- Kur tiek glabāti dati
- Cena, licences vienība un kā tas iekļaujas iepirkuma procedūrā
- Cik stundas mēnesī tas prasa vienam cilvēkam
use_cases:
- regular-reviews
- incident-handling
- management-review
- business-impact-analysis
- supplier-evaluation
sectors:
- nis2
next:
  title: Apskatiet, kā pašvērtējuma ziņojums top no ierakstiem
  text: Varam parādīt ziņojumu un incidenta ziņojuma melnrakstu uz izdomātas organizācijas piemēra, latviešu valodā.
  ask: Pašvērtējuma ziņojuma un CERT.LV incidenta ziņojuma melnraksta piemērs latviešu valodā uz izdomātas organizācijas datiem
---
