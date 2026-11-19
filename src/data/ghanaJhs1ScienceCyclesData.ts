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
      lesson('<p>When droplets become heavy, water falls as precipitation such as rain. Water may flow over land into streams and rivers, soak into the soil, or collect in lakes and oceans. Plants also release water vapour from their leaves through transpiration. Water evaporates from surfaces, condenses into clouds, falls as precipitation, flows or soaks into the ground, and returns to rivers, lakes and oceans; transpiration adds more vapour to the air. These connected steps repeat, so the water cycle is a continuous pattern in nature.</p>'),
      lesson('<p>Weathering breaks rocks into smaller pieces. It can happen through heating and cooling, water, plant roots and other natural processes. Erosion is the movement of weathered material by water, wind or ice.</p>'),
      lesson('<p>The water cycle is important because it moves and renews freshwater, helps refill rivers, lakes and underground water stores (water tables), and supports weather patterns and rainfall. Water moving through soil can carry dissolved nutrients that plants need. Evaporation and transpiration move water into the atmosphere, while precipitation returns it to land and water bodies. The cycle supports plants, animals, farming and people, although water must still be protected from pollution. Plant cover also helps protect soil from erosion, and keeping drains clear can reduce local flooding.</p>'),
      { who: 'd', vis: 'demon', text: 'I have stopped the rain and moved the soil! Trace the water cycle and distinguish weathering from erosion.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What provides most of the energy that drives the water cycle?', ['The Sun', 'The Moon', 'The soil', 'The wind alone'], 'Solar energy heats surface water and drives evaporation.'),
      q('What is evaporation?', ['Liquid water changing into water vapour', 'Water vapour changing into liquid droplets', 'Rain falling from clouds', 'Water soaking into rock'], 'Evaporation changes liquid water into water vapour.'),
      q('Which process releases water vapour from plant leaves into the atmosphere?', ['Transpiration', 'Erosion', 'Condensation', 'Freezing'], 'During transpiration, plants release water vapour mainly through tiny openings in their leaves.'),
      q('What is erosion?', ['The movement of weathered material', 'The breaking of rocks in place only', 'The formation of clouds', 'The growth of plant roots'], 'Erosion transports soil or rock fragments by water, wind or ice.'),
      q('Why is the water cycle important to people and the environment?', ['It helps renew freshwater, refill water stores and support weather and plant growth', 'It permanently removes all water from Earth', 'It stops nutrients moving through soil', 'It prevents all clouds from forming'], 'The water cycle renews and redistributes water, supports weather patterns and helps move water and nutrients through ecosystems.')
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
      lesson('<p>Plants need nutrients to grow. Observe farms, gardens or markets in your community and list plant nutrient sources that people use. Organic sources come from living things or their remains: examples include compost made from plant waste, well-rotted animal manure and decomposed leaves. Inorganic sources are manufactured or mined mineral fertilisers, often sold as labelled granules, powders or liquids. Record the sources you actually find and classify each as organic or inorganic. Ash and other local materials should only be used when their composition and safe use are known.</p>'),
      lesson('<p>Organic nutrient materials such as mature compost and well-rotted manure are usually dark, crumbly and may contain visible plant fibres; mix them into the soil before planting or apply them around plants as appropriate. Inorganic fertilisers are manufactured mineral products and may be uniform granules, crystals, powder or liquid; their nutrient content and directions are shown on the label. Apply only the recommended type and amount, place it as directed near the root zone without letting concentrated fertiliser touch stems or leaves, and water when instructions require it. Wear suitable protection, wash hands afterwards and never guess the dose. For a field activity, compare labelled samples or pictures and demonstrate safe placement using a small soil tray. Harvest crops at the right stage, handle them carefully, and store them in clean, dry conditions.</p>'),
      { who: 'd', vis: 'demon', text: 'I have scattered the seeds and spoiled the harvest! Choose the right steps to grow and protect a healthy crop.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What should a farmer consider when selecting a crop production site?', ['Soil, water and the crop’s growing needs', 'The colour of nearby buildings only', 'How far the site is from the Moon', 'The number of passing cars'], 'Site selection depends on soil, water, climate and crop requirements.'),
      q('Why is correct spacing between crops important?', ['It gives plants room and access to light and resources', 'It prevents all rainfall', 'It makes seeds unnecessary', 'It stops plants from growing'], 'Appropriate spacing reduces competition and supports healthy growth.'),
      q('Which list contains only organic plant nutrient sources?', ['Well-rotted manure, compost and decomposed leaves', 'NPK granules, urea and mineral fertiliser', 'Plastic, glass and stones', 'Paint, engine oil and detergent'], 'Manure, compost and decomposed leaves come from organic materials.'),
      q('Which statement correctly compares organic materials with inorganic fertilisers?', ['Compost and well-rotted manure are organic; manufactured mineral fertilisers may be sold as granules or powder', 'All organic materials are blue crystals', 'Inorganic fertilisers are always made from animal waste', 'Their appearance and label never matter'], 'Organic materials come from living things or their remains; inorganic fertilisers are mineral products with labelled nutrient content.'),
      q('What is the safest way to apply an inorganic fertiliser?', ['Follow the product label and recommended amount, keeping concentrated fertiliser away from stems and leaves', 'Guess the dose and scatter it on every plant part', 'Mix different products without checking instructions', 'Apply it beside a stream'], 'Follow the label, use the recommended amount and protect people, plants and water sources.')
    ]
  },
  {
    id: 'gh-jhs1-science-animal-production', arc: 3, sec: 'Cycles', pages: 'NaCCA CCP · JHS 1 Science · B7.2.4',
    hue: 28, horns: 2, eyes: 2, title: 'The Animal Welfare Keeper',
    topic: 'Identify domestic animals in the community, classify them as ruminants, monogastrics or poultry, compare their uses and explain responsible animal care.',
    demon: 'The Careless Keeper', tech: 'Life Form · Fifth Technique: Care for Every Animal',
    scenes: [
      lesson('<p>Domestic animals are animals kept or cared for by people. Look around your community, with an adult or teacher, and make a list: examples may include cattle, goats, sheep, pigs, chickens, ducks, dogs and cats. The animals present differ from one community to another, so record what you actually observe rather than assuming every place has the same animals.</p>'),
      lesson('<p>Domestic animals can be grouped by how their digestive systems work. Ruminants, such as cattle, goats and sheep, have a specialised stomach with four compartments and chew cud. Monogastrics, such as pigs, have a simple one-compartment stomach. Poultry, such as chickens, ducks and turkeys, are birds with a beak and a digestive system that includes a crop and gizzard. Do not classify an animal by size or by the product it gives.</p>'),
      lesson('<p>Animals have different domestic and commercial uses. Chickens provide eggs and meat; cattle can provide milk, meat, hides and, in some settings, draught power; goats and sheep provide meat, skins and sometimes milk; pigs are reared mainly for pork; dogs may guard homes and cats may help control rodents. Compare animals by the uses people actually make of them locally. Some uses are for household needs, while selling products or services can provide income.</p>'),
      lesson('<p>Whichever animals a community keeps, their welfare matters. Provide clean water, suitable feed, enough space, shelter, ventilation and clean housing. Handle animals calmly, remove waste safely and observe them for illness. Seek trained veterinary help when needed; never give medicines at random. A class activity: make a simple table of animals observed, their group and at least two uses, then compare findings with another group.</p>'),
      { who: 'd', vis: 'demon', text: 'I have hidden the clean water and crowded the animal house. Restore good care, hygiene and welfare!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which activity best helps learners identify domestic animals in their own community?', ['Observe and record animals they actually see', 'List only animals from a television show', 'Assume every community keeps the same animals', 'Record wild animals only'], 'Community observation helps learners make an accurate local list of domestic animals.'),
      q('Which set correctly matches the animal groups?', ['Cattle—ruminant; pig—monogastric; chicken—poultry', 'Cattle—poultry; pig—ruminant; chicken—monogastric', 'Cattle—monogastric; pig—poultry; chicken—ruminant', 'All three are ruminants'], 'Cattle are ruminants, pigs are monogastrics and chickens are poultry.'),
      q('Which comparison of animal uses is correct?', ['Chickens can provide eggs and meat; cattle can provide milk and meat', 'Chickens provide milk; cattle lay eggs', 'Pigs are mainly kept to produce wool', 'Goats are used only for guarding homes'], 'Different animals provide different household and commercial products or services.'),
      q('Which is an example of a commercial use of domestic animals?', ['Selling eggs or milk for income', 'Keeping a pet without selling a product', 'Watching wild birds in a park', 'Collecting stones from a river'], 'Selling animal products such as eggs or milk can generate income.'),
      q('Which practice supports the welfare of domestic animals?', ['Provide clean water, suitable feed and clean shelter', 'Crowd animals into poorly ventilated housing', 'Give random medicines without advice', 'Leave waste around feeding areas'], 'Good housing, feed, water and hygiene support animal health and welfare.')
    ]
  }
];
