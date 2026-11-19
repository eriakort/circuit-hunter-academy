import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs1CyclesVisual } from '../src/components/GhanaJhs1CyclesVisual';

const cases = [
  ['gh-jhs1-science-earth-cycles', 'The Earth Systems Explorer', 'Evaporation'],
  ['gh-jhs1-science-life-cycles', 'The Life Cycle Guardian', 'Housefly'],
  ['gh-jhs1-science-crop-production', 'The Crop Care Strategist', 'Cassava'],
  ['gh-jhs1-science-animal-production', 'The Animal Welfare Keeper', 'Goat']
] as const;

for (const [missionId, title, interaction] of cases) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs1CyclesVisual, { missionId, lang: 'en' }));
  assert.ok(html.includes(title), `${missionId} renders its dedicated instructional visual`);
  assert.ok(html.includes(interaction), `${missionId} renders its interactive controls`);
  assert.ok(html.includes('ghana-science-visual'), `${missionId} uses the shared visual frame`);
  assert.ok(html.includes('aria-live="polite"'), `${missionId} announces changed explanations accessibly`);
}
const italian = renderToStaticMarkup(React.createElement(GhanaJhs1CyclesVisual, {
  missionId: 'gh-jhs1-science-earth-cycles',
  lang: 'it'
}));
assert.ok(italian.includes('L’esploratore dei sistemi terrestri'));
assert.ok(italian.includes('Evaporazione'));
console.log('ghanaJhs1CyclesVisual.test.ts ok! All four cycles visuals render in English and Italian.');
