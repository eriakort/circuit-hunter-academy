import type { ArcInfo, Mission, SubjectInfo, UnitInfo } from '../types';

export const GRADE5_SCIENCE_SUBJECT: SubjectInfo = {
  id: 'science',
  name: ['Science & Technology', 'Scienze e Tecnologia'],
  blurb: [
    'Explore living things, space, energy, forces and the human body through simple explanations and experiments.',
    'Esplora gli esseri viventi, lo spazio, l’energia, le forze e il corpo umano con spiegazioni semplici ed esperimenti.'
  ],
  meta: ['4 learning areas · Foundations + Universe + Energy & Forces', '4 aree di apprendimento · Fondamenti + Universo + Energia e forze'],
  art: '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="38" fill="none" stroke="#7bd88f" stroke-width="3"/><path d="M60 22 C42 42 42 78 60 98 M60 22 C78 42 78 78 60 98 M24 60 H96" fill="none" stroke="#7bd88f" stroke-width="2"/><circle cx="60" cy="60" r="8" fill="#ffd166"/><path d="M60 12 L64 22 L56 22 Z M108 60 L98 64 L98 56 Z" fill="#7bd88f"/></svg>'
};

export const GRADE5_SCIENCE_UNITS: UnitInfo[] = [
  { title: ['Getting Ready: Living Things', 'Per cominciare: gli esseri viventi'], ch: '1–2', subject: 'science' }
];

export const GRADE5_SCIENCE_ARCS: ArcInfo[] = [
  { n: 1, unit: 0, subject: 'science', title: ['Science Foundations', 'Le basi delle scienze'], pages: '4–5' }
];

export const GRADE5_SCIENCE_MISSIONS: Mission[] = [
  {
    id: 'g5s-plants',
    arc: 0,
    sec: '1',
    pages: '4',
    hue: 125,
    horns: 2,
    eyes: 2,
    title: ['The Secret Life of Plants', 'La vita segreta delle piante'],
    topic: ['Simple and complex plants; roots, stems, leaves and reproduction', 'Piante semplici e complesse; radici, fusto, foglie e riproduzione'],
    demon: ['The Tangled Vine', 'Il Groviglio Vegetale'],
    tech: ['Nature Form · First Technique: Green Growth', 'Stile della Natura · Prima Tecnica: Crescita Verde'],
    scenes: [
      {
        who: 's',
        text: [
          '<p>Welcome, young scientist! Plants are living things. Most plants need <b>water, air, light and a suitable temperature</b> to grow. They do not eat food like animals: green parts use light to make their own food. This process is called <b>photosynthesis</b>.</p>',
          '<p>Benvenuta, giovane scienziata! Le piante sono esseri viventi. La maggior parte delle piante ha bisogno di <b>acqua, aria, luce e una temperatura adatta</b> per crescere. Non mangiano come gli animali: le parti verdi usano la luce per produrre il proprio nutrimento. Questo processo si chiama <b>fotosintesi clorofilliana</b>.</p>'
        ]
      },
      {
        who: 's',
        text: [
          '<p>Many familiar plants have three main parts:</p><ul><li><b>Roots</b> take in water and help hold the plant in the soil.</li><li><b>The stem</b> supports the plant and carries water and nutrients.</li><li><b>Leaves</b> capture light and make food.</li></ul><p>Flowers, fruits and seeds help many plants reproduce. Mosses and ferns reproduce in different ways and do not make flowers or seeds.</p>',
          '<p>Molte piante conosciute hanno tre parti principali:</p><ul><li>Le <b>radici</b> assorbono acqua e aiutano a tenere la pianta nel terreno.</li><li>Il <b>fusto</b> sostiene la pianta e trasporta acqua e sostanze nutritive.</li><li>Le <b>foglie</b> catturano la luce e producono nutrimento.</li></ul><p>Fiori, frutti e semi aiutano molte piante a riprodursi. Muschi e felci si riproducono in modo diverso e non producono fiori o semi.</p>'
        ]
      },
      {
        who: 's',
        text: [
          '<p>We can compare plants by how they are built. <b>Simple plants</b>, such as many algae and mosses, do not have all the specialised organs found in more complex plants. <b>Complex plants</b> have organised structures such as roots, stems and leaves; flowering plants also make flowers and seeds.</p><p>Remember: “simple” does not mean useless or unimportant. Every plant has a role in its environment.</p>',
          '<p>Possiamo confrontare le piante osservando come sono fatte. Le <b>piante semplici</b>, come molte alghe e i muschi, non possiedono tutti gli organi specializzati delle piante più complesse. Le <b>piante complesse</b> hanno strutture organizzate come radici, fusto e foglie; le piante con fiore producono anche fiori e semi.</p><p>Ricorda: “semplice” non significa inutile o poco importante. Ogni pianta ha un ruolo nell’ambiente.</p>'
        ]
      },
      { who: 'd', text: ['<p>I am the Tangled Vine! Can you tell roots from leaves and explain how plants make food?</p>', '<p>Sono il Groviglio Vegetale! Sai distinguere le radici dalle foglie e spiegare come si nutrono le piante?</p>'] },
      { type: 'battle' }
    ],
    quiz: [
      { q: ['Which plant part mainly absorbs water from the soil?', 'Quale parte della pianta assorbe soprattutto l’acqua dal terreno?'], a: [['Roots', 'Le radici'], ['Flowers', 'I fiori'], ['Fruits', 'I frutti'], ['Leaves', 'Le foglie']], why: ['Roots absorb water and help anchor the plant.', 'Le radici assorbono acqua e ancorano la pianta al terreno.'] },
      { q: ['What do green leaves use to make food?', 'Che cosa usano le foglie verdi per produrre nutrimento?'], a: [['Light', 'La luce'], ['Sand', 'La sabbia'], ['Sound', 'Il suono'], ['Plastic', 'La plastica']], why: ['Light provides the energy for photosynthesis.', 'La luce fornisce l’energia per la fotosintesi.'] },
      { q: ['Which statement about mosses is correct?', 'Quale affermazione sui muschi è corretta?'], a: [['They do not produce flowers or seeds', 'Non producono fiori né semi'], ['They are animals', 'Sono animali'], ['They have no need for water', 'Non hanno bisogno di acqua'], ['They are made of metal', 'Sono fatti di metallo']], why: ['Mosses are simple plants and reproduce using spores.', 'I muschi sono piante semplici e si riproducono tramite spore.'] },
      { q: ['What is one job of the stem?', 'Qual è una funzione del fusto?'], a: [['It supports the plant and carries substances', 'Sostiene la pianta e trasporta sostanze'], ['It absorbs all sunlight for the roots', 'Assorbe tutta la luce per le radici'], ['It turns into soil', 'Si trasforma in terreno'], ['It hears sounds', 'Percepisce i suoni']], why: ['The stem supports the plant and helps transport water and nutrients.', 'Il fusto sostiene la pianta e aiuta a trasportare acqua e sostanze nutritive.'] }
    ]
  },
  {
    id: 'g5s-animals',
    arc: 0,
    sec: '2',
    pages: '5',
    hue: 35,
    horns: 3,
    eyes: 2,
    title: ['Animals: With or Without a Backbone?', 'Animali: con o senza colonna vertebrale?'],
    topic: ['Vertebrates and invertebrates; animal groups and body structures', 'Vertebrati e invertebrati; gruppi di animali e strutture del corpo'],
    demon: ['The Classification Crawler', 'Il Classificatore Confuso'],
    tech: ['Nature Form · Second Technique: Living Categories', 'Stile della Natura · Seconda Tecnica: Categorie Viventi'],
    scenes: [
      {
        who: 's',
        text: [
          '<p>Animals are living things that cannot make their own food like green plants. Scientists group animals by features they share. One important question is: <b>does the animal have a backbone?</b></p><p>Animals with a backbone are called <b>vertebrates</b>. Animals without a backbone are called <b>invertebrates</b>.</p>',
          '<p>Gli animali sono esseri viventi che non producono da soli il proprio nutrimento come fanno le piante verdi. Gli scienziati li raggruppano in base alle caratteristiche che hanno in comune. Una domanda importante è: <b>l’animale possiede una colonna vertebrale?</b></p><p>Gli animali con la colonna vertebrale si chiamano <b>vertebrati</b>. Quelli senza colonna vertebrale si chiamano <b>invertebrati</b>.</p>'
        ]
      },
      {
        who: 's',
        text: [
          '<p>The main vertebrate groups are <b>mammals, birds, fish, reptiles and amphibians</b>. They have different features: mammals feed their young with milk; birds have feathers; fish usually breathe through gills; reptiles have dry scales; amphibians often live part of their lives in water and part on land.</p>',
          '<p>I principali gruppi di vertebrati sono <b>mammiferi, uccelli, pesci, rettili e anfibi</b>. Hanno caratteristiche diverse: i mammiferi allattano i piccoli; gli uccelli hanno piume; i pesci respirano generalmente con le branchie; i rettili hanno squame asciutte; gli anfibi spesso vivono una parte della vita in acqua e una sulla terraferma.</p>'
        ]
      },
      {
        who: 's',
        text: [
          '<p>Invertebrates are a very large group. They include <b>insects, spiders, crustaceans, molluscs and worms</b>. Many have an external skeleton or a shell for protection, while others have soft bodies. An insect has six legs; a spider has eight.</p><p>Classification helps us compare living things, understand biodiversity and protect habitats.</p>',
          '<p>Gli invertebrati formano un gruppo molto numeroso. Comprendono <b>insetti, ragni, crostacei, molluschi e vermi</b>. Molti hanno uno scheletro esterno o una conchiglia che li protegge, mentre altri hanno il corpo molle. Un insetto ha sei zampe; un ragno ne ha otto.</p><p>La classificazione ci aiuta a confrontare gli esseri viventi, comprendere la biodiversità e proteggere gli habitat.</p>'
        ]
      },
      { who: 'd', text: ['<p>I am the Classification Crawler! I mix up spiders, insects, fish and birds. Can you sort them out?</p>', '<p>Sono il Classificatore Confuso! Scambio ragni, insetti, pesci e uccelli. Sai riconoscerli?</p>'] },
      { type: 'battle' }
    ],
    quiz: [
      { q: ['What makes an animal a vertebrate?', 'Che cosa rende un animale un vertebrato?'], a: [['It has a backbone', 'Ha una colonna vertebrale'], ['It has six legs', 'Ha sei zampe'], ['It can fly', 'Può volare'], ['It lives only in water', 'Vive solo in acqua']], why: ['Vertebrates have a backbone.', 'I vertebrati possiedono una colonna vertebrale.'] },
      { q: ['Which group has feathers?', 'Quale gruppo possiede le piume?'], a: [['Birds', 'Gli uccelli'], ['Mammals', 'I mammiferi'], ['Fish', 'I pesci'], ['Worms', 'I vermi']], why: ['Feathers are a defining feature of birds.', 'Le piume sono una caratteristica degli uccelli.'] },
      { q: ['How many legs does an insect have?', 'Quante zampe ha un insetto?'], a: [['Six', 'Sei'], ['Four', 'Quattro'], ['Eight', 'Otto'], ['Ten', 'Dieci']], why: ['Adult insects have six legs.', 'Gli insetti adulti hanno sei zampe.'] },
      { q: ['Which animal is an invertebrate?', 'Quale animale è un invertebrato?'], a: [['A spider', 'Un ragno'], ['A frog', 'Una rana'], ['A salmon', 'Un salmone'], ['A sparrow', 'Un passero']], why: ['A spider has no backbone; it is an invertebrate.', 'Il ragno non ha la colonna vertebrale: è un invertebrato.'] }
    ]
  }
];
