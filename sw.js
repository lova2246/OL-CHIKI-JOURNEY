const CACHE = "ol-chiki-journey-v6";

const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./script.js",
  "./data/letters.js",
  "./data/numbers.js",
  "./manifest.json",
  "./image/official-logo.png",
  "./image/icon-192.png",
  "./image/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;

  // Only handle normal web requests.
  if (request.url.startsWith("chrome-extension://")) {
    return;
  }

  if (!request.url.startsWith("http://") &&
      !request.url.startsWith("https://")) {
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(request).then(response => {
        const copy = response.clone();

        caches.open(CACHE).then(cache => {
          cache.put(request, copy);
        });

        return response;
      });
    })
  );
});
