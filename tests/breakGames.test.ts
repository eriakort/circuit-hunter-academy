import assert from 'node:assert/strict';
import { ARCS, MISSIONS } from '../src/data/gameData';
import { BREAK_EVERY, availableBreakKinds, buildBreakGame, shouldOfferBreak } from '../src/data/breakGames';

const missions = MISSIONS as any[];
let withBreakContent = 0;
let offered = 0;
const subjectsWithBreaks = new Set<string>();

for (const mission of missions) {
  const subject = ARCS[mission.arc]?.subject ?? 'cs';
  const kinds = availableBreakKinds(mission, 'en');
  if (kinds.length) withBreakContent++;
  mission.scenes.forEach((_: any, index: number) => {
    if (!shouldOfferBreak(mission, index)) return;
    // Offered only after every BREAK_EVERY study scenes, never next to a game or the battle.
    assert.equal((index + 1) % BREAK_EVERY, 0, `${mission.id} offers a break at the wrong place`);
    assert.ok(!mission.scenes[index].type && !mission.scenes[index + 1].type, `${mission.id} offers a break beside an interactive scene`);
    assert.ok(mission.scenes[index + 2], `${mission.id} offers a break right before the end`);
    const game = buildBreakGame(mission, index, 'en');
    if (!game) return;
    offered++;
    subjectsWithBreaks.add(subject);
    if (game.kind === 'truefalse') {
      assert.ok(game.rounds.length >= 3);
      assert.ok(game.rounds.some(r => r.isTrue) && game.rounds.some(r => !r.isTrue) || game.rounds.length < 4, `${mission.id} true/false is one-sided`);
      for (const r of game.rounds) assert.ok(r.question && r.proposed && r.why, `${mission.id} true/false round is complete`);
    }
    if (game.kind === 'match' || game.kind === 'memory') {
      assert.ok(game.pairs.length >= 3);
      assert.equal(new Set(game.pairs.map(p => p.answer)).size, game.pairs.length, `${mission.id} has duplicate answers`);
    }
    if (game.kind === 'gap') {
      for (const r of game.rounds) {
        assert.ok(r.sentence.includes('_____') && r.choices.includes(r.answer), `${mission.id} gap round is valid`);
        assert.equal(new Set(r.choices).size, 3);
        assert.ok(!/<\/?[a-zA-Z][^>]*>/.test(r.sentence), `${mission.id} gap sentence still has markup`);
      }
    }
  });
}

assert.ok(missions.length > 500, 'all missions are checked');
assert.ok(withBreakContent / missions.length > 0.9, 'nearly every mission can supply a break game');
assert.ok(offered > 300, 'breaks are offered across the app');
for (const subject of ['ghjhs1science', 'ghjhs2science', 'ghjhs3science', 'ghjhs1math', 'ghjhs2math', 'ghjhs3math', 'ghcoremath', 'science', 'math5', 'italian']) {
  assert.ok(subjectsWithBreaks.has(subject), `${subject} gets study breaks`);
}

// Same mission and scene always give the same break (stable between renders).
const sample = missions.find(m => ARCS[m.arc]?.subject === 'ghjhs1science');
assert.deepEqual(buildBreakGame(sample, 2, 'en'), buildBreakGame(sample, 2, 'en'));

// Ghana content stays English-only: Ghana breaks never contain Italian-only text.
for (const mission of missions.filter(m => String(ARCS[m.arc]?.subject ?? '').startsWith('gh'))) {
  const game = buildBreakGame(mission, 2, 'en');
  if (game) assert.ok(!/\b(Domanda|Vero|Falso|Abbina)\b/.test(JSON.stringify(game)), `${mission.id} contains Italian UI text`);
}

console.log(`breakGames.test.ts ok! ${offered} study breaks across ${subjectsWithBreaks.size} subjects, ${withBreakContent}/${missions.length} missions can supply one.`);
