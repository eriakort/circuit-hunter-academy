import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';
import { GHANA_SS1_PATTERNS_ARCS, GHANA_SS1_PATTERNS_MISSIONS } from './ghanaCoreMathSS1PatternsData';
import { GHANA_SS1_STRAIGHT_LINES_ARCS, GHANA_SS1_STRAIGHT_LINES_MISSIONS } from './ghanaCoreMathSS1StraightLinesData';
import { GHANA_SS1_SPATIAL_ARCS, GHANA_SS1_SPATIAL_MISSIONS } from './ghanaCoreMathSS1SpatialData';
import { GHANA_SS1_MEASUREMENT_ARCS, GHANA_SS1_MEASUREMENT_MISSIONS } from './ghanaCoreMathSS1MeasurementData';
import { GHANA_SS1_TRIGONOMETRY_ARCS, GHANA_SS1_TRIGONOMETRY_MISSIONS } from './ghanaCoreMathSS1TrigonometryData';
import { GHANA_SS1_PERIMETER_AREA_ARCS, GHANA_SS1_PERIMETER_AREA_MISSIONS } from './ghanaCoreMathSS1PerimeterAreaData';
import { GHANA_SS1_PRISM_VOLUME_ARCS, GHANA_SS1_PRISM_VOLUME_MISSIONS } from './ghanaCoreMathSS1PrismVolumeData';
import { GHANA_SS1_STATISTICS_ARCS, GHANA_SS1_STATISTICS_MISSIONS } from './ghanaCoreMathSS1StatisticsData';
import { GHANA_SS1_STATISTICS_REASONING_ARCS, GHANA_SS1_STATISTICS_REASONING_MISSIONS } from './ghanaCoreMathSS1StatisticsReasoningData';
import { GHANA_SS1_PROBABILITY_ARCS, GHANA_SS1_PROBABILITY_MISSIONS } from './ghanaCoreMathSS1ProbabilityData';
import { GHANA_SS1_REAL_NUMBER_ARCS, GHANA_SS1_REAL_NUMBER_MISSIONS } from './ghanaCoreMathSS1RealNumberData';
import { GHANA_SS1_PROPORTIONAL_ARCS, GHANA_SS1_PROPORTIONAL_MISSIONS } from './ghanaCoreMathSS1ProportionalData';
import { GHANA_SS1_ALGEBRA_ARCS, GHANA_SS1_ALGEBRA_MISSIONS } from './ghanaCoreMathSS1AlgebraData';
import { GHANA_SS1_ALGEBRA_ADVANCED_ARCS, GHANA_SS1_ALGEBRA_ADVANCED_MISSIONS } from './ghanaCoreMathSS1AlgebraAdvancedData';
import { GHANA_SS1_MASTERY_ARCS, GHANA_SS1_MASTERY_MISSIONS } from './ghanaCoreMathSS1MasteryData';

/**
 * Ghana NaCCA SHS 1 Core Mathematics pilot.
 * Content is authored in English and uses Ghanaian contexts and GH₵.
 * The curriculum authority reference is the NaCCA SHS Mathematics Curriculum (2023).
 * Official NaCCA indicator mappings are maintained in ghanaCoreMathSS1Alignment.ts.
 */
export const GHANA_CORE_MATH_SUBJECT: SubjectInfo = {
  id: 'ghcoremath',
  name: 'Core Mathematics',
  blurb: 'The Ghana SHS Core Mathematics pathway: number, algebra, geometry, statistics and practical problem-solving.',
  meta: 'Ghana NaCCA · SHS 1 pilot · 28 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="38" fill="none" stroke="#ffd166" stroke-width="4"/><path d="M36 66 L52 82 L86 40" fill="none" stroke="#38ef7d" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

export const GHANA_CORE_MATH_SS1_UNIT: UnitInfo = {
  title: 'Core Mathematics: Number, Algebra, Geometry and Data',
  ch: 'SS1 · Pilot',
  subject: 'ghcoremath'
};

export const GHANA_CORE_MATH_SS1_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghcoremath', title: 'Number Sets and Ordering', pages: 'NaCCA SHS 1 · Pilot' },
  { n: 2, unit: 0, subject: 'ghcoremath', title: 'Fractions, Decimals and Percentages', pages: 'NaCCA SHS 1 · Pilot' },
  { n: 3, unit: 0, subject: 'ghcoremath', title: 'Ratio, Rate and Proportion', pages: 'NaCCA SHS 1 · Pilot' },
  { n: 4, unit: 0, subject: 'ghcoremath', title: 'Sets and Surveys', pages: 'NaCCA SHS 1 · pp. 36–37' },
  { n: 5, unit: 0, subject: 'ghcoremath', title: 'Financial Mathematics', pages: 'NaCCA SHS 1 · pp. 50–52' },
  { n: 6, unit: 0, subject: 'ghcoremath', title: 'Algebraic Expressions', pages: 'NaCCA SHS 1 · pp. 57–58' },

  ...GHANA_SS1_PATTERNS_ARCS.map(arc => ({ ...arc, n: 7 })),
  ...GHANA_SS1_STRAIGHT_LINES_ARCS.map(arc => ({ ...arc, n: 7 })),
  ...GHANA_SS1_SPATIAL_ARCS.map(arc => ({ ...arc, n: 8 })),
  ...GHANA_SS1_MEASUREMENT_ARCS.map(arc => ({ ...arc, n: 9 })),
  ...GHANA_SS1_TRIGONOMETRY_ARCS.map(arc => ({ ...arc, n: 9 })),
  ...GHANA_SS1_PERIMETER_AREA_ARCS.map(arc => ({ ...arc, n: 9 })),
  ...GHANA_SS1_PRISM_VOLUME_ARCS.map(arc => ({ ...arc, n: 9 })),
  ...GHANA_SS1_STATISTICS_ARCS.map(arc => ({ ...arc, n: 11 })),
  ...GHANA_SS1_STATISTICS_REASONING_ARCS.map(arc => ({ ...arc, n: 11 })),
  ...GHANA_SS1_PROBABILITY_ARCS.map(arc => ({ ...arc, n: 12 })),
  ...GHANA_SS1_REAL_NUMBER_ARCS.map(arc => ({ ...arc, n: 13 })),
  ...GHANA_SS1_PROPORTIONAL_ARCS.map(arc => ({ ...arc })),
  ...GHANA_SS1_ALGEBRA_ARCS.map(arc => ({ ...arc })),
  ...GHANA_SS1_ALGEBRA_ADVANCED_ARCS.map(arc => ({ ...arc })),
  ...GHANA_SS1_MASTERY_ARCS.map(arc => ({ ...arc })),
];

const question = (prompt: string, answers: string[], explanation: string) => ({
  q: prompt,
  a: answers,
  why: explanation
});

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });

export const GHANA_CORE_MATH_SS1_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-number-sets',
    arc: 0,
    sec: 'Number',
    pages: 'NaCCA SHS 1 · Pilot',
    hue: 42,
    horns: 2,
    eyes: 2,
    title: 'The Number Map',
    topic: 'Classifying, comparing and ordering natural numbers, integers, rational numbers and real numbers.',
    demon: 'The Classification Phantom',
    tech: 'Number Form · First Technique: Set Sense',
    scenes: [
      lesson('<p>Welcome to the Ghana SHS Core Mathematics pathway. Numbers belong to different families. Natural numbers help us count market items; integers include negative values; rational numbers can be written as fractions; and real numbers include rational and irrational values.</p>'),
      lesson('<p>Think of the number line as a road from left to right. A number farther right is greater. For example, −3 is less than −1, and 0 is less than 2. Every integer is rational because it can be written over 1: −3 = −3/1.</p>'),
      lesson('<p>A rational number has a terminating or recurring decimal expansion. For example, 1/4 = 0.25 and 1/3 = 0.333… . An irrational number cannot be written as a ratio of two integers; √2 is a familiar example.</p>'),
      { type: 'sort', title: 'Classify the number', cats: [['Rational', 'Rational'], ['Irrational', 'Irrational']], items: [
        { n: '−5', c: 0, i: 'minus' }, { n: '0.75', c: 0, i: 'decimal' }, { n: '√2', c: 1, i: 'root' }, { n: 'π', c: 1, i: 'pi' }
      ] },
      { who: 'd', vis: 'demon', text: 'You cannot sort these numbers into their correct families!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which statement about −4 is correct?', ['It is an integer and a rational number.', 'It is irrational.', 'It is a natural number.', 'It is not a real number.'], '−4 is an integer and can be written as −4/1, so it is rational.'),
      question('Which number is irrational?', ['√2', '0.5', '−7', '3/8'], '√2 cannot be expressed as a ratio of two integers.'),
      question('Which number is greatest?', ['−1', '−4', '−6', '−9'], 'On a number line, the number farther to the right is greater.'),
      question('Which decimal is equivalent to 3/4?', ['0.75', '0.34', '0.25', '1.25'], '3 ÷ 4 = 0.75.')
    ]
  },
  {
    id: 'gh-core-ss1-fractions-percentages',
    arc: 1,
    sec: 'Number',
    pages: 'NaCCA SHS 1 · Pilot',
    hue: 166,
    horns: 2,
    eyes: 2,
    title: 'The Market Percentage Challenge',
    topic: 'Convert between fractions, decimals and percentages and solve practical percentage problems.',
    demon: 'The Discount Trickster',
    tech: 'Proportion Form · Second Technique: Hundredfold Focus',
    scenes: [
      lesson('<p>A percentage means “out of 100”. To change a percentage to a decimal, divide by 100: 15% = 0.15. To change a decimal to a percentage, multiply by 100: 0.4 = 40%.</p>'),
      lesson('<p>At a market in Kumasi, a bag costs GH₵200. A 10% discount is 0.10 × 200 = GH₵20. The new price is GH₵200 − GH₵20 = GH₵180.</p>'),
      lesson('<p>To find a fraction of an amount, multiply. Three quarters of GH₵80 is 3/4 × 80 = GH₵60. Estimate first so you can check whether your answer is sensible.</p>'),
      { who: 'd', vis: 'demon', text: 'My discounts and fractions will confuse your calculations!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Write 35% as a decimal.', ['0.35', '3.5', '0.035', '35.0'], 'Divide 35 by 100 to get 0.35.'),
      question('A school bag costs GH₵200. What is 10% of its price?', ['GH₵20', 'GH₵10', 'GH₵40', 'GH₵100'], '10% of 200 is 0.10 × 200 = 20.'),
      question('A GH₵150 item is reduced by 20%. What is the sale price?', ['GH₵120', 'GH₵130', 'GH₵30', 'GH₵180'], '20% of 150 is 30; 150 − 30 = 120.'),
      question('Which fraction is equal to 0.25?', ['1/4', '1/2', '3/4', '1/5'], '0.25 = 25/100 = 1/4.')
    ]
  },
  {
    id: 'gh-core-ss1-ratio-rate',
    arc: 2,
    sec: 'Proportional reasoning',
    pages: 'NaCCA SHS 1 · Pilot',
    hue: 214,
    horns: 2,
    eyes: 2,
    title: 'The Proportion Patrol',
    topic: 'Use ratios, unit rates and direct proportion in everyday situations.',
    demon: 'The Unequal Scale',
    tech: 'Ratio Form · Third Technique: Equal Parts',
    scenes: [
      lesson('<p>A ratio compares quantities. If a drink is mixed using 2 cups of concentrate for every 3 cups of water, the ratio of concentrate to water is 2:3. Keep the order clear.</p>'),
      lesson('<p>A trotro journey costs GH₵12 for 3 equal sections of a route. The cost per section is GH₵12 ÷ 3 = GH₵4. This is a unit rate: the cost for one section.</p>'),
      lesson('<p>In direct proportion, if one quantity doubles, the other doubles too, provided the rate stays constant. If 4 exercise books cost GH₵28, then 8 books cost GH₵56.</p>'),
      { who: 'd', vis: 'demon', text: 'I will make every ratio unequal!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A mixture uses 2 cups of concentrate and 3 cups of water. What is the ratio of concentrate to water?', ['2:3', '3:2', '2:5', '3:5'], 'The order is concentrate first, then water: 2:3.'),
      question('If 4 exercise books cost GH₵28, what is the cost of one book at the same rate?', ['GH₵7', 'GH₵6', 'GH₵8', 'GH₵24'], 'GH₵28 ÷ 4 = GH₵7 per book.'),
      question('At a constant rate, 5 oranges cost GH₵20. What do 10 oranges cost?', ['GH₵40', 'GH₵25', 'GH₵30', 'GH₵10'], 'Doubling the quantity doubles the cost: GH₵40.'),
      question('A bus travels 150 km in 3 hours at a constant speed. What is its average speed?', ['50 km/h', '45 km/h', '75 km/h', '450 km/h'], 'Average speed = distance ÷ time = 150 ÷ 3 = 50 km/h.')
    ]
  },
  {
    id: 'gh-core-ss1-sets-surveys',
    arc: 3,
    sec: 'Number and sets',
    pages: 'NaCCA SHS 1 · pp. 36–37',
    hue: 292,
    horns: 2,
    eyes: 2,
    title: 'The Venn Diagram Investigation',
    topic: 'Use set notation, Venn diagrams, complements and two-set and three-set survey data to solve real-life problems.',
    demon: 'The Overlap Illusionist',
    tech: 'Set Form · Fourth Technique: Union and Intersection',
    scenes: [
      lesson('<p>A set is a collection of clearly defined items. For example, A = {1, 2, 3} is a set of numbers. The universal set U contains everything being considered. We write x ∈ A when x belongs to A, and x ∉ A when it does not.</p>'),
      lesson('<p>Venn diagrams use circles to show relationships. The union A ∪ B means everything in A or B or both. The intersection A ∩ B means items shared by both sets. The complement A′ means everything in the universal set that is not in A.</p>'),
      lesson('<p>For two sets, count the overlap only once: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Example: 18 learners like football, 12 like basketball and 5 like both. Then 18 + 12 − 5 = 25 like at least one.</p>'),
      lesson('<p>For three sets, add the three set totals, subtract the three pairwise overlaps, then add the triple overlap back once. This helps avoid counting learners more than once. De Morgan’s law also tells us (A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′.</p>'),
      lesson('<p>Use a simple survey to collect data, define the universal set, and place each response in the correct Venn region. Check that the regions add up to the total number surveyed.</p>'),
      { who: 'd', vis: 'demon', text: 'I will hide the overlaps and make your survey totals impossible!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What does A ∩ B represent?', ['Elements in both A and B', 'Elements in A or B but never both', 'Elements outside A and B only', 'Every element in the universal set'], 'The intersection contains only the elements common to both sets.'),
      question('In a survey, 18 learners like football, 12 like basketball and 5 like both. How many like at least one sport?', ['25', '30', '35', '23'], 'Use n(A ∪ B) = 18 + 12 − 5 = 25.'),
      question('In a three-set survey, the set totals are 20, 18 and 15; pair overlaps are 8, 6 and 5; and 3 learners are in all three. How many are in at least one set?', ['37', '35', '53', '40'], 'Use inclusion-exclusion: 20 + 18 + 15 − 8 − 6 − 5 + 3 = 37.'),
      question('Which identity is De Morgan’s law?', ['(A ∪ B)′ = A′ ∩ B′', '(A ∪ B)′ = A ∪ B', 'A ∩ B = A′ ∩ B′', 'A ∪ B = A′ ∪ B′'], 'The complement of a union is the intersection of the complements.')
    ]
  },
  {
    id: 'gh-core-ss1-financial-mathematics',
    arc: 4,
    sec: 'Proportional reasoning',
    pages: 'NaCCA SHS 1 · pp. 50–52',
    hue: 128,
    horns: 2,
    eyes: 2,
    title: 'The Smart Money Mission',
    topic: 'Calculate simple interest, profit, loss and commission in everyday financial situations.',
    demon: 'The Market Money Mimic',
    tech: 'Finance Form · Fifth Technique: Wise Calculation',
    scenes: [
      lesson('<p>Financial mathematics helps you make informed decisions about money. Always identify the original amount, the rate and the time before choosing a calculation.</p>'),
      lesson('<p>Simple interest is calculated on the original principal: I = P × R × T, where R is written as a decimal and T is measured in years. For GH₵500 at 10% per year for 2 years, I = 500 × 0.10 × 2 = GH₵100.</p>'),
      lesson('<p>Profit = selling price − cost price. Loss = cost price − selling price. If a trader buys a basket for GH₵80 and sells it for GH₵100, the profit is GH₵20. Profit percentage is calculated using the cost price as the base.</p>'),
      lesson('<p>Commission is payment based on sales. At 5% commission, a sales agent earns 0.05 × GH₵2,000 = GH₵100. Compare the final amount with your estimate to catch mistakes.</p>'),
      { who: 'd', vis: 'demon', text: 'I will make you confuse profit, interest and commission!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What is the simple interest on GH₵500 at 10% per year for 2 years?', ['GH₵100', 'GH₵50', 'GH₵110', 'GH₵1,000'], 'I = P × R × T = 500 × 0.10 × 2 = GH₵100.'),
      question('A trader buys an item for GH₵80 and sells it for GH₵100. What is the profit?', ['GH₵20', 'GH₵80', 'GH₵100', 'GH₵180'], 'Profit = selling price − cost price = 100 − 80 = GH₵20.'),
      question('An item costs GH₵150 and is sold for GH₵120. What is the loss?', ['GH₵30', 'GH₵20', 'GH₵120', 'GH₵270'], 'Loss = cost price − selling price = 150 − 120 = GH₵30.'),
      question('A sales agent earns 5% commission on GH₵2,000 of sales. How much commission is earned?', ['GH₵100', 'GH₵50', 'GH₵200', 'GH₵400'], 'Commission = 0.05 × 2,000 = GH₵100.')
    ]
  },
  {
    id: 'gh-core-ss1-algebraic-expressions',
    arc: 5,
    sec: 'Algebraic reasoning',
    pages: 'NaCCA SHS 1 · pp. 52, 57–58',
    hue: 34,
    horns: 2,
    eyes: 2,
    title: 'The Expression Forge',
    topic: 'Use numbers, patterns and variables to write and simplify algebraic expressions in practical situations.',
    demon: 'The Like-Term Shifter',
    tech: 'Algebra Form · Sixth Technique: Variable Clarity',
    scenes: [
      lesson('<p>Algebra uses letters to stand for numbers. A letter such as x is a variable: its value can change. In 3x + 5, the number 3 is the coefficient of x, and 5 is a constant.</p>'),
      lesson('<p>Turn words into mathematics. If one notebook costs GH₵x, then 4 notebooks cost 4x. If a learner has x exercise books and receives 3 more, the total is x + 3. The order and meaning of the words matter.</p>'),
      lesson('<p>Like terms have the same variable part. We can combine 3x + 2x to get 5x, just as 3 oranges plus 2 oranges make 5 oranges. But 3x + 2y cannot be combined because x and y represent different quantities.</p>'),
      lesson('<p>Use the distributive property to multiply a number across brackets: 3(x + 4) = 3x + 12. Check by substituting a number, such as x = 2: both expressions equal 18.</p>'),
      lesson('<p>A pattern can also be described with a rule. If a row of market stalls has 2 support poles at each stall, then n stalls use 2n poles. Add 1 entrance pole and the expression becomes 2n + 1.</p>'),
      { who: 'd', vis: 'demon', text: 'I will mix your variables and constants until every expression is wrong!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A pencil costs GH₵x. What is the cost of 5 pencils?', ['5x', 'x + 5', 'x ÷ 5', '5 + x'], 'Five groups of x cedis are represented by 5x.'),
      question('Simplify 4a + 3a.', ['7a', '7a²', '12a', 'a'], 'These are like terms, so add the coefficients: 4 + 3 = 7.'),
      question('Which pair contains unlike terms?', ['3x and 2y', '4a and 6a', '5m and m', '2p and 7p'], 'The variables differ, so 3x and 2y cannot be combined.'),
      question('Expand 2(x + 6).', ['2x + 12', '2x + 6', 'x + 12', '2x + 8'], 'Multiply both terms inside the bracket by 2.')
    ]
  },
  ...GHANA_SS1_PATTERNS_MISSIONS,
  ...GHANA_SS1_STRAIGHT_LINES_MISSIONS,
  ...GHANA_SS1_SPATIAL_MISSIONS,
  ...GHANA_SS1_MEASUREMENT_MISSIONS,
  ...GHANA_SS1_TRIGONOMETRY_MISSIONS,
  ...GHANA_SS1_PERIMETER_AREA_MISSIONS,
  ...GHANA_SS1_PRISM_VOLUME_MISSIONS,
  ...GHANA_SS1_STATISTICS_MISSIONS,
  ...GHANA_SS1_STATISTICS_REASONING_MISSIONS,
  ...GHANA_SS1_PROBABILITY_MISSIONS,
  ...GHANA_SS1_REAL_NUMBER_MISSIONS,
  ...GHANA_SS1_PROPORTIONAL_MISSIONS,
  ...GHANA_SS1_ALGEBRA_MISSIONS,
  ...GHANA_SS1_ALGEBRA_ADVANCED_MISSIONS,
  ...GHANA_SS1_MASTERY_MISSIONS,
];
