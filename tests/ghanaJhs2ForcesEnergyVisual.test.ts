import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs2ForcesEnergyVisual } from '../src/components/GhanaJhs2ForcesEnergyVisual';

const missions = [
  { id: 'gh-jhs2-science-energy-sources-heat', title: 'The Energy Conversion Pathfinder', terms: ['Chemical energy', 'Electrical energy', 'Thermal energy', 'hydroelectric'] },
  { id: 'gh-jhs2-science-electricity-electronics', title: 'The Electricity Network Engineer', terms: ['Generating station', 'Step-up transformer', 'Transmission lines', 'capacitor'] },
  { id: 'gh-jhs2-science-energy-conservation-impact', title: 'The Energy Steward', terms: ['Useful output', 'Other transfers', 'conservation principle', 'Gas cooker'] },
  { id: 'gh-jhs2-science-magnetism-force-machines', title: 'The Magnetism and Motion Defender', terms: ['Attraction', 'Repulsion', 'Newton’s Second Law', 'm/s²'] },
  { id: 'gh-jhs2-science-agricultural-tools', title: 'The Farm Tool Engineer', terms: ['Hoe', 'Wheelbarrow', 'Watering can', 'Safety'] }
];

for (const mission of missions) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs2ForcesEnergyVisual, { missionId: mission.id }));
  assert.ok(html.includes(mission.title), mission.id + ' renders its English title');
  assert.ok(html.includes('ghana-science-visual'), mission.id + ' uses the shared Ghana science visual frame');
  assert.ok(html.includes('aria-live="polite"'), mission.id + ' announces interactive readout updates');
  assert.ok(html.includes('aria-pressed='), mission.id + ' exposes selected controls accessibly');
  for (const term of mission.terms) assert.ok(html.toLowerCase().includes(term.toLowerCase()), mission.id + ' includes ' + term);
  assert.ok(!/\b(energia|elettrica|calore|forza|magnete|attrazione|repulsione|fattoria|zappare)\b/i.test(html), mission.id + ' contains no Italian interface text');
}

assert.equal(GhanaJhs2ForcesEnergyVisual({ missionId: 'unknown-mission' }), null, 'Unknown missions do not render a visual');
console.log('Basic 8 Forces and Energy visuals render English-only, accessible instructional content.');
