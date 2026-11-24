import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { BilingualText, Language, SupportLanguage } from '../types';
import { ITALIAN_GRAMMAR_TOPICS } from '../data/italianGrammar';
import {
  speakItalian,
  stopSpeaking,
  pauseSpeaking,
  resumeSpeaking,
  isCurrentlySpeaking,
  isSpeakingPaused,
  listenItalian,
  scorePronunciation,
  isSpeechRecognitionSupported,
  isSpeechSynthesisSupported,
  PronunciationScoreResult,
  SpeechRecognitionController
} from '../speech/speechEngine';

type ItalianLabAudioError =
  | 'speech-recognition-unsupported'
  | 'speech-recognition-timeout'
  | 'speech-recognition-permission'
  | 'speech-recognition-network'
  | 'speech-recognition-failed'
  | 'speech-playback-unsupported'
  | 'speech-playback-failed';

const recognitionErrorKey = (error: string): ItalianLabAudioError => {
  if (error.includes('timed out')) return 'speech-recognition-timeout';
  if (error === 'not-allowed' || error === 'service-not-allowed') return 'speech-recognition-permission';
  if (error === 'network') return 'speech-recognition-network';
  return 'speech-recognition-failed';
};

export interface PracticePhrase {
  id: string;
  level: 'A1' | 'A2' | 'B1';
  targetIt: string;
  // The Italian phrase's meaning, shown as support in the learner's language.
  translation: BilingualText;
  phoneticHint?: string;
  notes?: BilingualText;
  grammarTopicId?: string;
}

export const ITALIAN_PRACTICE_PHRASES: PracticePhrase[] = [
  // A1 Level
  {
    id: 'a1-1',
    level: 'A1',
    targetIt: 'Buongiorno, come si chiama?',
    translation: {en: 'Good morning, what is your name? (formal)', it: 'Good morning, what is your name? (formal)', pt: 'Bom dia, como o senhor se chama? (formal)', es: 'Buenos días, ¿cómo se llama usted? (formal)', fr: 'Bonjour, comment vous appelez-vous ? (formel)', de: 'Guten Morgen, wie heißen Sie? (formell)'},
    phoneticHint: 'bwon-DJOR-no, KO-me see KYA-ma?',
    notes: {en: 'Formal greeting with "si chiama" (Lei)', it: 'Saluto formale con forma di cortesia (Lei)', pt: 'Cumprimento formal com "si chiama" (Lei)', es: 'Saludo formal con "si chiama" (Lei)', fr: 'Salutation formelle avec "si chiama" (Lei)', de: 'Förmliche Begrüßung mit "si chiama" (Lei)'}
  },
  {
    id: 'a1-2',
    level: 'A1',
    targetIt: 'Piacere, mi chiamo Alessandro.',
    translation: {en: 'Nice to meet you, my name is Alessandro.', it: 'Nice to meet you, my name is Alessandro.', pt: 'Prazer, meu nome é Alessandro.', es: 'Encantado, me llamo Alessandro.', fr: 'Enchanté, je m’appelle Alessandro.', de: 'Freut mich, ich heiße Alessandro.'},
    phoneticHint: 'pya-CHE-reh, mee KYA-mo a-les-SAN-dro',
    notes: {en: 'The reflexive verb chiamarsi uses mi with io: mi chiamo.', it: 'Il verbo riflessivo chiamarsi usa mi con io: mi chiamo.', pt: 'O verbo reflexivo chiamarsi usa mi com io: mi chiamo.', es: 'El verbo reflexivo chiamarsi usa mi con io: mi chiamo.', fr: 'Le verbe pronominal chiamarsi utilise mi avec io : mi chiamo.', de: 'Das reflexive Verb chiamarsi verwendet mi mit io: mi chiamo.'},
    grammarTopicId: 'reflexive'
  },
  {
    id: 'a1-3',
    level: 'A1',
    targetIt: 'Vorrei un caffè macchiato e un cornetto alla crema, per favore.',
    translation: {en: 'I would like a macchiato coffee and a cream croissant, please.', it: 'I would like a macchiato coffee and a cream croissant, please.', pt: 'Eu gostaria de um café macchiato e um croissant de creme, por favor.', es: 'Querría un café cortado y un cruasán de crema, por favor.', fr: 'Je voudrais un café noisette et un croissant à la crème, s’il vous plaît.', de: 'Ich hätte gerne einen Macchiato und ein Croissant mit Creme, bitte.'},
    phoneticHint: 'vor-RAY oon kaf-FEH mak-KYA-to eh oon kor-NET-to AL-la KRE-ma',
    notes: {en: 'Essential Italian cafe order; notice the articles un and un', it: 'Ordinazione classica al bar; osserva gli articoli un e un', pt: 'Pedido essencial no café italiano; repare nos artigos un e un', es: 'Pedido esencial en un café italiano; fíjate en los artículos un y un', fr: 'Commande type au café italien ; remarque les articles un et un', de: 'Typische Bestellung im italienischen Café; achte auf die Artikel un und un'},
    grammarTopicId: 'articles'
  },
  {
    id: 'a1-4',
    level: 'A1',
    targetIt: 'Quanto costa questo panino?',
    translation: {en: 'How much does this sandwich cost?', it: 'How much does this sandwich cost?', pt: 'Quanto custa este sanduíche?', es: '¿Cuánto cuesta este bocadillo?', fr: 'Combien coûte ce sandwich ?', de: 'Wie viel kostet dieses Brötchen?'},
    phoneticHint: 'KWAN-to KOS-ta KWES-to pa-NEE-no?',
    notes: {en: 'Asking prices', it: 'Chiedere il prezzo', pt: 'Perguntar preços', es: 'Preguntar precios', fr: 'Demander les prix', de: 'Nach Preisen fragen'}
  },
  {
    id: 'a1-5',
    level: 'A1',
    targetIt: 'Abito a Roma ma sono di Napoli.',
    translation: {en: 'I live in Rome but I am from Naples.', it: 'I live in Rome but I am from Naples.', pt: 'Moro em Roma, mas sou de Nápoles.', es: 'Vivo en Roma pero soy de Nápoles.', fr: 'J’habite à Rome mais je suis de Naples.', de: 'Ich wohne in Rom, aber ich komme aus Neapel.'},
    phoneticHint: 'A-bee-to ah RO-ma mah SO-no dee NA-po-lee',
    notes: {en: '"A" for cities, "di" for origin', it: '"A" per le città, "di" per la provenienza', pt: '"A" para cidades, "di" para origem', es: '"A" para ciudades, "di" para el origen', fr: '"A" pour les villes, "di" pour l’origine', de: '"A" bei Städten, "di" für die Herkunft'}
  },

  // A2 Level
  {
    id: 'a2-1',
    level: 'A2',
    targetIt: 'Ieri sera sono andato al cinema con i miei amici.',
    translation: {en: 'Yesterday evening I went to the cinema with my friends.', it: 'Yesterday evening I went to the cinema with my friends.', pt: 'Ontem à noite fui ao cinema com os meus amigos.', es: 'Ayer por la noche fui al cine con mis amigos.', fr: 'Hier soir je suis allé au cinéma avec mes amis.', de: 'Gestern Abend bin ich mit meinen Freunden ins Kino gegangen.'},
    phoneticHint: 'YE-ree SE-ra SO-no an-DA-to al CHEE-ne-ma...',
    notes: {en: 'Passato prossimo with essere (movement verb: andare)', it: 'Passato prossimo con ausiliare essere per verbo di movimento', pt: 'Passato prossimo com essere (verbo de movimento: andare)', es: 'Passato prossimo con essere (verbo de movimiento: andare)', fr: 'Passato prossimo avec essere (verbe de mouvement : andare)', de: 'Passato prossimo mit essere (Bewegungsverb: andare)'},
    grammarTopicId: 'passato-prossimo'
  },
  {
    id: 'a2-2',
    level: 'A2',
    targetIt: 'Scusi, per andare alla stazione centrale devo girare a destra?',
    translation: {en: 'Excuse me, to go to the central station should I turn right?', it: 'Excuse me, to go to the central station should I turn right?', pt: 'Com licença, para ir à estação central devo virar à direita?', es: 'Perdone, para ir a la estación central ¿debo girar a la derecha?', fr: 'Excusez-moi, pour aller à la gare centrale, dois-je tourner à droite ?', de: 'Entschuldigung, muss ich zum Hauptbahnhof rechts abbiegen?'},
    phoneticHint: 'SKOO-zee, per an-DA-re al-la sta-tzyo-ne chen-TRA-le...',
    notes: {en: 'Asking for street directions', it: 'Chiedere indicazioni stradali', pt: 'Pedir indicações na rua', es: 'Pedir indicaciones por la calle', fr: 'Demander son chemin', de: 'Nach dem Weg fragen'}
  },
  {
    id: 'a2-3',
    level: 'A2',
    targetIt: 'Queste mele sono deliziose, ne prendo due chili.',
    translation: {en: 'These apples are delicious, I will take two kilos of them.', it: 'These apples are delicious, I will take two kilos of them.', pt: 'Estas maçãs estão deliciosas, vou levar dois quilos.', es: 'Estas manzanas están deliciosas, me llevo dos kilos.', fr: 'Ces pommes sont délicieuses, j’en prends deux kilos.', de: 'Diese Äpfel sind köstlich, ich nehme zwei Kilo davon.'},
    phoneticHint: 'KWES-te ME-le SO-no de-lee-TSYO-ze, neh PREN-do...',
    notes: {en: 'Partitive pronoun "ne" for specified quantity', it: 'Partitivo "ne" per esprimere una quantità definita', pt: 'Pronome partitivo "ne" para uma quantidade definida', es: 'Pronombre partitivo "ne" para una cantidad concreta', fr: 'Pronom partitif "ne" pour une quantité précise', de: 'Partitives Pronomen "ne" für eine bestimmte Menge'},
    grammarTopicId: 'partitive'
  },
  {
    id: 'a2-4',
    level: 'A2',
    targetIt: 'Da bambino andavo sempre in vacanza in Sardegna.',
    translation: {en: 'As a child I always used to go on holiday in Sardinia.', it: 'As a child I always used to go on holiday in Sardinia.', pt: 'Quando criança, eu sempre passava as férias na Sardenha.', es: 'De niño siempre iba de vacaciones a Cerdeña.', fr: 'Enfant, j’allais toujours en vacances en Sardaigne.', de: 'Als Kind habe ich immer in Sardinien Urlaub gemacht.'},
    phoneticHint: 'dah bam-BEE-no an-DA-vo SEM-pre een va-KAN-tsa...',
    notes: {en: 'Imperfect for habitual past actions', it: 'Imperfetto per abitudini del passato', pt: 'Imperfetto para ações habituais no passado', es: 'Imperfetto para acciones habituales en el pasado', fr: 'Imperfetto pour les habitudes passées', de: 'Imperfetto für gewohnheitsmäßige Handlungen in der Vergangenheit'}
  },

  // B1 Level
  {
    id: 'b1-1',
    level: 'B1',
    targetIt: 'Penso che questo museo sia davvero straordinario.',
    translation: {en: 'I think that this museum is truly extraordinary.', it: 'I think that this museum is truly extraordinary.', pt: 'Acho que este museu é realmente extraordinário.', es: 'Creo que este museo es verdaderamente extraordinario.', fr: 'Je pense que ce musée est vraiment extraordinaire.', de: 'Ich finde, dieses Museum ist wirklich außergewöhnlich.'},
    phoneticHint: 'PEN-so keh KWES-to moo-ZE-o SEE-a dahv-VE-ro...',
    notes: {en: 'Present subjunctive after opinion verb "penso che"', it: 'Congiuntivo presente retto dal verbo di opinione "penso che"', pt: 'Subjuntivo presente depois do verbo de opinião "penso che"', es: 'Subjuntivo presente tras el verbo de opinión "penso che"', fr: 'Subjonctif présent après le verbe d’opinion "penso che"', de: 'Konjunktiv Präsens nach dem Meinungsverb "penso che"'}
  },
  {
    id: 'b1-2',
    level: 'B1',
    targetIt: 'Se avessi più tempo libero, viaggerei in tutta Italia.',
    translation: {en: 'If I had more free time, I would travel all over Italy.', it: 'If I had more free time, I would travel all over Italy.', pt: 'Se eu tivesse mais tempo livre, viajaria por toda a Itália.', es: 'Si tuviera más tiempo libre, viajaría por toda Italia.', fr: 'Si j’avais plus de temps libre, je voyagerais dans toute l’Italie.', de: 'Wenn ich mehr Freizeit hätte, würde ich durch ganz Italien reisen.'},
    phoneticHint: 'seh a-VES-see pyoo TEM-po LEE-be-ro, vyad-je-RAY...',
    notes: {en: 'Hypothetical period: congiuntivo imperfetto + condizionale', it: 'Periodo ipotetico della possibilità', pt: 'Período hipotético: congiuntivo imperfetto + condizionale', es: 'Periodo hipotético: congiuntivo imperfetto + condizionale', fr: 'Phrase hypothétique : congiuntivo imperfetto + condizionale', de: 'Bedingungssatz: congiuntivo imperfetto + condizionale'}
  },
  {
    id: 'b1-3',
    level: 'B1',
    targetIt: 'Quel libro me l’ha consigliato il professore la settimana scorsa.',
    translation: {en: 'The professor recommended that book to me last week.', it: 'The professor recommended that book to me last week.', pt: 'O professor me recomendou aquele livro na semana passada.', es: 'El profesor me recomendó ese libro la semana pasada.', fr: 'Le professeur m’a recommandé ce livre la semaine dernière.', de: 'Der Professor hat mir letzte Woche dieses Buch empfohlen.'},
    phoneticHint: 'kwel LEE-bro meh l-ah kon-seel-YA-to...',
    notes: {en: 'Combined pronoun "me lo" -> me l\'ha consigliato', it: 'Pronome combinato mi + lo = me lo', pt: 'Pronome combinado "me lo" -> me l’ha consigliato', es: 'Pronombre combinado "me lo" -> me l’ha consigliato', fr: 'Pronom combiné "me lo" -> me l’ha consigliato', de: 'Kombiniertes Pronomen "me lo" -> me l’ha consigliato'},
    grammarTopicId: 'pronouns'
  },
  {
    id: 'b1-4',
    level: 'B1',
    targetIt: 'Potrebbe ripetere più lentamente, per cortesia?',
    translation: {en: 'Could you please repeat more slowly, as a courtesy?', it: 'Could you please repeat more slowly, as a courtesy?', pt: 'Você poderia repetir mais devagar, por gentileza?', es: '¿Podría repetir más despacio, por favor?', fr: 'Pourriez-vous répéter plus lentement, s’il vous plaît ?', de: 'Könnten Sie das bitte langsamer wiederholen?'},
    phoneticHint: 'po-TREB-be ree-PE-te-re pyoo len-ta-MEN-te...',
    notes: {en: 'Polite conditional of "potere"', it: 'Condizionale di cortesia', pt: 'Condicional de cortesia de "potere"', es: 'Condicional de cortesía de "potere"', fr: 'Conditionnel de politesse de "potere"', de: 'Höflicher Konditional von "potere"'}
  },

  // Grammar-aligned practice phrases: one phrase per topic and CEFR level.
  {
    id: 'grammar-a1-pronouns',
    level: 'A1',
    targetIt: 'Maria? La vedo ogni giorno.',
    translation: {en: 'Maria? I see her every day.', it: 'Maria? I see her every day.', pt: 'A Maria? Eu a vejo todos os dias.', es: '¿María? La veo todos los días.', fr: 'Maria ? Je la vois tous les jours.', de: 'Maria? Ich sehe sie jeden Tag.'},
    phoneticHint: 'ma-REE-a, la VE-do ON-yee JOR-no',
    notes: {en: 'La replaces a feminine singular direct object: Maria → la.', it: 'La sostituisce un complemento oggetto femminile singolare: Maria → la.', pt: 'La substitui um objeto direto feminino singular: Maria → la.', es: 'La sustituye a un objeto directo femenino singular: Maria → la.', fr: 'La remplace un COD féminin singulier : Maria → la.', de: 'La ersetzt ein weibliches direktes Objekt im Singular: Maria → la.'},
    grammarTopicId: 'pronouns'
  },
  {
    id: 'grammar-a1-passato',
    level: 'A1',
    targetIt: 'Ieri ho studiato italiano.',
    translation: {en: 'Yesterday I studied Italian.', it: 'Yesterday I studied Italian.', pt: 'Ontem estudei italiano.', es: 'Ayer estudié italiano.', fr: 'Hier j’ai étudié l’italien.', de: 'Gestern habe ich Italienisch gelernt.'},
    phoneticHint: 'YE-ree oh stoo-DYA-to ee-ta-LYA-no',
    notes: {en: 'Studiare uses avere + the past participle: ho studiato.', it: 'Studiare usa avere + il participio passato: ho studiato.', pt: 'Studiare usa avere + o particípio passado: ho studiato.', es: 'Studiare usa avere + el participio pasado: ho studiato.', fr: 'Studiare se construit avec avere + le participe passé : ho studiato.', de: 'Studiare bildet das Perfekt mit avere + Partizip: ho studiato.'},
    grammarTopicId: 'passato-prossimo'
  },
  {
    id: 'grammar-a1-partitive',
    level: 'A1',
    targetIt: 'Vorrei del pane e dell’acqua.',
    translation: {en: 'I would like some bread and water.', it: 'I would like some bread and water.', pt: 'Eu gostaria de um pouco de pão e água.', es: 'Querría un poco de pan y agua.', fr: 'Je voudrais du pain et de l’eau.', de: 'Ich hätte gerne etwas Brot und Wasser.'},
    phoneticHint: 'vor-RAY del PA-ne eh del-LAK-kwa',
    notes: {en: 'Del and dell’ express an unspecified quantity: del pane, dell’acqua.', it: 'Del e dell’ esprimono una quantità non specificata: del pane, dell’acqua.', pt: 'Del e dell’ expressam uma quantidade não especificada: del pane, dell’acqua.', es: 'Del y dell’ expresan una cantidad indeterminada: del pane, dell’acqua.', fr: 'Del et dell’ expriment une quantité indéterminée : del pane, dell’acqua.', de: 'Del und dell’ drücken eine unbestimmte Menge aus: del pane, dell’acqua.'},
    grammarTopicId: 'partitive'
  },
  {
    id: 'grammar-a1-sentence',
    level: 'A1',
    targetIt: 'Ogni mattina studio italiano prima di colazione.',
    translation: {en: 'Every morning I study Italian before breakfast.', it: 'Every morning I study Italian before breakfast.', pt: 'Todas as manhãs estudo italiano antes do café da manhã.', es: 'Cada mañana estudio italiano antes de desayunar.', fr: 'Chaque matin j’étudie l’italien avant le petit-déjeuner.', de: 'Jeden Morgen lerne ich vor dem Frühstück Italienisch.'},
    phoneticHint: 'ON-yee mat-TEE-na STOO-dyo ee-ta-LYA-no PREE-ma dee ko-la-TSYO-ne',
    notes: {en: 'A time expression can begin the sentence, followed by the verb and its complement.', it: 'Un’espressione di tempo può aprire la frase, seguita dal verbo e dal complemento.', pt: 'Uma expressão de tempo pode iniciar a frase, seguida do verbo e do seu complemento.', es: 'Una expresión de tiempo puede abrir la frase, seguida del verbo y su complemento.', fr: 'Une expression de temps peut ouvrir la phrase, suivie du verbe et de son complément.', de: 'Eine Zeitangabe kann den Satz eröffnen, gefolgt vom Verb und seiner Ergänzung.'},
    grammarTopicId: 'sentence-building'
  },
  {
    id: 'grammar-a2-articles',
    level: 'A2',
    targetIt: 'Ho incontrato un’amica e gli amici di Marco.',
    translation: {en: 'I met a female friend and Marco’s friends.', it: 'I met a female friend and Marco’s friends.', pt: 'Encontrei uma amiga e os amigos do Marco.', es: 'Conocí a una amiga y a los amigos de Marco.', fr: 'J’ai rencontré une amie et les amis de Marco.', de: 'Ich habe eine Freundin und Marcos Freunde getroffen.'},
    phoneticHint: 'oh een-kon-TRA-to oon-A-mee-ka eh lyee a-MEE-chee dee MAR-ko',
    notes: {en: 'Un’amica is feminine singular; gli amici is masculine plural before a vowel.', it: 'Un’amica è femminile singolare; gli amici è maschile plurale davanti a vocale.', pt: 'Un’amica é feminino singular; gli amici é masculino plural antes de vogal.', es: 'Un’amica es femenino singular; gli amici es masculino plural delante de vocal.', fr: 'Un’amica est féminin singulier ; gli amici est masculin pluriel devant une voyelle.', de: 'Un’amica ist feminin Singular; gli amici ist maskulin Plural vor Vokal.'},
    grammarTopicId: 'articles'
  },
  {
    id: 'grammar-a2-pronouns',
    level: 'A2',
    targetIt: 'Ho chiamato Giulia e le ho parlato.',
    translation: {en: 'I called Giulia and spoke to her.', it: 'I called Giulia and spoke to her.', pt: 'Liguei para a Giulia e falei com ela.', es: 'Llamé a Giulia y hablé con ella.', fr: 'J’ai appelé Giulia et je lui ai parlé.', de: 'Ich habe Giulia angerufen und mit ihr gesprochen.'},
    phoneticHint: 'oh kya-MA-to JOO-lya eh leh oh par-LA-to',
    notes: {en: 'Giulia is the direct object of chiamare; le means “to her” with parlare a.', it: 'Giulia è complemento diretto di chiamare; le significa “a lei” con parlare a.', pt: 'Giulia é o objeto direto de chiamare; le significa “a ela” com parlare a.', es: 'Giulia es el objeto directo de chiamare; le significa «a ella» con parlare a.', fr: 'Giulia est le COD de chiamare ; le signifie « à elle » avec parlare a.', de: 'Giulia ist das direkte Objekt von chiamare; le bedeutet „ihr“ bei parlare a.'},
    grammarTopicId: 'pronouns'
  },
  {
    id: 'grammar-a2-reflexive',
    level: 'A2',
    targetIt: 'Ieri Giulia si è svegliata presto e si è preparata.',
    translation: {en: 'Yesterday Giulia woke up early and got ready.', it: 'Yesterday Giulia woke up early and got ready.', pt: 'Ontem a Giulia acordou cedo e se arrumou.', es: 'Ayer Giulia se despertó temprano y se preparó.', fr: 'Hier Giulia s’est réveillée tôt et s’est préparée.', de: 'Gestern ist Giulia früh aufgewacht und hat sich fertig gemacht.'},
    phoneticHint: 'YE-ree JOO-lya see eh sve-LYA-ta PRES-to eh see eh pre-pa-RA-ta',
    notes: {en: 'Reflexive verbs use essere in the passato prossimo; the participle agrees with Giulia.', it: 'I verbi riflessivi usano essere nel passato prossimo; il participio concorda con Giulia.', pt: 'Os verbos reflexivos usam essere no passato prossimo; o particípio concorda com Giulia.', es: 'Los verbos reflexivos usan essere en el passato prossimo; el participio concuerda con Giulia.', fr: 'Les verbes pronominaux prennent essere au passato prossimo ; le participe s’accorde avec Giulia.', de: 'Reflexive Verben bilden das Passato prossimo mit essere; das Partizip richtet sich nach Giulia.'},
    grammarTopicId: 'reflexive'
  },
  {
    id: 'grammar-a2-sentence',
    level: 'A2',
    targetIt: 'Ieri ho comprato un libro e l’ho letto in treno.',
    translation: {en: 'Yesterday I bought a book and read it on the train.', it: 'Yesterday I bought a book and read it on the train.', pt: 'Ontem comprei um livro e o li no trem.', es: 'Ayer compré un libro y lo leí en el tren.', fr: 'Hier j’ai acheté un livre et je l’ai lu dans le train.', de: 'Gestern habe ich ein Buch gekauft und es im Zug gelesen.'},
    phoneticHint: 'YE-ree oh kom-PRA-to oon LEE-bro eh loh LET-to een TRE-no',
    notes: {en: 'L’ replaces il libro and comes before ho; letto agrees with the preceding masculine singular pronoun.', it: 'L’ sostituisce il libro e precede ho; letto concorda con il pronome maschile singolare.', pt: 'L’ substitui il libro e vem antes de ho; letto concorda com o pronome masculino singular que o precede.', es: 'L’ sustituye a il libro y va delante de ho; letto concuerda con el pronombre masculino singular que lo precede.', fr: 'L’ remplace il libro et se place avant ho ; letto s’accorde avec le pronom masculin singulier qui précède.', de: 'L’ ersetzt il libro und steht vor ho; letto richtet sich nach dem vorangehenden maskulinen Pronomen im Singular.'},
    grammarTopicId: 'sentence-building'
  },
  {
    id: 'grammar-b1-articles',
    level: 'B1',
    targetIt: 'Nel centro storico ci sono degli edifici antichi e delle piazze luminose.',
    translation: {en: 'In the historic centre there are some old buildings and bright squares.', it: 'In the historic centre there are some old buildings and bright squares.', pt: 'No centro histórico há alguns edifícios antigos e praças iluminadas.', es: 'En el centro histórico hay algunos edificios antiguos y plazas luminosas.', fr: 'Dans le centre historique il y a de vieux bâtiments et des places lumineuses.', de: 'In der Altstadt gibt es alte Gebäude und helle Plätze.'},
    phoneticHint: 'nel CHEN-tro STO-ree-ko chee SO-no DEL-yee eh-DEE-fee-chi an-TEE-kee eh DEL-le PYAT-tse loo-mee-NO-ze',
    notes: {en: 'Notice the articulated preposition nel and the plural forms degli and delle.', it: 'Osserva la preposizione articolata nel e le forme plurali degli e delle.', pt: 'Repare na preposição articulada nel e nas formas plurais degli e delle.', es: 'Fíjate en la preposición articulada nel y en las formas plurales degli y delle.', fr: 'Remarque la préposition contractée nel et les formes plurielles degli et delle.', de: 'Achte auf die Präposition mit Artikel nel und die Pluralformen degli und delle.'},
    grammarTopicId: 'articles'
  },
  {
    id: 'grammar-b1-passato',
    level: 'B1',
    targetIt: 'Le ho viste quando sono arrivate.',
    translation: {en: 'I saw them when they arrived.', it: 'I saw them when they arrived.', pt: 'Eu os vi quando chegaram.', es: 'Los vi cuando llegaron.', fr: 'Je les ai vus quand ils sont arrivés.', de: 'Ich habe sie gesehen, als sie ankamen.'},
    phoneticHint: 'leh oh VEES-te KWAN-do SO-no ar-ree-VA-te',
    notes: {en: 'Le ho viste uses agreement with a preceding feminine plural pronoun; arrivare takes essere.', it: 'Le ho viste richiede l’accordo con il pronome femminile plurale; arrivare usa essere.', pt: 'Le ho viste faz a concordância com o pronome feminino plural que vem antes; arrivare usa essere.', es: 'Le ho viste concuerda con el pronombre femenino plural que lo precede; arrivare lleva essere.', fr: 'Le ho viste s’accorde avec le pronom féminin pluriel placé avant ; arrivare prend essere.', de: 'Le ho viste richtet sich nach dem vorangehenden weiblichen Pluralpronomen; arrivare steht mit essere.'},
    grammarTopicId: 'passato-prossimo'
  },
  {
    id: 'grammar-b1-partitive',
    level: 'B1',
    targetIt: 'Per la zuppa uso delle carote, del sedano e un po’ d’olio.',
    translation: {en: 'For the soup I use some carrots, celery and a little oil.', it: 'For the soup I use some carrots, celery and a little oil.', pt: 'Para a sopa uso umas cenouras, aipo e um pouco de azeite.', es: 'Para la sopa uso unas zanahorias, apio y un poco de aceite.', fr: 'Pour la soupe j’utilise des carottes, du céleri et un peu d’huile.', de: 'Für die Suppe nehme ich Karotten, Sellerie und etwas Öl.'},
    phoneticHint: 'per la TSOOP-pa OO-zo DEL-le ka-RO-te del SE-da-no eh oon poh DO-lyo',
    notes: {en: 'Combine partitive articles with un po’ di to express different quantities.', it: 'Combina gli articoli partitivi con un po’ di per esprimere quantità diverse.', pt: 'Combine os artigos partitivos com un po’ di para expressar quantidades diferentes.', es: 'Combina los artículos partitivos con un po’ di para expresar distintas cantidades.', fr: 'Combine les articles partitifs avec un po’ di pour exprimer différentes quantités.', de: 'Kombiniere Teilungsartikel mit un po’ di, um verschiedene Mengen auszudrücken.'},
    grammarTopicId: 'partitive'
  },
  {
    id: 'grammar-b1-reflexive',
    level: 'B1',
    targetIt: 'Dopo essersi svegliata, Giulia si è preparata ed è uscita.',
    translation: {en: 'After waking up, Giulia got ready and went out.', it: 'After waking up, Giulia got ready and went out.', pt: 'Depois de acordar, a Giulia se arrumou e saiu.', es: 'Después de despertarse, Giulia se preparó y salió.', fr: 'Après s’être réveillée, Giulia s’est préparée et est sortie.', de: 'Nach dem Aufwachen hat sich Giulia fertig gemacht und ist ausgegangen.'},
    phoneticHint: 'DO-po ES-ser-see sve-LYA-ta JOO-lya see eh pre-pa-RA-ta ed eh oo-SHEE-ta',
    notes: {en: 'Essersi is the reflexive infinitive after dopo; the following past participles agree with Giulia.', it: 'Essersi è l’infinito riflessivo dopo dopo; i participi seguenti concordano con Giulia.', pt: 'Essersi é o infinitivo reflexivo depois de dopo; os particípios seguintes concordam com Giulia.', es: 'Essersi es el infinitivo reflexivo tras dopo; los participios siguientes concuerdan con Giulia.', fr: 'Essersi est l’infinitif pronominal après dopo ; les participes qui suivent s’accordent avec Giulia.', de: 'Essersi ist der reflexive Infinitiv nach dopo; die folgenden Partizipien richten sich nach Giulia.'},
    grammarTopicId: 'reflexive'
  },
  {
    id: 'grammar-b1-sentence',
    level: 'B1',
    targetIt: 'Quando Giulia è arrivata a casa, si è fatta una doccia e poi ha cenato.',
    translation: {en: 'When Giulia got home, she took a shower and then had dinner.', it: 'When Giulia got home, she took a shower and then had dinner.', pt: 'Quando a Giulia chegou em casa, tomou banho e depois jantou.', es: 'Cuando Giulia llegó a casa, se duchó y luego cenó.', fr: 'Quand Giulia est rentrée, elle a pris une douche puis a dîné.', de: 'Als Giulia nach Hause kam, duschte sie und aß dann zu Abend.'},
    phoneticHint: 'KWAN-do JOO-lya eh ar-ree-VA-ta a KA-za see eh FAT-ta OO-na DOT-cha eh poy ah che-NA-to',
    notes: {en: 'Connect clauses with quando and poi; keep auxiliary and participle agreement consistent.', it: 'Collega le proposizioni con quando e poi; mantieni coerenti ausiliare e accordo del participio.', pt: 'Ligue as orações com quando e poi; mantenha coerentes o auxiliar e a concordância do particípio.', es: 'Une las oraciones con quando y poi; mantén coherentes el auxiliar y la concordancia del participio.', fr: 'Relie les propositions avec quando et poi ; garde l’auxiliaire et l’accord du participe cohérents.', de: 'Verbinde Sätze mit quando und poi; halte Hilfsverb und Partizipangleichung einheitlich.'},
    grammarTopicId: 'sentence-building'
  },
  {
    id: 'grammar-a1-present-tense',
    level: 'A1',
    targetIt: 'Ogni mattina preparo la colazione e poi vado a scuola.',
    translation: {en: 'Every morning I make breakfast and then go to school.', it: 'Every morning I make breakfast and then go to school.', pt: 'Todas as manhãs preparo o café da manhã e depois vou à escola.', es: 'Cada mañana preparo el desayuno y luego voy a la escuela.', fr: 'Chaque matin je prépare le petit-déjeuner puis je vais à l’école.', de: 'Jeden Morgen mache ich Frühstück und gehe dann zur Schule.'},
    phoneticHint: 'ON-yee mat-TEE-na pre-PA-ro la ko-la-TSYO-ne eh poy VA-do a SKWO-la',
    notes: {en: 'Preparo is the io form of preparare; vado is the irregular io form of andare.', it: 'Preparo è la forma di preparare con io; vado è la forma irregolare di andare con io.', pt: 'Preparo é a forma de io de preparare; vado é a forma irregular de io de andare.', es: 'Preparo es la forma de io de preparare; vado es la forma irregular de io de andare.', fr: 'Preparo est la forme de io de preparare ; vado est la forme irrégulière de io de andare.', de: 'Preparo ist die io-Form von preparare; vado ist die unregelmäßige io-Form von andare.'},
    grammarTopicId: 'present-tense'
  },
  {
    id: 'grammar-a2-present-tense',
    level: 'A2',
    targetIt: 'Oggi non posso uscire, ma domani vengo volentieri.',
    translation: {en: 'Today I cannot go out, but tomorrow I will gladly come.', it: 'Today I cannot go out, but tomorrow I will gladly come.', pt: 'Hoje não posso sair, mas amanhã venho com prazer.', es: 'Hoy no puedo salir, pero mañana vendré con gusto.', fr: 'Aujourd’hui je ne peux pas sortir, mais demain je viendrai volontiers.', de: 'Heute kann ich nicht ausgehen, aber morgen komme ich gerne.'},
    phoneticHint: 'OD-jee non POS-so oo-SHEE-reh, mah do-MA-nee VEN-go vo-len-TYE-ree',
    notes: {en: 'Non comes before posso; the modal verb is followed by the infinitive uscire. Vengo is the io form of venire.', it: 'Non precede posso; il verbo modale è seguito dall’infinito uscire. Vengo è la forma di venire con io.', pt: 'Non vem antes de posso; o verbo modal é seguido do infinitivo uscire. Vengo é a forma de io de venire.', es: 'Non va delante de posso; el verbo modal va seguido del infinitivo uscire. Vengo es la forma de io de venire.', fr: 'Non se place avant posso ; le verbe modal est suivi de l’infinitif uscire. Vengo est la forme de io de venire.', de: 'Non steht vor posso; auf das Modalverb folgt der Infinitiv uscire. Vengo ist die io-Form von venire.'},
    grammarTopicId: 'present-tense'
  },
  {
    id: 'grammar-b1-present-tense',
    level: 'B1',
    targetIt: 'Di solito prendo il treno, ma oggi preferisco lavorare da casa.',
    translation: {en: 'I usually take the train, but today I prefer to work from home.', it: 'I usually take the train, but today I prefer to work from home.', pt: 'Normalmente pego o trem, mas hoje prefiro trabalhar de casa.', es: 'Normalmente tomo el tren, pero hoy prefiero trabajar desde casa.', fr: 'D’habitude je prends le train, mais aujourd’hui je préfère travailler à la maison.', de: 'Normalerweise nehme ich den Zug, aber heute arbeite ich lieber von zu Hause.'},
    phoneticHint: 'dee SO-lee-to PREN-do eel TRE-no, mah OD-jee pre-fe-REE-sko la-vo-RA-reh da KA-sa',
    notes: {en: 'The present tense contrasts a usual routine with today’s choice; preferire uses the -isc- form preferisco.', it: 'Il presente contrappone un’abitudine a una scelta di oggi; preferire usa la forma in -isc- preferisco.', pt: 'O presente contrapõe uma rotina habitual à escolha de hoje; preferire usa a forma em -isc-: preferisco.', es: 'El presente contrapone una rutina habitual a la elección de hoy; preferire usa la forma en -isc-: preferisco.', fr: 'Le présent oppose une routine habituelle au choix du jour ; preferire prend la forme en -isc- : preferisco.', de: 'Das Präsens stellt eine Gewohnheit der heutigen Wahl gegenüber; preferire hat die -isc-Form preferisco.'},
    grammarTopicId: 'present-tense'
  },
  {
    id: 'grammar-a1-stare-gerundio',
    level: 'A1',
    targetIt: 'Marco sta leggendo un libro.',
    translation: {en: 'Marco is reading a book.', it: 'Marco is reading a book.', pt: 'Marco está lendo um livro.', es: 'Marco está leyendo un libro.', fr: 'Marco est en train de lire un livre.', de: 'Marco liest gerade ein Buch.'},
    phoneticHint: 'MAR-ko sta led-JEN-do oon LEE-bro',
    notes: {en: 'Sta + gerund describes an action in progress; leggere → leggendo.', it: 'Sta + gerundio descrive un’azione in corso; leggere → leggendo.', pt: 'Sta + gerúndio descreve uma ação em curso; leggere → leggendo.', es: 'Sta + gerundio describe una acción en curso; leggere → leggendo.', fr: 'Sta + gérondif décrit une action en cours ; leggere → leggendo.', de: 'Sta + Gerundium beschreibt eine laufende Handlung; leggere → leggendo.'},
    grammarTopicId: 'stare-gerundio'
  },
  {
    id: 'grammar-a2-stare-gerundio',
    level: 'A2',
    targetIt: 'I miei amici stanno guardando la partita.',
    translation: {en: 'My friends are watching the match.', it: 'My friends are watching the match.', pt: 'Os meus amigos estão assistindo à partida.', es: 'Mis amigos están viendo el partido.', fr: 'Mes amis sont en train de regarder le match.', de: 'Meine Freunde schauen gerade das Spiel.'},
    phoneticHint: 'ee MYAY a-MEE-chee STAN-no gwar-DAN-do la par-TEE-ta',
    notes: {en: 'A plural subject takes stanno; the gerund guardando does not change.', it: 'Un soggetto plurale vuole stanno; il gerundio guardando non cambia.', pt: 'Um sujeito plural pede stanno; o gerúndio guardando não muda.', es: 'Un sujeto plural lleva stanno; el gerundio guardando no cambia.', fr: 'Un sujet pluriel demande stanno ; le gérondif guardando ne change pas.', de: 'Ein Pluralsubjekt verlangt stanno; das Gerundium guardando bleibt gleich.'},
    grammarTopicId: 'stare-gerundio'
  },
  {
    id: 'grammar-b1-stare-gerundio',
    level: 'B1',
    targetIt: 'Che cosa stai facendo? Sto bevendo un caffè con Giulia.',
    translation: {en: 'What are you doing? I am having a coffee with Giulia.', it: 'What are you doing? I am having a coffee with Giulia.', pt: 'O que você está fazendo? Estou tomando um café com a Giulia.', es: '¿Qué estás haciendo? Estoy tomando un café con Giulia.', fr: 'Qu’est-ce que tu fais en ce moment ? Je bois un café avec Giulia.', de: 'Was machst du gerade? Ich trinke einen Kaffee mit Giulia.'},
    phoneticHint: 'keh KO-za STAI fa-CHEN-do? sto be-VEN-do oon kaf-FEH kon JOO-lya',
    notes: {en: 'Fare and bere have irregular gerunds: facendo, bevendo.', it: 'Fare e bere hanno gerundi irregolari: facendo, bevendo.', pt: 'Fare e bere têm gerúndios irregulares: facendo, bevendo.', es: 'Fare y bere tienen gerundios irregulares: facendo, bevendo.', fr: 'Fare et bere ont des gérondifs irréguliers : facendo, bevendo.', de: 'Fare und bere haben unregelmäßige Gerundien: facendo, bevendo.'},
    grammarTopicId: 'stare-gerundio'
  },
  {
    id: 'grammar-a1-imperative',
    level: 'A1',
    targetIt: 'Apri la finestra, per favore!',
    translation: {en: 'Open the window, please!', it: 'Open the window, please!', pt: 'Abra a janela, por favor!', es: '¡Abre la ventana, por favor!', fr: 'Ouvre la fenêtre, s’il te plaît !', de: 'Mach bitte das Fenster auf!'},
    phoneticHint: 'AH-pree la fee-NES-tra, per fa-VO-reh',
    notes: {en: 'With tu, -ire verbs end in -i: aprire → apri!', it: 'Con tu, i verbi in -ire finiscono in -i: aprire → apri!', pt: 'Com tu, os verbos em -ire terminam em -i: aprire → apri!', es: 'Con tu, los verbos en -ire terminan en -i: aprire → apri!', fr: 'Avec tu, les verbes en -ire se terminent en -i : aprire → apri!', de: 'Bei tu enden Verben auf -ire auf -i: aprire → apri!'},
    grammarTopicId: 'imperative'
  },
  {
    id: 'grammar-a2-imperative',
    level: 'A2',
    targetIt: 'Scusi, vada dritto e prenda la seconda a destra.',
    translation: {en: 'Excuse me, go straight on and take the second on the right.', it: 'Excuse me, go straight on and take the second on the right.', pt: 'Com licença, siga em frente e pegue a segunda à direita.', es: 'Disculpe, siga recto y tome la segunda a la derecha.', fr: 'Excusez-moi, allez tout droit et prenez la deuxième à droite.', de: 'Entschuldigung, gehen Sie geradeaus und nehmen Sie die zweite rechts.'},
    phoneticHint: 'SKOO-zee, VA-da DREET-to eh PREN-da la se-KON-da a DES-tra',
    notes: {en: 'Formal Lei imperatives: scusi, vada, prenda.', it: 'Imperativi formali con Lei: scusi, vada, prenda.', pt: 'Imperativos formais com Lei: scusi, vada, prenda.', es: 'Imperativos formales con Lei: scusi, vada, prenda.', fr: 'Impératifs de politesse avec Lei : scusi, vada, prenda.', de: 'Höfliche Imperative mit Lei: scusi, vada, prenda.'},
    grammarTopicId: 'imperative'
  },
  {
    id: 'grammar-b1-imperative',
    level: 'B1',
    targetIt: 'Dimmi la verità e non preoccuparti!',
    translation: {en: 'Tell me the truth and don’t worry!', it: 'Tell me the truth and don’t worry!', pt: 'Diga-me a verdade e não se preocupe!', es: '¡Dime la verdad y no te preocupes!', fr: 'Dis-moi la vérité et ne t’inquiète pas !', de: 'Sag mir die Wahrheit und mach dir keine Sorgen!'},
    phoneticHint: 'DEEM-mee la ve-ree-TA eh non pre-ok-KOO-par-tee',
    notes: {en: 'di’ + mi doubles the m: dimmi. In the negative, the pronoun attaches to the infinitive: non preoccuparti.', it: 'di’ + mi raddoppia la m: dimmi. Nel negativo il pronome si unisce all’infinito: non preoccuparti.', pt: 'di’ + mi dobra o m: dimmi. Na negativa, o pronome se une ao infinitivo: non preoccuparti.', es: 'di’ + mi duplica la m: dimmi. En negativa, el pronombre se une al infinitivo: non preoccuparti.', fr: 'di’ + mi double le m : dimmi. À la forme négative, le pronom se soude à l’infinitif : non preoccuparti.', de: 'di’ + mi verdoppelt das m: dimmi. In der Verneinung wird das Pronomen an den Infinitiv angehängt: non preoccuparti.'},
    grammarTopicId: 'imperative'
  },
  {
    id: 'grammar-a1-comparatives',
    level: 'A1',
    targetIt: 'Il treno è più veloce dell’autobus.',
    translation: {en: 'The train is faster than the bus.', it: 'The train is faster than the bus.', pt: 'O trem é mais rápido do que o ônibus.', es: 'El tren es más rápido que el autobús.', fr: 'Le train est plus rapide que le bus.', de: 'Der Zug ist schneller als der Bus.'},
    phoneticHint: 'eel TREH-no eh pyoo ve-LO-che dell-ow-TO-boos',
    notes: {en: 'più + adjective + di: di + l’ joins into dell’.', it: 'più + aggettivo + di: di + l’ diventa dell’.', pt: 'più + adjetivo + di: di + l’ forma dell’.', es: 'più + adjetivo + di: di + l’ forma dell’.', fr: 'più + adjectif + di : di + l’ donne dell’.', de: 'più + Adjektiv + di: di + l’ wird zu dell’.'},
    grammarTopicId: 'comparatives'
  },
  {
    id: 'grammar-a2-comparatives',
    level: 'A2',
    targetIt: 'Anna è la più brava della classe, ed è simpaticissima!',
    translation: {en: 'Anna is the best in the class, and she is very nice!', it: 'Anna is the best in the class, and she is very nice!', pt: 'A Anna é a melhor da turma, e é simpaticíssima!', es: '¡Anna es la mejor de la clase y es simpatiquísima!', fr: 'Anna est la meilleure de la classe, et elle est très sympathique !', de: 'Anna ist die Beste der Klasse und sie ist supernett!'},
    phoneticHint: 'AN-na eh la pyoo BRA-va DEL-la KLAS-seh, ed eh seem-pa-tee-CHEES-see-ma',
    notes: {en: 'Superlative = article + più + adjective; -issima for “very”.', it: 'Superlativo = articolo + più + aggettivo; -issima per “molto”.', pt: 'Superlativo = artigo + più + adjetivo; -issima para “muito”.', es: 'Superlativo = artículo + più + adjetivo; -issima para «muy».', fr: 'Superlatif = article + più + adjectif ; -issima pour « très ».', de: 'Superlativ = Artikel + più + Adjektiv; -issima für „sehr“.'},
    grammarTopicId: 'comparatives'
  },
  {
    id: 'grammar-b1-comparatives',
    level: 'B1',
    targetIt: 'Oggi sto meglio di ieri: l’esame era più difficile di quanto pensassi.',
    translation: {en: 'I feel better today than yesterday: the exam was harder than I thought.', it: 'I feel better today than yesterday: the exam was harder than I thought.', pt: 'Hoje estou melhor do que ontem: a prova foi mais difícil do que eu pensava.', es: 'Hoy estoy mejor que ayer: el examen fue más difícil de lo que pensaba.', fr: 'Aujourd’hui je vais mieux qu’hier : l’examen était plus difficile que je ne le pensais.', de: 'Heute geht es mir besser als gestern: Die Prüfung war schwerer, als ich dachte.'},
    phoneticHint: 'OD-jee sto MEL-yo dee ee-EHR: leh-ZAH-meh eh-ra pyoo deef-FEE-chee-leh dee KWAN-to pen-SAS-see',
    notes: {en: 'meglio is the adverb of bene; di quanto + subjunctive introduces a whole clause.', it: 'meglio è l’avverbio di bene; di quanto + congiuntivo introduce una frase intera.', pt: 'meglio é o advérbio de bene; di quanto + subjuntivo introduz uma oração inteira.', es: 'meglio es el adverbio de bene; di quanto + subjuntivo introduce una oración entera.', fr: 'meglio est l’adverbe de bene ; di quanto + subjonctif introduit une proposition entière.', de: 'meglio ist das Adverb von bene; di quanto + Konjunktiv leitet einen ganzen Satz ein.'},
    grammarTopicId: 'comparatives'
  },
  {
    id: 'grammar-a1-imperfetto',
    level: 'A1',
    targetIt: 'Quando ero piccolo, avevo un cane.',
    translation: {en: 'When I was little, I had a dog.', it: 'When I was little, I had a dog.', pt: 'Quando eu era pequeno, tinha um cachorro.', es: 'Cuando era pequeño, tenía un perro.', fr: 'Quand j’étais petit, j’avais un chien.', de: 'Als ich klein war, hatte ich einen Hund.'},
    phoneticHint: 'KWAN-do EH-ro PIK-ko-lo, a-VE-vo oon KA-ne',
    notes: {en: 'Ero and avevo are common imperfect forms for past descriptions and possession.', it: 'Ero e avevo sono forme comuni dell’imperfetto per descrizioni e possesso nel passato.', pt: 'Ero e avevo são formas comuns do imperfetto para descrições e posse no passado.', es: 'Ero y avevo son formas comunes del imperfetto para descripciones y posesión en el pasado.', fr: 'Ero et avevo sont des formes courantes de l’imperfetto pour décrire et exprimer la possession au passé.', de: 'Ero und avevo sind häufige Imperfetto-Formen für Beschreibungen und Besitz in der Vergangenheit.'},
    grammarTopicId: 'imperfetto'
  },
  {
    id: 'grammar-a2-imperfetto',
    level: 'A2',
    targetIt: 'Ogni estate andavo al mare con la mia famiglia.',
    translation: {en: 'Every summer I used to go to the seaside with my family.', it: 'Every summer I used to go to the seaside with my family.', pt: 'Todo verão eu ia à praia com a minha família.', es: 'Cada verano iba a la playa con mi familia.', fr: 'Chaque été j’allais à la mer avec ma famille.', de: 'Jeden Sommer bin ich mit meiner Familie ans Meer gefahren.'},
    phoneticHint: 'ON-yee eh-STA-te an-DA-vo al MA-re kon la MEE-a fa-MEE-lya',
    notes: {en: 'Ogni estate signals a repeated past habit; andavo is the imperfetto of andare.', it: 'Ogni estate indica un’abitudine passata; andavo è l’imperfetto di andare.', pt: 'Ogni estate indica um hábito repetido no passado; andavo é o imperfetto de andare.', es: 'Ogni estate indica un hábito repetido en el pasado; andavo es el imperfetto de andare.', fr: 'Ogni estate signale une habitude passée répétée ; andavo est l’imperfetto de andare.', de: 'Ogni estate zeigt eine wiederholte Gewohnheit; andavo ist das Imperfetto von andare.'},
    grammarTopicId: 'imperfetto'
  },
  {
    id: 'grammar-b1-imperfetto',
    level: 'B1',
    targetIt: 'Mentre camminavo, ho incontrato una vecchia amica.',
    translation: {en: 'While I was walking, I met an old friend.', it: 'While I was walking, I met an old friend.', pt: 'Enquanto caminhava, encontrei um velho amigo.', es: 'Mientras caminaba, me encontré con un viejo amigo.', fr: 'Pendant que je marchais, j’ai rencontré un vieil ami.', de: 'Während ich spazieren ging, traf ich einen alten Freund.'},
    phoneticHint: 'MEN-tre kam-mee-NA-vo, oh een-kon-TRA-to OO-na VEK-kya a-MEE-ka',
    notes: {en: 'Camminavo describes the background action; ho incontrato is the completed event.', it: 'Camminavo descrive l’azione di sfondo; ho incontrato è l’evento concluso.', pt: 'Camminavo descreve a ação de fundo; ho incontrato é o fato concluído.', es: 'Camminavo describe la acción de fondo; ho incontrato es el hecho terminado.', fr: 'Camminavo décrit l’action de fond ; ho incontrato est l’événement terminé.', de: 'Camminavo beschreibt die Hintergrundhandlung; ho incontrato ist das abgeschlossene Ereignis.'},
    grammarTopicId: 'imperfetto'
  }
  ,
  {
    id: 'grammar-a1-prepositions',
    level: 'A1',
    targetIt: 'Abito a Roma e vado da Luca con mia sorella.',
    translation: {en: 'I live in Rome and I am going to Luca’s place with my sister.', it: 'I live in Rome and I am going to Luca’s place with my sister.', pt: 'Moro em Roma e vou à casa do Luca com a minha irmã.', es: 'Vivo en Roma y voy a casa de Luca con mi hermana.', fr: 'J’habite à Rome et je vais chez Luca avec ma sœur.', de: 'Ich wohne in Rom und gehe mit meiner Schwester zu Luca.'},
    phoneticHint: 'A-bee-to a RO-ma eh VA-do da LOO-ka kon MEE-a so-REL-la',
    notes: {en: 'Use a with a city, da with a person’s place and con for company.', it: 'Usa a con una città, da con il luogo di una persona e con per indicare compagnia.', pt: 'Use a com uma cidade, da com a casa ou o local de uma pessoa e con para companhia.', es: 'Usa a con una ciudad, da con el lugar de una persona y con para la compañía.', fr: 'Utilise a avec une ville, da pour aller chez quelqu’un et con pour la compagnie.', de: 'Verwende a bei einer Stadt, da für den Ort einer Person und con für Begleitung.'},
    grammarTopicId: 'prepositions'
  },
  {
    id: 'grammar-a2-prepositions',
    level: 'A2',
    targetIt: 'La lezione comincia alle nove e finisce nel pomeriggio.',
    translation: {en: 'The lesson starts at nine and finishes in the afternoon.', it: 'The lesson starts at nine and finishes in the afternoon.', pt: 'A aula começa às nove e termina à tarde.', es: 'La clase empieza a las nueve y termina por la tarde.', fr: 'Le cours commence à neuf heures et finit l’après-midi.', de: 'Der Unterricht beginnt um neun und endet am Nachmittag.'},
    phoneticHint: 'la let-TSYO-ne ko-MEEN-cha AL-le NO-ve eh fee-NEE-she nel po-me-REEJ-jo',
    notes: {en: 'Use alle with clock times; nel is in + il and introduces a time period.', it: 'Usa alle con gli orari; nel è in + il e introduce un periodo di tempo.', pt: 'Use alle com as horas; nel é in + il e introduz um período de tempo.', es: 'Usa alle con las horas; nel es in + il e introduce un periodo de tiempo.', fr: 'Utilise alle avec les heures ; nel = in + il et introduit une période.', de: 'Verwende alle bei Uhrzeiten; nel ist in + il und leitet einen Zeitraum ein.'},
    grammarTopicId: 'prepositions'
  },
  {
    id: 'grammar-b1-prepositions',
    level: 'B1',
    targetIt: 'Dipende dal tempo, ma penso spesso a quel viaggio.',
    translation: {en: 'It depends on the weather, but I often think about that trip.', it: 'It depends on the weather, but I often think about that trip.', pt: 'Depende do tempo, mas penso muitas vezes naquela viagem.', es: 'Depende del tiempo, pero pienso a menudo en aquel viaje.', fr: 'Ça dépend du temps, mais je pense souvent à ce voyage.', de: 'Es hängt vom Wetter ab, aber ich denke oft an diese Reise.'},
    phoneticHint: 'dee-PEN-de dal TEM-po, ma PEN-so SPES-so a kwel vyad-jo',
    notes: {en: 'Dipendere takes da (da + il = dal); pensare takes a.', it: 'Dipendere richiede da (da + il = dal); pensare richiede a.', pt: 'Dipendere pede da (da + il = dal); pensare pede a.', es: 'Dipendere va con da (da + il = dal); pensare va con a.', fr: 'Dipendere se construit avec da (da + il = dal) ; pensare avec a.', de: 'Dipendere steht mit da (da + il = dal); pensare steht mit a.'},
    grammarTopicId: 'prepositions'
  }
  ,
  {
    id: 'grammar-a1-adjective-agreement',
    level: 'A1',
    targetIt: 'La ragazza è simpatica e i ragazzi sono gentili.',
    translation: {en: 'The girl is friendly and the boys are kind.', it: 'The girl is friendly and the boys are kind.', pt: 'A menina é simpática e os meninos são gentis.', es: 'La niña es simpática y los niños son amables.', fr: 'La fille est sympathique et les garçons sont gentils.', de: 'Das Mädchen ist nett und die Jungen sind freundlich.'},
    phoneticHint: 'la ra-GAT-tsa eh seem-PA-tee-ka eh ee ra-GAT-tsee SO-no jen-TEE-lee',
    notes: {en: 'Simpatica agrees with the feminine singular ragazza; gentili is plural.', it: 'Simpatica concorda con ragazza, femminile singolare; gentili è plurale.', pt: 'Simpatica concorda com ragazza, feminino singular; gentili é plural.', es: 'Simpatica concuerda con ragazza, femenino singular; gentili es plural.', fr: 'Simpatica s’accorde avec ragazza, féminin singulier ; gentili est au pluriel.', de: 'Simpatica richtet sich nach ragazza (feminin Singular); gentili ist Plural.'},
    grammarTopicId: 'adjective-agreement'
  },
  {
    id: 'grammar-a2-adjective-agreement',
    level: 'A2',
    targetIt: 'Le mie amiche sono molto gentili e interessanti.',
    translation: {en: 'My female friends are very kind and interesting.', it: 'My female friends are very kind and interesting.', pt: 'As minhas amigas são muito gentis e interessantes.', es: 'Mis amigas son muy amables e interesantes.', fr: 'Mes amies sont très gentilles et intéressantes.', de: 'Meine Freundinnen sind sehr nett und interessant.'},
    phoneticHint: 'leh MEE-eh a-MEE-keh SO-no MOL-to jen-TEE-lee eh een-teh-res-SAN-tee',
    notes: {en: 'Amiche is feminine plural; adjectives ending in -e become -i in the plural.', it: 'Amiche è femminile plurale; gli aggettivi in -e diventano -i al plurale.', pt: 'Amiche é feminino plural; os adjetivos terminados em -e passam a -i no plural.', es: 'Amiche es femenino plural; los adjetivos en -e pasan a -i en plural.', fr: 'Amiche est féminin pluriel ; les adjectifs en -e deviennent -i au pluriel.', de: 'Amiche ist feminin Plural; Adjektive auf -e enden im Plural auf -i.'},
    grammarTopicId: 'adjective-agreement'
  },
  {
    id: 'grammar-b1-adjective-agreement',
    level: 'B1',
    targetIt: 'Abbiamo visitato due vecchie città molto affascinanti.',
    translation: {en: 'We visited two old, very fascinating cities.', it: 'We visited two old, very fascinating cities.', pt: 'Visitamos duas cidades antigas e muito fascinantes.', es: 'Visitamos dos ciudades antiguas y muy fascinantes.', fr: 'Nous avons visité deux villes anciennes et très fascinantes.', de: 'Wir haben zwei alte, sehr faszinierende Städte besucht.'},
    phoneticHint: 'ab-BYA-mo vee-zee-TA-to DOO-eh VEK-kye cheet-TA MOL-to af-fa-shee-NAN-tee',
    notes: {en: 'Vecchie and affascinanti agree with città in the feminine plural.', it: 'Vecchie e affascinanti concordano con città al femminile plurale.', pt: 'Vecchie e affascinanti concordam com città no feminino plural.', es: 'Vecchie y affascinanti concuerdan con città en femenino plural.', fr: 'Vecchie et affascinanti s’accordent avec città au féminin pluriel.', de: 'Vecchie und affascinanti richten sich nach città im femininen Plural.'},
    grammarTopicId: 'adjective-agreement'
  }
];

// Support-language glosses for the dialogue lines (keyed by the English gloss).
// Drafts pending native-speaker review.
const DIALOGUE_GLOSS: Record<string, Record<SupportLanguage, string>> = {
  'Good morning! What can I bring you?': { pt: 'Bom dia! O que posso lhe trazer?', es: '¡Buenos días! ¿Qué le traigo?', fr: 'Bonjour ! Que puis-je vous apporter ?', de: 'Guten Morgen! Was darf ich Ihnen bringen?' },
  'Good morning, I would like a cappuccino and a jam pastry, please.': { pt: 'Bom dia, eu queria um cappuccino e um croissant de geleia, por favor.', es: 'Buenos días, quisiera un capuchino y un cruasán de mermelada, por favor.', fr: 'Bonjour, je voudrais un cappuccino et un croissant à la confiture, s’il vous plaît.', de: 'Guten Morgen, ich hätte gern einen Cappuccino und ein Marmeladenhörnchen, bitte.' },
  'A cappuccino and a jam brioche, please.': { pt: 'Um cappuccino e um brioche de geleia, por favor.', es: 'Un capuchino y un brioche de mermelada, por favor.', fr: 'Un cappuccino et une brioche à la confiture, s’il vous plaît.', de: 'Einen Cappuccino und ein Marmeladenbrioche, bitte.' },
  'Hi, give me a beer right now. (Too informal!)': { pt: 'Oi, me dá uma cerveja agora. (Informal demais!)', es: 'Hola, dame una cerveza ya. (¡Demasiado informal!)', fr: 'Salut, donne-moi une bière tout de suite. (Trop familier !)', de: 'Hallo, gib mir sofort ein Bier. (Zu informell!)' },
  'I only want natural mineral water.': { pt: 'Só quero água mineral sem gás.', es: 'Solo quiero agua mineral sin gas.', fr: 'Je veux seulement de l’eau minérale plate.', de: 'Ich möchte nur stilles Mineralwasser.' },
  'Perfect! To drink here at the counter or at the table?': { pt: 'Perfeito! Para tomar aqui no balcão ou na mesa?', es: '¡Perfecto! ¿Para tomar aquí en la barra o en la mesa?', fr: 'Parfait ! À consommer ici au comptoir ou à table ?', de: 'Perfekt! Hier an der Theke oder am Tisch?' },
  'Here at the counter, thank you. How much is it in total?': { pt: 'Aqui no balcão, obrigado(a). Quanto é no total?', es: 'Aquí en la barra, gracias. ¿Cuánto es en total?', fr: 'Ici au comptoir, merci. Ça fait combien en tout ?', de: 'Hier an der Theke, danke. Was macht das insgesamt?' },
  'At the counter, thank you. How much is it altogether?': { pt: 'No balcão, obrigado(a). Quanto é tudo?', es: 'En la barra, gracias. ¿Cuánto es todo?', fr: 'Au comptoir, merci. Ça fait combien au total ?', de: 'An der Theke, danke. Was macht das zusammen?' },
  'I do not know, you decide.': { pt: 'Não sei, decida você.', es: 'No sé, decide tú.', fr: 'Je ne sais pas, choisis pour moi.', de: 'Ich weiß nicht, entscheide du.' },
  'That is two euros and fifty cents. Here you are, have a nice day!': { pt: 'São dois euros e cinquenta. Aqui está, tenha um bom dia!', es: 'Son dos euros con cincuenta. Aquí tiene, ¡que tenga un buen día!', fr: 'Ça fait deux euros cinquante. Voilà, bonne journée !', de: 'Das macht zwei Euro fünfzig. Bitte sehr, einen schönen Tag noch!' },
  'Excuse me madam, how do I get to the Uffizi Gallery?': { pt: 'Com licença, senhora, como chego à Galeria Uffizi?', es: 'Disculpe, señora, ¿cómo llego a la Galería Uffizi?', fr: 'Excusez-moi madame, comment aller à la galerie des Offices ?', de: 'Entschuldigen Sie, wie komme ich zu den Uffizien?' },
  'Hey you, where is the Uffizi? (Too rude!)': { pt: 'Ei, você, onde fica a Uffizi? (Mal-educado demais!)', es: 'Oye, tú, ¿dónde está la Uffizi? (¡Demasiado brusco!)', fr: 'Hé toi, ils sont où les Offices ? (Trop impoli !)', de: 'He du, wo sind die Uffizien? (Zu unhöflich!)' },
  'Go straight ahead along Via dei Calzaiuoli until Piazza della Signoria, then turn left.': { pt: 'Siga em frente pela Via dei Calzaiuoli até a Piazza della Signoria e depois vire à esquerda.', es: 'Siga recto por la Via dei Calzaiuoli hasta la Piazza della Signoria y luego gire a la izquierda.', fr: 'Allez tout droit par la Via dei Calzaiuoli jusqu’à la Piazza della Signoria, puis tournez à gauche.', de: 'Gehen Sie die Via dei Calzaiuoli geradeaus bis zur Piazza della Signoria und biegen Sie dann links ab.' },
  'Is it far on foot or can one walk?': { pt: 'É longe a pé ou dá para ir andando?', es: '¿Está lejos a pie o se puede ir andando?', fr: 'C’est loin à pied ou on peut y aller en marchant ?', de: 'Ist es weit zu Fuß, oder kann man laufen?' },
  'I will take an airplane then.': { pt: 'Então vou pegar um avião.', es: 'Entonces tomaré un avión.', fr: 'Alors je prendrai l’avion.', de: 'Dann nehme ich eben ein Flugzeug.' },
  'It is very close, only five minutes on foot! Enjoy your visit!': { pt: 'É bem perto, só cinco minutos a pé! Boa visita!', es: '¡Está muy cerca, solo a cinco minutos a pie! ¡Disfrute la visita!', fr: 'C’est tout près, à cinq minutes à pied ! Bonne visite !', de: 'Es ist ganz nah, nur fünf Minuten zu Fuß! Viel Spaß beim Besuch!' },
  'Good evening! Tonight I recommend the cacio e pepe tonnarelli, they are a specialty.': { pt: 'Boa noite! Hoje recomendo os tonnarelli cacio e pepe, são uma especialidade.', es: '¡Buenas noches! Esta noche le recomiendo los tonnarelli cacio e pepe, son una especialidad.', fr: 'Bonsoir ! Ce soir je vous recommande les tonnarelli cacio e pepe, c’est une spécialité.', de: 'Guten Abend! Heute empfehle ich die Tonnarelli cacio e pepe, eine Spezialität.' },
  'I believe that is an excellent choice! Please bring me one portion of it.': { pt: 'Acho que é uma excelente escolha! Traga-me uma porção, por favor.', es: '¡Creo que es una elección excelente! Tráigame una ración, por favor.', fr: 'Je pense que c’est un excellent choix ! Apportez-m’en une portion, s’il vous plaît.', de: 'Ich glaube, das ist eine ausgezeichnete Wahl! Bringen Sie mir bitte eine Portion.' },
  'I believe that is an excellent choice! Bring me a portion, please.': { pt: 'Acho que é uma excelente escolha! Traga-me uma porção, por favor.', es: '¡Creo que es una elección excelente! Tráigame una ración, por favor.', fr: 'Je pense que c’est un excellent choix ! Apportez-m’en une portion, s’il vous plaît.', de: 'Ich glaube, das ist eine ausgezeichnete Wahl! Bringen Sie mir bitte eine Portion.' },
  'I do not like pasta.': { pt: 'Não gosto de massa.', es: 'No me gusta la pasta.', fr: 'Je n’aime pas les pâtes.', de: 'Ich mag keine Nudeln.' },
  'With pleasure. To drink would you like house wine or water?': { pt: 'Com prazer. Para beber, prefere o vinho da casa ou água?', es: 'Con mucho gusto. Para beber, ¿desea vino de la casa o agua?', fr: 'Avec plaisir. Comme boisson, vous désirez le vin de la maison ou de l’eau ?', de: 'Sehr gern. Möchten Sie dazu Hauswein oder Wasser?' },
  'I would prefer a fresh bottle of sparkling water, thank you.': { pt: 'Prefiro uma garrafa de água com gás gelada, obrigado(a).', es: 'Preferiría una botella de agua con gas fresca, gracias.', fr: 'Je préférerais une bouteille d’eau gazeuse fraîche, merci.', de: 'Ich hätte lieber eine Flasche kaltes Sprudelwasser, danke.' },
  'Give me whatever.': { pt: 'Me dá qualquer coisa.', es: 'Dame lo que sea.', fr: 'Donne-moi n’importe quoi.', de: 'Gib mir irgendwas.' },
};
const glossFor = (en: string, lang: Language): string =>
  lang === 'pt' || lang === 'es' || lang === 'fr' || lang === 'de' ? DIALOGUE_GLOSS[en]?.[lang] ?? en : en;

interface DialogueTurn {
  speaker: 'npc' | 'user';
  name: string;
  avatar: string;
  it: string;
  en: string;
  userOptions?: { it: string; en: string }[];
}

interface DialogueScenario {
  id: string;
  level: 'A1' | 'A2' | 'B1';
  title: BilingualText;
  location: BilingualText;
  turns: DialogueTurn[];
}

export const DIALOGUE_SCENARIOS: DialogueScenario[] = [
  {
    id: 'bar-milano',
    level: 'A1',
    title: {en: 'At the Cafe in Milan', it: 'Al Bar a Milano', pt: 'No café em Milão', es: 'En el café de Milán', fr: 'Au café à Milan', de: 'Im Café in Mailand'},
    location: ['Caffè Paszkowski, Milano', 'Caffè Paszkowski, Milano'],
    turns: [
      {
        speaker: 'npc',
        name: 'Marco (Barista)',
        avatar: '☕',
        it: 'Buongiorno! Cosa Le posso portare?',
        en: 'Good morning! What can I bring you?'
      },
      {
        speaker: 'user',
        name: 'You',
        avatar: '🧑‍🎓',
        it: 'Buongiorno, vorrei un cappuccino e una brioche alla marmellata, per favore.',
        en: 'Good morning, I would like a cappuccino and a jam pastry, please.',
        userOptions: [
          { it: 'Buongiorno, vorrei un cappuccino e una brioche alla marmellata, per favore.', en: 'A cappuccino and a jam brioche, please.' },
          { it: 'Ciao, dammi una birra subito.', en: 'Hi, give me a beer right now. (Too informal!)' },
          { it: 'Voglio solo l’acqua minerale naturale.', en: 'I only want natural mineral water.' }
        ]
      },
      {
        speaker: 'npc',
        name: 'Marco (Barista)',
        avatar: '☕',
        it: 'Perfetto! Da bere qui al banco o al tavolo?',
        en: 'Perfect! To drink here at the counter or at the table?'
      },
      {
        speaker: 'user',
        name: 'You',
        avatar: '🧑‍🎓',
        it: 'Qui al banco, grazie. Quanto viene in tutto?',
        en: 'Here at the counter, thank you. How much is it in total?',
        userOptions: [
          { it: 'Qui al banco, grazie. Quanto viene in tutto?', en: 'At the counter, thank you. How much is it altogether?' },
          { it: 'Non lo so, decidi tu.', en: 'I do not know, you decide.' }
        ]
      },
      {
        speaker: 'npc',
        name: 'Marco (Barista)',
        avatar: '☕',
        it: 'Sono due euro e cinquanta centesimi. Ecco a Lei, buona giornata!',
        en: 'That is two euros and fifty cents. Here you are, have a nice day!'
      }
    ]
  },
  {
    id: 'strada-firenze',
    level: 'A2',
    title: {en: 'Asking for Directions in Florence', it: 'Chiedere Indicazioni a Firenze', pt: 'Pedir indicações em Florença', es: 'Pedir indicaciones en Florencia', fr: 'Demander son chemin à Florence', de: 'Nach dem Weg fragen in Florenz'},
    location: ['Piazza del Duomo, Firenze', 'Piazza del Duomo, Firenze'],
    turns: [
      {
        speaker: 'user',
        name: 'You',
        avatar: '🧑‍🎓',
        it: 'Scusi signora, per andare alla Galleria degli Uffizi?',
        en: 'Excuse me madam, how do I get to the Uffizi Gallery?',
        userOptions: [
          { it: 'Scusi signora, per andare alla Galleria degli Uffizi?', en: 'Excuse me madam, how do I get to the Uffizi Gallery?' },
          { it: 'Ehi tu, dove sono gli Uffizi?', en: 'Hey you, where is the Uffizi? (Too rude!)' }
        ]
      },
      {
        speaker: 'npc',
        name: 'Signora Laura',
        avatar: '🏛️',
        it: 'Vada sempre dritto lungo Via dei Calzaiuoli fino a Piazza della Signoria, poi giri a sinistra.',
        en: 'Go straight ahead along Via dei Calzaiuoli until Piazza della Signoria, then turn left.'
      },
      {
        speaker: 'user',
        name: 'You',
        avatar: '🧑‍🎓',
        it: 'È lontano a piedi o si può camminare?',
        en: 'Is it far on foot or can one walk?',
        userOptions: [
          { it: 'È lontano a piedi o si può camminare?', en: 'Is it far on foot or can one walk?' },
          { it: 'Prendo un aereo allora.', en: 'I will take an airplane then.' }
        ]
      },
      {
        speaker: 'npc',
        name: 'Signora Laura',
        avatar: '🏛️',
        it: 'È vicinissimo, sono solo cinque minuti a piedi! Buona visita!',
        en: 'It is very close, only five minutes on foot! Enjoy your visit!'
      }
    ]
  },
  {
    id: 'ristorante-roma',
    level: 'B1',
    title: {en: 'Recommending & Expressing Opinions in Rome', it: 'Opinioni al Ristorante a Roma', pt: 'Recomendações e opiniões em Roma', es: 'Recomendar y opinar en Roma', fr: 'Conseiller et donner son avis à Rome', de: 'Empfehlungen und Meinungen in Rom'},
    location: ['Trastevere, Roma', 'Trastevere, Roma'],
    turns: [
      {
        speaker: 'npc',
        name: 'Cameriere Gianni',
        avatar: '🍝',
        it: 'Buonasera! Stasera vi consiglio i tonnarelli cacio e pepe, sono una specialità.',
        en: 'Good evening! Tonight I recommend the cacio e pepe tonnarelli, they are a specialty.'
      },
      {
        speaker: 'user',
        name: 'You',
        avatar: '🧑‍🎓',
        it: 'Credo che sia un’ottima scelta! Me ne porti una porzione, per favore.',
        en: 'I believe that is an excellent choice! Please bring me one portion of it.',
        userOptions: [
          { it: 'Credo che sia un’ottima scelta! Me ne porti una porzione, per favore.', en: 'I believe that is an excellent choice! Bring me a portion, please.' },
          { it: 'Non mi piace la pasta.', en: 'I do not like pasta.' }
        ]
      },
      {
        speaker: 'npc',
        name: 'Cameriere Gianni',
        avatar: '🍝',
        it: 'Molto volentieri. Da bere desiderate del vino della casa o dell’acqua?',
        en: 'With pleasure. To drink would you like house wine or water?'
      },
      {
        speaker: 'user',
        name: 'You',
        avatar: '🧑‍🎓',
        it: 'Preferirei una bottiglia d’acqua frizzante fresca, grazie.',
        en: 'I would prefer a fresh bottle of sparkling water, thank you.',
        userOptions: [
          { it: 'Preferirei una bottiglia d’acqua frizzante fresca, grazie.', en: 'I would prefer a fresh bottle of sparkling water, thank you.' },
          { it: 'Dammi qualsiasi cosa.', en: 'Give me whatever.' }
        ]
      }
    ]
  }
];

export const VERBS_CONJUGATION_DATA = [
  {
    verb: 'essere',
    meaning: {en: 'to be', it: 'essere', pt: 'ser / estar', es: 'ser / estar', fr: 'être', de: 'sein'},
    tenses: {
      presente: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
      passatoProssimo: ['sono stato/a', 'sei stato/a', 'è stato/a', 'siamo stati/e', 'siete stati/e', 'sono stati/e'],
      imperfetto: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'],
      futuro: ['sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno'],
      condizionale: ['sarei', 'saresti', 'sarebbe', 'saremmo', 'sareste', 'sarebbero'],
      congiuntivo: ['sia', 'sia', 'sia', 'siamo', 'siate', 'siano']
    }
  },
  {
    verb: 'avere',
    meaning: {en: 'to have', it: 'avere', pt: 'ter', es: 'tener', fr: 'avoir', de: 'haben'},
    tenses: {
      presente: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
      passatoProssimo: ['ho avuto', 'hai avuto', 'ha avuto', 'abbiamo avuto', 'avete avuto', 'hanno avuto'],
      imperfetto: ['avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano'],
      futuro: ['avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno'],
      condizionale: ['avrei', 'avresti', 'avrebbe', 'avremmo', 'avreste', 'avrebbero'],
      congiuntivo: ['abbia', 'abbia', 'abbia', 'abbiamo', 'abbiate', 'abbiano']
    }
  },
  {
    verb: 'parlare',
    meaning: {en: 'to speak', it: 'parlare', pt: 'falar', es: 'hablar', fr: 'parler', de: 'sprechen'},
    tenses: {
      presente: ['parlo', 'parli', 'parla', 'parliamo', 'parlate', 'parlano'],
      passatoProssimo: ['ho parlato', 'hai parlato', 'ha parlato', 'abbiamo parlato', 'avete parlato', 'hanno parlato'],
      imperfetto: ['parlavo', 'parlavi', 'parlava', 'parlavamo', 'parlavate', 'parlavano'],
      futuro: ['parlerò', 'parlerai', 'parlerà', 'parleremo', 'parlerete', 'parleranno'],
      condizionale: ['parlerei', 'parleresti', 'parlerebbe', 'parleremmo', 'parlereste', 'parlerebbero'],
      congiuntivo: ['parli', 'parli', 'parli', 'parliamo', 'parliate', 'parlino']
    }
  },
  {
    verb: 'andare',
    meaning: {en: 'to go', it: 'andare', pt: 'ir', es: 'ir', fr: 'aller', de: 'gehen'},
    tenses: {
      presente: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
      passatoProssimo: ['sono andato/a', 'sei andato/a', 'è andato/a', 'siamo andati/e', 'siete andati/e', 'sono andati/e'],
      imperfetto: ['andavo', 'andavi', 'andava', 'andavamo', 'andavate', 'andavano'],
      futuro: ['andrò', 'andrai', 'andrà', 'andremo', 'andrete', 'andranno'],
      condizionale: ['andrei', 'andresti', 'andrebbe', 'andremmo', 'andreste', 'andrebbero'],
      congiuntivo: ['vada', 'vada', 'vada', 'andiamo', 'andiate', 'vadano']
    }
  },,
];

const PRONOUNS = ['io', 'tu', 'lui / lei', 'noi', 'voi', 'loro'];

export const ItalianLab: React.FC<{ initialPhrase?: string }> = ({ initialPhrase }) => {
  const { state, addXP } = useGame();
  const { lang } = state;

  const [activeTab, setActiveTab] = useState<'studio' | 'dialogue' | 'verbs'>('studio');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1' | 'A2' | 'B1'>('ALL');
  const [selectedGrammarTopic, setSelectedGrammarTopic] = useState('ALL');

  // Studio State
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [activeRate, setActiveRate] = useState<number | null>(null);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [speechTranscript, setSpeechTranscript] = useState<string>('');
  const [manualInput, setManualInput] = useState<string>('');
  const [pronunciationResult, setPronunciationResult] = useState<PronunciationScoreResult | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.9);
  const [audioError, setAudioError] = useState<ItalianLabAudioError | null>(null);

  const speechControllerRef = useRef<SpeechRecognitionController | null>(null);
  // Identifies the utterance currently loaded in the speech synth, so a second
  // click on the same Listen button pauses/resumes instead of restarting.
  const currentUtteranceRef = useRef<string | null>(null);

  // Dialogue State
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState<number>(0);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(0);
  const [dialogueHistory, setDialogueHistory] = useState<DialogueTurn[]>([]);
  const [dialogueDone, setDialogueDone] = useState<boolean>(false);

  // Verb Machine State
  const [selectedVerbIdx, setSelectedVerbIdx] = useState<number>(0);
  const [selectedTense, setSelectedTense] = useState<'presente' | 'passatoProssimo' | 'imperfetto' | 'futuro' | 'condizionale' | 'congiuntivo'>('presente');

  const filteredPhrases = ITALIAN_PRACTICE_PHRASES.filter(phrase =>
    (selectedLevel === 'ALL' || phrase.level === selectedLevel) &&
    (selectedGrammarTopic === 'ALL' || phrase.grammarTopicId === selectedGrammarTopic)
  );

  const activePhrase = filteredPhrases[currentPhraseIndex] || filteredPhrases[0] || ITALIAN_PRACTICE_PHRASES[0];
  const activeGrammarTopic = ITALIAN_GRAMMAR_TOPICS.find(topic => topic.id === activePhrase.grammarTopicId);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
      speechControllerRef.current?.abort();
    };
  }, []);

  // Listen to initialPhrase if provided
  useEffect(() => {
    if (initialPhrase) {
      const idx = filteredPhrases.findIndex(p => p.targetIt.toLowerCase() === initialPhrase.toLowerCase());
      if (idx >= 0) setCurrentPhraseIndex(idx);
    }
  }, [initialPhrase, filteredPhrases]);

  // Handle Playback — a repeat click on the same button pauses, then resumes
  // from the same spot (instead of restarting the phrase).
  const handlePlayAudio = (text: string, rate: number = playbackSpeed) => {
    const key = `${rate}|${text}`;
    if (isCurrentlySpeaking() && currentUtteranceRef.current === key) {
      if (isSpeakingPaused()) {
        resumeSpeaking();
        setIsPaused(false);
      } else {
        pauseSpeaking();
        setIsPaused(true);
      }
      return;
    }

    // Fresh start (new phrase, new speed, or nothing playing).
    setAudioError(null);
    currentUtteranceRef.current = key;
    setActiveRate(rate);
    setIsPaused(false);
    setIsSpeaking(true);
    speakItalian(text, {
      rate,
      onStart: () => setIsSpeaking(true),
      onEnd: () => {
        setIsSpeaking(false);
        setIsPaused(false);
        setActiveRate(null);
        currentUtteranceRef.current = null;
      },
      onError: (err) => {
        setIsSpeaking(false);
        setIsPaused(false);
        setActiveRate(null);
        currentUtteranceRef.current = null;
        setAudioError(err === 'SpeechSynthesis not supported' ? 'speech-playback-unsupported' : 'speech-playback-failed');
      }
    });
  };

  // Handle Speech Recording
  const handleToggleRecording = () => {
    if (isListening) {
      speechControllerRef.current?.stop();
      setIsListening(false);
      return;
    }

    if (!isSpeechRecognitionSupported()) {
      setAudioError('speech-recognition-unsupported');
      return;
    }

    setAudioError(null);
    setSpeechTranscript('');
    setPronunciationResult(null);
    setIsListening(true);

    speechControllerRef.current = listenItalian({
      onResult: (transcript, isFinal) => {
        setSpeechTranscript(transcript);
        if (isFinal) {
          setIsListening(false);
          const result = scorePronunciation(transcript, activePhrase.targetIt);
          setPronunciationResult(result);
          if (result.passed) {
            addXP(15);
          }
        }
      },
      onError: (err) => {
        setIsListening(false);
        setAudioError(recognitionErrorKey(err));
      },
      onEnd: () => {
        setIsListening(false);
      }
    });
  };

  // Evaluate Manual text submission fallback
  const handleEvaluateManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualInput.trim()) return;
    const result = scorePronunciation(manualInput, activePhrase.targetIt);
    setPronunciationResult(result);
    setSpeechTranscript(manualInput);
    if (result.passed) {
      addXP(10);
    }
  };

  // Dialogue Handling
  const scenario = DIALOGUE_SCENARIOS[currentScenarioIndex];

  const handleSelectDialogueOption = (option: { it: string; en: string }) => {
    const userTurn: DialogueTurn = {
      speaker: 'user',
      name: 'You',
      avatar: '🧑‍🎓',
      it: option.it,
      en: option.en
    };

    const nextHistory = [...dialogueHistory, userTurn];
    setDialogueHistory(nextHistory);

    // Play user line
    handlePlayAudio(option.it, 1.0);

    const nextIdx = currentTurnIndex + 1;
    if (nextIdx < scenario.turns.length) {
      const nextTurn = scenario.turns[nextIdx];
      setCurrentTurnIndex(nextIdx);
      setTimeout(() => {
        setDialogueHistory(prev => [...prev, nextTurn]);
        handlePlayAudio(nextTurn.it, 1.0);
        if (nextIdx + 1 >= scenario.turns.length) {
          setDialogueDone(true);
          addXP(25);
        }
      }, 1200);
    } else {
      setDialogueDone(true);
      addXP(25);
    }
  };

  const handleResetDialogue = () => {
    setDialogueHistory([scenario.turns[0]]);
    setCurrentTurnIndex(0);
    setDialogueDone(false);
    handlePlayAudio(scenario.turns[0].it, 1.0);
  };

  return (
    <div className="card" style={{ padding: '1.25rem', margin: '1rem 0' }}>
      {/* Header & Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--sakura)', fontWeight: 'bold' }}>
            {L({en: 'ITALIAN LANGUAGE & SPEECH STUDIO', it: 'STUDIO DI LINGUA E PRONUNCIA ITALIANA', pt: 'ESTÚDIO DE LÍNGUA E FALA ITALIANA', es: 'ESTUDIO DE LENGUA Y HABLA ITALIANA', fr: 'STUDIO DE LANGUE ET D’EXPRESSION ITALIENNE', de: 'STUDIO FÜR ITALIENISCHE SPRACHE UND AUSSPRACHE'}, lang)}
          </div>
          <h2 style={{ margin: '0.25rem 0 0', fontSize: '1.4rem' }}>
            {activeTab === 'studio' && L({en: 'Pronunciation & Listening Studio (A1–B1)', it: 'Laboratorio di Ascolto e Pronuncia (A1–B1)', pt: 'Estúdio de pronúncia e escuta (A1–B1)', es: 'Estudio de pronunciación y escucha (A1–B1)', fr: 'Studio de prononciation et d’écoute (A1–B1)', de: 'Aussprache- und Hörstudio (A1–B1)'}, lang)}
            {activeTab === 'dialogue' && L({en: 'Interactive Dialogue Simulator', it: 'Simulatore di Dialogo Interattivo', pt: 'Simulador de diálogos interativo', es: 'Simulador de diálogos interactivo', fr: 'Simulateur de dialogue interactif', de: 'Interaktiver Dialogsimulator'}, lang)}
            {activeTab === 'verbs' && L({en: 'Verb Conjugation Engine', it: 'Macchina di Coniugazione Verbale', pt: 'Conjugador de verbos', es: 'Conjugador de verbos', fr: 'Conjugueur de verbes', de: 'Konjugationstrainer'}, lang)}
          </h2>
        </div>

        {/* Studio Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            className={`btn ${activeTab === 'studio' ? 'primary' : ''}`}
            onClick={() => setActiveTab('studio')}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          >
            🎙️ {L({en: 'Pronunciation', it: 'Pronuncia', pt: 'Pronúncia', es: 'Pronunciación', fr: 'Prononciation', de: 'Aussprache'}, lang)}
          </button>
          <button
            className={`btn ${activeTab === 'dialogue' ? 'primary' : ''}`}
            onClick={() => {
              setActiveTab('dialogue');
              if (dialogueHistory.length === 0) {
                setDialogueHistory([scenario.turns[0]]);
              }
            }}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          >
            💬 {L({en: 'Role-play Dialogue', it: 'Dialogo', pt: 'Diálogo de simulação', es: 'Diálogo de rol', fr: 'Jeu de rôle', de: 'Rollenspiel-Dialog'}, lang)}
          </button>
          <button
            className={`btn ${activeTab === 'verbs' ? 'primary' : ''}`}
            onClick={() => setActiveTab('verbs')}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          >
            ⚙️ {L({en: 'Verbs', it: 'Verbi', pt: 'Verbos', es: 'Verbos', fr: 'Verbes', de: 'Verben'}, lang)}
          </button>
        </div>
      </div>

      {audioError && (
        <div className="italian-lab-audio-error" role="alert" aria-live="polite" style={{ padding: '0.75rem 1rem', background: 'rgba(255, 93, 143, 0.15)', borderLeft: '3px solid var(--sakura)', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.85rem' }}>
          ⚠️ {L(
            audioError === 'speech-recognition-unsupported'
              ? {en: 'Speech recognition is not supported in this browser. Please use the text input below to practice!', it: 'Il riconoscimento vocale non è supportato in questo browser. Usa il campo di testo qui sotto per esercitarti!', pt: 'O reconhecimento de voz não é suportado neste navegador. Use o campo de texto abaixo para praticar!', es: 'El reconocimiento de voz no es compatible con este navegador. ¡Usa el campo de texto de abajo para practicar!', fr: 'La reconnaissance vocale n’est pas prise en charge par ce navigateur. Utilise le champ de texte ci-dessous pour t’entraîner !', de: 'Spracherkennung wird in diesem Browser nicht unterstützt. Nutze zum Üben das Textfeld unten!'}
              : audioError === 'speech-recognition-timeout'
                ? {en: 'Listening timed out. Please try again.', it: 'Il tempo di ascolto è scaduto. Riprova.', pt: 'O tempo de escuta esgotou. Tente de novo.', es: 'Se agotó el tiempo de escucha. Inténtalo de nuevo.', fr: 'Le temps d’écoute est écoulé. Réessaie.', de: 'Zeit zum Zuhören abgelaufen. Bitte versuche es erneut.'}
                : audioError === 'speech-recognition-permission'
                  ? {en: 'Microphone access was denied. Check your browser permissions and try again.', it: 'L’accesso al microfono è stato negato. Controlla i permessi del browser e riprova.', pt: 'O acesso ao microfone foi negado. Verifique as permissões do navegador e tente de novo.', es: 'Se denegó el acceso al micrófono. Revisa los permisos del navegador e inténtalo de nuevo.', fr: 'L’accès au micro a été refusé. Vérifie les autorisations du navigateur et réessaie.', de: 'Der Mikrofonzugriff wurde verweigert. Prüfe die Browserberechtigungen und versuche es erneut.'}
                  : audioError === 'speech-recognition-network'
                    ? {en: 'A network error interrupted speech recognition. Check your connection and try again.', it: 'Un errore di rete ha interrotto il riconoscimento vocale. Controlla la connessione e riprova.', pt: 'Um erro de rede interrompeu o reconhecimento de voz. Verifique a conexão e tente de novo.', es: 'Un error de red interrumpió el reconocimiento de voz. Revisa tu conexión e inténtalo de nuevo.', fr: 'Une erreur réseau a interrompu la reconnaissance vocale. Vérifie ta connexion et réessaie.', de: 'Ein Netzwerkfehler hat die Spracherkennung unterbrochen. Prüfe deine Verbindung und versuche es erneut.'}
                    : audioError === 'speech-playback-unsupported'
                      ? {en: 'Audio playback is not supported in this browser.', it: 'La riproduzione audio non è supportata in questo browser.', pt: 'A reprodução de áudio não é suportada neste navegador.', es: 'La reproducción de audio no es compatible con este navegador.', fr: 'La lecture audio n’est pas prise en charge par ce navigateur.', de: 'Die Audiowiedergabe wird in diesem Browser nicht unterstützt.'}
                      : audioError === 'speech-playback-failed'
                        ? {en: 'Audio playback failed in this browser. Please try again.', it: 'La riproduzione audio non è riuscita in questo browser. Riprova.', pt: 'A reprodução de áudio falhou neste navegador. Tente de novo.', es: 'La reproducción de audio falló en este navegador. Inténtalo de nuevo.', fr: 'La lecture audio a échoué dans ce navigateur. Réessaie.', de: 'Die Audiowiedergabe ist in diesem Browser fehlgeschlagen. Bitte versuche es erneut.'}
                        : {en: 'Speech recognition failed. Check your microphone settings and try again.', it: 'Il riconoscimento vocale non è riuscito. Controlla le impostazioni del microfono e riprova.', pt: 'O reconhecimento de voz falhou. Verifique as configurações do microfone e tente de novo.', es: 'El reconocimiento de voz falló. Revisa la configuración del micrófono e inténtalo de nuevo.', fr: 'La reconnaissance vocale a échoué. Vérifie les réglages du micro et réessaie.', de: 'Die Spracherkennung ist fehlgeschlagen. Prüfe deine Mikrofoneinstellungen und versuche es erneut.'},
            lang
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: PRONUNCIATION STUDIO                                               */}
      {/* ========================================================================= */}
      {activeTab === 'studio' && (
        <div>
          {/* Level Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--sub)' }}>{L({en: 'Level Filter:', it: 'Filtra Livello:', pt: 'Filtrar nível:', es: 'Filtrar nivel:', fr: 'Filtrer par niveau :', de: 'Niveau filtern:'}, lang)}</span>
            {(['ALL', 'A1', 'A2', 'B1'] as const).map(lvl => (
              <button
                key={lvl}
                className={`pill-btn ${selectedLevel === lvl ? 'active' : ''}`}
                onClick={() => {
                  setSelectedLevel(lvl);
                  setCurrentPhraseIndex(0);
                  setPronunciationResult(null);
                  setSpeechTranscript('');
                }}
                style={{
                  padding: '0.2rem 0.6rem',
                  fontSize: '0.8rem',
                  borderRadius: '12px',
                  border: selectedLevel === lvl ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: selectedLevel === lvl ? 'rgba(106, 209, 255, 0.2)' : 'transparent',
                  color: selectedLevel === lvl ? 'var(--accent)' : 'var(--fg)',
                  cursor: 'pointer'
                }}
              >
                {lvl === 'ALL' ? L({en: 'All Levels', it: 'Tutti i livelli', pt: 'Todos os níveis', es: 'Todos los niveles', fr: 'Tous les niveaux', de: 'Alle Niveaus'}, lang) : lvl}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <label htmlFor="italian-grammar-topic-filter" style={{ fontSize: '0.85rem', color: 'var(--sub)' }}>
              {L({en: 'Grammar topic:', it: 'Argomento grammaticale:', pt: 'Tema gramatical:', es: 'Tema gramatical:', fr: 'Thème de grammaire :', de: 'Grammatikthema:'}, lang)}
            </label>
            <select
              id="italian-grammar-topic-filter"
              value={selectedGrammarTopic}
              onChange={event => {
                setSelectedGrammarTopic(event.target.value);
                setCurrentPhraseIndex(0);
                setPronunciationResult(null);
                setSpeechTranscript('');
                setManualInput('');
              }}
              style={{ minWidth: 220, padding: '0.45rem 0.65rem', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--panel-bg, #182033)', color: 'var(--fg)' }}
            >
              <option value="ALL">{L({en: 'All grammar topics', it: 'Tutti gli argomenti', pt: 'Todos os temas gramaticais', es: 'Todos los temas gramaticales', fr: 'Tous les thèmes de grammaire', de: 'Alle Grammatikthemen'}, lang)}</option>
              {ITALIAN_GRAMMAR_TOPICS.map(topic => (
                <option key={topic.id} value={topic.id}>{L(topic.title, lang)}</option>
              ))}
            </select>
          </div>

          {/* Main Card */}
          <div
            style={{
              background: 'var(--panel-bg, rgba(255, 255, 255, 0.04))',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.25rem',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  background: activePhrase.level === 'A1' ? '#009246' : activePhrase.level === 'A2' ? '#ffd166' : '#ce2b37',
                  color: activePhrase.level === 'A2' ? '#000' : '#fff'
                }}
              >
                CEFR {activePhrase.level}
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--sub)' }}>
                {currentPhraseIndex + 1} / {filteredPhrases.length}
              </span>
            </div>

            {/* Target Phrase & Phonetics */}
            <div style={{ margin: '0.75rem 0' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--fg)', letterSpacing: '0.01em' }}>
                {activePhrase.targetIt}
              </div>
              <div style={{ fontSize: '0.95rem', color: 'var(--sub)', marginTop: '0.25rem' }}>
                {L(activePhrase.translation, lang)}
              </div>
              {activePhrase.phoneticHint && (
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '0.35rem', fontStyle: 'italic' }}>
                  🗣️ {L({ en: 'Pronunciation guide:', it: 'Guida alla pronuncia:', pt: 'Guia de pronúncia:', es: 'Guía de pronunciación:', fr: 'Guide de prononciation :', de: 'Aussprachehilfe:' }, lang)} {activePhrase.phoneticHint}
                </div>
              )}
              {activePhrase.grammarTopicId && activePhrase.notes && (
                <div style={{ marginTop: '0.65rem', padding: '0.65rem 0.8rem', borderRadius: 7, background: 'rgba(0,146,70,.08)', border: '1px solid rgba(0,146,70,.22)' }}>
                  <strong style={{ fontSize: '0.78rem', color: '#4ade80' }}>
                    {L({en: 'Grammar focus', it: 'Focus grammaticale', pt: 'Foco gramatical', es: 'Enfoque gramatical', fr: 'Point de grammaire', de: 'Grammatikschwerpunkt'}, lang)}
                    {activeGrammarTopic ? ' · ' + L(activeGrammarTopic.title, lang) : ''}
                  </strong>
                  <div style={{ fontSize: '0.85rem', marginTop: 4, lineHeight: 1.45 }}>{L(activePhrase.notes, lang)}</div>
                </div>
              )}
            </div>

            {/* Audio Controls */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem' }}>
              {/* Normal Speed Listen — toggles Listen → Pause → Resume */}
              <button
                className="btn"
                onClick={() => handlePlayAudio(activePhrase.targetIt, 1.0)}
                aria-label={activeRate === 1.0 && isSpeaking ? (isPaused ? L({en: 'Resume', it: 'Riprendi', pt: 'Retomar', es: 'Reanudar', fr: 'Reprendre', de: 'Fortsetzen'}, lang) : L({en: 'Pause', it: 'Pausa', pt: 'Pausar', es: 'Pausar', fr: 'Pause', de: 'Pause'}, lang)) : L({en: 'Listen at normal speed', it: 'Ascolta a velocità normale', pt: 'Ouvir em velocidade normal', es: 'Escuchar a velocidad normal', fr: 'Écouter à vitesse normale', de: 'In normaler Geschwindigkeit anhören'}, lang)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                {activeRate === 1.0 && isSpeaking
                  ? (isPaused ? `▶️ ${L({en: 'Resume', it: 'Riprendi', pt: 'Retomar', es: 'Reanudar', fr: 'Reprendre', de: 'Fortsetzen'}, lang)}` : `⏸️ ${L({en: 'Pause', it: 'Pausa', pt: 'Pausar', es: 'Pausar', fr: 'Pause', de: 'Pause'}, lang)}`)
                  : `🔊 ${L({en: 'Listen (1.0x)', it: 'Ascolta (1.0x)', pt: 'Ouvir (1.0x)', es: 'Escuchar (1.0x)', fr: 'Écouter (1.0x)', de: 'Anhören (1.0x)'}, lang)}`}
              </button>

              {/* Slow Speed Listen — toggles Slow → Pause → Resume */}
              <button
                className="btn"
                onClick={() => handlePlayAudio(activePhrase.targetIt, 0.75)}
                aria-label={activeRate === 0.75 && isSpeaking ? (isPaused ? L({en: 'Resume', it: 'Riprendi', pt: 'Retomar', es: 'Reanudar', fr: 'Reprendre', de: 'Fortsetzen'}, lang) : L({en: 'Pause', it: 'Pausa', pt: 'Pausar', es: 'Pausar', fr: 'Pause', de: 'Pause'}, lang)) : L({en: 'Listen slowly', it: 'Ascolta lentamente', pt: 'Ouvir devagar', es: 'Escuchar despacio', fr: 'Écouter lentement', de: 'Langsam anhören'}, lang)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                {activeRate === 0.75 && isSpeaking
                  ? (isPaused ? `▶️ ${L({en: 'Resume', it: 'Riprendi', pt: 'Retomar', es: 'Reanudar', fr: 'Reprendre', de: 'Fortsetzen'}, lang)}` : `⏸️ ${L({en: 'Pause', it: 'Pausa', pt: 'Pausar', es: 'Pausar', fr: 'Pause', de: 'Pause'}, lang)}`)
                  : `🐢 ${L({en: 'Slow (0.75x)', it: 'Lento (0.75x)', pt: 'Lento (0.75x)', es: 'Lento (0.75x)', fr: 'Lent (0.75x)', de: 'Langsam (0.75x)'}, lang)}`}
              </button>

              {/* Record Speech Button */}
              <button
                className={`btn ${isListening ? 'danger' : 'primary'}`}
                onClick={handleToggleRecording}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 1rem',
                  fontSize: '0.85rem',
                  background: isListening ? '#ce2b37' : 'var(--accent)',
                  color: '#fff',
                  boxShadow: isListening ? '0 0 12px #ce2b37' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {isListening ? (
                  <>🛑 {L({en: 'Stop Recording', it: 'Ferma Registrazione', pt: 'Parar gravação', es: 'Detener grabación', fr: 'Arrêter l’enregistrement', de: 'Aufnahme beenden'}, lang)}</>
                ) : (
                  <>🎙️ {L({en: 'Speak Now (Italian)', it: 'Parla Ora (Italiano)', pt: 'Fale agora (italiano)', es: 'Habla ahora (italiano)', fr: 'Parle maintenant (italien)', de: 'Jetzt sprechen (Italienisch)'}, lang)}</>
                )}
              </button>

              {/* Navigation buttons */}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.4rem' }}>
                <button
                  className="btn"
                  onClick={() => {
                    setCurrentPhraseIndex(p => Math.max(0, p - 1));
                    setPronunciationResult(null);
                    setSpeechTranscript('');
                  }}
                  disabled={currentPhraseIndex === 0}
                  style={{ padding: '0.3rem 0.7rem' }}
                >
                  ◀
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    setCurrentPhraseIndex(p => Math.min(filteredPhrases.length - 1, p + 1));
                    setPronunciationResult(null);
                    setSpeechTranscript('');
                  }}
                  disabled={currentPhraseIndex >= filteredPhrases.length - 1}
                  style={{ padding: '0.3rem 0.7rem' }}
                >
                  ▶
                </button>
              </div>
            </div>

            {/* Listening Indicator / Waveform */}
            {isListening && (
              <div
                style={{
                  marginTop: '0.75rem',
                  padding: '0.6rem 1rem',
                  background: 'rgba(206, 43, 55, 0.1)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  border: '1px dashed #ce2b37'
                }}
              >
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ce2b37', animation: 'pulse 1s infinite' }} />
                <span style={{ fontSize: '0.85rem', color: '#ff8a9b' }}>
                  {L({en: 'Listening in Italian... Say:', it: 'In ascolto... Pronuncia:', pt: 'Ouvindo em italiano... Diga:', es: 'Escuchando en italiano... Di:', fr: 'Écoute en italien... Dis :', de: 'Höre auf Italienisch zu... Sag:'}, lang)} <i>"{activePhrase.targetIt}"</i>
                </span>
              </div>
            )}

            {/* Live Transcript Display */}
            {speechTranscript && (
              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--sub)' }}>
                <strong>{L({en: 'You said:', it: 'Hai detto:', pt: 'Você disse:', es: 'Has dicho:', fr: 'Tu as dit :', de: 'Du hast gesagt:'}, lang)}</strong> "{speechTranscript}"
              </div>
            )}

            {/* Pronunciation Feedback Panel */}
            {pronunciationResult && (
              <div
                style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: pronunciationResult.passed ? 'rgba(0, 146, 70, 0.1)' : 'rgba(255, 159, 69, 0.1)',
                  border: `1px solid ${pronunciationResult.passed ? '#009246' : '#ff9f45'}`,
                  borderRadius: '6px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>
                      {pronunciationResult.score >= 90 ? '🌟' : pronunciationResult.passed ? '✅' : '🔄'}
                    </span>
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                        {L(pronunciationResult.feedback, lang)}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--sub)' }}>
                        {L({en: 'Accuracy Score:', it: 'Punteggio Accuratezza:', pt: 'Precisão:', es: 'Precisión:', fr: 'Score de précision :', de: 'Genauigkeit:'}, lang)} <strong>{pronunciationResult.score}%</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Word Match Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
                  {pronunciationResult.words.map((w, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '0.2rem 0.5rem',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        background: w.matched ? 'rgba(0, 146, 70, 0.25)' : 'rgba(206, 43, 55, 0.25)',
                        border: `1px solid ${w.matched ? '#009246' : '#ce2b37'}`,
                        color: w.matched ? '#5cdb95' : '#ff8a9b'
                      }}
                      title={w.userWord ? `Heard: "${w.userWord}" (${w.score}%)` : undefined}
                    >
                      {w.word} {w.matched ? '✓' : '✗'}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback Text Input Form */}
            <form onSubmit={handleEvaluateManual} style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder={L({en: 'Type or paste Italian phrase to check...', it: 'Scrivi la frase in italiano per verificare...', pt: 'Digite ou cole uma frase em italiano para verificar...', es: 'Escribe o pega una frase en italiano para comprobarla...', fr: 'Tape ou colle une phrase italienne à vérifier...', de: 'Italienischen Satz eingeben oder einfügen, um ihn zu prüfen...'}, lang)}
                value={manualInput}
                onChange={e => setManualInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.4rem 0.75rem',
                  background: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  color: 'var(--fg)',
                  fontSize: '0.85rem'
                }}
              />
              <button type="submit" className="btn" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                {L({en: 'Check', it: 'Verifica', pt: 'Verificar', es: 'Comprobar', fr: 'Vérifier', de: 'Prüfen'}, lang)}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: INTERACTIVE ROLE-PLAY DIALOGUE                                     */}
      {/* ========================================================================= */}
      {activeTab === 'dialogue' && (
        <div>
          {/* Scenario Selector */}
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', overflowX: 'auto', paddingBottom: '0.25rem' }}>
            {DIALOGUE_SCENARIOS.map((s, idx) => (
              <button
                key={s.id}
                className={`btn ${currentScenarioIndex === idx ? 'primary' : ''}`}
                onClick={() => {
                  setCurrentScenarioIndex(idx);
                  setCurrentTurnIndex(0);
                  setDialogueHistory([s.turns[0]]);
                  setDialogueDone(false);
                  handlePlayAudio(s.turns[0].it, 1.0);
                }}
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}
              >
                [{s.level}] {L(s.title, lang)}
              </button>
            ))}
          </div>

          <div
            style={{
              background: 'var(--panel-bg, rgba(255, 255, 255, 0.04))',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '1.25rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.5rem' }}>
              <div>
                <strong style={{ fontSize: '1.05rem' }}>{L(scenario.title, lang)}</strong>
                <div style={{ fontSize: '0.8rem', color: 'var(--sub)' }}>📍 {L(scenario.location, lang)}</div>
              </div>
              <button className="btn" onClick={handleResetDialogue} style={{ padding: '0.3rem 0.6rem', fontSize: '0.75rem' }}>
                🔄 {L({en: 'Restart Conversation', it: 'Ricomincia', pt: 'Recomeçar conversa', es: 'Reiniciar conversación', fr: 'Recommencer la conversation', de: 'Gespräch neu starten'}, lang)}
              </button>
            </div>

            {/* Conversation Flow */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem' }}>
              {dialogueHistory.map((t, idx) => {
                const isUser = t.speaker === 'user';
                return (
                  <div
                    key={idx}
                    style={{
                      alignSelf: isUser ? 'flex-end' : 'flex-start',
                      maxWidth: '85%',
                      background: isUser ? 'rgba(106, 209, 255, 0.12)' : 'rgba(255, 255, 255, 0.06)',
                      border: `1px solid ${isUser ? 'rgba(106, 209, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
                      borderRadius: '8px',
                      padding: '0.6rem 0.85rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                      <span>{t.avatar}</span>
                      <strong style={{ fontSize: '0.8rem', color: isUser ? 'var(--accent)' : 'var(--gold)' }}>
                        {t.name}
                      </strong>
                      <button
                        onClick={() => handlePlayAudio(t.it, 1.0)}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', opacity: 0.8 }}
                        title="Replay audio"
                      >
                        🔊
                      </button>
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 500 }}>{t.it}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--sub)', marginTop: '0.15rem' }}>{glossFor(t.en, lang)}</div>
                  </div>
                );
              })}
            </div>

            {/* User Response Options */}
            {!dialogueDone && currentTurnIndex + 1 < scenario.turns.length && scenario.turns[currentTurnIndex + 1]?.userOptions && (
              <div style={{ marginTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent)' }}>
                  💬 {L({en: 'Choose your Italian response (listen and speak):', it: 'Scegli la tua risposta in italiano:', pt: 'Escolha a sua resposta em italiano (ouça e fale):', es: 'Elige tu respuesta en italiano (escucha y habla):', fr: 'Choisis ta réponse en italien (écoute et parle) :', de: 'Wähle deine italienische Antwort (hören und sprechen):'}, lang)}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {scenario.turns[currentTurnIndex + 1].userOptions?.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      className="btn"
                      onClick={() => handleSelectDialogueOption(opt)}
                      style={{
                        textAlign: 'left',
                        padding: '0.5rem 0.75rem',
                        fontSize: '0.85rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.15rem',
                        border: '1px solid rgba(106, 209, 255, 0.2)'
                      }}
                    >
                      <strong style={{ color: 'var(--fg)' }}>{opt.it}</strong>
                      <span style={{ fontSize: '0.75rem', color: 'var(--sub)' }}>{glossFor(opt.en, lang)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {dialogueDone && (
              <div
                style={{
                  marginTop: '1rem',
                  padding: '0.85rem',
                  background: 'rgba(0, 146, 70, 0.15)',
                  border: '1px solid #009246',
                  borderRadius: '6px',
                  textAlign: 'center'
                }}
              >
                🎉 <strong>{L({en: 'Dialogue completed successfully! (+25 XP)', it: 'Dialogo completato con successo! (+25 XP)', pt: 'Diálogo concluído com sucesso! (+25 XP)', es: '¡Diálogo completado con éxito! (+25 XP)', fr: 'Dialogue terminé avec succès ! (+25 XP)', de: 'Dialog erfolgreich abgeschlossen! (+25 XP)'}, lang)}</strong>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: VERB CONJUGATION MACHINE                                           */}
      {/* ========================================================================= */}
      {activeTab === 'verbs' && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
            {/* Verb Selector */}
            <div style={{ display: 'flex', gap: '0.3rem' }}>
              {VERBS_CONJUGATION_DATA.map((v, idx) => (
                <button
                  key={v.verb}
                  className={`btn ${selectedVerbIdx === idx ? 'primary' : ''}`}
                  onClick={() => setSelectedVerbIdx(idx)}
                  style={{ padding: '0.35rem 0.7rem', fontSize: '0.85rem' }}
                >
                  {v.verb.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Tense Selector */}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
              {(['presente', 'passatoProssimo', 'imperfetto', 'futuro', 'condizionale', 'congiuntivo'] as const).map(t => (
                <button
                  key={t}
                  className={`pill-btn ${selectedTense === t ? 'active' : ''}`}
                  onClick={() => setSelectedTense(t)}
                  style={{
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.75rem',
                    borderRadius: '4px',
                    border: selectedTense === t ? '1px solid var(--accent)' : '1px solid var(--border)',
                    background: selectedTense === t ? 'rgba(106, 209, 255, 0.2)' : 'transparent',
                    color: selectedTense === t ? 'var(--accent)' : 'var(--fg)',
                    cursor: 'pointer'
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Verb Grid */}
          {(() => {
            const verbData = VERBS_CONJUGATION_DATA[selectedVerbIdx];
            const forms = verbData.tenses[selectedTense];
            return (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.6rem'
                }}
              >
                {PRONOUNS.map((pronoun, pIdx) => {
                  const conjugated = forms[pIdx];
                  const fullPhrase = `${pronoun} ${conjugated}`;
                  return (
                    <div
                      key={pronoun}
                      style={{
                        background: 'var(--panel-bg, rgba(255, 255, 255, 0.04))',
                        border: '1px solid var(--border)',
                        borderRadius: '6px',
                        padding: '0.6rem 0.8rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--sub)' }}>{pronoun}</div>
                        <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--fg)' }}>{conjugated}</div>
                      </div>
                      <button
                        className="btn"
                        onClick={() => handlePlayAudio(fullPhrase, 1.0)}
                        style={{ padding: '0.3rem 0.5rem', fontSize: '0.8rem' }}
                        title="Listen to pronunciation"
                      >
                        🔊
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
