// Pure helpers — no DOM. Safe to unit-test.

function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function sshuffle(arr, r) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function rankOf(xp, RANKS) {
  let r = RANKS[0];
  for (const x of RANKS) if (xp >= x[0]) r = x;
  return r;
}

function nextRank(xp, RANKS) {
  return RANKS.find(r => r[0] > xp);
}

function raceXP(correct, isWinner, playerCount) {
  let xp = correct * 3;
  if (playerCount > 1 && isWinner) xp += 25;
  return xp;
}

function safeId() {
  return crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2) + Date.now().toString(36);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { rng, sshuffle, rankOf, nextRank, raceXP, safeId };
}
