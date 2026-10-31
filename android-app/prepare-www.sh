#!/usr/bin/env bash
# Copies the web app (the repository's top folder) into www/ for the Android app.
# The service worker is left out (the app is already complete inside the APK), and the page's security policy gets
# room for the small script Capacitor puts into the page to talk to Android. The app has no internet permission.
set -euo pipefail
cd "$(dirname "$0")"
rm -rf www && mkdir www
for f in ../*; do
  [ -f "$f" ] || continue
  case "$(basename "$f")" in sw.js|*.md|*.zip) continue;; esac
  cp "$f" www/
done
test -f www/index.html && test -f www/app.js
sed -i "s/script-src 'self' 'wasm-unsafe-eval'/script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'/" www/index.html
grep -q "'unsafe-inline' 'wasm-unsafe-eval'" www/index.html
echo "www: $(ls www | wc -l) filer"
