import { T } from '../helpers';
import React from 'react';
import type { Language } from '../types';
import type { LearningStreakSummary } from '../learningStreak';

interface LearningStreakProps {
  streak: LearningStreakSummary;
  lang: Language;
}

export const LearningStreak: React.FC<LearningStreakProps> = ({ streak, lang }) => {
  const isItalian = lang === 'it';
  const dayLabels = isItalian
    ? ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom']
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <section className="learning-streak" aria-label={T(lang, 'Study consistency', 'Costanza nello studio')}>
      <div className="learning-streak-heading">
        <div>
          <span className="learning-kicker">{T(lang, 'CONSISTENCY', 'COSTANZA')}</span>
          <h3>{T(lang, 'Your study consistency', 'La tua costanza nello studio')}</h3>
          <p className="muted">
            {T(lang, 'Activity is derived from saved mastery attempts and each concept’s latest targeted revision date; older activity may not be represented.', 'Le attività mostrate derivano dalle prove di maestria salvate e dalle date dell’ultimo ripasso mirato per concetto; le attività più vecchie potrebbero non essere incluse.')}
          </p>
        </div>
        <div className="learning-streak-metrics">
          <div className="learning-streak-metric">
            <strong>{streak.currentStreak}</strong>
            <span>{T(lang, 'Day streak', 'Giorni consecutivi')}</span>
          </div>
          <div className="learning-streak-metric">
            <strong>{streak.bestStreak}</strong>
            <span>{T(lang, 'Best recorded streak', 'Miglior serie registrata')}</span>
          </div>
          <div className="learning-streak-metric">
            <strong>{streak.activeLast7Days}/7</strong>
            <span>{T(lang, 'Active days', 'Giorni attivi')}</span>
          </div>
        </div>
      </div>
      <div className="learning-streak-days" aria-label={T(lang, 'Activity in the last seven days', 'Attività degli ultimi sette giorni')}>
        {streak.recentDays.map(day => {
          const date = new Date(day.dateKey + 'T00:00:00Z');
          const weekday = (date.getUTCDay() + 6) % 7;
          const label = dayLabels[weekday];
          const accessibleLabel = date.toLocaleDateString(T(lang, 'en-CA', 'it-IT'), {
            weekday: 'long', month: 'short', day: 'numeric', timeZone: 'UTC'
          });
          return (
            <div
              className={`learning-streak-day${day.active ? ' is-active' : ''}${day.isToday ? ' is-today' : ''}`}
              key={day.dateKey}
              aria-label={`${accessibleLabel}: ${day.active ? (T(lang, 'activity recorded', 'attività registrata')) : (T(lang, 'no activity recorded', 'nessuna attività registrata'))}`}
            >
              <span className="learning-streak-day-label">{label}</span>
              <span className="learning-streak-day-dot" aria-hidden="true">{day.active ? '✓' : '·'}</span>
            </div>
          );
        })}
      </div>
      {streak.activeLast7Days === 0 && (
        <p className="learning-streak-empty">
          {T(lang, 'Complete a mastery assessment or targeted revision to start tracking your consistency.', 'Completa una prova di maestria o un ripasso mirato per iniziare a registrare la tua costanza.')}
        </p>
      )}
    </section>
  );
};
