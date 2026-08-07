---
title: "Vertical AI i tidiga skeden: Hur man bygger för suveränitet från dag ett"
slug: "vertical-ai-early-stage-104-vertical-ai-"
description: "Vertical AI i tidiga skeden: Hur man bygger för suveränitet från dag ett. Ett tekniskt ramverk för att navigera olinjära marknadsrörelser och vertikal dominans."
date: "2026-03-19"
tags: []
categories: ["ai-enterprise"]
canonical_url: "https://hylten.github.io/Venture-Studio/intelligence/vertical-ai-early-stage-104-vertical-ai-/"
meta_title: "Vertical AI i tidiga skeden: Hur man bygger för suveränitet från dag ett"
meta_description: "Vertical AI i tidiga skeden: Hur man bygger för suveränitet från dag ett. Ett tekniskt ramverk för att navigera olinjära marknadsrörelser och vertikal dominans."
featured_image: ""
draft: false
author: "Jonas Hyltén"
---

## Inledning: Den nya systemlogiken för vertikal AI

De senaste åren har det skett en fundamental förskjutning i hur AI-bolag byggs, finansieras och skalas. Tidiga faser av bolagsbyggande inom vertikal AI har traditionellt handlat om snabb produktiteration, tidig kundvalidering och opportunistisk användning av öppna modeller. Denna logik är nu otillräcklig. När AI-funktionalitet blir kommodifierad och datainfrastruktur växer i strategisk betydelse räcker det inte längre att ha en applikation ovanpå en generisk generativ modell. Det som tidigare uppfattades som tekniskt sofistikerat är nu baseline.

Det nya strategiska lagret är suveränitet: kontroll över data, kontroll över träningspipeline, kontroll över den funktionsspecifika modellens beteende. Vertikala aktörer i tidiga skeden måste planera för detta redan från dag ett för att undvika strukturella beroenden som blir svåra att bryta när man når Series C och framåt. Denna artikel handlar om hur man etablerar rätt teknisk och organisatorisk arkitektur för att göra det möjligt.

Suveränitet handlar inte om att bygga allt själv. Det handlar om att skapa ett territorium där verksamhetskritiska beslut och kapabiliteter inte delegeras till externa system som utvecklas snabbare än man kan integrera dem. Ett vertikalt AI-bolag som lyckas kommer att se sin modellstack som en tillgångsklass, inte som en kostnadspost.

## Varför vertikal AI kräver en annan grundläggande arkitektur

Vertikal AI skiljer sig från horisontella AI-plattformar på ett sätt som ofta missförstås. Vertikaler definieras inte bara av nisch eller bransch, utan av att den operativa komplexiteten är kontextbunden. En modell för finansiell due diligence, kemisk processoptimering eller fastighetsunderhåll styrs av regler, datastrukturer, feedback-loopar och domänspråk som inte kan generaliseras horisontellt utan betydande kvalitetsförlust.

I denna kontext är det kontraproduktivt att bygga lösningar som huvudsakligen förlitar sig på generiska foundation-modeller. De erbjuder snabb start men begränsar förmågan att utveckla unika modellbeteenden. För att bygga ett konkurrenskraftigt system måste tidiga team redan från början planera en modellpipeline som kan skräddarsys över tid.

Det finns tre strukturella anledningar till detta:

1. Domänspecifika modeller kräver domänspecifik data, och datainsamling börjar i det första kundmötet  
2. Modellkvalitet styrs av den träningspipeline som definieras innan skalning  
3. Vertikala marknader premierar exakthet och pålitlighet över bredd  

Detta innebär att tidiga designbeslut har oproportionerligt stor inverkan på framtida kapabilitet. Det är inte möjligt att i efterhand lägga till suveränitet om man redan är beroende av externa beteendemodeller för kärnfunktionalitet.

## Grunden: Varför suveränitet är en Series C-fråga som måste lösas i Seed

När vi talar med grundare som bygger inom vertikal AI ser vi samma mönster: de flesta investerare börjar ställa frågor om modellägande och pipelinekontroll först när bolaget närmar sig Series C. Men vid det laget är vägen redan utstakad. Arkitekturen ligger fast. Customer-facing workflows är intimt integrerade med en extern modell. Kunddata ligger i proprietära format skapade av externa API-leverantörer. Det är svårt att bryta sig loss.

Det är därför suveränitet måste designas innan skalan kommer.

Suveränitet möjliggör tre saker som är centrala för ett vertikalt AI-bolag i tillväxt:

1. Prediktiv kostnadskontroll i inference- och finetuning-flöden  
2. Möjlighet att optimera modellbeteende för branschspecifika edge cases  
3. Datakvalitet och datapipeline som kan certifieras, granskas och standardiseras  

Detta är särskilt viktigt för verksamheter som siktar på enterprise-distribution, regulatoriska miljöer eller plattformsintegration med tröskelkrav. Att inte äga sin modellpipeline betyder att man saknar kontroll över produkten, även om man tror att man levererar funktionalitet.

## Vertikal AI som datainfrastruktur snarare än applikation

Ett vanligt misstag tidiga grundare gör är att se sin produkt som ett användargränssnitt ovanpå en stor generativ modell. I praktiken kommer ett vertikalt AI-bolag över tid att utvecklas till en datainfrastrukturverksamhet, oavsett hur den externa presentationen ser ut.

Applikationslagret är det minst skyddade lagret. Det är enklast att replikera, snabbast att standardisera och mest sårbart för konkurrens från både plattformar och integratörer. Det skyddade lagret är data, modellbeteende och systempipeline. De företag som lyckas inom vertikal AI tenderar att ha följande egenskaper:

1. De kontrollerar datastandarden i vertikalen  
2. De äger embeddings, feature extractors och mellanmodeller  
3. De har en återkommande inlärningscykel som är unik för deras marknad  
4. De har en inferenspipeline som kan optimeras för latency, kostnad och precision  

För att nå denna position måste man bygga från dag ett med ett tydligt antagande: att data kommer att vara den primära produkten. Användargränssnitt, integrationer och affärslogik är verktyg för att samla, strukturera, återanvända och förbättra data. Inte tvärtom.

## Modellstacken som en kapitalstruktur

För att förstå varför tidiga bolag i vertikal AI behöver tänka annorlunda kan det vara användbart att se modellstacken som en kapitalstruktur. Precis som man väljer mellan eget kapital, lån, framtida intäktsflöden och kontrakt, behöver man välja hur mycket av sin modellpipeline som ska ägas, hyras eller outsourcas.

Det finns tre lager i denna struktur:

1. Basmodeller: generella modeller som används för bootstrap och initial funktionalitet  
2. Mellanmodeller: domänanpassade modeller som bär kärnlogiken i vertikalen  
3. Funktionsspecifika mikromodeller: små, uppgiftsspecifika modeller kopplade till operativa flöden  

I tidiga skeden är det naturligt att lägga större vikt vid det första lagret. Men om man väntar för länge med att bygga lager två och tre låser man in sig i en arkitektur man inte kan kontrollera.

Den centrala frågan blir därför: när ska ett vertikalt AI-bolag börja äga sitt modellbeteende?

Svaret är: när man börjar samla domänspecifik data som inte kan ersättas av generiska set. Och detta sker alltid tidigare än grundarna förväntar sig.

## Arkitektur för suveränitet: seed-nivå beslut med serie-nivå konsekvenser

Grunden för suveränitet byggs i seedfasen genom några få tekniska beslut som kommer att påverka allt som följer. Dessa beslut är inte komplicerade, men kräver disciplin.

## 1. Designa datamodellen innan produkten

De flesta produkterna byggs innan datamodellen definieras. Det är ett misstag i vertikal AI. Data är den primära tillgången. Man behöver tidigt definiera:

- vilken typ av data som är kritisk  
- vilka fält som måste struktureras  
- vilka relationer som är viktiga  
- vilka metadata som driver framtida modellbeteende  

En datamodell är inte bara ett schema. Den är en hypotes om vilka mönster som är viktiga i domänen. Den är det mest långlivade artefakt bolaget kommer att skapa, mer långlivad än kodbasen eller modellversionerna.

## 2. Separera embeddings från grundmodellen

Embeddings är ofta den första verkliga tillgången ett AI-bolag bygger. Det är här domänspråket cementeras. Team bör tidigt skapa en pipeline där embeddings genereras, lagras och versioneras separat från den generiska foundation-modellen. Detta gör det möjligt att byta modell utan att förlora semantiska relationer i datan.

Detta är ett av de mest kritiska tidiga arkitekturbesluten. De som inte gör det blir beroende av embeddings genererade av externa API-format som förändras utan kontroll.

## 3. Introducera en mellanmodell så tidigt som möjligt

Mellanmodeller är domänspecifika modeller som tränas på vertikalens data och har högre precision än generiska modeller. De behöver inte vara perfekta från början. Men de måste finnas. Att ha en pipeline för mellanmodeller gör det möjligt att gradvis flytta mer beteende in i bolagets egen stack.

Ett vanligt misstag är att vänta tills man har betydligt mer data. Men värdet av mellanmodeller ligger inte bara i deras output, utan i att etablera en pipeline för finetuning, evaluering, retraining och monitoring.  

Denna pipeline blir den plats där suveränitet realiseras.

## 4. Kontrollera inferenspipelinen

Det är mycket svårt att skala ett AI-bolag utan att äga inferenspipelinen. Man behöver kontroll över latency, batchning, routing, fallback-logik och kostnadsoptimering. Detta är inte bara ett tekniskt verktyg. Det är en strategisk funktion.

Inferenspipeline-kontroll gör det möjligt att:

- byta modellleverantör utan att påverka produktens beteende  
- lägga till funktionsspecifika mikromodeller  
- optimera kostnader baserat på trafiksammansättning  
- skydda produktkvalitet genom robust evaluering  

När man når Series C har många bolag växt för snabbt utan att ha etablerat denna kontroll. Då är hvert ändringsinitiativ smärtsamt.

## Den vertikala feedback-loopen

Ett av de minst diskuterade men mest strategiska elementen i vertikal AI är hur operativa feedback-loopar fungerar. Ett horisontellt AI-bolag arbetar med generiska prompt-mönster, användningsfall och utvärderingsmetoder. Ett vertikalt bolag har en mer deterministisk och domänspecifik återkoppling.

Det unika med vertikal AI är att varje kundinteraktion producerar tre typer av signaler:

- tekniska signaler: kvaliteten på modellens output  
- operationella signaler: hur output påverkar verksamhetsflöden  
- domänspecifika signaler: fackkunskap som cementerar modellens förståelse  

Denna triad av signaler gör vertikala modeller väsentligt mer kraftfulla än generiska modeller inom sitt område. Men den kräver också att man bygger system för att fånga, strukturera, validera och återföra dessa signaler i pipeline. Det är här de flesta misslyckas, och det är också här de starkaste moat-effekterna uppstår.

En effektiv vertikal feedback-loop består av:

1. insamling  
2. klassificering  
3. validering  
4. augmentering  
5. retraining  

Detta är en cykel som etableras mycket tidigt. Om man väntar för länge går värdefull signal förlorad, och man hamnar i en situation där man försöker bygga en feedback-loop på historiska data som saknar relevans.

## Varför API-first är otillräckligt

API-first har länge setts som en attraktiv arkitekturell filosofi för SaaS-bolag. Det har möjliggjort snabb utveckling och smidig distribution. Men för vertikal AI är det inte längre tillräckligt.

Ett API-first-bolag som bygger på foundation-modeller äger inte logiken i sin produkt. Det blir en tunn mellanhand mellan kundsystem och modellbeteende. Denna position är extremt svag i en värld där stora aktörer snabbt standardiserar integrationer och tar över distributionskedjan.

Vertikal AI måste vara system-first, inte API-first.

System-first innebär att produkten definieras av dataflöden, pipelines, modellversioner, evaluering och drift, medan API:er och gränssnitt är anpassningsskikt ovanpå systemet.  

Denna distinktion är central för att skapa suveränitet.

## Path dependency i tidiga beslut

Tidiga team underskattar ofta hur mycket path dependency man bygger in på bara några månader. Om man tidigt binder sig till en viss modell, en viss embedding-struktur eller en viss datamodell kan dessa val bli permanenta. Detta gäller även för val av verktyg, bibliotek, lagringsformat och annotation pipeline.

Path dependency är inte nödvändigtvis något negativt. Men den måste vara avsiktlig.

Ett vertikalt AI-bolag bör sträva efter att skapa path dependency i:

- datastandarder  
- modellpipeline  
- domänspecifik annotering  

Men undvika path dependency i:

- modellleverantörer  
- embeddingsformat  
- inference-infrastruktur  

Detta kräver att man bygger ett abstraktionslager över alla externa beroenden. Det är ett av de mest tekniskt krävande men strategiskt avgörande initiativen i tidiga skeden.

## Hur man bygger ett tidigt team för suveränitet

Teamdesign är en kritisk komponent i vertikal AI. Traditionellt tänker man att tidiga bolag behöver starka produktpersoner, generalistutvecklare och en grundare med domäninsikt. I vertikal AI behöver man en annan sammansättning.

De mest framgångsrika tidiga stackarna innehåller:

- en systemutvecklare med fokus på dataarkitektur  
- en ML-ingenjör med fokus på pipeline och evaluering  
- en domänexpert som kan validera modellbeteende  
- en produktperson med fokus på dataflöden snarare än UI  

Det är inte ovanligt att grundarteamet i ett vertikalt AI-bolag har mer ML-kompetens redan från början än ett traditionellt SaaS-bolag skulle behöva. Detta beror på att pipeline-kontroll är en kärnkompetens, inte ett specialiserat tillägg.

De team som bygger rätt från början kan över tid minska sin beroendegrad av avancerad ML-kompetens, eftersom pipelines stabiliseras och automatiseras. Men utan denna initiala kompetens är det svårt att etablera hållbar suveränitet.

## Den latenta kostnadsstrukturen i vertikal AI

En annan aspekt som tidiga team ofta underskattar är kostnadsstrukturen. Foundation-modeller är billiga när man är liten. Deras kostnader skalar linjärt med användning. Men i takt med att produkten växer ökar komplexiteten exponentiellt. Vertikala AI-bolag som inte äger sin pipeline drabbas av:

- ökande inferenskostnader  
- bristande kontroll över latency  
- ökande retraining-kostnader för externa API:er  
- svårt att optimera beteende utan dyra prompt- eller finetuning-cykler  

Det finns inga genvägar. Om man vill äga kostnadsstrukturen måste man äga beteendet. Och om man vill äga beteendet måste man äga pipeline.  

Detta är grunden för suveränitet.

## Varför suveränitet blir en konkurrensfördel innan scale

Det är lätt att tro att suveränitet är viktigt först vid scale, när man har många kunder och stora datamängder. Men i vertikal AI uppstår konkurrensfördelen betydligt tidigare.

När man äger sin pipeline kan man:

- bygga funktioner som konkurrenter inte kan reproducera  
- integrera sig djupare i kundens operativa system  
- skapa högre tillit genom transparent modellbeteende  
- experimentera med snabbare iterationstakt  
- standardisera domänspråk inom sin vertikal  

Det betyder att suveränitet är ett verktyg för acceleration, inte bara skydd.  

Och acceleration i tidiga skeden är avgörande för att bygga momentum inför kommande rounds.

## Vägen framåt för vertikal AI-bolag i tidiga skeden

Att bygga vertikal AI handlar inte längre om att skapa en applikation med AI-funktioner. Det handlar om att bygga en modellpipeline som är unik för vertikalen och som kan förfinas med varje datapunkt som går genom systemet. Detta kräver disciplin, teknisk mognad och en djup förståelse för dataarkitektur.

Men de bolag som gör detta rätt kan skapa en position som är extremt svår att utmana.

I nästa del går vi djupare in i hur man etablerar en dataförsörjningskedja för vertikal AI, hur man definierar annoteringsstrategier, hur man bygger en resilient modellpipeline och hur man mäter modellbeteende i domänspecifika miljöer. 

## Den strategiska kärnan i suverän vertikal AI

I tidiga skeden hamnar de flesta team i en hektisk jakt på funktionalitet, användare och datakällor. Detta är naturligt, men det skapar ofta en blind fläck. Den blinda fläcken gäller frågan om vad som egentligen ska vara den suveräna kärnan i produkten. När man bygger vertikal AI kan man inte förlita sig på samma abstraktionsnivåer som horisontella plattformar gör. Man kan inte driva sin strategi med antagandet att modellen i sig är differentieringen. Det gäller särskilt när alla använder samma öppna modeller och när stora proprietära modeller bara blir starkare.

Den suveräna kärnan ligger i förmågan att äga och forma ett arbetsflöde som är så specifikt och så exakt att inga generella konkurrerande verktyg kan replikera det utan att drastiskt öka sina egna kostnader. Detta måste finnas på plats redan i embryot av produkten. Målet är att skapa en tidig spiral där produktens användning genererar nya möjligheter som i sin tur gör produkten mer defensiv, inte bara mer funktionsrik.

För att lyckas med detta måste ett tidigt team förstå vilka delar av en bransch som aldrig kommer bli standardiserade i horisontella verktyg. Dessa områden kan sedan bli fundamentet som modellen byggs runt. I detta ligger suveräniteten. Det är detta som gör att en vertikal AI kan fortsätta växa även när de underliggande modellerna blir kommodifierade.

## Datans riktighet som kapital i tidig fas

För många tidiga AI-produkter är den centrala frågan inte volym utan riktighet. De flesta team underskattar detta. De tror att deras första uppgift är att samla så mycket data som möjligt. Detta antagande speglar hur man arbetade med traditionell maskininlärning. I en värld av stora språkmodeller är logiken annorlunda. Modellen klarar redan mängden. Det som saknas är korrekthet inom kontexten där produkten ska operera.

En produkt som byggs utan fokus på riktighet får snabbt växande teknisk skuld. Den hamnar i ett läge där teamet måste lägga allt större resurser på att korrigera modellens beteende i efterhand. Detta gör att skalbarheten blir en illusion. I stället bör ett tidigt team behandla varje korrekt datapunkt som en investering i en framtida fördel. Ett mindre dataset av extremt hög kvalitet inom rätt domän kan skapa mer differentiering än ett gigantiskt dataset av blandad relevans.

I praktiken innebär detta att man i tidiga skeden behöver processer för att manuellt validera och kurera data. Detta känns långsamt men är helt nödvändigt. Det är här vertikal AI skiljer sig från generella LLM applikationer. När arbetsflödet är specialiserat kan ett team medvetet bygga upp en databas av verifierad expertkunskap som ingen horisontell aktör kan replikera utan att själva agera som specialister. Detta blir i längden ett mot.

## Arbetsflödets precision som produktens sanna motor

I traditionell produktutveckling inom mjukvara är det vanligt att funktionalitet betraktas som byggblock. Man lägger till och staplar tills produkten börjar kännas komplett. Men i ett vertikalt AI system är det inte funktionsbredd som driver värde. Det är djupet. Det är graden till vilken produkten kan guida användaren genom ett arbetsflöde utan avbrott, utan tvetydighet och utan att lämna några lösa trådar.

Vertikala arbetsflöden är ofta mer komplicerade än vad de först ser ut att vara. De består av steg som är beroende av varandra och som kräver kontextuell tolkning snarare än standardiserad logik. När en AI produkt bygger in dessa beroenden i sina kärnstrukturer uppstår en typ av friktion som konkurrenter får svårt att komma runt. Detta är inte bara ett tekniskt hinder. Det är även organisatoriskt och kulturellt eftersom det kräver att teamet förstår hur människor inom domänen verkligen arbetar.

Det är vanligt att man i tidiga skeden försöker förenkla arbetsflöden för att skynda på utvecklingen. Detta är riskabelt. Om man abstraherar bort de mekanismer som egentligen driver domänens komplexitet bygger man en produkt som inte kan skala in i de verkliga problemen. Det är bättre att tidigt bygga en minimal men korrekt representation av arbetsflödet, sedan förbättra modellen runt detta.

## Suveränitet som designprincip i systemarkitekturen

Många AI startuper upplever att de sitter fast i beroenden. Till exempel beroende av en specifik modell, en särskild tredjepartstjänst eller ett bibliotek som hanterar viktiga delar av kedjan. Detta är inte ett problem i början, men det blir ett stort hinder när produkten ska skalas. Om man bygger vertikal AI måste man designa sin arkitektur så att moduler kan bytas ut utan att produktens identitet förändras.

Suveränitet i systemarkitekturen handlar inte om att bygga allt inhouse. Det handlar om att placera den icke utbytbara logiken i delar av systemet som kontrolleras av teamet. Grundregeln är att allt som uttrycker domänens regler, dataform, arbetsflödeslogik och kvalitetssäkring måste vara ägt. Modellen kan vara utbytbar. Infrastrukturen kan vara utbytbar. Men själva domänens struktur får inte vara det.

Detta skapar en långsiktig fördel. När underliggande teknik förändras kan företaget byta motor utan att ändra riktning. Detta är en nödvändighet eftersom utvecklingen av LLM:er sker så snabbt att man aldrig bör binda sin kärnprodukt till en specifik modellgeneration. Suveräniteten ligger därför i att allt som gör produkten unik sitter i lager ovanpå modellen.

## Övergången från verktyg till system

Tidiga AI produkter börjar nästan alltid som verktyg. De löser en enskild uppgift. Detta är naturligt eftersom teamet måste komma igång någonstans. Men för att uppnå suveränitet måste verktyget gradvis bli ett system. Det betyder att produktens värde inte längre ligger i outputen utan i flödet som binder samman input, kontext, logik, beslutsstöd och kvalitetskontroll.

Denna övergång sker inte automatiskt. Det är en designutmaning. Ett team måste avgöra vilka interaktioner som är centrala och vilka som är perifera. I många branscher är systemkaraktären det som ger försäljningskraft. Ett verktyg kan användas och sedan överges. Ett system blir ofta integrerat i rutiner och i företagets struktur.

Ett vanligt misstag i tidiga skeden är att lägga för mycket vikt vid modellens förmåga att generera rätt svar och för lite vikt vid systemets förmåga att förstå vad som är ett bra svar. Vertikala AI system måste innehålla mekanismer för validering och återkoppling. Om denna del förbises, skapas ett glapp mellan modellens output och användarens behov. På marknaden blir detta glapp snabbt tydligt och svårt att reparera.

## Effekten av att standardisera kontext i tidig fas

En av de starkaste mekanismerna i vertikal AI är möjligheten att standardisera kontext. Till skillnad från horisontella applikationer där kontexten alltid är bred och varierande, arbetar vertikala produkter i miljöer där kontexten kan definieras exakt. Denna förmåga ger en enorm fördel.

Standardiserad kontext innebär att produkten alltid vet vad användaren försöker göra, vilka data som är relevanta och vilka beslut som ska tas inom domänen. Detta gör att AI systemet kan arbeta med mycket högre precision än generella LLM applikationer.

För att detta ska fungera måste man i tidig fas definiera:

• vilka entiteter som existerar i domänen  
• vilka relationer som styr arbetsflödet  
• vilka beslut som kräver mänsklig insyn  
• vilka regler som alltid gäller  
• vilka undantag som är legitima  

Dessa strukturer bildar en intern karta över domänen. Denna karta blir en del av produktens suveränitet eftersom den inte kan kopieras genom att bara använda en ny modell.

## Lärande loopar som skydd och motor

Lärande loopar är fundamentala i vertikal AI. De flesta AI produkter har någon form av återkoppling, men det är sällan systematiskt. I vertikala system är detta en kärnfunktion. Ett team måste tidigt bestämma hur modellen ska lära sig från användning på ett sätt som stärker den suveräna kärnan.

Det viktiga är att återkopplingen inte bara ska förbättra modellen. Den ska förbättra domänlogiken. Det betyder att systemet måste samla in signaler kring hur arbetsflöden borde fungera, inte bara kring om modellen gav rätt svar. Detta är en kvalitativ skillnad. Det är i praktiken en form av inbyggd verksamhetsutveckling.

Denna typ av lärande är svår att replikera och kräver domänspecifik kontext som bara uppstår genom verklig användning. Detta gör att produkten blir mer värdefull varje gång den används. En horisontell aktör kan inte enkelt ta del av den effekten eftersom den saknar insyn i den specifika domänen.

## Varför tidiga vägval avgör allt

När man bygger vertikal AI har man mycket mindre utrymme för felsteg än vad som först verkar. Produkten kan snabbt bli uppskattad av användare tack vare generativa funktioner, men det innebär inte att man har byggt en defensiv position. Suveränitet tar form långt innan marknaden märker vad som byggs.

De mest framgångsrika vertikala AI företagen kommer att vara de som vågar vara kompromisslösa i sin definition av vad som hör till kärnan och vad som är utbytbart. De som förstår att data inte är råvara utan kontext. De som inser att arbetsflöden inte är sekvenser utan system. De som bygger i lagren ovanpå modellen snarare än i modellen.

Det är detta som avgör om man bygger ett verktyg eller ett företag. Suveränitet är inget som kan läggas till i efterhand. Den måste vara inbyggd från dag ett, och den måste vara medveten. Det är detta som skiljer framgångsrika vertikala AI satsningar från produkter som försvinner när nästa modellgeneration kommer.