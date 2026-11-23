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
    title: { en: 'At the market', it: 'Al mercato', pt: 'No mercado', es: 'En el mercado', fr: 'Au marché', de: 'Auf dem Markt' },
    intro: {
      en: 'Giulia does her shopping. Listen for what she buys and how much.',
      it: 'Giulia fa la spesa. Ascolta che cosa compra e quanto.',
      pt: 'Giulia faz as compras. Preste atenção no que ela compra e quanto gasta.',
      es: 'Giulia hace la compra. Fíjate en qué compra y cuánto gasta.',
      fr: 'Giulia fait ses courses. Écoute ce qu’elle achète et combien.',
      de: 'Giulia macht ihre Einkäufe. Achte darauf, was sie kauft und wie viel.'
    },
    text: 'Ieri mattina Giulia è andata al mercato. Ha comprato del pane, della frutta e delle verdure. Voleva anche del formaggio, ma era troppo caro, così non l’ha preso. Alla fine ha speso quindici euro. Poi è tornata a casa e ha preparato il pranzo per la famiglia.',
    transcript: {
      en: 'Yesterday morning Giulia went to the market. She bought some bread, some fruit and some vegetables. She also wanted some cheese, but it was too expensive, so she didn’t take it. In the end she spent fifteen euros. Then she went home and made lunch for the family.',
      it: 'Ieri mattina Giulia è andata al mercato. Ha comprato del pane, della frutta e delle verdure. Voleva anche del formaggio, ma era troppo caro, così non l’ha preso. Alla fine ha speso quindici euro. Poi è tornata a casa e ha preparato il pranzo per la famiglia.',
      pt: 'Ontem de manhã, Giulia foi ao mercado. Comprou pão, frutas e verduras. Também queria queijo, mas estava caro demais, então não o levou. No fim, gastou quinze euros. Depois voltou para casa e preparou o almoço para a família.',
      es: 'Ayer por la mañana Giulia fue al mercado. Compró pan, fruta y verduras. También quería queso, pero era demasiado caro, así que no lo compró. Al final gastó quince euros. Luego volvió a casa y preparó el almuerzo para la familia.',
      fr: 'Hier matin, Giulia est allée au marché. Elle a acheté du pain, des fruits et des légumes. Elle voulait aussi du fromage, mais il était trop cher, alors elle ne l’a pas pris. À la fin, elle a dépensé quinze euros. Puis elle est rentrée et a préparé le déjeuner pour la famille.',
      de: 'Gestern Morgen ging Giulia auf den Markt. Sie kaufte Brot, Obst und Gemüse. Sie wollte auch Käse, aber er war zu teuer, also nahm sie ihn nicht. Am Ende gab sie fünfzehn Euro aus. Dann ging sie nach Hause und bereitete das Mittagessen für die Familie zu.'
    },
    glossary: [
      { it: 'fare la spesa', en: 'to do the grocery shopping', pt: 'fazer as compras', es: 'hacer la compra', fr: 'faire les courses', de: 'einkaufen' },
      { it: 'troppo caro', en: 'too expensive', pt: 'caro demais', es: 'demasiado caro', fr: 'trop cher', de: 'zu teuer' },
      { it: 'ha speso', en: 'she spent', pt: 'ela gastou', es: 'gastó', fr: 'elle a dépensé', de: 'sie gab aus' }
    ],
    questions: [
      {
        id: 'lis-everyday-a2-1-q1',
        prompt: { en: 'When did Giulia go to the market?', it: 'Quando è andata al mercato Giulia?', pt: 'Quando Giulia foi ao mercado?', es: '¿Cuándo fue Giulia al mercado?', fr: 'Quand Giulia est-elle allée au marché ?', de: 'Wann ging Giulia auf den Markt?' },
        options: ['Ieri mattina', 'Ieri sera', 'Stamattina'],
        answer: 0,
        explanation: { en: '“Ieri mattina Giulia è andata al mercato.”', it: '“Ieri mattina Giulia è andata al mercato.”', pt: '“Ieri mattina…” — ontem de manhã.', es: '“Ieri mattina…” — ayer por la mañana.', fr: '“Ieri mattina…” — hier matin.', de: '“Ieri mattina…” — gestern Morgen.' }
      },
      {
        id: 'lis-everyday-a2-1-q2',
        prompt: { en: 'Why didn’t she buy the cheese?', it: 'Perché non ha comprato il formaggio?', pt: 'Por que ela não comprou o queijo?', es: '¿Por qué no compró el queso?', fr: 'Pourquoi n’a-t-elle pas acheté le fromage ?', de: 'Warum kaufte sie den Käse nicht?' },
        options: ['Era troppo caro', 'Non le piaceva', 'Era finito'],
        answer: 0,
        explanation: { en: '“Era troppo caro, così non l’ha preso.” — too expensive.', it: '“Era troppo caro, così non l’ha preso.” — troppo caro.', pt: '“Era troppo caro…” — caro demais.', es: '“Era troppo caro…” — demasiado caro.', fr: '“Era troppo caro…” — trop cher.', de: '“Era troppo caro…” — zu teuer.' }
      },
      {
        id: 'lis-everyday-a2-1-q3',
        prompt: { en: 'How much did she spend?', it: 'Quanto ha speso?', pt: 'Quanto ela gastou?', es: '¿Cuánto gastó?', fr: 'Combien a-t-elle dépensé ?', de: 'Wie viel gab sie aus?' },
        options: ['Cinque euro', 'Quindici euro', 'Cinquanta euro'],
        answer: 1,
        explanation: { en: '“Ha speso quindici euro” — fifteen euros.', it: '“Ha speso quindici euro” — quindici euro.', pt: '“Ha speso quindici euro” — quinze euros.', es: '“Ha speso quindici euro” — quince euros.', fr: '“Ha speso quindici euro” — quinze euros.', de: '“Ha speso quindici euro” — fünfzehn Euro.' }
      },
      {
        id: 'lis-everyday-a2-1-q4',
        prompt: { en: 'What did she do after returning home?', it: 'Che cosa ha fatto dopo essere tornata a casa?', pt: 'O que ela fez depois de voltar para casa?', es: '¿Qué hizo después de volver a casa?', fr: 'Qu’a-t-elle fait après être rentrée ?', de: 'Was machte sie, nachdem sie nach Hause zurückgekehrt war?' },
        options: ['Ha dormito', 'Ha preparato il pranzo', 'Ha guardato la TV'],
        answer: 1,
        explanation: { en: '“Ha preparato il pranzo per la famiglia.”', it: '“Ha preparato il pranzo per la famiglia.”', pt: '“Ha preparato il pranzo…” — preparou o almoço.', es: '“Ha preparato il pranzo…” — preparó el almuerzo.', fr: '“Ha preparato il pranzo…” — elle a préparé le déjeuner.', de: '“Ha preparato il pranzo…” — sie bereitete das Mittagessen zu.' }
      }
    ]
  },
  {
    id: 'lis-everyday-b1-1',
    level: 'B1',
    theme: 'everyday',
    title: { en: 'A change of plans', it: 'Un cambio di programma', pt: 'Uma mudança de planos', es: 'Un cambio de planes', fr: 'Un changement de programme', de: 'Eine Planänderung' },
    intro: {
      en: 'Listen for the contrast between what usually happens and what happened this time.',
      it: 'Ascolta il contrasto tra ciò che succede di solito e ciò che è successo questa volta.',
      pt: 'Preste atenção no contraste entre o que costuma acontecer e o que aconteceu desta vez.',
      es: 'Fíjate en el contraste entre lo que suele pasar y lo que pasó esta vez.',
      fr: 'Écoute le contraste entre ce qui se passe d’habitude et ce qui s’est passé cette fois.',
      de: 'Achte auf den Gegensatz zwischen dem, was normalerweise passiert, und dem, was diesmal passiert ist.'
    },
    text: 'Di solito la domenica mi alzo tardi e resto a casa a leggere. Ieri, invece, mentre facevo colazione, mi ha telefonato mia sorella. Era felice perché aveva due biglietti per un concerto. Così mi sono vestita in fretta e siamo uscite insieme. Il concerto è stato bellissimo e siamo tornate a casa molto tardi.',
    transcript: {
      en: 'Usually on Sunday I get up late and stay home reading. Yesterday, instead, while I was having breakfast, my sister called me. She was happy because she had two tickets for a concert. So I got dressed quickly and we went out together. The concert was wonderful and we got home very late.',
      it: 'Di solito la domenica mi alzo tardi e resto a casa a leggere. Ieri, invece, mentre facevo colazione, mi ha telefonato mia sorella. Era felice perché aveva due biglietti per un concerto. Così mi sono vestita in fretta e siamo uscite insieme. Il concerto è stato bellissimo e siamo tornate a casa molto tardi.',
      pt: 'Normalmente, aos domingos eu me levanto tarde e fico em casa lendo. Ontem, porém, enquanto eu tomava o café da manhã, minha irmã me ligou. Estava feliz porque tinha dois ingressos para um show. Então me vesti depressa e saímos juntas. O show foi lindíssimo e voltamos para casa muito tarde.',
      es: 'Normalmente los domingos me levanto tarde y me quedo en casa leyendo. Ayer, en cambio, mientras desayunaba, me llamó mi hermana. Estaba contenta porque tenía dos entradas para un concierto. Así que me vestí deprisa y salimos juntas. El concierto fue precioso y volvimos a casa muy tarde.',
      fr: 'D’habitude, le dimanche je me lève tard et je reste à la maison à lire. Hier, en revanche, pendant que je prenais le petit-déjeuner, ma sœur m’a téléphoné. Elle était contente parce qu’elle avait deux billets pour un concert. Alors je me suis habillée en vitesse et nous sommes sorties ensemble. Le concert était magnifique et nous sommes rentrées très tard.',
      de: 'Normalerweise stehe ich sonntags spät auf und bleibe zu Hause und lese. Gestern aber, während ich frühstückte, rief mich meine Schwester an. Sie freute sich, weil sie zwei Karten für ein Konzert hatte. Also zog ich mich schnell an und wir gingen zusammen aus. Das Konzert war wunderschön und wir kamen sehr spät nach Hause.'
    },
    glossary: [
      { it: 'di solito', en: 'usually', pt: 'normalmente', es: 'normalmente', fr: 'd’habitude', de: 'normalerweise' },
      { it: 'invece', en: 'instead / however', pt: 'porém / em vez disso', es: 'en cambio', fr: 'en revanche', de: 'hingegen' },
      { it: 'in fretta', en: 'quickly, in a hurry', pt: 'depressa', es: 'deprisa', fr: 'en vitesse', de: 'schnell, in Eile' }
    ],
    questions: [
      {
        id: 'lis-everyday-b1-1-q1',
        prompt: { en: 'What does the speaker usually do on Sunday?', it: 'Che cosa fa di solito la domenica chi parla?', pt: 'O que a pessoa costuma fazer aos domingos?', es: '¿Qué suele hacer los domingos quien habla?', fr: 'Que fait d’habitude le dimanche la personne qui parle ?', de: 'Was macht die sprechende Person sonntags normalerweise?' },
        options: ['Si alza tardi e legge a casa', 'Va a un concerto', 'Lavora tutto il giorno'],
        answer: 0,
        explanation: { en: '“Di solito… mi alzo tardi e resto a casa a leggere.”', it: '“Di solito… mi alzo tardi e resto a casa a leggere.”', pt: '“Di solito… mi alzo tardi…” — levanta tarde e lê em casa.', es: '“Di solito… mi alzo tardi…” — se levanta tarde y lee en casa.', fr: '“Di solito… mi alzo tardi…” — elle se lève tard et lit à la maison.', de: '“Di solito… mi alzo tardi…” — spät aufstehen und zu Hause lesen.' }
      },
      {
        id: 'lis-everyday-b1-1-q2',
        prompt: { en: 'What was she doing when her sister called?', it: 'Che cosa stava facendo quando ha telefonato la sorella?', pt: 'O que ela estava fazendo quando a irmã ligou?', es: '¿Qué estaba haciendo cuando la llamó su hermana?', fr: 'Que faisait-elle quand sa sœur a téléphoné ?', de: 'Was machte sie, als ihre Schwester anrief?' },
        options: ['Dormiva', 'Faceva colazione', 'Usciva di casa'],
        answer: 1,
        explanation: { en: '“Mentre facevo colazione, mi ha telefonato mia sorella.” The imperfetto marks the ongoing action.', it: '“Mentre facevo colazione…” L’imperfetto indica l’azione in corso.', pt: '“Mentre facevo colazione…” O imperfetto marca a ação em curso (tomava o café da manhã).', es: '“Mentre facevo colazione…” El imperfetto marca la acción en curso (desayunaba).', fr: '“Mentre facevo colazione…” L’imparfait marque l’action en cours (elle prenait le petit-déjeuner).', de: '“Mentre facevo colazione…” Das Imperfetto markiert die laufende Handlung (sie frühstückte).' }
      },
      {
        id: 'lis-everyday-b1-1-q3',
        prompt: { en: 'Why was her sister happy?', it: 'Perché era felice sua sorella?', pt: 'Por que a irmã estava feliz?', es: '¿Por qué estaba contenta su hermana?', fr: 'Pourquoi sa sœur était-elle contente ?', de: 'Warum war ihre Schwester glücklich?' },
        options: ['Aveva due biglietti per un concerto', 'Aveva un nuovo lavoro', 'Era in vacanza'],
        answer: 0,
        explanation: { en: '“Era felice perché aveva due biglietti per un concerto.”', it: '“Era felice perché aveva due biglietti per un concerto.”', pt: '“…due biglietti per un concerto” — dois ingressos para um show.', es: '“…due biglietti per un concerto” — dos entradas para un concierto.', fr: '“…due biglietti per un concerto” — deux billets pour un concert.', de: '“…due biglietti per un concerto” — zwei Konzertkarten.' }
      },
      {
        id: 'lis-everyday-b1-1-q4',
        prompt: { en: 'How is the speaker most likely? (Listen to the agreement.)', it: 'Com’è probabilmente chi parla? (Ascolta l’accordo.)', pt: 'Quem fala é provavelmente quem? (Ouça a concordância.)', es: '¿Quién habla probablemente? (Escucha la concordancia.)', fr: 'Qui parle, probablement ? (Écoute l’accord.)', de: 'Wer spricht wahrscheinlich? (Achte auf die Angleichung.)' },
        options: ['Un uomo', 'Una donna', 'Non è possibile saperlo'],
        answer: 1,
        explanation: { en: '“Mi sono vestita… siamo tornate” — the feminine agreement shows the speaker is a woman.', it: '“Mi sono vestita… siamo tornate” — l’accordo femminile indica una donna.', pt: '“Mi sono vestita… siamo tornate” — a concordância feminina indica uma mulher.', es: '“Mi sono vestita… siamo tornate” — la concordancia femenina indica una mujer.', fr: '“Mi sono vestita… siamo tornate” — l’accord au féminin indique une femme.', de: '“Mi sono vestita… siamo tornate” — die weibliche Angleichung zeigt eine Frau an.' }
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
    title: { en: 'The trip to Ravenna', it: 'La gita a Ravenna', pt: 'A excursão a Ravena', es: 'La excursión a Rávena', fr: 'La sortie à Ravenne', de: 'Der Ausflug nach Ravenna' },
    intro: {
      en: 'A class trip. Listen for the schedule and what they saw.',
      it: 'Una gita scolastica. Ascolta il programma e che cosa hanno visto.',
      pt: 'Uma excursão escolar. Preste atenção na programação e no que eles viram.',
      es: 'Una excursión escolar. Fíjate en el horario y en lo que vieron.',
      fr: 'Une sortie scolaire. Écoute le programme et ce qu’ils ont vu.',
      de: 'Ein Klassenausflug. Achte auf den Ablauf und darauf, was sie gesehen haben.'
    },
    text: 'Sabato scorso la nostra classe è andata a Ravenna. Siamo partiti in pullman alle sette e mezza. Appena arrivati, abbiamo visitato le basiliche famose e la tomba di Dante. Nel pomeriggio siamo andati al mare e abbiamo comprato dei souvenir. Siamo tornati a casa alle dieci di sera, molto stanchi ma contenti.',
    transcript: {
      en: 'Last Saturday our class went to Ravenna. We left by coach at half past seven. As soon as we arrived, we visited the famous basilicas and Dante’s tomb. In the afternoon we went to the sea and bought some souvenirs. We got home at ten in the evening, very tired but happy.',
      it: 'Sabato scorso la nostra classe è andata a Ravenna. Siamo partiti in pullman alle sette e mezza. Appena arrivati, abbiamo visitato le basiliche famose e la tomba di Dante. Nel pomeriggio siamo andati al mare e abbiamo comprato dei souvenir. Siamo tornati a casa alle dieci di sera, molto stanchi ma contenti.',
      pt: 'Sábado passado, a nossa turma foi a Ravena. Saímos de ônibus às sete e meia. Assim que chegamos, visitamos as basílicas famosas e o túmulo de Dante. À tarde fomos ao mar e compramos umas lembranças. Voltamos para casa às dez da noite, muito cansados mas contentes.',
      es: 'El sábado pasado nuestra clase fue a Rávena. Salimos en autocar a las siete y media. En cuanto llegamos, visitamos las basílicas famosas y la tumba de Dante. Por la tarde fuimos al mar y compramos unos recuerdos. Volvimos a casa a las diez de la noche, muy cansados pero contentos.',
      fr: 'Samedi dernier, notre classe est allée à Ravenne. Nous sommes partis en car à sept heures et demie. Dès notre arrivée, nous avons visité les célèbres basiliques et le tombeau de Dante. L’après-midi, nous sommes allés à la mer et nous avons acheté des souvenirs. Nous sommes rentrés à dix heures du soir, très fatigués mais contents.',
      de: 'Letzten Samstag ist unsere Klasse nach Ravenna gefahren. Wir sind um halb acht mit dem Bus losgefahren. Gleich nach der Ankunft haben wir die berühmten Basiliken und das Grab von Dante besichtigt. Am Nachmittag sind wir ans Meer gegangen und haben Souvenirs gekauft. Wir sind um zehn Uhr abends nach Hause gekommen, sehr müde, aber zufrieden.'
    },
    glossary: [
      { it: 'in pullman', en: 'by coach', pt: 'de ônibus', es: 'en autocar', fr: 'en car', de: 'mit dem Reisebus' },
      { it: 'appena arrivati', en: 'as soon as we arrived', pt: 'assim que chegamos', es: 'en cuanto llegamos', fr: 'dès notre arrivée', de: 'gleich nach der Ankunft' },
      { it: 'souvenir', en: 'souvenirs', pt: 'lembranças', es: 'recuerdos', fr: 'souvenirs', de: 'Souvenirs' }
    ],
    questions: [
      {
        id: 'lis-travel-a2-1-q1',
        prompt: { en: 'At what time did they leave?', it: 'A che ora sono partiti?', pt: 'A que horas eles saíram?', es: '¿A qué hora salieron?', fr: 'À quelle heure sont-ils partis ?', de: 'Um wie viel Uhr sind sie losgefahren?' },
        options: ['Alle sette e mezza', 'Alle otto e mezza', 'Alle dieci'],
        answer: 0,
        explanation: { en: '“Siamo partiti in pullman alle sette e mezza.”', it: '“Siamo partiti in pullman alle sette e mezza.”', pt: '“…alle sette e mezza” — às sete e meia.', es: '“…alle sette e mezza” — a las siete y media.', fr: '“…alle sette e mezza” — à sept heures et demie.', de: '“…alle sette e mezza” — um halb acht.' }
      },
      {
        id: 'lis-travel-a2-1-q2',
        prompt: { en: 'Whose tomb did they visit?', it: 'Di chi hanno visitato la tomba?', pt: 'De quem eles visitaram o túmulo?', es: '¿De quién visitaron la tumba?', fr: 'De qui ont-ils visité le tombeau ?', de: 'Wessen Grab haben sie besucht?' },
        options: ['Di Dante', 'Di Petrarca', 'Di Leonardo'],
        answer: 0,
        explanation: { en: '“Abbiamo visitato… la tomba di Dante.”', it: '“Abbiamo visitato… la tomba di Dante.”', pt: '“…la tomba di Dante” — o túmulo de Dante.', es: '“…la tomba di Dante” — la tumba de Dante.', fr: '“…la tomba di Dante” — le tombeau de Dante.', de: '“…la tomba di Dante” — das Grab von Dante.' }
      },
      {
        id: 'lis-travel-a2-1-q3',
        prompt: { en: 'What did they do in the afternoon?', it: 'Che cosa hanno fatto nel pomeriggio?', pt: 'O que eles fizeram à tarde?', es: '¿Qué hicieron por la tarde?', fr: 'Qu’ont-ils fait l’après-midi ?', de: 'Was haben sie am Nachmittag gemacht?' },
        options: ['Sono andati al mare', 'Hanno visitato un museo', 'Hanno mangiato in pizzeria'],
        answer: 0,
        explanation: { en: '“Nel pomeriggio siamo andati al mare e abbiamo comprato dei souvenir.”', it: '“Nel pomeriggio siamo andati al mare…”', pt: '“Nel pomeriggio siamo andati al mare…” — foram ao mar.', es: '“Nel pomeriggio siamo andati al mare…” — fueron al mar.', fr: '“Nel pomeriggio siamo andati al mare…” — ils sont allés à la mer.', de: '“Nel pomeriggio siamo andati al mare…” — sie gingen ans Meer.' }
      },
      {
        id: 'lis-travel-a2-1-q4',
        prompt: { en: 'How did they feel at the end?', it: 'Come si sentivano alla fine?', pt: 'Como eles se sentiam no fim?', es: '¿Cómo se sentían al final?', fr: 'Comment se sentaient-ils à la fin ?', de: 'Wie fühlten sie sich am Ende?' },
        options: ['Stanchi ma contenti', 'Annoiati', 'Arrabbiati'],
        answer: 0,
        explanation: { en: '“Molto stanchi ma contenti.”', it: '“Molto stanchi ma contenti.”', pt: '“Molto stanchi ma contenti” — cansados mas contentes.', es: '“Molto stanchi ma contenti” — cansados pero contentos.', fr: '“Molto stanchi ma contenti” — fatigués mais contents.', de: '“Molto stanchi ma contenti” — müde, aber zufrieden.' }
      }
    ]
  },
  {
    id: 'lis-travel-b1-1',
    level: 'B1',
    theme: 'travel',
    title: { en: 'Lost in the station', it: 'Persi in stazione', pt: 'Perdidos na estação', es: 'Perdidos en la estación', fr: 'Perdus dans la gare', de: 'Verloren im Bahnhof' },
    intro: {
      en: 'A small travel problem and how it was solved. Listen for the reason for the delay.',
      it: 'Un piccolo problema di viaggio e come è stato risolto. Ascolta il motivo del ritardo.',
      pt: 'Um pequeno problema de viagem e como foi resolvido. Preste atenção no motivo do atraso.',
      es: 'Un pequeño problema de viaje y cómo se resolvió. Fíjate en el motivo del retraso.',
      fr: 'Un petit problème de voyage et comment il a été résolu. Écoute la raison du retard.',
      de: 'Ein kleines Reiseproblem und wie es gelöst wurde. Achte auf den Grund für die Verspätung.'
    },
    text: 'Mentre aspettavamo il treno per Firenze, abbiamo sentito un annuncio: il treno era in ritardo di quaranta minuti a causa di uno sciopero. Allora abbiamo deciso di prendere un caffè al bar della stazione. Un signore gentile ci ha spiegato che il nostro binario era cambiato. Per fortuna lo abbiamo capito in tempo e non abbiamo perso il treno.',
    transcript: {
      en: 'While we were waiting for the train to Florence, we heard an announcement: the train was forty minutes late because of a strike. So we decided to have a coffee at the station bar. A kind gentleman explained to us that our platform had changed. Luckily we understood it in time and didn’t miss the train.',
      it: 'Mentre aspettavamo il treno per Firenze, abbiamo sentito un annuncio: il treno era in ritardo di quaranta minuti a causa di uno sciopero. Allora abbiamo deciso di prendere un caffè al bar della stazione. Un signore gentile ci ha spiegato che il nostro binario era cambiato. Per fortuna lo abbiamo capito in tempo e non abbiamo perso il treno.',
      pt: 'Enquanto esperávamos o trem para Florença, ouvimos um anúncio: o trem estava com quarenta minutos de atraso por causa de uma greve. Então decidimos tomar um café no bar da estação. Um senhor gentil nos explicou que a nossa plataforma tinha mudado. Por sorte, entendemos a tempo e não perdemos o trem.',
      es: 'Mientras esperábamos el tren a Florencia, oímos un anuncio: el tren llevaba cuarenta minutos de retraso por una huelga. Así que decidimos tomar un café en el bar de la estación. Un señor amable nos explicó que nuestro andén había cambiado. Por suerte lo entendimos a tiempo y no perdimos el tren.',
      fr: 'Pendant que nous attendions le train pour Florence, nous avons entendu une annonce : le train avait quarante minutes de retard à cause d’une grève. Nous avons donc décidé de prendre un café au bar de la gare. Un monsieur aimable nous a expliqué que notre quai avait changé. Par chance, nous l’avons compris à temps et nous n’avons pas raté le train.',
      de: 'Während wir auf den Zug nach Florenz warteten, hörten wir eine Durchsage: Der Zug hatte wegen eines Streiks vierzig Minuten Verspätung. Also beschlossen wir, im Bahnhofscafé einen Kaffee zu trinken. Ein freundlicher Herr erklärte uns, dass sich unser Gleis geändert hatte. Zum Glück haben wir es rechtzeitig verstanden und den Zug nicht verpasst.'
    },
    glossary: [
      { it: 'in ritardo', en: 'late / delayed', pt: 'atrasado', es: 'con retraso', fr: 'en retard', de: 'verspätet' },
      { it: 'sciopero', en: 'strike', pt: 'greve', es: 'huelga', fr: 'grève', de: 'Streik' },
      { it: 'binario', en: 'platform / track', pt: 'plataforma', es: 'andén', fr: 'quai', de: 'Gleis' }
    ],
    questions: [
      {
        id: 'lis-travel-b1-1-q1',
        prompt: { en: 'Where were they going?', it: 'Dove stavano andando?', pt: 'Para onde eles estavam indo?', es: '¿Adónde iban?', fr: 'Où allaient-ils ?', de: 'Wohin fuhren sie?' },
        options: ['A Firenze', 'A Roma', 'A Ravenna'],
        answer: 0,
        explanation: { en: '“Il treno per Firenze” — to Florence.', it: '“Il treno per Firenze” — a Firenze.', pt: '“Il treno per Firenze” — para Florença.', es: '“Il treno per Firenze” — a Florencia.', fr: '“Il treno per Firenze” — pour Florence.', de: '“Il treno per Firenze” — nach Florenz.' }
      },
      {
        id: 'lis-travel-b1-1-q2',
        prompt: { en: 'Why was the train late?', it: 'Perché il treno era in ritardo?', pt: 'Por que o trem estava atrasado?', es: '¿Por qué llevaba retraso el tren?', fr: 'Pourquoi le train était-il en retard ?', de: 'Warum hatte der Zug Verspätung?' },
        options: ['Per il maltempo', 'A causa di uno sciopero', 'Per un guasto'],
        answer: 1,
        explanation: { en: '“In ritardo… a causa di uno sciopero.”', it: '“In ritardo… a causa di uno sciopero.”', pt: '“…a causa di uno sciopero” — por causa de uma greve.', es: '“…a causa di uno sciopero” — por una huelga.', fr: '“…a causa di uno sciopero” — à cause d’une grève.', de: '“…a causa di uno sciopero” — wegen eines Streiks.' }
      },
      {
        id: 'lis-travel-b1-1-q3',
        prompt: { en: 'What did the kind gentleman tell them?', it: 'Che cosa ha detto il signore gentile?', pt: 'O que o senhor gentil disse a eles?', es: '¿Qué les dijo el señor amable?', fr: 'Qu’est-ce que le monsieur aimable leur a dit ?', de: 'Was sagte ihnen der freundliche Herr?' },
        options: ['Che il binario era cambiato', 'Che il treno era cancellato', 'Che dovevano pagare di nuovo'],
        answer: 0,
        explanation: { en: '“Il nostro binario era cambiato.”', it: '“Il nostro binario era cambiato.”', pt: '“Il nostro binario era cambiato” — a plataforma tinha mudado.', es: '“Il nostro binario era cambiato” — el andén había cambiado.', fr: '“Il nostro binario era cambiato” — le quai avait changé.', de: '“Il nostro binario era cambiato” — das Gleis hatte sich geändert.' }
      },
      {
        id: 'lis-travel-b1-1-q4',
        prompt: { en: 'Did they catch the train?', it: 'Hanno preso il treno?', pt: 'Eles pegaram o trem?', es: '¿Cogieron el tren?', fr: 'Ont-ils eu le train ?', de: 'Haben sie den Zug bekommen?' },
        options: ['Sì, in tempo', 'No, l’hanno perso', 'Hanno preso un altro treno'],
        answer: 0,
        explanation: { en: '“Non abbiamo perso il treno” — they did not miss it.', it: '“Non abbiamo perso il treno” — non lo hanno perso.', pt: '“Non abbiamo perso il treno” — não o perderam.', es: '“Non abbiamo perso il treno” — no lo perdieron.', fr: '“Non abbiamo perso il treno” — ils ne l’ont pas raté.', de: '“Non abbiamo perso il treno” — sie haben ihn nicht verpasst.' }
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
    title: { en: 'A job advert', it: 'Un annuncio di lavoro', pt: 'Um anúncio de emprego', es: 'Un anuncio de trabajo', fr: 'Une offre d’emploi', de: 'Eine Stellenanzeige' },
    intro: {
      en: 'A short recruitment message. Listen for the role and the hours.',
      it: 'Un breve annuncio di lavoro. Ascolta il ruolo e gli orari.',
      pt: 'Um breve anúncio de emprego. Preste atenção na função e no horário.',
      es: 'Un breve anuncio de trabajo. Fíjate en el puesto y en el horario.',
      fr: 'Une courte annonce de recrutement. Écoute le poste et les horaires.',
      de: 'Eine kurze Stellenanzeige. Achte auf die Tätigkeit und die Arbeitszeiten.'
    },
    text: 'Cerchiamo personale serio e affidabile per i servizi di pulizia presso aziende, hotel e supermercati. Offriamo orari flessibili e un ambiente di lavoro sereno. Non è necessaria molta esperienza. Se sei interessato, scrivi un’email con il tuo nome e il tuo numero di telefono.',
    transcript: {
      en: 'We are looking for serious and reliable staff for cleaning services at businesses, hotels and supermarkets. We offer flexible hours and a calm working environment. Much experience is not required. If you are interested, write an email with your name and your phone number.',
      it: 'Cerchiamo personale serio e affidabile per i servizi di pulizia presso aziende, hotel e supermercati. Offriamo orari flessibili e un ambiente di lavoro sereno. Non è necessaria molta esperienza. Se sei interessato, scrivi un’email con il tuo nome e il tuo numero di telefono.',
      pt: 'Procuramos pessoal sério e confiável para serviços de limpeza em empresas, hotéis e supermercados. Oferecemos horários flexíveis e um ambiente de trabalho tranquilo. Não é necessária muita experiência. Se você tiver interesse, escreva um e-mail com o seu nome e o seu número de telefone.',
      es: 'Buscamos personal serio y de confianza para servicios de limpieza en empresas, hoteles y supermercados. Ofrecemos horarios flexibles y un ambiente de trabajo tranquilo. No se requiere mucha experiencia. Si te interesa, escribe un correo con tu nombre y tu número de teléfono.',
      fr: 'Nous cherchons du personnel sérieux et fiable pour des services de nettoyage dans des entreprises, des hôtels et des supermarchés. Nous offrons des horaires flexibles et un cadre de travail serein. Beaucoup d’expérience n’est pas nécessaire. Si cela vous intéresse, écrivez un e-mail avec votre nom et votre numéro de téléphone.',
      de: 'Wir suchen zuverlässiges, gewissenhaftes Personal für Reinigungsdienste in Firmen, Hotels und Supermärkten. Wir bieten flexible Arbeitszeiten und ein angenehmes Arbeitsumfeld. Viel Erfahrung ist nicht nötig. Bei Interesse schreib eine E-Mail mit deinem Namen und deiner Telefonnummer.'
    },
    glossary: [
      { it: 'personale affidabile', en: 'reliable staff', pt: 'pessoal confiável', es: 'personal de confianza', fr: 'personnel fiable', de: 'zuverlässiges Personal' },
      { it: 'orari flessibili', en: 'flexible hours', pt: 'horários flexíveis', es: 'horarios flexibles', fr: 'horaires flexibles', de: 'flexible Arbeitszeiten' },
      { it: 'ambiente sereno', en: 'calm environment', pt: 'ambiente tranquilo', es: 'ambiente tranquilo', fr: 'cadre serein', de: 'angenehmes Umfeld' }
    ],
    questions: [
      {
        id: 'lis-work-a2-1-q1',
        prompt: { en: 'What kind of work is offered?', it: 'Che tipo di lavoro si offre?', pt: 'Que tipo de trabalho é oferecido?', es: '¿Qué tipo de trabajo se ofrece?', fr: 'Quel type de travail est proposé ?', de: 'Welche Art von Arbeit wird angeboten?' },
        options: ['Servizi di pulizia', 'Lavoro in cucina', 'Lavoro d’ufficio'],
        answer: 0,
        explanation: { en: '“Servizi di pulizia presso aziende, hotel e supermercati.”', it: '“Servizi di pulizia presso aziende, hotel e supermercati.”', pt: '“Servizi di pulizia…” — serviços de limpeza.', es: '“Servizi di pulizia…” — servicios de limpieza.', fr: '“Servizi di pulizia…” — services de nettoyage.', de: '“Servizi di pulizia…” — Reinigungsdienste.' }
      },
      {
        id: 'lis-work-a2-1-q2',
        prompt: { en: 'What do they offer?', it: 'Che cosa offrono?', pt: 'O que eles oferecem?', es: '¿Qué ofrecen?', fr: 'Que proposent-ils ?', de: 'Was bieten sie an?' },
        options: ['Orari flessibili', 'Uno stipendio altissimo', 'Un’auto aziendale'],
        answer: 0,
        explanation: { en: '“Offriamo orari flessibili e un ambiente di lavoro sereno.”', it: '“Offriamo orari flessibili…”', pt: '“Offriamo orari flessibili…” — horários flexíveis.', es: '“Offriamo orari flessibili…” — horarios flexibles.', fr: '“Offriamo orari flessibili…” — des horaires flexibles.', de: '“Offriamo orari flessibili…” — flexible Arbeitszeiten.' }
      },
      {
        id: 'lis-work-a2-1-q3',
        prompt: { en: 'Is a lot of experience required?', it: 'Serve molta esperienza?', pt: 'É necessária muita experiência?', es: '¿Se necesita mucha experiencia?', fr: 'Faut-il beaucoup d’expérience ?', de: 'Ist viel Erfahrung nötig?' },
        options: ['No', 'Sì, molta', 'Sì, cinque anni'],
        answer: 0,
        explanation: { en: '“Non è necessaria molta esperienza.”', it: '“Non è necessaria molta esperienza.”', pt: '“Non è necessaria molta esperienza” — não é preciso muita experiência.', es: '“Non è necessaria molta esperienza” — no hace falta mucha experiencia.', fr: '“Non è necessaria molta esperienza” — pas besoin de beaucoup d’expérience.', de: '“Non è necessaria molta esperienza” — viel Erfahrung ist nicht nötig.' }
      },
      {
        id: 'lis-work-a2-1-q4',
        prompt: { en: 'How should an interested person reply?', it: 'Come deve rispondere chi è interessato?', pt: 'Como deve responder quem tiver interesse?', es: '¿Cómo debe responder quien esté interesado?', fr: 'Comment doit répondre une personne intéressée ?', de: 'Wie soll sich eine interessierte Person melden?' },
        options: ['Con un’email', 'Di persona', 'Con un fax'],
        answer: 0,
        explanation: { en: '“Scrivi un’email con il tuo nome e il tuo numero.”', it: '“Scrivi un’email…”', pt: '“Scrivi un’email…” — escrevendo um e-mail.', es: '“Scrivi un’email…” — escribiendo un correo.', fr: '“Scrivi un’email…” — en écrivant un e-mail.', de: '“Scrivi un’email…” — mit einer E-Mail.' }
      }
    ]
  },
  {
    id: 'lis-work-b1-1',
    level: 'B1',
    theme: 'work',
    title: { en: 'Replying to the recruiter', it: 'La risposta alla selezionatrice', pt: 'A resposta à recrutadora', es: 'La respuesta a la reclutadora', fr: 'La réponse à la recruteuse', de: 'Die Antwort an die Personalvermittlerin' },
    intro: {
      en: 'A candidate answers a recruiter. Listen for which skills he has and which he lacks.',
      it: 'Un candidato risponde a una selezionatrice. Ascolta quali competenze ha e quali no.',
      pt: 'Um candidato responde a uma recrutadora. Preste atenção em quais competências ele tem e quais não tem.',
      es: 'Un candidato responde a una reclutadora. Fíjate en qué competencias tiene y cuáles no.',
      fr: 'Un candidat répond à une recruteuse. Écoute quelles compétences il a et lesquelles lui manquent.',
      de: 'Ein Bewerber antwortet einer Personalvermittlerin. Achte darauf, welche Fähigkeiten er hat und welche nicht.'
    },
    text: 'Cara Nicoletta, grazie per avermi contattato. Dopo aver letto i requisiti, posso dire di coprirne circa il novanta per cento. Ho una buona esperienza con i sistemi di sicurezza, ma non ho esperienza approfondita con le piattaforme EDR. Inoltre, il mio livello di italiano è ancora intermedio. A parte questo, credo di essere adatto alla posizione. Mi faccia sapere se desidera procedere.',
    transcript: {
      en: 'Dear Nicoletta, thank you for contacting me. After reading the requirements, I can say I cover about ninety per cent of them. I have good experience with security systems, but I don’t have in-depth experience with EDR platforms. Moreover, my level of Italian is still intermediate. Apart from that, I believe I am suitable for the position. Let me know if you wish to proceed.',
      it: 'Cara Nicoletta, grazie per avermi contattato. Dopo aver letto i requisiti, posso dire di coprirne circa il novanta per cento. Ho una buona esperienza con i sistemi di sicurezza, ma non ho esperienza approfondita con le piattaforme EDR. Inoltre, il mio livello di italiano è ancora intermedio. A parte questo, credo di essere adatto alla posizione. Mi faccia sapere se desidera procedere.',
      pt: 'Cara Nicoletta, obrigado por ter entrado em contato. Depois de ler os requisitos, posso dizer que cubro cerca de noventa por cento deles. Tenho boa experiência com sistemas de segurança, mas não tenho experiência aprofundada com plataformas EDR. Além disso, o meu nível de italiano ainda é intermediário. Fora isso, acredito que sou adequado para a vaga. Avise-me se desejar prosseguir.',
      es: 'Estimada Nicoletta, gracias por haberme contactado. Tras leer los requisitos, puedo decir que cubro alrededor del noventa por ciento. Tengo buena experiencia con sistemas de seguridad, pero no tengo experiencia profunda con plataformas EDR. Además, mi nivel de italiano todavía es intermedio. Aparte de eso, creo que soy adecuado para el puesto. Avíseme si desea continuar.',
      fr: 'Chère Nicoletta, merci de m’avoir contacté. Après avoir lu les exigences, je peux dire que j’en couvre environ quatre-vingt-dix pour cent. J’ai une bonne expérience des systèmes de sécurité, mais je n’ai pas d’expérience approfondie des plateformes EDR. De plus, mon niveau d’italien est encore intermédiaire. À part cela, je pense être adapté au poste. Faites-moi savoir si vous souhaitez poursuivre.',
      de: 'Liebe Nicoletta, danke, dass Sie mich kontaktiert haben. Nachdem ich die Anforderungen gelesen habe, kann ich sagen, dass ich etwa neunzig Prozent davon erfülle. Ich habe gute Erfahrung mit Sicherheitssystemen, aber keine tiefgehende Erfahrung mit EDR-Plattformen. Außerdem ist mein Italienischniveau noch mittelmäßig. Davon abgesehen glaube ich, für die Stelle geeignet zu sein. Lassen Sie mich wissen, ob Sie fortfahren möchten.'
    },
    glossary: [
      { it: 'requisiti', en: 'requirements', pt: 'requisitos', es: 'requisitos', fr: 'exigences', de: 'Anforderungen' },
      { it: 'coprirne', en: 'to cover (some) of them (ne = of them)', pt: 'cobrir (uma parte) deles (ne = deles)', es: 'cubrir (una parte) de ellos (ne = de ellos)', fr: 'en couvrir (une partie) (ne = d’eux)', de: 'einen Teil davon erfüllen (ne = davon)' },
      { it: 'adatto alla posizione', en: 'suitable for the position', pt: 'adequado para a vaga', es: 'adecuado para el puesto', fr: 'adapté au poste', de: 'für die Stelle geeignet' }
    ],
    questions: [
      {
        id: 'lis-work-b1-1-q1',
        prompt: { en: 'What percentage of the requirements does he cover?', it: 'Quale percentuale dei requisiti copre?', pt: 'Que porcentagem dos requisitos ele cobre?', es: '¿Qué porcentaje de los requisitos cubre?', fr: 'Quel pourcentage des exigences couvre-t-il ?', de: 'Welchen Prozentsatz der Anforderungen erfüllt er?' },
        options: ['Circa il 90%', 'Il 100%', 'Circa il 50%'],
        answer: 0,
        explanation: { en: '“Posso dire di coprirne circa il novanta per cento.”', it: '“Posso dire di coprirne circa il novanta per cento.”', pt: '“…circa il novanta per cento” — cerca de 90%.', es: '“…circa il novanta per cento” — alrededor del 90%.', fr: '“…circa il novanta per cento” — environ 90%.', de: '“…circa il novanta per cento” — etwa 90%.' }
      },
      {
        id: 'lis-work-b1-1-q2',
        prompt: { en: 'Which experience does he lack?', it: 'Quale esperienza non ha?', pt: 'Qual experiência ele não tem?', es: '¿Qué experiencia le falta?', fr: 'Quelle expérience lui manque-t-il ?', de: 'Welche Erfahrung fehlt ihm?' },
        options: ['Con i sistemi di sicurezza', 'Con le piattaforme EDR', 'Con il lavoro di squadra'],
        answer: 1,
        explanation: { en: '“Non ho esperienza approfondita con le piattaforme EDR.”', it: '“Non ho esperienza approfondita con le piattaforme EDR.”', pt: '“…le piattaforme EDR” — plataformas EDR.', es: '“…le piattaforme EDR” — plataformas EDR.', fr: '“…le piattaforme EDR” — les plateformes EDR.', de: '“…le piattaforme EDR” — EDR-Plattformen.' }
      },
      {
        id: 'lis-work-b1-1-q3',
        prompt: { en: 'What does he say about his Italian?', it: 'Che cosa dice del suo italiano?', pt: 'O que ele diz sobre o seu italiano?', es: '¿Qué dice sobre su italiano?', fr: 'Que dit-il de son italien ?', de: 'Was sagt er über sein Italienisch?' },
        options: ['È madrelingua', 'È ancora intermedio', 'Non lo parla'],
        answer: 1,
        explanation: { en: '“Il mio livello di italiano è ancora intermedio.”', it: '“Il mio livello di italiano è ancora intermedio.”', pt: '“…è ancora intermedio” — ainda intermediário.', es: '“…è ancora intermedio” — todavía intermedio.', fr: '“…è ancora intermedio” — encore intermédiaire.', de: '“…è ancora intermedio” — noch mittelmäßig.' }
      },
      {
        id: 'lis-work-b1-1-q4',
        prompt: { en: 'What does “coprirne” contain?', it: 'Che cosa contiene “coprirne”?', pt: 'O que “coprirne” contém?', es: '¿Qué contiene “coprirne”?', fr: 'Que contient « coprirne » ?', de: 'Was steckt in „coprirne“?' },
        options: ['Il pronome ne (“of them”)', 'Il pronome lo', 'Nessun pronome'],
        answer: 0,
        explanation: { en: 'Coprirne = coprire + ne; ne means “of them” (the requirements).', it: 'Coprirne = coprire + ne; ne significa “di essi” (i requisiti).', pt: 'Coprirne = coprire + ne; ne significa “deles” (os requisitos).', es: 'Coprirne = coprire + ne; ne significa “de ellos” (los requisitos).', fr: 'Coprirne = coprire + ne ; ne signifie « d’eux » (les exigences).', de: 'Coprirne = coprire + ne; ne bedeutet „davon“ (die Anforderungen).' }
      }
    ]
  }
];

/** All passages for a given level, in theme order. */
export const getListeningPassages = (level: GrammarLevel, theme?: ListeningTheme): ListeningPassage[] =>
  ITALIAN_LISTENING_PASSAGES.filter(p => p.level === level && (!theme || p.theme === theme));
