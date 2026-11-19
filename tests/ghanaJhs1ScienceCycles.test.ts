import assert from 'node:assert/strict';
import { ARCS, MISSIONS, UNITS } from '../src/data/gameData';

const unitIndex = UNITS.findIndex(unit => unit.title === 'Cycles' && unit.subject === 'ghjhs1science');
assert.ok(unitIndex >= 0, 'JHS 1 Science Cycles unit should be registered');
const arcs = ARCS.filter(arc => arc.unit === unitIndex && arc.subject === 'ghjhs1science');
assert.deepEqual(arcs.map(arc => arc.title), ['Earth Science', 'Life Cycle of Organisms', 'Crop Production', 'Animal Production']);
const missions = MISSIONS.filter(mission => arcs.some(arc => ARCS[mission.arc] === arc));
assert.equal(missions.length, 4);
assert.deepEqual(missions.map(mission => mission.title), [
  'The Earth Systems Explorer',
  'The Life Cycle Guardian',
  'The Crop Care Strategist',
  'The Animal Welfare Keeper'
]);
for (const mission of missions) {
  assert.equal(mission.quiz.length, 5, `Expected five quiz questions in ${mission.id}`);
  assert.equal(typeof mission.scenes[0].text, 'string');
}
console.log('ghanaJhs1ScienceCycles.test.ts ok!');
const houseflyMission = missions.find(mission => mission.id === 'gh-jhs1-science-life-cycles');
assert.ok(houseflyMission, 'Life-cycle mission should teach housefly outcomes');
assert.match(houseflyMission.scenes[2].text, /egg, larva \(maggot\), pupa and adult fly/i);
assert.match(houseflyMission.scenes[3].text, /covering food/i);
assert.match(houseflyMission.scenes[3].text, /wash(?:ing)? hands with soap/i);
assert.match(houseflyMission.quiz[2].q, /housefly and a butterfly/i);
assert.match(houseflyMission.quiz[2].why, /complete metamorphosis/i);
assert.match(houseflyMission.quiz[4].q, /houseflies contaminating food/i);
assert.match(houseflyMission.quiz[4].why, /safe waste disposal/i);
console.log('Basic 7 housefly life-cycle and prevention evidence verified.');
const animalMission = missions.find(mission => mission.id === 'gh-jhs1-science-animal-production');
assert.ok(animalMission, 'Animal-production mission should be registered');
assert.match(animalMission.scenes[0].text, /community.*observe/i);
assert.match(animalMission.scenes[1].text, /ruminants/i);
assert.match(animalMission.scenes[1].text, /monogastrics/i);
assert.match(animalMission.scenes[1].text, /poultry/i);
assert.match(animalMission.scenes[2].text, /commercial uses/i);
assert.match(animalMission.scenes[3].text, /compare findings/i);
assert.match(animalMission.quiz[1].q, /animal groups/i);
assert.match(animalMission.quiz[2].q, /comparison of animal uses/i);
assert.match(animalMission.quiz[4].why, /animal health and welfare/i);
console.log('Basic 7 domestic animal identification, classification and uses verified.');
const cropMission = missions.find(mission => mission.id === 'gh-jhs1-science-crop-production');
assert.ok(cropMission, 'Crop-production mission should be registered');
assert.match(cropMission.scenes[2].text, /observe farms, gardens or markets in your community/i);
assert.match(cropMission.scenes[2].text, /organic/i);
assert.match(cropMission.scenes[2].text, /inorganic/i);
assert.match(cropMission.scenes[3].text, /dark, crumbly/i);
assert.match(cropMission.scenes[3].text, /granules/i);
assert.match(cropMission.scenes[3].text, /recommended type and amount/i);
assert.match(cropMission.quiz[2].q, /organic plant nutrient sources/i);
assert.match(cropMission.quiz[3].q, /correctly compares organic materials/i);
assert.match(cropMission.quiz[4].q, /safest way to apply an inorganic fertiliser/i);
console.log('Basic 7 community plant nutrient identification, classification and safe application verified.');

const earthMission = missions.find(mission => mission.id === 'gh-jhs1-science-earth-cycles');
assert.ok(earthMission, 'Earth-systems mission should be registered');
assert.match(earthMission.scenes[1].text, /transpiration/i);
assert.match(earthMission.scenes[1].text, /precipitation/i);
assert.match(earthMission.scenes[3].text, /underground water stores/i);
assert.match(earthMission.scenes[3].text, /nutrients/i);
assert.match(JSON.stringify(earthMission.quiz[2]), /transpiration/i);
assert.match(earthMission.quiz[4].q, /water cycle important/i);
console.log('Basic 7 water-cycle sequence, transpiration and environmental importance verified.');
