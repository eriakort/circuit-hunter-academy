import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { ARCS, MISSIONS, SUBJECTS, UNITS } from '../src/data/gameData';
import { GRADE_SUBJECT_IDS } from '../src/data/gradeData';
import { MathGeometryLab } from '../src/components/MathGeometryLab';

const ids = ['m7m1', 'm7m2', 'm7m3', 'm7m4', 'm7m5', 'm7m6'];
const missions = MISSIONS.filter(mission => ids.includes(mission.id));
assert.equal(missions.length, 6, 'Grade 9 Maths must register six geometry/statistics missions');
assert.equal(new Set(missions.map(mission => mission.id)).size, 6);
assert.ok(GRADE_SUBJECT_IDS.grade9.includes('math'));
assert.ok(SUBJECTS.find(subject => subject.id === 'math')?.meta[0].includes('34 missions'));

const arcIndex = missions[0].arc;
assert.equal(missions.every(mission => mission.arc === arcIndex), true);
assert.equal(ARCS[arcIndex].subject, 'math');
assert.equal(UNITS[ARCS[arcIndex].unit as number].subject, 'math');
assert.equal(ARCS[arcIndex].title[0], 'Geometry & Statistics');

for (const mission of missions) {
  assert.ok(mission.learning, mission.id + ' needs structured learning content');
  assert.ok(mission.learning.concepts.length >= 2);
  assert.ok(mission.learning.concepts.every(concept => concept.workedExample?.steps.length >= 2));
  assert.equal(mission.quiz.length, 5);
  for (const langIndex of [0, 1]) {
    for (const concept of mission.learning.concepts) {
      assert.ok(concept.title[langIndex].trim());
      assert.ok(concept.explanation[langIndex].trim());
      assert.ok(concept.workedExample?.scenario[langIndex].trim());
      assert.ok(concept.workedExample?.answer[langIndex].trim());
    }
    for (const question of mission.quiz) {
      assert.ok(question.q[langIndex].trim());
      assert.ok(question.why[langIndex].trim());
      assert.ok(question.a.every(answer => answer[langIndex].trim()));
    }
  }
  for (const lang of ['en', 'it'] as const) {
    const html = renderToStaticMarkup(React.createElement(MathGeometryLab, { missionId: mission.id, lang }));
    assert.ok(html.includes('<svg'), mission.id + ' should render a diagram in ' + lang);
    assert.ok(!html.includes('undefined') && !html.includes('NaN'));
  }
}
console.log('mathGeometryCurriculum.test.ts ok! Validated six bilingual geometry/statistics missions and interactive labs.');
