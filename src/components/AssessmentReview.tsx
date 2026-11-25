import React from 'react';
import type { Language, LearningMissionProgress, Mission } from '../types';
import { L, T } from '../helpers';
import { resolveAssessmentQuestions } from '../learningAssessment';

interface AssessmentReviewProps {
  missions: Mission[];
  progressByMission: Record<string, LearningMissionProgress | undefined>;
  lang: Language;
  onReviewConcept: (missionId: string, conceptId: string) => void;
}

export const AssessmentReview: React.FC<AssessmentReviewProps> = ({
  missions, progressByMission, lang, onReviewConcept
}) => {
  const isItalian = lang === 'it';
  const attempts = missions.flatMap(mission => {
    const progress = progressByMission[mission.id];
    const assessment = mission.learning?.masteryAssessment;
    if (!assessment || !progress?.masteryAttemptReviews?.length) return [];
    return progress.masteryAttemptReviews.map(review => ({ mission, assessment, review }));
  }).sort((a, b) => b.review.attemptedAt - a.review.attemptedAt).slice(0, 5);

  return (
    <section className="assessment-review card" aria-label={T(lang, 'Assessment review', 'Revisione delle prove')}>
      <div className="assessment-review-heading">
        <div className="learning-kicker">{T(lang, 'LEARN FROM MISTAKES', 'IMPARA DAGLI ERRORI')}</div>
        <h3>{T(lang, 'Assessment review', 'Revisione delle prove')}</h3>
        <p className="muted">{T(lang, 'Revisit your answers, read the explanations, and jump straight to concepts that need more practice.', 'Rivedi le risposte, leggi le spiegazioni e torna direttamente ai concetti da rinforzare.')}</p>
      </div>

      {attempts.length ? (
        <div className="assessment-review-list">
          {attempts.map(({ mission, assessment, review }) => {
            const reviewQuestions = resolveAssessmentQuestions(assessment, review.questionVariantIndexes);
            const missed = reviewQuestions.flatMap((question, index) => {
              if (review.answers[index] === 0) return [];
              const conceptId = assessment.questionConceptIds?.[index];
              const concept = mission.learning?.concepts.find(item => item.id === conceptId);
              return [{ question, index, conceptId, concept, selected: review.answers[index] }];
            });
            const missedConcepts = Array.from(new Set(missed.map(item => item.conceptId).filter((id): id is string => !!id)));
            return (
              <details className="assessment-review-attempt" key={mission.id + ':' + review.attempt + ':' + review.attemptedAt}>
                <summary>
                  <strong>{L(mission.title, lang)} · {T(lang, 'Attempt', 'Tentativo')} {review.attempt}</strong>
                  <span className="assessment-review-meta">
                    <b className="assessment-review-score">{review.score}%</b>
                    <span>{new Date(review.attemptedAt).toLocaleDateString(T(lang, 'en-CA', 'it-IT'))}</span>
                    <span>{missed.length} {T(lang, 'missed', 'errori')}</span>
                  </span>
                </summary>
                <div className="assessment-review-body">
                  {missed.length > 0 && (
                    <section className="assessment-review-mistakes">
                      <h4>{T(lang, 'Mistake analysis', 'Analisi degli errori')}</h4>
                      {missedConcepts.length > 0 ? (
                        <div className="assessment-review-concepts">
                          {missedConcepts.map(conceptId => {
                            const concept = mission.learning?.concepts.find(item => item.id === conceptId);
                            const count = missed.filter(item => item.conceptId === conceptId).length;
                            if (!concept) return null;
                            return (
                              <div className="assessment-review-concept" key={conceptId}>
                                <strong>{L(concept.title, lang)} · {count}</strong>
                                <button type="button" className="btn ghost sm" onClick={() => onReviewConcept(mission.id, conceptId)}>
                                  {T(lang, 'Review concept', 'Ripassa concetto')}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="muted">{T(lang, 'These missed questions are not linked to a specific concept yet.', 'Questi errori non sono ancora associati a un concetto specifico.')}</p>
                      )}
                    </section>
                  )}
                  <section className="assessment-review-questions">
                    <h4>{T(lang, 'Question-by-question review', 'Revisione domanda per domanda')}</h4>
                    {reviewQuestions.map((question, index) => {
                      const selected = review.answers[index];
                      const correct = selected === 0;
                      return (
                        <article className={'assessment-review-question ' + (correct ? 'is-correct' : 'is-wrong')} key={index}>
                          <strong>{index + 1}. {L(question.q, lang)}</strong>
                          <p className="assessment-review-answer">
                            <span className={correct ? 'right-answer' : 'wrong-answer'}>
                              {correct ? (T(lang, 'Your answer: ', 'La tua risposta: ')) : (T(lang, 'Your answer: ', 'La tua risposta: '))}
                              {question.a[selected] ? L(question.a[selected], lang) : (T(lang, 'No answer recorded', 'Nessuna risposta registrata'))}
                            </span>
                          </p>
                          {!correct && <p className="assessment-review-answer right-answer">
                            {T(lang, 'Correct answer: ', 'Risposta corretta: ')}{L(question.a[0], lang)}
                          </p>}
                          <p className="assessment-review-explanation">{L(question.why, lang)}</p>
                        </article>
                      );
                    })}
                  </section>
                </div>
              </details>
            );
          })}
        </div>
      ) : (
        <p className="assessment-review-empty">
          {T(lang, 'Detailed assessment reviews will appear here after your next mastery attempt.', 'I dettagli delle prove appariranno qui dopo il prossimo tentativo di maestria.')}
        </p>
      )}
    </section>
  );
};
