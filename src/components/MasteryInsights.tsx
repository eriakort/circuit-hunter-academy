import React from 'react';
import type { Language, LearningMissionProgress, Mission } from '../types';
import { L } from '../helpers';

interface MasteryInsightsProps {
  missions: Mission[];
  progressByMission: Record<string, LearningMissionProgress | undefined>;
  lang: Language;
}

interface AssessmentPoint {
  score: number;
  attemptedAt: number;
  attempt: number;
  missionTitle: Mission['title'];
}

interface ConceptResult {
  id: string;
  title: Mission['title'];
  missionTitle: Mission['title'];
  percent: number;
  correct: number;
  attempted: number;
}

const dateLabel = (timestamp: number, lang: Language) =>
  new Date(timestamp).toLocaleDateString(lang === 'it' ? 'it-IT' : 'en-CA', {
    month: 'short',
    day: 'numeric'
  });

export const MasteryInsights: React.FC<MasteryInsightsProps> = ({
  missions,
  progressByMission,
  lang
}) => {
  const isItalian = lang === 'it';
  const assessments: AssessmentPoint[] = missions.flatMap(mission =>
    (progressByMission[mission.id]?.masteryAttemptHistory || []).map(attempt => ({
      ...attempt,
      missionTitle: mission.title
    }))
  ).sort((a, b) => a.attemptedAt - b.attemptedAt).slice(-8);

  const concepts: ConceptResult[] = missions.flatMap(mission =>
    (mission.learning?.concepts || []).flatMap(concept => {
      const result = progressByMission[mission.id]?.masteryConceptPerformance?.[concept.id];
      if (!result?.attempted) return [];
      return [{
        id: mission.id + ':' + concept.id,
        title: concept.title,
        missionTitle: mission.title,
        percent: Math.round((result.correct / result.attempted) * 100),
        correct: result.correct,
        attempted: result.attempted
      }];
    })
  ).sort((a, b) => b.percent - a.percent || b.attempted - a.attempted);

  const strongest = concepts.slice(0, 3);
  const needsFocus = [...concepts].sort((a, b) => a.percent - b.percent || b.attempted - a.attempted).slice(0, 3);
  const revisionChanges = missions.flatMap(mission =>
    Object.values(progressByMission[mission.id]?.conceptRevisionPerformance || [])
      .filter(result => result.baselineMasteryPercent !== undefined && result.postRevisionMasteryPercent !== undefined)
      .map(result => result.postRevisionMasteryPercent! - result.baselineMasteryPercent!)
  );
  const averageRevisionChange = revisionChanges.length
    ? Math.round(revisionChanges.reduce((sum, change) => sum + change, 0) / revisionChanges.length)
    : null;
  const trendChange = assessments.length >= 2
    ? assessments[assessments.length - 1].score - assessments[0].score
    : null;

  const chartPoints = assessments.map((attempt, index) => {
    const x = assessments.length === 1 ? 320 : 36 + (index / (assessments.length - 1)) * 568;
    const y = 148 - (attempt.score / 100) * 120;
    return { ...attempt, x, y };
  });
  const linePoints = chartPoints.map(point => `${point.x},${point.y}`).join(' ');

  const renderConceptList = (items: ConceptResult[], emptyText: string) => items.length ? (
    <ol className="mastery-insights-concepts">
      {items.map(item => (
        <li key={item.id}>
          <div className="mastery-insights-concept-heading">
            <strong>{L(item.title, lang)}</strong>
            <span>{item.percent}%</span>
          </div>
          <div className="learning-dashboard-track" role="img" aria-label={`${item.percent}% correct`}>
            <i style={{ width: `${item.percent}%` }} />
          </div>
          <small>{item.correct}/{item.attempted} {isItalian ? 'risposte corrette' : 'correct responses'} · {L(item.missionTitle, lang)}</small>
        </li>
      ))}
    </ol>
  ) : <p className="muted">{emptyText}</p>;

  return (
    <section className="mastery-insights" aria-label={isItalian ? 'Approfondimenti sulla maestria' : 'Mastery insights'}>
      <div className="mastery-insights-heading">
        <div>
          <span className="eyebrow">{isItalian ? 'OLTRE IL PUNTEGGIO' : 'BEYOND THE SCORE'}</span>
          <h3>{isItalian ? 'Approfondimenti sulla maestria' : 'Mastery insights'}</h3>
          <p className="muted">
            {isItalian
              ? 'Scopri come cambiano i risultati e quali concetti sono più solidi.'
              : 'See how assessment results change and which concepts are becoming stronger.'}
          </p>
        </div>
        <span className="mastery-insights-count">{assessments.length} {isItalian ? 'prove recenti' : 'recent assessments'}</span>
      </div>

      <div className="mastery-insights-grid">
        <article className="learning-dashboard-panel mastery-insights-trend">
          <div className="mastery-insights-panel-heading">
            <h4>{isItalian ? 'Andamento delle prove' : 'Assessment trend'}</h4>
            {trendChange !== null && (
              <strong className={trendChange > 0 ? 'trend-positive' : trendChange < 0 ? 'trend-negative' : ''}>
                {trendChange > 0 ? '+' : ''}{trendChange} pp
              </strong>
            )}
          </div>
          {assessments.length >= 2 ? (
            <>
              <svg className="mastery-trend-chart" viewBox="0 0 640 190" role="img"
                aria-label={isItalian ? 'Andamento degli ultimi otto risultati di maestria' : 'Trend of the last eight mastery assessment scores'}>
                {[28, 88, 148].map((y, index) => (
                  <g key={y}>
                    <line x1="36" x2="604" y1={y} y2={y} className="mastery-chart-gridline" />
                    <text x="26" y={y + 4} textAnchor="end" className="mastery-chart-label">{100 - index * 50}</text>
                  </g>
                ))}
                <polyline points={linePoints} className="mastery-chart-line" />
                {chartPoints.map((point, index) => (
                  <g key={`${point.attemptedAt}-${index}`}>
                    <circle cx={point.x} cy={point.y} r="5" className="mastery-chart-point" />
                    <title>{`${L(point.missionTitle, lang)} · ${point.score}% · ${dateLabel(point.attemptedAt, lang)}`}</title>
                  </g>
                ))}
              </svg>
              <div className="mastery-trend-endpoints">
                <span>{dateLabel(assessments[0].attemptedAt, lang)} · {assessments[0].score}%</span>
                <span>{dateLabel(assessments[assessments.length - 1].attemptedAt, lang)} · {assessments[assessments.length - 1].score}%</span>
              </div>
              <p className="mastery-insights-note">
                {isItalian
                  ? 'Confronto tra i risultati salvati più vecchio e più recente in questa finestra.'
                  : 'Compares the oldest and newest saved scores in this recent history window.'}
              </p>
            </>
          ) : (
            <p className="muted">
              {assessments.length === 1
                ? (isItalian ? 'Hai un risultato registrato. Completa un’altra prova per vedere l’andamento.' : 'You have one recorded score. Complete another assessment to reveal a trend.')
                : (isItalian ? 'Completa almeno due prove di maestria per visualizzare l’andamento.' : 'Complete at least two mastery assessments to see your score trend.')}
            </p>
          )}
        </article>

        <article className="learning-dashboard-panel mastery-insights-revision">
          <div className="mastery-insights-panel-heading">
            <h4>{isItalian ? 'Effetto del ripasso' : 'Revision impact'}</h4>
            {averageRevisionChange !== null && (
              <strong className={averageRevisionChange > 0 ? 'trend-positive' : averageRevisionChange < 0 ? 'trend-negative' : ''}>
                {averageRevisionChange > 0 ? '+' : ''}{averageRevisionChange} pp
              </strong>
            )}
          </div>
          {averageRevisionChange !== null ? (
            <>
              <p className="mastery-revision-summary">
                {isItalian
                  ? `Variazione media di ${averageRevisionChange > 0 ? '+' : ''}${averageRevisionChange} punti percentuali nella prima prova di maestria dopo il ripasso, su ${revisionChanges.length} concett${revisionChanges.length === 1 ? 'o' : 'i'}.`
                  : `Average change of ${averageRevisionChange > 0 ? '+' : ''}${averageRevisionChange} percentage points in the first mastery result after revision, across ${revisionChanges.length} concept(s).`}
              </p>
              <p className="mastery-insights-note">
                {isItalian
                  ? 'È un confronto osservato, non una prova che il ripasso da solo abbia causato il cambiamento.'
                  : 'This is an observed comparison, not proof that revision alone caused the change.'}
              </p>
            </>
          ) : (
            <p className="muted">
              {isItalian
                ? 'Completa un ripasso mirato e poi una nuova prova di maestria per misurare il cambiamento.'
                : 'Complete targeted revision followed by a new mastery assessment to measure the change.'}
            </p>
          )}
        </article>

        <article className="learning-dashboard-panel">
          <h4>{isItalian ? 'I tuoi punti di forza' : 'Your strengths'}</h4>
          {renderConceptList(strongest, isItalian ? 'I risultati dei concetti appariranno dopo una prova di maestria.' : 'Concept results will appear after a mastery assessment.')}
        </article>

        <article className="learning-dashboard-panel">
          <h4>{isItalian ? 'Concetti da seguire' : 'Concepts to watch'}</h4>
          {renderConceptList(needsFocus, isItalian ? 'Non ci sono ancora concetti da seguire.' : 'There are no concepts to flag yet.')}
        </article>
      </div>
    </section>
  );
};
