import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 2 Mathematics · Algebra strand. */
export const GHANA_JHS2_ALGEBRA_UNIT: UnitInfo = {
  title: 'Algebraic Patterns and Equations',
  ch: 'JHS 2 · NaCCA Algebra strand',
  subject: 'ghjhs2math'
};

export const GHANA_JHS2_ALGEBRA_ARCS: ArcInfo[] = [
  { n: 4, unit: 0, subject: 'ghjhs2math', title: 'Patterns, Sequences and General Rules', pages: 'NaCCA CCP · JHS Mathematics · Algebra' },
  { n: 5, unit: 0, subject: 'ghjhs2math', title: 'Expressions, Formulae and Substitution', pages: 'NaCCA CCP · JHS Mathematics · Algebra' },
  { n: 6, unit: 0, subject: 'ghjhs2math', title: 'Linear Equations and Inequalities', pages: 'NaCCA CCP · JHS Mathematics · Algebra' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-algebra', text });

export const GHANA_JHS2_ALGEBRA_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs2-algebra-patterns-sequences',
    arc: 0, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra',
    hue: 282, horns: 2, eyes: 2,
    title: 'The Sequence Pathfinder',
    topic: 'Identify term-to-term rules, extend numerical sequences and describe relationships using general rules.',
    demon: 'The Pattern Shifter',
    tech: 'Algebra Form · Seventh Technique: Reveal the Rule',
    scenes: [
      lesson('<p>A sequence is an ordered list of numbers that follows a rule. In 4, 7, 10, 13, … each term increases by 3. The next terms are 16 and 19. The amount added each time is the common difference.</p>'),
      lesson('<p>Some sequences use multiplication. In 3, 6, 12, 24, … each term is multiplied by 2. Look carefully at how one term changes into the next before deciding on a rule.</p>'),
      lesson('<p>A table can connect the term number to the term value. For 5, 8, 11, 14, … the rule is 3n + 2: multiply the term number n by 3, then add 2. At term 6, the value is 3 × 6 + 2 = 20.</p>'),
      lesson('<p>Test a general rule with several term numbers. If it works for the first few terms, check that it explains the pattern consistently. A clear rule helps you find a distant term without listing every term before it.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the sequence rule. Track the changes, build a table and reveal the missing terms!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What are the next two terms in 6, 10, 14, 18, …?', ['22 and 26', '20 and 24', '24 and 30', '21 and 25'], 'The sequence adds 4 each time: 18 + 4 = 22, then 26.'),
      q('Which rule describes 2, 6, 18, 54, …?', ['Multiply by 3', 'Add 3', 'Multiply by 2', 'Add 4'], 'Each term is three times the previous term.'),
      q('The rule is 4n + 1. What is the 5th term?', ['21', '20', '25', '16'], 'Substitute n = 5: 4 × 5 + 1 = 21.'),
      q('A sequence has first term 7 and common difference 5. What is its fourth term?', ['22', '17', '27', '20'], 'The terms are 7, 12, 17 and 22.'),
      q('Why is a term-number table useful?', ['It shows how each term number relates to its value', 'It changes every sequence into multiplication', 'It removes the need for a rule', 'It always starts at zero'], 'A table organises term numbers and values so the pattern is easier to describe.')
    ]
  },
  {
    id: 'gh-jhs2-algebra-expressions-formulae',
    arc: 1, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra',
    hue: 318, horns: 2, eyes: 2,
    title: 'The Formula Workshop',
    topic: 'Form algebraic expressions from words, simplify like terms and evaluate expressions or formulae by substitution.',
    demon: 'The Symbol Mixer',
    tech: 'Algebra Form · Eighth Technique: Translate and Evaluate',
    scenes: [
      lesson('<p>Letters can represent numbers. If one exercise book costs x cedis, then 4 books cost 4x cedis. If a delivery fee of 5 cedis is added, the total is 4x + 5.</p>'),
      lesson('<p>Like terms have the same variable part. For example, 3a + 2a = 5a because there are five groups of a. But 3a + 2b cannot be combined into 5ab: the variables are different.</p>'),
      lesson('<p>Substitution means replacing a letter with its value. If a = 4, then 3a + 2 = 3 × 4 + 2 = 14. Follow the order of operations and calculate multiplication before addition.</p>'),
      lesson('<p>Formulae describe relationships. The perimeter of a rectangle is P = 2l + 2w. If its length is 8 cm and width is 3 cm, P = 2 × 8 + 2 × 3 = 22 cm. Include the correct unit in your answer.</p>'),
      { who: 'd', vis: 'demon', text: 'The symbols are tangled. Translate each situation, collect like terms and calculate the correct value!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A pen costs x cedis. What is the cost of 5 pens?', ['5x', 'x + 5', 'x − 5', '5 + x'], 'Five equal pens cost 5 multiplied by x, written 5x.'),
      q('Simplify 4m + 3m.', ['7m', '12m', '7m²', 'm'], 'Both terms are like terms, so add the coefficients: 4 + 3 = 7.'),
      q('Evaluate 2p + 5 when p = 6.', ['17', '22', '12', '11'], 'Substitute 6: 2 × 6 + 5 = 17.'),
      q('Which expression means “7 less than a number y”?', ['y − 7', '7 − y', '7y', 'y + 7'], 'Less than reverses the order: subtract 7 from y.'),
      q('A rectangle has length 9 cm and width 4 cm. What is its perimeter?', ['26 cm', '13 cm', '36 cm', '18 cm'], 'P = 2l + 2w = 2 × 9 + 2 × 4 = 26 cm.')
    ]
  },
  {
    id: 'gh-jhs2-algebra-equations-inequalities',
    arc: 2, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra',
    hue: 24, horns: 2, eyes: 2,
    title: 'The Balance and Boundary Trial',
    topic: 'Solve simple linear equations with inverse operations and interpret one-step inequalities in practical situations.',
    demon: 'The Balance Breaker',
    tech: 'Algebra Form · Ninth Technique: Keep Both Sides True',
    scenes: [
      lesson('<p>An equation states that two expressions have equal values. To solve x + 8 = 19, subtract 8 from both sides: x = 11. Doing the same operation to both sides keeps the equation balanced.</p>'),
      lesson('<p>Inverse operations undo each other. Addition is undone by subtraction, and multiplication is undone by division. For 5x = 35, divide both sides by 5 to get x = 7. Check by substituting 7 into the original equation.</p>'),
      lesson('<p>An inequality compares values that are not necessarily equal. The symbol &lt; means less than and &gt; means greater than. If a learner needs at least 12 points, the score s must satisfy s ≥ 12.</p>'),
      lesson('<p>Solve x − 3 &lt; 8 by adding 3 to both sides: x &lt; 11. This means every value below 11 is a solution. When you multiply or divide an inequality by a negative number, reverse the inequality sign.</p>'),
      { who: 'd', vis: 'demon', text: 'The balance is broken and the boundary is hidden. Solve the equation and identify every value that satisfies the inequality!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Solve x + 9 = 16.', ['7', '25', '9', '6'], 'Subtract 9 from both sides: x = 16 − 9 = 7.'),
      q('Solve 4y = 28.', ['7', '24', '32', '112'], 'Divide both sides by 4: y = 28 ÷ 4 = 7.'),
      q('Which symbol means “at least 10”?', ['≥', '≤', '<', '='], 'At least 10 includes 10 and every number greater than 10.'),
      q('Solve n − 5 < 12.', ['n < 17', 'n < 7', 'n > 17', 'n = 17'], 'Add 5 to both sides: n < 17.'),
      q('What should you do to both sides of 3x = 24 to isolate x?', ['Divide by 3', 'Add 3', 'Subtract 3', 'Multiply by 3'], 'Division is the inverse of multiplication, so divide both sides by 3.')
    ]
  }
];
