import type { ArcInfo, Mission, UnitInfo } from '../types';
import { makeChemMission, q } from './chemCommon';

export const CHEM_LEVEL3_UNIT: UnitInfo = {
  title: ['Level 3 · 3°/4° Superiore (Equilibrium, pH & Organic)', 'Livello 3 · 3°/4° Superiore (Equilibrio, pH e Organica)'],
  ch: 'L3.1–L3.3',
  subject: 'chem11'
};

export const CHEM_LEVEL3_ARCS: ArcInfo[] = [
  {
    n: 1,
    unit: 0,
    subject: 'chem11',
    title: ['Thermochemistry, Kinetics & Equilibrium', 'Termochimica, cinetica ed equilibrio'],
    pages: '287–342'
  },
  {
    n: 2,
    unit: 0,
    subject: 'chem11',
    title: ['Acids, Bases, pH & Redox Reactions', 'Acidi, basi, pH e reazioni redox'],
    pages: '343–400'
  },
  {
    n: 3,
    unit: 0,
    subject: 'chem11',
    title: ['Foundational Organic Chemistry', 'Chimica organica di base'],
    pages: '401–460'
  }
];

export const CHEM_LEVEL3_MISSIONS: Mission[] = [
  // ========================================================================
  // ARC 7 (Unit 3 · Chapter 1): Thermochemistry, Kinetics & Equilibrium
  // ========================================================================
  makeChemMission({
    id: 'chem_l3_m1',
    arc: 0,
    sec: 'L3.1',
    pages: '287–304',
    hue: 16,
    title: ['Thermochemistry, Enthalpy & Spontaneity', 'Termochimica, entalpia e spontaneità'],
    topic: [
      'Exothermic vs endothermic ΔH; Hess’s Law; entropy ΔS and Gibbs free energy ΔG = ΔH − TΔS',
      'Reazioni esotermiche ed endotermiche ΔH; legge di Hess; entropia ΔS ed energia libera ΔG = ΔH − TΔS'
    ],
    demon: ['The Entropy Void', 'Il Vuoto Entropico'],
    tech: ['Thermo Form · First Technique: Enthalpy Cascade', 'Stile Termochimico · Prima Tecnica: Cascata Entalpica'],
    lessons: [
      {
        vis: 'chemThermo',
        text: [
          '<p>Every chemical reaction exchanges energy with its surroundings, {name}. At constant pressure, this heat exchange is the <b>enthalpy change (ΔH)</b>: <b>exothermic reactions (ΔH &lt; 0)</b> release heat and warm the surroundings (like combustion), while <b>endothermic reactions (ΔH &gt; 0)</b> absorb heat from the surroundings (like photosynthesis or ice melting).</p>',
          '<p>Ogni reazione chimica scambia energia con l’ambiente, {name}. A pressione costante il calore scambiato è la variazione di <b>entalpia (ΔH)</b>: le reazioni <b>esotermiche (ΔH &lt; 0)</b> liberano calore scaldando l’ambiente, mentre le <b>endotermiche (ΔH &gt; 0)</b> assorbono calore dall’esterno (come la fotosintesi o la fusione del ghiaccio).</p>'
        ]
      },
      {
        vis: 'chemThermo',
        text: [
          '<p>Enthalpy is a <b>state function</b>—by <b>Hess’s Law</b>, ΔH depends only on initial reactants and final products, so reversing an equation flips ΔH’s sign and multiplying coefficients multiplies ΔH. To predict whether a reaction occurs spontaneously, combine enthalpy with <b>entropy (ΔS, disorder)</b> in <b>Gibbs free energy: ΔG = ΔH − T·ΔS</b>.</p>',
          '<p>L’entalpia è una funzione di stato: per la <b>legge di Hess</b>, ΔH dipende solo da reagenti e prodotti finali (invertire l’equazione cambia il segno di ΔH). Per sapere se una reazione è spontanea si combina ΔH con l’<b>entropia (ΔS, grado di disordine)</b> nell’<b>energia libera di Gibbs: ΔG = ΔH − T·ΔS</b>.</p>'
        ]
      },
      {
        vis: 'chemThermo',
        text: [
          '<p><b>Easy spontaneity test:</b> think of ΔH as heat and ΔS as messiness! A process runs on its own whenever <b>ΔG = ΔH − T·ΔS &lt; 0</b>. Even heat-absorbing processes (like boiling water, ΔH &gt; 0 &amp; ΔS &gt; 0) go spontaneously once high T makes −T·ΔS big enough!</p>',
          '<p><b>Test facile della spontaneità:</b> immagina ΔH come il calore e ΔS come il disordine! Una reazione avviene da sola se <b>ΔG = ΔH − T·ΔS &lt; 0</b>. Anche l’ebollizione (ΔH &gt; 0 e ΔS &gt; 0) diventa spontanea ad alta temperatura!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classify Exothermic (ΔH < 0) vs. Endothermic (ΔH > 0) Processes', 'Classifica processi esotermici (ΔH < 0) ed endotermici (ΔH > 0)'],
      hint: [
        'Does the process release heat to the surroundings (ΔH < 0) or absorb heat from outside (ΔH > 0)?',
        'Il processo libera calore verso l’esterno (ΔH < 0) oppure assorbe energia dall’ambiente (ΔH > 0)?'
      ],
      cats: [
        ['Exothermic (ΔH < 0, releases heat)', 'Esotermico (ΔH < 0, libera calore)'],
        ['Endothermic (ΔH > 0, absorbs heat)', 'Endotermico (ΔH > 0, assorbe calore)']
      ],
      items: [
        { n: ['Combustion of methane (CH₄ + 2 O₂)', 'Combustione del metano (CH₄ + 2 O₂)'], i: 'bolt', c: 0, why: ['Burning fuels releases large amounts of thermal energy.', 'La combustione libera grande quantità di calore nell’ambiente.'] },
        { n: ['Melting solid ice into liquid water', 'Fusione del ghiaccio in acqua liquida'], i: 'cloud', c: 1, why: ['Heat must enter the ice to break crystal hydrogen bonds.', 'Serve fornire calore dall’esterno per rompere il reticolo del ghiaccio.'] },
        { n: ['Acid–base neutralization (HCl + NaOH)', 'Neutralizzazione acido-base (HCl + NaOH)'], i: 'shield', c: 0, why: ['Strong neutralization warms the flask as H₂O forms.', 'La formazione di acqua in neutralizzazione libera calore nella soluzione.'] },
        { n: ['Photosynthesis (CO₂ + H₂O → glucose)', 'Fotosintesi clorofilliana'], i: 'recycle', c: 1, why: ['Plants absorb solar energy to build high-energy glucose.', 'Le piante assorbono energia luminosa per sintetizzare glucosio.'] },
        { n: ['Water vapor condensing on cold glass', 'Condensazione del vapore su vetro freddo'], i: 'flow', c: 0, why: ['Condensation releases latent heat back to the glass.', 'Passando da gas a liquido si libera calore latente.'] },
        { n: ['Thermal decomposition of CaCO₃ in a kiln', 'Decomposizione termica di CaCO₃'], i: 'warn', c: 1, why: ['Continuous heating is needed to split CaCO₃ into CaO + CO₂.', 'Serve riscaldamento continuo per spezzare i legami chimici di CaCO₃.'] }
      ]
    },
    taunt: [
      '<p>I am the Entropy Void! Any endothermic reaction absorbs heat, so none can ever be spontaneous—not even melting ice!</p>',
      '<p>Sono il Vuoto Entropico! Ogni reazione endotermica assorbe calore, quindi nessuna può mai avvenire spontaneamente!</p>'
    ],
    quiz: [
      q(
        'Under what sign combination of ΔH and ΔS is a reaction spontaneous (ΔG < 0) at ALL temperatures?',
        'Per quale combinazione di segni di ΔH e ΔS una reazione è spontanea (ΔG < 0) a TUTTE le temperature?',
        [
          ['ΔH < 0 (exothermic) and ΔS > 0 (entropy increases)', 'ΔH < 0 (esotermica) e ΔS > 0 (entropia aumenta)'],
          ['ΔH > 0 (endothermic) and ΔS < 0 (entropy decreases)', 'ΔH > 0 (endotermica) e ΔS < 0 (entropia diminuisce)'],
          ['ΔH > 0 and ΔS > 0', 'ΔH > 0 e ΔS > 0'],
          ['ΔH < 0 and ΔS < 0', 'ΔH < 0 e ΔS < 0']
        ],
        [
          'Since T (in Kelvin) is always positive, ΔG = (negative) − T·(positive) is always negative.',
          'Poiché T in Kelvin è sempre positiva, ΔG = (negativo) − T·(positivo) risulta sempre minore di zero.'
        ]
      ),
      q(
        'Given A + B → C with ΔH = −120 kJ, what is ΔH for the reversed reaction 2 C → 2 A + 2 B?',
        'Data A + B → C con ΔH = −120 kJ, quanto vale ΔH per la reazione inversa raddoppiata 2 C → 2 A + 2 B?',
        [
          ['+240 kJ', '+240 kJ'],
          ['−240 kJ', '−240 kJ'],
          ['+120 kJ', '+120 kJ'],
          ['−60 kJ', '−60 kJ']
        ],
        [
          'Reversing flips −120 kJ to +120 kJ, and doubling all stoichiometric coefficients doubles ΔH to +240 kJ.',
          'Invertendo la reazione il segno passa a +120 kJ; raddoppiando i coefficienti ΔH raddoppia a +240 kJ.'
        ]
      ),
      q(
        'Calculate ΔG at 300 K for a process with ΔH = +45 kJ and ΔS = +0.20 kJ/K. Is it spontaneous?',
        'Calcola ΔG a 300 K per un processo con ΔH = +45 kJ e ΔS = +0,20 kJ/K: è spontaneo?',
        [
          ['ΔG = −15 kJ (spontaneous despite being endothermic)', 'ΔG = −15 kJ (spontaneo pur essendo endotermico)'],
          ['ΔG = +105 kJ (non-spontaneous)', 'ΔG = +105 kJ (non spontaneo)'],
          ['ΔG = +15 kJ (non-spontaneous)', 'ΔG = +15 kJ (non spontaneo)'],
          ['ΔG = −60 kJ', 'ΔG = −60 kJ']
        ],
        [
          'ΔG = +45 − (300 × 0.20) = 45 − 60 = −15 kJ < 0, so entropy drives it spontaneously.',
          'ΔG = +45 − (300 × 0,20) = 45 − 60 = −15 kJ < 0: l’aumento di entropia lo rende spontaneo.'
        ]
      ),
      q(
        'Which physical transition produces the LARGEST positive entropy change (ΔS > 0)?',
        'Quale passaggio provoca il MAGGIORE aumento di entropia (ΔS > 0)?',
        [
          ['Boiling liquid ethanol into ethanol vapor (liquid → gas)', 'Vaporizzazione di etanolo liquido in vapore (liquido → aeriforme)'],
          ['Condensing steam back into liquid water', 'Condensazione del vapore in acqua liquida'],
          ['Freezing liquid water into an ice crystal', 'Solidificazione dell’acqua liquida in ghiaccio'],
          ['Compressing a gas to one-tenth of its volume', 'Compressione di un gas a un decimo del volume']
        ],
        [
          'Gas molecules disperse freely over vastly more microstates than tightly packed liquids or solids.',
          'Lo stato aeriforme disperde le molecole in un numero enorme di configurazioni rispetto a liquidi e solidi.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l3_m2',
    arc: 0,
    sec: 'L3.2',
    pages: '305–322',
    hue: 32,
    title: ['Reaction Kinetics & Catalysis', 'Cinetica chimica e catalizzatori'],
    topic: [
      'Collision theory, activation energy Eₐ, potential energy profiles, and catalyst action',
      'Teoria degli urti, energia di attivazione Eₐ, profili energetici e ruolo dei catalizzatori'
    ],
    demon: ['The Barrier Sentinel', 'La Sentinella della Barriera'],
    tech: ['Thermo Form · Second Technique: Catalytic Tunnel', 'Stile Termochimico · Seconda Tecnica: Tunel Catalitico'],
    lessons: [
      {
        vis: 'chemKinetics',
        text: [
          '<p>Even a spontaneous reaction (ΔG &lt; 0) can sit frozen for years if its rate is near zero, {name} (paper doesn’t burst into flames at room temperature!). Under <b>collision theory</b>, reactant molecules only react when they collide with proper <b>spatial orientation</b> and at least a minimum kinetic energy called <b>activation energy (Eₐ)</b>.</p>',
          '<p>Anche una reazione spontanea (ΔG &lt; 0) può essere lentissima a temperatura ambiente, {name}. Secondo la <b>teoria degli urti</b>, due molecole reagiscono solo se si urtano con <b>orientazione efficace</b> e con energia cinetica almeno pari all’<b>energia di attivazione (Eₐ)</b>.</p>'
        ]
      },
      {
        vis: 'chemKinetics',
        text: [
          '<p>Four levers accelerate reaction rate: higher <b>reactant concentration</b> (more collisions per second), greater <b>surface area</b> (crushed solids vs chunks), higher <b>temperature</b> (molecules collide harder and far more exceed Eₐ), and adding a <b>catalyst</b>.</p>',
          '<p>Quattro fattori aumentano la velocità di reazione: maggiore <b>concentrazione dei reagenti</b> (più urti al secondo), maggiore <b>superficie di contatto</b> (polvere vs blocco), <b>temperatura</b> più alta (più molecole superano Eₐ) e presenza di un <b>catalizzatore</b>.</p>'
        ]
      },
      {
        vis: 'chemKinetics',
        text: [
          '<p><b>Mountain-tunnel analogy:</b> a <b>catalyst</b> (or biological <b>enzyme</b>) carves a lower shortcut (<b>Eₐ′ &lt; Eₐ</b>) without changing start or end heights—so it speeds up forward &amp; reverse equally and NEVER alters ΔH or equilibrium!</p>',
          '<p><b>Analogia del tunnel:</b> un <b>catalizzatore</b> (o <b>enzima</b>) apre una scorciatoia più bassa (<b>Eₐ′ &lt; Eₐ</b>) lasciando uguali partenza e arrivo: accelera diretta e inversa insieme senza cambiare mai ΔH né l’equilibrio!</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Barrier Sentinel! Sprinkle platinum catalyst into a flask and not only will the rate jump—ΔH doubles too!</p>',
      '<p>Sono la Sentinella della Barriera! Aggiungi platino come catalizzatore e raddoppierà anche il ΔH di reazione!</p>'
    ],
    quiz: [
      q(
        'How does adding a catalyst increase the rate of a chemical reaction?',
        'In che modo un catalizzatore aumenta la velocità di una reazione chimica?',
        [
          ['It provides an alternate pathway with a lower activation energy (Eₐ)', 'Offre un percorso alternativo con energia di attivazione (Eₐ) più bassa'],
          ['It makes ΔH more negative so products become much lower in energy', 'Rende ΔH più negativo abbassando l’energia finale dei prodotti'],
          ['It permanently shifts K_eq toward the products', 'Sposta permanentemente la costante K_eq verso i prodotti'],
          ['It doubles reactant masses in the container', 'Raddoppia la massa dei reagenti nel recipiente']
        ],
        [
          'Lowering Eₐ dramatically raises the fraction of collisions energetic enough to form the transition state without altering reactant or product enthalpies.',
          'Abbassando Eₐ aumenta molto la frazione di urti efficaci senza modificare l’energia iniziale dei reagenti né quella finale dei prodotti.'
        ]
      ),
      q(
        'According to collision theory, what two conditions are required for a collision between reactant molecules to form products?',
        'Secondo la teoria degli urti, quali due condizioni servono perché un urto sia efficace?',
        [
          ['Kinetic energy ≥ activation energy (Eₐ) and favorable molecular orientation', 'Energia cinetica ≥ energia di attivazione (Eₐ) e corretta orientazione spaziale'],
          ['Zero kinetic energy and sub-zero temperature', 'Energia cinetica nulla e temperatura sotto zero'],
          ['Identical molar mass and ionic charge +2', 'Stessa massa molare e carica ionica +2'],
          ['Presence of liquid water and dark light', 'Presenza di acqua liquida al buio']
        ],
        [
          'Even high-speed collisions bounce off unchanged if reactive bonds are shielded by improper geometry.',
          'Un urto produce nuovi legami solo se possiede energia sufficiente a superare Eₐ e geometria d’impatto corretta.'
        ]
      ),
      q(
        'Why does powdered zinc dissolve much faster in hydrochloric acid than an equal mass of zinc chunks?',
        'Perché lo zinco in polvere reagisce molto più rapidamente in acido cloridrico rispetto a un blocco compatto di uguale massa?',
        [
          ['Powder exposes vastly greater surface area for acid collisions', 'La polvere espone una superficie di contatto molto maggiore agli urti con l’acido'],
          ['Grinding zinc reduces its molar mass M', 'Macinare lo zinco ne riduce la massa molare M'],
          ['Powdered zinc turns into an endothermic catalyst', 'La polvere trasforma lo zinco in un catalizzatore endotermico'],
          ['Solid chunks have zero valence electrons', 'I blocchi solidi non possiedono elettroni di valenza']
        ],
        [
          'Heterogeneous reaction rate scales directly with exposed contact surface between solid and solution.',
          'Nelle reazioni eterogenee la velocità cresce al crescere della superficie esposta agli urti.'
        ]
      ),
      q(
        'Which thermodynamic quantity remains strictly UNCHANGED when a catalyst is added?',
        'Quale grandezza rimane rigorosamente INVARIATA quando si aggiunge un catalizzatore?',
        [
          ['Enthalpy of reaction ΔH (difference between products and reactants)', 'Variazione di entalpia ΔH (differenza energetica tra prodotti e reagenti)'],
          ['Activation energy Eₐ of the forward step', 'Energia di attivazione Eₐ della reazione diretta'],
          ['Activation energy of the reverse step', 'Energia di attivazione della reazione inversa'],
          ['Initial reaction rate', 'Velocità iniziale della reazione']
        ],
        [
          'Both forward and reverse Eₐ drop by the exact same amount, leaving ΔH = Eₐ(fwd) − Eₐ(rev) completely unchanged.',
          'Sia Eₐ diretta sia Eₐ inversa diminuiscono della stessa quantità, lasciando ΔH = H(prod) − H(reag) identico.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l3_m3',
    arc: 0,
    sec: 'L3.3',
    pages: '323–342',
    hue: 158,
    title: ['Chemical Equilibrium (K_eq) & Le Châtelier', 'Equilibrio chimico (K_eq) e Le Châtelier'],
    topic: [
      'Dynamic equilibrium, law of mass action K_eq, reaction quotient Q, and Le Châtelier shifts',
      'Equilibrio dinamico, legge di azione di massa K_eq, quoziente Q e principio di Le Châtelier'
    ],
    demon: ['The Static Illusion', 'L’Illusione Statica'],
    tech: ['Thermo Form · Third Technique: Dynamic Balance Shift', 'Stile Termochimico · Terza Tecnica: Spinta d’Equilibrio'],
    lessons: [
      {
        vis: 'chemEquilibrium',
        text: [
          '<p>Many reactions are <b>reversible</b> (written with <b>⇌</b>), {name}. At <b>dynamic equilibrium</b>, macroscopic concentrations stop changing NOT because molecules stop reacting, but because the <b>forward rate equals the reverse rate (r_fwd = r_rev)</b>!</p>',
          '<p>Molte reazioni sono <b>reversibili</b> (indicate con <b>⇌</b>), {name}. All’<b>equilibrio chimico dinamico</b> le concentrazioni macroscopiche restano costanti non perché tutto sia fermo, ma perché <b>la velocità della reazione diretta eguaglia quella della reazione inversa (v_dir = v_inv)</b>!</p>'
        ]
      },
      {
        vis: 'chemEquilibrium',
        text: [
          '<p>By Guldberg and Waage’s <b>Law of Mass Action</b>, for aA + bB ⇌ cC + dD at constant temperature: <b>K_eq = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)</b>. Remember: <b>omit pure solids (s) and pure liquids (l)</b> because their density stays constant! Large K_eq (&gt;&gt; 1) means products dominate; tiny K_eq (&lt;&lt; 1) means reactants dominate.</p>',
          '<p>Per la <b>legge di azione di massa</b>, data aA + bB ⇌ cC + dD a T costante vale: <b>K_eq = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)</b>. Regola essenziale: <b>non si includono mai solidi puri (s) né liquidi puri (l)</b>! Se K_eq &gt;&gt; 1 prevalgono i prodotti; se K_eq &lt;&lt; 1 prevalgono i reagenti.</p>'
        ]
      },
      {
        vis: 'chemEquilibrium',
        text: [
          '<p><b>Push-back rule (Le Châtelier):</b> poke equilibrium and it pushes back! Add reactant → shifts right; squeeze gas pressure ↑ → moves toward fewer gas moles; raise temperature ↑ → favors endothermic direction (and <b>only temperature changes K_eq</b>!).</p>',
          '<p><b>Principio di Le Châtelier:</b> se disturbi l’equilibrio, reagisce al contrario! Aggiungi reagente → va a destra; aumenta P → sceglie il lato con meno moli di gas; aumenta T → favorisce il lato endotermico (e <b>solo T cambia K_eq</b>!).</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Static Illusion! Raise the temperature or compress the vessel, and equilibrium stays frozen without budging!</p>',
      '<p>Sono l’Illusione Statica! Aumenta la temperatura o comprimi il reattore: l’equilibrio non si sposterà di un millimetro!</p>'
    ],
    quiz: [
      q(
        'What defines a chemical system at dynamic equilibrium?',
        'Che cosa caratterizza un sistema chimico in equilibrio dinamico?',
        [
          ['Forward and reverse reaction rates are equal, keeping macroscopic concentrations constant', 'Velocità diretta e inversa sono uguali e le concentrazioni restano costanti nel tempo'],
          ['Both forward and reverse reactions halt completely at zero speed', 'Entrambe le reazioni si fermano completamente a velocità nulla'],
          ['Molar concentrations of reactants always strictly equal those of products', 'Le concentrazioni di reagenti e prodotti sono sempre uguali tra loro'],
          ['All reactants have been 100% converted into products', 'Tutti i reagenti si sono convertiti al 100% in prodotti']
        ],
        [
          'Reactions continue at equal opposing speeds so net change is zero, even though [products] need not equal [reactants].',
          'I processi opposti continuano alla stessa velocità, mantenendo costanti le concentrazioni (non necessariamente uguali tra loro).'
        ]
      ),
      q(
        'For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH = −92 kJ, exothermic forward), which change increases ammonia yield at equilibrium?',
        'In N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH = −92 kJ, esotermica), quale variazione sposta l’equilibrio aumentando NH₃?',
        [
          ['Increasing total pressure (4 gas moles → 2 gas moles)', 'Aumentare la pressione totale (da 4 moli gassose a 2 moli)'],
          ['Raising temperature sharply', 'Innalzare bruscamente la temperatura'],
          ['Removing H₂ gas from the vessel', 'Sottrarre gas H₂ dal reattore'],
          ['Adding an iron catalyst without changing T or P', 'Aggiungere un catalizzatore di ferro a T e P costanti']
        ],
        [
          'Compression favors the side with fewer gas moles (2 NH₃ vs 1 N₂ + 3 H₂ = 4); heating shifts an exothermic reaction left.',
          'L’aumento di pressione sposta verso il lato con meno moli di gas (2 NH₃ contro 4); scaldare favorisce l’inversa endotermica.'
        ]
      ),
      q(
        'Which species is correctly omitted when writing K_eq for CaCO₃(s) ⇌ CaO(s) + CO₂(g)?',
        'Quale espressione corretta di K_eq si ottiene per CaCO₃(s) ⇌ CaO(s) + CO₂(g)?',
        [
          ['K_eq = [CO₂] (pure solids CaCO₃ and CaO are omitted)', 'K_eq = [CO₂] (i solidi puri CaCO₃ e CaO vengono omessi)'],
          ['K_eq = [CaO][CO₂] / [CaCO₃]', 'K_eq = [CaO][CO₂] / [CaCO₃]'],
          ['K_eq = [CaCO₃] / [CO₂]', 'K_eq = [CaCO₃] / [CO₂]'],
          ['K_eq = 1 / [CO₂]', 'K_eq = 1 / [CO₂]']
        ],
        [
          'Pure solids have fixed density/activity of 1, so only gaseous CO₂ appears in K_eq.',
          'I solidi puri hanno attività unitaria e costante, per cui in K_eq compare solo il gas CO₂.'
        ]
      ),
      q(
        'Which stress is the ONLY disturbance capable of changing the numerical value of K_eq itself?',
        'Quale fattore è l’UNICO in grado di modificare il valore numerico della costante K_eq?',
        [
          ['Changing temperature (T)', 'Variare la temperatura (T)'],
          ['Adding excess reactant', 'Aggiungere un eccesso di reagente'],
          ['Increasing container pressure', 'Aumentare la pressione del recipiente'],
          ['Adding a catalyst', 'Aggiungere un catalizzatore']
        ],
        [
          'Concentration and pressure alter Q momentarily until the system re-establishes the same K_eq; only temperature changes K_eq.',
          'Concentrazione e pressione alterano temporaneamente il quoziente Q, ma solo la temperatura cambia K_eq.'
        ]
      )
    ]
  }),

  // ========================================================================
  // ARC 8 (Unit 3 · Chapter 2): Acids, Bases, pH & Redox Reactions
  // ========================================================================
  makeChemMission({
    id: 'chem_l3_m4',
    arc: 1,
    sec: 'L3.4',
    pages: '343–362',
    hue: 332,
    title: ['Acids, Bases & Conjugate Pairs', 'Acidi, basi e coppie coniugate'],
    topic: [
      'Arrhenius vs Brønsted–Lowry acid–base theories, conjugate pairs, amphoteric water, and K_w',
      'Teorie di Arrhenius e Brønsted–Lowry, coppie coniugate, acqua anfotera e prodotto ionico K_w'
    ],
    demon: ['The Proton Hoarder', 'L’Accaparratore di Protoni'],
    tech: ['Proton Form · First Technique: Conjugate Transfer', 'Stile Protonico · Prima Tecnica: Scambio Coniugato'],
    lessons: [
      {
        vis: 'chemBronstedPass',
        text: [
          '<p>Think of <b>Brønsted–Lowry</b> like passing a proton ball named <b>H⁺</b>, {name}: the <b>acid throws H⁺</b> (proton donor), while the <b>base catches H⁺</b> (proton acceptor)!</p>',
          '<p>Pensa a <b>Brønsted–Lowry</b> come al passaggio di una palla chiamata <b>H⁺</b>, {name}: l’<b>acido lancia H⁺</b> (donatore), mentre la <b>base lo riceve</b> (accettore)!</p>'
        ]
      },
      {
        vis: 'chemBronstedPass',
        text: [
          '<p>When acid HA passes H⁺ away, what remains is its <b>conjugate base A⁻</b>. Because water H₂O can both throw H⁺ (becoming OH⁻) and catch H⁺ (becoming H₃O⁺), water is <b>amphoteric</b>!</p>',
          '<p>Quando l’acido HA cede H⁺ resta la sua <b>base coniugata A⁻</b> (differiscono per un solo H⁺). Poiché l’acqua H₂O può sia cedere H⁺ sia accettarlo, è detta <b>anfotera</b>!</p>'
        ]
      },
      {
        vis: 'chemAcidsPH',
        text: [
          '<p>Pure water autoionizes slightly: <b>K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C</b> (so neutral water has 10⁻⁷ M of each). <b>Strong</b> acids/bases split 100%; <b>weak</b> ones split only partly.</p>',
          '<p>Nell’acqua pura vale sempre <b>K_w = [H₃O⁺][OH⁻] = 1,0 × 10⁻¹⁴ a 25 °C</b> (acqua neutra: 10⁻⁷ M ciascuno). Acidi e basi <b>forti</b> si dissociano al 100%; i <b>deboli</b> solo in parte.</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Identify Brønsted–Lowry Proton Donors vs. Acceptors', 'Distingui donatori di protoni (Acidi) e accettori (Basi)'],
      hint: [
        'Which species donates H⁺ into water vs accepts H⁺ to gain positive charge or form OH⁻?',
        'Quali specie cedono uno ione H⁺ e quali invece accettano H⁺ comportandosi da basi?'
      ],
      cats: [
        ['Acid / Proton Donor (H⁺)', 'Acido / Donatore di H⁺'],
        ['Base / Proton Acceptor', 'Base / Accettore di H⁺']
      ],
      items: [
        { n: ['HCl (Hydrochloric acid)', 'HCl (Acido cloridrico)'], i: 'warn', c: 0, why: ['Completely transfers H⁺ to water forming H₃O⁺ and Cl⁻.', 'Cede completamente H⁺ all’acqua formando H₃O⁺ e Cl⁻.'] },
        { n: ['NH₃ (Ammonia)', 'NH₃ (Ammoniaca)'], i: 'key', c: 1, why: ['Nitrogen’s lone pair accepts H⁺ forming NH₄⁺.', 'Il doppietto solitario su N accetta H⁺ formando NH₄⁺.'] },
        { n: ['CH₃COOH (Acetic acid in vinegar)', 'CH₃COOH (Acido acetico)'], i: 'layers', c: 0, why: ['Weak acid that donates its carboxylic H⁺ partially.', 'Acido debole che cede parzialmente il protone –COOH.'] },
        { n: ['OH⁻ (Hydroxide ion from NaOH)', 'OH⁻ (Ione ossidrile da NaOH)'], i: 'shield', c: 1, why: ['Strong base that readily accepts H⁺ to become H₂O.', 'Base forte che lega subito un protone formando H₂O.'] },
        { n: ['HNO₃ (Nitric acid)', 'HNO₃ (Acido nitrico)'], i: 'bolt', c: 0, why: ['Strong monoprotic acid donating H⁺ to form NO₃⁻.', 'Acido forte monoprotico che cede H⁺ generando NO₃⁻.'] },
        { n: ['CO₃²⁻ (Carbonate ion)', 'CO₃²⁻ (Ione carbonato)'], i: 'recycle', c: 1, why: ['Negatively charged ion that accepts H⁺ forming HCO₃⁻.', 'Anione capace di accettare un protone trasformandosi in HCO₃⁻.'] }
      ]
    },
    taunt: [
      '<p>I am the Proton Hoarder! Water has no H⁺ and no OH⁻, and ammonia cannot be a base because it has no OH group!</p>',
      '<p>Sono l’Accaparratore di Protoni! L’ammoniaca NH₃ non ha gruppi OH, quindi non potrà mai essere una base!</p>'
    ],
    quiz: [
      q(
        'In the reaction H₂SO₄ + H₂O → HSO₄⁻ + H₃O⁺, what is the conjugate base of H₂SO₄?',
        'Nella reazione H₂SO₄ + H₂O → HSO₄⁻ + H₃O⁺, qual è la base coniugata di H₂SO₄?',
        [
          ['HSO₄⁻', 'HSO₄⁻'],
          ['H₃O⁺', 'H₃O⁺'],
          ['H₂O', 'H₂O'],
          ['SO₄²⁻', 'SO₄²⁻']
        ],
        [
          'Removing a single proton H⁺ from H₂SO₄ leaves behind its conjugate base HSO₄⁻.',
          'Togliendo un solo protone H⁺ da H₂SO₄ si ottiene la base coniugata HSO₄⁻.'
        ]
      ),
      q(
        'Why is NH₃ classified as a base under Brønsted–Lowry theory even though its formula contains no OH⁻ group?',
        'Perché NH₃ è una base secondo Brønsted–Lowry anche se la sua formula non contiene gruppi OH⁻?',
        [
          ['It accepts an H⁺ proton from water using nitrogen’s lone pair, generating OH⁻', 'Accetta un protone H⁺ dall’acqua grazie al doppietto su N, generando OH⁻'],
          ['It donates three protons directly into solution', 'Cede tre protoni direttamente in soluzione'],
          ['It releases O₂ gas when dissolved', 'Libera ossigeno gassoso quando si scioglie'],
          ['It acts strictly as an Arrhenius neutral salt', 'Si comporta semplicemente come un sale neutro']
        ],
        [
          'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻: accepting H⁺ makes NH₃ a Brønsted–Lowry base.',
          'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻: accettando H⁺ dall’acqua si comporta da base di Brønsted–Lowry.'
        ]
      ),
      q(
        'At 25 °C, if an aqueous solution has [H₃O⁺] = 1.0 × 10⁻⁴ M, what is [OH⁻]?',
        'A 25 °C, se una soluzione acquosa ha [H₃O⁺] = 1,0 × 10⁻⁴ M, quanto vale [OH⁻]?',
        [
          ['1.0 × 10⁻¹⁰ M', '1,0 × 10⁻¹⁰ M'],
          ['1.0 × 10⁻⁴ M', '1,0 × 10⁻⁴ M'],
          ['1.0 × 10⁻¹⁴ M', '1,0 × 10⁻¹⁴ M'],
          ['1.0 × 10¹⁰ M', '1,0 × 10¹⁰ M']
        ],
        [
          '[OH⁻] = K_w / [H₃O⁺] = 10⁻¹⁴ / 10⁻⁴ = 1.0 × 10⁻¹⁰ M.',
          '[OH⁻] = K_w / [H₃O⁺] = 10⁻¹⁴ / 10⁻⁴ = 1,0 × 10⁻¹⁰ M.'
        ]
      ),
      q(
        'What does it mean for a substance like water (H₂O) or bicarbonate (HCO₃⁻) to be amphoteric?',
        'Che cosa significa che una specie come H₂O o HCO₃⁻ è anfotera?',
        [
          ['It can act as either a proton donor (acid) or a proton acceptor (base)', 'Può comportarsi sia da donatore di protoni (acido) sia da accettore (base)'],
          ['It is always strictly insoluble in polar solvents', 'È sempre completamente insolubile nei solventi polari'],
          ['It changes from solid directly to plasma', 'Passa direttamente da solido a plasma'],
          ['It has pH fixed at zero under all dilutions', 'Mantiene pH fisso a zero in ogni diluizione']
        ],
        [
          'H₂O donates H⁺ when paired with NH₃ and accepts H⁺ when paired with HCl.',
          'H₂O cede H⁺ con NH₃ (comportandosi da acido) e accetta H⁺ con HCl (comportandosi da base).'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l3_m5',
    arc: 1,
    sec: 'L3.5',
    pages: '363–382',
    hue: 344,
    title: ['pH Scale, Buffers & Titrations', 'Scala del pH, tamponi e titolazioni'],
    topic: [
      'Logarithmic pH/pOH calculations, acid–base neutralization titrations, equivalence point, and buffer solutions',
      'Calcoli logaritmici di pH/pOH, titolazioni acido-base, punto di equivalenza e soluzioni tampone'
    ],
    demon: ['The Linear pH Fiend', 'Il Demone del pH Lineare'],
    tech: ['Proton Form · Second Technique: Equivalence Neutralizer', 'Stile Protonico · Seconda Tecnica: Neutralizzazione al Punto Equivalente'],
    lessons: [
      {
        vis: 'chemAcidsPH',
        text: [
          '<p>Because [H₃O⁺] spans 14 orders of magnitude, chemists use a logarithmic scale: <b>pH = −log₁₀[H₃O⁺]</b> and <b>pOH = −log₁₀[OH⁻]</b>, with <b>pH + pOH = 14</b> at 25 °C! Remember: every decrease of <b>1 pH unit</b> means the solution is <b>10 times more acidic</b> (pH 3 has 10× higher [H₃O⁺] than pH 4, and 100× higher than pH 5).</p>',
          '<p>Poiché [H₃O⁺] varia di 14 ordini di grandezza si usa la scala logaritmica: <b>pH = −log₁₀[H₃O⁺]</b> e <b>pOH = −log₁₀[OH⁻]</b>, legate a 25 °C da <b>pH + pOH = 14</b>! Ogni unità in meno di pH indica un’acidità <b>10 volte maggiore</b> (pH 3 è 10 volte più acido di pH 4 e 100 volte più di pH 5).</p>'
        ]
      },
      {
        vis: 'chemAcidsPH',
        text: [
          '<p>An <b>acid–base titration</b> measures an unknown concentration by dripping a known standard base (titrant) from a burette into an acid until the <b>equivalence point</b>, where moles of added OH⁻ equal initial moles of H⁺ (<b>Mₐ·Vₐ = M_b·V_b</b> for 1:1 monoprotic pairs like HCl + NaOH → NaCl + H₂O). A pH indicator (like phenolphthalein) changes color right near equivalence.</p>',
          '<p>La <b>titolazione acido–base</b> determina una concentrazione ignota aggiungendo goccia a goccia un titolante noto da una buretta fino al <b>punto di equivalenza</b>, dove le moli di OH⁻ eguagliano quelle di H⁺ (<b>Mₐ·Vₐ = M_b·V_b</b> per acidi/basi monoprotici come HCl + NaOH). Un indicatore cambia colore proprio attorno all’equivalenza.</p>'
        ]
      },
      {
        vis: 'chemAcidsPH',
        text: [
          '<p>A <b>buffer solution</b> (weak acid + conjugate salt, like blood’s H₂CO₃ / HCO₃⁻ at pH 7.4) acts like a shock absorber—it neutralizes small acid or base drops so pH barely budges!</p>',
          '<p>Una <b>soluzione tampone</b> (acido debole + suo sale coniugato, come il bicarbonato nel sangue a pH 7,4) fa da ammortizzatore: assorbe piccole aggiunte di acido o base mantenendo il pH quasi fisso!</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Linear pH Fiend! Moving from pH 2 to pH 4 cuts acidity in half, and 1.0 M NaOH has pH = 0!</p>',
      '<p>Sono il Demone del pH Lineare! Passando da pH 2 a pH 4 l’acidità si dimezza, e NaOH 1,0 M ha pH = 0!</p>'
    ],
    quiz: [
      q(
        'What is the pH of a 0.0010 M (1.0 × 10⁻³ M) aqueous solution of the strong acid HCl?',
        'Qual è il pH di una soluzione acquosa 0,0010 M (1,0 × 10⁻³ M) di acido forte HCl?',
        [
          ['3.0', '3,0'],
          ['11.0', '11,0'],
          ['1.0', '1,0'],
          ['0.001', '0,001']
        ],
        [
          'Strong HCl ionizes 100%, so [H₃O⁺] = 10⁻³ M and pH = −log₁₀(10⁻³) = 3.0.',
          'Essendo HCl un acido forte, [H₃O⁺] = 10⁻³ M, quindi pH = −log₁₀(10⁻³) = 3,0.'
        ]
      ),
      q(
        'What is the pH of a 0.010 M (1.0 × 10⁻² M) aqueous solution of the strong base NaOH at 25 °C?',
        'Qual è il pH di una soluzione acquosa 0,010 M (1,0 × 10⁻² M) di base forte NaOH a 25 °C?',
        [
          ['12.0', '12,0'],
          ['2.0', '2,0'],
          ['10.0', '10,0'],
          ['7.0', '7,0']
        ],
        [
          '[OH⁻] = 10⁻² M → pOH = 2.0 → pH = 14 − 2.0 = 12.0 (strongly basic!).',
          '[OH⁻] = 10⁻² M → pOH = 2,0 → pH = 14 − 2,0 = 12,0 (soluzione fortemente basica).'
        ]
      ),
      q(
        'In a titration, 25.0 mL of unknown HCl are completely neutralized by 50.0 mL of 0.10 M NaOH. What is the HCl molarity?',
        'In una titolazione, 25,0 mL di HCl a concentrazione ignota vengono neutralizzati da 50,0 mL di NaOH 0,10 M. Qual è la molarità di HCl?',
        [
          ['0.20 M', '0,20 M'],
          ['0.050 M', '0,050 M'],
          ['0.10 M', '0,10 M'],
          ['0.40 M', '0,40 M']
        ],
        [
          'Mₐ = (M_b · V_b) / Vₐ = (0.10 × 50.0) / 25.0 = 0.20 M.',
          'Mₐ = (M_b · V_b) / Vₐ = (0,10 × 50,0) / 25,0 = 0,20 M.'
        ]
      ),
      q(
        'By what factor does [H₃O⁺] differ between gastric juice at pH 2 and black coffee at pH 5?',
        'Di quale fattore differisce la concentrazione [H₃O⁺] tra succo gastrico a pH 2 e caffè a pH 5?',
        [
          ['pH 2 has 1,000 times (10³) higher [H₃O⁺] than pH 5', 'A pH 2 [H₃O⁺] è 1000 volte (10³) maggiore rispetto a pH 5'],
          ['pH 2 has 3 times higher [H₃O⁺] than pH 5', 'A pH 2 [H₃O⁺] è 3 volte maggiore rispetto a pH 5'],
          ['pH 5 has 1,000 times higher [H₃O⁺] than pH 2', 'A pH 5 [H₃O⁺] è 1000 volte maggiore rispetto a pH 2'],
          ['pH 2 has 30 times higher [H₃O⁺] than pH 5', 'A pH 2 [H₃O⁺] è 30 volte maggiore rispetto a pH 5']
        ],
        [
          'Three pH units equal 10³ = 1,000× change on the base-10 log scale.',
          'Tre unità di pH sulla scala logaritmica in base 10 corrispondono a un fattore 10³ = 1000 volte.'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l3_m6',
    arc: 1,
    sec: 'L3.6',
    pages: '383–400',
    hue: 22,
    title: ['Redox Reactions & Electrochemistry Intro', 'Reazioni redox ed elettrochimica'],
    topic: [
      'Oxidation vs reduction, electron transfer, oxidizing vs reducing agents, galvanic cells vs electrolysis',
      'Ossidazione e riduzione, trasferimento di elettroni, agenti ossidanti/riducenti, pile ed elettrolisi'
    ],
    demon: ['The Electron Miser', 'L’Avaro di Elettroni'],
    tech: ['Proton Form · Third Technique: Half-Cell Arc', 'Stile Protonico · Terza Tecnica: Arco Elettrochimico'],
    lessons: [
      {
        vis: 'chemRedox',
        text: [
          '<p>Many dramatic reactions—rusting, batteries, combustion, and cellular respiration—involve moving electrons between atoms: <b>redox reactions</b>, {name}! Remember <b>OIL RIG</b>: <b>Oxidation Is Loss</b> of electrons (oxidation number increases), and <b>Reduction Is Gain</b> of electrons (oxidation number decreases).</p>',
          '<p>Arrugginimento, pile, combustioni e respirazione cellulare si basano sullo scambio di elettroni nelle <b>reazioni redox</b>, {name}! Regola mnemonica chiara: nell’<b>ossidazione</b> una specie <b>perde elettroni</b> (il numero di ossidazione sale); nella <b>riduzione</b> una specie <b>acquista elettroni</b> (il N.O. scende).</p>'
        ]
      },
      {
        vis: 'chemRedox',
        text: [
          '<p>Oxidation and reduction are inseparable twins—every lost electron must go somewhere! Beware the naming twist: the species that gets <b>oxidized</b> supplies electrons to reduce the partner, so it is the <b>reducing agent</b>; the species that gets <b>reduced</b> pulls electrons off the partner, so it is the <b>oxidizing agent</b>.</p>',
          '<p>Ossidazione e riduzione avvengono sempre in coppia: gli elettroni ceduti devono essere acquistati! Attenzione ai ruoli: chi si <b>ossida</b> cede elettroni riducendo l’altra specie, quindi è l’<b>agente riducente</b>; chi si <b>riduce</b> strappa elettroni ossidando il partner, quindi è l’<b>agente ossidante</b>.</p>'
        ]
      },
      {
        vis: 'chemElectroCell',
        text: [
          '<p>Put oxidation and reduction into two separate beakers linked by a wire and salt bridge to build a <b>battery (galvanic cell)</b>: electrons stream from <b>Anode (−)</b> to <b>Cathode (+)</b> lighting devices! External electricity reverses it in <b>electrolysis</b>.</p>',
          '<p>Separando le due semireazioni in due becher collegati da filo e ponte salino nasce una <b>pila (cella galvanica)</b>: gli elettroni viaggiano dall’<b>Anodo (−)</b> al <b>Catodo (+)</b> generando corrente! L’<b>elettrolisi</b> usa corrente esterna per fare l’opposto.</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Electron Miser! An atom can oxidize happily all by itself without reducing anything else!</p>',
      '<p>Sono l’Avaro di Elettroni! Un atomo può ossidarsi benissimo da solo senza che nessun altro si riduca!</p>'
    ],
    quiz: [
      q(
        'In the redox reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), which species is oxidized and which is the oxidizing agent?',
        'Nella reazione redox Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), quale specie si ossida e qual è l’agente ossidante?',
        [
          ['Zn is oxidized (0 → +2); Cu²⁺ is the oxidizing agent', 'Zn si ossida (0 → +2); Cu²⁺ è l’agente ossidante'],
          ['Cu²⁺ is oxidized; Zn is the oxidizing agent', 'Cu²⁺ si ossida; Zn è l’agente ossidante'],
          ['Both Zn and Cu²⁺ gain electrons simultaneously', 'Sia Zn sia Cu²⁺ acquistano elettroni'],
          ['No electrons are transferred in this reaction', 'Non avviene alcun trasferimento di elettroni']
        ],
        [
          'Zn loses 2 e⁻ (0 → +2, oxidized, reducing agent) while Cu²⁺ gains 2 e⁻ (+2 → 0, reduced, oxidizing agent).',
          'Zn cede 2 elettroni (si ossida da 0 a +2) mentre Cu²⁺ li acquista (si riduce da +2 a 0 ed è l’agente ossidante).'
        ]
      ),
      q(
        'What ALWAYS happens to an atom’s oxidation number when it undergoes reduction?',
        'Che cosa succede SEMPRE al numero di ossidazione di un atomo quando subisce una riduzione?',
        [
          ['It decreases because the atom gains negatively charged electrons', 'Diminuisce perché l’atomo acquista elettroni con carica negativa'],
          ['It increases because the atom loses protons', 'Aumenta perché l’atomo perde protoni'],
          ['It stays unchanged at zero', 'Rimane invariato a zero'],
          ['It doubles regardless of electrons transferred', 'Raddoppia indipendentemente dagli elettroni scambiati']
        ],
        [
          'Reduction means gaining negative electrons, lowering the oxidation state mathematically.',
          'Ridursi significa acquistare elettroni negativi, facendo scendere il numero di ossidazione.'
        ]
      ),
      q(
        'At which electrode does oxidation ALWAYS occur in both galvanic cells and electrolytic cells?',
        'A quale elettrodo avviene SEMPRE la semireazione di ossidazione, sia nelle pile sia nell’elettrolisi?',
        [
          ['At the anode', 'All’anodo'],
          ['At the cathode', 'Al catodo'],
          ['Inside the salt bridge', 'Dentro il ponte salino'],
          ['Only inside the metallic external wire', 'Solo lungo il filo metallico esterno']
        ],
        [
          'An Ox / Red Cat: oxidation always occurs at the anode and reduction always occurs at the cathode.',
          'Regola universale: all’anodo avviene sempre l’ossidazione, al catodo avviene sempre la riduzione.'
        ]
      ),
      q(
        'What is the key energy difference between a galvanic (voltaic) cell and an electrolytic cell?',
        'Qual è la differenza energetica chiave tra una pila galvanica e una cella elettrolitica?',
        [
          ['A galvanic cell turns spontaneous redox energy into electricity; electrolysis uses electricity to force a non-spontaneous reaction', 'La pila converte una redox spontanea in corrente; l’elettrolisi usa corrente esterna per forzare una redox non spontanea'],
          ['Electrolysis generates voltage spontaneously without a power supply', 'L’elettrolisi produce corrente spontaneamente senza generatore esterno'],
          ['Galvanic cells require AC mains voltage to operate', 'Le pile richiedono corrente alternata esterna per funzionare'],
          ['Only galvanic cells transfer electrons', 'Solo le pile trasferiscono elettroni']
        ],
        [
          'Batteries run spontaneously (ΔG < 0) releasing electrical work; electrolysis invests electrical work to drive ΔG > 0 processes.',
          'La pila sfrutta una redox spontanea (ΔG < 0) erogando corrente; l’elettrolisi consuma corrente per forzare un processo ΔG > 0.'
        ]
      )
    ]
  }),

  // ========================================================================
  // ARC 9 (Unit 3 · Chapter 3): Foundational Organic Chemistry
  // ========================================================================
  makeChemMission({
    id: 'chem_l3_m7',
    arc: 2,
    sec: 'L3.7',
    pages: '401–422',
    hue: 132,
    title: ['Carbon Hybridization & Hydrocarbons', 'Ibridazione del carbonio e idrocarburi'],
    topic: [
      'Carbon tetravalence, sp³/sp²/sp hybridization, alkanes/alkenes/alkynes, IUPAC prefixes & structural isomers',
      'Tetravalenza del carbonio, ibridazione sp³/sp²/sp, alcani/alcheni/alchini, prefissi IUPAC e isomeri di struttura'
    ],
    demon: ['The Chain Tangler', 'L’Intreccia-Catene'],
    tech: ['Organic Form · First Technique: Carbon Skeleton Strike', 'Stile Organico · Prima Tecnica: Scheletro Carbonioso'],
    lessons: [
      {
        vis: 'chemOrganic',
        text: [
          '<p>Organic chemistry is the chemistry of <b>carbon</b>, {name}. Carbon always forms <b>four covalent bonds</b> (tetravalence) and links into long chains and rings using three hybridizations: <b>sp³</b> (4 single bonds, tetrahedral 109.5°), <b>sp²</b> (one C=C double bond, trigonal planar 120°), and <b>sp</b> (one C≡C triple bond, linear 180°).</p>',
          '<p>La chimica organica studia i composti del <b>carbonio</b>, {name}. Il carbonio è sempre <b>tetravalente</b> (4 legami) e forma catene o anelli con tre ibridazioni: <b>sp³</b> (4 legami singoli, tetraedrico 109,5°), <b>sp²</b> (doppio legame C=C, planare 120°) e <b>sp</b> (triplo legame C≡C, lineare 180°).</p>'
        ]
      },
      {
        vis: 'chemOrganic',
        text: [
          '<p><b>Hydrocarbons</b> contain only C and H. Memorize the IUPAC carbon stems: 1 <i>meth-</i>, 2 <i>eth-</i>, 3 <i>prop-</i>, 4 <i>but-</i>, 5 <i>pent-</i>, 6 <i>hex-</i>. Suffixes tell the family: saturated <b>alkanes</b> (-ane, <b>CₙH₂ₙ₊₂</b>, single bonds), unsaturated <b>alkenes</b> (-ene, <b>CₙH₂ₙ</b>, one C=C), and unsaturated <b>alkynes</b> (-yne / -ino, <b>CₙH₂ₙ₋₂</b>, one C≡C).</p>',
          '<p>Gli <b>idrocarburi</b> contengono solo C e H. Prefissi IUPAC per numero di atomi C: 1 <i>met-</i>, 2 <i>et-</i>, 3 <i>prop-</i>, 4 <i>but-</i>, 5 <i>pent-</i>, 6 <i>es-</i>. I suffissi indicano la famiglia: <b>alcani</b> saturi (-ano, <b>CₙH₂ₙ₊₂</b>), <b>alcheni</b> insaturi (-ene, <b>CₙH₂ₙ</b>, un C=C) e <b>alchini</b> (-ino, <b>CₙH₂ₙ₋₂</b>, un C≡C).</p>'
        ]
      },
      {
        vis: 'chemOrganic',
        text: [
          '<p>Because carbon skeletons can branch like tree limbs, two molecules can share the exact same parts list (<b>C₄H₁₀</b>) yet connect differently—straight butane vs. branched methylpropane are <b>structural isomers</b>!</p>',
          '<p>Potendo ramificarsi come i rami di un albero, lo stesso elenco di atomi (<b>C₄H₁₀</b>) forma <b>isomeri di struttura</b> diversi: butano lineare e metilpropano ramificato hanno punti di ebollizione differenti!</p>'
        ]
      }
    ],
    sort: {
      type: 'sort',
      title: ['Classify Saturated (Alkanes) vs. Unsaturated (Alkenes/Alkynes)', 'Classifica idrocarburi saturi (Alcani) e insaturi (Alcheni/Alchini)'],
      hint: [
        'Compare CₙH₂ₙ₊₂ (single bonds only, saturated) with CₙH₂ₙ or CₙH₂ₙ₋₂ (double or triple bonds, unsaturated).',
        'Confronta CₙH₂ₙ₊₂ (solo legami singoli, saturo) con formule con doppi o tripli legami (insaturi).'
      ],
      cats: [
        ['Saturated Hydrocarbon (Alkane)', 'Idrocarburo Saturo (Alcano)'],
        ['Unsaturated (Alkene / Alkyne)', 'Idrocarburo Insaturo (Alchene / Alchino)']
      ],
      items: [
        { n: ['CH₄ (Methane)', 'CH₄ (Metano)'], i: 'shield', c: 0, why: ['n=1, 2(1)+2 = 4 H atoms → saturated alkane.', 'n=1, 2(1)+2 = 4 atomi di H → alcano saturo.'] },
        { n: ['C₂H₄ (Ethene / Ethylene)', 'C₂H₄ (Etene / Etilene)'], i: 'bolt', c: 1, why: ['Matches CₙH₂ₙ with a C=C double bond.', 'Segue CₙH₂ₙ con doppio legame C=C (alchene).'] },
        { n: ['C₃H₈ (Propane)', 'C₃H₈ (Propano)'], i: 'layers', c: 0, why: ['n=3, 2(3)+2 = 8 H atoms → all single C–C bonds.', 'n=3, 2(3)+2 = 8 atomi di H → soli legami singoli.'] },
        { n: ['C₂H₂ (Ethyne / Acetylene)', 'C₂H₂ (Etino / Acetilene)'], i: 'compass', c: 1, why: ['Matches CₙH₂ₙ₋₂ with a linear C≡C triple bond.', 'Segue CₙH₂ₙ₋₂ con triplo legame lineare C≡C (alchino).'] },
        { n: ['C₅H₁₂ (Pentane)', 'C₅H₁₂ (Pentano)'], i: 'key', c: 0, why: ['n=5, 2(5)+2 = 12 H atoms → sp³ saturated alkane.', 'n=5, 2(5)+2 = 12 atomi di H → alcano sp³ saturo.'] },
        { n: ['C₄H₈ (1-Butene)', 'C₄H₈ (1-Butene)'], i: 'flow', c: 1, why: ['n=4, 2(4) = 8 H atoms → open-chain alkene with one C=C.', 'n=4, 2(4) = 8 atomi di H → alchene con doppio legame C=C.'] }
      ]
    },
    taunt: [
      '<p>I am the Chain Tangler! Every hydrocarbon with 4 carbons has 10 hydrogens and forms flat 90° squares!</p>',
      '<p>Sono l’Intreccia-Catene! Ogni idrocarburo con 4 carboni ha per forza 10 idrogeni e forma angoli piatti di 90°!</p>'
    ],
    quiz: [
      q(
        'What is the general molecular formula and IUPAC name of the straight-chain 3-carbon alkane?',
        'Quali sono la formula molecolare e il nome IUPAC dell’alcano lineare a 3 atomi di carbonio?',
        [
          ['C₃H₈ · Propane', 'C₃H₈ · Propano'],
          ['C₃H₆ · Propene', 'C₃H₆ · Propene'],
          ['C₃H₄ · Propyne', 'C₃H₄ · Propino'],
          ['C₄H₁₀ · Butane', 'C₄H₁₀ · Butano']
        ],
        [
          'Alkanes follow CₙH₂ₙ₊₂: for n = 3 (prop-), H = 2(3)+2 = 8 → C₃H₈ (propane).',
          'Gli alcani seguono CₙH₂ₙ₊₂: per n = 3 (prop-), gli idrogeni sono 2(3)+2 = 8 → C₃H₈ (propano).'
        ]
      ),
      q(
        'Which carbon hybridization corresponds to a carbon–carbon double bond (C=C) and 120° bond angles?',
        'Quale ibridazione del carbonio caratterizza il doppio legame (C=C) con angoli di circa 120°?',
        [
          ['sp² hybridization (trigonal planar)', 'Ibridazione sp² (trigonale planare)'],
          ['sp³ hybridization (tetrahedral)', 'Ibridazione sp³ (tetraedrica)'],
          ['sp hybridization (linear)', 'Ibridazione sp (lineare)'],
          ['Pure unhybridized 1s orbital', 'Orbitale puro 1s non ibrido']
        ],
        [
          'Three σ regions around each double-bonded carbon form three sp² orbitals 120° apart plus one π bond.',
          'Intorno a ciascun carbonio del doppio legame si formano tre orbitali ibridi sp² planari a 120° più un legame π.'
        ]
      ),
      q(
        'What defines two molecules as structural isomers?',
        'Che cosa definisce due molecole come isomeri di struttura?',
        [
          ['Same molecular formula, different atom-to-atom connectivity', 'Stessa formula molecolare ma diversa connettività tra gli atomi'],
          ['Different molecular formulas with identical boiling points', 'Formule molecolari diverse con identico punto di ebollizione'],
          ['Same molecule rotated 180° in empty space', 'La stessa identica molecola ruotata nello spazio'],
          ['Atoms with different proton counts Z', 'Atomi con diverso numero atomico Z']
        ],
        [
          'Isobutane and n-butane both have formula C₄H₁₀ but different carbon skeletons and properties.',
          'Butano e metilpropano condividono la formula C₄H₁₀ ma hanno scheletri carboniosi differenti.'
        ]
      ),
      q(
        'Classify the hydrocarbon C₄H₆ (open chain with one multiple bond):',
        'Classifica l’idrocarburo a catena aperta con un solo legame multiplo di formula C₄H₆:',
        [
          ['Alkyne (matches CₙH₂ₙ₋₂, contains a C≡C triple bond)', 'Alchino (segue CₙH₂ₙ₋₂, contiene un triplo legame C≡C)'],
          ['Alkane (matches CₙH₂ₙ₊₂)', 'Alcano (segue CₙH₂ₙ₊₂)'],
          ['Alkene (matches CₙH₂ₙ)', 'Alchene (segue CₙH₂ₙ)'],
          ['Saturated hydrocarbon with sp³ carbons only', 'Idrocarburo saturo con soli carboni sp³']
        ],
        [
          'For n = 4, 2n − 2 = 6, matching the alkyne homologous series (butyne).',
          'Per n = 4, 2n − 2 = 6 corrisponde alla serie degli alchini (butino).'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l3_m8',
    arc: 2,
    sec: 'L3.8',
    pages: '423–442',
    hue: 150,
    title: ['Aromaticity & Organic Functional Groups', 'Aromaticità e gruppi funzionali'],
    topic: [
      'Benzene aromatic ring; alcohols, aldehydes, ketones, carboxylic acids, esters, and amines',
      'Anello aromatico del benzene; alcoli, aldeidi, chetoni, acidi carbossilici, esteri e ammine'
    ],
    demon: ['The Functional Blur', 'La Nebbia Funzionale'],
    tech: ['Organic Form · Second Technique: Group Identifier', 'Stile Organico · Seconda Tecnica: Identifica Gruppo'],
    lessons: [
      {
        vis: 'chemOrganic',
        text: [
          '<p>Swap one or more H atoms for oxygen or nitrogen motifs—<b>functional groups</b>—and an inert hydrocarbon transforms into alcohols, acids, medicines, or polymers, {name}! First, know <b>benzene (C₆H₆)</b>: a flat hexagonal ring whose six π electrons are completely delocalized (<b>aromaticity</b>), making it far more stable than ordinary alkenes.</p>',
          '<p>Sostituendo uno o più idrogeni con atomi come ossigeno o azoto compaiono i <b>gruppi funzionali</b> che governano la reattività organica, {name}! Prima nota il <b>benzene (C₆H₆)</b>: un anello esagonale planare con sei elettroni π completamente delocalizzati (<b>aromaticità</b>), molto più stabile di un normale alchene.</p>'
        ]
      },
      {
        vis: 'chemOrganic',
        text: [
          '<p>Spot oxygen functional groups fast: <b>Alcohols (R–OH, suffix -ol)</b> like ethanol CH₃CH₂OH form H-bonds; <b>Aldehydes (R–CHO, -al)</b> put C=O at a chain end while <b>Ketones (R–CO–R′, -one)</b> put C=O inside the chain; <b>Carboxylic acids (R–COOH, -oic acid)</b> like acetic acid release H⁺ weakly in water.</p>',
          '<p>Riconosci i gruppi con l’ossigeno: gli <b>Alcoli (R–OH, suffisso -olo)</b> come l’etanolo formano legami a idrogeno; le <b>Aldeidi (R–CHO, -ale)</b> hanno C=O a fine catena mentre i <b>Chetoni (R–CO–R′, -one)</b> lo hanno all’interno; gli <b>Acidi carbossilici (R–COOH, acido -oico)</b> cedono debolmente H⁺ in acqua.</p>'
        ]
      },
      {
        vis: 'chemOrganic',
        text: [
          '<p>Meet two more everyday groups: <b>Esters (R–COO–R′)</b> create fruit scents (banana, pineapple), while <b>Amines (R–NH₂)</b> act as weak organic bases and form amino acids in proteins!</p>',
          '<p>Ecco altri due gruppi chiave: gli <b>Esteri (R–COO–R′)</b> regalano gli aromi della frutta, e le <b>Ammine (R–NH₂)</b> sono basi deboli organiche fondamentali negli amminoacidi e nelle proteine!</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Functional Blur! Ethanol, ethanal, and ethanoic acid all have two carbons, so their chemistry is identical!</p>',
      '<p>Sono la Nebbia Funzionale! Etanolo, etanale e acido etanoico hanno tutti due carboni, quindi reagiscono allo stesso modo!</p>'
    ],
    quiz: [
      q(
        'Which functional group identifies a carboxylic acid (such as acetic / ethanoic acid)?',
        'Quale gruppo funzionale identifica un acido carbossilico (come l’acido acetico o etanoico)?',
        [
          ['Carboxyl group (–COOH)', 'Gruppo carbossilico (–COOH)'],
          ['Hydroxyl group (–OH)', 'Gruppo ossidrilico (–OH)'],
          ['Amino group (–NH₂)', 'Gruppo amminico (–NH₂)'],
          ['Carbon–carbon triple bond (–C≡C–)', 'Triplo legame carbonio-carbonio (–C≡C–)']
        ],
        [
          'The carboxyl group combines C=O and –OH on the same carbon, enabling weak proton donation.',
          'Il gruppo carbossilico unisce C=O e –OH sullo stesso carbonio, conferendo comportamento acido.'
        ]
      ),
      q(
        'How does an aldehyde structurally differ from a ketone?',
        'In che cosa si differenzia strutturalmente un’aldeide da un chetone?',
        [
          ['In an aldehyde, the C=O carbonyl sits at the end of a carbon chain (attached to H); in a ketone, C=O lies between two carbons', 'Nell’aldeide il gruppo carbonilico C=O si trova all’estremità della catena (legato a H); nel chetone è interno tra due carboni'],
          ['Aldehydes contain nitrogen while ketones contain sulfur', 'Le aldeidi contengono azoto mentre i chetoni contengono zolfo'],
          ['Ketones have no oxygen atoms in their formula', 'I chetoni non contengono atomi di ossigeno'],
          ['Aldehydes are ionic salts dissolved in benzene', 'Le aldeidi sono sali ionici disciolti nel benzene']
        ],
        [
          'Propanal (CH₃CH₂CHO) places C=O on C1, whereas propanone/acetone (CH₃COCH₃) places C=O on C2.',
          'Nelle aldeidi (R–CHO) il carbonile è terminale; nei chetoni (R–CO–R′) è legato a due atomi di carbonio.'
        ]
      ),
      q(
        'Why are all six carbon–carbon bonds in benzene (C₆H₆) identical in length, intermediate between single and double bonds?',
        'Perché nel benzene (C₆H₆) tutti i sei legami carbonio-carbonio hanno identica lunghezza intermedia tra singolo e doppio?',
        [
          ['Six π electrons are delocalized evenly around the entire planar aromatic ring', 'I sei elettroni π sono delocalizzati uniformemente su tutto l’anello planare'],
          ['Benzene contains six sp³ carbons linked to twelve hydrogens', 'Il benzene possiede sei carboni sp³ legati a dodici idrogeni'],
          ['Hydrogen atoms jump rapidly across the center of the ring', 'Gli atomi di idrogeno saltano attraverso il centro dell’anello'],
          ['Three carbons are ionic cations and three are anions', 'Tre carboni sono cationi e tre sono anioni']
        ],
        [
          'Resonance delocalization spreads π electron density equally over all six C–C bonds (bond order ~1.5).',
          'La risonanza distribuisce in modo uniforme i 6 elettroni π lungo l’intero esagono planare.'
        ]
      ),
      q(
        'Which functional class acts as an organic weak base in water due to nitrogen’s lone electron pair?',
        'Quale classe di composti organici si comporta da base debole grazie al doppietto solitario sull’azoto?',
        [
          ['Amines (R–NH₂)', 'Ammine (R–NH₂)'],
          ['Alkanes (CₙH₂ₙ₊₂)', 'Alcani (CₙH₂ₙ₊₂)'],
          ['Carboxylic acids (R–COOH)', 'Acidi carbossilici (R–COOH)'],
          ['Esters (R–COO–R′)', 'Esteri (R–COO–R′)']
        ],
        [
          'Like ammonia NH₃, amines accept H⁺ via the lone pair on nitrogen (forming R–NH₃⁺).',
          'Come l’ammoniaca NH₃, le ammine accettano un protone H⁺ tramite il doppietto dell’azoto (formando R–NH₃⁺).'
        ]
      )
    ]
  }),

  makeChemMission({
    id: 'chem_l3_m9',
    arc: 2,
    sec: 'L3.9',
    pages: '443–460',
    hue: 286,
    horns: 3,
    eyes: 3,
    boss: true,
    title: ['Grand Synthesis: Equilibrium, Redox & Organic Mastery', 'Sintesi finale: equilibrio, redox e organica'],
    topic: [
      'Integrating Haber-process equilibrium, esterification, polymerization, and bio-redox buffers',
      'Sintesi integrata: equilibrio del processo Haber, esterificazione, polimerizzazione e sistemi redox/tampone biologici'
    ],
    demon: ['The Grand Alchemist of Chaos', 'Il Grande Alchimista del Caos'],
    tech: ['Master Chemistry · Ultimate Technique: Total Reaction Resonance', 'Maestro della Chimica · Tecnica Suprema: Risonanza Chimica Totale'],
    lessons: [
      {
        vis: 'chemPolymers',
        text: [
          '<p>Welcome to the final Chemistry trial, {name}! Real-world chemistry blends all three levels: in <b>esterification</b>, acid + alcohol <b>⇌</b> ester + H₂O is reversible—removing water pushes equilibrium right to boost yield!</p>',
          '<p>Benvenuta alla prova finale di Chimica, {name}! Nell’<b>esterificazione</b>, acido + alcol <b>⇌</b> estere + H₂O è una reazione reversibile: togliere acqua sposta l’equilibrio a destra aumentando la resa!</p>'
        ]
      },
      {
        vis: 'chemPolymers',
        text: [
          '<p>And look at <b>polymers</b>: thousands of ethene (CH₂=CH₂) monomers open their double bond like Lego links to form polyethylene plastics, while amino acids snap together into proteins!</p>',
          '<p>Così nascono i <b>polimeri</b>: migliaia di monomeri di etene (CH₂=CH₂) aprono il doppio legame per agganciarsi in catene di polietilene, proprio come gli amminoacidi nelle proteine!</p>'
        ]
      },
      {
        vis: 'chemEquilibrium',
        text: [
          '<p>Finally, industry balances <b>speed vs. equilibrium</b>: in ammonia synthesis (N₂ + 3 H₂ ⇌ 2 NH₃), high pressure favors products, medium heat keeps particles moving, and an iron catalyst cuts Eₐ. Put every skill together!</p>',
          '<p>Infine l’industria bilancia <b>velocità ed equilibrio</b>: nella sintesi dell’ammoniaca (N₂ + 3 H₂ ⇌ 2 NH₃), alta pressione spinge verso NH₃, calore moderato accelera gli urti e il catalizzatore abbatte Eₐ. Usa tutte le tue armi!</p>'
        ]
      }
    ],
    taunt: [
      '<p>I am the Grand Alchemist of Chaos! Equilibrium, pH, oxidation states, and organic rings—let all your knowledge shatter in the final crucible!</p>',
      '<p>Sono il Grande Alchimista del Caos! Equilibrio, pH, redox e chimica organica: tutto si fonderà nel crogiolo finale!</p>'
    ],
    quiz: [
      q(
        'In the reversible esterification CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O, how can chemists push yield to the right using Le Châtelier?',
        'Nell’esterificazione reversibile CH₃COOH + CH₃CH₂OH ⇌ CH₃COOCH₂CH₃ + H₂O, come si sposta l’equilibrio a destra per aumentare l’estere?',
        [
          ['Remove water (H₂O) as it forms or add excess ethanol', 'Rimuovere l’acqua man mano che si forma o aggiungere etanolo in eccesso'],
          ['Add large amounts of pure liquid water to the flask', 'Aggiungere molta acqua liquida pura nel reattore'],
          ['Increase catalyst concentration to raise K_eq tenfold', 'Aumentare il catalizzatore per decuplicare K_eq'],
          ['Dilute both reactants with ethyl acetate product', 'Aggiungere estere prodotto in eccesso ai reagenti']
        ],
        [
          'Removing a product (water) or adding a reactant (ethanol) drives equilibrium toward ester formation.',
          'Sottrarre un prodotto (acqua) o aumentare un reagente (etanolo) sposta l’equilibrio verso i prodotti.'
        ]
      ),
      q(
        'Which pair of reactants produces an ester upon heating with an acid catalyst?',
        'Quale coppia di reagenti forma un estere per riscaldamento in presenza di catalizzatore acido?',
        [
          ['A carboxylic acid and an alcohol', 'Un acido carbossilico e un alcol'],
          ['Two saturated alkanes', 'Due alcani saturi'],
          ['A noble gas and a ketone', 'Un gas nobile e un chetone'],
          ['Sodium metal and aqueous NaCl', 'Sodio metallico e NaCl in acqua']
        ],
        [
          'R–COOH + R′–OH ⇌ R–COOR′ + H₂O is the classic Fischer esterification reaction.',
          'Acido carbossilico (R–COOH) + alcol (R′–OH) producono estere + acqua.'
        ]
      ),
      q(
        'How does polyethylene form from ethene monomers (CH₂=CH₂)?',
        'Come si forma il polimero polietilene a partire dai monomeri di etene (CH₂=CH₂)?',
        [
          ['Repeated opening of C=C double bonds links monomers into long –CH₂–CH₂– chains (addition polymerization)', 'I doppi legami C=C si aprono unendo i monomeri in lunghe catene –CH₂–CH₂– (poliaddizione)'],
          ['Ethene undergoes combustion into solid CO₂ fibers', 'L’etene brucia trasformandosi in fibre solide di CO₂'],
          ['Ethene ions form an ionic NaCl crystal lattice', 'Le molecole di etene formano un reticolo ionico come NaCl'],
          ['Nitrogen atoms cross-link methane molecules at 0 K', 'Atomi di azoto uniscono il metano a 0 K']
        ],
        [
          'Breaking each C=C π bond creates two new C–C σ links joining thousands of monomer units together.',
          'La rottura del legame π di ogni C=C permette la concatenazione ripetuta di migliaia di unità di etene.'
        ]
      ),
      q(
        'In the industrial Haber synthesis (N₂ + 3 H₂ ⇌ 2 NH₃, ΔH < 0), what role does the iron catalyst play?',
        'Nella sintesi industriale dell’ammoniaca (N₂ + 3 H₂ ⇌ 2 NH₃, ΔH < 0), qual è il ruolo del catalizzatore a base di ferro?',
        [
          ['Lowers Eₐ so equilibrium is reached much faster at operating temperature without changing K_eq', 'Abbassa l’energia di attivazione Eₐ permettendo di raggiungere l’equilibrio molto più in fretta senza variare K_eq'],
          ['Converts an endothermic step into a non-spontaneous reaction', 'Trasforma la reazione in un processo non spontaneo'],
          ['Supplies extra nitrogen atoms inside the reactor', 'Fornisce atomi di azoto supplementari durante la reazione'],
          ['Increases activation energy to cool the catalyst bed', 'Aumenta Eₐ per raffreddare l’impianto']
        ],
        [
          'Catalysts unlock fast industrial kinetics at moderate temperatures where K_eq remains favorable.',
          'Il catalizzatore accelera enormemente il raggiungimento dell’equilibrio a temperature moderate senza alterare K_eq.'
        ]
      )
    ]
  })
];
