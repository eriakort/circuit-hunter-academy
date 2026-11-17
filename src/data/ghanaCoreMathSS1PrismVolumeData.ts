import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_PRISM_VOLUME_ARCS: ArcInfo[] = [
  {
    n: 9,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Geometry Around Us · Measurement',
    pages: 'NaCCA SHS 1 · p. 124'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_PRISM_VOLUME_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-prism-volume',
    arc: 0,
    sec: 'Geometry around us',
    pages: 'NaCCA SHS 1 · p. 124',
    hue: 208,
    horns: 2,
    eyes: 2,
    title: 'The Prism Vault',
    topic: 'Calculate the volume of rectangular, square-faced and triangular prisms and solve everyday problems involving capacity and space.',
    demon: 'The Space Squeezer',
    tech: 'Measurement Form · Tenth Technique: Volume Mastery',
    scenes: [
      lesson('<p>Volume tells us how much three-dimensional space a solid occupies. It is measured in cubic units, such as cm³, m³ or mm³. Do not confuse volume with area: area covers a flat surface and uses square units, while volume measures space and uses cubic units.</p>'),
      lesson('<p>A prism has the same cross-section all the way along its length. The key formula is <strong>Volume = area of cross-section × length</strong>, often written as V = A × l. The cross-section area is the base area, and the length is the perpendicular distance between the matching ends.</p>'),
      lesson('<p>For a rectangular prism (cuboid), V = length × width × height. A square-faced cuboid has a square base, so V = side × side × length. Example: a box 20 cm long, 14 cm wide and 10 cm high has volume 20 × 14 × 10 = 2,800 cm³.</p>'),
      lesson('<p>For a triangular prism, first find the area of its triangular cross-section: A = ½ × base × perpendicular height. Then multiply by the prism length: V = ½ × b × h × l. If b = 6 cm, h = 4 cm and l = 10 cm, V = ½ × 6 × 4 × 10 = 120 cm³.</p>'),
      lesson('<p>Always use a perpendicular height, not a sloping side. Convert measurements to the same unit before multiplying. If a box has volume 7,000 cm³ and its base is 20 cm by 14 cm, its height is 7,000 ÷ (20 × 14) = 25 cm.</p>'),
      lesson('<p>Think about practical Ghanaian examples: the space inside a rectangular water tank, a carton used to package goods, or a triangular-prism roof section. State the correct cubic unit in every final answer. For capacity, remember that 1,000 cm³ = 1 litre.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the dimensions of every prism! Can you unlock the space inside each solid?' },
      { type: 'battle' }
    ],
    quiz: [
      question('Which unit is appropriate for the volume of a small carton?', ['cm³', 'cm²', 'cm', 'cm/min'], 'Volume is measured in cubic units because it measures three-dimensional space.'),
      question('A rectangular box is 8 cm long, 5 cm wide and 3 cm high. What is its volume?', ['120 cm³', '40 cm³', '16 cm³', '120 cm²'], 'V = length × width × height = 8 × 5 × 3 = 120 cm³.'),
      question('A triangular prism has a triangular cross-section with base 6 cm and perpendicular height 4 cm. Its length is 10 cm. Find its volume.', ['120 cm³', '240 cm³', '60 cm³', '20 cm³'], 'Triangle area = ½ × 6 × 4 = 12 cm². Multiply by 10 cm: 120 cm³.'),
      question('A rectangular water container holds 7,000 cm³. Its base measures 20 cm by 14 cm. What is its height?', ['25 cm', '50 cm', '10 cm', '35 cm'], 'Base area = 20 × 14 = 280 cm². Height = 7,000 ÷ 280 = 25 cm.')
    ]
  }
];
