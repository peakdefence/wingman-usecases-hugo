---
title: Kiberizturības akts
short: CRA
sector: cra
weight: 50
summary: Iestrādāt CRA atbilstību tajā, kā produkti tiek izstrādāti un uzturēti, no risku novērtējuma un SBOM līdz ievainojamību apstrādei un ziņošanai.
audience: Produktu ar digitāliem elementiem ražotāji, importētāji un izplatītāji ES tirgū, tostarp programmatūras izstrādātāji.
standards:
- CRA (ES) 2024/2847
- CRA I pielikuma būtiskās prasības
- ISO/IEC 27001
- IEC 62443-4-1
stages:
- title: Tvērumā esošie produkti
  text: Katrs produkts ar digitāliem elementiem ir aktīvs ar savām versijām, komponentēm un atbalsta periodu. Tā CRA klase nosaka atbilstības novērtēšanas ceļu.
  nodes:
  - asset
  - requirement
  - supplier
  links:
  - asset-asset
  - supplier-asset
  ai: Ierosina produkta klasi ar pamatojumu un uzskaita trešo pušu komponentes no SBOM.
  decides: Produkta īpašnieks apstiprina.
- title: Produkta risku novērtējums
  text: Kiberdrošības riskus novērtē katram produktam un uztur aktuālus visu atbalsta periodu. Novērtējums ir daļa no tehniskās dokumentācijas.
  nodes:
  - risk
  - asset
  - threat
  - document
  links:
  - risk-asset
  - threat-risk
  - document-asset
  ai: Ierosina riskus no produkta arhitektūras, komponentēm un draudu ainas.
  decides: Produkta drošības atbildīgais apstiprina.
- title: Būtiskās prasības kā kontroles
  text: Katra I pielikuma prasība tiek sasaistīta ar izstrādes cikla kontrolēm, no kurām daudzas jau ir ieviestas ISO 27001 vai IEC 62443 vajadzībām.
  nodes:
  - requirement
  - control
  - document
  - task
  links:
  - requirement-control
  - requirement-requirement
  - control-document
  - control-task
  ai: Sasaista prasības ar esošajām kontrolēm un sagatavo uzdevumus nepilnībām.
  decides: Izstrādes vadītāji apņemas.
- title: Ievainojamību apstrāde
  text: Produkta un tā komponenšu ievainojamības tiek uzskaitītas ar nozīmīgumu, labojumu un drošības atjauninājumu visu atbalsta periodu.
  nodes:
  - signal
  - vulnerability
  - asset
  - task
  links:
  - signal-vulnerability
  - vulnerability-asset
  - vulnerability-task
  ai: Salīdzina brīdinājumus ar SBOM un ierosina nozīmīgumu.
  decides: Produkta drošības atbildīgais lemj par labojumiem un atklāšanu.
- title: Ziņošana
  text: Aktīvi izmantotām ievainojamībām un smagiem incidentiem ir 24 h, 72 h un gala ziņojuma termiņi, kopā ar nosūtītajiem ziņojumiem.
  nodes:
  - vulnerability
  - incident
  - document
  - role
  links:
  - incident-document
  - role-incident
  ai: Seko termiņiem un sagatavo paziņojumus un informāciju lietotājiem.
  decides: Atbildīgā loma izlemj, par ko ziņot.
- title: Atbilstība
  text: Tehniskā dokumentācija, pierādījumi un atbilstības novērtēšana parāda, ka katra prasība ir izpildīta, pirms tiek parakstīta ES atbilstības deklarācija.
  nodes:
  - audit
  - requirement
  - evidence
  - conclusion
  links:
  - audit-requirement
  - audit-evidence
  - conclusion-requirement
  ai: Sagatavo tehnisko lietu katrai prasībai un norāda nepilnības.
  decides: Vadība paraksta deklarāciju.
registers:
- entity: asset
  title: Produktu un komponenšu reģistrs
  text: Produkti ar digitāliem elementiem, versijas, atbalsta periodi, CRA klase un komponentes katrā versijā.
- entity: supplier
  title: Komponenšu piegādātāji
  text: Atvērtā koda projekti un komerciālie komponenšu piegādātāji ar pienācīgas rūpības pārbaudi un atbalsta statusu.
- entity: risk
  title: Produktu risku novērtējumi
  text: Kiberdrošības riski katram produktam, uzturēti aktuāli visu atbalsta periodu.
- entity: vulnerability
  title: Ievainojamību reģistrs
  text: Ievainojamības katram produktam un komponentei ar nozīmīgumu, labojumu, drošības atjauninājumu un atklāšanu.
- entity: incident
  title: Ziņojamie notikumi
  text: Aktīvi izmantotas ievainojamības un smagi incidenti ar termiņiem, ziņojumiem un turpmākajām darbībām.
- entity: requirement
  title: Būtiskās prasības
  text: I pielikuma prasības par produkta drošību un ievainojamību apstrādi, sasaistītas ar izstrādes kontrolēm.
- entity: document
  title: Tehniskā dokumentācija
  text: Risku novērtējums, SBOM, projektēšanas un testēšanas ieraksti, informācija lietotājiem un atbilstības deklarācija katram produktam.
use_cases:
- uc: vulnerability-impact
  text: Brīdinājumus salīdzina ar produktu komponentēm, tāpēc skartie produkti un versijas ir zināmi stundu laikā.
- uc: incident-handling
  text: Aktīvi izmantotām ievainojamībām un smagiem incidentiem ievēro ziņošanas termiņus, un ziņojumi tiek saglabāti ierakstā.
- uc: change-management
  text: Katram laidienam novērtē drošības ietekmi, un ieraksts kļūst par daļu no tehniskās dokumentācijas.
- uc: supplier-evaluation
  text: Trešo pušu un atvērtā koda komponenšu pienācīgas rūpības pārbaude, pirms tās nonāk produktā.
- uc: new-requirements
  text: Saskaņotie standarti un vadlīnijas saskaņā ar CRA tiek sasaistīti ar jau ieviestām kontrolēm.
- uc: risk-identification
  text: Produktu komandas identificē riskus katram produktam, kas saskaņā ar CRA jādokumentē un jāatjaunina.
- uc: auditing
  text: Iekšējās pārbaudes pret būtiskajām prasībām pirms atbilstības novērtēšanas.
questions:
- q: Kuros mūsu produktos un versijās ir šī ievainojamā komponente?
  a: No brīdinājuma uz ievainojamību, uz komponentēm un produktiem un versijām, kurās tās ir.
- q: Vai par šo ievainojamību jāziņo, un līdz kuram brīdim?
  a: Ievainojamības ierakstā redzams, vai tā tiek aktīvi izmantota, kādi termiņi piemērojami un kas jau nosūtīts.
- q: Kuras būtiskās prasības šis produkts vēl neizpilda?
  a: No produkta uz I pielikuma prasībām, uz kontrolēm, kas tās izpilda, un to pierādījumiem. Tas, kam nav kontroles, ir darba plāns.
- q: Kuri produkti vēl ir atbalsta periodā?
  a: Katra produkta ierakstā ir tā atbalsta periods, tāpēc drošības atjauninājumu pienākumi redzami katrai versijai.
---

Kiberizturības akts nosaka kiberdrošības prasības produktiem ar digitāliem elementiem visā to dzīves ciklā: drošu projektēšanu un izstrādi, risku novērtējumu, SBOM, ievainojamību apstrādi un drošības atjauninājumus atbalsta periodā, kā arī atbilstības novērtēšanu, pirms produktam tiek piešķirts CE marķējums. Ziņošana par aktīvi izmantotām ievainojamībām un smagiem incidentiem ir piemērojama no 2026. gada septembra; pārējie pienākumi sekos 2027. gada decembrī.

Tāpat kā NIS2, arī CRA ir vieglāk izpildīt kā sistēmu, nevis kā projektu. WINGMAN sistēmā produkti un to komponentes ir aktīvi, būtiskās prasības ir sasaistītas ar izstrādes kontrolēm, un ievainojamības, incidenti un dokumentācija ir sasaistīti ar produktu, uz kuru tie attiecas.
