import React, { useState } from 'react';
import type { Language, LearningConcept, Mission } from '../types';
import { L, T } from '../helpers';
import { getConceptAssessmentQuestionPool } from '../learningAssessment';

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
  const questions = getConceptAssessmentQuestionPool(assessment, concept.id);
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
    <section className="concept-revision card" aria-labelledby="concept-revision-title" data-question-count={questions.length}>
      <div className="concept-revision-header">
        <div>
          <div className="learning-kicker">{T(lang, 'PERSONALIZED LEARNING', 'PERCORSO PERSONALIZZATO')}</div>
          <h2 id="concept-revision-title">{T(lang, 'Targeted concept revision', 'Ripasso mirato')}</h2>
          <p className="muted">{L(mission.title, lang)} · {L(concept.title, lang)}</p>
        </div>
        <button type="button" className="btn ghost sm" onClick={onClose}>
          {T(lang, 'Close revision', 'Chiudi ripasso')}
        </button>
      </div>

      <div className="concept-revision-study">
        <article>
          <h3>{T(lang, 'The key idea', 'Concetto da ricordare')}</h3>
          <p>{L(concept.explanation, lang)}</p>
          {concept.example && <p className="concept-revision-example">{L(concept.example, lang)}</p>}
        </article>

        {concept.workedExample && (
          <details className="learning-example" open>
            <summary>{T(lang, 'Review a worked example', 'Rivedi un esempio svolto')}</summary>
            <div className="learning-example-body">
              <p className="learning-scenario">{L(concept.workedExample.scenario, lang)}</p>
              <ol>
                {concept.workedExample.steps.map((step, index) => <li key={index}>{L(step, lang)}</li>)}
              </ol>
              <div className="learning-answer">
                <strong>{T(lang, 'Reasoned answer', 'Risposta ragionata')}</strong>
                <p>{L(concept.workedExample.answer, lang)}</p>
              </div>
            </div>
          </details>
        )}

        {!!concept.misconceptions?.length && (
          <div className="learning-misconception">
            <strong>{T(lang, 'Common misconception to avoid', 'Errore comune da evitare')}</strong>
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
            <strong>{T(lang, 'Explain it in your own words', 'Prova a spiegarlo con parole tue')}</strong>
            <ul>{concept.knowledgePrompts.map((prompt, index) => <li key={index}>{L(prompt, lang)}</li>)}</ul>
          </div>
        )}
      </div>

      <div className="concept-revision-quiz">
        <div className="learning-section-heading">
          <span className="learning-kicker">{T(lang, 'RETRIEVAL PRACTICE', 'VERIFICA DI RICHIAMO')}</span>
          <h3>{T(lang, 'Check what you remember', 'Controlla ciò che ricordi')}</h3>
          {sessionPosition !== undefined && sessionLength !== undefined && (
            <div className="guided-progress" aria-label={T(lang, 'Session progress', 'Avanzamento sessione')}>
              {T(lang, 'Concept', 'Concetto')} {sessionPosition} / {sessionLength}
            </div>
          )}
          {questions.length > 0 && !completed && (
            <div className="guided-progress" data-testid="concept-revision-question-progress">
              {T(lang, 'Question', 'Domanda')} {questionIndex + 1} / {questions.length}
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
                  ? (T(lang, 'Correct', 'Risposta corretta'))
                  : (T(lang, 'Not quite', 'Non ancora'))}</strong>
                <p>{L(question.why, lang)}</p>
                <button type="button" className="btn" onClick={advance}>
                  {questionIndex + 1 < questions.length
                    ? (T(lang, 'Next question', 'Prossima domanda'))
                    : (T(lang, 'Finish revision', 'Completa ripasso'))}
                </button>
              </div>
            )}
          </div>
        )}

        {questions.length === 0 && (
          <div className="muted">
            <p>{T(lang, 'No assessment questions are linked to this concept yet. Review the learning material above.', 'Non sono ancora collegate domande di verifica a questo concetto. Rivedi i contenuti qui sopra.')}</p>
            {onContinue && (
              <button type="button" className="btn ghost" onClick={onContinue}>
                {T(lang, 'Skip to next concept', 'Salta al prossimo concetto')}
              </button>
            )}
          </div>
        )}

        {completed && finalScore !== null && (
          <div className="guided-complete" role="status" aria-live="polite">
            <strong>{T(lang, 'Revision complete', 'Ripasso completato')} · {finalScore}%</strong>
            <p>{T(lang, 'This revision result has been saved to your learning journey.', 'I risultati di questo ripasso sono stati salvati nel tuo percorso.')}</p>
            {onContinue && (
              <button type="button" className="btn" onClick={onContinue}>
                {sessionPosition !== undefined && sessionLength !== undefined && sessionPosition < sessionLength
                  ? (T(lang, 'Next concept', 'Prossimo concetto'))
                  : (T(lang, 'View session summary', 'Vedi riepilogo'))}
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
