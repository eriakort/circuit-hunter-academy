import type { BilingualText } from '../types';
import type { GrammarExercise, GrammarTopic } from './italianGrammar';

// Picture-based practice for stare + gerundio ("Che cosa sta facendo?").
// Images live in public/italian/actions/ and are referenced by a path relative
// to the app's base URL, so the data stays free of bundler-specific imports.
export const ACTION_IMAGE_DIR = 'italian/actions/';
export const ACTION_IMAGES = {
  scrivere: '01-scrivere-unemail.jpg',
  leggere: '02-leggere-un-libro.jpg',
  cucinare: '03-cucinare-la-cena.jpg',
  bere: '04-bere-un-caffe.jpg',
  mangiare: '05-mangiare-una-mela.jpg',
  ascoltare: '06-ascoltare-la-musica.jpg',
  studiare: '07-studiare-per-lesame.jpg',
  spesa: '08-fare-la-spesa.jpg',
  correre: '09-correre-nel-parco.jpg',
  camminare: '10-camminare-col-cane.jpg',
  telefono: '11-parlare-al-telefono.jpg',
  dormire: '12-dormire-nel-letto.jpg',
  lavare: '13-lavare-i-piatti.jpg',
  pulire: '14-pulire-la-casa.jpg',
  guidare: '15-guidare-lauto.jpg',
  pane: '16-comprare-il-pane.jpg',
  tv: '17-guardare-la-tv.jpg',
  calcio: '18-giocare-a-calcio.jpg',
  chitarra: '19-suonare-la-chitarra.jpg',
  piante: '20-innaffiare-le-piante.jpg'
} as const;
export type ActionImageKey = keyof typeof ACTION_IMAGES;
export const actionImage = (key: ActionImageKey): string => ACTION_IMAGE_DIR + ACTION_IMAGES[key];

// Alt text describes the scene without giving away the target verb phrase.
export const ACTION_IMAGE_ALT: Record<ActionImageKey, BilingualText> = {
  scrivere: ['A young woman at a desk with a laptop', 'Una ragazza alla scrivania con un computer portatile'],
  leggere: ['A man sitting in an armchair with a book', 'Un uomo in poltrona con un libro'],
  cucinare: ['A chef in a kitchen at the stove', 'Un cuoco in cucina ai fornelli'],
  bere: ['A man at a table holding a cup', 'Un uomo al tavolo con una tazzina'],
  mangiare: ['A boy holding a red apple', 'Un ragazzo con una mela rossa'],
  ascoltare: ['A boy wearing headphones', 'Un ragazzo con le cuffie'],
  studiare: ['A boy at a desk with books and a lamp', 'Un ragazzo alla scrivania con libri e una lampada'],
  spesa: ['A man pushing a trolley in a supermarket', 'Un uomo con un carrello al supermercato'],
  correre: ['A young woman in sportswear on a park path', 'Una ragazza in tuta su un sentiero nel parco'],
  camminare: ['A man on a street with a dog on a lead', 'Un uomo per strada con un cane al guinzaglio'],
  telefono: ['A young woman holding a phone to her ear', 'Una ragazza con il telefono all’orecchio'],
  dormire: ['A boy in bed at night', 'Un ragazzo a letto di notte'],
  lavare: ['A young man at the kitchen sink with plates', 'Un ragazzo al lavello con dei piatti'],
  pulire: ['A woman with a broom in a living room', 'Una donna con una scopa in salotto'],
  guidare: ['A man in a car with his hands on the wheel', 'Un uomo in macchina con le mani sul volante'],
  pane: ['A woman and a baker at a bakery counter', 'Una donna e un fornaio al banco di una panetteria'],
  tv: ['Two young people on a sofa in front of a television', 'Due ragazzi sul divano davanti alla televisione'],
  calcio: ['A girl on a field with a ball and a goal', 'Una ragazza su un campo con un pallone e una porta'],
  chitarra: ['A young man with a guitar and music notes', 'Un ragazzo con una chitarra e delle note musicali'],
  piante: ['A woman on a balcony with plants and a watering can', 'Una donna sul balcone con piante e un annaffiatoio']
};

const pic = (id: string, key: ActionImageKey, prompt: BilingualText, options: string[], answer: number, explanation: BilingualText, sentence?: string): GrammarExercise =>
  ({ id, prompt, options, answer, explanation, sentence, image: actionImage(key), imageAlt: ACTION_IMAGE_ALT[key] });

const LOOK: BilingualText = ['Look at the picture. What is this person doing?', 'Osserva l’immagine. Che cosa sta facendo questa persona?'];
const TRUE_FALSE: BilingualText = ['Look at the picture. True or false?', 'Osserva l’immagine. Vero o falso?'];
const VF = ['Vero', 'Falso'];

export const STARE_GERUNDIO_TOPIC: GrammarTopic = {
  id: 'stare-gerundio',
  title: { en: 'Stare + gerund · Stare + gerundio', it: 'Stare + gerundio', pt: 'Estar + gerúndio · Stare + gerundio', es: 'Estar + gerundio · Stare + gerundio', fr: 'Être en train de · Stare + gerundio', de: 'Verlaufsform · Stare + gerundio' },
  subtitle: { en: 'Look at the pictures and say what people are doing right now.', it: 'Osserva le immagini e di’ che cosa stanno facendo le persone in questo momento.', pt: 'Observe as imagens e diga o que as pessoas estão fazendo agora.', es: 'Observa las imágenes y di qué están haciendo las personas ahora mismo.', fr: 'Observe les images et dis ce que les personnes sont en train de faire.', de: 'Sieh dir die Bilder an und sag, was die Personen gerade tun.' },
  levels: {
    A1: {
      label: { en: 'Foundations', it: 'Fondamenti', pt: 'Fundamentos', es: 'Fundamentos', fr: 'Fondamentaux', de: 'Grundlagen' },
      focus: { en: 'Recognise sta + gerund in pictures: -are → -ando, -ere/-ire → -endo.', it: 'Riconosci sta + gerundio nelle immagini: -are → -ando, -ere/-ire → -endo.', pt: 'Reconheça sta + gerúndio nas imagens: -are → -ando, -ere/-ire → -endo.', es: 'Reconoce sta + gerundio en las imágenes: -are → -ando, -ere/-ire → -endo.', fr: 'Reconnais sta + gérondif dans les images : -are → -ando, -ere/-ire → -endo.', de: 'Erkenne sta + Gerundium auf Bildern: -are → -ando, -ere/-ire → -endo.' },
      explanation: {
        en: 'To say what someone is doing right now, use stare + gerundio. For one person: sta + gerund. Verbs in -are take -ando (parlare → parlando); verbs in -ere and -ire take -endo (leggere → leggendo, dormire → dormendo). Example: Sta scrivendo un’email.',
        it: 'Per dire che cosa sta facendo qualcuno in questo momento si usa stare + gerundio. Per una persona: sta + gerundio. I verbi in -are prendono -ando (parlare → parlando); i verbi in -ere e -ire prendono -endo (leggere → leggendo, dormire → dormendo). Esempio: Sta scrivendo un’email.',
        pt: 'Para dizer o que alguém está fazendo agora, use stare + gerundio. Para uma pessoa: sta + gerúndio. Verbos em -are terminam em -ando (parlare → parlando); verbos em -ere e -ire terminam em -endo (leggere → leggendo, dormire → dormendo). Exemplo: Sta scrivendo un’email.',
        es: 'Para decir qué está haciendo alguien ahora mismo, usa stare + gerundio. Para una persona: sta + gerundio. Los verbos en -are toman -ando (parlare → parlando); los verbos en -ere e -ire toman -endo (leggere → leggendo, dormire → dormendo). Ejemplo: Sta scrivendo un’email.',
        fr: 'Pour dire ce que quelqu’un est en train de faire, on utilise stare + gerundio. Pour une personne : sta + gérondif. Les verbes en -are prennent -ando (parlare → parlando) ; les verbes en -ere et -ire prennent -endo (leggere → leggendo, dormire → dormendo). Exemple : Sta scrivendo un’email.',
        de: 'Um zu sagen, was jemand gerade tut, verwendet man stare + gerundio. Für eine Person: sta + Gerundium. Verben auf -are bekommen -ando (parlare → parlando); Verben auf -ere und -ire bekommen -endo (leggere → leggendo, dormire → dormendo). Beispiel: Sta scrivendo un’email.'
      },
      example: ['Sta scrivendo un’email. · Sta leggendo un libro. · Sta dormendo.', 'Sta scrivendo un’email. · Sta leggendo un libro. · Sta dormendo.'],
      exercises: [
        pic('sg-a1-1', 'scrivere', LOOK, ['Sta scrivendo un’email.', 'Sta leggendo un libro.', 'Sta guardando la TV.'], 0, ['Scrivere is an -ere verb: scrivendo. Sta scrivendo un’email.', 'Scrivere è un verbo in -ere: scrivendo. Sta scrivendo un’email.']),
        pic('sg-a1-2', 'leggere', LOOK, ['Sta dormendo.', 'Sta leggendo un libro.', 'Sta scrivendo un’email.'], 1, ['Leggere → leggendo. He is reading a book.', 'Leggere → leggendo. Sta leggendo un libro.']),
        pic('sg-a1-3', 'cucinare', LOOK, ['Sta mangiando una mela.', 'Sta lavando i piatti.', 'Sta cucinando la cena.'], 2, ['Cucinare is an -are verb: cucinando.', 'Cucinare è un verbo in -are: cucinando.']),
        pic('sg-a1-4', 'bere', LOOK, ['Sta bevendo un caffè.', 'Sta comprando il pane.', 'Sta cucinando la cena.'], 0, ['Bere has an irregular gerund: bevendo.', 'Bere ha un gerundio irregolare: bevendo.']),
        pic('sg-a1-5', 'mangiare', LOOK, ['Sta bevendo un caffè.', 'Sta mangiando una mela.', 'Sta giocando a calcio.'], 1, ['Mangiare → mangiando. He is eating an apple.', 'Mangiare → mangiando. Sta mangiando una mela.']),
        pic('sg-a1-6', 'ascoltare', LOOK, ['Sta suonando la chitarra.', 'Sta parlando al telefono.', 'Sta ascoltando la musica.'], 2, ['Headphones: ascoltare → ascoltando la musica.', 'Le cuffie: ascoltare → ascoltando la musica.']),
        pic('sg-a1-7', 'studiare', LOOK, ['Sta studiando per l’esame.', 'Sta dormendo nel letto.', 'Sta guidando l’auto.'], 0, ['Studiare → studiando. He is studying for the exam.', 'Studiare → studiando. Sta studiando per l’esame.']),
        pic('sg-a1-8', 'spesa', LOOK, ['Sta pulendo la casa.', 'Sta facendo la spesa.', 'Sta camminando col cane.'], 1, ['Fare has an irregular gerund: facendo. Fare la spesa = to do the grocery shopping.', 'Fare ha un gerundio irregolare: facendo. Sta facendo la spesa.']),
        pic('sg-a1-9', 'correre', LOOK, ['Sta camminando col cane.', 'Sta giocando a calcio.', 'Sta correndo nel parco.'], 2, ['Correre is an -ere verb: correndo.', 'Correre è un verbo in -ere: correndo.']),
        pic('sg-a1-10', 'camminare', LOOK, ['Sta camminando col cane.', 'Sta correndo nel parco.', 'Sta facendo la spesa.'], 0, ['Camminare → camminando. He is walking the dog.', 'Camminare → camminando. Sta camminando col cane.'])
      ]
    },
    A2: {
      label: { en: 'Application', it: 'Applicazione', pt: 'Aplicação', es: 'Aplicación', fr: 'Application', de: 'Anwendung' },
      focus: { en: 'Form the gerund yourself and check statements against a picture; one person (sta) or more (stanno).', it: 'Forma tu il gerundio e verifica le frasi con l’immagine; una persona (sta) o più persone (stanno).', pt: 'Forme o gerúndio e confira as frases com a imagem; uma pessoa (sta) ou mais (stanno).', es: 'Forma el gerundio y comprueba las frases con la imagen; una persona (sta) o más (stanno).', fr: 'Forme le gérondif et vérifie les phrases avec l’image ; une personne (sta) ou plusieurs (stanno).', de: 'Bilde das Gerundium selbst und prüfe Aussagen am Bild; eine Person (sta) oder mehrere (stanno).' },
      explanation: {
        en: 'Stare agrees with the subject; the gerund never changes. One person: sta lavando. Two or more people: stanno guardando. Read each statement carefully and compare it with the picture before you answer Vero or Falso.',
        it: 'Stare concorda con il soggetto; il gerundio non cambia mai. Una persona: sta lavando. Due o più persone: stanno guardando. Leggi bene ogni frase e confrontala con l’immagine prima di rispondere Vero o Falso.',
        pt: 'Stare concorda com o sujeito; o gerúndio nunca muda. Uma pessoa: sta lavando. Duas ou mais pessoas: stanno guardando. Leia bem cada frase e compare-a com a imagem antes de responder Vero ou Falso.',
        es: 'Stare concuerda con el sujeto; el gerundio nunca cambia. Una persona: sta lavando. Dos o más personas: stanno guardando. Lee bien cada frase y compárala con la imagen antes de responder Vero o Falso.',
        fr: 'Stare s’accorde avec le sujet ; le gérondif ne change jamais. Une personne : sta lavando. Deux personnes ou plus : stanno guardando. Lis bien chaque phrase et compare-la avec l’image avant de répondre Vero ou Falso.',
        de: 'Stare richtet sich nach dem Subjekt; das Gerundium bleibt immer gleich. Eine Person: sta lavando. Zwei oder mehr Personen: stanno guardando. Lies jede Aussage genau und vergleiche sie mit dem Bild, bevor du Vero oder Falso antwortest.'
      },
      example: ['Il ragazzo sta lavando i piatti. · I due ragazzi stanno guardando la TV.', 'Il ragazzo sta lavando i piatti. · I due ragazzi stanno guardando la TV.'],
      exercises: [
        pic('sg-a2-1', 'telefono', ['Complete: La ragazza ___ al telefono.', 'Completa: La ragazza ___ al telefono.'], ['sta parlando', 'sta parlendo', 'stai parlando'], 0, ['Parlare is an -are verb (-ando), and la ragazza takes sta.', 'Parlare è un verbo in -are (-ando) e la ragazza vuole sta.']),
        pic('sg-a2-2', 'dormire', ['Complete: Il ragazzo ___ nel letto.', 'Completa: Il ragazzo ___ nel letto.'], ['sta dormando', 'sta dormendo', 'stanno dormendo'], 1, ['Dormire is an -ire verb, so the gerund ends in -endo; one person takes sta.', 'Dormire è un verbo in -ire, quindi il gerundio finisce in -endo; una persona vuole sta.']),
        pic('sg-a2-3', 'lavare', ['Complete: Il ragazzo ___ i piatti.', 'Completa: Il ragazzo ___ i piatti.'], ['sta lavando', 'sta lavendo', 'sto lavando'], 0, ['Lavare → lavando; il ragazzo is third person: sta.', 'Lavare → lavando; il ragazzo è terza persona: sta.']),
        pic('sg-a2-4', 'pulire', TRUE_FALSE, VF, 1, ['False: she is cleaning the house (sta pulendo la casa), not cooking.', 'Falso: sta pulendo la casa, non sta cucinando.'], 'La donna sta cucinando la cena.'),
        pic('sg-a2-5', 'guidare', TRUE_FALSE, VF, 0, ['True: guidare → guidando. He is driving the car.', 'Vero: guidare → guidando. Sta guidando l’auto.'], 'L’uomo sta guidando l’auto.'),
        pic('sg-a2-6', 'pane', ['Complete: La donna ___ il pane.', 'Completa: La donna ___ il pane.'], ['sta comprendo', 'stanno comprando', 'sta comprando'], 2, ['Comprare is an -are verb: comprando. One person: sta.', 'Comprare è un verbo in -are: comprando. Una persona: sta.']),
        pic('sg-a2-7', 'tv', ['Complete: I due ragazzi ___ la TV.', 'Completa: I due ragazzi ___ la TV.'], ['sta guardando', 'stanno guardando', 'stiamo guardando'], 1, ['Two people (loro) take stanno: stanno guardando la TV.', 'Due persone (loro) vogliono stanno: stanno guardando la TV.']),
        pic('sg-a2-8', 'calcio', TRUE_FALSE, VF, 1, ['False: she is playing football (sta giocando a calcio).', 'Falso: sta giocando a calcio.'], 'La ragazza sta suonando la chitarra.'),
        pic('sg-a2-9', 'chitarra', ['Complete: Il ragazzo ___ la chitarra.', 'Completa: Il ragazzo ___ la chitarra.'], ['sto suonando', 'sta suonendo', 'sta suonando'], 2, ['Suonare → suonando (-are). Sto is the io form.', 'Suonare → suonando (-are). Sto è la forma di io.']),
        pic('sg-a2-10', 'piante', ['Complete: La donna ___ le piante.', 'Completa: La donna ___ le piante.'], ['sta innaffiando', 'sta innaffiendo', 'stanno innaffiando'], 0, ['Innaffiare → innaffiando (-are); one person: sta.', 'Innaffiare → innaffiando (-are); una persona: sta.'])
      ]
    },
    B1: {
      label: { en: 'Mastery', it: 'Padronanza', pt: 'Domínio', es: 'Dominio', fr: 'Maîtrise', de: 'Beherrschung' },
      focus: { en: 'All persons of stare, irregular gerunds (fare, bere) and asking what someone is doing.', it: 'Tutte le persone di stare, gerundi irregolari (fare, bere) e domande su che cosa sta facendo qualcuno.', pt: 'Todas as pessoas de stare, gerúndios irregulares (fare, bere) e perguntar o que alguém está fazendo.', es: 'Todas las personas de stare, gerundios irregulares (fare, bere) y preguntar qué está haciendo alguien.', fr: 'Toutes les personnes de stare, gérondifs irréguliers (fare, bere) et demander ce que quelqu’un est en train de faire.', de: 'Alle Personen von stare, unregelmäßige Gerundien (fare, bere) und fragen, was jemand gerade tut.' },
      explanation: {
        en: 'Stare in the present: io sto, tu stai, lui/lei sta, noi stiamo, voi state, loro stanno. Some gerunds come from an older stem: fare → facendo, bere → bevendo, dire → dicendo. To ask: Che cosa stai facendo? (What are you doing?)',
        it: 'Stare al presente: io sto, tu stai, lui/lei sta, noi stiamo, voi state, loro stanno. Alcuni gerundi derivano da una radice antica: fare → facendo, bere → bevendo, dire → dicendo. Per chiedere: Che cosa stai facendo?',
        pt: 'Stare no presente: io sto, tu stai, lui/lei sta, noi stiamo, voi state, loro stanno. Alguns gerúndios vêm de um radical antigo: fare → facendo, bere → bevendo, dire → dicendo. Para perguntar: Che cosa stai facendo? (O que você está fazendo?)',
        es: 'Stare en presente: io sto, tu stai, lui/lei sta, noi stiamo, voi state, loro stanno. Algunos gerundios vienen de una raíz antigua: fare → facendo, bere → bevendo, dire → dicendo. Para preguntar: Che cosa stai facendo? (¿Qué estás haciendo?)',
        fr: 'Stare au présent : io sto, tu stai, lui/lei sta, noi stiamo, voi state, loro stanno. Certains gérondifs viennent d’un ancien radical : fare → facendo, bere → bevendo, dire → dicendo. Pour demander : Che cosa stai facendo? (Qu’est-ce que tu es en train de faire ?)',
        de: 'Stare im Präsens: io sto, tu stai, lui/lei sta, noi stiamo, voi state, loro stanno. Manche Gerundien kommen von einem älteren Stamm: fare → facendo, bere → bevendo, dire → dicendo. Fragen: Che cosa stai facendo? (Was machst du gerade?)'
      },
      example: ['Che cosa stai facendo? · Sto bevendo un caffè. · Stiamo studiando per l’esame.', 'Che cosa stai facendo? · Sto bevendo un caffè. · Stiamo studiando per l’esame.'],
      exercises: [
        pic('sg-b1-1', 'bere', ['Complete: Io ___ un caffè.', 'Completa: Io ___ un caffè.'], ['sto bevendo', 'sto beendo', 'sto bevando'], 0, ['Io takes sto; bere has the irregular gerund bevendo.', 'Io vuole sto; bere ha il gerundio irregolare bevendo.']),
        pic('sg-b1-2', 'spesa', ['Complete: Paolo ___ la spesa.', 'Completa: Paolo ___ la spesa.'], ['sta fando', 'sta facendo', 'sta fare'], 1, ['Fare → facendo (irregular stem fac-).', 'Fare → facendo (radice irregolare fac-).']),
        pic('sg-b1-3', 'studiare', ['Complete: Noi ___ per l’esame.', 'Completa: Noi ___ per l’esame.'], ['stanno studiando', 'state studiando', 'stiamo studiando'], 2, ['Noi takes stiamo.', 'Noi vuole stiamo.']),
        pic('sg-b1-4', 'pulire', ['Complete: Voi ___ la casa?', 'Completa: Voi ___ la casa?'], ['state pulendo', 'stai pulendo', 'state pulando'], 0, ['Voi takes state; pulire is an -ire verb: pulendo.', 'Voi vuole state; pulire è un verbo in -ire: pulendo.']),
        pic('sg-b1-5', 'tv', ['Which sentence describes the picture?', 'Quale frase descrive l’immagine?'], ['Sta guardando la TV.', 'Stanno guardando la TV.', 'Stiamo guardando la TV.'], 1, ['There are two people, so the verb is stanno (loro).', 'Ci sono due persone, quindi il verbo è stanno (loro).']),
        pic('sg-b1-6', 'telefono', ['On the phone her friend asks what she is doing right now. Which question did the friend ask?', 'Al telefono l’amica le chiede che cosa fa in questo momento. Quale domanda ha fatto?'], ['Che cosa hai fatto?', 'Che cosa farai?', 'Che cosa stai facendo?'], 2, ['Stai facendo (stare + gerund) asks about an action in progress now.', 'Stai facendo (stare + gerundio) chiede di un’azione in corso adesso.'])
      ]
    }
  }
};
