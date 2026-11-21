import assert from 'node:assert/strict';
import { VIS, getVisualHtml } from '../src/data/visuals';
import { animateVisual } from '../src/data/visualsMotion';
import { ITALIAN_QUINTA_VISUAL_KEYS, getItalianQuintaVisual } from '../src/data/italianQuintaVisuals';

const MOTION = /<animate|<set\b|class="[^"]*\b(anim|scan|spin|flow|float|pulse|vm-tour|vm-sweep|itv-lit|itv-grow|g5m-rows)\b/;

for (const key of Object.keys(VIS)) {
  for (const lang of ['en', 'it'] as const) {
    const html = getVisualHtml(key, lang);
    assert.ok(html.length > 0, `${key} (${lang}) renders`);
    assert.ok(MOTION.test(html), `${key} (${lang}) has motion`);
  }
}

// Idempotent: already-animated output is not wrapped or animated twice.
const once = getVisualHtml('pytypes', 'en');
assert.equal(animateVisual(once), once);

// Animating never drops or reorders content: the text of every visual is unchanged.
const text = (html: string) => html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
for (const key of Object.keys(VIS)) {
  getVisualHtml(key, 'en');
  assert.equal(text(getVisualHtml(key, 'en')), text(VIS[key]()), `${key} keeps its text`);
}

for (const key of ITALIAN_QUINTA_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const html = getItalianQuintaVisual(key, lang) || '';
    assert.ok(MOTION.test(html), `${key} (${lang}) has motion`);
  }
}

console.log('visualsMotion.test.ts ok! Every visual in visuals.ts and the Italian grammar tables moves.');
