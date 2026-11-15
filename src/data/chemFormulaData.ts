import type { FormulaCard, SubjectTopic } from './formulaData';

export const CHEM_TOPICS: SubjectTopic[] = [
  { id: 'chem-laws', subject: 'chem', name: ['Matter & Fundamental Laws', 'Materia e Leggi Ponderali'] },
  { id: 'chem-mole', subject: 'chem', name: ['The Mole & Avogadro', 'La Mole e Avogadro'] },
  { id: 'chem-gas', subject: 'chem', name: ['Gas Laws & Ideal Gas', 'Leggi dei Gas e Gas Perfetti'] },
  { id: 'chem-atom', subject: 'chem', name: ['Atomic Structure & Periodic Trends', 'Struttura Atomica e Proprietà Periodiche'] }
];

export const CHEM10_TOPICS: SubjectTopic[] = [
  { id: 'chem-bonding', subject: 'chem10', name: ['Bond Polarity & VSEPR Geometry', 'Legami Chimici e Geometria VSEPR'] },
  { id: 'chem-stoich', subject: 'chem10', name: ['Stoichiometry, Limiting Reagent & Yield', 'Stechiometria, Reagente Limitante e Resa'] },
  { id: 'chem-solutions', subject: 'chem10', name: ['Solutions, Molarity & Dilution', 'Soluzioni, Molarità e Diluizione'] }
];

export const CHEM11_TOPICS: SubjectTopic[] = [
  { id: 'chem-thermo-eq', subject: 'chem11', name: ['Thermochemistry, Kinetics & Equilibrium', 'Termochimica, Cinetica ed Equilibrio'] },
  { id: 'chem-acids-redox', subject: 'chem11', name: ['Acids, Bases, pH & Redox', 'Acidi, Basi, pH e Reazioni Redox'] },
  { id: 'chem-organic', subject: 'chem11', name: ['Hydrocarbons & Functional Groups', 'Idrocarburi e Gruppi Funzionali Organici'] }
];

export const CHEM_FORMULA_CARDS: FormulaCard[] = [
  {
    id: 'chem-lavoisier',
    subject: 'chem',
    topicId: 'chem-laws',
    category: 'chem-laws',
    title: ['Law of Conservation of Mass (Lavoisier)', 'Legge di Conservazione della Massa (Lavoisier)'],
    formula: 'Σ m(reactants) = Σ m(products)',
    rules: [
      {
        name: ['Closed System Rule', 'Sistema Chiuso'],
        math: 'm_total(before) = m_total(after)',
        desc: ['In any chemical reaction inside a closed container, total mass remains strictly constant.', 'In ogni reazione chimica in sistema chiuso la massa totale dei reagenti è uguale a quella dei prodotti.']
      },
      {
        name: ['Proust Definite Proportions', 'Proporzioni Definite (Proust)'],
        math: 'm(A) / m(B) = const',
        desc: ['Elements in a pure compound always combine in a fixed, definite mass ratio.', 'In un composto puro gli elementi si combinano sempre secondo un rapporto di massa costante.']
      }
    ],
    example: [
      '4.0 g of H₂ + 32.0 g of O₂ produce exactly 36.0 g of H₂O.',
      '4,0 g di H₂ + 32,0 g di O₂ producono esattamente 36,0 g di H₂O.'
    ],
    trap: [
      'Watch out for open beakers where escaping gas (like CO₂) makes the remaining solid look lighter!',
      'Attenzione ai sistemi aperti: se un gas come la CO₂ sfugge nell’aria, la massa sul piatto diminuisce solo in apparenza.'
    ],
    visualKey: 'chemLaws'
  },
  {
    id: 'chem-mole-formula',
    subject: 'chem',
    topicId: 'chem-mole',
    category: 'chem-mole',
    title: ['Moles, Molar Mass & Avogadro Number', 'Moli, Massa Molare e Costante di Avogadro'],
    formula: 'n = m / M  |  N = n × Nₐ',
    rules: [
      {
        name: ['Amount of Substance (n)', 'Quantità di Sostanza (n)'],
        math: 'n = m / M  (mol = g / (g/mol))',
        desc: ['Divide the sample mass in grams by the molar mass M (g/mol) from the Periodic Table.', 'Dividi la massa in grammi per la massa molare M (g/mol) letta sulla Tavola Periodica.']
      },
      {
        name: ['Avogadro Constant (Nₐ)', 'Costante di Avogadro (Nₐ)'],
        math: 'Nₐ = 6.022 × 10²³ mol⁻¹',
        desc: ['1 mole of any substance always contains 6.022 × 10²³ elementary entities.', '1 mole di qualsiasi sostanza contiene sempre 6,022 × 10²³ entità elementari.']
      }
    ],
    example: [
      '36 g of H₂O (M = 18 g/mol) equals n = 36 / 18 = 2.0 mol = 1.204 × 10²⁴ molecules.',
      '36 g di H₂O (M = 18 g/mol) corrispondono a n = 36 / 18 = 2,0 mol = 1,204 × 10²⁴ molecole.'
    ],
    trap: [
      'Never plug kilograms into n = m / M when M is in g/mol—always convert mass to grams first.',
      'Non inserire i chilogrammi nella formula n = m / M se M è espressa in g/mol: converti prima la massa in grammi.'
    ],
    visualKey: 'chemMole'
  },
  {
    id: 'chem-ideal-gas',
    subject: 'chem',
    topicId: 'chem-gas',
    category: 'chem-gas',
    title: ['Ideal Gas Law & Kelvin Scale', 'Equazione di Stato dei Gas Perfetti e Scala Kelvin'],
    formula: 'P · V = n · R · T',
    rules: [
      {
        name: ['Kelvin Temperature', 'Temperatura Assoluta (K)'],
        math: 'T(K) = t(°C) + 273.15',
        desc: ['Always use Kelvin in gas law calculations so temperature stays strictly positive.', 'Usa sempre i Kelvin nei calcoli sui gas per evitare divisioni per zero o segni negativi.']
      },
      {
        name: ['Molar Volume at STP', 'Volume Molare a Condizioni Normali (STP)'],
        math: 'Vₘ = 22.4 L/mol (at 0 °C, 1 atm)',
        desc: ['1 mole of any ideal gas occupies 22.4 L at 0 °C (273.15 K) and 1 atm.', '1 mole di qualsiasi gas perfetto occupa 22,4 L a 0 °C (273,15 K) e 1 atm.']
      }
    ],
    example: [
      'At 273.15 K and 1 atm, 2.0 mol of N₂ occupy 2.0 × 22.4 = 44.8 L.',
      'A 273,15 K e 1 atm, 2,0 mol di N₂ occupano 2,0 × 22,4 = 44,8 L.'
    ],
    trap: [
      'If using R = 0.0821 L·atm/(mol·K), Pressure must be in atm and Volume in litres.',
      'Se usi R = 0,0821 L·atm/(mol·K), la pressione va in atm e il volume in litri.'
    ],
    visualKey: 'chemGas'
  },
  {
    id: 'chem-atom-numbers',
    subject: 'chem',
    topicId: 'chem-atom',
    category: 'chem-atom',
    title: ['Atomic Number (Z), Mass Number (A) & Orbitals', 'Numero Atomico (Z), Numero di Massa (A) e Orbitali'],
    formula: 'A = Z + N  |  max e⁻(shell n) = 2n²',
    rules: [
      {
        name: ['Protons & Neutrons', 'Protoni e Neutroni'],
        math: 'Z = protons,  N = A − Z',
        desc: ['Z defines the chemical element; isotopes share Z but differ in neutron count N.', 'Z identifica l’elemento chimico; gli isotopi hanno stesso Z ma diverso numero di neutroni N.']
      },
      {
        name: ['Electronegativity & Radius', 'Elettronegatività e Raggio Atomico'],
        math: 'EN ↑ across period, ↓ down group',
        desc: ['Fluorine (F) has the highest electronegativity; atomic radius grows down a group.', 'Il fluoro (F) ha l’elettronegatività massima; il raggio atomico cresce scendendo lungo un gruppo.']
      }
    ],
    example: [
      'Carbon-14 (Z = 6, A = 14) has 6 protons, 6 electrons, and 14 − 6 = 8 neutrons.',
      'Il Carbonio-14 (Z = 6, A = 14) possiede 6 protoni, 6 elettroni e 14 − 6 = 8 neutroni.'
    ],
    trap: [
      'Changing the number of neutrons creates an isotope, never a different element—only changing Z changes the element.',
      'Cambiare i neutroni crea un isotopo, non un nuovo elemento: è solo il numero atomico Z che identifica l’elemento.'
    ],
    visualKey: 'chemPeriodic'
  },
  {
    id: 'chem-polarity-vsepr',
    subject: 'chem10',
    topicId: 'chem-bonding',
    category: 'chem-bonding',
    title: ['Electronegativity Difference (Δχ) & VSEPR Angles', 'Differenza di Elettronegatività (Δχ) e Angoli VSEPR'],
    formula: 'Δχ = |χ_A − χ_B|  |  SN = bond pairs + lone pairs',
    rules: [
      {
        name: ['Bond Classification Thresholds', 'Classificazione del Legame Chimico'],
        math: 'Δχ < 0.4 nonpolar | 0.4–1.7 polar | > 1.7 ionic',
        desc: ['Compare the Pauling electronegativity difference between bonded atoms to classify bond character.', 'Confronta la differenza di elettronegatività di Pauling tra i due atomi per distinguere legame puro, polare o ionico.']
      },
      {
        name: ['VSEPR Shapes & Angles', 'Geometrie VSEPR e Angoli di Legame'],
        math: 'Linear 180° · Trig. Planar 120° · Tetrahedral 109.5°',
        desc: ['Lone pairs repel more strongly than bond pairs, compressing angles (NH₃ ~107°, H₂O ~104.5°).', 'Le coppie solitarie respingono più delle coppie di legame, riducendo l’angolo (NH₃ ~107°, H₂O ~104,5°).']
      }
    ],
    example: [
      'HCl has Δχ = |3.2 − 2.2| = 1.0 → polar covalent; CO₂ is linear (180°) so its two bond dipoles cancel out (nonpolar molecule).',
      'HCl ha Δχ = |3,2 − 2,2| = 1,0 → covalente polare; CO₂ è lineare (180°), quindi i due dipoli si annullano (molecola apolare).'
    ],
    trap: [
      'Having polar bonds does NOT guarantee a polar molecule—symmetric geometry like CO₂ or CCl₄ cancels individual dipoles!',
      'Avere legami polari NON basta per rendere polare l’intera molecola: geometrie simmetriche come CO₂ o CCl₄ annullano i dipoli!'
    ],
    visualKey: 'chemVSEPR'
  },
  {
    id: 'chem-stoich-yield',
    subject: 'chem10',
    topicId: 'chem-stoich',
    category: 'chem-stoich',
    title: ['Stoichiometry, Limiting Reagent & Percent Yield', 'Stechiometria, Reagente Limitante e Resa Percentuale'],
    formula: 'n_B = n_A × (coeff_B / coeff_A)  |  %Y = (actual / theoretical) × 100',
    rules: [
      {
        name: ['Mole-to-Mole Bridge', 'Ponte Stechiometrico tra Moli'],
        math: 'n_A / a = n_B / b',
        desc: ['Always convert given grams into moles BEFORE applying balanced equation coefficients.', 'Converti sempre i grammi iniziali in moli PRIMA di applicare i coefficienti dell’equazione bilanciata.']
      },
      {
        name: ['Limiting Reagent Check', 'Verifica del Reagente Limitante'],
        math: 'min(n_A / a, n_B / b)',
        desc: ['Divide available moles by each stoichiometric coefficient; the smaller ratio runs out first and dictates product yield.', 'Dividi le moli disponibili per ciascun coefficiente: il rapporto minore indica il reagente limitante che si esaurisce per primo.']
      }
    ],
    example: [
      'In 2 H₂ + O₂ → 2 H₂O, mixing 4.0 mol H₂ (4/2 = 2) with 3.0 mol O₂ (3/1 = 3) makes H₂ limiting, yielding max 4.0 mol H₂O.',
      'In 2 H₂ + O₂ → 2 H₂O, con 4,0 mol di H₂ (4/2 = 2) e 3,0 mol di O₂ (3/1 = 3), il limitante è H₂ e si formano al massimo 4,0 mol di H₂O.'
    ],
    trap: [
      'The reactant with fewer grams is not automatically the limiting reagent—you must compare n / coefficient!',
      'Il reagente presente in massa minore in grammi non è necessariamente il limitante: confronta sempre il rapporto n / coefficiente!'
    ],
    visualKey: 'chemStoich'
  },
  {
    id: 'chem-molarity-dilution',
    subject: 'chem10',
    topicId: 'chem-solutions',
    category: 'chem-solutions',
    title: ['Molarity (M), Dilution & Mass Concentration', 'Molarità (M), Diluizione e Concentrazione Percentuale'],
    formula: 'M = n_solute / V_solution(L)  |  M₁·V₁ = M₂·V₂',
    rules: [
      {
        name: ['Molarity Definition', 'Definizione di Molarità'],
        math: 'M = n / V (mol/L)',
        desc: ['Volume V must be the total volume of the final solution in litres (convert mL by ÷ 1000).', 'Il volume V è quello totale della soluzione espresso in litri (dividi i mL per 1000).']
      },
      {
        name: ['Dilution Conservation', 'Conservazione delle Moli nella Diluizione'],
        math: 'n_before = n_after → M₁V₁ = M₂V₂',
        desc: ['Adding pure solvent increases total volume without changing the moles of dissolved solute.', 'Aggiungendo solvente aumenta il volume totale della soluzione ma restano invariate le moli di soluto.']
      }
    ],
    example: [
      'Diluting 100 mL of 2.0 M NaCl to 400 mL gives M₂ = (2.0 × 100) / 400 = 0.50 M.',
      'Diluendo 100 mL di NaCl 2,0 M fino a 400 mL si ottiene M₂ = (2,0 × 100) / 400 = 0,50 M.'
    ],
    trap: [
      'V₂ in M₁V₁ = M₂V₂ is the FINAL total volume—if the problem asks how much water to add, compute V_added = V₂ − V₁.',
      'V₂ in M₁V₁ = M₂V₂ è il volume FINALE totale: se chiedono quanta acqua aggiungere, calcola V_aggiunta = V₂ − V₁.'
    ],
    visualKey: 'chemSolutions'
  },
  {
    id: 'chem-gibbs-keq',
    subject: 'chem11',
    topicId: 'chem-thermo-eq',
    category: 'chem-thermo-eq',
    title: ['Gibbs Free Energy (ΔG) & Equilibrium Constant (K_eq)', 'Energia Libera di Gibbs (ΔG) e Costante K_eq'],
    formula: 'ΔG = ΔH − T·ΔS  |  K_eq = [C]ᶜ[D]ᵈ / ([A]ᵃ[B]ᵇ)',
    rules: [
      {
        name: ['Spontaneity Sign', 'Criterio di Spontaneità'],
        math: 'ΔG < 0 spontaneous | ΔG = 0 equilibrium',
        desc: ['Exothermic (ΔH < 0) processes with rising disorder (ΔS > 0) are spontaneous at all temperatures.', 'Un processo esotermico (ΔH < 0) con aumento di entropia (ΔS > 0) è spontaneo a qualsiasi temperatura.']
      },
      {
        name: ['Equilibrium Law & Catalyst Rule', 'Legge di Azione di Massa e Catalizzatore'],
        math: 'Only T changes K_eq (pure solids/liquids omitted)',
        desc: ['Concentrations or pressure shift Q back toward K_eq without altering K_eq; catalysts speed up both directions equally.', 'Concentrazione e pressione spostano la reazione senza cambiare K_eq; il catalizzatore non sposta l’equilibrio.']
      }
    ],
    example: [
      'For N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0), raising pressure shifts toward fewer gas moles (right, more NH₃), while heating shifts left.',
      'Per N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH < 0), aumentare la pressione sposta a destra (meno moli gassose), mentre scaldare sposta a sinistra.'
    ],
    trap: [
      'Never include pure solids (s) or pure liquid water (l) in the K_eq expression—only gases and aqueous solutes appear.',
      'Non inserire mai solidi puri (s) o acqua liquida pura (l) in K_eq: compaiono solo gas e specie in soluzione acquosa.'
    ],
    visualKey: 'chemEquilibrium'
  },
  {
    id: 'chem-ph-titration',
    subject: 'chem11',
    topicId: 'chem-acids-redox',
    category: 'chem-acids-redox',
    title: ['pH Scale, Water Autoionization (K_w) & Titration', 'Scala del pH, K_w e Titolazione Acido-Base'],
    formula: 'pH = −log₁₀[H₃O⁺]  |  pH + pOH = 14  |  MₐVₐ = M_bV_b',
    rules: [
      {
        name: ['Water Ionic Product at 25 °C', 'Prodotto Ionico dell’Acqua a 25 °C'],
        math: 'K_w = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴',
        desc: ['Every 1-unit drop in pH means a 10× increase in hydronium ion concentration [H₃O⁺].', 'Ogni unità in meno di pH corrisponde a una concentrazione di [H₃O⁺] 10 volte maggiore.']
      },
      {
        name: ['Monoprotic Equivalence Point', 'Punto di Equivalenza (Monoprotici)'],
        math: 'n(H⁺) = n(OH⁻) → Mₐ · Vₐ = M_b · V_b',
        desc: ['For diprotic acids like H₂SO₄ reacting with NaOH, account for the 2 : 1 stoichiometry factor (2 MₐVₐ = M_bV_b).', 'Per acidi diprotici come H₂SO₄ con NaOH, ricorda il fattore stechiometrico 2 : 1 (2 MₐVₐ = M_bV_b).']
      }
    ],
    example: [
      'A 0.01 M (10⁻² M) strong HCl solution has pH = 2.0 and pOH = 12.0; 25 mL neutralize 25 mL of 0.01 M NaOH.',
      'Una soluzione HCl forte 0,01 M (10⁻² M) ha pH = 2,0 e pOH = 12,0; 25 mL neutralizzano 25 mL di NaOH 0,01 M.'
    ],
    trap: [
      'Check stoichiometry in titrations! One mole of H₂SO₄ supplies 2 moles of H⁺, whereas NaOH supplies 1 OH⁻.',
      'Attenzione alla stechiometria nelle titolazioni! Una mole di H₂SO₄ libera 2 moli di H⁺, mentre NaOH cede un solo OH⁻.'
    ],
    visualKey: 'chemAcidsPH'
  },
  {
    id: 'chem-organic-series',
    subject: 'chem11',
    topicId: 'chem-organic',
    category: 'chem-organic',
    title: ['Hydrocarbon Formulas & Carbon Hybridization', 'Formule degli Idrocarburi e Ibridazione del Carbonio'],
    formula: 'Alkanes CₙH₂ₙ₊₂ · Alkenes CₙH₂ₙ · Alkynes CₙH₂ₙ₋₂',
    rules: [
      {
        name: ['Carbon Hybridization & Geometry', 'Ibridazione del Carbonio e Geometria'],
        math: 'sp³ (4 single, 109.5°) · sp² (C=C, 120°) · sp (C≡C, 180°)',
        desc: ['Carbon always forms 4 covalent bonds in neutral organic molecules (tetravalence).', 'Il carbonio è tetravalente e forma sempre 4 legami covalenti nei composti organici neutri.']
      },
      {
        name: ['Core Functional Groups', 'Gruppi Funzionali Fondamentali'],
        math: '−OH alcohol · −CHO aldehyde · −COOH carboxylic acid',
        desc: ['Functional groups dictate organic reactivity, hydrogen bonding ability, and IUPAC suffix (-ol, -al, -one, -oic acid).', 'Il gruppo funzionale determina reattività, polarità e suffisso IUPAC (-olo, -ale, -one, acido -oico).']
      }
    ],
    example: [
      'For n = 4 carbons: butane is C₄H₁₀ (sp³), butene is C₄H₈ (one C=C), and butyne is C₄H₆ (one C≡C).',
      'Per n = 4 atomi di carbonio: il butano è C₄H₁₀ (sp³), il butene è C₄H₈ (un C=C) e il butino è C₄H₆ (un C≡C).'
    ],
    trap: [
      'Cyclic alkanes (cycloalkanes like cyclohexane C₆H₁₂) lose 2 H atoms to close the ring, matching the CₙH₂ₙ formula of alkenes!',
      'I cicloalcani (es. cicloesano C₆H₁₂) perdono 2 H chiudendo l’anello e hanno la stessa formula generale CₙH₂ₙ degli alcheni!'
    ],
    visualKey: 'chemOrganic'
  }
];
