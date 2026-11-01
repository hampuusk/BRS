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
- Tre typer av uppdrag: **Inventering** (med prioritering), **Utförandekontroll** (objekttyper med kontrollpunkter enligt BFS 2024:7) och **Anteckningar** (utan ritning).
- Ritningar som PDF eller bild. En PDF med flera sidor kan läggas in som ett plan per sida.
- Flera plan i samma uppdrag, med flikar som visar antalet objekt på varje plan.
- Sortering av uppdragen efter senast använda, datum, namn eller typ.

**Objekt**
- Tryck på ritningen för att sätta ett objekt. Objekten numreras automatiskt och får nya nummer om något raderas.
- Underobjekt, till exempel 4.1, 4.2 och 4.3.
- Håll inne ett objekt och dra för att flytta det. Ett förstoringsglas visar exakt var det hamnar.
- Foton från kameran eller bildalbumet, med markering direkt i fotot: pil, ring och penna i rött, och vridning.
- Beskrivning med snabbtexter och förslag från tidigare objekt.
- Egna kategorier med färger, och prioritet 1–3.
- **Lägesbild:** ett utsnitt av ritningen runt objektet följer med i protokollet.

**Objektlistan**
- Visas bredvid ritningen. Svep in från högerkanten för att öppna den.
- Sök på nummer eller text och filtrera på kategori, på ett plan eller alla.
- Välj flera objekt för att byta kategori eller prioritet, eller radera dem samtidigt.

**Ritverktyg**
- Rita väggar, dörrar och fönster, sudda bort det som inte stämmer och mät längder.
- Ange skala, eller kalibrera mot en känd längd, så visas måtten i meter.
- Ångra ett steg i taget.
- Ändringarna kan visas i blått i protokollet.

**Export**
- **PDF:** översiktsritning per plan och en tabell med nummer, beskrivning, lägesbild och foton.
- **Word:** samma tabell som redigerbar fil, med översiktsritningarna som separat PDF.
- Stora uppdrag delas upp i flera PDF- eller Word-filer med högst 2 000 objekt per fil, så att exporten fungerar även på telefoner med lite minne.
- **Excel:** en sorterbar lista, och för utförandekontroller ett eget blad med alla kontrollpunkter.
- Innan du exporterar visas det som saknas, till exempel objekt utan foto eller beskrivning. Du kan fylla i det eller exportera direkt.

**Säkerhet och integritet**
- Allt sparas bara på telefonen. Ingenting laddas upp och ingenting skickas någonstans.
- Lås med PIN-kod eller lösenord. Allt som sparas krypteras då (AES-256), och appen låses efter 30 minuter utan aktivitet.
- Säkerhetskopior krypteras med ett lösenord du väljer och kan läsas in på en annan telefon.
- Android-appen saknar helt behörighet att använda internet.

**Övrigt**
- Ljust och mörkt läge. Animeringar och tips kan stängas av.
- Fungerar utan uppkoppling när den väl är öppnad.

## Kom igång

- **Webbappen** öppnas från repots GitHub Pages-adress. Lägg den på hemskärmen så fungerar den som en vanlig app, även utan uppkoppling.
- **Android-appen** finns under [Releases](../../releases/latest). Den går också att ladda ner från webbappen under **Inställningar → Ladda ner Android-appen**.
