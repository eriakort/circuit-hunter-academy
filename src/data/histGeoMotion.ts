// Adds motion to the History and Geography diagrams.
//
// Every diagram is drawn with the shared panel() and arrow() helpers. Rather than editing 144
// builders, this layer post-processes the SVG:
//   1. tours the panels in order (a coloured highlight moves from one to the next),
//   2. sends a dot along every arrow,
//   3. adds hand-made motion for diagrams that show a real process (winds, currents, routes,
//      seismic waves, loops...), listed in EXTRAS below.
// The motion is SVG animation (SMIL), which MissionScreen pauses under prefers-reduced-motion.

type Rect = { x: number; y: number; w: number; h: number; stroke: string };

const PANEL = /<rect x="(\d+)" y="(\d+)" width="(\d+)" height="(\d+)" rx="12" fill="[^"]*" stroke="([^"]+)" stroke-width="1\.6"\/>/g;
const ARROW = /<line x1="(\d+)" y1="(\d+)" x2="(\d+)" y2="(\d+)" stroke="([^"]+)" stroke-width="2\.4" stroke-linecap="round"\/>/g;

// A positive offset would leave the dot parked at the corner until it starts, so start it mid-way instead.
const dot = (path: string, dur: number, begin = 0, col = '#ffd166', r = 4.5) =>
  `<circle r="${r}" fill="${col}" stroke="#fff" stroke-width="1.2"><animateMotion dur="${dur}s" begin="${begin > 0 ? begin - dur : begin}s" repeatCount="indefinite" path="${path}"/></circle>`;

const ring = (cx: number, cy: number, r0: number, r1: number, col: string, dur = 2.4, begin = 0) =>
  `<circle cx="${cx}" cy="${cy}" r="${r0}" fill="none" stroke="${col}" stroke-width="2.5" opacity="0"><animate attributeName="r" values="${r0};${r1}" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;0" dur="${dur}s" begin="${begin}s" repeatCount="indefinite"/></circle>`;

const tour = (rects: Rect[], each: number, tint = true) => {
  const n = rects.length;
  return rects.map((r, i) =>
    `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" rx="12" style="fill:${tint ? r.stroke : 'none'};fill-opacity:.13;stroke:${r.stroke};stroke-width:3.4" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;${(1 / n).toFixed(4)}" dur="${(n * each).toFixed(2)}s" begin="${(i * each).toFixed(2)}s" repeatCount="indefinite"/></rect>`
  ).join('');
};

const box = (x: number, y: number, w: number, h: number, col: string, n: number, i: number, each: number, rx = 6) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" style="fill:${col};fill-opacity:.25;stroke:#fff;stroke-width:2" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;${(1 / n).toFixed(4)}" dur="${(n * each).toFixed(2)}s" begin="${(i * each).toFixed(2)}s" repeatCount="indefinite"/></rect>`;

const boxes = (list: [number, number, number, number][], col: string, each = 1.4) =>
  list.map((b, i) => box(b[0], b[1], b[2], b[3], col, list.length, i, each)).join('');

const EXTRAS: Record<string, string> = {
  // ---- Geography ----
  gg10_asia_monsoons: dot('M90 154 Q210 118 320 96', 2.2, 0, '#45d8ff', 5) + dot('M90 154 Q210 118 320 96', 2.2, 1.1, '#45d8ff', 5),
  gg9_ocean_currents: dot('M95 148 Q265 112 525 66', 3.2, 0, '#ffd166', 5.5) + dot('M95 148 Q265 112 525 66', 3.2, 1.07, '#ffd166', 5.5) + dot('M95 148 Q265 112 525 66', 3.2, 2.14, '#ffd166', 5.5),
  gg9_earthquake_epicenter: ring(240, 152, 10, 70, '#ff6b8b', 2.4) + ring(240, 152, 10, 70, '#ff6b8b', 2.4, 1.2) + dot('M240 152 V86', 1.4, 0, '#ffd166', 4) + dot('M240 86 H598', 3, 1.2, '#38ef7d', 4) + dot('M240 86 H42', 3, 1.2, '#38ef7d', 4),
  gg10_circular_economy: dot('M360 142 A40 40 0 1 1 280 142 A40 40 0 1 1 360 142', 3.6, 0, '#38ef7d', 5) + dot('M60 92 H580', 4, 0, '#ff6b8b', 4.5),
  gg9_demographic_transition: dot('M55 76 L210 78 Q340 82 435 144 L585 146', 5, 0, '#38ef7d', 5) + dot('M55 78 Q170 78 245 144 L585 148', 5, 0, '#ff6b8b', 5),
  gg9_water_distribution: `<rect x="556" y="70" width="24" height="36" fill="#fff" opacity="0"><animate attributeName="opacity" values="0;.55;0" dur="2.4s" repeatCount="indefinite"/></rect><rect x="580" y="70" width="14" height="36" fill="#38ef7d" opacity="0"><animate attributeName="opacity" values="0;.9;0" dur="1.6s" repeatCount="indefinite"/></rect>`,
  gg10_container_digital_shrink: boxes([[65, 72, 60, 32], [130, 72, 60, 32], [195, 72, 60, 32]], '#ffd166', 1) + dot('M360 112 Q420 75 479 112 T596 112', 2.4, 0, '#ffd166', 4) + dot('M360 112 Q420 75 479 112 T596 112', 2.4, .8, '#ffd166', 4) + dot('M360 112 Q420 75 479 112 T596 112', 2.4, 1.6, '#ffd166', 4),
  gg5_map_scale: '<rect x="70" y="70" width="0" height="16" fill="#ff6a3d" opacity=".55"><animate attributeName="width" values="0;200;200" keyTimes="0;.7;1" dur="4s" repeatCount="indefinite"/></rect>',
  gg5_compass_maps: dot('M161 106 A46 46 0 1 1 69 106 A46 46 0 1 1 161 106', 4, 0, '#ffd166', 4.5),
  gg5_lat_long_grid: dot('M89 108 H221', 3, 0, '#ff6b8b', 4.5) + dot('M155 42 V174', 3, 0, '#ffd166', 4.5),
  gg5_italian_volcanoes: ring(145, 72, 8, 26, '#ffd166', 2) + ring(320, 90, 6, 20, '#ff9f45', 2.4, .6) + ring(495, 98, 6, 20, '#ffd166', 2.2, 1.1),
  gg9_volcano_types: dot('M161 112 Q215 128 255 154', 3, 0, '#ff9f45', 4.5) + dot('M161 112 Q215 128 255 154', 3, 1.5, '#ff9f45', 4.5) + ring(479, 64, 10, 34, '#ff9f45', 1.8) + ring(479, 64, 10, 34, '#ff9f45', 1.8, .9),
  gg9_gis_layers: boxes([[90, 60, 240, 52], [90, 96, 240, 52], [90, 132, 240, 52]], '#45d8ff', 1.4).replace(/rx="6"/g, 'rx="4"'),
  gg11_tent_corridors: dot('M60 145 L190 62 L320 124 L445 62 L580 145', 6, 0, '#ffd166', 5) + dot('M580 145 L445 62 L320 124 L190 62 L60 145', 6, 3, '#38ef7d', 5),
  gg11_smart_15min_city: ring(320, 116, 52, 84, '#38ef7d', 2.6) + ring(320, 116, 52, 84, '#38ef7d', 2.6, 1.3),
  gg11_mediterranean_crossroads: ring(320, 112, 40, 72, '#38ef7d', 2.6) + ring(320, 112, 40, 72, '#38ef7d', 2.6, 1.3),
  // ---- History ----
  hg10_pax_romana: ring(320, 112, 44, 76, '#ffd166', 2.6) + ring(320, 112, 44, 76, '#ffd166', 2.6, 1.3),
  hg11_absolutism_versailles: ring(320, 112, 36, 68, '#ffd166', 2.6) + ring(320, 112, 36, 68, '#ffd166', 2.6, 1.3),
  hg9_phoenician_routes: dot('M555 120 Q410 75 265 118 T70 112', 4, 0, '#ffd166', 5) + dot('M555 120 Q410 75 265 118 T70 112', 4, 2, '#ffd166', 5),
  hg9_sources_timeline: dot('M56 88 H584', 5, 0, '#ffd166', 5),
  hg11_unification_timeline_1861: dot('M48 108 H592', 6, 0, '#ffd166', 5),
  hg5_seven_hills: dot('M36 146 Q150 130 270 156 T590 144', 5, 0, '#45d8ff', 5) + dot('M36 146 Q150 130 270 156 T590 144', 5, 2.5, '#45d8ff', 5),
  hg5_roman_roads: boxes([[48, 58, 230, 24], [48, 88, 230, 24], [48, 118, 230, 24]], '#ffd166', 1.4) + dot('M352 68 L598 82', 2.6, 0, '#45d8ff', 4) + dot('M352 68 L598 82', 2.6, 1.3, '#45d8ff', 4),
  hg9_fertile_crescent: dot('M90 165 Q210 36 470 110 L545 148', 5, 0, '#38ef7d', 5) + dot('M90 165 Q210 36 470 110 L545 148', 5, 2.5, '#38ef7d', 5),
  hg5_olympics: `<circle cx="150" cy="96" r="24" fill="none" stroke="#fff" stroke-width="3.5" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;.3333" dur="3.6s" begin="0s" repeatCount="indefinite"/></circle><circle cx="195" cy="96" r="24" fill="none" stroke="#fff" stroke-width="3.5" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;.3333" dur="3.6s" begin="1.2s" repeatCount="indefinite"/></circle><circle cx="240" cy="96" r="24" fill="none" stroke="#fff" stroke-width="3.5" opacity="0"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;.3333" dur="3.6s" begin="2.4s" repeatCount="indefinite"/></circle>`,
  hg9_cursus_honorum: boxes([[65, 136, 120, 40], [200, 110, 120, 40], [335, 84, 120, 40], [470, 58, 132, 40]], '#ffd166', 1.3),
  hg11_renaissance_perspective: dot('M80 184 L320 108', 2.6, 0, '#45d8ff', 4.5) + dot('M560 184 L320 108', 2.6, 0, '#45d8ff', 4.5) + dot('M80 184 L320 108', 2.6, 1.3, '#ffd166', 4) + dot('M560 184 L320 108', 2.6, 1.3, '#ffd166', 4),
  hg5_etruscan_necropolis: dot('M55 155 Q165 40 275 155', 4, 0, '#ffd166', 5) + ring(165, 135, 6, 30, '#ffd166', 2.4),
  hg5_roman_legion: boxes([[48, 48, 160, 32], [48, 86, 76, 58], [132, 86, 76, 58]], '#ffd166', 1.2),
  hg10_feudal_pyramid: ['180,52 152,96 208,96', '152,96 208,96 234,138 126,138', '126,138 234,138 260,178 100,178'].map((pts, i) =>
    `<polygon points="${pts}" style="fill:#ffd166;fill-opacity:.35;stroke:#fff;stroke-width:2" opacity="0" pointer-events="none"><animate attributeName="opacity" calcMode="discrete" values="1;0" keyTimes="0;.3333" dur="4.5s" begin="${i * 1.5}s" repeatCount="indefinite"/></polygon>`).join(''),
  hg11_caravel_instruments: dot('M90 150 Q150 174 210 150', 3, 0, '#fff', 5) + boxes([[132, 64, 36, 62]], '#ffd166', 1.6),
  gg5_alps_apennines: dot('M42 158 L95 66 L135 112 L170 74 L225 152 L380 152 L435 96 L485 126 L530 90 L595 158', 7, 0, '#ffd166', 5),
  gg9_contour_lines: dot('M233 118 A88 52 0 1 1 57 118 A88 52 0 1 1 233 118', 4.4, 0, '#ffd166', 4) + dot('M194 118 A64 38 0 1 1 66 118 A64 38 0 1 1 194 118', 3.4, 0, '#ffd166', 4) + dot('M156 118 A38 22 0 1 1 80 118 A38 22 0 1 1 156 118', 2.4, 0, '#ff6b8b', 4),
  hg5_etruscan_arch: dot('M80 170 L80 110 A70 70 0 0 1 220 110 L220 170', 3.6, 0, '#ffd166', 5) + dot('M220 170 L220 110 A70 70 0 0 0 80 110 L80 170', 3.6, 1.8, '#45d8ff', 5)
};

export function animateHistGeo(key: string, html: string): string {
  const close = html.lastIndexOf('</svg>');
  if (close < 0) return html;

  const panels: Rect[] = [];
  for (const m of html.matchAll(PANEL)) panels.push({ x: +m[1], y: +m[2], w: +m[3], h: +m[4], stroke: m[5] });
  // A panel that wraps other panels is a frame, not a step: tour the inner ones.
  const inner = panels.filter((p, i) => !panels.some((q, j) => j !== i
    && q.x >= p.x && q.y >= p.y && q.x + q.w <= p.x + p.w && q.y + q.h <= p.y + p.h));
  const steps = inner.length ? inner : panels;

  let extra = '';
  if (steps.length > 1) extra += tour(steps, 1.8);
  let i = 0;
  for (const m of html.matchAll(ARROW)) {
    extra += dot(`M${m[1]} ${m[2]} L${m[3]} ${m[4]}`, 1.4, (i++ % 3) * 0.45, m[5], 4);
  }
  extra += EXTRAS[key] || '';
  if (!extra) return html;
  return `${html.slice(0, close)}<g aria-hidden="true">${extra}</g>${html.slice(close)}`;
}

export const HIST_GEO_HAND_MOTION_KEYS = Object.keys(EXTRAS);
