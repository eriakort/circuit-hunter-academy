import { BilingualText, SupportLanguage } from '../types';
import { GrammarLevel } from './italianGrammar';

/** A key-vocabulary gloss: the Italian term stays fixed; the gloss is localized. */
export type GlossaryEntry = { it: string; en: string } & Partial<Record<SupportLanguage, string>>;

/**
 * Italian listening-comprehension passages (CEFR A1 · A2 · B1).
 *
 * Each passage is a short Italian story or dialogue the learner listens to
 * (via the browser Web Speech synthesis engine, with adjustable speed and
 * pause/resume), then answers multiple-choice comprehension questions.
 *
 * The Italian `text` is what gets read aloud. The optional `transcript`
 * (bilingual) can be revealed after a first listen for self-checking.
 */

export type ListeningTheme = 'everyday' | 'travel' | 'work';

export interface ListeningQuestion {
  id: string;
  /** The comprehension question, shown in the learner's interface language. */
  prompt: BilingualText;
  /** Answer options. These stay in Italian so the learner works in the language. */
  options: string[];
  /** Index of the correct option. */
  answer: number;
  /** Why the answer is correct (bilingual), shown after answering. */
  explanation: BilingualText;
}

export interface ListeningPassage {
  id: string;
  level: GrammarLevel;
  theme: ListeningTheme;
  title: BilingualText;
  /** One-line description of the situation, shown before listening. */
  intro: BilingualText;
  /** The Italian text that is read aloud. Keep sentences clear and well punctuated. */
  text: string;
  /** Bilingual transcript/translation revealed on demand for self-checking. */
  transcript: BilingualText;
  /** Key vocabulary to pre-teach (Italian term · localized gloss). */
  glossary: GlossaryEntry[];
  questions: ListeningQuestion[];
}

export const LISTENING_THEME_LABELS: Record<ListeningTheme, BilingualText> = {
  everyday: ['Everyday life', 'Vita quotidiana'],
  travel: ['Travel & city', 'Viaggi e città'],
  work: ['Work & email', 'Lavoro ed email']
};

export const ITALIAN_LISTENING_PASSAGES: ListeningPassage[] = [
  // ===================== EVERYDAY LIFE =====================
  {
    id: 'lis-everyday-a1-1',
    level: 'A1',
    theme: 'everyday',
    title: { en: 'Paolo’s morning', it: 'La mattina di Paolo', pt: 'A manhã do Paolo', es: 'La mañana de Paolo', fr: 'La matinée de Paolo', de: 'Paolos Morgen' },
    intro: {
      en: 'A simple daily routine. Listen for the times and the order of actions.',
      it: 'Una semplice routine quotidiana. Ascolta gli orari e l’ordine delle azioni.',
      pt: 'Uma rotina diária simples. Preste atenção nos horários e na ordem das ações.',
      es: 'Una rutina diaria sencilla. Fíjate en las horas y en el orden de las acciones.',
      fr: 'Une routine quotidienne simple. Écoute les horaires et l’ordre des actions.',
      de: 'Ein einfacher Tagesablauf. Achte auf die Uhrzeiten und die Reihenfolge der Handlungen.'
    },
    text: 'Paolo si sveglia alle sette. Prima beve un caffè in cucina. Poi si lava e si veste. Alle otto esce di casa e prende l’autobus. Arriva al lavoro alle nove. A mezzogiorno mangia un panino con un amico.',
    transcript: {
      en: 'Paolo wakes up at seven. First he drinks a coffee in the kitchen. Then he washes and gets dressed. At eight he leaves the house and takes the bus. He arrives at work at nine. At noon he eats a sandwich with a friend.',
      it: 'Paolo si sveglia alle sette. Prima beve un caffè in cucina. Poi si lava e si veste. Alle otto esce di casa e prende l’autobus. Arriva al lavoro alle nove. A mezzogiorno mangia un panino con un amico.',
      pt: 'Paolo acorda às sete. Primeiro toma um café na cozinha. Depois se lava e se veste. Às oito sai de casa e pega o ônibus. Chega ao trabalho às nove. Ao meio-dia come um sanduíche com um amigo.',
      es: 'Paolo se despierta a las siete. Primero toma un café en la cocina. Luego se lava y se viste. A las ocho sale de casa y toma el autobús. Llega al trabajo a las nueve. A mediodía come un bocadillo con un amigo.',
      fr: 'Paolo se réveille à sept heures. D’abord il boit un café dans la cuisine. Puis il se lave et s’habille. À huit heures il sort de chez lui et prend le bus. Il arrive au travail à neuf heures. À midi il mange un sandwich avec un ami.',
      de: 'Paolo wacht um sieben auf. Zuerst trinkt er einen Kaffee in der Küche. Dann wäscht er sich und zieht sich an. Um acht verlässt er das Haus und nimmt den Bus. Er kommt um neun bei der Arbeit an. Mittags isst er ein Brötchen mit einem Freund.'
    },
    glossary: [
      { it: 'si sveglia', en: 'he wakes up', pt: 'ele acorda', es: 'se despierta', fr: 'il se réveille', de: 'er wacht auf' },
      { it: 'esce di casa', en: 'he leaves the house', pt: 'sai de casa', es: 'sale de casa', fr: 'il sort de chez lui', de: 'er verlässt das Haus' },
      { it: 'a mezzogiorno', en: 'at noon', pt: 'ao meio-dia', es: 'a mediodía', fr: 'à midi', de: 'mittags' }
    ],
    questions: [
      {
        id: 'lis-everyday-a1-1-q1',
        prompt: { en: 'At what time does Paolo wake up?', it: 'A che ora si sveglia Paolo?', pt: 'A que horas o Paolo acorda?', es: '¿A qué hora se despierta Paolo?', fr: 'À quelle heure Paolo se réveille-t-il ?', de: 'Um wie viel Uhr wacht Paolo auf?' },
        options: ['Alle sette', 'Alle otto', 'Alle nove'],
        answer: 0,
        explanation: { en: '“Paolo si sveglia alle sette” — at seven.', it: '“Paolo si sveglia alle sette” — alle sette.', pt: '“Paolo si sveglia alle sette” — às sete.', es: '“Paolo si sveglia alle sette” — a las siete.', fr: '“Paolo si sveglia alle sette” — à sept heures.', de: '“Paolo si sveglia alle sette” — um sieben.' }
      },
      {
        id: 'lis-everyday-a1-1-q2',
        prompt: { en: 'What does he drink first?', it: 'Che cosa beve per primo?', pt: 'O que ele toma primeiro?', es: '¿Qué toma primero?', fr: 'Que boit-il en premier ?', de: 'Was trinkt er zuerst?' },
        options: ['Un tè', 'Un caffè', 'Un succo'],
        answer: 1,
        explanation: { en: '“Prima beve un caffè” — a coffee.', it: '“Prima beve un caffè” — un caffè.', pt: '“Prima beve un caffè” — um café.', es: '“Prima beve un caffè” — un café.', fr: '“Prima beve un caffè” — un café.', de: '“Prima beve un caffè” — einen Kaffee.' }
      },
      {
        id: 'lis-everyday-a1-1-q3',
        prompt: { en: 'How does he go to work?', it: 'Come va al lavoro?', pt: 'Como ele vai ao trabalho?', es: '¿Cómo va al trabajo?', fr: 'Comment va-t-il au travail ?', de: 'Wie fährt er zur Arbeit?' },
        options: ['In macchina', 'A piedi', 'In autobus'],
        answer: 2,
        explanation: { en: '“Prende l’autobus” — he takes the bus.', it: '“Prende l’autobus” — prende l’autobus.', pt: '“Prende l’autobus” — ele pega o ônibus.', es: '“Prende l’autobus” — toma el autobús.', fr: '“Prende l’autobus” — il prend le bus.', de: '“Prende l’autobus” — er nimmt den Bus.' }
      },
      {
        id: 'lis-everyday-a1-1-q4',
        prompt: { en: 'What does he eat at noon?', it: 'Che cosa mangia a mezzogiorno?', pt: 'O que ele come ao meio-dia?', es: '¿Qué come a mediodía?', fr: 'Que mange-t-il à midi ?', de: 'Was isst er mittags?' },
        options: ['Una pizza', 'Un panino', 'Un’insalata'],
        answer: 1,
        explanation: { en: '“Mangia un panino con un amico” — a sandwich.', it: '“Mangia un panino con un amico” — un panino.', pt: '“Mangia un panino con un amico” — um sanduíche.', es: '“Mangia un panino con un amico” — un bocadillo.', fr: '“Mangia un panino con un amico” — un sandwich.', de: '“Mangia un panino con un amico” — ein Brötchen.' }
      }
    ]
  },
  {
    id: 'lis-everyday-a2-1',
    level: 'A2',
    theme: 'everyday',
    title: ['At the market', 'Al mercato'],
    intro: ['Giulia does her shopping. Listen for what she buys and how much.', 'Giulia fa la spesa. Ascolta che cosa compra e quanto.'],
    text: 'Ieri mattina Giulia è andata al mercato. Ha comprato del pane, della frutta e delle verdure. Voleva anche del formaggio, ma era troppo caro, così non l’ha preso. Alla fine ha speso quindici euro. Poi è tornata a casa e ha preparato il pranzo per la famiglia.',
    transcript: [
      'Yesterday morning Giulia went to the market. She bought some bread, some fruit and some vegetables. She also wanted some cheese, but it was too expensive, so she didn’t take it. In the end she spent fifteen euros. Then she went home and made lunch for the family.',
      'Ieri mattina Giulia è andata al mercato. Ha comprato del pane, della frutta e delle verdure. Voleva anche del formaggio, ma era troppo caro, così non l’ha preso. Alla fine ha speso quindici euro. Poi è tornata a casa e ha preparato il pranzo per la famiglia.'
    ],
    glossary: [
      { it: 'fare la spesa', en: 'to do the grocery shopping' },
      { it: 'troppo caro', en: 'too expensive' },
      { it: 'ha speso', en: 'she spent' }
    ],
    questions: [
      {
        id: 'lis-everyday-a2-1-q1',
        prompt: ['When did Giulia go to the market?', 'Quando è andata al mercato Giulia?'],
        options: ['Ieri mattina', 'Ieri sera', 'Stamattina'],
        answer: 0,
        explanation: ['“Ieri mattina Giulia è andata al mercato.”', '“Ieri mattina Giulia è andata al mercato.”']
      },
      {
        id: 'lis-everyday-a2-1-q2',
        prompt: ['Why didn’t she buy the cheese?', 'Perché non ha comprato il formaggio?'],
        options: ['Era troppo caro', 'Non le piaceva', 'Era finito'],
        answer: 0,
        explanation: ['“Era troppo caro, così non l’ha preso.” — too expensive.', '“Era troppo caro, così non l’ha preso.” — troppo caro.']
      },
      {
        id: 'lis-everyday-a2-1-q3',
        prompt: ['How much did she spend?', 'Quanto ha speso?'],
        options: ['Cinque euro', 'Quindici euro', 'Cinquanta euro'],
        answer: 1,
        explanation: ['“Ha speso quindici euro” — fifteen euros.', '“Ha speso quindici euro” — quindici euro.']
      },
      {
        id: 'lis-everyday-a2-1-q4',
        prompt: ['What did she do after returning home?', 'Che cosa ha fatto dopo essere tornata a casa?'],
        options: ['Ha dormito', 'Ha preparato il pranzo', 'Ha guardato la TV'],
        answer: 1,
        explanation: ['“Ha preparato il pranzo per la famiglia.”', '“Ha preparato il pranzo per la famiglia.”']
      }
    ]
  },
  {
    id: 'lis-everyday-b1-1',
    level: 'B1',
    theme: 'everyday',
    title: ['A change of plans', 'Un cambio di programma'],
    intro: ['Listen for the contrast between what usually happens and what happened this time.', 'Ascolta il contrasto tra ciò che succede di solito e ciò che è successo questa volta.'],
    text: 'Di solito la domenica mi alzo tardi e resto a casa a leggere. Ieri, invece, mentre facevo colazione, mi ha telefonato mia sorella. Era felice perché aveva due biglietti per un concerto. Così mi sono vestita in fretta e siamo uscite insieme. Il concerto è stato bellissimo e siamo tornate a casa molto tardi.',
    transcript: [
      'Usually on Sunday I get up late and stay home reading. Yesterday, instead, while I was having breakfast, my sister called me. She was happy because she had two tickets for a concert. So I got dressed quickly and we went out together. The concert was wonderful and we got home very late.',
      'Di solito la domenica mi alzo tardi e resto a casa a leggere. Ieri, invece, mentre facevo colazione, mi ha telefonato mia sorella. Era felice perché aveva due biglietti per un concerto. Così mi sono vestita in fretta e siamo uscite insieme. Il concerto è stato bellissimo e siamo tornate a casa molto tardi.'
    ],
    glossary: [
      { it: 'di solito', en: 'usually' },
      { it: 'invece', en: 'instead / however' },
      { it: 'in fretta', en: 'quickly, in a hurry' }
    ],
    questions: [
      {
        id: 'lis-everyday-b1-1-q1',
        prompt: ['What does the speaker usually do on Sunday?', 'Che cosa fa di solito la domenica chi parla?'],
        options: ['Si alza tardi e legge a casa', 'Va a un concerto', 'Lavora tutto il giorno'],
        answer: 0,
        explanation: ['“Di solito… mi alzo tardi e resto a casa a leggere.”', '“Di solito… mi alzo tardi e resto a casa a leggere.”']
      },
      {
        id: 'lis-everyday-b1-1-q2',
        prompt: ['What was she doing when her sister called?', 'Che cosa stava facendo quando ha telefonato la sorella?'],
        options: ['Dormiva', 'Faceva colazione', 'Usciva di casa'],
        answer: 1,
        explanation: ['“Mentre facevo colazione, mi ha telefonato mia sorella.” The imperfetto marks the ongoing action.', '“Mentre facevo colazione…” L’imperfetto indica l’azione in corso.']
      },
      {
        id: 'lis-everyday-b1-1-q3',
        prompt: ['Why was her sister happy?', 'Perché era felice sua sorella?'],
        options: ['Aveva due biglietti per un concerto', 'Aveva un nuovo lavoro', 'Era in vacanza'],
        answer: 0,
        explanation: ['“Era felice perché aveva due biglietti per un concerto.”', '“Era felice perché aveva due biglietti per un concerto.”']
      },
      {
        id: 'lis-everyday-b1-1-q4',
        prompt: ['How is the speaker most likely? (Listen to the agreement.)', 'Com’è probabilmente chi parla? (Ascolta l’accordo.)'],
        options: ['Un uomo', 'Una donna', 'Non è possibile saperlo'],
        answer: 1,
        explanation: ['“Mi sono vestita… siamo tornate” — the feminine agreement shows the speaker is a woman.', '“Mi sono vestita… siamo tornate” — l’accordo femminile indica una donna.']
      }
    ]
  },

  // ===================== TRAVEL & CITY =====================
  {
    id: 'lis-travel-a1-1',
    level: 'A1',
    theme: 'travel',
    title: { en: 'A day in the city', it: 'Una giornata in città', pt: 'Um dia na cidade', es: 'Un día en la ciudad', fr: 'Une journée en ville', de: 'Ein Tag in der Stadt' },
    intro: {
      en: 'A short trip downtown. Listen for the places visited.',
      it: 'Una breve gita in centro. Ascolta i luoghi visitati.',
      pt: 'Um breve passeio pelo centro. Preste atenção nos lugares visitados.',
      es: 'Una breve excursión al centro. Fíjate en los lugares visitados.',
      fr: 'Une courte sortie au centre-ville. Écoute les lieux visités.',
      de: 'Ein kurzer Ausflug in die Innenstadt. Achte auf die besuchten Orte.'
    },
    text: 'Oggi vado in centro con Marco. Prima andiamo al museo. Poi mangiamo una pizza in un ristorante. Dopo pranzo visitiamo una chiesa antica. La sera prendiamo un gelato e torniamo a casa in treno.',
    transcript: {
      en: 'Today I go downtown with Marco. First we go to the museum. Then we eat a pizza in a restaurant. After lunch we visit an old church. In the evening we get an ice cream and go home by train.',
      it: 'Oggi vado in centro con Marco. Prima andiamo al museo. Poi mangiamo una pizza in un ristorante. Dopo pranzo visitiamo una chiesa antica. La sera prendiamo un gelato e torniamo a casa in treno.',
      pt: 'Hoje vou ao centro com o Marco. Primeiro vamos ao museu. Depois comemos uma pizza num restaurante. Após o almoço visitamos uma igreja antiga. À noite tomamos um sorvete e voltamos para casa de trem.',
      es: 'Hoy voy al centro con Marco. Primero vamos al museo. Luego comemos una pizza en un restaurante. Después del almuerzo visitamos una iglesia antigua. Por la noche tomamos un helado y volvemos a casa en tren.',
      fr: 'Aujourd’hui je vais au centre avec Marco. D’abord nous allons au musée. Puis nous mangeons une pizza dans un restaurant. Après le déjeuner nous visitons une vieille église. Le soir nous prenons une glace et nous rentrons en train.',
      de: 'Heute gehe ich mit Marco in die Innenstadt. Zuerst gehen wir ins Museum. Dann essen wir eine Pizza in einem Restaurant. Nach dem Mittagessen besuchen wir eine alte Kirche. Am Abend holen wir uns ein Eis und fahren mit dem Zug nach Hause.'
    },
    glossary: [
      { it: 'in centro', en: 'downtown / in the city centre', pt: 'no centro', es: 'en el centro', fr: 'au centre-ville', de: 'in der Innenstadt' },
      { it: 'chiesa antica', en: 'old church', pt: 'igreja antiga', es: 'iglesia antigua', fr: 'vieille église', de: 'alte Kirche' },
      { it: 'in treno', en: 'by train', pt: 'de trem', es: 'en tren', fr: 'en train', de: 'mit dem Zug' }
    ],
    questions: [
      {
        id: 'lis-travel-a1-1-q1',
        prompt: { en: 'Where do they go first?', it: 'Dove vanno prima?', pt: 'Aonde vão primeiro?', es: '¿Adónde van primero?', fr: 'Où vont-ils d’abord ?', de: 'Wohin gehen sie zuerst?' },
        options: ['Al museo', 'Al ristorante', 'Alla chiesa'],
        answer: 0,
        explanation: { en: '“Prima andiamo al museo.”', it: '“Prima andiamo al museo.”', pt: '“Prima andiamo al museo” — ao museu.', es: '“Prima andiamo al museo” — al museo.', fr: '“Prima andiamo al museo” — au musée.', de: '“Prima andiamo al museo” — ins Museum.' }
      },
      {
        id: 'lis-travel-a1-1-q2',
        prompt: { en: 'What do they eat?', it: 'Che cosa mangiano?', pt: 'O que eles comem?', es: '¿Qué comen?', fr: 'Que mangent-ils ?', de: 'Was essen sie?' },
        options: ['Un panino', 'Una pizza', 'Una pasta'],
        answer: 1,
        explanation: { en: '“Mangiamo una pizza in un ristorante.”', it: '“Mangiamo una pizza in un ristorante.”', pt: '“Mangiamo una pizza” — uma pizza.', es: '“Mangiamo una pizza” — una pizza.', fr: '“Mangiamo una pizza” — une pizza.', de: '“Mangiamo una pizza” — eine Pizza.' }
      },
      {
        id: 'lis-travel-a1-1-q3',
        prompt: { en: 'How do they go home?', it: 'Come tornano a casa?', pt: 'Como voltam para casa?', es: '¿Cómo vuelven a casa?', fr: 'Comment rentrent-ils ?', de: 'Wie fahren sie nach Hause?' },
        options: ['In autobus', 'In treno', 'A piedi'],
        answer: 1,
        explanation: { en: '“Torniamo a casa in treno.”', it: '“Torniamo a casa in treno.”', pt: '“Torniamo a casa in treno” — de trem.', es: '“Torniamo a casa in treno” — en tren.', fr: '“Torniamo a casa in treno” — en train.', de: '“Torniamo a casa in treno” — mit dem Zug.' }
      }
    ]
  },
  {
    id: 'lis-travel-a2-1',
    level: 'A2',
    theme: 'travel',
    title: ['The trip to Ravenna', 'La gita a Ravenna'],
    intro: ['A class trip. Listen for the schedule and what they saw.', 'Una gita scolastica. Ascolta il programma e che cosa hanno visto.'],
    text: 'Sabato scorso la nostra classe è andata a Ravenna. Siamo partiti in pullman alle sette e mezza. Appena arrivati, abbiamo visitato le basiliche famose e la tomba di Dante. Nel pomeriggio siamo andati al mare e abbiamo comprato dei souvenir. Siamo tornati a casa alle dieci di sera, molto stanchi ma contenti.',
    transcript: [
      'Last Saturday our class went to Ravenna. We left by coach at half past seven. As soon as we arrived, we visited the famous basilicas and Dante’s tomb. In the afternoon we went to the sea and bought some souvenirs. We got home at ten in the evening, very tired but happy.',
      'Sabato scorso la nostra classe è andata a Ravenna. Siamo partiti in pullman alle sette e mezza. Appena arrivati, abbiamo visitato le basiliche famose e la tomba di Dante. Nel pomeriggio siamo andati al mare e abbiamo comprato dei souvenir. Siamo tornati a casa alle dieci di sera, molto stanchi ma contenti.'
    ],
    glossary: [
      { it: 'in pullman', en: 'by coach' },
      { it: 'appena arrivati', en: 'as soon as we arrived' },
      { it: 'souvenir', en: 'souvenirs' }
    ],
    questions: [
      {
        id: 'lis-travel-a2-1-q1',
        prompt: ['At what time did they leave?', 'A che ora sono partiti?'],
        options: ['Alle sette e mezza', 'Alle otto e mezza', 'Alle dieci'],
        answer: 0,
        explanation: ['“Siamo partiti in pullman alle sette e mezza.”', '“Siamo partiti in pullman alle sette e mezza.”']
      },
      {
        id: 'lis-travel-a2-1-q2',
        prompt: ['Whose tomb did they visit?', 'Di chi hanno visitato la tomba?'],
        options: ['Di Dante', 'Di Petrarca', 'Di Leonardo'],
        answer: 0,
        explanation: ['“Abbiamo visitato… la tomba di Dante.”', '“Abbiamo visitato… la tomba di Dante.”']
      },
      {
        id: 'lis-travel-a2-1-q3',
        prompt: ['What did they do in the afternoon?', 'Che cosa hanno fatto nel pomeriggio?'],
        options: ['Sono andati al mare', 'Hanno visitato un museo', 'Hanno mangiato in pizzeria'],
        answer: 0,
        explanation: ['“Nel pomeriggio siamo andati al mare e abbiamo comprato dei souvenir.”', '“Nel pomeriggio siamo andati al mare…”']
      },
      {
        id: 'lis-travel-a2-1-q4',
        prompt: ['How did they feel at the end?', 'Come si sentivano alla fine?'],
        options: ['Stanchi ma contenti', 'Annoiati', 'Arrabbiati'],
        answer: 0,
        explanation: ['“Molto stanchi ma contenti.”', '“Molto stanchi ma contenti.”']
      }
    ]
  },
  {
    id: 'lis-travel-b1-1',
    level: 'B1',
    theme: 'travel',
    title: ['Lost in the station', 'Persi in stazione'],
    intro: ['A small travel problem and how it was solved. Listen for the reason for the delay.', 'Un piccolo problema di viaggio e come è stato risolto. Ascolta il motivo del ritardo.'],
    text: 'Mentre aspettavamo il treno per Firenze, abbiamo sentito un annuncio: il treno era in ritardo di quaranta minuti a causa di uno sciopero. Allora abbiamo deciso di prendere un caffè al bar della stazione. Un signore gentile ci ha spiegato che il nostro binario era cambiato. Per fortuna lo abbiamo capito in tempo e non abbiamo perso il treno.',
    transcript: [
      'While we were waiting for the train to Florence, we heard an announcement: the train was forty minutes late because of a strike. So we decided to have a coffee at the station bar. A kind gentleman explained to us that our platform had changed. Luckily we understood it in time and didn’t miss the train.',
      'Mentre aspettavamo il treno per Firenze, abbiamo sentito un annuncio: il treno era in ritardo di quaranta minuti a causa di uno sciopero. Allora abbiamo deciso di prendere un caffè al bar della stazione. Un signore gentile ci ha spiegato che il nostro binario era cambiato. Per fortuna lo abbiamo capito in tempo e non abbiamo perso il treno.'
    ],
    glossary: [
      { it: 'in ritardo', en: 'late / delayed' },
      { it: 'sciopero', en: 'strike' },
      { it: 'binario', en: 'platform / track' }
    ],
    questions: [
      {
        id: 'lis-travel-b1-1-q1',
        prompt: ['Where were they going?', 'Dove stavano andando?'],
        options: ['A Firenze', 'A Roma', 'A Ravenna'],
        answer: 0,
        explanation: ['“Il treno per Firenze” — to Florence.', '“Il treno per Firenze” — a Firenze.']
      },
      {
        id: 'lis-travel-b1-1-q2',
        prompt: ['Why was the train late?', 'Perché il treno era in ritardo?'],
        options: ['Per il maltempo', 'A causa di uno sciopero', 'Per un guasto'],
        answer: 1,
        explanation: ['“In ritardo… a causa di uno sciopero.”', '“In ritardo… a causa di uno sciopero.”']
      },
      {
        id: 'lis-travel-b1-1-q3',
        prompt: ['What did the kind gentleman tell them?', 'Che cosa ha detto il signore gentile?'],
        options: ['Che il binario era cambiato', 'Che il treno era cancellato', 'Che dovevano pagare di nuovo'],
        answer: 0,
        explanation: ['“Il nostro binario era cambiato.”', '“Il nostro binario era cambiato.”']
      },
      {
        id: 'lis-travel-b1-1-q4',
        prompt: ['Did they catch the train?', 'Hanno preso il treno?'],
        options: ['Sì, in tempo', 'No, l’hanno perso', 'Hanno preso un altro treno'],
        answer: 0,
        explanation: ['“Non abbiamo perso il treno” — they did not miss it.', '“Non abbiamo perso il treno” — non lo hanno perso.']
      }
    ]
  },

  // ===================== WORK & EMAIL =====================
  {
    id: 'lis-work-a1-1',
    level: 'A1',
    theme: 'work',
    title: { en: 'A phone call to the office', it: 'Una telefonata in ufficio', pt: 'Um telefonema para o escritório', es: 'Una llamada a la oficina', fr: 'Un appel au bureau', de: 'Ein Anruf im Büro' },
    intro: {
      en: 'A short, simple work call. Listen for the names and the time.',
      it: 'Una breve e semplice telefonata di lavoro. Ascolta i nomi e l’orario.',
      pt: 'Um telefonema de trabalho curto e simples. Preste atenção nos nomes e no horário.',
      es: 'Una llamada de trabajo breve y sencilla. Fíjate en los nombres y en la hora.',
      fr: 'Un appel professionnel court et simple. Écoute les noms et l’heure.',
      de: 'Ein kurzer, einfacher Arbeitsanruf. Achte auf die Namen und die Uhrzeit.'
    },
    text: 'Buongiorno, sono Anna. Vorrei parlare con il signor Rossi. Oggi non posso venire in ufficio perché sto male. Torno al lavoro domani mattina alle nove. Grazie e buona giornata.',
    transcript: {
      en: 'Good morning, I’m Anna. I would like to speak with Mr Rossi. Today I can’t come to the office because I’m unwell. I’ll be back at work tomorrow morning at nine. Thank you and have a good day.',
      it: 'Buongiorno, sono Anna. Vorrei parlare con il signor Rossi. Oggi non posso venire in ufficio perché sto male. Torno al lavoro domani mattina alle nove. Grazie e buona giornata.',
      pt: 'Bom dia, sou a Anna. Gostaria de falar com o senhor Rossi. Hoje não posso ir ao escritório porque estou passando mal. Volto ao trabalho amanhã de manhã às nove. Obrigada e bom dia.',
      es: 'Buenos días, soy Anna. Quisiera hablar con el señor Rossi. Hoy no puedo ir a la oficina porque me siento mal. Vuelvo al trabajo mañana por la mañana a las nueve. Gracias y buen día.',
      fr: 'Bonjour, je suis Anna. Je voudrais parler à Monsieur Rossi. Aujourd’hui je ne peux pas venir au bureau parce que je ne me sens pas bien. Je reviens au travail demain matin à neuf heures. Merci et bonne journée.',
      de: 'Guten Morgen, ich bin Anna. Ich möchte mit Herrn Rossi sprechen. Heute kann ich nicht ins Büro kommen, weil es mir schlecht geht. Ich bin morgen früh um neun wieder bei der Arbeit. Danke und schönen Tag.'
    },
    glossary: [
      { it: 'sto male', en: 'I’m unwell', pt: 'estou passando mal', es: 'me siento mal', fr: 'je ne me sens pas bien', de: 'mir geht es schlecht' },
      { it: 'in ufficio', en: 'at/to the office', pt: 'no/ao escritório', es: 'en/a la oficina', fr: 'au bureau', de: 'im/ins Büro' },
      { it: 'buona giornata', en: 'have a good day', pt: 'tenha um bom dia', es: 'buen día', fr: 'bonne journée', de: 'schönen Tag' }
    ],
    questions: [
      {
        id: 'lis-work-a1-1-q1',
        prompt: { en: 'Who is calling?', it: 'Chi telefona?', pt: 'Quem está ligando?', es: '¿Quién llama?', fr: 'Qui téléphone ?', de: 'Wer ruft an?' },
        options: ['Anna', 'Il signor Rossi', 'Maria'],
        answer: 0,
        explanation: { en: '“Sono Anna.”', it: '“Sono Anna.”', pt: '“Sono Anna” — sou a Anna.', es: '“Sono Anna” — soy Anna.', fr: '“Sono Anna” — je suis Anna.', de: '“Sono Anna” — ich bin Anna.' }
      },
      {
        id: 'lis-work-a1-1-q2',
        prompt: { en: 'Why can’t she come to the office?', it: 'Perché non può venire in ufficio?', pt: 'Por que ela não pode ir ao escritório?', es: '¿Por qué no puede ir a la oficina?', fr: 'Pourquoi ne peut-elle pas venir au bureau ?', de: 'Warum kann sie nicht ins Büro kommen?' },
        options: ['Perché sta male', 'Perché è in vacanza', 'Perché è in ritardo'],
        answer: 0,
        explanation: { en: '“Non posso venire… perché sto male.”', it: '“Non posso venire… perché sto male.”', pt: '“…perché sto male” — porque está passando mal.', es: '“…perché sto male” — porque se siente mal.', fr: '“…perché sto male” — parce qu’elle ne se sent pas bien.', de: '“…perché sto male” — weil es ihr schlecht geht.' }
      },
      {
        id: 'lis-work-a1-1-q3',
        prompt: { en: 'When will she be back at work?', it: 'Quando torna al lavoro?', pt: 'Quando ela volta ao trabalho?', es: '¿Cuándo vuelve al trabajo?', fr: 'Quand revient-elle au travail ?', de: 'Wann ist sie wieder bei der Arbeit?' },
        options: ['Oggi pomeriggio', 'Domani mattina', 'Lunedì prossimo'],
        answer: 1,
        explanation: { en: '“Torno al lavoro domani mattina alle nove.”', it: '“Torno al lavoro domani mattina alle nove.”', pt: '“…domani mattina alle nove” — amanhã de manhã.', es: '“…domani mattina alle nove” — mañana por la mañana.', fr: '“…domani mattina alle nove” — demain matin.', de: '“…domani mattina alle nove” — morgen früh.' }
      }
    ]
  },
  {
    id: 'lis-work-a2-1',
    level: 'A2',
    theme: 'work',
    title: ['A job advert', 'Un annuncio di lavoro'],
    intro: ['A short recruitment message. Listen for the role and the hours.', 'Un breve annuncio di lavoro. Ascolta il ruolo e gli orari.'],
    text: 'Cerchiamo personale serio e affidabile per i servizi di pulizia presso aziende, hotel e supermercati. Offriamo orari flessibili e un ambiente di lavoro sereno. Non è necessaria molta esperienza. Se sei interessato, scrivi un’email con il tuo nome e il tuo numero di telefono.',
    transcript: [
      'We are looking for serious and reliable staff for cleaning services at businesses, hotels and supermarkets. We offer flexible hours and a calm working environment. Much experience is not required. If you are interested, write an email with your name and your phone number.',
      'Cerchiamo personale serio e affidabile per i servizi di pulizia presso aziende, hotel e supermercati. Offriamo orari flessibili e un ambiente di lavoro sereno. Non è necessaria molta esperienza. Se sei interessato, scrivi un’email con il tuo nome e il tuo numero di telefono.'
    ],
    glossary: [
      { it: 'personale affidabile', en: 'reliable staff' },
      { it: 'orari flessibili', en: 'flexible hours' },
      { it: 'ambiente sereno', en: 'calm environment' }
    ],
    questions: [
      {
        id: 'lis-work-a2-1-q1',
        prompt: ['What kind of work is offered?', 'Che tipo di lavoro si offre?'],
        options: ['Servizi di pulizia', 'Lavoro in cucina', 'Lavoro d’ufficio'],
        answer: 0,
        explanation: ['“Servizi di pulizia presso aziende, hotel e supermercati.”', '“Servizi di pulizia presso aziende, hotel e supermercati.”']
      },
      {
        id: 'lis-work-a2-1-q2',
        prompt: ['What do they offer?', 'Che cosa offrono?'],
        options: ['Orari flessibili', 'Uno stipendio altissimo', 'Un’auto aziendale'],
        answer: 0,
        explanation: ['“Offriamo orari flessibili e un ambiente di lavoro sereno.”', '“Offriamo orari flessibili…”']
      },
      {
        id: 'lis-work-a2-1-q3',
        prompt: ['Is a lot of experience required?', 'Serve molta esperienza?'],
        options: ['No', 'Sì, molta', 'Sì, cinque anni'],
        answer: 0,
        explanation: ['“Non è necessaria molta esperienza.”', '“Non è necessaria molta esperienza.”']
      },
      {
        id: 'lis-work-a2-1-q4',
        prompt: ['How should an interested person reply?', 'Come deve rispondere chi è interessato?'],
        options: ['Con un’email', 'Di persona', 'Con un fax'],
        answer: 0,
        explanation: ['“Scrivi un’email con il tuo nome e il tuo numero.”', '“Scrivi un’email…”']
      }
    ]
  },
  {
    id: 'lis-work-b1-1',
    level: 'B1',
    theme: 'work',
    title: ['Replying to the recruiter', 'La risposta alla selezionatrice'],
    intro: ['A candidate answers a recruiter. Listen for which skills he has and which he lacks.', 'Un candidato risponde a una selezionatrice. Ascolta quali competenze ha e quali no.'],
    text: 'Cara Nicoletta, grazie per avermi contattato. Dopo aver letto i requisiti, posso dire di coprirne circa il novanta per cento. Ho una buona esperienza con i sistemi di sicurezza, ma non ho esperienza approfondita con le piattaforme EDR. Inoltre, il mio livello di italiano è ancora intermedio. A parte questo, credo di essere adatto alla posizione. Mi faccia sapere se desidera procedere.',
    transcript: [
      'Dear Nicoletta, thank you for contacting me. After reading the requirements, I can say I cover about ninety per cent of them. I have good experience with security systems, but I don’t have in-depth experience with EDR platforms. Moreover, my level of Italian is still intermediate. Apart from that, I believe I am suitable for the position. Let me know if you wish to proceed.',
      'Cara Nicoletta, grazie per avermi contattato. Dopo aver letto i requisiti, posso dire di coprirne circa il novanta per cento. Ho una buona esperienza con i sistemi di sicurezza, ma non ho esperienza approfondita con le piattaforme EDR. Inoltre, il mio livello di italiano è ancora intermedio. A parte questo, credo di essere adatto alla posizione. Mi faccia sapere se desidera procedere.'
    ],
    glossary: [
      { it: 'requisiti', en: 'requirements' },
      { it: 'coprirne', en: 'to cover (some) of them (ne = of them)' },
      { it: 'adatto alla posizione', en: 'suitable for the position' }
    ],
    questions: [
      {
        id: 'lis-work-b1-1-q1',
        prompt: ['What percentage of the requirements does he cover?', 'Quale percentuale dei requisiti copre?'],
        options: ['Circa il 90%', 'Il 100%', 'Circa il 50%'],
        answer: 0,
        explanation: ['“Posso dire di coprirne circa il novanta per cento.”', '“Posso dire di coprirne circa il novanta per cento.”']
      },
      {
        id: 'lis-work-b1-1-q2',
        prompt: ['Which experience does he lack?', 'Quale esperienza non ha?'],
        options: ['Con i sistemi di sicurezza', 'Con le piattaforme EDR', 'Con il lavoro di squadra'],
        answer: 1,
        explanation: ['“Non ho esperienza approfondita con le piattaforme EDR.”', '“Non ho esperienza approfondita con le piattaforme EDR.”']
      },
      {
        id: 'lis-work-b1-1-q3',
        prompt: ['What does he say about his Italian?', 'Che cosa dice del suo italiano?'],
        options: ['È madrelingua', 'È ancora intermedio', 'Non lo parla'],
        answer: 1,
        explanation: ['“Il mio livello di italiano è ancora intermedio.”', '“Il mio livello di italiano è ancora intermedio.”']
      },
      {
        id: 'lis-work-b1-1-q4',
        prompt: ['What does “coprirne” contain?', 'Che cosa contiene “coprirne”?'],
        options: ['Il pronome ne (“of them”)', 'Il pronome lo', 'Nessun pronome'],
        answer: 0,
        explanation: ['Coprirne = coprire + ne; ne means “of them” (the requirements).', 'Coprirne = coprire + ne; ne significa “di essi” (i requisiti).']
      }
    ]
  }
];

/** All passages for a given level, in theme order. */
export const getListeningPassages = (level: GrammarLevel, theme?: ListeningTheme): ListeningPassage[] =>
  ITALIAN_LISTENING_PASSAGES.filter(p => p.level === level && (!theme || p.theme === theme));
