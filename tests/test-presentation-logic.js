const fs = require('fs');
const vm = require('vm');

// Mock browser DOM and Web Audio
const mockElement = {
  classList: { add: () => {}, remove: () => {}, toggle: () => {} },
  innerHTML: '',
  focus: () => {},
  style: {},
  addEventListener: () => {}
};

const sandbox = {
  window: {},
  document: {
    addEventListener: () => {},
    getElementById: () => mockElement,
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

const dataCode = fs.readFileSync('js/slides-data.js', 'utf8');
const engineCode = fs.readFileSync('js/presentation.js', 'utf8');

vm.createContext(sandbox);
vm.runInContext(dataCode, sandbox);
vm.runInContext(engineCode, sandbox);

const engine = sandbox.window.PresentationEngine;

if (!engine) {
  console.error('FAIL: window.PresentationEngine is not defined');
  process.exit(1);
}

// Test initial index
if (engine.getCurrentIndex() !== 0) {
  console.error(`FAIL: Expected initial index 0, got ${engine.getCurrentIndex()}`);
  process.exit(1);
}

// Test advance
engine.next();
if (engine.getCurrentIndex() !== 1) {
  console.error(`FAIL: Expected index 1 after next(), got ${engine.getCurrentIndex()}`);
  process.exit(1);
}

// Test clamping past end
engine.goToSlide(999);
if (engine.getCurrentIndex() !== 51) {
  console.error(`FAIL: Expected clamped index 51, got ${engine.getCurrentIndex()}`);
  process.exit(1);
}

// Test clamping before 0
engine.goToSlide(-5);
if (engine.getCurrentIndex() !== 0) {
  console.error(`FAIL: Expected clamped index 0, got ${engine.getCurrentIndex()}`);
  process.exit(1);
}

console.log('PASS: Presentation navigation engine logic verified.');
