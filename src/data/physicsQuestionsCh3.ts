import { TaggedQuestion } from '../types';

export const CH3_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'phys-ch3-01',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Scalar vs Vector Definition', 'Grandezze scalari e vettoriali'],
    q: [
      'Which of the following physical quantities is a vector quantity?',
      'Quale delle seguenti grandezze fisiche è una grandezza vettoriale?'
    ],
    a: [
      ['Force', 'Forza'],
      ['Time', 'Tempo'],
      ['Temperature', 'Temperatura'],
      ['Mass', 'Massa']
    ],
    why: [
      'A vector quantity requires magnitude, direction, and sense (e.g. force, displacement, velocity). Time, temperature, and mass are completely specified by a single number with units (scalar).',
      'Una grandezza vettoriale richiede per essere definita modulo, direzione e verso (come la forza, lo spostamento, la velocità). Tempo, temperatura e massa sono invece scalari.'
    ]
  },
  {
    id: 'phys-ch3-02',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Perpendicular Vectors Addition', 'Somma di vettori perpendicolari'],
    q: [
      'Two perpendicular forces of 30 N (along x) and 40 N (along y) act on a point. What is the magnitude of the resultant force?',
      'Due forze perpendicolari di 30 N (lungo x) e 40 N (lungo y) agiscono su un punto. Qual è il modulo della forza risultante?'
    ],
    a: [
      ['50 N', '50 N'],
      ['70 N', '70 N'],
      ['10 N', '10 N'],
      ['1 200 N', '1 200 N']
    ],
    why: [
      'By the Pythagorean theorem: R = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.',
      'Applicando il teorema di Pitagora: R = √(30² + 40²) = √(900 + 1600) = √2500 = 50 N.'
    ]
  },
  {
    id: 'phys-ch3-03',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Hooke\'s Law Calculation', 'Legge di Hooke'],
    q: [
      'A spring has a spring constant of k = 200 N/m. How much force is required to compress it by 5 cm (0.05 m)?',
      'Una molla ha costante elastica k = 200 N/m. Quale forza occorre per comprimerla di 5 cm (0,05 m)?'
    ],
    a: [
      ['10 N', '10 N'],
      ['1 000 N', '1 000 N'],
      ['4 N', '4 N'],
      ['40 N', '40 N']
    ],
    why: [
      'By Hooke\'s law (F = k · Δx): F = 200 N/m × 0.05 m = 10 N.',
      'Dalla legge di Hooke (F = k · Δx): F = 200 N/m × 0,05 m = 10 N.'
    ]
  },
  {
    id: 'phys-ch3-04',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Weight on Earth', 'Forza peso sulla Terra'],
    q: [
      'An object has a mass of 15 kg. Taking g ≈ 9.8 N/kg, what is its weight on Earth?',
      'Un oggetto ha una massa di 15 kg. Assumendo g ≈ 9,8 N/kg, qual è il suo peso sulla Terra?'
    ],
    a: [
      ['147 N', '147 N'],
      ['15 N', '15 N'],
      ['1.53 N', '1,53 N'],
      ['150 kg', '150 kg']
    ],
    why: [
      'Weight P = m · g = 15 kg × 9.8 N/kg = 147 N.',
      'Il peso è una forza: P = m · g = 15 kg × 9,8 N/kg = 147 N.'
    ]
  },
  {
    id: 'phys-ch3-05',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Static vs Dynamic Friction', 'Attrito statico e dinamico'],
    q: [
      'Why is the coefficient of static friction (μ_s) generally greater than the coefficient of dynamic friction (μ_d)?',
      'Perché il coefficiente di attrito statico (μ_s) è generalmente maggiore di quello dinamico (μ_d)?'
    ],
    a: [
      ['It requires more force to break surface interlocks and start motion than to maintain it', 'Occorre più forza per vincere l\'incastro microscopico iniziale che per mantenere il moto'],
      ['Because gravity is stronger when an object is at rest', 'Perché la gravità agisce di più quando il corpo è fermo'],
      ['Because moving objects lose their mass', 'Perché i corpi in movimento perdono massa'],
      ['Because dynamic friction acts along a different angle', 'Perché l\'attrito dinamico agisce con un angolo diverso']
    ],
    why: [
      'Microscopic surface roughness forms transient molecular bonds and mechanical interlocks when at rest. Once slipping begins, asperities skip over each other, making dynamic friction lower.',
      'A livello microscopico, a riposo le rugosità delle superfici si incastrano creando legami più saldi. Una volta avviato il moto, le asperità scivolano con minore resistenza.'
    ]
  },
  {
    id: 'phys-ch3-06',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Maximum Static Friction Calculation', 'Calcolo dell\'attrito statico massimo'],
    q: [
      'A 40 N block rests on a horizontal table with μ_s = 0.4. What is the maximum static friction force holding it in place?',
      'Un blocco da 40 N poggia su un tavolo orizzontale con μ_s = 0,4. Qual è la massima forza di attrito statico?'
    ],
    a: [
      ['16 N', '16 N'],
      ['100 N', '100 N'],
      ['40 N', '40 N'],
      ['4 N', '4 N']
    ],
    why: [
      'F_s,max = μ_s · F_perp = 0.4 × 40 N = 16 N. Any push less than 16 N will not move the block.',
      'F_s,max = μ_s · F_perp = 0,4 × 40 N = 16 N. Una forza applicata minore di 16 N non riuscirà a mettere in moto il blocco.'
    ]
  },
  {
    id: 'phys-ch3-07',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Opposite Vector', 'Vettore opposto'],
    q: [
      'Vector B has components (4, -7). What are the components of the opposite vector -B?',
      'Il vettore B ha componenti cartesiane (4, -7). Quali sono le componenti del vettore opposto -B?'
    ],
    a: [
      ['(-4, 7)', '(-4, 7)'],
      ['(-4, -7)', '(-4, -7)'],
      ['(4, 7)', '(4, 7)'],
      ['(7, -4)', '(7, -4)']
    ],
    why: [
      'The opposite vector has the same magnitude and direction but opposite sense: -B = -(4, -7) = (-4, 7).',
      'Il vettore opposto ha stesso modulo, stessa direzione e verso contrario: le sue componenti sono entrambe cambiate di segno: (-4, 7).'
    ]
  },
  {
    id: 'phys-ch3-08',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Cartesian Components Resolution', 'Scomposizione di una forza'],
    q: [
      'A force of 100 N acts at an angle of 30° above the horizontal. Given cos(30°) ≈ 0.866 and sin(30°) = 0.5, what is its horizontal component F_x?',
      'Una forza di 100 N forma un angolo di 30° con l\'orizzontale. Sapendo che cos(30°) ≈ 0,866 e sin(30°) = 0,5, quanto vale la componente orizzontale F_x?'
    ],
    a: [
      ['86.6 N', '86,6 N'],
      ['50 N', '50 N'],
      ['100 N', '100 N'],
      ['115.5 N', '115,5 N']
    ],
    why: [
      'F_x = F · cos(θ) = 100 N × 0.866 = 86.6 N.',
      'La componente orizzontale è F_x = F · cos(30°) = 100 N × 0,866 = 86,6 N.'
    ]
  },
  {
    id: 'phys-ch3-09',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Normal Force on Flat Surface', 'Reazione vincolare'],
    q: [
      'A 60 N box rests motionless on a flat horizontal floor. What is the normal reaction force exerted by the floor on the box?',
      'Una scatola da 60 N è ferma su un pavimento orizzontale. Quanto vale la reazione vincolare normale esercitata dal pavimento?'
    ],
    a: [
      ['60 N, directed upward', '60 N, diretta verso l\'alto'],
      ['60 N, directed downward', '60 N, diretta verso il basso'],
      ['0 N, because the box is motionless', '0 N, perché la scatola è ferma'],
      ['120 N, directed upward', '120 N, diretta verso l\'alto']
    ],
    why: [
      'For vertical equilibrium (ΣF_y = 0), the floor exerts an upward normal force N equal and opposite to the downward weight P: N = 60 N upward.',
      'Per l\'equilibrio verticale (ΣF_y = 0), la reazione normale N del pavimento deve bilanciare perfettamente la forza peso: N = P = 60 N verso l\'alto.'
    ]
  },
  {
    id: 'phys-ch3-10',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Spring Constant Unit', 'Unità della costante elastica'],
    q: [
      'In the International System (SI), what is the unit of measure for a spring constant k?',
      'Nel Sistema Internazionale, qual è l\'unità di misura della costante elastica k di una molla?'
    ],
    a: [
      ['N / m (Newton per metre)', 'N / m (Newton su metro)'],
      ['N · m (Newton metre)', 'N · m (Newton per metro)'],
      ['N / m² (Newton per square metre)', 'N / m² (Newton su metro quadro)'],
      ['kg / m (kilogram per metre)', 'kg / m (chilogrammo su metro)']
    ],
    why: [
      'From Hooke\'s law F = k · Δx, we have k = F / Δx, which has dimensions of Force / length, or N/m.',
      'Dalla legge di Hooke F = k · Δx si ricava k = F / Δx, ovvero Forza divisa per lunghezza: N/m.'
    ]
  },
  {
    id: 'phys-ch3-11',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Dynamometer Principle', 'Funzionamento del dinamometro'],
    q: [
      'What physical phenomenon is utilized by a spring dynamometer to measure forces?',
      'Quale principio fisico sfrutta il dinamometro a molla per misurare le forze?'
    ],
    a: [
      ['The direct proportionality between elongation and applied force (Hooke\'s law)', 'La proporzionalità diretta tra allungamento e forza applicata (legge di Hooke)'],
      ['The atmospheric pressure exerted on the spring', 'La pressione atmosferica che comprime la molla'],
      ['The thermal expansion of metal under load', 'La dilatazione termica del metallo sotto sforzo'],
      ['Archimedes\' buoyant principle in air', 'Il principio di Archimede applicato all\'aria']
    ],
    why: [
      'A dynamometer measures forces by observing the elongation of a calibrated spring, which by Hooke\'s law is directly proportional to applied force.',
      'Il dinamometro sfrutta la deformazione elastica di una molla: l\'allungamento è direttamente proporzionale alla forza applicata.'
    ]
  },
  {
    id: 'phys-ch3-12',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Friction Independence of Contact Area', 'Attrito e superficie apparente'],
    q: [
      'A rectangular brick is slid across a table first on its broad face, then on its narrow edge. How does the maximum static friction compare?',
      'Un mattone rettangolare scivola su un tavolo prima sulla faccia larga, poi su quella stretta. Come varia la forza di attrito?'
    ],
    a: [
      ['It is practically identical in both cases', 'Rimane praticamente identica in entrambi i casi'],
      ['It is much greater on the broad face', 'È molto maggiore quando poggia sulla faccia larga'],
      ['It is much greater on the narrow edge', 'È molto maggiore quando poggia sulla faccia stretta'],
      ['It drops to zero on the narrow edge', 'Diventa nulla sulla faccia stretta']
    ],
    why: [
      'Friction force depends on the normal load and friction coefficient (F = μ · F_perp), independent of the apparent macroscopic contact area.',
      'La forza di attrito radente dipende solo dalla forza perpendicolare (peso) e dalla natura delle superfici, non dall\'estensione della superficie di contatto apparente.'
    ]
  },
  {
    id: 'phys-ch3-13',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Parallelogram Law Angle Effect', 'Angolo nella regola del parallelogramma'],
    q: [
      'Two 50 N forces act on the same point. As the angle between them increases from 0° to 180°, what happens to their resultant?',
      'Due forze da 50 N agiscono sullo stesso punto. Se l\'angolo tra loro passa da 0° a 180°, come varia la loro risultante?'
    ],
    a: [
      ['It decreases from 100 N down to 0 N', 'Diminuisce da 100 N fino a 0 N'],
      ['It remains constant at 50 N', 'Rimane costante a 50 N'],
      ['It increases from 0 N to 100 N', 'Aumenta da 0 N a 100 N'],
      ['It becomes negative', 'Diventa negativa']
    ],
    why: [
      'At 0° (same direction and sense), R = 50 + 50 = 100 N. At 180° (opposite senses), R = 50 - 50 = 0 N.',
      'A 0° le forze si sommano linearmente (R = 100 N); all\'aumentare dell\'angolo la diagonale del parallelogramma si accorcia, fino ad annullarsi a 180° (forze opposte, R = 0 N).'
    ]
  },
  {
    id: 'phys-ch3-14',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Tension in an Ideal Cable', 'Tensione di una fune'],
    q: [
      'A 10 kg mass hangs stationary from a vertical ideal cable (g = 9.8 N/kg). What is the tension in the cable?',
      'Una massa di 10 kg è appesa immobile a una fune ideale verticale (g = 9,8 N/kg). Qual è la tensione della fune?'
    ],
    a: [
      ['98 N', '98 N'],
      ['10 N', '10 N'],
      ['0 N', '0 N'],
      ['49 N', '49 N']
    ],
    why: [
      'For the hanging mass in equilibrium, upward tension equals downward weight: T = P = m · g = 10 kg × 9.8 N/kg = 98 N.',
      'All\'equilibrio la tensione verso l\'alto esercitata dalla fune deve uguagliare il peso verso il basso: T = P = m · g = 10 × 9,8 = 98 N.'
    ]
  },
  {
    id: 'phys-ch3-15',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Dynamic Friction Resistance', 'Calcolo dell\'attrito dinamico'],
    q: [
      'A sled with total weight 500 N is pulled along snow where μ_d = 0.08. What pulling force is needed to maintain constant speed?',
      'Una slitta di peso 500 N scivola sulla neve con μ_d = 0,08. Quale forza di trazione orizzontale serve per mantenerla a velocità costante?'
    ],
    a: [
      ['40 N', '40 N'],
      ['500 N', '500 N'],
      ['62.5 N', '62,5 N'],
      ['4 N', '4 N']
    ],
    why: [
      'At constant speed, pulling force balances dynamic friction: F = F_d = μ_d · N = 0.08 × 500 N = 40 N.',
      'A velocità costante la forza motrice deve uguagliare l\'attrito dinamico: F = F_d = μ_d · F_perp = 0,08 × 500 N = 40 N.'
    ]
  },
  {
    id: 'phys-ch3-16',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Springs in Parallel', 'Molle in parallelo'],
    q: [
      'Two identical springs, each with stiffness k = 150 N/m, are mounted side-by-side in parallel. What is the equivalent stiffness?',
      'Due molle identiche con costante k = 150 N/m sono collegate in parallelo affiancate. Qual è la costante elastica equivalente?'
    ],
    a: [
      ['300 N/m (k_eq = k₁ + k₂)', '300 N/m (k_eq = k₁ + k₂)'],
      ['75 N/m', '75 N/m'],
      ['150 N/m', '150 N/m'],
      ['22 500 N/m', '22 500 N/m']
    ],
    why: [
      'For springs in parallel, they undergo equal stretch and their restoring forces add: k_eq = k₁ + k₂ = 150 + 150 = 300 N/m.',
      'Nelle molle in parallelo gli allungamenti sono identici e le forze di richiamo si sommano, per cui k_eq = k₁ + k₂ = 300 N/m.'
    ]
  },
  {
    id: 'phys-ch3-17',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Multiplication of Vector by Negative Scalar', 'Moltiplicazione per scalare negativo'],
    q: [
      'What happens to a vector V when it is multiplied by the scalar -2?',
      'Che cosa succede a un vettore V quando viene moltiplicato per lo scalare -2?'
    ],
    a: [
      ['Its magnitude doubles and its direction is reversed (180°)', 'Il suo modulo raddoppia e il verso si inverte (180°)'],
      ['Its magnitude doubles while its sense is unchanged', 'Il modulo raddoppia e il verso rimane lo stesso'],
      ['Its magnitude is halved', 'Il modulo si dimezza'],
      ['It becomes perpendicular to V', 'Diventa perpendicolare a V']
    ],
    why: [
      'Multiplying by a negative scalar reverses the sense of the vector while scaling its magnitude by the absolute value |-2| = 2.',
      'La moltiplicazione per uno scalare negativo inverte il verso del vettore, mentre il modulo viene moltiplicato per il valore assoluto dello scalare (|-2| = 2).'
    ]
  },
  {
    id: 'phys-ch3-18',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Force Equilibrium on a Point', 'Equilibrio del punto materiale'],
    q: [
      'Three forces act on a stationary point: F₁ = 10 N east, F₂ = 10 N north. What must force F₃ be for the point to remain in equilibrium?',
      'Tre forze agiscono su un punto fermo: F₁ = 10 N verso est, F₂ = 10 N verso nord. Come deve essere la forza F₃ affinché il punto rimanga in equilibrio?'
    ],
    a: [
      ['14.1 N towards south-west', '14,1 N verso sud-ovest'],
      ['20 N towards south-west', '20 N verso sud-ovest'],
      ['14.1 N towards north-east', '14,1 N verso nord-est'],
      ['10 N towards west', '10 N verso ovest']
    ],
    why: [
      'The resultant of F₁ and F₂ is R = √(10² + 10²) = √200 ≈ 14.14 N north-east. To cancel it (ΣF = 0), F₃ must be equal in magnitude and opposite in direction: 14.1 N south-west.',
      'La risultante di F₁ e F₂ vale R = √(10² + 10²) ≈ 14,14 N a nord-est. Per avere equilibrio (ΣF = 0), F₃ deve essere opposta: 14,1 N verso sud-ovest.'
    ]
  },
  {
    id: 'phys-ch3-19',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Springs in Series', 'Molle in serie'],
    q: [
      'Two identical springs of stiffness k = 100 N/m are connected end-to-end in series. What is their combined stiffness?',
      'Due molle uguali di costante k = 100 N/m sono collegate l\'una di seguito all\'altra in serie. Qual è la costante equivalente?'
    ],
    a: [
      ['50 N/m (1/k_eq = 1/k₁ + 1/k₂)', '50 N/m (1/k_eq = 1/k₁ + 1/k₂)'],
      ['200 N/m', '200 N/m'],
      ['100 N/m', '100 N/m'],
      ['25 N/m', '25 N/m']
    ],
    why: [
      'For springs in series, the same force produces stretch in both: 1/k_eq = 1/100 + 1/100 = 2/100 → k_eq = 50 N/m (the combination is more flexible).',
      'Nelle molle in serie la forza è la stessa su entrambe e gli allungamenti si sommano: 1/k_eq = 1/k₁ + 1/k₂ = 2/100, quindi k_eq = 50 N/m (la molla equivalente è più cedevole).'
    ]
  },
  {
    id: 'phys-ch3-20',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 18,
    missionId: 'phys_q_ch3',
    chapterTitle: ['Vectors & Forces', 'I vettori e le forze'],
    missionTitle: ['Static Friction Threshold', 'Superamento dell\'attrito statico'],
    q: [
      'A force of 15 N pushes horizontally on a crate where the maximum static friction is 20 N. What is the actual friction force exerted by the floor?',
      'Si applica una spinta orizzontale di 15 N a una cassa dove l\'attrito statico massimo vale 20 N. Quanto vale la forza di attrito effettiva?'
    ],
    a: [
      ['15 N (it exactly matches the applied push)', '15 N (uguaglia esattamente la spinta applicata)'],
      ['20 N (it always exerts the maximum value)', '20 N (esercita sempre il valore massimo)'],
      ['5 N', '5 N'],
      ['0 N', '0 N']
    ],
    why: [
      'Static friction is an adaptable constraint force: as long as the applied force does not exceed F_s,max, static friction equals the applied force exactly, maintaining static equilibrium.',
      'L\'attrito statico è una forza autolimitante e adattativa: finché non si supera il valore di soglia massimo (20 N), essa è esattamente uguale e contraria alla forza che tenta di muovere il corpo (15 N).'
    ]
  }
];
