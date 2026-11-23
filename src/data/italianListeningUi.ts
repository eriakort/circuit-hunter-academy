import { LocalizedText } from '../types';

/**
 * Interface strings for the Italian Listening Lab, localized into every
 * support language. English is the base; a learner reading in Portuguese,
 * Spanish, French or German sees the whole screen in their language.
 *
 * Translations are first drafts and should get a native-speaker review pass
 * before being treated as authoritative.
 */
export const LISTEN_UI: Record<string, LocalizedText> = {
  eyebrow: { en: 'ITALIAN LISTENING LAB · CEFR A1–B1', it: 'LABORATORIO DI ASCOLTO · QCER A1–B1', pt: 'LABORATÓRIO DE ESCUTA · QECR A1–B1', es: 'LABORATORIO DE ESCUCHA · MCER A1–B1', fr: 'LABO D’ÉCOUTE · CECR A1–B1', de: 'HÖRLABOR · GER A1–B1' },
  title: { en: 'Train your ear with real stories', it: 'Allena l’orecchio con storie reali', pt: 'Treine o ouvido com histórias reais', es: 'Entrena el oído con historias reales', fr: 'Exercez votre oreille avec de vraies histoires', de: 'Trainiere dein Ohr mit echten Geschichten' },
  subtitle: {
    en: 'Listen to a short Italian passage at a speed you choose, then answer comprehension questions. Replay as many times as you like, and reveal the transcript only when you are ready.',
    it: 'Ascolta un breve brano in italiano alla velocità che preferisci, poi rispondi alle domande di comprensione. Riascolta quante volte vuoi e scopri la trascrizione solo quando sei pronto.',
    pt: 'Ouça um breve texto em italiano na velocidade que preferir e depois responda às perguntas de compreensão. Repita quantas vezes quiser e revele a transcrição só quando estiver pronto.',
    es: 'Escucha un breve texto en italiano a la velocidad que prefieras y luego responde a las preguntas de comprensión. Repite las veces que quieras y revela la transcripción solo cuando estés listo.',
    fr: 'Écoutez un court texte en italien à la vitesse de votre choix, puis répondez aux questions de compréhension. Réécoutez autant que vous voulez et affichez la transcription seulement quand vous êtes prêt.',
    de: 'Höre einen kurzen italienischen Text in der von dir gewählten Geschwindigkeit und beantworte dann Verständnisfragen. Wiederhole so oft du willst und zeige die Transkription erst, wenn du bereit bist.'
  },
  grammarTraining: { en: 'Grammar Training', it: 'Allenamento Grammaticale', pt: 'Treino de Gramática', es: 'Entrenamiento de Gramática', fr: 'Entraînement de Grammaire', de: 'Grammatiktraining' },
  speakingLab: { en: 'Speaking Lab', it: 'Laboratorio Parlato', pt: 'Laboratório de Conversação', es: 'Laboratorio de Conversación', fr: 'Labo d’Expression Orale', de: 'Sprechlabor' },
  missions: { en: 'Missions', it: 'Missioni', pt: 'Missões', es: 'Misiones', fr: 'Missions', de: 'Missionen' },
  unsupported: {
    en: 'Your browser does not support audio playback. You can still read each passage and answer the questions using the transcript.',
    it: 'Il tuo browser non supporta la riproduzione audio. Puoi comunque leggere i brani e rispondere usando la trascrizione.',
    pt: 'Seu navegador não suporta a reprodução de áudio. Você ainda pode ler cada texto e responder às perguntas usando a transcrição.',
    es: 'Tu navegador no admite la reproducción de audio. Aún puedes leer cada texto y responder a las preguntas con la transcripción.',
    fr: 'Votre navigateur ne prend pas en charge la lecture audio. Vous pouvez quand même lire chaque texte et répondre aux questions à l’aide de la transcription.',
    de: 'Dein Browser unterstützt keine Audiowiedergabe. Du kannst die Texte trotzdem lesen und die Fragen mithilfe der Transkription beantworten.'
  },
  step1: { en: 'STEP 1 · CHOOSE LEVEL & THEME', it: 'PASSO 1 · SCEGLI LIVELLO E TEMA', pt: 'PASSO 1 · ESCOLHA NÍVEL E TEMA', es: 'PASO 1 · ELIGE NIVEL Y TEMA', fr: 'ÉTAPE 1 · CHOISIS NIVEAU ET THÈME', de: 'SCHRITT 1 · NIVEAU & THEMA WÄHLEN' },
  pickPassage: { en: 'Pick a passage', it: 'Scegli un brano', pt: 'Escolha um texto', es: 'Elige un texto', fr: 'Choisis un texte', de: 'Wähle einen Text' },
  step2: { en: 'STEP 2 · LISTEN', it: 'PASSO 2 · ASCOLTA', pt: 'PASSO 2 · OUÇA', es: 'PASO 2 · ESCUCHA', fr: 'ÉTAPE 2 · ÉCOUTE', de: 'SCHRITT 2 · HÖREN' },
  playbackSpeed: { en: 'PLAYBACK SPEED', it: 'VELOCITÀ DI ASCOLTO', pt: 'VELOCIDADE DE REPRODUÇÃO', es: 'VELOCIDAD DE REPRODUCCIÓN', fr: 'VITESSE DE LECTURE', de: 'ABSPIELGESCHWINDIGKEIT' },
  play: { en: 'Play', it: 'Ascolta', pt: 'Ouvir', es: 'Escuchar', fr: 'Écouter', de: 'Abspielen' },
  pause: { en: 'Pause', it: 'Pausa', pt: 'Pausar', es: 'Pausar', fr: 'Pause', de: 'Pause' },
  resume: { en: 'Resume', it: 'Riprendi', pt: 'Retomar', es: 'Reanudar', fr: 'Reprendre', de: 'Fortsetzen' },
  stop: { en: 'Stop', it: 'Ferma', pt: 'Parar', es: 'Detener', fr: 'Arrêter', de: 'Stopp' },
  replay: { en: 'Replay', it: 'Riascolta', pt: 'Repetir', es: 'Repetir', fr: 'Réécouter', de: 'Erneut hören' },
  speedVerySlow: { en: '0.6× Very slow', it: '0,6× Molto lento', pt: '0,6× Muito lento', es: '0,6× Muy lento', fr: '0,6× Très lent', de: '0,6× Sehr langsam' },
  speedSlow: { en: '0.75× Slow', it: '0,75× Lento', pt: '0,75× Lento', es: '0,75× Lento', fr: '0,75× Lent', de: '0,75× Langsam' },
  speedNormal: { en: '0.9× Normal', it: '0,9× Normale', pt: '0,9× Normal', es: '0,9× Normal', fr: '0,9× Normal', de: '0,9× Normal' },
  speedNatural: { en: '1.0× Natural', it: '1,0× Naturale', pt: '1,0× Natural', es: '1,0× Natural', fr: '1,0× Naturel', de: '1,0× Natürlich' },
  keyWords: { en: 'KEY WORDS', it: 'PAROLE CHIAVE', pt: 'PALAVRAS-CHAVE', es: 'PALABRAS CLAVE', fr: 'MOTS CLÉS', de: 'SCHLÜSSELWÖRTER' },
  showTranscript: { en: 'Show transcript', it: 'Mostra la trascrizione', pt: 'Mostrar transcrição', es: 'Mostrar transcripción', fr: 'Afficher la transcription', de: 'Transkription anzeigen' },
  hideTranscript: { en: 'Hide transcript', it: 'Nascondi la trascrizione', pt: 'Ocultar transcrição', es: 'Ocultar transcripción', fr: 'Masquer la transcription', de: 'Transkription ausblenden' },
  step3: { en: 'STEP 3 · COMPREHENSION', it: 'PASSO 3 · COMPRENSIONE', pt: 'PASSO 3 · COMPREENSÃO', es: 'PASO 3 · COMPRENSIÓN', fr: 'ÉTAPE 3 · COMPRÉHENSION', de: 'SCHRITT 3 · VERSTÄNDNIS' },
  answerQuestions: { en: 'Answer the questions', it: 'Rispondi alle domande', pt: 'Responda às perguntas', es: 'Responde a las preguntas', fr: 'Réponds aux questions', de: 'Beantworte die Fragen' },
  correct: { en: 'Correct! Ben fatto!', it: 'Corretto! Ben fatto!', pt: 'Correto! Muito bem!', es: '¡Correcto! ¡Bien hecho!', fr: 'Correct ! Bien joué !', de: 'Richtig! Gut gemacht!' },
  notQuite: { en: 'Not quite — listen again.', it: 'Non proprio — riascolta.', pt: 'Quase — ouça de novo.', es: 'Casi — escucha otra vez.', fr: 'Pas tout à fait — réécoute.', de: 'Nicht ganz — hör noch mal.' },
  perfect: { en: 'Perfect listening! 🏆', it: 'Ascolto perfetto! 🏆', pt: 'Compreensão perfeita! 🏆', es: '¡Comprensión perfecta! 🏆', fr: 'Écoute parfaite ! 🏆', de: 'Perfektes Hörverstehen! 🏆' },
  tryAgain: { en: 'Try again', it: 'Riprova', pt: 'Tentar de novo', es: 'Inténtalo otra vez', fr: 'Réessayer', de: 'Nochmal versuchen' },
  nextPassage: { en: 'Next passage', it: 'Prossimo brano', pt: 'Próximo texto', es: 'Siguiente texto', fr: 'Texte suivant', de: 'Nächster Text' }
};

/** "You got X of Y…" encouragement line, built per language. */
export const partialScoreLine = (lang: string, correct: number, total: number): string => {
  switch (lang) {
    case 'it': return `Hai risposto a ${correct} su ${total}. Riascolta e riprova.`;
    case 'pt': return `Você acertou ${correct} de ${total}. Ouça de novo e tente outra vez.`;
    case 'es': return `Acertaste ${correct} de ${total}. Escucha otra vez e inténtalo de nuevo.`;
    case 'fr': return `Tu as ${correct} sur ${total}. Réécoute et réessaie.`;
    case 'de': return `Du hast ${correct} von ${total} richtig. Hör noch mal und versuch es erneut.`;
    default: return `You got ${correct} of ${total}. Replay the passage and try again.`;
  }
};

/** Theme labels, localized. */
export const LISTEN_THEME_UI: Record<string, LocalizedText> = {
  everyday: { en: 'Everyday life', it: 'Vita quotidiana', pt: 'Vida cotidiana', es: 'Vida cotidiana', fr: 'Vie quotidienne', de: 'Alltag' },
  travel: { en: 'Travel & city', it: 'Viaggi e città', pt: 'Viagens e cidade', es: 'Viajes y ciudad', fr: 'Voyages et ville', de: 'Reisen & Stadt' },
  work: { en: 'Work & email', it: 'Lavoro ed email', pt: 'Trabalho e e-mail', es: 'Trabajo y correo', fr: 'Travail et e-mail', de: 'Arbeit & E-Mail' }
};
