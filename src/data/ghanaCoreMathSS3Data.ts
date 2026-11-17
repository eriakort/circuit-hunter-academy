import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA SHS 3 Core Mathematics foundation.
 * Curriculum alignment is recorded in ghanaCoreMathSS3Alignment.ts.
 * Uses its own subject/progress namespace, separate from SHS 1 and SHS 2.
 */
export const GHANA_CORE_MATH_SS3_SUBJECT: SubjectInfo = {
  id: 'ghcoremath3',
  name: 'Core Mathematics · SHS 3',
  blurb: 'Ghana NaCCA SHS 3 Core Mathematics: reasoning, algebra, geometry, measurement and the final-year mathematics pathway.',
  meta: 'Ghana NaCCA · SHS 3 · four learning units',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><path d="M60 15 L100 38 L100 82 L60 105 L20 82 L20 38 Z" fill="none" stroke="#ffd166" stroke-width="4"/><path d="M38 62 L53 77 L84 43" fill="none" stroke="#7bdff2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

export const GHANA_CORE_MATH_SS3_UNIT: UnitInfo = {
  title: 'Numbers for Everyday Life · Logical Reasoning and Variation',
  ch: 'SS3 · NaCCA pp. 300–309',
  subject: 'ghcoremath3'
};

export const GHANA_CORE_MATH_SS3_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'ghcoremath3',
    title: 'Logical Reasoning and Variation',
    pages: 'NaCCA SHS 3 · pp. 300–309'
  }
];

const question = (q: string, a: string[], why: string) => ({ q, a, why });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });

export const GHANA_CORE_MATH_SS3_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss3-logical-reasoning',
    arc: 0,
    sec: '3.1.2',
    pages: 'NaCCA SHS 3 · pp. 300–309',
    hue: 48,
    horns: 2,
    eyes: 3,
    title: 'The Logic Pathfinder',
    topic: 'Evaluate statements, use logical connectives and truth tables, and decide whether arguments are valid.',
    demon: 'The Contradiction Keeper',
    tech: 'Reasoning Form · SHS 3 Technique: Truth-Table Sight',
    scenes: [
      lesson('<p><b>Logical reasoning</b> helps us decide whether a conclusion follows from the information we are given. A statement is a declarative sentence that is either true or false. “Accra is the capital of Ghana” is true; “7 is less than 3” is false. A question or command is not a truth-valued statement.</p>'),
      lesson('<p>Statements can be combined with logical connectives. <b>NOT</b> reverses a truth value. <b>AND</b> is true only when both parts are true. <b>OR</b> is true when at least one part is true. “IF p, THEN q” describes an implication: it is false only when p is true and q is false.</p>'),
      lesson('<p>A <b>truth table</b> lists every possible truth-value combination. For p AND q, the result is true only for T AND T. For p OR q, the result is false only for F OR F. Truth tables help us test compound statements without relying on a guess.</p>'),
      lesson('<p><b>Quantifiers</b> describe how widely a statement applies. “All” means every member; “some” means at least one; “none” means not one. A single counterexample can disprove an “all” statement. To establish an argument, check that its conclusion follows logically from its premises.</p>'),
      lesson('<p>Diagrams can help organise logical claims. If all members of set A belong to set B, draw A inside B. If Kofi belongs to B but not A, place him in the part of B outside A. Always distinguish what the premises prove from what they merely suggest.</p>'),
      { type: 'sort', title: 'Match the connective to its rule', cats: [['AND', 'AND'], ['OR', 'OR'], ['NOT', 'NOT'], ['IF…THEN', 'IMPLIES']], items: [
        { n: 'True only when both statements are true', c: 0, i: 'both' },
        { n: 'True when at least one statement is true', c: 1, i: 'either' },
        { n: 'Changes true to false and false to true', c: 2, i: 'opposite' },
        { n: 'False only when the first is true and the second false', c: 3, i: 'conditional' }
      ] },
      { who: 'd', vis: 'demon', text: 'A convincing-sounding argument is not always valid. Show me the evidence!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which sentence is a logical statement?', ['Accra is the capital of Ghana.', 'Please close the door.', 'What time is it?', 'Study harder!'], 'A statement is declarative and has a truth value.'),
      question('When is p AND q true?', ['Only when both p and q are true', 'When either one is true', 'Only when both are false', 'Whenever p is false'], 'Conjunction requires both component statements to be true.'),
      question('When is p OR q false?', ['Only when both p and q are false', 'When both are true', 'When p is true', 'When q is true'], 'Disjunction is true if at least one part is true.'),
      question('What can disprove the claim “All market traders use mobile money”?', ['One trader who does not use mobile money', 'A trader who does use mobile money', 'A market with many traders', 'A second example that supports the claim'], 'One counterexample is enough to disprove a universal “all” claim.'),
      question('An implication “if p, then q” is false in which case?', ['p is true and q is false', 'p is false and q is true', 'Both are true', 'Both are false'], 'An implication fails only when its condition is met but its promised result does not occur.')
    ]
  },
  {
    id: 'gh-core-ss3-variation',
    arc: 0,
    sec: '3.1.2',
    pages: 'NaCCA SHS 3 · pp. 302–308',
    hue: 190,
    horns: 2,
    eyes: 3,
    title: 'The Variation Engineer',
    topic: 'Model direct, inverse, joint and partial variation and use proportional reasoning in everyday situations.',
    demon: 'The Unbalanced Variable',
    tech: 'Proportion Form · SHS 3 Technique: Variation Link',
    scenes: [
      lesson('<p><b>Variation</b> describes how one quantity changes in relation to another. In direct variation, y = kx, where k is a constant. If x doubles, y doubles. For example, at a fixed price per litre, the total cost of fuel varies directly with the number of litres bought.</p>'),
      lesson('<p>Some direct relationships involve a power. If the area A of a circle varies directly as the square of its radius r, then A = kr². For a circle, k = π, so A = πr². Doubling the radius makes the area four times as large.</p>'),
      lesson('<p>In <b>inverse variation</b>, y = k/x. If x doubles, y halves, provided k stays constant. For a fixed journey, average speed and travel time vary inversely: increasing speed reduces the time needed.</p>'),
      lesson('<p>In <b>joint variation</b>, a quantity depends directly on the product of two or more variables, such as z = kxy. In <b>partial variation</b>, one part is fixed and another part varies, such as y = a + bx. A fixed delivery fee plus a charge per kilometre is a useful example.</p>'),
      lesson('<p>To solve a variation problem: identify the relationship, write the correct model, use known values to find k (or the fixed part), then substitute the new values. Check that the answer makes sense in the real situation and state the units.</p>'),
      { type: 'sort', title: 'Identify the variation model', cats: [['Direct', 'Direct'], ['Inverse', 'Inverse'], ['Joint', 'Joint'], ['Partial', 'Partial']], items: [
        { n: 'y = 5x', c: 0, i: 'direct' },
        { n: 'y = 24/x', c: 1, i: 'inverse' },
        { n: 'z = 3xy', c: 2, i: 'joint' },
        { n: 'y = 8 + 2x', c: 3, i: 'partial' }
      ] },
      { who: 'd', vis: 'demon', text: 'Find the constant and reveal how the variables are connected!' },
      { type: 'battle' }
    ],
    quiz: [
      question('If y varies directly as x, which model is correct?', ['y = kx', 'y = k/x', 'y = k + x', 'y = x²/k'], 'Direct variation means the ratio y/x is constant, so y = kx.'),
      question('If y = 30/x, what happens to y when x doubles from 3 to 6?', ['It halves from 10 to 5', 'It doubles from 10 to 20', 'It stays at 10', 'It becomes 30'], 'Inverse variation keeps xy constant: 30/3 = 10 and 30/6 = 5.'),
      question('The area of a circle varies with which power of its radius?', ['The square of the radius', 'The radius to the first power', 'The cube of the radius', 'The reciprocal of the radius'], 'A = πr², so area varies directly as r squared.'),
      question('Which equation represents joint variation in x and y?', ['z = kxy', 'z = k/x', 'z = k + x', 'z = x − y'], 'Joint variation depends directly on the product of the variables.'),
      question('A taxi charges a fixed GH₵8 booking fee plus GH₵3 per kilometre. Which model gives the fare F for d kilometres?', ['F = 8 + 3d', 'F = 8d', 'F = 3/d', 'F = 11d'], 'The fixed fee is 8 and the variable charge is 3d, so F = 8 + 3d.')
    ]
  }
];
