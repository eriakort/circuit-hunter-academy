import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_PROPORTIONAL_ARCS: ArcInfo[] = [
  {
    n: 14,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Fractions: Operations and Inverses',
    pages: 'NaCCA SHS 1 · pp. 44–46'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_PROPORTIONAL_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-fraction-operations',
    arc: 0,
    sec: 'Number',
    pages: 'NaCCA SHS 1 · pp. 44–46',
    hue: 190,
    horns: 2,
    eyes: 2,
    title: 'The Fraction Foundry',
    topic: 'Connect fractions and decimals, calculate with rational numbers, use additive and multiplicative inverses, and round results appropriately.',
    demon: 'The Denominator Devourer',
    tech: 'Proportion Form · Sixteenth Technique: Fraction Mastery',
    scenes: [
      lesson('<p><b>Fractions and decimals are two ways to describe the same amount.</b> Divide the numerator by the denominator: 3/4 = 3 ÷ 4 = 0.75. To change a decimal into a fraction, write it over a place-value denominator and simplify: 0.36 = 36/100 = 9/25. A recurring decimal such as 0.2727… is 27/99 = 3/11.</p>'),
      lesson('<p><b>Adding and subtracting fractions:</b> use a common denominator before combining numerators. For example, 2/3 + 1/4 = 8/12 + 3/12 = 11/12. For subtraction, 5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2. Keep the denominator the same while adding or subtracting equal-sized parts.</p>'),
      lesson('<p><b>Multiplication and division:</b> multiply numerators together and denominators together: 2/3 × 3/5 = 6/15 = 2/5. To divide by a non-zero fraction, multiply by its reciprocal: 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8. Simplify your final answer where possible.</p>'),
      lesson('<p><b>Inverses:</b> the additive inverse of 3/7 is −3/7 because their sum is zero. The multiplicative inverse (reciprocal) of 3/7 is 7/3 because their product is one. A non-zero fraction a/b has reciprocal b/a. Zero has no multiplicative inverse. These are different ideas: do not confuse changing the sign with swapping numerator and denominator.</p>'),
      lesson('<p><b>Powers of rational numbers:</b> a positive rational number raised to a whole-number power is multiplied by itself that many times. For example, (2/3)² = (2/3) × (2/3) = 4/9, and (1/2)³ = 1/8. Apply the power to both numerator and denominator.</p>'),
      lesson('<p><b>Rounding and significant figures:</b> decimal places count digits after the decimal point; significant figures begin at the first non-zero digit. For example, 7.386 rounded to two decimal places is 7.39. Rounded to three significant figures it is also 7.39. But 0.004786 to two significant figures is 0.0048. Estimate first and keep enough accuracy for the problem.</p>'),
      lesson('<p><b>Worked Ghanaian example:</b> A class shares 3/4 of a bag of rice equally among 3 groups. Each group receives 3/4 ÷ 3 = 3/4 × 1/3 = 1/4 of the original bag. If a water container is 2/5 full and another 1/10 is added, it becomes 2/5 + 1/10 = 4/10 + 1/10 = 1/2 full.</p>'),
      lesson('<p><b>Check your reasoning:</b> multiplication by a number greater than one increases a positive amount; multiplication by a proper fraction makes it smaller. Division by a proper fraction makes a positive amount larger. Use these facts to spot answers that cannot be sensible.</p>'),
      { who: 'd', vis: 'demon', text: 'I will scramble your denominators, hide your reciprocals and round your answers the wrong way. Use each fraction rule carefully!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What is 2/3 + 1/4?', ['11/12', '3/7', '3/12', '1/2'], 'Use denominator 12: 8/12 + 3/12 = 11/12.'),
      question('What is the multiplicative inverse of 5/8?', ['8/5', '−5/8', '−8/5', '5/8'], 'Swap the numerator and denominator: (5/8) × (8/5) = 1.'),
      question('Calculate 3/4 ÷ 2/5.', ['15/8', '6/20', '5/6', '8/15'], 'Divide by a fraction by multiplying by its reciprocal: 3/4 × 5/2 = 15/8.'),
      question('Round 0.004786 to two significant figures.', ['0.0048', '0.0047', '0.0050', '0.00479'], 'The first two significant digits are 4 and 7; the next digit is 8, so round 7 up to 8.')
    ]
  }
];
