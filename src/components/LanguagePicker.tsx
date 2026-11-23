import React from 'react';
import { useGame } from '../context/GameContext';
import { L } from '../helpers';
import { Language } from '../types';

/**
 * Support-language selector for the Italian-learning track. English and
 * Italian are always available; the additional languages (Portuguese,
 * Spanish, French, German) scaffold the Italian lessons for learners who do
 * not read English. Any content not yet translated falls back to English.
 */
const OPTIONS: { code: Language; short: string; name: [string, string] }[] = [
  { code: 'en', short: 'EN', name: ['English', 'Inglese'] },
  { code: 'it', short: 'IT', name: ['Italian', 'Italiano'] },
  { code: 'pt', short: 'PT', name: ['Portuguese (Brazil)', 'Portoghese (Brasile)'] },
  { code: 'es', short: 'ES', name: ['Spanish', 'Spagnolo'] },
  { code: 'fr', short: 'FR', name: ['French', 'Francese'] },
  { code: 'de', short: 'DE', name: ['German', 'Tedesco'] }
];

export const LanguagePicker: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { state, setLanguage } = useGame();
  const { lang } = state;
  return (
    <div role="group" aria-label={L(['Support language', 'Lingua di supporto'], lang)} style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
      {!compact && (
        <span className="eyebrow" style={{ marginRight: 4 }}>{L(['LANGUAGE', 'LINGUA'], lang)}</span>
      )}
      {OPTIONS.map(opt => (
        <button
          key={opt.code}
          type="button"
          className={lang === opt.code ? 'btn cyan sm' : 'btn ghost sm'}
          aria-pressed={lang === opt.code}
          title={L(opt.name, lang)}
          onClick={() => setLanguage(opt.code)}
          style={{ minWidth: 40 }}
        >
          {opt.short}
        </button>
      ))}
    </div>
  );
};

export default LanguagePicker;
