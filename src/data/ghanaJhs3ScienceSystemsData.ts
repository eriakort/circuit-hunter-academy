import type { ArcInfo, Mission, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 3 Science · Systems (Basic 9). */
export const GHANA_JHS3_SCIENCE_SYSTEMS_UNIT: UnitInfo = {
  title: 'Systems',
  ch: 'JHS 3 · NaCCA Science · Strand 3',
  subject: 'ghjhs3science'
};

export const GHANA_JHS3_SCIENCE_SYSTEMS_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs3science', title: 'The Human Body · Circulation and Respiration', pages: 'NaCCA CCP · JHS 3 Science · B9.3.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs3science', title: 'The Solar System · Asteroids and Comets', pages: 'NaCCA CCP · JHS 3 Science · B9.3.2.1' },
  { n: 3, unit: 0, subject: 'ghjhs3science', title: 'Ecosystems · Interdependence and Balance', pages: 'NaCCA CCP · JHS 3 Science · B9.3.3.1' },
  { n: 4, unit: 0, subject: 'ghjhs3science', title: 'Farming Systems · Manure Preparation', pages: 'NaCCA CCP · JHS 3 Science · B9.3.4.1' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS3_SCIENCE_SYSTEMS_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-science-circulation-respiration', arc: 0, sec: 'Systems', pages: 'NaCCA CCP · JHS 3 Science · B9.3.1.1.1–B9.3.1.1.2',
    hue: 350, horns: 2, eyes: 2, title: 'The Circulation and Respiration Guardian',
    topic: 'Explain the blood circulatory system, the parts and functions of blood, heart and blood vessels, common circulatory health challenges, blood pressure, and how respiration and circulation work together.',
    demon: 'The Oxygen Route Breaker', tech: 'Life Form · First Technique: Keep the Oxygen Route Open',
    scenes: [
      lesson('<p>The <b>circulatory system</b> transports substances around the body. The heart is a muscular pump, blood is the transport fluid, and blood vessels form the routes. Together they deliver oxygen and nutrients to cells and carry carbon dioxide and other wastes away.</p>'),
      lesson('<p>Blood has four main components. <b>Plasma</b> is the liquid that carries dissolved substances. <b>Red blood cells</b> contain haemoglobin, which carries oxygen. <b>White blood cells</b> help defend the body against pathogens. <b>Platelets</b> help blood clot and reduce bleeding. Arteries carry blood away from the heart, veins return blood to it, and tiny capillaries allow exchange with tissues.</p>'),
      lesson('<p>The heart has four chambers: right atrium, right ventricle, left atrium and left ventricle. The right side sends blood to the lungs, where it releases carbon dioxide and takes up oxygen. The left side pumps oxygen-rich blood around the body. Valves help keep blood flowing in the correct direction. Blood pressure is the force of blood against artery walls; healthy habits and professional medical advice help manage risk factors for circulatory disease.</p>'),
      lesson('<p><b>Respiration</b> is a chemical process in cells that releases energy from glucose. In aerobic respiration, glucose reacts with oxygen to produce carbon dioxide, water and energy. Breathing brings air into the lungs; oxygen passes into the blood at the tiny air sacs called alveoli. The circulatory system carries it to cells. Blood returns carbon dioxide to the lungs to be breathed out. Breathing and cellular respiration are related, but they are not the same process.</p>'),
      { who: 'd', vis: 'demon', text: 'I have blocked the oxygen route! Trace blood through the heart, lungs and body, then match each blood component to its job.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which three parts make up the main blood circulatory system?', ['Heart, blood and blood vessels', 'Lungs, stomach and bones', 'Brain, nerves and muscles', 'Kidneys, skin and liver'], 'The heart pumps blood through blood vessels around the body.'),
      q('Which blood component carries most oxygen?', ['Red blood cells with haemoglobin', 'Platelets', 'Plasma proteins only', 'White blood cells'], 'Haemoglobin in red blood cells binds and transports oxygen.'),
      q('What is the main role of capillaries?', ['Allow exchange of substances between blood and tissues', 'Pump blood out of the heart', 'Prevent all blood clotting', 'Make oxygen in the lungs'], 'Their thin walls allow gases, nutrients and wastes to be exchanged with cells.'),
      q('Where does blood take up oxygen from inhaled air?', ['In the lungs, around the alveoli', 'Inside the stomach', 'In the left atrium only', 'Inside the bones'], 'Oxygen diffuses from air in the alveoli into surrounding blood capillaries.'),
      q('What is cellular respiration?', ['A chemical process that releases energy from glucose', 'The movement of air into the lungs only', 'The pumping of blood by the heart', 'The digestion of food in the mouth'], 'Cellular respiration releases energy from glucose; aerobic respiration uses oxygen and produces carbon dioxide and water.')
    ]
  },
  {
    id: 'gh-jhs3-science-asteroids-comets', arc: 1, sec: 'Systems', pages: 'NaCCA CCP · JHS 3 Science · B9.3.2.1.1',
    hue: 224, horns: 2, eyes: 2, title: 'The Asteroid and Comet Pathfinder',
    topic: 'Describe and compare the movement of asteroids and comets as non-planetary bodies orbiting the Sun within the Solar System.',
    demon: 'The Orbit Distorter', tech: 'Cosmic Form · Second Technique: Read the Orbit',
    scenes: [
      lesson('<p>The Solar System contains the Sun, eight planets and many smaller bodies. <b>Asteroids</b> are rocky or metallic objects that orbit the Sun. Many are found in the asteroid belt between Mars and Jupiter, although asteroids can travel in other regions too.</p>'),
      lesson('<p><b>Comets</b> are made of ice, dust and rocky material. When a comet approaches the Sun, its surface warms and releases gas and dust. This can form a glowing coma around the nucleus and a tail. The tail is pushed away from the Sun by sunlight and the solar wind, so it does not simply trail behind the comet along its path.</p>'),
      lesson('<p>Asteroids and comets both orbit the Sun under gravity, but their paths and compositions differ. Many asteroids have relatively less elongated orbits, while many comets travel on highly elongated orbits that take them far from and then close to the Sun. Some comets have short periods; others take thousands of years to return.</p>'),
      lesson('<p>Scientists use telescopes and spacecraft observations to measure positions and predict orbits. A model can compare an asteroid’s path with a comet’s elongated orbit, but the drawing is not to scale. Never look directly at the Sun through a telescope or binoculars; solar observing requires specialist safe equipment.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the rocky visitors and icy travellers! Identify each body and predict how its orbit changes its appearance near the Sun.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What are asteroids mainly made of?', ['Rock and metal', 'Only liquid water', 'Hot plasma', 'Pure oxygen gas'], 'Asteroids are small rocky or metallic bodies orbiting the Sun.'),
      q('Where is the main asteroid belt?', ['Between Mars and Jupiter', 'Between Earth and the Moon', 'Beyond the Sun', 'Inside Mercury'], 'The main asteroid belt lies between the orbits of Mars and Jupiter.'),
      q('What can form around a comet when it approaches the Sun?', ['A coma and one or more tails', 'A permanent ring of liquid water', 'A new planet', 'A solid atmosphere like Earth’s'], 'Solar heating releases gas and dust, creating a coma and tails.'),
      q('What force keeps asteroids and comets in orbit around the Sun?', ['Gravity', 'Sound', 'Friction with air', 'Magnetism alone'], 'The Sun’s gravitational attraction governs their orbits.'),
      q('Which statement about a comet’s tail is correct?', ['It is generally directed away from the Sun', 'It always points along the comet’s direction of travel', 'It is made of solid rock only', 'It appears only when the comet is farthest from the Sun'], 'Sunlight and the solar wind push cometary gas and dust away from the Sun.')
    ]
  },
  {
    id: 'gh-jhs3-science-ecosystem-balance', arc: 2, sec: 'Systems', pages: 'NaCCA CCP · JHS 3 Science · B9.3.3.1.1',
    hue: 126, horns: 2, eyes: 2, title: 'The Ecosystem Balance Keeper',
    topic: 'Investigate living and non-living ecosystem components, distinguish a habitat from an ecosystem, build food chains and webs, and predict how human and natural disturbances affect balance.',
    demon: 'The Food-Web Disruptor', tech: 'Earth Form · Third Technique: Protect Every Connection',
    scenes: [
      lesson('<p>An <b>ecosystem</b> is a community of living organisms interacting with one another and with non-living parts of their surroundings. Living components include plants, animals, fungi and microorganisms. Non-living components include sunlight, water, air, soil and temperature. A <b>habitat</b> is the place where an organism lives; an ecosystem includes the interactions within that place.</p>'),
      lesson('<p>Green plants are <b>producers</b> because they make food using light energy. Animals are consumers: herbivores eat plants, while carnivores eat other animals. Decomposers such as fungi and bacteria break down dead material and return nutrients to the environment. Organisms depend on one another for food, shelter, pollination, seed dispersal and nutrient recycling.</p>'),
      lesson('<p>A <b>food chain</b> shows one pathway of feeding, for example: Sun → grass → grasshopper → lizard → hawk. Arrows point in the direction energy is transferred, from the food to the organism that eats it. A <b>food web</b> joins many food chains because most organisms have more than one food source or predator.</p>'),
      lesson('<p>Ecosystem balance can be disturbed by droughts, floods, earthquakes and volcanic eruptions, as well as hunting, farming, mining, galamsey, pollution, pesticides and bush burning. Removing one species can affect others in the food web. Sustainable farming, habitat protection, responsible waste disposal and careful use of chemicals help reduce harmful impacts.</p>'),
      { who: 'd', vis: 'demon', text: 'I have removed key links from the food web! Restore the feeding relationships and predict what may happen when one population changes.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the difference between a habitat and an ecosystem?', ['A habitat is where an organism lives; an ecosystem includes organisms and their interactions with the environment', 'They mean exactly the same thing', 'An ecosystem contains only rocks', 'A habitat always contains the whole planet'], 'An ecosystem includes living and non-living components and their interactions.'),
      q('Which organism is a producer in a grassland food chain?', ['Grass', 'Grasshopper', 'Lizard', 'Hawk'], 'Green plants such as grass make their own food using light energy.'),
      q('What do arrows in a food chain show?', ['The direction of energy transfer', 'The direction of the wind', 'The size of each organism', 'The age of each species'], 'Arrows point from the food source to the organism that receives the energy.'),
      q('Why are decomposers important in an ecosystem?', ['They break down dead material and recycle nutrients', 'They stop all plants from growing', 'They create sunlight', 'They remove every predator'], 'Decomposers return nutrients from dead organisms and waste to the environment.'),
      q('How can galamsey affect an ecosystem?', ['Mining can damage habitats and pollute water and soil', 'It always increases biodiversity', 'It creates new clean rivers', 'It has no effect on living things'], 'Unregulated mining can destroy habitats and introduce pollutants into ecosystems.')
    ]
  },
  {
    id: 'gh-jhs3-science-manure-materials', arc: 3, sec: 'Systems', pages: 'NaCCA CCP · JHS 3 Science · B9.3.4.1.1',
    hue: 72, horns: 2, eyes: 2, title: 'The Manure Materials Investigator',
    topic: 'Identify plant and animal wastes used to make manure, classify organic materials by source, and explain how manure can improve soil when safely prepared and applied.',
    demon: 'The Waste Sorter', tech: 'Farm Form · Fourth Technique: Turn Waste into Soil Value',
    scenes: [
      lesson('<p><b>Manure</b> is organic material added to soil to supply nutrients and improve soil structure. Farmers can use animal wastes such as well-managed cattle dung, goat and sheep droppings, and poultry litter. The material must be handled and treated appropriately before use.</p>'),
      lesson('<p>Plant materials can also become manure or compost. Examples include dry leaves, crop residues, grass cuttings, vegetable peels and other suitable plant waste. Sorting materials helps remove plastics, glass, metals and other contaminants that do not belong in compost.</p>'),
      lesson('<p>Different materials contribute different nutrients and decompose at different rates. Animal manure can be nutrient-rich, while dry plant matter adds organic material and helps improve soil structure. A mixture of suitable green materials and dry brown materials, with moisture and air, supports composting.</p>'),
      lesson('<p>Choose materials based on availability, soil needs and local conditions. Human excreta and animal carcasses can carry pathogens and must never be handled or used as ordinary school compost. Only trained and regulated treatment systems can make some hazardous wastes safe. Use mature, properly treated compost and follow agricultural guidance.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed useful organic materials with dangerous rubbish! Sort the plant and animal wastes and choose safe materials for soil improvement.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which is an example of animal waste used in preparing manure?', ['Well-managed cattle dung', 'Plastic packaging', 'Broken glass', 'Motor oil'], 'Cattle dung can be treated and used as an organic manure material.'),
      q('Which is a suitable plant material for compost?', ['Dry leaves and vegetable peels', 'Plastic bags', 'Aluminium cans', 'Battery cells'], 'Suitable plant residues can decompose and contribute organic matter.'),
      q('Why should plastics and glass be removed before composting?', ['They do not decompose as organic matter and can contaminate the compost', 'They provide all the nutrients plants need', 'They make compost safe to eat', 'They turn into humus overnight'], 'Non-organic rubbish contaminates compost and can create hazards.'),
      q('What does dry plant matter contribute to compost?', ['Organic matter that can improve soil structure', 'A permanent supply of electricity', 'Metal minerals only', 'A replacement for sunlight'], 'Decomposed plant material adds organic matter and can improve soil structure.'),
      q('What is the safest approach to human excreta or animal carcasses?', ['Do not handle as ordinary compost; use only trained, regulated treatment', 'Mix them into a school compost heap by hand', 'Spread them fresh on vegetables', 'Store them beside drinking water'], 'These materials can carry pathogens and require specialised safe treatment.')
    ]
  },
  {
    id: 'gh-jhs3-science-manure-composting', arc: 3, sec: 'Systems', pages: 'NaCCA CCP · JHS 3 Science · B9.3.4.1.2–B9.3.4.1.3',
    hue: 32, horns: 2, eyes: 2, title: 'The Composting Field Engineer',
    topic: 'Demonstrate safe preparation of manure from suitable plant and animal wastes through sorting, layering, moisture control, aeration, curing and checking maturity.',
    demon: 'The Unfinished Compost Golem', tech: 'Farm Form · Fifth Technique: Cure the Soil Builder',
    scenes: [
      lesson('<p>Before composting, choose suitable clean plant residues and properly managed animal manure. Remove plastics, glass, metal, treated wood and other contaminants. Wear gloves, cover cuts, wash hands after the activity and keep the compost away from food preparation and drinking-water areas.</p>'),
      lesson('<p>Make a compost heap or use a suitable compost bin. Alternate layers of moist green materials, such as fresh plant trimmings, with dry brown materials, such as dry leaves. Add a little soil or mature compost to introduce decomposer organisms. Chop bulky plant matter into smaller pieces to help it break down.</p>'),
      lesson('<p>Composting organisms need moisture and oxygen. The heap should feel like a wrung-out sponge: moist, not waterlogged. Turn or mix it periodically to introduce air. If it is too dry, decomposition slows; if it is too wet and compacted, it may smell because there is too little oxygen.</p>'),
      lesson('<p>Allow the material to cure until it is dark, crumbly and earthy-smelling, with no recognisable fresh scraps. Time varies with materials, weather and management. Properly matured compost can improve soil structure and add nutrients. Do not use fresh manure directly on food crops; follow local agricultural guidance on safe treatment and application.</p>'),
      { who: 'd', vis: 'demon', text: 'I have rushed the compost and sealed out the air! Put the preparation steps in order and diagnose what the heap needs to mature safely.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What should be done before putting materials into a compost heap?', ['Sort suitable organic materials and remove contaminants', 'Add batteries and plastic wrappers', 'Mix in glass to improve drainage', 'Use any chemical waste available'], 'Sorting removes hazardous and non-compostable materials.'),
      q('Why are green and brown materials mixed?', ['They provide a useful balance of moist, nitrogen-rich and dry, carbon-rich materials', 'They stop all decomposition', 'They make compost sterile immediately', 'They replace the need for oxygen'], 'A balance of green and brown materials supports decomposer activity.'),
      q('What moisture level is suitable for a compost heap?', ['Moist like a wrung-out sponge', 'Completely flooded', 'Bone dry at all times', 'Submerged in a pond'], 'Compost organisms need moisture, but excess water can reduce oxygen.'),
      q('Why is a compost heap turned?', ['To introduce oxygen and mix the materials', 'To remove all decomposers', 'To make it colder than ice', 'To stop decomposition'], 'Aeration supplies oxygen to organisms that break down the organic material.'),
      q('Which is a sign that compost is mature?', ['Dark, crumbly and earthy-smelling with no fresh scraps recognisable', 'Hot, slimy and strongly foul-smelling', 'Full of plastic and glass', 'Still made of fresh leaves only'], 'Mature compost is stable, dark and crumbly and has an earthy smell.')
    ]
  }
];
