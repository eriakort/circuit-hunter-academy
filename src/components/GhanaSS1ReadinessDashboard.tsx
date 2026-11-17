import React from 'react';
import type { Language, LearningMissionProgress } from '../types';
import { L } from '../helpers';
import {
  getGhanaSS1IndicatorReadiness,
  getGhanaSS1ReadinessSummary,
  getGhanaSS1RecommendedIndicators
} from '../ghanaSS1Readiness';

interface GhanaSS1ReadinessDashboardProps {
  lang: Language;
  progressByMission: Record<string, LearningMissionProgress | undefined>;
  onStartDiagnostic: () => void;
  onReviewConcept: (conceptId: string) => void;
}

export const GhanaSS1ReadinessDashboard: React.FC<GhanaSS1ReadinessDashboardProps> = ({
  lang,
  progressByMission,
  onStartDiagnostic,
  onReviewConcept
}) => {
  const isItalian = lang === 'it';
  const indicators = getGhanaSS1IndicatorReadiness(progressByMission);
  const summary = getGhanaSS1ReadinessSummary(indicators);
  const recommendations = getGhanaSS1RecommendedIndicators(indicators);
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

  const assessmentAttempts = Object.values(progressByMission)
    .flatMap(progress => progress?.masteryAttemptHistory || [])
    .sort((a, b) => b.attemptedAt - a.attemptedAt);
  const diagnosticProgress = progressByMission['gh-core-ss1-45-indicator-diagnostic'];
  const latestScoreValue = assessmentAttempts[0]?.score ?? diagnosticProgress?.masteryScore;
  const latestScore = typeof latestScoreValue === 'number' ? latestScoreValue + '%' : '—';
  const totalAttempts = Object.values(progressByMission)
    .reduce((total, progress) => total + (progress?.masteryAttempts || 0), 0);

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
          <span>{isItalian ? 'Ultima prova' : 'Latest assessment score'}</span>
          <small>
            {isItalian
              ? totalAttempts + ' tentativi registrati'
              : totalAttempts + ' recorded attempts'}
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
            ? 'Un indicatore è considerato padroneggiato quando la precisione cumulativa nelle sue risposte raggiunge almeno l’80%. Il punteggio dell’ultima prova completa è mostrato separatamente.'
            : 'An indicator is marked mastered when cumulative accuracy on its recorded responses reaches at least 80%. The latest full assessment score is shown separately.'}
        </p>
      </div>

      <section className="ghana-readiness-next" aria-labelledby="ghana-readiness-next-title" data-testid="ghana-readiness-next">
        <div className="ghana-readiness-next-heading">
          <div>
            <span className="eyebrow">{isItalian ? 'IL TUO PROSSIMO PASSO' : 'YOUR NEXT STEP'}</span>
            <h3 id="ghana-readiness-next-title">{isItalian ? 'Percorso di studio consigliato' : 'Recommended study path'}</h3>
            <p className="muted">{isItalian
              ? 'Inizia dagli argomenti con risultati più bassi, poi affronta quelli non ancora valutati.'
              : 'Start with the topics where your results are lowest, then work through topics you have not assessed yet.'}</p>
          </div>
          <span className="ghana-readiness-next-count">{recommendations.length} / 3</span>
        </div>
        {recommendations.length > 0 ? (
          <ol className="ghana-readiness-next-list">
            {recommendations.map((indicator, index) => (
              <li key={indicator.id} data-recommended-indicator={indicator.id}>
                <span className="ghana-readiness-next-number">{index + 1}</span>
                <div className="ghana-readiness-next-copy">
                  <strong>{L(indicator.title, lang)}</strong>
                  <small>{indicator.subStrand} · {indicator.status === 'needs-revision'
                    ? (isItalian ? 'Da ripassare · ' : 'Needs revision · ') + indicator.percent + '%'
                    : (isItalian ? 'Non ancora valutato' : 'Not assessed yet')}</small>
                </div>
                <button type="button" className="btn ghost sm" onClick={() => onReviewConcept(indicator.id)}>
                  {indicator.status === 'needs-revision'
                    ? (isItalian ? 'Ripassa' : 'Review')
                    : (isItalian ? 'Studia' : 'Study')}
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <p className="ghana-readiness-complete" data-testid="ghana-readiness-complete">
            {isItalian
              ? 'Ottimo lavoro! Tutti i 45 indicatori hanno raggiunto la soglia di padronanza dell’80%. Continua con le sfide di trasferimento per mantenere le competenze.'
              : 'Excellent work! All 45 indicators have reached the 80% mastery threshold. Keep your skills sharp with the transfer challenges.'}
          </p>
        )}
      </section>

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
