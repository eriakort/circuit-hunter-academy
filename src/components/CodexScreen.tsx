import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { MISSIONS, ARCS, CODEX } from '../data/gameData';
import { L, PILL, U } from '../helpers';

export const CodexScreen: React.FC = () => {
  const { state } = useGame();
  const { lang, subject, seen } = state;
  const [searchQuery, setSearchQuery] = useState('');

  const curSub = subject || 'cs';
  const q = searchQuery.trim().toLowerCase();

  return (
    <>
      <div className="mhead">
        <div>
          <div className="eyebrow">
            {L(
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
        {L(
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
        placeholder={L(
          ['Search a term (English or Italian)', 'Cerca un termine (italiano o inglese)'],
          lang
        )}
        autoComplete="off"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <div id="cxl" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
                    return (
                      <div className="cx-e" key={ei}>
                        <b>{primary}</b>
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
