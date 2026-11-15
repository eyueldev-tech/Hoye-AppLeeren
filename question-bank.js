/* Grace Leerwereld question bank v2: curated source facts, distinct levels and stable IDs. */
(function(){
'use strict';
const spelling=[
['bibliotheek','boeken lenen','biblioteek'],['vriendelijk','aardig tegen anderen','vrindelijk'],['moeilijk','niet gemakkelijk','moeilik'],['schrijven','letters op papier zetten','schrijfen'],['verjaardag','dag waarop je jarig bent','verjaardach'],['ontbijt','eerste maaltijd van de dag','ontbeid'],['geheim','iets wat niet iedereen weet','geheym'],['schilderij','kunstwerk met verf','schildery'],['koningin','vrouwelijke vorst','koninggin'],['avontuur','spannende belevenis','aventuur'],['ziekenhuis','plek waar artsen mensen helpen','ziekehuis'],['vliegtuig','vervoermiddel in de lucht','vliechtuig'],['familie','mensen die bij elkaar horen','famillie'],['regenboog','gekleurde boog in de lucht','regeboog'],['aardbeien','rode vruchten','aardbijen'],['politie','mensen die helpen bij veiligheid','politsie'],['gezellig','prettig samen','gesellig'],['vrolijk','blij en opgewekt','vroolijk'],['beweging','als iets van plaats verandert','bewegin'],['eindelijk','na lang wachten','eindelek'],['belangrijk','iets dat veel betekenis heeft','belangreik'],['verrassing','iets onverwachts','verasing'],['onmiddellijk','zonder te wachten','onmidellijk'],['nieuwsgierig','graag iets willen weten','nieuwschierig'],['natuurlijk','zoals het vanzelf is','natuurelijk'],['wedstrijd','spel met een winnaar','wedstreid'],['geschiedenis','verhalen over vroeger','gescheidenis'],['gezondheid','hoe gezond iemand is','gesontheid'],['verschillend','niet hetzelfde','verschilent'],['verantwoordelijk','ergens zorg voor dragen','verantwordelijk'],['temperatuur','hoe warm of koud het is','temperetuur'],['herinnering','iets wat je je nog weet','herinering'],['enthousiast','heel blij en gemotiveerd','entousiast'],['fantastisch','heel erg goed','fantasties'],['omgeving','gebied om je heen','omgeefing'],['bibliothecaris','persoon die in de bibliotheek werkt','bibliotekaris'],['voorzichtig','met aandacht en zorg','voorsichtig'],['onmogelijk','niet uitvoerbaar','onmogenlijk'],['regelmatig','vaak volgens een patroon','regelmattig'],['samenwerken','iets met anderen doen','samen werken']
];
const vocab=[
['nieuwsgierig','graag meer willen weten','onverschillig'],['voorzichtig','opletten om ongelukken te voorkomen','roekeloos'],['behulpzaam','graag anderen helpen','onbehulpzaam'],['geduldig','rustig kunnen wachten','ongeduldig'],['dapper','moedig ondanks angst','bang'],['twijfelen','niet zeker weten wat je kiest','zeker weten'],['onderzoeken','iets nauwkeurig uitzoeken','negeren'],['ontdekken','iets vinden dat je nog niet kende','verbergen'],['vergelijken','kijken wat gelijk en anders is','niet vergelijken'],['voorspellen','zeggen wat waarschijnlijk zal gebeuren','achteraf vertellen'],['oplossing','manier om een probleem te verhelpen','probleem'],['gevolg','wat er door iets anders gebeurt','oorzaak'],['oorzaak','reden waarom iets gebeurt','gevolg'],['overleggen','samen bespreken','zwijgen'],['samenwerken','met elkaar aan een taak werken','alleen werken'],['betrouwbaar','iemand op wie je kunt rekenen','onbetrouwbaar'],['verantwoordelijk','zorg dragen voor iets','zorgeloos'],['omgeving','gebied rondom een plek','ver weg'],['uitzondering','iets dat niet aan de regel voldoet','regel'],['samenvatten','de belangrijkste punten kort vertellen','uitgebreid vertellen'],['verschil','wat niet hetzelfde is','overeenkomst'],['overeenkomst','wat hetzelfde is','verschil'],['enthousiast','heel veel zin hebben','ongeïnteresseerd'],['teleurgesteld','verdrietig omdat iets tegenvalt','tevreden'],['trots','blij met wat je hebt bereikt','beschaamd'],['jaloers','iets willen wat een ander heeft','tevreden'],['opluchten','je beter voelen na zorgen','ongerust worden'],['verrassen','iets onverwachts doen','verwachten'],['besparen','minder gebruiken of uitgeven','verspillen'],['verspillen','onnodig veel gebruiken','besparen'],['beschermen','veilig houden tegen gevaar','blootstellen'],['waarschuwen','vertellen dat er gevaar kan zijn','geruststellen'],['bewijzen','laten zien dat iets waar is','ontkennen'],['mening','wat iemand ergens van vindt','feit'],['feit','iets dat je kunt controleren','mening'],['volgorde','hoe dingen achter elkaar komen','wanorde'],['regelmatig','met vaste tussenpozen','zelden'],['tijdelijk','niet voor altijd','blijvend'],['nauwkeurig','heel precies','slordig'],['onafhankelijk','zelf keuzes kunnen maken','afhankelijk']
];
const english=[
['apple','appel','fruit'],['window','raam','home'],['school','school','places'],['garden','tuin','nature'],['teacher','leraar','people'],['friend','vriend','people'],['family','familie','people'],['breakfast','ontbijt','food'],['water','water','nature'],['bread','brood','food'],['cheese','kaas','food'],['carrot','wortel','food'],['strawberry','aardbei','food'],['rabbit','konijn','animals'],['butterfly','vlinder','animals'],['horse','paard','animals'],['turtle','schildpad','animals'],['elephant','olifant','animals'],['forest','bos','nature'],['river','rivier','nature'],['mountain','berg','nature'],['cloud','wolk','nature'],['rain','regen','weather'],['snow','sneeuw','weather'],['sunny','zonnig','weather'],['cold','koud','weather'],['happy','blij','feelings'],['angry','boos','feelings'],['tired','moe','feelings'],['hungry','hongerig','feelings'],['read','lezen','actions'],['write','schrijven','actions'],['listen','luisteren','actions'],['swim','zwemmen','actions'],['jump','springen','actions'],['walk','lopen','actions'],['bicycle','fiets','transport'],['train','trein','transport'],['bridge','brug','places'],['library','bibliotheek','places']
];
const world=[
['Aarde','De planeet waarop wij wonen','planeet'],['Zon','De ster die licht en warmte geeft aan de aarde','ruimte'],['Maan','De natuurlijke satelliet van de aarde','ruimte'],['Mars','De rode planeet','ruimte'],['Jupiter','De grootste planeet van ons zonnestelsel','ruimte'],['Mercurius','De planeet die het dichtst bij de zon staat','ruimte'],['Saturnus','De planeet met opvallende ringen','ruimte'],['Noordpool','Het gebied rond het noordelijkste punt van de aarde','aarde'],['evenaar','Een denkbeeldige lijn midden om de aarde','aarde'],['continent','Een groot aaneengesloten landgebied','aarde'],['oceaan','Een heel grote zee','water'],['rivier','Stromend water dat naar een ander watergebied gaat','water'],['delta','Gebied waar een rivier zich vertakt bij de monding','water'],['verdamping','Water dat overgaat in waterdamp','water'],['neerslag','Regen, sneeuw of hagel die uit wolken valt','weer'],['thermometer','Instrument waarmee je temperatuur meet','weer'],['wind','Lucht die beweegt','weer'],['kompas','Instrument dat richtingen aangeeft','kaart'],['legenda','Uitleg van symbolen op een kaart','kaart'],['schaal','Verhouding tussen afstand op kaart en in werkelijkheid','kaart'],['fotosynthese','Planten maken met licht energie uit water en koolstofdioxide','natuur'],['wortels','Delen van planten die water en voedingsstoffen opnemen','natuur'],['bestuiving','Overdracht van stuifmeel tussen bloemen','natuur'],['zoogdier','Dier dat zijn jongen met melk voedt','dieren'],['amfibie','Dier dat vaak in water en op land leeft','dieren'],['reptiel','Gewerveld dier met schubben zoals een hagedis','dieren'],['voedselketen','Reeks van organismen die elkaar eten','dieren'],['roofdier','Dier dat andere dieren vangt om te eten','dieren'],['herbivoor','Dier dat planten eet','dieren'],['ecosysteem','Levende wezens en hun omgeving samen','natuur'],['recycling','Afval opnieuw gebruiken als grondstof','milieu'],['duurzaamheid','Zo omgaan met spullen en natuur dat ze behouden blijven','milieu'],['energiebron','Iets waaruit energie wordt gewonnen','energie'],['zonnepaneel','Apparaat dat zonlicht omzet in elektriciteit','energie'],['windmolen','Machine die wind kan gebruiken om stroom te maken','energie'],['democratie','Bestuur waarbij mensen invloed hebben via verkiezingen','samenleving'],['gemeente','Plaatselijk bestuur van een stad of dorp','samenleving'],['burgemeester','Bestuurder met belangrijke taken in de gemeente','samenleving'],['grondwet','Wet met de belangrijkste regels en rechten van een land','samenleving'],['verkiezingen','Moment waarop mensen stemmen op vertegenwoordigers','samenleving']
];
const stories=[
['Noor','de bibliotheek','leende een boek over sterren','ze meer over planeten wilde weten','ze maakte thuis een tekening','woensdag'],
['Milan','het park','raapte plastic op','hij dieren wilde beschermen','de vijver werd schoner','zaterdag'],
['Amina','de moestuin','plantte wortelzaadjes','ze zelf groenten wilde kweken','er groeiden groene blaadjes','maandag'],
['Sam','het zwembad','oefende de rugslag','hij beter wilde leren zwemmen','hij zwom een hele baan','vrijdag'],
['Lina','de bakkerij','kocht volkorenbrood','het gezin samen ging ontbijten','iedereen kreeg een boterham','zondag'],
['Daan','het museum','bekijkte oude schilderijen','hij van geschiedenis houdt','hij vertelde er thuis over','dinsdag'],
['Yara','de kinderboerderij','gaf de geiten hooi','de dieren honger hadden','de geiten begonnen te eten','donderdag'],
['Omar','het station','hielp een reiziger met een kaart','de reiziger de weg niet wist','de reiziger vond het juiste perron','maandag'],
['Eva','de speeltuin','repareerde met haar vader een schommel','een plank loszat','de kinderen konden weer veilig spelen','zaterdag'],
['Bo','de school','organiseerde een boekenruil','kinderen nieuwe verhalen wilden lezen','iedereen ging met een ander boek naar huis','vrijdag'],
['Ravi','het bos','zocht naar paddenstoelen','hij een natuurproject deed','hij schreef zijn vondsten op','woensdag'],
['Sofia','de keuken','maakte fruitsalade','ze een gezond tussendoortje wilde','de familie proefde het fruit','zondag'],
['Niels','het strand','bouwde een zandkasteel','hij een wedstrijdje met zijn zus deed','de golven spoelden de toren weg','zaterdag'],
['Iris','het theater','oefende een toneelstuk','ze de volgende dag zou optreden','ze kende haar tekst uit haar hoofd','donderdag'],
['Adam','de sporthal','trainde met zijn basketbalteam','ze zich voorbereidden op een wedstrijd','het team speelde beter samen','dinsdag'],
['Fleur','de tuin','hing een vogelhuisje op','vogels een veilige plek nodig hadden','een koolmees kwam kijken','zondag'],
['Tess','het sciencecentrum','bouwde een kleine brug','ze wilde testen hoe sterk papier is','de brug droeg drie blokjes','woensdag'],
['Jayden','de markt','kocht appels voor zijn oma','hij haar wilde verrassen','oma maakte appelmoes','zaterdag'],
['Maya','het klaslokaal','maakte een poster over water','de klas water wilde besparen','iedereen draaide de kraan beter dicht','maandag'],
['Finn','de dierentuin','tekende een olifant','hij een spreekbeurt voorbereidde','zijn tekening hing aan de muur','vrijdag'],
['Sara','de fietsenwinkel','liet haar fietsband repareren','de band langzaam leegliep','ze fietste weer naar huis','dinsdag'],
['Amir','het buurthuis','deelde soep uit','hij buren wilde helpen','de bezoekers bedankten hem','donderdag'],
['Puck','de bloemenwinkel','kocht zonnebloemen','ze haar moeder wilde feliciteren','de bloemen stonden op tafel','zaterdag'],
['Jesse','het natuurgebied','telde watervogels','hij meedeed aan een vogeltelling','hij zag twaalf eenden','zondag'],
['Esra','de muziekschool','oefende een lied op piano','ze een concert had','ze speelde zonder fouten','woensdag'],
['Lucas','het voetbalveld','raapte ballen op','de training bijna begon','de trainer kon meteen starten','maandag'],
['Nina','het postkantoor','verstuurde een kaart','haar opa jarig was','opa kreeg een vrolijke groet','vrijdag'],
['Yusuf','de camping','zette met zijn vader een tent op','ze buiten gingen slapen','ze luisterden naar de regen','zaterdag'],
['Lotte','de ijsbaan','oefende bochten maken','ze een schaatswedstrijd wilde doen','ze bleef steeds beter in balans','dinsdag'],
['Mees','het aquarium','leerde over zeepaardjes','hij nieuwsgierig was naar zeedieren','hij vertelde het aan zijn klas','donderdag']
];
function rotateChoices(answer,wrong){const uniq=[...new Set([answer,...wrong])].filter(Boolean);return uniq.slice(0,4)}
function make(id,subject,level,q,answer,wrong,explain,extra={}){return{id,subject,level,q,answer:String(answer),options:rotateChoices(String(answer),wrong.map(String)),explain,...extra}}
function buildSubject(subject,level){
 const out=[];
 if(subject==='spelling'){
  spelling.forEach(([word,meaning,wrong],i)=>{
   const others=spelling.filter((x,j)=>j!==i&&x[0]!==word).map(x=>x[0]);
   const idx=(i*7)%others.length;
   const alt=[wrong,word.replace(/ij/g,'ei').replace(/ei/g,'ij'),word.replace(/aa/g,'a').replace(/oo/g,'o'),word+'e'].filter(x=>x!==word);
   const distract=[...new Set(alt)];while(distract.length<3)distract.push(others[(idx+distract.length)%others.length]);
   for(let mode=0;mode<3;mode++){
    const q=level===1?['Welk woord is goed geschreven?','Kies de juiste spelling van het woord: '+meaning+'.','Welk woord hoort bij de betekenis "'+meaning+'"?'][mode]:level===2?['In je dictee hoor je "'+word+'". Welke schrijfwijze klopt?','Je leest een tekst over '+meaning+'. Welk woord schrijf je op?','Welke schrijfwijze gebruik je in een nette brief voor "'+meaning+'"?'][mode]:['Je corrigeert een tekst. Welke spelling is juist voor "'+word+'"?','Een redacteur controleert "'+meaning+'". Welk woord is correct?','Kies de correcte spelling van het begrip dat "'+meaning+'" betekent.'][mode];
    out.push(make('sp-'+level+'-'+i+'-'+mode,subject,level,q,word,distract,'De juiste spelling is "'+word+'".'))
   }
  })
 }else if(subject==='vocab'){
  vocab.forEach(([word,meaning,opposite],i)=>{
   const meanings=vocab.filter((x,j)=>j!==i).map(x=>x[1]);
   const words=vocab.filter((x,j)=>j!==i).map(x=>x[0]);
   const pick=(arr)=>[arr[(i+5)%arr.length],arr[(i+13)%arr.length],arr[(i+24)%arr.length]];
   for(let mode=0;mode<3;mode++){
    if(mode===0)out.push(make('vo-'+level+'-'+i+'-0',subject,level,level===1?'Wat betekent "'+word+'"?':level===2?'Je komt het woord "'+word+'" tegen in een verhaal. Wat betekent het?':'Welke uitleg past het beste bij het begrip "'+word+'"?',meaning,pick(meanings),'Het woord "'+word+'" betekent: '+meaning+'.'));
    if(mode===1)out.push(make('vo-'+level+'-'+i+'-1',subject,level,level===1?'Welk woord betekent "'+meaning+'"?':level===2?'Welk woord past bij deze omschrijving: '+meaning+'?':'Een schrijver zoekt een precies woord voor "'+meaning+'". Welk woord kiest hij?',word,pick(words),'Dat woord is "'+word+'".'));
    if(mode===2)out.push(make('vo-'+level+'-'+i+'-2',subject,level,level===1?'Wat past het minst bij "'+word+'"?':level===2?'Welk woord of begrip staat tegenover "'+word+'"?':'Welke tegenstelling helpt om "'+word+'" beter te begrijpen?',opposite,pick(words),'De tegenstelling bij "'+word+'" is "'+opposite+'".'))
   }
  })
 }else if(subject==='english'){
  english.forEach(([en,nl,category],i)=>{
   const otherNL=english.filter((x,j)=>j!==i).map(x=>x[1]),otherEN=english.filter((x,j)=>j!==i).map(x=>x[0]);
   const pick=arr=>[arr[(i+4)%arr.length],arr[(i+15)%arr.length],arr[(i+29)%arr.length]];
   for(let mode=0;mode<3;mode++){
    if(mode===0)out.push(make('en-'+level+'-'+i+'-0',subject,level,level===1?'Wat betekent "'+en+'"?':level===2?'Je leest "'+en+'" in een Engels verhaal. Wat betekent dat?':'Welke Nederlandse vertaling past bij het Engelse woord "'+en+'"?',nl,pick(otherNL),'"'+en+'" betekent "'+nl+'".'));
    if(mode===1)out.push(make('en-'+level+'-'+i+'-1',subject,level,level===1?'Hoe zeg je "'+nl+'" in het Engels?':level===2?'Je wilt "'+nl+'" zeggen tegen een Engelse vriend. Welk woord gebruik je?':'Welke Engelse woordkeuze is correct voor het Nederlandse begrip "'+nl+'"?',en,pick(otherEN),'Het Engelse woord is "'+en+'".'));
    if(mode===2)out.push(make('en-'+level+'-'+i+'-2',subject,level,level===1?'Welk Engels woord hoort bij "'+nl+'"?':level===2?'Welk woord uit de categorie '+category+' betekent "'+nl+'"?':'Kies de nauwkeurige Engelse vertaling van "'+nl+'" in een woordenlijst.',en,pick(otherEN),'"'+nl+'" vertaal je als "'+en+'".'))
   }
  })
 }else if(subject==='world'){
  world.forEach(([term,definition,category],i)=>{
   const other=world.filter((x,j)=>j!==i);
   const distract=other.filter(x=>x[2]===category).map(x=>x[0]).concat(other.map(x=>x[0]));
   const wrong=[...new Set(distract)].slice((i*3)%30,(i*3)%30+3);
   while(wrong.length<3)wrong.push(other[wrong.length][0]);
   for(let mode=0;mode<3;mode++){
    const q=level===1?['Wat is: '+definition+'?','Welk begrip past bij deze uitleg: '+definition+'?','Welke term hoort bij "'+definition+'"?'][mode]:level===2?['Tijdens wereldoriëntatie leer je: '+definition+'. Welk begrip is dit?','Een leerling schrijft in zijn schrift: '+definition+'. Welke titel past erboven?','Welke term uit het onderwerp '+category+' hoort bij: '+definition+'?'][mode]:['Je leest in een encyclopedie: '+definition+'. Welk trefwoord zoek je op?','Welke vakterm omschrijft het nauwkeurigst: '+definition+'?','In een onderzoek staat: '+definition+'. Welk begrip verklaart dit?'][mode];
    out.push(make('wo-'+level+'-'+i+'-'+mode,subject,level,q,term,wrong,'Dit is "'+term+'": '+definition+'.'))
   }
  })
 }else if(subject==='reading'){
  stories.forEach(([who,where,action,reason,result,day],i)=>{
   const story=who+' ging '+(where.startsWith('de ')?'naar ':'naar ')+where+'. '+who+' '+action+', omdat '+reason+'. Daarna '+result+'. Dit gebeurde op '+day+'.';
   const otherWho=stories.filter((x,j)=>j!==i).map(x=>x[0]);
   const otherWhere=stories.filter((x,j)=>j!==i).map(x=>x[1]);
   const otherActions=stories.filter((x,j)=>j!==i).map(x=>x[2]);
   const otherResults=stories.filter((x,j)=>j!==i).map(x=>x[4]);
   const pick=arr=>[arr[(i+2)%arr.length],arr[(i+11)%arr.length],arr[(i+19)%arr.length]];
   const variants=level===1?[
    ['Wie is de hoofdpersoon?',who,pick(otherWho),'De hoofdpersoon is '+who+'.'],
    ['Waar speelt het verhaal zich af?',where,pick(otherWhere),'Het verhaal speelt zich af in '+where+'.'],
    ['Wat deed '+who+'?',action,pick(otherActions),who+' '+action+'.'],
    ['Op welke dag gebeurde dit?',day,['maandag','woensdag','zaterdag','vrijdag'].filter(x=>x!==day).slice(0,3),'Het gebeurde op '+day+'.']
   ]:level===2?[
    ['Wat was de belangrijkste reden voor de actie?',reason,pick(stories.filter((x,j)=>j!==i).map(x=>x[3])),'In de tekst staat: omdat '+reason+'.'],
    ['Wat gebeurde er daarna?',result,pick(otherResults),'Daarna '+result+'.'],
    ['Waar gebeurde de belangrijkste actie?',where,pick(otherWhere),'De plek is '+where+'.'],
    ['Welke handeling past bij het doel van de hoofdpersoon?',action,pick(otherActions),who+' '+action+'.']
   ]:[
    ['Welke informatie verklaart het beste waarom '+who+' handelde?',reason,pick(stories.filter((x,j)=>j!==i).map(x=>x[3])),'De oorzaak staat na "omdat": '+reason+'.'],
    ['Welk gevolg past bij de gebeurtenissen in het verhaal?',result,pick(otherResults),'Het gevolg was: '+result+'.'],
    ['Welke gebeurtenis kwam vóór het resultaat?',action,pick(otherActions),'Eerst '+action+', daarna '+result+'.'],
    ['Welke conclusie wordt rechtstreeks ondersteund door de tekst?',who+' was '+where, pick(otherWho).map(x=>x+' was '+where),'De tekst vertelt dat '+who+' '+where+' bezocht.']
   ];
   variants.forEach(([q,answer,wrong,explain],mode)=>out.push(make('re-'+level+'-'+i+'-'+mode,subject,level,q,answer,wrong,explain,{passage:story})))
  })
 }
 return out
}
const bank={};for(const id of ['spelling','vocab','reading','english','world'])for(let d=1;d<=3;d++)bank[id+':'+d]=buildSubject(id,d);
window.GraceQuestionBank={get:(id,d)=>bank[id+':'+d]||[],counts:Object.fromEntries(Object.entries(bank).map(([k,v])=>[k,v.length]))};
})();