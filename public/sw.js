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
  event.waitUntil(caches.open(CACHE_NAME)
    .then(cache => cache.addAll(SHELL_FILES))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys
      .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
      .map(key => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Do not intercept third-party, Supabase, or application API traffic.
  if (url.origin !== self.location.origin ||
      ['/rest/v1/', '/auth/v1/', '/functions/v1/', '/storage/v1/', '/api/']
        .some(path => url.pathname.includes(path))) return;

  if (request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        if (response.ok) {
          await (await caches.open(CACHE_NAME)).put(APP_SHELL, response.clone());
        }
        return response;
      } catch {
        return (await caches.match(APP_SHELL)) || Response.error();
      }
    })());
    return;
  }

  const extension = url.pathname.split('.').pop()?.toLowerCase();
  if (['js', 'css', 'png', 'jpg', 'jpeg', 'webp', 'svg', 'ico', 'woff', 'woff2', 'ttf', 'webmanifest'].includes(extension || '')) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        await (await caches.open(CACHE_NAME)).put(request, response.clone());
      }
      return response;
    })());
  }
});
