import type { BilingualText, LocalizedText } from '../types';

// Support-language versions (pt, es, fr, de) of the exercise prompts that were written when
// the app only had English and Italian. The Italian sentences inside a prompt stay Italian;
// only the instruction around them is translated. Draft pending native-speaker review.
//
// Templates are written with “curly” quotes; French gets « guillemets » and German „low“ quotes.

type Four = [pt: string, es: string, fr: string, de: string];
const LANGS = ['pt', 'es', 'fr', 'de'] as const;
type Lang = typeof LANGS[number];

const quotes = (lang: Lang, s: string): string => lang === 'fr' ? s.replace(/“([^”]*)”/g, '« $1 »') : lang === 'de' ? s.replace(/“([^”]*)”/g, '„$1“') : s;

// Whole prompts that need their own translation (English words inside, or no pattern).
const WHOLE: Record<string, Four> = {
  'Complete the sentence.': ['Complete a frase.', 'Completa la frase.', 'Complète la phrase.', 'Ergänze den Satz.'],
  'Choose the correct phrase.': ['Escolha a expressão correta.', 'Elige la expresión correcta.', 'Choisis l’expression correcte.', 'Wähle die richtige Wendung.'],
  'Choose the grammatically correct sentence.': ['Escolha a frase gramaticalmente correta.', 'Elige la frase gramaticalmente correcta.', 'Choisis la phrase grammaticalement correcte.', 'Wähle den grammatisch richtigen Satz.'],
  'Correct the phrase by choosing its proper form.': ['Corrija a expressão escolhendo a forma adequada.', 'Corrige la expresión eligiendo la forma adecuada.', 'Corrige l’expression en choisissant la forme appropriée.', 'Korrigiere die Wendung, indem du die passende Form wählst.'],
  'Choose the fully correct sentence.': ['Escolha a frase totalmente correta.', 'Elige la frase totalmente correcta.', 'Choisis la phrase entièrement correcte.', 'Wähle den völlig richtigen Satz.'],
  'Complete: ___ studente is here.': ['Complete: ___ studente está aqui.', 'Completa: ___ studente está aquí.', 'Complète : ___ studente est ici.', 'Ergänze: ___ studente ist hier.'],
  'Complete: ___ friends of Sara arrive at eight.': ['Complete: ___ amigos de Sara chegam às oito.', 'Completa: ___ amigos de Sara llegan a las ocho.', 'Complète : ___ amis de Sara arrivent à huit heures.', 'Ergänze: ___ Freunde von Sara kommen um acht an.'],
  'Anna and Lucia ___ arrivate.': ['Complete: Anna e Lucia ___ arrivate.', 'Completa: Anna e Lucia ___ arrivate.', 'Complète : Anna e Lucia ___ arrivate.', 'Ergänze: Anna e Lucia ___ arrivate.'],
  'Which pronoun means “we”?': ['Qual pronome significa “nós”?', '¿Qué pronombre significa “nosotros”?', 'Quel pronom signifie “nous” ?', 'Welches Pronomen bedeutet “wir”?'],
  'Which subject pronoun can replace “Paolo e io”?': ['Qual pronome sujeito pode substituir “Paolo e io”?', '¿Qué pronombre sujeto puede sustituir a “Paolo e io”?', 'Quel pronom sujet peut remplacer “Paolo e io” ?', 'Welches Subjektpronomen kann “Paolo e io” ersetzen?'],
  'Choose the direct pronoun for “i ragazzi”.': ['Escolha o pronome direto para “i ragazzi”.', 'Elige el pronombre directo para “i ragazzi”.', 'Choisis le pronom direct pour “i ragazzi”.', 'Wähle das direkte Pronomen für “i ragazzi”.'],
  'Complete: Anna and I? ___ vedo ogni giorno.': ['Complete: Anna e eu? ___ vedo ogni giorno.', 'Completa: ¿Anna y yo? ___ vedo ogni giorno.', 'Complète : Anna et moi ? ___ vedo ogni giorno.', 'Ergänze: Anna und ich? ___ vedo ogni giorno.'],
  'Which pronoun means “they” (masculine)?': ['Qual pronome significa “eles” (masculino)?', '¿Qué pronombre significa “ellos” (masculino)?', 'Quel pronom signifie “ils” (masculin) ?', 'Welches Pronomen bedeutet “sie” (maskulin, Plural)?'],
  'Which subject pronoun replaces “tu e Maria”?': ['Qual pronome sujeito substitui “tu e Maria”?', '¿Qué pronombre sujeto sustituye a “tu e Maria”?', 'Quel pronom sujet remplace “tu e Maria” ?', 'Welches Subjektpronomen ersetzt “tu e Maria”?'],
  '“I call Giulia” → Chiamo Giulia. Choose the replacement.': ['“Eu chamo a Giulia” → Chiamo Giulia. Escolha a substituição.', '“Llamo a Giulia” → Chiamo Giulia. Elige la sustitución.', '“J’appelle Giulia” → Chiamo Giulia. Choisis le remplacement.', '“Ich rufe Giulia an” → Chiamo Giulia. Wähle den Ersatz.'],
  '“I write to Paolo” → Scrivo a Paolo. Choose the replacement.': ['“Eu escrevo ao Paolo” → Scrivo a Paolo. Escolha a substituição.', '“Escribo a Paolo” → Scrivo a Paolo. Elige la sustitución.', '“J’écris à Paolo” → Scrivo a Paolo. Choisis le remplacement.', '“Ich schreibe Paolo” → Scrivo a Paolo. Wähle den Ersatz.'],
  'Choose the correct position: “I see them”.': ['Escolha a posição correta: “Eu os vejo”.', 'Elige la posición correcta: “Los veo”.', 'Choisis la bonne place : “Je les vois”.', 'Wähle die richtige Stellung: “Ich sehe sie”.'],
  'Which sentence uses “ne” correctly?': ['Qual frase usa “ne” corretamente?', '¿Qué frase usa “ne” correctamente?', 'Quelle phrase utilise “ne” correctement ?', 'Welcher Satz verwendet “ne” richtig?'],
  'Choose both natural forms.': ['Escolha as duas formas naturais.', 'Elige las dos formas naturales.', 'Choisis les deux formes naturelles.', 'Wähle beide natürlichen Formen.'],
  'Choose the sentence where “ne” is wrong.': ['Escolha a frase em que “ne” está errado.', 'Elige la frase en la que “ne” es incorrecto.', 'Choisis la phrase où “ne” est incorrect.', 'Wähle den Satz, in dem “ne” falsch ist.'],
  'Choose the correct sentence (activity of running).': ['Escolha a frase correta (a atividade de correr).', 'Elige la frase correcta (la actividad de correr).', 'Choisis la phrase correcte (l’activité de courir).', 'Wähle den richtigen Satz (die Tätigkeit des Laufens).'],
  'Choose the correct sentence (speaker is female).': ['Escolha a frase correta (quem fala é mulher).', 'Elige la frase correcta (quien habla es una mujer).', 'Choisis la phrase correcte (la personne qui parle est une femme).', 'Wähle den richtigen Satz (die sprechende Person ist eine Frau).'],
  'Choose the correct sequence.': ['Escolha a sequência correta.', 'Elige la secuencia correcta.', 'Choisis la séquence correcte.', 'Wähle die richtige Reihenfolge.'],
  'Choose the sentence that matches “She spent the holidays at the sea.”': ['Escolha a frase que corresponde a “Ela passou as férias no mar.”', 'Elige la frase que corresponde a “Pasó las vacaciones en el mar.”', 'Choisis la phrase qui correspond à “Elle a passé les vacances à la mer.”', 'Wähle den Satz, der zu “Sie hat die Ferien am Meer verbracht.” passt.'],
  'At the market I buy ___ spinach and ___ pears.': ['No mercado compro ___ espinafre e ___ peras.', 'En el mercado compro ___ espinacas y ___ peras.', 'Au marché, j’achète ___ épinards et ___ poires.', 'Auf dem Markt kaufe ich ___ Spinat und ___ Birnen.'],
  'Which word means roughly the same as “dei libri”?': ['Qual palavra significa mais ou menos o mesmo que “dei libri”?', '¿Qué palabra significa más o menos lo mismo que “dei libri”?', 'Quel mot signifie à peu près la même chose que “dei libri” ?', 'Welches Wort bedeutet ungefähr dasselbe wie “dei libri”?'],
  'Choose the correct form with “qualche”.': ['Escolha a forma correta com “qualche”.', 'Elige la forma correcta con “qualche”.', 'Choisis la forme correcte avec “qualche”.', 'Wähle die richtige Form mit “qualche”.'],
  'In a negative sentence, which is most natural?': ['Numa frase negativa, qual é a mais natural?', 'En una frase negativa, ¿cuál es la más natural?', 'Dans une phrase négative, laquelle est la plus naturelle ?', 'Welche Form ist in einem verneinten Satz am natürlichsten?'],
  'In “Il profumo del caffè è intenso”, what is “del”?': ['Em “Il profumo del caffè è intenso”, o que é “del”?', 'En “Il profumo del caffè è intenso”, ¿qué es “del”?', 'Dans “Il profumo del caffè è intenso”, qu’est-ce que “del” ?', 'Was ist “del” in “Il profumo del caffè è intenso”?'],
  'In “La porta della casa è aperta”, what is “della”?': ['Em “La porta della casa è aperta”, o que é “della”?', 'En “La porta della casa è aperta”, ¿qué es “della”?', 'Dans “La porta della casa è aperta”, qu’est-ce que “della” ?', 'Was ist “della” in “La porta della casa è aperta”?'],
  'Choose the sentence expressing an unspecified quantity.': ['Escolha a frase que expressa uma quantidade indeterminada.', 'Elige la frase que expresa una cantidad indeterminada.', 'Choisis la phrase qui exprime une quantité indéterminée.', 'Wähle den Satz, der eine unbestimmte Menge ausdrückt.'],
  'Choose the correct present tense.': ['Escolha o presente correto.', 'Elige el presente correcto.', 'Choisis le présent correct.', 'Wähle das richtige Präsens.'],
  'Choose the correct sentence for tu.': ['Escolha a frase correta para tu.', 'Elige la frase correcta para tu.', 'Choisis la phrase correcte pour tu.', 'Wähle den richtigen Satz für tu.'],
  'Choose the infinitive that is reflexive.': ['Escolha o infinitivo reflexivo.', 'Elige el infinitivo reflexivo.', 'Choisis l’infinitif pronominal.', 'Wähle den reflexiven Infinitiv.'],
  'A female speaker says: “I got dressed.”': ['Uma mulher diz: “Eu me vesti.”', 'Una mujer dice: “Me vestí.”', 'Une femme dit : “Je me suis habillée.”', 'Eine Frau sagt: “Ich habe mich angezogen.”'],
  'A female speaker: “I got up early.”': ['Uma mulher: “Eu me levantei cedo.”', 'Una mujer: “Me levanté temprano.”', 'Une femme : “Je me suis levée tôt.”', 'Eine Frau: “Ich bin früh aufgestanden.”'],
  'Choose the correct auxiliary for a reflexive verb.': ['Escolha o auxiliar correto para um verbo reflexivo.', 'Elige el auxiliar correcto para un verbo reflexivo.', 'Choisis l’auxiliaire correct pour un verbe pronominal.', 'Wähle das richtige Hilfsverb für ein reflexives Verb.'],
  'Which sentence means “I washed the car”?': ['Qual frase significa “Eu lavei o carro”?', '¿Qué frase significa “Lavé el coche”?', 'Quelle phrase signifie “J’ai lavé la voiture” ?', 'Welcher Satz bedeutet “Ich habe das Auto gewaschen”?'],
  'Choose the correct sequence for “we got up and got dressed”.': ['Escolha a sequência correta para “nós nos levantamos e nos vestimos”.', 'Elige la secuencia correcta para “nos levantamos y nos vestimos”.', 'Choisis la séquence correcte pour “nous nous sommes levés et habillés”.', 'Wähle die richtige Reihenfolge für “wir sind aufgestanden und haben uns angezogen”.'],
  'Which means “I washed my hands”?': ['Qual significa “Eu lavei as mãos”?', '¿Cuál significa “Me lavé las manos”?', 'Laquelle signifie “Je me suis lavé les mains” ?', 'Welcher bedeutet “Ich habe mir die Hände gewaschen”?'],
  'Choose the consistent narrative (female speaker).': ['Escolha a narrativa coerente (quem fala é mulher).', 'Elige la narración coherente (quien habla es una mujer).', 'Choisis le récit cohérent (la personne qui parle est une femme).', 'Wähle die stimmige Erzählung (die sprechende Person ist eine Frau).'],
  'Choose the correct word order.': ['Escolha a ordem de palavras correta.', 'Elige el orden de palabras correcto.', 'Choisis le bon ordre des mots.', 'Wähle die richtige Wortstellung.'],
  'Complete the sentence with the correct article.': ['Complete a frase com o artigo correto.', 'Completa la frase con el artículo correcto.', 'Complète la phrase avec l’article correct.', 'Ergänze den Satz mit dem richtigen Artikel.'],
  'Choose the correct adjective agreement.': ['Escolha a concordância correta do adjetivo.', 'Elige la concordancia correcta del adjetivo.', 'Choisis l’accord correct de l’adjectif.', 'Wähle die richtige Angleichung des Adjektivs.'],
  'Choose the natural sentence order.': ['Escolha a ordem natural da frase.', 'Elige el orden natural de la frase.', 'Choisis l’ordre naturel de la phrase.', 'Wähle die natürliche Satzstellung.'],
  'Choose the correctly formed sentence.': ['Escolha a frase bem formada.', 'Elige la frase bien formada.', 'Choisis la phrase correctement formée.', 'Wähle den korrekt gebildeten Satz.'],
  'Choose the correct agreement.': ['Escolha a concordância correta.', 'Elige la concordancia correcta.', 'Choisis l’accord correct.', 'Wähle die richtige Angleichung.'],
  'Choose the natural sentence.': ['Escolha a frase natural.', 'Elige la frase natural.', 'Choisis la phrase naturelle.', 'Wähle den natürlichen Satz.'],
  'Choose the complete correct sentence.': ['Escolha a frase completa e correta.', 'Elige la frase completa y correcta.', 'Choisis la phrase complète et correcte.', 'Wähle den vollständigen, richtigen Satz.'],
  'Arrange the idea into a natural sentence by choosing the correct version.': ['Organize a ideia numa frase natural escolhendo a versão correta.', 'Ordena la idea en una frase natural eligiendo la versión correcta.', 'Mets l’idée en une phrase naturelle en choisissant la bonne version.', 'Bringe die Idee in einen natürlichen Satz, indem du die richtige Version wählst.'],
  'Choose the correct pronoun sentence.': ['Escolha a frase com o pronome correto.', 'Elige la frase con el pronombre correcto.', 'Choisis la phrase avec le bon pronom.', 'Wähle den Satz mit dem richtigen Pronomen.'],
  'Choose the correct connected sentence.': ['Escolha a frase composta correta.', 'Elige la frase compuesta correcta.', 'Choisis la phrase composée correcte.', 'Wähle den richtigen verbundenen Satz.'],
  'Choose the correct sequence of actions.': ['Escolha a sequência correta das ações.', 'Elige la secuencia correcta de acciones.', 'Choisis la bonne succession d’actions.', 'Wähle die richtige Abfolge der Handlungen.'],
  'Choose the sentence with the correct connector and word order.': ['Escolha a frase com o conector e a ordem de palavras corretos.', 'Elige la frase con el conector y el orden de palabras correctos.', 'Choisis la phrase avec le bon connecteur et le bon ordre des mots.', 'Wähle den Satz mit dem richtigen Bindewort und der richtigen Wortstellung.'],
  'Choose the natural order with a time clause.': ['Escolha a ordem natural com uma oração de tempo.', 'Elige el orden natural con una oración temporal.', 'Choisis l’ordre naturel avec une proposition de temps.', 'Wähle die natürliche Reihenfolge mit einem Zeitsatz.'],
  'Choose the correct sentence using “ne”.': ['Escolha a frase correta com “ne”.', 'Elige la frase correcta con “ne”.', 'Choisis la phrase correcte avec “ne”.', 'Wähle den richtigen Satz mit “ne”.'],
  'Choose the most natural connected sentence.': ['Escolha a frase composta mais natural.', 'Elige la frase compuesta más natural.', 'Choisis la phrase composée la plus naturelle.', 'Wähle den natürlichsten verbundenen Satz.'],
  'Combine into one natural sentence.': ['Combine numa só frase natural.', 'Combina en una sola frase natural.', 'Combine en une seule phrase naturelle.', 'Verbinde zu einem natürlichen Satz.'],
  'Correct the error: “Io ho andato a scuola ieri.” Choose the correction.': ['Corrija o erro: “Io ho andato a scuola ieri.” Escolha a correção.', 'Corrige el error: “Io ho andato a scuola ieri.” Elige la corrección.', 'Corrige l’erreur : “Io ho andato a scuola ieri.” Choisis la correction.', 'Korrigiere den Fehler: “Io ho andato a scuola ieri.” Wähle die Korrektur.'],
  'Choose the correct modal construction.': ['Escolha a construção modal correta.', 'Elige la construcción modal correcta.', 'Choisis la construction modale correcte.', 'Wähle die richtige Konstruktion mit Modalverb.'],
  'Where does non go?': ['Onde vai o non?', '¿Dónde va non?', 'Où se place non ?', 'Wo steht non?'],
  'Choose the correct sentence.': ['Escolha a frase correta.', 'Elige la frase correcta.', 'Choisis la phrase correcte.', 'Wähle den richtigen Satz.'],
  'Choose the correct negative sentence.': ['Escolha a frase negativa correta.', 'Elige la frase negativa correcta.', 'Choisis la phrase négative correcte.', 'Wähle den richtigen verneinten Satz.'],
  'Choose the sentence with consistent subject and verb agreement.': ['Escolha a frase com concordância coerente entre sujeito e verbo.', 'Elige la frase con concordancia coherente entre sujeto y verbo.', 'Choisis la phrase avec un accord cohérent entre sujet et verbe.', 'Wähle den Satz mit stimmiger Übereinstimmung von Subjekt und Verb.'],
  'Choose the natural negative modal sentence.': ['Escolha a frase modal negativa natural.', 'Elige la frase modal negativa natural.', 'Choisis la phrase modale négative naturelle.', 'Wähle den natürlichen verneinten Satz mit Modalverb.'],
  'Choose the sentence where the subject pronoun adds contrast.': ['Escolha a frase em que o pronome sujeito acrescenta contraste.', 'Elige la frase en la que el pronombre sujeto añade contraste.', 'Choisis la phrase où le pronom sujet ajoute un contraste.', 'Wähle den Satz, in dem das Subjektpronomen einen Kontrast ausdrückt.'],
  'Choose the sentence with correct agreement.': ['Escolha a frase com concordância correta.', 'Elige la frase con concordancia correcta.', 'Choisis la phrase avec l’accord correct.', 'Wähle den Satz mit der richtigen Angleichung.'],
  'Choose the natural sentence with a modal.': ['Escolha a frase natural com um verbo modal.', 'Elige la frase natural con un verbo modal.', 'Choisis la phrase naturelle avec un verbe modal.', 'Wähle den natürlichen Satz mit Modalverb.'],
  'Look at the picture. What is this person doing?': ['Observe a imagem. O que esta pessoa está fazendo?', 'Mira la imagen. ¿Qué está haciendo esta persona?', 'Regarde l’image. Que fait cette personne ?', 'Sieh dir das Bild an. Was macht diese Person gerade?'],
  'Look at the picture. True or false?': ['Observe a imagem. Verdadeiro ou falso?', 'Mira la imagen. ¿Verdadero o falso?', 'Regarde l’image. Vrai ou faux ?', 'Sieh dir das Bild an. Richtig oder falsch?'],
  'Which sentence describes the picture?': ['Qual frase descreve a imagem?', '¿Qué frase describe la imagen?', 'Quelle phrase décrit l’image ?', 'Welcher Satz beschreibt das Bild?'],
  'On the phone her friend asks what she is doing right now. Which question did the friend ask?': ['Ao telefone, a amiga pergunta o que ela está fazendo agora. Qual pergunta a amiga fez?', 'Por teléfono, su amiga le pregunta qué está haciendo ahora. ¿Qué pregunta hizo la amiga?', 'Au téléphone, son amie lui demande ce qu’elle fait en ce moment. Quelle question l’amie a-t-elle posée ?', 'Am Telefon fragt ihre Freundin, was sie gerade macht. Welche Frage hat die Freundin gestellt?'],
  'Choose the sentence describing a past habit.': ['Escolha a frase que descreve um hábito no passado.', 'Elige la frase que describe un hábito pasado.', 'Choisis la phrase qui décrit une habitude passée.', 'Wähle den Satz, der eine frühere Gewohnheit beschreibt.'],
  'Choose the habitual-past sentence.': ['Escolha a frase com passado habitual.', 'Elige la frase de pasado habitual.', 'Choisis la phrase au passé habituel.', 'Wähle den Satz mit der gewohnheitsmäßigen Vergangenheit.'],
  'Choose the correct tense contrast.': ['Escolha o contraste de tempos verbais correto.', 'Elige el contraste de tiempos correcto.', 'Choisis le bon contraste de temps.', 'Wähle den richtigen Zeitenkontrast.'],
  'Choose the natural description of a repeated childhood habit.': ['Escolha a descrição natural de um hábito repetido da infância.', 'Elige la descripción natural de un hábito repetido de la infancia.', 'Choisis la description naturelle d’une habitude répétée de l’enfance.', 'Wähle die natürliche Beschreibung einer wiederholten Kindheitsgewohnheit.'],
  'Choose the natural phrase.': ['Escolha a expressão natural.', 'Elige la expresión natural.', 'Choisis l’expression naturelle.', 'Wähle die natürliche Wendung.'],
  '“Un vecchio amico” usually means…': ['“Un vecchio amico” costuma significar…', '“Un vecchio amico” suele significar…', '“Un vecchio amico” signifie généralement…', '“Un vecchio amico” bedeutet gewöhnlich …'],
  'Choose the fully correct phrase.': ['Escolha a expressão totalmente correta.', 'Elige la expresión totalmente correcta.', 'Choisis l’expression entièrement correcte.', 'Wähle die völlig richtige Wendung.'],
  'Choose the correct agreement with a mixed group.': ['Escolha a concordância correta com um grupo misto.', 'Elige la concordancia correcta con un grupo mixto.', 'Choisis l’accord correct avec un groupe mixte.', 'Wähle die richtige Angleichung bei einer gemischten Gruppe.']
};

// "Instruction: Italian text" — only the instruction is translated.
const PREFIX: Record<string, Four> = {
  'Complete': ['Complete', 'Completa', 'Complète', 'Ergänze'],
  'Choose': ['Escolha', 'Elige', 'Choisis', 'Wähle'],
  'Choose the correct article': ['Escolha o artigo correto', 'Elige el artículo correcto', 'Choisis l’article correct', 'Wähle den richtigen Artikel'],
  'Choose the feminine plural article': ['Escolha o artigo feminino plural', 'Elige el artículo femenino plural', 'Choisis l’article féminin pluriel', 'Wähle den femininen Pluralartikel'],
  'Choose the correct indefinite article': ['Escolha o artigo indefinido correto', 'Elige el artículo indeterminado correcto', 'Choisis l’article indéfini correct', 'Wähle den richtigen unbestimmten Artikel'],
  'Choose the correct plural article': ['Escolha o artigo plural correto', 'Elige el artículo plural correcto', 'Choisis l’article pluriel correct', 'Wähle den richtigen Pluralartikel'],
  'Choose the plural': ['Escolha o plural', 'Elige el plural', 'Choisis le pluriel', 'Wähle den Plural'],
  'Choose the indefinite article': ['Escolha o artigo indefinido', 'Elige el artículo indeterminado', 'Choisis l’article indéfini', 'Wähle den unbestimmten Artikel'],
  'Choose the correct contraction': ['Escolha a contração correta', 'Elige la contracción correcta', 'Choisis la contraction correcte', 'Wähle die richtige Verschmelzung'],
  'Choose the contraction': ['Escolha a contração', 'Elige la contracción', 'Choisis la contraction', 'Wähle die Verschmelzung'],
  'Choose the correct form': ['Escolha a forma correta', 'Elige la forma correcta', 'Choisis la forme correcte', 'Wähle die richtige Form'],
  'Choose the correct -ire form': ['Escolha a forma correta em -ire', 'Elige la forma correcta en -ire', 'Choisis la forme correcte en -ire', 'Wähle die richtige -ire-Form'],
  'Choose the correct form of essere': ['Escolha a forma correta de essere', 'Elige la forma correcta de essere', 'Choisis la forme correcte d’essere', 'Wähle die richtige Form von essere'],
  'Choose the correct present': ['Escolha o presente correto', 'Elige el presente correcto', 'Choisis le présent correct', 'Wähle das richtige Präsens'],
  'Choose the auxiliary': ['Escolha o auxiliar', 'Elige el auxiliar', 'Choisis l’auxiliaire', 'Wähle das Hilfsverb'],
  'Choose the plural form': ['Escolha a forma do plural', 'Elige la forma del plural', 'Choisis la forme du pluriel', 'Wähle die Pluralform'],
  'Choose the -e adjective form': ['Escolha a forma do adjetivo em -e', 'Elige la forma del adjetivo en -e', 'Choisis la forme de l’adjectif en -e', 'Wähle die Form des Adjektivs auf -e'],
  'Choose the correct partitive': ['Escolha o partitivo correto', 'Elige el partitivo correcto', 'Choisis le partitif correct', 'Wähle den richtigen Teilungsartikel'],
  'Complete both forms': ['Complete as duas formas', 'Completa las dos formas', 'Complète les deux formes', 'Ergänze beide Formen'],
  'Complete naturally': ['Complete de forma natural', 'Completa de forma natural', 'Complète de façon naturelle', 'Ergänze natürlich'],
  'Complete with the correct verb': ['Complete com o verbo correto', 'Completa con el verbo correcto', 'Complète avec le verbe correct', 'Ergänze mit dem richtigen Verb'],
  'Complete the narrative': ['Complete a narrativa', 'Completa la narración', 'Complète le récit', 'Ergänze die Erzählung'],
  'Complete the -e plural': ['Complete o plural em -e', 'Completa el plural en -e', 'Complète le pluriel en -e', 'Ergänze den Plural auf -e'],
  'Complete with “ne”': ['Complete com “ne”', 'Completa con “ne”', 'Complète avec “ne”', 'Ergänze mit “ne”'],
  'Rewrite with “ne”': ['Reescreva com “ne”', 'Reescribe con “ne”', 'Réécris avec “ne”', 'Schreibe mit “ne” um'],
  'Choose the indirect pronoun': ['Escolha o pronome indireto', 'Elige el pronombre indirecto', 'Choisis le pronom indirect', 'Wähle das indirekte Pronomen'],
  'Combine the pronouns': ['Combine os pronomes', 'Combina los pronombres', 'Combine les pronoms', 'Kombiniere die Pronomen'],
  'Choose the natural replacement': ['Escolha a substituição natural', 'Elige la sustitución natural', 'Choisis le remplacement naturel', 'Wähle den natürlichen Ersatz'],
  'Choose the irregular past participle': ['Escolha o particípio irregular', 'Elige el participio irregular', 'Choisis le participe passé irrégulier', 'Wähle das unregelmäßige Partizip']
};

const REPLACE: Four = ['Substitua', 'Sustituye', 'Remplace', 'Ersetze'];
const PRONOUN_KIND: Record<string, Four> = {
  'subject': [' por um pronome sujeito.', ' por un pronombre sujeto.', ' par un pronom sujet.', ' durch ein Subjektpronomen.'],
  'direct object': [' por um pronome objeto direto.', ' por un pronombre de objeto directo.', ' par un pronom complément d’objet direct.', ' durch ein direktes Objektpronomen.']
};
const PARTICIPLE: Array<[RegExp, Four]> = [
  [/^What is the past participle of (\S+?)\?$/, ['Qual é o particípio passado de $1?', '¿Cuál es el participio de $1?', 'Quel est le participe passé de $1 ?', 'Was ist das Partizip Perfekt von $1?']],
  [/^Past participle of (\S+?)\?$/, ['Particípio passado de $1?', '¿Participio de $1?', 'Participe passé de $1 ?', 'Partizip Perfekt von $1?']],
  [/^Choose the irregular (?:past )?participle of (\S+?)\.$/, ['Escolha o particípio irregular de $1.', 'Elige el participio irregular de $1.', 'Choisis le participe passé irrégulier de $1.', 'Wähle das unregelmäßige Partizip von $1.']],
  [/^Choose the meaning of (\S+?)\.$/, ['Escolha o significado de $1.', 'Elige el significado de $1.', 'Choisis le sens de $1.', 'Wähle die Bedeutung von $1.']],
  [/^Which ending completes (“[^”]+”) for (voi|noi)\?$/, ['Qual terminação completa $1 para $2?', '¿Qué terminación completa $1 para $2?', 'Quelle terminaison complète $1 pour $2 ?', 'Welche Endung ergänzt $1 für $2?']]
];
// The English side of these prompts is already the Italian sentence, so the support text is the same.
const ITALIAN_ONLY = /^[^A-Z]*$|^(Luca e Marco|Marco e Luca|Paolo e Anna|Paolo e Marco|Le ragazze|Ieri|Maria|Anna) /;

const colon = (lang: Lang, head: string, rest: string): string => rest ? `${head}${lang === 'fr' ? ' :' : ':'} ${rest}` : head;

export function translateLegacyPrompt(en: string): Record<Lang, string> | null {
  const out: Partial<Record<Lang, string>> = {};
  const set = (fn: (i: number, lang: Lang) => string) => { LANGS.forEach((lang, i) => { out[lang] = quotes(lang, fn(i, lang)); }); return out as Record<Lang, string>; };
  const whole = WHOLE[en];
  if (whole) return set(i => whole[i]);
  let m = en.match(/^Replace (“[^”]+”) with an? (subject|direct object) pronoun\.$/);
  if (m) { const kind = PRONOUN_KIND[m[2]]; return set(i => `${REPLACE[i]} ${m![1]}${kind[i]}`); }
  m = en.match(/^Replace (“[^”]+”)(:.*)$/);
  if (m) return set((i, lang) => `${REPLACE[i]} ${m![1]}${lang === 'fr' ? ' ' : ''}${m![2]}`);
  for (const [re, tpl] of PARTICIPLE) { m = en.match(re); if (m) return set(i => tpl[i].replace(/\$(\d)/g, (_, n) => m![Number(n)])); }
  m = en.match(/^([^:]+): ?(.*)$/);
  if (m && PREFIX[m[1]]) { const t = PREFIX[m[1]]; return set((i, lang) => colon(lang, t[i], m![2])); }
  if (ITALIAN_ONLY.test(en) || /^[A-ZÀ-Ù][^.?!]* ___/.test(en)) return set((i, lang) => colon(lang, PREFIX['Complete'][i], en));
  return null;
}

/** Give a prompt that only has English and Italian the four other support languages. */
export function localizeLegacyPrompt(prompt: BilingualText): BilingualText {
  if (typeof prompt === 'object' && !Array.isArray(prompt) && (prompt as LocalizedText).pt) return prompt;
  const en = Array.isArray(prompt) ? prompt[0] : typeof prompt === 'string' ? prompt : (prompt as LocalizedText).en;
  const it = Array.isArray(prompt) ? prompt[1] : typeof prompt === 'string' ? prompt : (prompt as LocalizedText).it;
  const translated = translateLegacyPrompt(en);
  return translated ? { en, it, ...translated } : prompt;
}
