import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs2HumansEnvironmentVisual } from '../src/components/GhanaJhs2HumansEnvironmentVisual';

const missions = [
  { id: 'gh-jhs2-science-waste-management', title: 'The Waste-Wise Community Guardian', terms: ['Waste hierarchy', 'Compost', 'Reduce', 'Special collection'] },
  { id: 'gh-jhs2-science-human-health', title: 'The Community Health Defender', terms: ['transmission route', 'Respiratory particles', 'Prevention', 'diagnosis'] },
  { id: 'gh-jhs2-science-science-industry', title: 'The Science and Innovation Builder', terms: ['community challenge', 'Farming', 'Possible innovation', 'Life-cycle thinking'] },
  { id: 'gh-jhs2-science-climate-green-economy', title: 'The Climate Action Strategist', terms: ['climate response', 'Mitigation', 'Green economy', 'Weather'] },
  { id: 'gh-jhs2-science-soils-plants', title: 'The Soil and Plant Investigator', terms: ['Compare a soil sample', 'Loam soil', 'Fair soil investigation', 'osmosis'] },
  { id: 'gh-jhs2-science-rocks-soil-formation', title: 'The Rock and Soil Origins Explorer', terms: ['rock group', 'Igneous rocks', 'Weathering', 'soil formation'] }
];

for (const mission of missions) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs2HumansEnvironmentVisual, { missionId: mission.id }));
  assert.ok(html.includes(mission.title), mission.id + ' renders its English title');
  assert.ok(html.includes('ghana-science-visual'), mission.id + ' uses the shared Ghana science visual frame');
  assert.ok(html.includes('aria-live="polite"'), mission.id + ' announces interactive readout updates');
  assert.ok(html.includes('aria-pressed='), mission.id + ' exposes selected controls accessibly');
  for (const term of mission.terms) assert.ok(html.toLowerCase().includes(term.toLowerCase()), mission.id + ' includes ' + term);
  assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|fattoria|zappare|rifiuti|salute|clima|terreno|rocce)\b/i.test(html), mission.id + ' contains no Italian interface text');
}
assert.equal(GhanaJhs2HumansEnvironmentVisual({ missionId: 'unknown-mission' }), null, 'Unknown missions do not render a visual');
console.log('Basic 8 Humans and Environment visuals render English-only, accessible instructional content.');
