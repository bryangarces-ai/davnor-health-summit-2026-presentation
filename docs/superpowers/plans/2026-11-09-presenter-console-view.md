# Presenter Console View & Dual-Window Projection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a PowerPoint Presenter View-style console (`presenter.html`) with dual-window synchronization, elapsed timer, next slide preview, and instant search-to-jump matching `Advance.presentation.png`.

**Architecture:** Separate the presenter controls from the audience view: `index.html` acts as the clean Audience Projector Window (`?mode=projector`), while `presenter.html` serves as the operator console with live search, next slide preview, and timer. Both communicate in real time over `BroadcastChannel('davnor_projector_sync')` with `localStorage` fallback.

**Tech Stack:** Vanilla JavaScript (ES6+), HTML5 Canvas, Web Audio API, BroadcastChannel API, CSS Grid/Flexbox.

**Spec:** `docs/superpowers/specs/2026-11-09-presenter-console-view-design.md`

## Global Constraints
- Zero external internet or npm runtime dependencies; must work 100% offline.
- Sub-16ms latency for slide transitions across both windows.
- Browser compatibility with modern Chrome, Edge, Firefox, and WebKit.
- Strict preservation of existing floral theme styling, sound chime, petals canvas, and cloud sync hooks.

## Review Focus
1. Rapid consecutive search keystrokes must not cause stuttering or desynchronize slide previews.
2. Reopening or refreshing the audience projector window mid-presentation must re-sync without losing position.
3. Keyboard shortcuts (arrows, space) pressed while the search input is focused should not trigger accidental slide jumps.
4. Projecting slides with multi-citations or long municipality names must wrap cleanly without clipping.
5. Decks loaded without internet access must initialize immediately with zero network timeout delays.

---

### Task 1: Projector Mode & Broadcast Sync in `shared/js/presentation.js`

**Files:**
- Modify: `shared/js/presentation.js`
- Test: `tests/test-projector-sync.js`

**Interfaces:**
- Consumes: `window.SLIDES_DATA`, `getDeckKey()`, `goTo(index)`
- Produces: `window.PresentationEngine.isProjectorMode`, `davnor_projector_sync` BroadcastChannel message dispatch and listener.

- [ ] **Step 1: Write the failing test**

```javascript
// tests/test-projector-sync.js
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

let broadcastMessages = [];
class MockBroadcastChannel {
  constructor(name) { this.name = name; this.onmessage = null; }
  postMessage(msg) { broadcastMessages.push(msg); }
}

const mockDoc = {
  addEventListener: () => {},
  getElementById: (id) => ({
    id, classList: { add: () => {}, remove: () => {}, contains: () => false },
    style: {}, innerHTML: '', addEventListener: () => {}
  }),
  querySelectorAll: () => [],
  documentElement: { requestFullscreen: () => {} }
};

const sandbox = {
  window: {
    location: { search: '?mode=projector', pathname: '/01-group-awardees/index.html' },
    BroadcastChannel: MockBroadcastChannel,
    localStorage: { getItem: () => null, setItem: () => {} },
    addEventListener: () => {},
    document: mockDoc
  },
  document: mockDoc,
  BroadcastChannel: MockBroadcastChannel
};

const presentationCode = fs.readFileSync('shared/js/presentation.js', 'utf8');
vm.createContext(sandbox);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "Test" }, { id: 2, title: "Next" }];', sandbox);
vm.runInContext(presentationCode, sandbox);

assert(sandbox.window.PresentationEngine.isProjectorMode === true, 'Projector mode should be detected from ?mode=projector');
console.log('PASS: test-projector-sync');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-projector-sync.js`  
Expected: FAIL with `isProjectorMode` not defined.

- [ ] **Step 3: Implement Projector Mode & BroadcastChannel Handler in `shared/js/presentation.js`**

1. Check `window.location.search.indexOf('mode=projector') !== -1`. When true, set `isProjectorMode = true` and add CSS class `mode-projector` to document element (hiding `#controlBar` and progress bar).
2. Instantiate `BroadcastChannel('davnor_projector_sync')`.
3. Handle incoming messages:
   - `GOTO_SLIDE`: calls `goTo(msg.slideIndex)`
   - `NEXT_SLIDE`: calls `next()`
   - `PREV_SLIDE`: calls `prev()`
   - `TRIGGER_CONFETTI`: calls `triggerConfetti()`
   - `TRIGGER_SOUND`: calls `playChime()`
   - `SYNC_REQUEST`: replies with `SYNC_RESPONSE` containing `currentIndex`.
4. On `goTo(index)` advance, broadcast `GOTO_SLIDE` so the operator console stays in sync if navigation happens from the projector screen.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-projector-sync.js`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add shared/js/presentation.js tests/test-projector-sync.js
git commit -m "feat(sync): add projector mode and broadcast sync to presentation engine"
```

---

### Task 2: Presenter Console Styles in `shared/css/presenter-console.css`

**Files:**
- Create: `shared/css/presenter-console.css`
- Test: `tests/test-presenter-css.js`

**Interfaces:**
- Consumes: Floral theme variables (`--gold-foil`, `--navy-900`, fonts)
- Produces: Layout classes `.presenter-shell`, `.presenter-topbar`, `.live-stage`, `.next-preview`, `.search-console`, `.search-results-list`.

- [ ] **Step 1: Write the failing test**

```javascript
// tests/test-presenter-css.js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-presenter-css.js`  
Expected: FAIL (file does not exist).

- [ ] **Step 3: Implement Presenter Console Styles**

Write `shared/css/presenter-console.css` implementing:
- Dark PowerPoint Presenter aesthetic (`#111317` background, gold borders `#D4AF37`, crisp contrast).
- Two-column CSS grid (60% live slide, 40% next slide + search).
- `#presenterSearch` input styling with gold focus ring, clear button, and scrollable results popover.
- Timer display with fixed-width tabular numbers (`font-variant-numeric: tabular-nums`).
- Floating responsive badges for `● LIVE ON PROJECTOR` and slide counters.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-presenter-css.js`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add shared/css/presenter-console.css tests/test-presenter-css.js
git commit -m "style: add presenter console layout and component styles"
```

---

### Task 3: Presenter Console Engine in `shared/js/presenter-console.js`

**Files:**
- Create: `shared/js/presenter-console.js`
- Test: `tests/test-presenter-console.js`

**Interfaces:**
- Consumes: `window.SLIDES_DATA`, `getDeckKey()`, `BroadcastChannel('davnor_projector_sync')`
- Produces: `window.PresenterConsoleApp` (`init()`, `openProjectorWindow()`, `jumpToSlide(index)`, `searchSlides(query)`, `toggleTimer()`, `resetTimer()`)

- [ ] **Step 1: Write the failing test**

```javascript
// tests/test-presenter-console.js
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

class MockBroadcastChannel {
  constructor(name) { this.name = name; this.messages = []; }
  postMessage(msg) { this.messages.push(msg); }
}

const sandbox = {
  window: {
    location: { pathname: '/01-group-awardees/presenter.html' },
    BroadcastChannel: MockBroadcastChannel,
    localStorage: { getItem: () => null, setItem: () => {} },
    setInterval: () => 1,
    clearInterval: () => {},
    document: {
      getElementById: () => ({ innerHTML: '', addEventListener: () => {}, style: {} }),
      querySelectorAll: () => []
    }
  },
  BroadcastChannel: MockBroadcastChannel
};

const code = fs.readFileSync('shared/js/presenter-console.js', 'utf8');
vm.createContext(sandbox);
vm.runInContext('window.SLIDES_DATA = [{ id: 1, title: "Tagum City Award" }, { id: 2, title: "Panabo Award" }];', sandbox);
vm.runInContext(code, sandbox);

const app = sandbox.window.PresenterConsoleApp;
assert(app, 'PresenterConsoleApp must be exported');
const searchResults = app.searchSlides('Tagum');
assert.strictEqual(searchResults.length, 1);
assert.strictEqual(searchResults[0].slide.title, 'Tagum City Award');

console.log('PASS: test-presenter-console');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-presenter-console.js`  
Expected: FAIL (file does not exist).

- [ ] **Step 3: Implement `shared/js/presenter-console.js`**

Implement `PresenterConsoleApp`:
1. `init()`: Load slides data, setup DOM hooks, start clocks, bind keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Space`, `/`).
2. Clocks:
   - Presentation Timer: `secondsElapsed`, `isTimerRunning`, `toggleTimer()`, `resetTimer()`, formatted as `MM:SS`.
   - Wall Clock: Updates `#wallClock` every second with local time.
3. Slide Previews:
   - Render `#currentSlidePreview` with active slide HTML and `#nextSlidePreview` with upcoming slide `[currentIndex + 1]`.
4. Search Functionality:
   - Filter `slides` by `title`, `awardee`, `municipality`, `category`, and index.
   - Render dropdown cards; clicking a result calls `jumpToSlide(result.index)`.
5. Window Sync:
   - `openProjectorWindow()`: executes `window.open('index.html?mode=projector', 'davnor_projector_screen')`.
   - Sends `GOTO_SLIDE`, `NEXT_SLIDE`, `PREV_SLIDE` over `BroadcastChannel`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-presenter-console.js`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add shared/js/presenter-console.js tests/test-presenter-console.js
git commit -m "feat(presenter): implement presenter console controller and search engine"
```

---

### Task 4: Deck Integration (`presenter.html` & Presenter Button)

**Files:**
- Create:
  - `00-program-health-summit-2026/presenter.html`
  - `01-group-awardees/presenter.html`
  - `02-individual-awardees/presenter.html`
  - `03-top-program-managers/presenter.html`
  - `04-consolation-and-winners/presenter.html`
  - `05-official-results/presenter.html`
- Modify:
  - `00-program-health-summit-2026/index.html`
  - `01-group-awardees/index.html`
  - `02-individual-awardees/index.html`
  - `03-top-program-managers/index.html`
  - `04-consolation-and-winners/index.html`
  - `05-official-results/index.html`
- Test: `tests/test-presenter-integration.js`

- [ ] **Step 1: Write the failing test**

```javascript
// tests/test-presenter-integration.js
const fs = require('fs');
const assert = require('assert');

const decks = [
  '00-program-health-summit-2026',
  '01-group-awardees',
  '02-individual-awardees',
  '03-top-program-managers',
  '04-consolation-and-winners',
  '05-official-results'
];

decks.forEach(deck => {
  const presenterPath = `${deck}/presenter.html`;
  assert(fs.existsSync(presenterPath), `Missing ${presenterPath}`);
  const indexPath = `${deck}/index.html`;
  const indexHtml = fs.readFileSync(indexPath, 'utf8');
  assert(indexHtml.includes('presenter.html'), `${indexPath} must include a link/button to presenter.html`);
});

console.log('PASS: test-presenter-integration');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/test-presenter-integration.js`  
Expected: FAIL (files missing).

- [ ] **Step 3: Create `presenter.html` for each deck and add "Presenter View" button in `index.html`**

1. Create standardized `presenter.html` in each deck folder referencing the deck's `slides-data.js` and `shared/js/presenter-console.js`.
2. In each deck's `index.html`, add a button in `#controlBar`:
```html
<a href="presenter.html" target="_blank" class="control-btn" title="Open Presenter View (P)" aria-label="Presenter View">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
    <rect x="2" y="3" width="20" height="14" rx="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <circle cx="7" cy="8" r="1"></circle>
    <line x1="11" y1="8" x2="17" y2="8"></line>
  </svg>
</a>
```

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/test-presenter-integration.js`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add */presenter.html */index.html tests/test-presenter-integration.js
git commit -m "feat(decks): integrate presenter.html and console trigger buttons across ceremony decks"
```

---

### Task 5: End-to-End Test Suite & Verification

**Files:**
- Test: `tests/verify-presentation.js`

- [ ] **Step 1: Run full test suite**

Run: `node tests/verify-presentation.js`  
Expected: All slide render, audio, animation, and cloud sync checks PASS.

- [ ] **Step 2: Run all presenter tests**

Run:
```bash
node tests/test-projector-sync.js
node tests/test-presenter-css.js
node tests/test-presenter-console.js
node tests/test-presenter-integration.js
```
Expected: All PASS.

- [ ] **Step 3: Final Git status check and commit**

```bash
git status
git commit -m "chore: complete presenter console view verification"
```
