import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA SHS 2 Core Mathematics — first implementation slice.
 * Curriculum alignment is recorded in ghanaCoreMathSS2Alignment.ts.
 * This is a distinct subject and mission namespace; it never reuses SHS 1 progress.
 */
export const GHANA_CORE_MATH_SS2_SUBJECT: SubjectInfo = {
  id: 'ghcoremath2',
  name: 'Core Mathematics · SHS 2',
  blurb: 'Ghana NaCCA SHS 2 Core Mathematics: number systems, proportional reasoning, algebra, progressions, financial models, geometry, measurement, statistical reasoning and probability.',
  meta: 'Ghana NaCCA · SHS 2 · sixteen learning missions',
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
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });

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


// ---------------------------------------------------------------------------
// Strand 3 · Geometry Around Us · Sub-strand 1
// Spatial Sense: transformations of plane shapes (NaCCA SHS 2 · pp. 213–227)
// ---------------------------------------------------------------------------
export const GHANA_CORE_MATH_SS2_SPATIAL_UNIT: UnitInfo = {
  title: 'Geometry Around Us · Spatial Sense and Transformations',
  ch: 'SS2 · NaCCA pp. 213–227',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_SPATIAL_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'ghcoremath2',
    title: 'Spatial Sense · Transformations of Plane Shapes',
    pages: 'NaCCA SHS 2 · pp. 213–227'
  }
];

export const GHANA_CORE_MATH_SS2_SPATIAL_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-transformations-vectors-reflections',
    arc: 0,
    sec: '2.3.1',
    pages: 'NaCCA SHS 2 · pp. 213–227',
    hue: 175,
    horns: 2,
    eyes: 3,
    title: 'The Vector Navigator',
    topic: 'Translate and reflect points and plane shapes, describe their images, and recognise what stays unchanged.',
    demon: 'The Mirror Maze',
    tech: 'Geometry Form · SHS 2 Technique: Image Shift',
    scenes: [
      lesson('<p>A <b>transformation</b> moves or changes a shape according to a rule. The shape before the move is the <b>object</b> (or preimage); the result is its <b>image</b>. We label image points with a prime, such as A′.</p>'),
      lesson('<p>A <b>translation</b> slides every point the same distance in the same direction. A vector tells us the horizontal and vertical movement. For example, vector (3, −2) means 3 units right and 2 units down. Point A(1, 4) becomes A′(4, 2). Every vertex uses the same vector.</p>'),
      lesson('<p>A <b>reflection</b> flips a point or shape across a mirror line. In a reflection, each point and its image are the same perpendicular distance from the mirror line, on opposite sides. Reflecting (x, y) in the x-axis gives (x, −y); reflecting in the y-axis gives (−x, y).</p>'),
      lesson('<p>Translations and reflections preserve lengths and angle sizes. The image has the same shape and size as the original, so the two shapes are <b>congruent</b>. Their positions or orientations may change, but their side lengths and corresponding angles do not.</p>'),
      { type: 'sort', title: 'Identify the transformation', cats: [['Translation', 'Slide'], ['Reflection', 'Mirror']], items: [
        { n: 'Move every vertex 4 right and 1 up', c: 0, i: 'vector' },
        { n: 'Flip a point across the x-axis', c: 1, i: 'x-axis' },
        { n: 'Add the same vector to A, B and C', c: 0, i: 'same-move' },
        { n: 'Place an image the same distance behind a mirror line', c: 1, i: 'mirror' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Mirror Maze has shifted every vertex. Use the vector and mirror rules to recover the correct image!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Point P(−2, 3) is translated by vector (4, −1). What is P′?', ['(2, 2)', '(−6, 4)', '(2, 4)', '(−3, 7)'], 'Add the vector components: (−2 + 4, 3 − 1) = (2, 2).'),
      question('What is the image of (5, −3) reflected in the y-axis?', ['(−5, −3)', '(5, 3)', '(−5, 3)', '(3, −5)'], 'Reflection in the y-axis changes the sign of x and keeps y unchanged.'),
      question('Reflect (−2, 4) in the x-axis.', ['(−2, −4)', '(2, 4)', '(2, −4)', '(−4, −2)'], 'Reflection in the x-axis keeps x and changes the sign of y.'),
      question('Which statement describes a translation?', ['Every point moves by the same vector', 'Only one vertex moves', 'The shape must become larger', 'Every point changes its distance from the others'], 'A translation applies the same displacement to every point.'),
      question('What is preserved by a reflection?', ['Side lengths and angle sizes', 'The original position', 'The direction each vertex faces', 'The coordinates of every point'], 'A reflection changes orientation and position but preserves lengths and angle sizes.') 
    ]
  },
  {
    id: 'gh-core-ss2-rotations-successive-transformations',
    arc: 0,
    sec: '2.3.1',
    pages: 'NaCCA SHS 2 · pp. 213–227',
    hue: 225,
    horns: 1,
    eyes: 4,
    title: 'The Rotation Tactician',
    topic: 'Rotate plane shapes, combine transformations in a stated order, and connect enlargement with scale drawings.',
    demon: 'The Turning Labyrinth',
    tech: 'Geometry Form · SHS 2 Technique: Transformation Chain',
    scenes: [
      lesson('<p>A <b>rotation</b> turns a point or shape around a fixed centre through a stated angle and direction. A quarter-turn is 90°, a half-turn is 180°, and a full turn is 360°. Unless a question says otherwise, a positive rotation is anticlockwise.</p>'),
      lesson('<p>For a rotation about the origin, a 90° anticlockwise turn maps (x, y) to (−y, x). A 180° turn maps (x, y) to (−x, −y). A 90° clockwise turn maps (x, y) to (y, −x). Always check the centre and direction before changing coordinates.</p>'),
      lesson('<p>Sometimes a shape undergoes <b>successive transformations</b>. Apply the first stated transformation, label the new image, and then apply the next rule to that image. The order matters: changing the order can produce a different final position.</p>'),
      lesson('<p>An <b>enlargement</b> changes the size of a shape from a centre using a scale factor. A scale factor greater than 1 makes it larger; a factor between 0 and 1 makes it smaller. Corresponding lengths are multiplied by the scale factor, while angles stay the same. A scale drawing uses this relationship to represent a real object at a chosen size.</p>'),
      lesson('<p>Translations, reflections and rotations preserve size and shape. Enlargements preserve angle sizes and proportions but change lengths. For a scale factor k, areas are multiplied by k². For example, doubling every side makes the area four times as large.</p>'),
      { type: 'sort', title: 'Match the rule to the transformation', cats: [['Rotation', 'Turn'], ['Successive', 'In order'], ['Enlargement', 'Scale']], items: [
        { n: 'Turn a shape 90° anticlockwise about O', c: 0, i: 'quarter-turn' },
        { n: 'Reflect first, then translate the new image', c: 1, i: 'two-steps' },
        { n: 'Multiply every length by 3', c: 2, i: 'scale-three' },
        { n: 'Apply each move to the image from the previous step', c: 1, i: 'chain' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Turning Labyrinth changes direction at every stage. Follow the order, track each image, and defeat the confusion!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A point (2, 5) is rotated 90° anticlockwise about the origin. What is its image?', ['(−5, 2)', '(5, −2)', '(−2, −5)', '(2, −5)'], 'A 90° anticlockwise rotation maps (x, y) to (−y, x), giving (−5, 2).'),
      question('What is the image of (3, −4) after a 180° rotation about the origin?', ['(−3, 4)', '(3, 4)', '(−4, 3)', '(4, −3)'], 'A 180° rotation maps (x, y) to (−x, −y).'),
      question('Why must you follow the stated order in successive transformations?', ['A different order can produce a different final image', 'The order changes the number of vertices', 'The first transformation is always cancelled', 'Every order gives the same result'], 'Transformations are applied to the current image, so changing the order can change the final position.'),
      question('A 4 cm side is enlarged by scale factor 2. What is the corresponding image side?', ['8 cm', '6 cm', '4 cm', '2 cm'], 'Multiply the original length by the scale factor: 4 × 2 = 8 cm.'),
      question('A shape is enlarged by scale factor 3. By what factor does its area change?', ['9', '3', '6', '12'], 'Area scales by the square of the length factor: 3² = 9.')
    ]
  }
];


// ---------------------------------------------------------------------------
// Strand 3 · Geometry Around Us · Sub-strand 2
// Measurement: vector operations, trigonometry and solid measurement
// (NaCCA SHS 2 · printed pages 239–263; section begins on p. 229)
// ---------------------------------------------------------------------------
export const GHANA_CORE_MATH_SS2_MEASUREMENT_UNIT: UnitInfo = {
  title: 'Geometry Around Us · Measurement',
  ch: 'SS2 · NaCCA pp. 239–263',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_MEASUREMENT_ARCS: ArcInfo[] = [
  {
    n: 3,
    unit: 0,
    subject: 'ghcoremath2',
    title: 'Measurement · Vectors, Trigonometry and Solid Shapes',
    pages: 'NaCCA SHS 2 · pp. 239–263'
  }
];

export const GHANA_CORE_MATH_SS2_MEASUREMENT_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-vector-operations-navigation',
    arc: 0,
    sec: '2.3.2',
    pages: 'NaCCA SHS 2 · pp. 239–244',
    hue: 165,
    horns: 2,
    eyes: 3,
    title: 'The Vector Pathfinder',
    topic: 'Add, subtract and scale vectors in two and three dimensions, investigate their properties, and solve movement problems.',
    demon: 'The Displacement Trickster',
    tech: 'Geometry Form · SHS 2 Technique: Resultant Route',
    scenes: [
      lesson('<p>A <b>vector</b> has both magnitude (size) and direction. We can draw it as an arrow or write it in component form. For example, (3, 2) means 3 units east and 2 units north. In three dimensions, (3, 2, −1) adds a third component, such as 1 unit downward.</p>'),
      lesson('<p>To <b>add vectors</b> in component form, add matching components: (2, 3) + (4, −1) = (6, 2). To subtract, subtract matching components: (2, 3) − (4, −1) = (−2, 4). The same rule works in three dimensions by operating on all three components.</p>'),
      lesson('<p><b>Scalar multiplication</b> multiplies every component by the same number. If a = (2, −3), then 3a = (6, −9), while −a = (−2, 3), which reverses its direction. A zero scalar produces the zero vector.</p>'),
      lesson('<p>Vector addition is commutative and associative: a + b = b + a and (a + b) + c = a + (b + c). Subtraction is not commutative: a − b is generally different from b − a. Scalar multiplication distributes over vector addition: k(a + b) = ka + kb. These properties help us check calculations.</p>'),
      lesson('<p>In a journey, the <b>resultant vector</b> gives the overall displacement from the starting point to the finishing point. If a learner walks 6 km east and then 8 km north, the displacement has components (6, 8) and magnitude √(6² + 8²) = 10 km. The route travelled is 14 km, but the displacement is 10 km.</p>'),
      { type: 'sort', title: 'Choose the correct vector operation', cats: [['Addition', 'Add components'], ['Subtraction', 'Subtract components'], ['Scalar', 'Scale every component'], ['Property', 'Check a rule']], items: [
        { n: '(2, 1) + (3, 4) = (5, 5)', c: 0, i: 'add' },
        { n: '(5, 2) − (1, 6) = (4, −4)', c: 1, i: 'subtract' },
        { n: '4 × (2, −1) = (8, −4)', c: 2, i: 'scale' },
        { n: 'a + b = b + a', c: 3, i: 'commute' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Displacement Trickster has mixed up every route. Combine the vectors, check the rules, and find the true destination!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Find (3, −2) + (4, 5).', ['(7, 3)', '(1, 7)', '(7, −7)', '(12, −10)'], 'Add matching components: (3 + 4, −2 + 5) = (7, 3).'),
      question('Find (6, 1) − (2, 4).', ['(4, −3)', '(8, 5)', '(4, 3)', '(−4, 3)'], 'Subtract matching components: (6 − 2, 1 − 4) = (4, −3).'),
      question('If a = (2, −3), what is −2a?', ['(−4, 6)', '(4, −6)', '(0, −1)', '(−2, 3)'], 'Multiply each component by −2: (−4, 6).'),
      question('Which statement is always true for vector addition?', ['a + b = b + a', 'a − b = b − a', 'a + 0 = 0', '2(a + b) = 2a + b'], 'Vector addition is commutative: changing the order does not change the sum.'),
      question('A person walks 6 km east and 8 km north. What is the magnitude of the displacement?', ['10 km', '14 km', '2 km', '48 km'], 'Use Pythagoras: √(6² + 8²) = √100 = 10 km.')
    ]
  },
  {
    id: 'gh-core-ss2-inverse-trig-elevation-depression',
    arc: 0,
    sec: '2.3.2',
    pages: 'NaCCA SHS 2 · pp. 246–250',
    hue: 215,
    horns: 1,
    eyes: 4,
    title: 'The Horizon Surveyor',
    topic: 'Use inverse trigonometric ratios to find angles and solve everyday height and distance problems involving elevation and depression.',
    demon: 'The Angle Illusionist',
    tech: 'Geometry Form · SHS 2 Technique: Horizon Measure',
    scenes: [
      lesson('<p>In a right-angled triangle, sine, cosine and tangent connect an angle to side lengths. The <b>inverse trigonometric functions</b> work backwards: sin⁻¹, cos⁻¹ and tan⁻¹ help us find an angle when we know a suitable ratio. They are not the same as taking the reciprocal of sine, cosine or tangent.</p>'),
      lesson('<p>For an angle θ in a right-angled triangle: sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, and tan θ = opposite/adjacent. If opposite = 6 and adjacent = 8, then tan θ = 6/8, so θ = tan⁻¹(0.75) ≈ 36.9°. Set your calculator to degrees when the question uses degrees.</p>'),
      lesson('<p>An <b>angle of elevation</b> is measured upwards from a horizontal line to an object above the observer. An <b>angle of depression</b> is measured downwards from a horizontal line to an object below the observer. The two horizontal lines are parallel, so the angle of depression equals the matching angle of elevation at the other point.</p>'),
      lesson('<p>To find a height or distance, sketch and label the right triangle first. Choose sine, cosine or tangent based on the sides you know. For example, if a point is 20 m from the foot of a tower and the angle of elevation to its top is 30°, then height = 20 × tan 30° ≈ 11.55 m, assuming level ground and ignoring eye height.</p>'),
      lesson('<p>Check whether the answer is reasonable and include units. In a real survey, measurements may be affected by uneven ground, instrument height and rounding. State any assumptions rather than treating an estimate as an exact measurement.</p>'),
      { type: 'sort', title: 'Match the situation to the method', cats: [['Inverse ratio', 'Find an angle'], ['Elevation', 'Look upwards'], ['Depression', 'Look downwards'], ['Tangent', 'Opposite ÷ adjacent']], items: [
        { n: 'Known opposite and hypotenuse', c: 0, i: 'inverse-sine' },
        { n: 'Angle from the ground to the top of a tree', c: 1, i: 'up' },
        { n: 'Angle from a lighthouse down to a boat', c: 2, i: 'down' },
        { n: 'Height and horizontal distance in a right triangle', c: 3, i: 'tan' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Angle Illusionist has hidden the heights and distances. Choose the right ratio and reveal the measurements!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which inverse ratio finds an angle when opposite and hypotenuse are known?', ['sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'sin'], 'Sine is opposite divided by hypotenuse, so use sin⁻¹ to find the angle.'),
      question('If tan θ = 1, what is θ in the acute-angle range?', ['45°', '30°', '60°', '90°'], 'tan 45° = 1.'),
      question('From where is an angle of elevation measured?', ['From the horizontal upwards', 'From the vertical downwards', 'From the ground downwards', 'From the hypotenuse'], 'An angle of elevation is measured upwards from the observer’s horizontal line.'),
      question('A person stands 10 m from a vertical pole. The angle of elevation to its top is 45°. What is the pole’s height above eye level?', ['10 m', '5 m', '20 m', '14.1 m'], 'tan 45° = height/10 = 1, so the height is 10 m.'),
      question('A boat is viewed from a lighthouse. The angle measured down from the lighthouse’s horizontal line is called:', ['Angle of depression', 'Angle of elevation', 'Right angle', 'Reflex angle'], 'Looking down from the horizontal to the boat gives an angle of depression.')
    ]
  },
  {
    id: 'gh-core-ss2-solid-measurement-surface-volume-capacity',
    arc: 0,
    sec: '2.3.2',
    pages: 'NaCCA SHS 2 · pp. 252–263',
    hue: 45,
    horns: 2,
    eyes: 2,
    title: 'The Solid Shape Engineer',
    topic: 'Calculate surface area, volume and capacity of 3D shapes, work with SI and imperial units, and solve practical measurement problems.',
    demon: 'The Dimension Devourer',
    tech: 'Geometry Form · SHS 2 Technique: Solid Blueprint',
    scenes: [
      lesson('<p>A solid shape has three dimensions. <b>Surface area</b> is the total area covering its outside faces; it is measured in square units such as cm² or m². <b>Volume</b> is the space occupied by the solid; it is measured in cubic units such as cm³ or m³. Do not mix square and cubic units.</p>'),
      lesson('<p>For a rectangular prism, volume = length × width × height, and surface area = 2(lw + lh + wh). For a cube with edge a, volume = a³ and surface area = 6a². For a cylinder, volume = πr²h and total surface area = 2πr(r + h).</p>'),
      lesson('<p>Other useful formulas include: cone volume = ⅓πr²h and total surface area = πr(r + l), where l is slant height; sphere volume = ⁴⁄₃πr³ and surface area = 4πr²; prism volume = base area × length; pyramid volume = ⅓ × base area × perpendicular height. Check whether the question asks for curved or total surface area.</p>'),
      lesson('<p><b>Capacity</b> is how much a container can hold. Volume describes the space occupied by the contents or object; capacity describes the maximum amount a container can contain. For water, 1 litre = 1,000 cm³ and 1 m³ = 1,000 litres. A hollow container has capacity; a solid block has volume but not container capacity.</p>'),
      lesson('<p>When converting SI and imperial measurements, convert all dimensions to the same unit before using a formula. Useful exact relationships include 1 inch = 2.54 cm, 1 foot = 12 inches and 1 yard = 3 feet. For cubic units, the conversion factor is cubed: do not convert cm³ to m³ using the ordinary length factor alone.</p>'),
      { type: 'sort', title: 'Sort the measurement idea', cats: [['Surface area', 'Square units'], ['Volume', 'Cubic units'], ['Capacity', 'Container amount'], ['Conversion', 'Change units']], items: [
        { n: 'Area of all the outside faces of a box', c: 0, i: 'outside' },
        { n: 'Space occupied by a solid block', c: 1, i: 'space' },
        { n: 'Maximum liquid a bottle can hold', c: 2, i: 'liquid' },
        { n: 'Change 12 inches into 1 foot', c: 3, i: 'units' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Dimension Devourer has mixed up every formula and unit. Build the right solid, choose the correct measurement, and restore order!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What is the volume of a cuboid measuring 4 cm × 3 cm × 5 cm?', ['60 cm³', '47 cm²', '12 cm³', '60 cm²'], 'Volume = length × width × height = 4 × 3 × 5 = 60 cm³.'),
      question('What is the total surface area of a cube with edge 3 cm?', ['54 cm²', '27 cm³', '36 cm²', '9 cm²'], 'Surface area = 6a² = 6 × 3² = 54 cm².'),
      question('A container holds 2 litres. How many cubic centimetres is this?', ['2,000 cm³', '200 cm³', '20,000 cm³', '2 cm³'], '1 litre = 1,000 cm³, so 2 litres = 2,000 cm³.'),
      question('What is the volume of a cylinder with radius 2 cm and height 5 cm?', ['20π cm³', '10π cm²', '40π cm³', '25π cm³'], 'Volume = πr²h = π × 2² × 5 = 20π cm³.'),
      question('Which statement about unit conversion is correct?', ['1 foot = 12 inches', '1 inch = 12 feet', '1 yard = 12 feet', '1 metre = 100 centimetres cubed'], 'One foot is exactly 12 inches. Keep length, area and volume conversions distinct.')
    ]
  }
];


// ---------------------------------------------------------------------------
// Strand 4 · Making Sense of and Using Data · Sub-strand 1
// Statistical Reasoning and its Application in Real Life (NaCCA pp. 264–289)
// ---------------------------------------------------------------------------
export const GHANA_CORE_MATH_SS2_STATISTICS_UNIT: UnitInfo = {
  title: 'Making Sense of and Using Data · Statistical Reasoning',
  ch: 'SS2 · NaCCA pp. 264–289',
  subject: 'ghcoremath2'
};

export const GHANA_CORE_MATH_SS2_STATISTICS_ARCS: ArcInfo[] = [
  {
    n: 4,
    unit: 0,
    subject: 'ghcoremath2',
    title: 'Statistical Reasoning · Collect, Analyse and Communicate Data',
    pages: 'NaCCA SHS 2 · pp. 264–289'
  }
];

export const GHANA_CORE_MATH_SS2_STATISTICS_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss2-survey-design-data-quality',
    arc: 0,
    sec: '2.4.1',
    pages: 'NaCCA SHS 2 · pp. 273–275',
    hue: 175,
    horns: 1,
    eyes: 3,
    title: 'The Survey Strategist',
    topic: 'Design questionnaires and other data-collection tools, choose suitable methods, and identify bias, privacy and ethical risks.',
    demon: 'The Bias Phantom',
    tech: 'Data Form · SHS 2 Technique: Fair Sample',
    scenes: [
      lesson('<p><b>Statistics</b> helps us answer questions using data. Before collecting information, decide what question you want to answer, who can provide useful information, and what type of data you need. A well-designed survey should be clear, relevant and fair.</p>'),
      lesson('<p><b>Primary data</b> is collected first-hand for your investigation, for example through a questionnaire, interview, checklist or observation. <b>Secondary data</b> was collected earlier by someone else, such as an official report or published dataset. Choose the method that fits the question, available time and resources.</p>'),
      lesson('<p>Write questions in simple, neutral language. Avoid leading questions such as “You agree our school canteen is excellent, don’t you?” A more balanced question is “How would you rate the school canteen?” with a range of response choices. Avoid asking two things in one question.</p>'),
      lesson('<p>Check for <b>bias</b>, unclear wording, unfair sampling, gender or cultural assumptions, cost and time limits. Protect privacy: explain the purpose, collect only information you need, avoid names or sensitive details when possible, and ask permission before collecting or sharing responses. Participation should be voluntary.</p>'),
      lesson('<p>Before using a questionnaire, test it with a small group. Check that each question is understood, that answer choices cover likely responses, and that the results will help answer the original question. Improve the instrument when the pilot reveals confusion or missing options.</p>'),
      { type: 'sort', title: 'Spot the sound data-collection choice', cats: [['Primary data', 'Collected first-hand'], ['Secondary data', 'Already collected'], ['Neutral question', 'Avoids leading'], ['Ethical practice', 'Protects people']], items: [
        { n: 'Interview residents about local transport', c: 0, i: 'interview' },
        { n: 'Use a published national census report', c: 1, i: 'report' },
        { n: 'How often do you use the library?', c: 2, i: 'neutral' },
        { n: 'Do not publish names with survey answers', c: 3, i: 'privacy' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Bias Phantom is spreading unfair questions and careless sampling. Build a fair survey and protect every participant!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which is an example of primary data?', ['Answers collected in your own class survey', 'A census report published last year', 'A newspaper article using old figures', 'A textbook table'], 'Primary data is collected first-hand by the researcher for the investigation.'),
      question('Which question is least biased?', ['How would you rate the school library?', 'You love our great library, right?', 'Why is the library so poor?', 'Don’t you agree the library is best?'], 'A neutral question does not push respondents towards a particular answer.'),
      question('What should you do before using a new questionnaire widely?', ['Pilot-test it with a small group', 'Remove all answer choices', 'Collect names and passwords', 'Assume every question is clear'], 'A small pilot can reveal confusing wording and missing response options.'),
      question('Which is an important ethical practice?', ['Explain the purpose and protect privacy', 'Publish every participant’s name', 'Collect unrelated personal details', 'Make participation compulsory'], 'Participants should understand the purpose and their privacy should be respected.'),
      question('A researcher uses an existing government report. This is:', ['Secondary data', 'Primary data', 'A population', 'A questionnaire'], 'Secondary data has already been collected by another person or organisation.')
    ]
  },
  {
    id: 'gh-core-ss2-data-displays-dispersion',
    arc: 0,
    sec: '2.4.1',
    pages: 'NaCCA SHS 2 · pp. 276–287',
    hue: 220,
    horns: 2,
    eyes: 4,
    title: 'The Data Pattern Analyst',
    topic: 'Organise grouped and ungrouped data, interpret ogives, waffle diagrams and box plots, and compare spread using measures of dispersion.',
    demon: 'The Scatter Spectre',
    tech: 'Data Form · SHS 2 Technique: Spread Scan',
    scenes: [
      lesson('<p>After collecting data, organise it so patterns are easier to see. A <b>frequency table</b> counts how often values or class intervals occur. A grouped table combines values into intervals; an ungrouped table lists individual values or categories.</p>'),
      lesson('<p>A <b>cumulative frequency</b> is a running total of frequencies. An ogive (cumulative frequency curve) plots cumulative frequency against class boundaries. It helps us estimate how many observations lie below a value and can be used to estimate the median and quartiles.</p>'),
      lesson('<p>A <b>waffle diagram</b> uses equal-sized squares to show parts of a whole, often as percentages. A <b>box-and-whisker plot</b> summarises data using the minimum, lower quartile (Q1), median, upper quartile (Q3) and maximum. The interquartile range is Q3 − Q1 and describes the spread of the middle half of the data.</p>'),
      lesson('<p>The <b>range</b> is maximum minus minimum. The <b>variance</b> measures the average squared distance from the mean; standard deviation is the square root of variance and is expressed in the same units as the data. For a population, divide the sum of squared deviations by N; for a sample estimate, divide by n − 1.</p>'),
      lesson('<p>Compare spread together with a measure of centre. A smaller standard deviation means values are generally closer to the mean. A box plot with a longer box has a larger interquartile range. Always consider the context, possible outliers and whether the data sets are measured on comparable scales.</p>'),
      { type: 'sort', title: 'Match each display or measure', cats: [['Ogive', 'Cumulative frequency'], ['Waffle', 'Parts of a whole'], ['Box plot', 'Five-number summary'], ['Dispersion', 'Spread']], items: [
        { n: 'Running total plotted against class boundaries', c: 0, i: 'curve' },
        { n: 'A grid of equal squares showing percentages', c: 1, i: 'grid' },
        { n: 'Minimum, Q1, median, Q3 and maximum', c: 2, i: 'box' },
        { n: 'Variance and standard deviation', c: 3, i: 'spread' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Scatter Spectre has hidden the shape of the data. Choose the right display and reveal how widely the values are spread!' },
      { type: 'battle' }
    ],
    quiz: [
      question('A class has frequencies 3, 5 and 2 in three consecutive intervals. What is the cumulative frequency after the third interval?', ['10', '7', '5', '2'], 'Add the frequencies: 3 + 5 + 2 = 10.'),
      question('Which graph displays cumulative frequency?', ['Ogive', 'Waffle diagram', 'Pie chart', 'Scatter plot'], 'An ogive plots cumulative frequency against class boundaries.'),
      question('For the data 2, 4, 6, 8, 10, what is the range?', ['8', '6', '10', '5'], 'Range = maximum − minimum = 10 − 2 = 8.'),
      question('If Q1 = 12 and Q3 = 20, what is the interquartile range?', ['8', '32', '16', '4'], 'IQR = Q3 − Q1 = 20 − 12 = 8.'),
      question('What does a small standard deviation usually indicate?', ['Values are close to the mean', 'Values are very widely spread', 'The mean is zero', 'There are no repeated values'], 'A small standard deviation indicates that values tend to lie close to the mean.')
    ]
  },
  {
    id: 'gh-core-ss2-statistical-inference-community-project',
    arc: 0,
    sec: '2.4.1',
    pages: 'NaCCA SHS 2 · pp. 287–289',
    hue: 45,
    horns: 2,
    eyes: 2,
    title: 'The Community Evidence Leader',
    topic: 'Use mathematical evidence to make everyday inferences, plan a data project beyond school, analyse results and communicate responsible recommendations.',
    demon: 'The Rumour Golem',
    tech: 'Data Form · SHS 2 Technique: Evidence Report',
    scenes: [
      lesson('<p>An <b>inference</b> is a conclusion drawn from evidence. When a news report or social-media post makes a claim using numbers, ask: Where did the data come from? Who was included? How many people or observations were counted? Does the display support the claim?</p>'),
      lesson('<p>Use mathematical arguments to support a choice, but recognise uncertainty and other people’s perspectives. A sample may not represent the whole population. A relationship in the data does not automatically prove that one factor caused another. Explain what the data can and cannot show.</p>'),
      lesson('<p>A small statistical project begins with a clear question. Identify the population you want to understand, choose a suitable sample and explain why it is appropriate. Design a collection method, collect only relevant data, and record how the information was obtained.</p>'),
      lesson('<p>Analyse the results using suitable tables, percentages, charts, quartiles, variance or standard deviation. Select methods that fit the data type and project question. Check for missing responses, unusual values and limitations before drawing conclusions.</p>'),
      lesson('<p>Finish with a short report: state the question, method, sample, key results, conclusion and practical recommendation. Use a chart or infographic where it helps. Share results responsibly, protect participants’ privacy and distinguish findings from opinions.</p>'),
      { type: 'sort', title: 'Put the evidence project in order', cats: [['Plan', 'Ask and design'], ['Collect', 'Gather data'], ['Analyse', 'Summarise results'], ['Communicate', 'Report findings']], items: [
        { n: 'Choose a question and plan a fair sample', c: 0, i: 'plan' },
        { n: 'Use the questionnaire and record responses', c: 1, i: 'collect' },
        { n: 'Calculate quartiles and compare charts', c: 2, i: 'analyse' },
        { n: 'Present conclusions and recommendations', c: 3, i: 'report' }
      ] },
      { who: 'd', vis: 'demon', text: 'The Rumour Golem turns guesses into “facts”. Defeat it with a fair sample, sound calculations and evidence-based conclusions!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What is an inference?', ['A conclusion based on evidence', 'A guess with no information', 'A type of questionnaire', 'A list of names'], 'An inference is a conclusion drawn from analysed evidence.'),
      question('A survey of only one sports club is used to describe every learner in a school. What is the main concern?', ['The sample may not represent the school', 'The sample is always too large', 'The data must be continuous', 'The mean cannot be calculated'], 'A sample drawn from one club may not represent learners with different interests.'),
      question('Which statement is safest when two variables move together?', ['They are associated, but this alone does not prove causation', 'One variable definitely causes the other', 'The data must be incorrect', 'The variables are identical'], 'Association alone does not establish a cause-and-effect relationship.'),
      question('Which item belongs in a project report?', ['Method, results, conclusions and recommendations', 'Only the researcher’s opinion', 'Participants’ private details', 'Unexplained numbers without context'], 'A useful report explains how data was collected and what the results support.'),
      question('Why should a project justify its sample?', ['To explain how well it represents the population', 'To make every result identical', 'To avoid analysing the data', 'To guarantee a preferred conclusion'], 'A justified sample helps readers judge whether conclusions can reasonably be generalised.')
    ]
  }
];
