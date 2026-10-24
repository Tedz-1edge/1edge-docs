// Export the site's launch-rule icons (1edge-frontend rule-icons.js + rule-group-icons.js) as SVG files
// for the docs: docs/assets/protections/<name>.svg. Paths and colours are the site's, byte for byte.
// The only change: fill="currentColor" becomes fill="#e8e8ef". Inside an <img> currentColor resolves to black,
// which vanishes on a dark page; on the site these icons sit in a span with color:#e8e8ef (landgame.css .lg-ti),
// so #e8e8ef IS the site's rendered colour. Every other colour and every path stays identical. The docs theme is
// dark; on a light page put the icon in a small dark tile (background #0e0e10, border-radius 10px, padding 6px)
// so it reads exactly like the site.
//
//   node tools/export-protection-icons.mjs [path/to/1edge-frontend]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homedir } from 'node:os';

const fe = process.argv[2] || join(homedir(), 'work/1edge-frontend-PROTECT');
const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs/assets/protections');
const root = {};
for (const f of ['rule-icons.js', 'rule-group-icons.js']) new Function('window', 'module', readFileSync(join(fe, f), 'utf8'))(root, undefined);
const I = root.EdgeRuleIcons;
if (!I) throw new Error('EdgeRuleIcons not found in ' + fe);

const WANT = ['pass', 'wallet-cap', 'one-per-block', 'cooldown', 'shield-15s', 'no-w2w', 'dev-lock', 'max-per-sell', 'sell-pace',
  'rising-cap', 'curve-steps', 'crowd-caps', 'sniper-fee-cap', 'reputation', 'crowd-shield', 'size-shield', 'soft-landing',
  'dev-drip', 'must-hold', 'market-hours'];
mkdirSync(out, { recursive: true });
for (const name of WANT) {
  if (I.names.indexOf(name) < 0) { console.log('skip (no icon on the site): ' + name); continue; }
  let s = I.svg(name, 48);
  if (!/^<svg[^>]*\sxmlns=/.test(s)) s = s.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  s = s.replace(/fill="currentColor"/g, 'fill="#e8e8ef"');
  writeFileSync(join(out, name + '.svg'), s + '\n');
  console.log('wrote ' + name + '.svg (' + s.length + ' B)');
}
