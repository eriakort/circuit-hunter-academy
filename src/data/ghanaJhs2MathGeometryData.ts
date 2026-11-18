import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA JHS 2 Mathematics · Geometry and Measurement strand. */
export const GHANA_JHS2_GEOMETRY_UNIT: UnitInfo = {
  title: 'Geometry, Shape and Measurement',
  ch: 'JHS 2 · NaCCA Geometry and Measurement strand',
  subject: 'ghjhs2math'
};

export const GHANA_JHS2_GEOMETRY_ARCS: ArcInfo[] = [
  { n: 7, unit: 0, subject: 'ghjhs2math', title: 'Angles, Parallel Lines and Polygons', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 8, unit: 0, subject: 'ghjhs2math', title: 'Transformations, Symmetry and Scale', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 9, unit: 0, subject: 'ghjhs2math', title: 'Area, Circumference and Composite Shapes', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' },
  { n: 10, unit: 0, subject: 'ghjhs2math', title: 'Volume, Surface Area and Measurement', pages: 'NaCCA CCP · JHS Mathematics · Geometry and Measurement' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath-geometry', text });

export const GHANA_JHS2_GEOMETRY_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs2-geometry-angles-polygons', arc: 0, sec: 'Geometry',
    pages: 'NaCCA CCP · JHS Mathematics · Geometry', hue: 194, horns: 2, eyes: 2,
    title: 'The Parallel Lines Pathfinder',
    topic: 'Use angle relationships on parallel lines and describe the angle properties of triangles and quadrilaterals.',
    demon: 'The Angle Twister', tech: 'Geometry Form · Tenth Technique: Trace the Angles',
    scenes: [
      lesson('<p>Angles on a straight line add up to 180°. Angles around a point add up to 360°. If one angle on a straight line is 65°, the other is 180° − 65° = 115°.</p>'),
      lesson('<p>When a transversal crosses two parallel lines, corresponding angles are equal and alternate angles are equal. Co-interior angles on the same side of the transversal add up to 180°. These facts help you find missing angles.</p>'),
      lesson('<p>The interior angles of a triangle add up to 180°. A quadrilateral has interior angles that add up to 360°. A regular polygon has equal sides and equal interior angles.</p>'),
      lesson('<p>For a triangle with angles 48° and 67°, the third angle is 180° − 48° − 67° = 65°. Always write the angle rule you use, then calculate the missing value.</p>'),
      { who: 'd', vis: 'demon', text: 'I have twisted the parallel lines and hidden the missing angles. Use angle rules to restore the diagram!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Angles on a straight line add up to how many degrees?', ['180°', '90°', '270°', '360°'], 'A straight angle measures 180°.'),
      q('One angle on a straight line is 72°. Find the other angle.', ['108°', '72°', '118°', '288°'], '180° − 72° = 108°.'),
      q('Two parallel lines are crossed by a transversal. Corresponding angles are…', ['Equal', 'Always supplementary', 'Always 90°', 'Always 180°'], 'Corresponding angles are equal when the lines are parallel.'),
      q('A triangle has angles 50° and 60°. What is its third angle?', ['70°', '80°', '90°', '110°'], '180° − 50° − 60° = 70°.'),
      q('What is the sum of the interior angles of a quadrilateral?', ['360°', '180°', '270°', '540°'], 'A quadrilateral can be split into two triangles, so 2 × 180° = 360°.')
    ]
  },
  {
    id: 'gh-jhs2-geometry-transformations-symmetry', arc: 1, sec: 'Geometry',
    pages: 'NaCCA CCP · JHS Mathematics · Geometry', hue: 42, horns: 2, eyes: 2,
    title: 'The Transformation Studio',
    topic: 'Recognise and describe translations, reflections, rotations, line symmetry and scale drawings.',
    demon: 'The Mirror Trickster', tech: 'Geometry Form · Eleventh Technique: Move with Precision',
    scenes: [
      lesson('<p>A translation slides a shape. Every point moves the same distance in the same direction, so the shape keeps its size, orientation and appearance.</p>'),
      lesson('<p>A reflection flips a shape across a mirror line. Each point and its image are the same perpendicular distance from the mirror line, but on opposite sides.</p>'),
      lesson('<p>A rotation turns a shape around a fixed centre through an angle such as 90°, 180° or 270°. The direction (clockwise or anticlockwise) matters. A rotation does not change the shape or its size.</p>'),
      lesson('<p>A line of symmetry divides a shape into two matching mirror halves. A scale drawing uses a fixed ratio: at a scale of 1 cm to 2 m, a 6 cm line on the drawing represents 12 m in real life.</p>'),
      { who: 'd', vis: 'demon', text: 'The shapes have been shifted, flipped and turned. Identify each transformation and restore the design!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which transformation slides a shape without turning or flipping it?', ['Translation', 'Reflection', 'Rotation', 'Enlargement'], 'A translation moves every point the same distance in the same direction.'),
      q('A reflection takes place across what?', ['A mirror line', 'A rotation centre', 'A scale factor', 'A curved path'], 'A reflection flips a shape across a mirror line.'),
      q('A half-turn is a rotation through…', ['180°', '90°', '45°', '360°'], 'A half-turn is 180 degrees.'),
      q('How many lines of symmetry does a square have?', ['4', '2', '1', '8'], 'A square has four lines of symmetry: two diagonals and two lines through opposite side midpoints.'),
      q('On a scale drawing, 1 cm represents 3 m. What real distance is shown by 5 cm?', ['15 m', '8 m', '5 m', '30 m'], '5 × 3 m = 15 m.')
    ]
  },
  {
    id: 'gh-jhs2-geometry-area-circumference', arc: 2, sec: 'Measurement',
    pages: 'NaCCA CCP · JHS Mathematics · Measurement', hue: 150, horns: 2, eyes: 2,
    title: 'The Circle and Composite-Space Quest',
    topic: 'Calculate area and perimeter of compound rectangles and use pi to find a circle’s circumference and area.',
    demon: 'The Boundary Collector', tech: 'Measurement Form · Twelfth Technique: Measure Every Region',
    scenes: [
      lesson('<p>The circumference is the distance around a circle. It is calculated using C = πd or C = 2πr, where d is the diameter and r is the radius. Use π ≈ 3.14 when a calculator value is not specified.</p>'),
      lesson('<p>The area of a circle is A = πr². If the radius is 3 cm, the area is about 3.14 × 3 × 3 = 28.26 cm². Remember that area uses square units.</p>'),
      lesson('<p>A compound shape can be divided into familiar shapes, such as rectangles and triangles. Find each area, then add the parts. For a missing section, subtract its area from the larger shape.</p>'),
      lesson('<p>Perimeter measures the outside boundary only. When two rectangles are joined, do not count the shared inside edge as part of the outside perimeter. Sketch and label the dimensions before calculating.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the circle’s radius and mixed the inside area with the outside boundary. Calculate each one correctly!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A circle has diameter 10 cm. What is its circumference using π = 3.14?', ['31.4 cm', '15.7 cm', '78.5 cm', '314 cm'], 'C = πd = 3.14 × 10 = 31.4 cm.'),
      q('A circle has radius 4 cm. What is its area using π = 3.14?', ['50.24 cm²', '25.12 cm²', '12.56 cm²', '100.48 cm²'], 'A = πr² = 3.14 × 4 × 4 = 50.24 cm².'),
      q('Which formula gives the area of a circle?', ['πr²', '2πr', 'πd', '4r'], 'The area of a circle is π multiplied by the radius squared.'),
      q('A rectangle is 8 cm by 5 cm. A 2 cm by 2 cm square is cut out. What area remains?', ['36 cm²', '40 cm²', '32 cm²', '20 cm²'], 'Rectangle area 40 cm² minus square area 4 cm² = 36 cm².'),
      q('When finding the perimeter of a compound shape, which edges should you add?', ['Only the outside boundary', 'Every edge including shared inside edges', 'Only the shortest edges', 'The areas of all parts'], 'Perimeter is the total distance around the outside boundary.')
    ]
  },
  {
    id: 'gh-jhs2-geometry-volume-surface-measurement', arc: 3, sec: 'Measurement',
    pages: 'NaCCA CCP · JHS Mathematics · Measurement', hue: 260, horns: 2, eyes: 2,
    title: 'The Solid-Shape Builder',
    topic: 'Calculate volume and surface area of cuboids and cubes and convert units in practical measurement problems.',
    demon: 'The Dimension Devourer', tech: 'Measurement Form · Thirteenth Technique: Fill and Cover',
    scenes: [
      lesson('<p>Volume measures the space inside a solid. For a cuboid, volume = length × width × height. A box 5 cm long, 3 cm wide and 2 cm high has volume 5 × 3 × 2 = 30 cm³.</p>'),
      lesson('<p>A cube has equal length, width and height. Its volume is side × side × side, or s³. A cube with side 4 cm has volume 4 × 4 × 4 = 64 cm³.</p>'),
      lesson('<p>Surface area is the total area covering the outside of a 3D object. A cuboid has three pairs of equal rectangular faces. Add the areas of all six faces to find its surface area.</p>'),
      lesson('<p>Be careful with units: area is measured in square units such as cm², while volume is measured in cubic units such as cm³. For capacity, 1,000 cm³ is equal to 1 litre.</p>'),
      { who: 'd', vis: 'demon', text: 'The box dimensions are scrambled. Find the space inside and the area needed to cover its outside!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Find the volume of a cuboid measuring 6 cm × 3 cm × 2 cm.', ['36 cm³', '22 cm³', '18 cm³', '36 cm²'], 'Volume = 6 × 3 × 2 = 36 cm³.'),
      q('A cube has side 5 cm. What is its volume?', ['125 cm³', '25 cm³', '100 cm³', '15 cm³'], '5 × 5 × 5 = 125 cm³.'),
      q('Which unit is appropriate for volume?', ['cm³', 'cm²', 'cm', 'kg'], 'Cubic centimetres measure three-dimensional space.'),
      q('How many litres are equal to 2,000 cm³?', ['2 L', '20 L', '200 L', '0.2 L'], '1,000 cm³ = 1 L, so 2,000 cm³ = 2 L.'),
      q('What does surface area measure?', ['The total area covering the outside of a solid', 'The space inside a solid', 'The distance around a flat shape', 'The mass of an object'], 'Surface area is the sum of the areas of all outside faces or surfaces.')
    ]
  }
];
