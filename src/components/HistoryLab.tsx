import React from 'react';
import type { Language } from '../types';
import { pick } from './chemLabs/chemLabShared';
import {
  AlexanderAlexandriaLab,
  AlphabetDecodeLab,
  CleisthenesDemesLab,
  EtruscanArchBuilderLab,
  MinoanMycenaeanPhalanxLab,
  PolisExplorerLab,
  PrehistoryShiftLab,
  PunicMareNostrumLab,
  RepublicBalanceLab,
  RiverSurplusCuneiformLab,
  RomanCityEngineerLab,
  SpqrCheckVetoLab
} from './histGeoLabs/HistoryLabsEarly';
import {
  BarbarossaFrederickLab,
  ByzantiumMonksLab,
  CaesarAugustusLab,
  ColumbianExchangeLab,
  CrisisQuarantineLab,
  EmpireSplit476Lab,
  EnlightenmentBranchesLab,
  FeudalCurtisLab,
  French1789CodeLab,
  GalileoParliamentLab,
  IslamKnowledgeLab,
  PrintingPerspectiveLab,
  ReformationSplitLab,
  RisorgimentoUnityLab,
  SteamFactoryLab,
  ThreeFieldComuniLab
} from './histGeoLabs/HistoryLabsLater';

type Props = { missionId: string; lang: Language };

export const HIST_LAB_META: Record<string, { title: [string, string]; subtitle: [string, string]; note: [string, string] }> = {
  hist_g5_m1: {
    title: ['Interactive Polis & Athens vs. Sparta Explorer', 'Esploratore della Polis: Atene e Sparta'],
    subtitle: [
      'Click Acropolis, Agorà, and Chora or toggle Athens vs. Sparta to see how Greek city-states worked.',
      'Tocca Acropoli, Agorà e Chora e confronta Atene e Sparta per capire come funzionavano le poleis greche.'
    ],
    note: [
      'Mountains and seas shaped independent poleis sharing language, Olympics, and trade.',
      'Montagne e mari favorirono città-stato indipendenti unite da lingua, dèi e giochi olimpici.'
    ]
  },
  hist_g5_m2: {
    title: ['Etruscan Keystone Arch Load Simulator', 'Simulatore dell’Arco Etrusco a Tutto Sesto'],
    subtitle: [
      'Insert or remove the central keystone and test stone load to see how Roman-era bridges stand for millennia.',
      'Inserisci o rimuovi la chiave di volta e regola il peso sul ponte per capire la forza dell’arco.'
    ],
    note: [
      'The Etruscan arch and arched barrel vault carried aqueducts and bridges across Italy.',
      'L’arco etrusco scarica il peso lateralmente sui pilastri reggendo ponti e acquedotti millenari.'
    ]
  },
  hist_g5_m3: {
    title: ['Patricians vs. Plebeians Tribune Veto Lab', 'Laboratorio Patrizi, Plebei e Veto dei Tribuni'],
    subtitle: [
      'Compare Rome before and after the 494 BCE Aventine strike and test the Plebeian Tribune veto.',
      'Confronta Roma prima e dopo la secessione del 494 a.C. e prova il potere di veto del Tribuno.'
    ],
    note: [
      'Written public laws (Twelve Tables, 450 BCE) protected everyday plebeian citizens.',
      'Le XII Tavole scritte (450 a.C.) e i Tribuni della Plebe equilibrarono la Repubblica.'
    ]
  },
  hist_g5_m4: {
    title: ['Roman Aqueduct Slope & Housing Lab', 'Laboratorio Acquedotti e Case Romane'],
    subtitle: [
      'Tune aqueduct gravity slope (mm/m) and compare wealthy Domus courtyards with urban Insulae flats.',
      'Regola la pendenza dell’acquedotto (mm/m) e confronta le Domus con i condomini Insulae.'
    ],
    note: [
      'Gravity alone moved spring water for kilometers into public fountains and baths.',
      'La sola pendenza costante portava acqua fresca per chilometri fino alle fontane e alle terme.'
    ]
  },
  hist_l1_m1: {
    title: ['Paleolithic to Iron Age Transformation Lab', 'Dal Paleolitico all’Età del Ferro'],
    subtitle: [
      'Compare hunting bands, Neolithic wheat villages, bronze alloys, and hot iron forges.',
      'Confronta bande nomadi, villaggi agricoli neolitici, leghe di bronzo e forni del ferro.'
    ],
    note: [
      'Neolithic farming surplus freed specialists to craft pottery, textiles, and metalwork.',
      'Le scorte agricole del Neolitico permisero la nascita di villaggi stabili e nuovi mestieri.'
    ]
  },
  hist_l1_m2: {
    title: ['River Canals & Origin of Writing Simulator', 'Canali Fluviali e Nascita della Scrittura'],
    subtitle: [
      'Expand shared irrigation canals along the Nile and Euphrates to track grain surplus and early scribes.',
      'Espandi la rete di canali lungo Nilo e Eufrate per vedere come i magazzini crearono gli scribi.'
    ],
    note: [
      'Writing began as practical clay & papyrus accounting for barley sacks, fields, and taxes.',
      'La scrittura nacque anzitutto per registrare raccolti, canali e conti nei templi e palazzi.'
    ]
  },
  hist_l1_m3: {
    title: ['700 Signs vs. 22–24 Letter Alphabet Decoder', '700 Simboli vs. Alfabeto da 22–24 Lettere'],
    subtitle: [
      'Switch from picture scripts to Phoenician consonants and Greek vowels to see reading unlock.',
      'Confronta scrittura geroglifica, consonanti fenicie e vocali greche per vedere la diffusione della lettura.'
    ],
    note: [
      'Adding vowels turned Phoenician trade shorthand into Europe’s modern alphabet foundation.',
      'Aggiungere le vocali alle consonanti fenicie creò l’alfabeto da cui deriva anche il nostro.'
    ]
  },
  hist_l1_m4: {
    title: ['Hoplite Phalanx Shield-Wall Lab', 'Laboratorio Falange Oplitica e Polis'],
    subtitle: [
      'Lock hoplite shields together or scatter solo fighters to see why equal citizens built the polis.',
      'Chiudi gli scudi nella falange o disperdili per capire il legame tra opliti e cittadinanza.'
    ],
    note: [
      'Shared defence by farmer-soldiers turned aristocratic clans into civic communities.',
      'Difendere la città spalla a spalla spinse i cittadini a chiedere pari peso politico.'
    ]
  },
  hist_l1_m5: {
    title: ['Cleisthenes Mixed Tribes & Ostracism Dial', 'Riforma di Clistene e Ostracismo'],
    subtitle: [
      'Shuffle Athens’ clans into 10 mixed tribes and test the 6 000-shard ostracism threshold.',
      'Mescola i clan in 10 tribù territoriali e verifica la soglia dei 6 000 cocci dell’ostracismo.'
    ],
    note: [
      'Mixing city, coast, and countryside broke noble family monopolies inside Athens.',
      'Mescolare città, costa e campagna impedì alle fazioni locali di dominare l’assemblea.'
    ]
  },
  hist_l1_m6: {
    title: ['Eratosthenes Alexandria Earth Calculator', 'Calcolatore Terrestre di Eratostene ad Alessandria'],
    subtitle: [
      'Adjust noon shadow angle in Alexandria vs. Syene to reproduce Eratosthenes’ 240 BCE circumference calculation.',
      'Varia l’angolo dell’ombra ad Alessandria per calcolare la circonferenza della Terra come nel 240 a.C.'
    ],
    note: [
      'Hellenistic Alexandria blended Greek geometry with Egyptian and Asian astronomy.',
      'La Biblioteca di Alessandria unì la scienza greca alle conoscenze del Vicino Oriente.'
    ]
  },
  hist_l1_m7: {
    title: ['SPQR Mutual Checks & Veto Simulator', 'Controlli Reciproci e Veto nella Repubblica SPQR'],
    subtitle: [
      'Test co-Consul veto and Plebeian Tribune veto to prevent one-man rule in Rome.',
      'Attiva il veto dell’altro Console o del Tribuno per bloccare atti unilaterali nella Repubblica.'
    ],
    note: [
      'Collegiality and 1-year terms kept ambitious commanders in check for nearly five centuries.',
      'Cariche annuali e collegiali impedirono per secoli il ritorno della monarchia assoluta.'
    ]
  },
  hist_l1_m8: {
    title: ['Cursus Honorum & Punic Naval Corvus', 'Cursus Honorum e Corvo Navale Punico'],
    subtitle: [
      'Climb Roman magistracies from Quaestor to Consul and toggle the naval corvus boarding bridge.',
      'Sali i gradini delle magistrature romane e aziona il ponte mobile "corvo" contro Cartagine.'
    ],
    note: [
      'Rome adapted land-combat tactics to sea warfare to turn the Mediterranean into Mare Nostrum.',
      'Grazie al corvo navale i legionari combatterono sul mare come su un campo terrestre.'
    ]
  },
  hist_l2_m1: {
    title: ['Republic vs. Augustan Principate Simulator', 'Simulatore Repubblica vs. Principato di Augusto'],
    subtitle: [
      'Switch institutions and slide from 14 CE to Caracalla’s 212 CE universal citizenship edict.',
      'Confronta Repubblica e Principato di Augusto e scorri fino all’Editto di Caracalla del 212 d.C.'
    ],
    note: [
      'Augustus masked permanent legion control under traditional Republican magistracy names.',
      'Augusto conservò le forme repubblicane concentrando comando militare e potere tribunizio.'
    ]
  },
  hist_l2_m2: {
    title: ['313 CE Edict of Milan to 476 CE Split Lab', 'Dall’Editto di Milano (313) al 476 d.C.'],
    subtitle: [
      'Step across key dates (313, 380, 395, 476 CE) comparing Western fragmentation and Eastern survival.',
      'Esplora le tappe dal 313 al 476 d.C. confrontando la crisi occidentale e la tenuta d’Oriente.'
    ],
    note: [
      'While the West split into Romano-Germanic kingdoms, Constantinople prospered until 1453.',
      'Mentre in Occidente nascevano i regni romano-germanici, Costantinopoli resistette altri mille anni.'
    ]
  },
  hist_l2_m3: {
    title: ['Byzantium, Lombards & Benedictine Backup Lab', 'Bisanzio, Longobardi e Scriptoria Benedettini'],
    subtitle: [
      'Inspect Ravenna law mosaics, Pavia’s 643 Rothari law, and monastic book preservation.',
      'Esplora il Codice di Giustiniano a Ravenna, l’Editto di Rotari e i monaci amanuensi.'
    ],
    note: [
      'Benedictine monasteries preserved ancient texts while draining marshes across Early Medieval Italy.',
      'Gli scriptoria benedettini salvarono i classici antichi mentre i monasteri bonificavano le campagne.'
    ]
  },
  hist_l2_m4: {
    title: ['Baghdad, Córdoba & Sicily Science Bridge', 'Baghdad, Cordova e Sicilia Ponte del Sapere'],
    subtitle: [
      'Visit major medieval Arab hubs to trace 0–9 digits, algebra, and crops reaching Italy.',
      'Esplora i centri scientifici arabi che portarono cifre 0–9, algebra, carta e agrumi in Italia.'
    ],
    note: [
      'Arab-Sicilian and Andalusi scholars linked Indian arithmetic and Greek works to Europe.',
      'Scienziati di Baghdad, Cordova e Palermo trasmisero matematica e nuove colture all’Europa.'
    ]
  },
  hist_l2_m5: {
    title: ['Feudal Curtis Manor & Corvée Explorer', 'Esploratore della Curtis Feudale e Corvées'],
    subtitle: [
      'Compare the lord’s pars dominica with peasant plots and vary weekly unpaid corvée work.',
      'Confronta pars dominica e pars massaricia variando le giornate gratuite di lavoro (corvées).'
    ],
    note: [
      'Castle protection and rural barter replaced coin commerce across early feudal estates.',
      'In un’economia povera di monete, la curtis univa protezione militare e scambi in natura.'
    ]
  },
  hist_l2_m6: {
    title: ['Year 1000 Three-Field Rotation & Communes', 'Rotazione Triennale Anno Mille e Comuni'],
    subtitle: [
      'Compare 2-field vs. 3-field farming and trace the rise of Maritime Republics and Bologna (1088).',
      'Confronta rotazione biennale e triennale scoprendo Repubbliche Marinare e Università di Bologna.'
    ],
    note: [
      'Cutting fallow land from 50% to 33% plus leguminous crops powered Europe’s urban rebirth.',
      'La rotazione triennale moltiplicò il cibo alimentando flotte, Arti cittadine e Comuni.'
    ]
  },
  hist_l2_m7: {
    title: ['Lombard League 1176 & Frederick II Sicily Lab', 'Lega Lombarda (1176) e Federico II in Sicilia'],
    subtitle: [
      'Toggle divided vs. united communes at Legnano and explore Frederick II’s multicultural Sicilian court.',
      'Confronta città divise e Lega Lombarda a Legnano ed esplora la corte siciliana di Federico II.'
    ],
    note: [
      'City leagues defended local autonomy while Sicily birthed Italy’s first vernacular sonnet.',
      'La Lega Lombarda difese l’autonomia comunale mentre alla corte sveva nacque la poesia in volgare.'
    ]
  },
  hist_l2_m8: {
    title: ['1347 Black Death Quarantine Harbor Simulator', 'Simulatore di Quarantena Portuale (1347)'],
    subtitle: [
      'Adjust offshore ship waiting days to test Venice’s 40-day public health quarantine defense.',
      'Regola i giorni di attesa al largo per verificare la difesa sanitaria dei "quaranta giorni".'
    ],
    note: [
      'Population loss shifted worker bargaining power while tired cities shifted from Comuni to Signorie.',
      'Dopo la crisi demografica salirono i salari reali e molti Comuni si trasformarono in Signorie.'
    ]
  },
  hist_l3_m1: {
    title: ['Gutenberg Movable-Type Output Simulator', 'Simulatore di Stampa a Caratteri Mobili'],
    subtitle: [
      'Compare a hand-copying monastic scribe with Gutenberg’s 1455 printing press over months.',
      'Confronta la produzione di un amanuense con il torchio a caratteri mobili di Gutenberg.'
    ],
    note: [
      'Movable metal type and Venice pocket classics accelerated Humanism, science, and literacy.',
      'La stampa a caratteri mobili e i tascabili di Manuzio accelerarono Umanesimo e sapere.'
    ]
  },
  hist_l3_m2: {
    title: ['1492 Columbian Exchange Kitchen Comparator', 'Scambio Colombiano: Prima e Dopo il 1492'],
    subtitle: [
      'Compare European & Italian ingredients before and after oceanic voyages connected both hemispheres.',
      'Confronta la tavola europea prima e dopo il 1492 tra pomodoro, patate, mais e impatto coloniale.'
    ],
    note: [
      'Ocean trade united ecosystems worldwide while bringing tragic epidemics and slavery to the Americas.',
      'Le rotte oceaniche unirono i continenti trasformando diete globali ma sconvolgendo i popoli nativi.'
    ]
  },
  hist_l3_m3: {
    title: ['1517 Reformation to Council of Trent Explorer', 'Dalla Riforma (1517) al Concilio di Trento'],
    subtitle: [
      'Step from Luther’s 95 Theses and Peace of Augsburg (1555) to Catholic reform at Trent.',
      'Esplora le tappe dalle 95 Tesi alla Pace di Augusta (1555) fino al Concilio di Trento.'
    ],
    note: [
      'Printed vernacular pamphlets spread theological debate faster than any prior movement.',
      'I fogli a stampa in volgare diffusero rapidamente Riforma protestante e risposta cattolica.'
    ]
  },
  hist_l3_m4: {
    title: ['Galileo Moons & 1689 Bill of Rights Simulator', 'Lune di Giove (Galileo) e Bill of Rights 1689'],
    subtitle: [
      'Animate Jupiter’s moons alongside Versailles absolutism vs. England’s parliamentary check.',
      'Osserva le lune di Giove animate e confronta assolutismo di Versailles e Parlamento inglese.'
    ],
    note: [
      'Experimental proof challenged ancient authority just as Parliament limited absolute kingship.',
      'Il metodo sperimentale superò il principio d’autorità mentre la legge vincolava il sovrano.'
    ]
  },
  hist_l3_m5: {
    title: ['Montesquieu Three Powers & Beccaria Justice Lab', 'Separazione dei Poteri e Giustizia di Beccaria'],
    subtitle: [
      'Test separated vs. merged state branches and see Tuscany abolish the death penalty in 1786.',
      'Metti a prova i tre poteri separati e la riforma penale toscana del 1786 ispirata da Beccaria.'
    ],
    note: [
      'Balanced powers prevent tyranny while humane proportional justice replaced judicial torture.',
      'Poteri equilibrati evitano abusi mentre Beccaria dimostrò l’inutilità di tortura e pena di morte.'
    ]
  },
  hist_l3_m6: {
    title: ['James Watt Steam Piston & Factory Lab', 'Pistone a Vapore di Watt e Fabbrica Industriale'],
    subtitle: [
      'Adjust coal steam pressure to watch the piston drive mechanical looms and rail locomotives.',
      'Regola la pressione del vapore a carbone per azionare telai meccanici e locomotive.'
    ],
    note: [
      'Coal steam freed production from riverbanks while sparking urban working-class movements.',
      'Il vapore liberò le fabbriche dai fiumi trasformando città, trasporti e diritti del lavoro.'
    ]
  },
  hist_l3_m7: {
    title: ['Ancien Régime Estates vs. 1789 Rights & 1804 Code', 'Tre Stati vs. Diritti 1789 e Codice 1804'],
    subtitle: [
      'Contrast feudal tax exemptions before 1789 with citizen equality in the Declaration and Civil Code.',
      'Confronta i privilegi fiscali precedenti al 1789 con l’uguaglianza giuridica della Rivoluzione.'
    ],
    note: [
      'Atlantic revolutions replaced hereditary birth privilege with constitutional citizen equality.',
      'Le rivoluzioni atlantiche e il Codice del 1804 sancirono l’uguaglianza civile davanti alla legge.'
    ]
  },
  hist_l3_m8: {
    title: ['Italian Risorgimento Unification Tracker (1815–1870)', 'Percorso dell’Unità d’Italia (1815–1870)'],
    subtitle: [
      'Step across 1815, 1859–60, 1861, and 1870 watching Mazzini, Cavour, and Garibaldi unify Italy.',
      'Segui le tappe del 1815, 1859–60, 1861 e 1870 unendo Mazzini, Cavour e i Mille di Garibaldi.'
    ],
    note: [
      'National unity fused democratic ideals, Piedmontese diplomacy, volunteer courage, and Rome 1870.',
      'L’Unità unì gli ideali mazziniani, la diplomazia di Cavour e l’impresa dei Mille fino a Roma.'
    ]
  }
};

export const hasHistoryLab = (missionId: string) => Boolean(HIST_LAB_META[missionId]);

const LAB_BODY: Record<string, React.FC<{ lang: Language }>> = {
  hist_g5_m1: PolisExplorerLab,
  hist_g5_m2: EtruscanArchBuilderLab,
  hist_g5_m3: RepublicBalanceLab,
  hist_g5_m4: RomanCityEngineerLab,
  hist_l1_m1: PrehistoryShiftLab,
  hist_l1_m2: RiverSurplusCuneiformLab,
  hist_l1_m3: AlphabetDecodeLab,
  hist_l1_m4: MinoanMycenaeanPhalanxLab,
  hist_l1_m5: CleisthenesDemesLab,
  hist_l1_m6: AlexanderAlexandriaLab,
  hist_l1_m7: SpqrCheckVetoLab,
  hist_l1_m8: PunicMareNostrumLab,
  hist_l2_m1: CaesarAugustusLab,
  hist_l2_m2: EmpireSplit476Lab,
  hist_l2_m3: ByzantiumMonksLab,
  hist_l2_m4: IslamKnowledgeLab,
  hist_l2_m5: FeudalCurtisLab,
  hist_l2_m6: ThreeFieldComuniLab,
  hist_l2_m7: BarbarossaFrederickLab,
  hist_l2_m8: CrisisQuarantineLab,
  hist_l3_m1: PrintingPerspectiveLab,
  hist_l3_m2: ColumbianExchangeLab,
  hist_l3_m3: ReformationSplitLab,
  hist_l3_m4: GalileoParliamentLab,
  hist_l3_m5: EnlightenmentBranchesLab,
  hist_l3_m6: SteamFactoryLab,
  hist_l3_m7: French1789CodeLab,
  hist_l3_m8: RisorgimentoUnityLab
};

export const HistoryLab: React.FC<Props> = ({ missionId, lang }) => {
  const meta = HIST_LAB_META[missionId];
  const LabComponent = LAB_BODY[missionId];
  if (!meta || !LabComponent) return null;

  return (
    <section className="chem-lab hist-lab" aria-label={pick(lang, meta.title[0], meta.title[1])}>
      <header className="cl-heading">
        <span className="cl-kicker">{pick(lang, 'INTERACTIVE HISTORY LAB', 'LABORATORIO INTERATTIVO DI STORIA')}</span>
        <h3>{pick(lang, meta.title[0], meta.title[1])}</h3>
        <p>{pick(lang, meta.subtitle[0], meta.subtitle[1])}</p>
      </header>

      <LabComponent lang={lang} />

      <footer className="cl-footnote">{pick(lang, meta.note[0], meta.note[1])}</footer>
    </section>
  );
};
