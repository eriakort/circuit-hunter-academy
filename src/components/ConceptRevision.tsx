import React, { useState } from 'react';
import type { Language, LearningConcept, Mission } from '../types';
import { L } from '../helpers';

interface ConceptRevisionProps {
  mission: Mission;
  concept: LearningConcept;
  lang: Language;
  revisionPerformance?: { correct: number; attempted: number; sessions: number; lastReviewedAt: number };
  onClose: () => void;
  onComplete: (result: { correct: number; attempted: number }) => void;
  onContinue?: () => void;
  sessionPosition?: number;
  sessionLength?: number;
}

export const ConceptRevision: React.FC<ConceptRevisionProps> = ({
  mission,
  concept,
  lang,
  revisionPerformance,
  onClose,
  onComplete,
  onContinue,
  sessionPosition,
  sessionLength
}) => {
  const assessment = mission.learning?.masteryAssessment;
  const questions = assessment?.questions.filter(
    (_, index) => assessment.questionConceptIds?.[index] === concept.id
  ) || [];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const question = questions[questionIndex];

  const chooseAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null || completed) return;
    setSelectedAnswer(answerIndex);
    if (answerIndex === 0) setCorrectCount(count => count + 1);
  };

  const advance = () => {
    if (selectedAnswer === null) return;
    if (questionIndex + 1 < questions.length) {
      setQuestionIndex(index => index + 1);
      setSelectedAnswer(null);
      return;
    }
    const score = Math.round((correctCount / questions.length) * 100);
    setFinalScore(score);
    setCompleted(true);
    onComplete({ correct: correctCount, attempted: questions.length });
  };

  return (
    <section className="concept-revision card" aria-labelledby="concept-revision-title">
      <div className="concept-revision-header">
        <div>
          <div className="learning-kicker">{lang === 'it' ? 'PERCORSO PERSONALIZZATO' : 'PERSONALIZED LEARNING'}</div>
          <h2 id="concept-revision-title">{lang === 'it' ? 'Ripasso mirato' : 'Targeted concept revision'}</h2>
          <p className="muted">{L(mission.title, lang)} · {L(concept.title, lang)}</p>
        </div>
        <button type="button" className="btn ghost sm" onClick={onClose}>
          {lang === 'it' ? 'Chiudi ripasso' : 'Close revision'}
        </button>
      </div>

      <div className="concept-revision-study">
        <article>
          <h3>{lang === 'it' ? 'Concetto da ricordare' : 'The key idea'}</h3>
          <p>{L(concept.explanation, lang)}</p>
          {concept.example && <p className="concept-revision-example">{L(concept.example, lang)}</p>}
        </article>

        {concept.workedExample && (
          <details className="learning-example" open>
            <summary>{lang === 'it' ? 'Rivedi un esempio svolto' : 'Review a worked example'}</summary>
            <div className="learning-example-body">
              <p className="learning-scenario">{L(concept.workedExample.scenario, lang)}</p>
              <ol>
                {concept.workedExample.steps.map((step, index) => <li key={index}>{L(step, lang)}</li>)}
              </ol>
              <div className="learning-answer">
                <strong>{lang === 'it' ? 'Risposta ragionata' : 'Reasoned answer'}</strong>
                <p>{L(concept.workedExample.answer, lang)}</p>
              </div>
            </div>
          </details>
        )}

        {!!concept.misconceptions?.length && (
          <div className="learning-misconception">
            <strong>{lang === 'it' ? 'Errore comune da evitare' : 'Common misconception to avoid'}</strong>
            {concept.misconceptions.map((item, index) => (
              <p key={index}>
                <span>{L(item.belief, lang)} </span>
                {L(item.correction, lang)}
              </p>
            ))}
          </div>
        )}

        {!!concept.knowledgePrompts?.length && (
          <div className="concept-revision-prompts">
            <strong>{lang === 'it' ? 'Prova a spiegarlo con parole tue' : 'Explain it in your own words'}</strong>
            <ul>{concept.knowledgePrompts.map((prompt, index) => <li key={index}>{L(prompt, lang)}</li>)}</ul>
          </div>
        )}
      </div>

      <div className="concept-revision-quiz">
        <div className="learning-section-heading">
          <span className="learning-kicker">{lang === 'it' ? 'VERIFICA DI RICHIAMO' : 'RETRIEVAL PRACTICE'}</span>
          <h3>{lang === 'it' ? 'Controlla ciò che ricordi' : 'Check what you remember'}</h3>
          {sessionPosition !== undefined && sessionLength !== undefined && (
            <div className="guided-progress" aria-label={lang === 'it' ? 'Avanzamento sessione' : 'Session progress'}>
              {lang === 'it' ? 'Concetto' : 'Concept'} {sessionPosition} / {sessionLength}
            </div>
          )}
          {questions.length > 0 && !completed && (
            <div className="guided-progress">
              {lang === 'it' ? 'Domanda' : 'Question'} {questionIndex + 1} / {questions.length}
            </div>
          )}
        </div>

        {questions.length > 0 && !completed && question && (
          <div className="guided-question">
            <strong>{L(question.q, lang)}</strong>
            <div className="guided-options">
              {question.a.map((option, index) => (
                <button
                  type="button"
                  key={index}
                  className={
                    'guided-option' +
                    (selectedAnswer !== null && index === 0 ? ' revision-option-correct' : '') +
                    (selectedAnswer === index && index !== 0 ? ' revision-option-wrong' : '')
                  }
                  disabled={selectedAnswer !== null}
                  onClick={() => chooseAnswer(index)}
                >
                  <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{L(option, lang)}</span>
                </button>
              ))}
            </div>
            {selectedAnswer !== null && (
              <div className={selectedAnswer === 0 ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{selectedAnswer === 0
                  ? (lang === 'it' ? 'Risposta corretta' : 'Correct')
                  : (lang === 'it' ? 'Non ancora' : 'Not quite')}</strong>
                <p>{L(question.why, lang)}</p>
                <button type="button" className="btn" onClick={advance}>
                  {questionIndex + 1 < questions.length
                    ? (lang === 'it' ? 'Prossima domanda' : 'Next question')
                    : (lang === 'it' ? 'Completa ripasso' : 'Finish revision')}
                </button>
              </div>
            )}
          </div>
        )}

        {questions.length === 0 && (
          <div className="muted">
            <p>{lang === 'it'
              ? 'Non sono ancora collegate domande di verifica a questo concetto. Rivedi i contenuti qui sopra.'
              : 'No assessment questions are linked to this concept yet. Review the learning material above.'}</p>
            {onContinue && (
              <button type="button" className="btn ghost" onClick={onContinue}>
                {lang === 'it' ? 'Salta al prossimo concetto' : 'Skip to next concept'}
              </button>
            )}
          </div>
        )}

        {completed && finalScore !== null && (
          <div className="guided-complete" role="status" aria-live="polite">
            <strong>{lang === 'it' ? 'Ripasso completato' : 'Revision complete'} · {finalScore}%</strong>
            <p>{lang === 'it'
              ? 'I risultati di questo ripasso sono stati salvati nel tuo percorso.'
              : 'This revision result has been saved to your learning journey.'}</p>
            {onContinue && (
              <button type="button" className="btn" onClick={onContinue}>
                {sessionPosition !== undefined && sessionLength !== undefined && sessionPosition < sessionLength
                  ? (lang === 'it' ? 'Prossimo concetto' : 'Next concept')
                  : (lang === 'it' ? 'Vedi riepilogo' : 'View session summary')}
              </button>
            )}
          </div>
        )}
      </div>

      {revisionPerformance?.sessions ? (
        <p className="concept-revision-footnote">
          {lang === 'it'
            ? 'Sessioni di ripasso completate: ' + revisionPerformance.sessions
            : 'Completed revision sessions: ' + revisionPerformance.sessions}
        </p>
      ) : null}
    </section>
  );
};
