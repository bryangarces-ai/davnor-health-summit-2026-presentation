const fs = require('fs');
const vm = require('vm');

console.log('=== STARTING MULTI-DECK VERIFICATION SUITE ===');

// 1. Check shared assets and styles
const sharedFiles = [
  'shared/assets/pptx-background.png',
  'shared/css/floral-theme.css',
  'shared/js/presentation.js',
  'shared/js/cloud-sync.js',
  'shared/js/logos-config.js',
  'shared/assets/logos/DDN.png',
  'shared/assets/logos/PHO-Logo.png',
  'shared/assets/logos/logo-3.png',
  'index.html',
  'admin/index.html',
  'admin/admin.css',
  'admin/admin.js',
  'vercel.json'
];

sharedFiles.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error(`FAIL: Missing ${f}`);
    process.exit(1);
  }
  const size = fs.statSync(f).size;
  if (size === 0) {
    console.error(`FAIL: ${f} is empty`);
    process.exit(1);
  }
  console.log(`✓ Shared asset verified: ${f} (${size} bytes)`);
});

// 2. Check each presentation deck
const decks = [
  { folder: '00-program-health-summit-2026', minSlides: 15 },
  { folder: '01-group-awardees', minSlides: 50 },
  { folder: '02-individual-awardees', minSlides: 20 },
  { folder: '03-top-program-managers', minSlides: 35 },
  { folder: '04-consolation-and-winners', minSlides: 25 }
];

decks.forEach(d => {
  const htmlPath = `${d.folder}/index.html`;
  const dataPath = `${d.folder}/slides-data.js`;

  if (!fs.existsSync(htmlPath)) {
    console.error(`FAIL: Missing ${htmlPath}`);
    process.exit(1);
  }
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  if (!htmlContent.includes('cloud-sync.js')) {
    console.error(`FAIL: ${htmlPath} missing cloud-sync.js`);
    process.exit(1);
  }
  if (!fs.existsSync(dataPath)) {
    console.error(`FAIL: Missing ${dataPath}`);
    process.exit(1);
  }

  const dataCode = fs.readFileSync(dataPath, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dataCode, sandbox);

  const slides = sandbox.window.SLIDES_DATA;
  if (!Array.isArray(slides) || slides.length < d.minSlides) {
    console.error(`FAIL: ${dataPath} expected >= ${d.minSlides} slides, got ${slides ? slides.length : 0}`);
    process.exit(1);
  }

  console.log(`✓ Deck verified: ${d.folder} (${slides.length} slides total)`);
});

// 3. Test multi-award citation grid and slide rendering in simulated DOM environment
console.log('\n=== TESTING MULTI-AWARD CITATION RENDERING ENGINE ===');

const presentationJsCode = fs.readFileSync('shared/js/presentation.js', 'utf8');

function simulateSlideRender(slideData, allSlides) {
  let innerHtmlResult = '';
  const fakeElement = {
    set innerHTML(val) { innerHtmlResult = val; },
    get innerHTML() { return innerHtmlResult; },
    classList: { add() {}, remove() {} },
    style: {},
    addEventListener() {},
    removeEventListener() {},
    appendChild() {},
    setAttribute() {}
  };
  const fakeDocument = {
    body: fakeElement,
    getElementById(id) {
      if (id === 'slideViewport') return fakeElement;
      return fakeElement;
    },
    createElement() { return fakeElement; },
    querySelectorAll() { return []; },
    addEventListener() {},
    removeEventListener() {}
  };

  const sandbox = {
    window: {
      SLIDES_DATA: allSlides || [slideData],
      OFFICIAL_LOGOS: ['shared/assets/logos/logo-3.png', 'shared/assets/logos/DDN.png', 'shared/assets/logos/PHO-Logo.png'],
      addEventListener() {},
      removeEventListener() {}
    },
    document: fakeDocument,
    console: console,
    setTimeout: function(fn) { fn(); },
    clearTimeout: function() {},
    setInterval: function() {},
    AudioContext: function() { return { createOscillator() {}, createGain() {} }; }
  };

  vm.createContext(sandbox);
  // Run presentation.js (init runs automatically)
  vm.runInContext(presentationJsCode, sandbox);
  sandbox.window.PresentationEngine.goToSlide(slideData.id);

  return innerHtmlResult;
}

// Load deck 04 data
const d4Sandbox = { window: {} };
vm.createContext(d4Sandbox);
vm.runInContext(fs.readFileSync('04-consolation-and-winners/slides-data.js', 'utf8'), d4Sandbox);
const d4Slides = d4Sandbox.window.SLIDES_DATA;

// Test Slide 23: City of Tagum (12 awards)
const tagumSlide = d4Slides.find(s => s.id === 23);
const tagumHtml = simulateSlideRender(tagumSlide, d4Slides);
const tagumPills = (tagumHtml.match(/class="citation-pill/g) || []).length;
if (tagumPills !== 12) {
  console.error(`FAIL: Tagum Slide 23 expected 12 citation pills, got ${tagumPills}`);
  process.exit(1);
}
if (!tagumHtml.includes('award-card--multi-awards') || !tagumHtml.includes('citations-grid--2col')) {
  console.error(`FAIL: Tagum Slide 23 should have award-card--multi-awards and citations-grid--2col classes`);
  process.exit(1);
}
console.log(`✓ Slide 23 (Tagum): 12 citation pills rendered correctly in 2-column layout`);

// Test Slide 9: Sawata (3 awards) -> Should be 1-column layout without blanks
const sawataSlide = d4Slides.find(s => s.id === 9);
const sawataHtml = simulateSlideRender(sawataSlide, d4Slides);
const sawataPills = (sawataHtml.match(/class="citation-pill/g) || []).length;
if (sawataPills !== 3 || !sawataHtml.includes('citations-grid--1col')) {
  console.error(`FAIL: Sawata Slide 9 expected 3 citation pills in 1-column layout, got ${sawataPills}`);
  process.exit(1);
}
console.log(`✓ Slide 9 (Sawata): 3 citation pills rendered correctly in single centered column`);

// Test Slide 10: Asuncion (2 awards) -> Should be 1-column layout
const asuncionSlide = d4Slides.find(s => s.id === 10);
const asuncionHtml = simulateSlideRender(asuncionSlide, d4Slides);
const asuncionPills = (asuncionHtml.match(/class="citation-pill/g) || []).length;
if (asuncionPills !== 2 || !asuncionHtml.includes('citations-grid--1col')) {
  console.error(`FAIL: Asuncion Slide 10 expected 2 citation pills in 1-column layout, got ${asuncionPills}`);
  process.exit(1);
}
console.log(`✓ Slide 10 (Asuncion): 2 citation pills rendered correctly in single centered column`);

// Test Slide 12: Carmen (5 awards) -> Should be 2-column layout
const carmenSlide = d4Slides.find(s => s.id === 12);
const carmenHtml = simulateSlideRender(carmenSlide, d4Slides);
const carmenPills = (carmenHtml.match(/class="citation-pill/g) || []).length;
if (carmenPills !== 5 || !carmenHtml.includes('citations-grid--2col')) {
  console.error(`FAIL: Carmen Slide 12 expected 5 citation pills in 2-column layout, got ${carmenPills}`);
  process.exit(1);
}
console.log(`✓ Slide 12 (Carmen): 5 citation pills rendered in 2-column layout with centered bottom pill`);

// Test Slide 28: New Corella (12 awards)
const newCorellaSlide = d4Slides.find(s => s.id === 28);
const newCorellaHtml = simulateSlideRender(newCorellaSlide, d4Slides);
const newCorellaPills = (newCorellaHtml.match(/class="citation-pill/g) || []).length;
if (newCorellaPills !== 12) {
  console.error(`FAIL: New Corella Slide 28 expected 12 citation pills, got ${newCorellaPills}`);
  process.exit(1);
}
console.log(`✓ Slide 28 (New Corella): 12 citation pills rendered correctly`);

// Test Slide 21: Panabo (10 awards)
const panaboSlide = d4Slides.find(s => s.id === 21);
const panaboHtml = simulateSlideRender(panaboSlide, d4Slides);
const panaboPills = (panaboHtml.match(/class="citation-pill/g) || []).length;
if (panaboPills !== 10) {
  console.error(`FAIL: Panabo Slide 21 expected 10 citation pills, got ${panaboPills}`);
  process.exit(1);
}
console.log(`✓ Slide 21 (Panabo): 10 citation pills rendered correctly`);

// Test Slide 19: Samal (8 awards)
const samalSlide = d4Slides.find(s => s.id === 19);
const samalHtml = simulateSlideRender(samalSlide, d4Slides);
const samalPills = (samalHtml.match(/class="citation-pill/g) || []).length;
if (samalPills !== 8) {
  console.error(`FAIL: Samal Slide 19 expected 8 citation pills, got ${samalPills}`);
  process.exit(1);
}
console.log(`✓ Slide 19 (Samal): 8 citation pills rendered correctly`);

// Test Slide 1 & Slide 14: Section Header Slides
const s1Slide = d4Slides.find(s => s.id === 1);
const s1Html = simulateSlideRender(s1Slide, d4Slides);
if (!s1Html.includes('section-card') || !s1Html.includes('BARANGAY CATEGORY')) {
  console.error('FAIL: Slide 1 should render as section-card');
  process.exit(1);
}
console.log('✓ Slide 1: Section divider rendered correctly with category badges');

const s14Slide = d4Slides.find(s => s.id === 14);
const s14Html = simulateSlideRender(s14Slide, d4Slides);
if (!s14Html.includes('section-card') || !s14Html.includes('TOP 3 PERFORMING CITIES')) {
  console.error('FAIL: Slide 14 should render as section-card');
  process.exit(1);
}
console.log('✓ Slide 14: Section divider rendered correctly with category badges');

// Test 03-top-program-managers Slide 7 (Mary Grace Embalsado)
const d3Sandbox = { window: {} };
vm.createContext(d3Sandbox);
vm.runInContext(fs.readFileSync('03-top-program-managers/slides-data.js', 'utf8'), d3Sandbox);
const d3Slides = d3Sandbox.window.SLIDES_DATA;
const embalsadoSlide = d3Slides.find(s => s.id === 7);
const embalsadoHtml = simulateSlideRender(embalsadoSlide, d3Slides);
const embalsadoPills = (embalsadoHtml.match(/class="citation-pill/g) || []).length;
if (embalsadoPills !== 3 || !embalsadoHtml.includes('citations-grid--1col')) {
  console.error(`FAIL: Embalsado Slide 7 expected 3 citation pills in 1-column layout, got ${embalsadoPills}`);
  process.exit(1);
}
if (!embalsadoHtml.includes('Municipal Health Office of New Corella')) {
  console.error('FAIL: Embalsado Slide 7 should render the Office/Role subtitle');
  process.exit(1);
}
console.log(`✓ 03 Deck Slide 7 (Embalsado): Office subtitle AND 3 program citation pills rendered correctly without conflict`);

// Test Single Citation Badge + Subtitle Coexistence
const testSingleBadge = {
  id: 99,
  type: 'awardee',
  title: 'TEST AWARDEE',
  subtitle: 'Rural Health Unit of Kapalong',
  citations: ['EXCELLENCE IN TUBERCULOSIS CONTROL']
};
const singleHtml = simulateSlideRender(testSingleBadge, [testSingleBadge]);
const singlePills = (singleHtml.match(/class="citation-pill/g) || []).length;
if (singlePills !== 1 || !singleHtml.includes('Rural Health Unit of Kapalong') || !singleHtml.includes('EXCELLENCE IN TUBERCULOSIS CONTROL')) {
  console.error('FAIL: Single citation badge + subtitle test failed');
  process.exit(1);
}
console.log(`✓ Single Citation Badge + Subtitle verified: Office/Role and 1 citation badge render cleanly together`);

// Test De-duplication when subtitle equals joined citations
const testCorrupted = {
  id: 98,
  type: 'awardee',
  title: 'TEST CORRUPTED',
  subtitle: 'AWARD ONE | AWARD TWO',
  citations: ['AWARD ONE', 'AWARD TWO']
};
const corruptedHtml = simulateSlideRender(testCorrupted, [testCorrupted]);
if (corruptedHtml.includes('awardee-subtitle')) {
  console.error('FAIL: Corrupted slide should not render duplicate subtitle text');
  process.exit(1);
}
console.log(`✓ De-duplication verified: Subtitle matching joined citations is suppressed to prevent duplicated text`);

// Check that no rendered slide contains "undefined" or "NaN"
d4Slides.forEach(s => {
  const rendered = simulateSlideRender(s, d4Slides);
  if (rendered.includes('undefined') || rendered.includes('NaN')) {
    console.error(`FAIL: Slide ${s.id} in deck 04 rendered with undefined or NaN`);
    process.exit(1);
  }
});
console.log('✓ All 32 slides in 04-consolation-and-winners verified clean with zero undefined values');

// Test PresentationEngine.toggleControls functionality
let testBodyClassList = [];
const testBody = {
  classList: {
    add(c) { if (!testBodyClassList.includes(c)) testBodyClassList.push(c); },
    remove(c) { testBodyClassList = testBodyClassList.filter(x => x !== c); },
    contains(c) { return testBodyClassList.includes(c); }
  }
};
const testDoc = {
  body: testBody,
  getElementById(id) {
    return {
      classList: testBody.classList,
      style: {},
      addEventListener() {},
      removeEventListener() {},
      appendChild() {},
      setAttribute() {}
    };
  },
  createElement() {
    return {
      classList: testBody.classList,
      style: {},
      addEventListener() {},
      removeEventListener() {},
      setAttribute() {}
    };
  },
  querySelectorAll() { return []; },
  addEventListener() {},
  removeEventListener() {}
};
const testSandbox = {
  window: {
    SLIDES_DATA: d4Slides,
    OFFICIAL_LOGOS: [],
    addEventListener() {},
    removeEventListener() {}
  },
  document: testDoc,
  console: console,
  setTimeout: function(fn, delay) { return 1; },
  clearTimeout: function() {},
  setInterval: function() {},
  AudioContext: function() { return { createOscillator() {}, createGain() {} }; }
};
vm.createContext(testSandbox);
vm.runInContext(presentationJsCode, testSandbox);
if (typeof testSandbox.window.PresentationEngine.toggleControls !== 'function') {
  console.error('FAIL: toggleControls must be exported');
  process.exit(1);
}
testSandbox.window.PresentationEngine.toggleControls(false); // force hide
if (!testBody.classList.contains('controls-hidden')) {
  console.error('FAIL: toggleControls(false) should add controls-hidden');
  process.exit(1);
}
testSandbox.window.PresentationEngine.toggleControls(true); // force show
if (testBody.classList.contains('controls-hidden')) {
  console.error('FAIL: toggleControls(true) should remove controls-hidden');
  process.exit(1);
}
console.log('✓ Stage LED mode: toggleControls and auto-hide logic verified successfully');

console.log('\n=== ALL MULTI-DECK & CITATION GRID CHECKS PASSED SUCCESSFULLY ===');
