# PlanPin

**Numrerade objekt på ritningar, med foton och beskrivning, och ett färdigt protokoll i PDF, Word eller Excel.**

PlanPin är gjord för besiktningar, inventeringar och kontroller på plats. Du öppnar ritningen i telefonen, trycker där något ska noteras, tar ett foto och skriver vad det gäller. När du är klar exporterar du protokollet direkt från telefonen.

<p>
  <img src="docs/bild-start.png" width="200" alt="Startsidan med uppdragen">
  <img src="docs/bild-ritning.png" width="200" alt="Ritning med numrerade objekt och objektlistan">
  <img src="docs/bild-objekt.png" width="200" alt="Ett objekt med foto, kategori och beskrivning">
  <img src="docs/bild-export.png" width="200" alt="Exportera med det som saknas överst">
</p>

## Funktioner

**Uppdrag och ritningar**
- Två typer av uppdrag: **Inventering/platsbesök** (med prioritering) och **Utförandekontroll** (objekttyper med kontrollpunkter enligt BFS 2024:7). Båda kan påbörjas utan ritning och få en ritning senare.
- Ritningar som PDF eller bild. En PDF med flera sidor kan läggas in som ett plan per sida.
- Flera plan i samma uppdrag, med flikar som visar antalet objekt på varje plan.
- Sortering av uppdragen efter senast använda, datum, namn eller typ.

**Objekt**
- Tryck på ritningen för att sätta ett objekt. Objekten numreras automatiskt och får nya nummer om något raderas.
- Håll inne ett objekt och dra för att flytta det. Ett förstoringsglas visar exakt var det hamnar.
- Foton från kameran eller bildalbumet, med markering direkt i fotot: pil, ring och penna i rött, och vridning.
- Beskrivning med snabbtexter och förslag från tidigare objekt.
- Grupper (till exempel Brister och Noteringar, eller egna) som ger objekten deras färg på ritningen och blir egna avsnitt i protokollet (en förvald grupp för nya objekt, eller ingen), och egna kategorier med färger (till exempel Utrymningsväg). Prioritet 1–3.
- **Lägesbild:** ett utsnitt av ritningen runt objektet följer med i protokollet.

**Checklista**
- En egen lista med det du ska titta på vid platsbesöket, under Uppdragsinställningar. Bocka av punkterna medan du går runt.
- Checkpunkter kan placeras på ritningen före besöket. Tryck på en på plats så står det vad den gäller, och när du fyller i en beskrivning eller tar ett foto blir den ett vanligt objekt.
- När du trycker på Exportera visas checklistan först, så att du ser att du har kollat allt. Den följer inte med i exporten.

**Objektlistan**
- Visas bredvid ritningen. Öppnas med listknappen i marginalen eller med ett svep in från högerkanten.
- Sök på nummer eller text och filtrera på grupp och kategori, på ett plan eller alla.
- Välj flera objekt för att byta grupp, kategori eller prioritet, eller radera dem samtidigt.

**Ritverktyg**
- Rita väggar, dörrar och fönster och sudda bort det som inte stämmer. Verktygen är symboler i en kolumn i vänsterkanten. Inget verktyg är förvalt, så det som redan är ritat kan plockas upp direkt.
- Håll inne något du ritat för att lyfta och flytta det, eller dra i en ände för att ändra längden.
- **Mät** längder och sträckor, med en decimal och i km från 1 000 m. Ange skala eller kalibrera mot en känd längd. En mätning kan sparas med ett namn, till exempel ett gångavstånd. De sparade mätningarna syns bara i Mät och kan exporteras på en egen översiktsritning.
- Ångra ett steg i taget. Ändringarna kan visas i blått i protokollet.

**Symbolverktyget (ISO)**
- ISO 7010-skyltar på ritningen: handbrandsläckare, inomhusbrandpost, brandlarmsknapp, utrymningsplats, återsamlingsplats, utrymningsfönster, utrymningsfönster med stege, räddningsfönster, utrymningsstege, utrymningshiss och vägledande markeringar uppåt, neråt, åt vänster och åt höger, även tillgänglighetsanpassad väg för utrymning, både vita och efterlysande (gula). Skyltarna ligger sorterade efter färg, med de vägledande markeringarna i följd.
- Symbolerna är 7,5 mm (markeringarna 7,5 × 3,75 mm) på ritningens papper, gånger symbolstorleken som följer pappersformatet (A1 ×2) eller väljs per plan. Pappersformatet läses från PDF:en eller väljs när ritningen läggs in.
- **Anteckning med hänvisningspil:** en gul ruta med text i 10 pt och en blå pil till platsen den gäller.

**Export**
- **PDF:** ett avsnitt per grupp med översiktsritning per plan och en tabell med nummer, beskrivning, lägesbild och foton. Översiktsritningarna är ritningens egen sida i full storlek (en A1 förblir A1) med objekten och symbolerna utsatta; på dem har numren kategoriernas färger. Symbolerna får en egen översiktsritning, och du väljer vilka gruppers ritningar som också ska visa dem. På varje översiktsritning ligger en ruta i ritningshuvudets stil – översiktens namn, uppdragets uppgifter och en symbolförteckning – där ritningen har plats, oftast i marginalen ovanför ritningshuvudet.
- **Redigerbart i Bluebeam:** på symbolritningen ligger symbolerna och anteckningarna som markeringar, så de kan flyttas, ändras i storlek, vridas och få ny text i Bluebeam och Acrobat.
- **Word:** samma tabell som redigerbar fil, med översiktsritningarna som separat PDF.
- **Logga:** ladda upp din logga (JPEG, PNG eller SVG) under Inställningar och välj om den ska stå till vänster, i mitten eller till höger. Med Exportera med logga hamnar den i sidhuvudet på tabellsidorna i PDF och Word.
- Stora uppdrag delas upp i flera PDF- eller Word-filer med högst 2 000 objekt per fil, så att exporten fungerar även på telefoner med lite minne.
- **Excel:** en sorterbar lista, för utförandekontroller ett eget blad med alla kontrollpunkter, och ett blad med antal av varje symbol.
- **Förhandsvisning:** översiktsritningarna visas medan du väljer vad som ska med, och den färdiga filen kan bläddras igenom sida för sida innan du sparar den.
- Innan du exporterar visas det som saknas, till exempel objekt utan foto eller beskrivning. Du kan fylla i det eller exportera direkt.

**Samarbeta – två i samma uppdrag, utan server**
- Under Uppdragsinställningar → Samarbeta bjuder du in en medhjälpare. Du som bjuder in är ägare och bestämmer numreringen. Medhjälparen får hela uppdraget som en fil och läser in den med en kod som skannas från din skärm (QR) eller skrivs in.
- Sedan skickar ni ändringar till varandra som filer, åt båda hållen, med Quick Share, Bluetooth, mejl eller vad telefonen har i sin dela-meny. En fil innehåller bara det som ändrats sedan förra, med foton. Ett objekt som inte skickats än är märkt "Ej synkad", och knappen Skicka i planvyn räknar dem.
- När ägaren läser in medhjälparens objekt numreras de efter ägarens, i den ordning de gjordes, och ägarens nästa fil ger medhjälparen de slutliga numren. Har båda ändrat samma objekt gäller ägarens version. Raderingar följer med.
- Filerna är krypterade med koden (AES-256) och avslöjar ingenting för den som får tag i dem utan koden. Ingenting går via nätet – appen skickar bara filen till dela-menyn.

**Säkerhet och integritet**
- Allt sparas bara på telefonen. Ingenting laddas upp och ingenting skickas någonstans. En mätare under Inställningar visar hur mycket lagring varje uppdrag tar, och appen säger tydligt ifrån om lagringen blir full.
- Fotons EXIF-data (position, telefonmodell) tas bort när de läses in, så de följer aldrig med i protokollen. Bilder över 260 megapixel nekas innan de läses in.
- Med PIN-kod eller lösenord på hålls flera öppna flikar i samma webbläsare i takt: låses en, låses alla.
- Lås med PIN-kod eller lösenord. Allt som sparas krypteras då (AES-256), och appen låses efter 30 minuter utan aktivitet.
- Säkerhetskopior är vanliga zip-filer (uppgifterna som JSON, ritningar och foton som filer) som kan läsas in på en annan telefon – och öppnas utan appen om det skulle behövas. De kan krypteras med ett lösenord du väljer. Snabbtexterna och kontrollantens namn följer med i kopian, och ett delat uppdrag fortsätter att vara delat efter inläsningen.
- Android-appen saknar helt behörighet att använda internet.

**Övrigt**
- I en klunga av objekt behåller ungefär varannan markör sitt nummer och resten visas som små prickar i gruppens färg, så att ritningen syns även med många objekt. Prickarna följer med när du zoomar och får tillbaka numret när det finns plats (kan stängas av).
- Ljust och mörkt läge, och sex färgteman att välja mellan under Inställningar → Utseende → Färgtema (ritningen och protokollet påverkas inte). Knappar och symboler anpassar sig efter skärmens storlek. Ritverktygen, objektlistan och inställningarna för uppdraget och planet sitter som runda knappar nertill där tummen når dem, till vänster eller höger efter vilken hand du håller telefonen i (Inställningar → Ritverktygen). Animeringar och tips kan stängas av.
- Fungerar utan uppkoppling när den väl är öppnad. Vid en uppdatering följer uppdragen med, och säkerhetskopior från de två senaste versionerna går alltid att läsa in.

Vad som är nytt i varje version står i [NYHETER.md](NYHETER.md).

## Kom igång

- **Webbappen** öppnas från repots GitHub Pages-adress. Lägg den på hemskärmen så fungerar den som en vanlig app, även utan uppkoppling.
- **Android-appen** finns under [Releases](../../releases/latest). Den går också att ladda ner från webbappen under **Inställningar → Ladda ner … för Android**.
