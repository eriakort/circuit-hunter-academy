import React from 'react';
import type { Language } from '../types';
import { pick } from './chemLabs/chemLabShared';
import {
  AgePyramidLab,
  ClimateFactorsLab,
  EuropeIntegrationLab,
  HydrosphereBudgetLab,
  ItalyPhysicalLab,
  MapScaleCoordLab,
  NorthCenterRegionsLab,
  PlateVolcanoLab,
  ProjectionsGisLab,
  SouthIslandsUnescoLab
} from './histGeoLabs/GeographyLabsPart1';
import {
  AfricaLeapfrogLab,
  AmericasAmazonLab,
  AsiaMonsoonLab,
  CarryingCapacityLab,
  CircularAgendaLab,
  GlobalizationChainLab,
  HdiDevelopmentLab,
  MoseHazardsLab,
  SuezChokepointLab,
  TentSmartCityLab
} from './histGeoLabs/GeographyLabsPart2';

type Props = { missionId: string; lang: Language };

export const GEO_LAB_META: Record<string, { title: [string, string]; subtitle: [string, string]; note: [string, string] }> = {
  geo_g5_m1: {
    title: ['Map Scale & Coordinate Shrink Calculator', 'Calcolatore di Scala Cartografica e Coordinate'],
    subtitle: [
      'Measure paper centimeters across 1:100 000 vs. 1:500 000 scales to compute real kilometers instantly.',
      'Varia i centimetri sulla carta tra scala 1:100 000 e 1:500 000 per calcolare subito i chilometri reali.'
    ],
    note: [
      'Parallels measure Latitude from the Equator; Meridians measure Longitude from Greenwich.',
      'I paralleli misurano la Latitudine dall’Equatore; i meridiani la Longitudine da Greenwich.'
    ]
  },
  geo_g5_m2: {
    title: ['Italy Relief, Po River & Volcano Explorer', 'Esploratore Rilievi, Fiume Po e Vulcani'],
    subtitle: [
      'Inspect the Alps & Apennines, Italy’s 652 km Po River & Lake Garda, and active Mediterranean volcanoes.',
      'Esplora Alpi e Appennini, il corso del Po e il Lago di Garda fino a Etna, Vesuvio e Stromboli.'
    ],
    note: [
      'Italy sits along the active Eurasian–African tectonic margin surrounded by four seas.',
      'La penisola italiana si protende tra quattro mari lungo il margine attivo delle placche.'
    ]
  },
  geo_g5_m3: {
    title: ['North & Central Italian Regions Explorer', 'Esploratore Regioni del Nord e Centro Italia'],
    subtitle: [
      'Switch between North-West, North-East, and Central Italy to master regional borders and capitals.',
      'Alterna Nord-Ovest, Nord-Est e Centro per memorizzare regioni, capoluoghi e primati locali.'
    ],
    note: [
      'Landlocked Umbria is the only peninsular Italian region without any sea coast.',
      'L’Umbria è l’unica regione peninsulare priva di sbocco sul mare.'
    ]
  },
  geo_g5_m4: {
    title: ['Southern Italy, 5 Special Statutes & UNESCO Record', 'Sud, 5 Statuti Speciali e Record UNESCO'],
    subtitle: [
      'Explore the 6 southern mainland regions, 5 autonomous regions, and Italy’s #1 UNESCO ranking.',
      'Esplora le 6 regioni del Sud, le 5 a statuto speciale e il primato mondiale UNESCO dell’Italia.'
    ],
    note: [
      'All 20 Italian regions share extraordinary natural landscapes and historical monuments.',
      'Tutte le 20 regioni italiane custodiscono un patrimonio naturale e culturale unico.'
    ]
  },
  geo_l1_m1: {
    title: ['Orange-Peel Projection & Contour Line (Isoipse) Lab', 'Laboratorio Proiezioni e Curve di Livello'],
    subtitle: [
      'Compare Mercator angle accuracy vs. Gall–Peters true areas and adjust contour ring spacing for cliff steepness.',
      'Confronta Mercatore e Gall–Peters e regola la distanza tra isoipse per leggere pendenze e pareti.'
    ],
    note: [
      'Every flat projection trades off area or shape; modern GIS layers stack elevation, rivers, and risk maps.',
      'Ogni planisfero accetta un compromesso geometrico; oggi i sistemi GIS sovrappongono strati digitali.'
    ]
  },
  geo_l1_m2: {
    title: ['Plate Tectonics & Vesuvius Magma Viscosity Lab', 'Laboratorio Placche e Viscosità del Magma'],
    subtitle: [
      'Switch between fluid shield flows and viscous gas-trapping magma to understand why stratovolcanoes explode.',
      'Confronta magma fluido e viscoso per capire perché gli stratovulcani come il Vesuvio sono esplosivi.'
    ],
    note: [
      'Seismic waves travel from deep underground hypocenters straight up to surface epicenters.',
      'Le onde sismiche partono dall’ipocentro sotterraneo raggiungendo per primo l’epicentro in superficie.'
    ]
  },
  geo_l1_m3: {
    title: ['Altitude Lapse Rate (−6 °C / 1 000 m) & Climate Lab', 'Gradiente Termico Altitudinale (−6 °C / 1 000 m)'],
    subtitle: [
      'Climb mountain elevations and toggle coastal sea moderation to watch temperature and biomes respond.',
      'Sali di quota e attiva l’effetto mitigatore del mare per osservare temperatura e biomi cambiare.'
    ],
    note: [
      'Weather is today’s troposphere snapshot; climate averages thirty years of atmospheric patterns.',
      'Il meteo descrive il giorno nella troposfera; il clima sintetizza medie trentennali.'
    ]
  },
  geo_l1_m4: {
    title: ['Earth’s <1% Freshwater & Gulf Stream Conveyor Lab', 'Bilancio Idrico (<1% Dolce) e Corrente del Golfo'],
    subtitle: [
      'Visualize Earth’s tiny accessible freshwater sliver, toggle Europe’s warm Gulf Stream, and tally virtual water.',
      'Osserva la minima frazione d’acqua dolce, prova la Corrente del Golfo e calcola l’impronta idrica.'
    ],
    note: [
      'Melting Alpine glaciers reduce summer Po Valley river discharge right when crops peak.',
      'Il ritiro dei ghiacciai alpini riduce le scorte d’acqua estive nei fiumi italiani.'
    ]
  },
  geo_l1_m5: {
    title: ['Population Age Pyramid Morphing Lab (Growth vs. Urn)', 'Laboratorio Piramide Demografica (Crescita vs. Urna)'],
    subtitle: [
      'Contrast wide-base youthful pyramids with Italy’s urn-shaped aging demographic structure.',
      'Confronta piramidi a base larga con la forma a urna tipica dell’invecchiamento italiano.'
    ],
    note: [
      'Push and pull migration factors explain why over 56% of humanity now lives inside cities.',
      'Fattori di spinta e attrazione spiegano perché oltre il 56% dell’umanità vive in aree urbane.'
    ]
  },
  geo_l1_m6: {
    title: ['EU Schengen Integration & Italian Manufacturing Lab', 'Integrazione UE Schengen e Distretti Italiani'],
    subtitle: [
      'Compare pre-1995 customs queues with Schengen open borders, Euro (€), and Italy’s #2 EU industry.',
      'Confronta le vecchie dogane con l’area Schengen, l’Euro (€) e la seconda manifattura europea.'
    ],
    note: [
      'Indented coastlines and integrated transport linked European ports and manufacturing hubs.',
      'Coste articolate e reti comuni collegano i porti e i distretti produttivi europei.'
    ]
  },
  geo_l2_m1: {
    title: ['Global Smartphone Supply Chain & Glocal Explorer', 'Catena Globale dello Smartphone e Modello Glocal'],
    subtitle: [
      'Trace each continent’s step inside a modern phone and see how Italian DOP exports thrive globally.',
      'Segui ogni continente dietro uno smartphone e scopri il valore glocal dei prodotti DOP.'
    ],
    note: [
      'Containers and subsea cables shrink distance while glocal branding preserves regional craft roots.',
      'Container e fibra ottica abbattono le distanze mentre il modello glocal valorizza i territori.'
    ]
  },
  geo_l2_m2: {
    title: ['GDP vs. UN Human Development Index (HDI / ISU) Meter', 'Confronto PIL e Indice di Sviluppo Umano (ISU)'],
    subtitle: [
      'Adjust public healthcare and girls’ education investment to raise life expectancy, schooling, and HDI.',
      'Regola sanità pubblica e istruzione femminile per far salire speranza di vita, studi e ISU.'
    ],
    note: [
      'True human development requires clean water, clinics, and schools—not raw GDP totals alone.',
      'Il vero sviluppo richiede acqua pulita, cure e scuole accessibili oltre al solo PIL medio.'
    ]
  },
  geo_l2_m3: {
    title: ['Asian Monsoon Engine & Indo-Pacific Powers Lab', 'Motore dei Monsoni e Potenze dell’Asia'],
    subtitle: [
      'Flip between wet summer rice monsoons and dry winter winds across the world’s most populous continent.',
      'Alterna monsone estivo umido e invernale secco nel continente dove vive quasi il 60% dell’umanità.'
    ],
    note: [
      'India’s youth and IT hubs join China, Japan, and Korea at the center of world production.',
      'India, Cina, Giappone e Corea del Sud guidano oggi demografia, manifattura e alta tecnologia.'
    ]
  },
  geo_l2_m4: {
    title: ['Africa Youth, Solar & Mobile Leapfrogging Lab', 'Africa Giovane, Solare e Salto Tecnologico'],
    subtitle: [
      'Compare slow legacy copper wires with decentralized solar and mobile banking across Africa.',
      'Confronta le vecchie reti fisse con micro-reti solari e pagamenti mobili in Africa.'
    ],
    note: [
      'Median age ~19, Rift Valley geology, Sahel climate pressure, and clean-tech minerals shape Africa’s century.',
      'Età mediana di 19 anni, Rift Valley, Sahel e minerali critici disegnano il futuro africano.'
    ]
  },
  geo_l2_m5: {
    title: ['Americas Spine & Amazon Carbon Sponge Lab', 'Ande, Rocciose e Spugna di Carbonio Amazzonica'],
    subtitle: [
      'Adjust Amazon rainforest canopy cover to watch carbon storage and rainfall "flying rivers" respond.',
      'Regola la copertura forestale amazzonica per osservare assorbimento di CO₂ e piogge continentali.'
    ],
    note: [
      'High-tech North American corridors and Latin American biodiversity anchor shared planetary stability.',
      'Poli tecnologici nordamericani ed ecosistemi latinoamericani influenzano l’intero pianeta.'
    ]
  },
  geo_l2_m6: {
    title: ['Energy Transition & Circular Economy Loop Lab', 'Transizione Energetica ed Economia Circolare'],
    subtitle: [
      'Shift grid share toward solar/wind/geothermal and close linear waste into circular reuse loops.',
      'Aumenta la quota di rinnovabili e chiudi la filiera lineare nel modello circolare.'
    ],
    note: [
      'UN Agenda 2030 unites clean energy, social fairness, and ecological limits into 17 global goals.',
      'L’Agenda 2030 unisce energia pulita, giustizia sociale e limiti ambientali in 17 obiettivi.'
    ]
  },
  geo_l3_m1: {
    title: ['Suez Chokepoint & Maritime Route Calculator', 'Calcolatore Rotte: Canale di Suez vs. Capo'],
    subtitle: [
      'Compare direct Suez shipping to Italian ports against long detours around southern Africa.',
      'Confronta la rotta di Suez verso i porti italiani con il lungo giro attorno all’Africa.'
    ],
    note: [
      'Narrow chokepoints and subsea internet cables anchor Italy inside the Enlarged Mediterranean.',
      'Stretti strategici e dorsali sottomarine rendono centrale il Mediterraneo Allargato per l’Italia.'
    ]
  },
  geo_l3_m2: {
    title: ['Tourism Carrying Capacity & Art. 9 Constitution Lab', 'Capacità di Carico Turistica e Articolo 9'],
    subtitle: [
      'Slide daily historic city visitors past 100% carrying capacity to see overtourism vs. slow borghi.',
      'Supera il 100% della capacità di carico per confrontare overtourism e turismo lento nei borghi.'
    ],
    note: [
      'Constitutional Article 9 safeguards Italy’s landscape, heritage, and biodiversity for future citizens.',
      'L’Articolo 9 della Costituzione protegge paesaggio, cultura, biodiversità e future generazioni.'
    ]
  },
  geo_l3_m3: {
    title: ['TEN-T Alpine Base Rail & 15-Minute Smart City Lab', 'Trafori TEN-T sulle Alpi e Smart City 15-Minuti'],
    subtitle: [
      'Move freight onto flat electric Alpine trains and switch urban tree canopy on against summer heat islands.',
      'Sposta le merci sui trafori ferroviari alpini e attiva il verde urbano contro le isole di calore.'
    ],
    note: [
      'Intermodal port-to-rail hubs plus green shaded streets cut emissions across Italy and Europe.',
      'Intermodalità nave-treno e quartieri verdi riducono traffico ed emissioni.'
    ]
  },
  geo_l3_m4: {
    title: ['Soil Sponge Floods & Venice MOSE Barrier Simulator', 'Consumo di Suolo e Barriere MOSE di Venezia'],
    subtitle: [
      'Compare forest soil vs. sealed asphalt under cloudbursts and raise Venice’s 78 underwater MOSE gates.',
      'Confronta bosco e asfalto sotto piogge intense e alza le paratoie del MOSE contro l’acqua alta.'
    ],
    note: [
      'While hazards cannot be turned off, soil protection and engineering dramatically reduce vulnerability.',
      'Ridurre consumo di suolo e aumentare la prevenzione abbatte la vulnerabilità del territorio.'
    ]
  }
};

export const hasGeographyLab = (missionId: string) => Boolean(GEO_LAB_META[missionId]);

const LAB_BODY: Record<string, React.FC<{ lang: Language }>> = {
  geo_g5_m1: MapScaleCoordLab,
  geo_g5_m2: ItalyPhysicalLab,
  geo_g5_m3: NorthCenterRegionsLab,
  geo_g5_m4: SouthIslandsUnescoLab,
  geo_l1_m1: ProjectionsGisLab,
  geo_l1_m2: PlateVolcanoLab,
  geo_l1_m3: ClimateFactorsLab,
  geo_l1_m4: HydrosphereBudgetLab,
  geo_l1_m5: AgePyramidLab,
  geo_l1_m6: EuropeIntegrationLab,
  geo_l2_m1: GlobalizationChainLab,
  geo_l2_m2: HdiDevelopmentLab,
  geo_l2_m3: AsiaMonsoonLab,
  geo_l2_m4: AfricaLeapfrogLab,
  geo_l2_m5: AmericasAmazonLab,
  geo_l2_m6: CircularAgendaLab,
  geo_l3_m1: SuezChokepointLab,
  geo_l3_m2: CarryingCapacityLab,
  geo_l3_m3: TentSmartCityLab,
  geo_l3_m4: MoseHazardsLab
};

export const GeographyLab: React.FC<Props> = ({ missionId, lang }) => {
  const meta = GEO_LAB_META[missionId];
  const LabComponent = LAB_BODY[missionId];
  if (!meta || !LabComponent) return null;

  return (
    <section className="chem-lab geo-lab" aria-label={pick(lang, meta.title[0], meta.title[1])}>
      <header className="cl-heading">
        <span className="cl-kicker">{pick(lang, 'INTERACTIVE GEOGRAPHY LAB', 'LABORATORIO INTERATTIVO DI GEOGRAFIA')}</span>
        <h3>{pick(lang, meta.title[0], meta.title[1])}</h3>
        <p>{pick(lang, meta.subtitle[0], meta.subtitle[1])}</p>
      </header>

      <LabComponent lang={lang} />

      <footer className="cl-footnote">{pick(lang, meta.note[0], meta.note[1])}</footer>
    </section>
  );
};
