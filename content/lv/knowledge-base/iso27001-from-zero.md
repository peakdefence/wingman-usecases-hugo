---
title: ISO 27001 no nulles
kb: iso27001-from-zero
weight: 20
summary: "Tehniskajam dibinātājam vai CTO, kura klients pieprasa ISO 27001 gada laikā: ko standarts prasa vienkāršos vārdos, darba secība, aptuvens kalendārs, lēmumi, ko varat pieņemt tikai jūs, un uzvedne, kas jūsu atbildes pārvērš tvērumā un plānā."
regulations:
- ISO/IEC 27001:2022
audience: Tehniskie dibinātāji, CTO, izstrādes vadītāji bez drošības komandas
uc: new-requirements
updated: 2026-11-25
---

Klients ir ierakstījis ISO 27001 līgumā, un jums ir divpadsmit mēneši. Neviens uzņēmumā to iepriekš nav darījis. Šis ceļvedis skaidro, ko patiesībā prasa, kādā secībā darbu darīt un kur aiziet kalendāra laiks. Uzvedne beigās jūs intervē un sagatavo pirmo tvēruma aprakstu, sakārtotu plānu ar darba apjoma diapazoniem un sarakstu ar lēmumiem, kurus var pieņemt tikai uzņēmums.

## Kā lietot šo ceļvedi

1. Vienreiz izlasiet nākamās divas sadaļas.
2. Ielīmējiet uzvedni jaunā sarunā ar jebkuru pietiekami spējīgu valodas modeli un atbildiet uz jautājumiem pa vienam. Aprakstiet uzņēmumu vispārīgi; izņemiet klientu nosaukumus, cilvēku vārdus un visu konfidenciālo.
3. Nesiet rezultātu cilvēkiem, kas darīs darbu, un tam, kurš apstiprina izdevumus. Stundas ir diapazoni, un pēdējais vārds par auditu laiku ir sertifikācijas institūcijai.

## Ko ISO 27001 prasa, vienkāršos vārdos

ISO/IEC 27001 nenosaka tehnisku iestatījumu kopumu. Tas prasa uzturēt informācijas drošības vadības sistēmu (IDVS) un parādīt, ka tā darbojas. Prasības ir 4. līdz 10. nodaļā; A pielikumā ir 93 kontroles, kuras izvērtējat, salīdzinot ar saviem riskiem.

| Termins | Ko tas nozīmē praksē |
|---|---|
| IDVS | Veids, kā jūs lemjat, darāt, pārbaudāt un uzlabojat drošību: lomas, politika, riska process, dokumenti, ieraksti un pārskatīšanas. Nevis rīks un nevis politiku mape. |
| Tvērums | Uzņēmuma daļa, uz kuru attiecas sertifikāts: kuri produkti, pakalpojumi, atrašanās vietas, komandas un atbalsta IT. Tas ir ierakstīts sertifikātā. |
| Riska novērtēšana | Atkārtojama metode, ar kuru atrod, kas var notikt ar jūsu informāciju, cik tas ticams un cik smagi, un kam pieder katrs risks. To veic, dokumentē un atkārto. |
| Riska apstrāde | Katram riskam lēmums: samazināt ar kontrolēm, izvairīties, dalīt vai pieņemt. Pieņemt drīkst, ja to paraksta nosaukts īpašnieks. |
| Piemērojamības paziņojums (SoA) | Viena tabula ar visām 93 A pielikuma kontrolēm: piemērojama vai nē, kāpēc un vai ieviesta. Auditori to lasa pirmo. |
| Kontroles | Paši pasākumi: piekļuves pārskatīšana, rezerves kopijas, darbinieku pieņemšana un atbrīvošana, piegādātāju pārbaudes, žurnalēšana, droša izstrāde, incidentu pārvaldība un tā tālāk. |
| Pierādījumi | Ieraksti, kas parāda, ka kontrole darbojas: pieteikumi, žurnāli, pārskatīšanu piezīmes, apmācību ieraksti, parakstīti apstiprinājumi. Politika nav pierādījums, ka kāds to ievēro. |
| Iekšējais audits | Plānota pārbaude, ko veic kāds, kurš pats darbu nedarīja: vai IDVS atbilst standartam un jūsu pašu noteikumiem. Konstatējumus dokumentē un novērš. |
| Vadības pārskats | Augstākā vadība noteiktos intervālos aplūko rezultātus, riskus, audita konstatējumus un izmaiņas un pieņem lēmumus, kas tiek dokumentēti. |
| Sertifikācija | Akreditēta sertifikācijas institūcija auditē divos posmos. 1. posmā pārbauda dokumentus un gatavību. 2. posmā pārbauda, vai sistēma darbojas, kā aprakstīts. Pēc tam katru gadu ir uzraudzības audits un ik pēc trim gadiem atkārtota sertifikācija. |

## Darba secība

| Solis | Ko tas dod | Kas vajadzīgs |
|---|---|---|
| 1. Tvērums un konteksts | Rakstisks tvērums, ieinteresēto pušu un to prasību saraksts (arī klienta līgums), galvenie aktīvi un piegādātāji | Dibinātājs vai CTO; viens cilvēks no ekspluatācijas |
| 2. Lomas un politika | Nosaukts IDVS īpašnieks, augšējā līmeņa atbildība, vadības parakstīta informācijas drošības politika | Vadība; IDVS īpašnieks |
| 3. Riska metode un novērtējums | Riska metode, risku reģistrs ar īpašniekiem, apstrādes plāns | IDVS īpašnieks; galveno sistēmu un procesu īpašnieki |
| 4. Piemērojamības paziņojums | Piemērojamības paziņojums ar pamatojumu katrai iekļautajai vai izslēgtajai kontrolei | IDVS īpašnieks, pārskata CTO |
| 5. Kontroles un dokumenti | Ieviestas trūkstošās kontroles, neliels procedūru kopums, ko cilvēki tiešām lieto, notikusi izpratnes apmācība | Izstrāde, IT, personāldaļa, tie, kas vada piegādātājus un līgumus |
| 6. Darbība un pierādījumi | Vairāku mēnešu ieraksti: piekļuves pārskatīšanas, atjaunošanas testi, incidenti, izmaiņas, piegādātāju pārbaudes, apmācības | Kontroļu īpašnieki savā ikdienas darbā |
| 7. Iekšējais audits un vadības pārskats | Audita ziņojums ar konstatējumiem un korektīvajām darbībām; vadības pārskata protokols ar lēmumiem | No darba neatkarīgs iekšējais auditors (bieži ārējs); vadība |
| 8. Sertifikācija | 1. un 2. posma audits, slēgtas neatbilstības, sertifikāts | IDVS īpašnieks; visi, ko auditors intervē |

## Aptuvens divpadsmit mēnešu kalendārs

- **1.–2. mēnesis:** 1.–3. solis. Izvēlieties sertifikācijas institūciju un sazinieties ar to agri; pajautājiet, cik ilgi sistēmai jādarbojas pirms 2. posma un kad tai ir brīvi auditori.
- **3.–5. mēnesis:** 4. un 5. solis. Šeit ir lielākā darba daļa.
- **5.–9. mēnesis:** 6. solis. Kontroles darbojas un uzkrājas ieraksti. Šo laiku nevar saīsināt, strādājot vairāk.
- **8.–10. mēnesis:** 7. solis. Atstājiet laiku novērst to, ko atrod iekšējais audits.
- **10.–12. mēnesis:** 1. posms, dažas nedēļas vēlāk 2. posms, pēc tam neatbilstību slēgšana.

Sertifikācijas institūcija pati nosaka minimālo audita ilgumu, laiku starp 1. un 2. posmu un to, cik ilgu darbības vēsturi tā sagaida. Pajautājiet tai, pirms solāt klientam datumu.

## Lēmumi, ko var pieņemt tikai uzņēmums

- **Tvērums.** Kuri produkti un komandas ir iekļauti un vai iekļauta uzņēmuma IT. Tam jāaptver pakalpojums, ko pērk klients.
- **Kam pieder IDVS** un cik daudz laika tam tiek dots. Blakus projekts kādam, kurš jau ir pilnībā noslogots, ir biežākais kavēšanās iemesls.
- **Riska apetīte.** Kādu riska līmeni pieņemat bez papildu apstrādes un kurš drīkst pieņemt riskus virs tā.
- **Kuras kontroles izslēgt** un katras pamatojums.
- **Darīt pašiem, pirkt vai aizņemties:** ko darāt paši, kurus rīkus ieviešat, vai piesaistāt konsultantu vai ārēju iekšējo auditoru.
- **Kura sertifikācijas institūcija** un mērķa audita datumi.
- **Ko un kad stāstīt klientam** par virzību.

## Biežākās kļūdas

- **Politikas, kuras neviens neievēro.** Lejupielādētas veidnes apraksta uzņēmumu, kura nav. Auditors jautā cilvēkiem, ko viņi dara, un pārbauda ierakstus. Rakstiet mazāk dokumentu un panāciet, lai tie atbilst realitātei.
- **Pārāk plašs tvērums.** Katra biroja, produkta un mantotās sistēmas iekļaušana darbu pavairo. Sāciet ar to, ko pērk klients, un to, kas to nodrošina.
- **Nav pierādījumu par darbību.** Kontroles, kas ieslēgtas mēnesi pirms audita, neatstāj vēsturi. Sāciet dokumentēt no brīža, kad kontrole pastāv: pieteikums par katru piekļuves pārskatīšanu, piezīme par katru atjaunošanas testu.
- **Riska novērtēšana kā vienreizējs pasākums.** Tai jābūt atkārtojamai un atkārtotai, un piemērojamības paziņojumam jāizriet no tās.
- **Vadība nepiedalās.** Politikas apstiprināšanai, riska pieņemšanai un vadības pārskatam vajadzīga augstākā vadība. Ar CTO vien nepietiek, ja ir arī valdes priekšsēdētājs vai izpilddirektors.

Piemērs [pirmās trīs ieviešanas dienas]({{< relref "/samples/iso27001-first-days" >}}) parāda, kā pirmie soļi var izskatīties programmatūras uzņēmumā ar 60 darbiniekiem.

## Uzvedne: tvērums, plāns un lēmumi

{{< prompt id="iso27001-from-zero-plan" title="ISO 27001 pirmā plāna intervētājs" >}}
Tu palīdzi maza vai vidēja uzņēmuma dibinātājam vai CTO, kuram jāiegūst ISO/IEC 27001:2022 sertifikāts, parasti tāpēc, ka to pieprasa klients. Viņam nav drošības pieredzes. Tavs uzdevums ir viņu intervēt un sagatavot trīs lietas: tvēruma apraksta melnrakstu, sakārtotu ieviešanas plānu ar darba apjoma diapazoniem stundās un sarakstu ar lēmumiem, kurus var pieņemt tikai uzņēmums. Tu neesi auditors vai sertifikācijas institūcija; pasaki to vienreiz sākumā.

Atbildi valodā, kurā raksta lietotājs, ja vien viņš nelūdz citu.

Pamatnoteikumi
- Uzdod pa vienam jautājumam. Pagaidi atbildi, pirms uzdod nākamo. Jautājumi ir īsi; ja iemesls nav acīmredzams, paskaidro to vienā teikumā.
- Lieto vienkāršus vārdus. Kad pirmo reizi lieto standarta terminu (IDVS, piemērojamības paziņojums, riska apstrāde, iekšējais audits, vadības pārskats, 1. posms, 2. posms), paskaidro to vienā teikumā.
- Strādā tikai ar to, ko es pastāstu. Nekad neizdomā faktus par manu uzņēmumu, mana klienta prasībām, juridiskiem termiņiem, sertifikācijas institūciju noteikumiem vai nodaļu numuriem, par kuriem neesi pārliecināts. Kur kaut kas nav zināms, raksti [JĀPRECIZĒ: kas vajadzīgs].
- Nenosauc cenas, dienas likmes vai maksas par neko (konsultantiem, rīkiem, sertifikācijas institūcijām). Darba apjomu norādi kā uzņēmuma paša cilvēku stundu diapazonus un pasaki, kur parasti izmanto ārēju palīdzību, bez izmaksām.
- Sākumā atgādini man izlaist klientu nosaukumus, cilvēku vārdus un konfidenciālu informāciju; pietiek ar lomām un vispārīgiem aprakstiem.
- Skaidri pasaki, ka sertifikācijas institūcija nosaka minimālo audita ilgumu, laiku starp 1. un 2. posmu un to, cik ilgu darbības vēsturi tā sagaida, un ka man tas jāprecizē ar izvēlēto institūciju.

Intervija (pa vienam jautājumam, izlaid to, uz ko jau atbildēts)
1. Ko uzņēmums dara un pārdod, divos teikumos, un aptuveni cik cilvēku tajā strādā.
2. Ko tieši klients prasīja: sertifikātu vai "atbilstību", līdz kuram datumam, kuram pakalpojumam un vai prasība ir parakstītā līgumā.
3. Kurus produktus vai pakalpojumus klients izmanto un kuras komandas tos izstrādā, darbina un atbalsta.
4. Kur produkts darbojas (mākoņpakalpojumu sniedzēji, savi serveri, reģioni) un kur strādā cilvēki (biroji, attālināti, valstis).
5. Uzņēmuma IT: klēpjdatori, e-pasts, identitātes pakalpojums vai SSO, kā cilvēki piekļūst ražošanas videi.
6. Apmēram desmit svarīgākie piegādātāji (mitināšana, koda repozitorijs, atbalsta dienests, maksājumi, ārpakalpojumi).
7. Kas jau pastāv: politikas, darbinieku pieņemšanas un atbrīvošanas kontrolsaraksti, rezerves kopijas un atjaunošanas testi, piekļuves pārskatīšanas, žurnalēšana, incidentu pārvaldība, drošības testēšana, apmācības. Lūdz godīgas atbildes, arī "nekas".
8. Citas piemērojamās prasības: personas dati un loma VDAR izpratnē, nozares noteikumi, ko minējis klients, citu klientu anketas.
9. Kurš varētu būt IDVS īpašnieks un cik stundu nedēļā viņš tam var veltīt; kurš no vadības apstiprinās politikas un pieņems riskus.
10. Vai uzņēmums izmantotu ārēju palīdzību (konsultantu, ārēju iekšējo auditoru) un vai sertifikācijas institūcija jau ir izvēlēta.
Pēc pēdējās atbildes īsā sarakstā apkopo, ko saprati, un lūdz mani to izlabot, pirms raksti rezultātu.

Rezultāts
A. Tvēruma apraksta melnraksts: divi līdz četri teikumi, kas nosauc tvērumā iekļautos pakalpojumus, komandas, atrašanās vietas un atbalsta IT, pēc tam saraksts ar to, kas nav iekļauts un kāpēc, un saskarnes ar neiekļauto. Norādi, ja tvērums neaptver to, ko pērk klients.
B. Sakārtots plāns tabulā ar kolonnām: solis; ko tas dod; kas vajadzīgs (lomas); darba apjoma diapazons uzņēmuma cilvēku stundās; kalendāra nedēļas; atkarības. Izmanto šos soļus, ja vien manas atbildes neattaisno izmaiņas: 1) tvērums un konteksts; 2) lomas un informācijas drošības politika; 3) riska metode, riska novērtējums un apstrādes plāns; 4) piemērojamības paziņojums; 5) trūkstošās kontroles un dokumenti, ko cilvēki lieto, ar izpratnes apmācību; 6) kontroļu darbība un pierādījumu vākšana; 7) iekšējais audits un vadības pārskats; 8) 1. un 2. posma sertifikācijas audits. Darba apjoma diapazonus balsti uz manām atbildēm par lielumu, esošo praksi un pieejamo laiku un norādi pieņēmumus katram diapazonam. Izvieto soļus kalendārā, kas beidzas ar klienta datumu, un atzīmē, kur plāns ir saspringts.
C. Lēmumi, ko var pieņemt tikai uzņēmums: katram lēmums, kāpēc tas ir svarīgs, iespējas, kam jālemj un līdz kuram brīdim plānā. Iekļauj vismaz tvērumu, IDVS īpašnieku un viņa laiku, riska apetīti un to, kurš drīkst pieņemt riskus, izslēdzamās kontroles, darīt pašiem vai pirkt vai piesaistīt palīdzību, sertifikācijas institūciju un audita datumus, un ko stāstīt klientam.
D. Trīs lielākie riski termiņam un kas katru samazinātu.
E. Atklātie jautājumi un pieņēmumi.

Beigās atgādini, ka plāns ir melnraksts, ka darba apjoma diapazoni ir atkarīgi no uzskaitītajiem pieņēmumiem un ka auditu laiks jāprecizē ar sertifikācijas institūciju.

Sāc, divos teikumos iepazīstinot ar sevi, atgādinot man izlaist vārdus un konfidenciālu informāciju, un uzdodot 1. jautājumu.
{{< /prompt >}}

{{< wingman uc="new-requirements" stage="4" >}}
WINGMAN ieviešanas prasme ielādē ISO 27001 prasības kā ierakstus un dažās dienās izveido plānu, risku reģistru un dokumentus ar uzdevumiem cilvēkiem, kuri darīs darbu. Lai kontroles darbotos pietiekami ilgi un to varētu pierādīt, joprojām vajadzīgi iepriekš norādītie mēneši.
{{< /wingman >}}

## Ko uzvedne nedara

Tā neraksta jūsu politikas, nenovērtē jūsu riskus un nepasaka, vai jūs izturēsiet auditu. Tā dod pirmo tvērumu, darba secību un lēmumus, ko nolikt vadības priekšā, lai gads sāktos ar plānu, nevis ar veidņu kaudzi.
