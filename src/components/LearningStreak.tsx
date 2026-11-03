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
  const today = new Date();
  const todayIndex = (today.getUTCDay() + 6) % 7;

  return (
    <section className="learning-streak" aria-label={isItalian ? 'Costanza nello studio' : 'Study consistency'}>
      <div className="learning-streak-heading">
        <div>
          <span className="learning-kicker">{isItalian ? 'COSTANZA' : 'CONSISTENCY'}</span>
          <h3>{isItalian ? 'La tua costanza nello studio' : 'Your study consistency'}</h3>
          <p className="muted">
            {isItalian
              ? 'Le attività registrate includono prove di maestria e sessioni di ripasso mirato.'
              : 'Recorded activity includes mastery assessments and targeted revision sessions.'}
          </p>
        </div>
        <div className="learning-streak-metrics">
          <div className="learning-streak-metric">
            <strong>{streak.currentStreak}</strong>
            <span>{isItalian ? 'Giorni consecutivi' : 'Day streak'}</span>
          </div>
          <div className="learning-streak-metric">
            <strong>{streak.bestStreak}</strong>
            <span>{isItalian ? 'Record personale' : 'Best streak'}</span>
          </div>
          <div className="learning-streak-metric">
            <strong>{streak.activeLast7Days}/7</strong>
            <span>{isItalian ? 'Giorni attivi' : 'Active days'}</span>
          </div>
        </div>
      </div>
      <div className="learning-streak-days" aria-label={isItalian ? 'Attività degli ultimi sette giorni' : 'Activity in the last seven days'}>
        {streak.recentDays.map((day, index) => {
          const date = new Date(day.dateKey + 'T00:00:00Z');
          const weekday = (date.getUTCDay() + 6) % 7;
          const label = dayLabels[weekday];
          const accessibleLabel = date.toLocaleDateString(isItalian ? 'it-IT' : 'en-CA', {
            weekday: 'long', month: 'short', day: 'numeric', timeZone: 'UTC'
          });
          return (
            <div
              className={`learning-streak-day${day.active ? ' is-active' : ''}${day.isToday ? ' is-today' : ''}`}
              key={day.dateKey}
              aria-label={`${accessibleLabel}: ${day.active ? (isItalian ? 'attività registrata' : 'activity recorded') : (isItalian ? 'nessuna attività registrata' : 'no activity recorded')}`}
            >
              <span className="learning-streak-day-label">{label}</span>
              <span className="learning-streak-day-dot" aria-hidden="true">{day.active ? '✓' : '·'}</span>
            </div>
          );
        })}
      </div>
      {streak.activeLast7Days === 0 && (
        <p className="learning-streak-empty">
          {isItalian
            ? 'Completa una prova di maestria o un ripasso mirato per iniziare a registrare la tua costanza.'
            : 'Complete a mastery assessment or targeted revision to start tracking your consistency.'}
        </p>
      )}
    </section>
  );
};
