# Install Circuit Hunter Academy

Circuit Hunter Academy is a Progressive Web App (PWA). Open the deployed site over HTTPS, then use the browser's install option:

- **Chrome / Edge on desktop:** use the install icon in the address bar, or open the browser menu and choose **Install Circuit Hunter Academy** (wording can vary).
- **Android (Chrome):** open the site menu and choose **Install app** or **Add to Home screen**.
- **iPhone / iPad (Safari):** tap **Share**, then **Add to Home Screen**.

The service worker caches the application shell and static build assets for quicker repeat visits and basic offline startup. User progress and live Supabase/API data are not cached by the service worker; use the app online for account, synchronization, and multiplayer features. Installability requires HTTPS (GitHub Pages provides HTTPS).
