import { Mission } from '../types';

export const ITALIAN_MISSIONS: Mission[] = [
  // =========================================================================
  // CEFR A1 - PRINCIPPIANTE (BEGINNER)
  // Arc 0: Saluti, Fonetica e Vita Quotidiana
  // =========================================================================
  {
    id: 'it_a1m1',
    arc: 0,
    sec: 'A1.1',
    pages: '1–12',
    hue: 140,
    horns: 1,
    eyes: 2,
    title: [
      'Ciao! Come ti chiami?',
      'Ciao! Come ti chiami?'
    ],
    topic: [
      'Greetings, formal vs informal address, introducing yourself and basic dialogue',
      'Saluti, registro formale e informale, presentarsi e dialogo di base'
    ],
    demon: [
      'Mute Glitch',
      'Glitch del Silenzio'
    ],
    lore: [
      'The Mute Glitch steals hunters’ voices. Break the silence with your first spoken Italian greeting!',
      'Il Glitch del Silenzio ruba la voce dei cacciatori. Rompi il silenzio con il tuo primo saluto in italiano!'
    ],
    clearedMsg: [
      'Your greeting echoed through the academy! You have mastered basic Italian introductions.',
      'Il tuo saluto ha risuonato nell’accademia! Hai padroneggiato le presentazioni di base in italiano.'
    ],
    tech: [
      'Italian Greeting Technique',
      'Stile del Saluto Italiano'
    ],
    scenes: [
      {
        who: 's',
        text: [
          '<p>Benvenuto all’Accademia! Italian is a musical, phonetic language where every vowel counts. Today you begin your journey through <b>CEFR A1</b>.</p><p>In Italy, greetings depend on who you are speaking to: <b>Ciao</b> is informal (friends, peers, family). <b>Buongiorno</b> and <b>Buonasera</b> are polite and formal.</p>',
          '<p>Benvenuto all’Accademia! L’italiano è una lingua musicale e fonetica, dove ogni vocale conta. Oggi inizi il tuo viaggio nel <b>QCER A1</b>.</p><p>In Italia, i saluti dipendono dal tuo interlocutore: <b>Ciao</b> è informale (amici, coetanei, familiari). <b>Buongiorno</b> e <b>Buonasera</b> sono formali e di cortesia.</p>'
        ]
      },
      {
        who: 's',
        text: [
          '<p>To ask someone’s name:</p><ul><li><b>Informal:</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Formal:</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>Listen closely and speak with confidence!</p>',
          '<p>Per chiedere il nome a qualcuno:</p><ul><li><b>Informale:</b> <i>Come ti chiami?</i> → <i>Mi chiamo Marco.</i></li><li><b>Formale:</b> <i>Come si chiama?</i> → <i>Mi chiamo Dottor Rossi. Piacere di conoscerLa!</i></li></ul><p>Ascolta con attenzione e parla con sicurezza!</p>'
        ]
      },
      {
        who: 'd',
        text: [
          '<p>Silence! Foreign accents stumble on the rolling R and double consonants! You will never order coffee in Rome!</p>',
          '<p>Silenzio! Gli accenti stranieri inciampano sulla R arrotolata e sulle doppie! Non ordinerai mai un caffè a Roma!</p>'
        ]
      },
      {
        who: 'y',
        text: [
          '<p>Watch me! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>',
          '<p>Guardami! <i>Buongiorno, mi chiamo Hunter e sono pronto a imparare l’italiano!</i></p>'
        ]
      }
    ],
    quiz: [
      {
        q: [
          'Which greeting is appropriate when entering a doctor’s clinic or formal office in the morning?',
          'Quale saluto è appropriato entrando nello studio di un medico o in un ufficio formale di mattina?'
        ],
        a: [
          ['Buongiorno', 'Buongiorno'],
          ['Ciao caro', 'Ciao caro'],
          ['Buonanotte', 'Buonanotte'],
          ['A presto bello', 'A presto bello']
        ],
        why: [
          'Buongiorno is the universal polite and formal greeting for morning and afternoon.',
          'Buongiorno è il saluto formale e di cortesia universale per la mattina e il pomeriggio.'
        ]
      },
      {
        q: [
          'How do you politely reply when someone introduces themselves with "Piacere!"?',
          'Come rispondi educatamente quando qualcuno si presenta dicendo "Piacere!"?'
        ],
        a: [
          ['Piacere mio!', 'Piacere mio!'],
          ['Grazie mille!', 'Grazie mille!'],
          ['Prego signore!', 'Prego signore!'],
          ['Non c’è di che!', 'Non c’è di che!']
        ],
        why: [
          '"Piacere mio!" (The pleasure is mine!) is the natural standard Italian response.',
          '"Piacere mio!" è la risposta naturale e standard per ricambiare una presentazione.'
        ]
      },
      {
        q: [
          'Which sentence correctly asks a peer or friend for their name?',
          'Quale frase chiede correttamente il nome a un amico o coetaneo?'
        ],
        a: [
          ['Come ti chiami?', 'Come ti chiami?'],
          ['Come si chiama?', 'Come si chiama?'],
          ['Chi sei Lei?', 'Chi sei Lei?'],
          ['Quale è il nome di te?', 'Quale è il nome di te?']
        ],
        why: [
          '"Come ti chiami?" uses the informal second-person pronoun "ti" with the reflexive verb chiamarsi.',
          '"Come ti chiami?" usa il pronome informale di seconda persona "ti" col verbo chiamarsi.'
        ]
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-a1m1-1',
          description: [
            'Distinguish between formal (Lei) and informal (tu) greetings in Italian social contexts.',
            'Distinguere tra saluti formali (Lei) e informali (tu) nei contesti sociali italiani.'
          ]
        },
        {
          id: 'obj-it-a1m1-2',
          description: [
            'Pronounce and introduce yourself using "Mi chiamo..." and "Piacere di conoscerti".',
            'Pronunciare e presentarsi usando "Mi chiamo..." e "Piacere di conoscerti".'
          ]
        }
      ],
      prerequisites: [
        ['Basic curiosity about Italian pronunciation and phonetic reading', 'Curiosità verso la pronuncia e la lettura fonetica italiana']
      ],
      concepts: [
        {
          id: 'concept-it-greetings',
          title: ['Italian Formal vs Informal Register', 'Registro Formale vs Informale'],
          explanation: [
            'In Italian, choosing "tu" (informal) vs "Lei" (formal) is central to polite communication. With elders, professionals, or shopkeepers you do not know, use formal greetings (Buongiorno, Arrivederci, Come si chiama?). With classmates, friends, and peers, use "Ciao" and "Come ti chiami?".',
            'In italiano, la scelta tra "tu" (informale) e "Lei" (formale) è fondamentale per la cortesia. Con persone anziane, professionisti o negozianti sconosciuti, usa forme di cortesia (Buongiorno, Arrivederci, Come si chiama?). Con compagni, amici e coetanei, usa "Ciao" e "Come ti chiami?".'
          ],
          workedExample: {
            scenario: [
              'Meeting your Italian university professor for the first time.',
              'Incontrare per la prima volta il tuo docente universitario italiano.'
            ],
            steps: [
              ['Step 1: Choose formal time-appropriate greeting: "Buongiorno, professore."', 'Passo 1: Scegli il saluto formale appropriato all’orario: "Buongiorno, professore."'],
              ['Step 2: Introduce yourself politely: "Mi chiamo Luca Bianchi."', 'Passo 2: Presentati con cortesia: "Mi chiamo Luca Bianchi."'],
              ['Step 3: Express polite acknowledgement: "Piacere di conoscerLa."', 'Passo 3: Esprimi cortesia: "Piacere di conoscerLa."']
            ],
            answer: [
              '"Buongiorno professore, mi chiamo Luca Bianchi. Piacere di conoscerLa!"',
              '"Buongiorno professore, mi chiamo Luca Bianchi. Piacere di conoscerLa!"'
            ]
          },
          misconceptions: [
            {
              belief: ['"Ciao" can be used casually in every situation in Italy, including job interviews.', '"Ciao" può essere usato in ogni situazione in Italia, inclusi colloqui di lavoro.'],
              correction: ['"Ciao" is strictly informal. Using it with a stranger, an elder, or an interviewer sounds impolite.', '"Ciao" è strettamente informale. Usarlo con un estraneo o a un colloquio risulta scortese. Usa "Buongiorno" o "Salve".']
            }
          ]
        }
      ],
      summary: [
        ['Use "Ciao" for friends and family; use "Buongiorno" or "Buonasera" for formal settings.', 'Usa "Ciao" per amici e famiglia; usa "Buongiorno" o "Buonasera" per contesti formali.'],
        ['Introduce yourself with "Mi chiamo [Nome]" and reply with "Piacere!" or "Piacere mio!".', 'Presentati con "Mi chiamo [Nome]" e rispondi con "Piacere!" o "Piacere mio!".']
      ],
      masteryAssessment: {
        title: ['A1 Greetings Mastery Assessment', 'Valutazione di Padronanza: I Saluti'],
        instructions: [
          'Demonstrate flawless selection of Italian greetings and introductions across social scenarios.',
          'Dimostra la corretta selezione di saluti e presentazioni in vari contesti sociali.'
        ],
        passingScore: 75,
        questions: [
          {
            q: ['Which greeting is used specifically when going to sleep at night?', 'Quale saluto si usa specificamente quando si va a dormire la notte?'],
            a: [
              ['Buonanotte', 'Buonanotte'],
              ['Buonasera', 'Buonasera'],
              ['Arrivederci', 'Arrivederci'],
              ['A domani mattina', 'A domani mattina']
            ],
            why: ['Buonanotte is used only upon going to bed or ending the night.', 'Buonanotte si usa esclusivamente prima di andare a dormire.']
          },
          {
            q: ['How do you say "See you tomorrow" in natural Italian?', 'Come si dice "See you tomorrow" in italiano naturale?'],
            a: [
              ['A domani', 'A domani'],
              ['A presto sera', 'A presto sera'],
              ['Ci vediamo mai', 'Ci vediamo mai'],
              ['Addio per sempre', 'Addio per sempre']
            ],
            why: ['"A domani" translates directly to "until tomorrow / see you tomorrow".', '"A domani" significa arrivederci a domani.']
          }
        ]
      },
      techniqueUnlock: {
        id: 'tech-it-saluto',
        name: ['Art of Saluto', 'Arte del Saluto'],
        description: ['Instinctively wield formal and informal greetings with perfect phonetic cadence.', 'Usa con disinvoltura i saluti formali e informali con perfetta cadenza fonetica.'],
        xpReward: 30
      }
    }
  },

  {
    id: 'it_a1m2',
    arc: 0,
    sec: 'A1.2',
    pages: '13–24',
    hue: 155,
    horns: 2,
    eyes: 3,
    title: [
      'The Secret Sounds of Italian: C, G, GLI & GN',
      'I Suoni Segreti dell’Italiano: C, G, GLI e GN'
    ],
    topic: [
      'Italian phonetics: hard vs soft C and G, the H (acca) rule, GLI, GN, and double consonants',
      'Fonetica italiana: C e G dolci e dure, la regola dell’acca, GLI, GN e le doppie consonanti'
    ],
    demon: [
      'Consonant Phantom',
      'Fantasma delle Consonanti'
    ],
    lore: [
      'The Consonant Phantom swaps Chianti with Ciao and softens the crisp double consonants. Train your tongue to speak pure Italian!',
      'Il Fantasma delle Consonanti scambia il Chianti col Ciao e ammorbidisce le doppie consonanti. Allena la lingua a pronunciare il vero italiano!'
    ],
    clearedMsg: [
      'Your pronunciation is crisp and accurate! You can read and pronounce any written Italian word.',
      'La tua pronuncia è impeccabile! Ora puoi leggere e pronunciare qualsiasi parola scritta in italiano.'
    ],
    tech: [
      'Phonetic Shield of Florence',
      'Scudo Fonetico di Firenze'
    ],
    scenes: [
      {
        who: 's',
        text: [
          '<p>Italian spelling is almost 100% phonetic, but there is one golden rule you MUST master: the letters <b>C</b> and <b>G</b>!</p><ul><li>Before <b>E</b> and <b>I</b>: they are <b>SOFT</b> (<i>Ciao</i> = "chow", <i>Gelato</i> = "jeh-la-to").</li><li>Before <b>A, O, U</b>: they are <b>HARD</b> (<i>Casa</i> = "ka-sa", <i>Gatto</i> = "gat-to").</li><li>Insert an <b>H (acca)</b> before E or I to make them <b>HARD</b>: <i>Chianti</i> = "kee-an-tee", <i>Spaghetti</i> = "spa-get-tee"!</li></ul>',
          '<p>L’ortografia italiana è quasi al 100% fonetica, ma c’è una regola aurea da padroneggiare: le lettere <b>C</b> e <b>G</b>!</p><ul><li>Davanti a <b>E</b> e <b>I</b> sono <b>DOLCI</b> (<i>Ciao</i>, <i>Gelato</i>).</li><li>Davanti a <b>A, O, U</b> sono <b>DURE</b> (<i>Casa</i>, <i>Gatto</i>).</li><li>Inserisci una <b>H (acca)</b> prima di E o I per renderle <b>DURE</b>: <i>Chianti</i> ("k"), <i>Spaghetti</i> ("g dura")!</li></ul>'
        ]
      },
      {
        who: 's',
        text: [
          '<p>Next, special consonant clusters:</p><ul><li><b>GLI</b>: produces the liquid sound in <i>famiglia</i> (like "million").</li><li><b>GN</b>: produces the nasal sound in <i>gnocchi</i>, <i>lasagna</i> (like "canyon").</li><li><b>SC + E/I</b>: produces the "sh" sound in <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie (Double consonants)</b>: hold the sound twice as long! <i>Penne</i> (pasta) vs <i>Pene</i> (penal/pain)!</li></ul>',
          '<p>Poi i digrammi e trigrammi speciali:</p><ul><li><b>GLI</b>: suono laterale palatale in <i>famiglia</i>.</li><li><b>GN</b>: suono nasale palatale in <i>gnocchi</i>, <i>lasagna</i>.</li><li><b>SC + E/I</b>: suono fricativo in <i>pesce</i>, <i>scena</i>.</li><li><b>Doppie consonanti</b>: trattieni il suono il doppio del tempo! <i>Penne</i> vs <i>Pene</i>!</li></ul>'
        ]
      }
    ],
    quiz: [
      {
        q: [
          'How is the word "CHIAVE" (key) pronounced in Italian?',
          'Come si pronuncia la parola "CHIAVE" in italiano?'
        ],
        a: [
          ['With a hard "K" sound: "KYA-veh"', 'Con suono "K" duro: "KYA-veh"'],
          ['With an English "CH" sound: "CHYA-veh"', 'Con suono "CH" inglese: "CHYA-veh"'],
          ['With a soft "SH" sound: "SHA-veh"', 'Con suono "SH" dolce: "SHA-veh"'],
          ['The H is pronounced as an English aspirated H', 'La H viene aspirata all’inglese']
        ],
        why: [
          'In Italian, the letter H (acca) after C or G hardens the sound before E or I (C + H + I = "kee/kya"). The H itself is always silent.',
          'In italiano, la lettera H dopo C o G indurisce il suono davanti a E o I. La H di per sé è sempre muta.'
        ]
      },
      {
        q: [
          'Which word contains the liquid palatal sound like "million" in English?',
          'Quale parola contiene il suono laterale palatale simile al "million" inglese?'
        ],
        a: [
          ['Bottiglia', 'Bottiglia'],
          ['Gatto', 'Gatto'],
          ['Gnocchi', 'Gnocchi'],
          ['Amico', 'Amico']
        ],
        why: [
          '"GLI" in "bottiglia" and "famiglia" makes the palatal liquid sound.',
          '"GLI" in "bottiglia" e "famiglia" produce il caratteristico suono laterale palatale.'
        ]
      },
      {
        q: [
          'Why are double consonants (doppie) critical in Italian pronunciation?',
          'Perché le doppie consonanti sono fondamentali nella pronuncia italiana?'
        ],
        a: [
          ['They change both the rhythm and the meaning of words (e.g. casa vs cassa, note vs notte)', 'Cambiano sia il ritmo sia il significato delle parole (es. casa vs cassa, note vs notte)'],
          ['They are completely silent and never pronounced', 'Sono del tutto mute e non si pronunciano mai'],
          ['They are only written for ancient decoration', 'Si scrivono solo per decorazione antica'],
          ['They only appear at the end of words', 'Appaiono solo alla fine delle parole']
        ],
        why: [
          'Double consonants in Italian are held for longer duration and change word meanings drastically (e.g. rosa/rossa, pala/palla).',
          'Le doppie consonanti richiedono una tenuta più lunga e cambiano il significato lessicale.'
        ]
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-a1m2-1',
          description: [
            'Master the hard vs soft pronunciation of C and G, understanding the silent H rule.',
            'Padroneggiare la pronuncia dura e dolce di C e G, comprendendo la funzione dell’acca muta.'
          ]
        },
        {
          id: 'obj-it-a1m2-2',
          description: [
            'Pronounce GLI, GN, SC and double consonants with authentic Italian phonetics.',
            'Pronunciare GLI, GN, SC e le doppie consonanti con autentica fonetica italiana.'
          ]
        }
      ],
      concepts: [
        {
          id: 'concept-it-phonetics',
          title: ['The Italian Phonetic Matrix: C, G, H', 'La Matrice Fonetica: C, G, H'],
          explanation: [
            'In English, "CH" sounds like cheese. In Italian, "CH" is the exact OPPOSITE: it represents a hard "K" sound before E and I (chitarra = kee-tar-ra, bruschetta = broos-KET-ta)! If you want the soft "ch" sound in Italian, you write C followed directly by I or E (ciao, cena).',
            'In italiano, "CH" rappresenta il suono duro "K" davanti a E e I (chitarra, bruschetta)! Per ottenere il suono dolce, si scrive C seguita direttamente da I o E (ciao, cena).'
          ],
          workedExample: {
            scenario: [
              'Ordering bruschetta in an authentic Tuscan trattoria.',
              'Ordinare una bruschetta in un’autentica trattoria toscana.'
            ],
            steps: [
              ['Step 1: Notice the "SCH" spelling: S + C + H + E.', 'Passo 1: Nota la grafia "SCH": S + C + H + E.'],
              ['Step 2: C + H + E = "keh" (never "sheh" or "cheh").', 'Passo 2: C + H + E = "ke" duro (mai "sce" o "ce").'],
              ['Step 3: Double TT = snappy pause.', 'Passo 3: Doppia TT = pausa marcata.'],
              ['Step 4: Pronounce: "broos-KET-ta".', 'Passo 4: Pronuncia: "brus-KET-ta".']
            ],
            answer: ['"Vorrei una bruschetta al pomodoro, per favore!"', '"Vorrei una bruschetta al pomodoro, per favore!"']
          }
        }
      ],
      summary: [
        ['C/G + E/I = Soft (cena, gelato). C/G + H + E/I = Hard (chiave, ghirlanda).', 'C/G + E/I = Dolce (cena, gelato). C/G + H + E/I = Duro (chiave, ghirlanda).'],
        ['GLI = liquid palatal ("famiglia"); GN = nasal palatal ("lasagna").', 'GLI = laterale palatale ("famiglia"); GN = nasale palatale ("lasagna").'],
        ['Double consonants lengthen the consonant sound and can change meaning completely.', 'Le doppie allungano il suono consonantico e distinguono il significato.']
      ],
      masteryAssessment: {
        title: ['Phonetics Mastery Test', 'Test di Padronanza Fonetica'],
        instructions: [
          'Identify the correct phonetic reading and stress placement for authentic Italian words.',
          'Identifica la lettura fonetica corretta e la posizione dell’accento per parole italiane.'
        ],
        passingScore: 80,
        questions: [
          {
            q: ['Which word is pronounced with a hard "G" sound like in the English word "go"?', 'Quale parola si pronuncia con la "G" dura come in "go"?'],
            a: [
              ['Spaghetti', 'Spaghetti'],
              ['Gelato', 'Gelato'],
              ['Giro', 'Giro'],
              ['Giorno', 'Giorno']
            ],
            why: ['The H in "spaghetti" (GH + E) makes the G sound hard.', 'La H in "spaghetti" (GH + E) rende la G dura.']
          }
        ]
      }
    }
  },

  {
    id: 'it_a1m3',
    arc: 0,
    sec: 'A1.3',
    pages: '25–38',
    hue: 45,
    horns: 1,
    eyes: 2,
    title: [
      'Al Bar Italiano: Ordering & Essential Numbers',
      'Al Bar Italiano: Ordinare e i Numeri Fondamentali'
    ],
    topic: [
      'Ordering food and drink at an Italian cafe, courtesy formula "Vorrei", numbers 1–20, paying the check',
      'Ordinare cibi e bevande al bar, la formula di cortesia "Vorrei", i numeri da 1 a 20, pagare il conto'
    ],
    demon: [
      'Glitch Barista',
      'Barista del Caos'
    ],
    lore: [
      'The Glitch Barista serves cold espresso unless you speak the exact Italian courtesy formula. Order like a true local!',
      'Il Barista del Caos serve espresso freddo a meno che tu non pronunci la perfetta formula di cortesia. Ordina come un vero italiano!'
    ],
    clearedMsg: [
      'The barista smiles and pours a velvety espresso. You have unlocked everyday conversational fluency at the counter!',
      'Il barista sorride e ti serve un espresso cremoso. Hai sbloccato la fluidità quotidiana al banco!'
    ],
    tech: [
      'Espresso Courtesy Strike',
      'Colpo di Cortesia dell’Espresso'
    ],
    scenes: [
      {
        who: 's',
        text: [
          '<p>The Italian bar is the beating heart of social life. Here are the golden rules:</p><ul><li>Use <b>"Vorrei..."</b> (I would like...) instead of "Voglio" (I want). "Vorrei" is polite and pleasant.</li><li>Always conclude with <b>"per favore"</b> or <b>"per piacere"</b> (please).</li><li>Numbers 1–10: <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>To ask for the bill: <i>"Quanto pago?"</i> or <i>"Il conto, per favore!"</i></li></ul>',
          '<p>Il bar italiano è il cuore pulsante della vita sociale. Ecco le regole d’oro:</p><ul><li>Usa <b>"Vorrei..."</b> invece di "Voglio". "Vorrei" è gentile ed elegante.</li><li>Aggiungi sempre <b>"per favore"</b> o <b>"per piacere"</b>.</li><li>I numeri 1–10: <i>uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci</i>.</li><li>Per pagare: <i>"Quanto pago?"</i> oppure <i>"Il conto, per favore!"</i></li></ul>'
        ]
      }
    ],
    quiz: [
      {
        q: [
          'What is the polite way to ask for a coffee and a croissant at the counter?',
          'Qual è il modo cortese per chiedere un caffè e un cornetto al banco?'
        ],
        a: [
          ['Vorrei un caffè e un cornetto, per favore.', 'Vorrei un caffè e un cornetto, per favore.'],
          ['Dammi un caffè e un cornetto subito!', 'Dammi un caffè e un cornetto subito!'],
          ['Voglio mangiare e bere adesso.', 'Voglio mangiare e bere adesso.'],
          ['Prendo qualcosa se voglio.', 'Prendo qualcosa se voglio.']
        ],
        why: [
          '"Vorrei... per favore" is the universally polite and elegant way to order in Italy.',
          '"Vorrei... per favore" è la formula di cortesia standard per ordinare.'
        ]
      },
      {
        q: [
          'How do you say the number 15 in Italian?',
          'Come si dice il numero 15 in italiano?'
        ],
        a: [
          ['Quindici', 'Quindici'],
          ['Dodici', 'Dodici'],
          ['Cinquanta', 'Cinquanta'],
          ['Diciassette', 'Diciassette']
        ],
        why: [
          '15 is "quindici" (11=undici, 12=dodici, 13=tredici, 14=quattordici, 15=quindici).',
          '15 si dice "quindici".'
        ]
      }
    ]
  },

  // =========================================================================
  // CEFR A2 - ELEMENTARE (ELEMENTARY)
  // Arc 1: Il Passato e Orientarsi in Città
  // =========================================================================
  {
    id: 'it_a2m1',
    arc: 1,
    sec: 'A2.1',
    pages: '50–68',
    hue: 200,
    horns: 2,
    eyes: 2,
    title: [
      'Il Mio Weekend: Il Passato Prossimo',
      'Il Mio Weekend: Il Passato Prossimo'
    ],
    topic: [
      'The Passato Prossimo tense: auxiliary choice (essere vs avere) and past participle agreement',
      'Il passato prossimo: scelta dell’ausiliare (essere vs avere) e accordo del participio passato'
    ],
    demon: [
      'Auxiliary Specter',
      'Spettro dell’Ausiliare'
    ],
    lore: [
      'The Auxiliary Specter confuses "sono andato" with "ho andato". Master the two pillars of past actions to banish it!',
      'Lo Spettro dell’Ausiliare confonde "sono andato" con "ho andato". Padroneggia i due pilastri del passato per sconfiggerlo!'
    ],
    clearedMsg: [
      'Splendido! You can narrate completed past events, trips, and weekend adventures with grammatical precision.',
      'Splendido! Ora puoi narrare eventi passati, viaggi e fine settimana con precisione grammaticale.'
    ],
    tech: [
      'Chronos Auxiliary Blade',
      'Lama dell’Ausiliare del Tempo'
    ],
    scenes: [
      {
        who: 's',
        text: [
          '<p>Welcome to <b>CEFR A2</b>! To talk about what you did yesterday or last weekend, use the <b>Passato Prossimo</b>.</p><p>Formula: <b>Present of AVERE or ESSERE + Past Participle (-ato, -uto, -ito)</b>.</p><ul><li><b>Use AVERE:</b> for most transitive verbs (actions done to an object): <i>Ho mangiato una pizza. Ho letto un libro.</i> The participle does NOT change.</li><li><b>Use ESSERE:</b> for movement, state, change of status, and reflexives: <i>Sono andato a scuola. Maria è arrivata. Ci siamo divertiti.</i> With ESSERE, the participle MUST agree in gender and number (-o, -a, -i, -e)!</li></ul>',
          '<p>Benvenuto al <b>QCER A2</b>! Per parlare di ciò che hai fatto ieri o lo scorso weekend, usa il <b>Passato Prossimo</b>.</p><p>Formula: <b>Presente di AVERE o ESSERE + Participio Passato (-ato, -uto, -ito)</b>.</p><ul><li><b>Con AVERE:</b> per la maggior parte dei verbi transitivi: <i>Ho mangiato una pizza. Ho letto un libro.</i> Il participio termina normalmente in -o.</li><li><b>Con ESSERE:</b> per verbi di movimento, stato, cambiamento e riflessivi: <i>Sono andato a scuola. Maria è arrivata.</i> Con ESSERE il participio si accorda in genere e numero col soggetto (-o, -a, -i, -e)!</li></ul>'
        ]
      }
    ],
    quiz: [
      {
        q: [
          'Choose the grammatically correct sentence for a female speaker saying "Yesterday I went to Rome":',
          'Scegli la frase corretta detta da una ragazza che dice "Ieri sono andata a Roma":'
        ],
        a: [
          ['Ieri sono andata a Roma.', 'Ieri sono andata a Roma.'],
          ['Ieri ho andato a Roma.', 'Ieri ho andato a Roma.'],
          ['Ieri sono andato a Roma.', 'Ieri sono andato a Roma.'],
          ['Ieri ho andata a Roma.', 'Ieri ho andata a Roma.'],
        ],
        why: [
          '"Andare" is a verb of movement and takes the auxiliary "essere". With "essere", the past participle agrees with the feminine subject (andata).',
          '"Andare" è un verbo di movimento e richiede l’ausiliare "essere". Con "essere" il participio si accorda al femminile singolare (-a).'
        ]
      },
      {
        q: [
          'Which sentence correctly describes drinking a cappuccino yesterday morning?',
          'Quale frase descrive correttamente l’aver bevuto un cappuccino ieri mattina?'
        ],
        a: [
          ['Ieri mattina ho bevuto un cappuccino.', 'Ieri mattina ho bevuto un cappuccino.'],
          ['Ieri mattina sono bevuto un cappuccino.', 'Ieri mattina sono bevuto un cappuccino.'],
          ['Ieri mattina ho bevuta un cappuccino.', 'Ieri mattina ho bevuta un cappuccino.'],
          ['Ieri mattina sono bevuta un cappuccino.', 'Ieri mattina sono bevuta un cappuccino.']
        ],
        why: [
          '"Bere" is transitive (drinks an object) and takes "avere" (ho bevuto).',
          '"Bere" è transitivo e richiede l’ausiliare "avere" (ho bevuto).'
        ]
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-a2m1-1',
          description: [
            'Select the correct auxiliary (essere vs avere) for common Italian verbs in passato prossimo.',
            'Scegliere l’ausiliare corretto (essere o avere) per i verbi italiani al passato prossimo.'
          ],
        },
        {
          id: 'obj-it-a2m1-2',
          description: [
            'Apply past participle gender and number agreement rules when auxiliary essere is used.',
            'Applicare le regole di accordo del participio passato in genere e numero quando si usa essere.'
          ]
        }
      ],
      concepts: [
        {
          id: 'concept-it-passato-prossimo',
          title: ['Auxiliary Choice: The House of Essere', 'Scelta dell’Ausiliare: La Casa di Essere'],
          explanation: [
            'Think of the "House of Essere": verbs of entering, leaving, going, coming, staying, being born, and dying all live in this house and take ESSERE (andare, venire, entrare, uscire, salire, scendere, restare, nascere, morire). Almost all other active verbs take AVERE.',
            'Pensa alla "Casa di Essere": i verbi di movimento, permanenza, nascita e morte (andare, venire, entrare, uscire, restare, nascere, morire) richiedono ESSERE. La maggior parte degli altri verbi prende AVERE.'
          ],
          workedExample: {
            scenario: [
              'Two girls (Chiara and Sofia) describing their arrival at the train station.',
              'Due ragazze (Chiara e Sofia) che descrivono il loro arrivo alla stazione.'
            ],
            steps: [
              ['Step 1: Verb is "arrivare" (movement/destination) -> requires ESSERE.', 'Passo 1: Verbo "arrivare" -> ausiliare ESSERE.'],
              ['Step 2: Subject is "noi" (two girls, feminine plural) -> siamo.', 'Passo 2: Soggetto "noi" (femminile plurale) -> siamo.'],
              ['Step 3: Past participle "arrivato" must agree -> arrivate.', 'Passo 3: Accordo del participio -> arrivate.']
            ],
            answer: ['"Chiara e io siamo arrivate alla stazione in orario."', '"Chiara e io siamo arrivate alla stazione in orario."']
          }
        }
      ],
      summary: [
        ['AVERE + Participle in -o for transitive actions.', 'AVERE + participio invariato in -o per azioni transitive.'],
        ['ESSERE + Participle agreeing in gender and number (-o, -a, -i, -e) for movement and status.', 'ESSERE + accordo in genere e numero per movimento e stato.']
      ]
    }
  },

  {
    id: 'it_a2m2',
    arc: 1,
    sec: 'A2.2',
    pages: '69–84',
    hue: 220,
    horns: 1,
    eyes: 3,
    title: [
      'In Città: Indicazioni Stradali e Pronomi Diretti',
      'In Città: Indicazioni Stradali e Pronomi Diretti'
    ],
    topic: [
      'Asking for and giving street directions, articulated prepositions (al, del, nel), direct object pronouns (lo, la, li, le) and partitive "ne"',
      'Chiedere e dare indicazioni stradali, preposizioni articolate, pronomi diretti (lo, la, li, le) e partitivo "ne"'
    ],
    demon: [
      'Labyrinth Demon',
      'Demone del Labirinto'
    ],
    lore: [
      'Lost in the narrow alleys of Venice! Use articulated prepositions and direct pronouns to guide your fellow hunters to safety.',
      'Perso tra le calli di Venezia! Usa le preposizioni articolate e i pronomi diretti per guidare i tuoi compagni alla salvezza.'
    ],
    clearedMsg: [
      'You navigated the urban labyrinth with elegance. You can guide any traveler across Italian cities!',
      'Hai navigato il labirinto urbano con eleganza. Ora puoi guidare qualsiasi viaggiatore nelle città italiane!'
    ],
    tech: [
      'Compass of Venice',
      'Bussola di Venezia'
    ],
    scenes: [
      {
        who: 's',
        text: [
          '<p>Navigating Italian towns requires two key skills:</p><ul><li><b>Directions:</b> <i>Giri a destra</i> (turn right), <i>Giri a sinistra</i> (turn left), <i>Vada sempre dritto</i> (go straight ahead), <i>Attraversi la piazza</i> (cross the square).</li><li><b>Direct Object Pronouns (lo, la, li, le):</b> Replace a noun to avoid repetition: <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>The partitive "NE":</b> Replaces a quantity: <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i> (I drink two of them a day).</li></ul>',
          '<p>Muoversi nelle città italiane richiede due abilità chiave:</p><ul><li><b>Indicazioni:</b> <i>Giri a destra</i>, <i>Giri a sinistra</i>, <i>Vada sempre dritto</i>, <i>Attraversi la piazza</i>.</li><li><b>Pronomi Diretti (lo, la, li, le):</b> Sostituiscono il complemento oggetto: <i>Compri il pane? Sì, <b>lo</b> compro. Mangi le mele? Sì, <b>le</b> mangio.</i></li><li><b>Il partitivo "NE":</b> Indica una quantità definita o parziale: <i>Quanti caffè bevi? <b>Ne</b> bevo due al giorno!</i></li></ul>'
        ]
      }
    ],
    quiz: [
      {
        q: [
          'Which pronoun correctly completes: "Hai visto Maria? Sì, ___ ho vista ieri in centro."',
          'Quale pronome completa correttamente: "Hai visto Maria? Sì, ___ ho vista ieri in centro."'
        ],
        a: [
          ['l’ (la)', 'l’ (la)'],
          ['gli', 'gli'],
          ['ne', 'ne'],
          ['ci', 'ci']
        ],
        why: [
          '"Maria" is a feminine singular direct object. In the past with avere, "la" elides with ho ("l’ho vista") and the participle agrees with the direct pronoun.',
          '"Maria" è oggetto diretto femminile singolare. Con il passato di avere, "la" si elide in "l’" e il participio concorda (l’ho vista).'
        ]
      },
      {
        q: [
          'How do you say "I will take three of them, thank you" when buying oranges?',
          'Come dici "Ne prendo tre, grazie" quando compri delle arance?'
        ],
        a: [
          ['Ne prendo tre, grazie.', 'Ne prendo tre, grazie.'],
          ['Li prendo tre, grazie.', 'Li prendo tre, grazie.'],
          ['Prendo essi tre, grazie.', 'Prendo essi tre, grazie.'],
          ['Ci prendo tre, grazie.', 'Ci prendo tre, grazie.']
        ],
        why: [
          'The particle "ne" specifies a part or quantity of a previously mentioned item ("arance").',
          'La particella "ne" si usa per esprimere una quantità di qualcosa citato in precedenza.'
        ]
      }
    ]
  },

  // =========================================================================
  // CEFR B1 - INTERMEDIO (INTERMEDIATE)
  // Arc 2: Futuro, Condizionale di Cortesia e Congiuntivo
  // =========================================================================
  {
    id: 'it_b1m1',
    arc: 2,
    sec: 'B1.1',
    pages: '100–118',
    hue: 350,
    horns: 2,
    eyes: 4,
    title: [
      'Progetti e Cortesia: Futuro e Condizionale Presente',
      'Progetti e Cortesia: Futuro e Condizionale Presente'
    ],
    topic: [
      'Future Semplice (predictions, plans, hypotheses) and Condizionale Presente (polite requests, wishes, hypothetical situations)',
      'Futuro semplice (previsioni, progetti, ipotesi) e condizionale presente (cortesia, desideri, situazioni ipotetiche)'
    ],
    demon: [
      'Uncertainty Mirage',
      'Miraggio dell’Incertezza'
    ],
    lore: [
      'The Mirage clouds future aspirations with doubt. Master the future tense and polite conditional to carve out your destiny!',
      'Il Miraggio offusca i progetti futuri con il dubbio. Padroneggia il futuro e il condizionale di cortesia per tracciare il tuo destino!'
    ],
    clearedMsg: [
      'Magnifico! You express future dreams, formulate polite proposals, and converse at B1 level with natural elegance.',
      'Magnifico! Ora esprimi sogni futuri, formuli proposte cortesi e dialoghi al livello B1 con eleganza naturale.'
    ],
    tech: [
      'Future Prism of Florence',
      'Prisma del Futuro di Firenze'
    ],
    scenes: [
      {
        who: 's',
        text: [
          '<p>Welcome to <b>CEFR B1 (Intermedio)</b>! At this level, you move beyond basic transactions into nuanced, polite human relationships.</p><ul><li><b>Futuro Semplice (-rò, -rai, -rà, -remo, -rete, -ranno):</b> Used for future actions (<i>L’anno prossimo viaggerò in Italia</i>) and hypotheses/epistemic probability (<i>Che ore sono? Saranno le tre</i> = It must be around 3).</li><li><b>Condizionale Presente (-rei, -resti, -rebbe, -remmo, -reste, -rebbero):</b> Used for polite requests (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) and personal desires (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>',
          '<p>Benvenuto al <b>QCER B1 (Intermedio)</b>! A questo livello superi le semplici transazioni pratiche ed entri nelle sfumature delle relazioni umane e della cortesia.</p><ul><li><b>Futuro Semplice:</b> Per progetti futuri (<i>L’anno prossimo viaggerò in Italia</i>) e ipotesi nel presente (<i>Saranno le tre</i>).</li><li><b>Condizionale Presente:</b> Per richieste cortesi (<i>Vorrei un’informazione</i>, <i>Potrebbe aiutarmi?</i>) e desideri personali (<i>Mi piacerebbe vivere a Firenze</i>).</li></ul>'
        ]
      }
    ],
    quiz: [
      {
        q: [
          'Which sentence uses the polite conditional to ask a stranger for assistance on the train?',
          'Quale frase usa il condizionale di cortesia per chiedere aiuto a un passeggero sul treno?'
        ],
        a: [
          ['Scusi, potrebbe aiutarmi a sollevare questa valigia?', 'Scusi, potrebbe aiutarmi a sollevare questa valigia?'],
          ['Aiutami con la valigia subito!', 'Aiutami con la valigia subito!'],
          ['Devi prendere la mia valigia adesso.', 'Devi prendere la mia valigia adesso.'],
          ['Prendi la valigia se vuoi.', 'Prendi la valigia se vuoi.']
        ],
        why: [
          '"Potrebbe aiutarmi...?" uses the polite formal conditional of "potere" (could you please help me).',
          '"Potrebbe aiutarmi...?" usa il condizionale formale di cortesia del verbo potere.'
        ]
      },
      {
        q: [
          'What is the first-person plural future of the verb "partire" (we will depart)?',
          'Qual è la prima persona plurale del futuro del verbo "partire" (noi partiremo)?'
        ],
        a: [
          ['Noi partiremo', 'Noi partiremo'],
          ['Noi partiremmo', 'Noi partiremmo'],
          ['Noi partiamo', 'Noi partiamo'],
          ['Noi partiranno', 'Noi partiranno']
        ],
        why: [
          'Future endings have a single "m": partiremo. Double "mm" (partiremmo) is conditional!',
          'Il futuro semplice ha una sola "m" (partiremo). La doppia "mm" (partiremmo) appartiene al condizionale presente.'
        ]
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-b1m1-1',
          description: [
            'Express future plans and hypotheses using regular and irregular futuro semplice.',
            'Esprimere progetti futuri e ipotesi usando il futuro semplice regolare e irregolare.'
          ],
        },
        {
          id: 'obj-it-b1m1-2',
          description: [
            'Formulate courteous requests and express personal aspirations with condizionale presente.',
            'Formulare richieste cortesi ed esprimere desideri personali con il condizionale presente.'
          ]
        }
      ],
      concepts: [
        {
          id: 'concept-it-futuro-condizionale',
          title: ['Distinguishing Futuro (-remo) and Condizionale (-remmo)', 'Distinguere Futuro (-remo) e Condizionale (-remmo)'],
          explanation: [
            'One of the most famous traps in Italian grammar! In the "noi" form: ONE M is FUTURE (Noi andremo = We will go). TWO M’s is CONDITIONAL (Noi andremmo = We would go). Listen carefully to the geminate double-M sound!',
            'Uno dei tranelli più celebri dell’italiano! Alla forma "noi": UNA M indica il FUTURO (Noi andremo). LA DOPPIA M indica il CONDIZIONALE (Noi andremmo). Ascolta la differenza di pronuncia!'
          ],
          workedExample: {
            scenario: [
              'Politely inviting a colleague to a business lunch.',
              'Invitare con cortesia un collega a un pranzo di lavoro.'
            ],
            steps: [
              ['Step 1: Choose polite conditional formula: "Le andrebbe di..." or "Vorrebbe...".', 'Passo 1: Scegli la formula di cortesia al condizionale.'],
              ['Step 2: Add the proposed activity: "pranzare insieme oggi?".', 'Passo 2: Aggiungi l’attività proposta.']
            ],
            answer: ['"Le andrebbe di pranzare insieme oggi per discutere il progetto?"', '"Le andrebbe di pranzare insieme oggi per discutere il progetto?"']
          }
        }
      ],
      summary: [
        ['Futuro: -rò, -rai, -rà, -remo, -rete, -ranno (One "m" for noi).', 'Futuro: una sola "m" per noi (-remo).'],
        ['Condizionale: -rei, -resti, -rebbe, -remmo, -reste, -rebbero (Double "mm" for noi).', 'Condizionale: doppia "mm" per noi (-remmo).']
      ]
    }
  },

  {
    id: 'it_b1m2',
    arc: 2,
    sec: 'B1.2',
    pages: '119–140',
    hue: 330,
    horns: 3,
    eyes: 4,
    title: [
      'Opinioni e Narrazione: Il Congiuntivo e i Doppi Pronomi',
      'Opinioni e Narrazione: Il Congiuntivo e i Doppi Pronomi'
    ],
    topic: [
      'Present Subjunctive for expressing opinions and emotions (Penso che, Credo che, Spero che), and combined pronouns (me lo, glielo)',
      'Il congiuntivo presente per opinioni ed emozioni (Penso che, Credo che, Spero che) e pronomi combinati (me lo, glielo)'
    ],
    demon: [
      'Chimera of Subjunctive',
      'Chimera del Congiuntivo'
    ],
    lore: [
      'The fearsome Chimera challenges anyone who dares express personal truth. Tame it by harnessing the subjunctive mood and fluid double pronouns!',
      'La temibile Chimera sfida chiunque provi a esprimere la propria verità. Addomesticala padroneggiando il congiuntivo e i doppi pronomi!'
    ],
    clearedMsg: [
      'Bravissimo! You have conquered CEFR B1! You hold intelligent conversations, discuss opinions, and write with sophisticated style.',
      'Bravissimo! Hai conquistato il QCER B1! Sostieni conversazioni stimolanti, esprimi opinioni e ti esprimi con eleganza.'
    ],
    tech: [
      'Subjunctive Harmony of Dante',
      'Armonia del Congiuntivo di Dante'
    ],
    scenes: [
      {
        who: 's',
        text: [
          '<p>The crown jewel of Italian expression: the <b>Congiuntivo (Subjunctive)</b>! While the Indicativo expresses objective facts (<i>So che sei qui</i>), the Congiuntivo expresses the world of the mind: opinions, feelings, doubts, hopes, and desires.</p><ul><li><b>Trigger phrases:</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i>, <i>È necessario che...</i></li><li><b>Present Subjunctive of ESSERE:</b> <i>io sia, tu sia, lui/lei sia, noi siamo, voi siate, loro siano</i>.</li><li><b>Present Subjunctive of AVERE:</b> <i>io abbia, tu abbia, lui/lei abbia, noi abbiamo, voi abbiate, loro abbiano</i>.</li><li><b>Combined Pronouns:</b> When indirect (mi, ti, gli) meets direct (lo, la, li, le), "i" becomes "e": <i>me lo dai? glielo dico io!</i></li></ul>',
          '<p>La gemma più luminosa dell’italiano: il <b>Congiuntivo</b>! Se l’indicativo esprime la certezza dei fatti (<i>So che sei qui</i>), il congiuntivo dà voce al mondo interiore: opinioni, emozioni, dubbi, speranze e desideri.</p><ul><li><b>Frasi che lo reggono:</b> <i>Penso che...</i>, <i>Credo che...</i>, <i>Dubito che...</i>, <i>Spero che...</i></li><li><b>Congiuntivo di ESSERE:</b> <i>che io sia, che tu sia, che lui sia, che noi siamo, che voi siate, che loro siano</i>.</li><li><b>Congiuntivo di AVERE:</b> <i>che io abbia, che tu abbia, che lui abbia, che noi abbiamo, che voi abbiate, che loro abbiano</i>.</li><li><b>Pronomi Combinati:</b> <i>me lo dai? glielo spiego io!</i></li></ul>'
        ]
      }
    ],
    quiz: [
      {
        q: [
          'Which sentence correctly uses the subjunctive after an expression of opinion?',
          'Quale frase usa correttamente il congiuntivo dopo un verbo di opinione?'
        ],
        a: [
          ['Penso che Marco sia una persona generosa.', 'Penso che Marco sia una persona generosa.'],
          ['Penso che Marco è una persona generosa.', 'Penso che Marco è una persona generosa.'],
          ['Penso che Marco sarà una persona generosa.', 'Penso che Marco sarà una persona generosa.'],
          ['Penso che Marco fosse una persona ieri.', 'Penso che Marco fosse una persona ieri.']
        ],
        why: [
          '"Penso che" expresses personal opinion and requires the subjunctive ("sia", not indicative "è").',
          '"Penso che" esprime un’opinione personale e richiede il congiuntivo presente ("sia").'
        ]
      },
      {
        q: [
          'How do you say "I will tell it to him / her" using a combined pronoun?',
          'Come si dice "Lo dirò a lui / a lei" usando un pronome combinato?'
        ],
        a: [
          ['Glielo dirò domani.', 'Glielo dirò domani.'],
          ['Gli lo dirò domani.', 'Gli lo dirò domani.'],
          ['Le lo dirò domani.', 'Le lo dirò domani.'],
          ['Lo gli dirò domani.', 'Lo gli dirò domani.']
        ],
        why: [
          'In Italian, "gli/le" + "lo" fuses into the single combined pronoun "glielo".',
          'In italiano, l’unione di gli/le con lo dà origine al pronome combinato unico "glielo".'
        ]
      }
    ],
    learning: {
      version: 1,
      objectives: [
        {
          id: 'obj-it-b1m2-1',
          description: [
            'Express subjective thoughts, doubts and wishes using the present subjunctive.',
            'Esprimere pensieri soggettivi, dubbi e desideri usando il congiuntivo presente.'
          ],
        },
        {
          id: 'obj-it-b1m2-2',
          description: [
            'Combine indirect and direct pronouns seamlessly in speech and writing.',
            'Combinare pronomi indiretti e diretti in modo fluido nel parlato e nello scritto.'
          ]
        }
      ],
      concepts: [
        {
          id: 'concept-it-congiuntivo-opinione',
          title: ['The Subjunctive of Opinion & Emotion', 'Il Congiuntivo di Opinione ed Emozione'],
          explanation: [
            'Use the subjunctive whenever the main clause expresses: Opinion (Penso che, Credo che, Ritengo che), Doubt (Dubito che, Non sono sicuro che), Emotion (Sono felice che, Mi dispiace che), or Hope (Spero che, Mi auguro che).',
            'Il congiuntivo si usa quando la frase principale esprime: Opinione (Penso che), Dubbio (Dubito che), Sentimento (Sono felice che) o Speranza (Spero che).'
          ],
          workedExample: {
            scenario: [
              'Sharing an opinion on the best strategy for the Academy hunt.',
              'Condividere un’opinione sulla strategia migliore per la caccia nell’Accademia.'
            ],
            steps: [
              ['Step 1: Start with opinion verb: "Credo che...".', 'Passo 1: Inizia col verbo di opinione: "Credo che...".'],
              ['Step 2: Subordinate clause verb is "essere" (subjunctive form: "sia").', 'Passo 2: Il verbo subordinato va al congiuntivo presente: "sia".']
            ],
            answer: ['"Credo che questa sia la strategia più efficace."', '"Credo che questa sia la strategia più efficace."']
          }
        }
      ],
      summary: [
        ['Use congiuntivo presente for opinions, emotions and uncertainty.', 'Usa il congiuntivo per opinioni, emozioni e incertezza.'],
        ['Combined pronouns: mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.', 'Pronomi combinati: mi+lo=me lo, ti+la=te la, gli/le+lo=glielo.']
      ]
    }
  }
];
