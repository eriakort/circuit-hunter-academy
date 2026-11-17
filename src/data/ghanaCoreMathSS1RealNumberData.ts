import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_REAL_NUMBER_ARCS: ArcInfo[] = [
  {
    n: 13,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Real Numbers: Operations and Properties',
    pages: 'NaCCA SHS 1 · pp. 31–33'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_REAL_NUMBER_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-real-number-properties',
    arc: 0,
    sec: 'Number',
    pages: 'NaCCA SHS 1 · pp. 31–33',
    hue: 35,
    horns: 2,
    eyes: 2,
    title: 'The Closure Forge',
    topic: 'Use closure to investigate operations on subsets of real numbers and apply commutative, associative, distributive, identity and inverse properties.',
    demon: 'The Rule Breaker',
    tech: 'Number Form · Fifteenth Technique: The Closure Test',
    scenes: [
      lesson('<p>In mathematics, a set is <b>closed</b> under an operation when performing that operation on any two members of the set always gives another member of the same set. For example, whole numbers are closed under addition: 4 + 7 = 11, which is still a whole number. But whole numbers are not closed under subtraction: 4 − 7 = −3, which is not a whole number.</p>'),
      lesson('<p>Test the familiar number families. Integers are closed under addition, subtraction and multiplication, but not division (3 ÷ 2 is not an integer). Rational numbers are closed under addition, subtraction and multiplication, and division by a non-zero rational number. Real numbers have the same closure for these four operations, provided division is not by zero. Always state the operation and the set you are testing.</p>'),
      lesson('<p><b>Rational and irrational numbers:</b> rational numbers can be written as a/b where a and b are integers and b ≠ 0. Their decimals terminate or recur. Irrational numbers cannot be written in this form; their decimals continue without repeating. Both are real numbers. For example, √2 is irrational, while √9 = 3 is rational. Do not assume every square root is irrational.</p>'),
      lesson('<p><b>Commutative property:</b> changing the order does not change the result for addition and multiplication: a + b = b + a and ab = ba. Subtraction and division are not commutative: 8 − 3 is not 3 − 8. <b>Associative property:</b> changing the grouping does not change the result for addition and multiplication: (a + b) + c = a + (b + c). Subtraction and division are not associative.</p>'),
      lesson('<p><b>Identity elements:</b> zero is the additive identity because a + 0 = a; one is the multiplicative identity because a × 1 = a. <b>Inverses:</b> the additive inverse of a is −a, because a + (−a) = 0. For a non-zero a, its multiplicative inverse is 1/a, because a × 1/a = 1. Zero has no multiplicative inverse.</p>'),
      lesson('<p><b>Distributive property:</b> multiplication distributes over addition and subtraction: a(b + c) = ab + ac and a(b − c) = ab − ac. Example: 6(20 + 3) = 6 × 20 + 6 × 3 = 120 + 18 = 138. This is useful for mental arithmetic, simplifying expressions and checking calculations.</p>'),
      lesson('<p><b>Worked investigation:</b> Is the set of integers closed under division? Try 12 ÷ 3 = 4, which is an integer, but 5 ÷ 2 = 2.5, which is not an integer. One counterexample is enough to show that the set is not closed under division. For rational numbers, division by zero is still undefined, so the non-zero condition matters.</p>'),
      lesson('<p><b>Ghanaian application:</b> A school club buys exercise books in whole-number quantities. Adding or multiplying the number of books keeps the result a whole number. But sharing 7 books equally among 2 groups gives 3.5 books per group, so the whole numbers are not closed under division. Explain the set and operation each time; a single example does not prove closure, but a counterexample can disprove it.</p>'),
      { who: 'd', vis: 'demon', text: 'I will trick you into assuming every operation keeps you inside the same number set. Test each rule carefully!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which statement correctly describes closure of the whole numbers?', [
        'They are closed under addition but not subtraction.',
        'They are closed under subtraction but not addition.',
        'They are closed under division by every whole number.',
        'They are not closed under addition.'
      ], 'Adding two whole numbers always gives a whole number, but 4 − 7 = −3 is not a whole number.'),
      question('Which set is closed under division by a non-zero member?', [
        'Rational numbers',
        'Natural numbers',
        'Integers',
        'Odd whole numbers'
      ], 'The quotient of two rational numbers is rational when the divisor is not zero.'),
      question('Which property is shown by 5(2 + 3) = 5×2 + 5×3?', [
        'Distributive',
        'Commutative',
        'Associative',
        'Multiplicative identity'
      ], 'The factor 5 is distributed to each term inside the brackets.'),
      question('What is the multiplicative inverse of −4?', [
        '−1/4',
        '1/4',
        '4',
        '−4'
      ], 'A number multiplied by its inverse gives 1: (−4) × (−1/4) = 1.')
    ]
  }
];
