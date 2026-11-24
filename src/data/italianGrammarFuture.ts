import type { LocalizedText } from '../types';
import type { GrammarExercise, GrammarTopic } from './italianGrammar';
import type { GrammarActivity } from './italianGrammarActivities';

// Il futuro — plans, predictions and suppositions (textbook unit 10). Italian
// target text stays Italian; support text is in all six interface languages.
// Support-language text is a draft pending native-speaker review.

const T = (en: string, it: string, pt: string, es: string, fr: string, de: string): LocalizedText => ({ en, it, pt, es, fr, de });
const ex = (id: string, prompt: LocalizedText, options: string[], answer: number, explanation: LocalizedText): GrammarExercise =>
  ({ id, prompt, options, answer, explanation });

const fill = (s: string): LocalizedText => T('Complete: ' + s, 'Completa: ' + s, 'Complete: ' + s, 'Completa: ' + s, 'Complète : ' + s, 'Ergänze: ' + s);
const WHICH = T('Which sentence is correct?', 'Quale frase è corretta?', 'Qual frase está correta?', '¿Qué frase es correcta?', 'Quelle phrase est correcte ?', 'Welcher Satz ist richtig?');
const choose = (context: LocalizedText): LocalizedText => T(
  context.en + ' ' + WHICH.en, context.it + ' ' + WHICH.it, context.pt + ' ' + WHICH.pt,
  context.es + ' ' + WHICH.es, context.fr + ' ' + WHICH.fr, context.de + ' ' + WHICH.de
);

const LABEL_A1 = T('Foundations', 'Fondamenti', 'Fundamentos', 'Fundamentos', 'Fondamentaux', 'Grundlagen');
const LABEL_A2 = T('Application', 'Applicazione', 'Aplicação', 'Aplicación', 'Application', 'Anwendung');
const LABEL_B1 = T('Mastery', 'Padronanza', 'Domínio', 'Dominio', 'Maîtrise', 'Beherrschung');

export const FUTURE_TOPIC: GrammarTopic = {
  id: 'future',
  title: T('Future tense · Il futuro', 'Il futuro', 'Futuro · Il futuro', 'Futuro · Il futuro', 'Futur · Il futuro', 'Futur · Il futuro'),
  subtitle: T(
    'Talk about plans, predictions and guesses.',
    'Parla di progetti, previsioni e ipotesi.',
    'Fale de planos, previsões e suposições.',
    'Habla de planes, predicciones y suposiciones.',
    'Parle de projets, de prévisions et d’hypothèses.',
    'Sprich über Pläne, Vorhersagen und Vermutungen.'
  ),
  levels: {
    A1: {
      label: LABEL_A1,
      focus: T(
        'Regular future forms of -are, -ere and -ire verbs, including spelling changes.',
        'Forme regolari del futuro dei verbi in -are, -ere e -ire, con i cambi di ortografia.',
        'Formas regulares do futuro dos verbos em -are, -ere e -ire, com as mudanças de ortografia.',
        'Formas regulares del futuro de los verbos en -are, -ere e -ire, con los cambios de ortografía.',
        'Formes régulières du futur des verbes en -are, -ere et -ire, avec les changements d’orthographe.',
        'Regelmäßige Futurformen der Verben auf -are, -ere und -ire, mit Schreibänderungen.'
      ),
      explanation: T(
        'Use the future to talk about what will happen. Take the infinitive, remove the final -e, and add -ò, -ai, -à, -emo, -ete, -anno. With -are verbs the a changes to e: parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. -ere and -ire verbs keep their vowel: prendere → prenderò, partire → partirò. Spelling: verbs in -care and -gare add h (cercare → cercherò, pagare → pagherò); verbs in -ciare and -giare lose the i (mangiare → mangerò), while other -iare verbs keep it (studiare → studierò).',
        'Il futuro serve per parlare di ciò che accadrà. Si toglie la -e finale dell’infinito e si aggiungono -ò, -ai, -à, -emo, -ete, -anno. Nei verbi in -are la a diventa e: parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. I verbi in -ere e -ire mantengono la vocale: prendere → prenderò, partire → partirò. Ortografia: i verbi in -care e -gare aggiungono h (cercare → cercherò, pagare → pagherò); i verbi in -ciare e -giare perdono la i (mangiare → mangerò), mentre gli altri verbi in -iare la mantengono (studiare → studierò).',
        'O futuro serve para falar do que vai acontecer. Tire o -e final do infinitivo e acrescente -ò, -ai, -à, -emo, -ete, -anno. Nos verbos em -are, o a muda para e: parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. Os verbos em -ere e -ire mantêm a vogal: prendere → prenderò, partire → partirò. Ortografia: os verbos em -care e -gare acrescentam h (cercare → cercherò, pagare → pagherò); os verbos em -ciare e -giare perdem o i (mangiare → mangerò), enquanto os outros verbos em -iare o mantêm (studiare → studierò).',
        'El futuro sirve para hablar de lo que pasará. Se quita la -e final del infinitivo y se añaden -ò, -ai, -à, -emo, -ete, -anno. En los verbos en -are, la a cambia a e: parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. Los verbos en -ere e -ire mantienen la vocal: prendere → prenderò, partire → partirò. Ortografía: los verbos en -care y -gare añaden h (cercare → cercherò, pagare → pagherò); los verbos en -ciare y -giare pierden la i (mangiare → mangerò), mientras que los demás verbos en -iare la mantienen (studiare → studierò).',
        'Le futur sert à parler de ce qui arrivera. On enlève le -e final de l’infinitif et on ajoute -ò, -ai, -à, -emo, -ete, -anno. Avec les verbes en -are, le a devient e : parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. Les verbes en -ere et -ire gardent leur voyelle : prendere → prenderò, partire → partirò. Orthographe : les verbes en -care et -gare ajoutent un h (cercare → cercherò, pagare → pagherò) ; les verbes en -ciare et -giare perdent le i (mangiare → mangerò), alors que les autres verbes en -iare le gardent (studiare → studierò).',
        'Mit dem Futur spricht man über das, was geschehen wird. Man streicht das End-e des Infinitivs und hängt -ò, -ai, -à, -emo, -ete, -anno an. Bei Verben auf -are wird das a zu e: parlare → parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. Verben auf -ere und -ire behalten ihren Vokal: prendere → prenderò, partire → partirò. Schreibung: Verben auf -care und -gare bekommen ein h (cercare → cercherò, pagare → pagherò); Verben auf -ciare und -giare verlieren das i (mangiare → mangerò), andere Verben auf -iare behalten es (studiare → studierò).'
      ),
      example: ['Domani parlerò con Marco. · Partiremo alle otto. · Cercherò un appartamento. · Mangeremo la pizza.', 'Domani parlerò con Marco. · Partiremo alle otto. · Cercherò un appartamento. · Mangeremo la pizza.'],
      exercises: [
        ex('fut-a1-1', fill('Domani ___ (parlare, io) con il professore.'),
          ['parlerò', 'parlerai', 'parlerà'], 0,
          T('-are verbs change a to e: parlare → parlerò (io).', 'I verbi in -are cambiano la a in e: parlare → parlerò (io).', 'Os verbos em -are mudam o a para e: parlare → parlerò (io).', 'Los verbos en -are cambian la a por e: parlare → parlerò (io).', 'Les verbes en -are changent le a en e : parlare → parlerò (io).', 'Verben auf -are wechseln a zu e: parlare → parlerò (io).')),
        ex('fut-a1-2', fill('Domani sera noi ___ (mangiare) la pizza.'),
          ['mangeremo', 'mangiaremo', 'mangerete'], 0,
          T('Verbs in -giare lose the i: mangiare → mangeremo (noi).', 'I verbi in -giare perdono la i: mangiare → mangeremo (noi).', 'Os verbos em -giare perdem o i: mangiare → mangeremo (noi).', 'Los verbos en -giare pierden la i: mangiare → mangeremo (noi).', 'Les verbes en -giare perdent le i : mangiare → mangeremo (noi).', 'Verben auf -giare verlieren das i: mangiare → mangeremo (noi).')),
        ex('fut-a1-3', fill('L’anno prossimo tu ___ (prendere) la patente.'),
          ['prenderai', 'prenderò', 'prenderanno'], 0,
          T('-ere verbs keep the e: prendere → prenderai (tu).', 'I verbi in -ere mantengono la e: prendere → prenderai (tu).', 'Os verbos em -ere mantêm o e: prendere → prenderai (tu).', 'Los verbos en -ere mantienen la e: prendere → prenderai (tu).', 'Les verbes en -ere gardent le e : prendere → prenderai (tu).', 'Verben auf -ere behalten das e: prendere → prenderai (tu).')),
        ex('fut-a1-4', fill('Lucia ___ (partire) per Roma lunedì.'),
          ['partirà', 'partirò', 'partirete'], 0,
          T('lui/lei ends in -à: partirà.', 'Con lui/lei la desinenza è -à: partirà.', 'Com lui/lei a terminação é -à: partirà.', 'Con lui/lei la terminación es -à: partirà.', 'Avec lui/lei, la terminaison est -à : partirà.', 'Bei lui/lei lautet die Endung -à: partirà.')),
        ex('fut-a1-5', fill('Ragazzi, voi ___ (arrivare) in tempo alla stazione?'),
          ['arriverete', 'arriverai', 'arriveranno'], 0,
          T('voi ends in -ete, and the a changes to e: arriverete.', 'Con voi la desinenza è -ete e la a diventa e: arriverete.', 'Com voi a terminação é -ete e o a muda para e: arriverete.', 'Con voi la terminación es -ete y la a cambia a e: arriverete.', 'Avec voi, la terminaison est -ete et le a devient e : arriverete.', 'Bei voi lautet die Endung -ete, und das a wird zu e: arriverete.')),
        ex('fut-a1-6', fill('Domani i miei amici ___ (studiare) insieme.'),
          ['studieranno', 'studierà', 'studierete'], 0,
          T('loro ends in -anno: studieranno (studiare keeps the i).', 'Con loro la desinenza è -anno: studieranno (studiare mantiene la i).', 'Com loro a terminação é -anno: studieranno (studiare mantém o i).', 'Con loro la terminación es -anno: studieranno (studiare mantiene la i).', 'Avec loro, la terminaison est -anno : studieranno (studiare garde le i).', 'Bei loro lautet die Endung -anno: studieranno (studiare behält das i).')),
        ex('fut-a1-7', fill('La settimana prossima ___ (comprare, io) un computer nuovo.'),
          ['comprerò', 'comprerai', 'compreremo'], 0,
          T('io ends in -ò: comprare → comprerò.', 'Con io la desinenza è -ò: comprare → comprerò.', 'Com io a terminação é -ò: comprare → comprerò.', 'Con io la terminación es -ò: comprare → comprerò.', 'Avec io, la terminaison est -ò : comprare → comprerò.', 'Bei io lautet die Endung -ò: comprare → comprerò.')),
        ex('fut-a1-8', fill('Domani ___ (cercare, io) un appartamento in centro.'),
          ['cercherò', 'cercerò', 'cercarò'], 0,
          T('Verbs in -care add h to keep the hard sound: cercare → cercherò.', 'I verbi in -care aggiungono h per mantenere il suono duro: cercare → cercherò.', 'Os verbos em -care acrescentam h para manter o som duro: cercare → cercherò.', 'Los verbos en -care añaden h para mantener el sonido duro: cercare → cercherò.', 'Les verbes en -care ajoutent un h pour garder le son dur : cercare → cercherò.', 'Verben auf -care bekommen ein h, damit der harte Laut bleibt: cercare → cercherò.')),
        ex('fut-a1-9', fill('Tra un mese tu ___ (pagare) il conto.'),
          ['pagherai', 'pagerai', 'pagarai'], 0,
          T('Verbs in -gare add h to keep the hard sound: pagare → pagherai.', 'I verbi in -gare aggiungono h per mantenere il suono duro: pagare → pagherai.', 'Os verbos em -gare acrescentam h para manter o som duro: pagare → pagherai.', 'Los verbos en -gare añaden h para mantener el sonido duro: pagare → pagherai.', 'Les verbes en -gare ajoutent un h pour garder le son dur : pagare → pagherai.', 'Verben auf -gare bekommen ein h, damit der harte Laut bleibt: pagare → pagherai.')),
        ex('fut-a1-10', fill('Oggi non ho tempo, ma domani noi ___ (leggere) il libro.'),
          ['leggeremo', 'leggerete', 'leggeranno'], 0,
          T('noi ends in -emo: leggere → leggeremo.', 'Con noi la desinenza è -emo: leggere → leggeremo.', 'Com noi a terminação é -emo: leggere → leggeremo.', 'Con noi la terminación es -emo: leggere → leggeremo.', 'Avec noi, la terminaison est -emo : leggere → leggeremo.', 'Bei noi lautet die Endung -emo: leggere → leggeremo.')),
        ex('fut-a1-11', choose(T('You are talking about next week.', 'Stai parlando della settimana prossima.', 'Você está falando da próxima semana.', 'Hablas de la semana que viene.', 'Tu parles de la semaine prochaine.', 'Du sprichst über die nächste Woche.')),
          ['La settimana prossima partirò per Milano.', 'La settimana prossima partirei per Milano.', 'La settimana prossima partivo per Milano.'], 0,
          T('Use the future for something that will happen: partirò. Partirei is the conditional and partivo the imperfect.', 'Si usa il futuro per qualcosa che accadrà: partirò. Partirei è il condizionale e partivo l’imperfetto.', 'Usa-se o futuro para algo que vai acontecer: partirò. Partirei é o condicional e partivo o imperfeito.', 'Se usa el futuro para algo que pasará: partirò. Partirei es el condicional y partivo el imperfecto.', 'On utilise le futur pour ce qui arrivera : partirò. Partirei est le conditionnel et partivo l’imparfait.', 'Für etwas, das geschehen wird, nimmt man das Futur: partirò. Partirei ist der Konditional und partivo das Imperfekt.'))
      ]
    },
    A2: {
      label: LABEL_A2,
      focus: T(
        'Irregular futures: essere, avere, andare, fare, venire, potere, dovere, vedere, volere, stare.',
        'Futuri irregolari: essere, avere, andare, fare, venire, potere, dovere, vedere, volere, stare.',
        'Futuros irregulares: essere, avere, andare, fare, venire, potere, dovere, vedere, volere, stare.',
        'Futuros irregulares: essere, avere, andare, fare, venire, potere, dovere, vedere, volere, stare.',
        'Futurs irréguliers : essere, avere, andare, fare, venire, potere, dovere, vedere, volere, stare.',
        'Unregelmäßige Futurformen: essere, avere, andare, fare, venire, potere, dovere, vedere, volere, stare.'
      ),
      explanation: T(
        'Many common verbs have an irregular stem, but the endings stay the same (-ò, -ai, -à, -emo, -ete, -anno). essere → sarò; fare → farò, stare → starò, dare → darò (these keep the a); avere → avrò, andare → andrò, potere → potrò, dovere → dovrò, vedere → vedrò (the vowel before the r is dropped); venire → verrò, volere → vorrò (double r). Useful time words: domani, dopodomani, la settimana prossima, l’anno prossimo, tra due giorni.',
        'Molti verbi comuni hanno un tema irregolare, ma le desinenze restano uguali (-ò, -ai, -à, -emo, -ete, -anno). essere → sarò; fare → farò, stare → starò, dare → darò (mantengono la a); avere → avrò, andare → andrò, potere → potrò, dovere → dovrò, vedere → vedrò (cade la vocale prima della r); venire → verrò, volere → vorrò (rr doppia). Espressioni di tempo utili: domani, dopodomani, la settimana prossima, l’anno prossimo, tra due giorni.',
        'Muitos verbos comuns têm um radical irregular, mas as terminações continuam as mesmas (-ò, -ai, -à, -emo, -ete, -anno). essere → sarò; fare → farò, stare → starò, dare → darò (mantêm o a); avere → avrò, andare → andrò, potere → potrò, dovere → dovrò, vedere → vedrò (cai a vogal antes do r); venire → verrò, volere → vorrò (rr dobrado). Expressões de tempo úteis: domani, dopodomani, la settimana prossima, l’anno prossimo, tra due giorni.',
        'Muchos verbos comunes tienen una raíz irregular, pero las terminaciones siguen siendo las mismas (-ò, -ai, -à, -emo, -ete, -anno). essere → sarò; fare → farò, stare → starò, dare → darò (mantienen la a); avere → avrò, andare → andrò, potere → potrò, dovere → dovrò, vedere → vedrò (cae la vocal antes de la r); venire → verrò, volere → vorrò (rr doble). Expresiones de tiempo útiles: domani, dopodomani, la settimana prossima, l’anno prossimo, tra due giorni.',
        'Beaucoup de verbes courants ont un radical irrégulier, mais les terminaisons restent les mêmes (-ò, -ai, -à, -emo, -ete, -anno). essere → sarò ; fare → farò, stare → starò, dare → darò (ils gardent le a) ; avere → avrò, andare → andrò, potere → potrò, dovere → dovrò, vedere → vedrò (la voyelle avant le r tombe) ; venire → verrò, volere → vorrò (rr double). Expressions de temps utiles : domani, dopodomani, la settimana prossima, l’anno prossimo, tra due giorni.',
        'Viele häufige Verben haben einen unregelmäßigen Stamm, aber die Endungen bleiben gleich (-ò, -ai, -à, -emo, -ete, -anno). essere → sarò; fare → farò, stare → starò, dare → darò (sie behalten das a); avere → avrò, andare → andrò, potere → potrò, dovere → dovrò, vedere → vedrò (der Vokal vor dem r fällt weg); venire → verrò, volere → vorrò (doppeltes rr). Nützliche Zeitangaben: domani, dopodomani, la settimana prossima, l’anno prossimo, tra due giorni.'
      ),
      example: ['Domani sarò a casa. · Andrò al mare. · Verrai alla festa? · Faremo un viaggio.', 'Domani sarò a casa. · Andrò al mare. · Verrai alla festa? · Faremo un viaggio.'],
      exercises: [
        ex('fut-a2-1', fill('Domani io ___ (essere) a casa tutto il giorno.'),
          ['sarò', 'sarai', 'sarà'], 0,
          T('essere has an irregular stem: sarò (io).', 'Essere ha un tema irregolare: sarò (io).', 'Essere tem um radical irregular: sarò (io).', 'Essere tiene una raíz irregular: sarò (io).', 'Essere a un radical irrégulier : sarò (io).', 'Essere hat einen unregelmäßigen Stamm: sarò (io).')),
        ex('fut-a2-2', fill('L’anno prossimo noi ___ (avere) una casa nuova.'),
          ['avremo', 'avrete', 'avranno'], 0,
          T('avere drops the first e: avr- → avremo (noi).', 'Avere perde la prima e: avr- → avremo (noi).', 'Avere perde o primeiro e: avr- → avremo (noi).', 'Avere pierde la primera e: avr- → avremo (noi).', 'Avere perd le premier e : avr- → avremo (noi).', 'Avere verliert das erste e: avr- → avremo (noi).')),
        ex('fut-a2-3', fill('Domani tu ___ (andare) dal dottore?'),
          ['andrai', 'andrò', 'andrete'], 0,
          T('andare drops the a: andr- → andrai (tu).', 'Andare perde la a: andr- → andrai (tu).', 'Andare perde o a: andr- → andrai (tu).', 'Andare pierde la a: andr- → andrai (tu).', 'Andare perd le a : andr- → andrai (tu).', 'Andare verliert das a: andr- → andrai (tu).')),
        ex('fut-a2-4', fill('Stasera i ragazzi ___ (fare) una festa.'),
          ['faranno', 'farete', 'faremo'], 0,
          T('fare keeps the a: far- → faranno (loro).', 'Fare mantiene la a: far- → faranno (loro).', 'Fare mantém o a: far- → faranno (loro).', 'Fare mantiene la a: far- → faranno (loro).', 'Fare garde le a : far- → faranno (loro).', 'Fare behält das a: far- → faranno (loro).')),
        ex('fut-a2-5', fill('Marco ___ (venire) alla festa: ha detto di sì.'),
          ['verrà', 'verrò', 'verranno'], 0,
          T('venire has a double r: verr- → verrà (lui).', 'Venire ha la rr doppia: verr- → verrà (lui).', 'Venire tem rr dobrado: verr- → verrà (lui).', 'Venire tiene rr doble: verr- → verrà (lui).', 'Venire a un rr double : verr- → verrà (lui).', 'Venire hat doppeltes rr: verr- → verrà (lui).')),
        ex('fut-a2-6', fill('Domani non ___ (potere, io) venire: ho un esame.'),
          ['potrò', 'potrai', 'potremo'], 0,
          T('potere drops the e: potr- → potrò (io).', 'Potere perde la e: potr- → potrò (io).', 'Potere perde o e: potr- → potrò (io).', 'Potere pierde la e: potr- → potrò (io).', 'Potere perd le e : potr- → potrò (io).', 'Potere verliert das e: potr- → potrò (io).')),
        ex('fut-a2-7', fill('Ragazzi, voi ___ (dovere) studiare di più prima dell’esame.'),
          ['dovrete', 'dovremo', 'dovranno'], 0,
          T('dovere drops the e: dovr- → dovrete (voi).', 'Dovere perde la e: dovr- → dovrete (voi).', 'Dovere perde o e: dovr- → dovrete (voi).', 'Dovere pierde la e: dovr- → dovrete (voi).', 'Dovere perd le e : dovr- → dovrete (voi).', 'Dovere verliert das e: dovr- → dovrete (voi).')),
        ex('fut-a2-8', fill('Tra poco tu ___ (vedere) il mare.'),
          ['vedrai', 'vedrò', 'vedranno'], 0,
          T('vedere drops the e: vedr- → vedrai (tu).', 'Vedere perde la e: vedr- → vedrai (tu).', 'Vedere perde o e: vedr- → vedrai (tu).', 'Vedere pierde la e: vedr- → vedrai (tu).', 'Vedere perd le e : vedr- → vedrai (tu).', 'Vedere verliert das e: vedr- → vedrai (tu).')),
        ex('fut-a2-9', fill('Quest’estate noi ___ (volere) andare in Sicilia.'),
          ['vorremo', 'vorrete', 'vorranno'], 0,
          T('volere has a double r: vorr- → vorremo (noi).', 'Volere ha la rr doppia: vorr- → vorremo (noi).', 'Volere tem rr dobrado: vorr- → vorremo (noi).', 'Volere tiene rr doble: vorr- → vorremo (noi).', 'Volere a un rr double : vorr- → vorremo (noi).', 'Volere hat doppeltes rr: vorr- → vorremo (noi).')),
        ex('fut-a2-10', fill('Io ___ (stare) a casa tua per una settimana.'),
          ['starò', 'starai', 'starà'], 0,
          T('stare keeps the a: star- → starò (io).', 'Stare mantiene la a: star- → starò (io).', 'Stare mantém o a: star- → starò (io).', 'Stare mantiene la a: star- → starò (io).', 'Stare garde le a : star- → starò (io).', 'Stare behält das a: star- → starò (io).')),
        ex('fut-a2-11', choose(T('You are talking about next summer with your friends (noi).', 'Parli della prossima estate con i tuoi amici (noi).', 'Você fala do próximo verão com os seus amigos (noi).', 'Hablas del próximo verano con tus amigos (noi).', 'Tu parles de l’été prochain avec tes amis (noi).', 'Du sprichst mit deinen Freunden (noi) über den nächsten Sommer.')),
          ['L’estate prossima faremo un viaggio in Grecia.', 'L’estate prossima faciamo un viaggio in Grecia.', 'L’estate prossima fareste un viaggio in Grecia.'], 0,
          T('Fare is irregular but keeps the a: farò, farai, farà, faremo. Fareste is voi.', 'Fare è irregolare ma mantiene la a: farò, farai, farà, faremo. Fareste è voi.', 'Fare é irregular mas mantém o a: farò, farai, farà, faremo. Fareste é voi.', 'Fare es irregular pero mantiene la a: farò, farai, farà, faremo. Fareste es voi.', 'Fare est irrégulier mais garde le a : farò, farai, farà, faremo. Fareste correspond à voi.', 'Fare ist unregelmäßig, behält aber das a: farò, farai, farà, faremo. Fareste ist voi.'))
      ]
    },
    B1: {
      label: LABEL_B1,
      focus: T(
        'Future for guesses, the future perfect (avrò finito) and se / quando / appena + future.',
        'Futuro per le supposizioni, futuro anteriore (avrò finito) e se / quando / appena + futuro.',
        'Futuro para suposições, futuro anterior (avrò finito) e se / quando / appena + futuro.',
        'Futuro para suposiciones, futuro perfecto (avrò finito) y se / quando / appena + futuro.',
        'Futur pour les suppositions, futur antérieur (avrò finito) et se / quando / appena + futur.',
        'Futur für Vermutungen, Futur II (avrò finito) und se / quando / appena + Futur.'
      ),
      explanation: T(
        'The future also expresses a guess about the present: Sarà a casa (he’s probably home), Avrà trent’anni (he’s about thirty). The future perfect is avere or essere in the future + the past participle (avrò finito, saremo arrivati). It describes something done before another future action: Quando avrò finito, ti telefonerò. After quando, appena and dopo che, Italian uses the future where English uses the present: Appena saremo arrivati, ti chiameremo. After se, the future is also possible: Se avrò tempo, verrò.',
        'Il futuro esprime anche una supposizione sul presente: Sarà a casa (probabilmente è a casa), Avrà trent’anni (avrà circa trent’anni). Il futuro anteriore è avere o essere al futuro + participio passato (avrò finito, saremo arrivati). Descrive qualcosa di concluso prima di un’altra azione futura: Quando avrò finito, ti telefonerò. Dopo quando, appena e dopo che l’italiano usa il futuro dove altre lingue usano il presente: Appena saremo arrivati, ti chiameremo. Dopo se è possibile anche il futuro: Se avrò tempo, verrò.',
        'O futuro também exprime uma suposição sobre o presente: Sarà a casa (ele provavelmente está em casa), Avrà trent’anni (deve ter uns trinta anos). O futuro anterior é avere ou essere no futuro + particípio passado (avrò finito, saremo arrivati). Descreve algo concluído antes de outra ação futura: Quando avrò finito, ti telefonerò. Depois de quando, appena e dopo che, o italiano usa o futuro onde outras línguas usam o presente: Appena saremo arrivati, ti chiameremo. Depois de se, o futuro também é possível: Se avrò tempo, verrò.',
        'El futuro también expresa una suposición sobre el presente: Sarà a casa (probablemente está en casa), Avrà trent’anni (tendrá unos treinta años). El futuro perfecto es avere o essere en futuro + participio (avrò finito, saremo arrivati). Describe algo terminado antes de otra acción futura: Quando avrò finito, ti telefonerò. Después de quando, appena y dopo che, el italiano usa el futuro donde otras lenguas usan el presente: Appena saremo arrivati, ti chiameremo. Después de se, también es posible el futuro: Se avrò tempo, verrò.',
        'Le futur exprime aussi une supposition sur le présent : Sarà a casa (il est probablement chez lui), Avrà trent’anni (il doit avoir une trentaine d’années). Le futur antérieur est avere ou essere au futur + participe passé (avrò finito, saremo arrivati). Il décrit quelque chose d’achevé avant une autre action future : Quando avrò finito, ti telefonerò. Après quando, appena et dopo che, l’italien emploie le futur là où d’autres langues emploient le présent : Appena saremo arrivati, ti chiameremo. Après se, le futur est aussi possible : Se avrò tempo, verrò.',
        'Das Futur drückt auch eine Vermutung über die Gegenwart aus: Sarà a casa (er ist wahrscheinlich zu Hause), Avrà trent’anni (er wird etwa dreißig sein). Das Futur II besteht aus avere oder essere im Futur + Partizip (avrò finito, saremo arrivati). Es beschreibt etwas, das vor einer anderen zukünftigen Handlung abgeschlossen ist: Quando avrò finito, ti telefonerò. Nach quando, appena und dopo che steht im Italienischen das Futur, wo andere Sprachen das Präsens verwenden: Appena saremo arrivati, ti chiameremo. Nach se ist das Futur ebenfalls möglich: Se avrò tempo, verrò.'
      ),
      example: ['Sarà a casa. · Avrà trent’anni. · Quando avrò finito, ti telefonerò. · Appena saremo arrivati, ti chiameremo.', 'Sarà a casa. · Avrà trent’anni. · Quando avrò finito, ti telefonerò. · Appena saremo arrivati, ti chiameremo.'],
      exercises: [
        ex('fut-b1-1', fill('Sono le tre: Marco ___ (essere) già a casa, di solito torna presto.'),
          ['sarà', 'è stato', 'sarebbe'], 0,
          T('The future expresses a guess about the present: sarà = he is probably.', 'Il futuro esprime una supposizione sul presente: sarà = probabilmente è.', 'O futuro exprime uma suposição sobre o presente: sarà = provavelmente está.', 'El futuro expresa una suposición sobre el presente: sarà = probablemente está.', 'Le futur exprime une supposition sur le présent : sarà = il est probablement.', 'Das Futur drückt eine Vermutung über die Gegenwart aus: sarà = er ist wahrscheinlich.')),
        ex('fut-b1-2', fill('Quanti anni ha Luca? Non so, ___ (avere) trent’anni.'),
          ['avrà', 'ha avuto', 'avrebbe'], 0,
          T('avrà = he is about thirty (a guess).', 'Avrà = avrà circa trent’anni (supposizione).', 'Avrà = deve ter uns trinta anos (suposição).', 'Avrà = tendrá unos treinta años (suposición).', 'Avrà = il doit avoir une trentaine d’années (supposition).', 'Avrà = er wird etwa dreißig sein (Vermutung).')),
        ex('fut-b1-3', fill('Quando ___ (finire, io) i compiti, ti telefonerò.'),
          ['avrò finito', 'sarò finito', 'avevo finito'], 0,
          T('The future perfect for an action finished before another future action: avrò finito. Finire takes avere.', 'Il futuro anteriore per un’azione conclusa prima di un’altra azione futura: avrò finito. Finire vuole avere.', 'O futuro anterior para uma ação concluída antes de outra ação futura: avrò finito. Finire usa avere.', 'El futuro perfecto para una acción terminada antes de otra acción futura: avrò finito. Finire usa avere.', 'Le futur antérieur pour une action achevée avant une autre action future : avrò finito. Finire se conjugue avec avere.', 'Das Futur II für eine Handlung, die vor einer anderen zukünftigen abgeschlossen ist: avrò finito. Finire wird mit avere gebildet.')),
        ex('fut-b1-4', fill('Appena ___ (arrivare, noi) a Roma, ti chiameremo.'),
          ['saremo arrivati', 'avremo arrivato', 'eravamo arrivati'], 0,
          T('Arrivare takes essere, so: saremo arrivati (noi).', 'Arrivare vuole essere, quindi: saremo arrivati (noi).', 'Arrivare usa essere, então: saremo arrivati (noi).', 'Arrivare usa essere, así que: saremo arrivati (noi).', 'Arrivare se conjugue avec essere, donc : saremo arrivati (noi).', 'Arrivare wird mit essere gebildet, also: saremo arrivati (noi).')),
        ex('fut-b1-5', fill('Se domani ___ (avere) tempo, verrò al cinema con te.'),
          ['avrò', 'avessi', 'avrei'], 0,
          T('For a real possibility, se can be followed by the future: se avrò tempo.', 'Per una possibilità reale, dopo se può esserci il futuro: se avrò tempo.', 'Para uma possibilidade real, depois de se pode vir o futuro: se avrò tempo.', 'Para una posibilidad real, después de se puede ir el futuro: se avrò tempo.', 'Pour une possibilité réelle, se peut être suivi du futur : se avrò tempo.', 'Bei einer realen Möglichkeit kann nach se das Futur stehen: se avrò tempo.')),
        ex('fut-b1-6', choose(T('You see a closed shop at lunchtime and guess why.', 'Vedi un negozio chiuso all’ora di pranzo e fai un’ipotesi.', 'Você vê uma loja fechada na hora do almoço e imagina o motivo.', 'Ves una tienda cerrada a la hora de comer y haces una suposición.', 'Tu vois un magasin fermé à l’heure du déjeuner et tu fais une supposition.', 'Du siehst mittags einen geschlossenen Laden und stellst eine Vermutung an.')),
          ['Sarà in pausa pranzo.', 'Fu in pausa pranzo.', 'Sarò in pausa pranzo.'], 0,
          T('Sarà expresses a probability about the present (he is probably…). Sarò is io; fu is the remote past.', 'Sarà esprime una probabilità sul presente (probabilmente è…). Sarò è io; fu è il passato remoto.', 'Sarà exprime uma probabilidade sobre o presente (provavelmente está…). Sarò é io; fu é o passato remoto.', 'Sarà expresa una probabilidad sobre el presente (probablemente está…). Sarò es io; fu es el pretérito remoto.', 'Sarà exprime une probabilité sur le présent (il est probablement…). Sarò correspond à io ; fu est le passé simple.', 'Sarà drückt eine Wahrscheinlichkeit über die Gegenwart aus (er ist wohl…). Sarò ist io; fu ist das Passato remoto.')),
        ex('fut-b1-7', fill('Dopo che tu ___ (mangiare), usciremo a fare una passeggiata.'),
          ['avrai mangiato', 'sarai mangiato', 'avevi mangiato'], 0,
          T('After dopo che, use the future perfect: avrai mangiato (mangiare takes avere).', 'Dopo dopo che si usa il futuro anteriore: avrai mangiato (mangiare vuole avere).', 'Depois de dopo che usa-se o futuro anterior: avrai mangiato (mangiare usa avere).', 'Después de dopo che se usa el futuro perfecto: avrai mangiato (mangiare usa avere).', 'Après dopo che, on utilise le futur antérieur : avrai mangiato (mangiare se conjugue avec avere).', 'Nach dopo che steht das Futur II: avrai mangiato (mangiare wird mit avere gebildet).'))
      ]
    }
  }
};

const title = {
  correct: T('Correct the sentence', 'Correggi la frase', 'Corrija a frase', 'Corrige la frase', 'Corrige la phrase', 'Korrigiere den Satz'),
  order: T('Build the sentence', 'Costruisci la frase', 'Monte a frase', 'Construye la frase', 'Construis la phrase', 'Bilde den Satz'),
  translate: T('Translate into Italian', 'Traduci in italiano', 'Traduza para o italiano', 'Traduce al italiano', 'Traduis en italien', 'Übersetze ins Italienische'),
  write: T('Write about your plans', 'Scrivi dei tuoi progetti', 'Escreva sobre os seus planos', 'Escribe sobre tus planes', 'Écris sur tes projets', 'Schreibe über deine Pläne')
};

export const FUTURE_ACTIVITIES: GrammarActivity[] = [
  { topicId: 'future', id: 'future-a1-correct', level: 'A1', type: 'correct', title: title.correct,
    prompt: T('Correct the spelling of the future form.', 'Correggi l’ortografia della forma di futuro.', 'Corrija a ortografia da forma de futuro.', 'Corrige la ortografía de la forma de futuro.', 'Corrige l’orthographe de la forme du futur.', 'Korrigiere die Schreibung der Futurform.'),
    source: 'Domani mangiaremo la pizza insieme.', acceptedAnswers: ['Domani mangeremo la pizza insieme.'], modelAnswer: 'Domani mangeremo la pizza insieme.',
    hint: T('Verbs in -giare lose the i before the future ending.', 'I verbi in -giare perdono la i davanti alla desinenza del futuro.', 'Os verbos em -giare perdem o i antes da terminação do futuro.', 'Los verbos en -giare pierden la i ante la terminación del futuro.', 'Les verbes en -giare perdent le i devant la terminaison du futur.', 'Verben auf -giare verlieren das i vor der Futurendung.'),
    explanation: T('Mangiare → mangeremo: the i disappears, and the a becomes e.', 'Mangiare → mangeremo: la i scompare e la a diventa e.', 'Mangiare → mangeremo: o i desaparece e o a vira e.', 'Mangiare → mangeremo: la i desaparece y la a se convierte en e.', 'Mangiare → mangeremo : le i disparaît et le a devient e.', 'Mangiare → mangeremo: das i fällt weg, und das a wird zu e.') },
  { topicId: 'future', id: 'future-a1-order', level: 'A1', type: 'order', title: title.order,
    prompt: T('Arrange the words to say what you will do tomorrow.', 'Metti in ordine le parole per dire che cosa farai domani.', 'Organize as palavras para dizer o que você vai fazer amanhã.', 'Ordena las palabras para decir qué harás mañana.', 'Range les mots pour dire ce que tu feras demain.', 'Ordne die Wörter, um zu sagen, was du morgen tun wirst.'),
    words: ['il', 'Domani', 'delle', 'treno', 'otto.', 'prenderò'], modelAnswer: 'Domani prenderò il treno delle otto.',
    hint: T('Start with the time word, then the future of prendere.', 'Inizia con l’espressione di tempo, poi il futuro di prendere.', 'Comece pela expressão de tempo, depois o futuro de prendere.', 'Empieza por la expresión de tiempo y luego el futuro de prendere.', 'Commence par l’expression de temps, puis le futur de prendere.', 'Beginne mit der Zeitangabe, dann folgt das Futur von prendere.'),
    explanation: T('Domani prenderò: prendere → prenderò (io).', 'Domani prenderò: prendere → prenderò (io).', 'Domani prenderò: prendere → prenderò (io).', 'Domani prenderò: prendere → prenderò (io).', 'Domani prenderò : prendere → prenderò (io).', 'Domani prenderò: prendere → prenderò (io).') },
  { topicId: 'future', id: 'future-a1-translate', level: 'A1', type: 'translate', title: title.translate,
    prompt: T('Translate: Tomorrow I will call my mother.', 'Traduci: “Tomorrow I will call my mother.”', 'Traduza: Amanhã vou ligar para a minha mãe.', 'Traduce: Mañana llamaré a mi madre.', 'Traduis : Demain j’appellerai ma mère.', 'Übersetze: Morgen rufe ich meine Mutter an.'),
    source: T('Tomorrow I will call my mother.', 'Tomorrow I will call my mother.', 'Amanhã vou ligar para a minha mãe.', 'Mañana llamaré a mi madre.', 'Demain j’appellerai ma mère.', 'Morgen rufe ich meine Mutter an.'),
    acceptedAnswers: ['Domani telefonerò a mia madre.', 'Domani chiamerò mia madre.'], modelAnswer: 'Domani telefonerò a mia madre.',
    hint: T('Telefonare takes a (a mia madre); chiamare takes no preposition.', 'Telefonare vuole a (a mia madre); chiamare non vuole preposizione.', 'Telefonare leva a (a mia madre); chiamare não leva preposição.', 'Telefonare lleva a (a mia madre); chiamare no lleva preposición.', 'Telefonare se construit avec a (a mia madre) ; chiamare sans préposition.', 'Telefonare steht mit a (a mia madre); chiamare ohne Präposition.'),
    explanation: T('Telefonare → telefonerò; chiamare → chiamerò. Both are regular -are futures.', 'Telefonare → telefonerò; chiamare → chiamerò. Sono entrambi futuri regolari in -are.', 'Telefonare → telefonerò; chiamare → chiamerò. Ambos são futuros regulares em -are.', 'Telefonare → telefonerò; chiamare → chiamerò. Ambos son futuros regulares en -are.', 'Telefonare → telefonerò ; chiamare → chiamerò. Ce sont deux futurs réguliers en -are.', 'Telefonare → telefonerò; chiamare → chiamerò. Beides sind regelmäßige Futurformen auf -are.') },
  { topicId: 'future', id: 'future-a1-write', level: 'A1', type: 'write', title: title.write,
    prompt: T('Write three sentences about your plans for next week, using the future.', 'Scrivi tre frasi sui tuoi programmi per la settimana prossima, usando il futuro.', 'Escreva três frases sobre os seus planos para a próxima semana, usando o futuro.', 'Escribe tres frases sobre tus planes para la semana que viene, usando el futuro.', 'Écris trois phrases sur tes projets pour la semaine prochaine, en utilisant le futur.', 'Schreibe drei Sätze über deine Pläne für nächste Woche und verwende das Futur.'),
    modelAnswer: 'La settimana prossima studierò italiano. Mercoledì incontrerò un amico. Il fine settimana riposerò a casa.',
    hint: T('Use regular futures and a time word in each sentence.', 'Usa futuri regolari e un’espressione di tempo in ogni frase.', 'Use futuros regulares e uma expressão de tempo em cada frase.', 'Usa futuros regulares y una expresión de tiempo en cada frase.', 'Utilise des futurs réguliers et une expression de temps dans chaque phrase.', 'Verwende regelmäßige Futurformen und in jedem Satz eine Zeitangabe.'),
    explanation: T('Check each ending and the spelling of verbs like cercare or mangiare. Your plans can differ from the model.', 'Controlla ogni desinenza e l’ortografia di verbi come cercare o mangiare. I tuoi programmi possono essere diversi dal modello.', 'Verifique cada terminação e a ortografia de verbos como cercare ou mangiare. Os seus planos podem ser diferentes do modelo.', 'Comprueba cada terminación y la ortografía de verbos como cercare o mangiare. Tus planes pueden ser distintos del modelo.', 'Vérifie chaque terminaison et l’orthographe de verbes comme cercare ou mangiare. Tes projets peuvent différer du modèle.', 'Prüfe jede Endung und die Schreibung von Verben wie cercare oder mangiare. Deine Pläne dürfen vom Modell abweichen.') },
  { topicId: 'future', id: 'future-a2-correct', level: 'A2', type: 'correct', title: title.correct,
    prompt: T('Correct the irregular future.', 'Correggi il futuro irregolare.', 'Corrija o futuro irregular.', 'Corrige el futuro irregular.', 'Corrige le futur irrégulier.', 'Korrigiere das unregelmäßige Futur.'),
    source: 'Domani tu andarai al mercato.', acceptedAnswers: ['Domani tu andrai al mercato.'], modelAnswer: 'Domani tu andrai al mercato.',
    hint: T('Andare has an irregular stem: andr-.', 'Andare ha un tema irregolare: andr-.', 'Andare tem um radical irregular: andr-.', 'Andare tiene una raíz irregular: andr-.', 'Andare a un radical irrégulier : andr-.', 'Andare hat einen unregelmäßigen Stamm: andr-.'),
    explanation: T('Andare → andrò, andrai, andrà, andremo, andrete, andranno.', 'Andare → andrò, andrai, andrà, andremo, andrete, andranno.', 'Andare → andrò, andrai, andrà, andremo, andrete, andranno.', 'Andare → andrò, andrai, andrà, andremo, andrete, andranno.', 'Andare → andrò, andrai, andrà, andremo, andrete, andranno.', 'Andare → andrò, andrai, andrà, andremo, andrete, andranno.') },
  { topicId: 'future', id: 'future-a2-order', level: 'A2', type: 'order', title: title.order,
    prompt: T('Arrange the words to talk about next year.', 'Metti in ordine le parole per parlare dell’anno prossimo.', 'Organize as palavras para falar do próximo ano.', 'Ordena las palabras para hablar del año que viene.', 'Range les mots pour parler de l’année prochaine.', 'Ordne die Wörter, um über das nächste Jahr zu sprechen.'),
    words: ['Il', 'prossimo', 'anno', 'avremo', 'una', 'casa', 'nuova.'], modelAnswer: 'Il prossimo anno avremo una casa nuova.',
    hint: T('Avere has an irregular stem: avr-.', 'Avere ha un tema irregolare: avr-.', 'Avere tem um radical irregular: avr-.', 'Avere tiene una raíz irregular: avr-.', 'Avere a un radical irrégulier : avr-.', 'Avere hat einen unregelmäßigen Stamm: avr-.'),
    explanation: T('Avremo is the noi future of avere.', 'Avremo è il futuro di noi di avere.', 'Avremo é o futuro de noi de avere.', 'Avremo es el futuro de noi de avere.', 'Avremo est le futur de noi de avere.', 'Avremo ist das Futur von noi von avere.') },
  { topicId: 'future', id: 'future-a2-translate', level: 'A2', type: 'translate', title: title.translate,
    prompt: T('Translate: Next summer we will go to Sicily.', 'Traduci: “Next summer we will go to Sicily.”', 'Traduza: No próximo verão iremos à Sicília.', 'Traduce: El próximo verano iremos a Sicilia.', 'Traduis : L’été prochain nous irons en Sicile.', 'Übersetze: Nächsten Sommer fahren wir nach Sizilien.'),
    source: T('Next summer we will go to Sicily.', 'Next summer we will go to Sicily.', 'No próximo verão iremos à Sicília.', 'El próximo verano iremos a Sicilia.', 'L’été prochain nous irons en Sicile.', 'Nächsten Sommer fahren wir nach Sizilien.'),
    acceptedAnswers: ['L’estate prossima andremo in Sicilia.', 'La prossima estate andremo in Sicilia.'], modelAnswer: 'L’estate prossima andremo in Sicilia.',
    hint: T('Andare → andremo; countries and regions take in.', 'Andare → andremo; con regioni e paesi si usa in.', 'Andare → andremo; com regiões e países usa-se in.', 'Andare → andremo; con regiones y países se usa in.', 'Andare → andremo ; avec les régions et les pays on utilise in.', 'Andare → andremo; bei Regionen und Ländern steht in.'),
    explanation: T('Andremo is the noi future of andare; in Sicilia names the destination.', 'Andremo è il futuro di noi di andare; in Sicilia indica la destinazione.', 'Andremo é o futuro de noi de andare; in Sicilia indica o destino.', 'Andremo es el futuro de noi de andare; in Sicilia indica el destino.', 'Andremo est le futur de noi de andare ; in Sicilia indique la destination.', 'Andremo ist das Futur von noi von andare; in Sicilia nennt das Ziel.') },
  { topicId: 'future', id: 'future-a2-write', level: 'A2', type: 'write', title: title.write,
    prompt: T('Write three sentences about your next holiday, using irregular futures (essere, fare, andare, venire…).', 'Scrivi tre frasi sulla tua prossima vacanza, usando futuri irregolari (essere, fare, andare, venire…).', 'Escreva três frases sobre as suas próximas férias, usando futuros irregulares (essere, fare, andare, venire…).', 'Escribe tres frases sobre tus próximas vacaciones, usando futuros irregulares (essere, fare, andare, venire…).', 'Écris trois phrases sur tes prochaines vacances, avec des futurs irréguliers (essere, fare, andare, venire…).', 'Schreibe drei Sätze über deinen nächsten Urlaub und verwende unregelmäßige Futurformen (essere, fare, andare, venire…).'),
    modelAnswer: 'L’anno prossimo andrò al mare con i miei amici. Faremo molte gite e vedremo posti nuovi. Sarà una vacanza bellissima!',
    hint: T('Irregular stems: sar-, far-, andr-, verr-, vedr-, avr-.', 'Temi irregolari: sar-, far-, andr-, verr-, vedr-, avr-.', 'Radicais irregulares: sar-, far-, andr-, verr-, vedr-, avr-.', 'Raíces irregulares: sar-, far-, andr-, verr-, vedr-, avr-.', 'Radicaux irréguliers : sar-, far-, andr-, verr-, vedr-, avr-.', 'Unregelmäßige Stämme: sar-, far-, andr-, verr-, vedr-, avr-.'),
    explanation: T('Check each irregular stem against the list. Your plans can differ from the model.', 'Controlla ogni tema irregolare con l’elenco. I tuoi programmi possono essere diversi dal modello.', 'Verifique cada radical irregular com a lista. Os seus planos podem ser diferentes do modelo.', 'Comprueba cada raíz irregular con la lista. Tus planes pueden ser distintos del modelo.', 'Vérifie chaque radical irrégulier avec la liste. Tes projets peuvent différer du modèle.', 'Prüfe jeden unregelmäßigen Stamm anhand der Liste. Deine Pläne dürfen vom Modell abweichen.') },
  { topicId: 'future', id: 'future-b1-correct', level: 'B1', type: 'correct', title: title.correct,
    prompt: T('Correct the verb tense after quando.', 'Correggi il tempo verbale dopo quando.', 'Corrija o tempo verbal depois de quando.', 'Corrige el tiempo verbal después de quando.', 'Corrige le temps du verbe après quando.', 'Korrigiere die Zeitform nach quando.'),
    source: 'Quando avrò finito di studiare, uscirei con gli amici.', acceptedAnswers: ['Quando avrò finito di studiare, uscirò con gli amici.'], modelAnswer: 'Quando avrò finito di studiare, uscirò con gli amici.',
    hint: T('Both actions are in the future: use uscirò, not the conditional.', 'Entrambe le azioni sono nel futuro: usa uscirò, non il condizionale.', 'As duas ações estão no futuro: use uscirò, não o condicional.', 'Las dos acciones están en el futuro: usa uscirò, no el condicional.', 'Les deux actions sont au futur : utilise uscirò, pas le conditionnel.', 'Beide Handlungen liegen in der Zukunft: verwende uscirò, nicht den Konditional.'),
    explanation: T('Uscirei would mean “I would go out”. A plan after quando uses the future: uscirò.', 'Uscirei è il condizionale (“uscirei”). Un progetto dopo quando usa il futuro: uscirò.', 'Uscirei significaria “eu sairia”. Um plano depois de quando usa o futuro: uscirò.', 'Uscirei significaría «saldría». Un plan después de quando usa el futuro: uscirò.', 'Uscirei voudrait dire « je sortirais ». Un projet après quando utilise le futur : uscirò.', 'Uscirei hieße „ich würde ausgehen“. Ein Plan nach quando verwendet das Futur: uscirò.') },
  { topicId: 'future', id: 'future-b1-order', level: 'B1', type: 'order', title: title.order,
    prompt: T('Arrange the words with the future perfect.', 'Metti in ordine le parole con il futuro anteriore.', 'Organize as palavras com o futuro anterior.', 'Ordena las palabras con el futuro perfecto.', 'Range les mots avec le futur antérieur.', 'Ordne die Wörter mit dem Futur II.'),
    words: ['telefoneremo.', 'saremo', 'Appena', 'ti', 'arrivati,'], modelAnswer: 'Appena saremo arrivati, ti telefoneremo.',
    hint: T('Appena + future perfect, then the main verb in the future.', 'Appena + futuro anteriore, poi il verbo principale al futuro.', 'Appena + futuro anterior, depois o verbo principal no futuro.', 'Appena + futuro perfecto, luego el verbo principal en futuro.', 'Appena + futur antérieur, puis le verbe principal au futur.', 'Appena + Futur II, dann das Hauptverb im Futur.'),
    explanation: T('Saremo arrivati (essere + participle) happens before ti telefoneremo.', 'Saremo arrivati (essere + participio) avviene prima di ti telefoneremo.', 'Saremo arrivati (essere + particípio) acontece antes de ti telefoneremo.', 'Saremo arrivati (essere + participio) ocurre antes de ti telefoneremo.', 'Saremo arrivati (essere + participe) a lieu avant ti telefoneremo.', 'Saremo arrivati (essere + Partizip) geschieht vor ti telefoneremo.') },
  { topicId: 'future', id: 'future-b1-translate', level: 'B1', type: 'translate', title: title.translate,
    prompt: T('Translate: Luca is probably at work now.', 'Traduci: “Luca is probably at work now.”', 'Traduza: O Luca deve estar no trabalho agora.', 'Traduce: Luca estará en el trabajo ahora.', 'Traduis : Luca doit être au travail en ce moment.', 'Übersetze: Luca ist jetzt wahrscheinlich bei der Arbeit.'),
    source: T('Luca is probably at work now.', 'Luca is probably at work now.', 'O Luca deve estar no trabalho agora.', 'Luca estará en el trabajo ahora.', 'Luca doit être au travail en ce moment.', 'Luca ist jetzt wahrscheinlich bei der Arbeit.'),
    acceptedAnswers: ['Luca sarà al lavoro adesso.', 'Luca sarà al lavoro ora.'], modelAnswer: 'Luca sarà al lavoro adesso.',
    hint: T('Use the future of essere to express a guess about the present.', 'Usa il futuro di essere per esprimere una supposizione sul presente.', 'Use o futuro de essere para exprimir uma suposição sobre o presente.', 'Usa el futuro de essere para expresar una suposición sobre el presente.', 'Utilise le futur de essere pour exprimer une supposition sur le présent.', 'Verwende das Futur von essere für eine Vermutung über die Gegenwart.'),
    explanation: T('Sarà al lavoro = he is probably at work (a guess, not a plan).', 'Sarà al lavoro = probabilmente è al lavoro (supposizione, non progetto).', 'Sarà al lavoro = provavelmente está no trabalho (suposição, não plano).', 'Sarà al lavoro = probablemente está en el trabajo (suposición, no plan).', 'Sarà al lavoro = il est probablement au travail (supposition, pas un projet).', 'Sarà al lavoro = er ist wahrscheinlich bei der Arbeit (Vermutung, kein Plan).') },
  { topicId: 'future', id: 'future-b1-write', level: 'B1', type: 'write', title: title.write,
    prompt: T('Write three sentences: a guess about someone, a plan with quando + future perfect, and a condition with se.', 'Scrivi tre frasi: una supposizione su qualcuno, un progetto con quando + futuro anteriore e una condizione con se.', 'Escreva três frases: uma suposição sobre alguém, um plano com quando + futuro anterior e uma condição com se.', 'Escribe tres frases: una suposición sobre alguien, un plan con quando + futuro perfecto y una condición con se.', 'Écris trois phrases : une supposition sur quelqu’un, un projet avec quando + futur antérieur et une condition avec se.', 'Schreibe drei Sätze: eine Vermutung über jemanden, einen Plan mit quando + Futur II und eine Bedingung mit se.'),
    modelAnswer: 'Mia sorella sarà a casa adesso. Quando avrò finito l’università, cercherò lavoro. Se avrò tempo, viaggerò molto.',
    hint: T('Sarà = a guess; avrò finito = done before another action; se avrò = a real condition.', 'Sarà = supposizione; avrò finito = concluso prima di un’altra azione; se avrò = condizione reale.', 'Sarà = suposição; avrò finito = concluído antes de outra ação; se avrò = condição real.', 'Sarà = suposición; avrò finito = terminado antes de otra acción; se avrò = condición real.', 'Sarà = supposition ; avrò finito = achevé avant une autre action ; se avrò = condition réelle.', 'Sarà = Vermutung; avrò finito = vor einer anderen Handlung abgeschlossen; se avrò = reale Bedingung.'),
    explanation: T('Check the auxiliary and participle in the future perfect. Your sentences can differ from the model.', 'Controlla l’ausiliare e il participio nel futuro anteriore. Le tue frasi possono essere diverse dal modello.', 'Verifique o auxiliar e o particípio no futuro anterior. As suas frases podem ser diferentes do modelo.', 'Comprueba el auxiliar y el participio en el futuro perfecto. Tus frases pueden ser distintas del modelo.', 'Vérifie l’auxiliaire et le participe du futur antérieur. Tes phrases peuvent différer du modèle.', 'Prüfe Hilfsverb und Partizip im Futur II. Deine Sätze dürfen vom Modell abweichen.') }
];
