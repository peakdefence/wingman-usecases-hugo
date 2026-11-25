---
title: Ceturkšņa vadības pārskata materiāli
weight: 10
summary: Ko vadības institūcija saņem pirms ceturkšņa pārskata un kas tiek fiksēts pēc tā. Katra rinda nāk no ieraksta, ko var atvērt.
for: [board, solo]
use_cases: [management-review]
---

**Piemērs SIA**, programmatūras uzņēmums ar 120 darbiniekiem. **Pārskats:** 2026. gada 3. ceturksnis, notika 2026. gada 14. oktobrī. **Sagatavots no ierakstiem:** 2026. gada 13. oktobrī.

Riskiem varbūtību un ietekmi vērtē skalā no 1 līdz 5; vērtējums ir abu reizinājums. Saskaņotā riska apetīte: riskam ar vērtējumu 12 vai vairāk vajadzīgs vadības institūcijas lēmums par apstrādi vai fiksēts pieņemšanas lēmums. Risku ar vērtējumu zem 12 var pieņemt riska īpašnieks.

## Lēmumi, ko lūdz pieņemt

1. **Apstrādāt risku virs noteiktās robežas.** R-07 „Klientu dati tiek atklāti caur identitātes serveri” 1. oktobrī pieauga no 8 līdz 16, kad atklājās, ka servera ievainojamību aktīvi izmanto uzbrucēji. Jau izdarīts: tajā pašā dienā servera administrēšanas konsole tika atslēgta no interneta, un 3. oktobrī tika uzstādīts ražotāja labojums. Ierosināts: pievienot administrēšanas konsolei otru pieslēgšanās pārbaudi, aptuveni 4000 EUR, līdz 30. novembrim; pēc tam riska īpašnieks sagaida, ka vērtējums atgriezīsies līdz 8. Ja atsakām, konsoli aizsargā tikai labojums un tīkla noteikums. Ierosinātājs: riska īpašnieks A. Ozola (IT direktore).
2. **Finansēt novēršanu riskam zem robežas.** Riska „Mākoņplatformu prot uzturēt tikai viens inženieris” vērtējums ir 9, tāpēc īpašnieks to var pieņemt, bet novēršanai vajag budžetu: apmācīt otru inženieri, aptuveni 6500 EUR un 15 darba dienas, līdz 2027. gada 1. ceturksnim. Ja nefinansē, īpašnieks risku pieņem un fiksē pamatojumu; ja inženieris aiziet, platformas atjaunošana pēc kļūmes var ilgt vairākas dienas. Ierosinātājs: M. Kalns (izstrādes vadītājs).
3. **Apstiprināt politiku.** Piekļuves pārvaldības politika, 4. versija. Kas mainās darbiniekiem: administratoru kontus pārskata reizi ceturksnī, un koplietošanas kontus likvidē līdz 30. novembrim.
4. **Finansēt testu.** Klientu portāla ārējā ielaušanās testēšana 4. ceturksnī, aplēse 18 000 EUR. Ja atsakām, portāls vēl gadu paliek bez ārējas pārbaudes, un divi bankas klienti to prasa katru gadu.
5. **Apstiprināt audita būtiskās neatbilstības novēršanas plānu.** Produkta B izmaiņas ražošanas vidē tika ieviestas bez prasītās pārskatīšanas. Plāns: līdz 15. decembrim steidzamos labojumus virzīt caur izlaides procesa apstiprināšanas soli, līdz 31. oktobrim pārskatīt nepārskatītās izmaiņas, martā pārbaudīt atkārtoti. Īpašnieks M. Kalns.

## Kur esam

WINGMAN MI sagatavotajā kopsavilkumā (13. oktobris; izmantotais modelis norādīts vēsturē): risks koncentrējas uz klientu portālu un identitātes serveri, no kura tas atkarīgs. 41 no 47 piemērojamām kontrolēm ir derīgi pierādījumi, iepriekšējā pārskatā bija 36; mērķis ir 47 līdz sertifikācijas auditam martā. Sešām to nav: algu aprēķina pakalpojuma sniedzēja pārskatīšana, klientu datubāzes atjaunošanas tests, administratoru kontu pārskatīšana, drošības apmācība jaunajiem darbiniekiem, žurnālu pārskatīšana un darbības nepārtrauktības mācības. Trim kontrolēm pierādījumu derīgums beigsies pirms nākamā pārskata.

## Kas mainījies kopš iepriekšējā pārskata

| Joma | Izmaiņas | Ieraksti |
|---|---|---|
| Riski | 3 jauni, 2 vērtējumi paaugstināti, 1 slēgts | R-31, R-32, R-33; R-07 (8 → 16) un R-12 paaugstināti; R-04 slēgts |
| Incidenti | Pikšķerēšanas e-pasts, ierobežots tajā pašā dienā. Mitināšanas pārtraukums 3 stundas, cēlonis pie pakalpojuma sniedzēja; J. Liepa (IT vadītājs) to ar pamatojumu klasificēja kā nenozīmīgu, tāpēc ziņot nevajadzēja | INC-18, INC-19 |
| Audits | Iekšējais ISO 27001 audits: 1 būtiska neatbilstība (izmaiņas ražošanas vidē ieviestas bez prasītās pārskatīšanas, A.8.32), 2 novērojumi | AUD-3 |
| Piegādātāji | Algu aprēķina pakalpojuma sniedzējs ziņoja par datu noplūdi; izvērtēts, Piemērs SIA dati nav skarti | SIG-44 |
| Pierādījumi | 3 kontrolēm beigsies 4 pierādījumu derīgums pirms nākamā pārskata | 3 kontroles |

## Kavētie darbi

| Uzdevums | Īpašnieks | Termiņš | Kavējums |
|---|---|---|---|
| Dzēst neizmantotos administratoru kontus | J. Liepa (IT vadītājs) | 30. sept. | 13 dienas |
| Pārbaudīt klientu datubāzes atjaunošanu | M. Kalns (izstrādes vadītājs) | 15. sept. | 28 dienas |

## Iepriekšējā pārskata lēmumi

| Lēmums (2. ceturksnis) | Statuss |
|---|---|
| Ieviest daudzfaktoru autentifikāciju visiem darbiniekiem | Izpildīts 12. augustā; pierādījums pievienots |
| Veikt klientu portāla darbības ietekmes analīzi | Izpildē; 2 no 3 pakalpojumiem pabeigti |
| Pārskatīt līgumu ar algu aprēķina pakalpojuma sniedzēju | Nav uzsākts; iekļauts atkārtoti |

## Fiksēts pēc sēdes

Protokols tiek saglabāts kā ieraksts, kurā fiksēts, kas tika iesniegts, kas izlemts un kurš apstiprināja. 1. lēmums: apstrāde finansēta. 2. lēmums: apmācība finansēta. 3. lēmums: apstiprināts. 4. lēmums: apstiprināts līdz 20 000 EUR. 5. lēmums: novēršanas plāns apstiprināts. Apstiprināja K. Bērziņš (valdes priekšsēdētājs) un L. Vītola (finanšu direktore) 14. oktobrī. Katrs lēmums kļuva par uzdevumu ar īpašnieku un termiņu, un neizpildītie tiek iekļauti nākamajā pārskatā. Katrai izmaiņai tiek saglabāts, kas to veica un kad, un vēsturi nevar labot vai dzēst.

Valsts iestādē lēmumus parasti noformē ar iestādes vadītāja rīkojumu, finansējumu iekļauj budžeta pieprasījumā un iegādes – iepirkumu plānā; uzbūve paliek tāda pati.
