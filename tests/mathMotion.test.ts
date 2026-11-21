import assert from 'node:assert/strict';
import { MATH_ADV_VISUAL_KEYS, getMathAdvVisual } from '../src/data/mathAdvVisuals';
import { GRADE5_MATH_VISUAL_KEYS, getGrade5MathVisual } from '../src/data/grade5MathVisuals';
import { GHANA_MATH_VISUAL_KEYS, getGhanaMathVisual } from '../src/data/ghanaMathVisuals';
import { GRADE5_MOTION_KEYS, MATH_ADV_HAND_MOTION_KEYS } from '../src/data/mathMotion';

const MOTION = /<animate|g5m-anim|g5m-rows|g5m-boxes|class="float"|class="pulse"/;

assert.equal(MATH_ADV_VISUAL_KEYS.length, 18, 'advanced maths diagram count');
assert.equal(GRADE5_MATH_VISUAL_KEYS.length, 20, 'Grade 5 maths diagram count');

for (const key of MATH_ADV_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const html = getMathAdvVisual(key, lang) || '';
    assert.ok(html.trim().endsWith('</svg>'), `${key} (${lang}) is still a single SVG`);
    assert.ok(MOTION.test(html), `${key} (${lang}) has motion`);
    assert.ok(html.includes('<g aria-hidden="true">'), `${key} (${lang}) hides decorative motion`);
  }
}
for (const key of MATH_ADV_HAND_MOTION_KEYS) assert.ok(MATH_ADV_VISUAL_KEYS.includes(key as never), `${key} is not an advanced maths diagram`);

for (const key of GRADE5_MATH_VISUAL_KEYS) {
  for (const lang of ['en', 'it'] as const) {
    const html = getGrade5MathVisual(key, lang) || '';
    assert.ok(html.length > 0, `${key} (${lang}) renders`);
    assert.ok(MOTION.test(html), `${key} (${lang}) has motion`);
  }
}
for (const key of GRADE5_MOTION_KEYS) assert.ok(GRADE5_MATH_VISUAL_KEYS.includes(key), `${key} is not a Grade 5 diagram`);

for (const key of GHANA_MATH_VISUAL_KEYS.filter(k => k !== 'ghmath')) {
  const html = getGhanaMathVisual(key) || '';
  assert.ok(MOTION.test(html), `${key} has motion`);
  assert.ok(html.includes('<svg'), `${key} renders an svg`);
}

console.log('mathMotion.test.ts ok! Advanced, Grade 5 and Ghana maths diagrams are animated.');
