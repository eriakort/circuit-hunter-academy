import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 1 Science · Diversity of Matter and Cycles strands. */
export const GHANA_JHS1_SCIENCE_SUBJECT: SubjectInfo = {
  id: 'ghjhs1science',
  name: 'Science · JHS 1',
  blurb: 'Ghana NaCCA JHS 1 Science: explore matter, living cells, Earth processes, life cycles, crop production and responsible animal care.',
  meta: 'Ghana NaCCA · JHS 1 · Diversity of Matter + Cycles · 7 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><path d="M48 20h24M54 20v34L30 94q-5 9 6 9h48q11 0 6-9L66 54V20" fill="none" stroke="#7bdff2" stroke-width="4" stroke-linejoin="round"/><path d="M41 80h38" stroke="#ffd166" stroke-width="5" stroke-linecap="round"/><circle cx="52" cy="70" r="4" fill="#7bdff2"/><circle cx="68" cy="62" r="3" fill="#ffd166"/></svg>'
};

export const GHANA_JHS1_SCIENCE_UNIT: UnitInfo = {
  title: 'Diversity of Matter',
  ch: 'JHS 1 · NaCCA Science · Strand 1',
  subject: 'ghjhs1science'
};

export const GHANA_JHS1_SCIENCE_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs1science', title: 'Materials and Their Properties', pages: 'NaCCA CCP · JHS 1 Science · B7.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs1science', title: 'Living Cells', pages: 'NaCCA CCP · JHS 1 Science · B7.1.2' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS1_SCIENCE_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs1-science-materials-states',
    arc: 0, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 1 Science · B7.1.1',
    hue: 188, horns: 2, eyes: 2,
    title: 'The Materials Explorer',
    topic: 'Recognise materials as useful resources, classify solids, liquids and gases, and describe their observable properties.',
    demon: 'The State Shifter', tech: 'Matter Form · First Technique: Observe and Classify',
    scenes: [
      lesson('<p>Everything around us is made of matter. Matter has mass and occupies space. Materials are the substances used to make objects: a cooking pot may be made from metal, a school desk from wood, and a water bottle from plastic.</p>'),
      lesson('<p>Matter is commonly classified into three states: <b>solid, liquid and gas</b>. A solid keeps its shape and volume. A liquid keeps its volume but takes the shape of its container. A gas spreads out to fill the space available.</p>'),
      lesson('<p>Particles help explain these differences. In a solid, particles are close together and vibrate around fixed positions. In a liquid, particles remain close but can move past one another. In a gas, particles are far apart and move freely.</p>'),
      lesson('<p>Materials have properties that help us choose them for a purpose. Metals are often strong and conduct heat and electricity; rubber is flexible; glass is transparent but can break. The best material depends on the job and on safe, responsible use.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up solids, liquids and gases. Use their properties to classify everyday materials and restore order!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which statement best describes matter?', ['It has mass and occupies space', 'It is only something we can see', 'It has no volume', 'It is always a solid'], 'Matter has mass and occupies space, whether it is a solid, liquid or gas.'),
      q('Which state keeps its own shape and volume?', ['Solid', 'Liquid', 'Gas', 'Vapour only'], 'A solid keeps its shape and volume unless a force changes it.'),
      q('What happens to a liquid when it is poured into a different container?', ['It takes the shape of the container', 'It keeps the same shape', 'It fills all available space like a gas', 'It loses all its volume'], 'A liquid has a fixed volume but takes the shape of its container.'),
      q('Which state spreads out to fill the available space?', ['Gas', 'Solid', 'Liquid', 'Ice'], 'Gas particles move freely and spread through the available space.'),
      q('Why is rubber often used to make elastic bands?', ['It is flexible and can stretch', 'It is transparent', 'It is a good conductor of electricity', 'It is always rigid'], 'Rubber is useful for elastic bands because it can stretch and return towards its original shape.')
    ]
  },
  {
    id: 'gh-jhs1-science-materials-uses',
    arc: 0, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 1 Science · B7.1.1',
    hue: 42, horns: 2, eyes: 2,
    title: 'The Everyday Materials Engineer',
    topic: 'Compare common material properties and select suitable materials for familiar Ghanaian products and everyday needs.',
    demon: 'The Poor Choice Poltergeist', tech: 'Matter Form · Second Technique: Match Property to Purpose',
    scenes: [
      lesson('<p>Choose a material by considering its properties and the purpose of the object. A saucepan needs a material that withstands heat; a window needs a material that lets light pass through; a raincoat needs a material that resists water.</p>'),
      lesson('<p>Metals are commonly used for cooking pots because many metals conduct heat and can withstand high temperatures. Handles may use wood or heat-resistant materials because they do not transfer heat as quickly as metal.</p>'),
      lesson('<p>Wood is useful for furniture because it can be strong and shaped. Plastic can be light and water-resistant, but some plastics create long-lasting waste. Reuse and responsible disposal help protect the environment.</p>'),
      lesson('<p>When comparing materials, use evidence: test whether they bend, absorb water, allow light through, or conduct heat. Never taste unknown substances or touch hot objects during an investigation. Follow your teacher’s safety instructions.</p>'),
      { who: 'd', vis: 'demon', text: 'I chose paper for a cooking pot and metal for a window curtain. Match each material to its job using evidence!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which property makes glass suitable for many windows?', ['It is transparent', 'It is magnetic', 'It stretches easily', 'It absorbs all water'], 'Transparent glass allows light to pass through so people can see through a window.'),
      q('Why are many cooking pots made from metal?', ['Many metals conduct heat and withstand high temperatures', 'Metal is always soft', 'Metal prevents all heat transfer', 'Metal dissolves in water'], 'Metal conducts heat to the food and many metals tolerate cooking temperatures.'),
      q('Which material is often suitable for a raincoat?', ['Water-resistant fabric', 'Uncoated paper', 'Loose cotton wool', 'Dry sand'], 'A raincoat needs a material that resists water reaching the wearer.'),
      q('What is a responsible way to reduce plastic waste?', ['Reuse suitable items and dispose of waste properly', 'Throw plastic into streams', 'Burn plastic beside homes', 'Leave plastic on farmland'], 'Reuse and proper waste management reduce pollution and harm to living things.'),
      q('What should learners do before testing an unknown material?', ['Follow safety instructions and ask the teacher', 'Taste it', 'Touch it to check whether it is hot', 'Mix it with every available chemical'], 'Safe investigations use teacher guidance and avoid tasting or unsafe handling.')
    ]
  },
  {
    id: 'gh-jhs1-science-living-cells',
    arc: 1, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 1 Science · B7.1.2',
    hue: 142, horns: 2, eyes: 2,
    title: 'The Living Cell Investigator',
    topic: 'Understand that living organisms are made of cells and identify basic cell structures and their functions.',
    demon: 'The Cell Confuser', tech: 'Life Form · Third Technique: Discover the Living Unit',
    scenes: [
      lesson('<p>All living organisms are made of cells. Some organisms, such as many bacteria, consist of one cell. Plants, animals and people are made of many cells that work together.</p>'),
      lesson('<p>A typical plant cell has a cell membrane, cytoplasm, nucleus, and a cell wall. The cell wall supports and protects the cell. The cell membrane controls what enters and leaves. The cytoplasm is where many cell activities take place.</p>'),
      lesson('<p>The nucleus contains genetic information and helps control cell activities. Many plant cells also contain chloroplasts, which contain chlorophyll and absorb light for photosynthesis. A large vacuole stores cell sap and helps maintain firmness.</p>'),
      lesson('<p>Animal cells also have a cell membrane, cytoplasm and nucleus, but they do not have a cell wall or chloroplasts. Cells have different shapes and jobs. Similar cells can work together to form tissues, organs and organ systems.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the jobs of the nucleus, membrane and cell wall. Identify each structure and explain how cells support life!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the basic structural unit of living organisms?', ['The cell', 'The rock', 'The organ system', 'The molecule of water only'], 'Cells are the basic structural units of living organisms.'),
      q('Which cell structure controls what enters and leaves the cell?', ['Cell membrane', 'Cell wall', 'Chloroplast', 'Vacuole only'], 'The cell membrane regulates movement of substances into and out of the cell.'),
      q('What is the main role of the nucleus?', ['It contains genetic information and helps control cell activities', 'It absorbs all sunlight', 'It forms the cell wall', 'It stores all the organism’s bones'], 'The nucleus contains genetic material and helps coordinate cell activities.'),
      q('Which structure provides support to a plant cell but is absent in animal cells?', ['Cell wall', 'Cell membrane', 'Cytoplasm', 'Nucleus'], 'Plant cells have a supporting cell wall; animal cells do not.'),
      q('Which structure contains chlorophyll for photosynthesis?', ['Chloroplast', 'Nucleus', 'Cell membrane', 'Cytoplasm only'], 'Chloroplasts contain chlorophyll, which absorbs light used in photosynthesis.')
    ]
  }
];
