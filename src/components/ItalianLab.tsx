import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
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
  translationEn: string;
  phoneticHint?: string;
  notes?: [string, string];
}

export const ITALIAN_PRACTICE_PHRASES: PracticePhrase[] = [
  // A1 Level
  {
    id: 'a1-1',
    level: 'A1',
    targetIt: 'Buongiorno, come si chiama?',
    translationEn: 'Good morning, what is your name? (formal)',
    phoneticHint: 'bwon-DJOR-no, KO-me see KYA-ma?',
    notes: ['Formal greeting with "si chiama" (Lei)', 'Saluto formale con forma di cortesia (Lei)']
  },
  {
    id: 'a1-2',
    level: 'A1',
    targetIt: 'Piacere, mi chiamo Alessandro.',
    translationEn: 'Nice to meet you, my name is Alessandro.',
    phoneticHint: 'pya-CHE-reh, mee KYA-mo a-les-SAN-dro',
    notes: ['Standard polite introduction', 'Presentazione standard']
  },
  {
    id: 'a1-3',
    level: 'A1',
    targetIt: 'Vorrei un caffè macchiato e un cornetto alla crema, per favore.',
    translationEn: 'I would like a macchiato coffee and a cream croissant, please.',
    phoneticHint: 'vor-RAY oon kaf-FEH mak-KYA-to eh oon kor-NET-to AL-la KRE-ma',
    notes: ['Essential Italian cafe order', 'Ordinazione classica al bar']
  },
  {
    id: 'a1-4',
    level: 'A1',
    targetIt: 'Quanto costa questo panino?',
    translationEn: 'How much does this sandwich cost?',
    phoneticHint: 'KWAN-to KOS-ta KWES-to pa-NEE-no?',
    notes: ['Asking prices', 'Chiedere il prezzo']
  },
  {
    id: 'a1-5',
    level: 'A1',
    targetIt: 'Abito a Roma ma sono di Napoli.',
    translationEn: 'I live in Rome but I am from Naples.',
    phoneticHint: 'A-bee-to ah RO-ma mah SO-no dee NA-po-lee',
    notes: ['"A" for cities, "di" for origin', '"A" per le città, "di" per la provenienza']
  },

  // A2 Level
  {
    id: 'a2-1',
    level: 'A2',
    targetIt: 'Ieri sera sono andato al cinema con i miei amici.',
    translationEn: 'Yesterday evening I went to the cinema with my friends.',
    phoneticHint: 'YE-ree SE-ra SO-no an-DA-to al CHEE-ne-ma...',
    notes: ['Passato prossimo with essere (movement verb: andare)', 'Passato prossimo con ausiliare essere per verbo di movimento']
  },
  {
    id: 'a2-2',
    level: 'A2',
    targetIt: 'Scusi, per andare alla stazione centrale devo girare a destra?',
    translationEn: 'Excuse me, to go to the central station should I turn right?',
    phoneticHint: 'SKOO-zee, per an-DA-re al-la sta-tzyo-ne chen-TRA-le...',
    notes: ['Asking for street directions', 'Chiedere indicazioni stradali']
  },
  {
    id: 'a2-3',
    level: 'A2',
    targetIt: 'Queste mele sono deliziose, ne prendo due chili.',
    translationEn: 'These apples are delicious, I will take two kilos of them.',
    phoneticHint: 'KWES-te ME-le SO-no de-lee-TSYO-ze, neh PREN-do...',
    notes: ['Partitive pronoun "ne" for specified quantity', 'Partitivo "ne" per esprimere una quantità definita']
  },
  {
    id: 'a2-4',
    level: 'A2',
    targetIt: 'Da bambino andavo sempre in vacanza in Sardegna.',
    translationEn: 'As a child I always used to go on holiday in Sardinia.',
    phoneticHint: 'dah bam-BEE-no an-DA-vo SEM-pre een va-KAN-tsa...',
    notes: ['Imperfect for habitual past actions', 'Imperfetto per abitudini del passato']
  },

  // B1 Level
  {
    id: 'b1-1',
    level: 'B1',
    targetIt: 'Penso che questo museo sia davvero straordinario.',
    translationEn: 'I think that this museum is truly extraordinary.',
    phoneticHint: 'PEN-so keh KWES-to moo-ZE-o SEE-a dahv-VE-ro...',
    notes: ['Present subjunctive after opinion verb "penso che"', 'Congiuntivo presente retto dal verbo di opinione "penso che"']
  },
  {
    id: 'b1-2',
    level: 'B1',
    targetIt: 'Se avessi più tempo libero, viaggerei in tutta Italia.',
    translationEn: 'If I had more free time, I would travel all over Italy.',
    phoneticHint: 'seh a-VES-see pyoo TEM-po LEE-be-ro, vyad-je-RAY...',
    notes: ['Hypothetical period: congiuntivo imperfetto + condizionale', 'Periodo ipotetico della possibilità']
  },
  {
    id: 'b1-3',
    level: 'B1',
    targetIt: 'Quel libro me l’ha consigliato il professore la settimana scorsa.',
    translationEn: 'The professor recommended that book to me last week.',
    phoneticHint: 'kwel LEE-bro meh l-ah kon-seel-YA-to...',
    notes: ['Combined pronoun "me lo" -> me l\'ha consigliato', 'Pronome combinato mi + lo = me lo']
  },
  {
    id: 'b1-4',
    level: 'B1',
    targetIt: 'Potrebbe ripetere più lentamente, per cortesia?',
    translationEn: 'Could you please repeat more slowly, as a courtesy?',
    phoneticHint: 'po-TREB-be ree-PE-te-re pyoo len-ta-MEN-te...',
    notes: ['Polite conditional of "potere"', 'Condizionale di cortesia']
  }
];

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
  title: [string, string];
  location: [string, string];
  turns: DialogueTurn[];
}

export const DIALOGUE_SCENARIOS: DialogueScenario[] = [
  {
    id: 'bar-milano',
    level: 'A1',
    title: ['At the Cafe in Milan', 'Al Bar a Milano'],
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
    title: ['Asking for Directions in Florence', 'Chiedere Indicazioni a Firenze'],
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
    title: ['Recommending & Expressing Opinions in Rome', 'Opinioni al Ristorante a Roma'],
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
    meaning: ['to be', 'essere'],
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
    meaning: ['to have', 'avere'],
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
    meaning: ['to speak', 'parlare'],
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
    meaning: ['to go', 'andare'],
    tenses: {
      presente: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
      passatoProssimo: ['sono andato/a', 'sei andato/a', 'è andato/a', 'siamo andati/e', 'siete andati/e', 'sono andati/e'],
      imperfetto: ['andavo', 'andavi', 'andava', 'andavamo', 'andavate', 'andavano'],
      futuro: ['andrò', 'andrai', 'andrà', 'andremo', 'andrete', 'andranno'],
      condizionale: ['andrei', 'andresti', 'andrebbe', 'andremmo', 'andreste', 'andrebbero'],
      congiuntivo: ['vada', 'vada', 'vada', 'andiamo', 'andiate', 'vadano']
    }
  }
];

const PRONOUNS = ['io', 'tu', 'lui / lei', 'noi', 'voi', 'loro'];

export const ItalianLab: React.FC<{ initialPhrase?: string }> = ({ initialPhrase }) => {
  const { state, addXP } = useGame();
  const { lang } = state;

  const [activeTab, setActiveTab] = useState<'studio' | 'dialogue' | 'verbs'>('studio');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | 'A1' | 'A2' | 'B1'>('ALL');

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

  const filteredPhrases = selectedLevel === 'ALL'
    ? ITALIAN_PRACTICE_PHRASES
    : ITALIAN_PRACTICE_PHRASES.filter(p => p.level === selectedLevel);

  const activePhrase = filteredPhrases[currentPhraseIndex] || ITALIAN_PRACTICE_PHRASES[0];

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
            {L(['ITALIAN LANGUAGE & SPEECH STUDIO', 'STUDIO DI LINGUA E PRONUNCIA ITALIANA'], lang)}
          </div>
          <h2 style={{ margin: '0.25rem 0 0', fontSize: '1.4rem' }}>
            {activeTab === 'studio' && L(['Pronunciation & Listening Studio (A1–B1)', 'Laboratorio di Ascolto e Pronuncia (A1–B1)'], lang)}
            {activeTab === 'dialogue' && L(['Interactive Dialogue Simulator', 'Simulatore di Dialogo Interattivo'], lang)}
            {activeTab === 'verbs' && L(['Verb Conjugation Engine', 'Macchina di Coniugazione Verbale'], lang)}
          </h2>
        </div>

        {/* Studio Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            className={`btn ${activeTab === 'studio' ? 'primary' : ''}`}
            onClick={() => setActiveTab('studio')}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          >
            🎙️ {L(['Pronunciation', 'Pronuncia'], lang)}
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
            💬 {L(['Role-play Dialogue', 'Dialogo'], lang)}
          </button>
          <button
            className={`btn ${activeTab === 'verbs' ? 'primary' : ''}`}
            onClick={() => setActiveTab('verbs')}
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
          >
            ⚙️ {L(['Verbs', 'Verbi'], lang)}
          </button>
        </div>
      </div>

      {audioError && (
        <div className="italian-lab-audio-error" role="alert" aria-live="polite" style={{ padding: '0.75rem 1rem', background: 'rgba(255, 93, 143, 0.15)', borderLeft: '3px solid var(--sakura)', borderRadius: '4px', marginBottom: '1rem', fontSize: '0.85rem' }}>
          ⚠️ {L(
            audioError === 'speech-recognition-unsupported'
              ? ['Speech recognition is not supported in this browser. Please use the text input below to practice!', 'Il riconoscimento vocale non è supportato in questo browser. Usa il campo di testo qui sotto per esercitarti!']
              : audioError === 'speech-recognition-timeout'
                ? ['Listening timed out. Please try again.', 'Il tempo di ascolto è scaduto. Riprova.']
                : audioError === 'speech-recognition-permission'
                  ? ['Microphone access was denied. Check your browser permissions and try again.', 'L’accesso al microfono è stato negato. Controlla i permessi del browser e riprova.']
                  : audioError === 'speech-recognition-network'
                    ? ['A network error interrupted speech recognition. Check your connection and try again.', 'Un errore di rete ha interrotto il riconoscimento vocale. Controlla la connessione e riprova.']
                    : audioError === 'speech-playback-unsupported'
                      ? ['Audio playback is not supported in this browser.', 'La riproduzione audio non è supportata in questo browser.']
                      : audioError === 'speech-playback-failed'
                        ? ['Audio playback failed in this browser. Please try again.', 'La riproduzione audio non è riuscita in questo browser. Riprova.']
                        : ['Speech recognition failed. Check your microphone settings and try again.', 'Il riconoscimento vocale non è riuscito. Controlla le impostazioni del microfono e riprova.'],
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
            <span style={{ fontSize: '0.85rem', color: 'var(--sub)' }}>{L(['Level Filter:', 'Filtra Livello:'], lang)}</span>
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
                {lvl === 'ALL' ? L(['All Levels', 'Tutti i livelli'], lang) : lvl}
              </button>
            ))}
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
                {activePhrase.translationEn}
              </div>
              {activePhrase.phoneticHint && (
                <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '0.35rem', fontStyle: 'italic' }}>
                  🗣️ Pronunciation guide: {activePhrase.phoneticHint}
                </div>
              )}
            </div>

            {/* Audio Controls */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem' }}>
              {/* Normal Speed Listen — toggles Listen → Pause → Resume */}
              <button
                className="btn"
                onClick={() => handlePlayAudio(activePhrase.targetIt, 1.0)}
                aria-label={activeRate === 1.0 && isSpeaking ? (isPaused ? L(['Resume', 'Riprendi'], lang) : L(['Pause', 'Pausa'], lang)) : L(['Listen at normal speed', 'Ascolta a velocità normale'], lang)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                {activeRate === 1.0 && isSpeaking
                  ? (isPaused ? `▶️ ${L(['Resume', 'Riprendi'], lang)}` : `⏸️ ${L(['Pause', 'Pausa'], lang)}`)
                  : `🔊 ${L(['Listen (1.0x)', 'Ascolta (1.0x)'], lang)}`}
              </button>

              {/* Slow Speed Listen — toggles Slow → Pause → Resume */}
              <button
                className="btn"
                onClick={() => handlePlayAudio(activePhrase.targetIt, 0.75)}
                aria-label={activeRate === 0.75 && isSpeaking ? (isPaused ? L(['Resume', 'Riprendi'], lang) : L(['Pause', 'Pausa'], lang)) : L(['Listen slowly', 'Ascolta lentamente'], lang)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
              >
                {activeRate === 0.75 && isSpeaking
                  ? (isPaused ? `▶️ ${L(['Resume', 'Riprendi'], lang)}` : `⏸️ ${L(['Pause', 'Pausa'], lang)}`)
                  : `🐢 ${L(['Slow (0.75x)', 'Lento (0.75x)'], lang)}`}
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
                  <>🛑 {L(['Stop Recording', 'Ferma Registrazione'], lang)}</>
                ) : (
                  <>🎙️ {L(['Speak Now (Italian)', 'Parla Ora (Italiano)'], lang)}</>
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
                  {L(['Listening in Italian... Say:', 'In ascolto... Pronuncia:'], lang)} <i>"{activePhrase.targetIt}"</i>
                </span>
              </div>
            )}

            {/* Live Transcript Display */}
            {speechTranscript && (
              <div style={{ marginTop: '0.75rem', fontSize: '0.85rem', color: 'var(--sub)' }}>
                <strong>{L(['You said:', 'Hai detto:'], lang)}</strong> "{speechTranscript}"
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
                        {L(['Accuracy Score:', 'Punteggio Accuratezza:'], lang)} <strong>{pronunciationResult.score}%</strong>
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
                placeholder={L(['Type or paste Italian phrase to check...', 'Scrivi la frase in italiano per verificare...'], lang)}
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
                {L(['Check', 'Verifica'], lang)}
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
                🔄 {L(['Restart Conversation', 'Ricomincia'], lang)}
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
                    <div style={{ fontSize: '0.8rem', color: 'var(--sub)', marginTop: '0.15rem' }}>{t.en}</div>
                  </div>
                );
              })}
            </div>

            {/* User Response Options */}
            {!dialogueDone && currentTurnIndex + 1 < scenario.turns.length && scenario.turns[currentTurnIndex + 1]?.userOptions && (
              <div style={{ marginTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--accent)' }}>
                  💬 {L(['Choose your Italian response (listen and speak):', 'Scegli la tua risposta in italiano:'], lang)}
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
                      <span style={{ fontSize: '0.75rem', color: 'var(--sub)' }}>{opt.en}</span>
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
                🎉 <strong>{L(['Dialogue completed successfully! (+25 XP)', 'Dialogo completato con successo! (+25 XP)'], lang)}</strong>
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
