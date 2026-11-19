import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { GhanaJhs2CyclesVisual } from '../src/components/GhanaJhs2CyclesVisual';

const missions = [
  { id: 'gh-jhs2-science-carbon-cycle', title: 'The Carbon Cycle Guardian', terms: ['Photosynthesis', 'Feeding', 'Decomposition'] },
  { id: 'gh-jhs2-science-anopheles-life-cycle', title: 'The Mosquito Life-Cycle Defender', terms: ['Egg', 'Larva', 'Pupa', 'Adult'] },
  { id: 'gh-jhs2-science-seed-beds', title: 'The Seed-Bed Design Strategist', terms: ['Flat bed', 'Raised bed', 'Sunken bed'] },
  { id: 'gh-jhs2-science-animal-feed-water', title: 'The Animal Production Care Planner', terms: ['Clean water', 'Balanced feed', 'Suitable shelter'] }
];

for (const mission of missions) {
  const html = renderToStaticMarkup(React.createElement(GhanaJhs2CyclesVisual, { missionId: mission.id }));
  assert.ok(html.includes(mission.title), mission.id + ' renders its English title');
  assert.ok(html.includes('ghana-science-visual'), mission.id + ' uses the shared visual frame');
  assert.ok(html.includes('aria-live="polite"'), mission.id + ' announces interactive readout updates');
  for (const term of mission.terms) assert.ok(html.includes(term), mission.id + ' includes ' + term);
  assert.ok(!/\b(Evaporazione|Ciclo|Acqua|Pianta|Mosca|Uovo)\b/.test(html), mission.id + ' contains no Italian interface text');
}

console.log('Basic 8 Cycles visuals render English-only, accessible instructional content.');
