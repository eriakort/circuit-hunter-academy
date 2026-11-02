import { TaggedQuestion } from '../types';

export const CH1_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'phys-ch1-01',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['SI Base Quantities', 'Le grandezze base del SI'],
    q: [
      'Which of the following is NOT one of the seven base quantities of the International System (SI)?',
      'Quale delle seguenti NON è una delle sette grandezze fondamentali del Sistema Internazionale (SI)?'
    ],
    a: [
      ['Speed', 'Velocità'],
      ['Thermodynamic temperature', 'Temperatura termodinamica'],
      ['Electric current', 'Intensità di corrente elettrica'],
      ['Amount of substance', 'Quantità di sostanza']
    ],
    why: [
      'Speed is a derived quantity (distance divided by time, m/s). The 7 SI base quantities are: length (m), mass (kg), time (s), electric current (A), temperature (K), amount of substance (mol), and luminous intensity (cd).',
      'La velocità è una grandezza derivata (spazio fratto tempo, m/s). Le 7 grandezze fondamentali del SI sono: lunghezza (m), massa (kg), tempo (s), corrente elettrica (A), temperatura (K), quantità di sostanza (mol) e intensità luminosa (cd).'
    ]
  },
  {
    id: 'phys-ch1-02',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Operational Definition', 'Definizione operativa'],
    q: [
      'In physics, what constitutes an "operational definition" of a quantity?',
      'In fisica, che cosa costituisce la "definizione operativa" di una grandezza?'
    ],
    a: [
      ['Specifying the measuring instrument and the procedure to measure it', 'Specificare lo strumento e la procedura con cui misurarla'],
      ['Describing its philosophical and everyday meaning', 'Descrivere il suo significato filosofico e comune'],
      ['Translating its name into mathematical symbols', 'Tradurre il suo nome in simboli matematici'],
      ['Listing only the physical units it can be expressed in', 'Elencare solo le unità fisiche in cui può essere espressa']
    ],
    why: [
      'An operational definition defines a physical quantity by establishing how to measure it: describing the instrument required and the precise operational steps to obtain a numerical value.',
      'Una grandezza fisica è definita operativamente quando si stabilisce come misurarla: indicando lo strumento di misura e la procedura sperimentale da seguire per ottenere un valore numerico.'
    ]
  },
  {
    id: 'phys-ch1-03',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Density Unit Conversion', 'Conversione della densità'],
    q: [
      'The density of liquid water is 1 g/cm³. What is this density expressed in SI units (kg/m³)?',
      'La densità dell\'acqua liquida è 1 g/cm³. A quanto corrisponde espressa nelle unità del SI (kg/m³)?'
    ],
    a: [
      ['1 000 kg/m³', '1 000 kg/m³'],
      ['100 kg/m³', '100 kg/m³'],
      ['0.001 kg/m³', '0,001 kg/m³'],
      ['10 000 kg/m³', '10 000 kg/m³']
    ],
    why: [
      '1 g = 10⁻³ kg and 1 cm³ = 10⁻⁶ m³. Therefore: (10⁻³ kg) / (10⁻⁶ m³) = 10³ kg/m³ = 1 000 kg/m³.',
      'Poiché 1 g = 10⁻³ kg e 1 cm³ = 10⁻⁶ m³, si ha: (10⁻³ kg) / (10⁻⁶ m³) = 10³ kg/m³ = 1 000 kg/m³.'
    ]
  },
  {
    id: 'phys-ch1-04',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Speed Conversion', 'Conversione di velocità'],
    q: [
      'A car travels at 72 km/h on a highway. What is its speed in m/s?',
      'Un\'automobile viaggia a 72 km/h in autostrada. Qual è la sua velocità in m/s?'
    ],
    a: [
      ['20 m/s', '20 m/s'],
      ['25 m/s', '25 m/s'],
      ['15 m/s', '15 m/s'],
      ['259.2 m/s', '259,2 m/s']
    ],
    why: [
      'To convert from km/h to m/s, divide by 3.6: 72 / 3.6 = 20 m/s. (Conversely, multiply by 3.6 to go from m/s to km/h).',
      'Per passare da km/h a m/s si divide per 3,6: 72 / 3,6 = 20 m/s. (Viceversa, da m/s a km/h si moltiplica per 3,6).'
    ]
  },
  {
    id: 'phys-ch1-05',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Scientific Notation', 'Notazione scientifica'],
    q: [
      'What is the correct scientific notation for the number 0.000450?',
      'Qual è la corretta notazione scientifica del numero 0,000450?'
    ],
    a: [
      ['4.50 × 10⁻⁴', '4,50 × 10⁻⁴'],
      ['45 × 10⁻⁵', '45 × 10⁻⁵'],
      ['4.5 × 10⁻³', '4,5 × 10⁻³'],
      ['0.45 × 10⁻³', '0,45 × 10⁻³']
    ],
    why: [
      'In scientific notation, a number is written as a × 10ᵏ where 1 ≤ a < 10. Moving the decimal point 4 places to the right yields 4.50 × 10⁻⁴ (preserving the trailing zero for precision).',
      'In notazione scientifica il numero è espresso come a × 10ᵏ con 1 ≤ a < 10. Spostando la virgola a destra di 4 posizioni si ottiene 4,50 × 10⁻⁴ (lo zero finale si conserva per le cifre significative).'
    ]
  },
  {
    id: 'phys-ch1-06',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Order of Magnitude', 'Ordine di grandezza'],
    q: [
      'What is the order of magnitude of 8.2 × 10⁵ m?',
      'Qual è l\'ordine di grandezza di 8,2 × 10⁵ m?'
    ],
    a: [
      ['10⁶ m', '10⁶ m'],
      ['10⁵ m', '10⁵ m'],
      ['10⁷ m', '10⁷ m'],
      ['10⁴ m', '10⁴ m']
    ],
    why: [
      'Since 8.2 ≥ √10 (≈ 3.16), the mantissa rounds up to 10¹, giving an order of magnitude of 10¹ × 10⁵ = 10⁶.',
      'Poiché 8,2 ≥ √10 (≈ 3,16, convenzione standard nei testi scolastici), si arrotonda alla potenza superiore: 10¹ × 10⁵ = 10⁶.'
    ]
  },
  {
    id: 'phys-ch1-07',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['SI Prefixes', 'Prefissi del SI'],
    q: [
      'Which SI prefix corresponds to a factor of 10⁻⁶?',
      'Quale prefisso del SI corrisponde al fattore 10⁻⁶?'
    ],
    a: [
      ['micro- (μ)', 'micro- (μ)'],
      ['milli- (m)', 'milli- (m)'],
      ['nano- (n)', 'nano- (n)'],
      ['pico- (p)', 'pico- (p)']
    ],
    why: [
      'milli = 10⁻³, micro = 10⁻⁶, nano = 10⁻⁹, pico = 10⁻¹².',
      'milli = 10⁻³, micro = 10⁻⁶, nano = 10⁻⁹, pico = 10⁻¹².'
    ]
  },
  {
    id: 'phys-ch1-08',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Volume Units', 'Unità di volume e capacità'],
    q: [
      'How many cubic centimetres (cm³) are in 1 litre (L)?',
      'Quanti centimetri cubi (cm³) ci sono in 1 litro (L)?'
    ],
    a: [
      ['1 000 cm³', '1 000 cm³'],
      ['100 cm³', '100 cm³'],
      ['10 000 cm³', '10 000 cm³'],
      ['1 000 000 cm³', '1 000 000 cm³']
    ],
    why: [
      '1 litre = 1 dm³. Since 1 dm = 10 cm, 1 dm³ = (10 cm)³ = 1 000 cm³.',
      '1 litro equivale a 1 dm³. Poiché 1 dm = 10 cm, 1 dm³ = (10 cm)³ = 1 000 cm³.'
    ]
  },
  {
    id: 'phys-ch1-09',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Intensive vs Extensive', 'Grandezze intensive ed estensive'],
    q: [
      'Which of the following is an intensive physical property (independent of sample size)?',
      'Quale delle seguenti è una grandezza fisica intensiva (non dipende dall\'estensione del corpo)?'
    ],
    a: [
      ['Density', 'Densità'],
      ['Volume', 'Volume'],
      ['Mass', 'Massa'],
      ['Total heat capacity', 'Capacità termica totale']
    ],
    why: [
      'An intensive property does not depend on the amount of matter. Density is mass divided by volume, staying constant regardless of how much of the substance you have.',
      'Una grandezza intensiva non dipende dalla quantità di materia del campione. La densità (rapporto tra massa e volume) rimane la stessa sia per una goccia d\'acqua che per una piscina.'
    ]
  },
  {
    id: 'phys-ch1-10',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Mass and Volume Problem', 'Calcolo massa e volume'],
    q: [
      'An aluminum bar has a volume of 50 cm³ and a density of 2.7 g/cm³. What is its mass?',
      'Un blocchetto di alluminio ha un volume di 50 cm³ e una densità di 2,7 g/cm³. Qual è la sua massa?'
    ],
    a: [
      ['135 g', '135 g'],
      ['18.5 g', '18,5 g'],
      ['13.5 g', '13,5 g'],
      ['1 350 g', '1 350 g']
    ],
    why: [
      'm = ρ · V = 2.7 g/cm³ × 50 cm³ = 135 g.',
      'm = ρ · V = 2,7 g/cm³ × 50 cm³ = 135 g.'
    ]
  },
  {
    id: 'phys-ch1-11',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Absolute Temperature', 'Temperatura assoluta'],
    q: [
      'If a room has a temperature of 20 °C, what is this temperature in Kelvin?',
      'Se una stanza si trova a una temperatura di 20 °C, qual è la sua temperatura in Kelvin?'
    ],
    a: [
      ['293.15 K', '293,15 K'],
      ['253.15 K', '253,15 K'],
      ['-253.15 K', '-253,15 K'],
      ['313.15 K', '313,15 K']
    ],
    why: [
      'The relation between Kelvin and Celsius is T(K) = T(°C) + 273.15. Thus 20 + 273.15 = 293.15 K.',
      'La relazione tra scala Kelvin e Celsius è T(K) = T(°C) + 273,15. Quindi 20 + 273,15 = 293,15 K.'
    ]
  },
  {
    id: 'phys-ch1-12',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Volume of a Cylinder', 'Volume del cilindro'],
    q: [
      'How is the volume of a right circular cylinder with base radius r and height h calculated?',
      'Come si calcola il volume di un cilindro retto di raggio di base r e altezza h?'
    ],
    a: [
      ['V = π · r² · h', 'V = π · r² · h'],
      ['V = 2π · r · h', 'V = 2π · r · h'],
      ['V = (4/3)π · r³', 'V = (4/3)π · r³'],
      ['V = π · r · h²', 'V = π · r · h²']
    ],
    why: [
      'The volume of a cylinder equals base area times height: V = (π · r²) · h.',
      'Il volume del cilindro è pari all\'area di base per l\'altezza: V = (π · r²) · h.'
    ]
  },
  {
    id: 'phys-ch1-13',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Derived Units Definition', 'Unità derivate'],
    q: [
      'In terms of SI base units (kg, m, s), what is 1 Newton (N)?',
      'In termini di unità fondamentali del SI (kg, m, s), a che cosa equivale 1 Newton (N)?'
    ],
    a: [
      ['1 kg · m / s²', '1 kg · m / s²'],
      ['1 kg · m² / s²', '1 kg · m² / s²'],
      ['1 kg · m / s', '1 kg · m / s'],
      ['1 kg / (m · s²)', '1 kg / (m · s²)']
    ],
    why: [
      'From Newton\'s second law (F = m · a), Force = mass × acceleration: 1 N = 1 kg × 1 m/s² = 1 kg · m/s².',
      'Dal secondo principio della dinamica (F = m · a), Forza = massa × accelerazione: 1 N = 1 kg × 1 m/s² = 1 kg · m/s².'
    ]
  },
  {
    id: 'phys-ch1-14',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Pascal Unit', 'Unità di pressione'],
    q: [
      'The SI unit of pressure is the Pascal (Pa). What does 1 Pascal equal?',
      'L\'unità di pressione nel SI è il Pascal (Pa). A che cosa corrisponde 1 Pascal?'
    ],
    a: [
      ['1 N / m²', '1 N / m²'],
      ['1 N · m', '1 N · m'],
      ['1 kg / m³', '1 kg / m³'],
      ['1 N / cm²', '1 N / cm²']
    ],
    why: [
      'Pressure is perpendicular force per unit area: p = F / A, so 1 Pa = 1 N / 1 m².',
      'La pressione è definita come forza perpendicolare per unità di superficie: p = F / S, quindi 1 Pa = 1 N / 1 m².'
    ]
  },
  {
    id: 'phys-ch1-15',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Unit of Energy', 'Unità di lavoro ed energia'],
    q: [
      'What is the SI derived unit for work and energy, and what does it equal in base units?',
      'Qual è l\'unità derivata del SI per lavoro ed energia, e a che cosa equivale?'
    ],
    a: [
      ['Joule (J) = 1 N · m = 1 kg · m² / s²', 'Joule (J) = 1 N · m = 1 kg · m² / s²'],
      ['Watt (W) = 1 J / s', 'Watt (W) = 1 J / s'],
      ['Pascal (Pa) = 1 N / m²', 'Pascal (Pa) = 1 N / m²'],
      ['Newton (N) = 1 kg · m / s²', 'Newton (N) = 1 kg · m / s²']
    ],
    why: [
      'Work = Force × distance: 1 J = 1 N × 1 m = (1 kg · m/s²) × m = 1 kg · m²/s².',
      'Il lavoro è Forza × spostamento: 1 J = 1 N × 1 m = (1 kg · m/s²) × m = 1 kg · m²/s².'
    ]
  },
  {
    id: 'phys-ch1-16',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Mass vs Weight Concept', 'Massa vs Peso'],
    q: [
      'On the Moon, gravitational acceleration is roughly 1/6 of that on Earth. How do the mass and weight of an astronaut compare?',
      'Sulla Luna l\'accelerazione di gravità è circa 1/6 di quella terrestre. Come variano la massa e il peso di un astronauta?'
    ],
    a: [
      ['Mass is unchanged; weight is 1/6 as much', 'La massa non cambia; il peso si riduce a 1/6'],
      ['Both mass and weight are 1/6 as much', 'Sia la massa sia il peso si riducono a 1/6'],
      ['Weight is unchanged; mass is 1/6 as much', 'Il peso non cambia; la massa si riduce a 1/6'],
      ['Neither mass nor weight changes', 'Né la massa né il peso cambiano']
    ],
    why: [
      'Mass is an intrinsic property measuring inertia (in kg) and never changes with location. Weight is gravitational force (P = m · g) and decreases proportionally with g.',
      'La massa è una proprietà intrinseca della materia (in kg) e non cambia da un pianeta all\'altro. Il peso è una forza (P = m · g) e diminuisce proporzionalmente a g.'
    ]
  },
  {
    id: 'phys-ch1-17',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Dimensional Analysis', 'Analisi dimensionale'],
    q: [
      'In a valid physical equation, what must be true about the dimensions on both sides?',
      'In un\'equazione fisica corretta, che cosa deve valere per le dimensioni dei due membri?'
    ],
    a: [
      ['Both sides must have identical physical dimensions', 'Entrambi i membri devono avere le stesse dimensioni fisiche'],
      ['Only the numerical values must be equal', 'Basta che i valori numerici siano uguali'],
      ['The left side must always be length', 'Il primo membro deve sempre essere una lunghezza'],
      ['The units must be fundamentally dimensionless', 'Le unità devono essere prive di dimensioni']
    ],
    why: [
      'Dimensional homogeneity requires that terms added or equated must share the same physical dimensions (e.g. length cannot equal time).',
      'Il principio di omogeneità dimensionale impone che entrambi i membri di un\'uguaglianza (e tutti i termini sommati) abbiano le stesse dimensioni fisiche.'
    ]
  },
  {
    id: 'phys-ch1-18',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Displacement Method', 'Metodo di immersione'],
    q: [
      'A graduated cylinder contains 40 mL of water. A pebble is submerged, and the water level rises to 68 mL. What is the volume of the pebble?',
      'Un cilindro graduato contiene 40 mL d\'acqua. Si immerge un sasso e il livello sale a 68 mL. Qual è il volume del sasso?'
    ],
    a: [
      ['28 cm³', '28 cm³'],
      ['108 cm³', '108 cm³'],
      ['68 cm³', '68 cm³'],
      ['1.7 cm³', '1,7 cm³']
    ],
    why: [
      'Volume = 68 mL - 40 mL = 28 mL. Since 1 mL = 1 cm³, the volume is 28 cm³.',
      'Il volume per immersione è V = 68 mL - 40 mL = 28 mL. Poiché 1 mL = 1 cm³, il volume è 28 cm³.'
    ]
  },
  {
    id: 'phys-ch1-19',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Prefix Giga', 'Prefisso Giga'],
    q: [
      'How many bytes are in 4 Gigabytes (GB)?',
      'A quanti byte corrispondono 4 Gigabyte (GB)?'
    ],
    a: [
      ['4 × 10⁹ bytes', '4 × 10⁹ byte'],
      ['4 × 10⁶ bytes', '4 × 10⁶ byte'],
      ['4 × 10¹² bytes', '4 × 10¹² byte'],
      ['4 × 10³ bytes', '4 × 10³ byte']
    ],
    why: [
      'The SI prefix Giga (G) means 10⁹ (one billion). Thus 4 GB = 4 × 10⁹ B.',
      'Il prefisso del SI Giga (G) vale 10⁹ (un miliardo). Quindi 4 GB = 4 × 10⁹ B.'
    ]
  },
  {
    id: 'phys-ch1-20',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 16,
    missionId: 'phys_q_ch1',
    chapterTitle: ['Physical Quantities', 'Le grandezze fisiche'],
    missionTitle: ['Area Unit Conversion', 'Conversione di superficie'],
    q: [
      'How many square metres (m²) are in 5 square kilometres (km²)?',
      'Quanti metri quadrati (m²) ci sono in 5 chilometri quadrati (km²)?'
    ],
    a: [
      ['5 000 000 m²', '5 000 000 m²'],
      ['5 000 m²', '5 000 m²'],
      ['50 000 m²', '50 000 m²'],
      ['500 000 m²', '500 000 m²']
    ],
    why: [
      '1 km = 1 000 m = 10³ m. So 1 km² = (10³ m)² = 10⁶ m² = 1 000 000 m². 5 km² = 5 × 10⁶ m².',
      'Poiché 1 km = 10³ m, 1 km² = (10³ m)² = 10⁶ m² = 1 000 000 m². Quindi 5 km² = 5 000 000 m².'
    ]
  }
];
