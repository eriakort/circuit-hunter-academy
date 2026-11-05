import React from 'react';
import type { Language, LearningMissionProgress, Mission } from '../types';
import { L } from '../helpers';

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
    <section className="assessment-review card" aria-label={isItalian ? 'Revisione delle prove' : 'Assessment review'}>
      <div className="assessment-review-heading">
        <div className="learning-kicker">{isItalian ? 'IMPARA DAGLI ERRORI' : 'LEARN FROM MISTAKES'}</div>
        <h3>{isItalian ? 'Revisione delle prove' : 'Assessment review'}</h3>
        <p className="muted">{isItalian
          ? 'Rivedi le risposte, leggi le spiegazioni e torna direttamente ai concetti da rinforzare.'
          : 'Revisit your answers, read the explanations, and jump straight to concepts that need more practice.'}</p>
      </div>

      {attempts.length ? (
        <div className="assessment-review-list">
          {attempts.map(({ mission, assessment, review }) => {
            const missed = assessment.questions.flatMap((question, index) => {
              if (review.answers[index] === 0) return [];
              const conceptId = assessment.questionConceptIds?.[index];
              const concept = mission.learning?.concepts.find(item => item.id === conceptId);
              return [{ question, index, conceptId, concept, selected: review.answers[index] }];
            });
            const missedConcepts = Array.from(new Set(missed.map(item => item.conceptId).filter((id): id is string => !!id)));
            return (
              <details className="assessment-review-attempt" key={mission.id + ':' + review.attempt + ':' + review.attemptedAt}>
                <summary>
                  <strong>{L(mission.title, lang)} · {isItalian ? 'Tentativo' : 'Attempt'} {review.attempt}</strong>
                  <span className="assessment-review-meta">
                    <b className="assessment-review-score">{review.score}%</b>
                    <span>{new Date(review.attemptedAt).toLocaleDateString(isItalian ? 'it-IT' : 'en-CA')}</span>
                    <span>{missed.length} {isItalian ? 'errori' : 'missed'}</span>
                  </span>
                </summary>
                <div className="assessment-review-body">
                  {missed.length > 0 && (
                    <section className="assessment-review-mistakes">
                      <h4>{isItalian ? 'Analisi degli errori' : 'Mistake analysis'}</h4>
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
                                  {isItalian ? 'Ripassa concetto' : 'Review concept'}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="muted">{isItalian ? 'Questi errori non sono ancora associati a un concetto specifico.' : 'These missed questions are not linked to a specific concept yet.'}</p>
                      )}
                    </section>
                  )}
                  <section className="assessment-review-questions">
                    <h4>{isItalian ? 'Revisione domanda per domanda' : 'Question-by-question review'}</h4>
                    {assessment.questions.map((question, index) => {
                      const selected = review.answers[index];
                      const correct = selected === 0;
                      return (
                        <article className={'assessment-review-question ' + (correct ? 'is-correct' : 'is-wrong')} key={index}>
                          <strong>{index + 1}. {L(question.q, lang)}</strong>
                          <p className="assessment-review-answer">
                            <span className={correct ? 'right-answer' : 'wrong-answer'}>
                              {correct ? (isItalian ? 'La tua risposta: ' : 'Your answer: ') : (isItalian ? 'La tua risposta: ' : 'Your answer: ')}
                              {question.a[selected] ? L(question.a[selected], lang) : (isItalian ? 'Nessuna risposta registrata' : 'No answer recorded')}
                            </span>
                          </p>
                          {!correct && <p className="assessment-review-answer right-answer">
                            {isItalian ? 'Risposta corretta: ' : 'Correct answer: '}{L(question.a[0], lang)}
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
          {isItalian
            ? 'I dettagli delle prove appariranno qui dopo il prossimo tentativo di maestria.'
            : 'Detailed assessment reviews will appear here after your next mastery attempt.'}
        </p>
      )}
    </section>
  );
};
