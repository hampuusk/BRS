# Nyheter och fixar efter uppdatering

Vad som är nytt eller ändrat i varje version som laddats upp till GitHub, nyaste först. Versionsnumret syns längst ner under Inställningar i appen.

---

## V1.7 – kommande (ännu inte uppladdad)

Inget än.

---

## V1.6 (2026-11-08)

Samlar ändringarna V1.5.1–V1.5.22.

**Innan du uppdaterar från V1.5:** uppdragen i appen följer med automatiskt vid första starten (se nedan), men gör gärna en säkerhetskopia eller exportera protokollen först – det kostar inget.

**Nytt**
- **Uppdragen följer med från V1.5.** Vid första starten efter uppdateringen flyttas allt som fanns i appen över till den nya lagringen: uppdrag, ritningar, foton, snabbtexter och inställningar. Har du PIN-kod ber appen om den gamla koden först, och koden gäller sedan som vanligt. Underobjekt (4.1, 4.2 …) blir egna objekt med samma text, numrerade efter de andra. Säkerhetskopior gjorda med V1.5 (med eller utan lösenord) kan också läsas in.
- **Samarbeta – två i samma uppdrag, utan server.** Under Uppdragsinställningar → Samarbeta bjuder du in en medhjälpare med en kod (QR-kod eller text). Du som bjuder in är ägare och bestämmer numreringen. Medhjälparen får hela uppdraget som en fil, och sedan skickar ni ändringar till varandra som filer åt båda hållen – med Quick Share, Bluetooth, mejl eller vad telefonen har i sin dela-meny. Objekt som inte skickats är märkta "Ej synkad", och planvyn har knappen Skicka N ändringar. Medhjälparens objekt numreras efter ägarens när de läses in, och vid en krock gäller ägarens version. Filerna är krypterade med koden.
- **Logga i protokollet.** Ladda upp en logga (JPG, PNG eller SVG) under Inställningar → Logga och välj vänster, mitten eller höger. Den läggs i sidhuvudet på tabellsidorna i PDF och Word när "Exportera med logga" är på.
- **Checklista.** Egna kontrollpunkter under Uppdragsinställningar → Checklista. De kan placeras på ritningen (streckad bricka med bock) och blir ett vanligt objekt när de får beskrivning eller foto. Före exporten visas checklistan, och appen frågar om du vill gå vidare med punkter kvar. Checklistan följer aldrig med i protokollet.
- **Översiktsritningarna i exporten är ritningens egen sida** i full storlek (A1 förblir A1), utan rubriker och sidfot. Uppdragets uppgifter och symbolförteckningen står i en ruta i ritningshuvudets stil, placerad där ritningen har plats.
- **Symbolstorlek per plan** (Planinställningar): Auto efter pappersformatet, eller ×1–×3, för symboler, anteckningar och exportens nummer.
- **Utgåva/status** som nytt fält i Uppdragsinformation. Tomma uppgifter följer aldrig med i protokollet.
- **Inställningar är en meny** i samma stil som Uppdragsinställningar: Utseende, Ritningen, Foton, Logga, Säkerhet och lagring, Android-app, Fellogg och Integritet, med nuvarande värde under varje rad.
- Startsidans knapp heter **Läs in fil** och tar emot både säkerhetskopior och delade uppdrag.
- Uppdragets kort på startsidan visar "Delat" när uppdraget delas.
- **Välj appens färg** under Inställningar → Utseende → Färgtema: Orange (som förut), Blå, Grön, Petrol, Lila eller Grafit. Knappar, flikar, länkar och kryssrutor byter färg, i både ljust och mörkt läge. Ritningen och protokollet påverkas inte.
- Nya symboler i planvyn: Uppdragsinställningar är en mapp med ett litet kugghjul och Planinställningar ett våningsplan med samma kugghjul i hörnet. Det ensamma kugghjulet betyder bara appens egna inställningar.

**Ändrat**
- **Underobjekt (4.1, 4.2 …) är borttagna.** Grupper och kategorier gör samma jobb. Kan komma tillbaka i en bättre form, till exempel som en indelning vid exporten.
- **Uppdragstypen Anteckningar är borttagen.** En inventering utan ritning gör samma sak och kan få en ritning senare. Valet heter "Med ritning" och "Utan ritning".
- Alla undersidor i appen har samma mönster: tillbakalänk överst ("‹ Inställningar", "‹ Uppdragsinställningar") och Stäng nederst. Knapparna Tillbaka och Klar är borta.
- Inga fält delar rad i formulären, på alla skärmbredder.
- Kortare och tydligare texter i Inställningar, i rutan Uppdragstyp och i rutan för nytt uppdrag ("Namn på ritning", "t.ex. Plan 1", "Ej angivet").
- Rubriken Uppdragsinställningar visar uppdragstypen under rubriken i stället för bredvid, så den bryts inte på smala skärmar.
- Knapparna Säkerhetskopiera och Radera uppdraget lägger sig på var sin rad på smala skärmar.
- Webbversionen visar det som bara finns i appen som dämpade rader märkta "Endast i appen".
- Stor genomgång av koden: gamla namn och onödig bakåtkompatibilitet borttagna. Säkerhetskopior från V1.2–V1.4 kan inte läsas in i V1.6 (de från V1.5 kan). Från och med V1.6 går kopior från de två senaste versionerna alltid att läsa in, och det kontrolleras automatiskt inför varje ny version.
- Inför uppladdningen: hela koden genomgången och uppstädad, och fyra nya testsviter som inte fanns förut – "apan" (slumpmässiga tryck, svep och inmatning i en minut, allt ska hänga ihop efteråt), avbrottstestet (appen dödas mitt i en sparning, en radering, en PIN-ändring eller en inläsning och startas igen – inget får gå sönder), startmätningen (storlek och starttid med budgetar) och en kontroll av att alla texter i appen är svenska.

**Fixat**
- Efter låsning låg uppdragsnamn, kontrollantens namn och grupp- och kategorinamn från en export kvar i minnet. Nu töms allt.
- Ett objekt som visats på flera platser i V1.5 får efter flytten rätt nummer på varje plats, även om den gamla lagringen innehöll dubbletter eller trasiga bildhänvisningar.
- Checklistans knappar Placera/Flytta och Ta bort lägger sig under texten på smala skärmar, så att ett långt ord ("brandcellsgränsen") inte bryts mitt i.
- Knappen Ta emot fil under Samarbeta såg ut som en rubrik i versaler; nu en vanlig knapp. Inbjudningskoden håller sig på en rad även med stor text.
- Mappsymbolen för Uppdragsinställningar fyller sin knapp lika mycket som plansymbolen (den var något liten).
- Säkerhetskopiera alla och Läs in fil på startsidan får var sin rad på telefoner (de delade rad och "Säkerhetskopiera alla" bröts på två rader).
- "Säkerhetskopiera" bröts mitt i ordet på smala skärmar.
- Rubriken "Uppdragsinställningar" bröts på två rader på smala skärmar (med stor text krymper rubriken lite i stället).

---

## V1.5 (2026-11-05)

Samlar V1.4.1–V1.4.18.

**Nytt**
- **Grupper.** Varje objekt tillhör en grupp (Brister och Noteringar från början, eller egna). Gruppen ger objektets färg på ritningen och blir ett eget avsnitt i protokollet. En förvald grupp för nya objekt väljs genom att hålla inne en grupp, eller under Uppdragsinställningar. Objekt kan också vara utan grupp.
- **Kategorier** är egna och valfria (till exempel Utrymningsväg) och färgar numren på exportens översiktsritningar.
- **Symbolförteckning** under varje översiktsritning: kategorierna, skyltarna som används, anteckningar och "Kompletterat på plats – saknas i ritningsunderlaget".
- **Fem nya ISO 7010-skyltar:** Återsamlingsplats, Utrymningsfönster med stege, Räddningsfönster, Utrymningsstege och Utrymningshiss, samt Utrymningsfönster. Tillgänglighetsanpassad vägledande markering, vit och efterlysande. Skyltarna sorterade efter färg.
- **Sparade mätningar** i Mät, med namn, exporterade på en egen översiktsritning med "Exportera med mätningar".
- **Täta objekt visas som prickar.** I en klunga behåller ungefär varannan markör sitt nummer och resten visas som små prickar i gruppens färg. Prickarna följer med när du zoomar och får tillbaka numret när det finns plats. Kan stängas av under Inställningar → Ritningen.
- **Runda knappar i marginalen** nertill, där tummen når dem: objektlistan, Uppdragsinställningar, Planinställningar, ISO, Mät och pennan. Till vänster eller höger efter vilken hand du håller telefonen i (Inställningar → Ritverktygen). Knapparna tonas ner medan ritningen flyttas.
- Pappersformatet "Annat" med egna mått.
- Säkerhetskopian är en vanlig zip-fil med uppgifterna som JSON och ritningar och foton som filer, så den kan öppnas utan appen. Snabbtexterna och kontrollantens namn följer med.
- Appen tål telefonens textstorlek upp till 150 % utan att något klipps.
- Fotons EXIF-data (position, telefonmodell) tas bort när de läses in. Bilder över 260 megapixel nekas.
- Med PIN-kod på hålls flera öppna flikar i samma webbläsare i takt: låses en, låses alla.
- Alla tryckytor är minst 44 px, och alla rutor har namn för skärmläsare.

**Ändrat**
- Exportvalet "Endast brister på översikt" ersatt av "Symboler visas på", med en ruta per grupp. Exportvalet heter "Redigerbara symboler".
- Sidhuvudet i protokollet säger "Platsbesök" och datum för alla uppdragstyper.
- "Mer" heter Uppdragsinställningar, och "Ändra ▾" på planfliken heter Planinställningar.
- Inget ritverktyg är förvalt, så det som redan är ritat kan plockas upp direkt.
- Exportens bilder packas vid sidan av huvudtråden, och numreringen på översikten placeras 6–8 gånger snabbare.

**Fixat**
- Svart ruta vid symbolkolumnen och svart vald anteckning i mörkt läge.
- Kamerans tillfälliga fil på Android raderas efter fotot.
- Appen säger tydligt ifrån när lagringen är full.
- Webbversionen uppdaterar sig även när webbläsaren har en egen kopia av filerna.
- Text på en kategoris färg är svart eller vit, det som läses bäst.

---

## V1.4 (2026-11-03)

Samlar V1.3.2–V1.3.14.

**Nytt**
- **Symbolverktyget (ISO).** ISO 7010-skyltar på ritningen: handbrandsläckare, inomhusbrandpost, brandlarmsknapp, utrymningsplats och vägledande markeringar uppåt, neråt, åt vänster och åt höger. Symbolerna är 7,5 mm på ritningens papper; pappersformatet läses från PDF:en eller väljs när ritningen läggs in.
- **Anteckning med hänvisningspil:** en gul ruta med text och en blå pil till platsen den gäller.
- **Redigerbart i Bluebeam och Acrobat:** symbolerna och anteckningarna ligger som markeringar i PDF:en och kan flyttas, ändras och få ny text.
- Med symboler blir det två översiktsritningar i PDF:en: en med bara symbolerna och en med bristerna ovanpå (eller bara bristerna, med valet "Endast brister på översikt").
- Excel har ett blad med antal av varje symbol.
- **Förhandsvisning:** översiktsritningarna visas medan du väljer vad som ska med, och den färdiga filen kan bläddras igenom sida för sida innan du sparar.
- **Ritverktygen som symboler i en kolumn** i vänsterkanten. Tryck på ett verktyg igen för att lägga ifrån dig det. Håll inne något du ritat för att lyfta och flytta det, dra i en ände för att ändra längden.
- **Mät** har en egen knapp ovanför pennan och visar med en decimal, i km från 1 000 m.
- Stora exporter delas i flera PDF- och Word-filer (2 000 objekt per fil).
- En mätare under Inställningar visar hur mycket lagring varje uppdrag tar.
- Lägesbilderna i protokollet visas utan symboler.

**Ändrat**
- Inställningarna med varje förklaring direkt under sin inställning, och PIN-koden flyttad från startsidan till Inställningar.
- Startsidan: "+ Nytt uppdrag" centrerat på breda skärmar, "Obj." som kortform, grön bock i stället för hänglås på statuskortet.
- Medan ett verktyg är ute visas bara dess egen knapp.
- I webbversionen i Claude visas det som bara den installerade appen kan som dämpade platshållare ("Endast i appen").

---

## V1.3.1 (2026-11-01)

**Fixat**
- Att ta eller välja ett foto och spara objektet går snabbt även med mycket stora kamerabilder: kameran lämnar över högst 2 560 px, och nya foton förminskas i bakgrunden så fort de lagts till.

**Ändrat**
- Appen säger "objekt" överallt där det stod "punkt": objektlistan, underobjekt, "Välj flera objekt".

---

## V1.3 (2026-11-01)

Samlar V1.2.4–V1.2.20.

**Nytt**
- **Lösenord som alternativ till PIN-kod**, med styrkemätare. Kontrollantens namn sparas krypterat.
- **Mer** är en meny med sidor: Uppdragsinformation, Kategorier, Snabbtexter samt Säkerhetskopia och radering.
- Före exporten visas det som saknas (objekt utan foto eller beskrivning) överst i Exportera, med en väg rakt dit.
- Håll inne ett uppdrag på startsidan för Redigera eller Radera. Svep in från kanten för att öppna objektlistan.
- Sortering av uppdragen på "Senaste". "Visa tips" kan stängas av.
- Ritverktygens Ångra står bredvid "Avsluta linjen" och backar ett steg i taget, även efter att verktygen stängts och öppnats igen.
- Skala och kalibrering mot en känd längd bland ritverktygen, så måtten visas i meter. Inställningen "Spara foton i mobilen".
- "Ladda ner V… för Android" under Inställningar i webbversionen: en vanlig länk till APK-filen i samma version på GitHub. Appen hämtar eller skickar fortfarande ingenting själv.

**Ändrat**
- Samma ord överallt: uppdrag, plan, datum, uppdragsinformation, lägesbilder, radera.
- En enda "Är du säker?"-ruta för allt som raderar, med lika breda knappar.
- Inga zoomknappar – nyp för att zooma. Tydligare planflikar. Svep mellan plan borttaget.
- Ett typsnitt och en liten skala av textstorlekar överallt. Mjuka övergångar mellan startsidan och ritningen, som kan stängas av ("App-animeringar").
- Meddelanden visas i nedre delen av skärmen. Snyggare menyer med lika breda knappar.

**Fixat**
- Objektlistan hoppade tillbaka när man rullade i den, och den sista raden låg gömd under Exportera-knappen.
- Texten "null" kunde dyka upp över ritningen när dagens tips visats.
- Tillståndet hålls ihop vid parallellt arbete, och fel loggas och visas i stället för att sväljas tyst (Fellogg).

---

## V1.2.3 (2026-10-31)

**Nytt**
- GitHub bygger även en AAB-fil för Google Play, vid sidan av APK-filen.

## V1.2.1 (2026-10-31)

**Fixat**
- Arbetsflödet som bygger Android-appen hos GitHub.

## V1.2 (2026-10-31)

**Nytt**
- **Android-appen.** Byggs automatiskt av GitHub varje gång koden laddas upp. Egen lagring på telefonen och ingen behörighet att använda internet. Exporter och säkerhetskopior sparas i Dokument/PlanPin, kamerafoton kopieras till Bilder/PlanPin, "Maila / dela" öppnar Androids delningsmeny.
- Webbappen fungerar som förut och uppdaterar sig själv.

---

## V1.1 och tidigare

Webbappen på GitHub Pages: tre uppdragstyper (Inventering med prioritering, Utförandekontroll med kontrollpunkter enligt BFS 2024:7, Anteckningar utan ritning), ritning som PDF eller bild, numrerade punkter med underpunkter, foto med markering i bilden, beskrivning med snabbtexter, kategorier med färger, flera plan, ritverktyg (väggar, dörrar, fönster, sudd, mätning), punktlista med sök och filter, export till PDF, Word och Excel med lägesbilder, PIN-kod med AES-256-kryptering, krypterade säkerhetskopior, ljust och mörkt läge, fungerar utan uppkoppling.
