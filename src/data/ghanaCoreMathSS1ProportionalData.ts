import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_PROPORTIONAL_ARCS: ArcInfo[] = [
  {
    n: 14,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Fractions: Operations and Inverses',
    pages: 'NaCCA SHS 1 · pp. 44–46'
  },
  {
    n: 15,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Percentage Change and Household Finance',
    pages: 'NaCCA SHS 1 · pp. 48–49'
  }
  ,
  {
    id: 'gh-core-ss1-percentage-change-finance',
    arc: 1,
    sec: 'Proportional reasoning',
    pages: 'NaCCA SHS 1 · pp. 48–49',
    hue: 42,
    horns: 2,
    eyes: 2,
    title: 'The Household Budget Guardian',
    topic: 'Analyse percentage increase and decrease in everyday situations and use percentages to make informed household and project-budget decisions.',
    demon: 'The Budget Mirage',
    tech: 'Proportion Form · Seventeenth Technique: Change and Balance',
    scenes: [
      lesson('<p><b>Percentage change compares a change with the original amount.</b> Percentage change = (amount of change ÷ original amount) × 100%. Always identify the starting value first. An increase is positive; a decrease is negative or can be described separately as a percentage decrease.</p>'),
      lesson('<p><b>Worked example — transport fuel:</b> A litre of fuel rises from GH₵9.50 to GH₵13.20. The increase is GH₵13.20 − GH₵9.50 = GH₵3.70. Percentage increase = (3.70 ÷ 9.50) × 100 ≈ 38.95%. Use the original price, GH₵9.50, as the denominator.</p>'),
      lesson('<p><b>Worked example — a later decrease:</b> The price then falls from GH₵13.20 to GH₵12.50. The decrease is GH₵0.70. Percentage decrease = (0.70 ÷ 13.20) × 100 ≈ 5.30%. Notice that the base is now GH₵13.20, the price immediately before the decrease—not the first price.</p>'),
      lesson('<p><b>Household utility bills:</b> A family’s electricity bill rises from GH₵240 to GH₵276. The increase is GH₵36, so the percentage increase is (36 ÷ 240) × 100 = 15%. If a bill decreases from GH₵276 to GH₵248.40, the decrease is GH₵27.60 and the percentage decrease is (27.60 ÷ 276) × 100 = 10%.</p>'),
      lesson('<p><b>Exchange rates:</b> If GH₵1 buys US$0.08 and later buys US$0.075, the amount of dollars received for each cedi has decreased. Percentage decrease = (0.08 − 0.075) ÷ 0.08 × 100 = 6.25%. Keep the units and the direction of comparison clear. Exchange rates can change, so use the rate supplied in the question.</p>'),
      lesson('<p><b>Project and school budgets:</b> A class plans to spend GH₵1,200 on a science project. If materials cost 12% more than expected, the increase is 0.12 × 1,200 = GH₵144, giving a revised budget of GH₵1,344. A school fee of GH₵850 reduced by 4% becomes GH₵850 − GH₵34 = GH₵816.</p>'),
      lesson('<p><b>Shopping decisions:</b> A pair of shoes marked GH₵320 is discounted by 15%. The discount is 0.15 × 320 = GH₵48, so the sale price is GH₵272. If a later price rises from GH₵272 to GH₵300, calculate that percentage increase using GH₵272 as the original amount.</p>'),
      lesson('<p><b>Build a balanced budget:</b> List income first, then essential costs such as food, transport, utilities and school expenses. Add the costs, subtract them from the available amount, and compare the difference with the planned budget. Convert the difference to a percentage when asked how large the overrun or saving is relative to the original budget. Do not count the same expense twice.</p>'),
      lesson('<p><b>Common mistake:</b> Do not divide by the new amount when finding percentage change. The denominator is the original value for that particular change. Also, a 20% increase followed by a 20% decrease does not return to the starting value because the second percentage is calculated from a different base.</p>'),
      { who: 'd', vis: 'demon', text: 'I will swap your starting values, hide your budget overrun and trick you into using the wrong denominator. Protect every cedi with careful reasoning!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A utility bill rises from GH₵240 to GH₵276. What is the percentage increase?', ['15%', '12%', '36%', '10%'], 'The increase is GH₵36. Divide by the original GH₵240: 36 ÷ 240 × 100 = 15%.'),
      question('A price falls from GH₵13.20 to GH₵12.50. What is the percentage decrease to 2 decimal places?', ['5.30%', '5.60%', '0.70%', '4.90%'], 'The decrease is GH₵0.70. Use the original GH₵13.20: 0.70 ÷ 13.20 × 100 ≈ 5.30%.'),
      question('A class budget of GH₵1,200 increases by 12%. What is the new budget?', ['GH₵1,344', 'GH₵1,212', 'GH₵1,320', 'GH₵1,056'], '12% of 1,200 is 144; add it to the original budget: GH₵1,344.'),
      question('A GH₵320 item is discounted by 15%. What is the sale price?', ['GH₵272', 'GH₵305', 'GH₵48', 'GH₵288'], '15% of 320 is 48; 320 − 48 = GH₵272.')
    ]
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
