import React from 'react';
import { useGame } from '../context/GameContext';
import { getCurriculumSubjects } from '../data/curriculumSubjects';
import { getCurriculum } from '../data/curricula';
import { GradeId, SubjectId } from '../types';
import { L } from '../helpers';

const QUICK_LAUNCH_LABELS: Partial<Record<SubjectId, [string, string]>> = {
  italian: ['Italian (A1–B1)', 'Italiano (A1–B1)'], science: ['Science', 'Scienze'],
  math5: ['Math 5', 'Mat. 5ª'], hist5: ['History', 'Storia'], geo5: ['Geography', 'Geografia'],
  cs: ['Computer Science', 'Informatica'], phys: ['Physics', 'Fisica'], math: ['Math', 'Matematica'],
  chem: ['Chemistry (L1)', 'Chimica (L1)'], hist9: ['History (L1)', 'Storia (L1)'], geo9: ['Geography (L1)', 'Geografia (L1)'],
  math10: ['Math (L2)', 'Mat. (L2)'], chem10: ['Chemistry (L2)', 'Chimica (L2)'],
  hist10: ['History (L2)', 'Storia (L2)'], geo10: ['Geography (L2)', 'Geografia (L2)'],
  math11: ['Math (L3)', 'Mat. (L3)'], chem11: ['Chemistry (L3)', 'Chimica (L3)'],
  hist11: ['History (L3)', 'Storia (L3)'], geo11: ['Geography (L3)', 'Geografia (L3)']
};

const QUICK_LAUNCH_ICONS: Partial<Record<SubjectId, string>> = {
  italian: '🇮🇹', science: '🔬', math5: '📐', hist5: '🏛️', geo5: '🧭',
  cs: '💻', phys: '⚛️', math: '∑', chem: '🧪', hist9: '🏛️', geo9: '🌍',
  math10: '∑', chem10: '⚗️', hist10: '🏰', geo10: '🌐',
  math11: '📈', chem11: '🧬', hist11: '📜', geo11: '🗺️'
};

/** Placeholder artwork for the Additional Mathematics pathway (not yet selectable). */
const ADDITIONAL_MATHS_ART = '<svg viewBox="0 0 120 120" width="100%" aria-hidden="true"><circle cx="60" cy="60" r="40" fill="none" stroke="#c9a13b" stroke-width="3" stroke-dasharray="6 6"/><text x="60" y="74" text-anchor="middle" font-family="Georgia, serif" font-size="40" fill="#1f6b4f">∑+</text></svg>';

export const SubjectPickerScreen: React.FC = () => {
  const { state, setSubject, goToView, curriculumProfile } = useGame();
  const { lang, grade } = state;
  const activeCurriculum = getCurriculum(curriculumProfile.activeCurriculumId);
  const isGhana = activeCurriculum?.countryCode === 'GH';
  const activeGrade: GradeId =
    grade === 'grade5' || grade === 'grade9' || grade === 'grade10' || grade === 'grade11' || grade === 'ghjhs1' || grade === 'ghjhs2' || grade === 'ghjhs3' || grade === 'ghshs1' || grade === 'ghshs2' || grade === 'ghshs3'
      ? grade
      : 'grade9';

  // Obtain authoritative list from curriculumSubjects registry
  const gradeSubjects = getCurriculumSubjects(activeGrade, curriculumProfile.activeCurriculumId);

  const handleSelect = (id: SubjectId) => {
    setSubject(id);
  };

  const eyebrowByGrade: Record<GradeId, [string, string]> = {
    grade5: ['GRADE 5 · SUBJECTS', 'QUINTA PRIMARIA · MATERIE'],
    grade9: ['GRADE 9 · CHOOSE YOUR SUBJECT', 'CLASSE 1ª SUPERIORE / 3ª MEDIA · SCEGLI LA MATERIA'],
    grade10: ['GRADE 10 · CHOOSE YOUR SUBJECT', 'CLASSE 2ª SUPERIORE · SCEGLI LA MATERIA'],
    grade11: ['GRADE 11 · CHOOSE YOUR SUBJECT', 'CLASSE 3ª / 4ª SUPERIORE · SCEGLI LA MATERIA']
  };

  const ledeByGrade: Record<GradeId, [string, string]> = {
    grade5: [
      'Explore Science & Technology, Mathematics, Italian Studies, History (Greece to Rome) or Italian Geography.',
      'Esplora Scienze e Tecnologia, Matematica, Lingua Italiana, Storia (Grecia e Roma) o Geografia dell’Italia.'
    ],
    grade9: [
      'Choose a subject for Grade 9: Computer Science, Physics, Mathematics, Italian, Chemistry L1, History (Prehistory to SPQR) or Physical & European Geography.',
      'Scegli una materia per la 1ª Superiore: Informatica, Fisica, Matematica, Italiano, Chimica L1, Storia (Preistoria–SPQR) o Geografia Fisica ed Europea.'
    ],
    grade10: [
      'Grade 10 (2° Superiore): Mathematics L2, Chemistry L2, Italian Studies, History (Roman Empire to Comuni) & World & Continents Geography.',
      '2° Superiore: Matematica L2, Chimica L2, Lingua Italiana, Storia (Impero Romano e Comuni) e Geografia dei Continenti e Globalizzazione.'
    ],
    grade11: [
      'Grade 11 (3°/4° Superiore): Mathematics L3, Chemistry L3, Italian Studies, Modern History (Renaissance to 1870) & Geopolitics & Italian Territory.',
      '3°/4° Superiore: Matematica L3, Chimica L3, Lingua Italiana, Storia Moderna (Rinascimento–1870) e Geopolitica e Territorio Italiano.'
    ]
  };

  return (
    <section className="hero card">
      <div>
        <div className="eyebrow">
          {isGhana ? (activeGrade.startsWith('ghjhs') ? `SANKOFA · ${activeGrade.toUpperCase()} LEARNING PATHWAYS` : activeGrade === 'ghshs1' ? 'SANKOFA · SHS 1 LEARNING PATHWAYS' : activeGrade === 'ghshs2' ? 'SANKOFA · SHS 2 LEARNING PATHWAYS' : 'SANKOFA · SHS 3 LEARNING PATHWAYS') : L(eyebrowByGrade[activeGrade], lang)}
        </div>
        <h1>
          {isGhana ? <>Choose your <span>learning path</span></> : <>Circuit Hunter <span>Academy</span></>}
        </h1>
        <p className="lede">
          {isGhana ? (activeGrade.startsWith('ghjhs') ? 'The NaCCA JHS Mathematics and Science pathways will be added grade by grade in the next increments.' : activeGrade === 'ghshs1' ? 'Explore the Ghana NaCCA SHS 1 Core Mathematics pilot. General Science is being prepared.' : activeGrade === 'ghshs2' ? 'Explore the Ghana NaCCA SHS 2 Core Mathematics pathway. General Science is being prepared.' : 'Explore the Ghana NaCCA SHS 3 Core Mathematics foundation. General Science is being prepared.') : L(ledeByGrade[activeGrade], lang)}
        </p>

        {/* Quick launch is derived from the same registry as the subject cards. */}
        {!isGhana && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }} role="navigation" aria-label={L(['Quick subject launch', 'Avvio rapido materie'], lang)}>
            <span style={{ fontSize: '12px', color: 'var(--muted)', alignSelf: 'center', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {L(['Direct Launch:', 'Avvio Rapido:'], lang)}
            </span>
            {gradeSubjects.map(subject => (
              <button
                key={subject.id}
                type="button"
                data-quick-subject={subject.id}
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px', ...(subject.id === 'italian' ? { borderColor: 'var(--ember)' } : {}) }}
                onClick={() => handleSelect(subject.id)}
              >
                {QUICK_LAUNCH_ICONS[subject.id] || '📘'} {L(QUICK_LAUNCH_LABELS[subject.id] || subject.name, lang)}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="subjects">
        {gradeSubjects.length === 0 ? (
          <div className="grade-coming-soon card" role="status">
            <div className="grade-coming-icon" aria-hidden="true">✦</div>
            <h2>{L(['Subjects are being prepared', 'Le materie sono in preparazione'], lang)}</h2>
            <p>{L(['We will add this curriculum separately.', 'Aggiungeremo un programma dedicato.'], lang)}</p>
            <button className="btn" onClick={() => goToView('grades')}>{L(['Choose another grade', 'Scegli un’altra classe'], lang)}</button>
          </div>
        ) : (
          <>
            {gradeSubjects.map(s => (
              <button key={s.id} className={`subjcard${s.id === 'italian' ? ' subjcard-italian' : ''}`} data-s={s.id} onClick={() => handleSelect(s.id)}
                style={s.id === 'italian' ? { borderColor: 'rgba(0, 146, 70, 0.5)', background: 'linear-gradient(145deg, rgba(17, 25, 54, 0.95), rgba(206, 43, 55, 0.08))' } : undefined}>
                <div className="subjart" dangerouslySetInnerHTML={{ __html: s.art }} />
                <h2>{L(s.name, lang)}</h2><p>{L(s.blurb, lang)}</p><span className="pg">{L(s.meta, lang)}</span>
              </button>
            ))}
            {isGhana && (
              <article className="subjcard" data-pathway="ghana-additional-mathematics" aria-label="Additional Mathematics in preparation">
                <div className="subjart" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ADDITIONAL_MATHS_ART }} />
                <h2>Additional Mathematics</h2>
                <p>A separate advanced Mathematics pathway. Its {activeGrade === 'ghshs1' ? 'SHS 1' : activeGrade === 'ghshs2' ? 'SHS 2' : 'SHS 3'} content is still being prepared and is not yet selectable.</p>
                <span className="pg">In preparation</span>
              </article>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default SubjectPickerScreen;
