import type { Mission, QuizQuestion } from '../types';

type Pair = [string, string];
const question = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({ q: [en, it], a: answers, why });
interface Input {
  id: string; sec: string; pages: string; hue: number; title: Pair; topic: Pair;
  demon: Pair; tech: Pair; lessons: [Pair, Pair, Pair]; quiz: QuizQuestion[];
}
const makeMission = (item: Input): Mission => ({
  id: item.id, arc: 0, sec: item.sec, pages: item.pages, hue: item.hue,
  horns: 2, eyes: 2, title: item.title, topic: item.topic, demon: item.demon, tech: item.tech,
  scenes: [
    { who: 's', text: item.lessons[0] },
    { who: 's', text: item.lessons[1] },
    { who: 's', text: item.lessons[2] },
    { who: 'd', text: [
      `<p>🧬 I am ${item.demon[0]}! I have mixed up the body's science. Can you restore the facts?</p>`,
      `<p>🧬 Sono ${item.demon[1]}! Ho confuso la scienza del corpo. Sai rimettere a posto le informazioni?</p>`
    ] },
    { type: 'battle' }
  ],
  quiz: item.quiz
});

export const GRADE5_HUMAN_BODY_MISSIONS: Mission[] = [
  makeMission({
    id: 'g5h-one-amazing-organism', sec: '1', pages: '51–54', hue: 160,
    title: ['One Amazing Organism', 'Un organismo unico'],
    topic: ['How the human body is organised', 'Come è organizzato il corpo umano'],
    demon: ['The Body Jumbler', 'Il Confusore del Corpo'],
    tech: ['Biology Style · First Technique: Body Blueprint', 'Stile Biologico · Prima Tecnica: Progetto del Corpo'],
    lessons: [
      ['<p>🧍 Your body is a living <b>organism</b>. It carries out many jobs at the same time: it moves, breathes, digests food, senses the world and thinks.</p><p>Different parts work together. No organ does every job alone.</p>', '<p>🧍 Il tuo corpo è un <b>organismo</b> vivente. Svolge tante attività contemporaneamente: si muove, respira, digerisce il cibo, percepisce il mondo e pensa.</p><p>Le diverse parti collaborano. Nessun organo svolge da solo tutte le funzioni.</p>'],
      ['<p>Scientists describe levels of organisation: <b>cells</b> form tissues; tissues form organs; organs work together in systems or apparatuses; all of them make the organism.</p><p>For example, heart muscle cells form cardiac tissue, which makes up the heart.</p>', '<p>Gli scienziati descrivono diversi livelli di organizzazione: le <b>cellule</b> formano i tessuti; i tessuti formano gli organi; gli organi collaborano in sistemi o apparati; tutti insieme costituiscono l’organismo.</p><p>Per esempio, le cellule muscolari formano il tessuto cardiaco, che costituisce il cuore.</p>'],
      ['<p>An <b>organ</b> is a body part made of different tissues that performs a particular job. The stomach helps digest food; the lungs exchange gases; the brain coordinates many activities.</p><p>Health depends on the teamwork of the whole body.</p>', '<p>Un <b>organo</b> è una parte del corpo formata da tessuti diversi e svolge un compito preciso. Lo stomaco aiuta a digerire il cibo; i polmoni scambiano i gas; il cervello coordina molte attività.</p><p>La salute dipende dalla collaborazione di tutto il corpo.</p>']
    ],
    quiz: [
      question('What is an organism?', 'Che cos’è un organismo?', [['A living thing', 'Un essere vivente'], ['A single tissue', 'Un singolo tessuto'], ['A bone only', 'Solo un osso']], ['An organism is a living thing made of interacting parts.', 'Un organismo è un essere vivente formato da parti che collaborano.']),
      question('Which order goes from smallest to largest?', 'Quale ordine va dal più piccolo al più grande?', [['Cell, tissue, organ, organism', 'Cellula, tessuto, organo, organismo'], ['Organ, cell, tissue, organism', 'Organo, cellula, tessuto, organismo'], ['Tissue, organism, cell, organ', 'Tessuto, organismo, cellula, organo']], ['Cells form tissues, tissues form organs, and organs contribute to the organism.', 'Le cellule formano i tessuti, i tessuti gli organi e gli organi contribuiscono all’organismo.']),
      question('Why do organs work together?', 'Perché gli organi collaborano?', [['To keep the body working', 'Per far funzionare il corpo'], ['To do exactly the same job', 'Per svolgere tutti lo stesso compito'], ['To stop other organs', 'Per fermare gli altri organi']], ['Body systems depend on cooperation.', 'I sistemi del corpo dipendono dalla collaborazione.'])
    ]
  }),
  makeMission({
    id: 'g5h-cells-building-blocks', sec: '2', pages: '52', hue: 175,
    title: ['Cells: The Building Blocks', 'Le cellule: i mattoni della vita'],
    topic: ['The basic structure of living things', 'La struttura fondamentale degli esseri viventi'],
    demon: ['The Cell Crusher', 'Lo Schiaccia-Cellule'],
    tech: ['Microscope Style · Cell Explorer', 'Stile Microscopico · Esplora-Cellule'],
    lessons: [
      ['<p>🔬 All living things are made of one or more <b>cells</b>. A cell is the smallest unit that can carry out the basic activities of life.</p><p>Some organisms, such as many bacteria, consist of one cell. Humans are made of trillions of cells.</p>', '<p>🔬 Tutti gli esseri viventi sono formati da una o più <b>cellule</b>. La cellula è la più piccola unità capace di svolgere le funzioni fondamentali della vita.</p><p>Alcuni organismi, come molti batteri, sono formati da una sola cellula. Gli esseri umani ne hanno migliaia di miliardi.</p>'],
      ['<p>A typical animal cell has a <b>cell membrane</b>, which surrounds it; <b>cytoplasm</b>, where many activities happen; and a <b>nucleus</b>, which contains most of the cell&apos;s genetic information.</p>', '<p>Una tipica cellula animale possiede la <b>membrana cellulare</b>, che la delimita; il <b>citoplasma</b>, dove avvengono molte attività; e il <b>nucleo</b>, che contiene gran parte delle informazioni genetiche della cellula.</p>'],
      ['<p>Cells have different shapes and jobs. A nerve cell can be long to carry messages; a red blood cell is shaped to help transport oxygen.</p><p>Cells need water and nutrients, and they remove waste products.</p>', '<p>Le cellule hanno forme e compiti diversi. Una cellula nervosa può essere allungata per trasmettere messaggi; un globulo rosso ha una forma adatta a trasportare ossigeno.</p><p>Le cellule hanno bisogno di acqua e sostanze nutritive ed eliminano i prodotti di scarto.</p>']
    ],
    quiz: [
      question('What is the smallest basic unit of life?', 'Qual è la più piccola unità fondamentale della vita?', [['The cell', 'La cellula'], ['The organ', 'L’organo'], ['The skeleton', 'Lo scheletro']], ['The cell is the basic unit of living things.', 'La cellula è l’unità fondamentale degli esseri viventi.']),
      question('What surrounds an animal cell?', 'Che cosa circonda una cellula animale?', [['The cell membrane', 'La membrana cellulare'], ['The skeleton', 'Lo scheletro'], ['The lungs', 'I polmoni']], ['The cell membrane forms the cell boundary.', 'La membrana cellulare delimita la cellula.']),
      question('Which cell part contains most genetic information?', 'Quale parte della cellula contiene gran parte delle informazioni genetiche?', [['The nucleus', 'Il nucleo'], ['The cytoplasm', 'Il citoplasma'], ['The membrane', 'La membrana']], ['The nucleus contains most of the cell’s genetic information.', 'Il nucleo contiene gran parte delle informazioni genetiche della cellula.'])
    ]
  }),
  makeMission({
    id: 'g5h-tissues-and-organs', sec: '3', pages: '53–54', hue: 190,
    title: ['From Cells to Systems', 'Dalle cellule agli apparati'],
    topic: ['Tissues, organs, systems and apparatuses', 'Tessuti, organi, sistemi e apparati'],
    demon: ['The Tissue Tangler', 'L’Intricatore di Tessuti'],
    tech: ['Teamwork Style · Organise the Body', 'Stile di Squadra · Organizza il Corpo'],
    lessons: [
      ['<p>🧩 Cells that have similar structures and cooperate in the same task form a <b>tissue</b>. Examples include muscle tissue, nervous tissue and epithelial tissue, which covers and protects surfaces.</p>', '<p>🧩 Cellule con caratteristiche simili che collaborano allo stesso compito formano un <b>tessuto</b>. Alcuni esempi sono il tessuto muscolare, quello nervoso e quello epiteliale, che riveste e protegge le superfici.</p>'],
      ['<p>Different tissues combine to make an <b>organ</b>. The heart, for example, contains muscle, nervous and connective tissues. Each contributes to the heart’s work.</p>', '<p>Tessuti diversi si uniscono per formare un <b>organo</b>. Il cuore, per esempio, contiene tessuto muscolare, nervoso e connettivo. Ognuno contribuisce al suo funzionamento.</p>'],
      ['<p>Several organs cooperate in a <b>system</b> or <b>apparatus</b>. The digestive apparatus includes organs such as the mouth, stomach and intestines. Together they process food and absorb nutrients.</p>', '<p>Più organi collaborano in un <b>sistema</b> o in un <b>apparato</b>. L’apparato digerente comprende organi come bocca, stomaco e intestino. Insieme trasformano il cibo e assorbono le sostanze nutritive.</p>']
    ],
    quiz: [
      question('What is a tissue?', 'Che cos’è un tessuto?', [['A group of cooperating cells', 'Un gruppo di cellule che collaborano'], ['A whole organism', 'Un intero organismo'], ['A single bone', 'Un singolo osso']], ['A tissue is made of cells that work together.', 'Un tessuto è formato da cellule che collaborano.']),
      question('An organ is made of…', 'Un organo è formato da…', [['Different tissues', 'Tessuti diversi'], ['Only one cell', 'Una sola cellula'], ['Only air', 'Solo aria']], ['Different tissues combine to perform an organ’s function.', 'Tessuti diversi si uniscono per svolgere la funzione di un organo.']),
      question('What do organs form when they cooperate?', 'Che cosa formano gli organi quando collaborano?', [['Systems or apparatuses', 'Sistemi o apparati'], ['Cells', 'Cellule'], ['Nutrients', 'Sostanze nutritive']], ['Organs cooperate in systems and apparatuses.', 'Gli organi collaborano in sistemi e apparati.'])
    ]
  }),
  makeMission({
    id: 'g5h-locomotor-system', sec: '4', pages: '55–60', hue: 205,
    title: ['The Locomotor System', 'L’apparato locomotore'],
    topic: ['How bones and muscles help us move', 'Come ossa e muscoli ci aiutano a muoverci'],
    demon: ['The Movement Mixer', 'Il Confusore del Movimento'],
    tech: ['Motion Style · Move Together', 'Stile del Movimento · Muoviti in Squadra'],
    lessons: [
      ['<p>🏃 The <b>locomotor system</b> allows the body to stand, keep its posture and move. Its main parts are the skeleton, joints and muscles.</p><p>Bones support and protect the body; muscles produce force; joints allow bones to move in relation to one another.</p>', '<p>🏃 L’<b>apparato locomotore</b> permette al corpo di stare in piedi, mantenere la postura e muoversi. Le sue parti principali sono scheletro, articolazioni e muscoli.</p><p>Le ossa sostengono e proteggono il corpo; i muscoli producono forza; le articolazioni permettono alle ossa di muoversi una rispetto all’altra.</p>'],
      ['<p>Muscles are attached to bones by <b>tendons</b>. Many skeletal muscles work in pairs: when one contracts, the other relaxes. At the elbow, the biceps bends the arm while the triceps helps straighten it.</p>', '<p>I muscoli sono collegati alle ossa dai <b>tendini</b>. Molti muscoli scheletrici lavorano in coppia: quando uno si contrae, l’altro si rilassa. Al gomito, il bicipite piega il braccio mentre il tricipite aiuta a distenderlo.</p>'],
      ['<p><b>Joints</b> are places where bones meet. Some, such as the shoulder, allow wide movement; others, such as joints between skull bones, allow little or no movement.</p><p>Warm-up, safe movement and rest help protect muscles and joints.</p>', '<p>Le <b>articolazioni</b> sono i punti in cui le ossa si incontrano. Alcune, come la spalla, permettono ampi movimenti; altre, come quelle tra le ossa del cranio, permettono movimenti minimi o nulli.</p><p>Riscaldamento, movimento sicuro e riposo aiutano a proteggere muscoli e articolazioni.</p>']
    ],
    quiz: [
      question('What are the main parts of the locomotor system?', 'Quali sono le parti principali dell’apparato locomotore?', [['Skeleton, joints and muscles', 'Scheletro, articolazioni e muscoli'], ['Lungs and stomach', 'Polmoni e stomaco'], ['Eyes and ears', 'Occhi e orecchie']], ['The skeleton, joints and muscles work together for movement.', 'Scheletro, articolazioni e muscoli collaborano nel movimento.']),
      question('What connects many muscles to bones?', 'Che cosa collega molti muscoli alle ossa?', [['Tendons', 'Tendini'], ['Nerves only', 'Solo nervi'], ['Teeth', 'Denti']], ['Tendons attach muscles to bones.', 'I tendini collegano i muscoli alle ossa.']),
      question('What happens at a movable joint?', 'Che cosa avviene in un’articolazione mobile?', [['Bones can move relative to one another', 'Le ossa possono muoversi una rispetto all’altra'], ['Bones turn into muscles', 'Le ossa diventano muscoli'], ['The joint makes blood', 'L’articolazione produce sangue']], ['Movable joints allow parts of the skeleton to move.', 'Le articolazioni mobili permettono alle parti dello scheletro di muoversi.'])
    ]
  }),
  makeMission({
    id: 'g5h-skeletal-system', sec: '5', pages: '55–57', hue: 215,
    title: ['The Skeletal System', 'Il sistema scheletrico'],
    topic: ['Bones, support and protection', 'Ossa, sostegno e protezione'],
    demon: ['The Bone Breaker', 'Lo Spezza-Ossa'],
    tech: ['Skeleton Style · Strong Framework', 'Stile Scheletrico · Struttura Forte'],
    lessons: [
      ['<p>🦴 The <b>skeleton</b> is the body’s framework. It gives the body shape, supports it and protects delicate organs. The skull protects the brain; the rib cage helps protect the heart and lungs.</p>', '<p>🦴 Lo <b>scheletro</b> è l’impalcatura del corpo. Gli dà forma, lo sostiene e protegge organi delicati. Il cranio protegge il cervello; la gabbia toracica contribuisce a proteggere cuore e polmoni.</p>'],
      ['<p>Adult humans usually have 206 bones. Bones are living structures: they contain cells, blood vessels and minerals. The skeleton includes the skull, spine, ribs, limbs and their supporting bones.</p>', '<p>Gli adulti hanno normalmente 206 ossa. Le ossa sono strutture viventi: contengono cellule, vasi sanguigni e minerali. Lo scheletro comprende cranio, colonna vertebrale, costole, arti e le ossa che li sostengono.</p>'],
      ['<p>The <b>spine</b> is made of small bones called vertebrae. It supports the body and helps protect the spinal cord. Calcium, vitamin D, balanced food and suitable physical activity help keep bones healthy.</p>', '<p>La <b>colonna vertebrale</b> è formata da piccole ossa chiamate vertebre. Sostiene il corpo e contribuisce a proteggere il midollo spinale. Calcio, vitamina D, alimentazione equilibrata e attività fisica adatta aiutano a mantenere sane le ossa.</p>']
    ],
    quiz: [
      question('Which bones protect the brain?', 'Quali ossa proteggono il cervello?', [['The skull', 'Il cranio'], ['The ribs', 'Le costole'], ['The fingers', 'Le dita']], ['The skull surrounds and protects the brain.', 'Il cranio circonda e protegge il cervello.']),
      question('What is the spine made of?', 'Da che cosa è formata la colonna vertebrale?', [['Vertebrae', 'Vertebre'], ['Teeth', 'Denti'], ['Muscle fibres only', 'Solo fibre muscolari']], ['The spine is a chain of vertebrae.', 'La colonna vertebrale è una successione di vertebre.']),
      question('Which habit helps keep bones healthy?', 'Quale abitudine aiuta a mantenere sane le ossa?', [['Suitable activity and balanced nutrition', 'Attività adatta e alimentazione equilibrata'], ['Never moving', 'Non muoversi mai'], ['Skipping every meal', 'Saltare ogni pasto']], ['Movement and nutrients such as calcium and vitamin D support bone health.', 'Il movimento e nutrienti come calcio e vitamina D sostengono la salute delle ossa.'])
    ]
  }),
  makeMission({
    id: 'g5h-muscular-system', sec: '6', pages: '58–60', hue: 225,
    title: ['The Muscular System', 'Il sistema muscolare'],
    topic: ['Muscles, contraction and healthy movement', 'Muscoli, contrazione e movimento sano'],
    demon: ['The Muscle Muddler', 'Il Confondi-Muscoli'],
    tech: ['Muscle Style · Power in Motion', 'Stile Muscolare · Forza in Movimento'],
    lessons: [
      ['<p>💪 Muscles contract and relax to create movement. <b>Skeletal muscles</b> are usually attached to bones and are mostly under conscious control, such as when you walk or wave.</p>', '<p>💪 I muscoli si contraggono e si rilassano per produrre movimento. I <b>muscoli scheletrici</b> sono generalmente collegati alle ossa e sono per lo più controllati volontariamente, per esempio quando cammini o saluti.</p>'],
      ['<p>There are three main kinds of muscle tissue: skeletal, smooth and cardiac. Smooth muscle works in places such as the intestine; cardiac muscle forms the heart and contracts rhythmically.</p>', '<p>Esistono tre principali tipi di tessuto muscolare: scheletrico, liscio e cardiaco. Il muscolo liscio lavora in organi come l’intestino; il muscolo cardiaco forma il cuore e si contrae ritmicamente.</p>'],
      ['<p>Muscles need oxygen and nutrients delivered by the blood. Regular activity, good posture, rest and safe technique help keep them working well. Pain is a signal to stop and ask an adult for help.</p>', '<p>I muscoli hanno bisogno di ossigeno e sostanze nutritive trasportati dal sangue. Attività regolare, postura corretta, riposo e movimenti sicuri aiutano a mantenerli efficienti. Il dolore è un segnale per fermarsi e chiedere aiuto a un adulto.</p>']
    ],
    quiz: [
      question('What makes a skeletal muscle move?', 'Che cosa permette a un muscolo scheletrico di produrre movimento?', [['Contraction and relaxation', 'Contrazione e rilassamento'], ['Photosynthesis', 'Fotosintesi'], ['Digestion in the stomach', 'Digestione nello stomaco']], ['Muscles create force by contracting and relaxing.', 'I muscoli producono forza contraendosi e rilassandosi.']),
      question('Where is cardiac muscle found?', 'Dove si trova il muscolo cardiaco?', [['In the heart', 'Nel cuore'], ['In the skull', 'Nel cranio'], ['In the skin only', 'Solo nella pelle']], ['Cardiac muscle makes up the heart.', 'Il muscolo cardiaco costituisce il cuore.']),
      question('What helps muscles work well?', 'Che cosa aiuta i muscoli a funzionare bene?', [['Activity, rest and safe movement', 'Attività, riposo e movimenti sicuri'], ['No rest ever', 'Mai riposare'], ['Ignoring pain', 'Ignorare il dolore']], ['Healthy habits support muscles and reduce injury risk.', 'Le abitudini sane sostengono i muscoli e riducono il rischio di infortuni.'])
    ]
  }),
  makeMission({
    id: 'g5h-circulatory-system', sec: '7', pages: '61–63', hue: 350,
    title: ['The Circulatory System', 'L’apparato circolatorio'],
    topic: ['The heart, blood and blood vessels', 'Il cuore, il sangue e i vasi sanguigni'],
    demon: ['The Bloodflow Blocker', 'Il Blocca-Circolazione'],
    tech: ['Circulation Style · Keep It Flowing', 'Stile Circolatorio · Flusso Continuo'],
    lessons: [
      ['<p>❤️ The <b>circulatory system</b> transports materials around the body. The heart is a muscular pump. It pushes blood through a network of blood vessels.</p>', '<p>❤️ L’<b>apparato circolatorio</b> trasporta sostanze in tutto il corpo. Il cuore è una pompa muscolare che spinge il sangue in una rete di vasi sanguigni.</p>'],
      ['<p><b>Arteries</b> carry blood away from the heart; <b>veins</b> bring blood back to it; <b>capillaries</b> are tiny vessels where materials pass between blood and tissues.</p>', '<p>Le <b>arterie</b> portano il sangue lontano dal cuore; le <b>vene</b> lo riportano al cuore; i <b>capillari</b> sono vasi piccolissimi in cui avvengono scambi tra sangue e tessuti.</p>'],
      ['<p>The heart has four chambers. The right side sends blood to the lungs to collect oxygen; the left side sends oxygen-rich blood to the rest of the body. The two circuits work together.</p>', '<p>Il cuore ha quattro cavità. La parte destra invia il sangue ai polmoni per raccogliere ossigeno; la parte sinistra invia il sangue ricco di ossigeno al resto del corpo. I due circuiti lavorano insieme.</p>']
    ],
    quiz: [
      question('What is the heart’s main job?', 'Qual è il compito principale del cuore?', [['To pump blood', 'Pompare il sangue'], ['To digest food', 'Digerire il cibo'], ['To make bones', 'Produrre ossa']], ['The heart pumps blood through blood vessels.', 'Il cuore pompa il sangue nei vasi sanguigni.']),
      question('Which vessels carry blood away from the heart?', 'Quali vasi portano il sangue lontano dal cuore?', [['Arteries', 'Arterie'], ['Veins', 'Vene'], ['Capillaries only', 'Solo capillari']], ['Arteries carry blood away from the heart.', 'Le arterie portano il sangue lontano dal cuore.']),
      question('Where does blood collect oxygen?', 'Dove il sangue raccoglie ossigeno?', [['In the lungs', 'Nei polmoni'], ['In the stomach', 'Nello stomaco'], ['In the bones', 'Nelle ossa']], ['Blood travels to the lungs for gas exchange.', 'Il sangue raggiunge i polmoni per lo scambio dei gas.'])
    ]
  }),
  makeMission({
    id: 'g5h-blood-stem', sec: '8', pages: '64', hue: 5,
    title: ['STEM: What Is Blood Made Of?', 'STEM: Da che cosa è composto il sangue?'],
    topic: ['A closer look at blood components', 'Osserviamo da vicino i componenti del sangue'],
    demon: ['The Blood Blender', 'Il Frullatore di Sangue'],
    tech: ['STEM Style · Blood Investigator', 'Stile STEM · Investigatore del Sangue'],
    lessons: [
      ['<p>🧪 Blood is a tissue made of a liquid part called <b>plasma</b> and several kinds of cells or cell fragments. Plasma carries dissolved substances around the body.</p>', '<p>🧪 Il sangue è un tessuto formato da una parte liquida chiamata <b>plasma</b> e da diversi tipi di cellule o frammenti cellulari. Il plasma trasporta sostanze disciolte in tutto il corpo.</p>'],
      ['<p><b>Red blood cells</b> carry most oxygen using haemoglobin. <b>White blood cells</b> help defend the body against pathogens. <b>Platelets</b> help blood clot when a blood vessel is damaged.</p>', '<p>I <b>globuli rossi</b> trasportano gran parte dell’ossigeno grazie all’emoglobina. I <b>globuli bianchi</b> aiutano a difendere il corpo dai microrganismi patogeni. Le <b>piastrine</b> contribuiscono alla coagulazione quando un vaso sanguigno si danneggia.</p>'],
      ['<p>🔍 <b>STEM investigation:</b> make a labelled drawing or a model using coloured paper circles for the three blood components and a larger area for plasma. This is a model, not a real blood sample. Never collect or handle blood for a classroom activity.</p>', '<p>🔍 <b>Indagine STEM:</b> realizza un disegno etichettato o un modello usando cerchi di carta colorata per i tre componenti cellulari e uno spazio più grande per il plasma. È un modello, non un vero campione di sangue. Non raccogliere né manipolare sangue per un’attività scolastica.</p>']
    ],
    quiz: [
      question('What is the liquid part of blood called?', 'Come si chiama la parte liquida del sangue?', [['Plasma', 'Plasma'], ['Haemoglobin', 'Emoglobina'], ['Bone marrow', 'Midollo osseo']], ['Plasma is the liquid part of blood.', 'Il plasma è la parte liquida del sangue.']),
      question('Which blood cells carry most oxygen?', 'Quali cellule del sangue trasportano gran parte dell’ossigeno?', [['Red blood cells', 'Globuli rossi'], ['White blood cells', 'Globuli bianchi'], ['Platelets', 'Piastrine']], ['Red blood cells contain haemoglobin, which carries oxygen.', 'I globuli rossi contengono emoglobina, che trasporta ossigeno.']),
      question('What do platelets help do?', 'A che cosa contribuiscono le piastrine?', [['Blood clotting', 'Coagulazione del sangue'], ['Digesting food', 'Digestione del cibo'], ['Hearing sounds', 'Percezione dei suoni']], ['Platelets help form clots after vessel damage.', 'Le piastrine contribuiscono a formare coaguli dopo un danno ai vasi.'])
    ]
  }),
  makeMission({
    id: 'g5h-respiratory-system', sec: '9', pages: '65–67', hue: 185,
    title: ['The Respiratory System', 'L’apparato respiratorio'],
    topic: ['Breathing and gas exchange', 'La respirazione e lo scambio dei gas'],
    demon: ['The Airway Thief', 'Il Ladro d’Aria'],
    tech: ['Breathing Style · Oxygen Mission', 'Stile Respiratorio · Missione Ossigeno'],
    lessons: [
      ['<p>🌬️ The <b>respiratory system</b> brings oxygen into the body and removes carbon dioxide. Air travels through the nose or mouth, the trachea and the bronchi to reach the lungs.</p>', '<p>🌬️ L’<b>apparato respiratorio</b> introduce ossigeno nel corpo ed elimina anidride carbonica. L’aria passa attraverso naso o bocca, trachea e bronchi per raggiungere i polmoni.</p>'],
      ['<p>Inside the lungs are millions of tiny air sacs called <b>alveoli</b>. Their thin walls are surrounded by capillaries. Oxygen passes into the blood, while carbon dioxide passes from the blood into the air to be breathed out.</p>', '<p>Nei polmoni si trovano milioni di piccole sacche chiamate <b>alveoli</b>. Le loro pareti sottili sono circondate da capillari. L’ossigeno passa nel sangue, mentre l’anidride carbonica passa dal sangue all’aria che viene espirata.</p>'],
      ['<p>The <b>diaphragm</b> is a muscle that helps breathing. When it contracts, the chest cavity expands and air enters. When it relaxes, the chest cavity becomes smaller and air moves out.</p><p>Clean air and avoiding smoke help protect the lungs.</p>', '<p>Il <b>diaframma</b> è un muscolo che aiuta la respirazione. Quando si contrae, la cavità toracica si allarga e l’aria entra. Quando si rilassa, la cavità toracica si riduce e l’aria esce.</p><p>L’aria pulita e l’assenza di fumo aiutano a proteggere i polmoni.</p>']
    ],
    quiz: [
      question('Which gas does the body take in for cellular respiration?', 'Quale gas introduce il corpo per la respirazione cellulare?', [['Oxygen', 'Ossigeno'], ['Carbon dioxide', 'Anidride carbonica'], ['Helium', 'Elio']], ['The respiratory system brings oxygen into the body.', 'L’apparato respiratorio introduce ossigeno nel corpo.']),
      question('Where does gas exchange happen in the lungs?', 'Dove avviene lo scambio dei gas nei polmoni?', [['Alveoli', 'Alveoli'], ['Teeth', 'Denti'], ['Tendons', 'Tendini']], ['Alveoli are tiny sacs where gases move between air and blood.', 'Gli alveoli sono piccole sacche in cui i gas passano tra aria e sangue.']),
      question('Which muscle helps the lungs expand during breathing?', 'Quale muscolo aiuta i polmoni a espandersi durante la respirazione?', [['Diaphragm', 'Diaframma'], ['Biceps', 'Bicipite'], ['Tongue', 'Lingua']], ['The diaphragm changes the volume of the chest cavity.', 'Il diaframma modifica il volume della cavità toracica.'])
    ]
  }),
  makeMission({
    id: 'g5h-digestive-system', sec: '10', pages: '68–70', hue: 30,
    title: ['The Digestive System', 'L’apparato digerente'],
    topic: ['How food is broken down and nutrients absorbed', 'Come il cibo viene trasformato e le sostanze nutritive assorbite'],
    demon: ['The Digestion Disruptor', 'Il Sabotatore della Digestione'],
    tech: ['Digestion Style · Nutrient Journey', 'Stile Digestivo · Viaggio dei Nutrienti'],
    lessons: [
      ['<p>🥪 Digestion breaks food into smaller substances that the body can absorb and use. It begins in the <b>mouth</b>, where teeth break food into pieces and saliva starts digesting some carbohydrates.</p>', '<p>🥪 La digestione trasforma il cibo in sostanze più semplici che il corpo può assorbire e utilizzare. Inizia nella <b>bocca</b>, dove i denti sminuzzano il cibo e la saliva comincia a digerire alcuni carboidrati.</p>'],
      ['<p>Food travels down the <b>oesophagus</b> to the stomach. The stomach mixes food with gastric juice. In the small intestine, digestion is completed and most nutrients pass into the blood.</p>', '<p>Il cibo scende lungo l’<b>esofago</b> fino allo stomaco. Lo stomaco mescola il cibo con il succo gastrico. Nell’intestino tenue la digestione si completa e la maggior parte delle sostanze nutritive passa nel sangue.</p>'],
      ['<p>The <b>large intestine</b> absorbs much of the remaining water. The material left forms faeces and leaves the body. The liver and pancreas also help digestion by producing substances that act in the digestive tract.</p>', '<p>L’<b>intestino crasso</b> assorbe gran parte dell’acqua rimasta. Il materiale residuo forma le feci ed è eliminato. Anche fegato e pancreas aiutano la digestione producendo sostanze che agiscono nel tubo digerente.</p>']
    ],
    quiz: [
      question('Where does digestion begin?', 'Dove inizia la digestione?', [['In the mouth', 'Nella bocca'], ['In the large intestine', 'Nell’intestino crasso'], ['In the lungs', 'Nei polmoni']], ['Chewing and saliva begin digestion in the mouth.', 'La masticazione e la saliva avviano la digestione nella bocca.']),
      question('Where are most nutrients absorbed?', 'Dove vengono assorbite la maggior parte delle sostanze nutritive?', [['Small intestine', 'Intestino tenue'], ['Oesophagus', 'Esofago'], ['Trachea', 'Trachea']], ['Most nutrient absorption takes place in the small intestine.', 'La maggior parte dell’assorbimento avviene nell’intestino tenue.']),
      question('What does the large intestine absorb?', 'Che cosa assorbe l’intestino crasso?', [['Much of the remaining water', 'Gran parte dell’acqua rimasta'], ['Oxygen from air', 'Ossigeno dall’aria'], ['Sound waves', 'Onde sonore']], ['The large intestine absorbs water from the remaining material.', 'L’intestino crasso assorbe acqua dal materiale residuo.'])
    ]
  }),
  makeMission({
    id: 'g5h-teeth-and-nutrition', sec: '11', pages: '70–73', hue: 45,
    title: ['Teeth and Nutrients', 'I denti e le sostanze nutritive'],
    topic: ['Healthy teeth and a balanced diet', 'Denti sani e alimentazione equilibrata'],
    demon: ['The Sugar Sneak', 'Il Ladro di Zuccheri'],
    tech: ['Health Style · Smile Shield', 'Stile della Salute · Scudo del Sorriso'],
    lessons: [
      ['<p>😁 Teeth cut and grind food so it is easier to swallow and digest. Incisors cut, canines tear and molars grind. The outer layer, called <b>enamel</b>, is very hard and protects each tooth.</p>', '<p>😁 I denti tagliano e triturano il cibo, rendendolo più facile da inghiottire e digerire. Gli incisivi tagliano, i canini lacerano e i molari triturano. Lo strato esterno, chiamato <b>smalto</b>, è molto duro e protegge il dente.</p>'],
      ['<p>Bacteria in dental plaque use sugars from food and produce acids. These acids can damage enamel and cause <b>tooth decay</b>. Brushing with fluoride toothpaste, cleaning between teeth and regular dental check-ups help prevent problems.</p>', '<p>I batteri della placca dentale utilizzano gli zuccheri presenti nel cibo e producono acidi. Questi acidi possono danneggiare lo smalto e causare la <b>carie</b>. Lavare i denti con dentifricio al fluoro, pulire gli spazi interdentali e fare controlli dal dentista aiuta a prevenire i problemi.</p>'],
      ['<p>A balanced diet provides carbohydrates, proteins, fats, vitamins, minerals, fibre and water. Different foods provide different nutrients. No single food contains everything the body needs, so variety matters.</p>', '<p>Un’alimentazione equilibrata fornisce carboidrati, proteine, grassi, vitamine, sali minerali, fibre e acqua. Alimenti diversi apportano sostanze nutritive diverse. Nessun singolo alimento contiene tutto ciò di cui il corpo ha bisogno: la varietà è importante.</p>']
    ],
    quiz: [
      question('Which teeth grind food?', 'Quali denti triturano il cibo?', [['Molars', 'Molari'], ['Incisors', 'Incisivi'], ['Canines', 'Canini']], ['Molars have broad surfaces for grinding.', 'I molari hanno superfici ampie adatte a triturare.']),
      question('What can acids made by plaque bacteria do?', 'Che cosa possono fare gli acidi prodotti dai batteri della placca?', [['Damage enamel', 'Danneggiare lo smalto'], ['Strengthen every tooth', 'Rinforzare ogni dente'], ['Make bones grow', 'Far crescere le ossa']], ['Plaque acids can damage enamel and contribute to decay.', 'Gli acidi della placca possono danneggiare lo smalto e favorire la carie.']),
      question('Why is a varied diet useful?', 'Perché è utile un’alimentazione varia?', [['Different foods provide different nutrients', 'Alimenti diversi forniscono sostanze nutritive diverse'], ['Every food has every nutrient', 'Ogni alimento contiene tutte le sostanze nutritive'], ['The body needs no water', 'Il corpo non ha bisogno di acqua']], ['Variety helps provide the range of nutrients the body needs.', 'La varietà aiuta a fornire l’insieme di sostanze nutritive di cui il corpo ha bisogno.'])
    ]
  }),
  makeMission({
    id: 'g5h-excretory-system', sec: '12', pages: '74–75', hue: 265,
    title: ['Removing Waste', 'I rifiuti da eliminare'],
    topic: ['The urinary system and waste removal', 'L’apparato urinario e l’eliminazione dei rifiuti'],
    demon: ['The Waste Collector', 'Il Raccogli-Rifiuti'],
    tech: ['Filter Style · Clean Body Flow', 'Stile Filtrante · Flusso Pulito'],
    lessons: [
      ['<p>💧 Cells produce waste as they work. The body must remove substances it does not need. The urinary system helps remove some waste from the blood and keeps the balance of water and salts.</p>', '<p>💧 Le cellule producono sostanze di scarto mentre lavorano. Il corpo deve eliminare ciò che non serve. L’apparato urinario contribuisce a rimuovere alcuni rifiuti dal sangue e a mantenere l’equilibrio di acqua e sali.</p>'],
      ['<p>The <b>kidneys</b> filter the blood and produce urine. Urine travels through the ureters to the bladder, where it is stored, and leaves the body through the urethra.</p>', '<p>I <b>reni</b> filtrano il sangue e producono l’urina. L’urina passa attraverso gli ureteri fino alla vescica, dove viene raccolta, e lascia il corpo attraverso l’uretra.</p>'],
      ['<p>The lungs remove carbon dioxide, and the skin releases sweat. These organs also help remove waste or regulate body conditions. Drinking water regularly supports normal body functions.</p>', '<p>I polmoni eliminano l’anidride carbonica e la pelle produce sudore. Anche questi organi contribuiscono all’eliminazione di sostanze di scarto o alla regolazione del corpo. Bere acqua regolarmente sostiene le normali funzioni dell’organismo.</p>']
    ],
    quiz: [
      question('Which organs filter blood to make urine?', 'Quali organi filtrano il sangue per produrre urina?', [['Kidneys', 'Reni'], ['Lungs', 'Polmoni'], ['Stomach', 'Stomaco']], ['The kidneys filter blood and produce urine.', 'I reni filtrano il sangue e producono urina.']),
      question('Where is urine stored before leaving the body?', 'Dove viene raccolta l’urina prima di uscire dal corpo?', [['Bladder', 'Vescica'], ['Heart', 'Cuore'], ['Small intestine', 'Intestino tenue']], ['The bladder stores urine temporarily.', 'La vescica raccoglie temporaneamente l’urina.']),
      question('Which gas is removed by the lungs?', 'Quale gas viene eliminato dai polmoni?', [['Carbon dioxide', 'Anidride carbonica'], ['Oxygen only', 'Solo ossigeno'], ['Nitrogen made by bones', 'Azoto prodotto dalle ossa']], ['Carbon dioxide leaves the body when we breathe out.', 'L’anidride carbonica lascia il corpo quando espiriamo.'])
    ]
  }),
  makeMission({
    id: 'g5h-reproductive-system', sec: '13', pages: '76–77', hue: 320,
    title: ['The Reproductive System', 'L’apparato riproduttivo'],
    topic: ['Human reproduction explained with care and respect', 'La riproduzione umana spiegata con cura e rispetto'],
    demon: ['The Life Cycle Scrambler', 'Il Confusore del Ciclo della Vita'],
    tech: ['Life Science Style · New Generation', 'Stile della Vita · Nuova Generazione'],
    lessons: [
      ['<p>🌱 The <b>reproductive system</b> is the body system involved in producing offspring. Human bodies develop and change during puberty, and the timing of these changes is different for each person.</p>', '<p>🌱 L’<b>apparato riproduttivo</b> è l’apparato coinvolto nella generazione di nuovi individui. Durante la pubertà il corpo cresce e cambia; i tempi di questi cambiamenti sono diversi per ogni persona.</p>'],
      ['<p>In humans, the reproductive cells are sperm cells and egg cells. Fertilisation happens when a sperm cell joins an egg cell. The beginning of a pregnancy involves the development of an embryo in the uterus.</p>', '<p>Nell’essere umano le cellule riproduttive sono gli spermatozoi e le cellule uovo. La fecondazione avviene quando uno spermatozoo si unisce a una cellula uovo. All’inizio della gravidanza l’embrione si sviluppa nell’utero.</p>'],
      ['<p>Learning about the body should be based on accurate information, respect and privacy. Everyone develops at their own pace. Questions about growth or health can be discussed with a trusted adult or health professional.</p>', '<p>Imparare a conoscere il corpo richiede informazioni corrette, rispetto e riservatezza. Ognuno cresce con i propri tempi. Le domande sulla crescita o sulla salute possono essere affrontate con un adulto di fiducia o un professionista sanitario.</p>']
    ],
    quiz: [
      question('What is the role of the reproductive system?', 'Qual è il ruolo dell’apparato riproduttivo?', [['It is involved in producing offspring', 'È coinvolto nella generazione di nuovi individui'], ['It pumps blood', 'Pompa il sangue'], ['It exchanges gases', 'Scambia i gas']], ['The reproductive system is involved in human reproduction.', 'L’apparato riproduttivo è coinvolto nella riproduzione umana.']),
      question('What is fertilisation?', 'Che cos’è la fecondazione?', [['The joining of a sperm cell and an egg cell', 'L’unione di uno spermatozoo e di una cellula uovo'], ['The digestion of food', 'La digestione del cibo'], ['The movement of a joint', 'Il movimento di un’articolazione']], ['Fertilisation occurs when a sperm cell joins an egg cell.', 'La fecondazione avviene quando uno spermatozoo si unisce a una cellula uovo.']),
      question('What is a respectful way to discuss puberty?', 'Qual è un modo rispettoso per parlare della pubertà?', [['Remember that everyone develops at their own pace', 'Ricordare che ognuno cresce con i propri tempi'], ['Make fun of differences', 'Prendere in giro le differenze'], ['Share private information without permission', 'Condividere informazioni private senza permesso']], ['Respect, privacy and reliable information are important.', 'Rispetto, riservatezza e informazioni affidabili sono importanti.'])
    ]
  }),
  makeMission({
    id: 'g5h-immune-system', sec: '14', pages: '84–85', hue: 110,
    title: ['The Immune System', 'Il sistema immunitario'],
    topic: ['Defences against pathogens and healthy habits', 'Le difese contro i patogeni e le abitudini sane'],
    demon: ['The Germ Invader', 'L’Invasore di Germi'],
    tech: ['Defence Style · Body Shield', 'Stile Difensivo · Scudo del Corpo'],
    lessons: [
      ['<p>🛡️ The <b>immune system</b> helps protect the body from pathogens, such as some bacteria and viruses. It includes cells, tissues and organs that recognise and respond to possible threats.</p>', '<p>🛡️ Il <b>sistema immunitario</b> aiuta a proteggere il corpo dai patogeni, come alcuni batteri e virus. Comprende cellule, tessuti e organi che riconoscono e affrontano possibili minacce.</p>'],
      ['<p>The skin and mucous membranes form barriers that help stop pathogens entering. If pathogens get inside, white blood cells and other immune responses help fight them.</p>', '<p>La pelle e le mucose formano barriere che aiutano a impedire l’ingresso dei patogeni. Se i patogeni entrano, i globuli bianchi e altre risposte immunitarie aiutano a contrastarli.</p>'],
      ['<p>Handwashing, safe food and water, sleep, balanced nutrition and recommended vaccinations help protect health. Antibiotics work against bacteria, not viruses, and should only be used when prescribed by a health professional.</p>', '<p>Lavarsi le mani, consumare cibi e acqua sicuri, dormire, seguire un’alimentazione equilibrata e fare le vaccinazioni raccomandate aiutano a proteggere la salute. Gli antibiotici agiscono contro i batteri, non contro i virus, e vanno usati solo se prescritti da un professionista sanitario.</p>']
    ],
    quiz: [
      question('What does the immune system help do?', 'Che cosa aiuta a fare il sistema immunitario?', [['Protect the body from pathogens', 'Proteggere il corpo dai patogeni'], ['Digest all food', 'Digerire tutto il cibo'], ['Move the bones', 'Muovere le ossa']], ['The immune system helps defend the body against pathogens.', 'Il sistema immunitario aiuta a difendere il corpo dai patogeni.']),
      question('Which is a first protective barrier?', 'Quale costituisce una prima barriera di protezione?', [['Skin', 'Pelle'], ['Stomach muscle only', 'Solo il muscolo dello stomaco'], ['A fingernail alone', 'Una sola unghia']], ['Skin and mucous membranes help block pathogens.', 'La pelle e le mucose aiutano a bloccare i patogeni.']),
      question('Antibiotics act against…', 'Gli antibiotici agiscono contro…', [['Bacteria', 'Batteri'], ['All viruses', 'Tutti i virus'], ['Broken bones', 'Ossa rotte']], ['Antibiotics treat bacterial infections, not viral infections.', 'Gli antibiotici curano infezioni batteriche, non quelle virali.'])
    ]
  }),
  makeMission({
    id: 'g5h-nervous-system', sec: '15', pages: '86–88', hue: 275,
    title: ['The Nervous System', 'Il sistema nervoso'],
    topic: ['The brain, spinal cord and nerves', 'Il cervello, il midollo spinale e i nervi'],
    demon: ['The Signal Scrambler', 'Il Confusore di Segnali'],
    tech: ['Neural Style · Message Network', 'Stile Neurale · Rete dei Messaggi'],
    lessons: [
      ['<p>🧠 The <b>nervous system</b> receives information, processes it and coordinates responses. Its central parts are the brain and spinal cord; nerves connect them with the rest of the body.</p>', '<p>🧠 Il <b>sistema nervoso</b> riceve informazioni, le elabora e coordina le risposte. Le sue parti centrali sono encefalo e midollo spinale; i nervi li collegano al resto del corpo.</p>'],
      ['<p>The brain helps us think, remember, feel emotions and control many actions. The spinal cord carries messages between the brain and body and is involved in quick reflexes.</p>', '<p>L’encefalo ci aiuta a pensare, ricordare, provare emozioni e controllare molte azioni. Il midollo spinale trasporta messaggi tra encefalo e corpo ed è coinvolto nei riflessi rapidi.</p>'],
      ['<p><b>Neurons</b> are specialised cells that transmit signals. Sensory neurons carry information towards the central nervous system; other neurons help send commands to muscles and glands.</p>', '<p>I <b>neuroni</b> sono cellule specializzate che trasmettono segnali. I neuroni sensoriali portano informazioni verso il sistema nervoso centrale; altri neuroni aiutano a inviare comandi a muscoli e ghiandole.</p>']
    ],
    quiz: [
      question('What are the central parts of the nervous system?', 'Quali sono le parti centrali del sistema nervoso?', [['Brain and spinal cord', 'Encefalo e midollo spinale'], ['Heart and lungs', 'Cuore e polmoni'], ['Stomach and liver', 'Stomaco e fegato']], ['The brain and spinal cord form the central nervous system.', 'Encefalo e midollo spinale formano il sistema nervoso centrale.']),
      question('What is a neuron?', 'Che cos’è un neurone?', [['A cell that transmits signals', 'Una cellula che trasmette segnali'], ['A blood vessel', 'Un vaso sanguigno'], ['A type of tooth', 'Un tipo di dente']], ['Neurons are specialised cells for communication.', 'I neuroni sono cellule specializzate nella comunicazione.']),
      question('What can the spinal cord help coordinate?', 'Che cosa può contribuire a coordinare il midollo spinale?', [['Quick reflexes', 'Riflessi rapidi'], ['Digestion of every nutrient', 'La digestione di ogni nutriente'], ['Tooth growth only', 'Solo la crescita dei denti']], ['The spinal cord is involved in many reflex actions.', 'Il midollo spinale è coinvolto in molte azioni riflesse.'])
    ]
  }),
  makeMission({
    id: 'g5h-sense-organs', sec: '16', pages: '89–92', hue: 290,
    title: ['The Organs of the Senses', 'Gli organi di senso'],
    topic: ['Sight, hearing, smell, taste and touch', 'Vista, udito, olfatto, gusto e tatto'],
    demon: ['The Sense Stealer', 'Il Ladro dei Sensi'],
    tech: ['Senses Style · World Explorer', 'Stile dei Sensi · Esplora il Mondo'],
    lessons: [
      ['<p>👁️ The sense organs detect information from the environment. The eyes detect light; the ears detect sound and help with balance; the nose detects smells; the tongue detects tastes; and the skin detects touch, pressure, temperature and pain.</p>', '<p>👁️ Gli organi di senso raccolgono informazioni dall’ambiente. Gli occhi percepiscono la luce; le orecchie i suoni e contribuiscono all’equilibrio; il naso percepisce gli odori; la lingua i sapori; la pelle tatto, pressione, temperatura e dolore.</p>'],
      ['<p>Receptors in sense organs convert a stimulus into signals that travel through nerves to the brain. The brain interprets these signals, helping us understand what is happening around us.</p>', '<p>I recettori degli organi di senso trasformano uno stimolo in segnali che viaggiano attraverso i nervi fino all’encefalo. L’encefalo interpreta questi segnali e ci aiuta a capire ciò che accade intorno a noi.</p>'],
      ['<p>Senses often work together. Smell contributes to flavour, while sight and hearing help us move safely. Protect your eyes and ears, and never look directly at the Sun or at intense light sources.</p>', '<p>I sensi spesso collaborano. L’olfatto contribuisce a percepire il sapore, mentre vista e udito ci aiutano a muoverci in sicurezza. Proteggi occhi e orecchie e non guardare mai direttamente il Sole o sorgenti luminose intense.</p>']
    ],
    quiz: [
      question('Which organ detects sound?', 'Quale organo percepisce i suoni?', [['Ears', 'Orecchie'], ['Nose', 'Naso'], ['Skin', 'Pelle']], ['The ears detect sound and also help with balance.', 'Le orecchie percepiscono i suoni e contribuiscono anche all’equilibrio.']),
      question('What carries signals from sense organs to the brain?', 'Che cosa trasporta i segnali dagli organi di senso all’encefalo?', [['Nerves', 'Nervi'], ['Bones', 'Ossa'], ['Teeth', 'Denti']], ['Nerves carry signals to the central nervous system.', 'I nervi trasportano segnali al sistema nervoso centrale.']),
      question('Why should you never look directly at the Sun?', 'Perché non bisogna mai guardare direttamente il Sole?', [['Intense light can damage the eyes', 'La luce intensa può danneggiare gli occhi'], ['It makes hearing weaker', 'Indebolisce l’udito'], ['It stops digestion', 'Blocca la digestione']], ['Direct sunlight can seriously harm the eyes.', 'La luce solare diretta può danneggiare seriamente gli occhi.'])
    ]
  }),
  makeMission({
    id: 'g5h-stem-senses', sec: '17', pages: '93', hue: 35,
    title: ['STEM: A Sensory Investigation', 'STEM: Un’indagine sui sensi'],
    topic: ['Explore taste, smell and touch safely', 'Esplorare gusto, olfatto e tatto in sicurezza'],
    demon: ['The Sensory Trickster', 'L’Imbroglione Sensoriale'],
    tech: ['STEM Style · Sensory Scientist', 'Stile STEM · Scienziato dei Sensi'],
    lessons: [
      ['<p>🧪 Scientists investigate how senses collect information. A fair test changes one factor at a time and records observations carefully.</p><p>For example, compare how a familiar smell is noticed when a person can see the source and when the source is hidden—without using irritating substances.</p>', '<p>🧪 Gli scienziati studiano come i sensi raccolgono informazioni. Un esperimento corretto modifica un fattore alla volta e registra con attenzione le osservazioni.</p><p>Per esempio, si può confrontare come viene riconosciuto un odore familiare quando la fonte è visibile e quando è nascosta, senza usare sostanze irritanti.</p>'],
      ['<p>👃 Smell and taste work closely together. When your nose is blocked, food may seem to have less flavour. Taste buds detect basic taste qualities, while smell adds many details.</p>', '<p>👃 Olfatto e gusto lavorano a stretto contatto. Quando il naso è chiuso, il cibo può sembrare meno saporito. Le papille gustative percepiscono i sapori fondamentali, mentre l’olfatto aggiunge molti dettagli.</p>'],
      ['<p>✋ <b>Safe investigation:</b> use only familiar, food-safe samples with permission and check allergies first. Never taste unknown substances. For touch, compare safe objects with different textures, keeping sharp or hot objects out of the activity.</p>', '<p>✋ <b>Indagine sicura:</b> usa solo campioni alimentari conosciuti e autorizzati, verificando prima eventuali allergie. Non assaggiare mai sostanze sconosciute. Per il tatto, confronta oggetti sicuri con superfici diverse, evitando oggetti taglienti o caldi.</p>']
    ],
    quiz: [
      question('Why do smell and taste work together?', 'Perché olfatto e gusto collaborano?', [['Smell adds details to flavour', 'L’olfatto aggiunge dettagli al sapore'], ['They are the same organ', 'Sono lo stesso organo'], ['Neither detects stimuli', 'Nessuno dei due percepisce stimoli']], ['Smell contributes strongly to the flavour we experience.', 'L’olfatto contribuisce molto al sapore che percepiamo.']),
      question('What should you do before a food-based taste activity?', 'Che cosa bisogna fare prima di un’attività di assaggio?', [['Check permission and possible allergies', 'Verificare il permesso e le possibili allergie'], ['Taste unknown materials', 'Assaggiare materiali sconosciuti'], ['Ignore food safety', 'Ignorare la sicurezza alimentare']], ['Permission, familiar food and allergy checks are essential.', 'Sono essenziali il permesso, alimenti conosciuti e il controllo delle allergie.']),
      question('What makes a fair test?', 'Che cosa rende corretto un esperimento?', [['Change one factor at a time', 'Modificare un fattore alla volta'], ['Change everything at once', 'Modificare tutto contemporaneamente'], ['Do not record results', 'Non registrare i risultati']], ['Changing one factor at a time helps identify what caused a result.', 'Modificare un fattore alla volta aiuta a capire che cosa ha causato un risultato.'])
    ]
  }),
  makeMission({
    id: 'g5h-marvellous-machine', sec: '18', pages: '94–99', hue: 145,
    title: ['The Human Body: A Marvellous Machine', 'Il corpo umano: una macchina meravigliosa'],
    topic: ['Review how body systems work together', 'Ripassare come collaborano gli apparati del corpo'],
    demon: ['The Final Body Boss', 'Il Boss Finale del Corpo'],
    tech: ['Master Biology Style · Whole-Body Harmony', 'Stile Supremo della Biologia · Armonia del Corpo'],
    lessons: [
      ['<p>🌟 Your body is not a collection of separate machines. The respiratory system brings oxygen into the lungs; the circulatory system carries it to cells; the digestive system supplies nutrients.</p>', '<p>🌟 Il corpo non è un insieme di macchine separate. L’apparato respiratorio introduce ossigeno nei polmoni; quello circolatorio lo trasporta alle cellule; quello digerente fornisce sostanze nutritive.</p>'],
      ['<p>The nervous system coordinates many activities, while the skeleton and muscles make movement possible. The immune system helps defend the body, and the urinary system removes some waste.</p>', '<p>Il sistema nervoso coordina molte attività, mentre scheletro e muscoli rendono possibile il movimento. Il sistema immunitario aiuta a difendere il corpo e l’apparato urinario elimina alcuni rifiuti.</p>'],
      ['<p>Health is supported by everyday choices: varied food, water, movement, sleep, hygiene, safe habits and trusted health advice. Bodies are different, and learning about them helps us care for ourselves and respect others.</p>', '<p>La salute è sostenuta dalle scelte quotidiane: alimentazione varia, acqua, movimento, sonno, igiene, comportamenti sicuri e consigli affidabili sulla salute. I corpi sono diversi: conoscerli ci aiuta a prenderci cura di noi e a rispettare gli altri.</p>']
    ],
    quiz: [
      question('Which system carries oxygen from the lungs to body cells?', 'Quale apparato trasporta l’ossigeno dai polmoni alle cellule?', [['Circulatory system', 'Apparato circolatorio'], ['Digestive system', 'Apparato digerente'], ['Skeletal system', 'Sistema scheletrico']], ['Blood carries oxygen from the lungs to body tissues.', 'Il sangue trasporta ossigeno dai polmoni ai tessuti.']),
      question('Which system coordinates many body activities?', 'Quale sistema coordina molte attività del corpo?', [['Nervous system', 'Sistema nervoso'], ['Digestive system', 'Apparato digerente'], ['Urinary system', 'Apparato urinario']], ['The nervous system receives information and coordinates responses.', 'Il sistema nervoso riceve informazioni e coordina le risposte.']),
      question('Which combination supports health?', 'Quale combinazione sostiene la salute?', [['Balanced habits and reliable advice', 'Abitudini equilibrate e consigli affidabili'], ['No sleep and no movement', 'Niente sonno e niente movimento'], ['Only one type of food', 'Un solo tipo di alimento']], ['Many everyday habits work together to support health.', 'Molte abitudini quotidiane collaborano per sostenere la salute.'])
    ]
  })
,

  makeMission({
    id: 'g5h-body-concept-map', sec: '19', pages: '78–81, 96–98', hue: 165,
    title: ['Body Systems: The Big Picture', 'Gli apparati: una mappa d’insieme'],
    topic: ['Connect the body parts and their jobs', 'Collegare le parti del corpo e le loro funzioni'],
    demon: ['The Map Scrambler', 'Il Confondi-Mappe'],
    tech: ['Concept Map Style · Connect the Clues', 'Stile Mappa Concettuale · Collega gli Indizi'],
    lessons: [
      ['<p>🗺️ A <b>concept map</b> shows how ideas connect. Start with the organism, then link cells → tissues → organs → systems and apparatuses.</p>', '<p>🗺️ Una <b>mappa concettuale</b> mostra come sono collegate le idee. Parti dall’organismo e collega cellule → tessuti → organi → sistemi e apparati.</p>'],
      ['<p>Follow oxygen: <b>air → lungs → blood → body cells</b>. Follow food: <b>food → digestive system → nutrients → blood → cells</b>. The circulatory system transports useful materials around the body.</p>', '<p>Segui l’ossigeno: <b>aria → polmoni → sangue → cellule</b>. Segui il cibo: <b>cibo → apparato digerente → sostanze nutritive → sangue → cellule</b>. L’apparato circolatorio trasporta sostanze utili in tutto il corpo.</p>'],
      ['<p>The <b>nervous system</b> receives information and coordinates responses. Bones, joints and muscles work together for movement. The <b>immune system</b> helps protect the body. Draw these links with arrows and add an example to each branch.</p>', '<p>Il <b>sistema nervoso</b> riceve informazioni e coordina le risposte. Ossa, articolazioni e muscoli collaborano nel movimento. Il <b>sistema immunitario</b> aiuta a proteggere il corpo. Disegna questi collegamenti con frecce e aggiungi un esempio a ogni ramo.</p>']
    ],
    quiz: [
      question('Which sequence shows body organisation?', 'Quale sequenza mostra l’organizzazione del corpo?', [['Cells → tissues → organs → systems', 'Cellule → tessuti → organi → apparati'], ['Organs → cells → tissues → systems', 'Organi → cellule → tessuti → apparati'], ['Systems → tissues → cells → organs', 'Apparati → tessuti → cellule → organi']], ['Cells form tissues, tissues form organs, and organs cooperate in systems.', 'Le cellule formano i tessuti, i tessuti gli organi e gli organi collaborano negli apparati.']),
      question('Which route correctly follows oxygen?', 'Quale percorso segue correttamente l’ossigeno?', [['Lungs → blood → cells', 'Polmoni → sangue → cellule'], ['Stomach → bones → lungs', 'Stomaco → ossa → polmoni'], ['Skin → food → heart', 'Pelle → cibo → cuore']], ['The lungs add oxygen to the blood, which carries it to cells.', 'I polmoni trasferiscono ossigeno al sangue, che lo porta alle cellule.']),
      question('Which system coordinates responses?', 'Quale sistema coordina le risposte?', [['Nervous system', 'Sistema nervoso'], ['Digestive system', 'Apparato digerente'], ['Skeletal system', 'Sistema scheletrico']], ['The nervous system receives information and helps coordinate responses.', 'Il sistema nervoso riceve informazioni e aiuta a coordinare le risposte.'])
    ]
  }),
  makeMission({
    id: 'g5h-human-body-checkpoint', sec: '20', pages: '83, 99–100', hue: 25,
    title: ['Human Body Checkpoint', 'Verifica: il corpo umano'],
    topic: ['Show what you know about the human body', 'Dimostrare ciò che sai sul corpo umano'],
    demon: ['The Last Quiz Keeper', 'Il Custode dell’Ultimo Quiz'],
    tech: ['Science Mastery Style · Final Check', 'Stile Padronanza Scientifica · Verifica Finale'],
    lessons: [
      ['<p>🎯 Check what you have learned. Remember: cells build tissues, tissues build organs, and organs cooperate in systems.</p>', '<p>🎯 Verifica ciò che hai imparato. Ricorda: le cellule formano i tessuti, i tessuti gli organi e gli organi collaborano negli apparati.</p>'],
      ['<p>Think about teamwork: breathing brings oxygen into the lungs; blood transports oxygen and nutrients; digestion makes nutrients available; the nervous system coordinates many activities.</p>', '<p>Rifletti sulla collaborazione: la respirazione porta aria ai polmoni; il sangue trasporta ossigeno e sostanze nutritive; la digestione rende disponibili i nutrienti; il sistema nervoso coordina molte attività.</p>'],
      ['<p>After the quiz, explain one connection in your own words. If an answer is difficult, revisit the related mission and try again.</p>', '<p>Dopo il quiz, spiega con parole tue un collegamento. Se una risposta è difficile, torna alla missione corrispondente e riprova.</p>']
    ],
    quiz: [
      question('What is the main job of red blood cells?', 'Qual è la funzione principale dei globuli rossi?', [['Carry oxygen', 'Trasportare ossigeno'], ['Digest food', 'Digerire il cibo'], ['Move bones', 'Muovere le ossa']], ['Red blood cells contain haemoglobin, which helps carry oxygen.', 'I globuli rossi contengono emoglobina, che aiuta a trasportare l’ossigeno.']),
      question('Which organs exchange gases with the air?', 'Quali organi scambiano i gas con l’aria?', [['The lungs', 'I polmoni'], ['The kidneys', 'I reni'], ['The muscles', 'I muscoli']], ['Gas exchange takes place in the lungs, especially in the alveoli.', 'Gli scambi gassosi avvengono nei polmoni, soprattutto negli alveoli.']),
      question('Which combination supports health?', 'Quale combinazione sostiene la salute?', [['Sleep, movement, hygiene and varied food', 'Sonno, movimento, igiene e alimentazione varia'], ['Only one type of food', 'Un solo tipo di alimento'], ['Never resting', 'Non riposare mai']], ['Several healthy habits work together to support health.', 'Diverse abitudini sane collaborano per sostenere la salute.'])
    ]
  })
];
