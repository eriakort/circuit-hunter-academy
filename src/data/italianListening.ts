import { BilingualText } from '../types';
import { GrammarLevel } from './italianGrammar';

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
  /** Key vocabulary to pre-teach (Italian · gloss). */
  glossary: { it: string; en: string }[];
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
    title: ['Paolo’s morning', 'La mattina di Paolo'],
    intro: ['A simple daily routine. Listen for the times and the order of actions.', 'Una semplice routine quotidiana. Ascolta gli orari e l’ordine delle azioni.'],
    text: 'Paolo si sveglia alle sette. Prima beve un caffè in cucina. Poi si lava e si veste. Alle otto esce di casa e prende l’autobus. Arriva al lavoro alle nove. A mezzogiorno mangia un panino con un amico.',
    transcript: [
      'Paolo wakes up at seven. First he drinks a coffee in the kitchen. Then he washes and gets dressed. At eight he leaves the house and takes the bus. He arrives at work at nine. At noon he eats a sandwich with a friend.',
      'Paolo si sveglia alle sette. Prima beve un caffè in cucina. Poi si lava e si veste. Alle otto esce di casa e prende l’autobus. Arriva al lavoro alle nove. A mezzogiorno mangia un panino con un amico.'
    ],
    glossary: [
      { it: 'si sveglia', en: 'he wakes up' },
      { it: 'esce di casa', en: 'he leaves the house' },
      { it: 'a mezzogiorno', en: 'at noon' }
    ],
    questions: [
      {
        id: 'lis-everyday-a1-1-q1',
        prompt: ['At what time does Paolo wake up?', 'A che ora si sveglia Paolo?'],
        options: ['Alle sette', 'Alle otto', 'Alle nove'],
        answer: 0,
        explanation: ['“Paolo si sveglia alle sette” — at seven.', '“Paolo si sveglia alle sette” — alle sette.']
      },
      {
        id: 'lis-everyday-a1-1-q2',
        prompt: ['What does he drink first?', 'Che cosa beve per primo?'],
        options: ['Un tè', 'Un caffè', 'Un succo'],
        answer: 1,
        explanation: ['“Prima beve un caffè” — a coffee.', '“Prima beve un caffè” — un caffè.']
      },
      {
        id: 'lis-everyday-a1-1-q3',
        prompt: ['How does he go to work?', 'Come va al lavoro?'],
        options: ['In macchina', 'A piedi', 'In autobus'],
        answer: 2,
        explanation: ['“Prende l’autobus” — he takes the bus.', '“Prende l’autobus” — prende l’autobus.']
      },
      {
        id: 'lis-everyday-a1-1-q4',
        prompt: ['What does he eat at noon?', 'Che cosa mangia a mezzogiorno?'],
        options: ['Una pizza', 'Un panino', 'Un’insalata'],
        answer: 1,
        explanation: ['“Mangia un panino con un amico” — a sandwich.', '“Mangia un panino con un amico” — un panino.']
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
    title: ['A day in the city', 'Una giornata in città'],
    intro: ['A short trip downtown. Listen for the places visited.', 'Una breve gita in centro. Ascolta i luoghi visitati.'],
    text: 'Oggi vado in centro con Marco. Prima andiamo al museo. Poi mangiamo una pizza in un ristorante. Dopo pranzo visitiamo una chiesa antica. La sera prendiamo un gelato e torniamo a casa in treno.',
    transcript: [
      'Today I go downtown with Marco. First we go to the museum. Then we eat a pizza in a restaurant. After lunch we visit an old church. In the evening we get an ice cream and go home by train.',
      'Oggi vado in centro con Marco. Prima andiamo al museo. Poi mangiamo una pizza in un ristorante. Dopo pranzo visitiamo una chiesa antica. La sera prendiamo un gelato e torniamo a casa in treno.'
    ],
    glossary: [
      { it: 'in centro', en: 'downtown / in the city centre' },
      { it: 'chiesa antica', en: 'old church' },
      { it: 'in treno', en: 'by train' }
    ],
    questions: [
      {
        id: 'lis-travel-a1-1-q1',
        prompt: ['Where do they go first?', 'Dove vanno prima?'],
        options: ['Al museo', 'Al ristorante', 'Alla chiesa'],
        answer: 0,
        explanation: ['“Prima andiamo al museo.”', '“Prima andiamo al museo.”']
      },
      {
        id: 'lis-travel-a1-1-q2',
        prompt: ['What do they eat?', 'Che cosa mangiano?'],
        options: ['Un panino', 'Una pizza', 'Una pasta'],
        answer: 1,
        explanation: ['“Mangiamo una pizza in un ristorante.”', '“Mangiamo una pizza in un ristorante.”']
      },
      {
        id: 'lis-travel-a1-1-q3',
        prompt: ['How do they go home?', 'Come tornano a casa?'],
        options: ['In autobus', 'In treno', 'A piedi'],
        answer: 1,
        explanation: ['“Torniamo a casa in treno.”', '“Torniamo a casa in treno.”']
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
    title: ['A phone call to the office', 'Una telefonata in ufficio'],
    intro: ['A short, simple work call. Listen for the names and the time.', 'Una breve e semplice telefonata di lavoro. Ascolta i nomi e l’orario.'],
    text: 'Buongiorno, sono Anna. Vorrei parlare con il signor Rossi. Oggi non posso venire in ufficio perché sto male. Torno al lavoro domani mattina alle nove. Grazie e buona giornata.',
    transcript: [
      'Good morning, I’m Anna. I would like to speak with Mr Rossi. Today I can’t come to the office because I’m unwell. I’ll be back at work tomorrow morning at nine. Thank you and have a good day.',
      'Buongiorno, sono Anna. Vorrei parlare con il signor Rossi. Oggi non posso venire in ufficio perché sto male. Torno al lavoro domani mattina alle nove. Grazie e buona giornata.'
    ],
    glossary: [
      { it: 'sto male', en: 'I’m unwell' },
      { it: 'in ufficio', en: 'at/to the office' },
      { it: 'buona giornata', en: 'have a good day' }
    ],
    questions: [
      {
        id: 'lis-work-a1-1-q1',
        prompt: ['Who is calling?', 'Chi telefona?'],
        options: ['Anna', 'Il signor Rossi', 'Maria'],
        answer: 0,
        explanation: ['“Sono Anna.”', '“Sono Anna.”']
      },
      {
        id: 'lis-work-a1-1-q2',
        prompt: ['Why can’t she come to the office?', 'Perché non può venire in ufficio?'],
        options: ['Perché sta male', 'Perché è in vacanza', 'Perché è in ritardo'],
        answer: 0,
        explanation: ['“Non posso venire… perché sto male.”', '“Non posso venire… perché sto male.”']
      },
      {
        id: 'lis-work-a1-1-q3',
        prompt: ['When will she be back at work?', 'Quando torna al lavoro?'],
        options: ['Oggi pomeriggio', 'Domani mattina', 'Lunedì prossimo'],
        answer: 1,
        explanation: ['“Torno al lavoro domani mattina alle nove.”', '“Torno al lavoro domani mattina alle nove.”']
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
