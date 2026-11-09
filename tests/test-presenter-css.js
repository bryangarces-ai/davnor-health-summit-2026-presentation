const fs = require('fs');
const assert = require('assert');

const css = fs.readFileSync('shared/css/presenter-console.css', 'utf8');
const requiredSelectors = [
  '.presenter-shell',
  '.presenter-topbar',
  '.presenter-live-preview',
  '.presenter-next-preview',
  '.presenter-search-box',
  '.search-results-list',
  '.live-badge'
];

requiredSelectors.forEach(sel => {
  assert(css.includes(sel), `CSS must include selector ${sel}`);
});

console.log('PASS: test-presenter-css');
