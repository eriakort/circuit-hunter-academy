import { TaggedQuestion } from '../types';

export const CH4_QUESTIONS: TaggedQuestion[] = [
  {
    id: 'phys-ch4-01',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Torque Definition', 'Definizione di momento di una forza'],
    q: [
      'In physics, how is the moment of a force (torque) M about a point O defined?',
      'In fisica, come è definito il momento di una forza M rispetto a un punto O?'
    ],
    a: [
      ['Force magnitude multiplied by the lever arm (distance to the line of action)', 'Modulo della forza moltiplicato per il braccio (distanza perpendicolare alla retta d\'azione)'],
      ['Force magnitude divided by distance', 'Modulo della forza diviso la distanza dal polo'],
      ['Force magnitude multiplied by mass of the object', 'Modulo della forza moltiplicato per la massa del corpo'],
      ['Acceleration multiplied by time', 'Accelerazione moltiplicata per il tempo']
    ],
    why: [
      'Torque M = F · b, where the lever arm b is the perpendicular distance between the pivot point O and the line of action of the force. Its unit is N · m.',
      'Il momento di una forza è M = F · b, dove il braccio b è la distanza tra il polo e la retta d\'azione della forza. L\'unità di misura è il Newton metro (N · m).'
    ]
  },
  {
    id: 'phys-ch4-02',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Zero Lever Arm', 'Braccio nullo'],
    q: [
      'If the line of action of a force passes directly through the pivot point O, what is its torque about O?',
      'Se la retta d\'azione di una forza passa esattamente per il polo O, quanto vale il suo momento rispetto a O?'
    ],
    a: [
      ['Zero (0 N · m)', 'Zero (0 N · m)'],
      ['Infinite', 'Infinito'],
      ['Equal to the force magnitude', 'Pari al modulo della forza'],
      ['Negative', 'Negativo']
    ],
    why: [
      'Because the distance from the pivot to the line of action is zero (lever arm b = 0), the resulting torque M = F · 0 = 0 N · m. Pushing directly towards the hinge will not rotate a door.',
      'Poiché la distanza tra il polo e la retta d\'azione è nulla (braccio b = 0), il momento è M = F · 0 = 0. Spingere verso i cardini non fa ruotare una porta.'
    ]
  },
  {
    id: 'phys-ch4-03',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Inclined Plane Parallel Component', 'Piano inclinato: componente parallela'],
    q: [
      'A cart of weight P = 300 N is on a frictionless ramp of length l = 5 m and height h = 2 m. What force parallel to the ramp is needed to hold it in place?',
      'Un carrello di peso P = 300 N si trova su un piano inclinato senza attrito di lunghezza l = 5 m e altezza h = 2 m. Quale forza parallela al piano serve per tenerlo in equilibrio?'
    ],
    a: [
      ['120 N', '120 N'],
      ['300 N', '300 N'],
      ['150 N', '150 N'],
      ['750 N', '750 N']
    ],
    why: [
      'Parallel component P_parallel = P · (h / l) = 300 N × (2 m / 5 m) = 120 N. An equal and opposite holding force of 120 N is required.',
      'La componente del peso parallela al piano è P_parallelo = P · (h / l) = 300 × (2 / 5) = 120 N. Per tenerlo fermo occorre una forza uguale e contraria di 120 N.'
    ]
  },
  {
    id: 'phys-ch4-04',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Lever Equilibrium Formula', 'Equilibrio della leva'],
    q: [
      'A lever has an effort arm b_m = 0.8 m and a resistance arm b_r = 0.2 m. To lift a load of F_r = 400 N, what effort force F_m is required?',
      'Una leva ha braccio motrice b_m = 0,8 m e braccio resistente b_r = 0,2 m. Per sollevare un carico F_r = 400 N, quale forza motrice F_m occorre?'
    ],
    a: [
      ['100 N', '100 N'],
      ['400 N', '400 N'],
      ['1 600 N', '1 600 N'],
      ['50 N', '50 N']
    ],
    why: [
      'By the law of the lever: F_m · b_m = F_r · b_r → F_m = (400 N × 0.2 m) / 0.8 m = 80 / 0.8 = 100 N.',
      'Dalla legge della leva (F_m · b_m = F_r · b_r): F_m = (400 × 0,2) / 0,8 = 100 N. La leva è vantaggiosa con guadagno 4.'
    ]
  },
  {
    id: 'phys-ch4-05',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Second-Class Lever Always Advantageous', 'Leva di secondo genere'],
    q: [
      'Why is a second-class lever (such as a wheelbarrow or nutcracker) always advantageous?',
      'Perché una leva di secondo genere (come la carriola o lo schiaccianoci) è sempre vantaggiosa?'
    ],
    a: [
      ['Because the resistance is between the fulcrum and effort, making the effort arm always longer than the resistance arm', 'Perché la resistenza sta tra fulcro e potenza, rendendo il braccio motrice sempre più lungo di quello resistente'],
      ['Because friction is completely absent', 'Perché l\'attrito è sempre assente'],
      ['Because the fulcrum is located at the center of gravity', 'Perché il fulcro coincide con il baricentro'],
      ['Because the load moves twice as fast as the hand', 'Perché il carico si muove al doppio della velocità della mano']
    ],
    why: [
      'In second-class levers, the resistance is in the middle: b_m > b_r is always true, so F_m < F_r (you always exert less force than the load).',
      'Nelle leve di 2° genere la resistenza è interposta tra fulcro e potenza, quindi il braccio della forza motrice è per forza maggiore di quello della resistenza (b_m > b_r), rendendola sempre vantaggiosa (F_m < F_r).'
    ]
  },
  {
    id: 'phys-ch4-06',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Third-Class Lever Purpose', 'Leva di terzo genere'],
    q: [
      'Third-class levers (such as tweezers or the human forearm) are always disadvantageous (F_m > F_r). What advantage do they provide instead?',
      'Le leve di terzo genere (come le pinzette o l\'avambraccio umano) sono sempre svantaggiose (F_m > F_r). Quale vantaggio offrono in cambio?'
    ],
    a: [
      ['They amplify distance and speed, providing precision of movement', 'Consentono un guadagno in ampiezza di spostamento, velocità e precisione'],
      ['They store potential energy in the fulcrum', 'Accumulano energia potenziale nel fulcro'],
      ['They eliminate the force of gravity', 'Annullano l\'effetto della forza di gravità'],
      ['They multiply mechanical work output', 'Aumentano il lavoro meccanico compiuto']
    ],
    why: [
      'A disadvantageous lever requires more force, but a small movement of the effort produces a much larger, faster, or more precise movement of the load.',
      'Anche se richiedono una forza motrice maggiore del carico, le leve di 3° genere amplificano lo spostamento della resistenza permettendo movimenti ampi, veloci o delicati e precisi.'
    ]
  },
  {
    id: 'phys-ch4-07',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Couple of Forces', 'Coppia di forze'],
    q: [
      'Two equal and opposite parallel forces of 25 N act along lines separated by a distance of 0.4 m (e.g. turning a steering wheel). What do they produce?',
      'Due forze uguali e contrarie di 25 N agiscono lungo rette parallele distanti 0,4 m (come le due mani che girano un volante). Che effetto producono?'
    ],
    a: [
      ['Pure rotation with a torque of 10 N · m and no net translation', 'Rotazione pura con momento di 10 N · m e nessuna traslazione'],
      ['Linear acceleration forward', 'Accelerazione lineare in avanti'],
      ['Zero torque and zero effect', 'Momento nullo ed effetto nullo'],
      ['Deformation with a torque of 100 N · m', 'Deformazione con momento di 100 N · m']
    ],
    why: [
      'A couple of forces has net force ΣF = 0 (no translation), but a non-zero torque M = F · d = 25 N × 0.4 m = 10 N · m causing pure rotation.',
      'Una coppia di forze ha risultante vettoriale nulla (nessuna traslazione), ma momento netto M = F · d = 25 N × 0,4 m = 10 N · m che provoca una rotazione pura.'
    ]
  },
  {
    id: 'phys-ch4-08',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Rigid Body Equilibrium Conditions', 'Condizioni di equilibrio del corpo rigido'],
    q: [
      'What are the two necessary conditions for a rigid body to remain in static equilibrium?',
      'Quali sono le due condizioni necessarie affinché un corpo rigido sia in equilibrio statico?'
    ],
    a: [
      ['Zero net resultant force (ΣF = 0) AND zero net torque about any point (ΣM = 0)', 'Risultante delle forze nulla (ΣF = 0) E momento totale nullo (ΣM = 0) rispetto a qualsiasi polo'],
      ['Only zero net force is required (ΣF = 0)', 'È sufficiente che la risultante delle forze sia nulla (ΣF = 0)'],
      ['Only zero net torque is required (ΣM = 0)', 'È sufficiente che il momento delle forze sia nullo (ΣM = 0)'],
      ['Its velocity and acceleration must both be positive', 'Velocità e accelerazione devono essere entrambe positive']
    ],
    why: [
      'A rigid body can translate and rotate. To prevent translation, ΣF = 0; to prevent rotation, ΣM = 0 about any chosen pivot.',
      'Un corpo rigido può sia traslare sia ruotare. Per impedire la traslazione serve ΣF = 0; per impedire la rotazione serve ΣM = 0 rispetto a qualunque asse o polo.'
    ]
  },
  {
    id: 'phys-ch4-09',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Center of Gravity Tip Condition', 'Condizione di ribaltamento'],
    q: [
      'When does a tall solid object standing on a surface tip over?',
      'Quando un solido appoggiato su una superficie si ribalta?'
    ],
    a: [
      ['When the vertical line through its center of gravity falls outside its base of support', 'Quando la verticale condotta dal suo baricentro cade fuori dalla base di appoggio'],
      ['Whenever its height exceeds its width', 'Ogni volta che l\'altezza supera la larghezza'],
      ['When the normal reaction force exceeds its weight', 'Quando la reazione normale supera la forza peso'],
      ['Only when an external horizontal force equals its mass', 'Solo quando una forza orizzontale uguaglia la sua massa']
    ],
    why: [
      'If the line of action of gravity passes outside the base, gravity produces a destabilizing torque about the edge of the base, causing the body to tip over.',
      'Finché la verticale per il baricentro cade entro la base di appoggio, il peso genera un momento raddrizzante. Quando cade all\'esterno, il momento del peso ribalta l\'oggetto.'
    ]
  },
  {
    id: 'phys-ch4-10',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Stable vs Unstable Equilibrium', 'Equilibrio stabile e instabile'],
    q: [
      'A cone resting on its flat base is in stable equilibrium. Why?',
      'Un cono che poggia sulla sua base circolare piana è in equilibrio stabile. Perché?'
    ],
    a: [
      ['Any slight tilt raises its center of gravity, generating a restoring torque', 'Ogni piccola inclinazione innalza il baricentro, generando un momento che tende a riportarlo nella posizione iniziale'],
      ['Its center of gravity is at ground level', 'Il suo baricentro si trova esattamente al livello del suolo'],
      ['Friction is infinite at the base', 'L\'attrito alla base è infinito'],
      ['Its center of gravity never moves', 'Il suo baricentro non si muove mai']
    ],
    why: [
      'In stable equilibrium, displacing the object raises its center of gravity (potential energy increases), and gravity produces a restoring torque returning it to equilibrium.',
      'Nell\'equilibrio stabile, una piccola perturbazione innalza il baricentro (aumenta l\'energia potenziale); il peso genera quindi un momento raddrizzante che ripristina la quiete.'
    ]
  },
  {
    id: 'phys-ch4-11',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Inclined Plane with Friction Equilibrium', 'Piano inclinato con attrito'],
    q: [
      'On an inclined plane, the slope is gradually increased until a block begins to slip at angle θ = 30°. Given tan(30°) ≈ 0.577, what is the static friction coefficient μ_s?',
      'Su un piano inclinato si aumenta l\'inclinazione finché un blocco inizia a scivolare a θ = 30°. Sapendo che tan(30°) ≈ 0,577, quanto vale il coefficiente di attrito statico μ_s?'
    ],
    a: [
      ['0.577 (μ_s = tan θ)', '0,577 (μ_s = tan θ)'],
      ['0.5 (μ_s = sin θ)', '0,5 (μ_s = sin θ)'],
      ['0.866 (μ_s = cos θ)', '0,866 (μ_s = cos θ)'],
      ['1.732', '1,732']
    ],
    why: [
      'At the verge of slipping: P_parallel = F_s,max → P · sin(θ) = μ_s · P · cos(θ) → μ_s = tan(θ) = tan(30°) ≈ 0.577.',
      'Al limite dello scivolamento la componente del peso parallela uguaglia l\'attrito statico massimo: P sinθ = μ_s P cosθ, da cui si ricava la nota formula μ_s = tanθ = tan(30°) ≈ 0,577.'
    ]
  },
  {
    id: 'phys-ch4-12',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Sign Convention of Torque', 'Convenzione del segno del momento'],
    q: [
      'By standard mathematical and physical convention, which direction of rotation is assigned a positive torque?',
      'Per convenzione standard in fisica e matematica, a quale rotazione viene attribuito momento positivo?'
    ],
    a: [
      ['Counter-clockwise (anticlockwise)', 'Senso antiorario'],
      ['Clockwise', 'Senso orario'],
      ['Downward', 'Verso il basso'],
      ['Along the direction of motion', 'Lungo la direzione del moto']
    ],
    why: [
      'By convention (right-hand rule), counter-clockwise torques are defined as positive, and clockwise torques are negative.',
      'Per convenzione internazionale (regola della mano destra), le rotazioni in senso antiorario hanno momento positivo (+), mentre quelle in senso orario hanno momento negativo (-).'
    ]
  },
  {
    id: 'phys-ch4-13',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['First-Class Lever Examples', 'Esempi di leve di primo genere'],
    q: [
      'Which of the following common tools is a first-class (interfissa) lever?',
      'Quale dei seguenti strumenti comuni è una leva di primo genere (interfissa)?'
    ],
    a: [
      ['Scissors', 'Forbici'],
      ['Nutcracker', 'Schiaccianoci'],
      ['Tweezers', 'Pinzette per ciglia'],
      ['Bottle opener', 'Apribottiglie']
    ],
    why: [
      'In a pair of scissors, the pivot pin (fulcrum) is between the handles (effort) and the blades (resistance), which defines a first-class lever.',
      'Nelle forbici il perno (fulcro) si trova tra l\'impugnatura (potenza) e le lame (resistenza): questa configurazione definisce la leva di 1° genere.'
    ]
  },
  {
    id: 'phys-ch4-14',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Fixed Pulley Mechanical Advantage', 'Carrucola fissa'],
    q: [
      'A single fixed pulley changes the direction of a pulling force. What is its ideal mechanical advantage?',
      'Una carrucola fissa cambia la direzione della fune. Qual è il suo guadagno meccanico ideale?'
    ],
    a: [
      ['1 (F_m = F_r, it does not reduce force, only changes direction)', '1 (F_m = F_r, non riduce la forza, cambia solo la direzione)'],
      ['2 (it halves the required force)', '2 (dimezza la forza necessaria)'],
      ['4', '4'],
      ['0.5', '0,5']
    ],
    why: [
      'A fixed pulley acts as an equal-arm lever of the first class (b_m = b_r = radius R): F_m = F_r. It offers convenience in direction of pull without force multiplication.',
      'La carrucola fissa equivale a una leva di 1° genere a bracci uguali (pari al raggio della carrucola): la forza necessaria è uguale al peso da sollevare (guadagno = 1), ma è molto più comodo tirare verso il basso.'
    ]
  },
  {
    id: 'phys-ch4-15',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Movable Pulley Advantage', 'Carrucola mobile'],
    q: [
      'In contrast to a fixed pulley, what mechanical advantage does a single movable pulley provide when lifting a load?',
      'A differenza della carrucola fissa, quale vantaggio offre una carrucola mobile nel sollevare un carico?'
    ],
    a: [
      ['It halves the required effort force (F_m = F_r / 2)', 'Dimezza la forza motrice necessaria (F_m = F_r / 2)'],
      ['It triples the required force', 'Triplica la forza necessaria'],
      ['It requires zero effort', 'Non richiede alcuno sforzo'],
      ['It does not change the force at all', 'Non modifica in alcun modo la forza']
    ],
    why: [
      'A movable pulley acts as a second-class lever with b_m = 2R and b_r = R: F_m = F_r / 2. The load is shared between the anchor rope and the pulling hand.',
      'Nella carrucola mobile il fulcro è all\'estremità della fune vincolata al soffitto: il braccio motrice è il diametro (2R) e il braccio resistente il raggio (R), per cui la forza necessaria si dimezza: F_m = F_r / 2.'
    ]
  },
  {
    id: 'phys-ch4-16',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Neutral Equilibrium', 'Equilibrio indifferente'],
    q: [
      'A smooth billiard ball resting on a perfectly horizontal table is in what type of equilibrium?',
      'Una palla da biliardo perfettamente sferica che poggia su un tavolo orizzontale si trova in quale tipo di equilibrio?'
    ],
    a: [
      ['Neutral (indifferent) equilibrium', 'Equilibrio indifferente'],
      ['Stable equilibrium', 'Equilibrio stabile'],
      ['Unstable equilibrium', 'Equilibrio instabile'],
      ['Dynamic oscillation', 'Oscillazione dinamica']
    ],
    why: [
      'When rolled to a new position, the height of its center of gravity does not change at all (potential energy stays constant), remaining in equilibrium wherever it is moved.',
      'Spostando la palla, l\'altezza del baricentro rispetto al tavolo rimane esattamente la stessa: non si genera alcun momento che tenda a ripristinare né ad allontanare la posizione, restando in quiete ovunque.'
    ]
  },
  {
    id: 'phys-ch4-17',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Perpendicular Component on Inclined Plane', 'Componente perpendicolare su piano inclinato'],
    q: [
      'As the angle θ of an inclined plane increases towards 90° (vertical), what happens to the normal force P_perp pressing into the ramp?',
      'Se l\'angolo θ di un piano inclinato aumenta avvicinandosi a 90° (parete verticale), che cosa accade alla forza che preme sul piano P_perp?'
    ],
    a: [
      ['It decreases towards zero (P_perp = P · cos θ)', 'Diminuisce fino ad annullarsi (P_perp = P · cos θ)'],
      ['It increases towards infinity', 'Aumenta fino all\'infinito'],
      ['It remains constant', 'Rimane costante'],
      ['It becomes greater than the total weight', 'Diventa maggiore del peso totale']
    ],
    why: [
      'P_perp = P · cos(θ). As θ approaches 90°, cos(θ) approaches 0, so the block exerts no force on the ramp (it is in free fall).',
      'Poiché P_perp = P · cos(θ) e il coseno di 90° è zero, all\'aumentare della pendenza la forza con cui il corpo preme sul piano diminuisce gradualmente fino ad azzerarsi.'
    ]
  },
  {
    id: 'phys-ch4-18',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Door Handle Position Rationale', 'Posizione della maniglia della porta'],
    q: [
      'Why are door handles placed at the far edge of a door, as far from the hinges as possible?',
      'Perché le maniglie delle porte sono posizionate sul bordo opposto rispetto ai cardini?'
    ],
    a: [
      ['To maximize the lever arm, requiring less force to produce the same opening torque', 'Per massimizzare il braccio, riducendo la forza necessaria a produrre il momento di apertura'],
      ['To prevent the door from coming off its hinges', 'Per evitare che la porta si sfili dai cardini'],
      ['To make the door heavier', 'Per rendere la porta più pesante'],
      ['To minimize air resistance', 'Per ridurre la resistenza dell\'aria']
    ],
    why: [
      'Since M = F · b, having a large lever arm b allows a small push F to generate the necessary torque M to swing the door open easily.',
      'Poiché M = F · b, massimizzando il braccio b basta una forza F molto piccola per ottenere il momento torcente necessario ad aprire la porta.'
    ]
  },
  {
    id: 'phys-ch4-19',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Two Kids on a Seesaw Balance', 'Altalena in equilibrio'],
    q: [
      'A 30 kg child sits 2 m from the pivot of a seesaw. Where must a 20 kg child sit on the opposite side to balance it?',
      'Un bambino di 30 kg siede a 2 m dal fulcro di un\'altalena. Dove deve sedersi sull\'altro lato un bambino di 20 kg per bilanciare l\'altalena?'
    ],
    a: [
      ['3 m from the pivot', 'A 3 m dal fulcro'],
      ['2 m from the pivot', 'A 2 m dal fulcro'],
      ['1.5 m from the pivot', 'A 1,5 m dal fulcro'],
      ['4 m from the pivot', 'A 4 m dal fulcro']
    ],
    why: [
      'Equilibrium of torques: P₁ · d₁ = P₂ · d₂ → (30 kg · g) · 2 m = (20 kg · g) · d₂ → 60 = 20 · d₂ → d₂ = 3 m.',
      'Per l\'equilibrio dei momenti: P₁ · d₁ = P₂ · d₂. Sostituendo: 30 × 2 = 20 × d₂, da cui d₂ = 60 / 20 = 3 m.'
    ]
  },
  {
    id: 'phys-ch4-20',
    subject: 'phys',
    unitIndex: 3,
    arcIndex: 19,
    missionId: 'phys_q_ch4',
    chapterTitle: ['Equilibrium of Solids', "L'equilibrio dei solidi"],
    missionTitle: ['Mechanical Advantage Formula', 'Guadagno meccanico di una macchina'],
    q: [
      'How is the mechanical advantage (guadagno) of any simple machine formally defined?',
      'Come è definito formalmente il guadagno meccanico di una macchina semplice?'
    ],
    a: [
      ['The ratio of Resistance force to Effort force: F_r / F_m', 'Il rapporto tra la forza resistente e la forza motrice: F_r / F_m'],
      ['The product of Resistance and Effort forces: F_r · F_m', 'Il prodotto tra la forza resistente e la forza motrice: F_r · F_m'],
      ['The difference between Resistance and Effort: F_r - F_m', 'La differenza tra forza resistente e motrice: F_r - F_m'],
      ['The speed of the load divided by time', 'La velocità del carico divisa per il tempo']
    ],
    why: [
      'Mechanical advantage is the ratio of output load force F_r to input effort force F_m. If F_r / F_m > 1, the machine is advantageous (amplifies force).',
      'Il guadagno di una macchina semplice è il rapporto F_r / F_m. Se tale rapporto è maggiore di 1, la macchina è vantaggiosa (consente di vincere una resistenza maggiore della forza applicata).'
    ]
  }
];
