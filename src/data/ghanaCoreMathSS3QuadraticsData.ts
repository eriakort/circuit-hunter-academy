import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/** Ghana NaCCA SHS 3 Core Mathematics: quadratic equations and functions. */
export const GHANA_CORE_MATH_SS3_QUADRATICS_SUBJECT: SubjectInfo = {
  id: 'ghcoremath3',
  name: 'Core Mathematics · SHS 3',
  blurb: 'Ghana NaCCA SHS 3 Core Mathematics: quadratic equations, parabolas and real-life models.',
  meta: 'Ghana NaCCA · SHS 3 · quadratic reasoning',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><path d="M18 18 V102 H105" fill="none" stroke="#7bdff2" stroke-width="3"/><path d="M27 24 Q60 132 96 24" fill="none" stroke="#ffd166" stroke-width="5" stroke-linecap="round"/><circle cx="61" cy="78" r="5" fill="#ffd166"/></svg>'
};

export const GHANA_CORE_MATH_SS3_QUADRATICS_UNIT: UnitInfo = {
  title: 'Algebraic Reasoning · Quadratic Functions and Equations',
  ch: 'SS3 · NaCCA pp. 311–321',
  subject: 'ghcoremath3'
};

export const GHANA_CORE_MATH_SS3_QUADRATICS_ARCS: ArcInfo[] = [{
  n: 2, unit: 0, subject: 'ghcoremath3',
  title: 'Patterns and Relations · Quadratic Reasoning',
  pages: 'NaCCA SHS 3 · pp. 311–321'
}];

const q = (prompt: string, answers: string[], why: string) => ({ q: prompt, a: answers, why });
const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });

export const GHANA_CORE_MATH_SS3_QUADRATICS_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss3-quadratic-equations', arc: 0, sec: '3.2.2', pages: 'NaCCA SHS 3 · pp. 314–315',
    hue: 42, horns: 2, eyes: 3, title: 'The Factorisation Forge',
    topic: 'Recognise quadratic expressions and equations, solve by factorisation, and model practical problems.',
    demon: 'The Root Hoarder', tech: 'Algebra Form · SHS 3 Technique: Zero-Product Strike',
    scenes: [
      lesson('<p>A <b>quadratic expression</b> has the form ax² + bx + c, where a, b and c are constants and <b>a ≠ 0</b>. If a were zero, the x² term would disappear and the expression would no longer be quadratic. For example, 2x² + 2x − 6 is quadratic.</p>'),
      lesson('<p>A <b>quadratic equation</b> says that a quadratic expression equals a value, usually written in standard form ax² + bx + c = 0. First move every term to one side. For example, x² − 5x = 14 becomes x² − 5x − 14 = 0.</p>'),
      lesson('<p><b>Factorisation</b> rewrites a quadratic as a product. For x² − 2x − 3, find two numbers whose product is −3 and sum is −2: −3 and +1. So x² − 2x − 3 = (x − 3)(x + 1).</p>'),
      lesson('<p>The <b>zero-product rule</b> says that if AB = 0, then A = 0 or B = 0. Thus (x − 3)(x + 1) = 0 gives x = 3 or x = −1. Substitute each answer into the original equation to check it.</p>'),
      lesson('<p>Quadratics can model dimensions. A rectangular board with width w and length w + 5 has area 14 m²: w(w + 5) = 14, so w² + 5w − 14 = 0. Factor: (w + 7)(w − 2) = 0. Width cannot be negative, so w = 2 m and length = 7 m.</p>'),
      { type: 'sort', title: 'Match each equation-solving step', cats: [['Standard form', 'Standard'], ['Factorise', 'Factorise'], ['Zero-product rule', 'Solve'], ['Check', 'Verify']], items: [
        { n: 'Move all terms to one side', c: 0, i: 'rearrange' },
        { n: 'Rewrite as two brackets multiplied', c: 1, i: 'brackets' },
        { n: 'Set each bracket equal to zero', c: 2, i: 'roots' },
        { n: 'Substitute roots into the original equation', c: 3, i: 'check' }
      ] },
      { who: 'd', vis: 'demon', text: 'A quadratic has two possible roots. Can you forge both without losing the real-world meaning?' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which expression is quadratic?', ['3x² − 2x + 1', '4x + 7', 'x³ − 1', '5/x + 2'], 'A quadratic has highest power 2 and a non-zero coefficient of x².'),
      q('Why must a be non-zero in ax² + bx + c?', ['Otherwise the x² term disappears', 'So b must be zero', 'So c is always positive', 'To make every root positive'], 'If a = 0, the expression is at most linear, not quadratic.'),
      q('Factorise x² − 2x − 3.', ['(x − 3)(x + 1)', '(x + 3)(x − 1)', '(x − 3)(x − 1)', '(x + 3)(x + 1)'], '−3 × 1 = −3 and −3 + 1 = −2.'),
      q('Solve (x − 4)(x + 2) = 0.', ['x = 4 or x = −2', 'x = −4 or x = 2', 'x = 4 only', 'x = −2 only'], 'Set each factor to zero: x − 4 = 0 or x + 2 = 0.'),
      q('A rectangle has width w and length w + 5. Its area is 14 m². Which equation models it?', ['w² + 5w − 14 = 0', 'w² − 5w + 14 = 0', '2w + 5 = 14', 'w² + 14w + 5 = 0'], 'Area = width × length, so w(w + 5) = 14.')
    ]
  },
  {
    id: 'gh-core-ss3-quadratic-graphs', arc: 0, sec: '3.2.2', pages: 'NaCCA SHS 3 · pp. 316–318',
    hue: 190, horns: 2, eyes: 3, title: 'The Parabola Cartographer',
    topic: 'Draw quadratic graphs and interpret their roots, intercepts, turning points, maximum and minimum values.',
    demon: 'The Curve Shifter', tech: 'Graph Form · SHS 3 Technique: Vertex Vision',
    scenes: [
      lesson('<p>A quadratic function has the form <b>y = ax² + bx + c</b>. Its graph is a U-shaped curve called a <b>parabola</b>. If a is positive, it opens upwards and has a minimum. If a is negative, it opens downwards and has a maximum.</p>'),
      lesson('<p>Build a graph from a <b>table of values</b>. For y = x² + 2x + 1, use x = −3, −2, −1, 0, 1. The corresponding y-values are 4, 1, 0, 1, 4. Plot the points and join them with a smooth curve.</p>'),
      lesson('<p>The <b>y-intercept</b> is where the curve crosses the y-axis; set x = 0. The <b>x-intercepts</b> are where it crosses the x-axis; set y = 0. These x-values are also called roots or zeros. A graph may have two, one or no real x-intercepts.</p>'),
      lesson('<p>The <b>vertex</b> is the turning point. It is the lowest point for an upward-opening parabola and the highest point for a downward-opening one. Its y-coordinate gives the minimum or maximum value. Changing a affects the opening and width; changing b or c can move the turning point or intercepts.</p>'),
      lesson('<p>Use a graph to interpret a situation: a ball thrown upwards follows a curved height-time path. The vertex represents its greatest height, while an x-intercept can represent when it returns to the ground. Always include units and explain what the coordinates mean.</p>'),
      { type: 'sort', title: 'Read the features of a parabola', cats: [['Vertex', 'Turning point'], ['y-intercept', 'Crosses y-axis'], ['x-intercept', 'Root'], ['a < 0', 'Opens down']], items: [
        { n: 'Highest or lowest point', c: 0, i: 'turn' },
        { n: 'Value when x = 0', c: 1, i: 'vertical' },
        { n: 'Where y = 0', c: 2, i: 'zero' },
        { n: 'The graph has a maximum', c: 3, i: 'down' }
      ] },
      { who: 'd', vis: 'demon', text: 'A curve hides its story in the intercepts and turning point. Map every feature!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the graph of a quadratic function called?', ['A parabola', 'A circle', 'A straight line', 'A hyperbola'], 'A quadratic function graphs as a parabola.'),
      q('For y = x² + 2x + 1, what is y when x = 0?', ['1', '0', '2', '−1'], 'Substitute x = 0: y = 0 + 0 + 1 = 1.'),
      q('What do the x-intercepts represent?', ['Roots where y = 0', 'The value of y when x = 0', 'The maximum value', 'The gradient'], 'At an x-intercept the graph crosses the x-axis, so y = 0.'),
      q('If a is negative in y = ax² + bx + c, the parabola opens…', ['Downwards and has a maximum', 'Upwards and has a minimum', 'As a straight line', 'Sideways'], 'A negative leading coefficient makes the parabola open downwards.'),
      q('What does the vertex represent?', ['The turning point and maximum or minimum', 'Always the y-intercept', 'Always a root', 'The gradient'], 'The vertex is the turning point; its y-value is the maximum or minimum.')
    ]
  },
  {
    id: 'gh-core-ss3-quadratic-relationships', arc: 0, sec: '3.2.2', pages: 'NaCCA SHS 3 · pp. 319–321',
    hue: 265, horns: 2, eyes: 3, title: 'The Symmetry Strategist',
    topic: 'Find the axis of symmetry, solve related equations graphically, and interpret increasing, decreasing, positive and negative intervals.',
    demon: 'The Mirror Equation', tech: 'Graph Form · SHS 3 Technique: Symmetry Sight',
    scenes: [
      lesson('<p>A parabola is symmetric. A vertical line through its vertex divides it into two matching halves. This is the <b>axis of symmetry</b>. For y = (x − 1)(x − 5), the roots are 1 and 5, so the axis is halfway between them: x = 3.</p>'),
      lesson('<p>For y = ax² + bx + c, the axis of symmetry is <b>x = −b/(2a)</b>. The vertex lies on this line. You can also use symmetry: points equally far from the axis have the same y-value.</p>'),
      lesson('<p>Two graphs intersect where they have the same x and y values. To solve a linear and a quadratic equation graphically, draw both graphs and read their intersection points. The x-coordinates give the simultaneous solutions. Check by substitution when possible.</p>'),
      lesson('<p>A quadratic graph is <b>increasing</b> on the side where it rises as x increases and <b>decreasing</b> on the side where it falls. For an upward-opening parabola, it decreases before the vertex and increases after it; for a downward-opening parabola, the reverse is true.</p>'),
      lesson('<p>The graph is <b>positive</b> where it lies above the x-axis (y > 0) and <b>negative</b> where it lies below (y < 0). Use the roots to divide the x-axis into intervals, then inspect the graph. This helps identify when a model represents a gain, loss, height above ground or another meaningful quantity.</p>'),
      { type: 'sort', title: 'Connect the graph to its meaning', cats: [['Axis of symmetry', 'Mirror line'], ['Increasing', 'Rising'], ['Decreasing', 'Falling'], ['Positive', 'Above x-axis']], items: [
        { n: 'Vertical line through the vertex', c: 0, i: 'mirror' },
        { n: 'y rises as x moves right', c: 1, i: 'rise' },
        { n: 'y falls as x moves right', c: 2, i: 'fall' },
        { n: 'y > 0', c: 3, i: 'above' }
      ] },
      { who: 'd', vis: 'demon', text: 'Find the mirror line, then use the curve to reveal where the model rises, falls, gains or loses.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Find the axis of symmetry for y = (x − 1)(x − 5).', ['x = 3', 'x = 1', 'x = 5', 'x = 6'], 'The roots are 1 and 5; their midpoint is (1 + 5)/2 = 3.'),
      q('What is the axis of symmetry for y = 2x² − 8x + 1?', ['x = 2', 'x = −2', 'x = 4', 'x = −4'], 'x = −b/(2a) = −(−8)/(2 × 2) = 2.'),
      q('How can you solve two equations graphically?', ['Find where their graphs intersect', 'Find only the y-intercept', 'Add their gradients', 'Ignore the axes'], 'An intersection has coordinates that satisfy both equations.'),
      q('For an upward-opening parabola, how does it behave around its vertex?', ['Decreases before, increases after', 'Increases before, decreases after', 'Always decreases', 'Always increases'], 'The vertex is the minimum: the curve falls towards it and rises after it.'),
      q('Where is a quadratic function positive?', ['Where its graph is above the x-axis', 'Where its graph is below the x-axis', 'Only at its vertex', 'Only where x = 0'], 'Positive values mean y > 0, which is above the x-axis.')
    ]
  }
];
