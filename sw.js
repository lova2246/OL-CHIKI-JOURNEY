const CACHE="ocj-full-test-v1";
const ASSETS=["./","./index.html","./style.css","./app.js","./data/letters.js","./data/numbers.js","./manifest.json","./image/official-logo.png","./image/pandit-raghunath-murmu.jpg","./image/icon-192.png","./image/icon-512.png","./assets/certificate-reference.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(a=>Promise.all(a.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
