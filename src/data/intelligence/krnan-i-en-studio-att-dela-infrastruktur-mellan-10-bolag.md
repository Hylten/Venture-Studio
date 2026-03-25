Kärnan i en Studio: Att dela infrastruktur mellan 10 bolag

#Inledning: Varför studios behöver gemensam infrastruktur

Venture studios arbetar under en helt annan logik än traditionella startupmiljöer. När tio eller fler bolag utvecklas parallellt i samma organisatoriska ekosystem uppstår en strukturell komplexitet som inte kan lösas med ad hoc-processer, fristående teknikstackar eller decentraliserade arbetsmetoder. Den centrala insikten är att värdet i en studio inte primärt skapas genom idégenerering, utan genom systematiseringen av hur idéer blir till autonoma, skalbara och välstrukturerade SaaS-bolag. 

I en studio är varje bolag en nod i ett större system. Stabilitet, tempo och kvalitet beror därför på hur väl de gemensamma komponenterna är konstruerade. Den studio som lyckas abstrahera bort allt onödigt repetitionsarbete, allt tekniskt overhead och all organisatorisk friktion, får en exponentiell fördel. Inte för att den blir snabbare per projekt, utan för att densamma infrastruktur multipliceras över en hel portfölj.

Gemensam infrastruktur blir därmed inte ett bekvämt tillval, utan själva kärnan. Den utgör en produkt lika mycket som de portföljbolag som byggs ovanpå den. 

Den här delen av artikeln analyserar hur en sådan delad studioinfrastruktur bör struktureras, vilka tekniska och organisatoriska krav som uppstår när tio samtidiga ventures ska samsas om samma fundament, samt varför studions eget systemarbete ofta är det som avgör bolagens sannolikhet att nå Series C och bortom.

#Principer för en delad studioarkitektur

En studios infrastruktur måste byggas på principer som skiljer sig från klassisk IT-arkitektur. Studioinfrastruktur ska vara generell men inte vag, standardiserad men inte rigid, återanvändbar men inte låst. Den ska kunna bära olika domäner, olika affärslogiker och olika regleringskrav, men samtidigt minimera variation i allt som inte utgör ett differentiellt värde för bolagen.

Tre principer brukar framträda som särskilt viktiga:

1. Baslager måste vara identiska mellan bolagen  
2. Differentiering ska ske så sent som möjligt i stacken  
3. Plattformen ska vara produktifierad internt, inte administrerad

Om dessa principer misslyckas skapas fragmenterade datastrukturer, divergerande tekniska val, ökande handoverkostnader och i slutänden ökande tid till marknaden för varje nytt bolag. Framför allt begränsas studions kapacitet att driva flera parallella ventures utan att kostnaderna eskalerar.

Studion behöver istället en enhetlig kärna: ett fundament för data, AI, identitet, säkerhet, drift, integrationshantering och operativ struktur. Detta fundament måste byggas från dag ett, innan något enskilt bolag når sin första kund.

#Datainfrastruktur som gemensam ryggrad

Data är det mest kritiska lagret i en studio, eftersom det möjliggör skalbara AI-funktioner, operativ standardisering och delad systemintelligens. I en miljö där tio bolag genererar egna loggar, användardata, aktivitetsflöden och modelloutput kommer fragmentering snabbt att skapa höga kostnader för transformation, normalisering och analys.

Ett studioekosystem kräver därför ett gemensamt datalager. Inte en monolitisk databas, utan en gemensam struktur för hur data modelleras, lagras, versioneras, etiketteras och exponerats. Detta inkluderar:

- Gemensam domänmodell som utgångspunkt  
- Delade standarder för eventmodeller och semantisk struktur  
- Identisk pipeline för datainhämtning och validering  
- Centralt kontrollerad metadatahantering  
- Multitenant-lösningar där varje bolag isoleras logiskt men delar samma arkitektur  

När datainfrastrukturen är delad kan varje bolag bygga en egen applikation ovanpå ett gemensamt system av sanningskällor, governance och pipelines. Det skapar konsekvens, förutsägbarhet och snabbare iterationer.

Ett centralt datalager blir också en katalysator för studions interna AI-plattformar. När modeller tränas på en harmoniserad databas, snarare än tio frikopplade dataströmmar, skapas en kvalitativ konsekvens som annars är svår att uppnå i startups. Det möjliggör modellbibliotek, återanvändning av features, och snabbare implementering av domänspecifika agenter som sedan replikeras över flera ventures.

#AI-infrastruktur som plattform snarare än komponent

I dagens venture studio är AI inte en modul som läggs till i slutet. Den är ett centralt verktyg för byggandet i sig. Det innebär att studion behöver en gemensam AI-infrastruktur som fungerar som en plattform, inte som ett fristående verktyg som varje bolag måste integrera på egen hand.

Denna infrastruktur behöver innehålla:

- Gemensamma modelldepåer  
- Standardiserade API:er för inferens  
- Interna orchestrators för agentflöden  
- Delade embeddingslager  
- Centraliserad evaluation och monitoring  
- Identiska processer för prompt- och kontextversionering  
- Rollbaserade säkerhetsgränser mellan ventures  

Poängen är att AI-lagret ska vara en central del av studions eget system, inte varje bolags eget ansvar. När tio bolag delar samma modeller, samma pipelines och samma monitoringsystem kan studion förbättra hela portföljen simultant.

Det gör att innovationshastigheten inte blir linjär och bolagsspecifik, utan systemisk. Ett framsteg i en modell, en förbättrad agent-loop eller en ny orchestration-metod kan rullas ut till samtliga ventures på några dagar.

Det är så en studio konkurrerar med traditionella startups: inte genom snabbare produktutveckling per bolag, utan genom en gemensam teknisk hävstång som multipliceras över hela portföljen.

#Delad drift och säkerhet som strukturell nödvändighet

Att drifta tio bolag separat är inte bara ineffektivt utan riskabelt. Varje skild driftmiljö skapar egna attackytor, separata patchflöden och oberoende ansvar för beroenden och uppgraderingar. I praktiken innebär det att varje bolag behöver egen DevOps-kompetens, egna rutiner och egna uppsättningar verktyg.

En studio bör istället ha en enhetlig driftplattform med:

- Centraliserad logghantering  
- Gemensamt SSO-lager  
- Enhetliga säkerhetspolicies  
- Multitenant-arkitektur för deployment  
- Samlad incidenthantering  
- Delade observability-verktyg  

Denna struktur gör det möjligt att:

- rulla ut säkerhetspatchar globalt  
- automatisera baseline-konfigurationer  
- förhindra teknisk divergens  
- uppnå högre stabilitet över portföljen  
- sänka kostnader för compliance och auditing  

När tio bolag blir tolv, femton eller tjugo fortsätter samma plattform att skala. Det är en av de tydliga skillnaderna mellan studios som arbetar som systembyggare kontra studios som låter portföljbolagen utvecklas mer fritt.

Från investerarperspektiv är detta också avgörande. Series C-investerare kräver en stabilatorgansk struktur där riskeliminerande mekanismer redan är integrerade. De accepterar inte en portfölj av ventures med divergerande säkerhetsnivåer eller ostandardiserade driftsmodeller. Delad infrastruktur blir därmed ett kvalitetsbevis.

#Operativ standardisering och interna playbooks

Tekniska system är bara halva bilden. För att dela infrastruktur mellan tio bolag krävs också operativ enhetlighet. När varje venture byggs av olika team och olika ledare behövs ett system för att minimera variation i processer, beslutscykler och leveransmetodik.

Det handlar inte om att skapa byråkrati, utan om att avlasta grundarna från allt som inte skapar direkt affärsvärde. Detta uppnås genom:

- Identiska sprintmetoder  
- Standardiserade discovery-processer  
- Gemensamma metoder för produktvalidering  
- Centraliserad kunskapsbank  
- Delade instrumentpaneler för KPI-tracking  
- Enhetliga roller och ansvar mellan ventures  

När dessa strukturer är på plats kan studion växla resurser mellan bolag, säkerställa konsekvent kvalitet och snabbt absorbera nya teammedlemmar utan stora onboardingkostnader.

I praktiken innebär det att operativ kunskap själv blir en del av infrastrukturen. Det är inte bara kod som återanvänds, utan även beslutsmönster och arbetsflöden. Detta är ofta osynligt i tidiga faser men blir extremt tydligt när portföljen växer.

#Integrationer som gemensam horisont

SaaS-bolag i B2B-segmentet är beroende av integrationer med externa system. CRM, ERP, identitetssystem, bokföring, kommunikationslager och branschspecifika API:er utgör en stor del av produktens värdeleverans.

Om tio bolag bygger integrationer separat är det en enorm kapitalförstöring. Kostnaden landar på varje bolag, kvaliteten varierar, dokumentation glider och långsiktigt underhåll blir dyrt.

En studio behöver därför ha ett internt integrationslager med:

- Delad connector-arkitektur  
- Standardiserad approach till autentisering  
- Unified mapping-modell mellan externa system och studions basdomän  
- Gemensamma SDK:er för klientintegrationer  
- Versionering och rollback som är konsistent över portföljen  

På detta sätt kan en integration som utvecklas för ett bolag kunna användas av sju andra inom samma vecka. Det förflyttar integrationsfrågan från att vara en kostnadspost till att bli en konkurrensfördel.

Dynamiken förändras. Istället för att tänka att varje bolag ska hantera sina egna gränssnitt, byggs ett bibliotek av integrationskapacitet som utgör en växande tillgång för hela studion.

#Identitetshantering och användarstruktur som grundläggande gemensam komponent

Alla SaaS-produkter behöver hantera användare, behörigheter, roller, autentisering, sessioner och organisationsstrukturer. Det är ett område där hundratals beslut måste fattas och där många startups lägger oproportionerligt mycket tid.

I en studio ska detta vara ett gemensamt lager. Identitet är för centralt för att låta varje venture definiera sina egna modeller. När studion centraliserar identitetssystemet kan följande uppnås:

- Delade standarder för rollhierarki  
- Enhetlig implementation av SSO  
- Centraliserad hantering av access-nivåer  
- Identiska säkerhetsprinciper för alla bolag  
- Förutsägbarhet för kundorganisationer som använder flera produkter  

Där startups annars riskerar att bygga interna identitetssystem som senare måste rekonstrueras från grunden inför skalning, kan studion istället erbjuda ett moget lager från dag ett. Det skalar portföljen i samma takt som kundernas organisationskomplexitet.

#Resurser som roteras mellan ventures

När tekniken är delad uppstår möjligheten att rotera människor mellan bolag utan friktion. Det är en av studios största strategiska fördelar, men den fungerar endast om underliggande system, processer och språk är konsekventa.

Om en designer, utvecklare eller analytiker kan flyttas mellan bolag utan att behöva lära om verktyg, ramverk eller datamodeller, kan studioledningen optimera resursallokering i realtid. Det innebär att bolag i snabb tillväxt får mer kapacitet, medan bolag i valideringsfas kan operera mer slimmat.

Detta kräver:

- Identisk stack för alla ventures  
- Samma ramverk och bibliotek  
- Enhetliga kodstandarder  
- Delade CI/CD-flöden  
- Central onboarding  

En studio fungerar då som ett levande system där människor rör sig i takt med portföljens behov, inte i takt med individuella bolags budgetar. Det möjliggör en styrningsmodell som är mycket svår att replikera i andra organisationsstrukturer.

#Kostnadsstruktur och effektivitet i en multiventure-miljö

En av de mest påtagliga effekterna av en delad infrastruktur är kostnadsminskningen. Men den är inte linjär. Den är exponentiell.

När två bolag delar system sparas en viss mängd tid och pengar, men när tio gör det blir effekten multiplicerande. Driftkostnader delas, kompetensutnyttjande optimeras, integrationer återanvänds och varje förbättring i studions basplattform distribueras till alla ventures samtidigt.

Det är en form av systemisk kapitalisering: varje investerad krona i infrastrukturen ökar värdet på hela portföljen, inte bara på ett bolag. Detta är motsatsen till traditionella VC-modeller där varje bolag investerar i sin egen arkitektur och där kunskap och teknik blir isolerade ön.

Studion bygger istället en meta-produkt, en plattform för att bygga produkter, och den ökar i värde i takt med att fler ventures läggs till.

#När infrastrukturen blir produkten

Den centrala tesen i denna text är att studions eget system är dess viktigaste tillgång. Kodbasen är en del av det, men det är lika mycket en fråga om datastrukturer, arbetsmetoder, beslutslogik, teknisk standardisering och AI-baserade verktyg.

I en mogen studio är infrastrukturen så välutvecklad att nya bolag inte behöver börja från noll, utan från en exponentiellt högre baslinje. Det innebär:

- kortare väg till första betalande kund  
- kortare tid till förutsägbar churn-reduktion  
- snabbare uppbyggnad av teknisk kvalité  
- mindre risk i tidiga faser  
- högre sannolikhet att nå Series B och C  

Det är därför studios som tar sin infrastruktur på största allvar systematiskt överpresterar studios som ser infrastrukturen som overhead. Den första kategorin bygger ett ekosystem. Den andra bygger en portfölj.

I nästa del kommer vi att analysera hur studioinfrastrukturen konkret implementeras och hur...





Att utforma en gemensam studioinfrastruktur för tio separata bolag innebär att varje komponent måste fungera som ett neutralt och flexibelt lager. Det är en balansakt mellan att skapa något som är robust nog att bära allas behov och samtidigt tillräckligt modulärt för att ingen ska känna sig begränsad eller tvingad in i ett arbetssätt som inte passar dem. När flera verksamheter delar samma grund låser man också upp möjligheten att skala sådant som annars hade blivit för dyrt eller för komplext för ett enskilt bolag att bära. Den här delen handlar om vad denna kärna faktiskt består av, hur den formas och hur man undviker att den blir flaskhalsen som stoppar utveckling.

#Principerna bakom en gemensam kärna

Grunden i en delad studio är att all infrastruktur betraktas som ett ekosystem. Det är inte en monolit som trycks på alla, utan ett antal centrala förmågor som delas när det är vettigt och separeras när det behövs. Tre principer styr detta arbete.

För det första måste varje komponent vara utbytbar. Att dela är bra, men bara om varje del av kärnan kan förnyas utan att hela systemet måste rivas upp. Det innebär tydliga gränssnitt, god dokumentation och en kultur där man accepterar att kärnan lever och förändras.

För det andra ska alla verktyg och plattformar i kärnan vara neutrala. De ska inte favorisera ett visst bolag eller en viss arbetsmetod. I praktiken innebär det att lösningar väljs utifrån mognad, flexibilitet och driftbarhet snarare än preferenser hos en enskild produktchef.

För det tredje behöver man tänka på beroenden på ett annat sätt än när man bygger för ett enskilt bolag. Delad infrastruktur får aldrig bli ett hinder. Därför måste den kunna användas eller kringgås efter bolagets egna behov. De bolag som vill använda den fullt ut ska kunna göra det. De som bara behöver vissa delar ska inte begränsas. Och de som vill göra något helt eget ska kunna koppla loss sig helt utan att allt faller.

#Tekniska byggblock som alla kan samsas kring

Den delade studion brukar bestå av ett antal centrala byggblock som är tillräckligt generella för att många bolag kan använda dem men samtidigt tillräckligt kraftfulla för att varje bolag ska slippa uppfinna hjulet från början.

En modern identitetsplattform är nästan alltid först på listan. Utan en gemensam lösning för hur användare, roller och åtkomst kontrolleras riskerar man tidigt att bygga tio egna öar som inte går att integrera. Identitetsplattformen behöver kunna hantera både interna användare och slutkunder och måste ha stöd för delegation, federation och framtida organisationsförändringar. Om den saknar flexibilitet kommer bolagen förr eller senare att börja bygga runt den, vilket snabbt skapar fragmentering.

Ett andra centralt block är en gemensam datoinfrastruktur. Det handlar inte nödvändigtvis om en enda dataplattform, utan om ett system av pipelines, lagringsformat och delningsmodeller som tillåter bolagen att både dela och isolera data beroende på behov. Det viktiga här är att skapa en miljö där data inte ägs av ett centralt team utan av verksamheterna själva, men där samma verktyg och principer används överallt. En datoinfrastruktur som skalar på detta sätt ger varje bolag möjlighet att bygga vidare på andras arbete utan att behöva anpassa sig till exakt samma processer.

Ett tredje block är utvecklingsmiljön. Här handlar det om CI/CD, kodstandarder, teststrategier och förvaltningsrutiner. Den ska inte vara tvingande, men den ska vara så pass välgjord att de flesta naturligt väljer att använda den i stället för att bygga egna alternativ. Det är särskilt viktigt att bygga in automation och säkerhet redan från början. Ju fler manuella moment som krävs, desto större är risken att bolagen väljer bort den med motiveringen att den är för tung.

#Balansen mellan möjliggörande och kontroll

Alla delade miljöer riskerar att skapa en osund mängd central kontroll. Detta kan ske även om ingen avsikt att kontrollera finns från början. Det uppstår när centrala team får för stort inflytande över verktyg och beslut. För att undvika detta måste man redan tidigt separera ansvarsfördelningen.

Kärnans förvaltning behöver ske genom ett facilitetande team snarare än ett styrande. Teamets roll är att hjälpa bolagen att lyckas, inte att driva dem mot en viss lösning. Det är också viktigt att en gemensam studio inte utformar policys som i praktiken låser utvecklingen. Policys ska skydda och möjliggöra, inte begränsa.

Den andra aspekten handlar om ägandeskap. Om den gemensamma infrastrukturen ägs av ett centralt bolag eller en särskild enhet finns risken att övriga bolag känner sig som kunder, inte medskapare. När man arbetar med tio bolag måste därför varje bolag kunna påverka kärnan och även bidra med resurser eller komponenter. Den delade studion blir starkare när den växer organiskt och inte bara genom centrala direktiv.

#Skalbarhet över tid

När bolag växer i olika hastighet uppstår nya krav som den gemensamma studion måste hantera. Ett snabbväxande bolag kommer vilja experimentera snabbare, kanske ta in nya tekniker och metoder, medan ett annat bolag vill ha stabilitet och förutsägbarhet. Den gemensamma infrastrukturen måste kunna stödja båda dessa ytterligheter utan att bli överkomplicerad.

Det innebär att man bör planera för modulär skalbarhet. Varje komponent ska kunna uppgraderas, bytas eller kompletteras utan att hela studion måste följa med. Ett bra sätt att tänka är att varje del i kärnan ska ha tre nivåer: en gemensam baseline, tillval för avancerade behov och möjlighet att ersätta allt med en helt egen lösning. När bolag själva kan välja sin nivå minskar friktionen och risken att den centrala plattformen förlorar relevans.

En annan viktig aspekt är kostnadsmodeller. Om alla bolag delar resurser måste kostnaderna fördelas på ett sätt som uppfattas som rättvist. Ett bolag som knappt använder infrastrukturen ska inte betala lika mycket som ett som bygger hela sin verksamhet på den. Samtidigt får man inte skapa en modell som är så detaljerad att den leder till micromanagement och konflikter. Transparens och tydliga principer är nyckeln.

#När flexibiliteten blir en risk

Det finns en baksida med alltför hög flexibilitet. Om varje bolag kan göra precis som de vill finns risken att den gemensamma studion tappar sitt värde. Då står man till slut med tio helt olika ekosystem som råkar dela kontor men inte teknik eller metoder.

Det handlar därför om att hitta gränsen där variation är hälsosam men inte destruktiv. Baslinjen måste vara stark och tydlig. Det måste vara enkelt att komma igång och svårt att gå vilse. Standarderna i kärnan behöver vara minimalt invasiva men maximalt värdeskapande. Till exempel kan man låta bolagen välja programmeringsspråk men kräva att allt byggs med gemensamma säkerhetskomponenter. Eller man kan fritt välja molnresurser men alltid använda samma identitetslager.

Poängen är att varje frihet bör balanseras av en princip som säkerställer långsiktig hållbarhet.

#Sociala och kulturella aspekter av delad infrastruktur

Tekniken är bara halva uppgiften. När tio bolag ska dela samma studiomiljö krävs ett gemensamt språk, gemensamma möten och en kultur som gör det möjligt att samarbeta utan att tappa sin egen identitet. Detta är ofta svårare än de tekniska delarna.

Ett effektivt sätt är att etablera gemensamma forum där varje bolag kan ta upp behov, utmaningar och förslag. Forumet fungerar då som en plats där riktningen för kärnan förhandlas. Det är inte ett beslutande organ, men en yta där man skapar samsyn. Den slutliga förvaltningen sköts av ett mindre team, men besluten är förankrade.

En annan viktig del är att skapa synlighet i vad som byggs, vad som är på väg att ändras och vilka beroenden som finns. Transparens i förändringar ökar tilliten och minskar friktion eftersom bolagen kan planera sin egen utveckling bättre.

#Kärnans roll i innovationsförmågan

Den största fördelen med en gemensam studio är att den kan accelerera innovation. När verktyg, data, infrastruktur och processer delas kan bolagen inspireras av varandra. En metod som fungerar i ett bolag kan snabbt spridas till de andra. Ett ramverk som utvecklats för att lösa ett specifikt problem kan bli en del av kärnan och därmed automatiskt tillgängligt för alla.

Det minskar också tröskeln för att starta nya bolag. En entreprenör inom organisationen kan få tillgång till identitetshantering, datahantering, deploy-pipelines och supportstruktur redan innan första produktidén är färdig. Detta skapar en form av industriellt tempo där idéer inte behöver leva isolerat och där experiment kan göras med mindre risk.

#Sammanfattning

Kärnan i en gemensam studio för tio bolag är inte en plattform utan en filosofi. Det handlar om att bygga stabila, neutrala och skalbara byggblock som möjliggör hastighet utan att skapa kaos. Det kräver tydliga principer, rätt ägandemodell och en kultur där delning är normen men där valfriheten fortfarande lever. När det görs rätt blir kärnan den struktur som håller samman en mångfald av bolag och samtidigt ger varje bolag utrymme att växa på sitt eget sätt.

---

TECHNICAL MANDATE

Qualification gates strictly observed for comprehensive structural execution.
Access is restricted to approved mandates.
Minimum target size: 500K SEK+.

Book a confidential briefing.
