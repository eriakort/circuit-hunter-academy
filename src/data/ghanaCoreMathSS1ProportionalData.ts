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
  },
  {
    n: 16, unit: 0, subject: 'ghcoremath', title: 'Compound Interest and Tax', pages: 'NaCCA SHS 1 · p. 50'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });
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
  ,
  {
    id: 'gh-core-ss1-percentage-change-finance',
    arc: 1,
    sec: 'Proportional reasoning',
    pages: 'NaCCA SHS 1 · pp. 48–49',
    hue: 42, horns: 2, eyes: 2,
    title: 'The Household Budget Guardian',
    topic: 'Analyse percentage increase and decrease in everyday situations and use percentages to make informed household and project-budget decisions.',
    demon: 'The Budget Mirage',
    tech: 'Proportion Form · Seventeenth Technique: Change and Balance',
    scenes: [
      lesson('<p><b>Percentage change compares a change with the original amount.</b> Percentage change = (amount of change ÷ original amount) × 100%. Always identify the starting value first.</p>'),
      lesson('<p><b>Fuel price increase:</b> A litre rises from GH₵9.50 to GH₵13.20. The increase is GH₵3.70. Percentage increase = (3.70 ÷ 9.50) × 100 ≈ 38.95%. Use the original price as the denominator.</p>'),
      lesson('<p><b>Later decrease:</b> The price falls from GH₵13.20 to GH₵12.50. Percentage decrease = (0.70 ÷ 13.20) × 100 ≈ 5.30%. The base is now GH₵13.20, the value immediately before the decrease.</p>'),
      lesson('<p><b>Utility bills:</b> A family’s electricity bill rises from GH₵240 to GH₵276. The increase is GH₵36, so (36 ÷ 240) × 100 = 15%. If it falls from GH₵276 to GH₵248.40, the decrease is 10% of GH₵276.</p>'),
      lesson('<p><b>Exchange rates:</b> If GH₵1 buys US$0.08 and later buys US$0.075, the dollar amount per cedi decreases by (0.005 ÷ 0.08) × 100 = 6.25%. Keep units and direction clear; use the rate supplied in the question.</p>'),
      lesson('<p><b>Project and school budgets:</b> A class plans GH₵1,200 for a science project. Materials cost 12% more, an increase of GH₵144, so the revised budget is GH₵1,344. A school fee of GH₵850 reduced by 4% becomes GH₵816.</p>'),
      lesson('<p><b>Shopping:</b> Shoes marked GH₵320 are discounted by 15%. The discount is GH₵48, so the sale price is GH₵272. A later increase from GH₵272 to GH₵300 must use GH₵272 as its original amount.</p>'),
      lesson('<p><b>Build a balanced budget:</b> List income, then essential costs such as food, transport, utilities and school expenses. Add the costs and subtract them from the available amount. Compare the result with the planned budget and express any overrun or saving as a percentage of the original budget.</p>'),
      lesson('<p><b>Common mistake:</b> Do not divide by the new amount when finding percentage change. A 20% increase followed by a 20% decrease does not return to the starting value because the second percentage uses a different base.</p>'),
      { who: 'd', vis: 'demon', text: 'I will swap your starting values and hide your budget overrun. Protect every cedi with careful reasoning!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A utility bill rises from GH₵240 to GH₵276. What is the percentage increase?', ['15%', '12%', '36%', '10%'], '36 ÷ 240 × 100 = 15%.'),
      question('A price falls from GH₵13.20 to GH₵12.50. What is the percentage decrease to 2 decimal places?', ['5.30%', '5.60%', '0.70%', '4.90%'], '0.70 ÷ 13.20 × 100 ≈ 5.30%.'),
      question('A class budget of GH₵1,200 increases by 12%. What is the new budget?', ['GH₵1,344', 'GH₵1,212', 'GH₵1,320', 'GH₵1,056'], '12% of 1,200 is 144; the new budget is GH₵1,344.'),
      question('A GH₵320 item is discounted by 15%. What is the sale price?', ['GH₵272', 'GH₵305', 'GH₵48', 'GH₵288'], '15% of 320 is 48; 320 − 48 = GH₵272.')
    ]
  }

  ,
  {
    id: 'gh-core-ss1-compound-interest-tax',
    arc: 2,
    sec: 'Proportional reasoning',
    pages: 'NaCCA SHS 1 · p. 50',
    hue: 48, horns: 2, eyes: 2,
    title: 'The Compound Growth and Tax Forge',
    topic: 'Calculate compound interest and percentage growth, and solve tax-inclusive and tax-exclusive price problems using a stated tax rate.',
    demon: 'The Hidden Rate Collector',
    tech: 'Proportion Form · Eighteenth Technique: Growth and Fair Value',
    scenes: [
      lesson('<p><b>Simple and compound interest are different.</b> Simple interest is calculated on the original principal each period. Compound interest is calculated on the new balance, so interest can earn interest. Always identify the principal, rate, time and compounding period.</p>'),
      lesson('<p><b>Annual compound interest:</b> when interest is compounded once each year, use A = P(1 + r)ⁿ, where P is the starting principal, r is the annual rate as a decimal, and n is the number of years. Compound interest earned is A − P. The rate and time must use matching periods.</p>'),
      lesson('<p><b>Worked example:</b> GH₵2,000 is saved at 5% compound interest per year for 2 years. A = 2,000 × (1.05)² = GH₵2,205. Interest earned = 2,205 − 2,000 = GH₵205. After year one the balance is GH₵2,100; year two interest is calculated on GH₵2,100, not just the original GH₵2,000.</p>'),
      lesson('<p><b>Compare with simple interest:</b> on the same GH₵2,000 at 5% for 2 years, simple interest is 2,000 × 0.05 × 2 = GH₵200. The compound amount is GH₵2,205, while the simple-interest amount is GH₵2,200. The difference comes from interest earned on the first year’s interest.</p>'),
      lesson('<p><b>Tax as a percentage:</b> a tax amount is calculated from a stated taxable price using the rate supplied in the problem. Tax = rate × taxable price. For example, if a product costs GH₵500 before tax and the exercise gives a tax rate of 10%, tax is GH₵50 and the total is GH₵550.</p>'),
      lesson('<p><b>Tax-inclusive prices:</b> if the displayed total already includes a 10% tax, do not add another 10%. The total represents 110% of the pre-tax price. Pre-tax price = total ÷ 1.10. For a tax-inclusive total of GH₵550, the pre-tax price is GH₵500 and the included tax is GH₵50.</p>'),
      lesson('<p><b>Real-life decisions:</b> compare savings options by calculating the final amount for the same starting principal and time. Compare purchases using the pre-tax price, stated tax rate and final total. Tax rates and rules can change, so use the rate given in the question rather than assuming a current statutory rate.</p>'),
      lesson('<p><b>Check your answer:</b> a positive compound rate should increase the balance. A tax-inclusive total should be greater than the pre-tax price when the tax rate is positive. Keep money to two decimal places when appropriate, but do not round intermediate steps too early.</p>'),
      { who: 'd', vis: 'demon', text: 'I will make interest grow on the wrong balance and add tax twice. Track the base amount and defeat my hidden calculations!' },
      { type: 'battle' }
    ],
    quiz: [
      question('GH₵1,000 is invested at 10% compound interest annually for 2 years. What is the final amount?', ['GH₵1,210', 'GH₵1,200', 'GH₵1,100', 'GH₵1,020'], 'A = 1,000 × 1.1² = GH₵1,210.'),
      question('What compound interest is earned on GH₵2,000 at 5% annually for 2 years?', ['GH₵205', 'GH₵200', 'GH₵210', 'GH₵2,205'], 'The amount is GH₵2,205, so interest earned is 2,205 − 2,000 = GH₵205.'),
      question('A product costs GH₵500 before tax. The exercise gives a tax rate of 10%. What is the total price?', ['GH₵550', 'GH₵510', 'GH₵500', 'GH₵600'], 'Tax is 10% × 500 = GH₵50. Total = GH₵550.'),
      question('A tax-inclusive total is GH₵550 and includes 10% tax. What was the pre-tax price?', ['GH₵500', 'GH₵495', 'GH₵540', 'GH₵605'], 'The total is 110% of the pre-tax price, so 550 ÷ 1.10 = GH₵500.')
    ]
  }

];
