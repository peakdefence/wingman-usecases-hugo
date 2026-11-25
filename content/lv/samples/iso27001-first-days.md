---
title: ISO 27001 no nulles, pirmās trīs dienas
weight: 5
summary: Programmatūras uzņēmums ar 60 darbiniekiem un bez drošības komandas izmanto ieviešanas prasmi ar WINGMAN. Kas top katru dienu, kurš ko dara un kam joprojām vajadzīgs laiks.
for: [start, consultant]
use_cases: [new-requirements, risk-identification]
---

**Piemērs Labs**, programmatūras uzņēmums ar 60 darbiniekiem. Bankas klients prasa ISO 27001 sertifikātu divpadsmit mēnešu laikā. Drošības speciālista nav; to vada tehniskais direktors T. Ozols ar Claude Code, ieviešanas prasmi un WINGMAN. Prasme strādā ar WINGMAN ierakstiem un tur arī veido savus uzdevumus, tāpēc katrs rezultāts saglabājas nākamajam solim un cilvēkiem, kas darbu veiks.

## 1. diena, rīts: konteksts un tvērums

Prasme uzdod vienu jautājumu pēc otra: ko uzņēmums veido, kur tas darbojas, kā cilvēki autentificējas, kas ir klienti, kuri piegādātāji ir svarīgi, kurš var palīdzēt. No atbildēm:

- **Tvērums:** „Piemērs Labs analītikas platformas izstrāde, uzturēšana un atbalsts, kas darbojas publiskā mākonī, no Rīgas un Tallinas birojiem. Korporatīvais IT ir iekļauts tiktāl, cik tas atbalsta platformu.”
- **Izveidotie aktīvi, katram savs īpašnieks:** analītikas platforma, mākoņa konts, koda repozitorijs, identitātes pakalpojums, klientu datubāze, atbalsta dienests un 9 piegādātāji.
- **Ielādētais ietvars:** ISO/IEC 27001:2022, 4.–10. punkts un 93 A pielikuma kontroles kā prasību ieraksti.

## 1. diena, pēcpusdiena: kur uzņēmums atrodas

Prasme katru prasību salīdzina ar to, ko uzņēmums jau dara, pēc tehniskā direktora atbildēm un esošajiem dokumentiem (darbinieku uzņemšanas kontrolsaraksts, rezerves kopiju skripts, mākoņa pakalpojuma iestatījumi).

| | Prasības |
|---|---|
| Nosegtas | 19 |
| Daļēji nosegtas | 31 |
| Atvērtas | 43 |
| Nepiemērojamas, ar pamatojumu | 7 |

Pēc tam risku darbnīca ar tehnisko direktoru un vadošo inženieri, pa vienam jautājumam: 14 riski, katrs sasaistīts ar aktīviem, ko tas skar, un kontrolēm, kas to mazinātu.

## 2. diena: ieviešanas arhitektūra

Atvērtās un daļēji nosegtās prasības kļūst par ieviešamām kontrolēm, sagrupētām darba virzienos. Katram virzienam ir īpašnieks un uzdevumi ar stundām un termiņiem, tāpēc darbs tiek sadalīts starp cilvēkiem, nevis paliek tehniskā direktora ziņā.

| Darba virziens | Īpašnieks | Uzdevumi | Stundas |
|---|---|---|---|
| Piekļuve un identitāte | Vadošais inženieris | 9 | 22 |
| Droša izstrāde un izmaiņas | Vadošais inženieris | 7 | 18 |
| Darbība, rezerves kopijas un žurnāli | Platformas inženieris | 8 | 20 |
| Cilvēki: uzņemšana, izpratne, aiziešana | Personāla vadītāja | 6 | 10 |
| Piegādātāji un līgumi | Biroja vadītāja | 5 | 8 |
| Pārvaldības sistēma: politika, riski, audits, pārskats | Tehniskais direktors | 11 | 26 |

## 2. un 3. diena: politikas un procedūras līdz cilvēkiem

Prasme sagatavo dokumentus no uzņēmuma paša konteksta, nevis no vispārīgas veidnes: informācijas drošības politiku, pieņemamas lietošanas politiku un procedūras piekļuvei, izmaiņām, rezerves kopijām, incidentiem, piegādātājiem, darbinieku uzņemšanai un aiziešanai. Kopā 11 dokumenti, katram savs īpašnieks.

Katram dokumentam ir pārskatīšanas uzdevums tā īpašniekam un apstiprināšanas uzdevums tehniskajam direktoram. Pēc apstiprināšanas tas tiek izsūtīts kā iepazīšanās uzdevums tiem, uz kuriem attiecas: pieņemamas lietošanas politika visiem 60 darbiniekiem, izmaiņu pārvaldība 14 inženieriem. Kurš ir izlasījis un kurš nav, ir redzams sarakstā.

## Klienta anketa

Trīs no bankas 240 jautājumiem, atbildēti no ierakstiem:

| Bankas jautājums | Kontrole | ISO 27001 |
|---|---|---|
| Vai visai administratīvajai piekļuvei prasāt daudzfaktoru autentifikāciju? | DFA mākoņa konsolei un koda repozitorijam | A.8.5 |
| Kā tiek pārskatītas izmaiņas ražošanas vidē? | Otrā pārskatīšana izlaides procesā | A.8.32 |
| Vai pārbaudāt atjaunošanu no rezerves kopijām? | Atjaunošanas tests reizi ceturksnī, ar pierādījumu | A.8.13 |

## Lēmumi, ko var pieņemt tikai tehniskais direktors

1. Tvēruma apraksts.
2. Kurus riskus pieņemt un ar kādu vērtējumu.
3. Kuras A pielikuma kontroles nav piemērojamas un kāpēc.
4. Kurš atbild par katru darba virzienu.
5. Kad pieteikt sertifikācijas institūciju.

## Ko trīs dienas nesaīsina

Iepriekš aprakstītais ieviešanas darbs aizņem dienas, nevis mēnešus. Pierādīšana ne: kontrolēm jādarbojas un jāatstāj pierādījumi, pirms auditors tās var pārbaudīt. Pēc tam seko iekšējais audits, vadības pārskats un sertifikācijas institūcijas 1. un 2. posma audits. Cik mēnešu ierakstus vēlas redzēt jūsu sertifikācijas institūcija, jājautā tai; WINGMAN pa kontrolei parāda, kurām pierādījumi jau ir.
