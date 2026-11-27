---
title: Atbildes uz drošības anketu
kb: security-questionnaire
weight: 30
summary: "Tam, kurš tikko saņēmis garu klienta drošības anketu, piemēram, no bankas: kā to sašķirot, atbildēt tikai no tā, kas ir ieviests, rīkoties ar līguma punktiem, kas nāk līdzi, pievienot pareizos pierādījumus un godīgi pateikt „plānots”. Viena uzvedne pārvērš jautājumus atbilžu tabulā ar sasaisti."
regulations:
- ISO/IEC 27001:2022
- DORA 28.–30. pants
- NIS2 21. pants
audience: CTO, drošības un atbilstības vadītāji, klientu vadītāji, kas atbild par klientu pārbaudēm
uc: new-requirements
updated: 2026-11-25
---

No klienta, bieži bankas vai citas regulētas organizācijas, ir pienākusi izklājlapa ar divsimt jautājumiem, termiņu un pievienotu līgumu. Atbildes kļūst par daļu no klienta piegādātāja lietas un dažkārt tiek ierakstītas līgumā, tāpēc atbilde, kas pārspīlē to, ko jūs darāt, ir saistība, kuru nevarēsiet izpildīt. Šis ceļvedis parāda, kā ātri aizpildīt anketu, nesakot vairāk, nekā ir patiesībā, un uzvedne beigās pārvērš jautājumus ierosināto atbilžu tabulā, sasaistītā ar kontrolēm un ISO 27001.

## Kā lietot šo ceļvedi

1. Izlasiet sadaļu par šķirošanu un izlemiet, kurš uzņēmumā var apstiprināt atbildes katrā jomā (infrastruktūra, izstrāde, personāls, piegādātāji, juridiskie jautājumi).
2. Ielīmējiet uzvedni jaunā sarunā ar jebkuru pietiekami spējīgu valodas modeli. Ielīmējiet jautājumus, tad aprakstiet, kas ir ieviests. Izņemiet klientu nosaukumus, cilvēku vārdus, iekšējos resursdatoru nosaukumus, noslēpumus un visu, ko anketa atzīmē kā konfidenciālu.
3. Katru ierosināto atbildi pirms nosūtīšanas pārbaudiet ar attiecīgās jomas īpašnieku. Tabula ir melnraksts; par to atbild tas, kurš anketu paraksta.

## Vispirms sašķirojiet

Pirms atbildat, sašķirojiet jautājumus. Lielākajā daļā anketu daži simti jautājumu sadalās aptuveni divdesmit tēmās, un daudzi jautā vienu un to pašu dažādos vārdos.

1. **Sasaistiet katru jautājumu ar kontroli.** Nosauciet kontroli, kas uz to atbild: piekļuves kontrole, rezerves kopijas, žurnalēšana, incidentu pārvaldība, piegādātāju pārvaldība, droša izstrāde un tā tālāk. Jautājumi, kas attiecas uz vienu kontroli, saņem saskaņotas atbildes.
2. **Sasaistiet kontroli ar standarta punktu.** Izmantojiet ISO/IEC 27001 A pielikumu vai 4.–10. nodaļu kā kopēju atsauci, pat ja neesat sertificēti. Klientam tas dod pazīstamu atskaites punktu, un jums struktūru, ko izmantot nākamreiz.
3. **Atbildiet tikai no tā, kas ir ieviests.** „Ieviests” nozīmē, ka tas darbojas šodien un jūs varētu uzrādīt ierakstu. Politika, kas pastāv, bet netiek ievērota, nav ieviesta.
4. **Atzīmējiet nepilnības kā nepilnības.** „Nē” vai „Pašlaik nē” ir pieņemama atbilde. Nepatiess „Jā”, kas vēlāk atklājas auditā vai pēc incidenta, attiecības sabojā daudz vairāk nekā godīga nepilnība tagad.
5. **Nekad nepārspīlējiet.** Izvairieties no „vienmēr”, „visi”, „pilnībā” un „reāllaikā”, ja tas nav burtiski patiesi. Norādiet patieso tvērumu: „Daudzfaktoru autentifikācija (MFA) ir obligāta visiem darbinieku kontiem identitātes pakalpojumā; divi mantoti servisa konti ir izņēmums un ir uzskaitīti.”
6. **Atzīmējiet, uz ko nevarat atbildēt.** Uz dažiem jautājumiem jāatbild juristam, personāldaļai vai piegādātājam. Uz dažiem nevar patiesi atbildēt tā, kā tie uzdoti, jo pieņēmums neatbilst jūsu pakalpojumam. Pasakiet to un piedāvājiet tuvāko precīzo apgalvojumu.

## Biežākās tēmas un to sasaiste

| Jautājuma tēma | ISO 27001:2022 atsauce | Tipiski pierādījumi |
|---|---|---|
| Drošības politika un lomas | 5.2. un 5.3. punkts; A.5.1, A.5.2 | Apstiprināta politika ar datumu un apstiprinātāju; lomu apraksti |
| Riska novērtēšana | 6.1.2. un 8.2. punkts | Riska metode un datēts risku reģistra izraksts |
| Piekļuves kontrole un daudzfaktoru autentifikācija | A.5.15, A.5.18, A.8.5 | Identitātes pakalpojuma iestatījumu ekrānuzņēmums; pēdējās piekļuves pārskatīšanas ieraksts |
| Darbinieku pārbaude un apmācība | A.6.1, A.6.3 | Pārbaudes procedūra; apmācību izpildes pārskats |
| Piegādātāju pārvaldība | A.5.19–A.5.22 | Piegādātāju saraksts ar novērtējumiem; standarta līguma punkti |
| Mākoņpakalpojumi | A.5.23 | Mākoņpakalpojumu sniedzēju saraksts un to sertifikāti |
| Incidentu pārvaldība | A.5.24–A.5.28 | Incidentu procedūra; anonimizēts incidentu žurnāla izraksts |
| Darbības nepārtrauktība un rezerves kopijas | A.5.30, A.8.13 | Atjaunošanas mērķi; pēdējā atjaunošanas testa ieraksts |
| Ievainojamību pārvaldība un testēšana | A.8.8, A.8.29 | Skenēšanas vai ielaušanās testa kopsavilkums, slēgtie konstatējumi |
| Žurnalēšana un uzraudzība | A.8.15, A.8.16 | Glabāšanas iestatījumi; brīdinājumu apraksts |
| Šifrēšana | A.8.24 | Šifrēšanas apraksts glabāšanā un pārsūtīšanā |
| Droša izstrāde un izmaiņas | A.8.25, A.8.28, A.8.32 | Koda izmaiņu pieprasījumu noteikumi; konveijera pārbaudes; izmaiņu ieraksti |

## Atbilžu atkārtota izmantošana

Glabājiet galīgās atbildes kopā ar kontroli, punktu, pierādījumu un datumu vienuviet. Nākamā anketa jautās lielāko daļu to pašu. Pārskatiet saglabātās atbildes, kad mainās kontrole, un vismaz reizi gadā, jo veca atbilde, kas vairs nav patiesa, ir tāda pati problēma kā pārspīlējums. Ja klients to pieņem, īss drošības pārskata dokuments vai standarta formāts, piemēram, kopīga novērtēšanas anketa, var aizstāt daudzas atsevišķas atbildes.

## Līguma punkti, kas nāk līdzi

Bankas un citas finanšu vienības bieži pievieno drošības pielikumu, datu apstrādes līgumu vai audita un līguma izbeigšanas punktus, daļēji tāpēc, ka DORA prasa noteiktus punktus līgumos ar IKT pakalpojumu sniedzējiem. Uztveriet katru punktu kā prasību:

- Vai varat to izpildīt šodien? Ja nē, līdz kuram brīdim un ar kādu darba apjomu?
- Vai tas ir pretrunā ar kādu atbildi anketā vai ar jūsu pašu līgumiem ar piegādātājiem? Punktam par paziņošanu par incidentu noteiktā stundu skaitā jāsaskan ar to, ko un kad jums pasaka jūsu mitināšanas pakalpojuma sniedzējs.
- Vai tas dod klientam audita vai piekļuves tiesības, kuru apjoms jānosaka, piemēram, iepriekšēja brīdinājuma termiņš, biežums un konfidencialitāte?
- Vai tas prasa nodot pienākumus tālāk jūsu apakšuzņēmējiem?

Punktus, kurus nevarat izpildīt, nosūtiet atpakaļ kā ierosinātās izmaiņas ar pamatojumu, pirms anketas atbildes ir galīgas. Atbildēm un līgumam jāsaka viens un tas pats.

## Pievienojamie pierādījumi

Pievienojiet pierādījumus tikai tur, kur tos prasa vai kur tie skaidri palīdz, un dalieties ar minimumu: datēts izraksts, iestatījuma ekrānuzņēmums, kopsavilkums, nevis pilns ziņojums. Izņemiet iekšējos resursdatoru nosaukumus, IP adreses, cilvēku vārdus un detaļas, kas palīdzētu uzbrucējam. Ielaušanās testu ziņojumus parasti nodod kā vadības kopsavilkumu vai parāda sarunā, nevis nosūta. Jūsu mākoņpakalpojumu sniedzēju sertifikāti aptver viņu daļu, nevis jūsējo; pasakiet, kuru daļu tie aptver.

## Godīga atbilde „plānots”

Plānota kontrole lielākajai daļai klientu ir pieņemama, ja atbilde ir konkrēta. Labai atbildei „plānots” ir četras daļas: kas būs ieviests, līdz kuram brīdim, kam tas pieder un kas tiek darīts pa to laiku. Piemēram: „Ceturkšņa piekļuves pārskatīšana ražošanas sistēmām plānota no 2027. gada marta, atbildīgais ir infrastruktūras vadītājs. Līdz tam piekļuve ir tikai pieciem inženieriem un tiek noņemta tajā pašā dienā, kad kāds aiziet, ar atbrīvošanas kontrolsarakstu.” Neatzīmējiet kaut ko kā plānotu, ja neviens nav piekritis to izdarīt un nav datuma. Ja tas ir tikai nodoms, sakiet, ka tas nav ieviests.

## Uzvedne: anketas atbilžu tabula

{{< prompt id="security-questionnaire-answers" title="Drošības anketas atbilžu sagatavotājs" >}}
Tu palīdzi uzņēmumam atbildēt uz klienta drošības anketu, bieži no bankas vai citas regulētas organizācijas. Tu sagatavo godīgas atbildes tikai no tā, ko uzņēmums tev saka par ieviesto, sasaisti katru jautājumu ar kontroli un ISO/IEC 27001:2022 atsauci un nosaki, uz kuriem jautājumiem nevar patiesi atbildēt tā, kā tie uzdoti. Tu neizlem, ko uzņēmums apņemas; to izlemj tas, kurš anketu paraksta.

Atbildi valodā, kurā raksta lietotājs, ja vien viņš nelūdz citu. Atbildes anketai sagatavo anketas valodā, ja vien es nelūdzu citādi.

Pamatnoteikumi
- Nekad neizdomā faktus par uzņēmumu, tā kontrolēm, sertifikātiem, piegādātājiem vai pierādījumiem. Ja es neesmu teicis, ka kaut kas ir ieviests, tas nav ieviests.
- Nekad nepārspīlē. Nelieto "vienmēr", "visi", "pilnībā", "nepārtraukti" vai "reāllaikā", ja es neesmu apstiprinājis, ka tas ir burtiski patiesi. Norādi faktisko tvērumu un izņēmumus.
- Statuss ir viens no: Ieviests (darbojas šodien un ir ieraksts), Daļēji (pastāv, bet ar nepilnībām aptvērumā vai ierakstos; pasaki, kādām), Plānots (tikai ja es norādu atbildīgo un datumu), Nav ieviests.
- ISO 27001 atsaucēm lieto 2022. gada versijas nodaļu numurus (4–10) un A pielikuma kontroļu numurus tikai tad, ja esi par tiem pārliecināts; citādi raksti kontroles nosaukumu un [JĀPRECIZĒ: atsauce]. Necitē likumus, regulas vai juridiskus termiņus, ja es nedodu to tekstu.
- Sākumā atgādini man pirms ielīmēšanas izņemt klientu nosaukumus, cilvēku vārdus, resursdatoru nosaukumus, IP adreses, noslēpumus un visu, kas atzīmēts kā konfidenciāls.
- Uzdod pa vienam jautājumam un gaidi atbildi.

1. solis. Savāc materiālu
Pa vienam pajautā man:
1. Ielīmēt jautājumus (ar to numuriem vai identifikatoriem) vai tik, cik ietilpst, un pateikt, vai sekos vēl.
2. Ko uzņēmums dara, aptuveni cik cilvēku un kuru pakalpojumu izmanto klients.
3. Vai uzņēmumam ir kāds sertifikāts vai apliecinājums, tā tvērums un datums. Ja tāda nav, jāatbild „nav”.
4. Aprakstīt, kas ir ieviests, pa jomām: politikas un lomas; riska novērtēšana; piekļuves kontrole un daudzfaktoru autentifikācija; darbinieku pārbaude, pieņemšana, atbrīvošana un apmācība; piegādātāju pārvaldība un mākoņpakalpojumu sniedzēji; incidentu pārvaldība; rezerves kopijas un nepārtrauktība; ievainojamību pārvaldība un testēšana; žurnalēšana un uzraudzība; šifrēšana; droša izstrāde un izmaiņas; fiziskā drošība; personas datu apstrāde. Pieņem īsas atbildes un "nekas".
5. Kādi pierādījumi pastāv katrā jomā un ar ko drīkst dalīties ar klientu.
6. Vai kopā ar anketu nāca līgums, drošības pielikums vai datu apstrādes līgums; ja jā, lūdz ielīmēt attiecīgos punktus.
Pēc tam uzskaiti jomas, kurās mans apraksts ir par skopu, lai atbildētu uz jautājumiem, un uzdod papildjautājumus pa vienam, tikai par šīm jomām.

2. solis. Sagrupē jautājumus
Sagrupē jautājumus pēc kontroles un uzskaiti dublikātus un gandrīz dublikātus, lai tie saņemtu saskaņotas atbildes. Īsi parādi grupējumu un lūdz mani to apstiprināt, pirms sagatavo atbildes.

3. solis. Sagatavo atbilžu tabulu
Izveido tabulu ar kolonnām: jautājuma ID; jautājums (saīsināts, ja garš); ierosinātā atbilde; kontrole; ISO 27001 nodaļa vai A pielikuma atsauce; statuss (Ieviests / Daļēji / Plānots / Nav ieviests); pievienojamais pierādījums (konkrēts, minimāls, ar norādi, ko aizklāt). Atbildes ir īsas, faktiskas un ierobežotas ar to, ko es pastāstīju. Statusam Daļēji norādi, kas ir aptverts un kas nav. Statusam Plānots norādi, kas, līdz kuram brīdim, kam tas pieder un kas tiek darīts pa to laiku. Statusam Nav ieviests pasaki to tieši un, ja tas ir būtiski, kas šodien samazina risku.

4. solis. Jautājumi, uz kuriem nevar patiesi atbildēt
Atsevišķi uzskaiti katru jautājumu, uz kuru ar dotajiem faktiem nevar patiesi atbildēt vai kura pieņēmums neatbilst pakalpojumam. Katram: kāpēc, kurš uzņēmumā varētu atbildēt (pēc lomas) un precīza alternatīvā atbilde, ja tāda ir.

5. solis. Līguma punkti
Ja punkti ir doti, izveido tabulu: punkts; ko tas prasa; vai varam to izpildīt šodien (jā / daļēji / nē); pretrunas ar kādu atbildi iepriekš vai ar mūsu piegādātāju noteikumiem; ierosinātās izmaiņas vai komentārs nosūtīšanai atpakaļ. Nesniedz juridisku padomu; atzīmē punktus, kas jāpārskata juristam.

6. solis. Noslēgums
Dod īsu kopsavilkumu: jautājumu skaits pēc statusa, galvenās nepilnības, saistības, ko rada atbildes Plānots, ar datumiem un atbildīgajiem, un atbildes, kas pirms nosūtīšanas jāpārbauda nosauktam jomas īpašniekam. Atgādini, ka tas, kurš paraksta, atbild par katru atbildi un ka galīgās atbildes jāsaglabā kopā ar pierādījumiem un datumu atkārtotai izmantošanai.

Sāc ar atgādinājumu par konfidenciālas informācijas izņemšanu, tad uzdod 1. jautājumu.
{{< /prompt >}}

{{< wingman uc="new-requirements" stage="2" >}}
WINGMAN sistēmā līguma punktu vai anketas prasību var pievienot kā atsevišķu prasības ierakstu un sasaistīt ar jau esošajām kontrolēm un pierādījumiem, tāpēc nepilnība ir redzama un nākamā anketa sākas no tām pašām saitēm.
{{< /wingman >}}

## Ko uzvedne nedara

Tā nezina par jūsu uzņēmumu neko vairāk par to, ko jūs pastāstāt, tā nepārbauda jūsu pierādījumus un nesniedz juridisku padomu par līgumu. Tā sagatavo saskaņotas, godīgas atbildes un parāda, kur patiesā atbilde ir „nē” vai „vēl nē”, lai jūs varētu izlemt pirms parakstīšanas.
