import React from 'react';
import { useGame } from '../context/GameContext';
import { getCurriculumSubjects } from '../data/curriculumSubjects';
import { getCurriculum } from '../data/curricula';
import { GradeId, SubjectId } from '../types';
import { L } from '../helpers';

export const SubjectPickerScreen: React.FC = () => {
  const { state, setSubject, goToView, curriculumProfile } = useGame();
  const { lang, grade } = state;
  const activeCurriculum = getCurriculum(curriculumProfile.activeCurriculumId);
  const isGhana = activeCurriculum?.countryCode === 'GH';
  const activeGrade: GradeId =
    grade === 'grade5' || grade === 'grade9' || grade === 'grade10' || grade === 'grade11'
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
          {L(eyebrowByGrade[activeGrade], lang)}
        </div>
        <h1>
          Circuit Hunter <span>Academy</span>
        </h1>
        <p className="lede">
          {L(ledeByGrade[activeGrade], lang)}
        </p>

        {/* Quick Launch Pills are only available for the Italian catalogue. */}
        {!isGhana && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }} role="navigation" aria-label={L(['Quick subject launch', 'Avvio rapido materie'], lang)}>
          <span style={{ fontSize: '12px', color: 'var(--muted)', alignSelf: 'center', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {L(['Direct Launch:', 'Avvio Rapido:'], lang)}
          </span>
          <button
            type="button"
            className="btn ghost sm"
            style={{ padding: '4px 10px', fontSize: '13px', borderColor: 'var(--ember)' }}
            onClick={() => handleSelect('italian')}
          >
            🇮🇹 {L(['Italian (A1–B1)', 'Italiano (A1–B1)'], lang)}
          </button>
          {activeGrade === 'grade5' && (
            <>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('science')}
              >
                🔬 {L(['Science', 'Scienze'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('math5')}
              >
                📐 {L(['Math 5', 'Mat. 5ª'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('hist5')}
              >
                🏛️ {L(['History', 'Storia'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('geo5')}
              >
                🧭 {L(['Geography', 'Geografia'], lang)}
              </button>
            </>
          )}
          {activeGrade === 'grade9' && (
            <>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('cs')}
              >
                💻 CS
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('phys')}
              >
                ⚛️ Physics
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('math')}
              >
                ∑ Math
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('chem')}
              >
                🧪 {L(['Chemistry (L1)', 'Chimica (L1)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('hist9')}
              >
                🏛️ {L(['History (L1)', 'Storia (L1)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('geo9')}
              >
                🌍 {L(['Geography (L1)', 'Geografia (L1)'], lang)}
              </button>
            </>
          )}
          {activeGrade === 'grade10' && (
            <>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('math10')}
              >
                ∑ {L(['Math (L2)', 'Mat. (L2)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('chem10')}
              >
                ⚗️ {L(['Chemistry (L2)', 'Chimica (L2)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('hist10')}
              >
                🏰 {L(['History (L2)', 'Storia (L2)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('geo10')}
              >
                🌐 {L(['Geography (L2)', 'Geografia (L2)'], lang)}
              </button>
            </>
          )}
          {activeGrade === 'grade11' && (
            <>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('math11')}
              >
                📈 {L(['Math (L3)', 'Mat. (L3)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('chem11')}
              >
                🧬 {L(['Chemistry (L3)', 'Chimica (L3)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('hist11')}
              >
                📜 {L(['History (L3)', 'Storia (L3)'], lang)}
              </button>
              <button
                type="button"
                className="btn ghost sm"
                style={{ padding: '4px 10px', fontSize: '13px' }}
                onClick={() => handleSelect('geo11')}
              >
                🗺️ {L(['Geography (L3)', 'Geografia (L3)'], lang)}
              </button>
            </>
          )}
        </div>}
      </div>

      <div className="subjects">
        {isGhana ? (
          <div className="grade-coming-soon card" role="status" data-curriculum="ghana-nacca">
            <div className="grade-coming-icon" aria-hidden="true">🇬🇭</div>
            <h2>Ghana SHS · NaCCA pathways</h2>
            <p>Choose a pathway to see its curriculum status. Ghana learning content is kept separate from the Italian catalogue.</p>
            <div className="pathway-list">
              <article className="card" data-pathway="ghana-core-mathematics">
                <h3>Core Mathematics</h3>
                <p>Common SHS Mathematics aligned to NaCCA learning indicators.</p>
                <span className="pg">In preparation · SS1 pilot planned</span>
              </article>
              <article className="card" data-pathway="ghana-additional-mathematics">
                <h3>Additional Mathematics</h3>
                <p>Separate advanced Mathematics pathway for learners taking the additional subject.</p>
                <span className="pg">In preparation</span>
              </article>
            </div>
            <button className="btn" onClick={() => goToView('grades')}>Choose another curriculum</button>
          </div>
        ) : gradeSubjects.length === 0 ? (
          <div className="grade-coming-soon card" role="status">
            <div className="grade-coming-icon" aria-hidden="true">✦</div>
            <h2>{L(['Subjects are being prepared', 'Le materie sono in preparazione'], lang)}</h2>
            <p>{L(['We will add this curriculum separately.', 'Aggiungeremo un programma dedicato.'], lang)}</p>
            <button className="btn" onClick={() => goToView('grades')}>{L(['Choose another grade', 'Scegli un’altra classe'], lang)}</button>
          </div>
        ) : gradeSubjects.map(s => (
          <button
            key={s.id}
            className={`subjcard${s.id === 'italian' ? ' subjcard-italian' : ''}`}
            data-s={s.id}
            onClick={() => handleSelect(s.id)}
            style={s.id === 'italian' ? { borderColor: 'rgba(0, 146, 70, 0.5)', background: 'linear-gradient(145deg, rgba(17, 25, 54, 0.95), rgba(206, 43, 55, 0.08))' } : undefined}
          >
            <div className="subjart" dangerouslySetInnerHTML={{ __html: s.art }} />
            <h2>{L(s.name, lang)}</h2>
            <p>{L(s.blurb, lang)}</p>
            <span className="pg">{L(s.meta, lang)}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default SubjectPickerScreen;
