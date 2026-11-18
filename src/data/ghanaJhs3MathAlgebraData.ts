import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 3 Mathematics · Algebra strand. */
export const GHANA_JHS3_ALGEBRA_UNIT: UnitInfo = {
  title: 'Algebraic Reasoning and Relationships',
  ch: 'JHS 3 · NaCCA Algebra strand',
  subject: 'ghjhs3math'
};

export const GHANA_JHS3_ALGEBRA_ARCS: ArcInfo[] = [
  { n: 4, unit: 0, subject: 'ghjhs3math', title: 'Expanding, Factorising and Simplifying', pages: 'NaCCA CCP · JHS Mathematics · Algebra' },
  { n: 5, unit: 0, subject: 'ghjhs3math', title: 'Equations and Formulae', pages: 'NaCCA CCP · JHS Mathematics · Algebra' },
  { n: 6, unit: 0, subject: 'ghjhs3math', title: 'Linear Relationships and Simultaneous Equations', pages: 'NaCCA CCP · JHS Mathematics · Algebra' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-algebra', text });

export const GHANA_JHS3_ALGEBRA_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-algebra-expressions',
    arc: 0, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra', hue: 278, horns: 2, eyes: 2,
    title: 'The Expression Forge',
    topic: 'Expand brackets, collect like terms and factorise simple algebraic expressions using common factors.',
    demon: 'The Bracket Breaker', tech: 'Algebra Form · Fifteenth Technique: Expand and Restore',
    scenes: [
      lesson('<p>Algebra uses letters to represent numbers. When expanding a bracket, multiply the term outside by every term inside: 3(x + 4) = 3x + 12. Do not multiply only the first term.</p>'),
      lesson('<p>Collect <b>like terms</b> by adding or subtracting their coefficients. For example, 5a + 3 − 2a + 4 = 3a + 7. The a-terms combine with a-terms, and constants combine with constants.</p>'),
      lesson('<p>Factorising reverses expansion. Find a common factor in every term: 6x + 12 = 6(x + 2). Check by expanding the bracket again. The result should match the original expression.</p>'),
      lesson('<p>For two brackets, multiply each term in the first bracket by each term in the second. For example, (x + 2)(x + 3) = x² + 5x + 6. Organise like terms carefully after multiplying.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden terms inside brackets and scattered common factors. Expand, simplify and reverse the spell!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Expand 4(x + 3).', ['4x + 12', '4x + 3', 'x + 12', '7x'], 'Multiply 4 by both terms: 4 × x + 4 × 3 = 4x + 12.'),
      q('Simplify 7a + 5 − 3a + 2.', ['4a + 7', '10a + 7', '4a + 3', 'a + 7'], 'Combine like terms: 7a − 3a = 4a and 5 + 2 = 7.'),
      q('Factorise 8y + 20.', ['4(2y + 5)', '2(8y + 10)', '4(2y + 20)', '8(y + 20)'], 'The highest common factor is 4, so 8y + 20 = 4(2y + 5).'),
      q('Expand 2(3m − 4).', ['6m − 8', '6m − 4', '5m − 8', '6m + 8'], 'Multiply 2 by 3m and by −4 to get 6m − 8.'),
      q('Expand (x + 1)(x + 4).', ['x² + 5x + 4', 'x² + 4x + 1', 'x² + 5', '2x + 5'], 'Multiply each pair: x² + 4x + x + 4, then collect to get x² + 5x + 4.')
    ]
  },
  {
    id: 'gh-jhs3-algebra-equations-formulae',
    arc: 1, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra', hue: 315, horns: 2, eyes: 2,
    title: 'The Equation Architect',
    topic: 'Solve multi-step linear equations, work with equations containing brackets and fractions, and rearrange simple formulae.',
    demon: 'The Unknown Unraveller', tech: 'Algebra Form · Sixteenth Technique: Isolate the Unknown',
    scenes: [
      lesson('<p>To solve an equation, keep both sides balanced. For 3x + 5 = 20, subtract 5 from both sides to get 3x = 15, then divide by 3: x = 5. Check by substituting 5 into the original equation.</p>'),
      lesson('<p>When an equation contains brackets, expand them first or use inverse operations carefully. For 2(x + 3) = 18, divide both sides by 2: x + 3 = 9, then subtract 3 to get x = 6.</p>'),
      lesson('<p>Fractions can be cleared by multiplying every term on both sides by the denominator. If x/4 + 2 = 5, subtract 2 to get x/4 = 3, then multiply by 4: x = 12.</p>'),
      lesson('<p>A formula describes a relationship. To make a different letter the subject, use inverse operations. From v = u + at, subtract u from both sides to make a the subject: a = (v − u)/t, provided t is not zero.</p>'),
      { who: 'd', vis: 'demon', text: 'The unknown is trapped behind brackets and fractions. Use balanced steps and reveal the value!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Solve 4x + 7 = 31.', ['6', '8', '9', '10'], 'Subtract 7 to get 4x = 24, then divide by 4: x = 6.'),
      q('Solve 3(y − 2) = 15.', ['7', '5', '9', '3'], 'Divide by 3: y − 2 = 5. Add 2 to get y = 7.'),
      q('Solve x/5 + 3 = 7.', ['20', '10', '2', '35'], 'Subtract 3: x/5 = 4. Multiply by 5: x = 20.'),
      q('If P = 2l + 2w, which expression makes l the subject?', ['l = (P − 2w)/2', 'l = P − 2w', 'l = 2P + 2w', 'l = (P + 2w)/2'], 'Subtract 2w, then divide both sides by 2.'),
      q('Why should you check a solution in the original equation?', ['To confirm both sides are equal', 'To make the variable disappear', 'To change the equation', 'To avoid using inverse operations'], 'Substitution confirms that the proposed value makes the original statement true.')
    ]
  },
  {
    id: 'gh-jhs3-algebra-linear-systems',
    arc: 2, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra', hue: 24, horns: 2, eyes: 2,
    title: 'The Linear Systems Arena',
    topic: 'Represent linear relationships, interpret gradient and intercept, and solve simple simultaneous linear equations.',
    demon: 'The Coordinate Phantom', tech: 'Algebra Form · Seventeenth Technique: Find the Meeting Point',
    scenes: [
      lesson('<p>A linear relationship can be written as y = mx + c. The number m is the gradient: it tells how much y changes when x increases by 1. The number c is the y-intercept, where the line crosses the vertical axis.</p>'),
      lesson('<p>For y = 2x + 1, when x = 0, y = 1; when x = 1, y = 3; and when x = 2, y = 5. Plot these coordinate pairs and join them with a straight line.</p>'),
      lesson('<p>Simultaneous equations describe two conditions that must both be true. The solution is the pair of values that satisfies both equations. You can use substitution: replace one variable using an expression from the other equation.</p>'),
      lesson('<p>For example, if x + y = 10 and x − y = 2, add the equations to eliminate y: 2x = 12, so x = 6. Substitute into x + y = 10 to get y = 4. Check both equations.</p>'),
      { who: 'd', vis: 'demon', text: 'Two lines cross, but I have hidden their meeting point. Use their rules to find the one pair that satisfies both!' },
      { type: 'battle' }
    ],
    quiz: [
      q('In y = 3x + 2, what is the gradient?', ['3', '2', '−3', '5'], 'The coefficient of x is the gradient, so m = 3.'),
      q('In y = 4x − 5, where does the line cross the y-axis?', ['−5', '4', '5', '0'], 'The y-intercept is c, the constant term: −5.'),
      q('If y = 2x + 1, what is y when x = 3?', ['7', '6', '5', '8'], 'Substitute x = 3: y = 2 × 3 + 1 = 7.'),
      q('Solve x + y = 10 and x − y = 2.', ['x = 6, y = 4', 'x = 4, y = 6', 'x = 8, y = 2', 'x = 5, y = 5'], 'Add the equations to get 2x = 12, so x = 6; then y = 4.'),
      q('What does the solution of two simultaneous linear equations represent on a graph?', ['The point where the two lines intersect', 'The y-intercept of the first line only', 'Every point on either line', 'The gradient of both lines'], 'The intersection point lies on both lines, so it satisfies both equations.')
    ]
  }
];
