import assert from 'node:assert/strict';
import { HIST_GEO_VISUAL_KEYS, getHistGeoVisual } from '../src/data/histGeoVisuals';
import { HIST_GEO_HAND_MOTION_KEYS } from '../src/data/histGeoMotion';

assert.equal(HIST_GEO_VISUAL_KEYS.length, 165, 'all History and Geography diagrams are registered');

for (const key of HIST_GEO_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const html = getHistGeoVisual(key, lang) || '';
    assert.ok(html.trim().endsWith('</svg>'), `${key} (${lang}) is still a single SVG`);
    assert.ok(/<animate/.test(html), `${key} (${lang}) has motion`);
    assert.ok(html.includes('<g aria-hidden="true">'), `${key} (${lang}) hides the decorative motion from screen readers`);
    assert.ok(/role="img"/.test(html) && /aria-label="[^"]+"/.test(html), `${key} (${lang}) keeps its accessible label`);
  }
}

for (const key of HIST_GEO_HAND_MOTION_KEYS) {
  assert.ok(HIST_GEO_VISUAL_KEYS.includes(key), `${key} has hand-made motion but is not a diagram`);
}

console.log('histGeoMotion.test.ts ok! All 165 History and Geography diagrams are animated and keep their labels.');
