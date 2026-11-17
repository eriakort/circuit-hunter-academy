import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_ALGEBRA_ADVANCED_ARCS: ArcInfo[] = [
  {
    n: 16,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Quadratic Factorisation and Algebraic Fractions',
    pages: 'NaCCA SHS 1 · pp. 57–61'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_ALGEBRA_ADVANCED_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-quadratic-factorisation-algebraic-fractions',
    arc: 15,
    sec: 'Algebraic reasoning',
    pages: 'NaCCA SHS 1 · pp. 57–61',
    hue: 286,
    horns: 2,
    eyes: 2,
    title: 'The Factorisation Forge',
    topic: 'Expand and factorise quadratic trinomials, recognise perfect-square expressions and differences of two squares, and perform operations on simple algebraic fractions while respecting excluded values.',
    demon: 'The Bracket Breaker',
    tech: 'Algebra Form · Nineteenth Technique: Reveal the Hidden Factors',
    scenes: [
      lesson('<p><b>Expansion and factorisation are reverse processes.</b> Expand (x + 3)(x + 4) by multiplying each term: x² + 4x + 3x + 12 = x² + 7x + 12. Factorisation reverses this: x² + 7x + 12 = (x + 3)(x + 4).</p>'),
      lesson('<p><b>Factorise a monic quadratic.</b> For x² + bx + c, find two numbers whose sum is b and whose product is c. For x² + 7x + 12, the numbers are 3 and 4, so the factors are (x + 3)(x + 4). For x² − x − 12, use −4 and 3: (x − 4)(x + 3).</p>'),
      lesson('<p><b>When the coefficient of x² is not 1, split the middle term.</b> Factorise 2x² + 7x + 3. Multiply 2 × 3 = 6; two numbers with product 6 and sum 7 are 6 and 1. Write 2x² + 6x + x + 3, group: 2x(x + 3) + 1(x + 3), then factorise: (2x + 1)(x + 3). Always expand your answer to check it.</p>'),
      lesson('<p><b>Recognise a perfect-square trinomial.</b> The patterns are a² + 2ab + b² = (a + b)² and a² − 2ab + b² = (a − b)². For x² + 10x + 25, the first and last terms are x² and 5², and the middle term is 2 × x × 5. Therefore x² + 10x + 25 = (x + 5)².</p>'),
      lesson('<p><b>Use the difference of two squares.</b> A² − B² = (A + B)(A − B). For x² − 49, write x² − 7² = (x + 7)(x − 7). The expression must be a subtraction of two square terms; x² + 49 does not factorise using this identity over the real numbers.</p>'),
      lesson('<p><b>An algebraic fraction has a variable in its numerator or denominator.</b> Simplify by factorising first and cancelling common factors. For (x² − 9)/(x + 3), factorise the numerator: (x − 3)(x + 3)/(x + 3) = x − 3, but only when x ≠ −3. The original denominator cannot be zero.</p>'),
      lesson('<p><b>Adding and subtracting algebraic fractions.</b> Use a common denominator. For 2/x + 3/x, the denominator is already the same, so the result is 5/x, where x ≠ 0. For 1/x + 1/(x + 1), use x(x + 1): the result is (2x + 1)/(x(x + 1)), where x ≠ 0 and x ≠ −1.</p>'),
      lesson('<p><b>Multiplication and division.</b> Multiply numerators together and denominators together, then simplify. For (2/x) × (x/5), cancel x to get 2/5, with x ≠ 0. To divide by a fraction, multiply by its reciprocal: (3/x) ÷ (2/y) = 3y/(2x), provided x ≠ 0 and y ≠ 0.</p>'),
      lesson('<p><b>When is an algebraic fraction zero or undefined?</b> It is zero when its numerator is zero and its denominator is not zero. It is undefined when its denominator is zero. For (x − 2)/(x + 4), it is zero at x = 2 and undefined at x = −4. State excluded values even after cancelling a common factor: simplifying does not restore values forbidden by the original denominator.</p>'),
      lesson('<p><b>Check your factorisation and restrictions.</b> Expand a product to recover the original polynomial. For algebraic fractions, list values that make any original denominator zero before cancelling. These restrictions remain part of the answer.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the factors, disguised the perfect squares and set traps in the denominators. Find every factor and protect the excluded values!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Factorise x² + 7x + 12.', ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x − 3)(x − 4)', '(x + 1)(x + 12)'], '3 + 4 = 7 and 3 × 4 = 12, so the factors are (x + 3)(x + 4).'),
      question('Which is the factorised form of x² − 25?', ['(x + 5)(x − 5)', '(x − 5)²', '(x + 25)(x − 1)', '(x − 25)(x + 1)'], 'Use the difference of two squares: x² − 5² = (x + 5)(x − 5).'),
      question('Simplify (x² − 9)/(x + 3). Which restriction remains?', ['x − 3, x ≠ −3', 'x − 3, x ≠ 3', 'x + 3, x ≠ 0', 'x² − 3, no restriction'], 'Factorise x² − 9 as (x − 3)(x + 3), cancel x + 3, and retain x ≠ −3.'),
      question('For (x − 2)/(x + 4), when is the fraction zero and when is it undefined?', ['Zero at x = 2; undefined at x = −4', 'Zero at x = −4; undefined at x = 2', 'Zero at x = 4; undefined at x = −2', 'It is never zero or undefined'], 'A fraction is zero when its numerator is zero and denominator non-zero; it is undefined when its denominator is zero.')
    ]
  }
];
