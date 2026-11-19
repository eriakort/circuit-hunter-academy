import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 3 Science · Diversity of Matter (Basic 9). */
export const GHANA_JHS3_SCIENCE_SUBJECT: SubjectInfo = {
  id: 'ghjhs3science',
  name: 'Science · JHS 3',
  blurb: 'Ghana NaCCA JHS 3 Science · Diversity of Matter, Cycles and Systems. Explore compounds, specialised cells, nitrogen cycling, circulation and respiration, asteroids and comets, ecosystems, and sustainable manure preparation.',
  meta: 'Ghana NaCCA · JHS 3 · 3 strands · 15 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="9" fill="#ffd166"/><ellipse cx="60" cy="60" rx="43" ry="17" fill="none" stroke="#7bdff2" stroke-width="3"/><ellipse cx="60" cy="60" rx="43" ry="17" fill="none" stroke="#ff8fab" stroke-width="3" transform="rotate(60 60 60)"/><ellipse cx="60" cy="60" rx="43" ry="17" fill="none" stroke="#a7f3d0" stroke-width="3" transform="rotate(120 60 60)"/></svg>'
};

export const GHANA_JHS3_SCIENCE_UNIT: UnitInfo = {
  title: 'Diversity of Matter',
  ch: 'JHS 3 · NaCCA Science · Strand 1',
  subject: 'ghjhs3science'
};

export const GHANA_JHS3_SCIENCE_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs3science', title: 'Binary Compounds, Acids, Bases and Salts', pages: 'NaCCA CCP · JHS 3 Science · B9.1.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs3science', title: 'Chemical Bonding', pages: 'NaCCA CCP · JHS 3 Science · B9.1.1.2' },
  { n: 3, unit: 0, subject: 'ghjhs3science', title: 'Specialised Cells in Plants and Humans', pages: 'NaCCA CCP · JHS 3 Science · B9.1.2.1' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS3_SCIENCE_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs3-science-binary-compounds', arc: 0, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 3 Science · B9.1.1.1.1–B9.1.1.1.2',
    hue: 194, horns: 2, eyes: 2, title: 'The Binary Compound Chemist',
    topic: 'Identify common binary compounds, name their constituent elements, distinguish elements, molecules, ions and compounds, and represent simple compounds with formulae and particle models.',
    demon: 'The Formula Forger', tech: 'Compound Form · First Technique: Read the Elements',
    scenes: [
      lesson('<p>A <b>compound</b> is a pure substance made when atoms of two or more different elements are chemically joined in a fixed proportion. A <b>binary compound</b> contains two different elements. Water (H₂O) contains hydrogen and oxygen; sodium chloride (NaCl), common table salt, contains sodium and chlorine; magnesium oxide (MgO) contains magnesium and oxygen.</p>'),
      lesson('<p>Learn to read element symbols: H is hydrogen, O oxygen, Na sodium, Cl chlorine, Mg magnesium, C carbon and Fe iron. A chemical <b>formula</b> uses these symbols and small numbers to show the relative numbers of atoms or ions. In CO₂ there is one carbon atom for every two oxygen atoms. In MgO the ratio is one magnesium to one oxygen.</p>'),
      lesson('<p>An <b>element</b> contains one type of atom. A <b>molecule</b> is two or more atoms chemically bonded; it may contain the same element, as in O₂, or different elements, as in H₂O. An <b>ion</b> is a charged atom or group of atoms. A compound contains different elements chemically combined; some compounds form molecules while ionic compounds form lattices of ions.</p>'),
      lesson('<p>Binary compounds form when atoms or ions of two elements combine in definite ratios. For example, sodium can lose one electron to form Na⁺ and chlorine can gain one to form Cl⁻; their opposite charges attract to form sodium chloride. Use particle models to show the ratio, but remember that an ionic solid is a repeating lattice, not a collection of separate NaCl molecules. Household products such as vinegar, soap, detergents and fuels may be mixtures, so check the label rather than treating every product as a pure compound. Never handle or taste unknown chemicals.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the symbols and scrambled the formulae. Identify the elements, count the particles and choose a model that matches the compound!' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which statement describes a binary compound?', ['A compound containing two different elements', 'A mixture containing two liquids', 'A substance containing only one element', 'Any material with two colours'], 'A binary compound contains atoms or ions of two different elements chemically combined.'),
      q('Which two elements are present in magnesium oxide (MgO)?', ['Magnesium and oxygen', 'Manganese and gold', 'Magnesium and ozone', 'Mercury and oxygen'], 'The symbols Mg and O stand for magnesium and oxygen.'),
      q('What does the small 2 in CO₂ show?', ['Two oxygen atoms for each carbon atom', 'Two carbon atoms', 'Two separate compounds', 'Two charges on carbon'], 'The subscript applies to oxygen, so each carbon dioxide molecule has two oxygen atoms.'),
      q('Which is an ion?', ['Na⁺', 'O₂', 'H₂O', 'Ne'], 'Na⁺ is a sodium ion with a positive charge. O₂ and H₂O are molecules; Ne is a neutral atom.'),
      q('Which statement about vinegar is most accurate?', ['It is usually a solution containing acetic acid and water', 'It is always pure ethanoic acid', 'It is a single element', 'It contains only sodium and chlorine'], 'Household vinegar is an aqueous solution, so it is a mixture rather than a pure binary compound.')
    ]
  },
  {
    id: 'gh-jhs3-science-acids-bases-salts', arc: 0, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 3 Science · B9.1.1.1.3',
    hue: 42, horns: 2, eyes: 2, title: 'The pH Scale Guardian',
    topic: 'Describe common properties of acids, bases and salts, use indicators to classify solutions and interpret the pH scale safely.',
    demon: 'The Indicator Illusionist', tech: 'Solution Form · Second Technique: Reveal the pH',
    scenes: [
      lesson('<p><b>Acids</b> in water produce hydrogen ions. Common examples include citric acid in citrus fruits and ethanoic acid in vinegar. Acids often taste sour, but never taste a laboratory substance. <b>Bases</b> neutralise acids; soluble bases are called alkalis. Some cleaning products are alkaline and can be harmful, so always follow safety labels.</p>'),
      lesson('<p>Indicators change colour to help identify acidic and alkaline solutions. Blue litmus turns red in acid; red litmus turns blue in alkali. Universal indicator gives a range of colours that can be compared with a pH chart. Use only teacher-approved, labelled samples and never mix household cleaners.</p>'),
      lesson('<p>The <b>pH scale</b> commonly runs from 0 to 14 for aqueous solutions. A pH below 7 is acidic, 7 is neutral and above 7 is alkaline. A lower pH means a more acidic solution; a higher pH means a more alkaline solution. pH describes acidity or alkalinity, not by itself how concentrated a solution is.</p>'),
      lesson('<p><b>Salts</b> are ionic compounds. Many form when an acid reacts with a base in a neutralisation reaction: acid + base → salt + water. For example, hydrochloric acid reacts with sodium hydroxide to form sodium chloride and water. Different salts have different properties and uses. Do not perform chemical tests or handle corrosive substances without a trained teacher and proper protective equipment.</p>'),
      { who: 'd', vis: 'demon', text: 'I have reversed the indicator colours and hidden the neutral point. Use the pH evidence to classify each solution and explain your choice!' },
      { type: 'battle' }
    ],
    quiz: [
      q('A solution has pH 3. How should it be classified?', ['Acidic', 'Neutral', 'Alkaline', 'It has no water'], 'A pH below 7 is acidic.'),
      q('What happens to blue litmus paper in an acidic solution?', ['It turns red', 'It turns green', 'It stays blue in every acid', 'It becomes colourless in every case'], 'Blue litmus turns red in an acidic solution.'),
      q('What pH is neutral on the usual school pH scale?', ['7', '0', '3', '14'], 'A neutral aqueous solution has pH 7 at about room temperature.'),
      q('Which statement correctly describes an alkali?', ['A soluble base that produces hydroxide ions in water', 'Any substance with pH below 7', 'A type of metal element', 'A salt that cannot dissolve'], 'An alkali is a base that dissolves in water and produces hydroxide ions.'),
      q('What are the usual products of an acid reacting with a base?', ['A salt and water', 'Oxygen and hydrogen only', 'A metal and carbon dioxide', 'Sugar and water'], 'Neutralisation between an acid and a base commonly produces a salt and water.')
    ]
  },
  {
    id: 'gh-jhs3-science-chemical-bonding', arc: 1, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 3 Science · B9.1.1.2.1',
    hue: 276, horns: 2, eyes: 2, title: 'The Chemical Bonding Architect',
    topic: 'Explain chemical bonding as attraction between atoms or ions and compare ionic, covalent and metallic bonding with familiar examples.',
    demon: 'The Bond Breaker', tech: 'Atomic Form · Third Technique: Build the Attraction',
    scenes: [
      lesson('<p>A <b>chemical bond</b> is an attractive force that holds particles together in a substance. Atoms bond because the resulting arrangement can be more stable. Three important types introduced here are ionic, covalent and metallic bonding.</p>'),
      lesson('<p><b>Ionic bonding</b> involves electron transfer, usually from a metal atom to a non-metal atom. The metal becomes a positive ion and the non-metal becomes a negative ion. Oppositely charged ions attract and form a giant ionic lattice. Sodium chloride is a familiar example.</p>'),
      lesson('<p><b>Covalent bonding</b> forms when non-metal atoms share pairs of electrons. Water (H₂O) and carbon dioxide (CO₂) are examples of substances with covalent bonds within their molecules. Some covalent substances form large networks rather than small separate molecules.</p>'),
      lesson('<p><b>Metallic bonding</b> is the attraction between positive metal ions and delocalised electrons that can move through the structure. This helps explain why metals conduct electricity and heat, and why many metals can be bent or shaped. Models are simplified: they help compare bonding but do not show every detail of real particles.</p>'),
      { who: 'd', vis: 'demon', text: 'I claim every bond works by electron transfer. Compare the three models and identify whether electrons are transferred, shared or delocalised!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What holds oppositely charged ions together in an ionic compound?', ['Electrostatic attraction', 'A magnetic field between all atoms', 'A force caused by sound', 'The movement of water'], 'Positive and negative ions attract through electrostatic forces.'),
      q('What happens to electrons in a simple covalent bond?', ['Atoms share pairs of electrons', 'All electrons leave both atoms', 'Protons are transferred', 'Neutrons are shared between nuclei'], 'Covalent bonds involve shared pairs of electrons.'),
      q('Which substance is a familiar example of an ionic compound?', ['Sodium chloride', 'Oxygen gas', 'Copper metal', 'Diamond'], 'Sodium chloride consists of Na⁺ and Cl⁻ ions in a giant ionic lattice.'),
      q('What is meant by delocalised electrons in a metal?', ['Electrons that can move through the metallic structure', 'Electrons fixed inside the nucleus', 'Electrons shared only by two non-metals', 'Electrons that have no charge'], 'Metallic bonding includes mobile electrons spread through the structure.'),
      q('Why can many metals conduct electricity?', ['Their delocalised electrons can move and carry charge', 'Their protons flow through wires', 'They contain no charged particles', 'All metals dissolve in water'], 'Mobile delocalised electrons carry electrical charge through a metal.')
    ]
  },
  {
    id: 'gh-jhs3-science-specialised-plant-cells', arc: 2, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 3 Science · B9.1.2.1.1–B9.1.2.1.2',
    hue: 132, horns: 2, eyes: 2, title: 'The Plant Cell Specialist',
    topic: 'Explain cell specialisation and relate the shapes and functions of epidermal, guard, cambium and xylem cells to the survival of dicotyledonous plants.',
    demon: 'The Leaf Structure Shifter', tech: 'Life Form · Fourth Technique: Match Shape to Function',
    scenes: [
      lesson('<p><b>Specialised cells</b> have structures that help them perform particular jobs. In a multicellular organism, cells develop different shapes and features through a process called <b>differentiation</b>. Groups of specialised cells work together in tissues and organs.</p>'),
      lesson('<p><b>Epidermal cells</b> form the outer protective covering of a plant. They help reduce damage and water loss. Many are closely packed; in leaves, a waxy cuticle over the epidermis provides an additional barrier. Root hair cells are epidermal cells adapted to absorb water and mineral ions from soil.</p>'),
      lesson('<p><b>Guard cells</b> occur in pairs around a stoma, a tiny pore usually found in a leaf surface. Changes in their water content alter the pore opening. This helps regulate gas exchange for photosynthesis and the loss of water vapour during transpiration.</p>'),
      lesson('<p><b>Xylem</b> vessels are formed from specialised cells joined end to end; their thickened walls support the plant and the hollow tubes transport water and dissolved minerals from roots. <b>Cambium</b> is a layer of dividing cells in many dicotyledonous stems and roots. It produces new vascular tissues and helps the plant grow thicker.</p>'),
      { who: 'd', vis: 'demon', text: 'I have swapped the jobs of the guard cells, xylem and cambium. Use each cell’s structure to restore the plant’s transport and growth!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is cell differentiation?', ['The process by which cells develop specialised structures and functions', 'The breaking of every cell into dust', 'The movement of water through soil only', 'The joining of two whole plants'], 'Differentiation produces cells adapted to particular functions.'),
      q('What is a main function of the plant epidermis?', ['Protect the plant surface', 'Pump blood around the body', 'Make all the plant’s food in every cell', 'Carry electrical impulses'], 'The epidermis forms a protective outer covering.'),
      q('What do guard cells control?', ['The opening and closing of stomata', 'The formation of seeds inside roots', 'The movement of blood', 'The production of metal ions'], 'Guard cells change shape to regulate the stomatal pore.'),
      q('Which plant tissue transports water and mineral ions from the roots?', ['Xylem', 'Cambium', 'Epidermis only', 'Pollen'], 'Xylem vessels transport water and dissolved mineral ions through the plant.'),
      q('What is one role of cambium in a dicotyledonous plant?', ['Produce new vascular tissues and support increase in thickness', 'Open and close stomata', 'Absorb light for photosynthesis', 'Make red blood cells'], 'Cambium cells divide to produce new tissues that contribute to secondary growth.')
    ]
  },
  {
    id: 'gh-jhs3-science-specialised-human-cells', arc: 2, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 3 Science · B9.1.2.1.1–B9.1.2.1.3',
    hue: 350, horns: 2, eyes: 2, title: 'The Human Cell Function Ranger',
    topic: 'Explain how human cells become specialised and connect the structures of nerve, blood, muscle and sperm cells with their functions.',
    demon: 'The Function Swapper', tech: 'Life Form · Fifth Technique: Structure Serves Function',
    scenes: [
      lesson('<p>Human bodies contain many specialised cells. They begin from cells that divide, and some of their descendants differentiate. Specialised cells have features that make their jobs more effective. Similar cells form tissues, which combine to make organs and organ systems.</p>'),
      lesson('<p><b>Nerve cells</b> (neurones) carry electrical signals. Many have a long fibre called an axon to transmit signals over a distance and branched ends to connect with other cells. This helps the brain, spinal cord and nerves coordinate the body.</p>'),
      lesson('<p><b>Red blood cells</b> carry oxygen using haemoglobin. In humans they have a flexible, biconcave shape and, when mature, no nucleus, leaving more room for haemoglobin. <b>Muscle cells</b> contain protein fibres that slide past one another to shorten the cell and produce force for movement.</p>'),
      lesson('<p><b>Sperm cells</b> are specialised male reproductive cells. A human sperm has a head containing genetic material, a midpiece with many mitochondria and a tail that helps it swim. Its role is to deliver genetic material to an egg during fertilisation. These are normal biological structures; study them respectfully and use scientific language.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed up the jobs of nerve, blood, muscle and sperm cells. Match each structure to its function to protect the human body system!' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is a main function of a nerve cell?', ['Transmit electrical signals', 'Carry most oxygen in the blood', 'Contract to move a bone directly', 'Produce xylem vessels'], 'Nerve cells transmit signals that help coordinate body activities.'),
      q('Which feature helps a red blood cell carry oxygen?', ['Haemoglobin', 'Chlorophyll', 'A cell wall made of cellulose', 'A long axon'], 'Haemoglobin binds oxygen and allows red blood cells to transport it.'),
      q('What do muscle cells do?', ['Contract to produce force and movement', 'Open stomata in leaves', 'Carry water from roots', 'Form the outer bark of rocks'], 'Muscle cells contain contractile proteins that generate force when they shorten.'),
      q('Which part of a sperm cell helps it move?', ['Tail (flagellum)', 'Cell wall', 'Chloroplast', 'Stoma'], 'The tail, or flagellum, helps a sperm cell swim.'),
      q('Why are specialised cells important in humans?', ['Their different structures allow them to perform different jobs', 'Every cell performs exactly the same task', 'They replace the need for organs', 'They contain no genetic material'], 'Specialisation allows different cells to work together in tissues and organs.')
    ]
  }
];
