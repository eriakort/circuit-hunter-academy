/**
 * Registers the scoped service worker for the GitHub Pages project path.
 * PWA support is optional: the app continues to work if registration fails.
 */
export function registerPwaServiceWorker(): void {
  if (!('serviceWorker' in navigator) || !import.meta.env.PROD) return;

  window.addEventListener('load', () => {
    const workerUrl = new URL('sw.js', import.meta.env.BASE_URL);
    navigator.serviceWorker.register(workerUrl, { scope: import.meta.env.BASE_URL })
      .catch(error => {
        console.warn('Circuit Hunter Academy: service worker registration failed.', error);
      });
  }, { once: true });
}
