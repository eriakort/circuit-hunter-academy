import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { ComputerScienceMissionLab } from '../src/components/ComputerScienceMissionLab';
import { COMPUTER_SCIENCE_REMAINING_MISSION_IDS } from '../src/components/ComputerScienceRemainingLabs';

const computerScienceMissions = MISSIONS.filter(mission => {
  const subject = ARCS[mission.arc]?.subject;
  return subject === undefined || subject === 'cs';
});
assert.equal(computerScienceMissions.length, 44, 'Grade 9 Computer Science must have 44 missions');
assert.deepEqual(
  [...COMPUTER_SCIENCE_REMAINING_MISSION_IDS].sort(),
  ['a1m2', 'a1m3', 'a5m2', 'a5m3', 'a5m4', 'c11m3', 'c12m1', 'c12m3', 'c15m2', 'c16m2'].sort()
);

for (const mission of computerScienceMissions) {
  for (const lang of ['en', 'it'] as const) {
    const markup = renderToStaticMarkup(
      React.createElement(ComputerScienceMissionLab, { missionId: mission.id, lang })
    );
    assert.ok(markup.includes('cs-visual-lab'), `${mission.id} (${lang}) must render a Computer Science lab`);
    assert.ok(markup.includes('csl-panel'), `${mission.id} (${lang}) must render a mission-specific panel`);
    assert.ok(!/\bundefined\b|\bNaN\b/.test(markup), `${mission.id} (${lang}) must render cleanly`);
  }
}

console.log(`computerScienceLabCoverage.test.ts ok! Rendered ${computerScienceMissions.length} labs in English and Italian.`);
