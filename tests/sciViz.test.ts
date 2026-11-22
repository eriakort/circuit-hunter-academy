import assert from 'node:assert/strict';
import { getVisualHtml } from '../src/data/visuals';
import { PHYS_VISUAL_BUILDERS } from '../src/data/physVisualsG9';
import { CHEM9_BUILDERS } from '../src/data/chemVisualsG9';

/**
 * The redrawn Physics and Chemistry diagrams must stay readable and moving:
 * large text (at least 18 units on a 640-wide canvas), short captions, real motion, accessible names,
 * both languages, and no leftovers like "undefined" or NaN.
 */
const groups: Array<[string, Record<string, unknown>]> = [
  ['physics grade 9', PHYS_VISUAL_BUILDERS],
  ['chemistry grade 9', CHEM9_BUILDERS]
];
let total = 0;
for (const [name, builders] of groups) {
  for (const key of Object.keys(builders)) {
    total++;
    const html: Record<string, string> = {};
    for (const lang of ['en', 'it'] as const) {
      const out = getVisualHtml(key, lang);
      html[lang] = out;
      assert.ok(out.startsWith('<svg') && out.includes('class="sv"'), `${key} (${lang}) uses the shared diagram style`);
      assert.match(out, /role="img" aria-label="[^"]+"/, `${key} (${lang}) has an accessible name`);
      assert.ok(/<animate/.test(out), `${key} (${lang}) has real motion`);
      assert.ok(!/undefined|NaN|\[object/.test(out), `${key} (${lang}) has no undefined/NaN`);
      const viewW = Number(/viewBox="0 0 (\d+) /.exec(out)![1]);
      assert.equal(viewW, 640, `${key} uses the 640-wide canvas`);
      const sizes = [...out.matchAll(/<text [^>]*font-size="(\d+(?:\.\d+)?)"/g)].map(m => Number(m[1]));
      assert.ok(sizes.length >= 2, `${key} (${lang}) has text`);
      assert.ok(Math.min(...sizes) >= 18, `${key} (${lang}) has text smaller than 18 units`);
    }
    assert.notEqual(html.en, html.it, `${key} differs between English and Italian`);
    // The Italian version must not carry untouched English caption words.
    assert.ok(!/\b(the|and|with)\b/i.test(html.it.replace(/<[^>]+>/g, ' ')), `${key} (it) contains English words`);
  }
}
console.log(`sciViz.test.ts ok! ${total} redrawn Physics/Chemistry diagrams: large text, motion, both languages.`);
