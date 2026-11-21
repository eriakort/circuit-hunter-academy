/**
 * Motion for the diagrams in visuals.ts that were still static (card sets, panels, stacks and
 * small SVG diagrams). It is applied generically so every diagram moves:
 *  - card/panel/layer rows light up one after another (CSS, class `vm-tour`);
 *  - SVG diagrams pulse their shapes in turn (SMIL <animate> added to the shapes);
 *  - anything else gets a soft light sweep (class `vm-sweep`).
 * Diagrams that already carry their own motion are left untouched. Reduced motion stops CSS
 * animations through the global rule and SMIL through the effect in MissionScreen.
 */

const HAS_MOTION = /<animate|<set\b|class="[^"]*\b(anim|scan|spin|flow|float|pulse|vm-tour|vm-sweep)\b/;

const MAX_SHAPES = 9;

const SHAPE = /<(rect|circle|polygon|ellipse|line|polyline)\b([^>]*?)\s*\/>/g;

function pulseShapes(svg: string): string {
  const eligible: Array<{ index: number }> = [];
  let m: RegExpExecArray | null;
  const re = new RegExp(SHAPE.source, 'g');
  while ((m = re.exec(svg))) {
    const attrs = m[2];
    if (/var\(--panel2?\)/.test(attrs) && /fill=/.test(attrs) && !/stroke-width/.test(attrs)) continue; // backdrop panel
    const width = /\swidth="(\d+(?:\.\d+)?)"/.exec(attrs);
    if (width && +width[1] > 480) continue; // backdrop
    if (/opacity="0?\.0/.test(attrs)) continue;
    eligible.push({ index: m.index });
  }
  if (!eligible.length) return svg;
  const step = Math.max(1, Math.ceil(eligible.length / MAX_SHAPES));
  const chosen = new Set(eligible.filter((_, i) => i % step === 0).map(e => e.index));
  const count = chosen.size;
  const cycle = (count * 0.7 + 2).toFixed(1);
  let n = 0;
  return svg.replace(new RegExp(SHAPE.source, 'g'), (whole, tag, attrs, offset) => {
    if (!chosen.has(offset)) return whole;
    const begin = (n++ * 0.7).toFixed(1);
    const sw = /stroke-width="(\d+(?:\.\d+)?)"/.exec(attrs) || (/\sstroke="(?!none)/.test(attrs) ? ['', '1'] : null);
    const hasFill = /fill="(?!none)/.test(attrs) && !sw;
    const slot = (1.3 / +cycle).toFixed(3);
    // brief highlight then rest for the remainder of the cycle
    const anim = hasFill || !sw
      ? `<animate attributeName="opacity" values="1;.4;1;1" keyTimes="0;${(+slot / 2).toFixed(3)};${slot};1" dur="${cycle}s" begin="${begin}s" repeatCount="indefinite"/>`
      : `<animate attributeName="stroke-width" values="${sw[1]};${(+sw[1] * 2.6).toFixed(1)};${sw[1]};${sw[1]}" keyTimes="0;${(+slot / 2).toFixed(3)};${slot};1" dur="${cycle}s" begin="${begin}s" repeatCount="indefinite"/>`;
    return `<${tag}${attrs}>${anim}</${tag}>`;
  });
}

const TOUR_CONTAINERS = /<div class="(grid3|twocol|stack|pyr|ladder)"/;

export function animateVisual(html: string): string {
  if (!html || HAS_MOTION.test(html)) return html;
  const trimmed = html.trim();
  if (trimmed.startsWith('<svg') && trimmed.endsWith('</svg>')) {
    const out = pulseShapes(html);
    if (out !== html) return out;
  }
  if (TOUR_CONTAINERS.test(html)) {
    return html.replace(/<div class="(grid3|twocol|stack|pyr|ladder)"/, '<div class="$1 vm-tour"');
  }
  return `<div class="vm-sweep">${html}</div>`;
}
