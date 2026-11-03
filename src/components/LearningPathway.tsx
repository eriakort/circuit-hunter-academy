import React from 'react';
import type { Language, LearningMissionProgress, Mission } from '../types';
import { L } from '../helpers';
import { HARDWARE_LEARNING_PILOT } from '../data/learningPilot';

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
  if (!learning || !pilot) return null;

  const stages = [
    { id: 'guided', label: ['Guided practice', 'Esercitazione guidata'], complete: !!progress?.guidedPracticeComplete },
    { id: 'independent', label: ['Independent practice', 'Esercitazione autonoma'], complete: !!progress?.independentPracticeComplete },
    { id: 'knowledge', label: ['Knowledge check', 'Verifica delle conoscenze'], complete: typeof progress?.knowledgeCheckScore === 'number' },
    { id: 'mastery', label: ['Mastery trial', 'Prova di maestria'], complete: !!progress?.mastered },
    { id: 'battle', label: ['Boss battle', 'Battaglia finale'], complete: missionCleared }
  ];

  return (
    <section className="learning-pathway card" aria-label={lang === 'it' ? 'Percorso di apprendimento' : 'Learning pathway'}>
      <div className="learning-pathway-heading">
        <div>
          <span className="learning-kicker">{lang === 'it' ? 'BRIEFING DELLA MISSIONE · CIRCUIT FORMS' : 'MISSION BRIEFING · CIRCUIT FORMS'}</span>
          <h3>{lang === 'it' ? 'La tua missione di apprendimento' : 'Your learning mission'}</h3>
          <p>{lang === 'it' ? 'Obiettivi chiari, pratica progressiva e una tecnica da conquistare.' : 'Clear objectives, progressive practice, and a technique to earn.'}</p>
        </div>
        <span className="learning-pathway-count">{learning.objectives.length} {lang === 'it' ? 'obiettivi' : 'objectives'}</span>
      </div>

      {!!learning.prerequisites?.length && (
        <div className="learning-pathway-prerequisites">
          <strong>{lang === 'it' ? 'Prima di iniziare' : 'Before you begin'}</strong>
          <ul>{learning.prerequisites.map((item, index) => <li key={index}>{L(item, lang)}</li>)}</ul>
        </div>
      )}

      <div className="learning-pathway-objectives">
        <strong>{lang === 'it' ? 'Alla fine saprai' : 'By the end, you will be able to'}</strong>
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
        <strong>{lang === 'it' ? 'Idea chiave' : 'Key takeaway'}</strong>
        {pilot.summary.map((item, index) => <p key={index}>{L(item, lang)}</p>)}
      </div>

      <div className="learning-pathway-stages" aria-label={lang === 'it' ? 'Fasi della missione' : 'Mission stages'}>
        {stages.map((stage, index) => (
          <div className={stage.complete ? 'learning-pathway-stage complete' : 'learning-pathway-stage'} key={stage.id}>
            <span className="learning-pathway-stage-number">{stage.complete ? '✓' : index + 1}</span>
            <span>{L(stage.label, lang)}</span>
            <small>{stage.complete ? (lang === 'it' ? 'Completato' : 'Complete') : (lang === 'it' ? 'Da completare' : 'To do')}</small>
          </div>
        ))}
      </div>

      {progress?.mastered && (
        <div className="learning-technique-unlocked" role="status" aria-live="polite">
          <span className="learning-kicker">{lang === 'it' ? 'NUOVA TECNICA SBLOCCATA' : 'NEW TECHNIQUE UNLOCKED'}</span>
          <h4>{L(pilot.techniqueUnlock.name, lang)}</h4>
          <p>{L(pilot.techniqueUnlock.description, lang)}</p>
          {pilot.techniqueUnlock.xpReward ? (
            <small>+{pilot.techniqueUnlock.xpReward} XP · {lang === 'it' ? 'ricompensa maestria' : 'mastery reward'}</small>
          ) : null}
        </div>
      )}
    </section>
  );
};
