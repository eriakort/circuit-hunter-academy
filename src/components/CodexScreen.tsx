import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { MISSIONS, ARCS, CODEX } from '../data/gameData';
import { L, PILL, U } from '../helpers';
import { translateUi } from '../data/uiTranslations';
import { speakItalian } from '../speech/speechEngine';
import { ITALIAN_CODEX_SUPPORT } from '../data/italianCodex';
import { getCurriculumSubjects } from '../data/curriculumSubjects';
import type { CodexEntry } from '../types';

export const CodexScreen: React.FC = () => {
  const { state, curriculumProfile } = useGame();
  const isGhana = curriculumProfile.activeCurriculumId === 'ghana-nacca';
  const { lang, subject, grade, seen } = state;
  // Italian Codex entries in the learner's support language (PT/ES/FR/DE), when available.
  const supportCodex = (e: CodexEntry): [string, string] | undefined =>
    (lang === 'pt' || lang === 'es' || lang === 'fr' || lang === 'de') ? ITALIAN_CODEX_SUPPORT[e[1]]?.[lang] : undefined;
  const [searchQuery, setSearchQuery] = useState('');

  const curSub = subject || 'cs';
  const ghanaSubjectTitle = isGhana
    ? (getCurriculumSubjects(grade, 'ghana-nacca').find(item => item.id === curSub)?.name as string | undefined) || 'Subject'
    : '';
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
            {isGhana ? `${ghanaSubjectTitle} glossary` : L(
              {
                en: "Hunter's Codex · English + Italiano",
                it: 'Glossario della cacciatrice · Italiano + English',
                pt: 'Códex do caçador · Português + Italiano',
                es: 'Códice del cazador · Español + Italiano',
                fr: 'Codex du chasseur · Français + Italiano',
                de: 'Kodex der Jäger · Deutsch + Italiano'
              },
              lang
            )}
          </div>
          <h2>{L(U.codex, lang)}</h2>
        </div>
      </div>

      <p className="muted" style={{ maxWidth: '62ch' }}>
        {isGhana ? `Key ${ghanaSubjectTitle} terms appear here when you open the mission that teaches them.` : L(
          {
            en: 'Every key term, with its Italian name. Terms unlock when you open the mission that teaches them.',
            it: 'Tutti i termini chiave, con il nome in inglese. Si sbloccano quando apri la missione che li spiega.',
            pt: 'Todos os termos-chave, com o nome em italiano. Os termos são desbloqueados quando você abre a missão que os ensina.',
            es: 'Todos los términos clave, con su nombre en italiano. Se desbloquean al abrir la misión que los enseña.',
            fr: 'Tous les termes clés, avec leur nom italien. Ils se débloquent quand tu ouvres la mission qui les enseigne.',
            de: 'Alle Schlüsselbegriffe mit ihrem italienischen Namen. Sie werden freigeschaltet, sobald du die Mission öffnest, die sie erklärt.'
          },
          lang
        )}
      </p>

      <input
        className="codex-search"
        id="cxq"
        placeholder={isGhana ? 'Search a term' : L(
          { en: 'Search a term (English or Italian)', it: 'Cerca un termine (italiano o inglese)', pt: 'Pesquise um termo (português ou italiano)', es: 'Busca un término (español o italiano)', fr: 'Cherche un terme (français ou italien)', de: 'Begriff suchen (Deutsch oder Italienisch)' },
          lang
        )}
        autoComplete="off"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />

      <div id="cxl" style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {isGhana && !hasSubjectTerms && (
          <p className="muted" data-testid="codex-empty">The {ghanaSubjectTitle} glossary is still being prepared. {curSub.includes('math') ? 'Use the Formulas page for rules and worked examples.' : 'Use the Missions page to review lesson concepts and worked examples.'}</p>
        )}
        {!anyMatch && (
          <p className="muted">{L({ en: 'No unlocked terms match your search.', it: 'Nessun termine sbloccato corrisponde alla ricerca.', pt: 'Nenhum termo desbloqueado corresponde à pesquisa.', es: 'Ningún término desbloqueado coincide con tu búsqueda.', fr: 'Aucun terme débloqué ne correspond à ta recherche.', de: 'Kein freigeschalteter Begriff passt zu deiner Suche.' }, lang)}</p>
        )}
        {MISSIONS.map((m, mi) => {
          if ((ARCS[m.arc]?.subject || 'cs') !== curSub) return null;
          const isMissionSeen = !!seen[mi];

          // Filter codex entries for this mission
          const entries = CODEX.filter(e => {
            if (e[0] !== mi && e[0] !== m.id) return false;
            if (!q) return true;
            if (!isMissionSeen) return false;
            const support = supportCodex(e);
            return [...e.slice(1), ...(support ?? [])].join(' ').toLowerCase().includes(q);
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
                    const support = supportCodex(e);
                    const sl = (lang === 'pt' || lang === 'es' || lang === 'fr' || lang === 'de') ? lang : undefined;
                    const primary = support?.[0] ?? (sl ? translateUi(e[1], sl) : undefined) ?? (lang === 'it' ? e[2] : e[1]);
                    const definition = support?.[1] ?? (sl ? translateUi(e[3], sl) : undefined) ?? (lang === 'it' ? e[4] : e[3]);
                    const isItalianSubject = curSub === 'italian';
                    return (
                      <div className="cx-e" key={ei}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                          <b>{primary}</b>
                          {isItalianSubject && (
                            <button
                              type="button"
                              onClick={() => speakItalian(e[2], { rate: 0.85 })}
                              title={L({ en: 'Listen to Italian pronunciation', it: 'Ascolta pronuncia italiana', pt: 'Ouvir a pronúncia italiana', es: 'Escuchar la pronunciación italiana', fr: 'Écouter la prononciation italienne', de: 'Italienische Aussprache anhören' }, lang)}
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
                        {L({ en: 'Unlocks in', it: 'Si sblocca in', pt: 'Desbloqueia em', es: 'Se desbloquea en', fr: 'Se débloque en', de: 'Freigeschaltet in' }, lang)} § {m.sec}.
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
