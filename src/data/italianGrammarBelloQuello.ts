import type { GrammarTopic } from './italianGrammar';
import type { GrammarActivity } from './italianGrammarActivities';
import { T, LABELS, buildExercises, buildActivities, fill, reply, pick } from './italianGrammarKit';

// Bello, quello, questo — adjectives that change form before a noun.
// Italian target text stays Italian; support text is a draft pending native-speaker review.

const R_BEL = T(
  'Before a noun, bello follows the definite article: il → bel, i → bei. Example: {x}.',
  'Davanti al nome, bello segue l’articolo determinativo: il → bel, i → bei. Esempio: {x}.',
  'Antes do nome, bello segue o artigo definido: il → bel, i → bei. Exemplo: {x}.',
  'Delante del nombre, bello sigue al artículo determinado: il → bel, i → bei. Ejemplo: {x}.',
  'Devant le nom, bello suit l’article défini : il → bel, i → bei. Exemple : {x}.',
  'Vor dem Nomen folgt bello dem bestimmten Artikel: il → bel, i → bei. Beispiel: {x}.'
);
const R_BELLO = T(
  'With nouns that take lo/gli (s + consonant, z, gn, ps), bello becomes bello (singular) and begli (plural). Example: {x}.',
  'Con i nomi che richiedono lo/gli (s + consonante, z, gn, ps), bello diventa bello (singolare) e begli (plurale). Esempio: {x}.',
  'Com os nomes que pedem lo/gli (s + consoante, z, gn, ps), bello fica bello (singular) e begli (plural). Exemplo: {x}.',
  'Con los nombres que piden lo/gli (s + consonante, z, gn, ps), bello se queda como bello (singular) y begli (plural). Ejemplo: {x}.',
  'Avec les noms qui demandent lo/gli (s + consonne, z, gn, ps), bello reste bello (singulier) et devient begli (pluriel). Exemple : {x}.',
  'Bei Nomen, die lo/gli verlangen (s + Konsonant, z, gn, ps), lautet bello im Singular bello und im Plural begli. Beispiel: {x}.'
);
const R_BELL = T(
  'Before a masculine noun that starts with a vowel, bello becomes bell’ (singular) and begli (plural), like l’ and gli. Example: {x}.',
  'Davanti a un nome maschile che inizia con vocale, bello diventa bell’ (singolare) e begli (plurale), come l’ e gli. Esempio: {x}.',
  'Antes de um nome masculino que começa por vogal, bello fica bell’ (singular) e begli (plural), como l’ e gli. Exemplo: {x}.',
  'Delante de un nombre masculino que empieza por vocal, bello se convierte en bell’ (singular) y begli (plural), como l’ y gli. Ejemplo: {x}.',
  'Devant un nom masculin qui commence par une voyelle, bello devient bell’ (singulier) et begli (pluriel), comme l’ et gli. Exemple : {x}.',
  'Vor einem maskulinen Nomen mit Vokal am Anfang wird bello zu bell’ (Singular) und begli (Plural), wie l’ und gli. Beispiel: {x}.'
);
const R_FEM = T(
  'With feminine nouns bello is regular: bella (singular), belle (plural). Example: {x}.',
  'Con i nomi femminili bello è regolare: bella (singolare), belle (plurale). Esempio: {x}.',
  'Com os nomes femininos, bello é regular: bella (singular), belle (plural). Exemplo: {x}.',
  'Con los nombres femeninos, bello es regular: bella (singular), belle (plural). Ejemplo: {x}.',
  'Avec les noms féminins, bello est régulier : bella (singulier), belle (pluriel). Exemple : {x}.',
  'Bei femininen Nomen ist bello regelmäßig: bella (Singular), belle (Plural). Beispiel: {x}.'
);
const R_QUEL = T(
  'Before a noun, quello follows the definite article too: il → quel, i → quei, lo → quello, gli → quegli, l’ → quell’, la → quella, le → quelle. Example: {x}.',
  'Davanti al nome, anche quello segue l’articolo determinativo: il → quel, i → quei, lo → quello, gli → quegli, l’ → quell’, la → quella, le → quelle. Esempio: {x}.',
  'Antes do nome, quello também segue o artigo definido: il → quel, i → quei, lo → quello, gli → quegli, l’ → quell’, la → quella, le → quelle. Exemplo: {x}.',
  'Delante del nombre, quello también sigue al artículo determinado: il → quel, i → quei, lo → quello, gli → quegli, l’ → quell’, la → quella, le → quelle. Ejemplo: {x}.',
  'Devant le nom, quello suit lui aussi l’article défini : il → quel, i → quei, lo → quello, gli → quegli, l’ → quell’, la → quella, le → quelle. Exemple : {x}.',
  'Vor dem Nomen folgt auch quello dem bestimmten Artikel: il → quel, i → quei, lo → quello, gli → quegli, l’ → quell’, la → quella, le → quelle. Beispiel: {x}.'
);
const R_QUESTO = T(
  'Questo is a regular adjective with four forms: questo, questa, questi, queste. Use it for things near the speaker. Example: {x}.',
  'Questo è un aggettivo regolare con quattro forme: questo, questa, questi, queste. Si usa per ciò che è vicino a chi parla. Esempio: {x}.',
  'Questo é um adjetivo regular com quatro formas: questo, questa, questi, queste. Usa-se para o que está perto de quem fala. Exemplo: {x}.',
  'Questo es un adjetivo regular con cuatro formas: questo, questa, questi, queste. Se usa para lo que está cerca de quien habla. Ejemplo: {x}.',
  'Questo est un adjectif régulier à quatre formes : questo, questa, questi, queste. Il s’emploie pour ce qui est proche de celui qui parle. Exemple : {x}.',
  'Questo ist ein regelmäßiges Adjektiv mit vier Formen: questo, questa, questi, queste. Es steht für das, was dem Sprecher nahe ist. Beispiel: {x}.'
);
const R_AFTER = T(
  'After the noun or after essere, bello is a regular adjective with four forms: bello, bella, belli, belle. Example: {x}.',
  'Dopo il nome o dopo essere, bello è un aggettivo regolare con quattro forme: bello, bella, belli, belle. Esempio: {x}.',
  'Depois do nome ou de essere, bello é um adjetivo regular com quatro formas: bello, bella, belli, belle. Exemplo: {x}.',
  'Detrás del nombre o de essere, bello es un adjetivo regular con cuatro formas: bello, bella, belli, belle. Ejemplo: {x}.',
  'Après le nom ou après essere, bello est un adjectif régulier à quatre formes : bello, bella, belli, belle. Exemple : {x}.',
  'Nach dem Nomen oder nach essere ist bello ein regelmäßiges Adjektiv mit vier Formen: bello, bella, belli, belle. Beispiel: {x}.'
);
const R_PRON = T(
  'When quello replaces a noun (a pronoun), it has four regular forms: quello, quella, quelli, quelle. The forms quel, quei and quegli are only used before a noun. Example: {x}.',
  'Quando quello sostituisce un nome (pronome), ha quattro forme regolari: quello, quella, quelli, quelle. Le forme quel, quei e quegli si usano solo davanti a un nome. Esempio: {x}.',
  'Quando quello substitui um nome (pronome), tem quatro formas regulares: quello, quella, quelli, quelle. As formas quel, quei e quegli só se usam antes de um nome. Exemplo: {x}.',
  'Cuando quello sustituye a un nombre (pronombre), tiene cuatro formas regulares: quello, quella, quelli, quelle. Las formas quel, quei y quegli solo se usan delante de un nombre. Ejemplo: {x}.',
  'Quand quello remplace un nom (pronom), il a quatre formes régulières : quello, quella, quelli, quelle. Les formes quel, quei et quegli ne s’emploient que devant un nom. Exemple : {x}.',
  'Wenn quello ein Nomen ersetzt (Pronomen), hat es vier regelmäßige Formen: quello, quella, quelli, quelle. Die Formen quel, quei und quegli stehen nur vor einem Nomen. Beispiel: {x}.'
);
const R_CHE = T(
  'Quello che (or quel che) means “what / the thing that”. After quello, the relative word is che. Example: {x}.',
  'Quello che (o quel che) significa “ciò che”. Dopo quello, la parola relativa è che. Esempio: {x}.',
  'Quello che (ou quel che) significa “aquilo que”. Depois de quello, a palavra relativa é che. Exemplo: {x}.',
  'Quello che (o quel che) significa “lo que”. Después de quello, la palabra relativa es che. Ejemplo: {x}.',
  'Quello che (ou quel che) signifie « ce que ». Après quello, le mot relatif est che. Exemple : {x}.',
  'Quello che (oder quel che) bedeutet „das, was“. Nach quello steht das Relativwort che. Beispiel: {x}.'
);
const R_NOUN = T(
  'Il bello is a noun meaning “the nice thing / the best part”. Bel is only used before a masculine noun that starts with most consonants. Example: {x}.',
  'Il bello è un nome e significa “la cosa bella / la parte migliore”. Bel si usa solo davanti a un nome maschile che inizia con la maggior parte delle consonanti. Esempio: {x}.',
  'Il bello é um nome e significa “a coisa boa / a melhor parte”. Bel só se usa antes de um nome masculino que começa pela maioria das consoantes. Exemplo: {x}.',
  'Il bello es un nombre y significa “lo bueno / la mejor parte”. Bel solo se usa delante de un nombre masculino que empieza por la mayoría de las consonantes. Ejemplo: {x}.',
  'Il bello est un nom qui signifie « le bon côté / le meilleur ». Bel ne s’emploie que devant un nom masculin qui commence par la plupart des consonnes. Exemple : {x}.',
  'Il bello ist ein Nomen und bedeutet „das Schöne / das Beste daran“. Bel steht nur vor einem maskulinen Nomen, das mit den meisten Konsonanten beginnt. Beispiel: {x}.'
);
const R_TWO = T(
  'With two words before the noun, each takes the form that suits the word right after it. Example: {x}.',
  'Con due parole davanti al nome, ognuna prende la forma adatta alla parola che la segue subito. Esempio: {x}.',
  'Com duas palavras antes do nome, cada uma toma a forma adequada à palavra que vem logo a seguir. Exemplo: {x}.',
  'Con dos palabras delante del nombre, cada una toma la forma que corresponde a la palabra que le sigue. Ejemplo: {x}.',
  'Avec deux mots devant le nom, chacun prend la forme qui convient au mot qui le suit. Exemple : {x}.',
  'Stehen zwei Wörter vor dem Nomen, nimmt jedes die Form, die zum unmittelbar folgenden Wort passt. Beispiel: {x}.'
);

const A1 = buildExercises('bq', 'A1', [
  fill('Hai un ___ libro.', 'bel', ['bello', 'bell’'], R_BEL, 'un bel libro · due bei libri'),
  fill('Che ___ zaino!', 'bello', ['bel', 'bell’'], R_BELLO, 'lo zaino → un bello zaino · gli zaini → due begli zaini'),
  fill('È un ___ albero.', 'bell’', ['bel', 'bello'], R_BELL, 'l’albero → un bell’albero'),
  fill('Hai due ___ occhi.', 'begli', ['bei', 'belli'], R_BELL, 'gli occhi → due begli occhi'),
  fill('Ho comprato due ___ libri.', 'bei', ['begli', 'belli'], R_BEL, 'i libri → due bei libri'),
  fill('Che ___ ragazza!', 'bella', ['bel', 'belle'], R_FEM, 'una bella ragazza'),
  fill('Ci sono due ___ ragazze.', 'belle', ['bei', 'bella'], R_FEM, 'due belle ragazze'),
  fill('___ libro è mio.', 'Quel', ['Quello', 'Quell’'], R_QUEL, 'il libro → quel libro'),
  fill('___ zaino è nuovo.', 'Quello', ['Quel', 'Quella'], R_QUEL, 'lo zaino → quello zaino'),
  fill('___ amica è simpatica.', 'Quell’', ['Quella', 'Quello'], R_QUEL, 'l’amica → quell’amica')
]);

const A2 = buildExercises('bq', 'A2', [
  fill('___ ragazzi sono simpatici.', 'Quei', ['Quegli', 'Quelli'], R_QUEL, 'i ragazzi → quei ragazzi'),
  fill('___ studenti sono stranieri.', 'Quegli', ['Quei', 'Quelli'], R_QUEL, 'gli studenti → quegli studenti'),
  fill('___ scarpe sono care.', 'Quelle', ['Quei', 'Quegli'], R_QUEL, 'le scarpe → quelle scarpe'),
  fill('___ ragazze sono mie amiche.', 'Queste', ['Questi', 'Questa'], R_QUESTO, 'questa ragazza → queste ragazze'),
  fill('___ libri sono per te.', 'Questi', ['Questo', 'Queste'], R_QUESTO, 'questo libro → questi libri'),
  fill('I fiori sono ___.', 'belli', ['bei', 'begli'], R_AFTER, 'i fiori sono belli · dei bei fiori'),
  fill('Quelle case sono ___.', 'belle', ['belli', 'bella'], R_AFTER, 'le case sono belle · delle belle case'),
  pick('Questo è un bel film.', ['Questo è un bello film.', 'Questo è un bei film.'], R_BEL, 'il film → un bel film'),
  pick('Che begli stivali!', ['Che bei stivali!', 'Che belli stivali!'], R_BELLO, 'gli stivali → begli stivali'),
  reply('Quale giacca preferisci? (gialla)', 'Quella gialla.', ['Quello gialla.', 'Quelle gialla.'], R_PRON, 'la giacca → quella gialla'),
  reply('Quali libri leggi? (gialli)', 'Quelli gialli.', ['Quei gialli.', 'Quelle gialli.'], R_PRON, 'i libri → quelli gialli')
]);

const B1 = buildExercises('bq', 'B1', [
  pick('Che bell’idea!', ['Che bel idea!', 'Che bello idea!'], R_BELL, 'l’idea → che bell’idea'),
  fill('Oggi c’è proprio un ___ sole.', 'bel', ['bello', 'bell’'], R_BEL, 'il sole → un bel sole'),
  fill('Ha dei ___ amici.', 'begli', ['bei', 'belli'], R_BELL, 'gli amici → dei begli amici'),
  pick('Quel bell’uomo è mio zio.', ['Quel bello uomo è mio zio.', 'Quello bell’uomo è mio zio.'], R_TWO, 'quel bell’uomo (bell’ starts with b → quel)'),
  fill('Quello ___ dici è vero.', 'che', ['cui', 'chi'], R_CHE, 'Quello che dici è vero.'),
  pick('Non ho capito quello che hai detto.', ['Non ho capito quello cosa hai detto.', 'Non ho capito quello cui hai detto.'], R_CHE, 'quello che hai detto'),
  fill('Fa ___ tempo oggi.', 'bel', ['bello', 'belli'], R_BEL, 'il tempo → bel tempo'),
  pick('Il bello è che nessuno lo sapeva.', ['Il bel è che nessuno lo sapeva.', 'Lo bello è che nessuno lo sapeva.'], R_NOUN, 'il bello è che…'),
  fill('Hai visto ___ stivali nuovi?', 'quegli', ['quei', 'quelli'], R_QUEL, 'gli stivali → quegli stivali'),
  pick('Quei begli occhi blu mi hanno colpito.', ['Quegli bei occhi blu mi hanno colpito.', 'Quei bei occhi blu mi hanno colpito.'], R_TWO, 'quei (before b-) + begli (before occhi)')
]);

export const BELLO_QUELLO_TOPIC: GrammarTopic = {
  id: 'bello-quello',
  title: T('Bello, quello, questo', 'Bello, quello, questo', 'Bello, quello, questo', 'Bello, quello, questo', 'Bello, quello, questo', 'Bello, quello, questo'),
  subtitle: T(
    'Adjectives that change shape before a noun.',
    'Aggettivi che cambiano forma davanti al nome.',
    'Adjetivos que mudam de forma antes do nome.',
    'Adjetivos que cambian de forma delante del nombre.',
    'Des adjectifs qui changent de forme devant le nom.',
    'Adjektive, die vor dem Nomen ihre Form ändern.'
  ),
  levels: {
    A1: {
      label: LABELS.A1,
      focus: T(
        'bel / bello / bell’ / bei / begli and quel / quello / quell’ before a noun.',
        'bel / bello / bell’ / bei / begli e quel / quello / quell’ davanti al nome.',
        'bel / bello / bell’ / bei / begli e quel / quello / quell’ antes do nome.',
        'bel / bello / bell’ / bei / begli y quel / quello / quell’ delante del nombre.',
        'bel / bello / bell’ / bei / begli et quel / quello / quell’ devant le nom.',
        'bel / bello / bell’ / bei / begli und quel / quello / quell’ vor dem Nomen.'
      ),
      explanation: T(
        'Before a noun, bello and quello change shape like the definite article. Masculine: il → bel / quel, i → bei / quei, lo → bello / quello, gli → begli / quegli, l’ → bell’ / quell’. Feminine: la → bella / quella, le → belle / quelle. Choose the article you would use with the noun, then change it: lo zaino → quello zaino, l’amico → quell’amico.',
        'Davanti al nome, bello e quello cambiano forma come l’articolo determinativo. Maschile: il → bel / quel, i → bei / quei, lo → bello / quello, gli → begli / quegli, l’ → bell’ / quell’. Femminile: la → bella / quella, le → belle / quelle. Scegli l’articolo che useresti con il nome, poi cambialo: lo zaino → quello zaino, l’amico → quell’amico.',
        'Antes do nome, bello e quello mudam de forma como o artigo definido. Masculino: il → bel / quel, i → bei / quei, lo → bello / quello, gli → begli / quegli, l’ → bell’ / quell’. Feminino: la → bella / quella, le → belle / quelle. Escolha o artigo que usaria com o nome e depois mude-o: lo zaino → quello zaino, l’amico → quell’amico.',
        'Delante del nombre, bello y quello cambian de forma como el artículo determinado. Masculino: il → bel / quel, i → bei / quei, lo → bello / quello, gli → begli / quegli, l’ → bell’ / quell’. Femenino: la → bella / quella, le → belle / quelle. Elige el artículo que usarías con el nombre y luego cámbialo: lo zaino → quello zaino, l’amico → quell’amico.',
        'Devant le nom, bello et quello changent de forme comme l’article défini. Masculin : il → bel / quel, i → bei / quei, lo → bello / quello, gli → begli / quegli, l’ → bell’ / quell’. Féminin : la → bella / quella, le → belle / quelle. Choisis l’article que tu emploierais avec le nom, puis transforme-le : lo zaino → quello zaino, l’amico → quell’amico.',
        'Vor dem Nomen ändern bello und quello ihre Form wie der bestimmte Artikel. Maskulin: il → bel / quel, i → bei / quei, lo → bello / quello, gli → begli / quegli, l’ → bell’ / quell’. Feminin: la → bella / quella, le → belle / quelle. Wähle den Artikel, den du beim Nomen benutzen würdest, und verwandle ihn: lo zaino → quello zaino, l’amico → quell’amico.'
      ),
      example: 'Che bel libro! · Quello zaino è nuovo. · Hai dei begli occhi. · Quell’amica è simpatica.',
      exercises: A1
    },
    A2: {
      label: LABELS.A2,
      focus: T(
        'Plural forms, questo, and bello after the noun; quello as a pronoun.',
        'Forme plurali, questo e bello dopo il nome; quello come pronome.',
        'Formas do plural, questo e bello depois do nome; quello como pronome.',
        'Formas plurales, questo y bello detrás del nombre; quello como pronombre.',
        'Formes du pluriel, questo et bello après le nom ; quello comme pronom.',
        'Pluralformen, questo und bello nach dem Nomen; quello als Pronomen.'
      ),
      explanation: T(
        'Plural: quei ragazzi, quegli studenti, quelle scarpe; i bei libri, i begli amici, le belle case. Questo is simple: questo, questa, questi, queste. After the noun or after essere, bello has four normal forms: i fiori sono belli, le case sono belle. When quello replaces a noun, it also has four normal forms: quello, quella, quelli, quelle. “Quali libri? Quelli gialli.”',
        'Plurale: quei ragazzi, quegli studenti, quelle scarpe; i bei libri, i begli amici, le belle case. Questo è semplice: questo, questa, questi, queste. Dopo il nome o dopo essere, bello ha quattro forme normali: i fiori sono belli, le case sono belle. Quando quello sostituisce un nome, ha anch’esso quattro forme normali: quello, quella, quelli, quelle. “Quali libri? Quelli gialli.”',
        'Plural: quei ragazzi, quegli studenti, quelle scarpe; i bei libri, i begli amici, le belle case. Questo é simples: questo, questa, questi, queste. Depois do nome ou de essere, bello tem quatro formas normais: i fiori sono belli, le case sono belle. Quando quello substitui um nome, também tem quatro formas normais: quello, quella, quelli, quelle. “Quali libri? Quelli gialli.”',
        'Plural: quei ragazzi, quegli studenti, quelle scarpe; i bei libri, i begli amici, le belle case. Questo es sencillo: questo, questa, questi, queste. Detrás del nombre o de essere, bello tiene cuatro formas normales: i fiori sono belli, le case sono belle. Cuando quello sustituye a un nombre, también tiene cuatro formas normales: quello, quella, quelli, quelle. “Quali libri? Quelli gialli.”',
        'Pluriel : quei ragazzi, quegli studenti, quelle scarpe ; i bei libri, i begli amici, le belle case. Questo est simple : questo, questa, questi, queste. Après le nom ou après essere, bello a quatre formes normales : i fiori sono belli, le case sono belle. Quand quello remplace un nom, il a lui aussi quatre formes normales : quello, quella, quelli, quelle. « Quali libri ? Quelli gialli. »',
        'Plural: quei ragazzi, quegli studenti, quelle scarpe; i bei libri, i begli amici, le belle case. Questo ist einfach: questo, questa, questi, queste. Nach dem Nomen oder nach essere hat bello vier normale Formen: i fiori sono belli, le case sono belle. Ersetzt quello ein Nomen, hat es ebenfalls vier normale Formen: quello, quella, quelli, quelle. „Quali libri? Quelli gialli.“'
      ),
      example: 'Quei ragazzi sono simpatici. · Questi libri sono per te. · I fiori sono belli. · Quale giacca? Quella gialla.',
      exercises: A2
    },
    B1: {
      label: LABELS.B1,
      focus: T(
        'Two words before a noun, exclamations, quello che and il bello.',
        'Due parole davanti al nome, esclamazioni, quello che e il bello.',
        'Duas palavras antes do nome, exclamações, quello che e il bello.',
        'Dos palabras delante del nombre, exclamaciones, quello che e il bello.',
        'Deux mots devant le nom, exclamations, quello che et il bello.',
        'Zwei Wörter vor dem Nomen, Ausrufe, quello che und il bello.'
      ),
      explanation: T(
        'When two words stand before the noun, each one follows the word right after it: quel bell’uomo (bell’ starts with b, so quel), quei begli occhi (occhi starts with a vowel, so begli; begli starts with b, so quei). Use exclamations like Che bell’idea! and Che bei fiori! Quello che means “what”: Quello che dici è vero. Il bello is a noun: Il bello è che nessuno lo sapeva. Fixed phrases: fa bel tempo, un bel po’.',
        'Quando due parole stanno davanti al nome, ognuna segue la parola che viene subito dopo: quel bell’uomo (bell’ inizia con b, quindi quel), quei begli occhi (occhi inizia con vocale, quindi begli; begli inizia con b, quindi quei). Usa esclamazioni come Che bell’idea! e Che bei fiori! Quello che significa “ciò che”: Quello che dici è vero. Il bello è un nome: Il bello è che nessuno lo sapeva. Espressioni fisse: fa bel tempo, un bel po’.',
        'Quando duas palavras estão antes do nome, cada uma segue a palavra que vem logo a seguir: quel bell’uomo (bell’ começa por b, por isso quel), quei begli occhi (occhi começa por vogal, por isso begli; begli começa por b, por isso quei). Use exclamações como Che bell’idea! e Che bei fiori! Quello che significa “aquilo que”: Quello che dici è vero. Il bello é um nome: Il bello è che nessuno lo sapeva. Expressões fixas: fa bel tempo, un bel po’.',
        'Cuando dos palabras van delante del nombre, cada una sigue a la palabra que viene justo después: quel bell’uomo (bell’ empieza por b, por eso quel), quei begli occhi (occhi empieza por vocal, por eso begli; begli empieza por b, por eso quei). Usa exclamaciones como Che bell’idea! y Che bei fiori! Quello che significa “lo que”: Quello che dici è vero. Il bello es un nombre: Il bello è che nessuno lo sapeva. Expresiones fijas: fa bel tempo, un bel po’.',
        'Quand deux mots précèdent le nom, chacun suit le mot qui vient juste après : quel bell’uomo (bell’ commence par b, donc quel), quei begli occhi (occhi commence par une voyelle, donc begli ; begli commence par b, donc quei). Emploie des exclamations comme Che bell’idea ! et Che bei fiori ! Quello che signifie « ce que » : Quello che dici è vero. Il bello est un nom : Il bello è che nessuno lo sapeva. Expressions figées : fa bel tempo, un bel po’.',
        'Stehen zwei Wörter vor dem Nomen, richtet sich jedes nach dem Wort direkt dahinter: quel bell’uomo (bell’ beginnt mit b, also quel), quei begli occhi (occhi beginnt mit Vokal, also begli; begli beginnt mit b, also quei). Benutze Ausrufe wie Che bell’idea! und Che bei fiori! Quello che heißt „das, was“: Quello che dici è vero. Il bello ist ein Nomen: Il bello è che nessuno lo sapeva. Feste Wendungen: fa bel tempo, un bel po’.'
      ),
      example: 'Che bell’idea! · Quel bell’uomo è mio zio. · Quello che dici è vero. · Il bello è che nessuno lo sapeva.',
      exercises: B1
    }
  }
};

const RULE_BEL_ACT = R_BEL;
export const BELLO_QUELLO_ACTIVITIES: GrammarActivity[] = buildActivities('bello-quello', [
  { level: 'A1', type: 'correct', source: 'Hai un bello libro.', accepted: ['Hai un bel libro.'], model: 'Hai un bel libro.', rule: RULE_BEL_ACT, x: 'il libro → un bel libro' },
  { level: 'A1', type: 'order', words: ['libro.', 'Ho', 'bel', 'un', 'comprato'], model: 'Ho comprato un bel libro.', rule: RULE_BEL_ACT, x: 'un bel libro' },
  {
    level: 'A1', type: 'translate', source: T('I have a beautiful house.', 'I have a beautiful house.', 'Tenho uma casa bonita.', 'Tengo una casa bonita.', 'J’ai une belle maison.', 'Ich habe ein schönes Haus.'),
    accepted: ['Ho una bella casa.', 'Io ho una bella casa.'], model: 'Ho una bella casa.', rule: R_FEM, x: 'una bella casa'
  },
  {
    level: 'A1', type: 'write', prompt: T(
      'Write two sentences about things you like. Use a form of bello before the noun.',
      'Scrivi due frasi su cose che ti piacciono. Usa una forma di bello davanti al nome.',
      'Escreva duas frases sobre coisas de que gosta. Use uma forma de bello antes do nome.',
      'Escribe dos frases sobre cosas que te gustan. Usa una forma de bello delante del nombre.',
      'Écris deux phrases sur des choses que tu aimes. Utilise une forme de bello devant le nom.',
      'Schreibe zwei Sätze über Dinge, die du magst. Benutze eine Form von bello vor dem Nomen.'
    ), model: 'Ho un bel cane. Ho anche una bella casa.', rule: R_BEL, x: 'un bel cane · una bella casa'
  },
  { level: 'A2', type: 'correct', source: 'Quei studenti sono simpatici.', accepted: ['Quegli studenti sono simpatici.'], model: 'Quegli studenti sono simpatici.', rule: R_QUEL, x: 'gli studenti → quegli studenti' },
  { level: 'A2', type: 'order', words: ['Quegli', 'alberi', 'sono', 'molto', 'belli.'], model: 'Quegli alberi sono molto belli.', rule: R_AFTER, x: 'quegli alberi sono belli' },
  {
    level: 'A2', type: 'translate', source: T('Those shoes are beautiful.', 'Those shoes are beautiful.', 'Aqueles sapatos são bonitos.', 'Esos zapatos son bonitos.', 'Ces chaussures sont belles.', 'Diese Schuhe dort sind schön.'),
    accepted: ['Quelle scarpe sono belle.'], model: 'Quelle scarpe sono belle.', rule: R_AFTER, x: 'quelle scarpe sono belle'
  },
  {
    level: 'A2', type: 'write', prompt: T(
      'Write two sentences. Point at two things and say they are beautiful. Use quel / quella / quei.',
      'Scrivi due frasi. Indica due cose e dì che sono belle. Usa quel / quella / quei.',
      'Escreva duas frases. Aponte duas coisas e diga que são bonitas. Use quel / quella / quei.',
      'Escribe dos frases. Señala dos cosas y di que son bonitas. Usa quel / quella / quei.',
      'Écris deux phrases. Montre deux choses et dis qu’elles sont belles. Utilise quel / quella / quei.',
      'Schreibe zwei Sätze. Zeige auf zwei Dinge und sage, dass sie schön sind. Benutze quel / quella / quei.'
    ), model: 'Quella casa è molto bella. Quei fiori sono belli.', rule: R_QUEL, x: 'quella casa · quei fiori'
  },
  { level: 'B1', type: 'correct', source: 'Che bello idea!', accepted: ['Che bella idea!', 'Che bell’idea!'], model: 'Che bella idea!', rule: R_BELL, x: 'che bella idea · che bell’idea' },
  { level: 'B1', type: 'order', words: ['Quello', 'che', 'dici', 'è', 'davvero', 'interessante.'], model: 'Quello che dici è davvero interessante.', rule: R_CHE, x: 'Quello che dici è vero.' },
  {
    level: 'B1', type: 'translate', source: T('What a beautiful day!', 'What a beautiful day!', 'Que dia bonito!', '¡Qué día más bonito!', 'Quelle belle journée !', 'Was für ein schöner Tag!'),
    accepted: ['Che bella giornata!', 'Che bel giorno!'], model: 'Che bella giornata!', rule: R_BELL, x: 'che bella giornata · che bel giorno'
  },
  {
    level: 'B1', type: 'write', prompt: T(
      'Write two sentences. Use an exclamation with bel / bell’ / begli, and a sentence with quello che.',
      'Scrivi due frasi. Usa un’esclamazione con bel / bell’ / begli e una frase con quello che.',
      'Escreva duas frases. Use uma exclamação com bel / bell’ / begli e uma frase com quello che.',
      'Escribe dos frases. Usa una exclamación con bel / bell’ / begli y una frase con quello che.',
      'Écris deux phrases. Utilise une exclamation avec bel / bell’ / begli et une phrase avec quello che.',
      'Schreibe zwei Sätze. Benutze einen Ausruf mit bel / bell’ / begli und einen Satz mit quello che.'
    ), model: 'Che bell’idea! Quello che dici è vero.', rule: R_CHE, x: 'Quello che dici è vero.'
  }
]);
