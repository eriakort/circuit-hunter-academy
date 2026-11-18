import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 1 Mathematics · Algebra strand increment. */
export const GHANA_JHS1_ALGEBRA_UNIT: UnitInfo = {
  title: 'Algebraic Thinking and Relationships',
  ch: 'JHS 1 · NaCCA Algebra strand',
  subject: 'ghjhs1math'
};

export const GHANA_JHS1_ALGEBRA_ARCS: ArcInfo[] = [
  { n: 4, unit: 0, subject: 'ghjhs1math', title: 'Patterns, Expressions and Equations', pages: 'NaCCA CCP · JHS Mathematics · Algebra' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-algebra', text });

export const GHANA_JHS1_ALGEBRA_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-algebra-patterns-and-variables',
    arc: 0, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra',
    hue: 282, horns: 2, eyes: 2,
    title: 'The Pattern Hunter’s Trial',
    topic: 'Recognise, describe and extend number patterns; use a letter or symbol to represent an unknown number.',
    demon: 'The Pattern Mimic',
    tech: 'Algebra Form · First Technique: Find the Rule',
    scenes: [
      lesson('<p>Algebra helps us describe patterns and relationships. Look at this sequence: 3, 6, 9, 12, … Each term increases by 3. The rule is “add 3”, so the next two terms are 15 and 18.</p>'),
      lesson('<p>A pattern can be described in words, with a table, or with a rule. For the sequence 4, 7, 10, 13, … the term number and term value are related: multiply the term number by 3, then add 1. The 5th term is 3 × 5 + 1 = 16.</p>'),
      lesson('<p>A letter such as n can stand for a number that changes. In 3n + 1, substitute a value for n to find the result. If n = 4, then 3n + 1 = 3 × 4 + 1 = 13. The letter is called a variable.</p>'),
      lesson('<p>When you describe a pattern, check the rule against more than one term. A good rule explains every term, not just the first two. Use a table to keep the term number and term value organised.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the rule in the sequence. Discover it and predict the next terms!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What are the next two terms in 5, 10, 15, 20, …?', ['25 and 30', '24 and 28', '30 and 35', '21 and 22'], 'The pattern adds 5 each time, so the next terms are 25 and 30.'),
      q('Which rule describes 2, 5, 8, 11, …?', ['Add 3 each time', 'Add 2 each time', 'Multiply by 2', 'Subtract 3 each time'], 'Each term is 3 more than the previous term.'),
      q('If the rule is 4n, what is the value when n = 6?', ['24', '10', '46', '64'], 'Substitute 6 for n: 4 × 6 = 24.'),
      q('A pattern starts at 2 and adds 4 each time. What is its fourth term?', ['14', '12', '16', '10'], 'The terms are 2, 6, 10, 14.'),
      q('In the expression 7 + x, what does x represent?', ['A number or value that can vary', 'Always the number 7', 'A multiplication sign', 'The answer must be 7'], 'A variable is a letter or symbol used to represent a number.')
    ]
  },
  {
    id: 'gh-jhs1-algebra-expressions',
    arc: 0, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra',
    hue: 318, horns: 2, eyes: 2,
    title: 'The Expression Workshop',
    topic: 'Translate simple verbal statements into algebraic expressions and evaluate expressions by substitution.',
    demon: 'The Expression Enchanter',
    tech: 'Algebra Form · Second Technique: Translate and Substitute',
    scenes: [
      lesson('<p>An algebraic expression combines numbers, variables and operations. “A number plus 5” can be written as x + 5. “Three times a number” is 3x. The multiplication sign is often left out between a number and a variable.</p>'),
      lesson('<p>Words such as “sum” mean addition, “difference” means subtraction, “product” means multiplication and “quotient” means division. For example, “the difference between a number and 4” is x − 4.</p>'),
      lesson('<p>To evaluate an expression, replace the variable with its given value and follow the order of operations. If x = 5, then 2x + 3 = 2 × 5 + 3 = 13. Multiply before adding.</p>'),
      lesson('<p>Brackets show that a group belongs together. If x = 4, then 2(x + 3) = 2(4 + 3) = 2 × 7 = 14. Do the calculation inside the brackets first.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed mathematical language with symbols. Turn each statement into the correct expression!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which expression means “a number increased by 8”?', ['x + 8', '8x', 'x − 8', '8 ÷ x'], 'Increased by means add, so the expression is x + 8.'),
      q('How can “five times a number” be written?', ['5x', 'x + 5', 'x − 5', '5 + x'], 'Five times a number is 5 multiplied by x, written 5x.'),
      q('Evaluate 3x + 2 when x = 4.', ['14', '20', '18', '10'], '3 × 4 + 2 = 12 + 2 = 14.'),
      q('Evaluate 2(x + 1) when x = 3.', ['8', '7', '9', '10'], 'First calculate the brackets: 2 × (3 + 1) = 2 × 4 = 8.'),
      q('Which operation does the word “product” describe?', ['Multiplication', 'Addition', 'Subtraction', 'Division'], 'The product is the result of multiplication.')
    ]
  },
  {
    id: 'gh-jhs1-algebra-simple-equations',
    arc: 0, sec: 'Algebra', pages: 'NaCCA CCP · JHS Mathematics · Algebra',
    hue: 24, horns: 2, eyes: 2,
    title: 'The Balance Gate',
    topic: 'Understand equality and solve simple one-step equations using inverse operations.',
    demon: 'The Balance Breaker',
    tech: 'Algebra Form · Third Technique: Keep Both Sides Equal',
    scenes: [
      lesson('<p>An equation says that two expressions have the same value. The equals sign means “is equal to”; it does not mean “write the answer next”. Think of an equation as a balanced scale.</p>'),
      lesson('<p>To solve x + 6 = 14, find the number that makes the statement true. Subtract 6 from both sides: x = 14 − 6 = 8. The balance stays equal because we do the same operation to both sides.</p>'),
      lesson('<p>For x − 5 = 9, add 5 to both sides, giving x = 14. Addition undoes subtraction. These opposite operations are called inverse operations.</p>'),
      lesson('<p>For 4x = 20, divide both sides by 4 to get x = 5. Check by substituting: 4 × 5 = 20. Always check that your value makes the original equation true.</p>'),
      { who: 'd', vis: 'demon', text: 'The two sides must stay balanced. Choose the inverse operation and unlock the unknown!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Solve x + 7 = 15.', ['8', '22', '7', '9'], 'Subtract 7 from both sides: x = 15 − 7 = 8.'),
      q('Solve x − 4 = 10.', ['14', '6', '40', '2'], 'Add 4 to both sides: x = 10 + 4 = 14.'),
      q('Solve 3x = 21.', ['7', '18', '24', '63'], 'Divide both sides by 3: x = 21 ÷ 3 = 7.'),
      q('Which value makes 2x + 1 = 9 true?', ['4', '5', '8', '3'], 'If x = 4, then 2 × 4 + 1 = 9.'),
      q('What should you do to both sides of x + 9 = 16 to isolate x?', ['Subtract 9', 'Add 9', 'Multiply by 9', 'Divide by 9'], 'Subtract 9 from both sides to keep the equation balanced.')
    ]
  }
];
