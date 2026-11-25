import type { GrammarTopic } from './italianGrammar';
import type { GrammarActivity } from './italianGrammarActivities';
import { T, LABELS, buildExercises, buildActivities, fill, pick } from './italianGrammarKit';

// Indefinites and negatives — qualche, ogni, tutti, qualcuno, nessuno, niente.
// Italian target text stays Italian; support text is a draft pending native-speaker review.

const R_QUALCHE = T(
  'Qualche is always followed by a singular noun, even though it means “some”: qualche amico. With a plural noun use alcuni / alcune: alcuni amici. Example: {x}.',
  'Qualche è sempre seguito da un nome singolare, anche se significa “alcuni”: qualche amico. Con un nome plurale si usa alcuni / alcune: alcuni amici. Esempio: {x}.',
  'Qualche é sempre seguido de um nome no singular, embora signifique “alguns”: qualche amico. Com um nome no plural usa-se alcuni / alcune: alcuni amici. Exemplo: {x}.',
  'Qualche va siempre seguido de un nombre singular, aunque signifique “algunos”: qualche amico. Con un nombre plural se usa alcuni / alcune: alcuni amici. Ejemplo: {x}.',
  'Qualche est toujours suivi d’un nom au singulier, même s’il signifie « quelques » : qualche amico. Avec un nom au pluriel, on emploie alcuni / alcune : alcuni amici. Exemple : {x}.',
  'Qualche steht immer mit einem Nomen im Singular, obwohl es „einige“ bedeutet: qualche amico. Mit einem Nomen im Plural benutzt man alcuni / alcune: alcuni amici. Beispiel: {x}.'
);
const R_OGNI = T(
  'Ogni means “every / each”. It never changes and is followed by a singular noun: ogni giorno. For the plural idea use tutti i + plural: tutti i giorni. Example: {x}.',
  'Ogni significa “ciascun / tutti i”. Non cambia mai ed è seguito da un nome singolare: ogni giorno. Per l’idea di plurale si usa tutti i + plurale: tutti i giorni. Esempio: {x}.',
  'Ogni significa “cada / todos os”. Nunca muda e é seguido de um nome no singular: ogni giorno. Para a ideia de plural usa-se tutti i + plural: tutti i giorni. Exemplo: {x}.',
  'Ogni significa “cada / todos los”. Nunca cambia y va seguido de un nombre singular: ogni giorno. Para la idea de plural se usa tutti i + plural: tutti i giorni. Ejemplo: {x}.',
  'Ogni signifie « chaque / tous les ». Il ne change jamais et est suivi d’un nom au singulier : ogni giorno. Pour l’idée de pluriel on emploie tutti i + pluriel : tutti i giorni. Exemple : {x}.',
  'Ogni bedeutet „jeder / jede / jedes“. Es verändert sich nie und steht mit einem Nomen im Singular: ogni giorno. Für die Pluralform benutzt man tutti i + Plural: tutti i giorni. Beispiel: {x}.'
);
const R_TUTTO = T(
  'Tutto agrees with the noun and is followed by the article: tutto il giorno, tutta la pizza, tutti i giorni, tutte le sere. Example: {x}.',
  'Tutto concorda con il nome ed è seguito dall’articolo: tutto il giorno, tutta la pizza, tutti i giorni, tutte le sere. Esempio: {x}.',
  'Tutto concorda com o nome e é seguido do artigo: tutto il giorno, tutta la pizza, tutti i giorni, tutte le sere. Exemplo: {x}.',
  'Tutto concuerda con el nombre y va seguido del artículo: tutto il giorno, tutta la pizza, tutti i giorni, tutte le sere. Ejemplo: {x}.',
  'Tutto s’accorde avec le nom et est suivi de l’article : tutto il giorno, tutta la pizza, tutti i giorni, tutte le sere. Exemple : {x}.',
  'Tutto richtet sich nach dem Nomen und steht vor dem Artikel: tutto il giorno, tutta la pizza, tutti i giorni, tutte le sere. Beispiel: {x}.'
);
const R_QUALCUNO = T(
  'Qualcuno means “somebody” (a person) and qualcosa means “something” (a thing). Both are singular and never change. Example: {x}.',
  'Qualcuno significa “una persona” e qualcosa significa “una cosa”. Entrambi sono singolari e non cambiano mai. Esempio: {x}.',
  'Qualcuno significa “alguém” (uma pessoa) e qualcosa significa “alguma coisa”. Ambos são singulares e nunca mudam. Exemplo: {x}.',
  'Qualcuno significa “alguien” (una persona) y qualcosa significa “algo” (una cosa). Ambos son singulares y nunca cambian. Ejemplo: {x}.',
  'Qualcuno signifie « quelqu’un » (une personne) et qualcosa signifie « quelque chose » (une chose). Les deux sont au singulier et ne changent jamais. Exemple : {x}.',
  'Qualcuno bedeutet „jemand“ (eine Person) und qualcosa bedeutet „etwas“ (eine Sache). Beide sind Singular und verändern sich nie. Beispiel: {x}.'
);
const R_NON = T(
  'When nessuno, niente or nulla comes after the verb, put non before the verb: Non vedo nessuno. Italian uses a double negative here, and it is correct. Example: {x}.',
  'Quando nessuno, niente o nulla stanno dopo il verbo, si mette non davanti al verbo: Non vedo nessuno. Qui l’italiano usa la doppia negazione ed è corretto. Esempio: {x}.',
  'Quando nessuno, niente ou nulla vêm depois do verbo, põe-se non antes do verbo: Non vedo nessuno. Aqui o italiano usa a dupla negação, e está correto. Exemplo: {x}.',
  'Cuando nessuno, niente o nulla van detrás del verbo, se pone non delante del verbo: Non vedo nessuno. Aquí el italiano usa la doble negación y es correcto. Ejemplo: {x}.',
  'Quand nessuno, niente ou nulla se trouvent après le verbe, on met non devant le verbe : Non vedo nessuno. L’italien emploie ici la double négation, et c’est correct. Exemple : {x}.',
  'Stehen nessuno, niente oder nulla nach dem Verb, setzt man non vor das Verb: Non vedo nessuno. Das Italienische benutzt hier die doppelte Verneinung, und das ist richtig. Beispiel: {x}.'
);
const R_BEFORE = T(
  'When nessuno or niente comes before the verb, do not add non: Nessuno è venuto. Adding non here is a mistake. Example: {x}.',
  'Quando nessuno o niente stanno prima del verbo, non si aggiunge non: Nessuno è venuto. Aggiungere non qui è un errore. Esempio: {x}.',
  'Quando nessuno ou niente vêm antes do verbo, não se acrescenta non: Nessuno è venuto. Acrescentar non aqui é um erro. Exemplo: {x}.',
  'Cuando nessuno o niente van delante del verbo, no se añade non: Nessuno è venuto. Añadir non aquí es un error. Ejemplo: {x}.',
  'Quand nessuno ou niente se trouvent avant le verbe, on n’ajoute pas non : Nessuno è venuto. Ajouter non ici est une erreur. Exemple : {x}.',
  'Stehen nessuno oder niente vor dem Verb, fügt man kein non hinzu: Nessuno è venuto. Ein non wäre hier ein Fehler. Beispiel: {x}.'
);
const R_NESSUN = T(
  'As an adjective, nessuno follows the pattern of un/uno/una: nessun amico, nessuno studente, nessuna amica. It has no plural. Example: {x}.',
  'Come aggettivo, nessuno segue il modello di un/uno/una: nessun amico, nessuno studente, nessuna amica. Non ha il plurale. Esempio: {x}.',
  'Como adjetivo, nessuno segue o modelo de un/uno/una: nessun amico, nessuno studente, nessuna amica. Não tem plural. Exemplo: {x}.',
  'Como adjetivo, nessuno sigue el modelo de un/uno/una: nessun amico, nessuno studente, nessuna amica. No tiene plural. Ejemplo: {x}.',
  'Comme adjectif, nessuno suit le modèle de un/uno/una : nessun amico, nessuno studente, nessuna amica. Il n’a pas de pluriel. Exemple : {x}.',
  'Als Adjektiv folgt nessuno dem Muster von un/uno/una: nessun amico, nessuno studente, nessuna amica. Es hat keinen Plural. Beispiel: {x}.'
);
const R_DI = T(
  'Add di before an adjective after niente, nulla, qualcosa and nessuno: niente di buono, qualcosa di strano. The adjective stays masculine singular. Example: {x}.',
  'Si aggiunge di prima di un aggettivo dopo niente, nulla, qualcosa e nessuno: niente di buono, qualcosa di strano. L’aggettivo resta maschile singolare. Esempio: {x}.',
  'Acrescenta-se di antes de um adjetivo depois de niente, nulla, qualcosa e nessuno: niente di buono, qualcosa di strano. O adjetivo fica no masculino singular. Exemplo: {x}.',
  'Se añade di delante de un adjetivo después de niente, nulla, qualcosa y nessuno: niente di buono, qualcosa di strano. El adjetivo queda en masculino singular. Ejemplo: {x}.',
  'On ajoute di devant un adjectif après niente, nulla, qualcosa et nessuno : niente di buono, qualcosa di strano. L’adjectif reste au masculin singulier. Exemple : {x}.',
  'Vor einem Adjektiv nach niente, nulla, qualcosa und nessuno steht di: niente di buono, qualcosa di strano. Das Adjektiv bleibt maskulin Singular. Beispiel: {x}.'
);
const R_AGREE = T(
  'Molto, poco, troppo and tanto agree with the noun when they are adjectives: molti amici, poche persone, troppi errori, tanta gente. Example: {x}.',
  'Molto, poco, troppo e tanto concordano con il nome quando sono aggettivi: molti amici, poche persone, troppi errori, tanta gente. Esempio: {x}.',
  'Molto, poco, troppo e tanto concordam com o nome quando são adjetivos: molti amici, poche persone, troppi errori, tanta gente. Exemplo: {x}.',
  'Molto, poco, troppo y tanto concuerdan con el nombre cuando son adjetivos: molti amici, poche persone, troppi errori, tanta gente. Ejemplo: {x}.',
  'Molto, poco, troppo et tanto s’accordent avec le nom quand ils sont adjectifs : molti amici, poche persone, troppi errori, tanta gente. Exemple : {x}.',
  'Molto, poco, troppo und tanto richten sich nach dem Nomen, wenn sie Adjektive sind: molti amici, poche persone, troppi errori, tanta gente. Beispiel: {x}.'
);
const R_UNO = T(
  'Ognuno, ciascuno and nessuno (as pronouns) are singular and take a singular verb: Ognuno ha le sue idee. Add di + noun or pronoun to say “of”: nessuno di voi, qualcuno di noi. Example: {x}.',
  'Ognuno, ciascuno e nessuno (come pronomi) sono singolari e vogliono il verbo al singolare: Ognuno ha le sue idee. Con di + nome o pronome si dice “tra”: nessuno di voi, qualcuno di noi. Esempio: {x}.',
  'Ognuno, ciascuno e nessuno (como pronomes) são singulares e pedem o verbo no singular: Ognuno ha le sue idee. Com di + nome ou pronome diz-se “de entre”: nessuno di voi, qualcuno di noi. Exemplo: {x}.',
  'Ognuno, ciascuno y nessuno (como pronombres) son singulares y llevan el verbo en singular: Ognuno ha le sue idee. Con di + nombre o pronombre se dice “de entre”: nessuno di voi, qualcuno di noi. Ejemplo: {x}.',
  'Ognuno, ciascuno et nessuno (comme pronoms) sont au singulier et veulent le verbe au singulier : Ognuno ha le sue idee. Avec di + nom ou pronom on dit « parmi » : nessuno di voi, qualcuno di noi. Exemple : {x}.',
  'Ognuno, ciascuno und nessuno (als Pronomen) sind Singular und verlangen das Verb im Singular: Ognuno ha le sue idee. Mit di + Nomen oder Pronomen sagt man „von“: nessuno di voi, qualcuno di noi. Beispiel: {x}.'
);
const R_ALTRO = T(
  'Altro agrees with the noun: un altro caffè, un’altra volta, altri amici, altre cose. Write un altro in two words. Example: {x}.',
  'Altro concorda con il nome: un altro caffè, un’altra volta, altri amici, altre cose. Si scrive un altro in due parole. Esempio: {x}.',
  'Altro concorda com o nome: un altro caffè, un’altra volta, altri amici, altre cose. Escreve-se un altro em duas palavras. Exemplo: {x}.',
  'Altro concuerda con el nombre: un altro caffè, un’altra volta, altri amici, altre cose. Se escribe un altro en dos palabras. Ejemplo: {x}.',
  'Altro s’accorde avec le nom : un altro caffè, un’altra volta, altri amici, altre cose. On écrit un altro en deux mots. Exemple : {x}.',
  'Altro richtet sich nach dem Nomen: un altro caffè, un’altra volta, altri amici, altre cose. Un altro schreibt man in zwei Wörtern. Beispiel: {x}.'
);
const R_NE_NE = T(
  'Né … né means “neither … nor” and has an acute accent. Ne without an accent is a different word (a pronoun). Example: {x}.',
  'Né … né vuol dire “non l’uno e non l’altro” e ha l’accento acuto. Ne senza accento è un’altra parola (un pronome). Esempio: {x}.',
  'Né … né significa “nem … nem” e leva acento agudo. Ne sem acento é outra palavra (um pronome). Exemplo: {x}.',
  'Né … né significa “ni … ni” y lleva acento agudo. Ne sin acento es otra palabra (un pronombre). Ejemplo: {x}.',
  'Né … né signifie « ni … ni » et porte un accent aigu. Ne sans accent est un autre mot (un pronom). Exemple : {x}.',
  'Né … né bedeutet „weder … noch“ und hat einen Akut. Ne ohne Akzent ist ein anderes Wort (ein Pronomen). Beispiel: {x}.'
);
const R_ANY = T(
  'Chiunque means “anyone” (a person, no noun after it). Qualsiasi and qualunque mean “any” and need a singular noun: qualsiasi colore. Example: {x}.',
  'Chiunque significa “qualsiasi persona” (senza nome dopo). Qualsiasi e qualunque significano “uno qualunque” e vogliono un nome singolare: qualsiasi colore. Esempio: {x}.',
  'Chiunque significa “qualquer pessoa” (sem nome depois). Qualsiasi e qualunque significam “qualquer” e pedem um nome no singular: qualsiasi colore. Exemplo: {x}.',
  'Chiunque significa “cualquiera” (una persona, sin nombre detrás). Qualsiasi y qualunque significan “cualquier” y piden un nombre singular: qualsiasi colore. Ejemplo: {x}.',
  'Chiunque signifie « n’importe qui » (sans nom après). Qualsiasi et qualunque signifient « n’importe quel » et veulent un nom au singulier : qualsiasi colore. Exemple : {x}.',
  'Chiunque bedeutet „jeder beliebige“ (eine Person, ohne Nomen danach). Qualsiasi und qualunque bedeuten „jeder beliebige“ und verlangen ein Nomen im Singular: qualsiasi colore. Beispiel: {x}.'
);

const A1 = buildExercises('ind', 'A1', [
  fill('Ho ___ amico a Roma.', 'qualche', ['alcuni', 'tanti'], R_QUALCHE, 'qualche amico'),
  fill('Ho ___ amici a Milano.', 'alcuni', ['qualche', 'ogni'], R_QUALCHE, 'alcuni amici'),
  fill('Studio italiano ___ giorno.', 'ogni', ['tutti', 'alcuni'], R_OGNI, 'ogni giorno'),
  fill('Lavoro ___ i giorni.', 'tutti', ['ogni', 'qualche'], R_TUTTO, 'tutti i giorni'),
  fill('Ho mangiato ___ la pizza.', 'tutta', ['tutto', 'ogni'], R_TUTTO, 'tutta la pizza'),
  fill('Vuoi bere ___?', 'qualcosa', ['qualcuno', 'qualche'], R_QUALCUNO, 'qualcosa da bere'),
  fill('___ ha telefonato mentre eri fuori.', 'Qualcuno', ['Qualcosa', 'Qualche'], R_QUALCUNO, 'Qualcuno ha telefonato.'),
  fill('Non ho ___ in borsa.', 'niente', ['nessuno', 'qualche'], R_NON, 'Non ho niente.'),
  pick('Non vedo nessuno.', ['Vedo nessuno.', 'Non nessuno vedo.'], R_NON, 'Non vedo nessuno.'),
  fill('A cena c’erano ___ persone.', 'molte', ['molti', 'molta'], R_AGREE, 'molte persone')
]);

const A2 = buildExercises('ind', 'A2', [
  pick('Nessuno è venuto alla festa.', ['Non nessuno è venuto alla festa.', 'Nessuno non è venuto alla festa.'], R_BEFORE, 'Nessuno è venuto.'),
  pick('Non ho incontrato nessuno.', ['Ho incontrato nessuno.', 'Non nessuno ho incontrato.'], R_NON, 'Non ho incontrato nessuno.'),
  fill('Non ho ___ amico a Roma.', 'nessun', ['nessuno', 'nessuna'], R_NESSUN, 'nessun amico'),
  fill('Non c’è ___ studente in classe.', 'nessuno', ['nessun', 'nessuna'], R_NESSUN, 'nessuno studente'),
  fill('Non ho ___ idea.', 'nessuna', ['nessun', 'nessuno'], R_NESSUN, 'nessuna idea'),
  fill('Non c’è ___ di interessante in TV.', 'niente', ['nessuno', 'qualche'], R_DI, 'niente di interessante'),
  fill('Ho visto ___ di strano.', 'qualcosa', ['qualche', 'alcune'], R_DI, 'qualcosa di strano'),
  fill('___ ha il suo stile.', 'Ognuno', ['Ogni', 'Tutti'], R_UNO, 'Ognuno ha il suo stile.'),
  fill('Vorrei ___ caffè.', 'un altro', ['un altri', 'altro un'], R_ALTRO, 'un altro caffè'),
  fill('Ci sono ___ errori in questo testo.', 'troppi', ['troppo', 'troppa'], R_AGREE, 'troppi errori')
]);

const B1 = buildExercises('ind', 'B1', [
  pick('Non dice mai niente a nessuno.', ['Dice mai niente a nessuno.', 'Non dice mai nulla a nessuno non.'], R_NON, 'Non dice mai niente a nessuno.'),
  fill('Non parla ___ inglese ___ francese.', 'né', ['ne', 'nè'], R_NE_NE, 'Non parla né inglese né francese.'),
  pick('Chiunque può partecipare.', ['Qualsiasi può partecipare.', 'Chiunque persona può partecipare.'], R_ANY, 'Chiunque può partecipare.'),
  fill('Puoi scegliere ___ colore.', 'qualsiasi', ['chiunque', 'qualcuno'], R_ANY, 'qualsiasi colore'),
  fill('Ho letto ___ dei suoi libri.', 'alcuni', ['qualche', 'ogni'], R_QUALCHE, 'alcuni dei suoi libri'),
  fill('Nessuno di voi ___ la risposta.', 'sa', ['sapete', 'sanno'], R_UNO, 'Nessuno di voi sa la risposta.'),
  fill('Ognuno ___ le proprie idee.', 'ha', ['hanno', 'avete'], R_UNO, 'Ognuno ha le proprie idee.'),
  pick('Qualcuno di voi ha visto Marco?', ['Qualcuno di voi hanno visto Marco?', 'Qualche di voi ha visto Marco?'], R_UNO, 'Qualcuno di voi ha visto Marco?'),
  fill('Non c’è ___ di meglio.', 'niente', ['nessuno', 'qualche'], R_DI, 'niente di meglio'),
  pick('Ho comprato qualcosa di buono per cena.', ['Ho comprato qualcosa buono per cena.', 'Ho comprato qualcosa di buona per cena.'], R_DI, 'qualcosa di buono')
]);

export const INDEFINITES_TOPIC: GrammarTopic = {
  id: 'indefinites',
  title: T(
    'Indefinites and negatives · qualche, nessuno, niente',
    'Indefiniti e negazioni · qualche, nessuno, niente',
    'Indefinidos e negações · qualche, nessuno, niente',
    'Indefinidos y negaciones · qualche, nessuno, niente',
    'Indéfinis et négations · qualche, nessuno, niente',
    'Indefinita und Verneinung · qualche, nessuno, niente'
  ),
  subtitle: T(
    'Say “some”, “every”, “nobody” and “nothing” correctly.',
    'Di’ “alcuni”, “ogni”, “nessuno” e “niente” nel modo giusto.',
    'Diga “alguns”, “cada”, “ninguém” e “nada” corretamente.',
    'Di “algunos”, “cada”, “nadie” y “nada” correctamente.',
    'Dis « quelques », « chaque », « personne » et « rien » correctement.',
    'Sage „einige“, „jeder“, „niemand“ und „nichts“ richtig.'
  ),
  levels: {
    A1: {
      label: LABELS.A1,
      focus: T(
        'qualche, alcuni, ogni, tutti, qualcuno / qualcosa and the first non … niente.',
        'qualche, alcuni, ogni, tutti, qualcuno / qualcosa e il primo non … niente.',
        'qualche, alcuni, ogni, tutti, qualcuno / qualcosa e o primeiro non … niente.',
        'qualche, alcuni, ogni, tutti, qualcuno / qualcosa y el primer non … niente.',
        'qualche, alcuni, ogni, tutti, qualcuno / qualcosa et le premier non … niente.',
        'qualche, alcuni, ogni, tutti, qualcuno / qualcosa und das erste non … niente.'
      ),
      explanation: T(
        'Qualche + singular noun = alcuni + plural noun: qualche amico, alcuni amici. Ogni + singular noun never changes: ogni giorno. For “all” use tutto / tutti with the article: tutti i giorni, tutta la pizza. Use qualcuno for a person and qualcosa for a thing. Italian negatives work in pairs: after the verb, non goes before it: Non ho niente. Non vedo nessuno.',
        'Qualche + nome singolare = alcuni + nome plurale: qualche amico, alcuni amici. Ogni + nome singolare non cambia mai: ogni giorno. Per “tutto” si usa tutto / tutti con l’articolo: tutti i giorni, tutta la pizza. Usa qualcuno per una persona e qualcosa per una cosa. Le negazioni italiane lavorano in coppia: se la parola negativa sta dopo il verbo, non va prima del verbo: Non ho niente. Non vedo nessuno.',
        'Qualche + nome no singular = alcuni + nome no plural: qualche amico, alcuni amici. Ogni + nome no singular nunca muda: ogni giorno. Para “todo” usa-se tutto / tutti com o artigo: tutti i giorni, tutta la pizza. Use qualcuno para uma pessoa e qualcosa para uma coisa. As negações italianas funcionam em par: se a palavra negativa está depois do verbo, non vai antes do verbo: Non ho niente. Non vedo nessuno.',
        'Qualche + nombre singular = alcuni + nombre plural: qualche amico, alcuni amici. Ogni + nombre singular nunca cambia: ogni giorno. Para “todo” se usa tutto / tutti con el artículo: tutti i giorni, tutta la pizza. Usa qualcuno para una persona y qualcosa para una cosa. Las negaciones italianas funcionan en pareja: si la palabra negativa va detrás del verbo, non va delante del verbo: Non ho niente. Non vedo nessuno.',
        'Qualche + nom singulier = alcuni + nom pluriel : qualche amico, alcuni amici. Ogni + nom singulier ne change jamais : ogni giorno. Pour « tout » on emploie tutto / tutti avec l’article : tutti i giorni, tutta la pizza. Emploie qualcuno pour une personne et qualcosa pour une chose. Les négations italiennes fonctionnent par paire : si le mot négatif est après le verbe, non se met devant le verbe : Non ho niente. Non vedo nessuno.',
        'Qualche + Nomen im Singular = alcuni + Nomen im Plural: qualche amico, alcuni amici. Ogni + Nomen im Singular verändert sich nie: ogni giorno. Für „alle“ benutzt man tutto / tutti mit dem Artikel: tutti i giorni, tutta la pizza. Benutze qualcuno für eine Person und qualcosa für eine Sache. Italienische Verneinungen arbeiten paarweise: Steht das negative Wort nach dem Verb, steht non vor dem Verb: Non ho niente. Non vedo nessuno.'
      ),
      example: 'Ho qualche amico a Roma. · Studio ogni giorno. · Vuoi qualcosa da bere? · Non vedo nessuno.',
      exercises: A1
    },
    A2: {
      label: LABELS.A2,
      focus: T(
        'Nessuno before or after the verb, nessun / nessuna, niente di + adjective, altro.',
        'Nessuno prima o dopo il verbo, nessun / nessuna, niente di + aggettivo, altro.',
        'Nessuno antes ou depois do verbo, nessun / nessuna, niente di + adjetivo, altro.',
        'Nessuno antes o después del verbo, nessun / nessuna, niente di + adjetivo, altro.',
        'Nessuno avant ou après le verbe, nessun / nessuna, niente di + adjectif, altro.',
        'Nessuno vor oder nach dem Verb, nessun / nessuna, niente di + Adjektiv, altro.'
      ),
      explanation: T(
        'Position decides whether you need non. After the verb: Non è venuto nessuno. Before the verb: Nessuno è venuto (no non). As an adjective nessuno behaves like un: nessun amico, nessuno studente, nessuna amica, and it has no plural. Add di before an adjective: niente di interessante, qualcosa di strano. Ognuno and ciascuno are singular. Altro agrees: un altro caffè, un’altra volta. Molti, poche, troppi and tanta agree with the noun.',
        'La posizione decide se serve non. Dopo il verbo: Non è venuto nessuno. Prima del verbo: Nessuno è venuto (senza non). Come aggettivo nessuno si comporta come un: nessun amico, nessuno studente, nessuna amica, e non ha il plurale. Aggiungi di prima di un aggettivo: niente di interessante, qualcosa di strano. Ognuno e ciascuno sono singolari. Altro concorda: un altro caffè, un’altra volta. Molti, poche, troppi e tanta concordano con il nome.',
        'A posição decide se é preciso non. Depois do verbo: Non è venuto nessuno. Antes do verbo: Nessuno è venuto (sem non). Como adjetivo, nessuno comporta-se como un: nessun amico, nessuno studente, nessuna amica, e não tem plural. Acrescente di antes de um adjetivo: niente di interessante, qualcosa di strano. Ognuno e ciascuno são singulares. Altro concorda: un altro caffè, un’altra volta. Molti, poche, troppi e tanta concordam com o nome.',
        'La posición decide si hace falta non. Detrás del verbo: Non è venuto nessuno. Delante del verbo: Nessuno è venuto (sin non). Como adjetivo, nessuno se comporta como un: nessun amico, nessuno studente, nessuna amica, y no tiene plural. Añade di delante de un adjetivo: niente di interessante, qualcosa di strano. Ognuno y ciascuno son singulares. Altro concuerda: un altro caffè, un’altra volta. Molti, poche, troppi y tanta concuerdan con el nombre.',
        'La position décide si non est nécessaire. Après le verbe : Non è venuto nessuno. Avant le verbe : Nessuno è venuto (sans non). Comme adjectif, nessuno se comporte comme un : nessun amico, nessuno studente, nessuna amica, et il n’a pas de pluriel. Ajoute di devant un adjectif : niente di interessante, qualcosa di strano. Ognuno et ciascuno sont au singulier. Altro s’accorde : un altro caffè, un’altra volta. Molti, poche, troppi et tanta s’accordent avec le nom.',
        'Die Stellung entscheidet, ob non nötig ist. Nach dem Verb: Non è venuto nessuno. Vor dem Verb: Nessuno è venuto (ohne non). Als Adjektiv verhält sich nessuno wie un: nessun amico, nessuno studente, nessuna amica, und es hat keinen Plural. Setze di vor ein Adjektiv: niente di interessante, qualcosa di strano. Ognuno und ciascuno sind Singular. Altro richtet sich nach dem Nomen: un altro caffè, un’altra volta. Molti, poche, troppi und tanta richten sich nach dem Nomen.'
      ),
      example: 'Nessuno è venuto. · Non ho nessun problema. · Non c’è niente di interessante. · Vorrei un altro caffè.',
      exercises: A2
    },
    B1: {
      label: LABELS.B1,
      focus: T(
        'Combined negatives, né … né, chiunque / qualsiasi, nessuno di voi.',
        'Negazioni combinate, né … né, chiunque / qualsiasi, nessuno di voi.',
        'Negações combinadas, né … né, chiunque / qualsiasi, nessuno di voi.',
        'Negaciones combinadas, né … né, chiunque / qualsiasi, nessuno di voi.',
        'Négations combinées, né … né, chiunque / qualsiasi, nessuno di voi.',
        'Kombinierte Verneinungen, né … né, chiunque / qualsiasi, nessuno di voi.'
      ),
      explanation: T(
        'Negatives can pile up after non: Non dice mai niente a nessuno. Né … né means “neither … nor” (with an accent): Non parla né inglese né francese. Chiunque means “anyone” and stands alone; qualsiasi and qualunque are followed by a singular noun: qualsiasi colore. Qualche cannot be followed by di: use alcuni dei miei libri. With nessuno di voi, ognuno, qualcuno di voi use a singular verb. Use qualcosa di + adjective: qualcosa di buono.',
        'Le parole negative si possono accumulare dopo non: Non dice mai niente a nessuno. Né … né vuol dire “non l’uno e non l’altro” (con l’accento): Non parla né inglese né francese. Chiunque significa “qualsiasi persona” e sta da solo; qualsiasi e qualunque sono seguiti da un nome singolare: qualsiasi colore. Qualche non può essere seguito da di: usa alcuni dei miei libri. Con nessuno di voi, ognuno, qualcuno di voi si usa il verbo al singolare. Usa qualcosa di + aggettivo: qualcosa di buono.',
        'As palavras negativas podem acumular-se depois de non: Non dice mai niente a nessuno. Né … né significa “nem … nem” (com acento): Non parla né inglese né francese. Chiunque significa “qualquer pessoa” e fica sozinho; qualsiasi e qualunque são seguidos de um nome no singular: qualsiasi colore. Qualche não pode ser seguido de di: use alcuni dei miei libri. Com nessuno di voi, ognuno, qualcuno di voi usa-se o verbo no singular. Use qualcosa di + adjetivo: qualcosa di buono.',
        'Las palabras negativas pueden acumularse detrás de non: Non dice mai niente a nessuno. Né … né significa “ni … ni” (con acento): Non parla né inglese né francese. Chiunque significa “cualquiera” y va solo; qualsiasi y qualunque van seguidos de un nombre singular: qualsiasi colore. Qualche no puede ir seguido de di: usa alcuni dei miei libri. Con nessuno di voi, ognuno, qualcuno di voi se usa el verbo en singular. Usa qualcosa di + adjetivo: qualcosa di buono.',
        'Les mots négatifs peuvent s’accumuler après non : Non dice mai niente a nessuno. Né … né signifie « ni … ni » (avec accent) : Non parla né inglese né francese. Chiunque signifie « n’importe qui » et reste seul ; qualsiasi et qualunque sont suivis d’un nom au singulier : qualsiasi colore. Qualche ne peut pas être suivi de di : utilise alcuni dei miei libri. Avec nessuno di voi, ognuno, qualcuno di voi on emploie le verbe au singulier. Emploie qualcosa di + adjectif : qualcosa di buono.',
        'Negative Wörter können sich nach non häufen: Non dice mai niente a nessuno. Né … né bedeutet „weder … noch“ (mit Akzent): Non parla né inglese né francese. Chiunque bedeutet „jeder beliebige“ und steht allein; qualsiasi und qualunque stehen mit einem Nomen im Singular: qualsiasi colore. Nach qualche kann kein di stehen: benutze alcuni dei miei libri. Mit nessuno di voi, ognuno, qualcuno di voi steht das Verb im Singular. Benutze qualcosa di + Adjektiv: qualcosa di buono.'
      ),
      example: 'Non dice mai niente a nessuno. · Né io né lui. · Chiunque può venire. · Qualcuno di voi ha visto Marco?',
      exercises: B1
    }
  }
};

export const INDEFINITES_ACTIVITIES: GrammarActivity[] = buildActivities('indefinites', [
  { level: 'A1', type: 'correct', source: 'Ho qualche amici a Roma.', accepted: ['Ho qualche amico a Roma.', 'Ho alcuni amici a Roma.'], model: 'Ho qualche amico a Roma.', rule: R_QUALCHE, x: 'qualche amico · alcuni amici' },
  { level: 'A1', type: 'order', words: ['Non', 'vedo', 'in', 'giardino.', 'nessuno'], model: 'Non vedo nessuno in giardino.', rule: R_NON, x: 'Non vedo nessuno.' },
  {
    level: 'A1', type: 'translate', source: T('I study every day.', 'I study every day.', 'Estudo todos os dias.', 'Estudio todos los días.', 'J’étudie tous les jours.', 'Ich lerne jeden Tag.'),
    accepted: ['Studio ogni giorno.', 'Io studio ogni giorno.', 'Studio tutti i giorni.'], model: 'Studio ogni giorno.', rule: R_OGNI, x: 'ogni giorno · tutti i giorni'
  },
  {
    level: 'A1', type: 'write', prompt: T(
      'Write two sentences about your week. Use ogni in one and tutti i in the other.',
      'Scrivi due frasi sulla tua settimana. Usa ogni in una e tutti i nell’altra.',
      'Escreva duas frases sobre a sua semana. Use ogni numa e tutti i na outra.',
      'Escribe dos frases sobre tu semana. Usa ogni en una y tutti i en la otra.',
      'Écris deux phrases sur ta semaine. Utilise ogni dans l’une et tutti i dans l’autre.',
      'Schreibe zwei Sätze über deine Woche. Benutze ogni in einem und tutti i im anderen.'
    ), model: 'Ogni mattina bevo un caffè. Lavoro tutti i giorni.', rule: R_OGNI, x: 'ogni mattina · tutti i giorni'
  },
  { level: 'A2', type: 'correct', source: 'Ho visto nessuno al parco.', accepted: ['Non ho visto nessuno al parco.'], model: 'Non ho visto nessuno al parco.', rule: R_NON, x: 'Non ho visto nessuno.' },
  { level: 'A2', type: 'order', words: ['Nessuno', 'mi', 'ha', 'telefonato', 'ieri.'], model: 'Nessuno mi ha telefonato ieri.', rule: R_BEFORE, x: 'Nessuno è venuto.' },
  {
    level: 'A2', type: 'translate', source: T('I don’t have any problems.', 'I don’t have any problems.', 'Não tenho nenhum problema.', 'No tengo ningún problema.', 'Je n’ai aucun problème.', 'Ich habe kein Problem.'),
    accepted: ['Non ho nessun problema.', 'Non ho problemi.'], model: 'Non ho nessun problema.', rule: R_NESSUN, x: 'nessun problema'
  },
  {
    level: 'A2', type: 'write', prompt: T(
      'Write two sentences saying what you do not have or who is not there. Use niente and nessuno.',
      'Scrivi due frasi per dire che cosa non hai o chi non c’è. Usa niente e nessuno.',
      'Escreva duas frases a dizer o que não tem ou quem não está. Use niente e nessuno.',
      'Escribe dos frases para decir qué no tienes o quién no está. Usa niente y nessuno.',
      'Écris deux phrases pour dire ce que tu n’as pas ou qui n’est pas là. Utilise niente et nessuno.',
      'Schreibe zwei Sätze darüber, was du nicht hast oder wer nicht da ist. Benutze niente und nessuno.'
    ), model: 'Non ho niente da fare. Non c’è nessuno a casa.', rule: R_NON, x: 'Non ho niente. · Non c’è nessuno.'
  },
  { level: 'B1', type: 'correct', source: 'Qualche dei miei amici è italiano.', accepted: ['Alcuni dei miei amici sono italiani.', 'Qualche mio amico è italiano.'], model: 'Alcuni dei miei amici sono italiani.', rule: R_QUALCHE, x: 'alcuni dei miei amici · qualche mio amico' },
  { level: 'B1', type: 'order', words: ['Non', 'dice', 'mai', 'niente', 'a', 'nessuno.'], model: 'Non dice mai niente a nessuno.', rule: R_NON, x: 'Non dice mai niente a nessuno.' },
  {
    level: 'B1', type: 'translate', source: T('Anyone can come.', 'Anyone can come.', 'Qualquer pessoa pode vir.', 'Cualquiera puede venir.', 'N’importe qui peut venir.', 'Jeder kann kommen.'),
    accepted: ['Chiunque può venire.', 'Può venire chiunque.'], model: 'Chiunque può venire.', rule: R_ANY, x: 'Chiunque può venire.'
  },
  {
    level: 'B1', type: 'write', prompt: T(
      'Write two sentences. Use nessuno di … in one and qualcosa di + adjective in the other.',
      'Scrivi due frasi. Usa nessuno di … in una e qualcosa di + aggettivo nell’altra.',
      'Escreva duas frases. Use nessuno di … numa e qualcosa di + adjetivo na outra.',
      'Escribe dos frases. Usa nessuno di … en una y qualcosa di + adjetivo en la otra.',
      'Écris deux phrases. Utilise nessuno di … dans l’une et qualcosa di + adjectif dans l’autre.',
      'Schreibe zwei Sätze. Benutze nessuno di … in einem und qualcosa di + Adjektiv im anderen.'
    ), model: 'Nessuno di loro è arrivato. Ho trovato qualcosa di interessante.', rule: R_UNO, x: 'Nessuno di loro è arrivato.'
  }
]);
