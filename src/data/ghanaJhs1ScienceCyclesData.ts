import type { ArcInfo, Mission, UnitInfo } from '../types';

export const GHANA_JHS1_SCIENCE_CYCLES_UNIT: UnitInfo = {
  title: 'Cycles',
  ch: 'JHS 1 · NaCCA Science · Strand 2',
  subject: 'ghjhs1science'
};

export const GHANA_JHS1_SCIENCE_CYCLES_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs1science', title: 'Earth Science', pages: 'NaCCA CCP · JHS 1 Science · B7.2.1' },
  { n: 2, unit: 0, subject: 'ghjhs1science', title: 'Life Cycle of Organisms', pages: 'NaCCA CCP · JHS 1 Science · B7.2.2 · B7.2.2.1.1 · B7.2.2.1.2' },
  { n: 3, unit: 0, subject: 'ghjhs1science', title: 'Crop Production', pages: 'NaCCA CCP · JHS 1 Science · B7.2.3' },
  { n: 4, unit: 0, subject: 'ghjhs1science', title: 'Animal Production', pages: 'NaCCA CCP · JHS 1 Science · B7.2.4' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS1_SCIENCE_CYCLES_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-science-earth-cycles', arc: 0, sec: 'Cycles', pages: 'NaCCA CCP · JHS 1 Science · B7.2.1',
    hue: 202, horns: 2, eyes: 2, title: 'The Earth Systems Explorer',
    topic: 'Describe the water cycle, weathering and erosion, and explain how Earth materials move through natural processes.',
    demon: 'The Cycle Breaker', tech: 'Earth Form · First Technique: Follow the Water',
    scenes: [
      lesson('<p>Earth has connected systems. The Sun heats water in oceans, lakes and rivers. Some water evaporates into water vapour, rises, cools and condenses into tiny droplets that form clouds.</p>'),
      lesson('<p>When droplets become heavy, water falls as precipitation such as rain. Water may flow over land into streams and rivers, soak into the soil, or collect in lakes and oceans. This repeating movement is the water cycle.</p>'),
      lesson('<p>Weathering breaks rocks into smaller pieces. It can happen through heating and cooling, water, plant roots and other natural processes. Erosion is the movement of weathered material by water, wind or ice.</p>'),
      lesson('<p>Soil, rocks and water support life and farming. Plant cover helps protect soil from being washed away. Keeping drains clear and protecting vegetation can reduce erosion and flooding in communities.</p>'),
      { who: 'd', vis: 'demon', text: 'I have stopped the rain and moved the soil! Trace the water cycle and distinguish weathering from erosion.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What provides most of the energy that drives the water cycle?', ['The Sun', 'The Moon', 'The soil', 'The wind alone'], 'Solar energy heats surface water and drives evaporation.'),
      q('What is evaporation?', ['Liquid water changing into water vapour', 'Water vapour changing into liquid droplets', 'Rain falling from clouds', 'Water soaking into rock'], 'Evaporation changes liquid water into water vapour.'),
      q('What happens during condensation?', ['Water vapour cools and forms tiny liquid droplets', 'Rocks turn into soil', 'Rainwater becomes sunlight', 'Soil moves downhill'], 'Cooling water vapour condenses into droplets that can form clouds.'),
      q('What is erosion?', ['The movement of weathered material', 'The breaking of rocks in place only', 'The formation of clouds', 'The growth of plant roots'], 'Erosion transports soil or rock fragments by water, wind or ice.'),
      q('Which action can help reduce soil erosion?', ['Keep vegetation cover on the soil', 'Remove all plants from slopes', 'Leave bare soil exposed', 'Block every drainage channel'], 'Plant cover protects soil and slows the movement of water across it.')
    ]
  },
  {
    id: 'gh-jhs1-science-life-cycles', arc: 1, sec: 'Cycles', pages: 'NaCCA CCP · JHS 1 Science · B7.2.2',
    hue: 142, horns: 2, eyes: 2, title: 'The Life Cycle Guardian',
    topic: 'Compare plant and animal life cycles, describe the housefly life cycle and explain how to reduce health risks from houseflies.',
    demon: 'The Stage Skipper', tech: 'Life Form · Fourth Technique: Grow and Reproduce',
    scenes: [
      lesson('<p>A life cycle is the sequence of stages a living thing passes through during its life. Organisms grow, develop and eventually reproduce. Their offspring begin another generation.</p>'),
      lesson('<p>A flowering plant may begin as a seed. The seed germinates when it has suitable water, air and warmth. A seedling grows into a mature plant, which can flower and produce fruits and seeds.</p>'),
      lesson('<p>Animals have different life cycles. A butterfly changes from egg to caterpillar (larva), then pupa, and finally adult. A housefly also has four stages: egg, larva (maggot), pupa and adult fly. The adult lays eggs, often on moist decaying organic material, and the cycle begins again. A chicken develops from egg to chick and then to adult. Not all animals pass through the same stages.</p>'),
      lesson('<p>Living things need suitable conditions to grow. Plants need light, water, air, nutrients and space. Animals need food, water, air, shelter and appropriate care. Houseflies can carry germs from faeces, rubbish and decaying waste to uncovered food and surfaces, helping spread diseases such as diarrhoeal infections. Reduce the risk by covering food, washing hands with soap, keeping toilets and drains clean, disposing of waste in covered bins and using fly screens where possible. Never handle pesticides carelessly.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up seeds, seedlings and adults. Put the stages in order and defend the life cycle!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a life cycle?', ['The stages an organism passes through during its life', 'The daily weather forecast', 'A list of non-living materials', 'The movement of rocks only'], 'A life cycle describes the stages of growth and reproduction.'),
      q('What is the first stage in the life cycle of a flowering plant?', ['Seed', 'Flower', 'Fruit', 'Mature tree'], 'A new flowering plant commonly begins as a seed.'),
      q('Which sequence correctly describes the life cycle shared by a housefly and a butterfly?', ['Egg, larva, pupa, adult', 'Egg, adult, larva, pupa', 'Larva, egg, adult, pupa', 'Pupa, adult, egg, larva'], 'Both undergo complete metamorphosis: egg, larva (maggot in a housefly), pupa and adult.'),
      q('What is germination?', ['A seed beginning to grow into a seedling', 'A flower producing rain', 'An adult animal laying an egg', 'A rock breaking apart'], 'Germination is the start of growth from a seed.'),
      q('Which action best reduces the risk of houseflies contaminating food?', ['Keep food covered and dispose of waste in covered bins', 'Leave food uncovered beside rubbish', 'Allow drains and toilets to become dirty', 'Handle insecticide without instructions'], 'Covering food, safe waste disposal, handwashing and clean surroundings help reduce contact between flies, germs and food.')
    ]
  },
  {
    id: 'gh-jhs1-science-crop-production', arc: 2, sec: 'Cycles', pages: 'NaCCA CCP · JHS 1 Science · B7.2.3',
    hue: 82, horns: 2, eyes: 2, title: 'The Crop Care Strategist',
    topic: 'Explain basic crop production practices from site selection and planting to crop care, harvesting and storage.',
    demon: 'The Harvest Waster', tech: 'Farm Form · First Technique: Prepare and Protect',
    scenes: [
      lesson('<p>Crop production is the growing of plants for food, materials or sale. Farmers begin by choosing a suitable site and crop. They consider soil, water, climate, land slope and the needs of the crop.</p>'),
      lesson('<p>Land preparation may include clearing unwanted vegetation safely, removing rubbish, loosening soil and making beds or ridges. Healthy planting materials and correct spacing help crops establish and receive enough light, water and nutrients.</p>'),
      lesson('<p>Crop care includes watering when needed, removing weeds, adding suitable manure or fertiliser, and monitoring pests and diseases. Farmers should use approved methods and follow safety guidance rather than applying chemicals carelessly.</p>'),
      lesson('<p>Harvest crops at the right stage and handle them carefully. Clean, dry and store produce in suitable conditions to reduce spoilage. Composting suitable plant waste and protecting soil help farms remain productive.</p>'),
      { who: 'd', vis: 'demon', text: 'I have scattered the seeds and spoiled the harvest! Choose the right steps to grow and protect a healthy crop.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What should a farmer consider when selecting a crop production site?', ['Soil, water and the crop’s growing needs', 'The colour of nearby buildings only', 'How far the site is from the Moon', 'The number of passing cars'], 'Site selection depends on soil, water, climate and crop requirements.'),
      q('Why is correct spacing between crops important?', ['It gives plants room and access to light and resources', 'It prevents all rainfall', 'It makes seeds unnecessary', 'It stops plants from growing'], 'Appropriate spacing reduces competition and supports healthy growth.'),
      q('Which is an example of crop care?', ['Removing weeds and monitoring pests', 'Leaving crops without attention', 'Mixing unknown chemicals', 'Harvesting before planting'], 'Weeding and careful pest monitoring are routine crop-care practices.'),
      q('Why should harvested crops be dried and stored properly?', ['To reduce spoilage and losses', 'To make all crops grow again immediately', 'To remove all nutrients', 'To attract pests'], 'Suitable drying and storage help prevent mould, pests and spoilage.'),
      q('What is a responsible way to manage suitable plant waste?', ['Compost it where appropriate', 'Dump it into a stream', 'Burn it beside stored crops', 'Leave it blocking drains'], 'Composting suitable organic waste can return nutrients to the soil.')
    ]
  },
  {
    id: 'gh-jhs1-science-animal-production', arc: 3, sec: 'Cycles', pages: 'NaCCA CCP · JHS 1 Science · B7.2.4',
    hue: 28, horns: 2, eyes: 2, title: 'The Animal Welfare Keeper',
    topic: 'Identify basic needs, housing, feeding, hygiene and health practices involved in responsible livestock production.',
    demon: 'The Careless Keeper', tech: 'Life Form · Fifth Technique: Care for Every Animal',
    scenes: [
      lesson('<p>Animal production is the rearing of animals for food, materials, income or other useful purposes. Examples include poultry, goats, sheep, cattle, pigs and fish. Farmers choose animals suited to their environment and purpose.</p>'),
      lesson('<p>Animals need clean water, suitable food, enough space, shelter and protection from extreme weather and danger. Housing should provide ventilation, drainage and protection while allowing animals to behave comfortably.</p>'),
      lesson('<p>Good hygiene helps prevent disease. Keep housing and feeding equipment clean, remove waste safely and observe animals for changes in appetite or behaviour. Seek trained veterinary help when animals are sick.</p>'),
      lesson('<p>Responsible animal care includes appropriate feeding, safe handling and regular health checks. Prevent overcrowding and avoid giving medicines without qualified guidance. Healthy animals and clean surroundings support safe food production.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the clean water and crowded the animal house. Restore good care, hygiene and welfare!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which is an example of animal production?', ['Rearing poultry for eggs', 'Making a clay pot', 'Growing maize only', 'Collecting rainfall'], 'Poultry rearing is animal production because animals are kept for useful products.'),
      q('Why do farm animals need clean water every day?', ['Water supports normal body functions and health', 'Water replaces every type of feed', 'Water prevents the need for shelter', 'Water makes hygiene unnecessary'], 'Clean water is essential for hydration and healthy body functions.'),
      q('Which feature helps make animal housing suitable?', ['Good ventilation and enough space', 'Overcrowding', 'Blocked drainage', 'No protection from rain'], 'Suitable housing provides space, ventilation, drainage and protection.'),
      q('What should a farmer do when an animal appears seriously ill?', ['Seek help from a trained veterinary professional', 'Give random medicines', 'Ignore the symptoms', 'Mix unknown chemicals into its feed'], 'Veterinary professionals can assess illness and advise safe treatment.'),
      q('Which practice supports animal health?', ['Keep housing and feeding equipment clean', 'Allow waste to build up', 'Share dirty water containers', 'Keep sick animals mixed with all others without advice'], 'Good hygiene reduces the spread of disease.')
    ]
  }
];
