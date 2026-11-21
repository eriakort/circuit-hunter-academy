import assert from 'node:assert/strict';
import {
  BALANCE_EQS, COORD_LATS, COORD_LONS, COORD_ROUNDS, TIMELINE_EVENTS, TIMELINE_MAX, TIMELINE_MIN,
  coordName, countAtoms, isBalanced, isLowestTerms, timelinePoints, yearLabel
} from '../src/data/subjectGames';
import { SUBJECT_GAME_SCENES } from '../src/data/subjectGameScenes';
import { MISSIONS } from '../src/data/gameData';

// Equation balancer: every stored answer balances, is in lowest terms, and wrong ones are caught.
for (const eq of BALANCE_EQS) {
  assert.equal(eq.answer.length, eq.left.length + eq.right.length);
  assert.ok(isBalanced(eq, eq.answer), 'stored answer must balance');
  assert.ok(isLowestTerms(eq.answer), 'stored answer must be in lowest terms');
  assert.ok(!isBalanced(eq, eq.answer.map(() => 1)) || eq.answer.every(c => c === 1), 'all-ones is not the answer unless it is');
  // Doubling every coefficient still balances but is not lowest terms.
  const doubled = eq.answer.map(c => c * 2);
  assert.ok(isBalanced(eq, doubled) && !isLowestTerms(doubled));
}
assert.deepEqual(countAtoms(BALANCE_EQS[0].left, [2, 1]), { H: 4, O: 2 });

// Coordinate hunt: every target lies on the grid and has a readable name in both languages.
for (const r of COORD_ROUNDS) {
  assert.ok(COORD_LATS.includes(r.lat) && COORD_LONS.includes(r.lon));
}
assert.equal(coordName(20, -10, 'en'), '20° N, 10° W');
assert.equal(coordName(-10, 20, 'it'), '10° S, 20° E');
assert.equal(coordName(0, 0, 'en'), '0°, 0°');
assert.equal(coordName(10, -20, 'it'), '10° N, 20° O');

// Timeline: events are in range, distinct, and the scoring bands work.
const years = TIMELINE_EVENTS.map(e => e.y);
assert.equal(new Set(years).size, years.length);
for (const y of years) assert.ok(y > TIMELINE_MIN && y < TIMELINE_MAX);
for (const e of TIMELINE_EVENTS) assert.ok(e.en.trim() && e.it.trim());
assert.equal(timelinePoints(-490, -490), 2);
assert.equal(timelinePoints(-450, -490), 2);
assert.equal(timelinePoints(-400, -490), 1);
assert.equal(timelinePoints(0, -490), 0);
assert.equal(yearLabel(-44, 'en'), '44 BC');
assert.equal(yearLabel(-44, 'it'), '44 a.C.');
assert.equal(yearLabel(476, 'it'), '476 d.C.');

// Scenes are placed in the right missions, before the battle, and only in missions without a learning block.
for (const { missionId, scene } of SUBJECT_GAME_SCENES) {
  const m = (MISSIONS as any[]).find(x => x.id === missionId);
  assert.ok(m, `${missionId} exists`);
  assert.ok(!m.learning, `${missionId} has no learning block`);
  const idx = m.scenes.findIndex((s: any) => s.type === scene.type);
  assert.ok(idx > 0, `${missionId} has the ${scene.type} scene`);
  assert.equal(m.scenes.filter((s: any) => s.type === scene.type).length, 1, 'inserted once');
  assert.equal(m.scenes[m.scenes.length - 1].type, 'battle', 'battle stays last');
  assert.ok(m.scenes.slice(idx + 1).some((s: any) => s.who === 'd'), 'game comes before the demon');
}
console.log('subjectGames.test.ts ok! 3 subject games: data, scoring and placement verified.');
