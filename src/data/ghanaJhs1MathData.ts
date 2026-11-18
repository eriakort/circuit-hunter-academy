import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/**
 * Ghana NaCCA JHS 1 Mathematics pilot.
 * Scope: introductory Number strand foundations, taught through practical Ghanaian contexts.
 * Curriculum source: NaCCA Common Core Programme Mathematics (JHS 1–3).
 */
export const GHANA_JHS1_MATH_SUBJECT: SubjectInfo = {
  id: 'ghjhs1math',
  name: 'Mathematics · JHS 1',
  blurb: 'Ghana NaCCA JHS 1 Mathematics: number sense, operations, factors, multiples, fractions and percentages.',
  meta: 'Ghana NaCCA · JHS 1 · Number strand pilot · 3 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="38" fill="none" stroke="#ffd166" stroke-width="4"/><path d="M34 60 H86 M60 34 V86" stroke="#7bdff2" stroke-width="5" stroke-linecap="round"/><circle cx="60" cy="60" r="9" fill="#ffd166"/></svg>'
};

export const GHANA_JHS1_MATH_UNIT: UnitInfo = {
  title: 'Number Sense and Everyday Mathematics',
  ch: 'JHS 1 · NaCCA Number strand · Pilot',
  subject: 'ghjhs1math'
};

export const GHANA_JHS1_MATH_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs1math', title: 'Place Value and Number Operations', pages: 'NaCCA CCP · JHS Mathematics · Number' },
  { n: 2, unit: 0, subject: 'ghjhs1math', title: 'Factors, Multiples and Prime Numbers', pages: 'NaCCA CCP · JHS Mathematics · Number' },
  { n: 3, unit: 0, subject: 'ghjhs1math', title: 'Fractions, Decimals and Percentages', pages: 'NaCCA CCP · JHS Mathematics · Number' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-number', text });

export const GHANA_JHS1_MATH_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-math-place-value-operations', arc: 0, sec: 'Number', pages: 'NaCCA CCP · JHS Mathematics', hue: 42, horns: 2, eyes: 2,
    title: 'The Market Number Mission',
    topic: 'Read and compare whole numbers, understand place value, and use the four operations in everyday problems.',
    demon: 'The Digit Shifter', tech: 'Number Form · First Technique: Place-Value Focus',
    scenes: [
      lesson('<p>Welcome to JHS 1 Mathematics! Numbers help us plan, compare and solve everyday problems. In a market, a trader may sell 125 oranges in the morning and 238 in the afternoon. We can use addition to find the total: 125 + 238 = 363.</p>'),
      lesson('<p>Each digit has a place and a value. In 4,582, the 4 means 4 thousands, the 5 means 5 hundreds, the 8 means 8 tens and the 2 means 2 ones. We can write it as 4,000 + 500 + 80 + 2. A digit’s value depends on its position.</p>'),
      lesson('<p>The four operations answer different questions: addition combines amounts, subtraction finds a difference, multiplication finds equal groups, and division shares or groups equally. For example, 6 boxes with 24 exercise books each contain 6 × 24 = 144 books.</p>'),
      lesson('<p>Use the order of operations carefully: brackets first, then multiplication or division from left to right, then addition or subtraction from left to right. For 8 + 3 × 4, multiply first: 8 + 12 = 20, not 44.</p>'),
      { who: 'd', vis: 'demon', text: 'I have moved the digits and scrambled the operations. Can you restore their values?' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the value of the digit 7 in 3,742?', ['700', '70', '7,000', '7'], 'The 7 is in the hundreds place, so its value is 700.'),
      q('Calculate 245 + 178.', ['423', '413', '433', '323'], '245 + 178 = 423.'),
      q('A school has 8 classes with 32 learners each. How many learners are there?', ['256', '248', '240', '264'], '8 × 32 = 256 learners.'),
      q('Evaluate 8 + 3 × 4.', ['20', '44', '32', '23'], 'Multiply first: 3 × 4 = 12, then add 8.'),
      q('Which number is greatest?', ['5,082', '5,028', '5,208', '4,999'], 'Compare from the thousands place, then hundreds: 5,208 is greatest.')
    ]
  },
  {
    id: 'gh-jhs1-math-factors-multiples-primes', arc: 1, sec: 'Number', pages: 'NaCCA CCP · JHS Mathematics', hue: 166, horns: 2, eyes: 2,
    title: 'The Factor and Multiple Forge',
    topic: 'Identify factors, multiples, common factors, common multiples and prime numbers.',
    demon: 'The Factor Fog', tech: 'Number Form · Second Technique: Pattern Finder',
    scenes: [
      lesson('<p>A <b>factor</b> divides a number exactly, with no remainder. The factors of 12 are 1, 2, 3, 4, 6 and 12. A <b>multiple</b> is the result of multiplying a number by a whole number: multiples of 5 include 5, 10, 15 and 20.</p>'),
      lesson('<p>A <b>prime number</b> has exactly two positive factors: 1 and itself. Examples are 2, 3, 5, 7 and 11. The number 1 is not prime because it has only one positive factor. The number 2 is the only even prime.</p>'),
      lesson('<p>Common factors are factors shared by two or more numbers. The common factors of 12 and 18 are 1, 2, 3 and 6, so their highest common factor (HCF) is 6. Common multiples are shared multiples; the lowest common multiple (LCM) of 4 and 6 is 12.</p>'),
      lesson('<p>HCF can help divide items into the largest equal groups without leftovers. LCM can help find when repeating events happen together—for example, two school clubs that meet every 4 and 6 days.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the common patterns. Find the factors and multiples to defeat me!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which number is a factor of 24?', ['6', '5', '7', '9'], '24 ÷ 6 = 4, so 6 is a factor.'),
      q('Which number is prime?', ['13', '15', '21', '27'], '13 has exactly two positive factors: 1 and 13.'),
      q('What is the HCF of 12 and 18?', ['6', '3', '9', '36'], 'The greatest factor common to both numbers is 6.'),
      q('What is the LCM of 4 and 6?', ['12', '10', '18', '24'], 'The first positive multiple shared by 4 and 6 is 12.'),
      q('Why is 1 not a prime number?', ['It has only one positive factor.', 'It is an odd number.', 'It is smaller than 2.', 'It has no factors.'], 'A prime number must have exactly two positive factors.')
    ]
  },
  {
    id: 'gh-jhs1-math-fractions-decimals-percentages', arc: 2, sec: 'Number', pages: 'NaCCA CCP · JHS Mathematics', hue: 214, horns: 2, eyes: 2,
    title: 'The Fraction Market Challenge',
    topic: 'Represent equivalent fractions and connect fractions, decimals and percentages in practical situations.',
    demon: 'The Denominator Trickster', tech: 'Number Form · Third Technique: Equal Parts',
    scenes: [
      lesson('<p>A fraction describes equal parts of a whole. In 3/4, the denominator 4 tells us that the whole is divided into four equal parts; the numerator 3 tells us that three parts are selected.</p>'),
      lesson('<p>Equivalent fractions have the same value. Multiply or divide the numerator and denominator by the same non-zero number: 1/2 = 2/4 = 4/8. To compare fractions, use a common denominator or a picture of equal parts.</p>'),
      lesson('<p>Fractions, decimals and percentages are different ways to describe parts of a whole. One quarter is 1/4 = 0.25 = 25%. To change a fraction to a decimal, divide the numerator by the denominator. To change a decimal to a percentage, multiply by 100.</p>'),
      lesson('<p>At a market, 25% of 80 mangoes is 0.25 × 80 = 20 mangoes. A percentage means “out of 100”, so 25% is one quarter. Estimate first and check that your answer makes sense.</p>'),
      { who: 'd', vis: 'demon', text: 'I have disguised fractions as decimals and percentages. Match their values!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which fraction is equivalent to 1/2?', ['3/6', '2/3', '1/3', '3/5'], 'Multiply the numerator and denominator of 1/2 by 3 to get 3/6.'),
      q('Write 0.25 as a percentage.', ['25%', '2.5%', '250%', '0.25%'], 'Multiply 0.25 by 100 to get 25%.'),
      q('What is 1/4 of 60?', ['15', '12', '20', '30'], '60 ÷ 4 = 15.'),
      q('A farmer sells 20% of 50 plantain bunches. How many bunches is that?', ['10', '5', '20', '25'], '20% of 50 = 0.20 × 50 = 10.'),
      q('Which is greatest?', ['0.7', '0.65', '0.07', '0.6'], '0.70 is greater than 0.65, 0.07 and 0.60.')
    ]
  }
];
