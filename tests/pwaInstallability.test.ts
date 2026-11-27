import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync('public/manifest.webmanifest', 'utf8'));
const html = readFileSync('index.html', 'utf8');
const worker = readFileSync('public/sw.js', 'utf8');
const registration = readFileSync('src/pwa.ts', 'utf8');

assert.equal(manifest.name, 'Circuit Hunter Academy');
assert.equal(manifest.display, 'standalone');
assert.ok(manifest.start_url.startsWith('./'), 'start_url must support the GitHub Pages project path');
assert.ok(manifest.scope.startsWith('./'), 'scope must remain inside the deployed project path');
for (const size of ['192x192', '512x512']) {
  assert.ok(manifest.icons.some((icon: { sizes?: string }) => icon.sizes === size), `manifest must include ${size} icon`);
}
assert.ok(manifest.icons.some((icon: { purpose?: string }) => icon.purpose?.includes('maskable')), 'manifest needs a maskable icon');
assert.match(html, /href="\.\/manifest\.webmanifest"/, 'HTML must use a project-relative manifest URL');
assert.match(registration, /navigator\.serviceWorker\.register/, 'app must register the service worker');
assert.match(registration, /import\.meta\.env\.BASE_URL/, 'registration must respect Vite base path');
assert.match(worker, /request\.mode === 'navigate'/, 'worker must provide an offline navigation fallback');
for (const apiPath of ['/rest/v1/', '/auth/v1/', '/functions/v1/', '/storage/v1/']) {
  assert.ok(worker.includes(apiPath), `worker must explicitly bypass ${apiPath}`);
}
console.log('pwaInstallability.test.ts ok');
