import { T } from './helpers';
import React, { Component, ErrorInfo, ReactNode, useEffect, useRef, useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import { HUD } from './components/HUD';
import { GradePicker } from './components/GradePicker';
import { SubjectPickerScreen } from './components/SubjectPickerScreen';
import { MapScreen } from './components/MapScreen';
import { MissionScreen } from './components/MissionScreen';
import { BattleScreen } from './components/BattleScreen';
import { CodexScreen } from './components/CodexScreen';
import { CertificateScreen } from './components/CertificateScreen';
import { RaceScreen } from './components/RaceScreen';
import { TestScreen } from './components/TestScreen';
import { FormulaScreen } from './components/FormulaScreen';
import { CheckpointScreen } from './components/CheckpointScreen';
import { ComputerScienceCheckpointScreen } from './components/ComputerScienceCheckpointScreen';
import { ComputerScienceAppliedCheckpointScreen } from './components/ComputerScienceAppliedCheckpointScreen';
import { ItalianCheckpointScreen } from './components/ItalianCheckpointScreen';
import { ItalianLabScreen } from './components/ItalianLabScreen';
import { ItalianGrammarScreen } from './components/ItalianGrammarScreen';
import { ItalianListeningScreen } from './components/ItalianListeningScreen';
import { SankofaDashboard } from './components/SankofaDashboard';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Circuit Hunter Academy:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="card" style={{ maxWidth: '600px', margin: '40px auto', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p className="muted" style={{ margin: '14px 0' }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button className="btn" onClick={() => window.location.reload()}>
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const AppContent: React.FC = () => {
  const { view, state, curriculumProfile } = useGame();
  const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';

  // New learners choose a grade first; existing Grade 9 saves are migrated in GameContext.
  const activeView = !state.grade ? 'grades' : view;
  const mainRef = useRef<HTMLElement>(null);
  const previousView = useRef(activeView);
  const previousLanguage = useRef(state.lang);
  const [navigationAnnouncement, setNavigationAnnouncement] = useState('');
  const viewNames: Record<string, [string, string]> = {
    grades: ['Grade selection', 'Scelta della classe'],
    subjects: ['Subject selection', 'Scelta della materia'],
    map: ['Missions', 'Missioni'],
    scene: ['Mission', 'Missione'],
    battle: ['Challenge', 'Sfida'],
    result: ['Challenge results', 'Risultati della sfida'],
    ending: ['Mission complete', 'Missione completata'],
    dojo: ['Dojo', 'Dojo'],
    codex: ['Codex', 'Glossario'],
    race: ['Race', 'Gara'],
    test: ['Knowledge test', 'Test di conoscenza'],
    formula: ['Formulas', 'Formule'],
    checkpoint: ['Physics checkpoint', 'Verifica di fisica'],
    'cs-checkpoint': ['Computer Science checkpoint', 'Verifica di informatica'],
    'cs-applied-checkpoint': ['Applied Computer Science trial', 'Prova di informatica applicata'],
    'it-checkpoint': ['Italian oral trial', 'Esame orale di italiano'],
    'it-lab': ['Italian speaking lab', 'Laboratorio di italiano'],
    'it-grammar': ['Italian grammar training', 'Allenamento di grammatica italiana'],
    'it-listening': ['Italian listening lab', 'Laboratorio di ascolto italiano']
  };

  useEffect(() => {
    document.documentElement.dataset.curriculumTheme = isGhana ? 'sankofa' : 'italian';
    return () => { delete document.documentElement.dataset.curriculumTheme; };
  }, [isGhana]);

  useEffect(() => {
    const viewChanged = previousView.current !== activeView;
    const languageChanged = previousLanguage.current !== state.lang;
    if (viewChanged) {
      mainRef.current?.focus();
      previousView.current = activeView;
    }
    if (viewChanged || languageChanged) {
      const [englishName, italianName] = viewNames[activeView] || ['Main content', 'Contenuto principale'];
      setNavigationAnnouncement(T(state.lang, englishName, italianName));
    }
    previousLanguage.current = state.lang;
  }, [activeView, state.lang]);

  return (
    <div className={'wrap ' + (isGhana ? 'theme-sankofa' : 'theme-italian')} data-curriculum={isGhana ? 'ghana-nacca' : 'italy-national'}>
      <a className="skip-link" href="#app">
        {T(state.lang, 'Skip to main content', 'Salta al contenuto principale')}
      </a>
      <HUD />
      <div className="sr-only" data-navigation-announcement="true" aria-live="polite" aria-atomic="true">{navigationAnnouncement ? `${T(state.lang, 'Section: ', 'Sezione: ')}${navigationAnnouncement}` : ''}</div>
      <main id="app" ref={mainRef} tabIndex={-1}>
        {activeView === 'grades' && <GradePicker />}
        {activeView === 'subjects' && <SubjectPickerScreen />}
        {activeView === 'map' && (isGhana ? <SankofaDashboard /> : <MapScreen />)}
        {activeView === 'scene' && <MissionScreen />}
        {activeView === 'battle' && <BattleScreen />}
        {activeView === 'codex' && <CodexScreen />}
        {activeView === 'ending' && <CertificateScreen />}
        {activeView === 'race' && <RaceScreen />}
        {activeView === 'test' && <TestScreen />}
        {activeView === 'formula' && <FormulaScreen />}
        {activeView === 'checkpoint' && <CheckpointScreen />}
        {activeView === 'cs-checkpoint' && <ComputerScienceCheckpointScreen />}
        {activeView === 'cs-applied-checkpoint' && <ComputerScienceAppliedCheckpointScreen />}
        {activeView === 'it-checkpoint' && <ItalianCheckpointScreen />}
        {activeView === 'it-lab' && <ItalianLabScreen />}
        {activeView === 'it-grammar' && <ItalianGrammarScreen />}
        {activeView === 'it-listening' && <ItalianListeningScreen />}
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </ErrorBoundary>
  );
};

export default App;
