import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_ALGEBRA_ARCS: ArcInfo[] = [
  {
    n: 16,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Linear Equations and Inequalities',
    pages: 'NaCCA SHS 1 · pp. 62–66'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_ALGEBRA_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-linear-equations-inequalities',
    arc: 14,
    sec: 'Algebraic reasoning',
    pages: 'NaCCA SHS 1 · pp. 62–66',
    hue: 268,
    horns: 2,
    eyes: 2,
    title: 'The Equation Balance Trial',
    topic: 'Rearrange formulae, solve linear equations in one variable, represent inequalities on a number line, and apply both to everyday problems.',
    demon: 'The Balance Breaker',
    tech: 'Algebra Form · Eighteenth Technique: Keep Both Sides Equal',
    scenes: [
      lesson('<p><b>An equation is a balance.</b> The two sides have the same value. Whatever operation you perform on one side, perform on the other side too. For example, if x + 5 = 12, subtract 5 from both sides: x = 7. Check by substituting: 7 + 5 = 12.</p>'),
      lesson('<p><b>Solve step by step.</b> For 3x − 12 = 21, add 12 to both sides to get 3x = 33, then divide both sides by 3: x = 11. For an equation with brackets, expand first: 7(x − 6) = 3(x + 9) becomes 7x − 42 = 3x + 27, so 4x = 69 and x = 69/4.</p>'),
      lesson('<p><b>Change the subject of a formula.</b> The subject is the variable you want alone. From y = mx + c, subtract mx from both sides to make c the subject: c = y − mx. From 3c + 2r = md + k, subtract 3c and divide by 2: r = (md + k − 3c)/2. Keep each operation balanced.</p>'),
      lesson('<p><b>An inequality compares values.</b> The symbols mean: &lt; less than, &gt; greater than, ≤ less than or equal to, and ≥ greater than or equal to. For x + 3 &lt; 8, subtract 3 from both sides: x &lt; 5. The solution is every real number less than 5, not just one number.</p>'),
      lesson('<p><b>Important inequality rule:</b> When you multiply or divide both sides by a negative number, reverse the inequality sign. For example, −2x &lt; 6. Divide by −2 and reverse &lt; to &gt;, giving x &gt; −3. Check with a value such as x = 0: −2(0) &lt; 6 is true.</p>'),
      lesson('<p><b>Show the solution on a number line.</b> For x &lt; 4, draw an open circle at 4 and shade to the left because 4 is not included. For x ≤ 4, use a filled circle because 4 is included. Shade right for values greater than the boundary.</p>'),
      lesson('<p><b>Everyday example — a transport budget.</b> You have GH₵50 and need to keep GH₵14 for your return journey. If each snack costs GH₵6 and you buy n snacks, the condition is 6n + 14 ≤ 50. Subtract 14: 6n ≤ 36. Divide by 6: n ≤ 6. You can buy at most 6 snacks.</p>'),
      lesson('<p><b>Formula example — a club event.</b> A club has GH₵120 for entry tickets costing GH₵8 each. If n is the number of tickets, 8n = 120 gives n = 15. If the club must also reserve GH₵24 for supplies, use 8n + 24 ≤ 120, so n ≤ 12. Equations find an exact value; inequalities describe a range of allowed values.</p>'),
      lesson('<p><b>Check before you finish.</b> Substitute an equation answer into the original equation. For inequalities, test a value from the proposed solution set and a value outside it. On number lines, remember: open circle means excluded; filled circle means included.</p>'),
      { who: 'd', vis: 'demon', text: 'I will tip your balance, reverse your signs and hide the correct solution set. Keep both sides fair and prove every answer!' },
      { type: 'battle' }
    ],
    quiz: [
      question('Solve 3x − 12 = 21.', ['x = 11', 'x = 3', 'x = 9', 'x = 33'], 'Add 12 to both sides: 3x = 33. Divide by 3 to get x = 11.'),
      question('Make c the subject of y = mx + c.', ['c = y − mx', 'c = y + mx', 'c = mx − y', 'c = y/mx'], 'Subtract mx from both sides to isolate c.'),
      question('Solve −2x < 6.', ['x > −3', 'x < −3', 'x > 3', 'x < 3'], 'Divide by −2 and reverse the inequality sign, giving x > −3.'),
      question('You have GH₵50 and reserve GH₵14 for transport. Snacks cost GH₵6 each. What is the greatest number you can buy?', ['6', '5', '7', '8'], '6n + 14 ≤ 50, so 6n ≤ 36 and n ≤ 6.')
    ]
  }
];
