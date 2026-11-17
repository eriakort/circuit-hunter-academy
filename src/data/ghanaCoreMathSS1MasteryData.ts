import type { ArcInfo, Mission } from '../types';

export const GHANA_SS1_MASTERY_ARCS: ArcInfo[] = [
  {
    n: 17,
    unit: 0,
    subject: 'ghcoremath',
    title: 'Integrated SHS 1 Mastery',
    pages: 'NaCCA SHS 1 · Integrated revision'
  }
];

const lesson = (text: string) => ({ who: 's' as const, vis: 'infowords', text });
const question = (q: string, a: string[], why: string) => ({ q, a, why });

export const GHANA_SS1_MASTERY_MISSIONS: Mission[] = [
  {
    id: 'gh-core-ss1-integrated-mastery-trial',
    arc: 22,
    sec: 'Integrated Core Mathematics',
    pages: 'NaCCA SHS 1 · Integrated revision',
    hue: 318,
    horns: 2,
    eyes: 2,
    title: 'The Grand Mastery Trial',
    topic: 'Bring together financial mathematics, algebra, measurement and statistical reasoning to solve connected everyday problems.',
    demon: 'The Fragmentation Warden',
    tech: 'Mastery Form · Final Technique: Connect the Clues',
    scenes: [
      lesson('<p><b>Welcome to the Grand Mastery Trial.</b> Strong mathematicians do more than remember separate formulas: they choose the right idea, explain why it works, and check whether an answer makes sense. This mission revisits ideas from all four SHS 1 strands.</p>'),
      lesson('<p><b>Numbers and finance:</b> A savings balance, discount or tax problem is a percentage problem. Identify the starting amount and the rate before calculating. For annual compound interest, use A = P(1 + r)ⁿ. For a tax-inclusive price, divide by 1 + r to recover the pre-tax amount when the stated rate is r.</p>'),
      lesson('<p><b>Algebra:</b> Translate a situation into an expression, equation or inequality. If a school club has GH₵180 and each activity pack costs GH₵12, the number of packs n must satisfy 12n ≤ 180. Solve the inequality and explain what the answer means in the situation.</p>'),
      lesson('<p><b>Geometry and measurement:</b> Select the correct measurement tool and formula. For a prism, volume = cross-sectional area × length. For a right triangle, choose sine, cosine or tangent based on the known and unknown sides. Include units in the final answer.</p>'),
      lesson('<p><b>Data and evidence:</b> Choose a suitable average for the data. The mean uses every value but can be affected by an extreme value; the median is the middle value after sorting. Use the data and context to support a conclusion rather than making a claim that the data cannot justify.</p>'),
      lesson('<p><b>Your strategy:</b> Read the question twice, underline the known values, identify what is being asked, select a method, show each step, and check the result. If the answer is a money amount, include GH₵; if it is a length, area or volume, use the correct unit.</p>'),
      { who: 'd', vis: 'demon', text: 'I have split mathematics into disconnected pieces. Show me you can connect the ideas, choose a method and justify your answer!' },
      { type: 'battle' }
    ],
    quiz: [
      question('GH₵1,000 earns 10% compound interest annually for 2 years. What is the final balance?', ['GH₵1,210', 'GH₵1,200', 'GH₵1,100', 'GH₵1,020'], 'A = 1,000 × (1.10)² = GH₵1,210.'),
      question('A club has GH₵180. Each activity pack costs GH₵12. What inequality represents the number n of packs it can buy?', ['12n ≤ 180', '12 + n = 180', 'n − 12 ≤ 180', '180n ≤ 12'], 'The total cost is 12n and it cannot exceed the available GH₵180.'),
      question('A triangular prism has a triangular cross-section of area 12 cm² and length 8 cm. What is its volume?', ['96 cm³', '20 cm³', '48 cm³', '96 cm²'], 'Volume = cross-sectional area × length = 12 × 8 = 96 cm³.'),
      question('The data values are 4, 5, 5, 6 and 30. Which average best represents a typical value when the extreme value 30 is not typical?', ['Median: 5', 'Mean: 10', 'Maximum: 30', 'Range: 26'], 'The median is 5 and is less affected by the unusually high value 30 than the mean.')
    ]
  },
  {
    id: 'gh-core-ss1-measurement-mastery-challenge',
    arc: 22,
    sec: 'Geometry around us',
    pages: 'NaCCA SHS 1 · pp. 110–124 · Integrated measurement practice',
    hue: 188,
    horns: 2,
    eyes: 2,
    title: 'The Measurement Expedition',
    topic: 'Combine vectors and bearings, trigonometry, perimeter and area, and prism volume to solve connected measurement challenges.',
    demon: 'The Dimension Warden',
    tech: 'Measurement Form · Final Technique: Measure, Model and Verify',
    scenes: [
      lesson('<p><b>Welcome to the Measurement Expedition.</b> Measurement problems often require more than one idea. First decide what is being measured: direction, length, area or volume. Then choose a diagram, formula and unit that match the question.</p>'),
      lesson('<p><b>Vectors and bearings:</b> A vector has magnitude and direction. A three-figure bearing is measured clockwise from north: 000° is north, 090° east, 180° south and 270° west. Equal vectors have the same magnitude and direction, even when their arrows start in different places.</p>'),
      lesson('<p><b>Trigonometry:</b> In a right-angled triangle, SOH–CAH–TOA links the sides to an acute angle. Use sine for opposite/hypotenuse, cosine for adjacent/hypotenuse and tangent for opposite/adjacent. Draw and label the triangle before choosing a ratio. Check that your calculator is in degree mode.</p>'),
      lesson('<p><b>Perimeter and area:</b> Perimeter measures the outside boundary and uses linear units. Area measures the surface inside and uses square units. For a composite shape, split it into familiar pieces; for an irregular shape on a grid, combine full and partial squares. Do not count internal dividing lines as part of the perimeter.</p>'),
      lesson('<p><b>Area units:</b> Convert before calculating. Since 1 m = 100 cm, 1 m² = 10,000 cm². Squaring the conversion factor matters: 2 m² is 20,000 cm², not 200 cm². Keep length, area and volume units separate.</p>'),
      lesson('<p><b>Prism volume:</b> A prism has a constant cross-section. Its volume is cross-sectional area × perpendicular length. For a triangular prism, first calculate the triangle area (½ × base × perpendicular height), then multiply by the prism length. Remember that 1,000 cm³ = 1 litre.</p>'),
      lesson('<p><b>Plan a real project:</b> Imagine mapping a school route, estimating the surface of a garden and calculating the capacity of a water container. A bearing describes direction, trigonometry can estimate an inaccessible height, area estimates the ground covering, and volume estimates the space inside a tank. State assumptions and units at every step.</p>'),
      lesson('<p><b>Check your answer:</b> Estimate first, calculate carefully and ask whether the size is reasonable. A fence needs metres, paint coverage needs square metres, and tank capacity needs cubic units or litres. A correct number with the wrong unit is not a complete measurement answer.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed directions, angles, boundaries and space. Can you choose the right model, calculate accurately and defend every unit?' },
      { type: 'battle' }
    ],
    quiz: [
      question('A learner walks 6 km on a bearing of 090°. In which direction is the learner travelling?', ['East', 'North', 'South', 'West'], 'A bearing is measured clockwise from north; 090° points east.'),
      question('A right triangle has an opposite side of 6 cm and a hypotenuse of 10 cm. Which ratio gives sin θ?', ['6/10', '10/6', '8/10', '6/8'], 'Sine is opposite divided by hypotenuse, so sin θ = 6/10.'),
      question('A rectangular garden is 15 m long and 8 m wide. What length of fencing is needed around it?', ['46 m', '120 m²', '23 m', '38 m'], 'Perimeter = 2(15 + 8) = 46 m.'),
      question('A floor has an area of 3 m². What is this area in cm²?', ['30,000 cm²', '300 cm²', '3,000 cm²', '300,000 cm²'], '1 m² = 10,000 cm², so 3 m² = 30,000 cm².'),
      question('A composite floor is made from a 6 m by 4 m rectangle and a 2 m by 3 m rectangle with no overlap. What is its total area?', ['30 m²', '24 m²', '18 m²', '36 m²'], 'Add the non-overlapping areas: (6 × 4) + (2 × 3) = 24 + 6 = 30 m².'),
      question('A triangular prism has a triangular cross-section with base 8 cm and perpendicular height 5 cm. Its length is 12 cm. What is its volume?', ['240 cm³', '480 cm³', '120 cm³', '25 cm³'], 'Triangle area = ½ × 8 × 5 = 20 cm²; volume = 20 × 12 = 240 cm³.'),
      question('A water tank has a volume of 5,000 cm³. How many litres can it hold?', ['5 litres', '50 litres', '0.5 litres', '500 litres'], '1,000 cm³ = 1 litre, so 5,000 cm³ = 5 litres.'),
      question('Which set of units correctly matches boundary, flat surface and three-dimensional space?', ['m, m², m³', 'm², m, m³', 'm³, m², m', 'm, m³, m²'], 'Perimeter is a length (m), area is square units (m²), and volume is cubic units (m³).')
    ]
  },
];
