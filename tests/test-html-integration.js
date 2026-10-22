const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const expectedElements = [
  'id="slideViewport"',
  'id="drawerModal"',
  'id="controlBar"',
  'id="petalsCanvas"',
  'id="drawerSearch"',
  'src="js/slides-data.js"',
  'src="js/presentation.js"',
  'href="css/floral-theme.css"',
  '<svg'
];

for (const el of expectedElements) {
  if (!html.includes(el)) {
    console.error(`FAIL: index.html is missing ${el}`);
    process.exit(1);
  }
}

console.log('PASS: index.html integration structure verified.');
