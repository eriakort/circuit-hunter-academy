import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 1 Mathematics · Geometry and Measurement strand. */
export const GHANA_JHS1_GEOMETRY_UNIT: UnitInfo = {
  title: 'Geometry, Shape and Measurement',
  ch: 'JHS 1 · NaCCA Geometry and Measurement strand',
  subject: 'ghjhs1math'
};

export const GHANA_JHS1_GEOMETRY_ARCS: ArcInfo[] = [
  { n: 5, unit: 0, subject: 'ghjhs1math', title: 'Points, Lines, Angles and Shapes', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 6, unit: 0, subject: 'ghjhs1math', title: 'Properties of 2D and 3D Shapes', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 7, unit: 0, subject: 'ghjhs1math', title: 'Perimeter and Area in Daily Life', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 8, unit: 0, subject: 'ghjhs1math', title: 'Everyday Measurement', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-geometry', text });

export const GHANA_JHS1_GEOMETRY_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-geometry-lines-and-angles',
    arc: 0, sec: 'Geometry', pages: 'NaCCA CCP · JHS Mathematics · Geometry', hue: 194, horns: 2, eyes: 2,
    title: 'The Lines and Angles Expedition',
    topic: 'Recognise points, line segments, rays and types of angles; estimate and compare angle sizes.',
    demon: 'The Angle Bender', tech: 'Geometry Form · First Technique: See the Angle',
    scenes: [
      lesson('<p>Geometry helps us describe the space and shapes around us. A <b>point</b> marks an exact position. A <b>line segment</b> is straight and has two endpoints. A <b>ray</b> starts at one point and continues in one direction. A line continues in both directions.</p>'),
      lesson('<p>An angle is formed when two rays meet at a common endpoint called the vertex. We measure angles in degrees (°). A right angle is 90°, an acute angle is smaller than 90°, and an obtuse angle is greater than 90° but smaller than 180°.</p>'),
      lesson('<p>A straight angle measures 180°. A full turn measures 360°. You can estimate an angle by comparing it with a square corner (90°). A protractor helps you measure it more accurately.</p>'),
      lesson('<p>Look at roof frames, road junctions and patterns on kente cloth: geometry helps us describe how lines meet. Always identify the vertex and the two arms before measuring an angle.</p>'),
      { who: 'd', vis: 'demon', text: 'I have twisted the lines and hidden the angle sizes. Identify each angle to restore the pattern!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the name for a part of a line with two endpoints?', ['Line segment', 'Ray', 'Angle', 'Curve'], 'A line segment is straight and has two endpoints.'),
      q('Which angle measures exactly 90°?', ['Right angle', 'Acute angle', 'Obtuse angle', 'Straight angle'], 'A right angle is exactly 90 degrees.'),
      q('An angle measures 125°. What type is it?', ['Obtuse', 'Acute', 'Right', 'Straight'], '125° is greater than 90° and less than 180°, so it is obtuse.'),
      q('How many degrees are in a straight angle?', ['180°', '90°', '270°', '360°'], 'A straight angle forms a straight line and measures 180°.'),
      q('What is the common endpoint of the two rays forming an angle called?', ['Vertex', 'Diameter', 'Centre', 'Edge'], 'The vertex is the point where the two rays meet.')
    ]
  },
  {
    id: 'gh-jhs1-geometry-2d-3d-shapes',
    arc: 1, sec: 'Geometry', pages: 'NaCCA CCP · JHS Mathematics · Geometry', hue: 42, horns: 2, eyes: 2,
    title: 'The Shape Architect’s Challenge',
    topic: 'Identify and describe common 2D and 3D shapes using their sides, vertices, faces, edges and curved surfaces.',
    demon: 'The Shape Shifter', tech: 'Geometry Form · Second Technique: Shape Inspector',
    scenes: [
      lesson('<p>A <b>2D shape</b> is flat. A triangle has 3 sides and 3 vertices; a rectangle has 4 sides and 4 right angles; a square has 4 equal sides and 4 right angles. A circle has a curved boundary and no vertices.</p>'),
      lesson('<p>A <b>3D object</b> has length, width and height. A cube has 6 square faces, 12 edges and 8 vertices. A cuboid also has 6 faces, 12 edges and 8 vertices, but its faces are rectangles.</p>'),
      lesson('<p>A cylinder has two flat circular faces and one curved surface. A cone has one circular base, one curved surface and one vertex. A sphere has one continuous curved surface and no edges or vertices.</p>'),
      lesson('<p>Think of objects around you: a dice is shaped like a cube, a carton can be a cuboid, and a water tank may be cylindrical. Naming the shape helps us describe and compare objects.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the faces, edges and vertices. Become the shape architect and set them right!' },
      { type: 'battle' }
    ],
    quiz: [
      q('How many sides does a triangle have?', ['3', '4', '5', '6'], 'A triangle has three straight sides and three vertices.'),
      q('How many faces does a cube have?', ['6', '4', '8', '12'], 'A cube has six equal square faces.'),
      q('Which 3D object has two circular flat faces and one curved surface?', ['Cylinder', 'Cone', 'Sphere', 'Cube'], 'A cylinder has two circular ends and one curved surface.'),
      q('How many vertices does a cuboid have?', ['8', '6', '10', '12'], 'A cuboid has eight vertices, twelve edges and six faces.'),
      q('Which shape has no vertices and one continuous curved surface?', ['Sphere', 'Cone', 'Cylinder', 'Square'], 'A sphere has no corners or edges.')
    ]
  },
  {
    id: 'gh-jhs1-geometry-perimeter-area',
    arc: 2, sec: 'Measurement', pages: 'NaCCA CCP · JHS Mathematics · Measurement', hue: 150, horns: 2, eyes: 2,
    title: 'The Market Garden Measure',
    topic: 'Calculate perimeter and area of rectangles and squares, and choose suitable units for practical problems.',
    demon: 'The Boundary Bandit', tech: 'Measurement Form · Third Technique: Measure the Space',
    scenes: [
      lesson('<p><b>Perimeter</b> is the distance all the way around a 2D shape. Add the lengths of every side. A rectangle with length 8 m and width 3 m has perimeter 8 + 3 + 8 + 3 = 22 m.</p>'),
      lesson('<p><b>Area</b> measures the surface covered by a flat shape. For a rectangle, area = length × width. A garden that is 8 m long and 3 m wide has area 8 × 3 = 24 square metres (m²).</p>'),
      lesson('<p>A square has four equal sides. Its perimeter is 4 × side length, and its area is side length × side length. If each side is 5 cm, the perimeter is 20 cm and the area is 25 cm².</p>'),
      lesson('<p>Use perimeter when planning a fence around a school garden. Use area when working out how much ground to cover with grass or tiles. Remember: perimeter uses units such as cm or m; area uses square units such as cm² or m².</p>'),
      { who: 'd', vis: 'demon', text: 'I have confused the fence with the field inside it. Calculate the boundary and the covered space!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A rectangle is 7 cm long and 3 cm wide. What is its perimeter?', ['20 cm', '21 cm', '10 cm', '14 cm'], 'Perimeter = 7 + 3 + 7 + 3 = 20 cm.'),
      q('A rectangle is 8 m long and 4 m wide. What is its area?', ['32 m²', '24 m²', '12 m²', '32 m'], 'Area = length × width = 8 × 4 = 32 m².'),
      q('What unit is most suitable for the area of a classroom floor?', ['Square metres (m²)', 'Metres (m)', 'Litres (L)', 'Kilograms (kg)'], 'Floor area is a surface, so square metres are suitable.'),
      q('A square has side length 6 cm. What is its perimeter?', ['24 cm', '36 cm', '12 cm', '18 cm'], 'A square has four equal sides: 4 × 6 = 24 cm.'),
      q('Which measurement tells you how much ground a garden covers?', ['Area', 'Perimeter', 'Height only', 'Mass'], 'Area measures the surface covered by the garden.')
    ]
  },
  {
    id: 'gh-jhs1-geometry-everyday-measurement',
    arc: 3, sec: 'Measurement', pages: 'NaCCA CCP · JHS Mathematics · Measurement', hue: 260, horns: 2, eyes: 2,
    title: 'The Everyday Measurement Quest',
    topic: 'Select appropriate metric units and convert between common units of length, mass and capacity.',
    demon: 'The Unit Confuser', tech: 'Measurement Form · Fourth Technique: Choose the Right Unit',
    scenes: [
      lesson('<p>Measurement makes it possible to compare quantities. We measure length in millimetres (mm), centimetres (cm), metres (m) and kilometres (km). For example, the length of a pencil is better measured in centimetres than kilometres.</p>'),
      lesson('<p>For metric length, 10 millimetres = 1 centimetre, 100 centimetres = 1 metre, and 1,000 metres = 1 kilometre. Choose the unit that gives a sensible number for the object or distance.</p>'),
      lesson('<p>Mass is commonly measured in grams (g) and kilograms (kg): 1,000 g = 1 kg. Capacity is measured in millilitres (mL) and litres (L): 1,000 mL = 1 L. A bag of rice may be measured in kilograms; a bottle of water in litres.</p>'),
      lesson('<p>Before converting, identify the units and decide whether the number should become larger or smaller. For example, 2.5 L = 2,500 mL because each litre contains 1,000 millilitres. Include the unit in every final answer.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up grams, metres and litres. Choose the correct units and restore the measurements!' },
      { type: 'battle' }
    ],
    quiz: [
      q('How many centimetres are in 2 metres?', ['200 cm', '20 cm', '2,000 cm', '100 cm'], '1 metre = 100 centimetres, so 2 metres = 200 centimetres.'),
      q('Which unit is most suitable for the mass of a bag of rice?', ['Kilograms (kg)', 'Kilometres (km)', 'Litres (L)', 'Centimetres (cm)'], 'The mass of a bag of rice is commonly measured in kilograms.'),
      q('How many millilitres are in 3 litres?', ['3,000 mL', '300 mL', '30 mL', '300,000 mL'], '1 litre = 1,000 millilitres, so 3 litres = 3,000 millilitres.'),
      q('Convert 2,500 g to kilograms.', ['2.5 kg', '25 kg', '250 kg', '0.25 kg'], 'Divide grams by 1,000: 2,500 g = 2.5 kg.'),
      q('Which unit is best for the distance between two towns?', ['Kilometres (km)', 'Millimetres (mm)', 'Grams (g)', 'Millilitres (mL)'], 'Distances between towns are usually measured in kilometres.')
    ]
  }
];
