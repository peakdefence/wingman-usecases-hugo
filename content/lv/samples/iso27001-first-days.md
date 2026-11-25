---
title: ISO 27001 no nulles, pirmās trīs dienas
weight: 5
summary: Programmatūras uzņēmums ar 60 darbiniekiem un bez drošības komandas izmanto ieviešanas prasmi ar WINGMAN. Ko dod pirmās trīs dienas, kurš ko dara pēc tam un kam joprojām vajadzīgs laiks.
for: [start, consultant]
use_cases: [new-requirements, risk-identification]
---

**Piemērs Labs**, programmatūras uzņēmums ar 60 darbiniekiem. Bankas klients prasa ISO 27001 sertifikātu divpadsmit mēnešu laikā. Drošības speciālista nav; to vada tehniskais direktors T. Ozols ar Claude Code, ieviešanas prasmi un WINGMAN. Prasme strādā ar WINGMAN ierakstiem un tur arī veido savus uzdevumus, tāpēc katrs rezultāts saglabājas nākamajam solim un cilvēkiem, kas darbu veiks. Trīs dienās tehniskais direktors atbildēm un lēmumiem velta aptuveni 12 stundas.

## 1. diena, rīts: konteksts un tvērums

Prasme uzdod vienu jautājumu pēc otra: ko uzņēmums veido, kur tas darbojas, kā cilvēki autentificējas, kas ir klienti, kuri piegādātāji ir svarīgi, kurš var palīdzēt. No atbildēm:

- **Tvērums:** „Piemērs Labs analītikas platformas izstrāde, uzturēšana un atbalsts, kas darbojas publiskā mākonī, no Rīgas un Tallinas birojiem. Korporatīvais IT ir iekļauts: darbinieku klēpjdatori, e-pasts un identitātes pakalpojums.”
- **Izveidotie aktīvi, katram savs īpašnieks:** analītikas platforma, mākoņa konts, koda repozitorijs, identitātes pakalpojums, klientu datubāze, atbalsta dienests un 9 piegādātāji.
- **Ielādētais ietvars:** ISO/IEC 27001:2022, 4.–10. punkta prasības un 93 A pielikuma kontroles kā prasību ieraksti: katrai prasībai viens ieraksts, ar kuru sasaista kontroles, pierādījumus un uzdevumus.

## 1. diena, pēcpusdiena: kur uzņēmums atrodas

Prasme katru prasību salīdzina ar to, ko uzņēmums jau dara, pēc tehniskā direktora atbildēm un esošajiem dokumentiem (darbinieku uzņemšanas kontrolsaraksts, rezerves kopiju skripts, mākoņa pakalpojuma iestatījumi).

| | 4.–10. punkts | A pielikuma kontroles |
|---|---|---|
| Nosegtas | 3 | 16 |
| Daļēji nosegtas | 9 | 22 |
| Atvērtas | 18 | 48 |
| Nepiemērojamas, ar pamatojumu | – | 7 |
| Kopā | 30, kā ielādēts; visas piemērojamas | 93 |

Lēmumi par A pielikuma kontrolēm ar pamatojumu kļūst par Piemērojamības paziņojuma pirmo versiju: kuras kontroles attiecas, kāpēc un vai tās ir ieviestas.

Pēc tam risku darbnīca ar tehnisko direktoru un vadošo inženieri, pa vienam jautājumam: 14 riski, katrs sasaistīts ar aktīviem, ko tas skar, un kontrolēm, kas to mazinātu.

## 2. diena: ieviešanas plāns

Atvērtās un daļēji nosegtās prasības kļūst par ieviešamām kontrolēm, sagrupētām darba virzienos. Katram virzienam ir īpašnieks un uzdevumi ar aplēstām stundām un termiņiem aptuveni divpadsmit nedēļu garumā, tāpēc darbs tiek sadalīts starp cilvēkiem, nevis paliek tehniskā direktora ziņā.

| Darba virziens | Īpašnieks | Uzdevumi | Stundas |
|---|---|---|---|
| Piekļuve un identitāte | Vadošais inženieris | 14 | 60 |
| Droša izstrāde un izmaiņas | Vadošais inženieris | 11 | 50 |
| Darbība, rezerves kopijas un žurnāli | Platformas inženieris | 15 | 70 |
| Cilvēki: uzņemšana, izpratne, aiziešana | Personāla vadītāja | 8 | 30 |
| Piegādātāji un līgumi | Biroja vadītāja | 7 | 25 |
| Pārvaldības sistēma: politika, riski, vadības pārskats | Tehniskais direktors | 16 | 80 |
| Iekšējais audits, ko veic darbā neiesaistīta persona (ārējs auditors vai konsultants) | Iekšējais auditors | 2 | 10 |

## 2. un 3. diena: politikas un procedūras līdz cilvēkiem

Prasme sagatavo dokumentus no uzņēmuma paša konteksta, nevis no vispārīgas veidnes. 13 dokumenti: informācijas drošības politika, Piemērojamības paziņojums, risku apstrādes plāns, pieņemamas lietošanas politika un procedūras piekļuvei, izmaiņām, rezerves kopijām, žurnāliem, incidentiem, piegādātājiem, darbinieku uzņemšanai, aiziešanai un iekšējam auditam.

Katrs dokuments ir atsevišķs ieraksts WINGMAN ar savu īpašnieku. Īpašnieks saņem pārskatīšanas uzdevumu, tehniskais direktors – apstiprināšanas uzdevumu. Pēc apstiprināšanas dokuments tiek izplatīts kā uzdevumi tiem, uz kuriem tas attiecas: pieņemamas lietošanas politika visiem 60 darbiniekiem, izmaiņu pārvaldība 14 inženieriem. Kurš savu vēl nav izpildījis, redzams atvērto uzdevumu sarakstā.

## Klienta anketa

Katrs no bankas 240 jautājumiem tiek sasaistīts ar kontroli un standarta punktu. Trīs no tiem:

| Bankas jautājums | Kontrole | ISO 27001 | Statuss 3. dienā |
|---|---|---|---|
| Vai visai administratīvajai piekļuvei prasāt daudzfaktoru autentifikāciju? | DFA mākoņa konsolei un koda repozitorijam | A.8.5 | Ieviests; pierādījums pievienots |
| Kā tiek pārskatītas izmaiņas ražošanas vidē? | Otrā pārskatīšana izlaides procesā | A.8.32 | Daļēji: izlaidēm ieviests, steidzamajiem labojumiem vēl nav |
| Vai pārbaudāt atjaunošanu no rezerves kopijām? | Atjaunošanas tests reizi ceturksnī | A.8.13 | Plānots: pirmais tests 6. nedēļā; pierādījuma vēl nav |

Pārējie 237 tiek sasaistīti tāpat. 3. dienā uz 96 no 240 varēja atbildēt ar jau ieviestām kontrolēm, uz 61 – daļēji, bet 83 norāda uz vēl neieviestām kontrolēm; tie tiek uzskaitīti kā nepilnības, nevis atbildēti.

## Lēmumi, ko var pieņemt tikai tehniskais direktors

1. Tvēruma apraksts.
2. Kurus riskus pieņemt un ar kādu vērtējumu.
3. Kuras A pielikuma kontroles nav piemērojamas un kāpēc.
4. Kurš atbild par katru darba virzienu.
5. Kad pieteikt sertifikācijas institūciju.

## Ko trīs dienas dod un ko nedod

Trīs dienās top tvērums, nepilnību analīze, risku reģistrs, plāns ar uzdevumiem katram cilvēkam un dokumenti – tā daļa, kas parasti aizņem mēnešiem ilgas sanāksmes. Plānā ietverto darbu paveikt prasa nedēļas. Pierādīt to – vēl ilgāk: kontrolēm jādarbojas un jāatstāj pierādījumi, pirms auditors tās var pārbaudīt. Pēc tam seko iekšējais audits, vadības pārskats un divi sertifikācijas institūcijas auditi: pirmais pārbauda dokumentus, otrais – kontroļu darbību. Cik mēnešu ierakstus vēlas redzēt jūsu sertifikācijas institūcija, jājautā tai; WINGMAN pa kontrolei parāda, kurām pierādījumi jau ir.

Tipisks kalendārs bankas noteiktajos divpadsmit mēnešos: plānā ietvertais darbs paveikts līdz 12. nedēļai; tad aptuveni trīs mēnešus kontroles darbojas un uzkrāj pierādījumus; iekšējais audits un vadības pārskats notiek 5. un 6. mēnesī; sertifikācijas institūcijas pirmais audits – 6. mēnesī, otrais – 7. līdz 9. mēnesī. Precīzos minimumus nosaka jūsu sertifikācijas institūcija, un tā ņem savu maksu.

## Ar konsultantu

Tās pašas trīs dienas var vadīt konsultants ar klienta ierakstiem. Prasme var būt paša konsultanta, ar viņa interviju jautājumiem un politiku veidnēm. Konsultants sagatavo iepriekš minētos piecus lēmumus; tos pieņem tehniskais direktors. Kad sadarbība beidzas, ieraksti paliek klienta darba vidē; konsultanta prasme paliek konsultanta īpašumā, paslēpta no Peak Defence un citiem konsultantiem.
