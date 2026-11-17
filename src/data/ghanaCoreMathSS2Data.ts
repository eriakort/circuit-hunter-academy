import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA SHS 2 Core Mathematics — first implementation slice.
 * Curriculum alignment is recorded in ghanaCoreMathSS2Alignment.ts.
 * This is a distinct subject and mission namespace; it never reuses SHS 1 progress.
 */
export const GHANA_CORE_MATH_SS2_SUBJECT: SubjectInfo = {
  id: 'ghcoremath2',
  name: 'Core Mathematics · SHS 2',
  blurb: 'Ghana NaCCA SHS 2 Core Mathematics: number systems, ratios, algebra, progressions and financial models.',
  meta: 'Ghana NaCCA · SHS 2 · six learning missions',
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


// ---------------------------------------------------------------------------
// Strand 2 · Algebraic Reasoning · Sub-strand 2
// Patterns and Relations (NaCCA SHS 2 · pp. 198–206)
// ---------------------------------------------------------------------------
export const GHANA_CORE_MATH_SS2_PATTERNS_UNIT: UnitInfo = {
  title: 'Algebraic Reasoning · Patterns, Progressions and Financial Models',
  ch: 'SS2 · NaCCA pp. 198–206',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_PATTERNS_ARCS: ArcInfo[] = [
  {
    n: 3,
    unit: 0,
    subject: 'ghcoremath2',
    title: 'Patterns and Relations',
    pages: 'NaCCA SHS 2 · pp. 198–206'
  }
];

export const GHANA_CORE_MATH_SS2_PATTERNS_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-sequences-progressions',
    arc: 0,
    sec: '2.2.2',
    pages: 'NaCCA SHS 2 · pp. 198–206',
    hue: 265,
    horns: 2,
    eyes: 3,
    title: 'The Sequence Architect',
    topic: 'Explore plane-figure patterns, arithmetic and geometric progressions, nth terms and sums.',
    demon: 'The Pattern Mimic',
    tech: 'Algebra Form · SHS 2 Technique: Sequence Forge',
    scenes: [
      lesson('<p>A <b>sequence</b> is an ordered list that follows a rule. Look at 4, 7, 10, 13. Each term increases by 3, so the common difference is 3. A sequence rule helps us predict terms without writing every earlier term.</p>'),
      lesson('<p>An <b>arithmetic progression (AP)</b> adds the same number each time. Its nth term is <b>Tₙ = a + (n − 1)d</b>, where a is the first term and d is the common difference. For 4, 7, 10, …, Tₙ = 4 + 3(n − 1), so T₁₀ = 31.</p>'),
      lesson('<p>The sum of the first n terms of an AP is <b>Sₙ = n/2 [2a + (n − 1)d]</b>. For 4, 7, 10, 13, 16, the sum is 5/2 × (8 + 12) = 50.</p>'),
      lesson('<p>A <b>geometric progression (GP)</b> multiplies by the same non-zero number each time. This number is the common ratio r. Its nth term is <b>Tₙ = arⁿ⁻¹</b>. For 3, 6, 12, 24, …, a = 3 and r = 2, so T₅ = 48.</p>'),
      lesson('<p>Plane figures can reveal sequences too. If each new shape adds four tiles, the tile counts might be 4, 8, 12, 16. Describe what changes from one figure to the next, then write a rule for figure n. Always test your rule against the first few terms.</p>'),
      { type: 'sort', title: 'Identify the progression', cats: [['Arithmetic', 'AP'], ['Geometric', 'GP'], ['Visual pattern', 'Shape']], items: [
        { n: '5, 8, 11, 14 …', c: 0, i: 'plus-three' },
        { n: '2, 6, 18, 54 …', c: 1, i: 'times-three' },
        { n: 'Each new tile design adds 4 tiles', c: 2, i: 'tiles' },
        { n: '20, 15, 10, 5 …', c: 0, i: 'minus-five' }
      ] },
      { who: 'd', vis: 'demon', text: 'The next term is hidden. Discover the rule before the pattern changes again!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What is the common difference in 6, 10, 14, 18, …?', ['4', '2', '6', '−4'], 'Subtract consecutive terms: 10 − 6 = 4.'),
      question('Find the 8th term of the AP 3, 7, 11, …', ['31', '27', '35', '29'], 'T₈ = 3 + (8 − 1) × 4 = 31.'),
      question('What is the common ratio in 5, 10, 20, 40, …?', ['2', '5', '10', '4'], 'Divide a term by the previous term: 10 ÷ 5 = 2.'),
      question('Find the 5th term of the GP 2, 6, 18, …', ['162', '54', '108', '486'], 'T₅ = 2 × 3⁴ = 162.'),
      question('Which formula gives the sum of the first n terms of an AP?', ['Sₙ = n/2[2a + (n − 1)d]', 'Tₙ = arⁿ', 'Sₙ = a + nd', 'Tₙ = a + nr'], 'The AP sum formula combines the first term, common difference and number of terms.')
    ]
  },
  {
    id: 'gh-core-ss2-financial-exponential-models',
    arc: 0,
    sec: '2.2.2',
    pages: 'NaCCA SHS 2 · pp. 198–206',
    hue: 145,
    horns: 1,
    eyes: 4,
    title: 'The Growth Strategist',
    topic: 'Model financial mathematics and exponential growth using repeated percentage change and geometric progressions.',
    demon: 'The Compound Phantom',
    tech: 'Algebra Form · SHS 2 Technique: Growth Multiplier',
    scenes: [
      lesson('<p>Many real situations change by a percentage each period: savings can earn interest, equipment can lose value, and populations can grow. Repeated percentage change is <b>multiplicative</b>, so it is often modelled with a geometric progression.</p>'),
      lesson('<p>For compound interest, the amount after n periods is <b>A = P(1 + r)ⁿ</b>, when r is the interest rate per period written as a decimal. If GH₵1,000 earns 10% per year for 2 years, A = 1000 × 1.1² = GH₵1,210.</p>'),
      lesson('<p>For depreciation at a fixed rate, multiply by the remaining fraction. If a machine worth GH₵5,000 loses 20% of its value each year, it keeps 80% each year: V = 5000 × 0.8ⁿ. After two years, V = GH₵3,200.</p>'),
      lesson('<p>For exponential growth, multiply by a constant factor over equal time intervals. A quantity that starts at 200 and grows by 5% each period follows 200 × 1.05ⁿ. The multiplier is 1.05, not 0.05.</p>'),
      lesson('<p>Read the question carefully: identify the starting amount, rate, time period and whether the quantity grows or decreases. Convert percentages to decimals, choose the correct multiplier, and check whether the answer should be larger or smaller than the starting value.</p>'),
      { type: 'sort', title: 'Choose the correct multiplier', cats: [['Growth', 'Growth'], ['Depreciation', 'Decrease'], ['Compound interest', 'Interest']], items: [
        { n: 'Increase by 8% each year', c: 0, i: '1.08' },
        { n: 'Lose 15% of value each year', c: 1, i: '0.85' },
        { n: 'Earn 6% interest per period', c: 2, i: '1.06' },
        { n: 'Reduce by 30% each period', c: 1, i: '0.70' }
      ] },
      { who: 'd', vis: 'demon', text: 'One wrong multiplier can change the whole forecast. Calculate carefully!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What is 10% written as a decimal?', ['0.10', '1.10', '10', '0.01'], 'Divide the percentage by 100: 10% = 0.10.'),
      question('What is the amount on GH₵1,000 at 10% compound interest for 2 years?', ['GH₵1,210', 'GH₵1,200', 'GH₵1,100', 'GH₵1,020'], 'A = 1000 × 1.1² = GH₵1,210.'),
      question('A car loses 20% of its value each year. What fraction of its value remains each year?', ['0.8', '1.2', '0.2', '0.08'], '100% − 20% = 80%, which is 0.8.'),
      question('A population of 200 grows by 5% in one period. What is the new population?', ['210', '205', '250', '190'], '200 × 1.05 = 210.'),
      question('Which model represents depreciation of 15% per period from initial value P?', ['P × 0.85ⁿ', 'P × 1.15ⁿ', 'P × 0.15ⁿ', 'P + 0.85n'], 'A 15% decrease leaves 85% each period, so the multiplier is 0.85.')
    ]
  }
];


// ---------------------------------------------------------------------------
// Strand 1 · Numbers for Everyday Life · Sub-strand 2
// Proportional Reasoning (NaCCA SHS 2 · pp. 182–185)
// ---------------------------------------------------------------------------
export const GHANA_CORE_MATH_SS2_PROPORTIONAL_UNIT: UnitInfo = {
  title: 'Numbers for Everyday Life · Proportional Reasoning',
  ch: 'SS2 · NaCCA pp. 182–185',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_PROPORTIONAL_ARCS: ArcInfo[] = [
  {
    n: 2,
    unit: 0,
    subject: 'ghcoremath2',
    title: 'Ratios, Rates and Proportions',
    pages: 'NaCCA SHS 2 · pp. 182–185'
  }
];

export const GHANA_CORE_MATH_SS2_PROPORTIONAL_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-ratios-rates-proportions',
    arc: 0,
    sec: '2.1.2',
    pages: 'NaCCA SHS 2 · pp. 182–183',
    hue: 205,
    horns: 2,
    eyes: 3,
    title: 'The Ratio Pathfinder',
    topic: 'Compare quantities with ratios and rates, simplify equivalent ratios and solve proportions.',
    demon: 'The Scale Shifter',
    tech: 'Number Form · SHS 2 Technique: Balanced Scale',
    scenes: [
      lesson('<p>A <b>ratio</b> compares two quantities by division. If a club has 12 learners who play football and 8 who play basketball, the ratio of football to basketball is 12:8, which simplifies to 3:2. Keep the order clear: reversing the quantities gives 2:3.</p>'),
      lesson('<p>A <b>rate</b> compares quantities with different units. If a bus travels 180 kilometres in 3 hours, its average speed is 180 ÷ 3 = 60 kilometres per hour (km/h). Always include the units so the meaning is clear.</p>'),
      lesson('<p>A <b>proportion</b> states that two ratios are equal. For example, 2:3 = 4:6. If a:b = c:d, then a × d = b × c (when the terms are defined). This cross-product relationship helps you find a missing value.</p>'),
      lesson('<p>For similar shapes, corresponding sides are in the same ratio. If a drawing uses a scale of 1:100, then 1 cm on the drawing represents 100 cm in real life. A scale drawing is useful only when you apply the same scale consistently.</p>'),
      lesson('<p>To solve a proportion, write the two ratios in the same order, form an equation, and solve for the unknown. Check that the answer makes sense in the original situation. A ratio compares quantities; a rate also tells you how one quantity changes relative to another.</p>'),
      { type: 'sort', title: 'Ratio, rate or proportion?', cats: [['Ratio', 'Ratio'], ['Rate', 'Rate'], ['Proportion', 'Proportion']], items: [
        { n: 'Red beads to blue beads = 3:5', c: 0, i: 'beads' },
        { n: 'A cyclist travels 24 km in 2 hours', c: 1, i: 'speed' },
        { n: '2:3 = 8:12', c: 2, i: 'equal' },
        { n: 'GH₵45 for 3 notebooks', c: 1, i: 'price' }
      ] },
      { who: 'd', vis: 'demon', text: 'I have stretched and squeezed every comparison. Restore the correct scale!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Simplify the ratio 18:24.', ['3:4', '4:3', '6:8', '2:3'], 'Divide both terms by their highest common factor, 6: 18:24 = 3:4.'),
      question('A car travels 150 km in 3 hours. What is its average speed?', ['50 km/h', '45 km/h', '150 km/h', '450 km/h'], 'Speed = distance ÷ time = 150 ÷ 3 = 50 km/h.'),
      question('Which statement is a proportion?', ['3:4 = 6:8', '3:4 = 6:7', '3 + 4 = 6 + 8', '3 × 4 = 6 + 8'], 'Both ratios simplify to 3:4, so they are equivalent.'),
      question('If 5 exercise books cost GH₵40, what is the cost of 8 at the same rate?', ['GH₵64', 'GH₵45', 'GH₵80', 'GH₵60'], 'One book costs 40 ÷ 5 = GH₵8; eight cost 8 × 8 = GH₵64.'),
      question('A map scale is 1:50,000. What real distance does 2 cm represent?', ['1 km', '100 m', '10 km', '500 m'], '2 × 50,000 = 100,000 cm = 1,000 m = 1 km.')
    ]
  },
  {
    id: 'gh-core-ss2-proportional-real-world',
    arc: 0,
    sec: '2.1.2',
    pages: 'NaCCA SHS 2 · pp. 184–185',
    hue: 42,
    horns: 1,
    eyes: 4,
    title: 'The Proportion Problem-Solver',
    topic: 'Apply proportional reasoning to financial mathematics, tax, utilities, depreciation, health, sport and currency exchange.',
    demon: 'The Market Mirage',
    tech: 'Number Form · SHS 2 Technique: Real-World Multiplier',
    scenes: [
      lesson('<p>Ratios and proportions help us compare prices, plan recipes, interpret sports statistics and solve financial problems. Before calculating, identify the quantities, their units and whether the relationship is direct or inverse.</p>'),
      lesson('<p><b>Percentages and finance:</b> a percentage is a ratio out of 100. If an item costs GH₵250 and a hypothetical 12% tax is added, the tax is 250 × 0.12 = GH₵30, so the total is GH₵280. Always distinguish the tax amount from the final price.</p>'),
      lesson('<p><b>Utilities:</b> if 6 units of electricity cost GH₵18 at a constant unit price, then 1 unit costs GH₵3 and 10 units cost GH₵30. Real utility bills can include fixed charges and changing tariffs, so use the assumptions stated in each question.</p>'),
      lesson('<p><b>Exchange rates:</b> multiply or divide according to the direction of the quoted rate. If a practice rate is GH₵12 for €1, then €15 is GH₵180. This is a learning example, not a live exchange quote; actual rates and fees change.</p>'),
      lesson('<p><b>Depreciation and compound interest:</b> both use repeated percentage change. A 10% increase uses a multiplier of 1.10; a 10% decrease uses 0.90. Check whether the question asks for the change itself or the new total after the change.</p>'),
      { type: 'sort', title: 'Choose the correct operation', cats: [['Multiply', 'Multiply'], ['Divide', 'Divide'], ['Percentage', 'Percent']], items: [
        { n: 'Convert €20 at GH₵12 per euro', c: 0, i: 'exchange' },
        { n: 'Find the unit price from total cost ÷ quantity', c: 1, i: 'unit-price' },
        { n: 'Find 15% of GH₵200', c: 2, i: 'percent' },
        { n: 'Apply a 20% decrease to a value', c: 2, i: 'decrease' }
      ] },
      { who: 'd', vis: 'demon', text: 'The market figures look convincing, but one hidden assumption can ruin the answer. Show your working!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A bag costs GH₵200. What is 15% of its price?', ['GH₵30', 'GH₵15', 'GH₵185', 'GH₵215'], '15% = 0.15, and 200 × 0.15 = GH₵30.'),
      question('At a practice exchange rate of GH₵12 for €1, how many cedis equal €8?', ['GH₵96', 'GH₵20', 'GH₵120', 'GH₵0.67'], 'Multiply euros by cedis per euro: 8 × 12 = GH₵96.'),
      question('Six litres of water cost GH₵24 at a constant rate. What do 10 litres cost?', ['GH₵40', 'GH₵30', 'GH₵34', 'GH₵60'], 'The unit price is 24 ÷ 6 = GH₵4, so 10 litres cost GH₵40.'),
      question('A phone worth GH₵1,000 depreciates by 10% in one year. What is its new value?', ['GH₵900', 'GH₵990', 'GH₵1,100', 'GH₵100'], 'It keeps 90% of its value: 1,000 × 0.90 = GH₵900.'),
      question('A total bill is GH₵280 after adding a 12% tax to the original price. What was the original price?', ['GH₵250', 'GH₵268', 'GH₵240', 'GH₵300'], 'The total is 112% of the original: 280 ÷ 1.12 = GH₵250.')
    ]
  }
];
