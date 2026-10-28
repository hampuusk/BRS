// Offline support. Everything comes from the app's own address; requests to other addresses are never handled or cached.
const CACHE = "ritningsprotokoll-v61";
const CORE = ["./", "index.html", "app.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "vendor/pdf-init.mjs", "vendor/pdf.min.mjs", "vendor/pdf.worker.min.mjs", "vendor/pdf-lib.min.js", "vendor/fonts/fonts.css", "vendor/fonts/IBMPlexMono-Regular.ttf", "vendor/fonts/IBMPlexMono-Bold.ttf"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("ritningsprotokoll-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url); if (url.origin !== location.origin) return;
  if (url.pathname.includes("/vendor/")) { // libraries: cache first, they only change with a new app version
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; })));
  } else { // app files: network first so updates arrive, cache when offline
    e.respondWith(fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; }).catch(() => caches.match(req).then(r => r || caches.match("index.html"))));
  }
});
