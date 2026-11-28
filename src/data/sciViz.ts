import type { Language } from '../types';
import { supportText } from './visualI18n';

/**
 * Shared helpers for the Physics and Chemistry diagrams (Italian curriculum, Grades 9–11).
 *
 * Design rules these diagrams follow, so they stay readable on a phone:
 *  - one idea per diagram, drawn large on a 640-wide canvas, with text of at least 20 units
 *    (about 12 px on a 340 px wide screen) and only a few words per label;
 *  - the motion shows the mechanism itself (a block sliding, a beam levelling, an arrow growing),
 *    not a decorative pulse;
 *  - every diagram has the same two parts: a drawing and a one-line caption;
 *  - colours come from the theme variables, and the text is drawn by the `.sv` class in index.css.
 *
 * Motion is SMIL (<animate>), which MissionScreen pauses for reduced motion.
 */

export const pick = (lang: Language, en: string, it: string) => supportText(en, it, lang);

export const C = {
  data: 'var(--data)',
  ember: 'var(--ember)',
  gold: 'var(--gold)',
  sakura: 'var(--sakura)',
  good: 'var(--good)',
  bad: 'var(--bad)',
  text: 'var(--text)',
  muted: 'var(--muted)',
  line: 'var(--line)',
  panel: 'var(--panel)',
  panel2: 'var(--panel2)'
};

type TextOpts = { size?: number; fill?: string; anchor?: 'start' | 'middle' | 'end'; weight?: number | string; extra?: string };

/** One line of text. */
export const T = (x: number, y: number, s: string, o: TextOpts = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${o.anchor || 'middle'}" font-size="${o.size || 22}" font-weight="${o.weight || 600}" fill="${o.fill || C.text}"${o.extra ? ' ' + o.extra : ''}>${s}</text>`;

/** The diagram frame with an optional caption along the bottom. */
export const frame = (label: string, body: string, caption = '', h = 340) =>
  `<svg viewBox="0 0 640 ${h}" class="sv" role="img" aria-label="${label.replace(/"/g, '&quot;')}">
  <rect x="4" y="4" width="632" height="${h - 8}" rx="18" fill="${C.panel2}" stroke="${C.line}" stroke-width="2"/>
  ${body}
  ${caption ? T(320, h - 20, caption, { size: 22, fill: C.muted, weight: 600 }) : ''}
</svg>`;

/** An arrow from (x1,y1) to (x2,y2) with a head, drawn with a line and a triangle. */
export const arrow = (x1: number, y1: number, x2: number, y2: number, color: string, w = 5, id = '') => {
  const a = Math.atan2(y2 - y1, x2 - x1), hl = 16 + w, hw = 8 + w * 0.6;
  const bx = x2 - Math.cos(a) * hl, by = y2 - Math.sin(a) * hl;
  const p1 = `${(bx + Math.cos(a + Math.PI / 2) * hw).toFixed(1)},${(by + Math.sin(a + Math.PI / 2) * hw).toFixed(1)}`;
  const p2 = `${(bx - Math.cos(a + Math.PI / 2) * hw).toFixed(1)},${(by - Math.sin(a + Math.PI / 2) * hw).toFixed(1)}`;
  return `<g${id ? ` id="${id}"` : ''}><line x1="${x1}" y1="${y1}" x2="${bx.toFixed(1)}" y2="${by.toFixed(1)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/><polygon points="${x2},${y2} ${p1} ${p2}" fill="${color}"/></g>`;
};

/** A repeating SMIL attribute animation. */
export const anim = (attr: string, values: string, dur: number, begin = 0, extra = '') =>
  `<animate attributeName="${attr}" values="${values}" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"${extra ? ' ' + extra : ''}/>`;

export const move = (values: string, dur: number, begin = 0, keyTimes = '', type = 'translate') =>
  `<animateTransform attributeName="transform" type="${type}" values="${values}" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"${keyTimes ? ` keyTimes="${keyTimes}"` : ''}/>`;

/** Shows its content only during part of a repeating cycle (0–1 fractions). */
export const showDuring = (from: number, to: number, dur: number, content: string, fadeIn = 0.03) =>
  `<g opacity="0">${content}${anim('opacity', '0;0;1;1;0;0', dur, 0, `keyTimes="0;${from};${(from + fadeIn).toFixed(3)};${to};${(to + fadeIn).toFixed(3)};1"`)}</g>`;

/** A labelled rounded card. */
export const card = (x: number, y: number, w: number, h: number, color: string, fillOpacity = 0.1) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${color}" fill-opacity="${fillOpacity}" stroke="${color}" stroke-width="3"/>`;

/** A particle (atom or molecule) drawn as a circle. */
export const dot = (cx: number, cy: number, r: number, color: string, extra = '') =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}"${extra ? '' : ''}>${extra}</circle>`;

/** A particle that jiggles around its place; `amp` is the wobble size in px. */
export const jiggle = (cx: number, cy: number, r: number, color: string, amp: number, seed: number) => {
  const d = amp * (0.7 + (seed % 3) * 0.2);
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}">${anim('cx', `${cx};${(cx + d).toFixed(1)};${(cx - d).toFixed(1)};${cx}`, 0.6 + (seed % 4) * 0.12)}${anim('cy', `${cy};${(cy - d).toFixed(1)};${(cy + d).toFixed(1)};${cy}`, 0.7 + (seed % 3) * 0.13)}</circle>`;
};

/** A particle that drifts between points of a path (a loop), for liquids and gases. */
export const drift = (pts: Array<[number, number]>, r: number, color: string, dur: number, begin = 0) => {
  const xs = [...pts, pts[0]].map(p => p[0]).join(';'), ys = [...pts, pts[0]].map(p => p[1]).join(';');
  return `<circle r="${r}" fill="${color}">${anim('cx', xs, dur, begin)}${anim('cy', ys, dur, begin)}</circle>`;
};

/** A water-like molecule: a large atom with two small ones. */
export const water = (cx: number, cy: number, s = 1, o = '#ff6a3d', h = '#eeecf8') =>
  `<g transform="translate(${cx} ${cy}) scale(${s})"><circle r="13" fill="${o}"/><circle cx="-15" cy="-9" r="7" fill="${h}"/><circle cx="15" cy="-9" r="7" fill="${h}"/></g>`;
