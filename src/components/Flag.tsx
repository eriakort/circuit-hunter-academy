import React from 'react';

/**
 * Small drawn country flags.
 *
 * Flag emoji (🇮🇹, 🇬🇭) are not drawn on Windows: its emoji font has no country
 * flags, so it shows the two letters "IT" / "GH" instead. These SVG flags look
 * the same on every system.
 */
export type FlagCountry = 'IT' | 'GH';

const NAMES: Record<FlagCountry, string> = { IT: 'Flag of Italy', GH: 'Flag of Ghana' };

const SHAPES: Record<FlagCountry, React.ReactNode> = {
  IT: (
    <>
      <rect x="0" y="0" width="10" height="20" fill="#009246" />
      <rect x="10" y="0" width="10" height="20" fill="#f1f2f1" />
      <rect x="20" y="0" width="10" height="20" fill="#ce2b37" />
    </>
  ),
  GH: (
    <>
      <rect x="0" y="0" width="30" height="6.67" fill="#ce1126" />
      <rect x="0" y="6.67" width="30" height="6.67" fill="#fcd116" />
      <rect x="0" y="13.33" width="30" height="6.67" fill="#006b3f" />
      <polygon
        points="15.00,6.70 15.76,8.95 18.14,8.98 16.24,10.40 16.94,12.67 15.00,11.30 13.06,12.67 13.76,10.40 11.86,8.98 14.24,8.95"
        fill="#000"
      />
    </>
  )
};

interface FlagProps {
  country: FlagCountry;
  /** Height in CSS units; the width follows the flag's 3:2 shape. */
  size?: string;
  /** Set when the flag is the only thing naming the country, so screen readers announce it. */
  labelled?: boolean;
}

export const Flag: React.FC<FlagProps> = ({ country, size = '1em', labelled = false }) => (
  <svg
    className="flag-icon"
    data-flag={country}
    viewBox="0 0 30 20"
    style={{ height: size, width: 'auto', aspectRatio: '3 / 2', verticalAlign: '-0.125em', borderRadius: 2, boxShadow: '0 0 0 1px rgba(0,0,0,.18)', flexShrink: 0 }}
    {...(labelled ? { role: 'img', 'aria-label': NAMES[country] } : { 'aria-hidden': true })}
  >
    {SHAPES[country]}
  </svg>
);
