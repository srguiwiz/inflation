// v 1.7.1

// forks should have a distinct cacheName, for example including the country code for which it is,
// see https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
const cacheName = "inflation-uk-annual";

self.addEventListener("install", (installEvent) => {
  async function createAndFillCache() {
    const cache = await caches.open(cacheName);
    await cache.addAll([
      "./",
      "./sw.js",
      "./manifest.json",
      "./inflation-uk.svg",
      "./inflation-uk-48x48.png",
      "./inflation-uk-72x72.png",
      "./inflation-uk-96x96.png",
      "./inflation-uk-128x128.png",
      "./inflation-uk-256x256.png",
      "./inflation-uk-512x512.png",
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