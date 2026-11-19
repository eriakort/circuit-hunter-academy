import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs2SystemsVisual } from '../src/components/GhanaJhs2SystemsVisual';

const missions = [
  { id: 'gh-jhs2-science-teeth-dental-health', title: 'The Dental Health Guardian', terms: ['Enamel', 'Dentine', 'Pulp'] },
  { id: 'gh-jhs2-science-outer-planets', title: 'The Outer Planet Navigator', terms: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'] },
  { id: 'gh-jhs2-science-ecosystem-feeding', title: 'The Ecosystem Food-Web Strategist', terms: ['Producer', 'Primary consumer', 'grasshopper'] },
  { id: 'gh-jhs2-science-farming-systems', title: 'The Farming Systems Strategist', terms: ['Crop rotation', 'Mixed cropping', 'Mixed farming'] }
];

for (const mission of missions) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs2SystemsVisual, { missionId: mission.id }));
  assert.ok(html.includes(mission.title), mission.id + ' renders its English title');
  assert.ok(html.includes('ghana-science-visual'), mission.id + ' uses the shared visual frame');
  assert.ok(html.includes('aria-live="polite"'), mission.id + ' announces interactive readout updates');
  for (const term of mission.terms) assert.ok(html.includes(term), mission.id + ' includes ' + term);
  assert.ok(!/\b(Denti|Denti|Pianeta|Pianeti|Savana|Colture|Agricoltura)\b/.test(html), mission.id + ' contains no Italian interface text');
}
console.log('Basic 8 Systems visuals render English-only, accessible instructional content.');
