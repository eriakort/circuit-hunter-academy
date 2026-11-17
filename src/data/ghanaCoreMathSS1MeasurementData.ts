import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_MEASUREMENT_ARCS: ArcInfo[] = [
  {
    n: 9,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Geometry Around Us · Measurement',
    pages: 'NaCCA SHS 1 · pp. 101–112'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_MEASUREMENT_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-vectors-bearings',
    arc: 0,
    sec: 'Geometry around us',
    pages: 'NaCCA SHS 1 · pp. 110–112',
    hue: 194,
    horns: 2,
    eyes: 2,
    title: 'The Vector Compass',
    topic: 'Describe vectors using magnitude and direction, interpret bearings, and recognise equal vectors in different positions.',
    demon: 'The Direction Drainer',
    tech: 'Measurement Form · Ninth Technique: Vector Navigation',
    scenes: [
      lesson('<p>Some quantities need only a size (magnitude), such as a distance of 5 km. Other quantities need both size and direction. A displacement of 5 km east is a vector. Speed is a scalar; velocity is a vector because it includes direction.</p>'),
      lesson('<p>Draw a vector as an arrow, also called a directed line segment. Its length represents magnitude, and the arrowhead shows direction. The tail is the starting point and the head is the finishing point. A longer arrow means a greater magnitude when the drawing uses the same scale.</p>'),
      lesson('<p>Directions can be written as compass points or bearings. A three-figure bearing is measured clockwise from north: north is 000°, east is 090°, south is 180°, and west is 270°. For example, 320° is also written as N40°W: start at north and turn 40° towards west.</p>'),
      lesson('<p>Two vectors are equal when they have the same magnitude and the same direction, even if they are drawn in different places. Imagine two trotro routes represented by arrows of the same length pointing north-east. Their positions on the map may differ, but the vectors are equal if their magnitudes and directions match.</p>'),
      lesson('<p>Read a vector carefully: identify where it starts, where it points, its length or scale, and the direction convention. A journey of 3 km east is not the same vector as 3 km west, even though the magnitudes are equal. A journey of 3 km east is also not equal to 5 km east because the magnitudes differ.</p>'),
      { who: 'd', vis: 'demon', text: 'I will reverse every arrow and make north point south. Can you keep your direction?' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which quantity is a vector?', [
        'A displacement of 4 km east', 'A distance of 4 km', 'A mass of 4 kg', 'A time of 4 hours'
      ], 'Displacement has both magnitude (4 km) and direction (east).'),
      question('A bearing of 090° points in which direction?', [
        'East', 'North', 'South', 'West'
      ], 'Bearings are measured clockwise from north, so 090° points east.'),
      question('Which compass direction is equivalent to a bearing of 320°?', [
        'N40°W', 'N40°E', 'S40°W', 'S40°E'
      ], 'From north, turn 40° towards the west to reach 320°.'),
      question('When are two vectors equal?', [
        'When they have the same magnitude and direction', 'When they have the same starting point', 'When they have the same direction only', 'When they have the same length only'
      ], 'Equal vectors must have both the same magnitude and the same direction; their positions can differ.')
    ]
  }
];
