---
title: VDAR un datu aizsardzība
short: VDAR
sector: gdpr
weight: 60
summary: Uzturēt apstrādes darbību reģistru, DPIA, apstrādātājus, datu subjektu pieprasījumus un pārkāpumus kā sasaistītus ierakstus, lai pārskatatbildību varētu pierādīt jebkurā brīdī.
audience: Ikviena organizācija, kas ES apstrādā personas datus kā pārzinis vai apstrādātājs, un tās datu aizsardzības speciālists.
standards:
- VDAR (ES) 2016/679
- Fizisko personu datu apstrādes likums
- ISO/IEC 27701
- ISO 27001
stages:
- title: Apstrādes darbību reģistrs
  text: Katra apstrādes darbība ir aktīvs, kas sasaistīts ar izmantotajām sistēmām un datiem, iesaistītajiem apstrādātājiem un biznesa īpašnieku. Kopā tās veido apstrādes darbību reģistru (30. pants).
  nodes:
  - asset
  - supplier
  - role
  links:
  - asset-asset
  - supplier-asset
  - role-asset
  ai: Sagatavo apstrādes darbības no sistēmām, līgumiem un esošajiem privātuma paziņojumiem.
  decides: Procesu īpašnieki apstiprina; datu aizsardzības speciālists pārskata.
- title: Nolūks un tiesiskais pamats
  text: Katrai darbībai ir dokumentēts nolūks, tiesiskais pamats, glabāšanas termiņš un datu subjektiem sniegtā informācija, kā arī leģitīmo interešu izvērtējums, ja tas nepieciešams.
  nodes:
  - requirement
  - document
  - asset
  links:
  - requirement-document
  - document-asset
  ai: Ierosina tiesisko pamatu un glabāšanas termiņu no nolūka un iezīmē darbības bez privātuma paziņojuma.
  decides: Datu aizsardzības speciālists konsultē; pārzinis lemj.
- title: DPIA un riski
  text: Augsta riska apstrādei veic novērtējumu par ietekmi uz datu aizsardzību (DPIA). Riski datu subjektiem ir piesaistīti apstrādes darbībai, kopā ar pasākumiem, kas tos mazina.
  nodes:
  - document
  - asset
  - risk
  - control
  links:
  - document-asset
  - risk-asset
  - control-risk
  ai: Pārbauda jaunas darbības pret DPIA kritērijiem un atkārtoti izmanto esošās drošības kontroles kā pasākumus.
  decides: Datu aizsardzības speciālists sniedz atzinumu; īpašnieks pieņem atlikušo risku.
- title: Apstrādātāji un nosūtīšana
  text: Apstrādātājiem ir datu apstrādes līgumi, apakšapstrādātāji un nosūtīšanas garantijas, un tos novērtē pirms izmantošanas.
  nodes:
  - supplier
  - document
  - audit
  - risk
  links:
  - supplier-document
  - audit-supplier
  - risk-supplier
  ai: Pārbauda, vai līgumos ir prasītie noteikumi, un uzskaita datu nosūtīšanu ārpus EEZ bez garantijām.
  decides: Iepirkumu funkcija un datu aizsardzības speciālists apstiprina.
- title: Pieprasījumi un pārkāpumi
  text: Datu subjektu pieprasījumi tiek uzraudzīti pret to termiņu. Personas datu aizsardzības pārkāpumiem izvērtē, vai jāziņo uzraudzības iestādei 72 stundu laikā un skartajām personām.
  nodes:
  - signal
  - incident
  - document
  - task
  - role
  links:
  - signal-incident
  - incident-document
  - incident-task
  - role-incident
  ai: Atrod darbības un sistēmas, uz kurām attiecas pieprasījums vai pārkāpums, seko termiņiem un sagatavo paziņojumus.
  decides: Datu aizsardzības speciālists konsultē; pārzinis lemj par ziņošanu.
- title: Pārskatatbildība
  text: Kontroles, pierādījumi un auditi parāda, ka principi tiek ievēroti, katrai prasībai un katrai apstrādes darbībai.
  nodes:
  - control
  - evidence
  - audit
  - conclusion
  - requirement
  links:
  - control-evidence
  - audit-control
  - audit-requirement
  - conclusion-requirement
  ai: Sagatavo pārskatatbildības materiālus katram pantam un iezīmē novecojušus pierādījumus.
  decides: Datu aizsardzības speciālists ziņo vadībai.
registers:
- entity: asset
  title: Apstrādes darbību reģistrs
  text: Apstrādes darbības ar nolūku, datu un datu subjektu kategorijām, saņēmējiem, glabāšanas termiņu, sistēmām un īpašnieku.
- entity: supplier
  title: Apstrādātāju un saņēmēju reģistrs
  text: Apstrādātāji un apakšapstrādātāji ar līgumiem, atrašanās vietām, nosūtīšanas garantijām un novērtēšanas datumiem.
- entity: document
  title: DPIA, paziņojumi un izvērtējumi
  text: DPIA, leģitīmo interešu izvērtējumi, privātuma paziņojumi un datu apstrādes līgumi, sasaistīti ar darbībām, uz kurām tie attiecas.
- entity: risk
  title: Privātuma riski
  text: Riski datu subjektu tiesībām un brīvībām katrai darbībai, tajā pašā skalā kā pārējais reģistrs.
- entity: incident
  title: Pārkāpumu reģistrs
  text: Katrs personas datu aizsardzības pārkāpums ar izvērtējumu, lēmumu par ziņošanu, nosūtītajiem paziņojumiem un turpmākajām darbībām, arī tie, par kuriem nav ziņots.
- entity: task
  title: Datu subjektu pieprasījumi
  text: Piekļuves, dzēšanas, labošanas un iebildumu pieprasījumi ar termiņu, atbildīgo un rezultātu.
- entity: control
  title: Tehniskie un organizatoriskie pasākumi
  text: Drošības un privātuma pasākumi (32. pants) ar īpašniekiem un pierādījumiem, kopīgi ar ISO 27001.
use_cases:
- uc: gdpr-dpia
  text: Šī skatpunkta kodols. Apstrādes darbību reģistrs un DPIA ar riskiem un pasākumiem katrai darbībai.
- uc: supplier-evaluation
  text: Apstrādātājus novērtē pirms izmantošanas, un datu apstrādes līgumi un nosūtīšanas garantijas glabājas pie piegādātāja.
- uc: incident-handling
  text: Personas datu aizsardzības pārkāpumiem pieņem lēmumu par ziņošanu 72 stundu laikā, un izvērtējums saglabājas arī tad, ja ziņots netiek.
- uc: change-management
  text: Jauns nolūks, sistēma vai apstrādātājs izraisa integrētas datu aizsardzības pārbaudi un DPIA nepieciešamības izvērtējumu pirms ieviešanas.
- uc: regular-reviews
  text: Apstrādes darbību reģistrs, glabāšanas termiņi un apstrādātāju līgumi tiek pārskatīti pēc grafika.
- uc: roles-raci
  text: Pārziņa, apstrādātāja un datu aizsardzības speciālista pienākumi ir piesaistīti lomām, un speciālista neatkarība ir redzama.
- uc: auditing
  text: Datu aizsardzības auditi katram pantam un katrai apstrādes darbībai, ar konstatējumiem, kas tiek uzraudzīti līdz novēršanai.
- uc: new-requirements
  text: Jaunas uzraudzības iestāžu un EDAK vadlīnijas tiek sasaistītas ar esošajiem pasākumiem.
questions:
- q: Kur mēs apstrādājam šīs personas datus?
  a: No datu subjektu kategorijas uz apstrādes darbībām, uz sistēmām un apstrādātājiem, kuros dati glabājas. Tas atbild uz piekļuves un dzēšanas pieprasījumiem.
- q: Vai par šo pārkāpumu jāziņo, un līdz kuram brīdim?
  a: No pārkāpuma uz skartajām darbībām un datiem un riskiem personām, ar 72 stundu termiņu un reģistrētu lēmumu.
- q: Kuri apstrādātāji saņem personas datus ārpus EEZ?
  a: No apstrādātāja uz tā atrašanās vietām un apakšapstrādātājiem, ar esošu vai trūkstošu nosūtīšanas garantiju.
- q: Kurām augsta riska darbībām nav DPIA?
  a: Apstrādes darbības, kas atzīmētas kā augsta riska, bet kurām nav sasaistīta DPIA, parādās kā nepilnības.
---

VDAR prasa, lai pārziņi ne tikai ievērotu noteikumus, bet arī spētu to pierādīt. Tas nozīmē aktuālu apstrādes darbību reģistru, tiesisko pamatu katram nolūkam, DPIA augsta riska apstrādei, apstrādātāju līgumus, strādājošu kārtību datu subjektu pieprasījumiem un pārkāpumu paziņošanai, kā arī riskam atbilstošus drošības pasākumus. Latvijā VDAR papildina Fizisko personu datu apstrādes likums, un uzraudzību veic Datu valsts inspekcija.

WINGMAN sistēmā apstrādes darbības ir aktīvi, tāpēc tās ir sasaistītas ar tām pašām sistēmām, piegādātājiem, riskiem un kontrolēm kā visa informācijas drošības programma. Datu aizsardzības speciālists strādā ar tiem pašiem ierakstiem kā drošības komanda, un pasākumi, kas izpilda ISO 27001, parādās arī kā VDAR pasākumi.
