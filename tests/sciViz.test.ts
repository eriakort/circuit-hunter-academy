import assert from 'node:assert/strict';
import { CHEM_VISUAL_KEYS } from '../src/data/chemVisuals';
import { getVisualHtml } from '../src/data/visuals';
import { PHYS_VISUAL_BUILDERS } from '../src/data/physVisualsG9';
import { CHEM10_BUILDERS } from '../src/data/chemVisualsG10';
import { CHEM11_BUILDERS } from '../src/data/chemVisualsG11';
import { CHEM9_BUILDERS } from '../src/data/chemVisualsG9';
import { MATH9_BUILDERS } from '../src/data/mathVisualsG9';
import { MATH10_BUILDERS } from '../src/data/mathVisualsG10';
import { MATH11_BUILDERS } from '../src/data/mathVisualsG11';
import { GHANA_MATH_VISUAL_KEYS, getGhanaMathVisual } from '../src/data/ghanaMathVisuals';
import { MATH5_BUILDERS } from '../src/data/mathVisualsG5';
import { MATH_ADV_VISUAL_KEYS } from '../src/data/mathAdvVisuals';

/**
 * The redrawn Physics, Chemistry and Maths diagrams must stay readable and moving:
 * large text (at least 18 units on a 640-wide canvas), short captions, real motion, accessible names,
 * both languages, and no leftovers like "undefined" or NaN.
 */
const groups: Array<[string, Record<string, unknown>]> = [
  ['physics grade 9', PHYS_VISUAL_BUILDERS],
  ['chemistry grade 9', CHEM9_BUILDERS],
  ['chemistry grade 10', CHEM10_BUILDERS],
  ['chemistry grade 11', CHEM11_BUILDERS],
  ['maths grade 9', MATH9_BUILDERS],
  ['maths grade 10', MATH10_BUILDERS],
  ['maths grade 11', MATH11_BUILDERS],
  ['maths grade 5', MATH5_BUILDERS]
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
      assert.ok(!/undefined|(?<![A-Za-z])NaN(?![A-Za-z])|\[object/.test(out), `${key} (${lang}) has no undefined/NaN`);
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
// Ghana strand motifs (English only): same readable style.
for (const key of GHANA_MATH_VISUAL_KEYS) {
  const out = getGhanaMathVisual(key)!;
  assert.ok(out.includes('class="sv"') && /<animate/.test(out), `${key} uses the shared style and moves`);
  assert.ok(!/undefined|(?<![A-Za-z])NaN(?![A-Za-z])/.test(out), `${key} has no undefined/NaN`);
  const sizes = [...out.matchAll(/<text [^>]*font-size="(\d+(?:\.\d+)?)"/g)].map(m => Number(m[1]));
  assert.ok(sizes.length >= 2 && Math.min(...sizes) >= 18, `${key} has text smaller than 18 units`);
  total++;
}
// Every Chemistry key has exactly one redrawn builder (no leftover old drawings, no orphan builders).
const chemBuilt = [...Object.keys(CHEM9_BUILDERS), ...Object.keys(CHEM10_BUILDERS), ...Object.keys(CHEM11_BUILDERS)].sort();
assert.deepEqual(chemBuilt, [...CHEM_VISUAL_KEYS].sort(), 'chemistry builders match CHEM_VISUAL_KEYS one to one');
// Every advanced (grade 10 and 11) maths key has a redrawn builder.
assert.deepEqual([...Object.keys(MATH10_BUILDERS), ...Object.keys(MATH11_BUILDERS)].sort(), [...MATH_ADV_VISUAL_KEYS].sort(), 'maths builders match MATH_ADV_VISUAL_KEYS one to one');
console.log(`sciViz.test.ts ok! ${total} redrawn Physics/Chemistry/Maths diagrams: large text, motion, both languages.`);
