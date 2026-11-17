import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_TRIGONOMETRY_ARCS: ArcInfo[] = [
  {
    n: 9,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Geometry Around Us · Trigonometry',
    pages: 'NaCCA SHS 1 · pp. 114–117'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_TRIGONOMETRY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-trigonometry',
    arc: 0,
    sec: 'Geometry around us',
    pages: 'NaCCA SHS 1 · pp. 114–117',
    hue: 42,
    horns: 2,
    eyes: 2,
    title: 'The Triangle Sightline',
    topic: 'Investigate sine, cosine and tangent, learn special-angle values, and use trigonometry to solve right-triangle and real-world measurement problems.',
    demon: 'The Angle Illusionist',
    tech: 'Measurement Form · Tenth Technique: Trigonometric Sight',
    scenes: [
      lesson('<p>Trigonometry connects the angles and side lengths of triangles. It helps us find a height or distance that is difficult to measure directly. We will begin with a right-angled triangle, which has one 90° angle.</p><p>Choose an acute angle θ. The <strong>hypotenuse</strong> is opposite the right angle. The <strong>opposite</strong> side faces θ, while the <strong>adjacent</strong> side touches θ but is not the hypotenuse. These names depend on which angle you choose.</p>'),
      lesson('<p>Remember SOH–CAH–TOA:</p><p><strong>sin θ = opposite ÷ hypotenuse</strong><br/><strong>cos θ = adjacent ÷ hypotenuse</strong><br/><strong>tan θ = opposite ÷ adjacent</strong></p><p>For example, if the opposite side is 3 cm and the hypotenuse is 5 cm, sin θ = 3/5 = 0.6. Use the ratio that contains the side you know and the side you need.</p>'),
      lesson('<p>Some angles have exact values worth learning. For 30°, 45° and 60°:</p><p>sin: 1/2, 1/√2, √3/2<br/>cos: √3/2, 1/√2, 1/2<br/>tan: 1/√3, 1, √3</p><p>For other angles, use a calculator in degree mode. Check the display: a calculator in radian mode will give a different result.</p>'),
      lesson('<p>On the unit circle, an angle is measured from the positive x-axis. The point on the circle has coordinates (cos θ, sin θ). From 0° to 360°, sine is the vertical coordinate and cosine is the horizontal coordinate. Their signs depend on the quadrant; tangent is sin θ ÷ cos θ when cos θ is not zero.</p>'),
      lesson('<p>Use trigonometry for a real measurement. Suppose you stand 20 m from the foot of a tree and measure an angle of elevation of 35° to its top. If the ground is level, tan 35° = height ÷ 20, so height = 20 × tan 35° ≈ 14.0 m. Always label the triangle before choosing a ratio, and include units in your answer.</p>'),
      { who: 'd', vis: 'demon', text: 'I will swap your opposite and adjacent sides, confuse your calculator and hide every height. Can you choose the correct ratio?' },
      { type: 'battle' }
    ],
    quiz: [
      question('In a right triangle, which side is the hypotenuse?', ['The side opposite the 90° angle', 'The side next to the chosen acute angle', 'The side opposite the chosen acute angle', 'The shortest side'], 'The hypotenuse is always opposite the right angle and is the longest side.'),
      question('Which ratio represents cosine?', ['Adjacent ÷ hypotenuse', 'Opposite ÷ hypotenuse', 'Opposite ÷ adjacent', 'Hypotenuse ÷ adjacent'], 'CAH in SOH–CAH–TOA means cosine = adjacent over hypotenuse.'),
      question('What is sin 30°?', ['1/2', '√3/2', '1', '√2'], 'The exact sine of 30° is 1/2.'),
      question('A learner stands 20 m from a tree. The angle of elevation to its top is 45°. Assuming level ground, approximately how tall is the tree?', ['20 m', '10 m', '28.3 m', '40 m'], 'tan 45° = height/20 and tan 45° = 1, so the height is 20 m.')
    ]
  }
];
