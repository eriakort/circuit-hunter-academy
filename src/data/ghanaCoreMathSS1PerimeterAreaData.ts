import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_PERIMETER_AREA_ARCS: ArcInfo[] = [
  {
    n: 9,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Geometry Around Us · Perimeter and Area',
    pages: 'NaCCA SHS 1 · pp. 118–123'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_PERIMETER_AREA_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-perimeter-area',
    arc: 0,
    sec: 'Geometry around us',
    pages: 'NaCCA SHS 1 · pp. 118–123',
    hue: 42,
    horns: 2,
    eyes: 2,
    title: 'The Boundary and Surface Forge',
    topic: 'Estimate and calculate perimeter and area for circles, quadrilaterals, and regular, composite and irregular 2D shapes; compare SI and imperial area units and solve practical measurement problems.',
    demon: 'The Dimension Devourer',
    tech: 'Measurement Form · Twelfth Technique: Boundary and Surface Mastery',
    scenes: [
      lesson('<p>Perimeter is the total distance around the outside edge of a 2D shape. Area is the amount of flat surface inside it. Perimeter uses units such as cm or m; area uses square units such as cm² or m². Do not confuse the distance around a school garden with the amount of ground inside it.</p><p>Before calculating, identify what the question asks for, label every measurement, and make sure the units are consistent. A perimeter is a length; an area is measured in square units.</p>'),
      lesson('<p>For a rectangle, perimeter P = 2(length + width), and area A = length × width. For a square of side s, P = 4s and A = s². For a triangle, perimeter is the sum of its three sides; its area is ½ × base × perpendicular height. The height must meet the base at 90°.</p><p>For a circle, the distance around it is the circumference C = 2πr = πd, and its area is A = πr². The radius r is half the diameter d. Use π ≈ 3.142 when an exact answer is not required, and keep the units: circumference in cm or m, area in cm² or m².</p>'),
      lesson('<p>Quadrilaterals have four sides, but their area formulas depend on their shape. A parallelogram has area base × perpendicular height. A rhombus and a kite have area ½ × diagonal 1 × diagonal 2. A trapezoid has area ½ × (sum of the parallel sides) × perpendicular height. To find any perimeter, add the lengths of the outside sides.</p><p>Do not use a sloping side as the height unless it is perpendicular to the base. A diagram may show a height inside the shape, outside it, or as a dashed line.</p>'),
      lesson('<p>For composite shapes, split the figure into familiar shapes, calculate their areas, then add or subtract as appropriate. For an irregular shape on a grid, count full squares and combine partial squares to estimate the area. For perimeter, trace only the outside boundary: internal dividing lines are not part of the perimeter.</p><p>When dimensions are decimals or fractions, keep them accurate through the calculation and round only at the end if the question asks you to. Check that your answer is reasonable by estimating first.</p>'),
      lesson('<p>Area units are squared: 1 m² = 10,000 cm², and 1 cm² = 100 mm². In imperial units, 1 ft² = 144 in². Convert lengths before using a formula if the measurements use different units. For example, a 2 m by 150 cm rectangle has area 2 m × 1.5 m = 3 m², not 300 m².</p><p>Use familiar referents to estimate: a fingernail is about 1 cm², a classroom floor tile may be about 1 ft², and a house door is roughly 2 m². These are guides for estimation, not exact measurements.</p>'),
      lesson('<p>Apply the ideas to a Ghanaian community project. If a rectangular school garden is 12 m long and 8 m wide, the fence needed around it is P = 2(12 + 8) = 40 m. The ground to be prepared is A = 12 × 8 = 96 m². If a circular flower bed has radius 2 m, its circumference is about 12.57 m and its area is about 12.57 m². State clearly whether you are buying fencing or covering the ground.</p>'),
      { who: 'd', vis: 'demon', text: 'I will make you fence the inside of a garden, confuse metres with square metres, and hide the height of every quadrilateral. Can you measure only what matters?' },
      { type: 'battle' }
    ],
    quiz: [
      question('A rectangular school garden is 12 m long and 8 m wide. How much fencing is needed around it?', ['40 m', '96 m²', '20 m', '48 m'], 'Perimeter = 2(12 + 8) = 40 m. Fencing measures the outside boundary, not the area.'),
      question('A circular flower bed has radius 3 m. What is its area in terms of π?', ['9π m²', '6π m', '3π m²', '18π m²'], 'Area of a circle = πr² = π × 3² = 9π m².'),
      question('Which formula gives the area of a trapezoid with parallel sides a and b and perpendicular height h?', ['½(a + b)h', 'ab + h', '2(a + b)', '½ab h²'], 'Area of a trapezoid is half the sum of its parallel sides multiplied by its perpendicular height.'),
      question('An irregular shape covers 8 full grid squares and 6 half-squares. What is its estimated area?', ['11 square units', '14 square units', '8 square units', '6 square units'], 'The six half-squares make 3 full squares; 8 + 3 = 11 square units.')
    ]
  }
];
