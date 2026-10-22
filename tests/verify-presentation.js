const fs = require('fs');
const vm = require('vm');

console.log('=== STARTING MULTI-DECK VERIFICATION SUITE ===');

// 1. Check shared assets and styles
const sharedFiles = [
  'shared/assets/pptx-background.png',
  'shared/css/floral-theme.css',
  'shared/js/presentation.js',
  'index.html'
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

// 2. Check each award deck
const decks = [
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

console.log('=== ALL MULTI-DECK CHECKS PASSED SUCCESSFULLY ===');
