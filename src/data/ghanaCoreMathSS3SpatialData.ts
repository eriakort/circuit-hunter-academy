import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_CORE_MATH_SS3_SPATIAL_UNIT: UnitInfo = {
  title: 'Geometry Around Us · Spatial Sense',
  ch: 'SS3 · NaCCA pp. 323–351',
  subject: 'ghcoremath3'
};

export const GHANA_CORE_MATH_SS3_SPATIAL_ARCS: ArcInfo[] = [{
  n: 1,
  unit: 0,
  subject: 'ghcoremath3',
  title: 'Circles, Constructions and Loci',
  pages: 'NaCCA SHS 3 · pp. 329–351'
}];

const q = (prompt: string, answers: string[], why: string) => ({ q: prompt, a: answers, why });
const lesson = (text: string) => ({ who: 's' as const, vis: 'ghmath', text });

export const GHANA_CORE_MATH_SS3_SPATIAL_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss3-circle-cartographer', arc: 0, sec: '3.3.1', pages: 'NaCCA SHS 3 · pp. 329–333',
    hue: 48, horns: 2, eyes: 3, title: 'The Circle Cartographer',
    topic: 'Identify the parts of a circle, construct circles with given radii and find the centre of a circle through three points.',
    demon: 'The Boundary Shifter', tech: 'Geometry Form · SHS 3 Technique: Circle Compass',
    scenes: [
      lesson('<p>A <b>circle</b> is the set of points in a plane that are all the same distance from a fixed point called the <b>centre</b>. The <b>radius</b> joins the centre to the circumference. The <b>diameter</b> passes through the centre and is twice the radius: d = 2r.</p>'),
      lesson('<p>The <b>circumference</b> is the distance around the circle. A <b>chord</b> joins two points on the circumference; a diameter is the longest chord. An <b>arc</b> is part of the circumference. A <b>sector</b> is bounded by two radii and an arc, while a <b>segment</b> is bounded by a chord and its arc.</p>'),
      lesson('<p>A <b>secant</b> cuts a circle at two points. A <b>tangent</b> touches it at exactly one point. A semicircle is half a circle, and a quadrant is one quarter. Naming these parts correctly helps us interpret diagrams and solve circle problems.</p>'),
      lesson('<p>To draw a circle of radius 5 cm, mark its centre O, set a compass opening to 5 cm using a ruler, place the compass point at O and rotate it through a full turn. Every point on the circle is then 5 cm from O.</p>'),
      lesson('<p>To construct a circle through three non-collinear points A, B and C, draw two chords such as AB and BC. Construct their perpendicular bisectors. Their intersection O is equidistant from A, B and C, so use OA as the compass radius to draw the required circle.</p>'),
      { type: 'sort', title: 'Match the circle part to its description', cats: [['Radius', 'Centre to edge'], ['Diameter', 'Through centre'], ['Chord', 'Two edge points'], ['Sector', 'Two radii and arc']], items: [
        { n: 'A segment from the centre to the circumference', c: 0, i: 'radius' },
        { n: 'A chord that passes through the centre', c: 1, i: 'diameter' },
        { n: 'A line segment joining two points on the circle', c: 2, i: 'chord' },
        { n: 'A slice enclosed by two radii and an arc', c: 3, i: 'sector' }
      ] },
      { who: 'd', vis: 'demon', text: 'Map the circle carefully. Every point on its edge must be the same distance from the centre!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A circle has radius 6 cm. What is its diameter?', ['12 cm', '3 cm', '6 cm', '18 cm'], 'The diameter is twice the radius: d = 2 × 6 = 12 cm.'),
      q('Which chord is the longest in a circle?', ['The diameter', 'A short chord near the edge', 'Every chord is equal', 'The radius'], 'The diameter is a chord through the centre and is the longest possible chord.'),
      q('Which part is enclosed by two radii and an arc?', ['A sector', 'A segment', 'A tangent', 'A secant'], 'A sector is the slice bounded by two radii and the included arc.'),
      q('How many distinct circles pass through three non-collinear points?', ['Exactly one', 'None', 'Exactly two', 'Infinitely many'], 'The perpendicular bisectors of two chords meet at the unique centre.'),
      q('A compass is set to 4 cm. What is the distance from the centre to every point on the circle?', ['4 cm', '8 cm', '2 cm', '16 cm'], 'The compass opening is the radius, so every circumference point is 4 cm from the centre.')
    ]
  },
  {
    id: 'gh-core-ss3-circle-theorem-keeper', arc: 0, sec: '3.3.1', pages: 'NaCCA SHS 3 · pp. 334–338',
    hue: 190, horns: 2, eyes: 3, title: 'The Circle Theorem Keeper',
    topic: 'Apply and explain the main circle theorems involving angles, chords and cyclic quadrilaterals.',
    demon: 'The Angle Distorter', tech: 'Proof Form · SHS 3 Technique: Theorem Sight',
    scenes: [
      lesson('<p>The angle at the centre of a circle is <b>twice</b> the angle at the circumference standing on the same arc. If the angle at the circumference is 35°, the angle at the centre is 70°. Always identify the same two endpoints of the arc.</p>'),
      lesson('<p>The angle subtended by a <b>diameter</b> at the circumference is 90°. This is the angle-in-a-semicircle theorem. It means a triangle drawn with the diameter as one side and its third vertex on the circle is right-angled.</p>'),
      lesson('<p>Angles subtended by the same chord or arc at the circumference are equal when their vertices lie in the same segment. Equal chords also subtend equal angles at the centre, and equal central angles stand on equal chords.</p>'),
      lesson('<p>In a <b>cyclic quadrilateral</b>, all four vertices lie on one circle. Its opposite angles add to 180°. For example, if one interior angle is 112°, the opposite angle is 68° because 180° − 112° = 68°.</p>'),
      lesson('<p>A theorem is stronger when you can explain why it works. Mark equal radii to form isosceles triangles, use the triangle angle sum of 180°, and connect the resulting equal angles. A clear diagram and labelled reasoning help prevent angle-chasing mistakes.</p>'),
      { type: 'sort', title: 'Match the theorem to its result', cats: [['Centre angle', 'Twice circumference'], ['Semicircle', '90°'], ['Same segment', 'Equal angles'], ['Cyclic quadrilateral', 'Opposite sum 180°']], items: [
        { n: 'Angle at centre on the same arc', c: 0, i: 'double' },
        { n: 'Angle standing on a diameter', c: 1, i: 'right' },
        { n: 'Angles standing on the same chord in one segment', c: 2, i: 'equal' },
        { n: 'Opposite interior angles', c: 3, i: 'supplementary' }
      ] },
      { who: 'd', vis: 'demon', text: 'Do not guess the angle. Name the theorem, show the matching arc or chord, and justify each step!' },
      { type: 'battle' }
    ],
    quiz: [
      q('The angle at the circumference on an arc is 42°. What is the angle at the centre on the same arc?', ['84°', '21°', '42°', '138°'], 'The angle at the centre is twice the angle at the circumference: 2 × 42° = 84°.'),
      q('What angle is subtended by a diameter at the circumference?', ['90°', '45°', '180°', '360°'], 'The angle in a semicircle is always a right angle.'),
      q('Two angles stand on the same chord in the same segment. What can you say?', ['They are equal', 'They add to 90°', 'One is twice the other', 'They are supplementary'], 'Angles in the same segment are equal.'),
      q('An angle in a cyclic quadrilateral is 118°. What is its opposite angle?', ['62°', '118°', '72°', '242°'], 'Opposite angles in a cyclic quadrilateral sum to 180°: 180° − 118° = 62°.'),
      q('Equal chords in the same circle subtend what at the centre?', ['Equal angles', 'Right angles only', 'Supplementary angles', 'Unequal angles'], 'Equal chords subtend equal angles at the centre.')
    ]
  },
  {
    id: 'gh-core-ss3-tangent-sentinel', arc: 0, sec: '3.3.1', pages: 'NaCCA SHS 3 · pp. 339–346',
    hue: 265, horns: 2, eyes: 3, title: 'The Tangent Sentinel',
    topic: 'Use tangent-radius perpendicularity, the alternate segment theorem and equal tangents from an external point.',
    demon: 'The Touchpoint Trickster', tech: 'Geometry Form · SHS 3 Technique: Tangent Guard',
    scenes: [
      lesson('<p>A <b>tangent</b> touches a circle at exactly one point T. The radius OT drawn to the point of contact is perpendicular to the tangent, so angle OTP is 90°. This gives a right triangle that can be used with the angle sum or Pythagoras.</p>'),
      lesson('<p>The <b>alternate segment theorem</b> says that the angle between a tangent and a chord through the point of contact equals the angle in the opposite, or alternate, segment of the circle. Identify the chord and the matching angle on the far side before applying it.</p>'),
      lesson('<p>From an external point P, draw two tangents PA and PB to the same circle. Their lengths are equal: PA = PB. The radii OA and OB are equal, OP is common, and both radius-tangent angles are 90°, so the two right triangles are congruent.</p>'),
      lesson('<p>When solving a tangent problem, mark the right angle first. Then look for equal radii, equal tangents or an alternate-segment angle. Use the triangle angle sum and state the theorem that supports each step.</p>'),
      { type: 'sort', title: 'Match the tangent fact to its meaning', cats: [['Radius and tangent', '90°'], ['Alternate segment', 'Tangent-chord angle'], ['Two tangents', 'Equal lengths'], ['Point of contact', 'One shared point']], items: [
        { n: 'Radius to the point where tangent touches', c: 0, i: 'perpendicular' },
        { n: 'Angle between tangent and chord', c: 1, i: 'alternate' },
        { n: 'Tangents from one external point to a circle', c: 2, i: 'equal' },
        { n: 'The only point shared by tangent and circle', c: 3, i: 'touch' }
      ] },
      { who: 'd', vis: 'demon', text: 'Guard the point of contact. A tangent is not just another chord!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the angle between a radius and tangent at the point of contact?', ['90°', '45°', '60°', '180°'], 'The radius is perpendicular to the tangent at the point of contact.'),
      q('The tangent-chord angle is 48°. What is the angle in the alternate segment?', ['48°', '42°', '96°', '132°'], 'The alternate segment theorem makes these two angles equal.'),
      q('Two tangents PA and PB are drawn from the same external point P. Which statement is true?', ['PA = PB', 'PA is always twice PB', 'PA + PB equals the radius', 'They are perpendicular'], 'Tangents drawn from the same external point to one circle have equal lengths.'),
      q('Why is triangle OPT right-angled when PT is tangent at T?', ['OT is perpendicular to PT', 'OT equals PT', 'OP is a diameter', 'All its sides are equal'], 'The radius to the point of contact is perpendicular to the tangent.'),
      q('If PA = 7.5 cm, what is PB for two tangents from P?', ['7.5 cm', '15 cm', '3.75 cm', 'It cannot be found'], 'The two tangent segments from the same external point are equal.')
    ]
  },
  {
    id: 'gh-core-ss3-compass-locus-architect', arc: 0, sec: '3.3.1', pages: 'NaCCA SHS 3 · pp. 347–351',
    hue: 48, horns: 2, eyes: 3, title: 'The Compass & Locus Architect',
    topic: 'Construct specified angles, triangles and quadrilaterals, then draw loci that satisfy geometric conditions.',
    demon: 'The Unfinished Blueprint', tech: 'Construction Form · SHS 3 Technique: Compass Craft',
    scenes: [
      lesson('<p>Accurate constructions use a ruler, compass and protractor where appropriate. You can make 60° with an equilateral-triangle construction, 90° with a perpendicular, and 30° or 45° by bisecting 60° or 90°. Combine these to construct 75°, 105°, 135° and 150°.</p>'),
      lesson('<p>For example, 75° = 60° + 15°, where 15° is obtained by bisecting 30°. Also, 105° = 60° + 45°, 135° = 90° + 45°, and 150° = 90° + 60°. Keep construction arcs visible so another learner can follow your method.</p>'),
      lesson('<p>To construct a triangle, use the given side lengths and angles. SSS uses three sides, SAS uses two sides and the included angle, and ASA uses two angles and the included side. For a quadrilateral, construct a suitable diagonal first, build the two triangles, then join the remaining vertices.</p>'),
      lesson('<p>A <b>locus</b> is the path of a point that follows a stated condition. Points a fixed distance r from a fixed point O form a circle with centre O and radius r. Points a fixed distance from a straight line form two parallel lines, one on each side.</p>'),
      lesson('<p>Points equidistant from two fixed points lie on the perpendicular bisector of the segment joining them. Points equidistant from two intersecting lines lie on the angle bisectors. Use intersections of loci to find positions that satisfy two conditions at once, such as where a lamp post can be equally far from two trees.</p>'),
      { type: 'sort', title: 'Match each condition to its locus', cats: [['Fixed distance from point', 'Circle'], ['Fixed distance from line', 'Parallel lines'], ['Equidistant from two points', 'Perpendicular bisector'], ['Equidistant from two intersecting lines', 'Angle bisectors']], items: [
        { n: 'Always 5 cm from point O', c: 0, i: 'circle' },
        { n: 'Always 2 cm from line l', c: 1, i: 'parallel' },
        { n: 'Same distance from A and B', c: 2, i: 'bisector' },
        { n: 'Same distance from two crossing lines', c: 3, i: 'angle' }
      ] },
      { who: 'd', vis: 'demon', text: 'A good construction is accurate, labelled and repeatable. Let the compass reveal every possible position!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which pair can be combined to construct 75°?', ['60° + 15°', '90° + 60°', '45° + 45°', '30° + 30°'], 'A 15° angle can be obtained by bisecting 30°, then added to 60°.'),
      q('Which information is used in an SSS triangle construction?', ['Three side lengths', 'Three angle sizes', 'Two sides and an angle', 'One side only'], 'SSS means side-side-side: all three side lengths are given.'),
      q('What is the locus of points exactly 4 cm from a fixed point O?', ['A circle centred at O with radius 4 cm', 'A straight line through O', 'Two parallel lines', 'A perpendicular bisector'], 'All points at a fixed distance from one point form a circle.'),
      q('What is the locus of points equidistant from two fixed points A and B?', ['The perpendicular bisector of AB', 'A circle through A and B', 'A line parallel to AB', 'The angle bisector'], 'Every point on the perpendicular bisector is equally far from A and B.'),
      q('What locus represents points a fixed distance from a straight line?', ['Two parallel lines', 'A circle', 'One perpendicular bisector', 'A pair of intersecting lines'], 'The points at that distance form one parallel line on each side of the original line.')
    ]
  }
];
