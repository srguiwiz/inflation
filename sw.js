const cacheName = "inflationCache";

self.addEventListener("install", (installEvent) => {
  async function createAndFillCache() {
    const cache = await caches.open(cacheName);
    await cache.addAll([
      "./",
      "./sw.js",
      "./manifest.json",
      "./inflation.svg",
      "./inflation-48x48.png",
      "./inflation-72x72.png",
      "./inflation-96x96.png",
      "./inflation-128x128.png",
      "./inflation-256x256.png",
      "./inflation-512x512.png",
    ]);
  }
  installEvent.waitUntil(createAndFillCache());
});

self.addEventListener("fetch", (fetchEvent) => {
  async function fetchOnlineOrFromCache() {
    if (fetchEvent.request.method !== "GET") return;
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(fetchEvent.request);
    if (cachedResponse) {
      cache.add(fetchEvent.request.url) // update too
        .catch(reason => { }); // ignore
      return cachedResponse.clone();
    }
    return fetch(fetchEvent.request);
  }
  fetchEvent.respondWith(fetchOnlineOrFromCache());
});
