---
title: Es vadu drošības programmas vairākiem klientiem
short: Konsultantiem un vCISO
summary: Jūsu metode ir jūsu produkts, un pārslēgšanās starp klientiem ir jūsu lielākās izmaksas. WINGMAN uztur katra klienta programmu kā aktuālus ierakstus, un jūsu MI asistents veic vienu un to pašu procedūru ar katru no tiem.
weight: 60
slug_id: consultant
problems:
- q: Pirmdien viens klients, otrdien cits. Zaudēju laiku, pārlasot pats savas piezīmes.
  a: 'Kopsavilkums katru rītu tiek uzrakstīts no šī klienta ierakstiem: kur koncentrējas risks, kas kavējas, kuras nepilnības ir atvērtas. Jūs sākat no pašreizējā stāvokļa, nevis no savām pēdējām piezīmēm.'
- q: Mana jaunākā kolēģa risku darbnīca izskatās citādi nekā manējā.
  a: 'Prasme katru reizi veic tos pašus soļus. Risku intervija uzdod pa vienam jautājumam, katru nosaukto apdraudējumu vispirms salīdzina ar esošajiem riskiem un tikai tad veido jaunu, un sasaista aktīvus, piegādātājus un kontroles. Varat arī izveidot savu prasmju kopumu darbam ar WINGMAN, lai soļi būtu jūsu metode, un ar prasmēm veidot politiku veidnes pēc savām vēlmēm. Tās paliek jūsu īpašumā: tās neredz ne Peak Defence, ne citi konsultanti.'
- q: Līdz manai nākamajai vizītei reģistri jau vairs nesakrīt.
  a: Pārskatīšanas ir uzdevumi klienta paša īpašniekiem, pēc kalendāra. Reģistru pārbaudes uzskaita, kas ir novecojis, tāpēc jūsu vizīte sākas ar sarakstu, nevis ar saskaņošanu.
- q: Pierādījumus pieprasu pa e-pastu, klientu pēc klienta.
  a: Uzdevumiem ir īpašnieki un termiņi, un pie kavētajiem norādīts atbildīgais. Atgādinājumi tiek sagatavoti un nosūtīti jūsu vārdā pēc tam, kad tos apstiprināt.
- q: Mēneša beigās klients jautā, ko saņēmis par abonēšanas maksu.
  a: Pabeigtās pārskatīšanas, pieņemtās izmaiņas, slēgtie uzdevumi un jaunie pierādījumi ir ieraksti ar datumiem klienta reģistrā. Darbs ir redzams tur, ne tikai jūsu rēķinā.
- q: Kad sadarbība beidzas, klients saņem zip failu.
  a: Katram klientam ir sava darba vide, un tās datus var eksportēt. Tas, ko izveidojat, paliek tur kā sasaistīti ieraksti, kas pieder klienta lomām, un paliek lietojams, kad jūs aizejat.
- q: Baidos sajaukt klientus, kad lietoju MI rīkus.
  a: Katra klienta ieraksti atrodas šī klienta paša darba vidē, nevis sarunu projektā, ko ar roku uzturat kārtībā. Asistenta savienojumu var ierobežot ar viena klienta darba vidi vai vēl šaurāk, tāpēc vienā sesijā nevar piekļūt cita klienta ierakstiem.
terms:
- t: Prasme
  d: Procedūra, ko jūsu MI asistents soli pa solim izpilda ar jūsu WINGMAN ierakstiem, piemēram, risku intervija vai audits. Tā darbojas asistentā, ko jau lietojat, piemēram, Claude.
- t: Kopsavilkums
  d: Īss rakstisks kopsavilkums par programmas stāvokli, ko WINGMAN MI katru rītu sagatavo no ierakstiem.
- t: Plāns
  d: Regulāru vai vienreizēju uzdevumu kopums vienam mērķim, piemēram, gada pārskatīšanu kalendārs.
- t: Signāls
  d: 'Pazīme, ka kaut kas mainās: monitoringa brīdinājums, skenera rezultāts, piegādātāja paziņojums, brīdinājums par apdraudējumu vai kolēģa ziņojums.'
does:
  knowledge: 'Katram klientam ir sava darba vide ar saviem ierakstiem: prasības, aktīvi, riski, kontroles, piegādātāji un pierādījumi, savstarpēji sasaistīti. Datus var eksportēt.'
  projects: 'Prasmes aptver darbus, ko jau pārdodat: ietvara ieviešanu, risku identificēšanu, darbības ietekmes analīzi, iekšējo auditu. Ietvari nāk ar ielādētām prasībām, un varat pievienot atsevišķas prasības. Auditam varat izmantot savu kontrolsarakstu.'
  regular: Plāni veido regulārās pārskatīšanas starp jūsu vizītēm. Vadības pārskata materiāli tiek salikti no ierakstiem.
  events: Signāls pie klienta tiek klasificēts un sasaistīts ar aktīviem un riskiem, ko tas skar, tāpēc redzat, par ko ir runa, pirms paceļat klausuli.
prompt:
  title: Kādā stāvoklī ir šis klients?
  lede: Tā jautā par vienu klientu un pēc tam sniedz vienas lappuses pārskatu, to, kas atkarīgs no jūsu atmiņas, un nodošanas sarakstu.
  text: |-
    Tu palīdzi neatkarīgam drošības konsultantam, kurš vada programmas vairākām klientu organizācijām. Atbildi latviski.

    Uzdod man tālāk minētos jautājumus pa vienam un gaidi katru atbildi. Neprasi klientu nosaukumus vai konfidenciālu informāciju; es aprakstīšu vienu klientu vispārīgi.
    1. Ar ko klients nodarbojas, cik liels tas ir un uz kuru standartu vai likumu jūs strādājat?
    2. Ko līdz šim esi nodevis, un kur tas atrodas (dokumenti, izklājlapas, rīks)?
    3. Ko klienta darbinieki dara starp tavām vizītēm, un kā tu zini, ka tas ir izdarīts?
    4. Kādus pierādījumus vēl gaidi, un no kā?
    5. Kas klientam būtu jādara pašam, ja sadarbība beigtos nākamajā mēnesī?
    6. Ko tu katru mēnesi ziņo klientam?

    Pēc tam sniedz man:
    - Vienas lappuses pārskatu par šo klientu: izdarīts, procesā, novecojis, trūkst.
    - Kas ir atkarīgs no manas atmiņas, nevis no tā, kas ir klienta rīcībā.
    - Kuri lēmumi gaida klientu un kopš kura laika.
    - Nodošanas sarakstu: kas būtu vajadzīgs pēctecim vai jaunam klienta darbiniekam.
    - Ikmēneša ziņojuma struktūru, kas parāda paveikto un lēmumus, ko gaida no klienta.
    - Trīs regulārus uzdevumus, kas man jānodod klienta cilvēkiem, ar atgādinājumu ritmu.
    Stāvokli sniedz tabulā, ko varu ielīmēt izklājlapā.
media:
- ask-scope
- plans-list
- set-access
yours:
- Jūsu spriedums un metode. Prasme izpilda soļus; ko jautāt tālāk un kādam jābūt vērtējumam, lemjat jūs un īpašnieks.
- Attiecības ar klientu. Klienta īpašnieki paši apstiprina savus riskus un kontroles.
- Pieņemto ieteikumu pārbaude. Ieteikums, ko pieņemat, ir jūsu lēmums, un tas paliek ierakstā.
ask:
- Partneru licencēšana un cenas
- Viens skats uz visiem jūsu klientiem
- 'Kurš slēdz līgumu par klienta darba vidi: jūs vai klients'
- Kā Peak Defence pašu konsultācijas saistās ar partneriem
use_cases:
- risk-identification
- business-impact-analysis
- auditing
- new-requirements
- regular-reviews
sectors:
- iso27001-soc2
- nis2
next:
  title: Izmēģiniet nākamo darbnīcu ar vienu klientu
  text: Varam kopā ar jums veikt risku identificēšanu izdomātas organizācijas piemērā vai sagatavot to kādam jūsu klientam.
  ask: Kopīga risku identificēšana izdomātas organizācijas piemērā vai kādam no maniem klientiem
linkedin: true
---
