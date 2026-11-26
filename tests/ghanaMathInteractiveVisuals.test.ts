import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { getVisualHtml } from '../src/data/visuals';
import { GHANA_MATH_STRANDS, type GhanaMathStrand } from '../src/data/ghanaMathVisuals';
import { GHANA_MATH_TOPIC_BY_MISSION, renderGhanaMathTopicDiagram } from '../src/data/mathVisualsGhTopics';
import { ALL_GHANA_MATH_LAB_IDS, getGhanaMathLabSpec } from '../src/components/ghanaMathLabs/ghanaMathLabConfig';
import { GhanaMathLab } from '../src/components/GhanaMathLab';

const GHANA_MATH_SUBJECTS = new Set([
  'ghjhs1math',
  'ghjhs2math',
  'ghjhs3math',
  'ghcoremath',
  'ghcoremath2',
  'ghcoremath3'
]);

const ghanaMathMissions = MISSIONS.filter(m => GHANA_MATH_SUBJECTS.has(String(ARCS[m.arc]?.subject)));
assert.equal(ghanaMathMissions.length, 101, 'All 101 Ghana Maths missions are present');
assert.equal(ALL_GHANA_MATH_LAB_IDS.length, 101, 'All 101 Ghana Maths missions have interactive lab specs');

for (const mission of ghanaMathMissions) {
  assert.ok(GHANA_MATH_TOPIC_BY_MISSION[mission.id], `${mission.id} has an explicit animated topic diagram`);
  const diagram = renderGhanaMathTopicDiagram(mission.id);
  assert.ok(diagram && diagram.svg.includes('<svg'), `${mission.id} renders a topic SVG`);

  const mathScene = mission.scenes.find(sc => sc.vis && sc.vis !== 'demon');
  assert.ok(mathScene?.vis, `${mission.id} has a math visual scene`);
  const enrichedHtml = getVisualHtml(mathScene!.vis!, 'en', mission.id);
  const strandKey = (mathScene!.vis === 'ghmath' ? 'mastery' : mathScene!.vis!.slice('ghmath-'.length)) as GhanaMathStrand;
  assert.ok(enrichedHtml.includes(GHANA_MATH_STRANDS[strandKey].title), `${mission.id} preserves NaCCA strand title in scene visual`);
  assert.ok(enrichedHtml.includes(diagram!.title), `${mission.id} renders mission-specific title in scene visual`);

  const spec = getGhanaMathLabSpec(mission.id);
  assert.ok(spec, `${mission.id} resolves a GhanaMathLab spec`);
  const labMarkup = renderToStaticMarkup(React.createElement(GhanaMathLab, { missionId: mission.id }));
  assert.ok(labMarkup.includes('data-testid="ghana-math-lab"'), `${mission.id} renders GhanaMathLab container`);
  const escapedTitle = spec!.title.replace(/&/g, '&amp;');
  assert.ok(labMarkup.includes(escapedTitle), `${mission.id} renders lab heading`);
  assert.ok(labMarkup.includes('aria-live="polite"'), `${mission.id} lab includes accessible live region`);
}

console.log(`ghanaMathInteractiveVisuals.test.ts ok! Verified topic animations & interactive labs across all ${ghanaMathMissions.length} Ghana Maths missions.`);
