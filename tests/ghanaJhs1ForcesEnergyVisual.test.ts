import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs1ForcesEnergyVisual } from '../src/components/GhanaJhs1ForcesEnergyVisual';

const cases = [
  ['gh-jhs1-science-energy-forms', 'The Energy Form Explorer', 'Kinetic'],
  ['gh-jhs1-science-electricity-generation', 'The Electricity Generation Guardian', 'Hydroelectricity'],
  ['gh-jhs1-science-energy-conversion', 'The Energy Transformation Alchemist', 'Electric fan'],
  ['gh-jhs1-science-force-motion', 'The Force and Motion Pathfinder', 'Kicking a football']
] as const;

for (const [missionId, title, interaction] of cases) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs1ForcesEnergyVisual, { missionId, lang: 'en' }));
  assert.ok(html.includes(title), `${missionId} renders its dedicated instructional visual`);
  assert.ok(html.includes(interaction), `${missionId} renders its interactive controls`);
  assert.ok(html.includes('ghana-science-visual'), `${missionId} uses the shared visual frame`);
  assert.ok(html.includes('aria-live="polite"'), `${missionId} announces changed explanations accessibly`);
}
const italian = renderToStaticMarkup(React.createElement(GhanaJhs1ForcesEnergyVisual, {
  missionId: 'gh-jhs1-science-energy-forms',
  lang: 'it'
}));
assert.ok(italian.includes('L’esploratore delle forme di energia'));
assert.ok(italian.includes('Cinetica'));
const electricityItalian = renderToStaticMarkup(React.createElement(GhanaJhs1ForcesEnergyVisual, {
  missionId: 'gh-jhs1-science-electricity-generation',
  lang: 'it'
}));
assert.ok(electricityItalian.includes('Il guardiano della produzione elettrica'));
assert.ok(electricityItalian.includes('Energia idroelettrica'));
console.log('ghanaJhs1ForcesEnergyVisual.test.ts ok! All four Forces and Energy visuals render in English and Italian.');
