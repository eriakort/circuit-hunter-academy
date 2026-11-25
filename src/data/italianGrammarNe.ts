import type { GrammarTopic } from './italianGrammar';
import type { GrammarActivity } from './italianGrammarActivities';
import { T, LABELS, buildExercises, buildActivities, fill, reply, pick } from './italianGrammarKit';

// The particle ne — quantities, “of it / about it”, “from there”, and combined forms.
// Italian target text stays Italian; support text is a draft pending native-speaker review.
// Participle agreement with quantitative ne follows the standard rule; in everyday speech
// many Italians leave the participle unchanged.

const R_QTY = T(
  'Ne replaces “of it / of them” when you talk about a quantity. Keep the number or quantity in the sentence: Quanti libri hai? Ne ho tre. Example: {x}.',
  'Ne sostituisce “di esso / di essi” quando si parla di quantità. Il numero o la quantità resta nella frase: Quanti libri hai? Ne ho tre. Esempio: {x}.',
  'Ne substitui “disso / deles” quando se fala de quantidade. O número ou a quantidade fica na frase: Quanti libri hai? Ne ho tre. Exemplo: {x}.',
  'Ne sustituye “de ello / de ellos” cuando se habla de cantidad. El número o la cantidad se queda en la frase: Quanti libri hai? Ne ho tre. Ejemplo: {x}.',
  'Ne remplace « en » (de cela / d’eux) quand on parle d’une quantité. Le nombre ou la quantité reste dans la phrase : Quanti libri hai? Ne ho tre. Exemple : {x}.',
  'Ne ersetzt „davon“, wenn es um eine Menge geht. Die Zahl oder Menge bleibt im Satz: Quanti libri hai? Ne ho tre. Beispiel: {x}.'
);
const R_ZERO = T(
  'For “none”, use non + ne + verb: Hai fratelli? No, non ne ho. The little word ne is still needed. Example: {x}.',
  'Per “nessuno / niente” si usa non + ne + verbo: Hai fratelli? No, non ne ho. La parolina ne serve ancora. Esempio: {x}.',
  'Para “nenhum / nada” usa-se non + ne + verbo: Hai fratelli? No, non ne ho. A palavrinha ne continua a ser necessária. Exemplo: {x}.',
  'Para “ninguno / nada” se usa non + ne + verbo: Hai fratelli? No, non ne ho. La palabrita ne sigue haciendo falta. Ejemplo: {x}.',
  'Pour « aucun / rien » on emploie non + ne + verbe : Hai fratelli? No, non ne ho. Le petit mot ne reste nécessaire. Exemple : {x}.',
  'Für „keine / nichts“ benutzt man non + ne + Verb: Hai fratelli? No, non ne ho. Das Wörtchen ne ist weiterhin nötig. Beispiel: {x}.'
);
const R_DI = T(
  'Ne also replaces di + something (“of it, about it”): Parli di calcio? Sì, ne parlo. Hai paura del buio? Sì, ne ho paura. Example: {x}.',
  'Ne sostituisce anche di + qualcosa (“di questo, a proposito di questo”): Parli di calcio? Sì, ne parlo. Hai paura del buio? Sì, ne ho paura. Esempio: {x}.',
  'Ne também substitui di + alguma coisa (“disso, a esse respeito”): Parli di calcio? Sì, ne parlo. Hai paura del buio? Sì, ne ho paura. Exemplo: {x}.',
  'Ne también sustituye a di + algo (“de eso, acerca de eso”): Parli di calcio? Sì, ne parlo. Hai paura del buio? Sì, ne ho paura. Ejemplo: {x}.',
  'Ne remplace aussi di + quelque chose (« de cela, à ce sujet ») : Parli di calcio? Sì, ne parlo. Hai paura del buio? Sì, ne ho paura. Exemple : {x}.',
  'Ne ersetzt auch di + etwas („davon, darüber“): Parli di calcio? Sì, ne parlo. Hai paura del buio? Sì, ne ho paura. Beispiel: {x}.'
);
const R_LO = T(
  'Use lo / la / li / le for a whole, definite thing; use ne for a part or a quantity. Example: {x}.',
  'Usa lo / la / li / le per una cosa intera e determinata; usa ne per una parte o una quantità. Esempio: {x}.',
  'Use lo / la / li / le para uma coisa inteira e determinada; use ne para uma parte ou uma quantidade. Exemplo: {x}.',
  'Usa lo / la / li / le para una cosa entera y determinada; usa ne para una parte o una cantidad. Ejemplo: {x}.',
  'Utilise lo / la / li / le pour une chose entière et déterminée ; utilise ne pour une partie ou une quantité. Exemple : {x}.',
  'Benutze lo / la / li / le für eine ganze, bestimmte Sache; benutze ne für einen Teil oder eine Menge. Beispiel: {x}.'
);
const R_POS = T(
  'Ne goes before a conjugated verb (Ne voglio due) or is attached to the end of an infinitive (Voglio mangiarne due), which drops its final -e. Example: {x}.',
  'Ne sta prima del verbo coniugato (Ne voglio due) oppure si attacca alla fine dell’infinito (Voglio mangiarne due), che perde la -e finale. Esempio: {x}.',
  'Ne fica antes do verbo conjugado (Ne voglio due) ou junta-se ao fim do infinitivo (Voglio mangiarne due), que perde o -e final. Exemplo: {x}.',
  'Ne va delante del verbo conjugado (Ne voglio due) o se une al final del infinitivo (Voglio mangiarne due), que pierde la -e final. Ejemplo: {x}.',
  'Ne se place devant le verbe conjugué (Ne voglio due) ou s’attache à la fin de l’infinitif (Voglio mangiarne due), qui perd son -e final. Exemple : {x}.',
  'Ne steht vor dem konjugierten Verb (Ne voglio due) oder wird an den Infinitiv angehängt (Voglio mangiarne due), der sein -e verliert. Beispiel: {x}.'
);
const R_AGREE = T(
  'In the passato prossimo, the participle agrees with the quantity that ne replaces: Quante pizze? Ne ho mangiate due. In everyday speech many people leave it unchanged. Example: {x}.',
  'Nel passato prossimo, il participio concorda con la quantità che ne sostituisce: Quante pizze? Ne ho mangiate due. Nel parlato molti lo lasciano invariato. Esempio: {x}.',
  'No passato prossimo, o particípio concorda com a quantidade que ne substitui: Quante pizze? Ne ho mangiate due. Na fala de todos os dias, muita gente deixa-o invariável. Exemplo: {x}.',
  'En el passato prossimo, el participio concuerda con la cantidad que ne sustituye: Quante pizze? Ne ho mangiate due. En el habla cotidiana mucha gente lo deja invariable. Ejemplo: {x}.',
  'Au passato prossimo, le participe s’accorde avec la quantité que ne remplace : Quante pizze? Ne ho mangiate due. Dans la langue courante, beaucoup le laissent invariable. Exemple : {x}.',
  'Im passato prossimo richtet sich das Partizip nach der Menge, die ne ersetzt: Quante pizze? Ne ho mangiate due. In der Alltagssprache lassen es viele unverändert. Beispiel: {x}.'
);
const R_NOAGREE = T(
  'When ne means “of it / about it” (not a quantity), the participle does not agree: Hai parlato delle ragazze? Sì, ne ho parlato. Example: {x}.',
  'Quando ne significa “di questo / a proposito di questo” (non una quantità), il participio non concorda: Hai parlato delle ragazze? Sì, ne ho parlato. Esempio: {x}.',
  'Quando ne significa “disso / a esse respeito” (não uma quantidade), o particípio não concorda: Hai parlato delle ragazze? Sì, ne ho parlato. Exemplo: {x}.',
  'Cuando ne significa “de eso / acerca de eso” (no una cantidad), el participio no concuerda: Hai parlato delle ragazze? Sì, ne ho parlato. Ejemplo: {x}.',
  'Quand ne signifie « de cela / à ce sujet » (et non une quantité), le participe ne s’accorde pas : Hai parlato delle ragazze? Sì, ne ho parlato. Exemple : {x}.',
  'Bedeutet ne „davon / darüber“ (keine Menge), richtet sich das Partizip nicht danach: Hai parlato delle ragazze? Sì, ne ho parlato. Beispiel: {x}.'
);
const R_COMBO = T(
  'Ne combines with other small pronouns, and the first one changes: mi + ne = me ne, ti + ne = te ne, ci + ne = ce ne, si + ne = se ne, gli / le + ne = gliene. Example: {x}.',
  'Ne si combina con altri pronomi piccoli e il primo cambia: mi + ne = me ne, ti + ne = te ne, ci + ne = ce ne, si + ne = se ne, gli / le + ne = gliene. Esempio: {x}.',
  'Ne combina-se com outros pronomes pequenos e o primeiro muda: mi + ne = me ne, ti + ne = te ne, ci + ne = ce ne, si + ne = se ne, gli / le + ne = gliene. Exemplo: {x}.',
  'Ne se combina con otros pronombres pequeños y el primero cambia: mi + ne = me ne, ti + ne = te ne, ci + ne = ce ne, si + ne = se ne, gli / le + ne = gliene. Ejemplo: {x}.',
  'Ne se combine avec d’autres petits pronoms et le premier change : mi + ne = me ne, ti + ne = te ne, ci + ne = ce ne, si + ne = se ne, gli / le + ne = gliene. Exemple : {x}.',
  'Ne verbindet sich mit anderen kleinen Pronomen, und das erste ändert sich: mi + ne = me ne, ti + ne = te ne, ci + ne = ce ne, si + ne = se ne, gli / le + ne = gliene. Beispiel: {x}.'
);
const R_AWAY = T(
  'Ne also means “from there”: Esci dal cinema? Sì, ne esco adesso. With andarsene (“to go away”) it is built into the verb: me ne vado, te ne vai, se ne va. Example: {x}.',
  'Ne significa anche “da lì”: Esci dal cinema? Sì, ne esco adesso. Con andarsene (“andare via”) è dentro al verbo: me ne vado, te ne vai, se ne va. Esempio: {x}.',
  'Ne significa também “de lá”: Esci dal cinema? Sì, ne esco adesso. Com andarsene (“ir-se embora”) faz parte do verbo: me ne vado, te ne vai, se ne va. Exemplo: {x}.',
  'Ne significa también “de allí”: Esci dal cinema? Sì, ne esco adesso. Con andarsene (“irse”) forma parte del verbo: me ne vado, te ne vai, se ne va. Ejemplo: {x}.',
  'Ne signifie aussi « de là » : Esci dal cinema? Sì, ne esco adesso. Avec andarsene (« s’en aller ») il fait partie du verbe : me ne vado, te ne vai, se ne va. Exemple : {x}.',
  'Ne bedeutet auch „von dort“: Esci dal cinema? Sì, ne esco adesso. Bei andarsene („weggehen“) gehört es zum Verb: me ne vado, te ne vai, se ne va. Beispiel: {x}.'
);
const R_FIXED = T(
  'Ne is also part of many fixed phrases: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo (di + noun is placed first, and ne repeats it). Example: {x}.',
  'Ne fa parte anche di molte espressioni fisse: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo (di + nome va all’inizio e ne lo riprende). Esempio: {x}.',
  'Ne faz também parte de muitas expressões fixas: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo (di + nome vai no início e ne retoma-o). Exemplo: {x}.',
  'Ne forma parte también de muchas expresiones fijas: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo (di + nombre va al principio y ne lo retoma). Ejemplo: {x}.',
  'Ne fait aussi partie de nombreuses expressions figées : Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo (di + nom se place en tête et ne le reprend). Exemple : {x}.',
  'Ne ist auch Teil vieler fester Wendungen: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo (di + Nomen steht vorn, ne greift es auf). Beispiel: {x}.'
);

const A1 = buildExercises('ne', 'A1', [
  reply('Quanti fratelli hai? (due)', 'Ne ho due.', ['Li ho due.', 'Lo ho due.'], R_QTY, 'Ne ho due.'),
  reply('Hai fratelli? (no)', 'No, non ne ho.', ['No, non li ho.', 'No, non lo ho.'], R_ZERO, 'No, non ne ho.'),
  fill('Quante mele vuoi? ___ voglio tre.', 'Ne', ['Le', 'Li'], R_QTY, 'Ne voglio tre.'),
  fill('Hai dei libri? Sì, ___ ho molti.', 'ne', ['li', 'le'], R_QTY, 'Ne ho molti.'),
  fill('Vuoi del caffè? Sì, ___ vorrei un po’.', 'ne', ['lo', 'la'], R_LO, 'Ne vorrei un po’.'),
  pick('Ne compro due chili.', ['Lo compro due chili.', 'Li compro due chili.'], R_QTY, 'Ne compro due chili.'),
  reply('Quanti caffè bevi al giorno? (tre)', 'Ne bevo tre.', ['Li bevo tre.', 'Lo bevo tre.'], R_QTY, 'Ne bevo tre.'),
  fill('Hai sorelle? Sì, ___ ho una.', 'ne', ['la', 'lo'], R_QTY, 'Ne ho una.'),
  pick('Non ne voglio.', ['Non voglio ne.', 'Ne non voglio.'], R_ZERO, 'Non ne voglio.'),
  fill('Vuoi dei biscotti? Sì, ___ voglio due.', 'ne', ['li', 'gli'], R_QTY, 'Ne voglio due.')
]);

const A2 = buildExercises('ne', 'A2', [
  reply('Parli spesso di calcio? (sì)', 'Sì, ne parlo spesso.', ['Sì, lo parlo spesso.', 'Sì, la parlo spesso.'], R_DI, 'Ne parlo spesso.'),
  reply('Hai bisogno di aiuto? (sì)', 'Sì, ne ho bisogno.', ['Sì, lo ho bisogno.', 'Sì, la ho bisogno.'], R_DI, 'Ne ho bisogno.'),
  fill('Hai paura dei cani? Sì, ___ ho paura.', 'ne', ['li', 'lo'], R_DI, 'Ne ho paura.'),
  pick('Voglio mangiarne due.', ['Voglio mangiare ne due.', 'Voglio mangiarli due.'], R_POS, 'Voglio mangiarne due.'),
  pick('Ne voglio comprare tre.', ['Voglio comprare ne tre.', 'Li voglio comprare tre.'], R_POS, 'Ne voglio comprare tre.'),
  fill('Quante pizze hai mangiato? Ne ho ___ due.', 'mangiate', ['mangiato', 'mangiata'], R_AGREE, 'Ne ho mangiate due.'),
  fill('Hai comprato dei fiori? Sì, ne ho ___ tre.', 'comprati', ['comprato', 'comprata'], R_AGREE, 'Ne ho comprati tre.'),
  fill('Vuoi parlare delle ragazze? Sì, ne ho già ___.', 'parlato', ['parlate', 'parlata'], R_NOAGREE, 'Ne ho già parlato.'),
  reply('Quanti libri hai letto quest’anno? (cinque)', 'Ne ho letti cinque.', ['Ne ho letto cinque.', 'Li ho letti cinque.'], R_AGREE, 'Ne ho letti cinque.'),
  pick('Amici? Non ne ho nessuno.', ['Amici? Non li ho nessuno.', 'Amici? Non ho ne nessuno.'], R_ZERO, 'Non ne ho nessuno.')
]);

const B1 = buildExercises('ne', 'B1', [
  fill('Sono stanco: ___ vado subito.', 'me ne', ['ne mi', 'mi ne'], R_COMBO, 'me ne vado'),
  fill('Marco è arrabbiato e ___ è andato.', 'se ne', ['si ne', 'ne si'], R_AWAY, 'se ne è andato'),
  pick('Dammene due.', ['Dammi ne due.', 'Dalle ne due.'], R_COMBO, 'dammi + ne = dammene'),
  fill('Vuoi del tè? ___ preparo una tazza.', 'Te ne', ['Ti ne', 'Ne ti'], R_COMBO, 'te ne preparo una tazza'),
  pick('Gliene ho dati tre.', ['Gli ne ho dati tre.', 'Ne gli ho dati tre.'], R_COMBO, 'gli + ne = gliene'),
  fill('Sei appena uscito dal cinema? Sì, ___ sono uscito adesso.', 'ne', ['ci', 'lo'], R_AWAY, 'ne sono uscito'),
  fill('Parli di politica? No, non ___ voglio parlare.', 'ne', ['la', 'lo'], R_POS, 'non ne voglio parlare'),
  pick('Ne sono sicuro.', ['Lo sono sicuro.', 'Ci sono sicuro.'], R_FIXED, 'Ne sono sicuro.'),
  pick('Di caffè ne bevo troppo.', ['Di caffè lo bevo troppo.', 'Di caffè bevo ne troppo.'], R_FIXED, 'Di caffè ne bevo troppo.'),
  fill('Quanti amici hai invitato? ___ ho invitati dieci.', 'Ne', ['Gli', 'Lo'], R_AGREE, 'Ne ho invitati dieci.')
]);

export const NE_TOPIC: GrammarTopic = {
  id: 'ne',
  title: T('The particle ne', 'La particella ne', 'A partícula ne', 'La partícula ne', 'La particule ne', 'Das Partikel ne'),
  subtitle: T(
    'The small word for quantities, “of it” and “from there”.',
    'La parolina per le quantità, “di questo” e “da lì”.',
    'A palavrinha para quantidades, “disso” e “de lá”.',
    'La palabrita para cantidades, “de eso” y “de allí”.',
    'Le petit mot pour les quantités, « de cela » et « de là ».',
    'Das kleine Wort für Mengen, „davon“ und „von dort“.'
  ),
  levels: {
    A1: {
      label: LABELS.A1,
      focus: T(
        'Ne with numbers and quantities; non … ne for “none”.',
        'Ne con numeri e quantità; non … ne per “nessuno”.',
        'Ne com números e quantidades; non … ne para “nenhum”.',
        'Ne con números y cantidades; non … ne para “ninguno”.',
        'Ne avec les nombres et les quantités ; non … ne pour « aucun ».',
        'Ne mit Zahlen und Mengen; non … ne für „keine“.'
      ),
      explanation: T(
        'Ne replaces “of it / of them” after a number or a quantity word. Quanti libri hai? Ne ho tre. Vuoi del caffè? Ne vorrei un po’. Keep the number or quantity in the sentence. For “none” say non ne ho: Hai fratelli? No, non ne ho. Do not use lo / la / li / le for a quantity.',
        'Ne sostituisce “di esso / di essi” dopo un numero o una parola di quantità. Quanti libri hai? Ne ho tre. Vuoi del caffè? Ne vorrei un po’. Il numero o la quantità resta nella frase. Per “nessuno” si dice non ne ho: Hai fratelli? No, non ne ho. Non usare lo / la / li / le per una quantità.',
        'Ne substitui “disso / deles” depois de um número ou de uma palavra de quantidade. Quanti libri hai? Ne ho tre. Vuoi del caffè? Ne vorrei un po’. O número ou a quantidade fica na frase. Para “nenhum” diz-se non ne ho: Hai fratelli? No, non ne ho. Não use lo / la / li / le para uma quantidade.',
        'Ne sustituye “de ello / de ellos” después de un número o de una palabra de cantidad. Quanti libri hai? Ne ho tre. Vuoi del caffè? Ne vorrei un po’. El número o la cantidad se queda en la frase. Para “ninguno” se dice non ne ho: Hai fratelli? No, non ne ho. No uses lo / la / li / le para una cantidad.',
        'Ne remplace « en » après un nombre ou un mot de quantité. Quanti libri hai? Ne ho tre. Vuoi del caffè? Ne vorrei un po’. Le nombre ou la quantité reste dans la phrase. Pour « aucun » on dit non ne ho : Hai fratelli? No, non ne ho. N’utilise pas lo / la / li / le pour une quantité.',
        'Ne ersetzt „davon“ nach einer Zahl oder einem Mengenwort. Quanti libri hai? Ne ho tre. Vuoi del caffè? Ne vorrei un po’. Die Zahl oder Menge bleibt im Satz. Für „keine“ sagt man non ne ho: Hai fratelli? No, non ne ho. Benutze lo / la / li / le nicht für eine Menge.'
      ),
      example: 'Quanti fratelli hai? Ne ho due. · Hai sorelle? No, non ne ho. · Vuoi del caffè? Sì, ne vorrei un po’.',
      exercises: A1
    },
    A2: {
      label: LABELS.A2,
      focus: T(
        'Ne = di + something; position with infinitives; the participle with ne.',
        'Ne = di + qualcosa; posizione con l’infinito; il participio con ne.',
        'Ne = di + alguma coisa; posição com o infinitivo; o particípio com ne.',
        'Ne = di + algo; posición con el infinitivo; el participio con ne.',
        'Ne = di + quelque chose ; place avec l’infinitif ; le participe avec ne.',
        'Ne = di + etwas; Stellung beim Infinitiv; das Partizip mit ne.'
      ),
      explanation: T(
        'Ne also replaces di + something: Parli di calcio? Ne parlo spesso. Hai paura dei cani? Ne ho paura. It goes before a conjugated verb or at the end of an infinitive: Ne voglio comprare tre = Voglio comprarne tre. In the passato prossimo, the participle agrees with a quantity: Quante pizze? Ne ho mangiate due (many people leave it unchanged when speaking). When ne means “about it”, no agreement: Ne ho parlato.',
        'Ne sostituisce anche di + qualcosa: Parli di calcio? Ne parlo spesso. Hai paura dei cani? Ne ho paura. Sta prima del verbo coniugato o alla fine dell’infinito: Ne voglio comprare tre = Voglio comprarne tre. Nel passato prossimo il participio concorda con la quantità: Quante pizze? Ne ho mangiate due (nel parlato molti lo lasciano invariato). Quando ne significa “di questo”, non c’è accordo: Ne ho parlato.',
        'Ne também substitui di + alguma coisa: Parli di calcio? Ne parlo spesso. Hai paura dei cani? Ne ho paura. Fica antes do verbo conjugado ou no fim do infinitivo: Ne voglio comprare tre = Voglio comprarne tre. No passato prossimo, o particípio concorda com a quantidade: Quante pizze? Ne ho mangiate due (na fala, muita gente deixa-o invariável). Quando ne significa “disso”, não há concordância: Ne ho parlato.',
        'Ne también sustituye a di + algo: Parli di calcio? Ne parlo spesso. Hai paura dei cani? Ne ho paura. Va delante del verbo conjugado o al final del infinitivo: Ne voglio comprare tre = Voglio comprarne tre. En el passato prossimo, el participio concuerda con la cantidad: Quante pizze? Ne ho mangiate due (al hablar, mucha gente lo deja invariable). Cuando ne significa “de eso”, no hay concordancia: Ne ho parlato.',
        'Ne remplace aussi di + quelque chose : Parli di calcio? Ne parlo spesso. Hai paura dei cani? Ne ho paura. Il se place devant le verbe conjugué ou à la fin de l’infinitif : Ne voglio comprare tre = Voglio comprarne tre. Au passato prossimo, le participe s’accorde avec la quantité : Quante pizze? Ne ho mangiate due (à l’oral beaucoup le laissent invariable). Quand ne signifie « de cela », pas d’accord : Ne ho parlato.',
        'Ne ersetzt auch di + etwas: Parli di calcio? Ne parlo spesso. Hai paura dei cani? Ne ho paura. Es steht vor dem konjugierten Verb oder am Ende des Infinitivs: Ne voglio comprare tre = Voglio comprarne tre. Im passato prossimo richtet sich das Partizip nach der Menge: Quante pizze? Ne ho mangiate due (gesprochen lassen es viele unverändert). Bedeutet ne „darüber“, gibt es keine Angleichung: Ne ho parlato.'
      ),
      example: 'Ne parlo spesso. · Voglio mangiarne due. · Quante pizze? Ne ho mangiate due. · Ne ho parlato.',
      exercises: A2
    },
    B1: {
      label: LABELS.B1,
      focus: T(
        'Combined forms (me ne, gliene), “from there”, andarsene and fixed phrases.',
        'Forme combinate (me ne, gliene), “da lì”, andarsene ed espressioni fisse.',
        'Formas combinadas (me ne, gliene), “de lá”, andarsene e expressões fixas.',
        'Formas combinadas (me ne, gliene), “de allí”, andarsene y expresiones fijas.',
        'Formes combinées (me ne, gliene), « de là », andarsene et expressions figées.',
        'Verbundene Formen (me ne, gliene), „von dort“, andarsene und feste Wendungen.'
      ),
      explanation: T(
        'Ne joins other small pronouns and the first one changes: mi → me ne, ti → te ne, ci → ce ne, si → se ne, gli / le → gliene. Te ne preparo una tazza. Gliene ho dati tre. Ne also means “from there”: Ne sono uscito adesso. Andarsene means “to go away”: me ne vado, se ne è andato. With imperatives, attach the pronouns: Dammene due. Learn the fixed phrases: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo.',
        'Ne si unisce ad altri pronomi piccoli e il primo cambia: mi → me ne, ti → te ne, ci → ce ne, si → se ne, gli / le → gliene. Te ne preparo una tazza. Gliene ho dati tre. Ne significa anche “da lì”: Ne sono uscito adesso. Andarsene significa “andare via”: me ne vado, se ne è andato. Con l’imperativo i pronomi si attaccano: Dammene due. Impara le espressioni fisse: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo.',
        'Ne junta-se a outros pronomes pequenos e o primeiro muda: mi → me ne, ti → te ne, ci → ce ne, si → se ne, gli / le → gliene. Te ne preparo una tazza. Gliene ho dati tre. Ne significa também “de lá”: Ne sono uscito adesso. Andarsene significa “ir-se embora”: me ne vado, se ne è andato. Com o imperativo, os pronomes juntam-se ao verbo: Dammene due. Aprenda as expressões fixas: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo.',
        'Ne se une a otros pronombres pequeños y el primero cambia: mi → me ne, ti → te ne, ci → ce ne, si → se ne, gli / le → gliene. Te ne preparo una tazza. Gliene ho dati tre. Ne significa también “de allí”: Ne sono uscito adesso. Andarsene significa “irse”: me ne vado, se ne è andato. Con el imperativo los pronombres se unen al verbo: Dammene due. Aprende las expresiones fijas: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo.',
        'Ne se joint à d’autres petits pronoms et le premier change : mi → me ne, ti → te ne, ci → ce ne, si → se ne, gli / le → gliene. Te ne preparo una tazza. Gliene ho dati tre. Ne signifie aussi « de là » : Ne sono uscito adesso. Andarsene signifie « s’en aller » : me ne vado, se ne è andato. À l’impératif, les pronoms s’attachent au verbe : Dammene due. Apprends les expressions figées : Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo.',
        'Ne verbindet sich mit anderen kleinen Pronomen, und das erste ändert sich: mi → me ne, ti → te ne, ci → ce ne, si → se ne, gli / le → gliene. Te ne preparo una tazza. Gliene ho dati tre. Ne bedeutet auch „von dort“: Ne sono uscito adesso. Andarsene bedeutet „weggehen“: me ne vado, se ne è andato. Beim Imperativ hängen die Pronomen am Verb: Dammene due. Lerne die festen Wendungen: Ne sono sicuro, Non ne posso più, Di caffè ne bevo troppo.'
      ),
      example: 'Me ne vado. · Te ne preparo una tazza. · Gliene ho dati tre. · Di caffè ne bevo troppo.',
      exercises: B1
    }
  }
};

export const NE_ACTIVITIES: GrammarActivity[] = buildActivities('ne', [
  { level: 'A1', type: 'correct', source: 'Li ho tre.', accepted: ['Ne ho tre.'], model: 'Ne ho tre.', rule: R_QTY, x: 'Quanti libri hai? Ne ho tre.' },
  { level: 'A1', type: 'order', words: ['due', 'Ne', 'chili.', 'compro'], model: 'Ne compro due chili.', rule: R_QTY, x: 'Ne compro due chili.' },
  {
    level: 'A1', type: 'translate', source: T('I have two of them.', 'I have two of them.', 'Tenho dois.', 'Tengo dos.', 'J’en ai deux.', 'Ich habe zwei davon.'),
    accepted: ['Ne ho due.', 'Io ne ho due.'], model: 'Ne ho due.', rule: R_QTY, x: 'Ne ho due.'
  },
  {
    level: 'A1', type: 'write', prompt: T(
      'Write two sentences with ne: one about something you have many of, one about something you do not have.',
      'Scrivi due frasi con ne: una su qualcosa che hai in gran quantità, una su qualcosa che non hai.',
      'Escreva duas frases com ne: uma sobre algo de que tem muito e outra sobre algo que não tem.',
      'Escribe dos frases con ne: una sobre algo de lo que tienes mucho y otra sobre algo que no tienes.',
      'Écris deux phrases avec ne : une sur quelque chose que tu as en grande quantité, une sur quelque chose que tu n’as pas.',
      'Schreibe zwei Sätze mit ne: einen über etwas, wovon du viel hast, einen über etwas, das du nicht hast.'
    ), model: 'Di amici ne ho molti. Di cani non ne ho.', rule: R_ZERO, x: 'Ne ho molti. · Non ne ho.'
  },
  { level: 'A2', type: 'correct', source: 'Hai paura dei ragni? Sì, li ho paura.', accepted: ['Hai paura dei ragni? Sì, ne ho paura.'], model: 'Hai paura dei ragni? Sì, ne ho paura.', rule: R_DI, x: 'Ne ho paura.' },
  { level: 'A2', type: 'order', words: ['Ne', 'ho', 'comprate', 'tre.'], model: 'Ne ho comprate tre.', rule: R_AGREE, x: 'Ne ho comprate tre.' },
  {
    level: 'A2', type: 'translate', source: T('I want to eat two of them.', 'I want to eat two of them.', 'Quero comer dois deles.', 'Quiero comer dos.', 'Je veux en manger deux.', 'Ich möchte zwei davon essen.'),
    accepted: ['Voglio mangiarne due.', 'Ne voglio mangiare due.'], model: 'Voglio mangiarne due.', rule: R_POS, x: 'Voglio mangiarne due.'
  },
  {
    level: 'A2', type: 'write', prompt: T(
      'Write two sentences with ne: one about how many you ate or bought yesterday, and one about a topic you talk about every day.',
      'Scrivi due frasi con ne: una su quanti ne hai mangiati o comprati ieri e una su un argomento di cui parli ogni giorno.',
      'Escreva duas frases com ne: uma sobre quantos comeu ou comprou ontem e outra sobre um assunto de que fala todos os dias.',
      'Escribe dos frases con ne: una sobre cuántos comiste o compraste ayer y otra sobre un tema del que hablas todos los días.',
      'Écris deux phrases avec ne : une sur combien tu en as mangé ou acheté hier et une sur un sujet dont tu parles tous les jours.',
      'Schreibe zwei Sätze mit ne: einen darüber, wie viele du gestern gegessen oder gekauft hast, und einen über ein Thema, über das du jeden Tag sprichst.'
    ), model: 'Ieri ne ho mangiate due. Di calcio ne parlo ogni giorno.', rule: R_AGREE, x: 'Ne ho mangiate due. · Ne parlo.'
  },
  { level: 'B1', type: 'correct', source: 'Sono stanco, mi ne vado.', accepted: ['Sono stanco, me ne vado.'], model: 'Sono stanco, me ne vado.', rule: R_COMBO, x: 'mi + ne = me ne' },
  { level: 'B1', type: 'order', words: ['Dammene', 'due,', 'per', 'favore.'], model: 'Dammene due, per favore.', rule: R_COMBO, x: 'dammi + ne = dammene' },
  {
    level: 'B1', type: 'translate', source: T('He gave her three of them.', 'He gave her three of them.', 'Ele deu-lhe três deles.', 'Él le dio tres.', 'Il lui en a donné trois.', 'Er hat ihr drei davon gegeben.'),
    accepted: ['Gliene ha dati tre.', 'Gliene ha date tre.', 'Gliene ha dato tre.'], model: 'Gliene ha dati tre.', rule: R_COMBO, x: 'gli + ne = gliene'
  },
  {
    level: 'B1', type: 'write', prompt: T(
      'Write two sentences. Use me ne / te ne / se ne in one, and di + noun with ne in the other.',
      'Scrivi due frasi. Usa me ne / te ne / se ne in una e di + nome con ne nell’altra.',
      'Escreva duas frases. Use me ne / te ne / se ne numa e di + nome com ne na outra.',
      'Escribe dos frases. Usa me ne / te ne / se ne en una y di + nombre con ne en la otra.',
      'Écris deux phrases. Utilise me ne / te ne / se ne dans l’une et di + nom avec ne dans l’autre.',
      'Schreibe zwei Sätze. Benutze me ne / te ne / se ne in einem und di + Nomen mit ne im anderen.'
    ), model: 'Sono stanco, me ne vado. Di questo problema ne parliamo domani.', rule: R_FIXED, x: 'Di caffè ne bevo troppo.'
  }
]);
