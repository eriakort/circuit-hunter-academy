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
  }
];
