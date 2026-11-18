import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/** Ghana NaCCA JHS 3 Mathematics · Number strand. */
export const GHANA_JHS3_MATH_SUBJECT: SubjectInfo = {
  id: 'ghjhs3math',
  name: 'Mathematics · JHS 3',
  blurb: 'Ghana NaCCA JHS 3 Mathematics · Number and Algebra strands. Strengthen numerical reasoning, algebraic manipulation, equations and linear relationships.',
  meta: 'Ghana NaCCA · JHS 3 · Number and Algebra strands · 18 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><path d="M18 88 L45 32 L72 88 Z M48 88 L76 18 L104 88 Z" fill="none" stroke="#ffd166" stroke-width="4"/><path d="M30 72 H91" stroke="#7bdff2" stroke-width="4" stroke-linecap="round"/></svg>'
};

export const GHANA_JHS3_MATH_UNIT: UnitInfo = {
  title: 'Advanced Number and Financial Reasoning',
  ch: 'JHS 3 · NaCCA Number strand',
  subject: 'ghjhs3math'
};

export const GHANA_JHS3_MATH_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs3math', title: 'Indices and Laws of Operations', pages: 'NaCCA CCP · JHS Mathematics · Number' },
  { n: 2, unit: 0, subject: 'ghjhs3math', title: 'Standard Form and Rational Numbers', pages: 'NaCCA CCP · JHS Mathematics · Number' },
  { n: 3, unit: 0, subject: 'ghjhs3math', title: 'Ratio, Proportion and Financial Mathematics', pages: 'NaCCA CCP · JHS Mathematics · Number' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-number', text });

export const GHANA_JHS3_MATH_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-number-indices',
    arc: 0, sec: 'Number', pages: 'NaCCA CCP · JHS Mathematics · Number', hue: 42, horns: 2, eyes: 2,
    title: 'The Power of Indices Trial',
    topic: 'Use powers, roots and index laws to simplify numerical expressions and solve practical problems.',
    demon: 'The Exponent Eater', tech: 'Number Form · Twelfth Technique: Power and Root Control',
    scenes: [
      lesson('<p>An <b>index</b> tells how many times a number is used as a factor. In 2⁴, the base is 2 and the index is 4: 2 × 2 × 2 × 2 = 16. The expression 5² means 5 × 5, not 5 × 2.</p>'),
      lesson('<p>When multiplying powers with the same base, add the indices: 3² × 3⁴ = 3⁶. When dividing powers with the same base, subtract the indices: 5⁶ ÷ 5² = 5⁴. The base must be the same.</p>'),
      lesson('<p>A power raised to another power means multiply the indices: (2³)² = 2⁶. Any non-zero number to the power zero is 1. A negative index means a reciprocal: 2⁻² = 1 ÷ 2² = 1/4.</p>'),
      lesson('<p>A <b>square root</b> reverses squaring: √49 = 7 because 7² = 49. A cube root reverses cubing: ∛27 = 3. Check roots by raising your answer to the required power.</p>'),
      { who: 'd', vis: 'demon', text: 'I have scrambled the index laws. Combine powers carefully, then prove each result with multiplication!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the value of 2⁵?', ['32', '10', '25', '16'], '2⁵ = 2 × 2 × 2 × 2 × 2 = 32.'),
      q('Simplify 4² × 4³.', ['4⁵', '4⁶', '4¹', '16⁵'], 'When multiplying powers with the same base, add indices: 2 + 3 = 5.'),
      q('Simplify 7⁶ ÷ 7².', ['7⁴', '7⁸', '7³', '7¹²'], 'When dividing powers with the same base, subtract indices: 6 − 2 = 4.'),
      q('What is 3⁰ for a non-zero base?', ['1', '0', '3', '−1'], 'Any non-zero number raised to the power zero equals 1.'),
      q('What is √144?', ['12', '14', '72', '24'], '12 × 12 = 144, so the square root is 12.')
    ]
  },
  {
    id: 'gh-jhs3-number-standard-form',
    arc: 1, sec: 'Number', pages: 'NaCCA CCP · JHS Mathematics · Number', hue: 214, horns: 2, eyes: 2,
    title: 'The Standard-Form Navigator',
    topic: 'Express very large and very small quantities in standard form, compare rational numbers and calculate accurately.',
    demon: 'The Decimal Drifter', tech: 'Number Form · Thirteenth Technique: Scale and Precision',
    scenes: [
      lesson('<p><b>Standard form</b> writes a number as A × 10ⁿ, where 1 ≤ A &lt; 10 and n is an integer. For example, 45,000 = 4.5 × 10⁴. Move the decimal point until only one non-zero digit is before it, then count the places moved.</p>'),
      lesson('<p>For a small number, the power is negative. For example, 0.0032 = 3.2 × 10⁻³. The negative index shows that the number is divided by a power of ten: 3.2 ÷ 1,000 = 0.0032.</p>'),
      lesson('<p>To compare fractions, use a common denominator or convert them to decimals. For example, 3/4 = 0.75 and 2/3 ≈ 0.667, so 3/4 is greater. Keep enough decimal places when rounding so your comparison remains reliable.</p>'),
      lesson('<p>Rounding gives an estimate at a chosen level of accuracy. Significant figures begin at the first non-zero digit. In 0.004786, the first two significant figures are 4 and 7, so to two significant figures the value is 0.0048.</p>'),
      { who: 'd', vis: 'demon', text: 'My decimal points keep shifting and my estimates lose accuracy. Restore each number to standard form and check its size!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Write 62,000 in standard form.', ['6.2 × 10⁴', '62 × 10³', '6.2 × 10³', '0.62 × 10⁴'], 'Move the decimal four places left: 6.2 × 10⁴.'),
      q('Write 0.00054 in standard form.', ['5.4 × 10⁻⁴', '5.4 × 10⁴', '54 × 10⁻⁴', '0.54 × 10⁻³'], 'Move the decimal four places right, giving a power of −4.'),
      q('Which is greater: 5/6 or 3/4?', ['5/6', '3/4', 'They are equal', 'Cannot be compared'], '5/6 ≈ 0.833, while 3/4 = 0.75.'),
      q('Round 0.007846 to two significant figures.', ['0.0078', '0.0079', '0.0080', '0.007'], 'The first two significant digits are 7 and 8; the next digit is 4, so keep 78.'),
      q('What does the negative index in 2.5 × 10⁻³ indicate?', ['A number smaller than 1', 'A number greater than 10,000', 'A negative value', 'A number equal to zero'], 'A negative power of ten represents a small positive number when the coefficient is positive.')
    ]
  },
  {
    id: 'gh-jhs3-number-ratio-finance',
    arc: 2, sec: 'Number', pages: 'NaCCA CCP · JHS Mathematics · Number', hue: 166, horns: 2, eyes: 2,
    title: 'The Proportion and Money Quest',
    topic: 'Solve ratio and proportion problems, work with rates and percentages, and apply financial mathematics to everyday decisions.',
    demon: 'The Market Manipulator', tech: 'Number Form · Fourteenth Technique: Proportion in Practice',
    scenes: [
      lesson('<p>A <b>ratio</b> compares quantities. If the ratio of mangoes to oranges is 2:3, there are 2 parts mangoes for every 3 parts oranges. The total is 5 equal parts. If there are 25 fruits, one part is 25 ÷ 5 = 5.</p>'),
      lesson('<p>To share an amount in a ratio, add the parts, find the value of one part, then multiply. Sharing GH₵120 in the ratio 2:3 gives 5 parts, so each part is GH₵24. The shares are GH₵48 and GH₵72.</p>'),
      lesson('<p><b>Direct proportion</b> means two quantities increase or decrease in the same ratio. If 4 notebooks cost GH₵28, then 8 notebooks cost twice as much: GH₵56, assuming the price per notebook stays the same.</p>'),
      lesson('<p>Percentages help compare prices and money. A 10% discount on GH₵80 is GH₵8, so the sale price is GH₵72. Simple interest is calculated using I = P × R × T ÷ 100, where P is principal, R is annual rate percent and T is time in years.</p>'),
      { who: 'd', vis: 'demon', text: 'I have changed the market ratios and hidden the true discount. Calculate each share and rate before making a decision!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A mixture uses flour and sugar in the ratio 3:2. How many total parts are there?', ['5', '6', '3', '2'], 'Add the ratio parts: 3 + 2 = 5.'),
      q('Share GH₵90 in the ratio 2:3. What is the smaller share?', ['GH₵36', 'GH₵54', 'GH₵30', 'GH₵45'], 'There are 5 parts; each is GH₵18, so the smaller share is 2 × 18 = GH₵36.'),
      q('If 5 identical exercise books cost GH₵40, what is the cost of 8 at the same rate?', ['GH₵64', 'GH₵45', 'GH₵80', 'GH₵32'], 'One book costs GH₵8, so 8 books cost 8 × 8 = GH₵64.'),
      q('A GH₵150 item has a 20% discount. What is the sale price?', ['GH₵120', 'GH₵130', 'GH₵30', 'GH₵125'], '20% of GH₵150 is GH₵30; subtract the discount to get GH₵120.'),
      q('Find the simple interest on GH₵200 at 5% per year for 2 years.', ['GH₵20', 'GH₵10', 'GH₵25', 'GH₵40'], 'I = 200 × 5 × 2 ÷ 100 = GH₵20.')
    ]
  }
];
