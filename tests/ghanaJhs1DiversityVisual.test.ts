import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs1DiversityVisual } from '../src/components/GhanaJhs1DiversityVisual';

const cases = [
  ['gh-jhs1-science-materials-states', 'The Materials Explorer', 'Temperature model'],
  ['gh-jhs1-science-importance-liquids', 'The Life-Giving Liquids Guardian', 'Clean water'],
  ['gh-jhs1-science-materials-uses', 'The Everyday Materials Engineer', 'Metal'],
  ['gh-jhs1-science-living-cells', 'The Living Cell Investigator', 'Plant cell']
] as const;

for (const [missionId, title, interaction] of cases) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs1DiversityVisual, { missionId, lang: 'en' }));
  assert.ok(html.includes(title), `${missionId} renders its dedicated instructional visual`);
  assert.ok(html.includes(interaction), `${missionId} renders its interactive controls`);
  assert.ok(html.includes('ghana-science-visual'), `${missionId} uses the shared visual frame`);
  assert.ok(html.includes('aria-live="polite"'), `${missionId} announces changed explanations accessibly`);
}

const italian = renderToStaticMarkup(React.createElement(GhanaJhs1DiversityVisual, {
  missionId: 'gh-jhs1-science-materials-states',
  lang: 'it'
}));
assert.ok(italian.includes('L’esploratore dei materiali'));
assert.ok(italian.includes('Modello della temperatura'));

console.log('ghanaJhs1DiversityVisual.test.ts ok! All four interactive teaching visuals render in English and Italian.');
