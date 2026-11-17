import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_STRAIGHT_LINES_ARCS: ArcInfo[] = [
  {
    n: 7,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Gradient, Straight Lines and Distance',
    pages: 'NaCCA SHS 1 · pp. 80–83'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_STRAIGHT_LINES_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-straight-lines-distance',
    arc: 0,
    sec: 'Algebraic reasoning',
    pages: 'NaCCA SHS 1 · pp. 80–83',
    hue: 205,
    horns: 2,
    eyes: 2,
    title: 'The Straight-Line Navigator',
    topic: 'Use coordinates to find midpoints, gradients, equations and distances, then apply straight-line relationships to practical problems.',
    demon: 'The Slope Saboteur',
    tech: 'Coordinate Form · Eighth Technique: Line Mastery',
    scenes: [
      lesson('<p>A coordinate is written as (x, y). The first number tells you how far to move horizontally; the second tells you how far to move vertically. Plot points carefully and always read the horizontal coordinate first.</p>'),
      lesson('<p>The midpoint is exactly halfway between two endpoints. For A(x₁, y₁) and B(x₂, y₂), the midpoint is ((x₁ + x₂)/2, (y₁ + y₂)/2). For A(2, 4) and B(6, 8), the midpoint is (4, 6).</p>'),
      lesson('<p>Gradient measures how steep a straight line is: m = (y₂ − y₁)/(x₂ − x₁). It is the vertical change divided by the horizontal change. From (1, 2) to (3, 6), m = (6 − 2)/(3 − 1) = 2. A horizontal line has gradient 0; a vertical line has an undefined gradient.</p>'),
      lesson('<p>A straight line can be written as y = mx + c, where m is the gradient and c is the y-intercept. If a line has gradient 2 and crosses the y-axis at 1, its equation is y = 2x + 1. If you know a point and the gradient, substitute the point to find c.</p>'),
      lesson('<p>To find the distance between A(x₁, y₁) and B(x₂, y₂), use d = √((x₂ − x₁)² + (y₂ − y₁)²). This is Pythagoras’ theorem applied to the horizontal and vertical changes. Between (1, 2) and (4, 6), the distance is √(3² + 4²) = 5 units.</p>'),
      lesson('<p>Parallel non-vertical lines have equal gradients. Perpendicular non-vertical lines have gradients whose product is −1. For example, gradients 2 and −1/2 describe perpendicular lines. Use these facts to compare routes, building plans and straight boundaries.</p>'),
      { who: 'd', vis: 'demon', text: 'I will reverse your coordinates, flatten your gradients and stretch every distance!' },
      { type: 'battle' }
    ],
    quiz: [
      question('What is the midpoint of A(2, 4) and B(6, 8)?', ['(4, 6)', '(8, 12)', '(2, 2)', '(3, 4)'], 'Average the x-coordinates and the y-coordinates: ((2 + 6)/2, (4 + 8)/2) = (4, 6).'),
      question('Find the gradient between (1, 2) and (3, 6).', ['2', '1/2', '4', '−2'], 'Gradient = (6 − 2)/(3 − 1) = 4/2 = 2.'),
      question('A line has gradient 3 and y-intercept −2. Which is its equation?', ['y = 3x − 2', 'y = −2x + 3', 'y = 3x + 2', 'y = x − 2'], 'In y = mx + c, m = 3 and c = −2, so y = 3x − 2.'),
      question('What is the distance between (1, 2) and (4, 6)?', ['5 units', '7 units', '4 units', '25 units'], 'Distance = √((4 − 1)² + (6 − 2)²) = √(9 + 16) = 5 units.')
    ]
  }
];
