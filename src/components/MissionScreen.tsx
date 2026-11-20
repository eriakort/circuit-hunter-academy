import React, { useState, useEffect, useRef } from 'react';
import { useGame } from '../context/GameContext';
import { getVisualHtml } from '../data/visuals';
import { ARCS } from '../data/gameData';
import { runMiniGame } from '../data/miniGames';
import { L, CODE, fill, demonSVG, SENSEI, YOU, esc, U, GUIDE } from '../helpers';
import { LearningPathway } from './LearningPathway';
import { PhysicsLab } from './PhysicsLab';
import { MathLab } from './MathLab';
import { MathGeometryLab } from './MathGeometryLab';
import { MathAdvancedLab } from './MathAdvancedLab';
import { ComputerScienceLab } from './ComputerScienceLab';
import { ChemistryLab } from './ChemistryLab';
import { ScienceLab } from './ScienceLab';
import { GhanaJhs1DiversityVisual } from './GhanaJhs1DiversityVisual';
import { GhanaJhs1CyclesVisual } from './GhanaJhs1CyclesVisual';
import { GhanaJhs1SystemsVisual } from './GhanaJhs1SystemsVisual';
import { GhanaJhs1ForcesEnergyVisual } from './GhanaJhs1ForcesEnergyVisual';
import { GhanaJhs1HumansEnvironmentVisual } from './GhanaJhs1HumansEnvironmentVisual';
import { GhanaJhs2DiversityVisual } from './GhanaJhs2DiversityVisual';
import { GhanaJhs2SystemsVisual } from './GhanaJhs2SystemsVisual';
import { GhanaJhs2CyclesVisual } from './GhanaJhs2CyclesVisual';
import { GhanaJhs2ForcesEnergyVisual } from './GhanaJhs2ForcesEnergyVisual';
import { GhanaJhs2HumansEnvironmentVisual } from './GhanaJhs2HumansEnvironmentVisual';
import { GhanaJhs3DiversityVisual } from './GhanaJhs3DiversityVisual';
import { GhanaJhs3NitrogenCycleVisual } from './GhanaJhs3NitrogenCycleVisual';
import { GhanaJhs3GrasshopperLifeCycleVisual } from './GhanaJhs3GrasshopperLifeCycleVisual';
import { GhanaJhs3CropMaturityVisual } from './GhanaJhs3CropMaturityVisual';
import { GhanaJhs3AnimalFeedPreparationVisual } from './GhanaJhs3AnimalFeedPreparationVisual';
import { GhanaJhs3AnimalFeedSelectionVisual } from './GhanaJhs3AnimalFeedSelectionVisual';
import { GhanaJhs3EnergyLightVisual } from './GhanaJhs3EnergyLightVisual';
import { GhanaJhs3CircuitSystemsVisual } from './GhanaJhs3CircuitSystemsVisual';
import { GhanaJhs3EnergyConversionVisual } from './GhanaJhs3EnergyConversionVisual';
import { GhanaJhs3ForceMotionVisual } from './GhanaJhs3ForceMotionVisual';
import { GhanaJhs3AgriculturalToolsVisual } from './GhanaJhs3AgriculturalToolsVisual';
import { GhanaJhs3CirculationRespirationVisual } from './GhanaJhs3CirculationRespirationVisual';
import { GhanaJhs3AsteroidsCometsVisual } from './GhanaJhs3AsteroidsCometsVisual';
import { GhanaJhs3EcosystemBalanceVisual } from './GhanaJhs3EcosystemBalanceVisual';
import { GhanaJhs3ManureMaterialsVisual } from './GhanaJhs3ManureMaterialsVisual';
import { GhanaJhs3CompostingVisual } from './GhanaJhs3CompostingVisual';
import { GhanaJhs3WasteManagementVisual } from './GhanaJhs3WasteManagementVisual';
import { GhanaJhs3HumanHealthVisual } from './GhanaJhs3HumanHealthVisual';
import { GhanaJhs3IndustryVisual } from './GhanaJhs3IndustryVisual';
import { GhanaJhs3ClimateActionVisual } from './GhanaJhs3ClimateActionVisual';
import { GhanaJhs3PlantResourcesVisual } from './GhanaJhs3PlantResourcesVisual';
import { ItalianLab } from './ItalianLab';
import { HistoryLab } from './HistoryLab';
import { GeographyLab } from './GeographyLab';
import { speakItalian } from '../speech/speechEngine';
import { scheduleNextConceptReview } from '../spacedRepetition';
import { createAssessmentQuestionVariantIndexes, resolveAssessmentQuestions } from '../learningAssessment';
import { HARDWARE_LEARNING_PILOT } from '../data/learningPilot';

const SANKOFA_GUIDE_AVATAR = '<svg viewBox="0 0 80 80" role="img" aria-label="The Elder Guide"><circle cx="40" cy="40" r="37" fill="#174b36" stroke="#d5a43b" stroke-width="3"/><path d="M19 67c2-14 10-21 21-21s19 7 21 21" fill="#d5a43b"/><circle cx="40" cy="31" r="13" fill="#f2e8d5"/><path d="M26 29c2-15 26-19 29 1-8-5-19-6-29-1" fill="#282a27"/></svg>';
const SANKOFA_EXPLORER_AVATAR = '<svg viewBox="0 0 80 80" role="img" aria-label="Knowledge Seeker"><circle cx="40" cy="40" r="37" fill="#293b60" stroke="#d5a43b" stroke-width="3"/><path d="M17 68c3-16 12-23 23-23s20 7 23 23" fill="#b9573f"/><circle cx="40" cy="31" r="13" fill="#d5a43b"/></svg>';
const SANKOFA_CHALLENGE_AVATAR = '<svg viewBox="0 0 80 80" role="img" aria-label="Learning challenge"><circle cx="40" cy="40" r="36" fill="#b9573f" stroke="#d5a43b" stroke-width="3"/><path d="M27 24h26v9H42v7h11v9H42v7H31V39h11v-6H27z" fill="#f2e8d5"/></svg>';

export const MissionScreen: React.FC = () => {
  const {
    state,
    curriculumProfile,
    currentMission,
    currentSceneIndex,
    nextScene,
    prevScene,
    inMissionFirstTime,
    award,
    addXP,
    saveLearningProgress
  } = useGame();

  const { lang, name } = state;
  const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';
  const sc = currentMission.scenes[currentSceneIndex];
  const masteryAssessment = currentMission.learning?.masteryAssessment;
  const [canProceed, setCanProceed] = useState(false);
  const [guidedIndex, setGuidedIndex] = useState(0);
  const [guidedHintVisible, setGuidedHintVisible] = useState(false);
  const [guidedFeedback, setGuidedFeedback] = useState<{ correct: boolean; why: any } | null>(null);
  const [guidedCompletions, setGuidedCompletions] = useState<Record<string, boolean>>({});
  const [independentIndex, setIndependentIndex] = useState(0);
  const [independentFeedback, setIndependentFeedback] = useState<{ correct: boolean; why: any } | null>(null);
  const [independentCompletions, setIndependentCompletions] = useState<Record<string, boolean>>({});
  const [knowledgeIndex, setKnowledgeIndex] = useState(0);
  const [knowledgeFeedback, setKnowledgeFeedback] = useState<boolean | null>(null);
  const [knowledgeMissed, setKnowledgeMissed] = useState<Record<number, boolean>>({});
  const [masteryIndex, setMasteryIndex] = useState(0);
  const [masteryAnswers, setMasteryAnswers] = useState<number[]>([]);
  const [masteryFeedback, setMasteryFeedback] = useState<{ score: number; passed: boolean; attempt: number } | null>(null);
  const [masteryStarted, setMasteryStarted] = useState(false);
  const [masteryVariantIndexes, setMasteryVariantIndexes] = useState<number[]>(() => createAssessmentQuestionVariantIndexes(masteryAssessment));
  const gameContainerRef = useRef<HTMLDivElement>(null);

  // Scene gating check
  const isGatedType = [
    'order',
    'sort',
    'build',
    'fde',
    'journey',
    'robot',
    'bits',
    'ascii',
    'rgb',
    'pwd',
    'format',
    'sheet',
    'trace',
    'predict',
    'gates',
    'stackq',
    'vectors',
    'torque',
    'fluids',
    'dataviz'
  ].includes(sc?.type || '') || sc?.init === 'board' || sc?.init === 'powercut' || !!sc?.needDone;

  const isGated = isGatedType && inMissionFirstTime();

  useEffect(() => {
    // If not gated, user can proceed immediately
    if (!isGated) {
      setCanProceed(true);
    } else {
      setCanProceed(false);
    }
  }, [currentSceneIndex, isGated]);

  useEffect(() => {
    setGuidedIndex(0);
    setGuidedHintVisible(false);
    setGuidedFeedback(null);
    setIndependentIndex(0);
    setIndependentFeedback(null);
    setKnowledgeIndex(0);
    setKnowledgeFeedback(null);
    setKnowledgeMissed({});
    setMasteryIndex(0);
    setMasteryAnswers([]);
    setMasteryFeedback(null);
    setMasteryStarted(false);
    setMasteryVariantIndexes(createAssessmentQuestionVariantIndexes(masteryAssessment));
  }, [currentMission.id, currentSceneIndex]);

  // Mount mini-game or interactive scene
  useEffect(() => {
    if (!sc) return;
    const isInteractive = isGatedType || sc.init === 'powercut' || sc.init === 'board';

    // powercut/board scenes have no game container; they wire up the visual rendered above.
    const host = gameContainerRef.current || (!sc.type ? document.body : null);
    if (isInteractive && host) {
      const type = sc.type || sc.init || '';
      runMiniGame(
        type,
        sc,
        host,
        () => setCanProceed(true),
        lang,
        currentMission,
        inMissionFirstTime(),
        (xp: number) => award(xp),
        state.name
      );
    }
  }, [currentSceneIndex, lang, currentMission, isGatedType, sc]);

  if (!sc) return null;

  // Speaker avatar and styling
  const speaker = () => {
    if (sc.who === 'y') {
      return { cls: 'you', name: esc(name || (isGhana ? 'Explorer' : 'Hunter')), avatar: isGhana ? SANKOFA_EXPLORER_AVATAR : YOU(name) };
    }
    if (sc.who === 'd') {
      return isGhana
        ? { cls: 'challenge', name: 'The Challenge', avatar: SANKOFA_CHALLENGE_AVATAR }
        : {
            cls: 'demon',
            name: L(currentMission.demon, lang),
            avatar: demonSVG(currentMission.hue, currentMission.horns, currentMission.eyes, 'avatar')
          };
    }
    return { cls: '', name: isGhana ? 'The Elder Guide' : 'Sensei Kaito', avatar: isGhana ? SANKOFA_GUIDE_AVATAR : SENSEI };
  };

  const sp = speaker();
  const nxt = currentMission.scenes[currentSceneIndex + 1];

  let visualContent = '';
  if (!sc.type) {
    if (sc.vis === 'demon' && isGhana) {
      visualContent = '<div class="sankofa-scene-prompt">A challenge to explore</div>';
    } else if (sc.vis === 'demon') {
      visualContent = `<div style="display:flex;justify-content:center"><div style="width:min(220px,60%)">${demonSVG(
        currentMission.hue,
        currentMission.horns,
        currentMission.eyes,
        'dia'
      )}</div></div>`;
    } else if (sc.vis) {
      visualContent = getVisualHtml(sc.vis, lang);
    }
    if (sc.code) {
      visualContent += (visualContent ? '<div style="height:12px"></div>' : '') + CODE(sc.code, lang);
    }
  }

  const guideText = sc.type && GUIDE[sc.type as keyof typeof GUIDE];
  const guidedPractice = currentMission.learning?.guidedPractice?.find(
    activity => activity.sceneIndex === currentSceneIndex && activity.questions?.length
  );
  const guidedKey = `${currentMission.id}:${guidedPractice?.id || ''}`;
  const guidedQuestions = guidedPractice?.questions || [];
  const savedLearning = state.learningProgress?.[currentMission.id];
  const guidedComplete = !guidedPractice || !!guidedCompletions[guidedKey] || !!savedLearning?.guidedPracticeComplete;
  const guidedQuestion = guidedQuestions[guidedIndex];
  const independentPractice = currentMission.learning?.independentPractice?.find(
    activity => activity.sceneIndex === currentSceneIndex && activity.questions?.length
  );
  const independentKey = `${currentMission.id}:${independentPractice?.id || ''}`;
  const independentQuestions = independentPractice?.questions || [];
  const independentComplete = !independentPractice || !!independentCompletions[independentKey] || !!savedLearning?.independentPracticeComplete;
  const knowledgeQuestions = currentMission.learning?.knowledgeCheck || [];
  const knowledgeComplete = knowledgeQuestions.length === 0 || typeof savedLearning?.knowledgeCheckScore === 'number';
  const knowledgeQuestion = knowledgeQuestions[knowledgeIndex];
  const techniqueUnlock = HARDWARE_LEARNING_PILOT[currentMission.id]?.techniqueUnlock ?? currentMission.learning?.techniqueUnlock;
  const masteryQuestions = resolveAssessmentQuestions(masteryAssessment, masteryVariantIndexes);
  const masteryReviewConceptIds = masteryFeedback && !masteryFeedback.passed
    ? masteryQuestions.reduce<string[]>((ids, question, index) => {
        const conceptId = masteryAssessment?.questionConceptIds?.[index];
        if (masteryAnswers[index] !== 0 && conceptId && !ids.includes(conceptId)) ids.push(conceptId);
        return ids;
      }, [])
    : (savedLearning?.masteryLastAttemptWeakConcepts || []);
  const masteryReviewConcepts = currentMission.learning?.concepts.filter(
    concept => masteryReviewConceptIds.includes(concept.id)
  ) || [];
  const masteryIsActive = !!masteryAssessment && nxt?.type === 'battle';
  const masteryQuestion = masteryQuestions[masteryIndex];
  const masteryPassed = !masteryIsActive || !!savedLearning?.mastered || !!masteryFeedback?.passed;
  const masteryNeedsRetry = masteryIsActive && typeof savedLearning?.masteryScore === 'number' && !savedLearning?.mastered && !masteryStarted && !masteryFeedback;
  const independentQuestion = independentQuestions[independentIndex];
  const workedExamples = currentMission.learning?.concepts.filter(
    concept => concept.sceneIndexes?.includes(currentSceneIndex) && concept.workedExample
  ) || [];

  return (
    <>
      <div className="mhead">
        <div>
          <div className="eyebrow">
            {isGhana
              ? `Topic ${ARCS[currentMission.arc]?.n ?? currentMission.arc + 1} · § ${currentMission.sec} · ${currentMission.pages}`
              : <>{L(U.arc, lang)} {currentMission.arc + 1} · § {currentMission.sec} · pp.{' '}
            {currentMission.pages}</>}
          </div>
          <h2>{L(currentMission.title, lang)}</h2>
        </div>
        <div className="dots" aria-label={`${currentSceneIndex + 1} / ${currentMission.scenes.length}`}>
          {currentMission.scenes.map((_, i) => (
            <i
              key={i}
              className={i < currentSceneIndex ? 'done' : i === currentSceneIndex ? 'now' : ''}
            />
          ))}
        </div>
      </div>

      <LearningPathway
        mission={currentMission}
        lang={lang}
        progress={savedLearning}
        missionCleared={!!state.cleared[currentMission.id]}
      />

      {!sc.type ? (
        <>
          {visualContent && (
            <div
              key={`scene-visual-${currentSceneIndex}-${sc.vis || sc.init || 'content'}`}
              className="visual"
              ref={sc.init ? gameContainerRef : undefined}
              dangerouslySetInnerHTML={{ __html: visualContent }}
            />
          )}
          {isGhana && ['gh-jhs1-science-materials-states', 'gh-jhs1-science-importance-liquids', 'gh-jhs1-science-materials-uses', 'gh-jhs1-science-living-cells'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs1DiversityVisual missionId={currentMission.id} lang={lang} />
          )}
          {isGhana && ['gh-jhs1-science-earth-cycles', 'gh-jhs1-science-life-cycles', 'gh-jhs1-science-crop-production', 'gh-jhs1-science-animal-production'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs1CyclesVisual missionId={currentMission.id} lang={lang} />
          )}
          {isGhana && ['gh-jhs1-science-human-body-system', 'gh-jhs1-science-solar-system', 'gh-jhs1-science-ecosystem', 'gh-jhs1-science-farming-systems'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs1SystemsVisual missionId={currentMission.id} lang={lang} />
          )}
          {isGhana && ['gh-jhs1-science-energy-forms', 'gh-jhs1-science-electricity-generation', 'gh-jhs1-science-energy-conversion', 'gh-jhs1-science-force-motion', 'gh-jhs1-science-agricultural-tools'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs1ForcesEnergyVisual missionId={currentMission.id} lang={lang} />
          )}
          {isGhana && ['gh-jhs1-science-waste-management', 'gh-jhs1-science-human-health', 'gh-jhs1-science-science-industry', 'gh-jhs1-science-climate-green-economy', 'gh-jhs1-science-understanding-environment'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs1HumansEnvironmentVisual missionId={currentMission.id} lang={lang} />
          )}
          {isGhana && ['gh-jhs2-science-mixture-separation', 'gh-jhs2-science-atomic-structure', 'gh-jhs2-science-cell-types'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs2DiversityVisual missionId={currentMission.id} />
          )}

          {isGhana && ['gh-jhs2-science-carbon-cycle', 'gh-jhs2-science-anopheles-life-cycle', 'gh-jhs2-science-seed-beds', 'gh-jhs2-science-animal-feed-water'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs2CyclesVisual missionId={currentMission.id} />
          )}

          {isGhana && ['gh-jhs2-science-teeth-dental-health', 'gh-jhs2-science-outer-planets', 'gh-jhs2-science-ecosystem-feeding', 'gh-jhs2-science-farming-systems'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs2SystemsVisual missionId={currentMission.id} />
          )}
          {isGhana && ['gh-jhs2-science-energy-sources-heat', 'gh-jhs2-science-electricity-electronics', 'gh-jhs2-science-energy-conservation-impact', 'gh-jhs2-science-magnetism-force-machines', 'gh-jhs2-science-agricultural-tools'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs2ForcesEnergyVisual missionId={currentMission.id} />
          )}
          {isGhana && ['gh-jhs2-science-waste-management', 'gh-jhs2-science-human-health', 'gh-jhs2-science-science-industry', 'gh-jhs2-science-climate-green-economy', 'gh-jhs2-science-soils-plants', 'gh-jhs2-science-rocks-soil-formation'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs2HumansEnvironmentVisual missionId={currentMission.id} />
          )}
          {isGhana && currentMission.id === 'gh-jhs3-science-nitrogen-cycle' && currentSceneIndex === 1 && <GhanaJhs3NitrogenCycleVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-grasshopper-life-cycle' && currentSceneIndex === 1 && <GhanaJhs3GrasshopperLifeCycleVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-crop-maturity' && currentSceneIndex === 1 && <GhanaJhs3CropMaturityVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-animal-feed-preparation' && currentSceneIndex === 1 && <GhanaJhs3AnimalFeedPreparationVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-animal-feed-selection' && currentSceneIndex === 1 && <GhanaJhs3AnimalFeedSelectionVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-energy-light' && currentSceneIndex === 1 && <GhanaJhs3EnergyLightVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-electricity-electronics' && currentSceneIndex === 1 && <GhanaJhs3CircuitSystemsVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-energy-conversion' && currentSceneIndex === 1 && <GhanaJhs3EnergyConversionVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-force-motion-pressure' && currentSceneIndex === 1 && <GhanaJhs3ForceMotionVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-agricultural-tools' && currentSceneIndex === 1 && <GhanaJhs3AgriculturalToolsVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-circulation-respiration' && currentSceneIndex === 1 && <GhanaJhs3CirculationRespirationVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-asteroids-comets' && currentSceneIndex === 1 && <GhanaJhs3AsteroidsCometsVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-ecosystem-balance' && currentSceneIndex === 1 && <GhanaJhs3EcosystemBalanceVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-manure-materials' && currentSceneIndex === 1 && <GhanaJhs3ManureMaterialsVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-manure-composting' && currentSceneIndex === 1 && <GhanaJhs3CompostingVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-waste-management' && currentSceneIndex === 1 && <GhanaJhs3WasteManagementVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-human-health' && currentSceneIndex === 1 && <GhanaJhs3HumanHealthVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-industry' && currentSceneIndex === 1 && <GhanaJhs3IndustryVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-climate-green-economy' && currentSceneIndex === 1 && <GhanaJhs3ClimateActionVisual />}
          {isGhana && currentMission.id === 'gh-jhs3-science-plant-resources' && currentSceneIndex === 1 && <GhanaJhs3PlantResourcesVisual />}
          {isGhana && ['gh-jhs3-science-binary-compounds', 'gh-jhs3-science-acids-bases-salts', 'gh-jhs3-science-chemical-bonding', 'gh-jhs3-science-specialised-plant-cells', 'gh-jhs3-science-specialised-human-cells'].includes(currentMission.id) && currentSceneIndex === 1 && (
            <GhanaJhs3DiversityVisual missionId={currentMission.id} />
          )}

          <div className="dialog">
            <div className="avatar" aria-hidden="true" dangerouslySetInnerHTML={{ __html: sp.avatar }} />
            <div className={`bubble ${sp.cls}`}>
              <div className="who" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span>{sp.name}</span>
                {currentMission.id.startsWith('it_') && sc.text && (
                  <button
                    type="button"
                    onClick={() => {
                      const textToSpeak = (Array.isArray(sc.text) ? sc.text[1] || sc.text[0] : sc.text || '')
                        .replace(/<[^>]*>/g, '')
                        .replace(/\[\[(.*?)\|(.*?)\]\]/g, '$2');
                      speakItalian(textToSpeak, { rate: 0.88 });
                    }}
                    title={lang === 'it' ? 'Ascolta questo dialogo in italiano' : 'Listen to this dialogue in Italian'}
                    style={{
                      background: 'rgba(106, 209, 255, 0.12)',
                      border: '1px solid rgba(106, 209, 255, 0.3)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      color: 'var(--data)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    🔊 {lang === 'it' ? 'Ascolta' : 'Listen'}
                  </button>
                )}
              </div>
              <div dangerouslySetInnerHTML={{ __html: fill(sc.text, lang, name) }} />
            </div>
          </div>
        </>
      ) : (
        <div className="mission-interactive-flow">
          <div
            key={`scene-game-${currentSceneIndex}-${sc.type || sc.init || 'interactive'}`}
            className="visual"
            id="gm"
            ref={gameContainerRef}
          />

          {guideText && (
            <section className="mission-guide" aria-label={isGhana ? "The Elder Guide lesson guidance" : "Sensei Kaito lesson guidance"}>
              <div className="avatar" aria-hidden="true" dangerouslySetInnerHTML={{ __html: isGhana ? SANKOFA_GUIDE_AVATAR : SENSEI }} />
              <div className="bubble">
                <div className="who">{isGhana ? "The Elder Guide" : "Sensei Kaito"}</div>
                <div dangerouslySetInnerHTML={{ __html: L(guideText, lang) }} />
              </div>
            </section>
          )}
        </div>
      )}

      {currentMission.id.startsWith('p') && currentSceneIndex === 1 && (
        <PhysicsLab missionId={currentMission.id} lang={lang} />
      )}
      {/^m\d/.test(currentMission.id) && currentSceneIndex === 1 && (
        <MathLab missionId={currentMission.id} lang={lang} />
      )}
      {/^m7m/.test(currentMission.id) && currentSceneIndex === 1 && (
        <MathGeometryLab missionId={currentMission.id} lang={lang} />
      )}
      {(currentMission.id.startsWith('math_l2_') || currentMission.id.startsWith('math_l3_')) && currentSceneIndex === 1 && (
        <MathAdvancedLab missionId={currentMission.id} lang={lang} />
      )}
      {(currentMission.id.startsWith('a') || /^c\d/.test(currentMission.id)) && currentSceneIndex === 1 && (
        <ComputerScienceLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('chem_') && currentSceneIndex === 1 && (
        <ChemistryLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('g5s-') && currentSceneIndex === 1 && (
        <ScienceLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('it_') && currentSceneIndex === 1 && (
        <ItalianLab />
      )}
      {currentMission.id.startsWith('hist_') && currentSceneIndex === 1 && (
        <HistoryLab missionId={currentMission.id} lang={lang} />
      )}
      {currentMission.id.startsWith('geo_') && currentSceneIndex === 1 && (
        <GeographyLab missionId={currentMission.id} lang={lang} />
      )}

      {guidedPractice && guidedQuestion && !guidedComplete && (
        <section className="learning-guided-practice" aria-label={lang === 'it' ? 'Esercitazione guidata' : 'Guided practice'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'ALLENAMENTO GUIDATO' : 'GUIDED TRAINING'}</span>
            <h3>{L(guidedPractice.title, lang)}</h3>
            <p>{L(guidedPractice.instructions, lang)}</p>
            <div className="guided-progress">{lang === 'it' ? 'Domanda' : 'Question'} {guidedIndex + 1} / {guidedQuestions.length}</div>
          </div>
          <div className="guided-question">
            <strong>{L(guidedQuestion.q, lang)}</strong>
            <div className="guided-options">
              {guidedQuestion.a.map((option, index) => (
                <button
                  type="button"
                  className="guided-option"
                  key={index}
                  disabled={!!guidedFeedback?.correct}
                  onClick={() => setGuidedFeedback({ correct: index === 0, why: guidedQuestion.why })}
                >
                  <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{L(option, lang)}</span>
                </button>
              ))}
            </div>
            {guidedPractice.hints?.[guidedIndex] && (
              <div className="guided-hint-wrap">
                <button type="button" className="guided-hint-toggle" onClick={() => setGuidedHintVisible(value => !value)}>
                  {guidedHintVisible ? (lang === 'it' ? 'Nascondi suggerimento' : 'Hide hint') : (lang === 'it' ? 'Mostra suggerimento' : 'Show hint')}
                </button>
                {guidedHintVisible && <p className="guided-hint">{L(guidedPractice.hints[guidedIndex], lang)}</p>}
              </div>
            )}
            {guidedFeedback && (
              <div className={guidedFeedback.correct ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{guidedFeedback.correct ? (lang === 'it' ? 'Esatto!' : 'Correct!') : (lang === 'it' ? 'Riprova' : 'Try again')}</strong>
                <p>{L(guidedFeedback.why, lang)}</p>
                {guidedFeedback.correct ? (
                  <button type="button" className="btn" onClick={() => {
                    if (guidedIndex + 1 < guidedQuestions.length) {
                      setGuidedIndex(index => index + 1);
                      setGuidedFeedback(null);
                      setGuidedHintVisible(false);
                    } else {
                      setGuidedCompletions(previous => ({ ...previous, [guidedKey]: true }));
                      saveLearningProgress(currentMission.id, { guidedPracticeComplete: true });
                    }
                  }}>
                    {guidedIndex + 1 < guidedQuestions.length ? (lang === 'it' ? 'Prossima domanda' : 'Next question') : (lang === 'it' ? 'Completa esercitazione' : 'Complete practice')}
                  </button>
                ) : (
                  <button type="button" className="btn ghost" onClick={() => setGuidedFeedback(null)}>
                    {lang === 'it' ? 'Riprova' : 'Try again'}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}
      {guidedComplete && guidedPractice && (
        <div className="guided-complete" role="status">
          <strong>{lang === 'it' ? 'Esercitazione guidata completata' : 'Guided practice completed'}</strong>
          <p>{lang === 'it' ? 'Ottimo lavoro. Ora puoi continuare la missione.' : 'Well done. You can now continue the mission.'}</p>
        </div>
      )}

      {independentPractice && independentQuestion && !independentComplete && (
        <section className="learning-independent-practice" aria-label={lang === 'it' ? 'Esercitazione autonoma' : 'Independent practice'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'SFIDA AUTONOMA' : 'INDEPENDENT CHALLENGE'}</span>
            <h3>{L(independentPractice.title, lang)}</h3>
            <p>{L(independentPractice.instructions, lang)}</p>
            <div className="independent-progress">{lang === 'it' ? 'Problema' : 'Challenge'} {independentIndex + 1} / {independentQuestions.length}</div>
          </div>
          <div className="guided-question">
            <strong>{L(independentQuestion.q, lang)}</strong>
            <div className="guided-options">
              {independentQuestion.a.map((option, index) => (
                <button
                  type="button"
                  className="guided-option"
                  key={index}
                  disabled={!!independentFeedback?.correct}
                  onClick={() => setIndependentFeedback({ correct: index === 0, why: independentQuestion.why })}
                >
                  <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{L(option, lang)}</span>
                </button>
              ))}
            </div>
            {independentFeedback && (
              <div className={independentFeedback.correct ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{independentFeedback.correct ? (lang === 'it' ? 'Risposta corretta' : 'Correct answer') : (lang === 'it' ? 'Non ancora: riprova' : 'Not quite — try again')}</strong>
                <p>{L(independentFeedback.why, lang)}</p>
                {independentFeedback.correct ? (
                  <button type="button" className="btn" onClick={() => {
                    if (independentIndex + 1 < independentQuestions.length) {
                      setIndependentIndex(index => index + 1);
                      setIndependentFeedback(null);
                    } else {
                      setIndependentCompletions(previous => ({ ...previous, [independentKey]: true }));
                      saveLearningProgress(currentMission.id, { independentPracticeComplete: true });
                    }
                  }}>
                    {independentIndex + 1 < independentQuestions.length ? (lang === 'it' ? 'Prossimo problema' : 'Next challenge') : (lang === 'it' ? 'Completa la sfida' : 'Complete challenge')}
                  </button>
                ) : (
                  <button type="button" className="btn ghost" onClick={() => setIndependentFeedback(null)}>
                    {lang === 'it' ? 'Riprova' : 'Try again'}
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      )}
      {independentComplete && independentPractice && (
        <div className="independent-complete" role="status">
          <strong>{lang === 'it' ? 'Sfida autonoma completata' : 'Independent challenge completed'}</strong>
          <p>{lang === 'it' ? 'Hai applicato le tue conoscenze senza suggerimenti. Puoi continuare.' : 'You applied your knowledge without hints. You can continue.'}</p>
        </div>
      )}

      {independentComplete && knowledgeQuestions.length > 0 && !knowledgeComplete && knowledgeQuestion && (
        <section className="learning-knowledge-check" aria-label={lang === 'it' ? 'Verifica delle conoscenze' : 'Knowledge check'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'VERIFICA DELLE CONOSCENZE' : 'KNOWLEDGE CHECK'}</span>
            <h3>{lang === 'it' ? 'Metti alla prova ciò che hai imparato' : 'Check what you have learned'}</h3>
            <p>{lang === 'it' ? 'Rispondi senza suggerimenti. Se sbagli, leggi la spiegazione e riprova.' : 'Answer without hints. If you miss one, read the explanation and try again.'}</p>
            <div className="guided-progress">{lang === 'it' ? 'Domanda' : 'Question'} {knowledgeIndex + 1} / {knowledgeQuestions.length}</div>
          </div>
          <div className="guided-question">
            <strong>{L(knowledgeQuestion.q, lang)}</strong>
            <div className="guided-options">
              {knowledgeQuestion.a.map((option, index) => (
                <button type="button" className="guided-option" key={index}
                  disabled={knowledgeFeedback === true}
                  onClick={() => {
                    const correct = index === 0;
                    setKnowledgeFeedback(correct);
                    if (!correct) setKnowledgeMissed(previous => ({ ...previous, [knowledgeIndex]: true }));
                  }}>
                  <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{L(option, lang)}</span>
                </button>
              ))}
            </div>
            {knowledgeFeedback !== null && (
              <div className={knowledgeFeedback ? 'guided-feedback correct' : 'guided-feedback retry'} role="status" aria-live="polite">
                <strong>{knowledgeFeedback ? (lang === 'it' ? 'Risposta corretta' : 'Correct answer') : (lang === 'it' ? 'Riprova' : 'Try again')}</strong>
                <p>{L(knowledgeQuestion.why, lang)}</p>
                <button type="button" className="btn" onClick={() => {
                  if (!knowledgeFeedback) { setKnowledgeFeedback(null); return; }
                  if (knowledgeIndex + 1 < knowledgeQuestions.length) {
                    setKnowledgeIndex(index => index + 1);
                    setKnowledgeFeedback(null);
                  } else {
                    const score = Math.round(((knowledgeQuestions.length - Object.keys(knowledgeMissed).length) / knowledgeQuestions.length) * 100);
                    saveLearningProgress(currentMission.id, { knowledgeCheckScore: score, lastAttemptAt: Date.now() });
                  }
                }}>
                  {!knowledgeFeedback ? (lang === 'it' ? 'Riprova' : 'Try again') : knowledgeIndex + 1 < knowledgeQuestions.length ? (lang === 'it' ? 'Prossima domanda' : 'Next question') : (lang === 'it' ? 'Completa verifica' : 'Finish check')}
                </button>
              </div>
            )}
          </div>
        </section>
      )}
      {knowledgeComplete && knowledgeQuestions.length > 0 && (
        <div className="independent-complete" role="status">
          <strong>{lang === 'it' ? 'Verifica completata' : 'Knowledge check complete'} · {savedLearning?.knowledgeCheckScore ?? 0}%</strong>
          <p>{lang === 'it' ? 'Il risultato è salvato in questo browser. Puoi continuare la missione.' : 'Your result is saved in this browser. You can continue the mission.'}</p>
          <button type="button" className="btn ghost" onClick={() => {
            setKnowledgeIndex(0); setKnowledgeFeedback(null); setKnowledgeMissed({});
            saveLearningProgress(currentMission.id, { knowledgeCheckScore: undefined });
          }}>{lang === 'it' ? 'Ripeti verifica' : 'Retake check'}</button>
        </div>
      )}

      {workedExamples.length > 0 && (
        <section className="learning-worked-examples" aria-label={lang === 'it' ? 'Esempi svolti' : 'Worked examples'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'IMPARA FACENDO' : 'LEARN BY EXAMPLE'}</span>
            <h3>{lang === 'it' ? 'Esempio svolto' : 'Worked example'}</h3>
            <p>{lang === 'it' ? 'Segui il ragionamento passo dopo passo, poi prova a spiegare il concetto con parole tue.' : 'Follow the reasoning step by step, then try explaining the concept in your own words.'}</p>
          </div>
          {workedExamples.map(concept => (
            <details className="learning-example" key={concept.id}>
              <summary>{L(concept.title, lang)}</summary>
              <div className="learning-example-body">
                <p className="learning-scenario">{L(concept.workedExample!.scenario, lang)}</p>
                <ol>
                  {concept.workedExample!.steps.map((step, index) => (
                    <li key={index}>{L(step, lang)}</li>
                  ))}
                </ol>
                <div className="learning-answer">
                  <strong>{lang === 'it' ? 'Risposta ragionata' : 'Reasoned answer'}</strong>
                  <p>{L(concept.workedExample!.answer, lang)}</p>
                </div>
                {concept.misconceptions?.[0] && (
                  <div className="learning-misconception">
                    <strong>{lang === 'it' ? 'Attenzione a questo errore comune' : 'Watch out for this common mistake'}</strong>
                    <p><span>{lang === 'it' ? 'Idea errata: ' : 'Common mistake: '}</span>{L(concept.misconceptions[0].belief, lang)}</p>
                    <p><span>{lang === 'it' ? 'Correzione: ' : 'Correction: '}</span>{L(concept.misconceptions[0].correction, lang)}</p>
                  </div>
                )}
              </div>
            </details>
          ))}
        </section>
      )}

      {masteryIsActive && independentComplete && knowledgeComplete && (
        <section className="learning-mastery-assessment" aria-label={lang === 'it' ? 'Valutazione di padronanza' : 'Mastery assessment'}>
          <div className="learning-section-heading">
            <span className="learning-kicker">{lang === 'it' ? 'PROVA DI MAESTRIA' : 'MASTERY TRIAL'}</span>
            <h3>{L(masteryAssessment!.title, lang)}</h3>
            <p>{L(masteryAssessment!.instructions, lang)}</p>
            <div className="mastery-progress">
              {lang === 'it' ? 'Domanda' : 'Question'} {Math.min(masteryIndex + 1, masteryQuestions.length)} / {masteryQuestions.length}
              {' · '}{lang === 'it' ? 'Soglia' : 'Pass mark'} {masteryAssessment!.passingScore}%
            </div>
          </div>

          {savedLearning?.mastered && !masteryFeedback && (
            <div className="mastery-result passed" role="status">
              <strong>{lang === 'it' ? 'Maestria raggiunta' : 'Mastery achieved'} · {savedLearning.masteryScore ?? 0}%</strong>
              <p>{lang === 'it' ? 'Hai superato la prova. La battaglia è sbloccata.' : 'You passed the assessment. The boss battle is unlocked.'}</p>
              <small>{lang === 'it' ? 'Tentativi' : 'Attempts'}: {savedLearning.masteryAttempts ?? 1}</small>
            </div>
          )}

          {masteryNeedsRetry && (
            <div className="mastery-result retry" role="status">
              <strong>{lang === 'it' ? 'Ultimo risultato' : 'Previous result'} · {savedLearning?.masteryScore}%</strong>
              <p>{lang === 'it' ? 'Serve un altro tentativo per raggiungere la soglia richiesta.' : 'One more attempt is needed to reach the required pass mark.'}</p>
              <button type="button" className="btn" onClick={() => {
                setMasteryIndex(0);
                setMasteryAnswers([]);
                setMasteryFeedback(null);
                setMasteryVariantIndexes(createAssessmentQuestionVariantIndexes(masteryAssessment, Math.random, masteryVariantIndexes));
                setMasteryStarted(true);
              }}>{lang === 'it' ? 'Riprova la prova' : 'Retry assessment'}</button>
            </div>
          )}

          {!savedLearning?.mastered && !masteryNeedsRetry && !masteryFeedback && masteryQuestion && (
            <div className="guided-question">
              <div className="mastery-progress">{lang === 'it' ? 'Risposta' : 'Response'} {masteryIndex + 1} / {masteryQuestions.length}</div>
              <strong>{L(masteryQuestion.q, lang)}</strong>
              <div className="guided-options">
                {masteryQuestion.a.map((option, index) => (
                  <button
                    type="button"
                    className="guided-option"
                    key={index}
                    onClick={() => {
                      const answers = [...masteryAnswers, index];
                      setMasteryAnswers(answers);
                      if (masteryIndex + 1 < masteryQuestions.length) {
                        setMasteryIndex(value => value + 1);
                      } else {
                        const score = Math.round((answers.filter(answer => answer === 0).length / masteryQuestions.length) * 100);
                        const passed = score >= masteryAssessment!.passingScore;
                        const attempt = (savedLearning?.masteryAttempts || 0) + 1;
                        const conceptPerformance = { ...(savedLearning?.masteryConceptPerformance || {}) };
                        const revisionPerformance = { ...(savedLearning?.conceptRevisionPerformance || {}) };
                        const attemptedAt = Date.now();
                        const attemptHistory = [...(savedLearning?.masteryAttemptHistory || []), { score, attemptedAt, attempt }].slice(-20);
                        const attemptReviews = [...(savedLearning?.masteryAttemptReviews || []), {
                          score, attemptedAt, attempt, answers: [...answers], questionVariantIndexes: [...masteryVariantIndexes]
                        }].slice(-20);
                        const weakConcepts: string[] = [];
                        const conceptAttemptResults: Record<string, { correct: number; attempted: number }> = {};
                        masteryQuestions.forEach((question, index) => {
                          const conceptId = masteryAssessment!.questionConceptIds?.[index];
                          if (!conceptId) return;
                          const previous = conceptPerformance[conceptId] || { correct: 0, attempted: 0 };
                          conceptPerformance[conceptId] = {
                            correct: previous.correct + (answers[index] === 0 ? 1 : 0),
                            attempted: previous.attempted + 1
                          };
                          const attemptResult = conceptAttemptResults[conceptId] || { correct: 0, attempted: 0 };
                          attemptResult.correct += answers[index] === 0 ? 1 : 0;
                          attemptResult.attempted += 1;
                          conceptAttemptResults[conceptId] = attemptResult;
                          if (answers[index] !== 0 && !weakConcepts.includes(conceptId)) weakConcepts.push(conceptId);
                        });
                        const conceptReviewSchedule = { ...(savedLearning?.conceptReviewSchedule || {}) };
                        Object.entries(conceptAttemptResults).forEach(([conceptId, result]) => {
                          const conceptScore = Math.round((result.correct / result.attempted) * 100);
                          conceptReviewSchedule[conceptId] = scheduleNextConceptReview(
                            conceptReviewSchedule[conceptId],
                            conceptScore,
                            attemptedAt
                          );
                        });
                        Object.entries(revisionPerformance).forEach(([conceptId, revision]) => {
                          if (!revision.lastReviewedAt || revision.lastReviewedAt <= (revision.postRevisionAt || 0)) return;
                          const performance = conceptPerformance[conceptId];
                          if (!performance?.attempted) return;
                          revisionPerformance[conceptId] = {
                            ...revision,
                            postRevisionMasteryPercent: Math.round((performance.correct / performance.attempted) * 100),
                            postRevisionAt: Date.now()
                          };
                        });
                        saveLearningProgress(currentMission.id, {
                          masteryScore: score,
                          masteryAttempts: attempt,
                          masteryConceptPerformance: conceptPerformance,
                          conceptRevisionPerformance: revisionPerformance,
                          conceptReviewSchedule,
                          masteryAttemptHistory: attemptHistory,
                          masteryAttemptReviews: attemptReviews,
                          masteryLastAttemptWeakConcepts: passed ? [] : weakConcepts,
                          mastered: passed,
                          ...(passed && techniqueUnlock && !savedLearning?.techniqueUnlocked ? { techniqueUnlocked: true } : {}),
                          lastAttemptAt: Date.now()
                        });
                        if (passed && techniqueUnlock && !savedLearning?.techniqueUnlocked && techniqueUnlock.xpReward) {
                          addXP(techniqueUnlock.xpReward);
                        }
                        setMasteryFeedback({ score, passed, attempt });
                      }
                    }}
                  >
                    <span className="guided-option-letter">{String.fromCharCode(65 + index)}</span>
                    <span>{L(option, lang)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {masteryFeedback && (
            <div className={masteryFeedback.passed ? 'mastery-result passed' : 'mastery-result retry'} role="status" aria-live="polite">
              <strong>
                {masteryFeedback.passed
                  ? (lang === 'it' ? 'Maestria raggiunta' : 'Mastery achieved')
                  : (lang === 'it' ? 'Prova non superata' : 'Assessment not passed')}
                {' · '}{masteryFeedback.score}%
              </strong>
              <p>
                {masteryFeedback.passed
                  ? (lang === 'it' ? 'Ottimo lavoro. La battaglia è sbloccata.' : 'Excellent work. The boss battle is now unlocked.')
                  : (lang === 'it' ? `Hai bisogno del ${masteryAssessment!.passingScore}% per superare la prova. Rivedi le spiegazioni e riprova.` : `You need ${masteryAssessment!.passingScore}% to pass. Review the explanations and try again.`)}
              </p>
              <ol className="mastery-review">
                {masteryQuestions.map((question, index) => (
                  <li key={index}>
                    <strong>{L(question.q, lang)}</strong>
                    <span>{lang === 'it' ? 'Risposta corretta: ' : 'Correct answer: '}{L(question.a[0], lang)}</span>
                    <p>{L(question.why, lang)}</p>
                  </li>
                ))}
              </ol>
              {masteryFeedback.passed ? (
                <small>{lang === 'it' ? 'Tentativi totali' : 'Total attempts'}: {masteryFeedback.attempt}</small>
              ) : (
                <button type="button" className="btn" onClick={() => {
                  setMasteryIndex(0);
                  setMasteryAnswers([]);
                  setMasteryFeedback(null);
                  setMasteryStarted(true);
                }}>{lang === 'it' ? 'Riprova la prova' : 'Retry assessment'}</button>
              )}
            </div>
          )}

          {(masteryNeedsRetry || (masteryFeedback && !masteryFeedback.passed)) && masteryReviewConcepts.length > 0 && (
            <section className="mastery-recommendations" aria-label={lang === 'it' ? 'Ripasso consigliato' : 'Recommended revision'}>
              <div className="learning-section-heading">
                <span className="learning-kicker">{lang === 'it' ? 'RIPASSO MIRATO' : 'TARGETED REVISION'}</span>
                <h4>{lang === 'it' ? 'Concentrati su questi concetti' : 'Focus on these concepts'}</h4>
                <p>{lang === 'it' ? 'Questi argomenti corrispondono alle risposte errate dell’ultimo tentativo.' : 'These topics match the questions missed in your latest attempt.'}</p>
              </div>
              {masteryReviewConcepts.map(concept => {
                const performance = savedLearning?.masteryConceptPerformance?.[concept.id];
                const percent = performance?.attempted
                  ? Math.round((performance.correct / performance.attempted) * 100)
                  : null;
                return (
                  <article className="mastery-recommendation" key={concept.id}>
                    <div className="mastery-recommendation-heading">
                      <strong>{L(concept.title, lang)}</strong>
                      {percent !== null && (
                        <small>{lang === 'it' ? 'Risposte corrette' : 'Correct responses'}: {performance!.correct}/{performance!.attempted} · {percent}%</small>
                      )}
                    </div>
                    <p>{L(concept.explanation, lang)}</p>
                    {concept.workedExample && (
                      <details className="learning-example">
                        <summary>{lang === 'it' ? 'Rivedi un esempio svolto' : 'Review a worked example'}</summary>
                        <div className="learning-example-body">
                          <p className="learning-scenario">{L(concept.workedExample.scenario, lang)}</p>
                          <ol>{concept.workedExample.steps.map((step, index) => <li key={index}>{L(step, lang)}</li>)}</ol>
                          <div className="learning-answer">
                            <strong>{lang === 'it' ? 'Risposta ragionata' : 'Reasoned answer'}</strong>
                            <p>{L(concept.workedExample.answer, lang)}</p>
                          </div>
                        </div>
                      </details>
                    )}
                    {concept.misconceptions?.[0] && (
                      <div className="learning-misconception">
                        <strong>{lang === 'it' ? 'Errore da evitare' : 'Misconception to avoid'}</strong>
                        <p>{L(concept.misconceptions[0].belief, lang)}</p>
                        <p>{L(concept.misconceptions[0].correction, lang)}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </section>
          )}
        </section>
      )}

      <div className="nav">
        <button className="btn ghost" id="back" onClick={prevScene}>
          {currentSceneIndex ? L(U.back, lang) : L(U.missions, lang)}
        </button>

        <button
          className="btn"
          id="next"
          disabled={!canProceed || !guidedComplete || !independentComplete || !knowledgeComplete || !masteryPassed}
          onClick={nextScene}
        >
          {nxt && nxt.type === 'battle' ? L(U.fight, lang) : L(U.cont, lang)}
        </button>
      </div>
    </>
  );
};
