import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeChemMission, q } from './chemCommon';

export const CHEM_LEVEL2_UNIT: UnitInfo = {
  title: ['Level 2 · 2° Superiore (Bonding, Reactions & Solutions)', 'Livello 2 · 2° Superiore (Legami, Reazioni e Soluzioni)'],
  ch: 'L2.1–L2.3',
  subject: 'chem10'
};

export const CHEM_LEVEL2_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'chem10',
    title: ['Chemical Bonds & Molecular Geometry', 'Legami chimici e geometria molecolare'],
    pages: '129–178'
  },
  {
    n: 2,
    unit: 0,
    subject: 'chem10',
    title: ['Nomenclature & Balancing Equations', 'Nomenclatura e bilanciamento'],
    pages: '179–232'
  },
  {
    n: 3,
    unit: 0,
    subject: 'chem10',
    title: ['Stoichiometry & Solutions', 'Stechiometria e soluzioni'],
    pages: '233–286'
  }
];

export const CHEM_LEVEL2_MISSIONS: Mission[] = [
  // ========================================================================
  // ARC 4 (Unit 2 · Chapter 1): Chemical Bonds & Molecular Geometry
  // ========================================================================
  makeChemMission({
    id: 'chem_l2_m1',
    arc: 0,
    sec: 'L2.1',
    pages: '129–144',
    hue: 188,
    title: ['Octet Rule, Ionic & Metallic Bonds', 'Regola dell’ottetto, legame ionico e metallico'],
    topic: [
      'Valence electrons, octet stability, ionic crystal lattices, metallic electron sea',
      'Elettroni di valenza, stabilità dell’ottetto, reticoli ionici, modello a mare di elettroni nei metalli'
    ],
    demon: ['The Lattice Breaker', 'Il Frantuma-Reticoli'],
    tech: ['Bond Form · First Technique: Crystal Lattice Lock', 'Stile del Legame · Prima Tecnica: Reticolo Cristallino'],
    lessons: [
      {
        vis: 'chemBonds',
        text: [
          '<p>Atoms rarely float alone, {name}. Guided by Lewis’s <b>octet rule</b>, main-group atoms lose, gain, or share valence electrons to reach a noble-gas configuration of 8 outer electrons (2 for H and He).</p>',
          '<p>Gli atomi si legano per raggiungere la stabilità, {name}. Secondo la <b>regola dell’ottetto</b> di Lewis, tendono a cedere, acquistare o condividere elettroni di valenza fino a raggiungere 8 elettroni nel livello esterno (2 per H ed He).</p>'
        ]
      },
      {
        vis: 'chemBonds',
        text: [
          '<p>When a metal with low ionization energy meets a nonmetal with high electron affinity (electronegativity difference <b>Δχ &gt; 1.7</b>), electrons transfer completely: the metal becomes a positive <b>cation</b> (Na⁺) and the nonmetal a negative <b>anion</b> (Cl⁻). Oppositely charged ions pack into a rigid 3D <b>ionic lattice</b>—brittle, high-melting, and conductive only when molten or dissolved in water.</p>',
          '<p>Quando un metallo cede elettroni a un non metallo (differenza di elettronegatività <b>Δχ &gt; 1,7</b>), si formano un <b>catione</b> positivo (Na⁺) e un <b>anione</b> negativo (Cl⁻). L’attrazione elettrostatica costruisce un <b>reticolo cristallino ionico</b>: solido ad alto punto di fusione, fragile agli urti e conduttore solo allo stato fuso o in soluzione acquosa.</p>'
        ]
      },
      {
        vis: 'chemBonds',
        text: [
          '<p>Pure metals use a <b>metallic bond</b>: metal cations sit in an orderly grid floating in a mobile “sea” of electrons. Think of spheres sitting in thick glue—layers can slide without cracking, which makes metals bendable and great electrical conductors!</p>',
          '<p>Nei metalli agisce il <b>legame metallico</b>: i cationi positivi galleggiano in un “mare” mobile di elettroni condivisi. Come sfere immerse in un fluido elastico, gli strati possono scorrere senza spezzarsi: ecco perché i metalli conducono corrente e sono malleabili!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classify Ionic vs. Metallic Bond Properties', 'Classifica proprietà dei solidi ionici e metallici'],
      hint: [
        'Think about mobile electrons in metals vs. fixed ions in rigid crystal lattices.',
        'Confronta gli elettroni mobili nei metalli con gli ioni rigidi nel cristallo ionico.'
      ],
      cats: [
        ['Ionic Compound', 'Composto Ionico'],
        ['Metallic Solid', 'Solido Metallico']
      ],
      items: [
        { n: ['Conducts electricity even as a solid', 'Conduce elettricità già allo stato solido'], i: 'bolt', c: 1, why: ['Delocalized valence electrons move freely inside solid metals.', 'Nei metalli solidi gli elettroni delocalizzati si muovono liberamente.'] },
        { n: ['Shatters along planes when struck', 'Si frantuma con un colpo di martello'], i: 'warn', c: 0, why: ['Shifting crystal layers puts like charges (+/+ or −/−) face to face.', 'Lo slittamento mette a contatto ioni dello stesso segno che si respingono.'] },
        { n: ['Conducts only when molten or dissolved', 'Conduce solo fuso o sciolto in acqua'], i: 'flow', c: 0, why: ['Ions must become free to migrate in a liquid or aqueous phase.', 'Gli ioni possono muoversi solo dopo fusione o dissoluzione in acqua.'] },
        { n: ['Malleable and drawn into wires', 'Malleabile e riducibile in fili sottili'], i: 'layers', c: 1, why: ['The electron sea cushions cation planes as they slide.', 'Il mare di elettroni mantiene coeso il reticolo durante la deformazione.'] },
        { n: ['Formed between metal and nonmetal (Δχ > 1.7)', 'Formato tra metallo e non metallo (Δχ > 1,7)'], i: 'shield', c: 0, why: ['Complete electron transfer builds cations and anions.', 'Il trasferimento netto di elettroni genera ioni di carica opposta.'] },
        { n: ['Delocalized “sea of electrons” model', 'Modello a “mare di elettroni” delocalizzati'], i: 'globe', c: 1, why: ['Metallic bonding shares valence electrons across the whole crystal.', 'Nel legame metallico gli elettroni di valenza appartengono all’intero cristallo.'] }
      ]
    },
    taunt: [
      '<p>I am the Lattice Breaker! Strike a salt crystal or bend a copper bar—every bond yields the same way to me!</p>',
      '<p>Sono il Frantuma-Reticoli! Colpisci un cristallo di sale o piega una sbarra di rame: per me ogni legame cede allo stesso modo!</p>'
    ],
    quiz: [
      q(
        'Why do ionic solids like NaCl fracture sharply when hit with a hammer instead of bending?',
        'Perché i solidi ionici come NaCl si spezzano sotto un urto anziché deformarsi come i metalli?',
        [
          ['Shifting ion layers aligns identical charges that strongly repel each other', 'Lo scorrimento dei piani allinea cariche dello stesso segno che si respingono'],
          ['Ionic compounds contain no electrons in the solid state', 'I composti ionici non possiedono elettroni allo stato solido'],
          ['Covalent pairs snap permanently upon mechanical pressure', 'Le coppie covalenti si spezzano definitivamente per la pressione'],
          ['Metal cations evaporate when struck by mechanical force', 'I cationi metallici evaporano per effetto dell’urto meccanico']
        ],
        [
          'Displacing one row by half a unit puts + next to + and − next to −, cleaving the crystal.',
          'Lo slittamento di un piano mette vicini ioni di segno uguale (+/+ e −/−), causando repulsione e rottura.'
        ]
      ),
      q(
        'In which state does table salt (NaCl) conduct an electric current?',
        'In quale stato il cloruro di sodio (NaCl) conduce la corrente elettrica?',
        [
          ['Only when molten (liquid) or dissolved in water', 'Solo allo stato fuso o in soluzione acquosa'],
          ['At room temperature as a dry solid crystal', 'A temperatura ambiente come cristallo solido secco'],
          ['Never, under any temperature or phase', 'Mai, in nessuna fase o temperatura'],
          ['Only when cooled below 0 °C', 'Solo quando viene raffreddato sotto 0 °C']
        ],
        [
          'Electrical conduction requires mobile charge carriers—ions are locked in place in a dry crystal.',
          'Nel solido gli ioni sono bloccati nel reticolo; fusi o in acqua diventano mobili e trasportano carica.'
        ]
      ),
      q(
        'Which physical property is directly explained by the “sea of delocalized electrons” in metals?',
        'Quale proprietà dei metalli è spiegata direttamente dal modello a “mare di elettroni”?',
        [
          ['High electrical and thermal conductivity together with malleability', 'Elevata conducibilità elettrica e termica unita alla malleabilità'],
          ['Directional covalent bond angles strictly fixed at 109.5°', 'Angoli di legame covalente rigidi fissati esattamente a 109,5°'],
          ['Formation of discrete neutral diatomic molecules in the crystal', 'Formazione di singole molecole biatomiche neutre nel cristallo'],
          ['Total insolubility in molten mixtures due to ionic repulsion', 'Completa immiscibilità allo stato fuso per repulsione ionica']
        ],
        [
          'Mobile electrons carry electric current and heat while holding sliding metal cations together.',
          'Gli elettroni mobili trasportano corrente e calore e mantengono coesi i piani cationici durante la laminazione.'
        ]
      ),
      q(
        'How many valence electrons does a Calcium atom (Group 2) lose to reach an octet, and what ion forms?',
        'Quanti elettroni di valenza cede un atomo di Calcio (Gruppo 2) per completare l’ottetto e quale ione forma?',
        [
          ['Loses 2 electrons to form Ca²⁺', 'Cede 2 elettroni formando Ca²⁺'],
          ['Gains 2 electrons to form Ca²⁻', 'Acquista 2 elettroni formando Ca²⁻'],
          ['Loses 1 electron to form Ca⁺', 'Cede 1 elettrone formando Ca⁺'],
          ['Shares 6 electrons to form Ca⁶⁻', 'Condivide 6 elettroni formando Ca⁶⁻']
        ],
        [
          'Group 2 alkaline earth metals have 2 valence electrons and lose both to expose a full inner shell (Ca²⁺).',
          'I metalli alcalino-terrosi del Gruppo 2 hanno 2 elettroni di valenza e li cedono formando il catione Ca²⁺.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l2_m2',
    arc: 0,
    sec: 'L2.2',
    pages: '145–160',
    hue: 196,
    title: ['Covalent Bonds & Electronegativity (Δχ)', 'Legame covalente e polarità (Δχ)'],
    topic: [
      'Nonpolar, polar, and coordinate covalent bonds; single, double, triple bonds; Pauling Δχ scale',
      'Legame covalente puro, polare e dativo; legami singoli, doppi e tripli; scala Δχ di Pauling'
    ],
    demon: ['The Dipole Thief', 'Il Ladro di Dipoli'],
    tech: ['Bond Form · Second Technique: Shared Pair Surge', 'Stile del Legame · Seconda Tecnica: Coppia Condivisa'],
    lessons: [
      {
        vis: 'chemBonds',
        text: [
          '<p>When two nonmetals bond, neither gives up electrons completely—instead they <b>share</b> pairs of valence electrons in a <b>covalent bond</b>. Atoms can share one pair (single bond, Cl–Cl), two pairs (double bond, O=O), or three pairs (triple bond, N≡N).</p>',
          '<p>Tra due atomi di non metallo gli elettroni non vengono ceduti ma <b>condivisi</b> in un <b>legame covalente</b>. Possono condividere una coppia (legame singolo, Cl–Cl), due coppie (doppio, O=O) o tre coppie (triplo, N≡N).</p>'
        ]
      },
      {
        vis: 'chemPolarityTug',
        text: [
          '<p><b>Tug-of-war rule (Δχ):</b> if Δχ &lt; 0.4 it’s a fair tie (<b>nonpolar covalent</b>); between <b>0.4 and 1.7</b> one atom hogs electrons creating partial charges <b>δ⁺ / δ⁻</b> (<b>polar covalent</b>). Above 1.7, one steals the electron completely (<b>ionic</b>)!</p>',
          '<p><b>Tiro alla fune (Δχ):</b> se Δχ &lt; 0,4 è pareggio (<b>covalente puro</b>); tra <b>0,4 e 1,7</b> un atomo tira di più creando cariche parziali <b>δ⁺ / δ⁻</b> (<b>covalente polare</b>). Oltre 1,7 l’elettrone viene strappato del tutto (<b>ionico</b>)!</p>'
        ]
      },
      {
        vis: 'chemPolarityTug',
        text: [
          '<p>In a <b>coordinate (dative) covalent bond</b>, one generous atom brings BOTH electrons to the shared pair while the partner brings an empty seat—classic examples are <b>NH₄⁺</b> and <b>H₃O⁺</b>.</p>',
          '<p>Nel <b>legame covalente dativo</b> un solo atomo porta ENTRAMBI gli elettroni della coppia verso un partner con orbitale vuoto: avviene ad esempio in <b>NH₄⁺</b> e <b>H₃O⁺</b>.</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Dipole Thief! Whether two atoms pull equally or steal charge with Δχ = 1.8, all bonds behave identically!</p>',
      '<p>Sono il Ladro di Dipoli! Che due atomi tirino alla pari o con Δχ = 1,8, per me tutti i legami si comportano uguale!</p>'
    ],
    quiz: [
      q(
        'Using Pauling values χ(H) = 2.2 and χ(O) = 3.4, how is the O–H bond classified?',
        'Con i valori di Pauling χ(H) = 2,2 e χ(O) = 3,4, come si classifica il legame O–H?',
        [
          ['Polar covalent bond (Δχ = 1.2, oxygen carries δ⁻)', 'Legame covalente polare (Δχ = 1,2, ossigeno δ⁻)'],
          ['Pure nonpolar covalent bond (Δχ = 1.2 < 1.7)', 'Legame covalente puro apolare (Δχ = 1,2 < 1,7)'],
          ['Ionic bond because oxygen is a nonmetal', 'Legame ionico perché l’ossigeno è un non metallo'],
          ['Metallic bond with delocalized protons', 'Legame metallico con protoni delocalizzati']
        ],
        [
          'Δχ = |3.4 − 2.2| = 1.2 lies squarely in 0.4–1.7, making O–H polar covalent with δ⁻ on O.',
          'Δχ = |3,4 − 2,2| = 1,2 cade tra 0,4 e 1,7: è un legame covalente polare con δ⁻ sull’ossigeno.'
        ]
      ),
      q(
        'How many pairs of electrons are shared between the two nitrogen atoms in an N₂ molecule?',
        'Quante coppie di elettroni sono condivise tra i due atomi di azoto nella molecola N₂?',
        [
          ['Three pairs (a triple covalent bond, N≡N)', 'Tre coppie (legame covalente triplo, N≡N)'],
          ['Two pairs (a double covalent bond, N=N)', 'Due coppie (legame covalente doppio, N=N)'],
          ['One pair (a single covalent bond, N–N)', 'Una coppia (legame covalente singolo, N–N)'],
          ['Zero shared pairs (ionic N⁺N⁻ transfer)', 'Zero coppie condivise (trasferimento ionico N⁺N⁻)']
        ],
        [
          'Each N has 5 valence electrons and needs 3 more, so the two atoms share 3 pairs to complete both octets.',
          'Ogni atomo di azoto ha 5 elettroni di valenza e condivide 3 coppie formando N≡N per completare l’ottetto.'
        ]
      ),
      q(
        'What distinguishes a coordinate (dative) covalent bond from an ordinary covalent bond?',
        'Che cosa distingue un legame covalente dativo da un legame covalente ordinario?',
        [
          ['Both shared electrons are supplied by only one of the two bonded atoms', 'Entrambi gli elettroni condivisi sono forniti da uno solo dei due atomi'],
          ['Four electrons are transferred permanently from a metal to a halogen', 'Quattro elettroni vengono ceduti stabilmente da un metallo a un alogeno'],
          ['It occurs only between identical atoms like Cl₂ or H₂', 'Si forma esclusivamente tra atomi identici come Cl₂ o H₂'],
          ['Shared electrons repel protons out of the valence shell', 'Gli elettroni condivisi espellono i protoni dal guscio di valenza']
        ],
        [
          'Once formed, a dative bond behaves identically to a normal single covalent bond, though both electrons came from the donor.',
          'Nel legame dativo il donatore fornisce l’intera coppia solitaria all’accettore (come in NH₃ + H⁺ → NH₄⁺).'
        ]
      ),
      q(
        'Which pair of elements forms an ionic bond according to Δχ > 1.7 (χ(Na)=0.9, χ(Cl)=3.2, χ(C)=2.5, χ(H)=2.2)?',
        'Quale coppia forma un legame ionico secondo Δχ > 1,7 (χ(Na)=0,9, χ(Cl)=3,2, χ(C)=2,5, χ(H)=2,2)?',
        [
          ['Na and Cl (Δχ = 2.3)', 'Na e Cl (Δχ = 2,3)'],
          ['C and H (Δχ = 0.3)', 'C e H (Δχ = 0,3)'],
          ['Cl and Cl (Δχ = 0.0)', 'Cl e Cl (Δχ = 0,0)'],
          ['C and Cl (Δχ = 0.7)', 'C e Cl (Δχ = 0,7)']
        ],
        [
          '|3.2 − 0.9| = 2.3 > 1.7 indicates ionic bonding in sodium chloride.',
          '|3,2 − 0,9| = 2,3 > 1,7 indica un legame ionico nel cloruro di sodio.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l2_m3',
    arc: 0,
    sec: 'L2.3',
    pages: '161–178',
    hue: 205,
    title: ['VSEPR Geometry & Intermolecular Forces', 'Geometria VSEPR e forze intermolecolari'],
    topic: [
      'Molecular shapes & angles; molecular polarity vs bond polarity; dispersion, dipole-dipole, H-bonds',
      'Forme molecolari e angoli; polarità molecolare; forze di London, dipolo-dipolo e legame a idrogeno'
    ],
    demon: ['The Bent Vector', 'Il Vettore Piegato'],
    tech: ['Bond Form · Third Technique: Tetrahedral Symmetry', 'Stile del Legame · Terza Tecnica: Simmetria Tetraedrica'],
    lessons: [
      {
        vis: 'chemVSEPR',
        text: [
          '<p>Molecules are 3D structures, {name}. Under <b>VSEPR theory</b>, electron domains (bonding pairs and lone pairs) around a central atom repel one another to maximize separation: 2 pairs give <b>linear</b> (180°, BeCl₂, CO₂), 3 pairs give <b>trigonal planar</b> (120°, BF₃), and 4 pairs give <b>tetrahedral</b> (109.5°, CH₄).</p>',
          '<p>Le molecole hanno forma tridimensionale, {name}. Per la <b>teoria VSEPR</b>, le coppie di elettroni attorno all’atomo centrale si respingono alla massima distanza: 2 coppie → <b>lineare</b> (180°, CO₂), 3 coppie → <b>trigonale planare</b> (120°, BF₃), 4 coppie → <b>tetraedrica</b> (109,5°, CH₄).</p>'
        ]
      },
      {
        vis: 'chemVSEPR',
        text: [
          '<p>Lone pairs push harder than bonding pairs, squeezing angles slightly: ammonia <b>NH₃</b> (3 bond + 1 lone) is <b>trigonal pyramidal</b> (~107°), and water <b>H₂O</b> (2 bond + 2 lone) is <b>bent</b> (~104.5°). Crucial insight: symmetric shapes like linear CO₂ cancel opposing bond dipoles (<b>nonpolar molecule</b>), whereas bent H₂O sums them into a strong net dipole!</p>',
          '<p>Le coppie solitarie respingono più forte di quelle di legame: l’ammoniaca <b>NH₃</b> (3+1) è <b>piramidale trigonale</b> (~107°) e l’acqua <b>H₂O</b> (2+2) è <b>angolare/piegata</b> (~104,5°). Nota chiave: in CO₂ lineare i due dipoli opposti si annullano (molecola <b>apolare</b>), mentre in H₂O piegata si sommano rendendo l’acqua molto polare!</p>'
        ]
      },
      {
        vis: 'chemVSEPR',
        text: [
          '<p>Between separate molecules act invisible attractions: weak <b>London forces</b> (everywhere), <b>dipole-dipole</b> attractions, and super-strong <b>hydrogen bonds</b> whenever H sticks to <b>F, O, or N</b>—that is why water is liquid at room temperature instead of a gas!</p>',
          '<p>Tra molecole vicine agiscono le attrazioni intermolecolari: deboli <b>forze di London</b>, forze <b>dipolo-dipolo</b> e il fortissimo <b>legame a idrogeno</b> quando H è unito a <b>F, O o N</b> (ecco perché l’acqua bolle a 100 °C anziché essere un gas!).</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Bent Vector! CO₂ and H₂O both have three atoms and polar bonds, so both must be straight and nonpolar!</p>',
      '<p>Sono il Vettore Piegato! CO₂ e H₂O hanno entrambe tre atomi e legami polari, quindi devono essere entrambe lineari e apolari!</p>'
    ],
    quiz: [
      q(
        'Why is carbon dioxide (CO₂) an overall nonpolar molecule even though each C=O bond is polar?',
        'Perché la molecola di CO₂ è complessivamente apolare pur avendo due legami C=O polari?',
        [
          ['Its linear 180° geometry causes the two equal C=O dipoles to point in opposite directions and cancel', 'La geometria lineare a 180° fa sì che i due dipoli uguali e opposti si annullino'],
          ['Carbon and oxygen have identical electronegativity values (Δχ = 0)', 'Carbonio e ossigeno hanno esattamente la stessa elettronegatività (Δχ = 0)'],
          ['Carbon holds two lone pairs that absorb all negative charge', 'Il carbonio possiede due coppie solitarie che assorbono la carica'],
          ['Double bonds never create partial charges δ⁺ or δ⁻', 'I legami doppi non generano mai cariche parziali δ⁺ o δ⁻']
        ],
        [
          'Molecular polarity equals the vector sum of bond dipoles: in symmetric linear O=C=O, the net dipole is zero.',
          'La polarità totale è la somma vettoriale dei dipoli di legame: nella geometria lineare O=C=O i due vettori si annullano.'
        ]
      ),
      q(
        'What is the VSEPR molecular geometry and approximate bond angle of water (H₂O)?',
        'Quali sono la geometria molecolare VSEPR e l’angolo di legame approssimativo dell’acqua (H₂O)?',
        [
          ['Bent (angular), approximately 104.5° due to two lone pairs on oxygen', 'Piegata (angolare), circa 104,5° a causa di due coppie solitarie su O'],
          ['Linear, exactly 180° with no lone pairs on oxygen', 'Lineare, esattamente 180° senza coppie solitarie su O'],
          ['Trigonal planar, 120°', 'Trigonale planare, 120°'],
          ['Tetrahedral, 109.5° with four H atoms bonded to O', 'Tetraedrica, 109,5° con quattro atomi H legati a O']
        ],
        [
          'Oxygen has 2 bonding pairs + 2 lone pairs (4 domains); lone-pair repulsion compresses the H–O–H angle from 109.5° down to 104.5°.',
          'L’ossigeno ha 2 coppie di legame e 2 solitarie: la forte repulsione comprime l’angolo da 109,5° a circa 104,5°.'
        ]
      ),
      q(
        'Which compound can form strong hydrogen bonds between its own pure molecules?',
        'Quale composto forma intensi legami a idrogeno tra le proprie molecole allo stato puro?',
        [
          ['HF (hydrogen attached directly to fluorine)', 'HF (idrogeno legato direttamente al fluoro)'],
          ['CH₄ (methane, nonpolar C–H bonds)', 'CH₄ (metano, legami C–H apolari)'],
          ['HCl (hydrogen attached to chlorine)', 'HCl (idrogeno legato al cloro)'],
          ['CO₂ (carbon dioxide)', 'CO₂ (diossido di carbonio)']
        ],
        [
          'Hydrogen bonding requires H covalently bonded directly to F, O, or N (small, strongly electronegative atoms).',
          'Il legame a idrogeno si instaura quando H è legato covalentemente a F, O oppure N.'
        ]
      ),
      q(
        'Predict the shape and bond angle around boron in BF₃ (3 bonding pairs, 0 lone pairs).',
        'Prevedi la geometria e l’angolo di legame attorno al boro in BF₃ (3 coppie di legame, 0 solitarie).',
        [
          ['Trigonal planar, 120°', 'Trigonale planare, 120°'],
          ['Trigonal pyramidal, ~107°', 'Piramidale trigonale, ~107°'],
          ['Linear, 180°', 'Lineare, 180°'],
          ['Tetrahedral, 109.5°', 'Tetraedrica, 109,5°']
        ],
        [
          'Three electron domains with no lone pairs arrange in a flat equilateral triangle at 120°.',
          'Tre coppie di legame senza coppie solitarie si dispongono sullo stesso piano a 120°.'
        ]
      )
    ]
  }),

  // ========================================================================
  // ARC 5 (Unit 2 · Chapter 2): Nomenclature & Balancing Equations
  // ========================================================================
  makeChemMission({
    id: 'chem_l2_m4',
    arc: 1,
    sec: 'L2.4',
    pages: '179–196',
    hue: 38,
    title: ['Oxidation Numbers & Binary Compounds', 'Numeri di ossidazione e composti binari'],
    topic: [
      'Rules for oxidation numbers; IUPAC & traditional names for oxides, anhydrides, hydrides, and binary salts',
      'Regole per il numero di ossidazione; nomenclatura IUPAC e tradizionale di ossidi, anidridi, idruri, idracidi e sali binari'
    ],
    demon: ['The Formula Scrambler', 'Lo Scompaginatore di Formule'],
    tech: ['Nomenclature Form · First Technique: Oxidation Balance', 'Stile della Nomenclatura · Prima Tecnica: Bilancio di Ossidazione'],
    lessons: [
      {
        vis: 'chemNomenclature',
        text: [
          '<p>Before naming compounds, master the <b>oxidation number (O.N.)</b>, {name}. Key rules: free elements = <b>0</b> (O₂, Fe); Group 1 metals = <b>+1</b>, Group 2 = <b>+2</b>; fluorine = always <b>−1</b>; oxygen = <b>−2</b> (except peroxides like H₂O₂, −1); hydrogen = <b>+1</b> with nonmetals (−1 in metal hydrides like NaH). The sum of all O.N. in a neutral formula is always <b>0</b>.</p>',
          '<p>Prima di dare il nome ai composti serve il <b>numero di ossidazione (N.O.)</b>, {name}. Regole d’oro: elementi liberi = <b>0</b>; Gruppo 1 = <b>+1</b>, Gruppo 2 = <b>+2</b>; fluoro = sempre <b>−1</b>; ossigeno = <b>−2</b> (tranne nei perossidi come H₂O₂, −1); idrogeno = <b>+1</b> con i non metalli (−1 negli idruri metallici). In una molecola neutra la somma dei N.O. è sempre <b>0</b>.</p>'
        ]
      },
      {
        vis: 'chemNomenclature',
        text: [
          '<p><b>Binary compounds</b> contain two elements: <b>Metal + O → basic oxide</b> (CaO calcium oxide; FeO ferrous oxide / iron(II) oxide, Fe₂O₃ ferric oxide / iron(III) oxide). <b>Nonmetal + O → acidic oxide (anidride in Italian traditional naming)</b>, e.g., CO₂ carbon dioxide / anidride carbonica, SO₃ sulfur trioxide / anidride solforica.</p>',
          '<p>I <b>composti binari</b> hanno due elementi: <b>Metallo + O → ossido basico</b> (CaO ossido di calcio; FeO ossido ferroso / di ferro(II), Fe₂O₃ ossido ferrico / di ferro(III)). <b>Non metallo + O → ossido acido (anidride)</b>, es. CO₂ diossido di carbonio / anidride carbonica, SO₃ triossido di zolfo / anidride solforica.</p>'
        ]
      },
      {
        vis: 'chemCrissCross',
        text: [
          '<p><b>Criss-cross shortcut:</b> to write formulas fast (like Fe³⁺ + O²⁻ → Fe₂O₃), swap the two charge numbers down into subscripts! Meanwhile, <b>binary salts</b> end in <b>-ide / -uro</b> (NaCl = chloride / cloruro) and <b>idracidi</b> end in <b>-idrico</b> in Italian.</p>',
          '<p><b>Trucco dell’incrocio:</b> per scrivere le formule al volo (Fe³⁺ + O²⁻ → Fe₂O₃), scambia le cariche in basso! I <b>sali binari</b> finiscono in <b>-uro</b> (NaCl cloruro di sodio), mentre gli <b>idracidi</b> in acqua finiscono in <b>-idrico</b> (HCl acido cloridrico).</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classify Binary Compound Families', 'Classifica le famiglie dei composti binari'],
      hint: [
        'Compare oxygen-containing binary compounds (oxides & anhydrides) with oxygen-free binary salts & hydrides.',
        'Distingui i composti binari con ossigeno (ossidi e anidridi) da sali binari e idruri (senza ossigeno).'
      ],
      cats: [
        ['Oxide / Anhydride (contains O)', 'Ossido / Anidride (con O)'],
        ['Binary Salt / Hydride (no O)', 'Sale Binario / Idruro (senza O)']
      ],
      items: [
        { n: ['MgO (Magnesium oxide)', 'MgO (Ossido di magnesio)'], i: 'shield', c: 0, why: ['Magnesium (metal) combined with oxygen forms a basic oxide.', 'Magnesio (metallo) legato all’ossigeno forma un ossido basico.'] },
        { n: ['SO₂ (Sulfur dioxide / Anidride solforosa)', 'SO₂ (Anidride solforosa)'], i: 'cloud', c: 0, why: ['Sulfur (nonmetal) combined with oxygen forms an acidic oxide (anidride).', 'Zolfo (non metallo) legato all’ossigeno forma un’anidride.'] },
        { n: ['CaCl₂ (Calcium chloride)', 'CaCl₂ (Cloruro di calcio)'], i: 'key', c: 1, why: ['Calcium (metal) + Chlorine (nonmetal), oxygen-free binary salt.', 'Calcio (metallo) + Cloro (non metallo): sale binario senza ossigeno.'] },
        { n: ['N₂O₅ (Dinitrogen pentoxide / Anidride nitrica)', 'N₂O₅ (Anidride nitrica)'], i: 'bolt', c: 0, why: ['Nitrogen (nonmetal) combined with oxygen forms an acidic oxide.', 'Azoto (non metallo) combinato con ossigeno: anidride nitrica.'] },
        { n: ['NaH (Sodium hydride)', 'NaH (Idruro di sodio)'], i: 'layers', c: 1, why: ['Metal + Hydrogen (−1) forms an ionic binary hydride.', 'Metallo + Idrogeno (−1): idruro ionico binario senza ossigeno.'] },
        { n: ['CuS (Copper(II) sulfide / Solfuro rameico)', 'CuS (Solfuro rameico)'], i: 'compass', c: 1, why: ['Copper (metal) + Sulfur (nonmetal) forms a binary sulfide salt.', 'Rame (metallo) + Zolfo (non metallo): sale binario (-uro).'] }
      ]
    },
    taunt: [
      '<p>I am the Formula Scrambler! Swap -ous and -ic, guess oxidation states blindly, and every compound turns to gibberish!</p>',
      '<p>Sono lo Scompaginatore di Formule! Scambia -oso e -ico, tira a indovinare il N.O. e nessuna formula tornerà!</p>'
    ],
    quiz: [
      q(
        'What is the oxidation number of Sulfur (S) in sulfur trioxide, SO₃?',
        'Qual è il numero di ossidazione dello Zolfo (S) nell’anidride solforica SO₃?',
        [
          ['+6', '+6'],
          ['+4', '+4'],
          ['−2', '−2'],
          ['+3', '+3']
        ],
        [
          'Three O atoms give 3 × (−2) = −6, so S must be +6 for the neutral molecule to sum to 0.',
          'Tre atomi di O valgono 3 × (−2) = −6; perché la somma sia 0, lo zolfo vale +6.'
        ]
      ),
      q(
        'Which IUPAC and traditional names both correctly identify FeCl₃?',
        'Quali nomi IUPAC e tradizionale identificano correttamente il sale FeCl₃?',
        [
          ['Iron(III) chloride / Ferric chloride (Tricloruro di ferro / Cloruro ferrico)', 'Tricloruro di ferro (IUPAC) / Cloruro ferrico (trad.)'],
          ['Iron(II) chloride / Ferrous chloride (Dicloruro di ferro / Cloruro ferroso)', 'Dicloruro di ferro / Cloruro ferroso'],
          ['Iron chlorate / Clorato di ferro', 'Clorato di ferro / Triossoclorato di ferro'],
          ['Ferric oxide / Ossido ferrico', 'Ossido ferrico / Triossido di diferro']
        ],
        [
          'With 3 Cl⁻ ions (−1 each), Fe has oxidation state +3 (higher of +2/+3 → -ic / -ico).',
          'Con 3 Cl⁻ (−1 ciascuno), il ferro ha N.O. +3 (il maggiore tra +2 e +3 → ferrico).'
        ]
      ),
      q(
        'What is the chemical formula of Calcium oxide (Calcium is Group 2, +2; Oxygen is −2)?',
        'Qual è la formula chimica dell’ossido di calcio (Ca = +2, O = −2)?',
        [
          ['CaO', 'CaO'],
          ['Ca₂O', 'Ca₂O'],
          ['CaO₂', 'CaO₂'],
          ['Ca₂O₃', 'Ca₂O₃']
        ],
        [
          '+2 and −2 balance directly in a 1:1 ratio, giving CaO.',
          '+2 e −2 si compensano in rapporto 1:1 dando CaO.'
        ]
      ),
      q(
        'What is the oxidation number of Hydrogen in sodium hydride, NaH?',
        'Qual è il numero di ossidazione dell’Idrogeno nell’idruro di sodio, NaH?',
        [
          ['−1 (metal hydride)', '−1 (idruro metallico)'],
          ['+1', '+1'],
          ['0', '0'],
          ['−2', '−2']
        ],
        [
          'Sodium (Group 1) is always +1, so H must be −1 because H is more electronegative than metals.',
          'Il sodio (Gruppo 1) è sempre +1, quindi H più elettronegativo assume N.O. −1.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l2_m5',
    arc: 1,
    sec: 'L2.5',
    pages: '197–214',
    hue: 46,
    title: ['Ternary Compounds: Hydroxides, Oxyacids & Salts', 'Idrossidi, ossiacidi e sali ternari'],
    topic: [
      'Bases M(OH)ₙ, oxyacids HₐXOᵦ, traditional prefixes/suffixes (ipo/-oso/-ico/per), and ternary salts (-ito/-ato)',
      'Idrossidi M(OH)ₙ, ossiacidi HₐXOᵦ, suffissi tradizionali (ipo/-oso/-ico/per) e sali ternari (-ito/-ato)'
    ],
    demon: ['The Acid Alchemist', 'L’Alchimista degli Acidi'],
    tech: ['Nomenclature Form · Second Technique: Salt Conversion Seal', 'Stile della Nomenclatura · Seconda Tecnica: Sigillo dei Sali'],
    lessons: [
      {
        vis: 'chemNomenclature',
        text: [
          '<p>Add water to a binary oxide and ternary compounds appear, {name}! <b>Basic oxide + H₂O → Hydroxide</b> (a base containing OH⁻ ions): CaO + H₂O → <b>Ca(OH)₂</b> (calcium hydroxide / idrossido di calcio). Count the metal’s oxidation state directly from the number of OH⁻ groups: Fe(OH)₂ is iron(II) hydroxide, Fe(OH)₃ is iron(III) hydroxide.</p>',
          '<p>Aggiungendo acqua agli ossidi si formano i composti ternari, {name}! <b>Ossido basico + H₂O → Idrossido</b> (con gruppi OH⁻): CaO + H₂O → <b>Ca(OH)₂</b> (idrossido di calcio). Il numero di gruppi OH⁻ rivela subito il N.O. del metallo: Fe(OH)₂ è idrossido ferroso, Fe(OH)₃ è idrossido ferrico.</p>'
        ]
      },
      {
        vis: 'chemNomenclature',
        text: [
          '<p><b>Acidic oxide + H₂O → Oxyacid (HₐXOᵦ)</b>. When the central nonmetal has two common oxidation states (N +3/+5, S +4/+6), use <b>-ous / -oso</b> for the lower (HNO₂ nitrous acid / acido nitroso, H₂SO₃ sulfurous acid) and <b>-ic / -ico</b> for the higher (HNO₃ nitric acid / acido nitrico, H₂SO₄ sulfuric acid). Halogens with four states (+1, +3, +5, +7) use <b>hypo-...-ous (ipo-...-oso)</b>, <b>-ous (-oso)</b>, <b>-ic (-ico)</b>, and <b>per-...-ic (per-...-ico)</b> (HClO → HClO₄).</p>',
          '<p><b>Anidride + H₂O → Ossiacido (HₐXOᵦ)</b>. Con due numeri di ossidazione (es. N +3/+5, S +4/+6) si usa <b>-oso</b> per il minore (HNO₂ acido nitroso, H₂SO₃ solforoso) e <b>-ico</b> per il maggiore (HNO₃ acido nitrico, H₂SO₄ solforico). Con quattro N.O. (+1, +3, +5, +7 come il cloro) si usano in ordine: <b>ipo-...-oso</b>, <b>-oso</b>, <b>-ico</b> e <b>per-...-ico</b> (HClO → HClO₄).</p>'
        ]
      },
      {
        vis: 'chemSaltFamily',
        text: [
          '<p>Replace acidic H⁺ ions of an oxyacid with a metal to make a <b>ternary salt</b>! Easy suffix rhyme: <b>-oso becomes -ito</b> (HNO₂ → NaNO₂ nitrite / nitrito) and <b>-ico becomes -ato</b> (H₂SO₄ → CaSO₄ sulfate / solfato).</p>',
          '<p>Sostituendo l’H di un ossiacido con un metallo nasce un <b>sale ternario</b>! Filastrocca facile: dall’acido <b>-oso nasce -ito</b> (HNO₂ → NaNO₂ nitrito) e dall’acido <b>-ico nasce -ato</b> (H₂SO₄ → CaSO₄ solfato)!</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Acid Alchemist! Nitrite, nitrate, sulfite, sulfate—nobody can track oxygen counts and suffixes!</p>',
      '<p>Sono l’Alchimista degli Acidi! Nitrito, nitrato, solfito, solfato: nessuno ricorda quanti ossigeni servono!</p>'
    ],
    quiz: [
      q(
        'What is the oxidation number of Nitrogen in nitric acid (HNO₃), and what salt anion does it form?',
        'Qual è il numero di ossidazione dell’Azoto in HNO₃ e quale anione salino genera?',
        [
          ['+5; forms nitrate ions (NO₃⁻)', '+5; forma lo ione nitrato (NO₃⁻)'],
          ['+3; forms nitrite ions (NO₂⁻)', '+3; forma lo ione nitrito (NO₂⁻)'],
          ['+5; forms nitrite ions (NO₂⁻)', '+5; forma lo ione nitrito (NO₂⁻)'],
          ['−3; forms nitride ions (N³⁻)', '−3; forma lo ione nitruro (N³⁻)']
        ],
        [
          'H(+1) + N + 3·O(−2) = 0 → N = +5. Acids in -ico/-ic yield salts ending in -ato/-ate (nitrate).',
          'H(+1) + N + 3·(−2) = 0 → N = +5 (N.O. maggiore: acido nitrico). Da -ico si ottiene il sale in -ato (nitrato).'
        ]
      ),
      q(
        'How is Ca(NO₂)₂ correctly named in traditional / Stock nomenclature?',
        'Qual è il nome corretto del sale ternario Ca(NO₂)₂?',
        [
          ['Calcium nitrite (Nitrito di calcio)', 'Nitrito di calcio'],
          ['Calcium nitrate (Nitrato di calcio)', 'Nitrato di calcio'],
          ['Calcium nitride (Nitruro di calcio)', 'Nitruro di calcio'],
          ['Calcium hydroxide (Idrossido di calcio)', 'Idrossido di calcio']
        ],
        [
          'NO₂⁻ comes from nitrous acid HNO₂ (N = +3, -oso), so -oso becomes -ito → nitrite.',
          'Lo ione NO₂⁻ deriva dall’acido nitroso HNO₂ (N = +3, -oso), quindi il sale termina in -ito: nitrito di calcio.'
        ]
      ),
      q(
        'Which series correctly lists the chlorine oxyacids from lowest (+1) to highest (+7) chlorine oxidation state?',
        'Quale sequenza ordina gli ossiacidi del cloro dal N.O. più basso (+1) al più alto (+7)?',
        [
          ['HClO (hypochlorous) → HClO₂ (chlorous) → HClO₃ (chloric) → HClO₄ (perchloric)', 'HClO (ipocloroso) → HClO₂ (cloroso) → HClO₃ (clorico) → HClO₄ (perclorico)'],
          ['HClO₄ → HClO₃ → HClO₂ → HClO', 'HClO₄ (ipocloroso) → HClO₃ (cloroso) → HClO₂ (clorico) → HClO (perclorico)'],
          ['HCl → HClO → HClO₂ → HClO₃', 'HCl (ipocloroso) → HClO → HClO₂ → HClO₃'],
          ['HClO₂ → HClO → HClO₄ → HClO₃', 'HClO₂ → HClO → HClO₄ → HClO₃']
        ],
        [
          'As O count rises from 1 to 4, Cl oxidation state goes +1, +3, +5, +7 following ipo-...-oso, -oso, -ico, per-...-ico.',
          'Al crescere degli ossigeni da 1 a 4, il N.O. del cloro sale a +1, +3, +5, +7: ipo-...-oso, -oso, -ico, per-...-ico.'
        ]
      ),
      q(
        'Which formula represents iron(III) hydroxide (ferric hydroxide)?',
        'Quale formula rappresenta l’idrossido ferrico (idrossido di ferro(III))?',
        [
          ['Fe(OH)₃', 'Fe(OH)₃'],
          ['Fe(OH)₂', 'Fe(OH)₂'],
          ['Fe₃OH', 'Fe₃OH'],
          ['FeO₃H', 'FeO₃H']
        ],
        [
          'Fe³⁺ pairs with three OH⁻ ions (−1 each) to balance charge to zero: Fe(OH)₃.',
          'Lo ione Fe³⁺ richiede tre ioni ossidrile OH⁻ (−1 ciascuno) per bilanciare la carica: Fe(OH)₃.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l2_m6',
    arc: 1,
    sec: 'L2.6',
    pages: '215–232',
    hue: 145,
    title: ['Chemical Reactions & Balancing Equations', 'Reazioni chimiche e bilanciamento'],
    topic: [
      'Balancing equations via stoichiometric coefficients; synthesis, decomposition, single & double displacement, combustion',
      'Bilanciamento con coefficienti stechiometrici; sintesi, decomposizione, scambio semplice, doppio scambio e combustione'
    ],
    demon: ['The Subscript Saboteur', 'Il Sabotatore degli Indici'],
    tech: ['Nomenclature Form · Third Technique: Coefficient Equilibrium', 'Stile della Nomenclatura · Terza Tecnica: Equilibrio dei Coefficienti'],
    lessons: [
      {
        vis: 'chemBalancing',
        text: [
          '<p>By Lavoisier’s law, atoms are never created or destroyed in chemical reactions—only rearranged, {name}. To satisfy conservation of mass, we balance chemical equations by placing whole-number <b>stoichiometric coefficients</b> in front of formulas so each element’s atom count matches on both sides.</p>',
          '<p>Per la legge di Lavoisier gli atomi non si creano né si distruggono, si riorganizzano soltanto, {name}. Per rispettarla bilanciamo le equazioni inserendo <b>coefficienti stechiometrici</b> davanti alle formule finché il numero di atomi di ogni elemento è uguale a destra e a sinistra.</p>'
        ]
      },
      {
        vis: 'chemBalancing',
        text: [
          '<p><b>Golden balancing rule:</b> NEVER change the small subscripts inside a chemical formula! Turning H₂O into H₂O₂ changes water into hydrogen peroxide. Always balance metals first, then nonmetals, and leave Hydrogen and Oxygen for last.</p>',
          '<p><b>Regola d’oro:</b> NON modificare MAI gli indici in basso dentro una formula! Cambiare H₂O in H₂O₂ trasforma l’acqua in acqua ossigenata. Strategia pratica: bilancia prima i metalli, poi i non metalli diversi da H e O, e infine idrogeno e ossigeno.</p>'
        ]
      },
      {
        vis: 'chemBalancing',
        text: [
          '<p>Spot four simple patterns: <b>Synthesis</b> (A + B → AB, combining), <b>Decomposition</b> (AB → A + B, splitting), <b>Single Displacement</b> (A + BC → AC + B), and <b>Double Displacement</b> (AB + CD → AD + CB). Combustion always burns fuel + O₂ → CO₂ + H₂O.</p>',
          '<p>Quattro schemi facili: <b>Sintesi</b> (A + B → AB, due si uniscono), <b>Decomposizione</b> (AB → A + B, uno si spezza), <b>Scambio semplice</b> (A + BC → AC + B) e <b>Doppio scambio</b> (AB + CD → AD + CB). La combustione produce sempre CO₂ + H₂O.</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Subscript Saboteur! Need another oxygen atom on the right? Just rewrite H₂O as H₂O₂ and call it balanced!</p>',
      '<p>Sono il Sabotatore degli Indici! Manca un ossigeno nei prodotti? Trasforma H₂O in H₂O₂ e il gioco è fatto!</p>'
    ],
    quiz: [
      q(
        'What are the correct stoichiometric coefficients to balance: __ Fe + __ O₂ → __ Fe₂O₃ ?',
        'Quali sono i coefficienti corretti per bilanciare: __ Fe + __ O₂ → __ Fe₂O₃ ?',
        [
          ['4 Fe + 3 O₂ → 2 Fe₂O₃', '4 Fe + 3 O₂ → 2 Fe₂O₃'],
          ['2 Fe + 3 O₂ → 2 Fe₂O₃', '2 Fe + 3 O₂ → 2 Fe₂O₃'],
          ['2 Fe + 1 O₂ → 1 Fe₂O₃', '2 Fe + 1 O₂ → 1 Fe₂O₃'],
          ['4 Fe + 2 O₂ → 2 Fe₂O₃', '4 Fe + 2 O₂ → 2 Fe₂O₃']
        ],
        [
          'LCM of 2 and 3 oxygen atoms is 6: 3 O₂ (6 O) = 2 Fe₂O₃ (6 O), requiring 4 Fe on the left.',
          'Il m.c.m. tra 2 e 3 atomi di ossigeno è 6: 3 O₂ e 2 Fe₂O₃ danno 6 O per lato, quindi servono 4 Fe.'
        ]
      ),
      q(
        'Why is changing a formula subscript forbidden when balancing a chemical equation?',
        'Perché è vietato modificare gli indici delle formule durante il bilanciamento?',
        [
          ['Changing subscripts alters the chemical identity of the substance itself', 'Modificare gli indici cambia la natura chimica della sostanza stessa'],
          ['Subscripts represent temperature rather than atom counts', 'Gli indici indicano la temperatura anziché il numero di atomi'],
          ['Subscripts apply only to solid metals, never to molecules', 'Gli indici valgono solo per i metalli solidi'],
          ['Coefficients always multiply molar mass by zero', 'I coefficienti azzerano la massa molare']
        ],
        [
          'Subscripts fix the atomic ratio defining the compound; only coefficients can scale molecule count.',
          'Gli indici definiscono la formula vera della sostanza; solo i coefficienti davanti possono variare il numero di molecole.'
        ]
      ),
      q(
        'Balance the complete combustion of propane: C₃H₈ + __ O₂ → __ CO₂ + __ H₂O',
        'Bilancia la combustione completa del propano: C₃H₈ + __ O₂ → __ CO₂ + __ H₂O',
        [
          ['5 O₂ → 3 CO₂ + 4 H₂O', '5 O₂ → 3 CO₂ + 4 H₂O'],
          ['3 O₂ → 3 CO₂ + 4 H₂O', '3 O₂ → 3 CO₂ + 4 H₂O'],
          ['4 O₂ → 3 CO₂ + 2 H₂O', '4 O₂ → 3 CO₂ + 2 H₂O'],
          ['6 O₂ → 3 CO₂ + 4 H₂O', '6 O₂ → 3 CO₂ + 4 H₂O']
        ],
        [
          '3 C give 3 CO₂, 8 H give 4 H₂O; total oxygen on right is 3×2 + 4×1 = 10 O = 5 O₂.',
          '3 C danno 3 CO₂ e 8 H danno 4 H₂O; a destra servono 3×2 + 4 = 10 atomi di ossigeno, cioè 5 O₂.'
        ]
      ),
      q(
        'Classify the reaction: CaCO₃(s) → CaO(s) + CO₂(g)',
        'Classifica la reazione: CaCO₃(s) → CaO(s) + CO₂(g)',
        [
          ['Decomposition reaction', 'Reazione di decomposizione'],
          ['Synthesis reaction', 'Reazione di sintesi'],
          ['Double displacement reaction', 'Reazione di doppio scambio'],
          ['Hydrocarbon combustion', 'Combustione di un idrocarburo']
        ],
        [
          'A single compound breaks down into two simpler substances (AB → A + B).',
          'Un unico composto si scinde in due sostanze più semplici (AB → A + B).'
        ]
      )
    ]
  }),

  // ========================================================================
  // ARC 6 (Unit 2 · Chapter 3): Stoichiometry & Solutions
  // ========================================================================
  makeChemMission({
    id: 'chem_l2_m7',
    arc: 2,
    sec: 'L2.7',
    pages: '233–250',
    hue: 268,
    title: ['Stoichiometry & Mole Ratios', 'Stechiometria e rapporti molari'],
    topic: [
      'Interpreting balanced equations in moles; mass-to-mole-to-mass stoichiometric calculations',
      'Lettura in moli dell’equazione bilanciata; calcoli stechiometrici massa-moli-massa'
    ],
    demon: ['The Gram Guesser', 'L’Indovino dei Grammi'],
    tech: ['Stoich Form · First Technique: Mole Bridge Slash', 'Stile Stechiometrico · Prima Tecnica: Ponte Molare'],
    lessons: [
      {
        vis: 'chemStoich',
        text: [
          '<p>Stoichiometric coefficients speak the language of <b>moles</b>, NEVER direct grams, {name}! In <b>N₂ + 3 H₂ → 2 NH₃</b>, 1 mole of N₂ reacts with 3 moles of H₂ to yield 2 moles of NH₃—even though their molar masses differ (28, 2, and 17 g/mol).</p>',
          '<p>I coefficienti stechiometrici parlano la lingua delle <b>moli</b>, MAI direttamente dei grammi, {name}! In <b>N₂ + 3 H₂ → 2 NH₃</b>, 1 mole di N₂ reagisce con 3 moli di H₂ formando 2 moli di NH₃, anche se le masse molari sono diverse (28, 2 e 17 g/mol).</p>'
        ]
      },
      {
        vis: 'chemStoich',
        text: [
          '<p>Follow the three-step <b>Stoichiometric Mole Bridge</b>: (1) Convert given reactant mass into moles via <b>nₐ = mₐ / Mₐ</b>. (2) Multiply by the coefficient ratio <b>nᵦ = nₐ × (coeffᵦ / coeffₐ)</b>. (3) Convert back to grams via <b>mᵦ = nᵦ × Mᵦ</b> (or gas volume at STP via × 22.4 L/mol).</p>',
          '<p>Segui i tre passi del <b>Ponte Molare Stechiometrico</b>: (1) Converti la massa nota in moli con <b>nₐ = mₐ / Mₐ</b>. (2) Applica il rapporto tra i coefficienti <b>nᵦ = nₐ × (coeffᵦ / coeffₐ)</b>. (3) Torna ai grammi con <b>mᵦ = nᵦ × Mᵦ</b> (o al volume a STP con × 22,4 L/mol).</p>'
        ]
      },
      {
        vis: 'chemSandwichStoich',
        text: [
          '<p><b>Sanity check after any problem:</b> total moles can change across the arrow (e.g., 1 + 3 = 4 mol → 2 mol NH₃), but total atom counts and total grams ALWAYS balance before and after (Lavoisier)!</p>',
          '<p><b>Controllo lampo alla fine:</b> le moli totali possono cambiare (es. 1 + 3 = 4 mol → 2 mol NH₃), ma il numero di atomi e la massa totale in grammi restano sempre identici (Lavoisier)!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Order the Stoichiometric Steps & Classify Quantities', 'Distingui cosa si conserva e cosa cambia in una reazione'],
      hint: [
        'In 2 H₂ + O₂ → 2 H₂O, 3 total gas moles become 2 moles—what stayed constant vs. what changed?',
        'In 2 H₂ + O₂ → 2 H₂O, 3 moli di reagenti diventano 2 moli di prodotto: cosa si conserva e cosa può cambiare?'
      ],
      cats: [
        ['Always Conserved (Equal Before & After)', 'Sempre Conservato (Uguale Prima e Dopo)'],
        ['May Change Across the Reaction', 'Può Variare tra Reagenti e Prodotti']
      ],
      items: [
        { n: ['Total mass in a closed vessel (g)', 'Massa totale in recipiente chiuso (g)'], i: 'scale', c: 0, why: ['Lavoisier’s Law guarantees identical total mass.', 'La legge di Lavoisier garantisce massa totale identica.'] },
        { n: ['Number of molecules / total moles', 'Numero di molecole / moli totali'], i: 'layers', c: 1, why: ['Atoms regroup into fewer or more molecules (e.g. 4 mol → 2 mol in NH₃ synthesis).', 'Gli atomi si riaggregano formando un numero diverso di molecole.'] },
        { n: ['Atom count of each element (H, O, C…)', 'Numero di atomi di ciascun elemento'], i: 'shield', c: 0, why: ['Chemical reactions never create, destroy, or transmute atoms.', 'Le reazioni chimiche non creano né distruggono atomi.'] },
        { n: ['Gas volume at constant T and P', 'Volume gassoso a T e P costanti'], i: 'cloud', c: 1, why: ['Gas volume follows total gas moles via Avogadro’s law.', 'Il volume gassoso è proporzionale alle moli di gas presenti.'] },
        { n: ['Total electric charge', 'Carica elettrica totale'], i: 'bolt', c: 0, why: ['Charge balance holds strictly in every ionic/redox equation.', 'La carica elettrica netta resta rigorosamente costante.'] },
        { n: ['Physical properties (color, boiling point)', 'Proprietà fisiche (colore, punto ebollizione)'], i: 'compass', c: 1, why: ['New products have completely new chemical/physical properties.', 'I prodotti sono nuove sostanze con proprietà differenti.'] }
      ]
    },
    taunt: [
      '<p>I am the Gram Guesser! If the equation says N₂ + 3 H₂ → 2 NH₃, then 10 g of N₂ reacts with 30 g of H₂, right?</p>',
      '<p>Sono l’Indovino dei Grammi! Se l’equazione dice N₂ + 3 H₂ → 2 NH₃, allora 10 g di N₂ reagiscono con 30 g di H₂, giusto?</p>'
    ],
    quiz: [
      q(
        'In 2 H₂ + O₂ → 2 H₂O, how many moles of H₂O form when 3.0 mol of O₂ react completely with excess H₂?',
        'In 2 H₂ + O₂ → 2 H₂O, quante moli di H₂O si formano da 3,0 mol di O₂ con H₂ in eccesso?',
        [
          ['6.0 mol H₂O', '6,0 mol di H₂O'],
          ['3.0 mol H₂O', '3,0 mol di H₂O'],
          ['1.5 mol H₂O', '1,5 mol di H₂O'],
          ['2.0 mol H₂O', '2,0 mol di H₂O']
        ],
        [
          'The mole ratio H₂O : O₂ is 2 : 1, so 3.0 × (2/1) = 6.0 mol of water.',
          'Il rapporto molare H₂O : O₂ è 2 : 1, quindi 3,0 × 2 = 6,0 mol di acqua.'
        ]
      ),
      q(
        'For N₂ + 3 H₂ → 2 NH₃ (M(N₂) = 28 g/mol, M(NH₃) = 17 g/mol), what mass of NH₃ is produced from 14 g of N₂?',
        'Data N₂ + 3 H₂ → 2 NH₃ (M(N₂) = 28 g/mol, M(NH₃) = 17 g/mol), quanta massa di NH₃ si ottiene da 14 g di N₂?',
        [
          ['17 g NH₃', '17 g di NH₃'],
          ['28 g NH₃', '28 g di NH₃'],
          ['34 g NH₃', '34 g di NH₃'],
          ['8.5 g NH₃', '8,5 g di NH₃']
        ],
        [
          '14 g / 28 = 0.50 mol N₂ → 0.50 × 2 = 1.0 mol NH₃ → 1.0 × 17 = 17 g.',
          'n(N₂) = 14 / 28 = 0,50 mol → n(NH₃) = 0,50 × 2 = 1,0 mol → m = 1,0 × 17 = 17 g.'
        ]
      ),
      q(
        'In 2 KClO₃ → 2 KCl + 3 O₂, how many moles of O₂ are produced when 4.0 mol of KClO₃ decompose?',
        'In 2 KClO₃ → 2 KCl + 3 O₂, quante moli di O₂ si liberano dalla decomposizione di 4,0 mol di KClO₃?',
        [
          ['6.0 mol O₂', '6,0 mol di O₂'],
          ['3.0 mol O₂', '3,0 mol di O₂'],
          ['4.0 mol O₂', '4,0 mol di O₂'],
          ['2.7 mol O₂', '2,7 mol di O₂']
        ],
        [
          'Ratio O₂ : KClO₃ = 3 : 2 → 4.0 × (3 / 2) = 6.0 mol O₂.',
          'Rapporto O₂ : KClO₃ = 3 : 2 → 4,0 × (3 / 2) = 6,0 mol di O₂.'
        ]
      ),
      q(
        'Why must reactant masses always be converted to moles before using equation coefficients?',
        'Perché le masse dei reagenti vanno sempre convertite in moli prima di usare i coefficienti?',
        [
          ['Different substances have different molar masses, while coefficients count particles (moles)', 'Sostanze diverse hanno masse molari diverse, mentre i coefficienti contano entità (moli)'],
          ['Grams change value when temperature rises inside a flask', 'I grammi cambiano valore al crescere della temperatura'],
          ['Coefficients represent densities in g/cm³', 'I coefficienti esprimono la densità in g/cm³'],
          ['Only ionic solids can be weighed on a balance', 'Solo i solidi ionici si possono pesare su una bilancia']
        ],
        [
          'A balanced equation shows particle ratios (1 mol = 6.022×10²³ particles), not equal weights in grams.',
          'L’equazione esprime rapporti tra numeri di particelle (moli), non tra grammi di sostanze con masse molari diverse.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l2_m8',
    arc: 2,
    sec: 'L2.8',
    pages: '251–268',
    hue: 280,
    title: ['Limiting Reagent & Percent Yield', 'Reagente limitante e resa percentuale'],
    topic: [
      'Identifying limiting vs excess reactant; theoretical vs actual yield; percent yield',
      'Individuazione del reagente limitante e in eccesso; resa teorica ed effettiva; resa percentuale'
    ],
    demon: ['The Excess Mirage', 'Il Miraggio dell’Eccesso'],
    tech: ['Stoich Form · Second Technique: Limiting Cutoff', 'Stile Stechiometrico · Seconda Tecnica: Taglio Limitante'],
    lessons: [
      {
        vis: 'chemSandwichStoich',
        text: [
          '<p>In real laboratories reactants are rarely mixed in exact stoichiometric ratios, {name}. Think of making cheese sandwiches (2 bread + 1 cheese): if you have 6 bread slices and only 2 slices of cheese, you can make at most 2 sandwiches—the cheese is the <b>limiting reagent</b>!</p>',
          '<p>In laboratorio i reagenti non sono quasi mai dosati al grammo esatto, {name}. Pensa ai panini (2 fette di pane + 1 formaggio): con 6 fette di pane ma solo 2 formaggi puoi fare al massimo 2 panini! Il formaggio è il <b>reagente limitante</b>.</p>'
        ]
      },
      {
        vis: 'chemStoich',
        text: [
          '<p>How to spot it every time: compute <b>n / coeff</b> for each reactant. The <b>smaller ratio</b> marks the limiting reagent; calculate products from it ONLY, while the leftover amount of the other is the <b>excess</b>.</p>',
          '<p>Metodo sicuro: dividi le moli per il rispettivo coefficiente (<b>n / coeff</b>). Il <b>rapporto minore</b> indica il reagente limitante: i prodotti si calcolano solo da esso, ciò che resta dell’altro è l’<b>eccesso</b>.</p>'
        ]
      },
      {
        vis: 'chemSandwichStoich',
        text: [
          '<p>Real reactions often lose a bit of product during filtering or side steps. Your paper calculation is the <b>theoretical yield</b>, what you actually weigh is the <b>actual yield</b>, and <b>Percent Yield = (actual / theoretical) × 100%</b>.</p>',
          '<p>Nelle reazioni reali si perde sempre qualcosa tra filtri e reazioni secondarie: la previsione teorica è la <b>resa teorica</b>, ciò che pesi davvero è la <b>resa effettiva</b>, e la <b>Resa % = (effettiva / teorica) × 100%</b>.</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Excess Mirage! Have 100 g of A and 10 g of B? Obviously B must run out first—never bother dividing by molar mass!</p>',
      '<p>Sono il Miraggio dell’Eccesso! Hai 100 g di A e 10 g di B? Ovviamente finisce prima B, inutile calcolare le moli!</p>'
    ],
    quiz: [
      q(
        'In 2 H₂ + O₂ → 2 H₂O, you mix 5.0 mol H₂ with 2.0 mol O₂. Which reactant is limiting and how much H₂O forms?',
        'In 2 H₂ + O₂ → 2 H₂O mescoli 5,0 mol di H₂ e 2,0 mol di O₂. Qual è il limitante e quanta H₂O si forma?',
        [
          ['O₂ is limiting; 4.0 mol H₂O form (1.0 mol H₂ in excess)', 'O₂ è il limitante; si formano 4,0 mol di H₂O (avanza 1,0 mol H₂)'],
          ['H₂ is limiting; 5.0 mol H₂O form', 'H₂ è il limitante; si formano 5,0 mol di H₂O'],
          ['O₂ is limiting; 2.0 mol H₂O form', 'O₂ è il limitante; si formano 2,0 mol di H₂O'],
          ['Neither is limiting; 7.0 mol H₂O form', 'Nessun limitante; si formano 7,0 mol di H₂O']
        ],
        [
          'Compare n/coeff: H₂ gives 5.0/2 = 2.5; O₂ gives 2.0/1 = 2.0 (smaller!). 2.0 mol O₂ produces 4.0 mol H₂O and uses 4.0 mol H₂.',
          'Confronto n/coeff: H₂ → 5,0/2 = 2,5; O₂ → 2,0/1 = 2,0 (minore!). 2,0 mol O₂ formano 4,0 mol H₂O consumando 4,0 mol H₂.'
        ]
      ),
      q(
        'A reaction has a theoretical yield of 40.0 g of product, but a student isolates 32.0 g. What is the percent yield?',
        'Una reazione ha una resa teorica di 40,0 g, ma in laboratorio si recuperano 32,0 g. Qual è la resa percentuale?',
        [
          ['80%', '80%'],
          ['125%', '125%'],
          ['8.0%', '8,0%'],
          ['64%', '64%']
        ],
        [
          'Percent yield = (32.0 / 40.0) × 100 = 80%.',
          'Resa % = (32,0 / 40,0) × 100 = 80%.'
        ]
      ),
      q(
        'For N₂ + 3 H₂ → 2 NH₃, if 3.0 mol N₂ react with 6.0 mol H₂, how many moles of NH₃ can form?',
        'Data N₂ + 3 H₂ → 2 NH₃, facendo reagire 3,0 mol di N₂ con 6,0 mol di H₂, quante moli di NH₃ si ottengono?',
        [
          ['4.0 mol NH₃ (H₂ is limiting)', '4,0 mol di NH₃ (H₂ è limitante)'],
          ['6.0 mol NH₃ (N₂ is limiting)', '6,0 mol di NH₃ (N₂ è limitante)'],
          ['9.0 mol NH₃', '9,0 mol di NH₃'],
          ['2.0 mol NH₃', '2,0 mol di NH₃']
        ],
        [
          'n/coeff: N₂ → 3/1 = 3.0; H₂ → 6/3 = 2.0 (smaller). H₂ limits product to 6.0 × (2/3) = 4.0 mol NH₃.',
          'N₂ → 3/1 = 3,0; H₂ → 6/3 = 2,0 (minore). H₂ limita la reazione a 6,0 × (2/3) = 4,0 mol di NH₃.'
        ]
      ),
      q(
        'What is the maximum possible percent yield of a pure isolated chemical product (ignoring impurities)?',
        'Qual è la resa percentuale massima teoricamente possibile per un prodotto puro?',
        [
          ['100%', '100%'],
          ['200% when coefficients are doubled', '200% raddoppiando i coefficienti'],
          ['50% due to conservation of mass', '50% per la conservazione della massa'],
          ['Unlimited if catalyst is added', 'Illimitata se si aggiunge un catalizzatore']
        ],
        [
          'Conservation of mass caps isolated pure product at 100% of the theoretical yield; catalysts speed reactions up without raising equilibrium stoichiometry.',
          'La conservazione della massa fissa al 100% il limite teorico massimo della resa di un prodotto puro.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l2_m9',
    arc: 2,
    sec: 'L2.9',
    pages: '269–286',
    hue: 165,
    title: ['Solutions, Molarity & Dilution', 'Soluzioni, molarità e diluizione'],
    topic: [
      'Solute and solvent; molarity M = n/V; dilution equation M₁V₁ = M₂V₂; mass percent concentration',
      'Soluto e solvente; molarità M = n/V; legge di diluizione M₁V₁ = M₂V₂; concentrazione percentuale'
    ],
    demon: ['The Over-Diluter', 'Il Diluitore Folle'],
    tech: ['Stoich Form · Final Technique: Molar Equilibrium', 'Stile Stechiometrico · Tecnica Finale: Equilibrio Molare'],
    lessons: [
      {
        vis: 'chemSolutions',
        text: [
          '<p>A <b>solution</b> is a homogeneous mixture of a <b>solute</b> (minor dissolved component) and a <b>solvent</b> (major dispersing medium, such as water). Chemists quantify concentration most often via <b>Molarity (M)</b>: moles of solute per litre of <b>total solution</b>, <b>M = n / V(L)</b> (units: mol/L).</p>',
          '<p>Una <b>soluzione</b> è un miscuglio omogeneo tra un <b>soluto</b> (componente minore disciolto) e un <b>solvente</b> (mezzo disperdente, spesso acqua). In chimica si usa soprattutto la <b>Molarità (M)</b>: moli di soluto per litro di <b>soluzione totale</b>, <b>M = n / V(L)</b> (mol/L).</p>'
        ]
      },
      {
        vis: 'chemSolutions',
        text: [
          '<p>Also know percent concentrations: <b>% m/m = (mass of solute / total mass of solution) × 100</b> (remember: mass of solution = mass of solute + mass of solvent!), and <b>% m/V = (grams of solute / mL of solution) × 100</b>.</p>',
          '<p>Ricorda anche le percentuali: <b>% m/m = (massa soluto / massa totale soluzione) × 100</b> (attenzione: m_soluzione = m_soluto + m_solvente!), e <b>% m/V = (grammi di soluto / mL di soluzione) × 100</b>.</p>'
        ]
      },
      {
        vis: 'chemDilutionPour',
        text: [
          '<p><b>Syrup-in-water rule (Dilution):</b> adding water spreads the exact same solute moles over a larger volume (<b>n₁ = n₂</b>), giving <b>M₁ · V₁ = M₂ · V₂</b>. Remember V₂ is the final total volume, so water added is <b>V₂ − V₁</b>!</p>',
          '<p><b>Regola dello sciroppo (Diluizione):</b> aggiungere acqua lascia invariate le moli di soluto (<b>n₁ = n₂</b>) in un volume più grande: <b>M₁ · V₁ = M₂ · V₂</b>. Poiché V₂ è il volume totale finale, l’acqua aggiunta è <b>V₂ − V₁</b>!</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Over-Diluter! Double the volume by adding water, and solute moles vanish in half too—or do they double?</p>',
      '<p>Sono il Diluitore Folle! Raddoppiando il volume con acqua, anche le moli di soluto si dimezzano… o raddoppiano?</p>'
    ],
    quiz: [
      q(
        'What is the molarity of a solution prepared by dissolving 0.50 mol of NaCl to make 250 mL of solution?',
        'Qual è la molarità di una soluzione contenente 0,50 mol di NaCl in 250 mL di soluzione totale?',
        [
          ['2.0 M', '2,0 M'],
          ['0.50 M', '0,50 M'],
          ['0.0020 M', '0,0020 M'],
          ['1.25 M', '1,25 M']
        ],
        [
          'Convert 250 mL = 0.250 L; M = n / V = 0.50 / 0.250 = 2.0 mol/L (2.0 M).',
          'Converti 250 mL = 0,250 L; M = n / V = 0,50 / 0,250 = 2,0 mol/L (2,0 M).'
        ]
      ),
      q(
        'If 100 mL of a 3.0 M HCl stock solution are diluted with water to a final volume of 600 mL, what is the new molarity?',
        'Se 100 mL di soluzione HCl 3,0 M vengono diluiti con acqua fino a 600 mL finali, qual è la nuova molarità?',
        [
          ['0.50 M', '0,50 M'],
          ['1.8 M', '1,8 M'],
          ['18 M', '18 M'],
          ['0.60 M', '0,60 M']
        ],
        [
          'M₁V₁ = M₂V₂ → M₂ = (3.0 × 100) / 600 = 0.50 M.',
          'M₁V₁ = M₂V₂ → M₂ = (3,0 × 100) / 600 = 0,50 M.'
        ]
      ),
      q(
        'What is the % m/m concentration when 20 g of sugar are dissolved in 80 g of water?',
        'Qual è la concentrazione % m/m sciogliendo 20 g di zucchero in 80 g di acqua?',
        [
          ['20% m/m', '20% m/m'],
          ['25% m/m', '25% m/m'],
          ['80% m/m', '80% m/m'],
          ['16% m/m', '16% m/m']
        ],
        [
          'Total solution mass is 20 g + 80 g = 100 g, so % m/m = (20 / 100) × 100 = 20%.',
          'La massa totale della soluzione è 20 + 80 = 100 g, quindi % m/m = (20 / 100) × 100 = 20%.'
        ]
      ),
      q(
        'How many moles of glucose are contained in 2.0 L of a 1.5 M glucose solution?',
        'Quante moli di glucosio sono contenute in 2,0 L di soluzione 1,5 M?',
        [
          ['3.0 mol', '3,0 mol'],
          ['0.75 mol', '0,75 mol'],
          ['1.33 mol', '1,33 mol'],
          ['3.5 mol', '3,5 mol']
        ],
        [
          'n = M × V = 1.5 mol/L × 2.0 L = 3.0 mol.',
          'n = M × V = 1,5 mol/L × 2,0 L = 3,0 mol.'
        ]
      )
    ]
  })
];
