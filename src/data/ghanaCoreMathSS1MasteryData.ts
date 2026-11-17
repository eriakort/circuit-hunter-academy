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
  }
];
