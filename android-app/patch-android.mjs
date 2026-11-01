// Adjusts the Android project that "npx cap add android" creates:
// - no internet permission: the app can never send or fetch anything
// - the permissions the app does use: the camera (asked the first time you take a photo) and, on Android 10 and
//   older only, saving in the shared folders Dokument and Bilder (newer Android needs no permission for that)
// - no Android cloud backup of the app's data (nothing leaves the phone)
// - targets Android 16 (API 36), which Google Play requires; the PlanPin icon, and the version from the web app
import fs from "node:fs"; import path from "node:path";
const A = "android/app";
const man = path.join(A, "src/main/AndroidManifest.xml");
let m = fs.readFileSync(man, "utf8");
m = m.replace(/\s*<uses-permission android:name="android\.permission\.INTERNET"\s*\/>/g, "");
const perms = [
  '<uses-permission android:name="android.permission.CAMERA" />',
  '<uses-feature android:name="android.hardware.camera" android:required="false" />',
  '<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="29" />',
  '<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" android:maxSdkVersion="29" />',
  '<queries><intent><action android:name="android.media.action.IMAGE_CAPTURE" /></intent></queries>'];
for (const p of perms) { const key = p.match(/name="([^"]+)"/)[1]; if (!m.includes('"' + key + '"')) m = m.replace("</manifest>", "    " + p + "\n</manifest>"); }
const attr = (name, val) => { const re = new RegExp(name.replace(":", "\\:") + '="[^"]*"');
  m = re.test(m) ? m.replace(re, name + '="' + val + '"') : m.replace("<application", "<application " + name + '="' + val + '"'); };
attr("android:allowBackup", "false");
attr("android:fullBackupContent", "false");
attr("android:dataExtractionRules", "@xml/data_extraction_rules"); // Android 12+: no cloud backup and no device-to-device transfer
attr("android:requestLegacyExternalStorage", "true");             // Android 10: save in Dokument/Bilder like older versions
attr("android:usesCleartextTraffic", "false");
// no plugin library may bring the internet permission back when Android merges the manifests
if (!/xmlns:tools=/.test(m)) m = m.replace("<manifest", '<manifest xmlns:tools="http://schemas.android.com/tools"');
if (!/INTERNET" tools:node="remove"/.test(m)) m = m.replace("</manifest>", '    <uses-permission android:name="android.permission.INTERNET" tools:node="remove" />\n</manifest>');
if (/android\.permission\.INTERNET"(?! tools:node="remove")/.test(m)) throw new Error("the internet permission is still there");
fs.writeFileSync(man, m);
fs.mkdirSync(path.join(A, "src/main/res/xml"), { recursive: true });
fs.writeFileSync(path.join(A, "src/main/res/xml/data_extraction_rules.xml"),
  '<?xml version="1.0" encoding="utf-8"?>\n<data-extraction-rules>\n  <cloud-backup><exclude domain="root" /><exclude domain="file" /><exclude domain="database" /><exclude domain="sharedpref" /><exclude domain="external" /></cloud-backup>\n  <device-transfer><exclude domain="root" /><exclude domain="file" /><exclude domain="database" /><exclude domain="sharedpref" /><exclude domain="external" /></device-transfer>\n</data-extraction-rules>\n');
// Android 16 (API 36): Capacitor 8 already targets it; make sure, in case a template says otherwise
const vars = "android/variables.gradle";
if (fs.existsSync(vars)) { let v = fs.readFileSync(vars, "utf8");
  v = v.replace(/compileSdkVersion\s*=\s*\d+/, "compileSdkVersion = 36").replace(/targetSdkVersion\s*=\s*\d+/, "targetSdkVersion = 36");
  fs.writeFileSync(vars, v); }
// version: from the web app (const APP_VERSION = "V1.2.3") and the build number
const app = fs.readFileSync("www/app.js", "utf8"); const ver = (app.match(/APP_VERSION\s*=\s*"V?([^"]+)"/) || [])[1] || "1.0";
const code = parseInt(process.env.GITHUB_RUN_NUMBER || "1", 10);
const gradle = path.join(A, "build.gradle"); let g = fs.readFileSync(gradle, "utf8");
g = g.replace(/versionCode\s+\d+/, "versionCode " + code).replace(/versionName\s+"[^"]*"/, 'versionName "' + ver + '"');
fs.writeFileSync(gradle, g);
// icons
const sizes = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
for (const [d, px] of Object.entries(sizes)) {
  const dir = path.join(A, "src/main/res/mipmap-" + d); fs.mkdirSync(dir, { recursive: true });
  for (const f of ["ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"]) fs.copyFileSync("icons/icon-" + px + ".png", path.join(dir, f));
}
fs.rmSync(path.join(A, "src/main/res/mipmap-anydpi-v26"), { recursive: true, force: true }); // use the PNG icons above
console.log("Android project adjusted: version", ver, "build", code, "| API 36 | camera + storage (Android ≤10) | no internet | no cloud backup");
