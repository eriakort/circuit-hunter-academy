// Lesson data used by the animated Science scenes (moved from the retired tap-to-read visuals).

export type Crop = 'maize' | 'beans' | 'leafy';
export const CROP_DETAILS: Record<Crop, { name: string; stages: { title: string; signs: string; use: string }[] }> = {
  maize: {
    name: 'Maize',
    stages: [
      { title: 'Young / green', signs: 'Silks are fresh and kernels are soft and milky when tested on a suitable sample.', use: 'Green maize can be harvested for fresh eating.' },
      { title: 'Mature grain', signs: 'Kernels are full; husks and leaves begin to dry and the grain becomes harder.', use: 'Allow grain to dry appropriately before safe storage.' },
      { title: 'Over-mature / too dry', signs: 'The crop may be very dry; delayed harvest can increase exposure to pests, birds, lodging or weather losses.', use: 'Harvest promptly and handle or store grain carefully.' }
    ]
  },
  beans: {
    name: 'Beans',
    stages: [
      { title: 'Young pods', signs: 'Pods are green, tender and seeds inside are still developing.', use: 'Harvest suitable varieties as fresh green pods.' },
      { title: 'Mature pods', signs: 'Pods become full and begin to change colour as seeds develop.', use: 'Harvest at the stage suited to fresh seed or allow further drying.' },
      { title: 'Dry seed', signs: 'Pods are dry and seeds are firm; avoid leaving them exposed to rain.', use: 'Collect dry seeds for cooking or storage after proper drying.' }
    ]
  },
  leafy: {
    name: 'Leafy vegetables',
    stages: [
      { title: 'Young leaves', signs: 'Leaves are tender and still developing.', use: 'Often preferred for fresh, tender vegetables.' },
      { title: 'Established leaves', signs: 'Plants have enough healthy leaves for a useful harvest.', use: 'Harvest leaves while maintaining the plant where repeated picking is suitable.' },
      { title: 'Over-mature / flowering', signs: 'Leaves may become tougher or more bitter as the plant ages or flowers.', use: 'Quality may decline for leafy use; follow the crop’s intended harvest stage.' }
    ]
  }
};

export type FeedAnimal = 'poultry' | 'ruminants' | 'pigs' | 'fish';
export const FEED_ANIMALS: Record<FeedAnimal, { name: string; needs: string; ingredients: string[]; note: string }> = {
  poultry: {
    name: 'Poultry (chickens)',
    needs: 'A balanced mixture of energy, protein, minerals and vitamins. Chicks, growers and laying hens have different needs.',
    ingredients: ['Maize or another suitable grain — energy', 'Soybean meal or groundnut cake — protein', 'A suitable mineral and vitamin premix'],
    note: 'Use a poultry feed formula designed for the bird’s age and purpose. Chicks and laying hens should not automatically receive the same ration.'
  },
  ruminants: {
    name: 'Cattle, sheep and goats',
    needs: 'Fibrous forage supports rumen function. Additional energy, protein and minerals depend on the animal and its production stage.',
    ingredients: ['Clean grass, hay or suitable silage — fibre', 'Suitable legumes or oilseed meals — extra protein when needed', 'Appropriate mineral supplement and clean water'],
    note: 'Forage is important for ruminants. Any concentrate should complement the forage and follow reliable local feeding guidance.'
  },
  pigs: {
    name: 'Pigs',
    needs: 'A carefully balanced ration supplies energy, protein, minerals and vitamins. Requirements change as pigs grow.',
    ingredients: ['Maize or other suitable grains — energy', 'Soybean meal — protein', 'Suitable mineral and vitamin premix'],
    note: 'Use a pig-specific ration for the correct growth stage. Do not assume that a cattle or poultry formula is suitable for pigs.'
  },
  fish: {
    name: 'Farmed fish',
    needs: 'Feed must suit the fish species, size, feeding behaviour and production system.',
    ingredients: ['Suitable plant or grain ingredients — energy', 'Approved fishmeal or other suitable protein source', 'A balanced vitamin and mineral source'],
    note: 'Choose a feed made for the fish species and size. Pellet size, water stability and feeding rate also matter.'
  }
};

export const PREPARATION_STEPS = [
  { title: '1. Select', detail: 'Identify the animal species, age, health and production purpose. Use a reliable feed formula for that animal.' },
  { title: '2. Inspect', detail: 'Check every ingredient. Reject mouldy, damp, spoiled or contaminated materials.' },
  { title: '3. Measure', detail: 'Weigh or measure each ingredient accurately. Do not guess proportions or copy an unrelated ration.' },
  { title: '4. Prepare and mix', detail: 'Grind coarse ingredients only when appropriate, then mix measured ingredients evenly using clean equipment.' },
  { title: '5. Store safely', detail: 'Keep prepared feed in a clean, dry, labelled and protected container away from pests and moisture.' }
];

export type NutritionAnimal = 'cattle' | 'sheep' | 'poultry' | 'pigs' | 'fish';
export type NutritionStage = 'young' | 'growing' | 'adult' | 'production';
export const NUTRITION_ANIMALS: Record<NutritionAnimal, { name: string; system: string; forage: string; concentrate: string; checks: string }> = {
  cattle: { name: 'Cattle', system: 'Ruminant: the rumen helps digest fibrous plant material.', forage: 'Clean pasture grass, hay or suitable silage.', concentrate: 'A suitable grain, bran or protein meal when the animal needs extra nutrients.', checks: 'Distinguish a growing animal, a dry cow and a milk-producing cow. Their nutrient needs differ.' },
  sheep: { name: 'Sheep and goats', system: 'Ruminants: fibre-rich forage supports normal rumen function.', forage: 'Clean grass, browse, hay or suitable silage.', concentrate: 'A suitable energy or protein supplement when forage alone does not meet needs.', checks: 'Consider age, body condition, pregnancy, milk production and the quality of available forage.' },
  poultry: { name: 'Poultry', system: 'Non-ruminant birds need a balanced ration rather than a forage-only diet.', forage: 'Small amounts of suitable greens may supplement a complete ration; they do not replace it.', concentrate: 'A complete poultry ration with suitable energy, protein, minerals and vitamins.', checks: 'Choose a ration for chicks, growers or laying hens. Calcium and other nutrient needs change with stage.' },
  pigs: { name: 'Pigs', system: 'Non-ruminants need a balanced ration with digestible energy, protein, minerals and vitamins.', forage: 'Suitable safe plant material may supplement a balanced ration but should not replace it.', concentrate: 'A pig-specific balanced ration using suitable grains and protein sources.', checks: 'Select a ration for piglets, growers or breeding animals. Never copy a poultry or cattle formula.' },
  fish: { name: 'Farmed fish', system: 'Feed must match the fish species, size and feeding behaviour.', forage: 'Natural food in a pond may contribute, depending on the production system and species.', concentrate: 'A suitable complete pellet or formulated fish feed with appropriate protein and energy.', checks: 'Check species, fish size, pellet size, water stability and feeding guidance for the farm system.' }
};
export const NUTRITION_STAGES: Record<NutritionStage, { label: string; note: string }> = {
  young: { label: 'Young animal', note: 'Young animals are developing quickly. Select a starter or young-animal ration designed for that species.' },
  growing: { label: 'Growing animal', note: 'Growing animals need nutrients for body development. Match the ration to growth rate and body condition.' },
  adult: { label: 'Adult maintenance', note: 'An adult not producing milk, eggs or offspring may have different needs from a working or breeding animal.' },
  production: { label: 'Production or breeding', note: 'Milk, egg, pregnancy or breeding demands can change nutrient requirements. Use stage-specific advice.' }
};

export type ToolTask = 'hoe' | 'trowel' | 'rake';
export const TASKS: Record<ToolTask, { title: string; purpose: string; blade: string; handle: string; joint: string; check: string }> = {
  hoe: { title: 'Hand hoe', purpose: 'Loosen soil and remove weeds', blade: 'Strong, suitable metal blade', handle: 'Smooth, durable wooden handle', joint: 'Secure, tight handle joint', check: 'The blade stays firmly attached while loosening a small patch of soil.' },
  trowel: { title: 'Hand trowel', purpose: 'Make small planting holes and move soil', blade: 'Small, strong metal scoop', handle: 'Comfortable, smooth handle', joint: 'Firm joint with no sharp edges', check: 'The scoop moves soil without bending or loosening from the handle.' },
  rake: { title: 'Hand rake', purpose: 'Gather leaves and level loose soil', blade: 'Strong head with safely finished teeth', handle: 'Long, durable handle', joint: 'Secure head-to-handle connection', check: 'The head remains fixed and the teeth have no dangerous burrs.' }
};

export type Material = { name: string; group: 'plant' | 'animal' | 'reject' | 'special'; reason: string };
export const MATERIALS: Material[] = [
  { name: 'Dry leaves', group: 'plant', reason: 'Plant matter breaks down and adds organic material to soil.' },
  { name: 'Crop residues', group: 'plant', reason: 'Suitable clean stalks and leaves can be composted.' },
  { name: 'Grass cuttings', group: 'plant', reason: 'Fresh green plant matter can contribute moisture and nutrients.' },
  { name: 'Vegetable peels', group: 'plant', reason: 'Clean vegetable scraps are biodegradable plant material.' },
  { name: 'Well-managed cattle dung', group: 'animal', reason: 'Properly treated livestock manure can supply nutrients.' },
  { name: 'Goat and sheep droppings', group: 'animal', reason: 'Livestock droppings can be used after suitable treatment.' },
  { name: 'Poultry litter', group: 'animal', reason: 'Poultry litter needs careful handling and appropriate treatment.' },
  { name: 'Plastic packaging', group: 'reject', reason: 'Plastic does not decompose as compost and contaminates the heap.' },
  { name: 'Broken glass', group: 'reject', reason: 'Glass can cause cuts and does not become compost.' },
  { name: 'Metal cans', group: 'reject', reason: 'Metal is not compostable and should be recycled separately.' },
  { name: 'Human excreta', group: 'special', reason: 'It can carry pathogens and must never be handled as ordinary school compost.' },
  { name: 'Animal carcasses', group: 'special', reason: 'They can carry pathogens and require trained, regulated treatment.' }
];
export const GROUPS = [
  { id: 'plant', label: 'Suitable plant materials' },
  { id: 'animal', label: 'Animal manure materials' },
  { id: 'reject', label: 'Remove from compost' },
  { id: 'special', label: 'Specialist treatment only' }
] as const;

export type PlantPart = 'roots' | 'stems' | 'leaves' | 'flowers' | 'fruits';

export const PLANT_PARTS: Record<PlantPart, { label: string; role: string; agricultural: string[]; other: string[]; care: string }> = {
  roots: {
    label: 'Roots',
    role: 'Roots anchor many plants and absorb water and mineral nutrients. Some roots also store food.',
    agricultural: ['Cassava and yam roots are important foods.', 'Some root materials can be used in animal feed after safe preparation.'],
    other: ['Some roots provide fibres or materials used in traditional crafts.'],
    care: 'Harvest edible roots carefully and replant or manage crops so the soil remains covered and productive.'
  },
  stems: {
    label: 'Stems',
    role: 'Stems support leaves and flowers and transport water, minerals and sugars. Some stems store food.',
    agricultural: ['Sugarcane stems are processed for sugar.', 'Stems and crop residues can be used as mulch or compost when suitable.'],
    other: ['Timber from suitable trees can be used for furniture and construction.', 'Bamboo stems can be used for crafts and simple structures.'],
    care: 'Use timber and bamboo from responsibly managed sources. Avoid damaging protected trees and habitats.'
  },
  leaves: {
    label: 'Leaves',
    role: 'Leaves capture light for photosynthesis and exchange gases with the air.',
    agricultural: ['Some leaves are eaten as vegetables.', 'Suitable leaves and crop residues can be used as animal fodder or compost.'],
    other: ['Leaves can be used for wrapping food, weaving and crafts.'],
    care: 'Collect only what is needed. Leave enough healthy leaves for the plant to keep growing.'
  },
  flowers: {
    label: 'Flowers',
    role: 'Flowers are involved in plant reproduction. After pollination and fertilisation, some flowers develop into fruits and seeds.',
    agricultural: ['Some flowers are foods or spices.', 'Flowers support pollinators that help many crops produce fruits and seeds.'],
    other: ['Flowers are used for decoration and some cultural activities.'],
    care: 'Protect pollinators and avoid collecting flowers from rare or protected plants.'
  },
  fruits: {
    label: 'Fruits',
    role: 'Fruits develop from flowers and often protect seeds. Many fruits are important foods.',
    agricultural: ['Mango, orange, pawpaw and tomato fruits are used as food.', 'Fruit remains can be composted when they are free from unsuitable contaminants.'],
    other: ['Some fruits provide oils, fibres, dyes or materials for crafts.'],
    care: 'Reduce food waste, use safe processing methods and avoid harvesting unripe or protected wild fruits.'
  }
};

export type Industry = 'food' | 'textiles' | 'pottery' | 'soap';

export const INDUSTRIES: Record<Industry, { label: string; inputs: string; science: string; checks: string }> = {
  food: {
    label: 'Food processing',
    inputs: 'Crops, clean water, suitable containers and energy',
    science: 'Drying removes moisture; heating can destroy many microorganisms; fermentation uses helpful microorganisms to change food.',
    checks: 'Clean equipment, safe temperatures, suitable storage and product quality'
  },
  textiles: {
    label: 'Textiles and weaving',
    inputs: 'Fibres, yarn, dyes, looms and skilled labour',
    science: 'Fibres are spun into yarn and interlaced to make fabric. Dyes attach colour to fibres through physical and chemical processes.',
    checks: 'Fibre strength, colour fastness, pattern accuracy and safe dye handling'
  },
  pottery: {
    label: 'Pottery and ceramics',
    inputs: 'Suitable clay, water, shaping tools and a kiln',
    science: 'Clay is shaped, dried and fired. Heating drives out water and causes changes that make the ceramic hard and durable.',
    checks: 'Even drying, controlled firing, cracks and suitability for the intended use'
  },
  soap: {
    label: 'Soap production',
    inputs: 'Suitable oils or fats, an alkali handled by trained adults, water and safe equipment',
    science: 'Saponification is a chemical reaction between fats or oils and an alkali that produces soap and glycerol.',
    checks: 'Correct formulation, safe handling, product quality and appropriate curing'
  }
};

export type ConditionType = 'communicable' | 'nonCommunicable';

export const CONDITION_GUIDES: Record<ConditionType, { label: string; examples: string; spread: string; response: string }> = {
  communicable: {
    label: 'Communicable conditions',
    examples: 'Some respiratory infections, malaria and ringworm',
    spread: 'Depending on the disease, germs may spread through air, contaminated food or water, insects, blood or direct contact.',
    response: 'Use disease-specific prevention, such as clean water, hand hygiene, appropriate insect protection and advice from qualified health workers.'
  },
  nonCommunicable: {
    label: 'Non-communicable diseases (NCDs)',
    examples: 'Some heart diseases, diabetes and many cancers',
    spread: 'NCDs do not spread directly from one person to another. They can have several causes, including inherited, environmental and behavioural factors.',
    response: 'Support healthy environments and habits, reduce known risk exposures, and use appropriate screening and professional healthcare advice.'
  }
};
