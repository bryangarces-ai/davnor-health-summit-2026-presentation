const fs = require('fs');
const css = fs.readFileSync('css/floral-theme.css', 'utf8');

const requiredSelectors = [
  ':root',
  '.slide-viewport',
  '.award-card',
  '.floral-corner',
  '.badge-seal',
  '.drawer-modal',
  '.control-bar',
  '.petals-canvas'
];

for (const sel of requiredSelectors) {
  if (!css.includes(sel)) {
    console.error(`FAIL: CSS is missing selector ${sel}`);
    process.exit(1);
  }
}

const requiredVariables = [
  '--sky-blue-primary',
  '--pink-primary',
  '--gold-foil',
  '--navy-text'
];

for (const v of requiredVariables) {
  if (!css.includes(v)) {
    console.error(`FAIL: CSS is missing variable ${v}`);
    process.exit(1);
  }
}

console.log('PASS: Floral theme stylesheet structure verified.');
