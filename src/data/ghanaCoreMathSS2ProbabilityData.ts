import type { ArcInfo, Mission, UnitInfo } from '../types';

const question = (q: string, a: string[], why: string) => ({ q, a, why });
const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });

export const GHANA_CORE_MATH_SS2_PROBABILITY_UNIT: UnitInfo = {
  title: 'Making Sense of and Using Data · Probability and Chance',
  ch: 'SS2 · NaCCA pp. 290–296',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_PROBABILITY_ARCS: ArcInfo[] = [{
  n: 8,
  unit: 0,
  subject: 'ghcoremath2',
  title: 'Probability/Chance · Dependent and Independent Events',
  pages: 'NaCCA SHS 2 · pp. 290–296'
}];

export const GHANA_CORE_MATH_SS2_PROBABILITY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-dependent-events-sample-space',
    arc: 0,
    sec: '2.4.2',
    pages: 'NaCCA SHS 2 · pp. 290–294',
    hue: 198,
    horns: 2,
    eyes: 3,
    title: 'The Dependent Draw Specialist',
    topic: 'Build sample spaces for compound experiments and calculate probabilities when the first event changes the chance of the next.',
    demon: 'The Replacement Phantom',
    tech: 'Chance Form · SHS 2 Technique: Conditional Draw',
    scenes: [
      lesson('<p>A <b>random experiment</b> has an outcome we cannot know for certain in advance. A <b>sample space</b> lists every possible outcome. For two draws, an ordered pair such as (Red, Blue) records both the first and second result. The order matters when the question says “first” and “then”.</p>'),
      lesson('<p>Two events are <b>dependent</b> when the first event changes the probability of the second. Imagine a bag with 3 red and 2 blue counters. If you draw one counter and do not replace it, the bag’s contents change. After drawing red, only 2 red and 2 blue counters remain.</p>'),
      lesson('<p>For dependent events, multiply the first probability by the probability of the second event <b>after the first has happened</b>: P(A and B) = P(A) × P(B | A). The vertical bar means “given that”. If a bag has 4 green counters among 10, then after drawing green without replacement there are 3 green among 9: P(G then G) = 4/10 × 3/9 = 2/15.</p>'),
      lesson('<p>A <b>tree diagram</b> helps show each stage. Label every branch with its probability. For a draw without replacement, reduce the total number of objects after the first draw. For a draw with replacement, return the object first, so the probabilities on the second stage stay the same.</p>'),
      lesson('<p>Check whether the experiment is with or without replacement before choosing a rule. List the possible ordered outcomes, label the branches, and multiply along a path to find the probability of that sequence. Add path probabilities when the question asks for one of several mutually exclusive outcomes.</p>'),
      { type: 'sort', title: 'Choose the correct probability idea', cats: [['Dependent', 'First event changes next'], ['Conditional', 'Given the first event'], ['Without replacement', 'Object is not returned'], ['Sample space', 'All possible outcomes']], items: [
        { n: 'A first draw changes the remaining counters', c: 0, i: 'change' },
        { n: 'P(Blue on second draw given Red first)', c: 1, i: 'given' },
        { n: 'The selected card stays out of the deck', c: 2, i: 'remove' },
        { n: 'List every ordered pair of two draws', c: 3, i: 'list' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Replacement Phantom hides the changing totals. Track each draw carefully and defeat it with conditional probability!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A bag has 3 red and 2 blue counters. One is drawn and not replaced. What is the probability of red first, then blue?', ['3/10', '6/25', '2/5', '1/2'], 'P(R then B) = 3/5 × 2/4 = 6/20 = 3/10.'),
      question('What does P(B | A) mean?', ['Probability of B given A has happened', 'Probability of A and B never happening', 'Probability of A only', 'Probability of B before A'], 'The vertical bar means “given that”; A has already occurred.'),
      question('A bag contains 4 green counters out of 10. Two are drawn without replacement. What is P(green then green)?', ['2/15', '4/25', '1/5', '4/10'], 'After the first green, 3 green remain out of 9: 4/10 × 3/9 = 2/15.'),
      question('Why do the probabilities change on the second draw without replacement?', ['The total and the number of each colour may change', 'The sample space becomes infinite', 'The first draw is repeated', 'All outcomes become equally likely'], 'The first object is not returned, so the contents of the bag change.'),
      question('Which display is useful for showing the stages of a two-step experiment?', ['Tree diagram', 'Box plot', 'Ogive', 'Waffle diagram'], 'A tree diagram shows branches and probabilities at each stage.')
    ]
  },
  {
    id: 'gh-core-ss2-independent-events-everyday-probability',
    arc: 0,
    sec: '2.4.2',
    pages: 'NaCCA SHS 2 · pp. 294–296',
    hue: 42,
    horns: 2,
    eyes: 4,
    title: 'The Independent Event Strategist',
    topic: 'Distinguish independent from dependent events and solve everyday compound-probability problems using multiplication, complements and clear representations.',
    demon: 'The Chance Confuser',
    tech: 'Chance Form · SHS 2 Technique: Independence Check',
    scenes: [
      lesson('<p>Events are <b>independent</b> when one event does not change the probability of the other. Tossing a coin and rolling a die are independent experiments: the coin result does not affect the die. Drawing a card and returning it before the next draw also keeps the deck unchanged.</p>'),
      lesson('<p>For independent events, P(A and B) = P(A) × P(B). For example, the chance of heads on a fair coin is 1/2 and the chance of rolling a 6 on a fair die is 1/6. The chance of both is 1/2 × 1/6 = 1/12.</p>'),
      lesson('<p>Do not confuse independent events with events that are simply different. If an object is drawn and <b>not</b> replaced, the second probability changes: the events are dependent. If the object is returned before the next draw, the probabilities stay the same: the draws are independent.</p>'),
      lesson('<p>A <b>complement</b> is the event that something does not happen. P(not A) = 1 − P(A). To find the probability of “at least one” success, it can be easier to calculate 1 minus the probability of no successes. For two independent events, P(neither A nor B) = (1 − P(A)) × (1 − P(B)).</p>'),
      lesson('<p>Probability can be written as a fraction, decimal, percentage or ratio. For example, 1/4 = 0.25 = 25%. Always define the events, decide whether they are independent, select the correct rule, show your working and check that the final probability lies between 0 and 1.</p>'),
      { type: 'sort', title: 'Classify each experiment', cats: [['Independent', 'One does not affect the other'], ['Dependent', 'First changes the next'], ['Multiply', 'Find both events'], ['Complement', 'Find not the event']], items: [
        { n: 'Toss a coin and roll a die', c: 0, i: 'separate' },
        { n: 'Draw two cards without replacement', c: 1, i: 'no-return' },
        { n: 'P(A and B) for independent events', c: 2, i: 'product' },
        { n: 'P(not A) = 1 − P(A)', c: 3, i: 'opposite' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Chance Confuser mixes up independent and dependent events. Choose the right model and make every probability count!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A fair coin is tossed and a fair die is rolled. What is the probability of heads and a 6?', ['1/12', '1/8', '1/6', '1/3'], 'The experiments are independent: 1/2 × 1/6 = 1/12.'),
      question('Which pair is independent?', ['Tossing a coin and rolling a die', 'Drawing two cards without replacement', 'Drawing two counters without replacement', 'Selecting two students one after another without replacement'], 'The coin result does not affect the die result.'),
      question('If P(A) = 0.7, what is P(not A)?', ['0.3', '0.7', '1.7', '0.07'], 'The complement is 1 − 0.7 = 0.3.'),
      question('Two independent events have probabilities 1/3 and 1/4. What is the probability that both occur?', ['1/12', '2/7', '7/12', '1/7'], 'Multiply: 1/3 × 1/4 = 1/12.'),
      question('A ball is drawn, returned to the bag, and then another is drawn. Why are the draws independent?', ['The bag is restored before the second draw', 'The first colour must repeat', 'There are no possible outcomes', 'The second draw happens first'], 'Replacing the first ball restores the original probabilities.')
    ]
  }
];
