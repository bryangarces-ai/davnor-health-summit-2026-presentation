const fs = require('fs');
const vm = require('vm');

console.log('=== STARTING END-TO-END VERIFICATION SUITE ===');

// 1. File existence and size check
const files = [
  'index.html',
  'css/floral-theme.css',
  'js/slides-data.js',
  'js/presentation.js',
  'docs/superpowers/specs/2026-10-22-floral-group-awardees-slide-deck-design.md',
  'docs/superpowers/plans/2026-10-22-floral-group-awardees-slide-deck.md'
];

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`FAIL: File ${f} does not exist.`);
    process.exit(1);
  }
  const stats = fs.statSync(f);
  if (stats.size === 0) {
    console.error(`FAIL: File ${f} is empty.`);
    process.exit(1);
  }
  console.log(`✓ File verified: ${f} (${stats.size} bytes)`);
});

// 2. Validate Slide Data Integrity
const dataContent = fs.readFileSync('js/slides-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataContent, sandbox);

const slides = sandbox.window.SLIDES_DATA;
if (!Array.isArray(slides) || slides.length !== 52) {
  console.error(`FAIL: Invalid slides array. Expected 52, got ${slides ? slides.length : 'none'}`);
  process.exit(1);
}
console.log(`✓ Slide catalog verified: Total 52 slides (Title + 50 Awardees + Finale).`);

// 3. Verify specific sample awardees
const samples = [
  { id: 1, title: 'DEPARTMENT OF HEALTH DAVAO CENTER FOR HEALTH DEVELOPMENT' },
  { id: 7, title: 'DAVAO DEL NORTE HOSPITAL', sub: 'Kapalong Zone' },
  { id: 10, title: 'DAVAO REGIONAL MEDICAL CENTER' },
  { id: 18, title: 'PHILIPPINE RED CROSS', sub: 'Davao del Norte Chapter' },
  { id: 27, title: 'DEPARTMENT OF EDUCATION', sub: 'Division of Davao del Norte' },
  { id: 50, title: 'PROVINCIAL GENERAL SERVICES OFFICE' }
];

samples.forEach(s => {
  const match = slides.find(item => item.id === s.id);
  if (!match) {
    console.error(`FAIL: Missing slide id ${s.id}`);
    process.exit(1);
  }
  if (!match.title.includes(s.title)) {
    console.error(`FAIL: Slide ${s.id} title mismatch: expected "${s.title}", got "${match.title}"`);
    process.exit(1);
  }
  if (s.sub && (!match.subtitle || !match.subtitle.includes(s.sub))) {
    console.error(`FAIL: Slide ${s.id} subtitle mismatch: expected "${s.sub}", got "${match.subtitle}"`);
    process.exit(1);
  }
  console.log(`✓ Sample slide ${s.id} verified: ${s.title}`);
});

// 4. Verify Presentation Engine Logic in Mock Browser
const mockEl = {
  classList: { add: () => {}, remove: () => {}, toggle: () => {} },
  innerHTML: '',
  focus: () => {},
  style: {},
  addEventListener: () => {}
};

const domSandbox = {
  window: {},
  document: {
    addEventListener: () => {},
    getElementById: () => mockEl,
    querySelectorAll: () => [],
    fullscreenElement: null,
    documentElement: { requestFullscreen: () => {} },
    exitFullscreen: () => {}
  },
  navigator: {},
  AudioContext: class {
    createOscillator() { return { connect() {}, start() {}, stop() {}, frequency: { setValueAtTime() {} } }; }
    createGain() { return { connect() {}, gain: { setValueAtTime() {}, linearRampToValueAtTime() {}, exponentialRampToValueAtTime() {} } }; }
  },
  requestAnimationFrame: () => {}
};

vm.createContext(domSandbox);
vm.runInContext(dataContent, domSandbox);
const engineContent = fs.readFileSync('js/presentation.js', 'utf8');
vm.runInContext(engineContent, domSandbox);

const engine = domSandbox.window.PresentationEngine;
if (!engine || typeof engine.goToSlide !== 'function' || typeof engine.next !== 'function') {
  console.error('FAIL: PresentationEngine methods are missing.');
  process.exit(1);
}

// Exercise engine functions
engine.goToSlide(0);
engine.next();
engine.next();
if (engine.getCurrentIndex() !== 2) {
  console.error(`FAIL: Engine index expected 2, got ${engine.getCurrentIndex()}`);
  process.exit(1);
}
engine.prev();
if (engine.getCurrentIndex() !== 1) {
  console.error(`FAIL: Engine index expected 1, got ${engine.getCurrentIndex()}`);
  process.exit(1);
}
engine.toggleSound();
engine.triggerConfetti();

console.log('✓ Presentation Engine methods and states verified.');
console.log('=== ALL END-TO-END VERIFICATION CHECKS PASSED ===');
