const fs = require('fs');
const assert = require('assert');

const decks = [
  '00-program-health-summit-2026',
  '01-group-awardees',
  '02-individual-awardees',
  '03-top-program-managers',
  '04-consolation-and-winners',
  '05-official-results',
  'tb-summit-2026/01-special-awards'
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
});

console.log('PASS: test-presenter-integration');
