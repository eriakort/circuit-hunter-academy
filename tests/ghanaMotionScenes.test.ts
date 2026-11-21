import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MOTION_SCENES } from '../src/components/scienceMotion/registry';

const cases: [string, string, string][] = [
  ['gh-jhs1-science-materials-states', 'The Materials Explorer', 'Temperature model'],
  ['gh-jhs1-science-earth-cycles', 'The Earth Systems Explorer', 'Evaporation'],
  ['gh-jhs1-science-human-body-system', 'The Digestion Defender', 'Oesophagus'],
  ['gh-jhs1-science-solar-system', 'The Inner Planet Navigator', 'Venus'],
  ['gh-jhs1-science-ecosystem', 'The Ecosystem Balance Keeper', 'Grasshopper'],
  ['gh-jhs3-science-nitrogen-cycle', 'The Nitrogen Cycle Guardian', 'Nitrification']
];
for (const [id, title, control] of cases) {
  const Scene = MOTION_SCENES[id];
  assert.ok(Scene, `${id} has a motion scene`);
  const html = renderToStaticMarkup(React.createElement(Scene));
  assert.ok(html.includes(title), `${id} title`);
  assert.ok(html.includes(control), `${id} control`);
  assert.ok(html.includes('data-testid="ghana-science-visual"'), `${id} uses the shared frame`);
  assert.ok(html.includes('aria-live="polite"') && html.includes('aria-pressed='), `${id} is accessible`);
  assert.ok(html.includes('Pause'), `${id} has a pause control`);
}
console.log('Motion scenes: all registered scenes render in the shared frame.');
