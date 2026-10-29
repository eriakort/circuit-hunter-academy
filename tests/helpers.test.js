// node tests/helpers.test.js
const { rng, sshuffle, rankOf, nextRank, raceXP } = require('../src/helpers');

const RANKS = [[0,'Intern'],[100,'Junior'],[500,'Senior'],[1000,'Lead']];

console.assert(rankOf(0, RANKS)[1] === 'Intern');
console.assert(rankOf(150, RANKS)[1] === 'Junior');
console.assert(rankOf(999, RANKS)[1] === 'Senior');
console.assert(nextRank(50, RANKS)[0] === 100);
console.assert(raceXP(5, true, 2) === 40);
console.assert(raceXP(5, false, 2) === 15);
console.assert(raceXP(5, true, 1) === 15);

const r = rng(42);
const shuffled = sshuffle([1,2,3,4,5], r);
console.assert(shuffled.length === 5);
console.assert(new Set(shuffled).size === 5);

console.log('helpers.test.js ok');
