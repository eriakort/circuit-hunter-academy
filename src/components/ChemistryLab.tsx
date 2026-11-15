import React from 'react';
import type { Language } from '../types';
import { pick } from './chemLabs/chemLabShared';
import {
  AufbauOrbitalLab,
  GasPistonLab,
  IsotopeBuilderLab,
  LawsScaleLab,
  MixturesLensLab,
  MoleLab,
  PeriodicTrendsLab,
  SeparationLab,
  StatesTransformLab
} from './chemLabs/ChemLevel1Labs';
import {
  BondPolarityLab,
  CrissCrossLab,
  EquationBalanceLab,
  IonicMetallicLab,
  LimitingYieldLab,
  MoleBridgeLab,
  SolutionsLab,
  TernaryFlaskLab,
  VseprShapeLab
} from './chemLabs/ChemLevel2Labs';
import {
  BronstedHopLab,
  EquilibriumLab,
  FunctionalGroupLab,
  GalvanicCellLab,
  HydrocarbonBuilderLab,
  KineticsLab,
  PolymerEsterLab,
  ThermoGibbsLab,
  TitrationLab
} from './chemLabs/ChemLevel3Labs';

type Props = { missionId: string; lang: Language };

export const CHEM_LAB_META: Record<string, { title: [string, string]; subtitle: [string, string]; note: [string, string] }> = {
  chem_l1_m1: {
    title: ['Animated Phase Chamber & Matter Changes', 'Camera Animata degli Stati e Trasformazioni'],
    subtitle: [
      'Drag the temperature slider to watch particles freeze, slide, or bounce like a gas, or toggle Physical vs. Chemical changes.',
      'Muovi il cursore della temperatura per vedere le particelle vibrare, scorrere o rimbalzare e confronta trasformazioni fisiche e chimiche.'
    ],
    note: [
      'Physical changes keep the exact same molecules; chemical reactions break bonds and create new substances.',
      'Le trasformazioni fisiche conservano le stesse molecole; le reazioni chimiche rompono e creano nuovi legami.'
    ]
  },
  chem_l1_m2: {
    title: ['Microscope Beaker: Substances vs. Mixtures', 'Becher al Microscopio: Sostanze e Miscugli'],
    subtitle: [
      'Inspect a real beaker alongside a zoomed molecular lens to tell elements, compounds, homogeneous solutions, and heterogeneous mixtures apart.',
      'Osserva un becher reale insieme alla lente molecolare per distinguere elementi, composti, soluzioni omogenee e miscugli eterogenei.'
    ],
    note: [
      'Pure substances have fixed properties; mixtures keep each ingredient intact and can be separated physically.',
      'Le sostanze pure hanno formula e proprietà fisse; nei miscugli i componenti mantengono la propria identità.'
    ]
  },
  chem_l1_m3: {
    title: ['Real-Lab Separation Bench', 'Banco Animato dei Metodi di Separazione'],
    subtitle: [
      'Switch between live animated setups for Filtration, Distillation, Centrifugation, and Chromatography.',
      'Passa tra gli apparati animati di Filtrazione, Distillazione, Centrifugazione e Cromatografia.'
    ],
    note: [
      'Every physical separation matches a real property difference: size, boiling point, density, or affinity.',
      'Ogni separazione fisica sfrutta una proprietà diversa: dimensione, punto di ebollizione, densità o affinità.'
    ]
  },
  chem_l1_m4: {
    title: ['Lavoisier Scale & Dalton Atom Blocks', 'Bilancia di Lavoisier e Blocchi di Dalton'],
    subtitle: [
      'Run the reaction with a balloon stopper vs. an open flask on a digital scale, then inspect CO vs. CO₂ atom blocks.',
      'Confronta la reazione con palloncino chiuso o bocca aperta su bilancia digitale ed esplora i blocchi di Dalton.'
    ],
    note: [
      'Matter never vanishes—open flasks only look lighter because invisible gas escapes into the air.',
      'La materia non sparisce mai: un becher aperto sembra più leggero solo perché il gas fugge nell’aria.'
    ]
  },
  chem_l1_m5: {
    title: ['Mole & Avogadro Converter', 'Convertitore Mole e Costante di Avogadro'],
    subtitle: [
      'Select a compound and drag the mass slider to see moles (n = m / M) and floating particle counts update live.',
      'Scegli un composto e regola la massa per vedere in tempo reale moli (n = m / M) e numero di particelle.'
    ],
    note: [
      'One mole always equals 6.022 × 10²³ elementary entities, regardless of molar mass.',
      'Una mole contiene sempre 6,022 × 10²³ particelle, indipendentemente dalla massa molare.'
    ]
  },
  chem_l1_m6: {
    title: ['Ideal Gas Piston Chamber (PV = nRT)', 'Camera a Pistone per Gas Perfetti (PV = nRT)'],
    subtitle: [
      'Adjust moles, Celsius temperature, and piston volume to watch gas collisions speed up and pressure respond.',
      'Regola moli, temperatura in °C e volume per vedere gli urti delle particelle accelerare e la pressione variare.'
    ],
    note: [
      'Always convert °C to Kelvin (+273.15) before applying P = nRT / V with R = 0.0821 L·atm/(mol·K).',
      'Converti sempre i °C in Kelvin (+273,15) prima di calcolare P = nRT / V con R = 0,0821 L·atm/(mol·K).'
    ]
  },
  chem_l1_m7: {
    title: ['Bohr Atom & Isotope Builder', 'Costruttore di Atomo di Bohr e Isotopi'],
    subtitle: [
      'Vary protons (Z) and neutrons (N) to watch orbiting electrons and test nuclear stability.',
      'Varia protoni (Z) e neutroni (N) per osservare gli elettroni in orbita e la stabilità del nucleo.'
    ],
    note: [
      'Changing neutrons creates isotopes of the same element; only changing Z changes the element.',
      'Variare i neutroni crea isotopi dello stesso elemento: solo il numero atomico Z cambia l’elemento.'
    ]
  },
  chem_l1_m8: {
    title: ['Interactive Aufbau & Hund Orbital Filler', 'Riempitore Interattivo di Orbitali (Aufbau e Hund)'],
    subtitle: [
      'Add electrons one by one from Hydrogen to Neon to see Aufbau, Pauli, and Hund rules fill 1s, 2s, and 2p boxes.',
      'Aggiungi elettroni uno alla volta da Idrogeno a Neon per vedere Aufbau, Pauli e Hund riempire le caselle 1s, 2s e 2p.'
    ],
    note: [
      'Degenerate 2p orbitals always take single parallel electrons (↑) before any orbital pairs up (↑↓).',
      'Gli orbitali 2p si riempiono prima con un elettrone singolo a spin parallelo (↑) in ciascuna casella prima di accoppiarsi (↑↓).'
    ]
  },
  chem_l1_m9: {
    title: ['Periodic Table Trends Explorer', 'Esploratore degli Andamenti Periodici'],
    subtitle: [
      'Click any element to watch its atomic sphere expand or shrink and compare electronegativity and ionization energy.',
      'Tocca qualsiasi elemento per osservare il raggio atomico cambiare e confrontare elettronegatività ed energia di ionizzazione.'
    ],
    note: [
      'Atomic size grows down a group (more shells) and shrinks across a period (stronger nuclear pull).',
      'Il raggio cresce lungo un gruppo (più gusci) e diminuisce lungo un periodo (nucleo più attrattivo).'
    ]
  },
  chem_l2_m1: {
    title: ['Ionic Crystal vs. Metallic Sea Lab', 'Laboratorio Cristallo Ionico vs. Mare Metallico'],
    subtitle: [
      'Transfer a valence electron from Na to Cl or strike both lattices with a hammer to see why salt shatters while copper bends.',
      'Trasferisci l’elettrone da Na a Cl o colpisci i reticoli col martello per vedere perché il sale si spezza e il rame si piega.'
    ],
    note: [
      'Shifting an ionic lattice aligns +/+ charges that repel and crack; metals stay cushioned inside mobile electrons.',
      'Spostare un reticolo ionico allinea cariche +/+ che si respingono; nei metalli il mare di elettroni mantiene coesi gli strati.'
    ]
  },
  chem_l2_m2: {
    title: ['Bond Polarity & Δχ Tug-of-War', 'Polarità di Legame e Tiro alla Fune (Δχ)'],
    subtitle: [
      'Pair two atoms to watch the shared electron cloud shift toward the stronger puller.',
      'Abbina due atomi per osservare la nube di elettroni spostarsi verso l’atomo più elettronegativo.'
    ],
    note: [
      'Thresholds: Δχ < 0.4 nonpolar covalent · 0.4 ≤ Δχ ≤ 1.7 polar covalent · Δχ > 1.7 ionic.',
      'Soglie: Δχ < 0,4 covalente apolare · 0,4 ≤ Δχ ≤ 1,7 covalente polare · Δχ > 1,7 ionico.'
    ]
  },
  chem_l2_m3: {
    title: ['VSEPR 3D Shape & Dipole Simulator', 'Simulatore di Geometria VSEPR e Dipolo'],
    subtitle: [
      'Inspect real molecules to compare bonding pairs, pulsing lone pairs, bond angles, and overall polarity.',
      'Confronta molecole reali per osservare coppie di legame, coppie solitarie, angoli e polarità netta.'
    ],
    note: [
      'Symmetric shapes (CO₂, BF₃, CH₄) cancel identical bond dipoles; lone pairs break symmetry (NH₃, H₂O).',
      'Le geometrie simmetriche (CO₂, BF₃, CH₄) annullano i dipoli; le coppie solitarie generano asimmetria (NH₃, H₂O).'
    ]
  },
  chem_l2_m4: {
    title: ['Ion Criss-Cross Formula Builder', 'Costruttore di Formule con Regola dell’Incrocio'],
    subtitle: [
      'Pick any cation and anion to watch charges cross down into balanced chemical subscripts.',
      'Scegli qualsiasi catione e anione per vedere i numeri di ossidazione incrociarsi negli indici corretti.'
    ],
    note: [
      'Neutral compounds always satisfy Σ(oxidation numbers) = 0; simplify subscripts if both share a common factor.',
      'Nei composti neutri la somma dei numeri di ossidazione vale sempre 0; semplifica gli indici quando possibile.'
    ]
  },
  chem_l2_m5: {
    title: ['Hydroxide, Oxyacid & Salt Synthesizer', 'Sintetizzatore di Idrossidi, Ossiacidi e Sali'],
    subtitle: [
      'Mix oxides with water or neutralize oxyacids with bases to track traditional -oso/-ito and -ico/-ato suffixes.',
      'Mescola ossidi e anidridi con acqua o neutralizza con idrossidi per seguire i suffissi -oso/-ito e -ico/-ato.'
    ],
    note: [
      'Acid suffixes transform cleanly in ternary salts: -oso becomes -ito, and -ico becomes -ato.',
      'Nei sali ternari i suffissi si trasformano con regolarità: -oso diventa -ito, mentre -ico diventa -ato.'
    ]
  },
  chem_l2_m6: {
    title: ['Interactive Equation Balancer & Atom Scale', 'Bilanciatore di Reazioni e Bilancia Atomica'],
    subtitle: [
      'Adjust stoichiometric coefficients until the reactant and product atom pans balance level.',
      'Regola i coefficienti stechiometrici finché i piatti degli atomi tra reagenti e prodotti tornano in equilibrio.'
    ],
    note: [
      'Balance equations only by placing whole-number coefficients in front of formulas—never alter subscripts.',
      'Bilancia le reazioni agendo solo sui coefficienti davanti alle formule, mai modificando i pedici.'
    ]
  },
  chem_l2_m7: {
    title: ['3-Step Stoichiometry Mole Bridge', 'Ponte Stechiometrico della Mole in 3 Passi'],
    subtitle: [
      'Slide starting H₂ mass to trace every conversion step from grams → moles A → moles B → product grams.',
      'Varia la massa iniziale di H₂ per seguire tutti i passaggi da grammi → moli A → moli B → grammi di prodotto.'
    ],
    note: [
      'Equations compare moles (particle counts), never raw gram masses directly.',
      'I coefficienti dell’equazione confrontano le moli (numero di particelle), mai direttamente i grammi.'
    ]
  },
  chem_l2_m8: {
    title: ['Limiting Reagent & Yield Bench', 'Banco del Reagente Limitante e Resa %'],
    subtitle: [
      'Set starting moles of H₂ and O₂ for 2 H₂ + O₂ → 2 H₂O to spot the limiting reagent, leftover excess, and actual yield.',
      'Imposta le moli iniziali di H₂ e O₂ per 2 H₂ + O₂ → 2 H₂O e individua limitante, eccesso e resa effettiva.'
    ],
    note: [
      'Compare n/coeff (n(H₂)/2 vs n(O₂)/1): the smaller ratio runs out first and sets the theoretical H₂O yield.',
      'Confronta n/coeff (n(H₂)/2 vs n(O₂)/1): il rapporto minore si esaurisce per primo e fissa la resa teorica.'
    ]
  },
  chem_l2_m9: {
    title: ['Molarity & Dilution Pouring Lab', 'Laboratorio Animato di Molarità e Diluizione'],
    subtitle: [
      'Mix solute moles into solution volume (M = n/V) or pour water to dilute a stock solution via M₁V₁ = M₂V₂.',
      'Sciogli moli di soluto nel volume (M = n/V) oppure aggiungi acqua per diluire con M₁V₁ = M₂V₂.'
    ],
    note: [
      'Dilution keeps solute moles constant while increasing final volume V₂ = V₁ + V_added.',
      'Durante la diluizione le moli di soluto restano invariate mentre aumenta il volume totale.'
    ]
  },
  chem_l3_m1: {
    title: ['Calorimeter & Gibbs ΔG Spontaneity Lab', 'Calorimetro e Spontaneità di Gibbs (ΔG)'],
    subtitle: [
      'Adjust ΔH, entropy ΔS, and Kelvin temperature T to see thermometer heat flow and when ΔG flips below zero.',
      'Regola ΔH, entropia ΔS e temperatura T in Kelvin per osservare il termometro e quando ΔG diventa negativo.'
    ],
    note: [
      'Reactions become spontaneous whenever ΔG = ΔH − T·ΔS drops below 0.',
      'Una trasformazione è spontanea ogni volta che ΔG = ΔH − T·ΔS risulta minore di 0.'
    ]
  },
  chem_l3_m2: {
    title: ['Activation Energy & Catalyst Simulator', 'Simulatore di Energia di Attivazione e Catalisi'],
    subtitle: [
      'Toggle a catalyst and vary temperature to watch the Eₐ energy hill shrink while ΔH stays invariant.',
      'Attiva il catalizzatore e varia la temperatura per osservare la barriera Eₐ abbassarsi a ΔH invariato.'
    ],
    note: [
      'A catalyst lowers the activation energy barrier (Eₐ′ < Eₐ) without ever altering ΔH or equilibrium K_eq.',
      'Il catalizzatore abbassa Eₐ senza mai modificare ΔH né la costante di equilibrio K_eq.'
    ]
  },
  chem_l3_m3: {
    title: ['Le Châtelier Equilibrium Bench', 'Banco dell’Equilibrio di Le Châtelier'],
    subtitle: [
      'Apply concentration, pressure, temperature, or catalyst changes to N₂ + 3 H₂ ⇌ 2 NH₃ (ΔH < 0) and watch the reaction arrows shift.',
      'Applica perturbazioni a N₂ + 3 H₂ ⇌ 2 NH₃ (ΔH < 0) e osserva lo spostamento delle frecce di equilibrio.'
    ],
    note: [
      'Only temperature alters K_eq; concentration and pressure temporarily disturb Q and drive a compensatory shift.',
      'Solo la temperatura cambia K_eq; concentrazione e pressione spostano l’equilibrio opponendosi allo stress.'
    ]
  },
  chem_l3_m4: {
    title: ['Brønsted–Lowry Proton Hop Simulator', 'Simulatore del Salto del Protone (Brønsted–Lowry)'],
    subtitle: [
      'Watch the glowing H⁺ proton leap from Acid donor to Base acceptor and trace conjugate acid–base pairs.',
      'Osserva il protone H⁺ saltare dall’Acido donatore alla Base accettore e riconosci le coppie coniugate.'
    ],
    note: [
      'A conjugate acid and base differ by exactly one H⁺ ion; amphiprotic water can switch roles.',
      'Ogni coppia coniugata differisce esattamente per uno ione H⁺; l’acqua anfiprotica può donare o accettare.'
    ]
  },
  chem_l3_m5: {
    title: ['Real-Lab Burette Titration & pH Curve', 'Buretta di Titolazione e Curva del pH'],
    subtitle: [
      'Drip 0.10 M NaOH from the burette into 25 mL of 0.10 M HCl and follow live flask color, pH, pOH, and S-curve marker.',
      'Fai scendere NaOH 0,10 M dalla buretta in 25 mL di HCl 0,10 M seguendo viraggio, pH, pOH e curva di titolazione.'
    ],
    note: [
      'Equivalence occurs at 25.0 mL (n(H⁺) = n(OH⁻), pH = 7.0); each 1 pH step is a 10× factor in [H₃O⁺].',
      'L’equivalenza cade a 25,0 mL (pH = 7,0); ogni unità di pH vale un fattore 10 in [H₃O⁺].'
    ]
  },
  chem_l3_m6: {
    title: ['Animated Daniell Galvanic Cell', 'Pila Galvanica di Daniell Animata'],
    subtitle: [
      'Follow electrons streaming from the oxidizing anode through the voltmeter while the salt bridge balances half-cell ions.',
      'Segui gli elettroni dall’anodo che si ossida al catodo attraverso il voltmetro con il ponte salino attivo.'
    ],
    note: [
      'Oxidation always happens at the Anode (loses e⁻); reduction always happens at the Cathode (gains e⁻).',
      'L’ossidazione avviene sempre all’Anodo (perde e⁻); la riduzione sempre al Catodo (acquista e⁻).'
    ]
  },
  chem_l3_m7: {
    title: ['Hydrocarbon Hybridization Builder', 'Costruttore di Idrocarburi e Ibridazione (sp³ / sp² / sp)'],
    subtitle: [
      'Switch single, double, and triple C–C bonds to watch geometry angles (109.5°, 120°, 180°) and H counts snap to 4 bonds.',
      'Alterna legami singoli, doppi e tripli per osservare angoli (109,5°, 120°, 180°) e numero di idrogeni.'
    ],
    note: [
      'Carbon always forms 4 covalent bonds: fewer attached hydrogens means multiple bonds or rings.',
      'Il carbonio forma sempre 4 legami covalenti: meno atomi H indicano doppi/tripli legami o anelli.'
    ]
  },
  chem_l3_m8: {
    title: ['Functional Groups & Benzene Resonance Viewer', 'Gruppi Funzionali e Risonanza del Benzene'],
    subtitle: [
      'Inspect reactive functional tags (–OH, –COOH) and Benzene’s rotating delocalized 6-electron π ring.',
      'Esplora i gruppi reattivi (–OH, –COOH) e l’anello delocalizzato a 6 elettroni π del benzene.'
    ],
    note: [
      'A molecule’s functional group governs its reactivity, acidity, and boiling point far more than its carbon chain.',
      'Il gruppo funzionale determina reattività, acidità e solubilità molto più della lunghezza della catena.'
    ]
  },
  chem_l3_m9: {
    title: ['Esterification & Polymer Zipper Lab', 'Laboratorio di Esterificazione e Polimeri'],
    subtitle: [
      'React a carboxylic acid + alcohol to squeeze out H₂O and craft fruity esters, or zip ethene monomers into a polymer chain.',
      'Fai reagire acido + alcol liberando H₂O per ottenere esteri profumati, oppure aggancia monomeri in un polimero.'
    ],
    note: [
      'Addition polymerization opens double bonds into chains without byproduct; condensation releases small molecules like H₂O.',
      'La polimerizzazione per addizione apre i doppi legami; la condensazione libera piccole molecole come H₂O.'
    ]
  }
};

export const hasChemistryLab = (missionId: string) => Boolean(CHEM_LAB_META[missionId]);

const LAB_BODY: Record<string, React.FC<{ lang: Language }>> = {
  chem_l1_m1: StatesTransformLab,
  chem_l1_m2: MixturesLensLab,
  chem_l1_m3: SeparationLab,
  chem_l1_m4: LawsScaleLab,
  chem_l1_m5: MoleLab,
  chem_l1_m6: GasPistonLab,
  chem_l1_m7: IsotopeBuilderLab,
  chem_l1_m8: AufbauOrbitalLab,
  chem_l1_m9: PeriodicTrendsLab,
  chem_l2_m1: IonicMetallicLab,
  chem_l2_m2: BondPolarityLab,
  chem_l2_m3: VseprShapeLab,
  chem_l2_m4: CrissCrossLab,
  chem_l2_m5: TernaryFlaskLab,
  chem_l2_m6: EquationBalanceLab,
  chem_l2_m7: MoleBridgeLab,
  chem_l2_m8: LimitingYieldLab,
  chem_l2_m9: SolutionsLab,
  chem_l3_m1: ThermoGibbsLab,
  chem_l3_m2: KineticsLab,
  chem_l3_m3: EquilibriumLab,
  chem_l3_m4: BronstedHopLab,
  chem_l3_m5: TitrationLab,
  chem_l3_m6: GalvanicCellLab,
  chem_l3_m7: HydrocarbonBuilderLab,
  chem_l3_m8: FunctionalGroupLab,
  chem_l3_m9: PolymerEsterLab
};

export const ChemistryLab: React.FC<Props> = ({ missionId, lang }) => {
  const meta = CHEM_LAB_META[missionId];
  const LabComponent = LAB_BODY[missionId];
  if (!meta || !LabComponent) return null;

  return (
    <section className="chem-lab" aria-label={pick(lang, meta.title[0], meta.title[1])}>
      <header className="cl-heading">
        <span className="cl-kicker">{pick(lang, 'INTERACTIVE CHEMISTRY LAB', 'LABORATORIO INTERATTIVO DI CHIMICA')}</span>
        <h3>{pick(lang, meta.title[0], meta.title[1])}</h3>
        <p>{pick(lang, meta.subtitle[0], meta.subtitle[1])}</p>
      </header>

      <LabComponent lang={lang} />

      <footer className="cl-footnote">{pick(lang, meta.note[0], meta.note[1])}</footer>
    </section>
  );
};
