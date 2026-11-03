import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { SUBJECTS, UNITS, ARCS, MISSIONS } from '../data/gameData';
import { getVisualHtml } from '../data/visuals';
import { L, demonSVG, esc, U } from '../helpers';

export const MapScreen: React.FC = () => {
  const {
    state,
    setName,
    setUnit,
    openMission,
    goToView,
    startBattle,
    resetProgress,
    isOpen,
    myMissions,
    allCleared
  } = useGame();

  const { lang, name, subject, unit, cleared, flawless } = state;
  const [nameInput, setNameInput] = useState('');
  const [resetArmed, setResetArmed] = useState(false);

  const curSub = subject || 'cs';
  const currentSubjectData = SUBJECTS.find(s => s.id === curSub) || SUBJECTS[0];
  const titleSvgHtml = curSub === 'phys' ? getVisualHtml('titlePhys', lang) : getVisualHtml('title', lang);

  // If player hasn't entered a name yet
  if (!name) {
    const handleRegister = (e: React.FormEvent) => {
      e.preventDefault();
      const trimmed = nameInput.trim();
      if (!trimmed) return;
      setName(trimmed);
    };

    return (
      <section className="hero card">
        <div>
          <div className="eyebrow">{L(currentSubjectData.name, lang)}</div>
          <h1>
            Circuit Hunter <span>Academy</span>
          </h1>
          <p className="lede">
            {L(
              [
                'Glitch Demons have invaded the academy. Learn your subject chapter by chapter, turn that knowledge into techniques, and drive them out.',
                "I Demoni Glitch hanno invaso l'accademia. Impara la tua materia capitolo per capitolo, trasforma ciò che impari in tecniche e scacciali."
              ],
              lang
            )}
          </p>

          <form className="reg" id="regf" style={{ marginTop: '16px' }} onSubmit={handleRegister}>
            <label htmlFor="nm" className="eyebrow">
              {L(['Enter your hunter name', 'Scrivi il tuo nome da cacciatrice'], lang)}
            </label>
            <input
              id="nm"
              maxLength={20}
              autoComplete="off"
              placeholder="Hana"
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              autoFocus
            />
            <button className="btn" type="submit">
              {L(["Join the academy", "Entra nell'accademia"], lang)}
            </button>
            <span className="muted" style={{ fontSize: '14px' }}>
              {L(
                [
                  'You can switch between English and Italian at any time with EN / IT at the top.',
                  "Puoi passare dall'inglese all'italiano in qualsiasi momento con EN / IT in alto."
                ],
                lang
              )}
            </span>
          </form>
        </div>

        <div dangerouslySetInnerHTML={{ __html: titleSvgHtml }} />
      </section>
    );
  }

  const MY = myMissions();
  const doneCount = MY.filter(m => cleared[m.id]).length;
  const isMastered = allCleared();

  // Find next playable mission
  const nextMissionIndex = MISSIONS.findIndex(
    (m, i) => (ARCS[m.arc]?.subject || 'cs') === curSub && !cleared[m.id] && isOpen(i)
  );

  const handleResetClick = () => {
    if (!resetArmed) {
      setResetArmed(true);
      return;
    }
    resetProgress();
    setResetArmed(false);
  };

  return (
    <>
      <section className="hero card">
        <div>
          <div className="eyebrow">
            {L(['Welcome back', 'Bentornata'], lang)}, {esc(name)}
          </div>
          <h1>
            Circuit Hunter <span>Academy</span>
          </h1>
          <p className="lede">
            {isMastered
              ? L(
                  [
                    'Every Glitch Demon is defeated. Keep your techniques sharp in the Dojo.',
                    'Tutti i Demoni Glitch sono sconfitti. Tieni allenate le tue tecniche nel Dojo.'
                  ],
                  lang
                )
              : L(
                  [
                    `${doneCount} of ${MY.length} missions cleared. The units are the tabs below; each arc is one chapter, and every arc's first mission is open, so you can start from the chapter you're studying in class.`,
                    `${doneCount} missioni superate su ${MY.length}. Le unità sono le schede qui sotto; ogni arco è un capitolo, e la prima missione di ogni arco è già aperta: puoi partire dal capitolo che state studiando in classe.`
                  ],
                  lang
                )}
          </p>

          <div className="row" style={{ marginTop: '14px' }}>
            {isMastered ? (
              <>
                <button className="btn" id="goDojo" onClick={() => startBattle(true)}>
                  {L(['Train in the Dojo', 'Allenati nel Dojo'], lang)}
                </button>
                <button className="btn ghost" id="goCert" onClick={() => goToView('ending')}>
                  {L(['See certificate', 'Vedi il diploma'], lang)}
                </button>
              </>
            ) : nextMissionIndex >= 0 ? (
              <button className="btn" id="goNext" onClick={() => openMission(nextMissionIndex)}>
                {L(U.mission, lang)} {MISSIONS[nextMissionIndex].sec}:{' '}
                {L(MISSIONS[nextMissionIndex].title, lang)}
              </button>
            ) : null}

            <button className="btn ghost" id="goRace" onClick={() => goToView('race')}>
              {L(['Race your friends', 'Sfida le amiche'], lang)}
            </button>
            <button className="btn ghost" id="goTest" onClick={() => goToView('test')}>
              {L(['Test Knowledge', 'Test del Sapere'], lang)}
            </button>
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: titleSvgHtml }} />
      </section>

      {/* Units tabs navigation */}
      <nav className="units" aria-label="Units">
        {UNITS.map((u, ui) => ({ u, ui }))
          .filter(x => (x.u.subject || 'cs') === curSub)
          .map(({ u, ui }, k) => {
            const ms = MISSIONS.filter(m => (ARCS[m.arc]?.unit || 0) === ui);
            const dn = ms.filter(m => cleared[m.id]).length;
            const isSelected = (unit || 0) === ui;

            return (
              <button
                key={ui}
                data-u={ui}
                className={isSelected ? 'on' : ''}
                aria-pressed={isSelected}
                onClick={() => setUnit(ui)}
              >
                {L(['Unit', 'Unità'], lang)} {k + 1} · {L(u.title, lang)}
                <small>
                  {L(['ch.', 'cap.'], lang)} {u.ch} · {dn}/{ms.length}
                </small>
              </button>
            );
          })}
      </nav>

      {/* Arcs / chapters for current unit */}
      {ARCS.map((a, ai) => {
        if ((a.unit || 0) !== (unit || 0) || (a.subject || 'cs') !== curSub) return null;
        const ms = MISSIONS.map((m, i) => ({ m, i })).filter(({ m }) => m.arc === ai);

        return (
          <section className="arc" key={ai}>
            <div className="arc-h">
              <span className="n">{a.n}</span>
              <h2>{L(a.title, lang)}</h2>
              <span className="pg">
                {L(['Chapter', 'Capitolo'], lang)} {a.n} · pp. {a.pages}
              </span>
            </div>

            <div className="missions">
              {ms.map(({ m, i }) => {
                const open = isOpen(i);
                const isCleared = !!cleared[m.id];
                const isFlawless = !!flawless[m.id];
                const learning = state.learningProgress?.[m.id];

                return (
                  <button
                    key={m.id}
                    className={`mcard ${isCleared ? 'cleared' : ''}`}
                    data-i={i}
                    disabled={!open}
                    onClick={() => openMission(i)}
                  >
                    <div
                      className="dm"
                      dangerouslySetInnerHTML={{
                        __html: demonSVG(m.hue, m.horns, m.eyes, 'dm')
                      }}
                    />
                    <span className="sec">
                      § {m.sec} · pp. {m.pages}
                    </span>
                    <h3>{L(m.title, lang)}</h3>
                    <span className="topic">{L(m.topic, lang)}</span>
                    {learning?.knowledgeCheckScore !== undefined && (
                      <small className="learning-map-progress">
                        {L(['Knowledge check', 'Verifica conoscenze'], lang)} · {learning.knowledgeCheckScore}%
                      </small>
                    )}
                    {learning?.masteryScore !== undefined && (
                      <small className={`learning-map-progress ${learning.mastered ? 'mastery-map-passed' : 'mastery-map-pending'}`}>
                        {L(['Mastery', 'Maestria'], lang)} · {learning.mastered
                          ? L(['Passed', 'Superata'], lang)
                          : L(['Not yet passed', 'Non superata'], lang)} · {learning.masteryScore}%
                      </small>
                    )}

                    <span className={`badge ${isCleared ? 'ok' : open ? 'go' : 'lock'}`}>
                      {isCleared
                        ? L(isFlawless ? U.flawless : U.cleared, lang)
                        : open
                        ? L(U.ready, lang)
                        : L(U.locked, lang)}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* Techniques learned & Reset */}
      <section className="card">
        <div className="eyebrow" style={{ marginBottom: '8px' }}>
          {L(['Techniques learned', 'Tecniche apprese'], lang)}
        </div>
        <div className="techlist">
          {doneCount ? (
            MY.filter(m => cleared[m.id]).map(m => (
              <div key={m.id}>{L(m.tech, lang)}</div>
            ))
          ) : (
            <span className="muted">
              {L(
                [
                  'None yet. Clear a mission to learn your first technique.',
                  'Ancora nessuna. Supera una missione per imparare la prima tecnica.'
                ],
                lang
              )}
            </span>
          )}
        </div>

        <div className="row" style={{ marginTop: '16px', justifyContent: 'space-between' }}>
          <span className="muted" style={{ fontSize: '13px' }}>
            {L(['Progress is saved in this browser.', 'I progressi sono salvati in questo browser.'], lang)}
          </span>
          <button
            className="btn ghost sm"
            id="reset"
            style={resetArmed ? { borderColor: 'var(--bad)' } : {}}
            onClick={handleResetClick}
          >
            {resetArmed
              ? L(['Tap again to erase everything', 'Tocca di nuovo per cancellare tutto'], lang)
              : L(['Reset progress', 'Azzera i progressi'], lang)}
          </button>
        </div>
      </section>
    </>
  );
};
