import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs1SystemsVisual } from '../src/components/GhanaJhs1SystemsVisual';

const cases = [
  ['gh-jhs1-science-human-body-system', 'The Digestion Defender', 'Oesophagus'],
  ['gh-jhs1-science-solar-system', 'The Inner Planet Navigator', 'Venus'],
  ['gh-jhs1-science-ecosystem', 'The Ecosystem Balance Keeper', 'Grasshopper'],
  ['gh-jhs1-science-farming-systems', 'The Farming Systems Strategist', 'Crop rotation']
] as const;

for (const [missionId, title, interaction] of cases) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs1SystemsVisual, { missionId, lang: 'en' }));
  assert.ok(html.includes(title), `${missionId} renders its dedicated instructional visual`);
  assert.ok(html.includes(interaction), `${missionId} renders its interactive controls`);
  assert.ok(html.includes('ghana-science-visual'), `${missionId} uses the shared visual frame`);
  assert.ok(html.includes('aria-live="polite"'), `${missionId} announces changed explanations accessibly`);
}
const italian = renderToStaticMarkup(React.createElement(GhanaJhs1SystemsVisual, {
  missionId: 'gh-jhs1-science-human-body-system',
  lang: 'it'
}));
assert.ok(italian.includes('Il difensore della digestione'));
assert.ok(italian.includes('Esofago'));
const solarItalian = renderToStaticMarkup(React.createElement(GhanaJhs1SystemsVisual, {
  missionId: 'gh-jhs1-science-solar-system',
  lang: 'it'
}));
assert.ok(solarItalian.includes('Il navigatore dei pianeti interni'));
assert.ok(solarItalian.includes('Venere'));
console.log('ghanaJhs1SystemsVisual.test.ts ok! All four Systems visuals render in English and Italian.');
