import React, { useRef, useState, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { BilingualText } from '../types';
import { speakItalian, startListening, isSpeechRecognitionAvailable, scorePronunciation, PronunciationScore } from '../speech/speechEngine';

type Choice = { id: string; label: BilingualText; spokenItalian: string };
type Challenge = {
  question: BilingualText;
  options: Choice[];
  answer: string;
  expectedSpoken: string;
  feedback: BilingualText;
  cefrLevel: 'A1' | 'A2' | 'B1';
};

type Stage = {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  symbol: string;
  mechanic: BilingualText;
  level: string;
  questions: Challenge[];
};

const CHECKPOINT_ID = 'italian-cefr-proficiency';
const REQUIRED_MISSIONS = ['it_a1m1', 'it_a1m2', 'it_a1m3', 'it_a2m1', 'it_a2m2', 'it_b1m1', 'it_b1m2'];
const PASS_SCORE = 10;
const TOTAL_QUESTIONS = 12;

const stages: Stage[] = [
  {
    id: 'a1_foundations',
    level: 'A1 Principiante',
    title: ['A1 Speaking & Daily Life', 'A1 Parlato e Vita Quotidiana'],
    subtitle: ['Greetings, formal register, and ordering at the Italian bar.', 'Saluti, registro di cortesia e ordinazioni al bar.'],
    symbol: '☕',
    mechanic: ['Speak aloud or select the natural Italian response.', 'Pronuncia ad alta voce o seleziona la risposta naturale in italiano.'],
    questions: [
      {
        question: [
          'You meet the Academy Headmaster in the morning. Which formal greeting should you use?',
          'Incontri il Preside dell’Accademia al mattino. Quale saluto formale dovresti usare?'
        ],
        options: [
          { id: 'a', label: ['Buongiorno, come sta?', 'Buongiorno, come sta?'], spokenItalian: 'Buongiorno, come sta?' },
          { id: 'b', label: ['Ciao, come butta?', 'Ciao, come butta?'], spokenItalian: 'Ciao, come butta?' },
          { id: 'c', label: ['Buonanotte a tutti!', 'Buonanotte a tutti!'], spokenItalian: 'Buonanotte a tutti!' },
          { id: 'd', label: ['Ci vediamo stasera!', 'Ci vediamo stasera!'], spokenItalian: 'Ci vediamo stasera!' }
        ],
        answer: 'a',
        expectedSpoken: 'Buongiorno, come sta?',
        feedback: [
          'In formal Italian with elders and officials, use "Buongiorno" and the third-person "Come sta?" (dare del Lei).',
          'Nel registro formale verso superiori o sconosciuti si usa "Buongiorno" e la terza persona "Come sta?" (dare del Lei).'
        ],
        cefrLevel: 'A1'
      },
      {
        question: [
          'How do you politely order an espresso and a croissant at an Italian café bar?',
          'Come ordini con garbo un caffè e un cornetto al bar italiano?'
        ],
        options: [
          { id: 'a', label: ['Voglio un caffè subito!', 'Voglio un caffè subito!'], spokenItalian: 'Voglio un caffè subito!' },
          { id: 'b', label: ['Vorrei un caffè e un cornetto, per favore.', 'Vorrei un caffè e un cornetto, per favore.'], spokenItalian: 'Vorrei un caffè e un cornetto, per favore.' },
          { id: 'c', label: ['Dammi da bere e mangiare.', 'Dammi da bere e mangiare.'], spokenItalian: 'Dammi da bere e mangiare.' },
          { id: 'd', label: ['Un caffè senza pagare niente.', 'Un caffè senza pagare niente.'], spokenItalian: 'Un caffè senza pagare niente.' }
        ],
        answer: 'b',
        expectedSpoken: 'Vorrei un caffè e un cornetto, per favore',
        feedback: [
          '"Vorrei" (conditional of cortesia) + "per favore" is the golden standard of Italian politeness at the bar.',
          '"Vorrei" (condizionale di cortesia) unito a "per favore" è la formula classica per ordinare con eleganza.'
        ],
        cefrLevel: 'A1'
      },
      {
        question: [
          'Complete the regular present tense: "Noi (abitare) a Roma."',
          'Completa il presente indicativo regolare: "Noi (abitare) a Roma."'
        ],
        options: [
          { id: 'a', label: ['Noi abito a Roma.', 'Noi abito a Roma.'], spokenItalian: 'Noi abito a Roma.' },
          { id: 'b', label: ['Noi abitiamo a Roma.', 'Noi abitiamo a Roma.'], spokenItalian: 'Noi abitiamo a Roma.' },
          { id: 'c', label: ['Noi abitano a Roma.', 'Noi abitano a Roma.'], spokenItalian: 'Noi abitano a Roma.' },
          { id: 'd', label: ['Noi abitate a Roma.', 'Noi abitate a Roma.'], spokenItalian: 'Noi abitate a Roma.' }
        ],
        answer: 'b',
        expectedSpoken: 'Noi abitiamo a Roma',
        feedback: [
          'The first person plural (-iamo) ending is universal for all regular conjugations: noi abitiamo, noi prendiamo, noi partiamo.',
          'La desinenza di prima persona plurale (-iamo) è comune a tutte le coniugazioni: noi abitiamo, prendiamo, partiamo.'
        ],
        cefrLevel: 'A1'
      },
      {
        question: [
          'Someone says "Grazie mille per l’aiuto!". What is the natural polite reply?',
          'Qualcuno ti dice "Grazie mille per l’aiuto!". Qual è la risposta naturale di cortesia?'
        ],
        options: [
          { id: 'a', label: ['Prego, di niente!', 'Prego, di niente!'], spokenItalian: 'Prego, di niente!' },
          { id: 'b', label: ['Grazie a me!', 'Grazie a me!'], spokenItalian: 'Grazie a me!' },
          { id: 'c', label: ['Non fa nulla ma vattene.', 'Non fa nulla ma vattene.'], spokenItalian: 'Non fa nulla ma vattene.' },
          { id: 'd', label: ['Mi dispiace tantissimo.', 'Mi dispiace tantissimo.'], spokenItalian: 'Mi dispiace tantissimo.' }
        ],
        answer: 'a',
        expectedSpoken: 'Prego, di niente!',
        feedback: [
          '"Prego" or "Di niente / Di nulla" is the standard welcoming reply to "Grazie".',
          '"Prego" o "Di niente / Di nulla" è la risposta spontanea e corretta al ringraziamento.'
        ],
        cefrLevel: 'A1'
      }
    ]
  },
  {
    id: 'a2_past_actions',
    level: 'A2 Elementare',
    title: ['A2 Past Actions & City Life', 'A2 Passato Prossimo e la Città'],
    subtitle: ['Mastering the Passato Prossimo, auxiliary selection, and agreements.', 'Scelta dell’ausiliare essere/avere e accordo del participio.'],
    symbol: '🏛',
    mechanic: ['Match movement verbs with ESSERE and transitive verbs with AVERE.', 'Verbi di movimento con ESSERE e verbi transitivi con AVERE.'],
    questions: [
      {
        question: [
          'Elena is speaking: "I went to Florence yesterday." Which auxiliary and participle agreement is correct?',
          'Parla Elena (donna): "Ieri sono andata a Firenze." Quale ausiliare e accordo è corretto?'
        ],
        options: [
          { id: 'a', label: ['Ieri ho andato a Firenze.', 'Ieri ho andato a Firenze.'], spokenItalian: 'Ieri ho andato a Firenze.' },
          { id: 'b', label: ['Ieri sono andata a Firenze.', 'Ieri sono andata a Firenze.'], spokenItalian: 'Ieri sono andata a Firenze.' },
          { id: 'c', label: ['Ieri sono andato a Firenze.', 'Ieri sono andato a Firenze.'], spokenItalian: 'Ieri sono andato a Firenze.' },
          { id: 'd', label: ['Ieri ho andata a Firenze.', 'Ieri ho andata a Firenze.'], spokenItalian: 'Ieri ho andata a Firenze.' }
        ],
        answer: 'b',
        expectedSpoken: 'Ieri sono andata a Firenze',
        feedback: [
          'Andare is a movement verb taking ESSERE. With ESSERE, the participle must agree with the feminine subject (Elena -> andata).',
          'Andare è verbo di moto e richiede ESSERE. Con ESSERE il participio si accorda al genere e numero del soggetto (Elena -> andata).'
        ],
        cefrLevel: 'A2'
      },
      {
        question: [
          'Marco and Luca ate pizza: "Marco e Luca (mangiare) una pizza margherita."',
          'Marco e Luca hanno mangiato la pizza: quale forma è corretta?'
        ],
        options: [
          { id: 'a', label: ['Marco e Luca sono mangiati una pizza.', 'Marco e Luca sono mangiati una pizza.'], spokenItalian: 'Marco e Luca sono mangiati una pizza.' },
          { id: 'b', label: ['Marco e Luca hanno mangiato una pizza.', 'Marco e Luca hanno mangiato una pizza.'], spokenItalian: 'Marco e Luca hanno mangiato una pizza.' },
          { id: 'c', label: ['Marco e Luca hanno mangiati una pizza.', 'Marco e Luca hanno mangiati una pizza.'], spokenItalian: 'Marco e Luca hanno mangiati una pizza.' },
          { id: 'd', label: ['Marco e Luca è mangiato una pizza.', 'Marco e Luca è mangiato una pizza.'], spokenItalian: 'Marco e Luca è mangiato una pizza.' }
        ],
        answer: 'b',
        expectedSpoken: 'Marco e Luca hanno mangiato una pizza',
        feedback: [
          'Mangiare is transitive (takes direct object) and uses AVERE. The participle with AVERE stays in the invariant masculine -o.',
          'Mangiare è transitivo e usa AVERE. Il participio passato resta invariato in -o.'
        ],
        cefrLevel: 'A2'
      },
      {
        question: [
          'Combine the preposition "a" + definite article "il": "Vado ___ cinema."',
          'Combina la preposizione "a" + articolo determinativo "il": "Vado ___ cinema."'
        ],
        options: [
          { id: 'a', label: ['Vado al cinema.', 'Vado al cinema.'], spokenItalian: 'Vado al cinema.' },
          { id: 'b', label: ['Vado a il cinema.', 'Vado a il cinema.'], spokenItalian: 'Vado a il cinema.' },
          { id: 'c', label: ['Vado dal cinema.', 'Vado dal cinema.'], spokenItalian: 'Vado dal cinema.' },
          { id: 'd', label: ['Vado nel cinema.', 'Vado nel cinema.'], spokenItalian: 'Vado nel cinema.' }
        ],
        answer: 'a',
        expectedSpoken: 'Vado al cinema',
        feedback: [
          'A + il blends into the articulated preposition "al" (al cinema, al ristorante, al bar).',
          'La preposizione articolata di a + il è "al" (al cinema, al bar, al parco).'
        ],
        cefrLevel: 'A2'
      },
      {
        question: [
          'Asking for directions in a historic Italian city: "Excuse me, where is the train station?"',
          'Chiedere indicazioni stradali: "Scusi, dov’è la stazione ferroviaria?"'
        ],
        options: [
          { id: 'a', label: ['Scusi, dov’è la stazione?', 'Scusi, dov’è la stazione?'], spokenItalian: 'Scusi, dov’è la stazione?' },
          { id: 'b', label: ['Ehi tu, portami alla stazione!', 'Ehi tu, portami alla stazione!'], spokenItalian: 'Ehi tu, portami alla stazione!' },
          { id: 'c', label: ['Perché la stazione è chiusa?', 'Perché la stazione è chiusa?'], spokenItalian: 'Perché la stazione è chiusa?' },
          { id: 'd', label: ['Non so dove andare.', 'Non so dove andare.'], spokenItalian: 'Non so dove andare.' }
        ],
        answer: 'a',
        expectedSpoken: 'Scusi, dov’è la stazione?',
        feedback: [
          '"Scusi" (formal) + "dov’è la stazione?" is the polite phrasing for street directions.',
          '"Scusi" (imperativo formale di scusare) + "dov’è..." è la frase chiave per chiedere informazioni a un passante.'
        ],
        cefrLevel: 'A2'
      }
    ]
  },
  {
    id: 'b1_opinions_hypotheticals',
    level: 'B1 Intermedio',
    title: ['B1 Opinions & Subjunctive', 'B1 Opinioni, Congiuntivo e Ipotesi'],
    subtitle: ['Expressing doubts, wishes, future projects, and opinions.', 'Esprimere desideri, dubbi, opinioni e ipotesi.'],
    symbol: '🎭',
    mechanic: ['Trigger the Congiuntivo with verbs of opinion and emotion.', 'Attiva il congiuntivo con verbi di opinione ed emozione.'],
    questions: [
      {
        question: [
          '"Penso che tu (avere) ragione." Which form of the present subjunctive is correct?',
          '"Penso che tu (avere) ragione." Quale forma del congiuntivo presente è corretta?'
        ],
        options: [
          { id: 'a', label: ['Penso che tu hai ragione.', 'Penso che tu hai ragione.'], spokenItalian: 'Penso che tu hai ragione.' },
          { id: 'b', label: ['Penso che tu abbia ragione.', 'Penso che tu abbia ragione.'], spokenItalian: 'Penso che tu abbia ragione.' },
          { id: 'c', label: ['Penso che tu avessi ragione.', 'Penso che tu avessi ragione.'], spokenItalian: 'Penso che tu avessi ragione.' },
          { id: 'd', label: ['Penso che tu avrai ragione.', 'Penso che tu avrai ragione.'], spokenItalian: 'Penso che tu avrai ragione.' }
        ],
        answer: 'b',
        expectedSpoken: 'Penso che tu abbia ragione',
        feedback: [
          'Verbs of thought ("pensare che", "credere che") trigger the subjunctive. For avere: che io abbia, che tu abbia, che lui/lei abbia.',
          'I verbi di opinione ("pensare che") reggono il congiuntivo presente: che io abbia, che tu abbia, che egli abbia.'
        ],
        cefrLevel: 'B1'
      },
      {
        question: [
          'Hypothetical conditional of possibility: "Se (fare) bel tempo, uscirei volentieri."',
          'Periodo ipotetico della possibilità: "Se (fare) bel tempo, uscirei volentieri."'
        ],
        options: [
          { id: 'a', label: ['Se farà bel tempo, uscirei.', 'Se farà bel tempo, uscirei.'], spokenItalian: 'Se farà bel tempo, uscirei.' },
          { id: 'b', label: ['Se facesse bel tempo, uscirei.', 'Se facesse bel tempo, uscirei.'], spokenItalian: 'Se facesse bel tempo, uscirei.' },
          { id: 'c', label: ['Se fa bel tempo, uscirei.', 'Se fa bel tempo, uscirei.'], spokenItalian: 'Se fa bel tempo, uscirei.' },
          { id: 'd', label: ['Se avesse fatto bel tempo, uscirei.', 'Se avesse fatto bel tempo, uscirei.'], spokenItalian: 'Se avesse fatto bel tempo, uscirei.' }
        ],
        answer: 'b',
        expectedSpoken: 'Se facesse bel tempo, uscirei volentieri',
        feedback: [
          'Second-type hypothetical period requires Congiuntivo Imperfetto in the "se" clause + Condizionale Presente in the main clause.',
          'Il periodo ipotetico del 2° tipo (possibilità) richiede se + congiuntivo imperfetto (facesse) e condizionale presente (uscirei).'
        ],
        cefrLevel: 'B1'
      },
      {
        question: [
          'Future tense of commitment: "Domani (partire - noi) per Napoli con il treno."',
          'Futuro semplice indicativo: "Domani noi (partire) per Napoli."'
        ],
        options: [
          { id: 'a', label: ['Domani partiamo per Napoli.', 'Domani partiamo per Napoli.'], spokenItalian: 'Domani partiamo per Napoli.' },
          { id: 'b', label: ['Domani partiremo per Napoli.', 'Domani partiremo per Napoli.'], spokenItalian: 'Domani partiremo per Napoli.' },
          { id: 'c', label: ['Domani partivamo per Napoli.', 'Domani partivamo per Napoli.'], spokenItalian: 'Domani partivamo per Napoli.' },
          { id: 'd', label: ['Domani partireste per Napoli.', 'Domani partireste per Napoli.'], spokenItalian: 'Domani partireste per Napoli.' }
        ],
        answer: 'b',
        expectedSpoken: 'Domani partiremo per Napoli',
        feedback: [
          'The first person plural future suffix is "-remo": noi partiremo, parleremo, prenderemo.',
          'La desinenza di futuro semplice per noi è "-remo" (partiremo, viaggeremo).'
        ],
        cefrLevel: 'B1'
      },
      {
        question: [
          'Expressing a personal viewpoint with elegance in conversation: "In my opinion, Italian cuisine is extraordinary."',
          'Esprimere un’opinione personale argomentata: "A mio parere, la cucina italiana è straordinaria."'
        ],
        options: [
          { id: 'a', label: ['Secondo me / A mio parere, la cucina italiana è straordinaria.', 'Secondo me / A mio parere, la cucina italiana è straordinaria.'], spokenItalian: 'A mio parere, la cucina italiana è straordinaria.' },
          { id: 'b', label: ['Tutti sanno che non è vero.', 'Tutti sanno che non è vero.'], spokenItalian: 'Tutti sanno che non è vero.' },
          { id: 'c', label: ['Devi mangiare come me.', 'Devi mangiare come me.'], spokenItalian: 'Devi mangiare come me.' },
          { id: 'd', label: ['Non ho nessuna idea.', 'Non ho nessuna idea.'], spokenItalian: 'Non ho nessuna idea.' }
        ],
        answer: 'a',
        expectedSpoken: 'A mio parere, la cucina italiana è straordinaria',
        feedback: [
          '"Secondo me" and "A mio parere" are hallmark B1 phrases for introducing nuanced individual viewpoints.',
          '"A mio parere" e "Secondo me" sono indicatori cardine di livello B1 per strutturare argomentazioni orali.'
        ],
        cefrLevel: 'B1'
      }
    ]
  }
];

export const ItalianCheckpointScreen: React.FC = () => {
  const { state, goToView, saveCheckpointResult } = useGame();
  const { lang, cleared } = state;

  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<BilingualText | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [finished, setFinished] = useState(false);
  const [spokenAttempt, setSpokenAttempt] = useState<string>('');
  const [isListening, setIsListening] = useState(false);
  const [pronunciationResult, setPronunciationResult] = useState<PronunciationScore | null>(null);
  const [speechStopFn, setSpeechStopFn] = useState<(() => void) | null>(null);

  const stage = stages[currentStageIdx];
  const question = stage.questions[currentQIdx];

  // Check if Italian prerequisite missions are cleared
  const clearedPrereqs = REQUIRED_MISSIONS.filter(id => !!cleared[id]).length;
  const isUnlocked = clearedPrereqs >= 3; // Unlocks after 3 Italian missions, or allow trial anytime

  useEffect(() => {
    return () => {
      if (speechStopFn) {
        speechStopFn();
      }
    };
  }, [speechStopFn]);

  const handleHearModel = (phrase: string, slow = false) => {
    speakItalian(phrase, slow ? 'slow' : 'normal');
  };

  const handleStartSpeaking = () => {
    if (!isSpeechRecognitionAvailable()) {
      alert(L(['Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.', 'Il riconoscimento vocale non è supportato in questo browser. Usa Chrome, Edge o Safari.'], lang));
      return;
    }

    if (isListening && speechStopFn) {
      speechStopFn();
      setIsListening(false);
      return;
    }

    setIsListening(true);
    setSpokenAttempt('');
    setPronunciationResult(null);

    const stop = startListening({
      lang: 'it-IT',
      onResult: (transcript, isFinal) => {
        setSpokenAttempt(transcript);
        if (isFinal) {
          setIsListening(false);
          const scoreData = scorePronunciation(transcript, question.expectedSpoken);
          setPronunciationResult(scoreData);

          if (scoreData.percentage >= 65) {
            handleAnswer(question.answer, scoreData);
          }
        }
      },
      onError: (err) => {
        console.warn('Speech error in checkpoint:', err);
        setIsListening(false);
      },
      onEnd: () => {
        setIsListening(false);
      }
    });

    setSpeechStopFn(() => stop);
  };

  const handleAnswer = (optionId: string, voiceScore?: PronunciationScore) => {
    if (selectedOption !== null) return; // Already answered

    setSelectedOption(optionId);
    const correct = optionId === question.answer;
    setIsCorrect(correct);
    setFeedback(question.feedback);
    setAnsweredCount(c => c + 1);

    if (correct) {
      setScore(s => s + 1);
      speakItalian('Molto bene! Eccellente!', 'normal');
    } else {
      speakItalian('Attenzione, riascolta la risposta corretta.', 'normal');
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setFeedback(null);
    setIsCorrect(null);
    setSpokenAttempt('');
    setPronunciationResult(null);

    if (currentQIdx + 1 < stage.questions.length) {
      setCurrentQIdx(q => q + 1);
    } else if (currentStageIdx + 1 < stages.length) {
      setCurrentStageIdx(s => s + 1);
      setCurrentQIdx(0);
    } else {
      // Completed all questions!
      const passed = score >= PASS_SCORE;
      saveCheckpointResult(CHECKPOINT_ID, score, TOTAL_QUESTIONS, passed, passed ? 250 : 80);
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentStageIdx(0);
    setCurrentQIdx(0);
    setScore(0);
    setAnsweredCount(0);
    setSelectedOption(null);
    setFeedback(null);
    setIsCorrect(null);
    setFinished(false);
    setSpokenAttempt('');
    setPronunciationResult(null);
  };

  if (finished) {
    const passed = score >= PASS_SCORE;
    const pct = Math.round((score / TOTAL_QUESTIONS) * 100);

    return (
      <section className="card it-checkpoint-screen" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', padding: '36px 24px' }}>
        <div style={{ fontSize: 56, marginBottom: 16 }}>{passed ? '🏆' : '📚'}</div>
        <div className="eyebrow" style={{ color: 'var(--ember)' }}>
          {L(['CEFR ORAL & WRITTEN PROFICIENCY CERTIFICATE', 'ATTESTATO DI COMPETENZA LINGUISTICA QCER'], lang)}
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 42px)', margin: '8px 0 16px' }}>
          {passed
            ? L(['Certification Passed! Eccellente!', 'Certificazione Superata! Eccellente!'], lang)
            : L(['Trial Complete · Keep Practicing!', 'Prova Completata · Continua ad Allenarti!'], lang)}
        </h1>

        <p className="muted" style={{ fontSize: 17, maxWidth: 580, margin: '0 auto 24px' }}>
          {passed
            ? L([
                `Congratulations! You scored ${score}/${TOTAL_QUESTIONS} (${pct}%). You demonstrated communicative competence across CEFR levels A1, A2, and B1 with clear pronunciation and sound grammar intuition.`,
                `Congratulazioni! Hai ottenuto ${score}/${TOTAL_QUESTIONS} (${pct}%). Hai dimostrato competenza comunicativa nei livelli QCER A1, A2 e B1 con pronuncia chiara e solida intuizione grammaticale.`
              ], lang)
            : L([
                `You scored ${score}/${TOTAL_QUESTIONS} (${pct}%). The pass threshold is ${PASS_SCORE}/${TOTAL_QUESTIONS}. Review the missions in your learning map and practice with the Italian Lab!`,
                `Hai ottenuto ${score}/${TOTAL_QUESTIONS} (${pct}%). La soglia di superamento è ${PASS_SCORE}/${TOTAL_QUESTIONS}. Rivedi le missioni sulla mappa e allenati con il Laboratorio di Parlato!`
              ], lang)}
        </p>

        {passed && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(0, 146, 70, 0.15) 0%, rgba(206, 43, 55, 0.15) 100%)',
            border: '2px solid rgba(255, 209, 102, 0.4)',
            borderRadius: 16,
            padding: 24,
            margin: '24px auto',
            maxWidth: 540,
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: '#ffd166' }}>
              ✦ DIPLOMA ACADEMIA LINGUAE ITALICAE ✦
            </div>
            <div style={{ fontSize: 15, color: '#d6d4ea' }}>
              {L(['Candidate', 'Candidato/a'], lang)}: <b>{state.name || 'Circuit Hunter'}</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, margin: '8px 0' }}>
              <span className="badge ok" style={{ fontSize: 13, padding: '4px 12px' }}>A1 · Principiante</span>
              <span className="badge ok" style={{ fontSize: 13, padding: '4px 12px' }}>A2 · Elementare</span>
              <span className="badge ok" style={{ fontSize: 13, padding: '4px 12px' }}>B1 · Intermedio</span>
            </div>
            <div style={{ fontSize: 13, color: '#a0a2c0' }}>
              {L(['Validated via Web Speech Audio Phonetics & Grammatical Challenges', 'Validato tramite Motore Fonetico Vocale e Sfide Grammaticali'], lang)}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 24 }}>
          <button className="btn" onClick={handleRestart}>
            {L(['Retake Trial', 'Ripeti la Prova'], lang)}
          </button>
          <button className="btn ghost" onClick={() => goToView('map')}>
            {L(['Back to Mission Map', 'Torna alla Mappa Missioni'], lang)}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="card it-checkpoint-screen" style={{ maxWidth: 860, margin: '0 auto', padding: '28px 24px' }}>
      {/* Top Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <div className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>{stage.symbol} {stage.level}</span>
            <span>·</span>
            <span>{L(['STAGE', 'FASE'], lang)} {currentStageIdx + 1}/{stages.length}</span>
          </div>
          <h2 style={{ margin: '4px 0 0', fontSize: 26 }}>{L(stage.title, lang)}</h2>
          <p className="muted" style={{ margin: '4px 0 0', fontSize: 14 }}>{L(stage.subtitle, lang)}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ textAlign: 'right' }}>
            <small className="muted">{L(['Score', 'Punteggio'], lang)}</small>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--ember)' }}>
              {score}/{answeredCount}
            </div>
          </div>
          <button className="btn ghost sm" onClick={() => goToView('map')}>
            ✕ {L(['Exit', 'Esci'], lang)}
          </button>
        </div>
      </div>

      {/* Progress Track */}
      <div style={{ background: 'var(--panel2)', height: 8, borderRadius: 4, overflow: 'hidden', marginBottom: 24 }}>
        <div
          style={{
            background: 'linear-gradient(90deg, #009246, #ffffff, #ce2b37)',
            height: '100%',
            width: `${((currentStageIdx * 4 + currentQIdx + 1) / TOTAL_QUESTIONS) * 100}%`,
            transition: 'width 0.3s ease'
          }}
        />
      </div>

      {/* Question Card */}
      <div style={{ background: 'var(--panel2)', border: '1px solid var(--line)', borderRadius: 16, padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span className="badge go" style={{ fontSize: 12 }}>
            {question.cefrLevel} · {L(['Question', 'Domanda'], lang)} {currentQIdx + 1}/4
          </span>
          <button
            className="btn ghost sm"
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
            onClick={() => handleHearModel(question.expectedSpoken)}
            title={L(['Listen to target model sentence', 'Ascolta la frase modello in italiano'], lang)}
          >
            🔊 {L(['Model sentence', 'Frase modello'], lang)}
          </button>
        </div>

        <h3 style={{ fontSize: 19, lineHeight: 1.45, margin: '0 0 18px' }}>
          {L(question.question, lang)}
        </h3>

        {/* Dual Input Mode: Voice or Tap */}
        <div style={{
          background: 'rgba(255, 209, 102, 0.08)',
          border: '1px dashed rgba(255, 209, 102, 0.3)',
          borderRadius: 12,
          padding: '14px 18px',
          marginBottom: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12
        }}>
          <div>
            <strong style={{ display: 'block', fontSize: 14, color: '#ffd166' }}>
              🎤 {L(['Voice Answering (Speaking Practice)', 'Risposta Vocale (Pratica di Parlato)'], lang)}
            </strong>
            <small className="muted">
              {L(['Speak the Italian phrase into your microphone or tap an answer below.', 'Pronuncia la frase in italiano al microfono oppure tocca una risposta qui sotto.'], lang)}
            </small>
          </div>

          <button
            className={`btn ${isListening ? 'bad' : 'ghost'} sm`}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            onClick={handleStartSpeaking}
            disabled={selectedOption !== null}
          >
            {isListening ? (
              <>🔴 {L(['Listening... Say it now!', 'Ascolto... Parla ora!'], lang)}</>
            ) : (
              <>🎤 {L(['Speak in Italian', 'Parla in Italiano'], lang)}</>
            )}
          </button>
        </div>

        {/* Live speech feedback if attempted */}
        {spokenAttempt && (
          <div style={{
            background: 'var(--panel)',
            border: '1px solid var(--line)',
            borderRadius: 10,
            padding: '10px 14px',
            marginBottom: 18,
            fontSize: 14
          }}>
            <span className="muted">{L(['You said: ', 'Hai detto: '], lang)}</span>
            <b>"{spokenAttempt}"</b>
            {pronunciationResult && (
              <span style={{ marginLeft: 12, color: pronunciationResult.percentage >= 65 ? 'var(--good)' : 'var(--ember)', fontWeight: 700 }}>
                {pronunciationResult.percentage}% {L(['accuracy', 'precisione'], lang)} · {L(pronunciationResult.feedback, lang)}
              </span>
            )}
          </div>
        )}

        {/* Options List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {question.options.map(opt => {
            const isSelected = selectedOption === opt.id;
            const isRight = opt.id === question.answer;

            let borderStyle = '1px solid var(--line)';
            let bgStyle = 'var(--panel)';
            if (selectedOption !== null) {
              if (isRight) {
                borderStyle = '2px solid var(--good)';
                bgStyle = 'rgba(0, 204, 136, 0.12)';
              } else if (isSelected && !isRight) {
                borderStyle = '2px solid var(--bad)';
                bgStyle = 'rgba(255, 77, 106, 0.12)';
              }
            }

            return (
              <div
                key={opt.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  border: borderStyle,
                  background: bgStyle,
                  borderRadius: 12,
                  padding: '12px 16px',
                  transition: 'all 0.15s ease',
                  cursor: selectedOption === null ? 'pointer' : 'default'
                }}
                onClick={() => handleAnswer(opt.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
                  <span style={{
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    background: 'var(--panel2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: 13
                  }}>
                    {opt.id.toUpperCase()}
                  </span>
                  <span style={{ fontSize: 16 }}>{L(opt.label, lang)}</span>
                </div>

                <button
                  type="button"
                  className="btn ghost sm"
                  style={{ padding: '4px 8px', fontSize: 13 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHearModel(opt.spokenItalian);
                  }}
                  title={L(['Listen pronunciation', 'Ascolta pronuncia'], lang)}
                >
                  🔊
                </button>
              </div>
            );
          })}
        </div>

        {/* Feedback Section */}
        {feedback && (
          <div style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 12,
            background: isCorrect ? 'rgba(0, 204, 136, 0.1)' : 'rgba(255, 77, 106, 0.1)',
            border: `1px solid ${isCorrect ? 'var(--good)' : 'var(--bad)'}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ fontSize: 18 }}>{isCorrect ? '✓' : '✗'}</span>
              <strong style={{ color: isCorrect ? 'var(--good)' : 'var(--bad)' }}>
                {isCorrect ? L(['Eccellente!', 'Eccellente!'], lang) : L(['Attenzione!', 'Attenzione!'], lang)}
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.5 }}>
              {L(feedback, lang)}
            </p>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          className="btn ghost sm"
          onClick={() => handleHearModel(question.expectedSpoken, true)}
        >
          🐢 {L(['Slow Audio', 'Audio Lento'], lang)}
        </button>

        {selectedOption !== null && (
          <button className="btn" onClick={handleNext}>
            {L(['Next Question ➔', 'Prossima Domanda ➔'], lang)}
          </button>
        )}
      </div>
    </section>
  );
};
