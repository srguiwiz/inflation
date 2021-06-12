// v 2.7.2

// forks should have a distinct cacheName, for example including the country code for which it is,
// see https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
const cacheName = "inflation-cn-annual";

self.addEventListener("install", (installEvent) => {
  async function createAndFillCache() {
    const cache = await caches.open(cacheName);
    await cache.addAll([
      "./",
      "./sw.js",
      "./manifest.json",
      "./inflation-cn.svg",
      "./inflation-cn-48x48.png",
      "./inflation-cn-72x72.png",
      "./inflation-cn-96x96.png",
      "./inflation-cn-128x128.png",
      "./inflation-cn-256x256.png",
      "./inflation-cn-512x512.png",
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
      return cachedResponse.clone();
    }
    return fetch(fetchEvent.request);
  }
  fetchEvent.respondWith(fetchOnlineOrFromCache());
});
