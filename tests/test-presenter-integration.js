const fs = require('fs');
const assert = require('assert');
const vm = require('vm');

const decks = [
  '00-program-health-summit-2026',
  '01-group-awardees',
  '02-individual-awardees',
  '03-top-program-managers',
  '04-consolation-and-winners',
  '05-official-results',
  'tb-summit-2026/01-special-awards',
  'nutrition-congress-2026/00-program-flow'
];

decks.forEach(deck => {
  const presenterPath = `${deck}/presenter.html`;
  assert(fs.existsSync(presenterPath), `Missing ${presenterPath}`);
  const presenterContent = fs.readFileSync(presenterPath, 'utf8');
  assert(presenterContent.includes('presenter-console.js'), `${presenterPath} must include presenter-console.js`);
  assert(presenterContent.includes('presenter-console.css'), `${presenterPath} must include presenter-console.css`);

  const indexPath = `${deck}/index.html`;
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  assert(indexHtml.includes('presenter.html'), `${indexPath} must include a link/button to presenter.html`);
  assert(indexHtml.includes('window.PresentationEngine.openPresenterView'), `${indexPath} open presenter view button must call window.PresentationEngine.openPresenterView`);
});

// Verify shared/js/presentation.js exports openPresenterView and handles 'p' / 'P'
const presentationCode = fs.readFileSync('shared/js/presentation.js', 'utf8');
assert(presentationCode.includes('openPresenterView'), 'shared/js/presentation.js must define openPresenterView');
assert(presentationCode.includes("case 'p':") || presentationCode.includes('case "p":'), "shared/js/presentation.js must handle 'p' key for presenter view");

// Test runtime presentation engine openPresenterView
const mockDoc = {
  addEventListener: () => {},
  getElementById: () => ({ style: {}, classList: { add: () => {}, remove: () => {} }, innerHTML: '', addEventListener: () => {} }),
  querySelectorAll: () => [],
  documentElement: { classList: { add: () => {}, remove: () => {} } }
};
let openedUrl = null;
const sandbox = {
  window: {
    location: { search: '', hash: '#2', pathname: '/00-program-health-summit-2026/index.html' },
    localStorage: { getItem: () => null, setItem: () => {} },
    addEventListener: () => {},
    document: mockDoc,
    open: (url) => { openedUrl = url; return { focus: () => {} }; },
    setTimeout: (fn) => setTimeout(fn, 0),
    clearTimeout: () => {},
    setInterval: () => 1,
    clearInterval: () => {}
  },
  document: mockDoc,
  setTimeout: (fn) => setTimeout(fn, 0),
  clearTimeout: () => {},
  setInterval: () => 1,
  clearInterval: () => {}
};
vm.createContext(sandbox);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "S1" }, { id: 2, title: "S2" }, { id: 3, title: "S3" }];', sandbox);
vm.runInContext(presentationCode, sandbox);

assert(typeof sandbox.window.PresentationEngine.openPresenterView === 'function', 'window.PresentationEngine.openPresenterView must be a function');
sandbox.window.PresentationEngine.openPresenterView();
assert.strictEqual(openedUrl, 'presenter.html#2', 'openPresenterView should open presenter.html with current slide hash');

// Verify shared/js/presenter-console.js exports compatibility functions
const consoleCode = fs.readFileSync('shared/js/presenter-console.js', 'utf8');
const createMockElement = () => ({
  innerHTML: '',
  textContent: '',
  value: '',
  style: {},
  classList: { add: () => {}, remove: () => {}, contains: () => false },
  addEventListener: () => {},
  focus: () => {},
  getAttribute: () => null,
  setAttribute: () => {},
  removeAttribute: () => {}
});

const consoleSandbox = {
  window: {
    location: { pathname: '/nutrition-congress-2026/00-program-flow/presenter.html', search: '' },
    localStorage: { getItem: () => null, setItem: () => {} },
    setInterval: () => 1,
    clearInterval: () => {},
    document: {
      getElementById: () => createMockElement(),
      querySelectorAll: () => []
    }
  },
  document: {
    getElementById: () => createMockElement(),
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  setInterval: () => 1,
  clearInterval: () => {}
};
vm.createContext(consoleSandbox);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "S1" }];', consoleSandbox);
vm.runInContext(consoleCode, consoleSandbox);
const app = consoleSandbox.window.PresenterConsoleApp;
assert(typeof app.navigatePrev === 'function', 'PresenterConsoleApp.navigatePrev must be a function');
assert(typeof app.navigateNext === 'function', 'PresenterConsoleApp.navigateNext must be a function');
assert(typeof app.clearSearch === 'function', 'PresenterConsoleApp.clearSearch must be a function');
assert(typeof app.adjustNotesZoom === 'function', 'PresenterConsoleApp.adjustNotesZoom must be a function');
assert(typeof app.toggleBlackout === 'function', 'PresenterConsoleApp.toggleBlackout must be a function');
assert(typeof app.getNextDeckInfo === 'function', 'PresenterConsoleApp.getNextDeckInfo must be a function');
assert(typeof app.advanceToNextDeck === 'function', 'PresenterConsoleApp.advanceToNextDeck must be a function');

// Test deck continuity from 00-program-flow to 01-pangga-ko-si-sam
const nextDeck = app.getNextDeckInfo();
assert(nextDeck !== null, '00-program-flow should have next deck info');
assert.strictEqual(nextDeck.folder, '01-pangga-ko-si-sam');
assert.strictEqual(nextDeck.previewUrl, '../01-pangga-ko-si-sam/index.html?mode=preview#0');
assert.strictEqual(nextDeck.presenterUrl, '../01-pangga-ko-si-sam/presenter.html#0');
assert.strictEqual(nextDeck.projectorUrl, '../01-pangga-ko-si-sam/index.html?mode=projector#0');

// Test advance to next deck upon next() at last slide
let navigatedPresenterUrl = null;
consoleSandbox.window.location.href = '';
Object.defineProperty(consoleSandbox.window.location, 'href', {
  set: (val) => { navigatedPresenterUrl = val; },
  get: () => navigatedPresenterUrl
});
app.next(); // Since slides has 1 item and currentIndex is 0 (last slide), next() advances to next deck
assert.strictEqual(navigatedPresenterUrl, '../01-pangga-ko-si-sam/presenter.html#0', 'next() on last slide must navigate presenter console to next deck');

// Test terminal deck returns null
const finalDeckSandbox = {
  window: {
    location: { pathname: '/nutrition-congress-2026/07-bns-loyalty-awards/presenter.html', search: '' },
    localStorage: { getItem: () => null, setItem: () => {} },
    setInterval: () => 1,
    clearInterval: () => {},
    document: {
      getElementById: () => createMockElement(),
      querySelectorAll: () => []
    }
  },
  document: {
    getElementById: () => createMockElement(),
    querySelectorAll: () => [],
    addEventListener: () => {}
  },
  setInterval: () => 1,
  clearInterval: () => {}
};
vm.createContext(finalDeckSandbox);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "Final" }];', finalDeckSandbox);
vm.runInContext(consoleCode, finalDeckSandbox);
const finalApp = finalDeckSandbox.window.PresenterConsoleApp;
assert.strictEqual(finalApp.getNextDeckInfo(), null, 'Final deck 07 should return null for getNextDeckInfo');

console.log('PASS: test-presenter-integration');
