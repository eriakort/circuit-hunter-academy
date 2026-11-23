import { LocalizedText } from '../types';

/**
 * Interface strings for the Italian Grammar Training screen, localized into
 * every support language. English is the base and the universal fallback.
 *
 * Translations are first drafts and should get a native-speaker review pass
 * before being treated as authoritative.
 */
export const GRAMMAR_UI: Record<string, LocalizedText> = {
  eyebrow: { en: 'ITALIAN GRAMMAR TRAINING · CEFR A1–B1', it: 'ALLENAMENTO GRAMMATICA ITALIANA · QCER A1–B1', pt: 'TREINO DE GRAMÁTICA ITALIANA · QECR A1–B1', es: 'ENTRENAMIENTO DE GRAMÁTICA ITALIANA · MCER A1–B1', fr: 'ENTRAÎNEMENT DE GRAMMAIRE ITALIENNE · CECR A1–B1', de: 'ITALIENISCH-GRAMMATIKTRAINING · GER A1–B1' },
  heroTitle: { en: 'Build strong Italian foundations', it: 'Costruisci solide basi di italiano', pt: 'Construa bases sólidas de italiano', es: 'Construye bases sólidas de italiano', fr: 'Construis de solides bases d’italien', de: 'Lege ein starkes Italienisch-Fundament' },
  heroText: {
    en: 'Learn a rule, study an example, then practise it. Every topic has three progressive levels with explanations in English and Italian.',
    it: 'Impara una regola, osserva un esempio e poi mettiti alla prova. Ogni argomento ha tre livelli progressivi con spiegazioni in inglese e italiano.',
    pt: 'Aprenda uma regra, estude um exemplo e depois pratique. Cada tópico tem três níveis progressivos com explicações no seu idioma e em italiano.',
    es: 'Aprende una regla, estudia un ejemplo y luego practica. Cada tema tiene tres niveles progresivos con explicaciones en tu idioma y en italiano.',
    fr: 'Apprends une règle, étudie un exemple, puis entraîne-toi. Chaque sujet a trois niveaux progressifs avec des explications dans ta langue et en italien.',
    de: 'Lerne eine Regel, sieh dir ein Beispiel an und übe dann. Jedes Thema hat drei aufeinander aufbauende Stufen mit Erklärungen in deiner Sprache und auf Italienisch.'
  },
  speakingLab: { en: 'Speaking Lab', it: 'Laboratorio Parlato', pt: 'Laboratório de Conversação', es: 'Laboratorio de Conversación', fr: 'Labo d’Expression Orale', de: 'Sprechlabor' },
  listeningLab: { en: 'Listening Lab', it: 'Laboratorio di Ascolto', pt: 'Laboratório de Escuta', es: 'Laboratorio de Escucha', fr: 'Labo d’Écoute', de: 'Hörlabor' },
  subjectTests: { en: 'Italian subject tests', it: 'Test di italiano', pt: 'Testes de italiano', es: 'Pruebas de italiano', fr: 'Tests d’italien', de: 'Italienisch-Tests' },
  missions: { en: 'Missions', it: 'Missioni', pt: 'Missões', es: 'Misiones', fr: 'Missions', de: 'Missionen' },
  step1: { en: 'STEP 1 · CHOOSE A GRAMMAR TOPIC', it: 'PASSO 1 · SCEGLI UN ARGOMENTO', pt: 'PASSO 1 · ESCOLHA UM TÓPICO', es: 'PASO 1 · ELIGE UN TEMA', fr: 'ÉTAPE 1 · CHOISIS UN SUJET', de: 'SCHRITT 1 · THEMA WÄHLEN' },
  curriculum: { en: 'Your grammar curriculum', it: 'Il tuo programma di grammatica', pt: 'Seu programa de gramática', es: 'Tu programa de gramática', fr: 'Ton programme de grammaire', de: 'Dein Grammatik-Lehrplan' },
  mastered: { en: 'mastered', it: 'padroneggiati', pt: 'dominados', es: 'dominados', fr: 'maîtrisés', de: 'gemeistert' },
  startMixed: { en: 'Start adaptive mixed revision', it: 'Inizia il ripasso misto adattivo', pt: 'Iniciar revisão mista adaptativa', es: 'Iniciar repaso mixto adaptativo', fr: 'Lancer la révision mixte adaptative', de: 'Adaptive gemischte Wiederholung starten' },
  mixedHint: {
    en: 'Missed questions come first, followed by new and mastered questions.',
    it: 'Prima gli esercizi sbagliati, poi quelli nuovi e infine quelli già padroneggiati.',
    pt: 'As questões erradas vêm primeiro, seguidas das novas e das já dominadas.',
    es: 'Primero las preguntas falladas, luego las nuevas y por último las ya dominadas.',
    fr: 'Les questions ratées d’abord, puis les nouvelles et enfin celles déjà maîtrisées.',
    de: 'Zuerst die falsch beantworteten Fragen, dann die neuen und zuletzt die bereits gemeisterten.'
  },
  step2: { en: 'STEP 2 · SELECT YOUR LEVEL', it: 'PASSO 2 · SCEGLI IL LIVELLO', pt: 'PASSO 2 · ESCOLHA O NÍVEL', es: 'PASO 2 · ELIGE TU NIVEL', fr: 'ÉTAPE 2 · CHOISIS TON NIVEAU', de: 'SCHRITT 2 · NIVEAU WÄHLEN' },
  mixedAllTopics: { en: 'Mixed revision · all topics', it: 'Ripasso misto · tutti gli argomenti', pt: 'Revisão mista · todos os tópicos', es: 'Repaso mixto · todos los temas', fr: 'Révision mixte · tous les sujets', de: 'Gemischte Wiederholung · alle Themen' },
  adaptiveReview: { en: 'ADAPTIVE REVIEW', it: 'RIPASSO ADATTIVO', pt: 'REVISÃO ADAPTATIVA', es: 'REPASO ADAPTATIVO', fr: 'RÉVISION ADAPTATIVE', de: 'ADAPTIVE WIEDERHOLUNG' },
  reviewEvery: { en: 'Review every grammar topic in one session.', it: 'Ripassa tutti gli argomenti grammaticali in un’unica sessione.', pt: 'Revise todos os tópicos de gramática em uma única sessão.', es: 'Repasa todos los temas de gramática en una sola sesión.', fr: 'Révise tous les sujets de grammaire en une seule séance.', de: 'Wiederhole alle Grammatikthemen in einer Sitzung.' },
  reviewExplain: {
    en: 'The question order is personalised: previous mistakes first, then questions you have not mastered, followed by mastered questions for reinforcement.',
    it: 'L’ordine delle domande è personalizzato: prima gli errori precedenti, poi gli esercizi non ancora padroneggiati e infine quelli già completati per consolidare.',
    pt: 'A ordem das questões é personalizada: primeiro os erros anteriores, depois as questões ainda não dominadas e, por fim, as já dominadas para reforçar.',
    es: 'El orden de las preguntas es personalizado: primero los errores anteriores, luego las preguntas aún no dominadas y, por último, las ya dominadas para reforzar.',
    fr: 'L’ordre des questions est personnalisé : d’abord les erreurs précédentes, puis les questions non encore maîtrisées, et enfin celles déjà maîtrisées pour consolider.',
    de: 'Die Reihenfolge der Fragen ist personalisiert: zuerst frühere Fehler, dann noch nicht gemeisterte Fragen und zuletzt bereits gemeisterte zur Festigung.'
  },
  examples: { en: 'EXAMPLES · ESEMPI', it: 'ESEMPI · EXAMPLES', pt: 'EXEMPLOS · ESEMPI', es: 'EJEMPLOS · ESEMPI', fr: 'EXEMPLES · ESEMPI', de: 'BEISPIELE · ESEMPI' },
  masteredExercises: { en: 'Mastered exercises', it: 'Esercizi completati', pt: 'Exercícios dominados', es: 'Ejercicios dominados', fr: 'Exercices maîtrisés', de: 'Gemeisterte Übungen' },
  xpEarned: { en: 'grammar XP earned', it: 'XP di grammatica ottenuti', pt: 'XP de gramática ganhos', es: 'XP de gramática ganados', fr: 'XP de grammaire gagnés', de: 'Grammatik-XP erhalten' },
  step3: { en: 'STEP 3 · PRACTISE', it: 'PASSO 3 · ESERCITATI', pt: 'PASSO 3 · PRATIQUE', es: 'PASO 3 · PRACTICA', fr: 'ÉTAPE 3 · ENTRAÎNE-TOI', de: 'SCHRITT 3 · ÜBEN' },
  quickPractice: { en: 'Quick grammar practice', it: 'Esercizio di grammatica', pt: 'Exercício rápido de gramática', es: 'Ejercicio rápido de gramática', fr: 'Exercice rapide de grammaire', de: 'Schnelle Grammatikübung' },
  correct: { en: 'Correct! Ben fatto!', it: 'Corretto! Ben fatto!', pt: 'Correto! Muito bem!', es: '¡Correcto! ¡Bien hecho!', fr: 'Correct ! Bien joué !', de: 'Richtig! Gut gemacht!' },
  notQuiteRule: { en: 'Not quite — review the rule.', it: 'Non proprio — ripassa la regola.', pt: 'Quase — revise a regra.', es: 'Casi — repasa la regla.', fr: 'Pas tout à fait — révise la règle.', de: 'Nicht ganz — wiederhole die Regel.' },
  nextExercise: { en: 'Next exercise', it: 'Prossimo esercizio', pt: 'Próximo exercício', es: 'Siguiente ejercicio', fr: 'Exercice suivant', de: 'Nächste Übung' },
  step4: { en: 'STEP 4 · ACTIVE PRACTICE', it: 'PASSO 4 · ESERCIZI ATTIVI', pt: 'PASSO 4 · PRÁTICA ATIVA', es: 'PASO 4 · PRÁCTICA ACTIVA', fr: 'ÉTAPE 4 · PRATIQUE ACTIVE', de: 'SCHRITT 4 · AKTIVE ÜBUNG' },
  useYourself: { en: 'Use the grammar yourself', it: 'Usa la grammatica in prima persona', pt: 'Use a gramática você mesmo', es: 'Usa la gramática tú mismo', fr: 'Utilise la grammaire toi-même', de: 'Wende die Grammatik selbst an' },
  beyondMc: {
    en: 'Move beyond multiple choice: correct, build, translate and write complete sentences.',
    it: 'Vai oltre la scelta multipla: correggi, costruisci, traduci e scrivi frasi complete.',
    pt: 'Vá além da múltipla escolha: corrija, construa, traduza e escreva frases completas.',
    es: 'Ve más allá de la opción múltiple: corrige, construye, traduce y escribe frases completas.',
    fr: 'Va au-delà du choix multiple : corrige, construis, traduis et écris des phrases complètes.',
    de: 'Geh über Multiple-Choice hinaus: korrigiere, baue, übersetze und schreibe vollständige Sätze.'
  },
  practice: { en: 'PRACTICE', it: 'ESERCIZIO', pt: 'EXERCÍCIO', es: 'EJERCICIO', fr: 'EXERCICE', de: 'ÜBUNG' },
  nextPractice: { en: 'Next practice', it: 'Prossimo esercizio', pt: 'Próximo exercício', es: 'Siguiente ejercicio', fr: 'Exercice suivant', de: 'Nächste Übung' },
  sentenceHere: { en: 'Your sentence will appear here.', it: 'La tua frase apparirà qui.', pt: 'Sua frase aparecerá aqui.', es: 'Tu frase aparecerá aquí.', fr: 'Ta phrase apparaîtra ici.', de: 'Dein Satz erscheint hier.' },
  clearSentence: { en: 'Clear sentence', it: 'Cancella la frase', pt: 'Limpar frase', es: 'Borrar frase', fr: 'Effacer la phrase', de: 'Satz löschen' },
  writeAnswer: { en: 'Write your answer in Italian…', it: 'Scrivi la tua risposta in italiano…', pt: 'Escreva sua resposta em italiano…', es: 'Escribe tu respuesta en italiano…', fr: 'Écris ta réponse en italien…', de: 'Schreibe deine Antwort auf Italienisch…' },
  hint: { en: 'Hint', it: 'Suggerimento', pt: 'Dica', es: 'Pista', fr: 'Indice', de: 'Tipp' },
  checkAnswer: { en: 'Check my answer', it: 'Controlla la risposta', pt: 'Verificar resposta', es: 'Comprobar respuesta', fr: 'Vérifier ma réponse', de: 'Antwort prüfen' },
  selfReview: { en: 'Self-review: compare your sentence with the model.', it: 'Autovalutazione: confronta la tua frase con il modello.', pt: 'Autoavaliação: compare sua frase com o modelo.', es: 'Autoevaluación: compara tu frase con el modelo.', fr: 'Auto-évaluation : compare ta phrase au modèle.', de: 'Selbstkontrolle: Vergleiche deinen Satz mit dem Modell.' },
  notQuiteModel: { en: 'Not quite — compare with the model answer.', it: 'Non proprio — confronta con la risposta modello.', pt: 'Quase — compare com a resposta modelo.', es: 'Casi — compara con la respuesta modelo.', fr: 'Pas tout à fait — compare avec la réponse modèle.', de: 'Nicht ganz — vergleiche mit der Musterlösung.' },
  modelAnswer: { en: 'MODEL ANSWER', it: 'RISPOSTA MODELLO', pt: 'RESPOSTA MODELO', es: 'RESPUESTA MODELO', fr: 'RÉPONSE MODÈLE', de: 'MUSTERLÖSUNG' },
  markPractised: { en: 'I checked my sentence — mark as practised', it: 'Ho controllato la frase — segna come esercitata', pt: 'Verifiquei minha frase — marcar como praticada', es: 'Revisé mi frase — marcar como practicada', fr: 'J’ai vérifié ma phrase — marquer comme pratiquée', de: 'Satz geprüft — als geübt markieren' },
  writingDone: { en: 'Writing practice completed and added to your progress.', it: 'Esercizio di scrittura completato e aggiunto ai tuoi progressi.', pt: 'Exercício de escrita concluído e adicionado ao seu progresso.', es: 'Ejercicio de escritura completado y añadido a tu progreso.', fr: 'Exercice d’écriture terminé et ajouté à ta progression.', de: 'Schreibübung abgeschlossen und zu deinem Fortschritt hinzugefügt.' },
  tryAgain: { en: 'Try again', it: 'Riprova', pt: 'Tentar de novo', es: 'Inténtalo otra vez', fr: 'Réessayer', de: 'Nochmal versuchen' },
  actCorrect: { en: 'Correct', it: 'Correggi', pt: 'Corrigir', es: 'Corregir', fr: 'Corriger', de: 'Korrigieren' },
  actOrder: { en: 'Word order', it: 'Ordina', pt: 'Ordenar', es: 'Ordenar', fr: 'Ordonner', de: 'Anordnen' },
  actTranslate: { en: 'Translate', it: 'Traduci', pt: 'Traduzir', es: 'Traducir', fr: 'Traduire', de: 'Übersetzen' },
  actWrite: { en: 'Write', it: 'Scrivi', pt: 'Escrever', es: 'Escribir', fr: 'Écrire', de: 'Schreiben' }
};
