import React from 'react';
import type { Language, LearningMissionProgress } from '../types';
import { L } from '../helpers';
import {
  getGhanaSS1IndicatorReadiness,
  getGhanaSS1ReadinessSummary
} from '../ghanaSS1Readiness';

interface GhanaSS1ReadinessDashboardProps {
  lang: Language;
  progress?: LearningMissionProgress;
  onStartDiagnostic: () => void;
  onReviewConcept: (conceptId: string) => void;
}

export const GhanaSS1ReadinessDashboard: React.FC<GhanaSS1ReadinessDashboardProps> = ({
  lang,
  progress,
  onStartDiagnostic,
  onReviewConcept
}) => {
  const isItalian = lang === 'it';
  const indicators = getGhanaSS1IndicatorReadiness(progress);
  const summary = getGhanaSS1ReadinessSummary(indicators);
  const groups = indicators.reduce<Array<{
    strand: string;
    subStrand: string;
    indicators: typeof indicators;
  }>>((result, indicator) => {
    let group = result.find(item => item.subStrand === indicator.subStrand);
    if (!group) {
      group = {
        strand: indicator.strand,
        subStrand: indicator.subStrand,
        indicators: []
      };
      result.push(group);
    }
    group.indicators.push(indicator);
    return result;
  }, []);

  const latestScore = typeof progress?.masteryScore === 'number'
    ? progress.masteryScore + '%'
    : '—';

  const statusLabel = (status: string) => {
    if (status === 'mastered') return isItalian ? 'Padroneggiato' : 'Mastered';
    if (status === 'needs-revision') return isItalian ? 'Da ripassare' : 'Needs revision';
    return isItalian ? 'Non valutato' : 'Not assessed';
  };

  return (
    <section
      className="ghana-readiness-dashboard card"
      aria-label={isItalian ? 'Cruscotto di prontezza matematica SHS 1' : 'SHS 1 Mathematics readiness dashboard'}
      data-testid="ghana-readiness-dashboard"
    >
      <div className="ghana-readiness-heading">
        <div>
          <span className="eyebrow">GHANA NaCCA · SHS 1 · 2023</span>
          <h2>{isItalian ? 'Prontezza di matematica SHS 1' : 'SHS 1 Mathematics readiness'}</h2>
          <p className="muted">
            {isItalian
              ? 'Segui i progressi su tutti i 45 indicatori ufficiali, organizzati negli otto sotto-ambiti.'
              : 'Track progress across all 45 official learning indicators, grouped into the eight sub-strands.'}
          </p>
        </div>
        <button type="button" className="btn sm" onClick={onStartDiagnostic}>
          {isItalian ? 'Avvia la verifica dei 45 indicatori' : 'Take 45-indicator diagnostic'}
        </button>
      </div>

      <div className="ghana-readiness-stats" aria-label={isItalian ? 'Riepilogo degli indicatori' : 'Indicator summary'}>
        <div className="ghana-readiness-stat">
          <strong data-testid="ghana-readiness-mastered">{summary.mastered}/{summary.total}</strong>
          <span>{isItalian ? 'Indicatori padroneggiati' : 'Indicators mastered'}</span>
        </div>
        <div className="ghana-readiness-stat">
          <strong data-testid="ghana-readiness-needs-revision">{summary.needsRevision}</strong>
          <span>{isItalian ? 'Da ripassare' : 'Needs revision'}</span>
        </div>
        <div className="ghana-readiness-stat">
          <strong data-testid="ghana-readiness-not-assessed">{summary.notAssessed}</strong>
          <span>{isItalian ? 'Non valutati' : 'Not assessed'}</span>
        </div>
        <div className="ghana-readiness-stat">
          <strong data-testid="ghana-readiness-latest-score">{latestScore}</strong>
          <span>{isItalian ? 'Ultima verifica completa' : 'Latest diagnostic score'}</span>
          <small>
            {isItalian
              ? (progress?.masteryAttempts || 0) + ' tentativi registrati'
              : (progress?.masteryAttempts || 0) + ' recorded attempts'}
          </small>
        </div>
      </div>

      <div className="ghana-readiness-progress" aria-label={isItalian ? 'Indicatori padroneggiati su 45' : 'Mastered indicators out of 45'}>
        <div className="ghana-readiness-progress-copy">
          <strong>{isItalian ? 'Prontezza complessiva' : 'Overall readiness'}</strong>
          <span>{summary.mastered} / {summary.total} · {summary.total ? Math.round((summary.mastered / summary.total) * 100) : 0}%</span>
        </div>
        <div className="ghana-readiness-track" role="img" aria-label={summary.mastered + ' of ' + summary.total + ' indicators mastered'}>
          <i style={{ width: (summary.total ? (summary.mastered / summary.total) * 100 : 0) + '%' }} />
        </div>
        <p className="ghana-readiness-note">
          {isItalian
            ? 'Un indicatore è considerato padroneggiato quando la precisione cumulativa nelle sue risposte raggiunge almeno l’80%. Il risultato della verifica completa è mostrato separatamente.'
            : 'An indicator is marked mastered when cumulative accuracy on its recorded responses reaches at least 80%. The full diagnostic score is shown separately.'}
        </p>
      </div>

      <div className="ghana-readiness-groups">
        {groups.map((group, groupIndex) => {
          const groupMastered = group.indicators.filter(item => item.status === 'mastered').length;
          const groupNeedsRevision = group.indicators.filter(item => item.status === 'needs-revision').length;
          const groupNotAssessed = group.indicators.filter(item => item.status === 'not-assessed').length;

          return (
            <details
              className="ghana-readiness-group"
              key={group.subStrand}
              data-sub-strand={group.subStrand}
              open={groupIndex === 0 || groupNeedsRevision > 0}
            >
              <summary>
                <span className="ghana-readiness-group-title">
                  <strong>{group.subStrand}</strong>
                  <small>{group.strand}</small>
                </span>
                <span className="ghana-readiness-group-counts">
                  <span className="mastered">{groupMastered} {isItalian ? 'padroneggiati' : 'mastered'}</span>
                  <span className="needs-revision">{groupNeedsRevision} {isItalian ? 'da ripassare' : 'to revise'}</span>
                  <span className="not-assessed">{groupNotAssessed} {isItalian ? 'non valutati' : 'not assessed'}</span>
                </span>
                <span className="ghana-readiness-group-total">{groupMastered} / {group.indicators.length}</span>
              </summary>
              <ol className="ghana-readiness-indicators">
                {group.indicators.map(indicator => (
                  <li
                    className={'ghana-readiness-indicator ' + indicator.status}
                    key={indicator.id}
                    data-indicator-id={indicator.id}
                    data-status={indicator.status}
                  >
                    <div className="ghana-readiness-indicator-copy">
                      <span className="ghana-readiness-indicator-code">
                        {indicator.learningIndicatorId} · {indicator.contentStandardId}
                      </span>
                      <strong>{L(indicator.title, lang)}</strong>
                      <small>
                        {indicator.percent === null
                          ? (isItalian ? 'Nessuna risposta registrata' : 'No responses recorded')
                          : indicator.percent + '% · ' + indicator.correct + '/' + indicator.attempted + ' ' + (isItalian ? 'risposte corrette' : 'correct responses')}
                      </small>
                    </div>
                    <span className={'ghana-readiness-status ' + indicator.status}>
                      {statusLabel(indicator.status)}
                    </span>
                    <button
                      type="button"
                      className="btn ghost sm ghana-readiness-review"
                      aria-label={(isItalian ? 'Ripassa ' : 'Study concept: ') + L(indicator.title, lang)}
                      onClick={() => onReviewConcept(indicator.id)}
                    >
                      {indicator.status === 'not-assessed'
                        ? (isItalian ? 'Studia' : 'Study')
                        : (isItalian ? 'Ripassa' : 'Review')}
                    </button>
                  </li>
                ))}
              </ol>
            </details>
          );
        })}
      </div>

      <p className="ghana-readiness-footnote">
        {isItalian
          ? 'La verifica diagnostica è uno strumento di ripasso e non aggiunge indicatori ai totali ufficiali del programma NaCCA.'
          : 'The diagnostic is a revision overlay; it does not add indicators to the official NaCCA curriculum totals.'}
      </p>
    </section>
  );
};
