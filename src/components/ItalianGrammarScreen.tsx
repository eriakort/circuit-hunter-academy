import React, { useMemo, useState } from 'react';
import { Flag } from './Flag';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { GrammarLevel, ITALIAN_GRAMMAR_TOPICS } from '../data/italianGrammar';
import { buildAdaptiveGrammarReview, getGrammarTopicProgress, GrammarReviewQuestion } from '../data/italianGrammarReview';
import { getGrammarActivities, GrammarActivityType, normaliseGrammarAnswer, matchesGrammarAnswer } from '../data/italianGrammarActivities';

export const ItalianGrammarScreen: React.FC = () => {
  const { state, goToView, recordGrammarResult } = useGame();
  const { lang } = state;
  const [topicId, setTopicId] = useState(ITALIAN_GRAMMAR_TOPICS[0].id);
  const [level, setLevel] = useState<GrammarLevel>('A1');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [activityType, setActivityType] = useState<GrammarActivityType>('correct');
  const [activityInput, setActivityInput] = useState('');
  const [orderedWordIndexes, setOrderedWordIndexes] = useState<number[]>([]);
  const [activitySubmitted, setActivitySubmitted] = useState(false);
  const [activitySelfReviewed, setActivitySelfReviewed] = useState(false);
  const [mixedReview, setMixedReview] = useState(false);
  const [mixedQuestions, setMixedQuestions] = useState<GrammarReviewQuestion[]>([]);
  const topic = useMemo(
    () => ITALIAN_GRAMMAR_TOPICS.find(item => item.id === topicId) || ITALIAN_GRAMMAR_TOPICS[0],
    [topicId]
  );
  const lesson = topic.levels[level];
  const activeQuestions = mixedReview ? mixedQuestions : lesson.exercises;
  const question = activeQuestions[questionIndex] || lesson.exercises[0];
  const questionTopicTitle = mixedReview ? mixedQuestions[questionIndex]?.topicTitle : topic.title;
  const availableActivityTypes = (['correct', 'order', 'translate', 'write'] as GrammarActivityType[]).filter(type => getGrammarActivities(topicId, level, type).length > 0);
  const activity = getGrammarActivities(topicId, level, activityType)[0] || getGrammarActivities('sentence-building', level, activityType)[0];
  const activityResponse = activityType === 'order' && activity.words
    ? orderedWordIndexes.map(index => activity.words![index]).join(' ')
    : activityInput;
  const activityCorrect = activityType === 'order'
    ? normaliseGrammarAnswer(activityResponse) === normaliseGrammarAnswer(activity.modelAnswer)
    : !!activity.acceptedAnswers && matchesGrammarAnswer(activityInput, activity.acceptedAnswers);
  const activityTypes: GrammarActivityType[] = ['correct', 'order', 'translate', 'write'];
  const trackedIds = mixedReview
    ? ITALIAN_GRAMMAR_TOPICS.flatMap(item => [
        ...item.levels[level].exercises.map(exercise => exercise.id),
        ...activityTypes.flatMap(type => getGrammarActivities(item.id, level, type).map(activity => activity.id))
      ])
    : [...lesson.exercises.map(item => item.id), ...activityTypes.flatMap(type => getGrammarActivities(topicId, level, type).map(item => item.id))];
  const masteredCount = trackedIds.filter(id => state.grammarProgress?.[id]?.correct).length;
  const grammarXp = Object.values(state.grammarProgress || {}).filter(item => item.xpAwarded).length * 5;

  const startMixedReview = (nextLevel: GrammarLevel = level) => {
    setMixedQuestions(buildAdaptiveGrammarReview(ITALIAN_GRAMMAR_TOPICS, nextLevel, state.grammarProgress || {}));
    setMixedReview(true);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setActivityInput('');
    setOrderedWordIndexes([]);
    setActivitySubmitted(false);
    setActivitySelfReviewed(false);
  };
  const chooseTopic = (id: string) => {
    setMixedReview(false);
    setMixedQuestions([]);
    setTopicId(id);
    const firstAvailable = (['correct', 'order', 'translate', 'write'] as GrammarActivityType[]).find(type => getGrammarActivities(id, level, type).length > 0);
    if (firstAvailable) chooseActivityType(firstAvailable);
    setQuestionIndex(0);
    setSelectedAnswer(null);
  };
  const chooseLevel = (nextLevel: GrammarLevel) => {
    setLevel(nextLevel);
    if (mixedReview) {
      setMixedQuestions(buildAdaptiveGrammarReview(ITALIAN_GRAMMAR_TOPICS, nextLevel, state.grammarProgress || {}));
    }
    const firstAvailable = (['correct', 'order', 'translate', 'write'] as GrammarActivityType[]).find(type => getGrammarActivities(topicId, nextLevel, type).length > 0);
    if (firstAvailable) setActivityType(firstAvailable);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setActivityInput(''); setOrderedWordIndexes([]); setActivitySubmitted(false); setActivitySelfReviewed(false);
  };
  const chooseActivityType = (nextType: GrammarActivityType) => {
    setActivityType(nextType); setActivityInput(''); setOrderedWordIndexes([]); setActivitySubmitted(false); setActivitySelfReviewed(false);
  };
  const nextQuestion = () => {
    setQuestionIndex(index => (index + 1) % activeQuestions.length);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <section className="card" style={{ border: '1px solid rgba(0, 146, 70, 0.35)', background: 'linear-gradient(135deg, rgba(17,25,54,.96), rgba(0,146,70,.10) 58%, rgba(206,43,55,.08)' }}>
        <div className="eyebrow" style={{ color: '#4ade80' }}><Flag country="IT" /> {L(['ITALIAN GRAMMAR TRAINING · CEFR A1–B1', 'ALLENAMENTO GRAMMATICA ITALIANA · QCER A1–B1'], lang)}</div>
        <h1 style={{ margin: '5px 0 8px', fontSize: '26px' }}>{L(['Build strong Italian foundations', 'Costruisci solide basi di italiano'], lang)}</h1>
        <p className="muted" style={{ margin: 0, lineHeight: 1.6 }}>
          {L(['Learn a rule, study an example, then practise it. Every topic has three progressive levels with explanations in English and Italian.', 'Impara una regola, osserva un esempio e poi mettiti alla prova. Ogni argomento ha tre livelli progressivi con spiegazioni in inglese e italiano.'], lang)}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
          <button type="button" className="btn ghost sm" onClick={() => goToView('it-lab')}>🎙️ {L(['Speaking Lab', 'Laboratorio Parlato'], lang)}</button>
          <button type="button" className="btn ghost sm" onClick={() => goToView('test')}>📝 {L(['Italian subject tests', 'Test di italiano'], lang)}</button>
          <button type="button" className="btn ghost sm" onClick={() => goToView('map')}>← {L(['Missions', 'Missioni'], lang)}</button>
        </div>
      </section>

      <section className="card">
        <div className="mhead"><div><div className="eyebrow">{L(['STEP 1 · CHOOSE A GRAMMAR TOPIC', 'PASSO 1 · SCEGLI UN ARGOMENTO'], lang)}</div><h2>{L(['Your grammar curriculum', 'Il tuo programma di grammatica'], lang)}</h2></div></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))', gap: 9, marginTop: 12 }}>
          {ITALIAN_GRAMMAR_TOPICS.map(item => {
            const progress = getGrammarTopicProgress(item, level, state.grammarProgress || {});
            return (
              <button key={item.id} type="button" className={!mixedReview && topicId === item.id ? 'btn' : 'btn ghost'} onClick={() => chooseTopic(item.id)} style={{ textAlign: 'left', whiteSpace: 'normal', minHeight: 76 }}>
                <span style={{ display: 'block', fontWeight: 700 }}>{L(item.title, lang)}</span>
                <span style={{ display: 'block', fontSize: 12, opacity: .82, marginTop: 4 }}>{L(item.subtitle, lang)}</span>
                <span style={{ display: 'block', fontSize: 11, marginTop: 6, color: progress.mastered === progress.total ? '#4ade80' : 'inherit' }}>
                  {progress.mastered}/{progress.total} {L(['mastered', 'padroneggiati'], lang)} · {level}
                </span>
              </button>
            );
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginTop: 12 }}>
          <button type="button" className={mixedReview ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => startMixedReview()}>
            🔀 {L(['Start adaptive mixed revision', 'Inizia il ripasso misto adattivo'], lang)}
          </button>
          {mixedReview && <span className="muted" style={{ fontSize: 12 }}>{L(['Missed questions come first, followed by new and mastered questions.', 'Prima gli esercizi sbagliati, poi quelli nuovi e infine quelli già padroneggiati.'], lang)}</span>}
        </div>
      </section>

      <section className="card">
        <div className="mhead" style={{ alignItems: 'center' }}>
          <div><div className="eyebrow">{L(['STEP 2 · SELECT YOUR LEVEL', 'PASSO 2 · SCEGLI IL LIVELLO'], lang)}</div><h2>{mixedReview ? L(['Mixed revision · all topics', 'Ripasso misto · tutti gli argomenti'], lang) : L(topic.title, lang)}</h2></div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {(['A1', 'A2', 'B1'] as GrammarLevel[]).map(item => (
              <button key={item} type="button" className={level === item ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => chooseLevel(item)}>{item}</button>
            ))}
          </div>
        </div>
        <div style={{ borderRadius: 12, padding: 16, background: 'rgba(0,146,70,.08)', border: '1px solid rgba(0,146,70,.22)', marginTop: 12 }}>
          {mixedReview ? (
            <>
              <div className="eyebrow" style={{ color: '#4ade80' }}>{L(['ADAPTIVE REVIEW', 'RIPASSO ADATTIVO'], lang)} · {level}</div>
              <h3 style={{ margin: '6px 0' }}>{L(['Review every grammar topic in one session.', 'Ripassa tutti gli argomenti grammaticali in un’unica sessione.'], lang)}</h3>
              <p style={{ lineHeight: 1.65, margin: '8px 0' }}>{L(['The question order is personalised: previous mistakes first, then questions you have not mastered, followed by mastered questions for reinforcement.', 'L’ordine delle domande è personalizzato: prima gli errori precedenti, poi gli esercizi non ancora padroneggiati e infine quelli già completati per consolidare.'], lang)}</p>
            </>
          ) : (
            <>
              <div className="eyebrow" style={{ color: '#4ade80' }}>{L(lesson.label, lang)} · {level}</div>
              <h3 style={{ margin: '6px 0' }}>{L(lesson.focus, lang)}</h3>
              <p style={{ lineHeight: 1.65, margin: '8px 0' }}>{L(lesson.explanation, lang)}</p>
              <div style={{ borderLeft: '3px solid #4ade80', padding: '8px 12px', background: 'rgba(0,0,0,.12)', borderRadius: '0 8px 8px 0' }}>
                <div className="eyebrow">{L(['EXAMPLES · ESEMPI', 'ESEMPI · EXAMPLES'], lang)}</div>
                <strong>{L(lesson.example, lang)}</strong>
              </div>
            </>
          )}
        </div>
        <div role="status" aria-live="polite" style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, fontSize: 13 }}>
          <strong>{L(['Mastered exercises', 'Esercizi completati'], lang)}: {masteredCount}/{trackedIds.length}</strong>
          <span>⭐ {grammarXp} {L(['grammar XP earned', 'XP di grammatica ottenuti'], lang)}</span>
        </div>
      </section>

      <section className="card">
        <div className="mhead">
          <div><div className="eyebrow">{L(['STEP 3 · PRACTISE', 'PASSO 3 · ESERCITATI'], lang)} · {questionIndex + 1}/{activeQuestions.length}</div><h2>{L(['Quick grammar practice', 'Esercizio di grammatica'], lang)}</h2></div>
          <span className="badge">{level}</span>
        </div>
        {mixedReview && questionTopicTitle && <div className="eyebrow" style={{ marginTop: 12 }}>{L(questionTopicTitle, lang)}</div>}
        <p style={{ fontSize: 17, fontWeight: 650, lineHeight: 1.5, margin: '12px 0' }}>{L(question.prompt, lang)}</p>
        {question.sentence && <div style={{ padding: '10px 13px', borderRadius: 9, background: 'rgba(255,255,255,.05)', marginBottom: 12, fontSize: 17, fontWeight: 600 }}>{question.sentence}</div>}
        <div style={{ display: 'grid', gap: 8 }}>
          {question.options.map((option, index) => {
            const isChosen = selectedAnswer === index;
            const isCorrect = index === question.answer;
            const reveal = selectedAnswer !== null;
            return (
              <button key={option} type="button" className={reveal && isCorrect ? 'btn' : isChosen ? 'btn ghost' : 'btn ghost'} disabled={reveal} onClick={() => { setSelectedAnswer(index); recordGrammarResult(question.id, index === question.answer); }} style={{ textAlign: 'left', whiteSpace: 'normal', borderColor: reveal && isCorrect ? '#4ade80' : isChosen ? '#f87171' : undefined, background: reveal && isCorrect ? 'rgba(34,197,94,.12)' : isChosen ? 'rgba(248,113,113,.10)' : undefined }}>
                <span style={{ display: 'inline-block', minWidth: 24, fontWeight: 800 }}>{String.fromCharCode(65 + index)}.</span> {option}
                {reveal && isCorrect && <span style={{ float: 'right' }}>✓</span>}
                {reveal && isChosen && !isCorrect && <span style={{ float: 'right' }}>✕</span>}
              </button>
            );
          })}
        </div>
        {selectedAnswer !== null && (
          <div role="status" aria-live="polite" style={{ marginTop: 14, padding: 14, borderRadius: 10, border: '1px solid ' + (selectedAnswer === question.answer ? 'rgba(74,222,128,.45)' : 'rgba(248,113,113,.45)'), background: selectedAnswer === question.answer ? 'rgba(34,197,94,.08)' : 'rgba(248,113,113,.08)' }}>
            <strong>{selectedAnswer === question.answer ? L(['Correct! Ben fatto!', 'Corretto! Ben fatto!'], lang) : L(['Not quite — review the rule.', 'Non proprio — ripassa la regola.'], lang)}</strong>
            <p style={{ margin: '6px 0 0', lineHeight: 1.55 }}>{L(question.explanation, lang)}</p>
            <button type="button" className="btn sm" style={{ marginTop: 12 }} onClick={nextQuestion}>{L(['Next exercise', 'Prossimo esercizio'])} →</button>
          </div>
        )}
      </section>

      {!mixedReview && availableActivityTypes.length > 0 && activity && (
        <section className="card">
          <div className="mhead">
            <div><div className="eyebrow">{L(['STEP 4 · ACTIVE PRACTICE', 'PASSO 4 · ESERCIZI ATTIVI'], lang)}</div><h2>{L(['Use the grammar yourself', 'Usa la grammatica in prima persona'], lang)}</h2></div>
            <span className="badge">{level}</span>
          </div>
          <p className="muted" style={{ lineHeight: 1.55 }}>{L(['Move beyond multiple choice: correct, build, translate and write complete sentences.', 'Vai oltre la scelta multipla: correggi, costruisci, traduci e scrivi frasi complete.'], lang)}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, margin: '12px 0' }}>
            {([
              ['correct', ['Correct', 'Correggi']], ['order', ['Word order', 'Ordina']],
              ['translate', ['Translate', 'Traduci']], ['write', ['Write', 'Scrivi']]
            ] as [GrammarActivityType, [string, string]][]).filter(([type]) => availableActivityTypes.includes(type)).map(([type, label]) => (
              <button key={type} type="button" className={activityType === type ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => chooseActivityType(type)}>{L(label, lang)}</button>
            ))}
          </div>
          <h3 style={{ marginBottom: 6 }}>{L(activity.title, lang)}</h3>
          <p style={{ lineHeight: 1.55 }}>{L(activity.prompt, lang)}</p>
          {activity.source && <div style={{ padding: 12, borderRadius: 9, background: 'rgba(255,255,255,.06)', fontSize: 17, fontWeight: 650, marginBottom: 12 }}>{activity.source}</div>}
          {activityType === 'order' && activity.words && (
            <div style={{ display: 'grid', gap: 10 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, minHeight: 42, padding: 10, borderRadius: 9, border: '1px dashed rgba(255,255,255,.25)' }}>
                {orderedWordIndexes.length === 0 ? <span className="muted">{L(['Your sentence will appear here.', 'La tua frase apparirà qui.'], lang)}</span> : orderedWordIndexes.map((wordIndex, index) => <button key={index} className="btn sm" type="button" disabled={activitySubmitted} onClick={() => setOrderedWordIndexes(items => items.filter((_, i) => i !== index))}>{activity.words![wordIndex]}</button>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {activity.words.map((word, index) => <button key={index} type="button" className="btn ghost sm" disabled={activitySubmitted || orderedWordIndexes.includes(index)} onClick={() => setOrderedWordIndexes(items => [...items, index])}>{word}</button>)}
              </div>
              <button type="button" className="btn ghost sm" disabled={activitySubmitted || orderedWordIndexes.length === 0} onClick={() => setOrderedWordIndexes([])}>{L(['Clear sentence', 'Cancella la frase'], lang)}</button>
            </div>
          )}
          {(activityType === 'correct' || activityType === 'translate' || activityType === 'write') && (
            <textarea value={activityInput} onChange={event => { setActivityInput(event.target.value); setActivitySubmitted(false); }} rows={activityType === 'write' ? 4 : 2} placeholder={L(['Write your answer in Italian…', 'Scrivi la tua risposta in italiano…'], lang)} style={{ width: '100%', boxSizing: 'border-box', padding: 12, borderRadius: 9, resize: 'vertical', font: 'inherit', background: 'rgba(255,255,255,.05)', color: 'inherit', border: '1px solid rgba(255,255,255,.2)' }} disabled={activitySubmitted} />
          )}
          <div style={{ marginTop: 12, padding: 12, borderRadius: 9, background: 'rgba(0,146,70,.08)', border: '1px solid rgba(0,146,70,.2)' }}>
            <strong>{L(['Hint', 'Suggerimento'], lang)}</strong><p style={{ margin: '5px 0 0', lineHeight: 1.5 }}>{L(activity.hint, lang)}</p>
          </div>
          {!activitySubmitted ? (
            <button type="button" className="btn sm" style={{ marginTop: 12 }} disabled={activityType === 'order' ? orderedWordIndexes.length !== activity.words?.length : !activityInput.trim()} onClick={() => { setActivitySubmitted(true); if (activityType !== 'write') recordGrammarResult(activity.id, activityCorrect); }}>{L(['Check my answer', 'Controlla la risposta'], lang)}</button>
          ) : (
            <div role="status" aria-live="polite" style={{ marginTop: 14, padding: 14, borderRadius: 10, border: activityType === 'write' ? '1px solid rgba(148,163,184,.4)' : activityCorrect ? '1px solid rgba(74,222,128,.4)' : '1px solid rgba(248,113,113,.45)', background: activityType === 'write' ? 'rgba(148,163,184,.07)' : activityCorrect ? 'rgba(34,197,94,.07)' : 'rgba(248,113,113,.08)' }}>
              <strong>{activityType === 'write' ? L(['Self-review: compare your sentence with the model.', 'Autovalutazione: confronta la tua frase con il modello.'], lang) : activityCorrect ? L(['Correct! Ben fatto!', 'Corretto! Ben fatto!'], lang) : L(['Not quite — compare with the model answer.', 'Non proprio — confronta con la risposta modello.'], lang)}</strong>
              <p style={{ margin: '6px 0', lineHeight: 1.5 }}>{L(activity.explanation, lang)}</p>
              <div style={{ padding: 10, borderRadius: 8, background: 'rgba(255,255,255,.05)' }}><span className="eyebrow">{L(['MODEL ANSWER', 'RISPOSTA MODELLO'], lang)}</span><div style={{ fontWeight: 700, marginTop: 4 }}>{activity.modelAnswer}</div></div>
              {activityType === 'write' && !activitySelfReviewed && (
                <button type="button" className="btn sm" style={{ marginTop: 12 }} onClick={() => { recordGrammarResult(activity.id, true); setActivitySelfReviewed(true); }}>{L(['I checked my sentence — mark as practised', 'Ho controllato la frase — segna come esercitata'], lang)}</button>
              )}
              {activityType === 'write' && activitySelfReviewed && <p style={{ margin: '10px 0 0', color: '#4ade80', fontWeight: 700 }}>{L(['Writing practice completed and added to your progress.', 'Esercizio di scrittura completato e aggiunto ai tuoi progressi.'], lang)}</p>}
              <button type="button" className="btn ghost sm" style={{ marginTop: 12 }} onClick={() => { setActivityInput(''); setOrderedWordIndexes([]); setActivitySubmitted(false); setActivitySelfReviewed(false); }}>{L(['Try again', 'Riprova'], lang)}</button>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default ItalianGrammarScreen;
