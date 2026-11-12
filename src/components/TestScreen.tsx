import React, { useState, useMemo } from 'react';
import { useGame } from '../context/GameContext';
import { TaggedQuestion } from '../types';
import { SUBJECTS } from '../data/gameData';
import {
  getCategories,
  filterQuestionPool,
  pickRandomQuestions,
  CategoryOption
} from '../data/questionBank';
import { FORMULA_CARDS } from '../data/formulaData';
import { L, shuffle, esc, U } from '../helpers';
import { speakItalian } from '../speech/speechEngine';

export const TestScreen: React.FC = () => {
  const { state, addXP, goToView } = useGame();
  const { lang, subject, name } = state;
  const curSub = subject || 'cs';
  const activeSubject = SUBJECTS.find(item => item.id === curSub) || SUBJECTS[0];

  // Screen mode
  const [phase, setPhase] = useState<'config' | 'testing' | 'results'>('config');

  // Config state
  const categories = useMemo(() => getCategories(curSub), [curSub]);
  const [selectedCatId, setSelectedCatId] = useState<string>(() => categories[0]?.id || '');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [testMode, setTestMode] = useState<'practice' | 'exam'>('practice');

  // Active Test State
  const [activeQuestions, setActiveQuestions] = useState<
    Array<{ q: TaggedQuestion; shuffledAnswerIndexes: number[]; correctIdx: number }>
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<{ selectedIdx: number; isCorrect: boolean }>>([]);
  const [answeredCurrent, setAnsweredCurrent] = useState(false);
  const [selectedOptIdx, setSelectedOptIdx] = useState<number | null>(null);
  const [showFormulaModal, setShowFormulaModal] = useState(false);
  const [formulaModalSearch, setFormulaModalSearch] = useState('');
  const [modalSubject, setModalSubject] = useState<string>(curSub);

  const selectedCategory = useMemo(() => {
    return categories.find(c => c.id === selectedCatId) || categories[0];
  }, [categories, selectedCatId]);

  const pool = useMemo(() => {
    if (!selectedCategory) return [];
    return filterQuestionPool(curSub, selectedCategory);
  }, [curSub, selectedCategory]);

  const startTest = () => {
    if (pool.length === 0) return;
    const picked = pickRandomQuestions(pool, questionCount);

    const prepared = picked.map(q => {
      const shuffledAnswerIndexes = shuffle(q.a.map((_, index) => index));
      const correctIdx = shuffledAnswerIndexes.indexOf(0);
      return { q, shuffledAnswerIndexes, correctIdx };
    });

    setActiveQuestions(prepared);
    setCurrentIndex(0);
    setUserAnswers([]);
    setAnsweredCurrent(false);
    setSelectedOptIdx(null);
    setPhase('testing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (idx: number) => {
    if (answeredCurrent || !activeQuestions[currentIndex]) return;

    const currentItem = activeQuestions[currentIndex];
    const isCorrect = idx === currentItem.correctIdx;

    setAnsweredCurrent(true);
    setSelectedOptIdx(idx);

    setUserAnswers(prev => [...prev, { selectedIdx: idx, isCorrect }]);

    // In Exam mode, immediately allow advancing or advance
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < activeQuestions.length) {
      setCurrentIndex(i => i + 1);
      setAnsweredCurrent(false);
      setSelectedOptIdx(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Finished test: calculate and award XP
      const finalAnswers = userAnswers;
      const correctCount = finalAnswers.filter(a => a.isCorrect).length;
      const earnedXP = correctCount * 4;
      if (earnedXP > 0) {
        addXP(earnedXP);
      }
      setPhase('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 1. CONFIGURATION VIEW
  if (phase === 'config') {
    return (
      <div className="card">
        <div className="mhead">
          <div>
            <div className="eyebrow">
              {L(['Knowledge Trials', 'Prove del Sapere'], lang)} ·{' '}
              {L(activeSubject.name, lang)}
            </div>
            <h2>{L(['Test Your Knowledge', 'Testa le tue Conoscenze'], lang)}</h2>
          </div>
        </div>

        <p className="muted" style={{ margin: '8px 0 18px', maxWidth: '64ch' }}>
          {L(
            [
              'Select any topic, chapter, or test all questions. A fresh random set of questions will be selected from the pool with no repetition within the test.',
              'Scegli un argomento, un capitolo, oppure testa tutte le domande. Verrà estratto un set casuale di domande dal pool senza ripetizioni nello stesso test.'
            ],
            lang
          )}
        </p>

        {/* Category Picker */}
        <div style={{ marginBottom: '18px' }}>
          <label className="eyebrow" htmlFor="catSelect" style={{ display: 'block', marginBottom: '6px' }}>
            {L(['Select Topic / Chapter', 'Scegli Argomento / Capitolo'], lang)}
          </label>
          <select
            id="catSelect"
            className="race-sel"
            style={{ width: '100%', maxWidth: '520px' }}
            value={selectedCatId}
            onChange={e => setSelectedCatId(e.target.value)}
          >
            {categories.map(c => (
              <option key={c.id} value={c.id}>
                {L(c.label, lang)} ({c.count} {L(['questions', 'domande'], lang)})
              </option>
            ))}
          </select>
        </div>

        {/* Question Count Selector */}
        <div style={{ marginBottom: '18px' }}>
          <div className="eyebrow" style={{ marginBottom: '8px' }}>
            {L(['Number of Questions', 'Numero di Domande'], lang)}
          </div>
          <div className="row" style={{ gap: '8px' }}>
            {[5, 10, 15, 0].map(cnt => {
              const label = cnt === 0 ? L(['All Available', 'Tutte le disponibili'], lang) : `${cnt}`;
              const isSelected = questionCount === cnt;
              const disabled = cnt !== 0 && pool.length < cnt && cnt > 5;

              return (
                <button
                  key={cnt}
                  type="button"
                  className={`btn ${isSelected ? '' : 'ghost'}`}
                  disabled={disabled}
                  onClick={() => setQuestionCount(cnt)}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="muted" style={{ fontSize: '13px', marginTop: '6px' }}>
            {L(['Pool size', 'Dimensione pool'], lang)}: <b>{pool.length}</b> {L(['questions available', 'domande disponibili'], lang)}
          </div>
        </div>

        {/* Test Mode Selector */}
        <div style={{ marginBottom: '24px' }}>
          <div className="eyebrow" style={{ marginBottom: '8px' }}>
            {L(['Mode', 'Modalità'], lang)}
          </div>
          <div className="row" style={{ gap: '8px' }}>
            <button
              type="button"
              className={`btn ${testMode === 'practice' ? 'cyan' : 'ghost'}`}
              onClick={() => setTestMode('practice')}
            >
              <b>{L(['Practice Mode', 'Modalità Pratica'], lang)}</b>
              <span style={{ fontSize: '12px', display: 'block', opacity: 0.85 }}>
                {L(['Instant explanation after each question', 'Spiegazione immediata dopo ogni risposta'], lang)}
              </span>
            </button>
            <button
              type="button"
              className={`btn ${testMode === 'exam' ? 'cyan' : 'ghost'}`}
              onClick={() => setTestMode('exam')}
            >
              <b>{L(['Exam Mode', 'Modalità Esame'], lang)}</b>
              <span style={{ fontSize: '12px', display: 'block', opacity: 0.85 }}>
                {L(['Uninterrupted test, full review at the end', 'Test continuo, revisione completa alla fine'], lang)}
              </span>
            </button>
          </div>
        </div>

        {/* Start Button */}
        <div className="row" style={{ gap: '10px' }}>
          <button
            type="button"
            className="btn"
            disabled={pool.length === 0}
            onClick={startTest}
          >
            {L(['Start Knowledge Test', 'Inizia il Test'], lang)}
          </button>
          <button type="button" className="btn ghost" onClick={() => goToView('formula')}>
            📖 {L(['Formula Sheet', 'Formulario'], lang)}
          </button>
          <button type="button" className="btn ghost" onClick={() => goToView('map')}>
            {L(U.missions, lang)}
          </button>
        </div>
      </div>
    );
  }

  // 2. ACTIVE TESTING VIEW
  if (phase === 'testing') {
    const currentItem = activeQuestions[currentIndex];
    if (!currentItem) return null;

    const totalCount = activeQuestions.length;
    const answeredCount = userAnswers.length;
    const correctSoFar = userAnswers.filter(a => a.isCorrect).length;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Progress & Category Banner */}
        <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div className="eyebrow">{L(selectedCategory?.label || '', lang)}</div>
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
              {L(['Question', 'Domanda'], lang)} {currentIndex + 1} / {totalCount}
            </div>
          </div>
          <div className="row" style={{ gap: '10px', alignItems: 'center' }}>
            <button
              type="button"
              className="btn sm ghost"
              onClick={() => setShowFormulaModal(true)}
              title={L(['Open formula sheet reference', 'Consulta il formulario'], lang)}
            >
              📖 {L(['Formulas', 'Formulario'], lang)}
            </button>
            <span className="badge go">
              {testMode === 'practice' ? L(['Practice', 'Pratica'], lang) : L(['Exam', 'Esame'], lang)}
            </span>
            <span className="sc" style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '14px' }}>
              {correctSoFar} / {answeredCount} {L(['correct', 'corrette'], lang)}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="card qbox">
          <div className="qtxt" id="test-question" style={{ fontSize: '20px', marginBottom: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
            <span>{L(currentItem.q.q, lang)}</span>
            {currentItem.q.subject === 'italian' && (
              <button
                type="button"
                className="btn sm"
                onClick={() => {
                  const itText = Array.isArray(currentItem.q.q) ? currentItem.q.q[1] || currentItem.q.q[0] : currentItem.q.q;
                  speakItalian(itText, { rate: 0.88 });
                }}
                style={{ flexShrink: 0, padding: '4px 10px', fontSize: '13px' }}
                title={lang === 'it' ? 'Ascolta la domanda in italiano' : 'Listen to question in Italian'}
              >
                🔊 {lang === 'it' ? 'Ascolta' : 'Listen'}
              </button>
            )}
          </div>

          <div className="opts" role="group" aria-labelledby="test-question">
            {currentItem.shuffledAnswerIndexes.map((answerIndex, optIdx) => {
              let optClass = 'btn ghost opt';
              if (answeredCurrent) {
                if (testMode === 'practice') {
                  if (optIdx === currentItem.correctIdx) optClass = 'btn right opt';
                  else if (optIdx === selectedOptIdx) optClass = 'btn wrong opt';
                } else {
                  // Exam mode: just highlight selected
                  if (optIdx === selectedOptIdx) optClass = 'btn cyan opt';
                }
              }

              const isItalian = currentItem.q.subject === 'italian';
              return (
                <div key={optIdx} style={{ display: 'flex', gap: '6px', alignItems: 'stretch' }}>
                  <button
                    type="button"
                    className={optClass}
                    style={{ flex: 1 }}
                    disabled={answeredCurrent}
                    onClick={() => handleSelectOption(optIdx)}
                  >
                    {L(currentItem.q.a[answerIndex], lang)}
                  </button>
                  {isItalian && (
                    <button
                      type="button"
                      className="btn ghost sm"
                      style={{ padding: '0 10px', fontSize: '13px' }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const rawOpt = currentItem.q.a[answerIndex];
                        const itText = Array.isArray(rawOpt) ? rawOpt[1] || rawOpt[0] : rawOpt;
                        speakItalian(itText, { rate: 0.9 });
                      }}
                      title={lang === 'it' ? 'Ascolta pronuncia' : 'Listen to pronunciation'}
                    >
                      🔊
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Feedback & Continue */}
          {answeredCurrent && (
            <div id="qfb" className="qfb" role="status" aria-live="polite" aria-atomic="true" style={{ marginTop: '16px' }}>
              {testMode === 'practice' && (
                <div
                  className="why"
                  style={{ marginBottom: '12px' }}
                  dangerouslySetInnerHTML={{
                    __html: `<b>${
                      selectedOptIdx === currentItem.correctIdx
                        ? L(['Correct!', 'Esatto!'], lang)
                        : L(['Incorrect!', 'Sbagliato!'], lang)
                    }</b> ${
                      selectedOptIdx !== currentItem.correctIdx
                        ? `${L(['The answer is', 'La risposta è'], lang)} "${L(currentItem.q.a[currentItem.shuffledAnswerIndexes[currentItem.correctIdx]], lang)}". `
                        : ''
                    }${L(currentItem.q.why, lang)}`
                  }}
                />
              )}

              <button
                type="button"
                className="btn"
                onClick={handleNextQuestion}
                autoFocus
              >
                {currentIndex + 1 === totalCount
                  ? L(['Finish Test & See Results', 'Termina e Vedi Risultati'], lang)
                  : L(['Next Question', 'Prossima Domanda'], lang)}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // 3. RESULTS & REVIEW VIEW
  const totalQuestions = activeQuestions.length;
  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const earnedXP = correctCount * 4;

  const performanceTitle =
    percentage === 100
      ? L(['Perfect Mastery! ★★★', 'Maestria Perfetta! ★★★'], lang)
      : percentage >= 80
      ? L(['Outstanding Result! ★★', 'Risultato Eccellente! ★★'], lang)
      : percentage >= 60
      ? L(['Trial Passed! ★', 'Prova Superata! ★'], lang)
      : L(['Keep Training!', 'Continua ad Allenarti!'], lang);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div className="card result" style={{ textAlign: 'center' }}>
        <div className="eyebrow">{L(['Test Results', 'Risultati del Test'], lang)}</div>
        <h2>{performanceTitle}</h2>

        <div style={{ margin: '14px 0', fontSize: '36px', fontFamily: 'var(--display)', color: 'var(--gold)' }}>
          {correctCount} / {totalQuestions} <span style={{ fontSize: '22px' }}>({percentage}%)</span>
        </div>

        <p className="muted" style={{ maxWidth: '52ch', margin: '0 auto 14px' }}>
          {esc(name || 'Hunter')},{' '}
          {L(
            [
              `you answered ${correctCount} out of ${totalQuestions} questions correctly in this random challenge.`,
              `hai risposto correttamente a ${correctCount} domande su ${totalQuestions} in questa prova casuale.`
            ],
            lang
          )}
        </p>

        {earnedXP > 0 && (
          <div className="badge ok" style={{ display: 'inline-block', fontSize: '15px', padding: '6px 14px' }}>
            +{earnedXP} XP {L(['awarded to your hunter rank!', 'aggiunti al tuo rango da cacciatrice!'], lang)}
          </div>
        )}

        <div className="row" style={{ justifyContent: 'center', marginTop: '18px' }}>
          <button type="button" className="btn" onClick={startTest}>
            {L(['Retest (New Random Set)', 'Nuovo Test Casuale'], lang)}
          </button>
          <button type="button" className="btn ghost" onClick={() => goToView('formula')}>
            📖 {L(['Formula Sheet', 'Formulario'], lang)}
          </button>
          <button type="button" className="btn ghost" onClick={() => setPhase('config')}>
            {L(['Choose Another Topic', 'Cambia Argomento'], lang)}
          </button>
          <button type="button" className="btn ghost" onClick={() => goToView('map')}>
            {L(U.missions, lang)}
          </button>
        </div>
      </div>

      {/* Question Breakdown Review */}
      <div className="card">
        <div className="eyebrow" style={{ marginBottom: '12px' }}>
          {L(['Detailed Answers Review', 'Revisione Dettagliata Risposte'], lang)}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {activeQuestions.map((item, idx) => {
            const answer = userAnswers[idx];
            const isCorrect = answer?.isCorrect;
            const chosenText = answer ? L(item.q.a[item.shuffledAnswerIndexes[answer.selectedIdx]], lang) : '';
            const correctText = L(item.q.a[item.shuffledAnswerIndexes[item.correctIdx]], lang);

            return (
              <div
                key={idx}
                style={{
                  background: 'var(--panel2)',
                  border: `1px solid ${isCorrect ? 'rgba(75,227,154,0.3)' : 'rgba(255,77,109,0.3)'}`,
                  borderRadius: '12px',
                  padding: '14px 16px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
                    #{idx + 1} · {L(item.q.chapterTitle, lang)}
                  </span>
                  <span className={`badge ${isCorrect ? 'ok' : 'lock'}`}>
                    {isCorrect ? L(['Correct', 'Esatta'], lang) : L(['Missed', 'Sbagliata'], lang)}
                  </span>
                </div>

                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                  {L(item.q.q, lang)}
                </div>

                <div style={{ fontSize: '14px', marginBottom: '6px' }}>
                  <span className="muted">{L(['Your answer', 'La tua risposta'], lang)}: </span>
                  <span style={{ color: isCorrect ? 'var(--good)' : 'var(--bad)', fontWeight: 'bold' }}>
                    {chosenText || '—'}
                  </span>
                </div>

                {!isCorrect && (
                  <div style={{ fontSize: '14px', marginBottom: '6px' }}>
                    <span className="muted">{L(['Correct answer', 'Risposta corretta'], lang)}: </span>
                    <span style={{ color: 'var(--good)', fontWeight: 'bold' }}>
                      {correctText}
                    </span>
                  </div>
                )}

                <div
                  className="why"
                  style={{ marginTop: '8px', fontSize: '13px' }}
                  dangerouslySetInnerHTML={{
                    __html: `<b>⟐ ${L(['Explanation', 'Spiegazione'], lang)}:</b> ${L(item.q.why, lang)}`
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* QUICK FORMULA MODAL OVERLAY */}
      {showFormulaModal && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 11, 24, 0.85)',
            backdropFilter: 'blur(6px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
          onClick={() => setShowFormulaModal(false)}
        >
          <div
            className="card"
            style={{
              maxWidth: '780px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
              border: '2px solid var(--data)'
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <div className="eyebrow" style={{ color: 'var(--data)' }}>
                  {L(['QUICK FORMULA REFERENCE', 'CONSULTAZIONE RAPIDA FORMULARIO'], lang)}
                </div>
                <h3 style={{ fontSize: '20px' }}>
                  {L(['Rules & Formulas', 'Regole e Formule d\'Oro'], lang)}
                </h3>
              </div>
              <button
                type="button"
                className="btn sm"
                onClick={() => setShowFormulaModal(false)}
              >
                ✕ {L(['Close', 'Chiudi'], lang)}
              </button>
            </div>

            {/* Subject Selector Tabs in Modal */}
            <div className="row" style={{ gap: '6px', marginBottom: '12px', overflowX: 'auto' }}>
              {[
                { id: 'all', name: ['All', 'Tutte'] },
                { id: 'math', name: ['Maths', 'Matematica'] },
                { id: 'phys', name: ['Physics', 'Fisica'] },
                { id: 'cs', name: ['CS', 'Informatica'] },
                { id: 'science', name: ['Science', 'Scienze'] }
              ].map(s => (
                <button
                  key={s.id}
                  type="button"
                  className={`btn sm ${modalSubject === s.id ? 'cyan' : 'ghost'}`}
                  onClick={() => setModalSubject(s.id)}
                  style={{ fontSize: '12px', padding: '4px 10px' }}
                >
                  {L(s.name, lang)}
                </button>
              ))}
            </div>

            <input
              className="codex-search"
              placeholder={L(['Search formulas or rules...', 'Cerca formule o regole...'], lang)}
              value={formulaModalSearch}
              onChange={e => setFormulaModalSearch(e.target.value)}
              style={{ marginBottom: '14px' }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {FORMULA_CARDS.filter(c => {
                if (modalSubject !== 'all' && c.subject !== modalSubject) return false;
                if (!formulaModalSearch) return true;
                const q = formulaModalSearch.toLowerCase();
                return (
                  c.title[0].toLowerCase().includes(q) ||
                  c.title[1].toLowerCase().includes(q) ||
                  c.formula.toLowerCase().includes(q) ||
                  (c.trap && (c.trap[0].toLowerCase().includes(q) || c.trap[1].toLowerCase().includes(q)))
                );
              }).map(card => (
                <div
                  key={card.id}
                  style={{
                    background: 'var(--panel2)',
                    border: '1px solid var(--line)',
                    borderRadius: '10px',
                    padding: '12px 14px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <b style={{ fontSize: '14px', color: 'var(--text)' }}>{L(card.title, lang)}</b>
                    <span className="badge ok" style={{ fontSize: '10px' }}>{card.category}</span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      color: 'var(--gold)',
                      fontSize: '15px',
                      background: 'var(--panel)',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      margin: '6px 0',
                      fontWeight: 'bold'
                    }}
                  >
                    {card.formula}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '4px' }}>
                    <b>{L(['Example', 'Esempio'], lang)}:</b> {L(card.example, lang)}
                  </div>
                  {card.trap && (
                    <div style={{ fontSize: '12px', color: 'var(--ember)', background: 'rgba(255,106,61,0.1)', padding: '4px 8px', borderRadius: '6px' }}>
                      ⚠️ {L(card.trap, lang)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
