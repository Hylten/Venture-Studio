---
title: "Varför portföljsynergier misslyckas i vertical AI venture studios"
slug: "varfor-portfoljsynergier-misslyckas-vertical-ai"
description: "Datasilons, dold integrationskostnad och domäntrunkering bryter den antagna portföljsynergin i vertical AI studios. En konkret genomgång av vad som faktiskt krävs för att bygga delningseffekter som håller."
date: "2026-08-23"
tags: ["Vertical AI", "Venture Studio", "Portföljsynergi", "Datasilons"]
categories: ["Intelligence"]
canonical_url: "https://hylten.github.io/Venture-Studio/intelligence/varfor-portfoljsynergier-misslyckas-vertical-ai/"
meta_title: "Varför portföljsynergier misslyckas i vertical AI venture studios"
meta_description: "Datasilons, dold integrationskostnad och domäntrunkering bryter den antagna portföljsynergin i vertical AI studios. En konkret genomgång av vad som faktiskt krävs."
featured_image: ""
draft: false
author: "Jonas Hyltén"
---

# Varför portföljsynergier misslyckas i vertical AI venture studios

En venture studio som bygger flera vertical AI-bolag räknar nästan alltid med att portföljen ska skapa synergier av sig själv. Logiken låter enkel. Delad infrastruktur, delad data och förmågan att sälja kapacitet mellan bolag i närliggande domäner. Problemet är just antagandet, inte ambitionen.

McKinsey uppskattar att ungefär 70 procent av alla större företagsaffärer misslyckas med att nå sitt värdeskapande mål. Samma analys visar att nära 70 procent av affärerna i bolagets databas inte nådde de förväntade intäktssynergierna. Orsaken sällan själva strategin. Orsaken är att synergy behandlas som en egenskap hos ägandet i stället för som ett bygge som kräver egen teknik och eget mandat.

Inom en vertical AI-studio förstärks feltänket. Varje bolag byggs för en specifik domän med egen datamodell, egen reglering och egen mätmetod. Att de delar ägare skapar inte en gemensam databas. Det skapar två separata system som råkar ha samma namn på förstasidan.

## Synergin som antagande

Studions affärsplan brukar rita upp portföljsynergier som en självklar post. Ett gemensamt CRM, en delad modell, en samlad kunddatabas. Raden hamnar i kalkylarket innan någon har frågat sig vad som faktiskt måste byggas för att raden ska bli sann.

Bain egen enkät bland beslutsfattare visar att omkring 60 procent av affärerna inte mötte ledningens interna förväntningar. Den vanligaste orsaken är inte att strategin var fel, utan att man räknade hem en vinst som krävde ett integrationsarbete som aldrig blev finansierat. Venture studios gör samma fel i liten skala.

En studio med åtta till tolv portföljbolag bör enligt vår bedömning räkna med att den antagna synergivinsten är en hypotes tills tre konkreta villkor är uppfyllda. Det första villkoret är ett gemensamt data-kontrakt. Det andra är en budgetrad för integration. Det tredje är en namngiven ägare av den delade tekniken. Utan dessa tre finns ingen synergy, bara en förhoppning i dokumentet.

Detta betyder inte att synergier är omöjliga. Det betyder att de måste designas med samma noggrannhet som produkten i varje enskilt bolag. En studio som lämnar dem som ett ägandeargument förlorar dem redan vid det andra portföljbolaget.

## Datasilons är regeln, inte undantaget

Det första konkreta hindret är datasilon. En studio som lanserar ett bolag för svensk vårdadministration och ett för nordisk bygglogistik arbetar med två helt olika världar. Vårddata omfattas av patientdatalagstiftning och kräver spårbarhet per patient. Byggdata handlar om leverantörsled, ritningar och underentreprenörer. Inget av detta går att slå ihop i en gemensam tabell utan att man bryter mot den ena domänens regler.

Bain finner i sin senaste M&A-undersökning att 83 procent av de förvärvare som upplevt misslyckade affärer pekar ut integrationen som huvudorsak. Siffran kommer från stora bolagsköp, men mekanismen är identisk för en studio. Två datakällor som ska bli en kräver ett översättningslager mellan scheman, och det lagret finns sällan från start.

En studio som vill dela data måste bygga ett normeringslager som översätter varje domäns fält till ett gemensamt format. Arbetet är inget man gör vid sidan av. Enligt vår bedömning kräver ett delat data-lager för åtta till tolv portföljbolag 2 till 4 miljoner SEK i initial utveckling per bolag, plus löpande underhåll på 300 000 till 600 000 SEK per bolag och år. Innan den kostnaden är budgeterad existerar inte synergierna, oavsett hur snarlika bolagen ser ut i pitch-decken.

Tekniskt handlar silot om schema och ägarskap. Ett bolag lagrar sina kunduppgifter i en SQL-tabell med fält som gör sense i just dess domän. Ett annat bolag lagrar samma koncept i en JSON-struktur med helt andra nycklar. Att förena dem kräver en ETL-kedja med en fast mappning, och den mappningen måste underhållas varje gång källsystemet förändras. Silot är alltså inte ett attitydproblem. Silot är ett underhållsåtagande som måste vara finansierat.

## Integrationskostnaden som ingen räknar med

Det andra hindret är integrationskostnaden. En studio antar att ett gemensamt API eller en gemensam inloggning räcker för att bolagen ska dra nytta av varandra. Verkligheten är en annan. Varje integration är ett projekt med egen specifikation, egen testning och eget underhåll när källsystemen förändras.

Ta ett delat faktureringssystem som exempel. Ett sådant system måste hantera olika momssatser, olika avtalsstrukturer och olika valutor inom EU. Även om studion bara verkar i Sverige skiljer sig villkoren mellan en SaaS-prenumeration och en konsulttimme. Att tvinga alla bolag in i en och samma modell ger antingen felaktig fakturering eller en så begränsad modell att bolagen börjar bygga egna lösningar vid sidan av.

McKinsey konstaterar i sin analys av due diligence att förberedelsen saknade en fungerande färdplan för att fånga synergier i 42 till 50 procent av fallen. Studion begår samma fel när den räknar synergivinsten som en post i kalkylarket utan att bokföra integrationskostnaden som en egen rad. Enligt vår bedömning försvinner mer än hälften av den antagna portföljvinsten i just dold integration, och den delen syns sällan förrän det andra eller tredje bolaget ska kopplas på.

Kostnaden syns inte i uppstarten eftersom den första integrationen byggs som ett specialprojekt. När det fjärde bolaget ska anslutas upptäcker studion att inget av de tidigare kopplingarna var designade för återanvändning. En ny utvecklare måste då läsa sig till fyra olika lösningar i stället för att konfigurera en femte. Den ränta som dold integration lägger på varje nytt bolag är den post som gör att portföljen i praktiken blir dyrare än summan av dess delar.

## Domäntrunkering bryter specialiseringen

Det tredje hindret är det mest subtila. Vertical AI vinner på djup, inte på bredd. Ett bolag som förstår en domän tillräckligt väl för att automatisera dess beslut slår ett generellt verktyg med bredd. När studion tvingar fram delade modeller eller delade gränssnitt börjar den beskära just det djupet.

Ett delat språkmodells-lager som ska betjäna både vården och byggen får en kompromissmodell som är medioker i båda. Domänexperterna i respektive bolag måste då slåss för att få modellen att förstå deras termer, och varje sådan anpassning gör lagret svårare att underhålla. Resultatet är domäntrunkering: specialiseringen äts upp av behovet att vara gemensam.

McKinsey noterar att de största felen i synergy-uppskattningar ligger på intäktssidan, där man bygger strategier på korsförsäljning som förutsätter att kunderna i en domän vill ha det andra bolagets produkt. Enligt vår bedömning gäller samma sak för modeller: en delad komponent som beskärs för att passa alla domäner tappar förmågan att vara bäst i någon. Studion byter då bort sin främsta konkurrensfördel mot en besparing som sällan realiseras.

Domäntrunkering är svår att mäta i förväg eftersom den visar sig som utebliven kvalitet. Bolaget levererar fortfarande, men dess modell slår inte längre en specialiserad konkurrent. När flera portföljbolag tappar sin skärpa samtidigt som de delar teknik, är frestelsen att skylla på marknaden stor. Grunden ligger i ett delningsbeslut som fattades utan att någon räknade kostnaden i förlorat domändjup.

## Delad modell eller delad data

En vanlig förväxling är att tro att delad teknik alltid betyder delad modell. Det behöver inte vara fallet, och skillnaden avgör om synergierna hjälper eller skadar. Delad data innebär att bolagen bidrar med råmaterial till ett gemensamt lager som varje domän sedan bearbetar på sitt eget vis. Delad modell innebär att samma färdiga komponent tvingas på alla.

Enligt vår bedömning är delad data nästan alltid att föredra framför delad modell i en vertical AI-studio. Ett gemensamt schema för kundkontakter, fakturor och avtal ger varje bolag en stabil grund utan att tvinga domänlogiken in i samma form. Modellen förblir bolagets egen, och domändjupet skyddas samtidigt som administrationen delas.

Tekniskt innebär detta att studion bygger en central databas med tydliga ägargränser per fält. Ett cron-jobb exporterar varje natt de fält som är gemensamma, medan domänspecifik data stannar i respektive bolag. En sådan konstruktion kostar mer i disciplin men räddar specialiseringen, och den gör att det femte bolaget ansluts med konfiguration i stället för nytt projekt.

## Vad som faktiskt krävs

Synergier i en vertical AI-studio går att bygga, men de kräver att man behandlar dem som produktutveckling i stället för som ett ägandeargument. Fyra konkreta åtgärder skiljer studior som lyckas från dem som bara räknar med det.

- Ett gemensamt data-kontrakt från dag ett. Varje nytt portföljbolag definierar sina fält enligt en studio-gemensam standard så att framtida integration blir en konfiguration, inte ett projekt.
- En explicit integrationsbudget. Studion avsätter en fast andel av varje bolags seed-kapital till delad teknik, till exempel 10 till 15 procent, i stället för att hoppas att synergierna finansierar sig själva.
- Tydliga domängränser. Dela bara det som verkligen överlappar, såsom fakturering, autentisering och grundläggande kundregister. Låt varje bolag behålla sin egen domändata och sin egen modell där djupet avgör.
- En namngiven ägare av portföljtekniken. Utan en funktion som ansvarar för delade lager blir integrationen en fråga som ingen driver, och silona består.

Bain 2026 M&A-rapport visar att 75 procent av frekventa förvärvare når eller överträffar sina synergimål, och skillnaden mot oerfarna köpare handlar just om att man budgeterar och bygger integrationsförmågan som en färdighet. Tillämpat på en studio betyder detta att portföljtekniken ska ha sin egen ägare, sin egen budget och sin egen mätning från första bolaget, inte från det femte.

En studio som vill realisera synergier bygger alltså inte på att bolagen liknar varandra. Den bygger på att de delar en teknisk grund som är designad för att de är olika. Det är en motsatt strategi mot vad de flesta affärsplaner antar, och den är den enda som håller när domänerna skiljer sig åt på riktigt.

## Sammanfattning

Portföljsynergier i vertical AI-studior misslyckas sällan på grund av dålig strategi. De misslyckas för att synergy antas existera i kraft av gemensamt ägande. Verkligheten kräver delad teknik, budgeterad integration och respekt för domändjupet. Datasilons, dold integrationskostnad och domäntrunkering är de tre konkreta hindren, och ingen av dem löses av ett pitch-deck.

En studio som vill realisera synergier bygger ett data-kontrakt från första dagen, budgeterar integrationen som en egen rad och delar enbart det som överlappar. McKinsey och Bain visar båda att integrationsförmågan, inte ägandet, avgör om värde fångas. Enligt vår bedömning är den enskilt viktigaste insatsen att ge portföljtekniken en namngiven ägare med mandat, eftersom ingen annan funktion i studion kommer att driva delningen framåt på egen hand.
