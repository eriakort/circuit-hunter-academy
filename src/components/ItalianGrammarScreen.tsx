import React, { useMemo, useState } from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { GrammarLevel, ITALIAN_GRAMMAR_TOPICS } from '../data/italianGrammar';
import { getGrammarActivities, GrammarActivityType } from '../data/italianGrammarActivities';

export const ItalianGrammarScreen: React.FC = () => {
  const { state, goToView } = useGame();
  const { lang } = state;
  const [topicId, setTopicId] = useState(ITALIAN_GRAMMAR_TOPICS[0].id);
  const [level, setLevel] = useState<GrammarLevel>('A1');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [activityType, setActivityType] = useState<GrammarActivityType>('correct');
  const [activityInput, setActivityInput] = useState('');
  const [orderedWordIndexes, setOrderedWordIndexes] = useState<number[]>([]);
  const [activitySubmitted, setActivitySubmitted] = useState(false);
  const topic = useMemo(
    () => ITALIAN_GRAMMAR_TOPICS.find(item => item.id === topicId) || ITALIAN_GRAMMAR_TOPICS[0],
    [topicId]
  );
  const lesson = topic.levels[level];
  const question = lesson.exercises[questionIndex];
  const activity = getGrammarActivities(level, activityType)[0];
  const normaliseAnswer = (value: string) => value.toLocaleLowerCase().replace(/[.!?]/g, '').replace(/[’]/g, "'").replace(/\\s+/g, ' ').trim();
  const activityResponse = activityType === 'order' && activity.words
    ? orderedWordIndexes.map(index => activity.words![index]).join(' ')
    : activityInput;
  const activityCorrect = activityType === 'order'
    ? normaliseAnswer(activityResponse) === normaliseAnswer(activity.modelAnswer)
    : !!activity.acceptedAnswers?.some(answer => normaliseAnswer(answer) === normaliseAnswer(activityInput));

  const chooseTopic = (id: string) => {
    setTopicId(id);
    setQuestionIndex(0);
    setSelectedAnswer(null);
  };
  const chooseLevel = (nextLevel: GrammarLevel) => {
    setLevel(nextLevel);
    setQuestionIndex(0);
    setSelectedAnswer(null);
  };
  const nextQuestion = () => {
    setQuestionIndex(index => (index + 1) % lesson.exercises.length);
    setSelectedAnswer(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <section className="card" style={{ border: '1px solid rgba(0, 146, 70, 0.35)', background: 'linear-gradient(135deg, rgba(17,25,54,.96), rgba(0,146,70,.10) 58%, rgba(206,43,55,.08)' }}>
        <div className="eyebrow" style={{ color: '#4ade80' }}>🇮🇹 {L(['ITALIAN GRAMMAR TRAINING · CEFR A1–B1', 'ALLENAMENTO GRAMMATICA ITALIANA · QCER A1–B1'], lang)}</div>
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
          {ITALIAN_GRAMMAR_TOPICS.map(item => (
            <button key={item.id} type="button" className={topicId === item.id ? 'btn' : 'btn ghost'} onClick={() => chooseTopic(item.id)} style={{ textAlign: 'left', whiteSpace: 'normal', minHeight: 68 }}>
              <span style={{ display: 'block', fontWeight: 700 }}>{L(item.title, lang)}</span>
              <span style={{ display: 'block', fontSize: 12, opacity: .82, marginTop: 4 }}>{L(item.subtitle, lang)}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="mhead" style={{ alignItems: 'center' }}>
          <div><div className="eyebrow">{L(['STEP 2 · SELECT YOUR LEVEL', 'PASSO 2 · SCEGLI IL LIVELLO'], lang)}</div><h2>{L(topic.title, lang)}</h2></div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap' }}>
            {(['A1', 'A2', 'B1'] as GrammarLevel[]).map(item => (
              <button key={item} type="button" className={level === item ? 'btn cyan sm' : 'btn ghost sm'} onClick={() => chooseLevel(item)}>{item}</button>
            ))}
          </div>
        </div>
        <div style={{ borderRadius: 12, padding: 16, background: 'rgba(0,146,70,.08)', border: '1px solid rgba(0,146,70,.22)', marginTop: 12 }}>
          <div className="eyebrow" style={{ color: '#4ade80' }}>{L(lesson.label, lang)} · {level}</div>
          <h3 style={{ margin: '6px 0' }}>{L(lesson.focus, lang)}</h3>
          <p style={{ lineHeight: 1.65, margin: '8px 0' }}>{L(lesson.explanation, lang)}</p>
          <div style={{ borderLeft: '3px solid #4ade80', padding: '8px 12px', background: 'rgba(0,0,0,.12)', borderRadius: '0 8px 8px 0' }}>
            <div className="eyebrow">{L(['EXAMPLES · ESEMPI', 'ESEMPI · EXAMPLES'], lang)}</div>
            <strong>{L(lesson.example, lang)}</strong>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="mhead">
          <div><div className="eyebrow">{L(['STEP 3 · PRACTISE', 'PASSO 3 · ESERCITATI'], lang)} · {questionIndex + 1}/{lesson.exercises.length}</div><h2>{L(['Quick grammar practice', 'Esercizio di grammatica'], lang)}</h2></div>
          <span className="badge">{level}</span>
        </div>
        <p style={{ fontSize: 17, fontWeight: 650, lineHeight: 1.5, margin: '12px 0' }}>{L(question.prompt, lang)}</p>
        {question.sentence && <div style={{ padding: '10px 13px', borderRadius: 9, background: 'rgba(255,255,255,.05)', marginBottom: 12, fontSize: 17, fontWeight: 600 }}>{question.sentence}</div>}
        <div style={{ display: 'grid', gap: 8 }}>
          {question.options.map((option, index) => {
            const isChosen = selectedAnswer === index;
            const isCorrect = index === question.answer;
            const reveal = selectedAnswer !== null;
            return (
              <button key={option} type="button" className={reveal && isCorrect ? 'btn' : isChosen ? 'btn ghost' : 'btn ghost'} disabled={reveal} onClick={() => setSelectedAnswer(index)} style={{ textAlign: 'left', whiteSpace: 'normal', borderColor: reveal && isCorrect ? '#4ade80' : isChosen ? '#f87171' : undefined, background: reveal && isCorrect ? 'rgba(34,197,94,.12)' : isChosen ? 'rgba(248,113,113,.10)' : undefined }}>
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
    </div>
  );
};

export default ItalianGrammarScreen;
