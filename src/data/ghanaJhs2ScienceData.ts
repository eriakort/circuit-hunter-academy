import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

/** Ghana NaCCA Common Core Programme · JHS 2 Science · Diversity of Matter. */
export const GHANA_JHS2_SCIENCE_SUBJECT: SubjectInfo = {
  id: 'ghjhs2science',
  name: 'Science · JHS 2',
  blurb: 'Ghana NaCCA JHS 2 Science · Diversity of Matter, Cycles and Systems. Investigate mixtures, atoms and cells, the carbon cycle and organism life cycles, seed beds, animal care, dental health, outer planets, food webs and sustainable farming.',
  meta: 'Ghana NaCCA · JHS 2 · 3 strands · 11 missions',
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="10" fill="#ffd166"/><ellipse cx="60" cy="60" rx="42" ry="17" fill="none" stroke="#7bdff2" stroke-width="3"/><ellipse cx="60" cy="60" rx="42" ry="17" fill="none" stroke="#7bdff2" stroke-width="3" transform="rotate(60 60 60)"/><ellipse cx="60" cy="60" rx="42" ry="17" fill="none" stroke="#7bdff2" stroke-width="3" transform="rotate(120 60 60)"/><circle cx="101" cy="60" r="4" fill="#ff8fab"/></svg>'
};

export const GHANA_JHS2_SCIENCE_UNIT: UnitInfo = {
  title: 'Diversity of Matter',
  ch: 'JHS 2 · NaCCA Science · Strand 1',
  subject: 'ghjhs2science'
};

export const GHANA_JHS2_SCIENCE_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'ghjhs2science', title: 'Mixtures and Separation Techniques', pages: 'NaCCA CCP · JHS 2 Science · B8.1.1.1' },
  { n: 2, unit: 0, subject: 'ghjhs2science', title: 'Atoms and the Periodic Table', pages: 'NaCCA CCP · JHS 2 Science · B8.1.1.2' },
  { n: 3, unit: 0, subject: 'ghjhs2science', title: 'Prokaryotic and Eukaryotic Cells', pages: 'NaCCA CCP · JHS 2 Science · B8.1.2.1' }
];

const q = (prompt: string, answers: string[], explanation: string) => ({ q: prompt, a: answers, why: explanation });
const lesson = (text: string) => ({ who: 's' as const, text });

export const GHANA_JHS2_SCIENCE_MISSIONS: Mission[] = [
  {
    id: 'gh-jhs2-science-mixture-separation', arc: 0, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 2 Science · B8.1.1.1',
    hue: 190, horns: 2, eyes: 2, title: 'The Mixture Separation Engineer',
    topic: 'Identify homogeneous and heterogeneous mixtures, explain solutes and solvents, distinguish suspensions and colloids, and select safe separation methods.',
    demon: 'The Tangled Mixture', tech: 'Separation Form · First Technique: Choose by Property',
    scenes: [
      lesson('<p>A <b>mixture</b> forms when two or more substances are combined without becoming a new substance. A mixture can contain solids, liquids or gases. In a <b>homogeneous mixture</b>, the composition is uniform throughout, like salt dissolved in water. In a <b>heterogeneous mixture</b>, different parts can be seen or the composition is not uniform, like sand mixed with gravel.</p>'),
      lesson('<p>A <b>solution</b> is a homogeneous mixture. The substance that dissolves is the <b>solute</b>; the substance that does the dissolving is the <b>solvent</b>. In salt water, salt is the solute and water is the solvent. A suspension contains particles that can settle, such as groundnut paste stirred into water. A colloid has very small dispersed particles that do not settle quickly; examples include milk and some cloudy mixtures. Colloids can scatter light, known as the Tyndall effect.</p>'),
      lesson('<p>Mixtures can be separated by using physical properties. <b>Sieving</b> separates particles of different sizes. <b>Filtration</b> separates an insoluble solid from a liquid. <b>Decanting</b> carefully pours off a liquid after heavier particles settle. <b>Evaporation</b> can recover a dissolved solid. <b>Distillation</b> uses evaporation and condensation to collect a liquid. A magnet can remove magnetic materials from a mixture.</p>'),
      lesson('<p>Choose a method that matches the mixture. For sand and water, allow the sand to settle and decant or filter it. For sand and salt, add water to dissolve the salt, filter out the sand, then evaporate the water to recover salt. For clean drinking water, do not assume a classroom filter makes unsafe water safe: follow trusted water-treatment guidance and boil or disinfect water as directed by public-health authorities.</p>'),
      { who: 'd', vis: 'demon', text: 'I have mixed sand, salt, oil and water together! Use particle size, solubility, density and boiling point to plan a sensible separation.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which mixture is usually homogeneous?', ['Salt completely dissolved in water', 'Sand mixed with gravel', 'Oil floating on water', 'Pebbles mixed with gari'], 'A salt solution has a uniform composition when the salt has dissolved completely.'),
      q('In sugar solution, what is the solute?', ['Sugar', 'Water', 'The container', 'The air above the liquid'], 'Sugar is the substance that dissolves, so it is the solute.'),
      q('Which method separates an insoluble solid from a liquid using a porous material?', ['Filtration', 'Distillation', 'Magnetic separation', 'Crystallisation by cooling only'], 'A filter allows the liquid through while retaining insoluble solid particles.'),
      q('Which method can separate iron filings from sand?', ['Magnetic separation', 'Evaporation', 'Sieving with a very fine cloth only', 'Condensation'], 'Iron is attracted to a magnet, while sand is not.'),
      q('What is a suspension?', ['A mixture with particles that may settle when left undisturbed', 'A pure element made of one type of atom', 'A gas with no particles', 'A solution that is always transparent'], 'Suspended particles are dispersed in a fluid and may settle over time.')
    ]
  },
  {
    id: 'gh-jhs2-science-atomic-structure', arc: 1, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 2 Science · B8.1.1.2',
    hue: 46, horns: 2, eyes: 2, title: 'The Atomic Structure Navigator',
    topic: 'Describe atoms using protons, neutrons and electrons; distinguish atomic number from mass number; and connect proton number to periodic-table order and ions.',
    demon: 'The Unbalanced Atom', tech: 'Atomic Form · First Technique: Count the Particles',
    scenes: [
      lesson('<p>All ordinary matter is made from atoms. An atom has a tiny central <b>nucleus</b> containing positively charged protons and neutral neutrons. Negatively charged electrons occupy regions around the nucleus. Most of an atom’s mass is concentrated in its nucleus, while the atom is mostly empty space.</p>'),
      lesson('<p>The <b>atomic number</b> is the number of protons in an atom’s nucleus. It identifies the element. In a neutral atom, the number of electrons equals the number of protons, so the positive and negative charges balance. The <b>mass number</b> is the total number of protons and neutrons.</p>'),
      lesson('<p>You can calculate particle numbers from atomic and mass numbers. Protons = atomic number. For a neutral atom, electrons = atomic number. Neutrons = mass number − atomic number. For example, a neutral sodium-23 atom has 11 protons, 11 electrons and 12 neutrons.</p>'),
      lesson('<p>The periodic table arranges elements in order of increasing atomic number. Atoms can gain or lose electrons to form <b>ions</b>. Losing electrons forms a positive ion; gaining electrons forms a negative ion. Atoms may also join to form molecules. A model or drawing can help show how particle numbers and electron arrangements differ.</p>'),
      { who: 'd', vis: 'demon', text: 'I have scrambled the particle counts! Use atomic number, mass number and charge to restore each atom.' },
      { type: 'battle' }
    ],
    quiz: [
      q('Which particles are found in the nucleus of an atom?', ['Protons and neutrons', 'Electrons only', 'Protons and electrons only', 'Neutrons and electrons only'], 'The nucleus contains protons and neutrons; electrons occupy regions around it.'),
      q('What does the atomic number tell you?', ['The number of protons', 'The number of shells plus neutrons', 'The total number of protons and neutrons', 'The number of molecules in a sample'], 'An element is identified by its number of protons, called its atomic number.'),
      q('An atom has atomic number 8 and mass number 16. How many neutrons does it have?', ['8', '16', '24', '4'], 'Neutrons equal mass number minus atomic number: 16 − 8 = 8.'),
      q('How does a neutral atom become a positive ion?', ['It loses one or more electrons', 'It gains one or more electrons', 'It loses all its protons', 'It gains neutrons only'], 'Losing negatively charged electrons leaves the atom with a net positive charge.'),
      q('How are elements arranged in the modern periodic table?', ['By increasing atomic number', 'By colour of the element', 'By increasing mass number only', 'In alphabetical order'], 'The modern periodic table is organised by increasing proton number, or atomic number.')
    ]
  },
  {
    id: 'gh-jhs2-science-cell-types', arc: 2, sec: 'Diversity of Matter', pages: 'NaCCA CCP · JHS 2 Science · B8.1.2.1',
    hue: 128, horns: 2, eyes: 2, title: 'The Cell Type Investigator',
    topic: 'Compare prokaryotic and eukaryotic cells, classify organisms by cell type, and explain useful and harmful effects of microorganisms with sensible safety measures.',
    demon: 'The Cell Identity Shifter', tech: 'Cell Form · First Technique: Find the Nucleus',
    scenes: [
      lesson('<p>Cells are the basic structural and functional units of living organisms. Some organisms consist of one cell, while plants, animals and many other organisms are made of many cells. Cells contain structures that carry out the activities needed for life.</p>'),
      lesson('<p><b>Prokaryotic cells</b>, such as bacteria, do not have a nucleus enclosed by a membrane. Their genetic material is found in a region of the cytoplasm. They are generally smaller and simpler in structure. <b>Eukaryotic cells</b> have a membrane-bound nucleus and other membrane-bound organelles. Animals, plants, fungi and protists are eukaryotes.</p>'),
      lesson('<p>Both cell types have a cell membrane, cytoplasm, ribosomes and genetic material. Many bacterial cells also have a cell wall. Plant and animal cells are eukaryotic, but they differ in some structures: plant cells typically have a cellulose cell wall, chloroplasts in photosynthetic tissues and a large permanent vacuole; animal cells do not have these plant structures.</p>'),
      lesson('<p>Microorganisms can be helpful or harmful. Some bacteria help make yoghurt, recycle nutrients or live usefully in the human gut. Others cause disease or spoil food. Good safety measures include washing hands, using clean water, handling food safely, keeping wounds clean and following advice from health professionals. Do not assume all bacteria are harmful.</p>'),
      { who: 'd', vis: 'demon', text: 'I say every microorganism is dangerous and every cell has a nucleus! Compare the cell structures and evaluate how organisms affect health.' },
      { type: 'battle' }
    ],
    quiz: [
      q('What is the key feature that distinguishes a eukaryotic cell from a prokaryotic cell?', ['A membrane-bound nucleus', 'A cell membrane', 'Cytoplasm', 'Genetic material'], 'Eukaryotic cells have a membrane-bound nucleus; prokaryotic cells do not.'),
      q('Which organism is prokaryotic?', ['A bacterium', 'A mango tree', 'A human', 'A mushroom'], 'Bacteria are prokaryotes, while plants, animals and fungi are eukaryotes.'),
      q('Which structures are found in both prokaryotic and eukaryotic cells?', ['Cell membrane, cytoplasm, ribosomes and genetic material', 'A membrane-bound nucleus and chloroplasts', 'A large permanent vacuole and nucleus', 'Only a cell wall'], 'Both cell types have a membrane, cytoplasm, ribosomes and genetic material.'),
      q('Which statement about bacteria is correct?', ['Some are useful and some can cause disease', 'All bacteria cause serious illness', 'Bacteria are always larger than animal cells', 'Bacteria all have a membrane-bound nucleus'], 'Bacteria have many roles; some are useful while others are pathogenic.'),
      q('Which practice helps reduce the spread of harmful microorganisms?', ['Wash hands with soap and clean water', 'Share unwashed utensils', 'Leave food uncovered for long periods', 'Ignore safe food-handling advice'], 'Handwashing with soap and clean water helps reduce the spread of many harmful microorganisms.')
    ]
  }
];
