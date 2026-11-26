import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { getGrade5MathMissionVisual } from '../src/data/grade5MathVisuals';
import { GRADE5_MATH_TOPIC_BY_MISSION } from '../src/data/mathVisualsG5Topics';
import { ALL_GRADE5_MATH_LAB_IDS, getGrade5MathLabSpec } from '../src/components/grade5MathLabs/grade5MathLabConfig';
import { Grade5MathLab } from '../src/components/Grade5MathLab';

const g5mMissions = MISSIONS.filter(m => ARCS[m.arc]?.subject === 'math5');
assert.equal(g5mMissions.length, 69, 'All 69 Grade 5 Maths missions are present');
assert.equal(ALL_GRADE5_MATH_LAB_IDS.length, 69, 'All 69 Grade 5 Maths missions have interactive lab specs');

for (const mission of g5mMissions) {
  assert.ok(GRADE5_MATH_TOPIC_BY_MISSION[mission.id], `${mission.id} maps to a topic visual`);

  for (const lang of ['en', 'it'] as const) {
    const visual = getGrade5MathMissionVisual(mission.id, lang);
    assert.ok(visual && visual.length > 50, `${mission.id} (${lang}) returns a non-empty mission visual`);
    assert.ok(!visual.includes('undefined') && !visual.includes('NaN'), `${mission.id} (${lang}) visual avoids undefined/NaN`);

    const spec = getGrade5MathLabSpec(mission.id);
    assert.ok(spec, `${mission.id} resolves a Grade5MathLab spec`);
    const labMarkup = renderToStaticMarkup(React.createElement(Grade5MathLab, { missionId: mission.id, lang }));
    assert.ok(labMarkup.includes('data-testid="grade5-math-lab"'), `${mission.id} (${lang}) renders Grade5MathLab container`);
    assert.ok(labMarkup.includes('aria-live="polite"'), `${mission.id} (${lang}) includes accessible live region`);
    assert.ok(!labMarkup.includes('undefined') && !labMarkup.includes('NaN'), `${mission.id} (${lang}) lab avoids undefined/NaN`);
  }
}

console.log(`grade5MathInteractiveVisuals.test.ts ok! Verified animated visuals & interactive labs for all ${g5mMissions.length} Grade 5 Maths missions in EN & IT.`);
