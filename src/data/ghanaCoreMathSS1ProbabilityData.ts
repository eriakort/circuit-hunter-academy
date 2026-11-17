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
  }
];
