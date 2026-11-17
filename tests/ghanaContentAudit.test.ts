import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';
import { getVisualHtml } from '../src/data/visuals';
import { GHANA_MATH_VISUAL_KEYS } from '../src/data/ghanaMathVisuals';
import { getCategories } from '../src/data/questionBank';
import { FORMULA_CARDS } from '../src/data/formulaData';

// Ghana Core Mathematics must only show maths content, in English.
const GHANA_SUBJECTS = ['ghcoremath', 'ghcoremath2', 'ghcoremath3'];
const COMPUTER_SCIENCE = /informatic|computer science|algorithm|binary|\bbytes?\b|\bcpu\b|python|coding|circuit hunter/i;
const ITALIAN = /\b(della|delle|degli|sono|questo|questa|numeri|perché|anche|risposta|quindi|uguale)\b/i;
const allowedVisuals = new Set(['demon', ...GHANA_MATH_VISUAL_KEYS]);

const ghanaMissions = MISSIONS.filter(mission => GHANA_SUBJECTS.includes(String(ARCS[mission.arc]?.subject)));
assert.ok(ghanaMissions.length >= 60, 'All Ghana missions are registered');

for (const mission of ghanaMissions) {
  for (const [index, scene] of mission.scenes.entries()) {
    if (!scene.vis) continue;
    assert.ok(allowedVisuals.has(scene.vis), `${mission.id} scene ${index} uses non-maths visual "${scene.vis}"`);
    if (scene.vis === 'demon') continue;
    const html = getVisualHtml(scene.vis, 'en');
    assert.ok(html.length > 100, `${mission.id} scene ${index} visual renders`);
    assert.ok(!COMPUTER_SCIENCE.test(html), `${mission.id} scene ${index} visual must not show computer science`);
    assert.ok(!ITALIAN.test(html.replace(/<[^>]+>/g, ' ')), `${mission.id} scene ${index} visual must be English`);
  }
  assert.ok(!ITALIAN.test(JSON.stringify(mission).replace(/<[^>]+>/g, ' ')), `${mission.id} must not contain Italian text`);
}

// Strand visuals match the topic.
const visualOf = (id: string) => MISSIONS.find(mission => mission.id === id)?.scenes.find(scene => scene.vis && scene.vis !== 'demon')?.vis;
assert.equal(visualOf('gh-core-ss1-number-sets'), 'ghmath-number');
assert.equal(visualOf('gh-core-ss1-linear-equations-inequalities'), 'ghmath-algebra');
assert.equal(visualOf('gh-core-ss1-trigonometry'), 'ghmath-geometry');
assert.equal(visualOf('gh-core-ss1-probability-chance'), 'ghmath-data');
assert.equal(visualOf('gh-core-ss2-surds-indices-modulo'), 'ghmath-number');
assert.equal(visualOf('gh-core-ss3-wave-cartographer'), 'ghmath-geometry');

// SHS 1 missions sit under their own topic (they used to fall into "Number Sets and Ordering").
const topicOf = (id: string) => ARCS[MISSIONS.find(mission => mission.id === id)!.arc].title;
const expectedTopics: Record<string, string> = {
  'gh-core-ss1-number-sets': 'Number Sets and Ordering',
  'gh-core-ss1-patterns-functions': 'Patterns, Relations and Functions',
  'gh-core-ss1-straight-lines-distance': 'Gradient, Straight Lines and Distance',
  'gh-core-ss1-trigonometry': 'Geometry Around Us · Trigonometry',
  'gh-core-ss1-statistical-reasoning-data-types': 'Statistical Reasoning: From Evidence to Action',
  'gh-core-ss1-probability-chance': 'Probability/Chance: Mapping the Possible',
  'gh-core-ss1-fraction-operations': 'Fractions: Operations and Inverses',
  'gh-core-ss1-linear-equations-inequalities': 'Linear Equations and Inequalities',
  'gh-core-ss1-quadratic-factorisation-algebraic-fractions': 'Quadratic Factorisation and Algebraic Fractions',
  'gh-core-ss1-integrated-mastery-trial': 'Integrated SHS 1 Mastery',
  'gh-core-ss1-patterns-relationships-mastery': 'Patterns and Relationships: Mastery',
  'gh-core-ss1-45-indicator-diagnostic': 'The 45-Indicator Mastery Expedition'
};
for (const [id, title] of Object.entries(expectedTopics)) assert.equal(topicOf(id), title, `${id} topic`);

const ss1Arcs = ARCS.map((arc, index) => ({ arc, index })).filter(item => item.arc.subject === 'ghcoremath');
ss1Arcs.forEach(({ arc, index }, position) => {
  assert.equal(arc.n, position + 1, `SHS 1 topic ${arc.title} is numbered in order`);
  assert.ok(MISSIONS.some(mission => mission.arc === index), `SHS 1 topic ${arc.title} has a mission`);
  assert.equal(UNITS[arc.unit as number]?.subject, 'ghcoremath');
});

// Test bank label uses the full English subject name.
assert.equal(getCategories('ghcoremath')[0].label[0], 'All Core Mathematics Topics');

// Formula Book: the logic card's English text is English.
const logic = FORMULA_CARDS.find(card => card.id === 'logic-truth-tables')!;
for (const rule of logic.rules ?? []) assert.ok(!ITALIAN.test(rule.desc[0]) && !/\bVera\b/.test(rule.desc[0]), `English logic rule: ${rule.desc[0]}`);

console.log(`ghanaContentAudit.test.ts ok! ${ghanaMissions.length} Ghana missions use maths-only, English-only content.`);
