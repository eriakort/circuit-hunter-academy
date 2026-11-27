/* App-shell worker. API/authenticated responses are deliberately not cached. */
const CACHE_PREFIX = 'circuit-hunter-academy-shell-';
const CACHE_NAME = CACHE_PREFIX + 'v1';
const APP_SHELL = new URL('./', self.registration.scope).href;
const SHELL_FILES = [
  APP_SHELL,
  new URL('manifest.webmanifest', self.registration.scope).href,
  new URL('favicon.svg', self.registration.scope).href,
  new URL('icon-192.png', self.registration.scope).href,
  new URL('icon-512.png', self.registration.scope).href,
  new URL('icon-maskable-512.png', self.registration.scope).href,
  new URL('apple-touch-icon.png', self.registration.scope).href
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin ||
      /\\/rest\\/v1\\//.test(url.pathname) ||
      /\\/auth\\/v1\\//.test(url.pathname) ||
      /\\/functions\\/v1\\//.test(url.pathname) ||
      /\\/storage\\/v1\\//.test(url.pathname) ||
      /\\/api\\//.test(url.pathname)) return;

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(APP_SHELL, copy));
        }
        return response;
      })
      .catch(() => caches.match(APP_SHELL).then(cached => cached || Response.error())));
    return;
  }

  if (/\\.(?:js|css|png|jpe?g|webp|svg|ico|woff2?|ttf|webmanifest)$/i.test(url.pathname)) {
    event.respondWith(caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response.ok && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    }));
  }
});
