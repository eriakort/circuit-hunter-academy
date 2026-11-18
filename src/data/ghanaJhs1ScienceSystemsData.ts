import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_JHS1_SCIENCE_SYSTEMS_UNIT: UnitInfo = {
  title: 'Systems',
  ch: 'JHS 1 · NaCCA Science · Strand 3',
  subject: 'ghjhs1science'
};

export const GHANA_JHS1_SCIENCE_SYSTEMS_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs1science', title: 'The Human Body System', pages: 'NaCCA CCP · JHS 1 Science · B7.3.1' },
  { n: 2, unit: 0, subject: 'ghjhs1science', title: 'The Solar System', pages: 'NaCCA CCP · JHS 1 Science · B7.3.2' },
  { n: 3, unit: 0, subject: 'ghjhs1science', title: 'Ecosystem', pages: 'NaCCA CCP · JHS 1 Science · B7.3.3' },
  { n: 4, unit: 0, subject: 'ghjhs1science', title: 'Farming Systems', pages: 'NaCCA CCP · JHS 1 Science · B7.3.4' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS1_SCIENCE_SYSTEMS_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-science-human-body-system', arc: 0, sec: 'Systems', pages: 'NaCCA CCP · JHS 1 Science · B7.3.1',
    hue: 18, horns: 2, eyes: 2, title: 'The Digestion Defender',
    topic: 'Explain why humans need food, describe the stages of digestion and identify how digested nutrients are absorbed.',
    demon: 'The Nutrient Thief', tech: 'Body Form · First Technique: Fuel, Break Down and Absorb',
    scenes: [
      lesson('<p>Food supplies energy and materials that the body needs to grow, repair tissues and stay healthy. Foods contain nutrients such as carbohydrates, proteins, fats, vitamins, minerals and water. A balanced diet includes a variety of foods in suitable amounts.</p>'),
      lesson('<p>Digestion breaks large pieces of food into smaller substances that the body can absorb. Digestion begins in the mouth: teeth break food into smaller pieces and saliva starts the digestion of starch. Food moves down the oesophagus to the stomach.</p>'),
      lesson('<p>In the stomach, food is churned and mixed with digestive juices. It then moves into the small intestine, where digestion is completed and nutrients pass through the intestinal wall into the blood. The blood carries absorbed nutrients around the body.</p>'),
      lesson('<p>The large intestine absorbs much of the remaining water. Undigested material is stored in the rectum and leaves the body through the anus. The digestive organs work together as a system: each has a role, and the whole process helps the body use food.</p>'),
      { who: 'd', vis: 'demon', text: 'I have scrambled the digestive journey! Put the organs in order and explain how food becomes nutrients the body can use.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Why do humans need food?', ['For energy, growth and repair', 'Only to change eye colour', 'To stop needing water', 'Only to keep the stomach full'], 'Food provides energy and nutrients for growth, repair and normal body functions.'),
      q('Where does digestion begin?', ['In the mouth', 'In the large intestine', 'In the lungs', 'In the kidneys'], 'Chewing and saliva begin digestion in the mouth.'),
      q('Which tube carries food from the mouth to the stomach?', ['Oesophagus', 'Trachea', 'Small intestine', 'Blood vessel'], 'The oesophagus moves swallowed food to the stomach.'),
      q('Where are most digested nutrients absorbed into the blood?', ['Small intestine', 'Mouth', 'Oesophagus', 'Large intestine'], 'The small intestine has a large surface area for absorbing digested nutrients.'),
      q('What is one main role of the large intestine?', ['Absorb much of the remaining water', 'Make food enter the mouth', 'Pump blood around the body', 'Exchange oxygen in the lungs'], 'The large intestine absorbs water from the material that remains after digestion.')
    ]
  },
  {
    id: 'gh-jhs1-science-solar-system', arc: 1, sec: 'Systems', pages: 'NaCCA CCP · JHS 1 Science · B7.3.2',
    hue: 224, horns: 2, eyes: 2, title: 'The Inner Planet Navigator',
    topic: 'Identify Mercury, Venus, Earth and Mars, compare their properties and describe how they move around the Sun.',
    demon: 'The Orbit Mix-Up', tech: 'Space Form · First Technique: Map the Inner Worlds',
    scenes: [
      lesson('<p>The Solar System consists of the Sun and the objects held near it by gravity. The Sun is a star. Eight planets travel around it on paths called orbits. The four planets nearest the Sun are Mercury, Venus, Earth and Mars; they are called the inner planets.</p>'),
      lesson('<p>Mercury is the closest planet to the Sun and is small, rocky and covered with many craters. Venus is similar in size to Earth but has a very thick atmosphere and an extremely hot surface. Its thick atmosphere traps heat.</p>'),
      lesson('<p>Earth has liquid water on much of its surface and conditions that support life as we know it. Mars is a cold, rocky planet often called the Red Planet because iron-rich dust gives its surface a reddish colour.</p>'),
      lesson('<p>Planets orbit the Sun because of gravity. They also rotate, or spin, on their axes. A planet’s orbit is not the same as its rotation: orbiting Earth takes about one year, while one rotation takes about one day.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the inner planets and confused rotation with orbit. Restore the correct order and explain their movements!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which planet is closest to the Sun?', ['Mercury', 'Venus', 'Earth', 'Mars'], 'Mercury is the innermost planet in the Solar System.'),
      q('Which list contains the four inner planets in order from the Sun?', ['Mercury, Venus, Earth, Mars', 'Earth, Mars, Venus, Mercury', 'Venus, Mercury, Mars, Earth', 'Mars, Earth, Mercury, Venus'], 'The inner planets in outward order are Mercury, Venus, Earth and Mars.'),
      q('Why is Venus extremely hot at its surface?', ['Its thick atmosphere traps heat', 'It is the closest planet to the Sun', 'It has no atmosphere', 'It is made entirely of fire'], 'Venus has a dense atmosphere that produces a strong greenhouse effect.'),
      q('What does a planet do when it rotates?', ['Spins around its own axis', 'Travels around the Sun', 'Moves between galaxies', 'Stops moving'], 'Rotation is the spinning of an object around its axis.'),
      q('What keeps planets in orbit around the Sun?', ['Gravity', 'Sound', 'Wind', 'Magnetism alone'], 'The Sun’s gravitational attraction helps keep planets in their orbits.')
    ]
  },
  {
    id: 'gh-jhs1-science-ecosystem', arc: 2, sec: 'Systems', pages: 'NaCCA CCP · JHS 1 Science · B7.3.3',
    hue: 112, horns: 2, eyes: 2, title: 'The Ecosystem Balance Keeper',
    topic: 'Identify living and non-living ecosystem components, compare ecosystem types and explain how their parts interact.',
    demon: 'The Balance Breaker', tech: 'Nature Form · First Technique: Connect Every Living Thing',
    scenes: [
      lesson('<p>An ecosystem is a place where living things interact with one another and with non-living parts of their surroundings. A pond, forest or grassland can be an ecosystem. An ecosystem includes organisms, water, air, soil, sunlight and suitable conditions.</p>'),
      lesson('<p>Living components include plants, animals, fungi and microorganisms. Non-living components include sunlight, water, air, rocks and temperature. Plants often act as producers because they make food using light energy. Animals are consumers, and decomposers break down dead material.</p>'),
      lesson('<p>Ecosystems can be grouped by where they occur. Terrestrial ecosystems are on land, aquatic ecosystems are in water, and arboreal ecosystems are associated with trees. Each type provides habitats and resources for organisms adapted to its conditions.</p>'),
      lesson('<p>Organisms depend on one another. A food chain shows one pathway of energy transfer, such as grass → grasshopper → frog. Several connected food chains form a food web. Changes to one population can affect other organisms and the balance of the ecosystem.</p>'),
      { who: 'd', vis: 'demon', text: 'I have removed producers and disconnected the food web! Identify ecosystem components and rebuild the links that support life.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which statement best describes an ecosystem?', ['Living things interacting with each other and their non-living surroundings', 'Only all the animals in one place', 'A place containing rocks but no organisms', 'A group of buildings'], 'An ecosystem includes interacting living organisms and non-living environmental factors.'),
      q('Which is a non-living component of an ecosystem?', ['Sunlight', 'Grass', 'Frog', 'Fungus'], 'Sunlight is non-living, while grass, frogs and fungi are organisms.'),
      q('Why are green plants called producers?', ['They make food using light energy', 'They eat all animals', 'They break rocks into soil', 'They only consume other plants'], 'Plants produce sugars through photosynthesis using light energy.'),
      q('What does a food chain show?', ['A pathway of feeding and energy transfer', 'The age of every animal', 'The water cycle only', 'A list of non-living objects'], 'A food chain shows how energy passes between organisms through feeding.'),
      q('What may happen if one important species disappears from a food web?', ['Other populations may be affected', 'Nothing in the ecosystem can ever change', 'All non-living components become animals', 'The Sun stops shining'], 'Organisms are connected, so a change in one population can affect others.')
    ]
  },
  {
    id: 'gh-jhs1-science-farming-systems', arc: 3, sec: 'Systems', pages: 'NaCCA CCP · JHS 1 Science · B7.3.4',
    hue: 76, horns: 2, eyes: 2, title: 'The Farming Systems Strategist',
    topic: 'Compare land rotation, crop rotation, mixed cropping, mixed farming and organic farming.',
    demon: 'The Soil Exhaustion Fiend', tech: 'Farm Form · First Technique: Choose a Sustainable System',
    scenes: [
      lesson('<p>A farming system is the way a farmer organises land, crops, animals and resources. Different systems suit different places and goals. Farmers consider soil, rainfall, labour, available land and the needs of their community.</p>'),
      lesson('<p>In land rotation, a farmer uses one piece of land for a period and then moves to another while the first area rests. In crop rotation, different crops are grown on the same land in a planned sequence over seasons. These are different ways of managing land and soil.</p>'),
      lesson('<p>Mixed cropping means growing two or more crops together on the same piece of land. Mixed farming combines crop production with keeping livestock on the same farm. The crops and animals can sometimes support one another, for example when suitable animal manure is used to improve soil.</p>'),
      lesson('<p>Organic farming aims to manage the farm using ecological practices, such as compost, crop diversity and biological pest control, while avoiding synthetic fertilisers and pesticides under organic standards. No single system is best everywhere; farmers compare benefits, limits and local conditions.</p>'),
      { who: 'd', vis: 'demon', text: 'I have confused crop rotation with mixed farming! Match each system to its practice and choose a plan that protects the farm.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is crop rotation?', ['Growing different crops on the same land in a planned sequence', 'Growing only one crop forever', 'Moving animals between planets', 'Keeping crops in a store'], 'Crop rotation changes the crop grown on a piece of land over successive seasons.'),
      q('What happens in mixed cropping?', ['Two or more crops are grown together on the same land', 'Only livestock are kept', 'A farmer leaves all land unused', 'Crops are grown only in storage rooms'], 'Mixed cropping involves growing multiple crops together in one field.'),
      q('What makes mixed farming different from mixed cropping?', ['Mixed farming combines crops and livestock', 'Mixed farming grows no crops', 'Mixed cropping always includes fish', 'There is no difference'], 'Mixed farming combines crop production with animal keeping; mixed cropping combines crops.'),
      q('What is one purpose of allowing land to rest in a land-rotation system?', ['Give the land time to recover', 'Make soil disappear', 'Prevent all plants from growing', 'Remove the need for water'], 'Resting land can allow vegetation and soil conditions to recover, though good management is essential.'),
      q('Which practice is commonly associated with organic farming?', ['Using compost and ecological pest management', 'Applying any chemical without guidance', 'Burning all crop residues', 'Pouring waste into streams'], 'Organic farming uses practices such as composting, crop diversity and biological pest control.')
    ]
  }
];
