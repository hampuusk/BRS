# PlanPin V1.2

PlanPin finns i två varianter som byggs från samma kod:

- **Webbappen** körs från GitHub Pages och uppdaterar sig själv som tidigare.
- **Android-appen (APK)** byggs automatiskt av GitHub varje gång du laddar upp. Den har egen lagring på telefonen och saknar helt behörighet att använda internet.

## Ladda upp till GitHub

1. Packa upp `planpin-v1.2-github.zip`.
2. Ersätt allt i repot med innehållet, inklusive mapparna `android-app` och `.github`.
3. Ta bort filerna `fonts.css`, `IBMPlexMono-Regular.ttf` och `IBMPlexMono-Bold.ttf` från repot. De används inte längre.
4. Webbappen uppdaterar sig själv nästa gång den öppnas, inom de 2 minuter den letar efter uppdateringar.

Mappen `.github` kan vara dold i Utforskaren eller Finder, och då följer den inte alltid med vid dra-och-släpp. Om den saknas på GitHub efter uppladdningen gör du så här:

1. Klicka på **Add file → Create new file**.
2. Skriv filnamnet `.github/workflows/android-apk.yml`.
3. Klistra in innehållet från filen med samma namn i zip-filen.
4. Spara.

## Android-appen första gången

### 1. Lägg in signeringsnyckeln

Det här görs en gång. Nyckeln ligger i den separata filen `planpin-signering-HEMLIG.zip`. Ladda aldrig upp den filen till repot.

1. Gå till repot på GitHub och öppna **Settings → Secrets and variables → Actions**.
2. Klicka på **New repository secret** och lägg in de fyra värdena från `LAS-MIG-HEMLIG.txt`:
   - `PLANPIN_KEYSTORE_B64` är hela innehållet i `planpin.jks.base64.txt`, en enda lång rad.
   - `PLANPIN_KEYSTORE_PASSWORD`
   - `PLANPIN_KEY_ALIAS`
   - `PLANPIN_KEY_PASSWORD`
3. Spara nyckelmappen på ett säkert ställe. Utan den går appen inte att uppdatera. Du skulle då behöva avinstallera den, och då försvinner projekten i den.

### 2. Hämta APK-filen

1. Gå till fliken **Actions** i repot och öppna den senaste körningen av **Android-app (APK)**. Om ingen körning finns väljer du arbetsflödet och klickar på **Run workflow**.
2. När körningen är klar, efter cirka 5–10 minuter, laddar du ned **PlanPin-android-app** under **Artifacts**. Den syns bara när du är inloggad.
3. Packa upp den. Inuti ligger `PlanPin-1.2.apk`.

### 3. Installera på telefonen

1. Flytta APK-filen till telefonen och öppna den.
2. Tillåt installation från den källan om telefonen frågar.
3. Flytta dina projekt:
   1. Gör en säkerhetskopia i webbappen.
   2. Öppna PlanPin-appen.
   3. Välj **Läs in säkerhetskopia** på startsidan.

### Senare uppdateringar

Ladda upp som vanligt. Hämta sedan den nya APK-filen från Actions och installera den ovanpå den gamla. Projekten ligger kvar.

### Skillnader i Android-appen

- Exporter och säkerhetskopior sparas i **Dokument/PlanPin**. Kamerafoton kopieras till **Bilder/PlanPin**.
- **Maila / dela** öppnar Androids delningsmeny.
- Appen har ingen internetbehörighet och ingen säkerhetskopiering till Googles moln. Inget kan lämna telefonen utom det du själv delar.

## Mappar och filer

| Var | Vad |
|---|---|
| Toppmappen | Webbappen: `index.html`, `app.js`, `sw.js`, `manifest.webmanifest`, ikonerna, PDF-läsaren (`pdf.min.mjs`, `pdf.worker.min.mjs`, `pdf-init.mjs`) med hjälpfiler (`*.pfb`, `*.ttf`, `*.wasm`, `*.icc`) och PDF-verktyget `pdf-lib.min.js`. Licenserna ligger i `LICENSE*`. |
| `android-app/` | Det som behövs för Android-appen: Capacitor-inställningar, ikoner och två små skript som anpassar projektet. |
| `.github/workflows/android-apk.yml` | Bygger, signerar och kontrollerar APK-filen hos GitHub. |

## Köra webbappen lokalt

Appen behöver öppnas via en webbadress, inte genom att dubbelklicka på `index.html`. Skriv i toppmappen:

```
python -m http.server 8000
```

Öppna sedan `http://localhost:8000` i webbläsaren.
