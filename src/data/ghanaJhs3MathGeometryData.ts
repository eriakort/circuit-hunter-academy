import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 3 Mathematics · Geometry and Measurement strand. */
export const GHANA_JHS3_GEOMETRY_UNIT: UnitInfo = {
  title: 'Geometry, Construction and Measurement',
  ch: 'JHS 3 · NaCCA Geometry and Measurement strand',
  subject: 'ghjhs3math'
};

export const GHANA_JHS3_GEOMETRY_ARCS: ArcInfo[] = [
  { n: 7, unit: 0, subject: 'ghjhs3math', title: 'Geometric Constructions and Bearings', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 8, unit: 0, subject: 'ghjhs3math', title: 'Pythagoras and Right-Angled Triangles', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 9, unit: 0, subject: 'ghjhs3math', title: 'Mensuration and Practical Measurement', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-geometry', text });

export const GHANA_JHS3_GEOMETRY_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-geometry-constructions-bearings',
    arc: 0, sec: 'Geometry', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement',
    hue: 194, horns: 2, eyes: 2,
    title: 'The Navigator’s Construction Quest',
    topic: 'Use ruler, compass and protractor constructions, and interpret three-figure bearings measured clockwise from north.',
    demon: 'The Compass Confuser', tech: 'Geometry Form · Eighteenth Technique: Construct and Navigate',
    scenes: [
      lesson('<p>Geometric construction uses accurate drawing tools. A ruler draws straight lines, a compass draws arcs and circles, and a protractor measures angles. Keep construction arcs visible so another learner can follow your method.</p>'),
      lesson('<p>To construct a perpendicular bisector, set the compass to more than half the segment length. Draw arcs from each endpoint above and below the segment. Join the two arc intersections: the line cuts the segment at 90° and halfway along it.</p>'),
      lesson('<p>A bearing gives direction measured clockwise from north. Bearings are written with three digits: east is 090°, south is 180° and west is 270°. Always draw a north line at the starting point before measuring.</p>'),
      lesson('<p>If a boat travels on a bearing of 060°, it moves 60° clockwise from north. A bearing is not simply the angle from the nearest horizontal line. Use the north reference and measure clockwise.</p>'),
      { who: 'd', vis: 'demon', text: 'My map has missing north lines and inaccurate constructions. Restore the geometry and guide the traveller safely!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which tool is used to draw a circle or an arc?', ['Compass', 'Protractor', 'Set square only', 'Ruler'], 'A compass keeps a fixed radius while drawing circles and arcs.'),
      q('A perpendicular bisector meets a line segment at what angle?', ['90°', '45°', '180°', '60°'], 'Perpendicular lines meet at a right angle of 90 degrees.'),
      q('In which direction are bearings measured?', ['Clockwise from north', 'Anticlockwise from east', 'Clockwise from south', 'From the nearest road'], 'Bearings are measured clockwise from the north direction.'),
      q('How is a bearing normally written?', ['As three digits', 'As a fraction', 'As a negative number', 'As a length'], 'Three digits make bearings unambiguous, for example 045° or 270°.'),
      q('What is the bearing of due south?', ['180°', '090°', '270°', '360°'], 'South is a half-turn clockwise from north, which is 180°.')
    ]
  },
  {
    id: 'gh-jhs3-geometry-pythagoras',
    arc: 1, sec: 'Geometry', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement',
    hue: 42, horns: 2, eyes: 2,
    title: 'The Right-Triangle Rescue',
    topic: 'Apply the Pythagorean theorem to find missing sides and solve practical right-angled triangle problems.',
    demon: 'The Hypotenuse Hunter', tech: 'Geometry Form · Nineteenth Technique: Square and Restore',
    scenes: [
      lesson('<p>The Pythagorean theorem applies only to a right-angled triangle. The square of the hypotenuse equals the sum of the squares of the other two sides: a² + b² = c². The hypotenuse is the side opposite the 90° angle and is the longest side.</p>'),
      lesson('<p>If the shorter sides are 3 cm and 4 cm, then c² = 3² + 4² = 9 + 16 = 25. Therefore c = √25 = 5 cm. Remember to take the square root at the final step.</p>'),
      lesson('<p>If the hypotenuse is known, subtract the square of the known shorter side. For a hypotenuse of 13 cm and one shorter side of 5 cm, the other side is √(13² − 5²) = √144 = 12 cm.</p>'),
      lesson('<p>In a practical problem, sketch the right angle and label the sides before choosing the formula. A ladder leaning against a wall, for example, forms a right triangle with the wall and the ground.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the longest side and mixed up the squares. Identify the hypotenuse and solve the triangle!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which side is the hypotenuse?', ['The side opposite the right angle', 'The shortest side', 'Any side along the base', 'The side next to the smallest angle'], 'The hypotenuse is opposite the 90° angle and is the longest side.'),
      q('A right triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse.', ['10 cm', '12 cm', '14 cm', '7 cm'], 'c² = 6² + 8² = 36 + 64 = 100, so c = 10 cm.'),
      q('A right triangle has hypotenuse 13 cm and one shorter side 5 cm. Find the other shorter side.', ['12 cm', '8 cm', '18 cm', '10 cm'], 'The missing side is √(13² − 5²) = √144 = 12 cm.'),
      q('Which equation represents the Pythagorean theorem?', ['a² + b² = c²', 'a + b = c²', 'a² − b² = c', '2a + 2b = c'], 'For shorter sides a and b and hypotenuse c, a² + b² = c².'),
      q('A 5 m ladder reaches 4 m up a vertical wall. How far is its foot from the wall?', ['3 m', '4 m', '5 m', '9 m'], 'The ground distance is √(5² − 4²) = √9 = 3 m.')
    ]
  },
  {
    id: 'gh-jhs3-geometry-mensuration',
    arc: 2, sec: 'Measurement', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement',
    hue: 150, horns: 2, eyes: 2,
    title: 'The Mensuration Master Builder',
    topic: 'Solve practical problems involving surface area and volume of prisms and cylinders, and convert metric units accurately.',
    demon: 'The Measure Muncher', tech: 'Measurement Form · Twentieth Technique: Calculate Space and Cover',
    scenes: [
      lesson('<p>Mensuration is the mathematics of length, area, surface area and volume. Perimeter measures the distance around a flat shape, area measures the space inside it, and volume measures the space inside a solid.</p>'),
      lesson('<p>A prism has the same cross-section all along its length. Its volume is the area of the cross-section multiplied by the length. For a cuboid, this becomes length × width × height.</p>'),
      lesson('<p>A cylinder has a circular base. Its volume is V = πr²h, where r is the radius and h is the height. If r = 2 cm and h = 5 cm, V = π × 2² × 5 = 20π cm³.</p>'),
      lesson('<p>Surface area is the total area of all outside faces. For a closed cylinder, add the curved surface area 2πrh to the two circular ends 2πr². Always include square units for area and cubic units for volume.</p>'),
      { who: 'd', vis: 'demon', text: 'I have confused the area of a base with the volume of a container. Choose the correct formula and units to defeat me!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the volume of a prism with cross-sectional area 12 cm² and length 5 cm?', ['60 cm³', '17 cm³', '60 cm²', '30 cm³'], 'Volume = cross-sectional area × length = 12 × 5 = 60 cm³.'),
      q('Which formula gives the volume of a cylinder?', ['πr²h', '2πr', 'πrh', '2πr²'], 'The base area is πr²; multiply by height h to get volume.'),
      q('A cylinder has radius 3 cm and height 4 cm. What is its volume in terms of π?', ['36π cm³', '12π cm³', '24π cm³', '9π cm³'], 'V = π × 3² × 4 = 36π cm³.'),
      q('Which unit is suitable for the surface area of a box?', ['cm²', 'cm³', 'cm', 'litres'], 'Surface area measures a two-dimensional covering, so use square units.'),
      q('Convert 2.5 metres to centimetres.', ['250 cm', '25 cm', '2,500 cm', '0.25 cm'], 'One metre is 100 centimetres, so 2.5 × 100 = 250 cm.')
    ]
  }
];
