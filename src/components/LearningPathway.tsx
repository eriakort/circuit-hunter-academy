import React from 'react';
import type { Language, LearningMissionProgress, Mission } from '../types';
import { L } from '../helpers';
import { HARDWARE_LEARNING_PILOT } from '../data/learningPilot';
import { ui, uiText } from '../data/missionUi';

interface LearningPathwayProps {
  mission: Mission;
  lang: Language;
  progress?: LearningMissionProgress;
  missionCleared: boolean;
}

export const LearningPathway: React.FC<LearningPathwayProps> = ({
  mission, lang, progress, missionCleared
}) => {
  const learning = mission.learning;
  const pilot = HARDWARE_LEARNING_PILOT[mission.id];
  if (!learning) return null;

  // The pilot map provides curated overrides for selected missions. Every mission
  // with a learning definition can render its own summary and technique unlock.
  const summary = pilot?.summary ?? learning.summary ?? [];
  const techniqueUnlock = pilot?.techniqueUnlock ?? learning.techniqueUnlock;

  const stages = [
    ...(learning.guidedPractice?.length
      ? [{ id: 'guided', label: uiText('Guided practice', 'Esercitazione guidata'), complete: !!progress?.guidedPracticeComplete }]
      : []),
    ...(learning.independentPractice?.length
      ? [{ id: 'independent', label: uiText('Independent practice', 'Esercitazione autonoma'), complete: !!progress?.independentPracticeComplete }]
      : []),
    ...(learning.knowledgeCheck?.length
      ? [{ id: 'knowledge', label: uiText('Knowledge check', 'Verifica delle conoscenze'), complete: typeof progress?.knowledgeCheckScore === 'number' }]
      : []),
    ...(learning.masteryAssessment
      ? [{ id: 'mastery', label: uiText('Mastery trial', 'Prova di maestria'), complete: !!progress?.mastered }]
      : []),
    { id: 'battle', label: uiText('Boss battle', 'Battaglia finale'), complete: missionCleared }
  ];

  return (
    <section className="learning-pathway card" aria-label={ui(lang, 'Learning pathway', 'Percorso di apprendimento')} data-objective-count={learning.objectives.length}>
      <div className="learning-pathway-heading">
        <div>
          <span className="learning-kicker">{ui(lang, 'MISSION BRIEFING · LEARNING PATHWAY', 'BRIEFING DELLA MISSIONE · PERCORSO DI APPRENDIMENTO')}</span>
          <h3>{ui(lang, 'Your learning mission', 'La tua missione di apprendimento')}</h3>
          <p>{ui(lang, 'Clear objectives, progressive practice, and a technique to earn.', 'Obiettivi chiari, pratica progressiva e una tecnica da conquistare.')}</p>
        </div>
        <span className="learning-pathway-count">{learning.objectives.length} {ui(lang, 'objectives', 'obiettivi')}</span>
      </div>

      {!!learning.prerequisites?.length && (
        <div className="learning-pathway-prerequisites">
          <strong>{ui(lang, 'Before you begin', 'Prima di iniziare')}</strong>
          <ul>{learning.prerequisites.map((item, index) => <li key={index}>{L(item, lang)}</li>)}</ul>
        </div>
      )}

      <div className="learning-pathway-objectives">
        <strong>{ui(lang, 'By the end, you will be able to', 'Alla fine saprai')}</strong>
        <ol>
          {learning.objectives.map(objective => (
            <li key={objective.id}>
              <span>{L(objective.description, lang)}</span>
              {objective.successCriteria?.length ? (
                <ul>{objective.successCriteria.map((criterion, index) => <li key={index}>{L(criterion, lang)}</li>)}</ul>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="learning-pathway-summary">
        <strong>{ui(lang, 'Key takeaway', 'Idea chiave')}</strong>
        {summary.map((item, index) => <p key={index}>{L(item, lang)}</p>)}
      </div>

      <div className="learning-pathway-stages" aria-label={ui(lang, 'Mission stages', 'Fasi della missione')}>
        {stages.map((stage, index) => (
          <div className={stage.complete ? 'learning-pathway-stage complete' : 'learning-pathway-stage'} key={stage.id}>
            <span className="learning-pathway-stage-number">{stage.complete ? '✓' : index + 1}</span>
            <span>{L(stage.label, lang)}</span>
            <small>{stage.complete ? (ui(lang, 'Complete', 'Completato')) : (ui(lang, 'To do', 'Da completare'))}</small>
          </div>
        ))}
      </div>

      {progress?.mastered && techniqueUnlock && (
        <div className="learning-technique-unlocked" role="status" aria-live="polite">
          <span className="learning-kicker">{ui(lang, 'NEW TECHNIQUE UNLOCKED', 'NUOVA TECNICA SBLOCCATA')}</span>
          <h4>{L(techniqueUnlock.name, lang)}</h4>
          <p>{L(techniqueUnlock.description, lang)}</p>
          {techniqueUnlock.xpReward ? (
            <small>+{techniqueUnlock.xpReward} XP · {ui(lang, 'mastery reward', 'ricompensa maestria')}</small>
          ) : null}
        </div>
      )}
    </section>
  );
};
