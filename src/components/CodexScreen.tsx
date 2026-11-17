import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { MISSIONS, ARCS, CODEX } from '../data/gameData';
import { L, PILL, U } from '../helpers';
import { speakItalian } from '../speech/speechEngine';

export const CodexScreen: React.FC = () => {
  const { state, curriculumProfile } = useGame();
  const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';
  const { lang, subject, seen } = state;
  const [searchQuery, setSearchQuery] = useState('');

  const curSub = subject || 'cs';
  const hasSubjectTerms = CODEX.some(e => {
    const mi = typeof e[0] === 'number' ? e[0] : MISSIONS.findIndex(m => m.id === e[0]);
    return mi >= 0 && (ARCS[MISSIONS[mi]?.arc]?.subject || 'cs') === curSub;
  });
  const q = searchQuery.trim().toLowerCase();
  const anyMatch =
    !q ||
    CODEX.some(e => {
      const mi = typeof e[0] === 'number' ? e[0] : MISSIONS.findIndex(m => m.id === e[0]);
      if (mi < 0) return false;
      return (
        (ARCS[MISSIONS[mi]?.arc]?.subject || 'cs') === curSub &&
        !!seen[mi] &&
        e.slice(1).join(' ').toLowerCase().includes(q)
      );
    });

  return (
    <>
      <div className="mhead">
        <div>
          <div className="eyebrow">
            {isGhana ? 'Core Mathematics glossary' : L(
              [
                "Hunter's Codex · English + Italiano",
                'Glossario della cacciatrice · Italiano + English'
              ],
              lang
            )}
          </div>
          <h2>{L(U.codex, lang)}</h2>
        </div>
      </div>

      <p className="muted" style={{ maxWidth: '62ch' }}>
        {isGhana ? 'Key mathematics terms appear here when you open the mission that teaches them.' : L(
          [
            'Every key term, with its Italian name. Terms unlock when you open the mission that teaches them.',
            'Tutti i termini chiave, con il nome in inglese. Si sbloccano quando apri la missione che li spiega.'
          ],
          lang
        )}
      </p>

      <input
        className="codex-search"
        id="cxq"
        placeholder={isGhana ? 'Search a term' : L(
          ['Search a term (English or Italian)', 'Cerca un termine (italiano o inglese)'],
          lang
        )}
        autoComplete="off"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <div id="cxl" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {isGhana && !hasSubjectTerms && (
          <p className="muted" data-testid="codex-empty">The Core Mathematics glossary is still being prepared. Use the Formulas page for rules and worked examples.</p>
        )}
        {!anyMatch && (
          <p className="muted">{L(['No unlocked terms match your search.', 'Nessun termine sbloccato corrisponde alla ricerca.'], lang)}</p>
        )}
        {MISSIONS.map((m, mi) => {
          if ((ARCS[m.arc]?.subject || 'cs') !== curSub) return null;
          const isMissionSeen = !!seen[mi];

          // Filter codex entries for this mission
          const entries = CODEX.filter(e => {
            if (e[0] !== mi && e[0] !== m.id) return false;
            if (!q) return true;
            if (!isMissionSeen) return false;
            return e.slice(1).join(' ').toLowerCase().includes(q);
          });

          if (!entries.length) return null;

          return (
            <div className="cx-group" key={mi}>
              <h3>
                § {m.sec} · {L(m.title, lang)}
              </h3>
              <div className="cx">
                {entries.map((e, ei) => {
                  if (isMissionSeen) {
                    const primary = lang === 'it' ? e[2] : e[1];
                    const definition = lang === 'it' ? e[4] : e[3];
                    const isItalianSubject = curSub === 'italian';
                    return (
                      <div className="cx-e" key={ei}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                          <b>{primary}</b>
                          {isItalianSubject && (
                            <button
                              type="button"
                              onClick={() => speakItalian(e[2], { rate: 0.85 })}
                              title={lang === 'it' ? 'Ascolta pronuncia italiana' : 'Listen to Italian pronunciation'}
                              style={{
                                background: 'rgba(106, 209, 255, 0.1)',
                                border: '1px solid rgba(106, 209, 255, 0.25)',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '0.85rem',
                                padding: '2px 6px',
                                color: 'var(--data)'
                              }}
                            >
                              🔊
                            </button>
                          )}
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: PILL(e[1], e[2], lang) }} />
                        <p>{definition}</p>
                      </div>
                    );
                  }
                  return (
                    <div className="cx-e locked" key={ei}>
                      <b>???</b>
                      <p>
                        {L(['Unlocks in', 'Si sblocca in'], lang)} § {m.sec}.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
