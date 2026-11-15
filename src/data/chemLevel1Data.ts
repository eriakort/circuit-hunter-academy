import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeChemMission, q } from './chemCommon';

export const CHEM_LEVEL1_UNIT: UnitInfo = {
  title: ['Level 1 · 1° Superiore (Matter, Laws & Atom)', 'Livello 1 · 1° Superiore (Materia, Leggi e Atomo)'],
  ch: 'L1.1–L1.3',
  subject: 'chem'
};

export const CHEM_LEVEL1_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'chem',
    title: ['Matter, Mixtures & Separation', 'La materia, i miscugli e le separazioni'],
    pages: '1–42'
  },
  {
    n: 2,
    unit: 0,
    subject: 'chem',
    title: ['Fundamental Laws, the Mole & Gases', 'Leggi ponderali, mole e legge dei gas'],
    pages: '43–84'
  },
  {
    n: 3,
    unit: 0,
    subject: 'chem',
    title: ['Atomic Models & the Periodic Table', 'Modelli atomici e Sistema Periodico'],
    pages: '85–128'
  }
];

export const CHEM_LEVEL1_MISSIONS: Mission[] = [
  // ========================================================================
  // ARC 1: Matter, Mixtures & Separation
  // ========================================================================
  makeChemMission({
    id: 'chem_l1_m1',
    arc: 0,
    sec: 'L1.1',
    pages: '4–14',
    hue: 160,
    title: ['States of Matter & Transformations', 'Stati della materia e trasformazioni'],
    topic: [
      'Solid, liquid, gas states; kinetic-particle model; physical vs. chemical changes',
      'Stati di aggregazione; modello cinetico-particellare; trasformazioni fisiche e chimiche'
    ],
    demon: ['The Phase Phantom', 'Il Fantasma di Fase'],
    tech: ['Matter Form · First Technique: Phase Shift', 'Stile della Materia · Prima Tecnica: Cambio di Fase'],
    lessons: [
      {
        vis: 'chemStates',
        text: [
          '<p>Everything around us is <b>matter</b> made of microscopic particles in constant motion, {name}. In a <b>solid</b>, particles vibrate around fixed positions (definite shape and volume). In a <b>liquid</b>, they slide past one another (definite volume, variable shape). In a <b>gas</b>, they move freely in all directions, filling the entire container.</p>',
          '<p>Tutto ciò che ci circonda è <b>materia</b> formata da particelle microscopiche in continuo movimento, {name}. Nei <b>solidi</b> le particelle vibrano in posizioni fisse (forma e volume propri). Nei <b>liquidi</b> scorrono le une sulle altre (volume proprio, forma del recipiente). Negli <b>aeriformi</b> si muovono libere occupando tutto il volume disponibile.</p>'
        ]
      },
      {
        vis: 'chemStates',
        text: [
          '<p>Heating or cooling triggers <b>changes of state</b>: melting (solid → liquid), vaporization (liquid → gas), condensation (gas → liquid), solidification (liquid → solid), and <b>sublimation</b> (solid → gas directly, like dry ice or iodine).</p>',
          '<p>Riscaldare o raffreddare provoca i <b>passaggi di stato</b>: fusione (solido → liquido), vaporizzazione (liquido → aeriforme), condensazione (aeriforme → liquido), solidificazione (liquido → solido) e <b>sublimazione</b> (da solido direttamente ad aeriforme, come il ghiaccio secco o lo iodio).</p>'
        ]
      },
      {
        vis: 'chemPhysVsChem',
        text: [
          '<p><b>Easy rule:</b> a <b>physical change</b> changes look or state without making new molecules (ice melting is still H₂O!). A <b>chemical reaction</b> reshuffles atoms into brand-new substances—spot bubbles, color shifts, heat, or ash from burning wood.</p>',
          '<p><b>Regola semplice:</b> una <b>trasformazione fisica</b> cambia forma o stato ma non crea nuove molecole (il ghiaccio fuso resta H₂O!). Una <b>reazione chimica</b> produce sostanze nuove: bollicine, cambi di colore, calore o fumo dalla legna.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classify Physical vs. Chemical Transformations', 'Classifica trasformazioni fisiche e chimiche'],
      hint: [
        'Ask: are new substances with different formulas created, or is it still the same substance?',
        'Chiediti: si formano nuove sostanze con formula diversa o la sostanza resta la stessa?'
      ],
      cats: [
        ['Physical Transformation', 'Trasformazione Fisica'],
        ['Chemical Reaction', 'Reazione Chimica']
      ],
      items: [
        { n: ['Ice melting in a glass', 'Ghiaccio che fonde nel bicchiere'], i: 'cloud', c: 0, why: ['Solid H₂O becomes liquid H₂O—same molecules.', 'H₂O solida diventa H₂O liquida: le molecole non cambiano.'] },
        { n: ['Iron rusting in damp air', 'Ferro che arrugginisce all’aria umida'], i: 'shield', c: 1, why: ['Iron reacts with O₂ and H₂O to form iron oxide (rust).', 'Il ferro reagisce con O₂ e acqua formando ossido di ferro (ruggine).'] },
        { n: ['Dissolving sugar in tea', 'Zucchero che si scioglie nel tè'], i: 'layers', c: 0, why: ['Sugar molecules disperse intact; evaporation recovers sugar.', 'Le molecole di zucchero si disperdono intatte e si recuperano per evaporazione.'] },
        { n: ['Baking soda reacting with vinegar', 'Bicarbonato che reagisce con aceto'], i: 'bolt', c: 1, why: ['Carbon dioxide gas (CO₂) and new salts are produced.', 'Si sviluppano bollicine di nuovo gas (CO₂) e nuovi sali.'] },
        { n: ['Alcohol evaporating on skin', 'Alcol che evapora sulla pelle'], i: 'recycle', c: 0, why: ['Liquid ethanol merely enters the vapour phase.', 'L’etanolo liquido passa semplicemente allo stato di vapore.'] },
        { n: ['Wood burning in a fireplace', 'Legna che brucia nel camino'], i: 'warn', c: 1, why: ['Combustion transforms cellulose into CO₂, water vapour and ash.', 'La combustione trasforma la legna in CO₂, vapore acqueo e cenere.'] }
      ]
    },
    taunt: [
      '<p>I am the Phase Phantom! Melting, burning, freezing, rusting—all changes look identical to me!</p>',
      '<p>Sono il Fantasma di Fase! Fondere, bruciare, congelare o arrugginire: per me ogni trasformazione è identica!</p>'
    ],
    quiz: [
      q(
        'Which transformation is strictly a chemical change?',
        'Quale trasformazione è una reazione chimica?',
        [
          ['Burning methane gas to form carbon dioxide and water', 'Bruciare metano formando diossido di carbonio e acqua'],
          ['Boiling liquid water into steam at 100 °C', 'Far bollire acqua liquida a 100 °C ottenendo vapore'],
          ['Crushing rock salt into fine crystals', 'Triturare il salgemma in cristalli fini'],
          ['Melting solid wax near a warm lamp', 'Fondere la cera solida vicino a una lampada']
        ],
        [
          'Combustion rearranges atoms into brand-new molecules (CO₂ and H₂O).',
          'La combustione riorganizza gli atomi generando nuove molecole (CO₂ e H₂O).'
        ]
      ),
      q(
        'What name is given to the direct transition from solid to gas?',
        'Come si chiama il passaggio diretto dallo stato solido allo stato aeriforme?',
        [
          ['Sublimation', 'Sublimazione'],
          ['Condensation', 'Condensazione'],
          ['Deposition (desublimation)', 'Brinamento'],
          ['Solidification', 'Solidificazione']
        ],
        [
          'Sublimation skips the liquid phase (e.g. dry ice CO₂); the reverse gas → solid is deposition (brinamento).',
          'La sublimazione salta la fase liquida (es. ghiaccio secco); il passaggio inverso aeriforme → solido è il brinamento.'
        ]
      ),
      q(
        'According to the kinetic-particle model, which state has particles with the strongest mutual attraction and fixed positions?',
        'Secondo il modello particellare, in quale stato le particelle hanno le attrazioni più intense e posizioni fisse?',
        [
          ['Solid state', 'Stato solido'],
          ['Liquid state', 'Stato liquido'],
          ['Gaseous state', 'Stato aeriforme'],
          ['Superheated plasma', 'Plasma ad alta temperatura']
        ],
        [
          'In solids, strong cohesive forces lock particles into fixed crystal or amorphous positions where they only vibrate.',
          'Nei solidi le forze di coesione bloccano le particelle in posizioni fisse intorno alle quali possono solo vibrare.'
        ]
      ),
      q(
        'A liquid has…',
        'Un liquido possiede…',
        [
          ['a definite volume, but takes the shape of its container', 'volume proprio, ma assume la forma del recipiente'],
          ['both fixed shape and fixed volume', 'sia forma propria sia volume proprio'],
          ['neither fixed shape nor fixed volume', 'né forma propria né volume proprio'],
          ['particles separated by empty space that bounce at huge distances', 'particelle lontanissime che riempiono sempre tutto il recipiente']
        ],
        [
          'Liquid particles stay close together (nearly incompressible volume) yet slide freely over one another.',
          'Le particelle di un liquido restano vicine (volume proprio) ma scorrono liberamente adattandosi al contenitore.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l1_m2',
    arc: 0,
    sec: 'L1.2',
    pages: '15–28',
    hue: 185,
    title: ['Pure Substances vs. Mixtures', 'Sostanze pure e miscugli'],
    topic: [
      'Elements, compounds, homogeneous solutions, and heterogeneous mixtures',
      'Elementi, composti, miscugli omogenei (soluzioni) ed eterogenei'
    ],
    demon: ['The Slurry Mixer', 'Il Miscelatore Caotico'],
    tech: ['Matter Form · Second Technique: Phase Clarity', 'Stile della Materia · Seconda Tecnica: Chiarezza di Fase'],
    lessons: [
      {
        vis: 'chemMixtures',
        text: [
          '<p>A <b>pure substance</b> has a single chemical composition and sharp melting/boiling temperatures. Pure substances split into two families: <b>elements</b> (made of a single kind of atom, like Fe, O₂, Au, which cannot be broken down chemically) and <b>compounds</b> (two or more elements chemically bonded in fixed ratios, like H₂O or NaCl).</p>',
          '<p>Una <b>sostanza pura</b> ha composizione chimica costante e temperature di fusione ed ebollizione ben definite. Si divide in <b>elementi</b> (formati da un solo tipo di atomo, come Fe, O₂, Au, non scomponibili chimicamente) e <b>composti</b> (due o più elementi uniti chimicamente in rapporti fissi, come H₂O o NaCl).</p>'
        ]
      },
      {
        vis: 'chemMixtures',
        text: [
          '<p>A <b>mixture (miscuglio)</b> combines two or more substances in variable proportions without chemical reaction. A <b>homogeneous mixture (solution)</b> has a <b>single phase</b> and uniform properties everywhere—like air, brass alloy, or salt dissolved completely in water.</p>',
          '<p>Un <b>miscuglio</b> unisce due o più sostanze in proporzioni variabili senza reazione chimica. Un <b>miscuglio omogeneo (soluzione)</b> presenta una <b>sola fase</b> ed è identico in ogni suo punto: come l’aria filtrata, il bronzo o acqua e sale sciolto.</p>'
        ]
      },
      {
        vis: 'chemMixVsPure',
        text: [
          '<p><b>Quick test:</b> if you spot separate layers or grains (oil on water, sand, milk droplets, smoke), it is a <b>heterogeneous mixture</b> with 2+ distinct <b>phases</b>. Every piece keeps its own identity!</p>',
          '<p><b>Test veloce:</b> se distingui strati o granelli diversi (olio su acqua, sabbia, latte, fumo), è un <b>miscuglio eterogeneo</b> con 2 o più <b>fasi</b>. Ogni parte mantiene le proprie proprietà!</p>'
        ]
      }
    ],
    taunt: [
      '<p>Pure compound or messy mixture? Tell brass apart from gold and salt water from oil, hunter!</p>',
      '<p>Composto puro o miscuglio caotico? Prova a distinguere l’ottone dall’oro e l’acqua salata dall’olio!</p>'
    ],
    quiz: [
      q(
        'How is a chemical compound (such as H₂O) fundamentally different from a mixture (such as salt water)?',
        'In che cosa un composto chimico (come H₂O) differisce da un miscuglio (come acqua e sale)?',
        [
          ['A compound has a fixed elemental mass ratio and can only be split by chemical reactions', 'Un composto ha composizione fissa e si scompone solo con reazioni chimiche'],
          ['A compound always contains at least three different phases', 'Un composto contiene sempre almeno tre fasi diverse'],
          ['A mixture has a fixed chemical formula written in parentheses', 'Un miscuglio ha una formula chimica fissa'],
          ['A mixture cannot contain liquids', 'Un miscuglio non può contenere liquidi']
        ],
        [
          'Compounds have constant composition and distinct properties from their constituent elements; mixtures vary in ratio.',
          'I composti hanno composizione costante e proprietà nuove rispetto agli elementi; i miscugli hanno rapporti variabili.'
        ]
      ),
      q(
        'Which of these is a homogeneous mixture (solution)?',
        'Quale tra questi è un miscuglio omogeneo (soluzione)?',
        [
          ['Clean dry air (N₂, O₂, Ar)', 'Aria pulita e secca (N₂, O₂, Ar)'],
          ['Granite stone', 'Granito'],
          ['Oil and water in a jar', 'Acqua e olio in un barattolo'],
          ['Distilled water (H₂O)', 'Acqua distillata (H₂O)']
        ],
        [
          'Clean air is a uniform single-phase gas mixture; granite and oil+water are heterogeneous; distilled water is a pure compound.',
          'L’aria è un miscuglio gassoso uniforme a una sola fase; granito e olio+acqua sono eterogenei; l’acqua distillata è un composto puro.'
        ]
      ),
      q(
        'Which statement correctly defines an element?',
        'Quale affermazione definisce correttamente un elemento chimico?',
        [
          ['A pure substance made of atoms of the same kind that cannot be decomposed by ordinary chemical means', 'Una sostanza pura formata da atomi dello stesso tipo, non scomponibile chimicamente in sostanze più semplici'],
          ['Any substance that can be separated by filtration', 'Qualsiasi sostanza separabile per filtrazione'],
          ['Two different gases mixed in equal volumes', 'Due gas diversi mescolati in volumi uguali'],
          ['A solid that always melts at 0 °C', 'Un solido che fonde sempre a 0 °C']
        ],
        [
          'Elements (like O₂, Cu, C) consist of only one type of atom (same atomic number Z).',
          'Gli elementi (come O₂, Cu, C) sono costituiti da atomi di un unico tipo (stesso numero atomico Z).'
        ]
      ),
      q(
        'In chemistry, what is a "phase" (fase)?',
        'In chimica, che cos’è una "fase"?',
        [
          ['A physically distinct, uniform portion of matter bounded by clear interfaces', 'Una porzione di materia fisicamente distinguibile e uniforme, delimitata da superfici nette'],
          ['A chemical reaction that produces heat', 'Una reazione chimica che libera calore'],
          ['A specific hour during a laboratory experiment', 'Un intervallo di tempo durante un esperimento'],
          ['Any element located on the left side of the Periodic Table', 'Qualsiasi elemento a sinistra nella Tavola Periodica']
        ],
        [
          'In an oil-and-water mixture there are 2 liquid phases; in brine (water + dissolved salt) there is 1 phase.',
          'In acqua e olio ci sono 2 fasi liquide; in una soluzione di acqua e sale c’è una sola fase.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l1_m3',
    arc: 0,
    sec: 'L1.3',
    pages: '29–42',
    hue: 200,
    title: ['Separation Techniques', 'Tecniche di separazione'],
    topic: [
      'Filtration, decantation, centrifugation, distillation, crystallization & chromatography',
      'Filtrazione, decantazione, centrifugazione, distillazione, cristallizzazione e cromatografia'
    ],
    demon: ['The Fraction Trap', 'La Trappola delle Frazioni'],
    tech: ['Matter Form · Third Technique: Pure Extract', 'Stile della Materia · Terza Tecnica: Estratto Puro'],
    lessons: [
      {
        vis: 'chemSeparation',
        text: [
          '<p>Mixtures can be separated using physical properties—no chemical reactions required! For <b>heterogeneous mixtures</b>: <b>filtration</b> traps insoluble solids on porous paper by particle size; <b>decantation</b> pours off a top liquid layer after settling; <b>centrifugation</b> spins samples rapidly to separate phases by density (used for blood plasma vs. cells).</p>',
          '<p>I miscugli si separano sfruttando proprietà fisiche! Per i <b>miscugli eterogenei</b>: la <b>filtrazione</b> trattiene i solidi insolubili grazie alla dimensione dei pori; la <b>decantazione</b> separa per gravità; la <b>centrifugazione</b> sfrutta la forza centrifuga e la differenza di densità (es. plasma e globuli rossi).</p>'
        ]
      },
      {
        vis: 'chemSeparation',
        text: [
          '<p>For <b>homogeneous solutions</b>, a filter cannot trap dissolved ions or molecules! Instead, use <b>evaporation / crystallization</b> (recovering dissolved salt as crystals while solvent evaporates) or <b>simple/fractional distillation</b> (boiling and condensing liquids with different boiling points, such as water and ethanol).</p>',
          '<p>Per le <b>soluzioni omogenee</b> la filtrazione non basta perché il soluto è sciolto a livello molecolare! Si usa l’<b>evaporazione / cristallizzazione</b> (per recuperare un sale solido) oppure la <b>distillazione semplice o frazionata</b>, basata sui diversi punti di ebollizione (es. acqua e alcol).</p>'
        ]
      },
      {
        vis: 'chemDistillFlow',
        text: [
          '<p><b>Distillation</b> boils off the lower-boiling liquid first and cools the steam back into pure drops! Meanwhile, <b>solvent extraction</b> brews flavor (like espresso in hot water) and <b>chromatography</b> races ink pigments across filter paper at different speeds.</p>',
          '<p>La <b>distillazione</b> fa bollire per primo il liquido più volatile e raffredda il vapore in gocce pure! L’<b>estrazione con solvente</b> scioglie gli aromi (come il caffè), mentre la <b>cromatografia</b> fa correre i colori sulla carta a velocità diverse.</p>'
        ]
      }
    ],
    taunt: [
      '<p>Good luck pouring saltwater through filter paper—the salt slips straight through my pores!</p>',
      '<p>Prova pure a filtrare l’acqua salata con la carta: il sale passa attraverso tutti i miei pori!</p>'
    ],
    quiz: [
      q(
        'Which technique separates a homogeneous mixture of water (bp 100 °C) and ethanol (bp 78 °C)?',
        'Quale tecnica separa un miscuglio omogeneo di acqua (eb. 100 °C) ed etanolo (eb. 78 °C)?',
        [
          ['Fractional distillation', 'Distillazione frazionata'],
          ['Paper filtration', 'Filtrazione su carta'],
          ['Magnetic separation', 'Separazione magnetica'],
          ['Gravity decantation', 'Decantazione per gravità']
        ],
        [
          'Distillation exploits the difference in boiling points of miscible liquids.',
          'La distillazione sfrutta la diversa temperatura di ebollizione di due liquidi miscibili.'
        ]
      ),
      q(
        'Why does filtration fail to separate dissolved table salt (NaCl) from water?',
        'Perché la filtrazione non riesce a separare il sale (NaCl) sciolto in acqua?',
        [
          ['Dissolved ions are far smaller than the pores of filter paper', 'Gli ioni disciolti sono molto più piccoli dei pori della carta da filtro'],
          ['Salt turns into a gas during filtration', 'Il sale evapora durante la filtrazione'],
          ['Filter paper reacts chemically with sodium', 'La carta da filtro reagisce con il sodio'],
          ['Water is denser than dissolved salt', 'L’acqua ha densità maggiore del sale']
        ],
        [
          'In a true solution, solute particles are nanometer-scale and pass right through standard filters.',
          'In una soluzione vera le particelle di soluto hanno dimensioni nanometriche e attraversano i filtri.'
        ]
      ),
      q(
        'Which physical property drives centrifugation in a laboratory?',
        'Quale proprietà fisica guida la separazione per centrifugazione?',
        [
          ['Differences in density between suspended components', 'La differenza di densità tra i componenti in sospensione'],
          ['Differences in electrical conductivity', 'La differenza di conducibilità elettrica'],
          ['Differences in boiling point', 'La differenza di punto di ebollizione'],
          ['Differences in color wavelength', 'La differenza di colore']
        ],
        [
          'Centrifuges spin tubes rapidly so denser components sediment quickly at the bottom.',
          'La centrifuga applica un’elevata accelerazione per far depositare sul fondo le particelle più dense.'
        ]
      ),
      q(
        'To separate chlorophyll pigments from spinach leaves on a strip of paper, a chemist uses…',
        'Per separare i pigmenti della clorofilla estratti dalle foglie su una striscia di carta si utilizza…',
        [
          ['Chromatography', 'Cromatografia'],
          ['Filtration', 'Filtrazione'],
          ['Sublimation', 'Sublimazione'],
          ['Sifting (sieving)', 'Setacciatura']
        ],
        [
          'Chromatography separates dissolved dyes by their differential partition between stationary paper and mobile solvent.',
          'La cromatografia separa i pigmenti in base alla diversa velocità di trascinamento tra fase mobile e fase stazionaria.'
        ]
      )
    ]
  }),

  // ========================================================================
  // ARC 2: Ponderable Laws, the Mole & Gases
  // ========================================================================
  makeChemMission({
    id: 'chem_l1_m4',
    arc: 1,
    sec: 'L1.4',
    pages: '43–56',
    hue: 135,
    title: ['Laws of Lavoisier, Proust & Dalton', 'Leggi di Lavoisier, Proust e Dalton'],
    topic: [
      'Mass conservation, definite proportions, multiple proportions, and Dalton atomic theory',
      'Conservazione della massa, proporzioni definite, proporzioni multiple e modello di Dalton'
    ],
    demon: ['The Vanishing Scale', 'La Bilancia Truccata'],
    tech: ['Law Form · First Technique: Balanced Mass', 'Stile delle Leggi · Prima Tecnica: Massa Invariata'],
    lessons: [
      {
        vis: 'chemLaws',
        text: [
          '<p>In 1789 Antoine Lavoisier formulated the <b>Law of Conservation of Mass</b>: in a closed system, the total mass of the reactants equals the total mass of the products. Matter is neither created nor destroyed in chemical reactions—atoms simply rearrange!</p>',
          '<p>Nel 1789 Antoine Lavoisier formulò la <b>Legge di conservazione della massa</b>: in una reazione chimica in sistema chiuso, la massa totale dei reagenti è uguale a quella dei prodotti. Gli atomi si riaggregano senza crearsi né distruggersi.</p>'
        ]
      },
      {
        vis: 'chemLaws',
        text: [
          '<p>In 1799 Joseph Proust proved the <b>Law of Definite Proportions</b>: in a pure compound, elements always combine in a constant, fixed mass ratio. Pure water always contains hydrogen and oxygen in a <b>1 : 8</b> mass ratio (e.g. 2 g H + 16 g O → 18 g H₂O). Any leftover reactant remains unreacted.</p>',
          '<p>Nel 1799 Joseph Proust enunciò la <b>Legge delle proporzioni definite</b>: in un composto puro gli elementi si combinano sempre secondo un rapporto in massa costante. Nell’acqua pura il rapporto H : O è sempre <b>1 : 8</b> (es. 2 g H + 16 g O → 18 g H₂O); l’eventuale eccesso di un reagente resta non reagito.</p>'
        ]
      },
      {
        vis: 'chemDaltonBlocks',
        text: [
          '<p>In 1803 <b>John Dalton</b> pictured atoms like indivisible Lego bricks! That explains why two compounds of the same elements (CO vs. CO₂) use whole-number oxygen ratios (16 g O : 32 g O = <b>1 : 2</b>)—you can snap on 1 whole oxygen atom or 2, never half an atom!</p>',
          '<p>Nel 1803 <b>John Dalton</b> immaginò gli atomi come mattoncini indivisibili! Ecco perché composti diversi degli stessi elementi (CO e CO₂) hanno ossigeni in rapporti interi semplici (16 g O : 32 g O = <b>1 : 2</b>): puoi agganciare 1 o 2 atomi interi, mai mezzo!</p>'
        ]
      }
    ],
    taunt: [
      '<p>I burned magnesium in an open crucible and the ash grew heavier! Does Lavoisier still hold?</p>',
      '<p>Ho bruciato magnesio in un crogiolo aperto e la cenere pesa di più! Lavoisier ha forse sbagliato?</p>'
    ],
    quiz: [
      q(
        'If 12 g of carbon react completely with 32 g of oxygen in a sealed flask, what mass of CO₂ forms?',
        'Se 12 g di carbonio reagiscono completamente con 32 g di ossigeno in un recipiente chiuso, quanta CO₂ si forma?',
        [
          ['44 g', '44 g'],
          ['20 g', '20 g'],
          ['32 g', '32 g'],
          ['12 g', '12 g']
        ],
        [
          'By Lavoisier’s Law of Conservation of Mass: 12 g + 32 g = 44 g.',
          'Per la legge di Lavoisier la massa totale si conserva: 12 g + 32 g = 44 g.'
        ]
      ),
      q(
        'Hydrogen and oxygen combine in a 1 : 8 mass ratio to form water. If you mix 3 g of H₂ with 16 g of O₂, what forms?',
        'Idrogeno e ossigeno reagiscono nel rapporto in massa 1 : 8 per formare acqua. Mescolando 3 g di H₂ con 16 g di O₂, cosa si ottiene?',
        [
          ['18 g of H₂O and 1 g of unreacted H₂', '18 g di H₂O e 1 g di H₂ in eccesso'],
          ['19 g of H₂O with no leftovers', '19 g di H₂O senza alcun avanzo'],
          ['27 g of H₂O', '27 g di H₂O'],
          ['16 g of H₂O and 3 g of oxygen', '16 g di H₂O e 3 g di ossigeno']
        ],
        [
          'By Proust’s law, 16 g O reacts with only 2 g H to give 18 g H₂O, leaving 1 g H unreacted.',
          'Per la legge di Proust, 16 g di O reagiscono solo con 2 g di H dando 18 g di H₂O; resta 1 g di H in eccesso.'
        ]
      ),
      q(
        'Comparing CO (12 g C : 16 g O) and CO₂ (12 g C : 32 g O) illustrates which chemical law?',
        'Il confronto tra CO (12 g C : 16 g O) e CO₂ (12 g C : 32 g O) illustra quale legge?',
        [
          ['Dalton’s Law of Multiple Proportions', 'Legge delle proporzioni multiple di Dalton'],
          ['Boyle’s Gas Law', 'Legge di Boyle sui gas'],
          ['Archimedes’ Principle', 'Principio di Archimede'],
          ['Hund’s Spin Rule', 'Regola di Hund']
        ],
        [
          'The oxygen masses combining with a fixed 12 g of carbon are in the small integer ratio 16 : 32 = 1 : 2.',
          'Le masse di ossigeno legate a 12 g fissi di carbonio stanno nel rapporto intero piccolo 16 : 32 = 1 : 2.'
        ]
      ),
      q(
        'Why does wood appear to lose mass when burned in an open fireplace?',
        'Perché la legna sembra perdere massa quando brucia in un camino aperto?',
        [
          ['Gaseous products (CO₂ and water vapour) escape into the air', 'I prodotti gassosi (CO₂ e vapore acqueo) si disperdono nell’aria'],
          ['Mass is destroyed when fire burns', 'La massa viene distrutta dal fuoco'],
          ['Ashes contain negative mass atoms', 'La cenere ha massa negativa'],
          ['Lavoisier’s law fails above 200 °C', 'La legge di Lavoisier non vale sopra i 200 °C']
        ],
        [
          'In an open system gases escape; trapping all gases in a sealed vessel confirms total mass stays identical.',
          'In un sistema aperto i gas sfuggono nell’atmosfera; raccogliendoli in un sistema chiuso la massa resta invariata.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l1_m5',
    arc: 1,
    sec: 'L1.5',
    pages: '57–70',
    hue: 45,
    title: ['Atomic Mass, Avogadro & The Mole', 'Massa atomica, Avogadro e la mole'],
    topic: [
      'Unified atomic mass unit (u), molar mass (g/mol), Avogadro constant Nₐ, n = m / M',
      'Unità di massa atomica (u), massa molare (g/mol), costante di Avogadro Nₐ, n = m / M'
    ],
    demon: ['The Counting Goblin', 'Il Folletto Contatore'],
    tech: ['Law Form · Second Technique: Avogadro Count', 'Stile delle Leggi · Seconda Tecnica: Conto di Avogadro'],
    lessons: [
      {
        vis: 'chemMole',
        text: [
          '<p>Atoms are far too light to weigh individually in grams. Chemists define the <b>unified atomic mass unit (u or Da)</b> as 1/12 the mass of a Carbon-12 atom. Relative molecular mass sums the atomic masses in a formula: for H₂O, 2 × 1.008 + 16.00 ≈ <b>18.02</b>.</p>',
          '<p>Gli atomi sono troppo leggeri per essere pesati singolarmente in grammi. Si usa l’<b>unità di massa atomica (u)</b>, pari a 1/12 della massa di un atomo di Carbonio-12. La massa molecolare somma le masse atomiche della formula: per H₂O, 2 × 1,008 + 16,00 ≈ <b>18,02 u</b>.</p>'
        ]
      },
      {
        vis: 'chemMole',
        text: [
          '<p>To bridge the atomic world and laboratory scales, chemists use the <b>mole (mol)</b>. One mole contains <b>Avogadro’s constant</b> of particles: <b>Nₐ = 6.022 × 10²³ mol⁻¹</b>. Remarkably, the <b>molar mass M (in g/mol)</b> has the exact same numerical value as the atomic or molecular mass (1 mol of H₂O = 18.02 g).</p>',
          '<p>Per collegare il mondo microscopico alla bilancia del laboratorio usiamo la <b>mole (mol)</b>. Una mole contiene la <b>costante di Avogadro</b>: <b>Nₐ = 6,022 × 10²³ mol⁻¹</b>. La <b>massa molare M (in g/mol)</b> ha lo stesso valore numerico della massa atomica o molecolare (1 mol di H₂O pesa 18,02 g).</p>'
        ]
      },
      {
        vis: 'chemAvogadroScale',
        text: [
          '<p><b>Think of 1 mole like 1 dozen:</b> 12 ping-pong balls weigh less than 12 bowling balls, yet both equal 12 items! Likewise, <b>n = m / M</b> turns grams into mole packs, and <b>N = n × Nₐ</b> counts the exact particles (6.022 × 10²³ per mole).</p>',
          '<p><b>Pensa alla mole come a una dozzina:</b> 12 palline da ping-pong pesano meno di 12 palle da bowling, ma sempre 12 sono! Con <b>n = m / M</b> trasformi i grammi in moli, e con <b>N = n × Nₐ</b> conti le particelle (6,022 × 10²³ per mole).</p>'
        ]
      }
    ],
    taunt: [
      '<p>Which holds more molecules: 1 mole of heavy uranium or 1 mole of tiny hydrogen? Ha, trick question!</p>',
      '<p>Cosa contiene più molecole: 1 mole di pesante uranio o 1 mole di leggero idrogeno?</p>'
    ],
    quiz: [
      q(
        'How many molecules are present in 1.0 mole of CO₂ compared with 1.0 mole of H₂?',
        'Quante molecole ci sono in 1,0 mole di CO₂ rispetto a 1,0 mole di H₂?',
        [
          ['Both contain exactly 6.022 × 10²³ molecules', 'Entrambe contengono esattamente 6,022 × 10²³ molecole'],
          ['CO₂ contains 22 times more molecules because it is heavier', 'CO₂ contiene 22 volte più molecole perché è più pesante'],
          ['H₂ contains more molecules because its molecules are smaller', 'H₂ contiene più molecole perché sono più piccole'],
          ['Neither can be counted with Avogadro’s number', 'Nessuna delle due si misura con Nₐ']
        ],
        [
          'A mole always counts the same number of entities (Nₐ = 6.022 × 10²³), just like a dozen is always 12.',
          'Una mole indica sempre lo stesso numero di particelle (6,022 × 10²³), anche se le masse molari sono diverse.'
        ]
      ),
      q(
        'What is the molar mass M of CO₂ (C = 12.0 g/mol, O = 16.0 g/mol)?',
        'Quanto vale la massa molare M della CO₂ (C = 12,0 g/mol, O = 16,0 g/mol)?',
        [
          ['44.0 g/mol', '44,0 g/mol'],
          ['28.0 g/mol', '28,0 g/mol'],
          ['32.0 g/mol', '32,0 g/mol'],
          ['64.0 g/mol', '64,0 g/mol']
        ],
        [
          'M(CO₂) = 12.0 + 2 × 16.0 = 44.0 g/mol.',
          'M(CO₂) = 12,0 + 2 × 16,0 = 44,0 g/mol.'
        ]
      ),
      q(
        'How many moles are in 90.0 g of water (M = 18.0 g/mol)?',
        'Quante moli ci sono in 90,0 g di acqua (M = 18,0 g/mol)?',
        [
          ['5.0 mol', '5,0 mol'],
          ['0.20 mol', '0,20 mol'],
          ['72.0 mol', '72,0 mol'],
          ['1620 mol', '1620 mol']
        ],
        [
          'n = m / M = 90.0 g / (18.0 g/mol) = 5.0 mol.',
          'n = m / M = 90,0 g / (18,0 g/mol) = 5,0 mol.'
        ]
      ),
      q(
        'What is the mass of 2.5 mol of Na atoms (M = 23.0 g/mol)?',
        'Qual è la massa di 2,5 mol di atomi di sodio Na (M = 23,0 g/mol)?',
        [
          ['57.5 g', '57,5 g'],
          ['9.2 g', '9,2 g'],
          ['25.5 g', '25,5 g'],
          ['11.5 g', '11,5 g']
        ],
        [
          'm = n × M = 2.5 mol × 23.0 g/mol = 57.5 g.',
          'm = n × M = 2,5 mol × 23,0 g/mol = 57,5 g.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l1_m6',
    arc: 1,
    sec: 'L1.6',
    pages: '71–84',
    hue: 210,
    title: ['Gas Laws & Ideal Gas Basics', 'Leggi dei gas e gas perfetti'],
    topic: [
      'Avogadro volume law, Boyle, Charles/Gay-Lussac, Ideal Gas equation PV = nRT, STP molar volume',
      'Principio di Avogadro, leggi di Boyle, Charles e Gay-Lussac, equazione PV = nRT, volume molare'
    ],
    demon: ['The Pressure Piston', 'Il Pistone Impazzito'],
    tech: ['Law Form · Third Technique: Ideal Gas Seal', 'Stile delle Leggi · Terza Tecnica: Sigillo dei Gas'],
    lessons: [
      {
        vis: 'chemGas',
        text: [
          '<p>In gases, volume responds strongly to pressure and temperature. <b>Boyle’s Law</b> (at constant T): P₁V₁ = P₂V₂ (squeezing a gas to half its volume doubles pressure). <b>Charles’s Law</b> (at constant P): V₁ / T₁ = V₂ / T₂ — provided temperature T is in <b>Kelvin: T(K) = t(°C) + 273.15</b>.</p>',
          '<p>Nei gas il volume dipende fortemente da pressione e temperatura. <b>Legge di Boyle</b> (T costante): P₁V₁ = P₂V₂ (dimezzando il volume raddoppia la pressione). <b>Legge di Charles</b> (P costante): V₁ / T₁ = V₂ / T₂, usando sempre la temperatura in <b>Kelvin: T(K) = t(°C) + 273,15</b>.</p>'
        ]
      },
      {
        vis: 'chemGas',
        text: [
          '<p><b>Avogadro’s Principle</b> states that equal volumes of all gases at the same T and P contain equal numbers of molecules. At Standard Temperature and Pressure (<b>STP: 0 °C = 273.15 K, 1 atm</b>), <b>1 mole of any ideal gas occupies 22.4 L</b>.</p>',
          '<p>Il <b>principio di Avogadro</b> afferma che volumi uguali di gas diversi, alle stesse T e P, contengono lo stesso numero di molecole. In condizioni normali (<b>STP: 0 °C = 273,15 K, 1 atm</b>), <b>1 mole di qualunque gas perfetto occupa 22,4 L</b>.</p>'
        ]
      },
      {
        vis: 'chemKelvinScale',
        text: [
          '<p>All gas rules join into one equation: <b>PV = nRT</b> (R = 0.0821 L·atm/(mol·K)). <b>Always switch °C to Kelvin (+273.15) first</b>—because at 0 °C molecules still move, whereas 0 K (−273.15 °C) is where motion truly stops!</p>',
          '<p>Tutte le leggi dei gas si uniscono in <b>PV = nRT</b> (R = 0,0821 L·atm/(mol·K)). <b>Passa sempre ai Kelvin (+273,15)</b> prima di calcolare: a 0 °C le molecole si muovono ancora, solo a 0 K (−273,15 °C) si fermano davvero!</p>'
        ]
      }
    ],
    taunt: [
      '<p>Plug Celsius straight into PV = nRT and freeze at 0 °C—watch your calculation collapse to zero!</p>',
      '<p>Inserisci i gradi Celsius direttamente in PV = nRT a 0 °C e guarda la tua formula crollare a zero!</p>'
    ],
    quiz: [
      q(
        'Convert 27 °C into Kelvin (use T = t + 273).',
        'Converti 27 °C in Kelvin (usa T = t + 273).',
        [
          ['300 K', '300 K'],
          ['246 K', '246 K'],
          ['27 K', '27 K'],
          ['373 K', '373 K']
        ],
        [
          'T(K) = 27 + 273 = 300 K.',
          'T(K) = 27 + 273 = 300 K.'
        ]
      ),
      q(
        'At STP (0 °C, 1 atm), what volume do 2.0 moles of oxygen gas (O₂) occupy?',
        'In condizioni normali STP (0 °C, 1 atm), quale volume occupano 2,0 moli di ossigeno gassoso (O₂)?',
        [
          ['44.8 L', '44,8 L'],
          ['22.4 L', '22,4 L'],
          ['11.2 L', '11,2 L'],
          ['64.0 L', '64,0 L']
        ],
        [
          'Since 1 mol of ideal gas occupies 22.4 L at STP, 2.0 mol occupy 2.0 × 22.4 = 44.8 L.',
          'Poiché 1 mole occupa 22,4 L a STP, 2,0 mol occupano 2,0 × 22,4 = 44,8 L.'
        ]
      ),
      q(
        'If a fixed gas sample at constant temperature is compressed from 6.0 L to 2.0 L, how does its pressure change?',
        'Se un gas a temperatura costante viene compresso da 6,0 L a 2,0 L, come cambia la pressione?',
        [
          ['It triples (becomes 3 times larger)', 'Triplica (diventa 3 volte maggiore)'],
          ['It drops to one third', 'Si riduce a un terzo'],
          ['It stays constant', 'Resta costante'],
          ['It doubles', 'Raddoppia']
        ],
        [
          'By Boyle’s Law P₁V₁ = P₂V₂: reducing volume by 3× multiplies pressure by 3×.',
          'Per la legge di Boyle P₁V₁ = P₂V₂: riducendo il volume di 3 volte la pressione triplica.'
        ]
      ),
      q(
        'In PV = nRT, which two variables are directly proportional when P and n are held constant?',
        'In PV = nRT, quali due grandezze sono direttamente proporzionali a pressione e moli costanti?',
        [
          ['Volume V and absolute temperature T (in K)', 'Volume V e temperatura assoluta T (in K)'],
          ['Volume V and pressure P', 'Volume V e pressione P'],
          ['Gas constant R and temperature T', 'Costante R e temperatura T'],
          ['Molar mass M and Kelvin temperature', 'Massa molare M e temperatura']
        ],
        [
          'V = (nR/P) · T shows linear direct proportionality between volume and Kelvin temperature.',
          'Dalla forma V = (nR/P) · T risulta la proporzionalità diretta tra volume e temperatura in Kelvin.'
        ]
      )
    ]
  }),

  // ========================================================================
  // ARC 3: Atomic Models & the Periodic Table
  // ========================================================================
  makeChemMission({
    id: 'chem_l1_m7',
    arc: 2,
    sec: 'L1.7',
    pages: '85–99',
    hue: 265,
    title: ['Subatomic Particles & Atomic Models', 'Particelle subatomiche e modelli atomici'],
    topic: [
      'Protons, neutrons, electrons, Z & A, isotopes, Dalton → Thomson → Rutherford → Bohr',
      'Protoni, neutroni, elettroni, numeri Z e A, isotopi, modelli da Dalton a Bohr'
    ],
    demon: ['The Isotope Twister', 'Il Distorsore di Isotopi'],
    tech: ['Atom Form · First Technique: Nuclear Core', 'Stile Atomico · Prima Tecnica: Cuore Nucleare'],
    lessons: [
      {
        vis: 'chemAtomModels',
        text: [
          '<p>Atoms are built from three subatomic particles: positively charged <b>protons (p⁺)</b> and neutral <b>neutrons (n⁰)</b> packed inside the tiny dense nucleus, surrounded by negatively charged <b>electrons (e⁻)</b>. In a neutral atom, protons = electrons.</p>',
          '<p>Gli atomi sono formati da tre particelle subatomiche: i <b>protoni (p⁺)</b> positivi e i <b>neutroni (n⁰)</b> neutri racchiusi nel nucleo centrale densissimo, circondati dagli <b>elettroni (e⁻)</b> negativi. In un atomo neutro protoni = elettroni.</p>'
        ]
      },
      {
        vis: 'chemAtomModels',
        text: [
          '<p>Scientific models evolved through experiment: <b>Thomson</b> discovered electrons (plum pudding); <b>Rutherford</b> fired alpha particles at gold foil and discovered the tiny positive nucleus with mostly empty space; <b>Bohr</b> explained atomic line spectra using quantized electron energy orbits.</p>',
          '<p>I modelli si evolsero tramite esperimenti: <b>Thomson</b> scoprì l’elettrone ("panettone"); <b>Rutherford</b> bombardò una lamina d’oro con particelle α scoprendo il nucleo piccolo e carico positivamente; <b>Bohr</b> introdusse i livelli di energia quantizzati per spiegare gli spettri atomici.</p>'
        ]
      },
      {
        vis: 'chemAtomModels',
        text: [
          '<p>Every atom’s ID card has two numbers: <b>Z = protons</b> (which element it is—change Z and you change the element!) and <b>A = protons + neutrons</b>. Same protons + extra neutrons = <b>isotopes</b> (like ¹²C and ¹⁴C).</p>',
          '<p>La carta d’identità dell’atomo ha due numeri: <b>Z = protoni</b> (decide l’elemento!) e <b>A = protoni + neutroni</b>. Stessi protoni ma neutroni diversi formano gli <b>isotopi</b> (come ¹²C e ¹⁴C).</p>'
        ]
      }
    ],
    taunt: [
      '<p>Carbon-12 and Carbon-14 have different weights—clearly they must be two totally different elements!</p>',
      '<p>Carbonio-12 e Carbonio-14 hanno masse diverse: devono per forza essere due elementi diversi!</p>'
    ],
    quiz: [
      q(
        'An atom of Sodium has Z = 11 and A = 23. How many neutrons are in its nucleus?',
        'Un atomo di Sodio ha Z = 11 e A = 23. Quanti neutroni contiene il suo nucleo?',
        [
          ['12 neutrons', '12 neutroni'],
          ['11 neutrons', '11 neutroni'],
          ['23 neutrons', '23 neutroni'],
          ['34 neutrons', '34 neutroni']
        ],
        [
          'N = A − Z = 23 − 11 = 12 neutrons (along with 11 protons and 11 electrons).',
          'N = A − Z = 23 − 11 = 12 neutroni (oltre a 11 protoni e 11 elettroni).'
        ]
      ),
      q(
        'What did Rutherford’s gold foil experiment prove about the atom?',
        'Che cosa dimostrò l’esperimento della lamina d’oro di Rutherford?',
        [
          ['Positive charge and almost all atomic mass are concentrated in a tiny central nucleus', 'La carica positiva e quasi tutta la massa sono concentrate in un nucleo minuscolo'],
          ['Atoms are solid, indivisible spheres like billiard balls', 'Gli atomi sono sfere piene e indivisibili'],
          ['Electrons sit motionless inside a positive pudding', 'Gli elettroni sono fermi dentro una sfera positiva'],
          ['Gold atoms contain no empty space', 'Gli atomi d’oro non hanno spazio vuoto']
        ],
        [
          'Most alpha particles passed straight through (empty space), while a tiny fraction bounced sharply off the dense positive nucleus.',
          'Quasi tutte le particelle α attraversarono la lamina (spazio vuoto), mentre pochissime furono respinte dal nucleo denso e positivo.'
        ]
      ),
      q(
        'What makes two atoms "isotopes" of the same element?',
        'Che cosa rende due atomi "isotopi" dello stesso elemento?',
        [
          ['Same atomic number Z (protons), different mass number A (neutrons)', 'Stesso numero atomico Z (protoni), diverso numero di massa A (neutroni)'],
          ['Same mass number A, different atomic number Z', 'Stesso numero di massa A, diverso numero atomico Z'],
          ['Different numbers of protons and electrons', 'Diverso numero di protoni ed elettroni'],
          ['One is metallic and the other is gaseous', 'Uno è metallico e l’altro è gassoso']
        ],
        [
          'Isotopes share Z (identical chemical behaviour) while differing in neutron count N.',
          'Gli isotopi hanno uguale Z (stesso comportamento chimico) e diverso numero di neutroni.'
        ]
      ),
      q(
        'When a neutral Calcium atom (Z = 20) loses 2 electrons to form Ca²⁺, what remains unchanged?',
        'Quando un atomo neutro di Calcio (Z = 20) perde 2 elettroni formando Ca²⁺, che cosa resta invariato?',
        [
          ['Its 20 protons in the nucleus', 'I suoi 20 protoni nel nucleo'],
          ['Its 20 electrons', 'I suoi 20 elettroni'],
          ['Its net electrical charge (remains 0)', 'La sua carica elettrica netta (resta 0)'],
          ['Its atomic radius (stays identical)', 'Il suo raggio atomico']
        ],
        [
          'Chemical ionization adds or removes valence electrons; the nucleus (Z = 20 protons) stays untouched.',
          'La formazione di uno ione modifica solo gli elettroni: il nucleo con i suoi 20 protoni resta invariato.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l1_m8',
    arc: 2,
    sec: 'L1.8',
    pages: '100–114',
    hue: 290,
    title: ['Orbitals & Electron Configuration', 'Orbitali e configurazione elettronica'],
    topic: [
      'Quantum orbitals s, p, d, f; Aufbau principle, Pauli exclusion principle, Hund’s rule',
      'Orbitali s, p, d, f; principio di Aufbau, esclusione di Pauli e regola di Hund'
    ],
    demon: ['The Spin Breaker', 'Lo Spezzatore di Spin'],
    tech: ['Atom Form · Second Technique: Aufbau Order', 'Stile Atomico · Seconda Tecnica: Ordine di Aufbau'],
    lessons: [
      {
        vis: 'chemOrbitals',
        text: [
          '<p>Modern quantum mechanics describes electrons via <b>orbitals</b>—regions of high probability of finding an electron. Subshells come in four shapes with fixed capacities: <b>s</b> (1 orbital, max 2 e⁻), <b>p</b> (3 orbitals, max 6 e⁻), <b>d</b> (5 orbitals, max 10 e⁻), and <b>f</b> (7 orbitals, max 14 e⁻).</p>',
          '<p>La meccanica quantistica descrive gli elettroni negli <b>orbitali</b> (zone di massima probabilità). I sottolivelli hanno capacità fisse: <b>s</b> (1 orbitale, max 2 e⁻), <b>p</b> (3 orbitali, max 6 e⁻), <b>d</b> (5 orbitali, max 10 e⁻), <b>f</b> (7 orbitali, max 14 e⁻).</p>'
        ]
      },
      {
        vis: 'chemOrbitals',
        text: [
          '<p>Three rules govern every electron configuration: (1) <b>Aufbau Principle</b>: fill lowest energy first (1s → 2s → 2p → 3s → 3p → 4s → 3d…). (2) <b>Pauli Exclusion</b>: max 2 electrons per orbital with opposite spins (↑↓). (3) <b>Hund’s Rule</b>: occupy equal-energy orbitals singly with parallel spins before pairing.</p>',
          '<p>Tre regole guidano la configurazione elettronica: (1) <b>Principio di Aufbau</b>: si riempiono prima gli orbitali a energia minore (1s → 2s → 2p → 3s → 3p → 4s → 3d…). (2) <b>Esclusione di Pauli</b>: massimo 2 elettroni per orbitale con spin opposti (↑↓). (3) <b>Regola di Hund</b>: negli orbitali degeneri gli elettroni si dispongono prima spaiati a spin paralleli.</p>'
        ]
      },
      {
        vis: 'chemAufbauRules',
        text: [
          '<p><b>Easy hotel analogy:</b> fill lowest floors first (<b>Aufbau</b>), put at most 2 guests per bed facing opposite ways (<b>Pauli ↑↓</b>), and let electrons take empty <b>2p</b> beds alone before sharing (<b>Hund</b>). Only outer <b>valence electrons</b> form chemical bonds!</p>',
          '<p><b>Analogia dell’hotel:</b> si riempiono prima i piani bassi (<b>Aufbau</b>), massimo 2 elettroni opposti per letto (<b>Pauli ↑↓</b>) e negli orbitali <b>2p</b> ciascuno sceglie prima una stanza vuota (<b>Hund</b>). Solo gli elettroni esterni (di <b>valenza</b>) creano i legami!</p>'
        ]
      }
    ],
    taunt: [
      '<p>Why fill 4s before 3d? And why put 3 electrons in separate p boxes? Break my orbital rules if you dare!</p>',
      '<p>Perché riempire 4s prima di 3d? E perché separare gli elettroni nei tre orbitali p?</p>'
    ],
    quiz: [
      q(
        'What is the maximum number of electrons that a p subshell (three p orbitals) can hold?',
        'Qual è il numero massimo di elettroni che può contenere un sottolivello p (3 orbitali p)?',
        [
          ['6 electrons', '6 elettroni'],
          ['2 electrons', '2 elettroni'],
          ['10 electrons', '10 elettroni'],
          ['14 electrons', '14 elettroni']
        ],
        [
          'A p subshell has 3 orbitals, each holding up to 2 electrons (Pauli): 3 × 2 = 6 electrons.',
          'Il sottolivello p possiede 3 orbitali, ciascuno con al massimo 2 elettroni: 3 × 2 = 6 elettroni.'
        ]
      ),
      q(
        'What is the ground-state electron configuration of Nitrogen (Z = 7)?',
        'Qual è la configurazione elettronica allo stato fondamentale dell’Azoto (Z = 7)?',
        [
          ['1s² 2s² 2p³', '1s² 2s² 2p³'],
          ['1s² 2s² 2p⁵', '1s² 2s² 2p⁵'],
          ['1s² 2s³ 2p²', '1s² 2s³ 2p²'],
          ['1s² 2p⁵', '1s² 2p⁵']
        ],
        [
          '7 electrons fill 1s² (2), 2s² (2), and 2p³ (3 unpaired spins by Hund’s rule).',
          'I 7 elettroni riempiono 1s² (2), 2s² (2) e 2p³ (3 elettroni spaiati per la regola di Hund).'
        ]
      ),
      q(
        'Which rule requires electrons to enter equal-energy orbitals (like 2pₓ, 2pᵧ, 2p₂) one at a time before pairing?',
        'Quale regola stabilisce che gli elettroni occupano singolarmente orbitali di uguale energia prima di appaiarsi?',
        [
          ['Hund’s Rule', 'Regola di Hund'],
          ['Lavoisier’s Law', 'Legge di Lavoisier'],
          ['Pauli Exclusion Principle', 'Principio di esclusione di Pauli'],
          ['Dalton’s Law', 'Legge di Dalton']
        ],
        [
          'Hund’s rule maximizes total parallel spin by keeping electrons unpaired across degenerate orbitals first.',
          'La regola di Hund minimizza la repulsione disponendo gli elettroni singolarmente negli orbitali degeneri.'
        ]
      ),
      q(
        'How many valence electrons does Carbon (Z = 6: 1s² 2s² 2p²) possess in its outermost shell?',
        'Quanti elettroni di valenza possiede il Carbonio (Z = 6: 1s² 2s² 2p²) nel livello più esterno?',
        [
          ['4 valence electrons', '4 elettroni di valenza'],
          ['2 valence electrons', '2 elettroni di valenza'],
          ['6 valence electrons', '6 elettroni di valenza'],
          ['8 valence electrons', '8 elettroni di valenza']
        ],
        [
          'Shell n = 2 contains both 2s² and 2p², giving 2 + 2 = 4 valence electrons.',
          'Il livello esterno n = 2 contiene 2s² e 2p², quindi 2 + 2 = 4 elettroni di valenza.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l1_m9',
    arc: 2,
    sec: 'L1.9',
    pages: '115–128',
    hue: 325,
    horns: 3,
    eyes: 3,
    boss: true,
    title: ['Periodic Table & Periodic Trends', 'Sistema Periodico e proprietà periodiche'],
    topic: [
      'Periods & groups, metals/nonmetals/metalloids, noble gases, atomic radius, ionization energy, electronegativity',
      'Periodi e gruppi, metalli/non metalli/semimetalli, gas nobili, raggio atomico, energia di ionizzazione, elettronegatività'
    ],
    demon: ['The Mendeleev Glitch', 'L’Anomalia di Mendeleev'],
    tech: ['Atom Form · Final Technique: Periodic Mastery', 'Stile Atomico · Tecnica Finale: Dominio Periodico'],
    lessons: [
      {
        vis: 'chemPeriodic',
        text: [
          '<p>The modern <b>Periodic Table</b> orders elements by increasing atomic number <b>Z</b>. Horizontal rows are <b>periods (1–7)</b> showing the highest occupied shell; vertical columns are <b>groups (1–18)</b> whose elements share the same valence electron count and chemical behaviour (e.g. Group 1 Alkali Metals, Group 17 Halogens, Group 18 Noble Gases).</p>',
          '<p>La <b>Tavola Periodica</b> moderna ordina gli elementi per numero atomico <b>Z</b> crescente. Le righe orizzontali sono i <b>periodi (1–7)</b> (livello esterno occupato); le colonne sono i <b>gruppi (1–18)</b> che riuniscono elementi con gli stessi elettroni di valenza (es. Gruppo 1 Metalli alcalini, Gruppo 17 Alogeni, Gruppo 18 Gas nobili).</p>'
        ]
      },
      {
        vis: 'chemPeriodic',
        text: [
          '<p>Elements divide into <b>metals</b> (left/center: shiny, conductive, tend to lose electrons forming cations), <b>non-metals</b> (upper right: insulators, gain/share electrons forming anions), and <b>metalloids</b> along the diagonal staircase (Si, Ge, B).</p>',
          '<p>Gli elementi si dividono in <b>metalli</b> (sinistra e centro: lucenti, conduttori, cedono elettroni formando cationi), <b>non metalli</b> (in alto a destra: isolanti, acquistano o condividono elettroni) e <b>semimetalli</b> lungo la diagonale (B, Si, Ge).</p>'
        ]
      },
      {
        vis: 'chemPeriodic',
        text: [
          '<p><b>Why atoms grow or shrink:</b> going <b>DOWN</b> adds new onion layers so <b>atomic radius grows</b>. Going <b>RIGHT</b> adds more protons inside the same shell, pulling electrons tighter—so atoms get <b>smaller</b> and greedier for electrons (high ionization energy & electronegativity)!</p>',
          '<p><b>Perché i raggi cambiano:</b> scendendo lungo un gruppo si aggiungono nuovi gusci come una cipolla (<b>raggio cresce</b>). Andando a <b>destra</b> aumentano i protoni nello stesso guscio: l’atomo si <b>restringe</b> e trattiene forte gli elettroni (alta elettronegatività)!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classify Elements: Metals vs. Non-Metals & Noble Gases', 'Classifica gli elementi: Metalli vs Non Metalli'],
      hint: [
        'Metals sit on the left/center and lose electrons; non-metals sit on the upper right and attract or keep electrons.',
        'I metalli stanno a sinistra/centro e cedono elettroni; i non metalli in alto a destra e attraggono o trattengono elettroni.'
      ],
      cats: [
        ['Metals (Left / Center)', 'Metalli (Sinistra / Centro)'],
        ['Non-Metals (Upper Right)', 'Non Metalli (Alto a Destra)']
      ],
      items: [
        { n: ['Sodium (Na · Group 1)', 'Sodio (Na · Gruppo 1)'], i: 'bolt', c: 0, why: ['Alkali metal that readily loses 1 electron to form Na⁺.', 'Metallo alcalino che cede facilmente 1 elettrone diventando Na⁺.'] },
        { n: ['Chlorine (Cl · Group 17)', 'Cloro (Cl · Gruppo 17)'], i: 'warn', c: 1, why: ['Reactive halogen non-metal with high electronegativity.', 'Alogeno non metallico ad alta elettronegatività.'] },
        { n: ['Iron (Fe · d-block)', 'Ferro (Fe · Blocco d)'], i: 'gear', c: 0, why: ['Transition metal conducting heat and electricity.', 'Metallo di transizione ottimo conduttore.'] },
        { n: ['Oxygen (O · Group 16)', 'Ossigeno (O · Gruppo 16)'], i: 'cloud', c: 1, why: ['Non-metal gas with electronegativity 3.44 (Pauling).', 'Non metallo gassoso ad elevata elettronegatività.'] },
        { n: ['Calcium (Ca · Group 2)', 'Calcio (Ca · Gruppo 2)'], i: 'layers', c: 0, why: ['Alkaline earth metal losing 2 electrons to form Ca²⁺.', 'Metallo alcalino-terroso che forma Ca²⁺.'] },
        { n: ['Neon (Ne · Group 18)', 'Neon (Ne · Gruppo 18)'], i: 'compass', c: 1, why: ['Noble gas non-metal with a full outer octet.', 'Gas nobile non metallico con ottetto completo.'] }
      ]
    },
    taunt: [
      '<p>Level 1 Boss Trial! Predict which atom is largest and which pulls electrons hardest across the entire table!</p>',
      '<p>Sfida Finale del Livello 1! Prevedi quale atomo ha raggio maggiore e quale attira più forte gli elettroni!</p>'
    ],
    quiz: [
      q(
        'How are elements ordered in the modern Periodic Table?',
        'In base a quale grandezza sono ordinati gli elementi nella Tavola Periodica moderna?',
        [
          ['By increasing atomic number Z', 'Per numero atomico Z crescente'],
          ['By alphabetical order of English names', 'In ordine alfabetico'],
          ['Strictly by decreasing atomic mass', 'Per massa atomica decrescente'],
          ['By melting point from coldest to hottest', 'Per punto di fusione crescente']
        ],
        [
          'Modern periodic law states that chemical properties repeat periodically when ordered by Z (proton number).',
          'La legge periodica moderna ordina gli elementi per numero atomico Z crescente (numero di protoni).'
        ]
      ),
      q(
        'Which element on the Periodic Table has the highest electronegativity?',
        'Quale elemento della Tavola Periodica possiede l’elettronegatività più alta?',
        [
          ['Fluorine (F)', 'Fluoro (F)'],
          ['Cesium (Cs)', 'Cesio (Cs)'],
          ['Sodium (Na)', 'Sodio (Na)'],
          ['Hydrogen (H)', 'Idrogeno (H)']
        ],
        [
          'Fluorine (top right, excluding noble gases) has the highest Pauling electronegativity (3.98).',
          'Il Fluoro (in alto a destra, esclusi i gas nobili) ha l’elettronegatività massima (3,98).'
        ]
      ),
      q(
        'What happens to atomic radius as you move from left to right across Period 2 (Li → F)?',
        'Come varia il raggio atomico spostandosi da sinistra a destra lungo il Periodo 2 (Li → F)?',
        [
          ['It decreases because higher nuclear charge pulls the same shell closer', 'Diminuisce perché l’aumento di carica nucleare attira più vicino lo stesso guscio'],
          ['It increases rapidly with each added proton', 'Aumenta rapidamente con ogni protone in più'],
          ['It remains strictly identical across the row', 'Rimane identico lungo tutto il periodo'],
          ['It doubles at Carbon and drops at Nitrogen', 'Raddoppia al Carbonio']
        ],
        [
          'Across a period electrons enter the same principal shell while nuclear Z increases, contracting the cloud.',
          'Lungo un periodo gli elettroni occupano lo stesso livello mentre aumenta Z, stringendo la nuvola elettronica.'
        ]
      ),
      q(
        'Why are Group 18 elements (Noble Gases: He, Ne, Ar) almost completely unreactive?',
        'Perché gli elementi del Gruppo 18 (Gas Nobili: He, Ne, Ar) sono quasi del tutto inerti?',
        [
          ['Their outermost s and p subshells are completely filled (stable octet/duplet)', 'Il loro livello più esterno s e p è già completo (ottetto stabile o duetto per He)'],
          ['They have zero protons in their nuclei', 'Non possiedono protoni nel nucleo'],
          ['They are all heavy radioactive metals', 'Sono tutti metalli pesanti radioattivi'],
          ['They exist only below −250 °C', 'Esistono solo sotto −250 °C']
        ],
        [
          'Having a full valence shell gives noble gases very high ionization energy and zero tendency to react.',
          'Il guscio di valenza completo conferisce altissima stabilità ed elevata energia di ionizzazione.'
        ]
      )
    ]
  })
];
