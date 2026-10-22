# Floral Pink & Sky Blue Group Awardees Slide Deck Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an interactive, offline-ready HTML5 presentation slide deck celebrating the 50 Group Awardees of the Program Health Summit 2026 with a bespoke floral pink, sky blue, and champagne gold aesthetic.

**Architecture:** A lightweight client-side presentation engine with embedded SVG floral botanicals and vanilla ES6/CSS3. Data is decoupled into a dedicated catalog module, styled via a floral theme stylesheet, and driven by a robust navigation and search controller.

**Tech Stack:** HTML5, CSS3, Vanilla ES6, SVG Vector Graphics, Web Audio API, Canvas API.

**Spec:** `docs/superpowers/specs/2026-10-22-floral-group-awardees-slide-deck-design.md`

## Global Constraints

- Must run completely offline via file protocol (`file:///.../index.html`) without requiring a local web server or internet connection.
- All 50 Group Awardees from `(1) GROUP AWARDEES.pptx` must be included with 100% text fidelity.
- Palette strictly adheres to Sky Blue (`#4BA3E3` / `#E8F4FC`), Blossom Pink (`#F06292` / `#F8BBD0`), Champagne Gold (`#D4AF37`), and Midnight Slate (`#0F1E36`).
- No external node package runtimes required for end-user execution; zero external runtime dependencies.

## Review Focus

- Slide index out-of-bounds navigation: advancing past slide 52 or before slide 1 gracefully clamps without errors.
- Drawer search filtering: typing partial or case-insensitive search queries (e.g., "deped", "hospital") correctly updates displayed cards.
- Keyboard navigation collision: typing in the search input box must not trigger slide advance or shortcut keys.
- SVG rendering on standard and high-DPI displays: vector floral borders must scale cleanly without pixelation or clipping.
- Sound chime playback resilience: audio context must handle browser autoplay restrictions gracefully without throwing unhandled exceptions.

---

### Task 1: Slide Data Catalog (`js/slides-data.js`)

**Files:**
- Create: `js/slides-data.js`
- Test: `tests/test-slides-data.js`

**Interfaces:**
- Produces: `window.SLIDES_DATA` — Array of 52 slide objects: `{ id: number, type: 'title'|'awardee'|'closing', number?: number, title: string, subtitle?: string, category?: string }`.

- [ ] **Step 1: Write test for slide data catalog**

Create `tests/test-slides-data.js`:
```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-slides-data.js`
Expected: FAIL with "Cannot find module" or "no such file".

- [ ] **Step 3: Implement `js/slides-data.js`**

Populate all 52 slides with full text from the spec inventory (Title slide, 50 awardees, Concluding slide):
```javascript
(function () {
  window.SLIDES_DATA = [
    {
      id: 0,
      type: 'title',
      event: 'PROGRAM HEALTH SUMMIT 2026',
      subEvent: 'Province of Davao del Norte',
      title: 'RECOGNITION OF SPECIAL AWARDS',
      category: 'GROUP AWARDEES',
      citation: 'Honoring our Outstanding Health Partners, Hospitals, Civic Organizations, and Provincial Offices'
    },
    {
      id: 1,
      number: 1,
      type: 'awardee',
      title: 'DEPARTMENT OF HEALTH DAVAO CENTER FOR HEALTH DEVELOPMENT',
      subtitle: 'Davao Center for Health Development',
      category: 'Regional Health Leadership'
    },
    {
      id: 2,
      number: 2,
      type: 'awardee',
      title: 'HEALTH SYSTEMS RESILIENCE PROJECT',
      subtitle: 'Davao Center for Health Development',
      category: 'Health Systems Program'
    },
    {
      id: 3,
      number: 3,
      type: 'awardee',
      title: 'DOH CHD XI',
      subtitle: 'Health Emergency Management Staff',
      category: 'Emergency Management Unit'
    },
    {
      id: 4,
      number: 4,
      type: 'awardee',
      title: 'PROVINCIAL DEPARTMENT OF HEALTH OFFICE',
      subtitle: 'Davao del Norte',
      category: 'Provincial Health Office'
    },
    {
      id: 5,
      number: 5,
      type: 'awardee',
      title: 'NATIONAL NUTRITION COUNCIL XI',
      subtitle: 'Retsebeth M. Laquihon, RND, MPD, MDM — Regional Nutrition Program Coordinator',
      category: 'Nutrition Program Partner'
    },
    {
      id: 6,
      number: 6,
      type: 'awardee',
      title: 'COMMISSION ON POPULATION AND DEVELOPMENT REGION XI',
      subtitle: 'Jeff Y. Fuentes, MHSS — Regional Director',
      category: 'Population Development Partner'
    },
    {
      id: 7,
      number: 7,
      type: 'awardee',
      title: 'DAVAO DEL NORTE HOSPITAL',
      subtitle: 'Kapalong Zone',
      category: 'Provincial Hospital Zone'
    },
    {
      id: 8,
      number: 8,
      type: 'awardee',
      title: 'DAVAO DEL NORTE HOSPITAL',
      subtitle: 'Carmen Zone',
      category: 'Provincial Hospital Zone'
    },
    {
      id: 9,
      number: 9,
      type: 'awardee',
      title: 'DAVAO DEL NORTE HOSPITAL',
      subtitle: 'Igacos Zone',
      category: 'Provincial Hospital Zone'
    },
    {
      id: 10,
      number: 10,
      type: 'awardee',
      title: 'DAVAO REGIONAL MEDICAL CENTER',
      subtitle: 'Tertiary Health Institution',
      category: 'Regional Medical Center'
    },
    {
      id: 11,
      number: 11,
      type: 'awardee',
      title: 'DAVAO REGIONAL MEDICAL CENTER',
      subtitle: 'Health Emergency and Disaster Management Unit',
      category: 'Specialized Medical Unit'
    },
    {
      id: 12,
      number: 12,
      type: 'awardee',
      title: 'DAVAO REGIONAL MEDICAL CENTER',
      subtitle: 'Surgery Department',
      category: 'Clinical Medical Department'
    },
    {
      id: 13,
      number: 13,
      type: 'awardee',
      title: 'DAVAO REGIONAL MEDICAL CENTER',
      subtitle: 'Internal Medicine Department',
      category: 'Clinical Medical Department'
    },
    {
      id: 14,
      number: 14,
      type: 'awardee',
      title: 'DAVAO REGIONAL MEDICAL CENTER',
      subtitle: 'OB-GYNE Department',
      category: 'Clinical Medical Department'
    },
    {
      id: 15,
      number: 15,
      type: 'awardee',
      title: 'PHILIPPINE DRUG ENFORCEMENT AGENCY XI',
      subtitle: 'Davao del Norte Provincial Office',
      category: 'Law Enforcement & Public Health Partner'
    },
    {
      id: 16,
      number: 16,
      type: 'awardee',
      title: 'BUREAU OF FIRE PROTECTION',
      subtitle: 'Office of the Provincial Fire Marshal Davao del Norte',
      category: 'Emergency & Safety Partner'
    },
    {
      id: 17,
      number: 17,
      type: 'awardee',
      title: 'REGIONAL MEDICAL AND DENTAL UNIT 11',
      subtitle: 'Davao del Norte Provincial Medical and Dental Team (PNP)',
      category: 'Police Medical & Dental Unit'
    },
    {
      id: 18,
      number: 18,
      type: 'awardee',
      title: 'PHILIPPINE RED CROSS',
      subtitle: 'Davao del Norte Chapter',
      category: 'Humanitarian & Blood Services Partner'
    },
    {
      id: 19,
      number: 19,
      type: 'awardee',
      title: 'DKT FOUNDATION, INC.',
      subtitle: 'Reproductive Health & Community Partner',
      category: 'Civil Society Partner'
    },
    {
      id: 20,
      number: 20,
      type: 'awardee',
      title: 'NORTH DAVAO DENTAL CHAPTER',
      subtitle: 'Professional Dental Healthcare Association',
      category: 'Professional Healthcare Association'
    },
    {
      id: 21,
      number: 21,
      type: 'awardee',
      title: 'THE ADVOCATES ON HIV AND AIDS SOCIETY',
      subtitle: 'Community Health Advocacy Organization',
      category: 'Community Health Partner'
    },
    {
      id: 22,
      number: 22,
      type: 'awardee',
      title: 'DANGEROUS DRUGS BOARD',
      subtitle: 'National Prevention & Policy Agency',
      category: 'Government Partner Agency'
    },
    {
      id: 23,
      number: 23,
      type: 'awardee',
      title: 'PHILIPPINE TUBERCULOSIS SOCIETY, INC.',
      subtitle: 'TB Prevention and Control Partner',
      category: 'Healthcare Advocacy Partner'
    },
    {
      id: 24,
      number: 24,
      type: 'awardee',
      title: 'FAMILY PLANNING ORGANIZATION OF THE PHILIPPINES',
      subtitle: 'Family Health & Reproductive Care',
      category: 'Family Planning Partner'
    },
    {
      id: 25,
      number: 25,
      type: 'awardee',
      title: 'ROTARY CLUB OF TAGUM NORTH',
      subtitle: 'Community Service & Healthcare Supporter',
      category: 'Civic Organization Partner'
    },
    {
      id: 26,
      number: 26,
      type: 'awardee',
      title: 'PHILHEALTH LOCAL HEALTH INSURANCE OFFICE',
      subtitle: 'Tagum City',
      category: 'Social Health Insurance Partner'
    },
    {
      id: 27,
      number: 27,
      type: 'awardee',
      title: 'DEPARTMENT OF EDUCATION',
      subtitle: 'Division of Davao del Norte',
      category: 'Education Division Partner'
    },
    {
      id: 28,
      number: 28,
      type: 'awardee',
      title: 'DEPARTMENT OF EDUCATION',
      subtitle: 'Division of Tagum City',
      category: 'Education Division Partner'
    },
    {
      id: 29,
      number: 29,
      type: 'awardee',
      title: 'DEPARTMENT OF EDUCATION',
      subtitle: 'Division of Panabo City',
      category: 'Education Division Partner'
    },
    {
      id: 30,
      number: 30,
      type: 'awardee',
      title: 'DEPARTMENT OF EDUCATION',
      subtitle: 'Division of Island Garden City of Samal',
      category: 'Education Division Partner'
    },
    {
      id: 31,
      number: 31,
      type: 'awardee',
      title: 'DEPARTMENT OF INTERIOR AND LOCAL GOVERNMENT',
      subtitle: 'Davao del Norte',
      category: 'Local Governance Partner'
    },
    {
      id: 32,
      number: 32,
      type: 'awardee',
      title: 'PHILIPPINE PEDIATRIC SOCIETY',
      subtitle: 'Davao Southern Mindanao Chapter',
      category: 'Medical Specialty Society'
    },
    {
      id: 33,
      number: 33,
      type: 'awardee',
      title: 'PROVINCIAL ECONOMIC ENTERPRISE & DEVELOPMENT OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 34,
      number: 34,
      type: 'awardee',
      title: 'PROVINCIAL LEGAL OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 35,
      number: 35,
      type: 'awardee',
      title: 'PROVINCIAL INFORMATION, COMMUNICATION, AND KNOWLEDGE MANAGEMENT OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 36,
      number: 36,
      type: 'awardee',
      title: 'PROVINCIAL HUMAN RESOURCE & MANAGEMENT OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 37,
      number: 37,
      type: 'awardee',
      title: 'PROVINCIAL BUDGET OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 38,
      number: 38,
      type: 'awardee',
      title: "PROVINCIAL TREASURER'S OFFICE",
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 39,
      number: 39,
      type: 'awardee',
      title: "PROVINCIAL ASSESSOR'S OFFICE",
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 40,
      number: 40,
      type: 'awardee',
      title: 'PROVINCIAL PLANNING AND DEVELOPMENT OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 41,
      number: 41,
      type: 'awardee',
      title: 'PROVINCIAL ENGINEERING OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 42,
      number: 42,
      type: 'awardee',
      title: 'PROVINCIAL ACCOUNTING OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 43,
      number: 43,
      type: 'awardee',
      title: 'PROVINCIAL SOCIAL WELFARE AND DEVELOPMENT OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 44,
      number: 44,
      type: 'awardee',
      title: 'PROVINCIAL ENVIRONMENT & NATURAL RESOURCES OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 45,
      number: 45,
      type: 'awardee',
      title: "PROVINCIAL VETERINARIAN'S OFFICE",
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 46,
      number: 46,
      type: 'awardee',
      title: 'OFFICE OF THE SECRETARY TO THE SANGGUNIAN',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 47,
      number: 47,
      type: 'awardee',
      title: 'PROVINCIAL SPORTS AND YOUTH DEVELOPMENT OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 48,
      number: 48,
      type: 'awardee',
      title: 'PROVINCIAL DISASTER RISK REDUCTION AND MANAGEMENT OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 49,
      number: 49,
      type: 'awardee',
      title: "PROVINCIAL AGRICULTURIST'S OFFICE",
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 50,
      number: 50,
      type: 'awardee',
      title: 'PROVINCIAL GENERAL SERVICES OFFICE',
      subtitle: 'Provincial Government of Davao del Norte',
      category: 'Provincial Government Office'
    },
    {
      id: 51,
      type: 'closing',
      title: 'CONGRATULATIONS TO ALL AWARDEES',
      subtitle: 'PROGRAM HEALTH SUMMIT 2026',
      citation: 'Thank you for your tireless dedication, exemplary service, and enduring partnership in advancing public health for the Province of Davao del Norte.'
    }
  ];
})();
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-slides-data.js`
Expected: PASS: Slide data catalog verified successfully with 52 slides.

- [ ] **Step 5: Commit**

```bash
git add js/slides-data.js tests/test-slides-data.js
git commit -m "feat: add 52-slide catalog data for group awardees"
```

---

### Task 2: Floral Theme Stylesheet (`css/floral-theme.css`)

**Files:**
- Create: `css/floral-theme.css`
- Test: `tests/test-css-structure.js`

**Interfaces:**
- Consumes: CSS custom properties (`--color-pink-soft`, `--color-sky-blue`, `--color-gold`, etc.)
- Produces: Visual styling classes: `.slide-container`, `.award-card`, `.floral-corner`, `.badge-seal`, `.drawer-modal`, `.control-bar`.

- [ ] **Step 1: Write test for CSS structure**

Create `tests/test-css-structure.js`:
```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-css-structure.js`
Expected: FAIL with "no such file or directory".

- [ ] **Step 3: Implement `css/floral-theme.css`**

Implement comprehensive styling with:
- Root variables: sky blue (`#4BA3E3`), petal pink (`#F06292`), gold (`#D4AF37`), dark navy (`#0F1E36`).
- Beautiful botanical gradients, cards with frosted glass effect, gold double-borders.
- Responsive scaling for stage projectors (1080p, 1440p, 4K) using `clamp()` and flexbox centering.
- Slide transitions (subtle zoom-in and fade).
- Grid drawer overlay styling with search input and thumbnail card states.
- Floating control bar with glassmorphic backdrop.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-css-structure.js`
Expected: PASS: Floral theme stylesheet structure verified.

- [ ] **Step 5: Commit**

```bash
git add css/floral-theme.css tests/test-css-structure.js
git commit -m "style: implement floral pink and sky blue presentation styling"
```

---

### Task 3: Presentation Engine & Interactive Navigation (`js/presentation.js`)

**Files:**
- Create: `js/presentation.js`
- Test: `tests/test-presentation-logic.js`

**Interfaces:**
- Consumes: `window.SLIDES_DATA`
- Produces: `window.PresentationEngine` with methods:
  - `goToSlide(index)`
  - `next()`
  - `prev()`
  - `toggleFullscreen()`
  - `toggleDrawer()`
  - `triggerConfetti()`
  - `toggleSound()`

- [ ] **Step 1: Write test for presentation navigation logic**

Create `tests/test-presentation-logic.js`:
```javascript
const fs = require('fs');
const vm = require('vm');

// Mock browser DOM and Web Audio
const sandbox = {
  window: {},
  document: {
    addEventListener: () => {},
    getElementById: (id) => ({
      classList: { add: () => {}, remove: () => {}, toggle: () => {} },
      innerHTML: '',
      focus: () => {}
    }),
    querySelectorAll: () => [],
    fullscreenElement: null,
    documentElement: { requestFullscreen: () => {} },
    exitFullscreen: () => {}
  },
  navigator: {},
  AudioContext: class { createOscillator() { return { connect() {}, start() {}, stop() {} }; } createGain() { return { connect() {}, gain: { setValueAtTime() {}, exponentialRampToValueAtTime() {} } }; } }
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-presentation-logic.js`
Expected: FAIL with "no such file or directory".

- [ ] **Step 3: Implement `js/presentation.js`**

Implement:
- State management: `currentIndex`, `isDrawerOpen`, `isSoundEnabled`, `isPetalsActive`.
- Keyboard event dispatcher: ignore shortcuts when focused in search input.
- Touch gesture recognizer (touchstart / touchend delta).
- Web Audio API golden fanfare synthesizer (peaceful melodic high chime on awardee slide change).
- Canvas particle simulator: soft pink petals drifting naturally down the screen.
- Confetti/petal burst generator on celebratory shortcut (`C`).
- Slide renderer: dynamically populates the current slide content with rich HTML, SVG crests, and category tags.
- Drawer modal renderer with live search filter that matches title, subtitle, or category.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-presentation-logic.js`
Expected: PASS: Presentation navigation engine logic verified.

- [ ] **Step 5: Commit**

```bash
git add js/presentation.js tests/test-presentation-logic.js
git commit -m "feat: implement presentation engine, navigation, audio, and drawer logic"
```

---

### Task 4: Main Slide Deck Document & SVG Artwork Integration (`index.html`)

**Files:**
- Create: `index.html`
- Test: `tests/test-html-integration.js`

**Interfaces:**
- Integrates: `css/floral-theme.css`, `js/slides-data.js`, `js/presentation.js`.

- [ ] **Step 1: Write integration test for `index.html`**

Create `tests/test-html-integration.js`:
```javascript
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-html-integration.js`
Expected: FAIL with "no such file or directory".

- [ ] **Step 3: Implement `index.html`**

Create `index.html` with:
- Full HTML5 doctype and metadata for high-resolution projection (16:9 responsive).
- Embedded vector SVG definitions for:
  - Corner cherry blossom floral sprays (top-left, bottom-right).
  - Delicate sky blue hydrangea petals and golden laurel branches.
  - Golden celebratory award crest.
- Slide Viewport container (`#slideViewport`).
- Petals animation canvas (`#petalsCanvas`).
- Control Bar (`#controlBar`) with:
  - Previous / Next buttons.
  - Slide counter display (`01 / 52`).
  - Progress bar.
  - Thumbnail Grid / Drawer toggle (`G`).
  - Fullscreen toggle (`F`).
  - Sound Chime toggle (`M`).
  - Confetti Burst button (`C`).
- Grid Drawer Modal (`#drawerModal`) with instant live search (`#drawerSearch`).

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-html-integration.js`
Expected: PASS: index.html integration structure verified.

- [ ] **Step 5: Commit**

```bash
git add index.html tests/test-html-integration.js
git commit -m "feat: assemble main presentation slide deck with embedded SVG floral art"
```

---

### Task 5: End-to-End Verification & Browser Smoke Test

**Files:**
- Test: `tests/verify-presentation.js`

- [ ] **Step 1: Write comprehensive verification script**

Create `tests/verify-presentation.js`:
- Validates that all files exist and are non-empty (`index.html`, `css/floral-theme.css`, `js/slides-data.js`, `js/presentation.js`).
- Validates that all 50 awardee names from the spec appear in `js/slides-data.js`.
- Verifies that zero external network CDN script/stylesheet dependencies are mandatory for offline execution.
- Checks image link integrity and ensures all SVGs are directly inline or self-contained.

- [ ] **Step 2: Run verification script**

Run: `node tests/verify-presentation.js`
Expected: PASS with full verification report.

- [ ] **Step 3: Open presentation and smoke test in browser**

Launch `index.html` via PowerShell command:
Run: `Start-Process index.html`
Verify:
1. Title slide appears in crisp floral pink & sky blue.
2. Pressing `Right Arrow` advances smoothly through all awardees.
3. Pressing `G` opens the drawer; typing "Hospital" filters all 4 hospital entries.
4. Pressing `F` toggles fullscreen cleanly.
5. Pressing `C` triggers celebratory floral confetti.

- [ ] **Step 4: Final commit**

```bash
git add tests/verify-presentation.js
git commit -m "test: add comprehensive end-to-end verification suite"
```
