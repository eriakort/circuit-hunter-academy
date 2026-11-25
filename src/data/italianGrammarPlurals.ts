import type { GrammarTopic } from './italianGrammar';
import type { GrammarActivity } from './italianGrammarActivities';
import { T, LABELS, buildExercises, buildActivities, fill, pick } from './italianGrammarKit';

// Irregular plurals — nouns that change gender, stay the same, or follow a special spelling rule.
// Italian target text stays Italian; support text is a draft pending native-speaker review.
// Distractors are chosen to be clearly wrong (wrong agreement or non-existent forms), so that
// rare but real alternative plurals are never offered as mistakes.

const R_UOVA = T(
  'A group of masculine nouns become feminine in the plural, with -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia, il dito → le dita, il labbro → le labbra, l’osso → le ossa. The article and the adjective are feminine too: le uova fresche. Example: {x}.',
  'Un gruppo di nomi maschili diventa femminile al plurale, con -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia, il dito → le dita, il labbro → le labbra, l’osso → le ossa. Anche articolo e aggettivo sono femminili: le uova fresche. Esempio: {x}.',
  'Um grupo de nomes masculinos torna-se feminino no plural, com -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia, il dito → le dita, il labbro → le labbra, l’osso → le ossa. O artigo e o adjetivo também são femininos: le uova fresche. Exemplo: {x}.',
  'Un grupo de nombres masculinos se vuelve femenino en el plural, con -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia, il dito → le dita, il labbro → le labbra, l’osso → le ossa. El artículo y el adjetivo también son femeninos: le uova fresche. Ejemplo: {x}.',
  'Un groupe de noms masculins devient féminin au pluriel, avec -a : l’uovo → le uova, il paio → le paia, il braccio → le braccia, il dito → le dita, il labbro → le labbra, l’osso → le ossa. L’article et l’adjectif sont eux aussi féminins : le uova fresche. Exemple : {x}.',
  'Eine Gruppe maskuliner Nomen wird im Plural feminin, mit -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia, il dito → le dita, il labbro → le labbra, l’osso → le ossa. Auch Artikel und Adjektiv sind feminin: le uova fresche. Beispiel: {x}.'
);
const R_MANO = T(
  'La mano is feminine and ends in -o. Its plural is le mani: article and adjective stay feminine. Example: {x}.',
  'La mano è femminile e finisce in -o. Il plurale è le mani: articolo e aggettivo restano femminili. Esempio: {x}.',
  'La mano é feminino e termina em -o. O plural é le mani: o artigo e o adjetivo continuam femininos. Exemplo: {x}.',
  'La mano es femenino y termina en -o. Su plural es le mani: el artículo y el adjetivo siguen siendo femeninos. Ejemplo: {x}.',
  'La mano est féminin et se termine par -o. Son pluriel est le mani : l’article et l’adjectif restent féminins. Exemple : {x}.',
  'La mano ist feminin und endet auf -o. Der Plural lautet le mani: Artikel und Adjektiv bleiben feminin. Beispiel: {x}.'
);
const R_UOMO = T(
  'Uomo has a different plural stem: uomini (gli uomini). Dio becomes dei (gli dei). Example: {x}.',
  'Uomo ha un plurale con un’altra radice: uomini (gli uomini). Dio diventa dei (gli dei). Esempio: {x}.',
  'Uomo tem um plural com outra raiz: uomini (gli uomini). Dio passa a dei (gli dei). Exemplo: {x}.',
  'Uomo tiene un plural con otra raíz: uomini (gli uomini). Dio pasa a dei (gli dei). Ejemplo: {x}.',
  'Uomo a un pluriel avec un autre radical : uomini (gli uomini). Dio devient dei (gli dei). Exemple : {x}.',
  'Uomo hat einen Plural mit anderem Stamm: uomini (gli uomini). Dio wird zu dei (gli dei). Beispiel: {x}.'
);
const R_INV = T(
  'Some nouns do not change in the plural: nouns ending in an accented vowel (la città, il caffè), shortened words (la foto, l’auto, la moto, la radio), foreign words (il film, lo sport, il bar), and nouns in -ie or -i (la serie, la crisi). Only the article shows the number. Example: {x}.',
  'Alcuni nomi non cambiano al plurale: quelli che finiscono con vocale accentata (la città, il caffè), le parole abbreviate (la foto, l’auto, la moto, la radio), le parole straniere (il film, lo sport, il bar) e i nomi in -ie o -i (la serie, la crisi). Solo l’articolo mostra il numero. Esempio: {x}.',
  'Alguns nomes não mudam no plural: os terminados em vogal acentuada (la città, il caffè), as palavras abreviadas (la foto, l’auto, la moto, la radio), as palavras estrangeiras (il film, lo sport, il bar) e os nomes em -ie ou -i (la serie, la crisi). Só o artigo mostra o número. Exemplo: {x}.',
  'Algunos nombres no cambian en el plural: los que terminan en vocal acentuada (la città, il caffè), las palabras abreviadas (la foto, l’auto, la moto, la radio), las palabras extranjeras (il film, lo sport, il bar) y los nombres en -ie o -i (la serie, la crisi). Solo el artículo muestra el número. Ejemplo: {x}.',
  'Certains noms ne changent pas au pluriel : ceux qui se terminent par une voyelle accentuée (la città, il caffè), les mots abrégés (la foto, l’auto, la moto, la radio), les mots étrangers (il film, lo sport, il bar) et les noms en -ie ou -i (la serie, la crisi). Seul l’article montre le nombre. Exemple : {x}.',
  'Manche Nomen ändern sich im Plural nicht: Nomen auf betonten Vokal (la città, il caffè), Kurzwörter (la foto, l’auto, la moto, la radio), Fremdwörter (il film, lo sport, il bar) und Nomen auf -ie oder -i (la serie, la crisi). Nur der Artikel zeigt die Zahl. Beispiel: {x}.'
);
const R_CO = T(
  'Nouns in -co / -go usually form the plural in -chi / -ghi when the stress is on the second-to-last syllable (gioco → giochi, lago → laghi, parco → parchi) and in -ci / -gi when it is on the third-to-last (medico → medici). Exceptions exist, for example amico → amici. Example: {x}.',
  'I nomi in -co / -go di solito fanno il plurale in -chi / -ghi quando l’accento cade sulla penultima sillaba (gioco → giochi, lago → laghi, parco → parchi) e in -ci / -gi quando cade sulla terzultima (medico → medici). Ci sono eccezioni, per esempio amico → amici. Esempio: {x}.',
  'Os nomes em -co / -go costumam formar o plural em -chi / -ghi quando o acento cai na penúltima sílaba (gioco → giochi, lago → laghi, parco → parchi) e em -ci / -gi quando cai na antepenúltima (medico → medici). Há exceções, por exemplo amico → amici. Exemplo: {x}.',
  'Los nombres en -co / -go suelen formar el plural en -chi / -ghi cuando el acento cae en la penúltima sílaba (gioco → giochi, lago → laghi, parco → parchi) y en -ci / -gi cuando cae en la antepenúltima (medico → medici). Hay excepciones, por ejemplo amico → amici. Ejemplo: {x}.',
  'Les noms en -co / -go forment en général le pluriel en -chi / -ghi quand l’accent tombe sur l’avant-dernière syllabe (gioco → giochi, lago → laghi, parco → parchi) et en -ci / -gi quand il tombe sur l’antépénultième (medico → medici). Il y a des exceptions, par exemple amico → amici. Exemple : {x}.',
  'Nomen auf -co / -go bilden den Plural meist auf -chi / -ghi, wenn die vorletzte Silbe betont ist (gioco → giochi, lago → laghi, parco → parchi), und auf -ci / -gi, wenn die drittletzte betont ist (medico → medici). Es gibt Ausnahmen, zum Beispiel amico → amici. Beispiel: {x}.'
);
const R_CA = T(
  'Feminine nouns in -ca / -ga keep the hard sound and add h in the plural: banca → banche, riga → righe, amica → amiche. Nouns in -cia / -gia drop the i after a consonant (arancia → arance) and keep it when the i is stressed or follows a vowel (farmacia → farmacie). Example: {x}.',
  'I nomi femminili in -ca / -ga mantengono il suono duro e aggiungono h al plurale: banca → banche, riga → righe, amica → amiche. I nomi in -cia / -gia perdono la i dopo una consonante (arancia → arance) e la mantengono quando la i è accentata o segue una vocale (farmacia → farmacie). Esempio: {x}.',
  'Os nomes femininos em -ca / -ga mantêm o som duro e acrescentam h no plural: banca → banche, riga → righe, amica → amiche. Os nomes em -cia / -gia perdem o i depois de consoante (arancia → arance) e mantêm-no quando o i é tónico ou vem depois de vogal (farmacia → farmacie). Exemplo: {x}.',
  'Los nombres femeninos en -ca / -ga mantienen el sonido duro y añaden h en el plural: banca → banche, riga → righe, amica → amiche. Los nombres en -cia / -gia pierden la i después de consonante (arancia → arance) y la conservan cuando la i es tónica o va tras vocal (farmacia → farmacie). Ejemplo: {x}.',
  'Les noms féminins en -ca / -ga gardent le son dur et ajoutent h au pluriel : banca → banche, riga → righe, amica → amiche. Les noms en -cia / -gia perdent le i après une consonne (arancia → arance) et le gardent quand le i est accentué ou suit une voyelle (farmacia → farmacie). Exemple : {x}.',
  'Feminine Nomen auf -ca / -ga behalten den harten Laut und bekommen im Plural ein h: banca → banche, riga → righe, amica → amiche. Nomen auf -cia / -gia verlieren das i nach Konsonant (arancia → arance) und behalten es, wenn das i betont ist oder nach einem Vokal steht (farmacia → farmacie). Beispiel: {x}.'
);
const R_MA = T(
  'Nouns in -ma such as problema, programma, sistema, tema are masculine: their plural is -mi (i problemi, i programmi) and the article and adjective are masculine. Example: {x}.',
  'I nomi in -ma come problema, programma, sistema, tema sono maschili: il plurale è -mi (i problemi, i programmi) e articolo e aggettivo sono maschili. Esempio: {x}.',
  'Os nomes em -ma como problema, programma, sistema, tema são masculinos: o plural é -mi (i problemi, i programmi) e o artigo e o adjetivo são masculinos. Exemplo: {x}.',
  'Los nombres en -ma como problema, programma, sistema, tema son masculinos: su plural es -mi (i problemi, i programmi) y el artículo y el adjetivo son masculinos. Ejemplo: {x}.',
  'Les noms en -ma comme problema, programma, sistema, tema sont masculins : leur pluriel est -mi (i problemi, i programmi) et l’article et l’adjectif sont masculins. Exemple : {x}.',
  'Nomen auf -ma wie problema, programma, sistema, tema sind maskulin: Der Plural lautet -mi (i problemi, i programmi), Artikel und Adjektiv sind maskulin. Beispiel: {x}.'
);
const R_DOUBLE = T(
  'Some nouns have two plurals with different meanings. The masculine plural is used for the separate or figurative sense, the feminine plural in -a for the collective or body sense: i muri (walls of a house) / le mura (city walls); i bracci (arms of a river) / le braccia (arms of a person). Example: {x}.',
  'Alcuni nomi hanno due plurali con significati diversi. Il plurale maschile si usa per il senso separato o figurato, quello femminile in -a per il senso collettivo o del corpo: i muri (di una casa) / le mura (di una città); i bracci (di un fiume) / le braccia (di una persona). Esempio: {x}.',
  'Alguns nomes têm dois plurais com significados diferentes. O plural masculino usa-se para o sentido separado ou figurado, o feminino em -a para o sentido coletivo ou do corpo: i muri (de uma casa) / le mura (de uma cidade); i bracci (de um rio) / le braccia (de uma pessoa). Exemplo: {x}.',
  'Algunos nombres tienen dos plurales con significados distintos. El plural masculino se usa para el sentido separado o figurado, el femenino en -a para el sentido colectivo o del cuerpo: i muri (de una casa) / le mura (de una ciudad); i bracci (de un río) / le braccia (de una persona). Ejemplo: {x}.',
  'Certains noms ont deux pluriels de sens différents. Le pluriel masculin sert au sens séparé ou figuré, le pluriel féminin en -a au sens collectif ou corporel : i muri (d’une maison) / le mura (d’une ville) ; i bracci (d’un fleuve) / le braccia (d’une personne). Exemple : {x}.',
  'Manche Nomen haben zwei Pluralformen mit unterschiedlicher Bedeutung. Der maskuline Plural steht für den einzelnen oder übertragenen Sinn, der feminine auf -a für den kollektiven oder körperlichen Sinn: i muri (eines Hauses) / le mura (einer Stadt); i bracci (eines Flusses) / le braccia (eines Menschen). Beispiel: {x}.'
);
const R_MIGLIAIA = T(
  'Il centinaio and il migliaio also change gender: le centinaia, le migliaia. Use them with di: migliaia di persone. Example: {x}.',
  'Anche il centinaio e il migliaio cambiano genere: le centinaia, le migliaia. Si usano con di: migliaia di persone. Esempio: {x}.',
  'Il centinaio e il migliaio também mudam de género: le centinaia, le migliaia. Usam-se com di: migliaia di persone. Exemplo: {x}.',
  'Il centinaio e il migliaio también cambian de género: le centinaia, le migliaia. Se usan con di: migliaia di persone. Ejemplo: {x}.',
  'Il centinaio et il migliaio changent eux aussi de genre : le centinaia, le migliaia. On les emploie avec di : migliaia di persone. Exemple : {x}.',
  'Auch il centinaio und il migliaio wechseln das Genus: le centinaia, le migliaia. Sie stehen mit di: migliaia di persone. Beispiel: {x}.'
);
const R_COLLEGA = T(
  'Nouns in -a that name people (il / la collega, il turista) have a masculine plural in -i and a feminine plural in -e: i colleghi / le colleghe, i turisti / le turiste. Example: {x}.',
  'I nomi in -a che indicano persone (il / la collega, il turista) hanno il plurale maschile in -i e il plurale femminile in -e: i colleghi / le colleghe, i turisti / le turiste. Esempio: {x}.',
  'Os nomes em -a que designam pessoas (il / la collega, il turista) têm o plural masculino em -i e o plural feminino em -e: i colleghi / le colleghe, i turisti / le turiste. Exemplo: {x}.',
  'Los nombres en -a que designan personas (il / la collega, il turista) tienen el plural masculino en -i y el plural femenino en -e: i colleghi / le colleghe, i turisti / le turiste. Ejemplo: {x}.',
  'Les noms en -a qui désignent des personnes (il / la collega, il turista) ont le pluriel masculin en -i et le pluriel féminin en -e : i colleghi / le colleghe, i turisti / le turiste. Exemple : {x}.',
  'Nomen auf -a, die Personen bezeichnen (il / la collega, il turista), haben den maskulinen Plural auf -i und den femininen auf -e: i colleghi / le colleghe, i turisti / le turiste. Beispiel: {x}.'
);
const R_DEFECT = T(
  'A few nouns exist only in the plural (i pantaloni, gli occhiali, le forbici, le vacanze) and some are singular only, even when they mean a group: la gente takes a singular verb (La gente è gentile). Example: {x}.',
  'Alcuni nomi esistono solo al plurale (i pantaloni, gli occhiali, le forbici, le vacanze) e altri solo al singolare, anche se indicano un gruppo: la gente vuole il verbo al singolare (La gente è gentile). Esempio: {x}.',
  'Alguns nomes só existem no plural (i pantaloni, gli occhiali, le forbici, le vacanze) e outros só no singular, mesmo que designem um grupo: la gente pede o verbo no singular (La gente è gentile). Exemplo: {x}.',
  'Algunos nombres solo existen en plural (i pantaloni, gli occhiali, le forbici, le vacanze) y otros solo en singular, aunque indiquen un grupo: la gente lleva el verbo en singular (La gente è gentile). Ejemplo: {x}.',
  'Quelques noms n’existent qu’au pluriel (i pantaloni, gli occhiali, le forbici, le vacanze) et d’autres qu’au singulier, même s’ils désignent un groupe : la gente veut le verbe au singulier (La gente è gentile). Exemple : {x}.',
  'Einige Nomen gibt es nur im Plural (i pantaloni, gli occhiali, le forbici, le vacanze), andere nur im Singular, auch wenn sie eine Gruppe meinen: la gente verlangt das Verb im Singular (La gente è gentile). Beispiel: {x}.'
);

const A1 = buildExercises('pl', 'A1', [
  fill('Compro sei ___ per la torta.', 'uova', ['uovi', 'uove'], R_UOVA, 'l’uovo → le uova'),
  fill('Ho due ___ di scarpe nuove.', 'paia', ['paii', 'paie'], R_UOVA, 'il paio → le paia'),
  pick('Le mie mani sono fredde.', ['I mie mani sono freddi.', 'Le mie mani sono freddi.'], R_MANO, 'la mano → le mani'),
  fill('Gli ___ sono arrivati ieri.', 'uomini', ['uomi', 'uomoni'], R_UOMO, 'l’uomo → gli uomini'),
  pick('Ho due braccia forti.', ['Ho due braccio forti.', 'Ho due braccia forte.'], R_UOVA, 'il braccio → le braccia'),
  fill('Ho visto due ___ ieri.', 'film', ['films', 'filmi'], R_INV, 'il film → i film'),
  fill('Ho visitato due ___ italiane.', 'città', ['citte', 'cittadi'], R_INV, 'la città → le città'),
  fill('Prendo due ___ al bar.', 'caffè', ['caffe', 'caffei'], R_INV, 'il caffè → i caffè'),
  fill('Ho scattato tre ___ del lago.', 'foto', ['fote', 'foti'], R_INV, 'la foto → le foto'),
  pick('Le uova sono fresche.', ['I uova sono freschi.', 'Le uova sono freschi.'], R_UOVA, 'le uova fresche')
]);

const A2 = buildExercises('pl', 'A2', [
  fill('Abbiamo visitato dei ___ in montagna.', 'laghi', ['laghe', 'lagi'], R_CO, 'il lago → i laghi'),
  fill('Ho due ___ italiani.', 'amici', ['amichi', 'amicci'], R_CO, 'l’amico → gli amici'),
  fill('I ___ lavorano all’ospedale.', 'medici', ['medichi', 'medice'], R_CO, 'il medico → i medici'),
  fill('Ci sono molti ___ nel centro.', 'parchi', ['parci', 'parche'], R_CO, 'il parco → i parchi'),
  fill('Compro due ___.', 'arance', ['arancie', 'arancee'], R_CA, 'l’arancia → le arance'),
  fill('Ci sono due ___ in questa via.', 'farmacie', ['farmace', 'farmacce'], R_CA, 'la farmacia → le farmacie'),
  fill('In questa via ci sono tre ___.', 'banche', ['banci', 'bance'], R_CA, 'la banca → le banche'),
  pick('I problemi sono difficili.', ['Le problemi sono difficili.', 'Le problema sono difficili.'], R_MA, 'il problema → i problemi'),
  fill('Ci sono molti ___ interessanti in TV.', 'programmi', ['programme', 'programmmi'], R_MA, 'il programma → i programmi'),
  fill('Mi piacciono molti ___.', 'sport', ['sporti', 'sports'], R_INV, 'lo sport → gli sport')
]);

const B1 = buildExercises('pl', 'B1', [
  pick('Gli dei dell’antica Grecia erano molti.', ['Gli dii dell’antica Grecia erano molti.', 'Gli dei dell’antica Grecia erano molte.'], R_UOMO, 'il dio → gli dei'),
  pick('Le mura della città sono antiche.', ['I mura della città sono antichi.', 'Le muri della città sono antiche.'], R_DOUBLE, 'le mura (di una città) / i muri (di una casa)'),
  fill('I ___ del fiume sono due.', 'bracci', ['braccia', 'braccie'], R_DOUBLE, 'i bracci del fiume / le braccia della persona'),
  fill('C’erano ___ di persone in piazza.', 'migliaia', ['migliaio', 'migliai'], R_MIGLIAIA, 'migliaia di persone'),
  pick('I miei colleghi sono simpatici.', ['I miei colleghi sono simpatiche.', 'Le mie colleghi sono simpatici.'], R_COLLEGA, 'i colleghi / le colleghe'),
  fill('La gente ___ gentile.', 'è', ['sono', 'siamo'], R_DEFECT, 'La gente è gentile.'),
  pick('Ho due auto e tre moto.', ['Ho due auti e tre moti.', 'Ho due aute e tre mote.'], R_INV, 'l’auto → le auto · la moto → le moto'),
  fill('Ho visto due ___ televisive.', 'serie', ['serii', 'seri'], R_INV, 'la serie → le serie'),
  pick('Le crisi economiche sono preoccupanti.', ['Le crisii economiche sono preoccupanti.', 'I crisi economici sono preoccupanti.'], R_INV, 'la crisi → le crisi'),
  pick('Mi fanno male le ossa.', ['Mi fanno male gli ossa.', 'Mi fanno male le osse.'], R_UOVA, 'l’osso → le ossa')
]);

export const IRREGULAR_PLURALS_TOPIC: GrammarTopic = {
  id: 'irregular-plurals',
  title: T('Irregular plurals · Plurali irregolari', 'Plurali irregolari', 'Plurais irregulares · Plurali irregolari', 'Plurales irregulares · Plurali irregolari', 'Pluriels irréguliers · Plurali irregolari', 'Unregelmäßige Plurale · Plurali irregolari'),
  subtitle: T(
    'Nouns that change gender, stay the same or follow a spelling rule.',
    'Nomi che cambiano genere, restano uguali o seguono una regola di ortografia.',
    'Nomes que mudam de género, ficam iguais ou seguem uma regra de ortografia.',
    'Nombres que cambian de género, se quedan igual o siguen una regla de ortografía.',
    'Des noms qui changent de genre, restent identiques ou suivent une règle d’orthographe.',
    'Nomen, die das Genus wechseln, gleich bleiben oder einer Schreibregel folgen.'
  ),
  levels: {
    A1: {
      label: LABELS.A1,
      focus: T(
        'The common irregular plurals: uova, paia, braccia, mani, uomini and invariable nouns.',
        'I plurali irregolari più comuni: uova, paia, braccia, mani, uomini e i nomi invariabili.',
        'Os plurais irregulares mais comuns: uova, paia, braccia, mani, uomini e os nomes invariáveis.',
        'Los plurales irregulares más comunes: uova, paia, braccia, mani, uomini y los nombres invariables.',
        'Les pluriels irréguliers les plus courants : uova, paia, braccia, mani, uomini et les noms invariables.',
        'Die häufigsten unregelmäßigen Plurale: uova, paia, braccia, mani, uomini und unveränderliche Nomen.'
      ),
      explanation: T(
        'Some masculine nouns become feminine in the plural, with -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia. Article and adjective follow the plural gender: le uova fresche. La mano → le mani. L’uomo → gli uomini. Some nouns do not change at all: la città → le città, il caffè → i caffè, il film → i film, la foto → le foto. Only the article shows the number.',
        'Alcuni nomi maschili diventano femminili al plurale, con -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia. Articolo e aggettivo seguono il genere del plurale: le uova fresche. La mano → le mani. L’uomo → gli uomini. Alcuni nomi non cambiano affatto: la città → le città, il caffè → i caffè, il film → i film, la foto → le foto. Solo l’articolo mostra il numero.',
        'Alguns nomes masculinos tornam-se femininos no plural, com -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia. O artigo e o adjetivo seguem o género do plural: le uova fresche. La mano → le mani. L’uomo → gli uomini. Alguns nomes não mudam nada: la città → le città, il caffè → i caffè, il film → i film, la foto → le foto. Só o artigo mostra o número.',
        'Algunos nombres masculinos se vuelven femeninos en el plural, con -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia. El artículo y el adjetivo siguen el género del plural: le uova fresche. La mano → le mani. L’uomo → gli uomini. Algunos nombres no cambian en absoluto: la città → le città, il caffè → i caffè, il film → i film, la foto → le foto. Solo el artículo muestra el número.',
        'Certains noms masculins deviennent féminins au pluriel, avec -a : l’uovo → le uova, il paio → le paia, il braccio → le braccia. L’article et l’adjectif suivent le genre du pluriel : le uova fresche. La mano → le mani. L’uomo → gli uomini. Certains noms ne changent pas du tout : la città → le città, il caffè → i caffè, il film → i film, la foto → le foto. Seul l’article montre le nombre.',
        'Einige maskuline Nomen werden im Plural feminin, mit -a: l’uovo → le uova, il paio → le paia, il braccio → le braccia. Artikel und Adjektiv folgen dem Genus des Plurals: le uova fresche. La mano → le mani. L’uomo → gli uomini. Manche Nomen ändern sich gar nicht: la città → le città, il caffè → i caffè, il film → i film, la foto → le foto. Nur der Artikel zeigt die Zahl.'
      ),
      example: 'Compro sei uova. · Le mie mani sono fredde. · Gli uomini sono arrivati. · Ho visto due film.',
      exercises: A1
    },
    A2: {
      label: LABELS.A2,
      focus: T(
        'Spelling rules: -co / -go, -ca / -ga, -cia / -gia, and masculine nouns in -ma.',
        'Regole di ortografia: -co / -go, -ca / -ga, -cia / -gia e i nomi maschili in -ma.',
        'Regras de ortografia: -co / -go, -ca / -ga, -cia / -gia e os nomes masculinos em -ma.',
        'Reglas de ortografía: -co / -go, -ca / -ga, -cia / -gia y los nombres masculinos en -ma.',
        'Règles d’orthographe : -co / -go, -ca / -ga, -cia / -gia et les noms masculins en -ma.',
        'Schreibregeln: -co / -go, -ca / -ga, -cia / -gia und maskuline Nomen auf -ma.'
      ),
      explanation: T(
        'Nouns in -co / -go: the plural is usually -chi / -ghi when the stress is on the second-to-last syllable (gioco → giochi, lago → laghi, parco → parchi) and -ci / -gi when it is on the third-to-last (medico → medici). Exceptions exist: amico → amici. Feminine -ca / -ga add h: banca → banche, riga → righe. Nouns in -cia / -gia: arancia → arance (consonant before), farmacia → farmacie (stressed i). Nouns in -ma are masculine: il problema → i problemi. Foreign words stay the same: lo sport → gli sport.',
        'Nomi in -co / -go: il plurale è di solito -chi / -ghi quando l’accento cade sulla penultima sillaba (gioco → giochi, lago → laghi, parco → parchi) e -ci / -gi quando cade sulla terzultima (medico → medici). Ci sono eccezioni: amico → amici. I femminili in -ca / -ga aggiungono h: banca → banche, riga → righe. Nomi in -cia / -gia: arancia → arance (consonante prima), farmacia → farmacie (i accentata). I nomi in -ma sono maschili: il problema → i problemi. Le parole straniere restano uguali: lo sport → gli sport.',
        'Nomes em -co / -go: o plural costuma ser -chi / -ghi quando o acento cai na penúltima sílaba (gioco → giochi, lago → laghi, parco → parchi) e -ci / -gi quando cai na antepenúltima (medico → medici). Há exceções: amico → amici. Os femininos em -ca / -ga acrescentam h: banca → banche, riga → righe. Nomes em -cia / -gia: arancia → arance (consoante antes), farmacia → farmacie (i tónico). Os nomes em -ma são masculinos: il problema → i problemi. As palavras estrangeiras ficam iguais: lo sport → gli sport.',
        'Nombres en -co / -go: el plural suele ser -chi / -ghi cuando el acento cae en la penúltima sílaba (gioco → giochi, lago → laghi, parco → parchi) y -ci / -gi cuando cae en la antepenúltima (medico → medici). Hay excepciones: amico → amici. Los femeninos en -ca / -ga añaden h: banca → banche, riga → righe. Nombres en -cia / -gia: arancia → arance (consonante antes), farmacia → farmacie (i tónica). Los nombres en -ma son masculinos: il problema → i problemi. Las palabras extranjeras se quedan igual: lo sport → gli sport.',
        'Noms en -co / -go : le pluriel est en général -chi / -ghi quand l’accent tombe sur l’avant-dernière syllabe (gioco → giochi, lago → laghi, parco → parchi) et -ci / -gi quand il tombe sur l’antépénultième (medico → medici). Il y a des exceptions : amico → amici. Les féminins en -ca / -ga ajoutent h : banca → banche, riga → righe. Noms en -cia / -gia : arancia → arance (consonne avant), farmacia → farmacie (i accentué). Les noms en -ma sont masculins : il problema → i problemi. Les mots étrangers restent identiques : lo sport → gli sport.',
        'Nomen auf -co / -go: Der Plural ist meist -chi / -ghi, wenn die vorletzte Silbe betont ist (gioco → giochi, lago → laghi, parco → parchi), und -ci / -gi, wenn die drittletzte betont ist (medico → medici). Es gibt Ausnahmen: amico → amici. Feminine auf -ca / -ga bekommen ein h: banca → banche, riga → righe. Nomen auf -cia / -gia: arancia → arance (Konsonant davor), farmacia → farmacie (betontes i). Nomen auf -ma sind maskulin: il problema → i problemi. Fremdwörter bleiben gleich: lo sport → gli sport.'
      ),
      example: 'Ho due amici italiani. · Ci sono molti parchi. · Compro due arance. · I problemi sono difficili.',
      exercises: A2
    },
    B1: {
      label: LABELS.B1,
      focus: T(
        'Double plurals, gods and thousands, people nouns in -a, plural-only nouns.',
        'Doppi plurali, dei e migliaia, nomi di persona in -a, nomi solo plurali.',
        'Plurais duplos, deuses e milhares, nomes de pessoas em -a, nomes só no plural.',
        'Plurales dobles, dioses y millares, nombres de persona en -a, nombres solo plurales.',
        'Pluriels doubles, dieux et milliers, noms de personnes en -a, noms seulement pluriels.',
        'Doppelte Plurale, Götter und Tausende, Personennomen auf -a, reine Pluralnomen.'
      ),
      explanation: T(
        'Some nouns have two plurals with different meanings: i muri (walls of a house) / le mura (city walls); i bracci (arms of a river) / le braccia (arms of a person). Il dio → gli dei. Il centinaio and il migliaio become le centinaia, le migliaia: migliaia di persone. Nouns in -a for people: i colleghi / le colleghe, i turisti / le turiste. Nouns in -ie and -i do not change: la serie → le serie, la crisi → le crisi. Some nouns are plural-only (i pantaloni, gli occhiali) and la gente takes a singular verb.',
        'Alcuni nomi hanno due plurali con significati diversi: i muri (di una casa) / le mura (di una città); i bracci (di un fiume) / le braccia (di una persona). Il dio → gli dei. Il centinaio e il migliaio diventano le centinaia, le migliaia: migliaia di persone. Nomi in -a per le persone: i colleghi / le colleghe, i turisti / le turiste. I nomi in -ie e -i non cambiano: la serie → le serie, la crisi → le crisi. Alcuni nomi sono solo plurali (i pantaloni, gli occhiali) e la gente vuole il verbo al singolare.',
        'Alguns nomes têm dois plurais com significados diferentes: i muri (de uma casa) / le mura (de uma cidade); i bracci (de um rio) / le braccia (de uma pessoa). Il dio → gli dei. Il centinaio e il migliaio passam a le centinaia, le migliaia: migliaia di persone. Nomes em -a para pessoas: i colleghi / le colleghe, i turisti / le turiste. Os nomes em -ie e -i não mudam: la serie → le serie, la crisi → le crisi. Alguns nomes só existem no plural (i pantaloni, gli occhiali) e la gente pede o verbo no singular.',
        'Algunos nombres tienen dos plurales con significados distintos: i muri (de una casa) / le mura (de una ciudad); i bracci (de un río) / le braccia (de una persona). Il dio → gli dei. Il centinaio e il migliaio pasan a le centinaia, le migliaia: migliaia di persone. Nombres en -a para personas: i colleghi / le colleghe, i turisti / le turiste. Los nombres en -ie e -i no cambian: la serie → le serie, la crisi → le crisi. Algunos nombres solo existen en plural (i pantaloni, gli occhiali) y la gente lleva el verbo en singular.',
        'Certains noms ont deux pluriels de sens différents : i muri (d’une maison) / le mura (d’une ville) ; i bracci (d’un fleuve) / le braccia (d’une personne). Il dio → gli dei. Il centinaio et il migliaio deviennent le centinaia, le migliaia : migliaia di persone. Noms en -a pour les personnes : i colleghi / le colleghe, i turisti / le turiste. Les noms en -ie et -i ne changent pas : la serie → le serie, la crisi → le crisi. Certains noms n’existent qu’au pluriel (i pantaloni, gli occhiali) et la gente veut le verbe au singulier.',
        'Manche Nomen haben zwei Plurale mit unterschiedlicher Bedeutung: i muri (eines Hauses) / le mura (einer Stadt); i bracci (eines Flusses) / le braccia (eines Menschen). Il dio → gli dei. Il centinaio und il migliaio werden zu le centinaia, le migliaia: migliaia di persone. Nomen auf -a für Personen: i colleghi / le colleghe, i turisti / le turiste. Nomen auf -ie und -i ändern sich nicht: la serie → le serie, la crisi → le crisi. Manche Nomen gibt es nur im Plural (i pantaloni, gli occhiali), und la gente verlangt das Verb im Singular.'
      ),
      example: 'Le mura della città sono antiche. · Migliaia di persone. · I miei colleghi sono simpatici. · La gente è gentile.',
      exercises: B1
    }
  }
};

export const IRREGULAR_PLURALS_ACTIVITIES: GrammarActivity[] = buildActivities('irregular-plurals', [
  { level: 'A1', type: 'correct', source: 'Ho mangiato due uovi.', accepted: ['Ho mangiato due uova.'], model: 'Ho mangiato due uova.', rule: R_UOVA, x: 'l’uovo → le uova' },
  { level: 'A1', type: 'order', words: ['sono', 'Le', 'fredde.', 'mani', 'mie'], model: 'Le mie mani sono fredde.', rule: R_MANO, x: 'la mano → le mani' },
  {
    level: 'A1', type: 'translate', source: T('I buy six eggs.', 'I buy six eggs.', 'Compro seis ovos.', 'Compro seis huevos.', 'J’achète six œufs.', 'Ich kaufe sechs Eier.'),
    accepted: ['Compro sei uova.', 'Io compro sei uova.'], model: 'Compro sei uova.', rule: R_UOVA, x: 'sei uova'
  },
  {
    level: 'A1', type: 'write', prompt: T(
      'Write two sentences with plural nouns that change gender. Use uova and braccia or mani.',
      'Scrivi due frasi con plurali che cambiano genere. Usa uova e braccia o mani.',
      'Escreva duas frases com plurais que mudam de género. Use uova e braccia ou mani.',
      'Escribe dos frases con plurales que cambian de género. Usa uova y braccia o mani.',
      'Écris deux phrases avec des pluriels qui changent de genre. Utilise uova et braccia ou mani.',
      'Schreibe zwei Sätze mit Pluralen, die das Genus wechseln. Benutze uova und braccia oder mani.'
    ), model: 'Ho comprato sei uova. Ho male alle braccia.', rule: R_UOVA, x: 'le uova · le braccia'
  },
  { level: 'A2', type: 'correct', source: 'Ho due amichi italiani.', accepted: ['Ho due amici italiani.', 'Ho due amiche italiane.'], model: 'Ho due amici italiani.', rule: R_CO, x: 'l’amico → gli amici' },
  { level: 'A2', type: 'order', words: ['Ci', 'sono', 'molti', 'parchi', 'in', 'città.'], model: 'Ci sono molti parchi in città.', rule: R_CO, x: 'il parco → i parchi' },
  {
    level: 'A2', type: 'translate', source: T('The problems are difficult.', 'The problems are difficult.', 'Os problemas são difíceis.', 'Los problemas son difíciles.', 'Les problèmes sont difficiles.', 'Die Probleme sind schwierig.'),
    accepted: ['I problemi sono difficili.'], model: 'I problemi sono difficili.', rule: R_MA, x: 'il problema → i problemi'
  },
  {
    level: 'A2', type: 'write', prompt: T(
      'Write two sentences. Use the plural of two of these nouns: lago, gioco, parco, amico, banca.',
      'Scrivi due frasi. Usa il plurale di due di questi nomi: lago, gioco, parco, amico, banca.',
      'Escreva duas frases. Use o plural de dois destes nomes: lago, gioco, parco, amico, banca.',
      'Escribe dos frases. Usa el plural de dos de estos nombres: lago, gioco, parco, amico, banca.',
      'Écris deux phrases. Utilise le pluriel de deux de ces noms : lago, gioco, parco, amico, banca.',
      'Schreibe zwei Sätze. Benutze den Plural von zwei dieser Nomen: lago, gioco, parco, amico, banca.'
    ), model: 'Ho molti amici. Vicino a casa ci sono due parchi.', rule: R_CO, x: 'gli amici · i parchi'
  },
  { level: 'B1', type: 'correct', source: 'Mi fanno male i ossa.', accepted: ['Mi fanno male le ossa.'], model: 'Mi fanno male le ossa.', rule: R_UOVA, x: 'l’osso → le ossa' },
  { level: 'B1', type: 'order', words: ['Le', 'crisi', 'economiche', 'sono', 'preoccupanti.'], model: 'Le crisi economiche sono preoccupanti.', rule: R_INV, x: 'la crisi → le crisi' },
  {
    level: 'B1', type: 'translate', source: T('Thousands of people were in the square.', 'Thousands of people were in the square.', 'Milhares de pessoas estavam na praça.', 'Miles de personas estaban en la plaza.', 'Des milliers de personnes étaient sur la place.', 'Tausende Menschen waren auf dem Platz.'),
    accepted: ['Migliaia di persone erano in piazza.', 'C’erano migliaia di persone in piazza.'], model: 'C’erano migliaia di persone in piazza.', rule: R_MIGLIAIA, x: 'migliaia di persone'
  },
  {
    level: 'B1', type: 'write', prompt: T(
      'Write two sentences. Use a plural-only or invariable noun in each: for example forbici, auto, serie, gente.',
      'Scrivi due frasi. Usa in ognuna un nome solo plurale o invariabile: per esempio forbici, auto, serie, gente.',
      'Escreva duas frases. Use em cada uma um nome só plural ou invariável: por exemplo forbici, auto, serie, gente.',
      'Escribe dos frases. Usa en cada una un nombre solo plural o invariable: por ejemplo forbici, auto, serie, gente.',
      'Écris deux phrases. Utilise dans chacune un nom seulement pluriel ou invariable : par exemple forbici, auto, serie, gente.',
      'Schreibe zwei Sätze. Benutze in jedem ein reines Pluralnomen oder ein unveränderliches Nomen: zum Beispiel forbici, auto, serie, gente.'
    ), model: 'Ho comprato due auto nuove. La gente è molto gentile.', rule: R_DEFECT, x: 'La gente è gentile.'
  }
]);
