const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync('js/slides-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const slides = sandbox.window.SLIDES_DATA;

if (!Array.isArray(slides)) {
  console.error('FAIL: SLIDES_DATA is not an array');
  process.exit(1);
}
if (slides.length !== 52) {
  console.error(`FAIL: Expected 52 slides, got ${slides.length}`);
  process.exit(1);
}

const titleSlide = slides[0];
if (titleSlide.type !== 'title') {
  console.error('FAIL: Slide 0 is not title type');
  process.exit(1);
}

const closingSlide = slides[51];
if (closingSlide.type !== 'closing') {
  console.error('FAIL: Slide 51 is not closing type');
  process.exit(1);
}

const awardees = slides.filter(s => s.type === 'awardee');
if (awardees.length !== 50) {
  console.error(`FAIL: Expected 50 awardee slides, got ${awardees.length}`);
  process.exit(1);
}

console.log('PASS: Slide data catalog verified successfully with 52 slides.');
