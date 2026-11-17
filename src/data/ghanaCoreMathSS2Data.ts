import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA SHS 2 Core Mathematics — first implementation slice.
 * Curriculum alignment is recorded in ghanaCoreMathSS2Alignment.ts.
 * This is a distinct subject and mission namespace; it never reuses SHS 1 progress.
 */
export const GHANA_CORE_MATH_SS2_SUBJECT: SubjectInfo = {
  id: 'ghcoremath2',
  name: 'Core Mathematics · SHS 2',
  blurb: 'Ghana NaCCA SHS 2 Core Mathematics: number systems, algebraic reasoning and problem-solving.',
  meta: 'Ghana NaCCA · SHS 2 · two learning missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="38" fill="none" stroke="#7bdff2" stroke-width="4"/><path d="M37 76 L54 42 L67 66 L83 42" fill="none" stroke="#ffd166" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

export const GHANA_CORE_MATH_SS2_UNIT: UnitInfo = {
  title: 'Numbers for Everyday Life · Real Number and Numeration System',
  ch: 'SS2 · NaCCA pp. 166–173',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'ghcoremath2',
    title: 'Surds, Indices, Logarithms and Modular Arithmetic',
    pages: 'NaCCA SHS 2 · pp. 166–173'
  }
];

const question = (q: string, a: string[], why: string) => ({ q, a, why });
const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });

export const GHANA_CORE_MATH_SS2_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-surds-indices-modulo',
    arc: 0,
    sec: '2.1.1',
    pages: 'NaCCA SHS 2 · pp. 166–173',
    hue: 190,
    horns: 2,
    eyes: 3,
    title: 'The Number Codebreaker',
    topic: 'Explore surds, laws of indices, logarithms and modular arithmetic.',
    demon: 'The Remainder Wraith',
    tech: 'Number Form · SHS 2 Technique: Pattern Breaker',
    scenes: [
      lesson('<p>Welcome to SHS 2 Core Mathematics. This mission begins the NaCCA strand <b>Numbers for Everyday Life</b>. We will connect four powerful ideas: surds, indices, logarithms and modular arithmetic.</p>'),
      lesson('<p>A <b>surd</b> is an irrational root such as √2. You can simplify √12 by finding a square factor: √12 = √(4 × 3) = 2√3. To rationalise a monomial denominator, multiply the numerator and denominator by the radical needed to make the denominator rational. For example, 1/√5 = √5/5.</p>'),
      lesson('<p><b>Indices</b> are a short way to write repeated multiplication. For the same non-zero base, aᵐ × aⁿ = aᵐ⁺ⁿ and aᵐ ÷ aⁿ = aᵐ⁻ⁿ. A negative index means reciprocal: a⁻ⁿ = 1/aⁿ. A logarithm answers the question: “What power gives this number?” Since 10² = 100, log₁₀(100) = 2.</p>'),
      lesson('<p><b>Modulo arithmetic</b> is arithmetic with remainders. A 12-hour clock is a familiar model: 10 o’clock plus 5 hours is 3 o’clock, because 15 leaves remainder 3 when divided by 12. We write 15 ≡ 3 (mod 12).</p>'),
      { type: 'sort', title: 'Choose the matching idea', cats: [['Surds', 'Surds'], ['Indices', 'Indices'], ['Logarithms', 'Logarithms'], ['Modulo', 'Modulo']], items: [
        { n: '√18 = 3√2', c: 0, i: 'root' },
        { n: '2³ × 2² = 2⁵', c: 1, i: 'power' },
        { n: 'log₁₀(1000) = 3', c: 2, i: 'calculate' },
        { n: '17 ≡ 2 (mod 5)', c: 3, i: 'clock' }
      ] },
      { who: 'd', vis: 'demon', text: 'I have scrambled the number patterns. Can you decode them?' },
      { type: 'battle' }
    ],
    quiz: [
      question('Simplify √20.', ['2√5', '4√5', '5√2', '10√2'], '√20 = √(4 × 5) = 2√5.'),
      question('Evaluate 3² × 3³.', ['3⁵', '3⁶', '3¹', '9⁵'], 'When multiplying powers with the same base, add the indices: 2 + 3 = 5.'),
      question('What is log₁₀(100)?', ['2', '10', '20', '100'], '10² = 100, so log₁₀(100) = 2.'),
      question('What is 23 modulo 6?', ['5', '3', '6', '4'], '23 = 6 × 3 + 5, so the remainder is 5.'),
      question('Rationalise 1/√3.', ['√3/3', '3/√3', '1/3', '√3'], 'Multiply top and bottom by √3: √3/3.')
    ]
  }
];


// ---------------------------------------------------------------------------
// Strand 2 · Algebraic Reasoning · Sub-strand 1
// Applications of Expressions, Equations and Inequalities (NaCCA pp. 193–198)
// ---------------------------------------------------------------------------
export const GHANA_CORE_MATH_SS2_ALGEBRA_UNIT: UnitInfo = {
  title: 'Algebraic Reasoning · Simultaneous Linear Equations',
  ch: 'SS2 · NaCCA pp. 193–198',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_ALGEBRA_ARCS: ArcInfo[] = [
  {
    n: 2,
    unit: 0,
    subject: 'ghcoremath2',
    title: 'Applications of Expressions, Equations and Inequalities',
    pages: 'NaCCA SHS 2 · pp. 193–198'
  }
];

export const GHANA_CORE_MATH_SS2_ALGEBRA_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-simultaneous-equations',
    arc: 0,
    sec: '2.2.1',
    pages: 'NaCCA SHS 2 · pp. 193–198',
    hue: 32,
    horns: 2,
    eyes: 3,
    title: 'The Intersection Strategist',
    topic: 'Solve simultaneous linear equations graphically, by substitution and elimination, and model everyday problems.',
    demon: 'The Double-Variable Phantom',
    tech: 'Algebra Form · SHS 2 Technique: Two-Equation Lock',
    scenes: [
      lesson('<p>Sometimes one equation is not enough to solve a problem. If two unknown quantities are connected by two facts, we can write <b>two equations</b> and solve them together. The pair is called simultaneous equations because the same values must make both equations true.</p>'),
      lesson('<p><b>Graphical method:</b> draw both equations as straight lines. The solution is the point where the lines intersect. For y = x + 1 and y = −x + 5, the lines meet at (2, 3). Check: 3 = 2 + 1 and 3 = −2 + 5.</p>'),
      lesson('<p><b>Substitution:</b> rearrange one equation to make one variable the subject, then replace that variable in the other equation. For x + y = 7 and x − y = 1, write x = 7 − y. Substitute: (7 − y) − y = 1, so y = 3 and x = 4.</p>'),
      lesson('<p><b>Elimination:</b> add or subtract the equations so one variable disappears. For 2x + y = 11 and x − y = 1, add the equations: 3x = 12, so x = 4. Substitute into x − y = 1 to get y = 3.</p>'),
      lesson('<p><b>Word problems:</b> define each unknown before writing equations. Two adult tickets and one child ticket cost GH₵26; one adult ticket and two child tickets cost GH₵22. If a is the adult price and c is the child price, then 2a + c = 26 and a + 2c = 22. Solving gives a = GH₵10 and c = GH₵6.</p>'),
      { type: 'sort', title: 'Choose the right solving strategy', cats: [['Graphical', 'Graphical'], ['Substitution', 'Substitution'], ['Elimination', 'Elimination'], ['Modelling', 'Word problem']], items: [
        { n: 'Find where two straight lines cross', c: 0, i: 'intersection' },
        { n: 'Replace x with 7 − y', c: 1, i: 'replace' },
        { n: 'Add equations to cancel y', c: 2, i: 'cancel' },
        { n: 'Turn ticket prices into two equations', c: 3, i: 'story' }
      ] },
      { who: 'd', vis: 'demon', text: 'Two unknowns, two equations! Can you find the one pair that satisfies both?' },
      { type: 'battle' }
    ],
    quiz: [
      question('What represents the solution on a graph of two simultaneous linear equations?', ['The point where the lines intersect', 'The y-intercept of the first line only', 'Any point on either line', 'The gradient of the second line'], 'The intersection is the point that lies on both lines, so it satisfies both equations.'),
      question('Solve x + y = 7 and x − y = 1.', ['x = 4, y = 3', 'x = 3, y = 4', 'x = 5, y = 2', 'x = 2, y = 5'], 'Add the equations to get 2x = 8, so x = 4. Then y = 3.'),
      question('Which step is elimination?', ['Add 2x + y = 11 and x − y = 1 to cancel y', 'Replace x with 7 − y', 'Draw both equations on axes', 'Choose values without checking'], 'The y terms are opposites, so adding the equations removes y.'),
      question('Two adult tickets and one child ticket cost GH₵26. One adult and two children cost GH₵22. What is the adult ticket price?', ['GH₵10', 'GH₵6', 'GH₵12', 'GH₵8'], 'The equations are 2a + c = 26 and a + 2c = 22. Solving gives a = 10 and c = 6.'),
      question('Why should you check a solution in both original equations?', ['To confirm the same values satisfy both conditions', 'To make the numbers larger', 'To change the variables', 'To avoid showing working'], 'A simultaneous solution must make both original equations true.')
    ]
  }
];
