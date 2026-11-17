import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_PROPORTIONAL_MASTERY_ARCS: ArcInfo[] = [
  {
    n: 18,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Proportional Reasoning: Integrated Mastery',
    pages: 'NaCCA SHS 1 · pp. 41–50'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_PROPORTIONAL_MASTERY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-proportional-reasoning-mastery',
    arc: 24,
    sec: 'Proportional reasoning',
    pages: 'NaCCA SHS 1 · pp. 41–50',
    hue: 36,
    horns: 2,
    eyes: 2,
    title: 'The Proportional Reasoning Mastery Expedition',
    topic: 'Connect fractions, decimals and percentages; calculate with fractions and inverses; and use percentage reasoning to make informed household and small-business financial decisions.',
    demon: 'The Percentage Mirage',
    tech: 'Proportion Form · Twenty-First Technique: The Hundredfold Ledger',
    scenes: [
      lesson('<p><b>One quantity can have several equivalent forms.</b> A fraction, a decimal and a percentage can describe the same amount. For example, 3/8 = 0.375 = 37.5%. Choose the form that makes a problem easiest, but keep the value unchanged when you convert it.</p>'),
      lesson('<p><b>Convert fractions and decimals.</b> Divide the numerator by the denominator to change a fraction into a decimal: 3/8 = 3 ÷ 8 = 0.375. To change a terminating decimal into a fraction, use place value and simplify: 0.36 = 36/100 = 9/25. A recurring decimal such as 0.272727… is 3/11.</p>'),
      lesson('<p><b>Connect every form to percentages.</b> Multiply a decimal by 100 to get a percentage: 0.375 = 37.5%. Divide a percentage by 100 to get a decimal: 12.5% = 0.125 = 1/8. A mixed number can represent more than 100%: 3 1/4 = 3.25 = 325%. Check whether the result should be less than, equal to or greater than 100%.</p>'),
      lesson('<p><b>Calculate with fractions.</b> Use a common denominator for addition and subtraction. For example, 2/3 + 1/4 = 8/12 + 3/12 = 11/12. Multiply numerators and denominators for multiplication. To divide by a non-zero fraction, multiply by its reciprocal. Simplify the final answer.</p>'),
      lesson('<p><b>Understand the two inverses.</b> The additive inverse of 5/8 is −5/8 because their sum is zero. The multiplicative inverse of 5/8 is 8/5 because their product is one. These are different operations. Zero has an additive inverse, but it has no multiplicative inverse.</p>'),
      lesson('<p><b>Round only as accurately as the problem requires.</b> Decimal places count digits after the decimal point. Significant figures start at the first non-zero digit. For example, 7.386 to two decimal places is 7.39, while 0.004786 to two significant figures is 0.0048. Keep extra digits during intermediate calculations and round the final money amount to two decimal places when appropriate.</p>'),
      lesson('<p><b>Find a percentage of an amount.</b> Convert the percentage to a decimal, then multiply. For example, 40% of 20 shopping items is 0.40 × 20 = 8 items. If 8 are completed, 12 remain. Estimate first: 40% is less than half, so 8 out of 20 is sensible.</p>'),
      lesson('<p><b>Percentage change uses the original value as its base.</b> Percentage change = (change ÷ original value) × 100%. If a litre of fuel rises from GH₵9.50 to GH₵13.20, the increase is GH₵3.70 and the percentage increase is (3.70 ÷ 9.50) × 100 ≈ 38.95%. If it then falls to GH₵12.50, the decrease is measured against GH₵13.20: (0.70 ÷ 13.20) × 100 ≈ 5.30%.</p>'),
      lesson('<p><b>Build a household budget.</b> A family has GH₵600 for a weekly plan. If one third is set aside for transport, that is GH₵200. If 25% is used for food, that is GH₵150; 15% for utilities is GH₵90. The three amounts total GH₵440, leaving GH₵160. Write down the base amount for each percentage and check that the categories do not exceed the budget.</p>'),
      lesson('<p><b>Compare simple and compound interest.</b> Simple interest is calculated on the original principal each period: I = P × r × t. Compound interest is added to the balance, so later interest is earned on the new balance. For annual compounding, A = P(1 + r)ⁿ. Keep the rate and time in matching annual units.</p>'),
      lesson('<p><b>Worked savings comparison.</b> GH₵4,000 is saved at 8% per year for 4 years. With simple interest, I = 4,000 × 0.08 × 4 = GH₵1,280, giving GH₵5,280. With annual compounding, A = 4,000 × 1.08⁴ ≈ GH₵5,441.96. The compound amount is higher because interest is earned on earlier interest.</p>'),
      lesson('<p><b>Use percentages in buying and selling.</b> A GH₵250 item discounted by 10% is reduced by GH₵25, so its discounted price is GH₵225 before any tax. Profit = selling price − cost price; loss = cost price − selling price. If an item costs GH₵180 and sells for GH₵225, the profit is GH₵45, or 25% of the cost price. A 5% commission on GH₵720 sales is GH₵36.</p>'),
      lesson('<p><b>Handle tax without double-counting.</b> Tax = stated tax rate × taxable pre-tax price. If an exercise gives a 5% tax on GH₵225, the tax is GH₵11.25 and the total is GH₵236.25. If a total already includes 5% tax, divide by 1.05 to recover the pre-tax price. Use the rate stated in the question; do not assume a current statutory rate.</p>'),
      lesson('<p><b>Integrated enterprise challenge.</b> A school club buys 40 reusable bottles at GH₵12 each, so its cost is GH₵480. It sells all 40 at GH₵18 each, earning GH₵720. Gross profit is GH₵240, which is 50% of the cost. If the club pays 5% sales commission, that is GH₵36; the remaining amount after commission is GH₵204 before any other expenses. Explain each base used in your percentages.</p>'),
      { who: 'd', vis: 'demon', text: 'I will swap your percentage bases, hide the difference between the two inverses and make your money totals drift. Show every step, check the units and defend your decisions!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which percentage is equivalent to 3/8?', [
        '37.5%',
        '3.8%',
        '38%',
        '0.375%'
      ], '3 ÷ 8 = 0.375. Multiply by 100 to get 37.5%.'),
      question('Which fraction is equivalent to the recurring decimal 0.272727…?', [
        '3/11',
        '27/100',
        '2/7',
        '27/90'
      ], 'Let x = 0.272727…; then 100x − x = 27, so 99x = 27 and x = 27/99 = 3/11.'),
      question('Calculate 2 2/5 + 1 2/3.', [
        '4 1/15',
        '3 4/8',
        '4 2/15',
        '3 1/15'
      ], 'Add whole numbers and fractions: 3 + 2/5 + 2/3 = 3 + 6/15 + 10/15 = 4 1/15.'),
      question('What is the multiplicative inverse of −5/8?', [
        '−8/5',
        '5/8',
        '8/5',
        '−5/8'
      ], 'The reciprocal is −8/5 because (−5/8) × (−8/5) = 1.'),
      question('Round 0.004786 to two significant figures.', [
        '0.0048',
        '0.0047',
        '0.0050',
        '0.00479'
      ], 'The first two significant digits are 4 and 7. The next digit is 8, so round 7 up to 8.'),
      question('A learner has completed 40% of a list of 20 items. How many items remain?', [
        '12',
        '8',
        '10',
        '16'
      ], '40% of 20 is 8 completed items. The number remaining is 20 − 8 = 12.'),
      question('A fuel price rises from GH₵9.50 to GH₵13.20. What is the percentage increase to 2 decimal places?', [
        '38.95%',
        '28.03%',
        '3.70%',
        '33.95%'
      ], 'The increase is GH₵3.70. Divide by the original GH₵9.50 and multiply by 100: 3.70 ÷ 9.50 × 100 ≈ 38.95%.'),
      question('What is the simple interest on GH₵4,000 at 8% per year for 4 years?', [
        'GH₵1,280',
        'GH₵320',
        'GH₵4,320',
        'GH₵1,440'
      ], 'I = P × r × t = 4,000 × 0.08 × 4 = GH₵1,280.'),
      question('What is the amount on GH₵4,000 at 8% compound interest annually for 4 years, to 2 decimal places?', [
        'GH₵5,441.96',
        'GH₵5,280.00',
        'GH₵5,120.00',
        'GH₵4,320.00'
      ], 'A = P(1 + r)ⁿ = 4,000 × 1.08⁴ ≈ GH₵5,441.96.'),
      question('A trader buys an item for GH₵180 and sells it for GH₵225. What is the profit percentage on cost?', [
        '25%',
        '20%',
        '45%',
        '80%'
      ], 'Profit = 225 − 180 = GH₵45. Divide by cost price: 45 ÷ 180 × 100 = 25%.')
    ]
  }
];
