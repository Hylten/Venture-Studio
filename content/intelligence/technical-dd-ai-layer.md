---
title: "Teknisk Due Diligence 2.0: Att genomlysa AI-lagret inför förvärv"
slug: "technical-dd-ai-layer"
description: "Teknisk Due Diligence 2.0: Att genomlysa AI-lagret inför förvärv. Kritisk utvärdering av operativ hävstång och systemisk risk i moderna SaaS-stackar."
date: "2026-03-16"
tags: []
categories: ["ai-enterprise"]
canonical_url: "https://hylten.github.io/Venture-Studio/intelligence/technical-dd-ai-layer/"
meta_title: "Teknisk Due Diligence 2.0: Att genomlysa AI-lagret inför förvärv"
meta_description: "Teknisk Due Diligence 2.0: Att genomlysa AI-lagret inför förvärv. Kritisk utvärdering av operativ hävstång och systemisk risk i moderna SaaS-stackar."
featured_image: ""
draft: false
author: "Jonas Hyltén"
---

## Inledning: Det nya tekniska kontrollskiktet

Teknisk due diligence har traditionellt fokuserat på kodbasens kvalitet, arkitekturell struktur, säkerhetsposition och skalbarhetsförmåga. Men i takt med att allt fler mogna SaaS-bolag integrerar maskininlärning, generativa modeller och autonoma beslutsflöden i sin produkt, har en ny domän vuxit fram som snabbt blivit central: AI-lagret.

Detta nya lager är inte ett enskilt subsystem utan ett sammanbundet ekosystem av datainfrastruktur, modellspecifik pipeline-logik, inferenskostnader, regulatoriska beroenden, och driftsmässiga risker. För investerare och förvärvande bolag innebär det att teknisk due diligence måste lyfta blicken. Det räcker inte längre att konstatera att ett team har ML-kompetens eller att produkten använder en GPT-integration. Det som krävs är en strukturerad genomlysning av hur bolagets AI-lager faktiskt fungerar, hur det påverkar marginalerna, och hur det positionerar bolaget i relation till framtida systemskiften.

Teknisk DD 2.0 är i praktiken en bedömning av hur väl ett bolag kan äga sin intelligensstack, och hur stor del av dess produktdifferentiering som är beroende av externa modeller och leverantörer.

## Varför AI-lagret kräver en separat due diligence-dimension

AI-lagret introducerar en rad nya frågor som inte fångas av traditionell teknikgranskning. Den största förändringen är att produktens värde i många fall flyttas uppåt i stacken, från applikationslogik till modellbaserad funktionalitet. En funktion som tidigare byggdes med regler och API-integrationer är nu baserad på prediktiva modeller som själva är beroende av datakvalitet, modellträningshistorik, optimeringstekniker och driftsmässig stabilitet.

För förvärvare uppstår frågor som:

- Hur mycket av produktens intelligens är proprietär, och hur mycket är tunna wrappers mot generella modeller?
- Vilka kostnadsdrivare uppstår vid användning av tredjepartsmodeller vid skala?
- Hur stabila är modellernas prestationer över tid, givet drift i verkliga kundmiljöer?
- Hur stor del av bolagets konkurrensfördel ligger i data och hur stor del i teknik?

Det är just i dessa frågor som teknisk DD 2.0 skiljer sig från tidigare praxis. AI-lagret är dynamiskt, ofta icke-deterministiskt och exponentiellt mer beroende av datainfrastruktur än traditionell programvara. Det kräver en metodik som är anpassad till ett landskap där kod inte nödvändigtvis är den primära tillgången.

## AI-lagret som arkitektonisk struktur

För att förstå vad som ska granskas måste man definiera AI-lagret. I mogna SaaS-bolag består det oftast av följande komponenter:

- Insamlingslager för rådata och eventströmmar
- Datavalidering, transformering och feature engineering
- Modellträningspipelines, både för klassiska ML-modeller och för finetuning av LLM:er
- Deployment-pipelines för modeller, ofta med versionshantering och rollback-logik
- Inferenslager, där optimering, latency och kostnad styrs
- Modellobservabilitet, inklusive driftövervakning, bias-kontroll och driftsincidenter
- Säkerhets- och compliance-lager, särskilt vid hantering av kunddata i generativa flöden

I praktiken fungerar AI-lagret som en intern fabrik där varje steg påverkar helheten. En svaghet i datavalidering kan ge en modell som driver felaktiga beslut i produktens kärnflöden. Suboptimal inferensarkitektur kan äta marginaler på ett sätt som inte märks förrän volymerna ökar. Otillräcklig modellobservabilitet kan förbli osynlig tills ett större kundkonto upptäcker driftsmässiga anomalier.

När teknisk DD tidigare fokuserat på kodbasens integritet måste dagens analys kompletteras med en strukturerad granskning av hur stabilt och ägt AI-lagret är.

## Proprietär intelligens kontra beroende av externa modeller

En av de mest centrala frågeställningarna i modern teknisk DD är i vilken grad bolaget sitter på en egen intelligensstack. I många SaaS-produkter har generativa modeller implementerats genom att lägga ett integrationslager mot externa API:er, vanligtvis från hyperscalers eller kommersiella foundation-model-leverantörer. Denna strategi är snabb, kostnadseffektiv och funktionellt kraftfull, men den innehåller betydande strukturella risker.

Granskningspunkter inkluderar:

- Finns det alternativ till den externa modellen, och är produktens funktionalitet generell eller unik för den valda leverantören?
- Hur enkelt kan bolaget byta modell, och vilka kostnader uppstår vid migrering?
- Finns finetuningsdata och träningspipelines internt, eller ägs kärnteknologin indirekt av en tredje part?
- Är produktens differentiering beroende av unika interna datastrukturer, eller är den reproducerbar av konkurrenter med samma grundmodell?

För investerare i Series C+ bolag blir dessa frågor avgörande. Ett bolag vars kärnfunktionalitet primärt är en integration mot en publikt tillgänglig modell har en sårbarhetsprofil som måste bedömas. Samtidigt behöver man bedöma hur kostnadsstrukturen för inferens påverkas när kundbasen expanderar.

## Datamonopolet som värdedrivare

Det som ofta särskiljer ett bolag med skalbar AI-fördel är inte antalet modeller utan kvaliteten på deras data. En teknisk DD behöver därför kartlägga hela datalivscykeln:

- Hur data samlas in
- Hur data valideras och tvättas
- Hur data lagras och versioneras
- Hur data exponeras till modeller
- Vilka dataflöden som är kundspecifika respektive generella

Det centrala är att förstå om bolaget har ett datamonopol, det vill säga tillgång till en datamängd som ingen konkurrent kan få via offentliga källor. Detta datamonopol måste därefter kopplas till AI-lagret för att avgöra hur mycket av produktens intelligens som drivs av exklusiv data kontra generella modeller.

Ett vanligt problem i due diligence är att bolag överskattar värdet på sina data. Många antar att en stor datamängd i sig är en fördel, medan verkligt unika dataset oftast är små, kuraterade och kontextuellt rika. DD-processen måste därför fokusera på:

- Signalstyrkan i datat
- Redundans och brusnivåer
- Om datasetet är strukturerat eller semi-strukturerat
- Om det finns en fungerande pipeline för att förbättra datat över tid

Utan ett starkt datamonopol är AI-funktionalitet ofta replikerbar. Förvärvare måste därför bedöma hur mycket av bolagets värde som faktiskt är försvarbart.

## Kostnadsarkitektur i AI-lagret

Inferenskostnader har blivit en nyckelfråga i moderna SaaS-bolag. Där traditionell programvara har nära nollmarginal på extra användare, kan AI-funktionalitet skapa helt nya kostnadskurvor. För att förstå de ekonomiska konsekvenserna behöver teknisk DD inkludera en detaljerad analys av:

- Ratio mellan prestanda och latency i vald modell
- Tokenkostnader vid generativ inferens
- Cachingstrategier för återanvändning av genererade svar
- Möjlighet till distillation eller komprimering av modeller
- Lokala inferensmöjligheter via open-source-modeller
- Hur kostnaderna skalar med kundvolym och feature adoption

I många SaaS-bolag ser man en strukturell risk där intäkterna växer linjärt medan kostnaderna växer exponentiellt när tunga AI-funktioner används av allt fler aktiva användare. En due diligence måste därför bedöma om AI-lagret är byggt med kostnadsoptimering från början eller om bolaget riskerar att tappa marginalkontroll vid expansion.

En särskilt kritisk punkt är att bedöma hur mycket av användarnas beteende som är förutsägbart i relation till inferenskostnader. Många AI-funktioner används initialt lågfrekevent, men när adoptionen ökar kan resursförbrukningen accelerera på ett sätt som inte syns i preliminära modeller.

## Modellobservabilitet och driftsrisker

I traditionell SaaS är driftincidenter ofta binära: ett API svarar eller svarar inte. I AI-system sker incidenter ofta gradvis: en modell tappar prestanda, hallucinerar mer frekvent eller börjar utveckla bias. Dessa fenomen är svårare att upptäcka och kräver nya observabilitetsmetoder.

I teknisk DD måste man därför kartlägga:

- Hur prestanda mäts och övervakas i realtid
- Hur versionshantering av modeller fungerar
- Hur rollback till tidigare modeller sker vid incidenter
- Hur bias, toxicitet och säkerhet kontrolleras vid inferens
- Hur modellen beter sig i olika kundkontexter, särskilt i enterprise-konton

Avsaknad av robust modellobservabilitet är en varningssignal. Ett bolag som saknar mätbar kontroll över sin modellprestanda kommer förr eller senare att drabbas av kvalitetsincidenter mot slutkund, särskilt i branscher där förtroende är avgörande.

## Modellens livscykel: frågan om kontinuerlig förbättring

En högkvalitativ AI-stack är inte statisk. Modellen behöver uppdateras, mätas, justeras och ibland ersättas. Denna livscykel är ofta mer komplicerad än utvecklingscykeln för traditionell programvara. I teknisk DD behöver man förstå:

- Om bolaget har en intern träningspipeline som är reproducerbar
- Om förbättringar sker manuellt, reaktivt eller automatiserat
- Hur modellen versioneras i relation till kundspecifika implementationer
- Om bolaget kan uppdatera modellen utan att störa pågående kundintegrationer
- Om modellen tränas på data som är juridiskt tillåtna att använda

Många bolag bygger initialt en fungerande modell men saknar en långsiktig strategi för hur modellen ska fortsätta förbättras. Detta är särskilt riskabelt i vertikala SaaS där kundernas behov driver kontinuerliga förändringar i dataflöden.

I en förvärvssituation behöver man därför bedöma om modellen är en engångsleverans eller ett system som kan förvaltas och utvecklas i takt med produktens mognad.

## Infrastrukturens roll i AI-lagret

Moderna AI-system är i hög grad beroende av molninfrastruktur. Under DD-processen måste man därför analysera hur väl infrastrukturen är designad för att hantera:

- Snabba förändringar i modellstorlek och resursbehov
- Dynamisk skalning av GPU-resurser
- Kostnadsoptimering av beräkningsjobb
- Säkerhetskrav kopplade till känslig data
- Integrationer mot externa modellproviders

Ett vanligt problem hos snabbväxande SaaS-bolag är att infrastrukturteamet har prioriterat fart över systemisk stabilitet. Mängden teknisk skuld som kan gömma sig i en AI-infrastruktur är betydande, särskilt när det gäller GPU-hantering, containerisering och orkestrering av träningsjobb.

Under en DD-granskning är det därför nödvändigt att kartlägga:

- Hur pipeline-jobb planeras, versioneras och övervakas
- Om modellen är optimerad för vald hardwareprofil
- Om bolaget har testat failover-scenarier
- Om infrastrukturen kan skalas utan att skapa oönskade beroendekedjor

Ett bolag med svag AI-infrastruktur får större problem ju mer deras modell integreras i central produktfunktionalitet.

## Regulatorisk påverkan på AI-lagret

Regulatoriska krav för AI accelererar globalt. Det innebär att teknisk DD måste inkludera en analys av:

- Hur data flödar genom systemet i relation till dataskyddskrav
- Hur audit-loggar, spårbarhet och förklaringskrav hanteras
- Hur tredjepartsmodeller används i relation till kundspecifika compliance-regler
- Hur modellen beter sig i olika geografiska jurisdiktioner

SaaS-bolag som säljer till enterprise är redan tvungna att uppfylla kundkrav som går långt utöver vad lagen kräver. Under en DD är det därför viktigt att bedöma hur väl AI-lagret klarar dessa krav och om det finns risk för att framtida regelverk stoppar funktionalitet som idag är kärnprodukt.

Många bolag underskattar också hur viktig dataproveniens är. Om bolaget använder kunddata för att träna modeller kan detta innebära juridiska risker om inte avtalsstrukturen stödjer det. DD-processen måste därför granska både tekniska och legala dimensioner samtidigt.

## AI-lagrets påverkan på produktstrategi och roadmapping

En av de mest sällsynta men viktiga aspekterna i modern teknisk DD är att förstå hur väl bolaget kan planera för framtida AI-funktionalitet. Här räcker det inte att titta på nuvarande modeller. Man måste bedöma hur väl teamet förstår:

- Underliggande forskningsutveckling
- Modellkomplexitet och kostnadsutveckling
- Independence risk från stora modellproviders
- Möjlighet att internt bygga specialiserade modeller
- Arkitekturell flexibilitet för att integrera framtida system

Många bolag har byggt sin första generation av AI-funktionalitet på ett sätt som inte är hållbart i längden. De har snabb prototypkod, låg datakvalitet och en modellpipeline som inte är byggd för kontinuerlig iteration. I en DD måste man därför utvärdera mognaden i deras systembyggande förmåga.

Att kunna leverera en AI-funktion är inte samma sak som att kunna bygga en skalbar AI-plattform. Skillnaden är avgörande för bolagets långsiktiga värde.

## Avslutning på del 1: AI-lagret som nyckel till företagsvärde

Det blir allt tydligare att AI-lagret nu är en av de mest strategiska komponenterna i moderna SaaS-bolag. För investerare och förvärvare innebär detta att teknisk DD måste gå djupare, bredare och mer strukturerat än tidigare. Kodkvalitet och arkitektur är fortfarande centralt, men är bara ett av många lager som måste bedömas. Den nya kärnan ligger i dataflödena, modellen, dess livscykel och dess kostnadsstruktur.

I del två fortsätter vi genomlysningen med en mer konkret metod för hur man bygger en komplett AI-DD-process, och vilka indikatorer som är avgörande för att skilja ett verkligt AI-drivet bolag från ett som främst använder standardmodeller utan defensible moat.

Nedan är ett förslag på *Part 2* som följer alla dina regler. Säg till om du vill justera ton, längd eller teknisk nivå.  

---

## Hur AI-lagret förändrar själva syftet med teknisk due diligence

Under det senaste decenniet har teknisk due diligence handlat om att svara på välkända frågor. Finns det teknisk skuld som riskerar att explodera efter förvärv. Är arkitekturen modulär nog att bära tillväxtplanerna. Har teamet förmåga att leverera enligt roadmap. Problemet är att dessa frågor inte längre är tillräckliga. De är fortfarande viktiga, men de adresserar bara det klassiska applikationslagret.

AI-lagret introducerar en ny dimension. Det fungerar både som accelerator och som dold risk. Det skapar värde när det fungerar och det kan snabbt förstöra affärscase när det inte gör det. I traditionell mjukvara är beteendet deterministiskt. I AI är det probabilistiskt. I traditionell mjukvara har man kontroll över alla regler. I AI uppstår beteendet genom träning, data, modellval och tjänsteintegrationer. Det går alltså inte att enbart studera kod eller arkitektur. Man måste granska själva intelligensen och dess försörjningskedjor.

Den centrala förskjutningen är att teknisk due diligence inte längre bara handlar om att säkerställa att bolaget kan leverera funktionalitet. Den handlar om att förstå hur bolaget tränar, styr, kontrollerar och uppdaterar sina system som skapar beteende. Det betyder att AI-lagret måste granskas som en egen produkt som sitter inuti produkten.

## Varför klassiska granskningsmetoder inte räcker

Många investerare faller i fällan att behandla AI som ytterligare en modul i arkitekturen. Det leder ofta till två typer av felbedömningar.

Första felbedömningen är överskattning. Investeraren antar att AI-komponenten ligger nära marknadsledande lösningar enbart baserat på att bolaget använder en modern basmodell eller ett välkänt ramverk. Skillnaden mellan att driftsätta en modell och att driftsätta en förutsägbar, säker och produktionsklar modell är enorm. Att leverera hög precision i en demomiljö säger ingenting om driftstabilitet, säkerhet eller latens i verkliga kundscenarier.

Andra felbedömningen är underskattning. Många antaganden om teknisk skuld bygger på äldre paradigm och fångar inte de faktorer som skapar eller förhindrar skalbarhet i AI. Ett bolag kan ha oordnad kodbas men ha extremt väloptimerade dataprocesser som är den verkliga värdemotorn bakom produkten. Traditionell due diligence skulle bedöma bolaget som riskfyllt trots att det centrala värdet är starkt.

Båda dessa missbedömningar kommer från samma felkälla. Klassisk due diligence utgår från en värld där kod och arkitektur är källan till produktbeteende. I AI-världen är det data, modeller, RL-konfigurationer, säkerhetslager och kontrollmekanismer som är källan. För att förstå en AI-produkt måste man därför förstå dessa element separat och tillsammans.

## De fyra riskaxlarna som definierar AI-lagrets mognad

I teknisk due diligence 2.0 framträder fyra centrala axlar som måste granskas i detalj. Dessa är inte desamma som de traditionella tekniska områdena. De är specifika för AI-system och deras beteende.

Första axeln är datakvalitet och datalinjer. Detta handlar inte om hur mycket data som finns utan varifrån den kommer, hur den kontrolleras, hur den versioneras och hur snabbt den kan förnyas. AI-system åldras när datatillförseln är bristfällig och många förvärv faller på att bolaget sitter på data som är svår att uppdatera eller juridiskt riskabel att använda.

Andra axeln är modellstrategi och modellförvaltning. Många bolag använder flera modeller samtidigt men saknar en formell strategi för val, uppgradering och avveckling. Det gör att driftkostnader och risker växer okontrollerat. Vid due diligence måste man förstå hur bolaget tänker kring modellens livscykel. Det är avgörande eftersom AI-modeller inte fungerar på samma sätt som kod som kan patchas i all oändlighet.

Tredje axeln är säkerhets- och kontrollmekanismer. Det gäller bland annat guardrails, filtreringslager, återkopplingssystem och intern policy för användardata och modellinteraktioner. Dessa mekanismer avgör om bolaget kan skala till fler kundsegment utan att hamna i regulatoriska eller säkerhetsmässiga återvändsgränder.

Fjärde axeln är realiserbarhet i produktion. Här skiljer man hype från faktisk leveransförmåga. Detta inkluderar latens, kostnad per förfrågan, övervakning av modellbeteende och förmåga att hantera modellologiska fel. Denna axel avgör om tekniken kan bära det kommersiella caset eller om kostnaderna kommer att äta upp marginalerna.

Dessa fyra axlar bildar tillsammans en karta över AI-lagrets mognad och värde. Utan att kartlägga dem går det inte att förstå vad som faktiskt förvärvas.

## Varför AI-lagret ofta är den största dolda kostnaden

Ett vanligt mönster i förvärv av AI-bolag är att köparen underskattar driftkostnaderna. Många tekniska ledare tror att kostnaden främst ligger i modellträning. I verkligheten ligger mycket av kostnaden i modellkörning, datarensning, övervakning och löpande förbättring. Detta gäller särskilt när företaget använder externa modeller via API.

När kundvolymerna växer skjuter kostnaderna i höjden om inte bolaget har optimerat sitt AI-lager. Detta kan leda till att man köper ett bolag som ser lönsamt ut på papperet men blir olönsamt när produkten används i större skala. Klassisk teknisk due diligence upptäcker ofta inte detta eftersom den inte granskar modellernas beteende under belastning eller kostnadsprofilen för inference.

Här uppstår en paradox. AI-lagret är ofta bolagets mest differentierande komponent men också dess mest kapitalkrävande. Därför måste det analyseras lika noggrant som man analyserar bruttomarginaler, churn eller kundanskaffningskostnad.

## När AI-lagret styr företagets skalbarhet och prisstrategi

Ett bolag som bygger sin produkt kring AI kan inte skala prismodellen frikopplat från sina modellkostnader. I flera förvärv de senaste åren har köpare upptäckt att produktens marginaler var beroende av ett extremt gynnsamt modellprisavtal som inte går att skala efter förvärvet.

Detta är inte en teknisk detalj utan en strategisk risk. AI-lagret styr hur affären kan växa. Det påverkar prissättning, kundsegmentering och bruttomarginaler. Därför kräver teknisk due diligence 2.0 att man förstår hur AI-kostnaderna rör sig över tid och hur prissättningen i sin tur hänger ihop med användningsmönstren hos kunderna.

Om exempelvis en modell måste köras flera gånger för att nå acceptabel precision kommer kostnaden per använd interaktion att stiga oväntat. Om modellens beteende varierar med datakvaliteten kan kundtillväxt i praktiken försämra produktens prestanda. Sådana samband syns inte i kodgranskningar men är avgörande när man bedömer skalbarhet.

## Den viktigaste öppna frågan: Vem äger egentligen intelligensen

AI-lagret väcker en fundamental strukturell fråga som inte fanns i klassisk programvara. När ett bolag bygger sin produkt på en extern modell blir en del av produktens intelligens outsourcad. Det innebär att bolaget inte fullt ut äger den förmåga som kunderna betalar för.

Detta skapar tre huvudrisker. Leverantörsberoende, där modellleverantören kan höja priset eller ändra begränsningar. Kompetensberoende, där teamet inte har tillräcklig kapacitet att byta modell eller drifta egna. Funktionsberoende, där framtida funktioner begränsas av vad den externa modellen tillåter.

I en due diligence måste man därför kartlägga var intelligensen sitter, hur beroendena ser ut och vilken flexibilitet bolaget har att förflytta sig i modellstacken. I många fall är detta mer avgörande för långsiktig värdepotential än själva företagets kodbas.

## Sammanfattning av skiftet som definierar teknisk due diligence 2.0

AI-lagret gör att teknisk due diligence inte längre kan handla om kod, arkitektur och processer i isolation. Det handlar om att förstå system som lär sig, system som förändras över tid och system vars beteende beror på datakvalitet och modellval.

Förvärvare måste därför utvidga sina granskningsmetoder. Annars riskerar de att köpa bolag där värdet inte ligger där de tror eller där de största riskerna är osynliga i det traditionella materialet. AI-lagret är numera lika centralt för teknisk due diligence som finansiella modeller är för kommersiell due diligence. Det kräver en ny disciplin, nya verktyg och en ny förståelse för vad teknikvärde faktiskt betyder i en AI-driven produktvärld.