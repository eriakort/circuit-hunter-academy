import type { Mission, QuizQuestion } from '../types';

type Pair = [string, string];

const question = (en: string, it: string, answers: Pair[], why: Pair): QuizQuestion => ({
  q: [en, it],
  a: answers,
  why
});

interface ReviewMission {
  id: string;
  sec: string;
  pages: string;
  hue: number;
  title: Pair;
  topic: Pair;
  demon: Pair;
  tech: Pair;
  lessons: [Pair, Pair, Pair];
  quiz: QuizQuestion[];
}

const makeMission = (item: ReviewMission): Mission => ({
  id: item.id,
  arc: 0,
  sec: item.sec,
  pages: item.pages,
  hue: item.hue,
  horns: 2,
  eyes: 2,
  title: item.title,
  topic: item.topic,
  demon: item.demon,
  tech: item.tech,
  scenes: [
    { who: 's', text: item.lessons[0] },
    { who: 's', text: item.lessons[1] },
    { who: 's', text: item.lessons[2] },
    { who: 'd', text: [
      `<p>🧪 I am ${item.demon[0]}! I have mixed up the science you learned this year. Use your knowledge to set it right!</p>`,
      `<p>🧪 Sono ${item.demon[1]}! Ho confuso le scienze che hai studiato quest’anno. Usa ciò che sai per rimettere tutto a posto!</p>`
    ] },
    { type: 'battle' }
  ],
  quiz: item.quiz
});

export const GRADE5_SCIENCE_REVIEW_MISSIONS: Mission[] = [
  makeMission({
    id: 'g5x-science-self-assessment',
    sec: '1',
    pages: '100',
    hue: 145,
    title: ['Science Self-Assessment', 'Autovalutazione di scienze'],
    topic: ['Check what you know across all four learning units', 'Verifica ciò che sai sulle quattro unità di apprendimento'],
    demon: ['The Doubt Collector', 'Il Collezionista di Dubbi'],
    tech: ['Mastery Form · First Technique: Knowledge Compass', 'Stile della Padronanza · Prima Tecnica: Bussola delle Conoscenze'],
    lessons: [
      [
        '<p>🧭 You have explored living things, the Universe, energy and forces, and the human body. A self-assessment helps you notice what you understand well and what you want to practise again.</p><p>Try each question on your own first. Read the explanation after answering: learning from a mistake is part of becoming a scientist.</p>',
        '<p>🧭 Hai esplorato gli esseri viventi, l’Universo, l’energia e le forze e il corpo umano. L’autovalutazione ti aiuta a capire che cosa conosci bene e che cosa vuoi ripassare.</p><p>Prova prima a rispondere da sola. Dopo aver risposto, leggi la spiegazione: imparare da un errore fa parte del lavoro di una scienziata.</p>'
      ],
      [
        '<p>🌱 <b>Living things:</b> plants use light to make food; animals can be grouped into vertebrates and invertebrates. <b>Space:</b> Earth is a planet that orbits the Sun, and the Moon is Earth’s natural satellite.</p><p>⚡ <b>Energy and forces:</b> energy can change form; forces can change an object’s motion or shape. <b>Human body:</b> cells form tissues, tissues form organs, and organs work together.</p>',
        '<p>🌱 <b>Esseri viventi:</b> le piante usano la luce per produrre nutrimento; gli animali si possono dividere in vertebrati e invertebrati. <b>Spazio:</b> la Terra è un pianeta che orbita intorno al Sole e la Luna è il satellite naturale della Terra.</p><p>⚡ <b>Energia e forze:</b> l’energia può trasformarsi; le forze possono cambiare il movimento o la forma di un oggetto. <b>Corpo umano:</b> le cellule formano tessuti, i tessuti formano organi e gli organi collaborano.</p>'
      ],
      [
        '<p>⭐ After the quiz, think about your learning. Which topic felt easiest? Which one needs another look? Can you explain one idea in your own words, without copying the lesson?</p><p>Use three simple marks in your notebook: <b>green</b> = I can explain it; <b>yellow</b> = I partly understand; <b>blue</b> = I need help or more practice. These marks are a guide, not a grade.</p>',
        '<p>⭐ Dopo il quiz, rifletti sul tuo apprendimento. Quale argomento ti è sembrato più facile? Quale vuoi ripassare? Sai spiegare un’idea con parole tue, senza copiare la lezione?</p><p>Usa tre simboli sul quaderno: <b>verde</b> = so spiegarlo; <b>giallo</b> = ho capito in parte; <b>blu</b> = ho bisogno di aiuto o di esercitarmi ancora. Sono indicazioni, non un voto.</p>'
      ]
    ],
    quiz: [
      question('Which plant part mainly absorbs water from the soil?', 'Quale parte della pianta assorbe soprattutto l’acqua dal terreno?', [['Roots', 'Le radici'], ['Flowers', 'I fiori'], ['Fruits', 'I frutti']], ['Roots absorb water and help anchor the plant.', 'Le radici assorbono acqua e aiutano ad ancorare la pianta.']),
      question('Which animal is an invertebrate?', 'Quale animale è un invertebrato?', [['Butterfly', 'Farfalla'], ['Frog', 'Rana'], ['Eagle', 'Aquila']], ['A butterfly has no backbone, so it is an invertebrate.', 'La farfalla non ha la colonna vertebrale, quindi è un invertebrato.']),
      question('What keeps Earth in orbit around the Sun?', 'Che cosa mantiene la Terra nella sua orbita intorno al Sole?', [['Gravity', 'La gravità'], ['Sound', 'Il suono'], ['Magnetism from the Moon', 'Il magnetismo della Luna']], ['Gravity is the attractive force between objects with mass.', 'La gravità è la forza di attrazione tra corpi dotati di massa.']),
      question('Which example shows energy changing form?', 'Quale esempio mostra una trasformazione di energia?', [['A battery powers a torch that gives light', 'Una batteria alimenta una torcia che produce luce'], ['A stone lying still', 'Una pietra ferma'], ['A ruler on a desk', 'Un righello su un banco']], ['The battery’s chemical energy is transformed into electrical energy and then light and heat.', 'L’energia chimica della batteria si trasforma in energia elettrica e poi in luce e calore.']),
      question('What is the correct order from smallest to largest in the body?', 'Qual è l’ordine corretto, dal più piccolo al più grande, nel corpo?', [['Cell, tissue, organ, system', 'Cellula, tessuto, organo, apparato'], ['Organ, cell, system, tissue', 'Organo, cellula, apparato, tessuto'], ['Tissue, organ, cell, system', 'Tessuto, organo, cellula, apparato']], ['Cells form tissues, tissues form organs, and organs cooperate in systems or apparatuses.', 'Le cellule formano tessuti, i tessuti formano organi e gli organi collaborano in sistemi o apparati.'])
    ]
  }),
  makeMission({
    id: 'g5x-science-workbook-challenge',
    sec: '2',
    pages: '101–120',
    hue: 185,
    title: ['Science Workbook Challenge', 'Sfida del quaderno di scienze'],
    topic: ['Practise explaining, comparing, classifying and applying science', 'Esercitati a spiegare, confrontare, classificare e applicare le scienze'],
    demon: ['The Shortcut Shadow', 'L’Ombra delle Risposte Facili'],
    tech: ['Discovery Form · Second Technique: Think Like a Scientist', 'Stile della Scoperta · Seconda Tecnica: Pensa come una Scienziata'],
    lessons: [
      [
        '<p>📘 A workbook is not only a place to write answers. It is a place to show how you think. Read each instruction carefully and underline the important words: <b>name</b>, <b>describe</b>, <b>compare</b>, <b>explain</b> or <b>draw</b>.</p><p>Answer in your own words. A short, clear explanation is better than a long answer that does not explain the idea.</p>',
        '<p>📘 Il quaderno degli esercizi non è solo un posto in cui scrivere le risposte: serve a mostrare come ragioni. Leggi con attenzione ogni consegna e individua le parole importanti: <b>indica</b>, <b>descrivi</b>, <b>confronta</b>, <b>spiega</b> o <b>disegna</b>.</p><p>Rispondi con parole tue. Una spiegazione breve e chiara è meglio di una risposta lunga che non chiarisce l’idea.</p>'
      ],
      [
        '<p>🔎 Scientists use evidence. When you classify, choose a feature and explain your choice: for example, a spider is an invertebrate and has eight legs. When you compare, say what is similar and what is different: for example, renewable and non-renewable energy sources.</p><p>When you interpret a diagram, follow arrows and labels in order. When you explain a process, describe what happens first, next and last.</p>',
        '<p>🔎 Le scienziate usano le prove. Quando classifichi, scegli una caratteristica e spiega la tua scelta: per esempio, il ragno è un invertebrato e ha otto zampe. Quando confronti, indica somiglianze e differenze: per esempio, tra fonti rinnovabili e non rinnovabili.</p><p>Quando leggi un diagramma, segui frecce ed etichette nell’ordine corretto. Quando spieghi un processo, descrivi che cosa succede prima, dopo e alla fine.</p>'
      ],
      [
        '<p>🧪 For a practical task, write down the question, what you will change, what you will observe and what you notice. Make a simple table or labelled drawing if it helps.</p><p>Work safely: follow the teacher’s or adult’s instructions, never taste unknown materials, never look directly at the Sun or a bright lamp, and do not use heat, electricity or sharp tools without adult supervision.</p>',
        '<p>🧪 Per un’attività pratica, scrivi la domanda, che cosa cambierai, che cosa osserverai e che cosa hai notato. Se ti aiuta, prepara una tabella semplice o un disegno con le etichette.</p><p>Lavora in sicurezza: segui le indicazioni dell’insegnante o di un adulto, non assaggiare materiali sconosciuti, non guardare mai direttamente il Sole o una lampada intensa e non usare calore, elettricità o strumenti appuntiti senza la supervisione di un adulto.</p>'
      ]
    ],
    quiz: [
      question('An exercise asks you to compare two energy sources. What should you include?', 'Un esercizio ti chiede di confrontare due fonti di energia. Che cosa devi includere?', [['Similarities and differences', 'Somiglianze e differenze'], ['Only their names', 'Solo i loro nomi'], ['An unrelated drawing', 'Un disegno non collegato']], ['Comparing means explaining what is alike and what is different.', 'Confrontare significa spiegare che cosa è simile e che cosa è diverso.']),
      question('What is useful when explaining a process?', 'Che cosa è utile quando spieghi un processo?', [['Describe the steps in order', 'Descrivere i passaggi in ordine'], ['Mix up the steps', 'Mescolare i passaggi'], ['Leave out the result', 'Omettere il risultato']], ['A clear explanation follows the correct sequence.', 'Una spiegazione chiara segue la sequenza corretta.']),
      question('What should you do before a practical investigation?', 'Che cosa dovresti fare prima di un’attività pratica?', [['Read the instructions and check safety', 'Leggere le istruzioni e controllare la sicurezza'], ['Taste every material', 'Assaggiare ogni materiale'], ['Work with tools without permission', 'Usare strumenti senza permesso']], ['Plan the task and follow adult or teacher safety instructions.', 'Pianifica l’attività e segui le indicazioni di sicurezza dell’adulto o dell’insegnante.']),
      question('You are asked to classify a butterfly. Which evidence supports your answer?', 'Devi classificare una farfalla. Quale caratteristica sostiene la tua risposta?', [['It has no backbone', 'Non ha la colonna vertebrale'], ['It has feathers', 'Ha le piume'], ['It is a planet', 'È un pianeta']], ['A butterfly is an invertebrate because it has no backbone.', 'La farfalla è un invertebrato perché non possiede la colonna vertebrale.']),
      question('What makes a science answer strong?', 'Che cosa rende valida una risposta scientifica?', [['A clear idea supported by evidence or an example', 'Un’idea chiara sostenuta da una prova o da un esempio'], ['Guessing without explaining', 'Indovinare senza spiegare'], ['Copying words without understanding', 'Copiare parole senza capirle']], ['A good answer explains the idea and supports it with relevant evidence or an example.', 'Una buona risposta spiega l’idea e la sostiene con prove o esempi pertinenti.'])
    ]
  })
];
