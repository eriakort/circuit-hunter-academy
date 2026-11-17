import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_SPATIAL_ARCS: ArcInfo[] = [
  {
    n: 8,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Geometry Around Us · Spatial Sense',
    pages: 'NaCCA SHS 1 · pp. 84–100'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_SPATIAL_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-spatial-sense',
    arc: 0,
    sec: 'Geometry around us',
    pages: 'NaCCA SHS 1 · pp. 84–100',
    hue: 46,
    horns: 2,
    eyes: 2,
    title: 'The Geometry Trail',
    topic: 'Measure and reason with angles, parallel lines and transversals, triangle angle properties, right triangles and polygon angle sums.',
    demon: 'The Angle Architect',
    tech: 'Geometry Form · Eighth Technique: Shape Sense',
    scenes: [
      lesson('<p>Geometry is all around you: in classroom corners, roof frames, road markings and the shapes of buildings. An angle is made by two rays that meet at a vertex. Acute angles are less than 90°, right angles are 90°, obtuse angles are between 90° and 180°, straight angles are 180°, and reflex angles are greater than 180° but less than 360°.</p>'),
      lesson('<p>Angles on a straight line add to 180°, and angles around a point add to 360°. Complementary angles add to 90°; supplementary angles add to 180°. Parallel lines never meet. Perpendicular lines meet at 90°. When a transversal crosses parallel lines, corresponding and alternate angles are equal, while co-interior angles add to 180°.</p>'),
      lesson('<p>The interior angles of every triangle add to 180°. An exterior angle of a triangle equals the sum of the two opposite interior angles. For example, if those opposite angles are 45° and 65°, the exterior angle is 110°.</p>'),
      lesson('<p>Pythagoras’ theorem works only in a right-angled triangle. If the shorter sides are a and b and the hypotenuse (the longest side) is c, then a² + b² = c². A 3–4–5 triangle is right-angled because 3² + 4² = 5². A ladder leaning against a wall is a useful real-life example.</p>'),
      lesson('<p>Polygons are closed shapes made from straight sides. A quadrilateral has four sides and its interior angles add to 360°. For any polygon with n sides, the interior angle sum is (n − 2) × 180°. A pentagon therefore has an interior angle sum of 540°. Use this rule to check whether a set of angles can belong to a polygon.</p>'),
      { who: 'd', vis: 'demon', text: 'I will twist every angle, break your right triangles and scramble polygon rules!' },
      { type: 'battle' }
    ],
    quiz: [
      question('An angle measures 125°. How should it be classified?', [
        'Obtuse', 'Acute', 'Right', 'Reflex'
      ], '125° is greater than 90° and less than 180°, so it is obtuse.'),
      question('Two parallel lines are crossed by a transversal. One alternate interior angle is 68°. What is the other alternate interior angle?', [
        '68°', '112°', '90°', '180°'
      ], 'Alternate interior angles are equal when the two lines are parallel.'),
      question('A triangle has two opposite interior angles of 45° and 65°. What is the exterior angle at the third vertex?', [
        '110°', '90°', '115°', '130°'
      ], 'The exterior angle theorem says the exterior angle equals the sum of the two opposite interior angles: 45° + 65° = 110°.'),
      question('A right triangle has shorter sides of 6 cm and 8 cm. What is the hypotenuse?', [
        '10 cm', '12 cm', '14 cm', '48 cm'
      ], 'c² = 6² + 8² = 36 + 64 = 100, so c = 10 cm.')
    ]
  },

  {
    id: 'gh-core-ss1-spatial-sense-field-challenge',
    arc: 0,
    sec: 'Geometry around us',
    pages: 'NaCCA SHS 1 · pp. 84–100',
    hue: 58,
    horns: 2,
    eyes: 2,
    title: 'The Site Planner’s Geometry Challenge',
    topic: 'Apply angle relationships, parallel-line rules, triangle properties, Pythagoras’ theorem and polygon angle sums in multi-step design and construction problems.',
    demon: 'The Blueprint Breaker',
    tech: 'Geometry Form · Field Challenge: Precision in Practice',
    scenes: [
      lesson('<p><b>Mission briefing — plan a safe school courtyard.</b> A good site plan depends on accurate geometry. Before calculating, sketch the shape, mark the known angles and lengths, and label what you need to find. Include units for lengths and degrees for angles. A diagram is a reasoning aid: do not assume it is drawn to scale.</p>'),
      lesson('<p><b>Stage 1: roof-frame angles.</b> A straight roof beam creates adjacent angles of  x° and 124°. Angles on a straight line add to 180°, so x = 180° − 124° = 56°. When two lines cross, vertically opposite angles are equal. When a transversal crosses parallel beams, corresponding and alternate interior angles are equal, while co-interior angles add to 180°. Identify the relationship before choosing an operation.</p>'),
      lesson('<p><b>Stage 2: triangular supports.</b> A triangular support has two interior angles of 48° and 67°. The third angle is 180° − 48° − 67° = 65°. The exterior angle at a vertex equals the sum of the two opposite interior angles, so the exterior angle beside the 65° angle is 48° + 67° = 115°. Check that an interior angle and its adjacent exterior angle add to 180°.</p>'),
      lesson('<p><b>Stage 3: an accessible ramp.</b> A ramp rises 0.9 m vertically and extends 1.2 m horizontally. These are the perpendicular sides of a right triangle. The ramp length is the hypotenuse: c² = 0.9² + 1.2² = 0.81 + 1.44 = 2.25, so c = 1.5 m. Pythagoras applies only when the triangle has a right angle. Keep all lengths in the same unit before calculating.</p>'),
      lesson('<p><b>Stage 4: a polygon courtyard.</b> The sum of the interior angles of an n-sided polygon is (n − 2) × 180°. A hexagon has (6 − 2) × 180° = 720°. If it is regular, each interior angle is 720° ÷ 6 = 120°. For an irregular polygon, the total is still 720°, but the individual angles need not be equal. Use the regular-polygon division only when the question says the polygon is regular.</p>'),
      lesson('<p><b>Choose your challenge level.</b> <b>Foundation:</b> identify the angle rule and complete a one-step calculation. <b>Builder:</b> combine two facts, such as a triangle angle sum and a straight-line pair. <b>Architect:</b> solve a contextual problem, explain why a theorem applies, and check whether the result is reasonable. If a diagram has no right-angle marker or parallel-line arrows, do not assume those properties.</p>'),
      { who: 'd', vis: 'demon', text: 'The blueprint is full of traps! I will make you use Pythagoras on a non-right triangle and divide polygon angles when the shape is not regular. Prove every step.' },
      { type: 'battle' }
    ],
    quiz: [
      question('Two adjacent angles lie on a straight line. One is 124°. What is the other?', ['56°', '66°', '124°', '236°'], 'Angles on a straight line add to 180°, so 180° − 124° = 56°.'),
      question('A transversal crosses two parallel lines. A corresponding angle is 73°. What is the matching corresponding angle?', ['73°', '107°', '90°', '180°'], 'Corresponding angles are equal when the lines are parallel.'),
      question('A triangular roof support has angles 48° and 67°. Find its third interior angle.', ['65°', '115°', '75°', '55°'], 'The angles in a triangle add to 180°: 180° − 48° − 67° = 65°.'),
      question('A right-angled ramp rises 0.9 m and extends 1.2 m horizontally. How long is the ramp?', ['1.5 m', '2.1 m', '1.2 m', '0.3 m'], 'Pythagoras gives c² = 0.9² + 1.2² = 2.25, so c = 1.5 m.'),
      question('What is the sum of the interior angles of a hexagon?', ['720°', '540°', '600°', '900°'], 'Use (n − 2) × 180°: (6 − 2) × 180° = 720°.'),
      question('A regular pentagon has an interior angle sum of 540°. What is each interior angle?', ['108°', '90°', '120°', '72°'], 'A regular pentagon has five equal interior angles, so 540° ÷ 5 = 108°.')
    ]
  },
];
