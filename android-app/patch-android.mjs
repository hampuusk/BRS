// Adjusts the Android project that "npx cap add android" creates:
// - no internet permission: the app can never send or fetch anything
// - no Android cloud backup of the app's data (nothing leaves the phone)
// - the PlanPin icon, and the version from the web app
import fs from "node:fs"; import path from "node:path";
const A = "android/app";
const man = path.join(A, "src/main/AndroidManifest.xml");
let m = fs.readFileSync(man, "utf8");
m = m.replace(/\s*<uses-permission android:name="android\.permission\.INTERNET"\s*\/>/g, "");
if (/android:allowBackup="[^"]*"/.test(m)) m = m.replace(/android:allowBackup="[^"]*"/, 'android:allowBackup="false"');
else m = m.replace("<application", '<application android:allowBackup="false"');
if (!/android:fullBackupContent=/.test(m)) m = m.replace("<application", '<application android:fullBackupContent="false"');
if (/android\.permission\.INTERNET/.test(m)) throw new Error("the internet permission is still there");
fs.writeFileSync(man, m);
// version: from the web app (const APP_VERSION = "V1.2") and the build number
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
console.log("Android project adjusted: version", ver, "build", code, "| internet permission removed | no cloud backup");
