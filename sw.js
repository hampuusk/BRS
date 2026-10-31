// Offline support and network rules. Everything comes from the app's own address.
// The network is only used during the first 2 minutes after the app is opened, to look for a new version.
// After that every request is answered from the saved copy, and nothing at all goes out until the app is opened again.
const CACHE = "ritningsprotokoll-v1.2";
const CORE = ["./", "CGATS001Compat-v2-micro.icc", "FoxitDingbats.pfb", "FoxitFixed.pfb", "FoxitFixedBold.pfb", "FoxitFixedBoldItalic.pfb", "FoxitFixedItalic.pfb", "FoxitSerif.pfb", "FoxitSerifBold.pfb", "FoxitSerifBoldItalic.pfb", "FoxitSerifItalic.pfb", "FoxitSymbol.pfb", "LiberationSans-Bold.ttf", "LiberationSans-BoldItalic.ttf", "LiberationSans-Italic.ttf", "LiberationSans-Regular.ttf", "app.js", "apple-touch-icon.png", "icon-192.png", "icon-512.png", "index.html", "jbig2.wasm", "jbig2_nowasm_fallback.js", "manifest.webmanifest", "openjpeg.wasm", "openjpeg_nowasm_fallback.js", "pdf-init.mjs", "pdf-lib.min.js", "pdf.min.mjs", "pdf.worker.min.mjs", "qcms_bg.wasm", "quickjs-eval.js", "quickjs-eval.wasm"];
const WINDOW = 120 * 1000;
let opened = 0;                                   // when the app was opened (its page loaded); not kept if the browser restarts this worker
const netOk = () => Date.now() - opened < WINDOW;
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("ritningsprotokoll-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("message", e => { if (e.data === "netstate" && e.source) e.source.postMessage({ netstate: netOk(), left: Math.max(0, WINDOW - (Date.now() - opened)) }); });
const good = r => r && r.ok && !r.redirected && r.type === "basic"; // a real answer from the app's own server (not an error or a log-in page)
const keep = (req, r) => { if (good(r)) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; };
self.addEventListener("fetch", e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) { e.respondWith(Response.error()); return; } // nothing is ever sent, or fetched from other addresses
  if (req.mode === "navigate") opened = Date.now(); // the app is being opened: the update window starts
  const app = /\/(|index\.html|app\.js|sw\.js|manifest\.webmanifest)$/.test(url.pathname);
  const saved = async () => (await caches.match(req)) || (req.mode === "navigate" ? await caches.match("index.html") : null);
  if (!netOk()) { e.respondWith(saved().then(hit => hit || Response.error())); return; } // network closed until the app is opened again
  if (!app) { // libraries, fonts and icons: saved copy first, they only change with a new app version
    e.respondWith(saved().then(hit => hit || fetch(req).then(r => keep(req, r))));
    return; }
  e.respondWith((async () => { // app files: the network first so a new version arrives; a weak signal uses the saved copy after 3 s
    const net = fetch(req).then(r => keep(req, r));
    try { const first = await Promise.race([net, new Promise(r => setTimeout(r, 3000, null))]); if (good(first)) return first; } catch(err) {}
    return (await saved()) || net; // nothing saved: wait for the network
  })());
});
