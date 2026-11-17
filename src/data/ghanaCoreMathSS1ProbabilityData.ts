import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_PROBABILITY_ARCS: ArcInfo[] = [
  {
    n: 12,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Probability/Chance: Mapping the Possible',
    pages: 'NaCCA SHS 1 · pp. 149–152'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_PROBABILITY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-probability-chance',
    arc: 0,
    sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · pp. 149–152',
    hue: 286,
    horns: 2,
    eyes: 2,
    title: 'The Chance Compass',
    topic: 'Describe random experiments, list sample spaces and calculate probabilities for simple and compound experiments involving independent events.',
    demon: 'The Odds Illusionist',
    tech: 'Probability Form · Fourteenth Technique: Mapping Possibility',
    scenes: [
      lesson('<p><b>Probability</b> describes how likely an event is. A random experiment is an action with an outcome that is not known in advance, such as tossing a fair coin, rolling a fair die or drawing a ball at random. One performance is a <b>trial</b>; the result is an <b>outcome</b>. The set of all possible outcomes is the <b>sample space</b>, often written S.</p>'),
      lesson('<p>An <b>event</b> is one outcome or a group of outcomes from the sample space. An outcome is <b>favourable</b> when it belongs to the event we are interested in. Outcomes are <b>equally likely</b> when each has the same chance. An event is <b>exhaustive</b> with another when the events together cover all possible outcomes. For equally likely outcomes, P(A) = number of favourable outcomes ÷ total number of outcomes. Probability is between 0 and 1.</p>'),
      lesson('<p><b>Build a sample space.</b> Tossing a coin once gives S = {H, T}. Tossing it twice gives S = {HH, HT, TH, TT}. Order matters: HT means heads first and tails second, while TH is a different outcome. A tree diagram or an organised table helps list every possibility without missing or repeating outcomes.</p>'),
      lesson('<p><b>Compound experiments:</b> Roll a fair die twice. The outcomes are ordered pairs (first roll, second roll), so there are 6 × 6 = 36 equally likely outcomes. For example, the event “both rolls are six” contains only (6, 6), so its probability is 1/36. The event “the total is 7” has six outcomes: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1), so its probability is 6/36 = 1/6.</p>'),
      lesson('<p><b>Independent events</b> do not change each other’s probabilities. For independent events A and B, P(A and B) = P(A) × P(B). Repeated coin tosses are independent, and drawing a ball <b>with replacement</b> makes the second draw independent of the first, because the ball is returned and the original mix is restored. Without replacement, the probabilities usually change, so do not assume independence.</p>'),
      lesson('<p><b>Worked example — drawing with replacement:</b> A bag contains 4 green balls and 6 red balls. One ball is drawn, its colour is recorded, it is returned, and the bag is mixed before the second draw. P(G) = 4/10 = 2/5 and P(R) = 6/10 = 3/5 on either draw. The probability of two green balls is 2/5 × 2/5 = 4/25. The probability of red then green is 3/5 × 2/5 = 6/25.</p>'),
      lesson('<p><b>At least one:</b> The easiest route is sometimes the complement. “At least one red” is the opposite of “no red”, which here means “both green”. Therefore P(at least one red) = 1 − P(both green) = 1 − 4/25 = 21/25. A complement and its event add to 1. You can express a probability as a fraction, decimal, percentage or ratio: 1/4 = 0.25 = 25% = 1:4 when describing probability relative to the whole.</p>'),
      lesson('<p><b>Everyday reasoning:</b> Use probability to compare possible outcomes in fair games, school activity planning or simple reliability examples. State the assumptions: are the outcomes equally likely, is the coin or die fair, and are the events independent? Do not confuse a prediction with a guarantee. A probability of 1/6 does not mean an event must happen once in every six trials.</p>'),
      { who: 'd', vis: 'demon', text: 'I will hide outcomes, confuse “and” with “or”, and make you multiply probabilities even when the events are not independent. Can you map every possibility?' },
      { type: 'battle' }
    ],
    quiz: [
      question('A fair coin is tossed twice. Which list is the complete sample space?', [
        '{HH, HT, TH, TT}', '{HH, TT}', '{H, T}', '{HHH, HHT, HTT, TTT}'
      ], 'There are two possible results on each toss. Keeping the order gives four outcomes: HH, HT, TH and TT.'),
      question('A fair die is rolled twice. What is the probability of getting a 6 on both rolls?', [
        '1/36', '1/6', '1/12', '1/3'
      ], 'The rolls are independent, so multiply 1/6 × 1/6 = 1/36.'),
      question('A bag has 4 green and 6 red balls. A ball is drawn and replaced before the second draw. What is P(red then green)?', [
        '6/25', '4/25', '3/5', '2/5'
      ], 'With replacement, the draws are independent. P(R then G) = 6/10 × 4/10 = 24/100 = 6/25.'),
      question('Using the same bag and replacement, what is the probability of getting at least one red in two draws?', [
        '21/25', '4/25', '16/25', '3/5'
      ], 'The complement is getting no red, meaning both draws are green. P(both green) = 2/5 × 2/5 = 4/25, so P(at least one red) = 1 − 4/25 = 21/25.')
    ]
  },

  {
    id: 'gh-core-ss1-probability-practice-lab',
    arc: 0,
    sec: 'Making sense of and using data',
    pages: 'NaCCA SHS 1 · pp. 149–152',
    hue: 196,
    horns: 2,
    eyes: 2,
    title: 'The Fair Games Probability Lab',
    topic: 'Apply sample spaces and independent-event probability to fair games, repeated trials and practical decisions using tables, tree diagrams and clear assumptions.',
    demon: 'The Rigged Game Master',
    tech: 'Probability Form · Field Challenge: Test Every Outcome',
    scenes: [
      lesson('<p><b>Mission briefing — is the school fair game really fair?</b> A game is not fair just because it looks exciting. First identify the random experiment, list every possible outcome, and decide whether the outcomes are equally likely. Then calculate the probability of the event being tested. A fair coin has two equally likely outcomes; a fair six-sided die has six.</p>'),
      lesson('<p><b>Stage 1: organise the sample space.</b> A fair coin is tossed and a fair die is rolled. A complete outcome can be written as a pair, such as (H, 4). There are 2 × 6 = 12 equally likely pairs. A table with H and T as rows and 1–6 as columns lists all 12 outcomes. This makes it easier to count outcomes without missing or repeating any.</p>'),
      lesson('<p><b>Stage 2: read a tree diagram.</b> For two coin tosses, the first branch is H or T. From each branch, the second toss can again be H or T. The four end points are HH, HT, TH and TT. Each path has probability 1/2 × 1/2 = 1/4 because the tosses are independent. The tree diagram shows both the order and the probability of each path.</p>'),
      lesson('<p><b>Stage 3: test a game rule.</b> A player wins a token if a fair die shows an even number. The favourable outcomes are {2, 4, 6}; the sample space is {1, 2, 3, 4, 5, 6}. Therefore P(win) = 3/6 = 1/2. The probability of not winning is also 1/2. The event and its complement always add to 1.</p>'),
      lesson('<p><b>Stage 4: combine independent events.</b> A player wins a bonus only when a fair coin shows heads and a fair die shows 6. These experiments are independent, so P(heads and 6) = 1/2 × 1/6 = 1/12. The word “and” signals that both conditions must happen. Do not add the probabilities for an “and” question.</p>'),
      lesson('<p><b>Stage 5: compare theory with repeated trials.</b> The theoretical probability of heads on a fair coin is 1/2. If a class tosses the coin 20 times, it might get 8, 10 or 13 heads. The experimental relative frequency is the number of heads divided by the number of tosses. It can differ from 1/2 in a small set of trials; with many trials, it often moves closer to the theoretical probability, but it is not guaranteed to match it exactly.</p>'),
      lesson('<p><b>Stage 6: make a fair comparison.</b> Two games can have different numbers of winning outcomes. Compare the probability of winning, not just the number of winning faces. For example, 3 winning faces out of 6 and 2 winning faces out of 4 both give probability 1/2. State whether the game uses a fair coin or die and whether the outcomes are equally likely. A probability describes likelihood, not a promise about the next result.</p>'),
      lesson('<p><b>Check your reasoning.</b> Before submitting an answer, ask: Have I listed the whole sample space? Are outcomes equally likely? Have I counted favourable outcomes correctly? For an independent “and” event, have I multiplied? Does the answer lie between 0 and 1? Can I explain the result in the context of the game?</p>'),
      { who: 'd', vis: 'demon', text: 'I will make you confuse the number of wins with the chance of winning, and mistake a short run of trials for proof that a coin is unfair. Use the sample space and show your reasoning!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A fair coin is tossed and a fair die is rolled. How many equally likely combined outcomes are there?', ['12', '8', '6', '3'], 'There are 2 coin outcomes and 6 die outcomes, so 2 × 6 = 12 ordered pairs.'),
      question('A fair die wins a token on an even number. What is the probability of winning?', ['1/2', '1/3', '2/3', '1/6'], 'The even outcomes are 2, 4 and 6: 3 favourable outcomes out of 6, giving 3/6 = 1/2.'),
      question('A fair coin is tossed twice. What is the probability of tails followed by heads?', ['1/4', '1/2', '1/3', '3/4'], 'The ordered sample space is {HH, HT, TH, TT}. TH is one of four equally likely outcomes.'),
      question('A bonus requires heads on a fair coin and 6 on a fair die. What is the probability?', ['1/12', '1/8', '1/6', '1/2'], 'The events are independent, so multiply 1/2 × 1/6 = 1/12.'),
      question('A class tosses a fair coin 20 times and gets 8 heads. What is the experimental relative frequency of heads?', ['2/5', '1/2', '8/20%', '3/5'], 'Relative frequency is 8/20 = 2/5. It may differ from the theoretical probability of 1/2 in a short run.'),
      question('Game A has 3 winning faces on a fair six-sided die. Game B has 2 winning faces on a fair four-sided spinner. Which statement is correct?', ['Both games have a 1/2 chance of winning.', 'Game A is twice as likely to win.', 'Game B is more likely to win.', 'Neither game has equally likely outcomes.'], 'Game A gives 3/6 = 1/2 and Game B gives 2/4 = 1/2. The winning probabilities are equal.')
    ]
  },
];
