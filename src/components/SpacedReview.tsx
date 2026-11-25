import React from 'react';
import type { Language, LearningMissionProgress, Mission } from '../types';
import { L, T } from '../helpers';

interface SpacedReviewProps {
  missions: Mission[];
  progressByMission: Record<string, LearningMissionProgress | undefined>;
  lang: Language;
  onReviewConcept: (missionId: string, conceptId: string) => void;
  onStartReviewQueue?: (items: Array<{ mission: Mission; concept: NonNullable<Mission['learning']>['concepts'][number] }>) => void;
}

export const SpacedReview: React.FC<SpacedReviewProps> = ({
  missions, progressByMission, lang, onReviewConcept, onStartReviewQueue
}) => {
  const isItalian = lang === 'it';
  const now = Date.now();
  const allItems = missions.flatMap(mission => {
    const schedule = progressByMission[mission.id]?.conceptReviewSchedule || {};
    return Object.entries(schedule).flatMap(([conceptId, item]) => {
      const concept = mission.learning?.concepts.find(candidate => candidate.id === conceptId);
      if (!concept) return [];
      return [{ mission, concept, ...item }];
    });
  }).sort((a, b) => a.dueAt - b.dueAt);
  const dueItems = allItems.filter(item => item.dueAt <= now);
  const upcomingItems = allItems.filter(item => item.dueAt > now).slice(0, 3);
  const reviewedThisWeek = allItems.filter(item => now - item.lastReviewedAt <= 7 * 24 * 60 * 60 * 1000).length;
  const nextDue = upcomingItems[0]?.dueAt;
  const formatDate = (timestamp: number) => new Date(timestamp).toLocaleDateString(T(lang, 'en-CA', 'it-IT'), {
    month: 'short', day: 'numeric'
  });

  return (
    <section className="spaced-review" aria-label={T(lang, 'Spaced review', 'Ripasso dilazionato')}>
      <div className="spaced-review-heading">
        <div className="learning-kicker">{T(lang, 'RETRIEVAL OVER TIME', 'RICHIAMO NEL TEMPO')}</div>
        <h3>{T(lang, 'Spaced review', 'Ripasso dilazionato')}</h3>
        <p className="muted">{T(lang, 'Review at the right time: intervals grow when you remember well and shorten when a concept needs more practice.', 'Ripassa al momento giusto: gli intervalli si allungano quando ricordi bene e si accorciano quando serve più pratica.')}</p>
      </div>

      <div className="spaced-review-stats">
        <div className="spaced-review-stat">
          <strong>{dueItems.length}</strong>
          <span>{T(lang, 'Due now', 'Da ripassare ora')}</span>
        </div>
        <div className="spaced-review-stat">
          <strong>{nextDue ? formatDate(nextDue) : '—'}</strong>
          <span>{T(lang, 'Next review', 'Prossimo ripasso')}</span>
        </div>
        <div className="spaced-review-stat">
          <strong>{reviewedThisWeek}</strong>
          <span>{T(lang, 'Reviewed this week', 'Ripassati questa settimana')}</span>
        </div>
      </div>

      {dueItems.length > 0 ? (
        <>
          <h4 className="spaced-review-subheading">{T(lang, 'Ready to review', 'Pronti per il ripasso')}</h4>
          {onStartReviewQueue && (
            <button
              type="button"
              className="btn sm"
              onClick={() => onStartReviewQueue(dueItems.map(item => ({ mission: item.mission, concept: item.concept })))}
            >
              {isItalian ? `Inizia sessione (${dueItems.length})` : `Start review session (${dueItems.length})`}
            </button>
          )}
          <div className="spaced-review-list">
            {dueItems.slice(0, 5).map(item => (
              <article className="spaced-review-item" key={item.mission.id + ':' + item.concept.id}>
                <div>
                  <strong>{L(item.concept.title, lang)}</strong>
                  <small>{L(item.mission.title, lang)}</small>
                  <small className="spaced-review-due">
                    {item.dueAt < now
                      ? (T(lang, 'Overdue since ', 'In ritardo dal ')) + formatDate(item.dueAt)
                      : (T(lang, 'Due today', 'Da ripassare oggi'))}
                  </small>
                </div>
                <button type="button" className="btn sm" onClick={() => onReviewConcept(item.mission.id, item.concept.id)}>
                  {T(lang, 'Start review', 'Inizia ripasso')}
                </button>
              </article>
            ))}
          </div>
        </>
      ) : allItems.length === 0 ? (
        <p className="spaced-review-empty">
          {T(lang, 'Your review schedule will appear here after your next mastery assessment.', 'Il tuo programma di ripasso apparirà qui dopo la prossima prova di maestria.')}
        </p>
      ) : (
        <p className="spaced-review-empty">
          {T(lang, 'Nothing is due today. Great work — your upcoming reviews are listed below.', 'Nessun concetto da ripassare oggi. Ottimo lavoro: controlla i prossimi ripassi qui sotto.')}
        </p>
      )}

      {upcomingItems.length > 0 && (
        <>
          <h4 className="spaced-review-subheading">{T(lang, 'Coming up', 'In programma')}</h4>
          <div className="spaced-review-list">
            {upcomingItems.map(item => (
              <article className="spaced-review-item spaced-review-upcoming" key={item.mission.id + ':' + item.concept.id}>
                <div>
                  <strong>{L(item.concept.title, lang)}</strong>
                  <small>{L(item.mission.title, lang)}</small>
                  <small>{T(lang, 'Scheduled for ', 'Previsto per ')}{formatDate(item.dueAt)}</small>
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
