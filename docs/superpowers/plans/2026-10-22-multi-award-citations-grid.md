# Multi-Award Citations Grid & Stage Headroom Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform long multi-award citation texts into an elegant 2-column stage honors grid so that 100% of the verbatim PowerPoint text is displayed clearly without vertical overflow, preserving full stage clearance for presenters.

**Architecture:** Extend `shared/js/presentation.js` to detect multi-citation items (via ` | ` or citation arrays) and render them as a structured two-column grid of styled `.citation-pill` elements with gold bullet stars (`✦`). Update `shared/css/floral-theme.css` with responsive 2-column grid rules, glassmorphism badge styling, highlight distinctions, and a compact `.award-card--multi-awards` mode. Standardize section divider slides in `04-consolation-and-winners/slides-data.js`.

**Tech Stack:** Vanilla JavaScript (ES5/ES6 compatible), CSS3 Grid & Flexbox, HTML5, Node.js test harness.

**Spec:** Original slides from `(4) CONSOLATION AND WINNERS.pptx`.

## Global Constraints

- **Exact Verbatim Text:** 100% of all award citations, indicator names, percentages, and blood donation counts from PowerPoint must be preserved.
- **Stage Headroom:** Slide content must remain within the upper 65% of the 1080p viewport, keeping the lower 35% completely clear for on-stage presenters and photographers.
- **No Overlap:** Zero overflow or text collisions on any screen resolution from 1280x720 up to 4K LED walls.
- **No External Dependencies:** Vanilla HTML/CSS/JS only; no npm build tools needed.

## Review Focus

- Slide 23 (City of Tagum - 12 awards) and Slide 28 (Municipality of New Corella - 12 awards) must render all 12 items without touching the lower stage area.
- Slide 19 (Samal - 8 awards) and Slide 21 (Panabo - 10 awards) must display cleanly in two balanced columns.
- Slide 1 and Slide 14 in `04-consolation-and-winners` must render as clean category divider slides, not broken awardee cards.
- Slides with 1 single subtitle must continue rendering in classic elegant serif subtitle format without badge wrappers.
- The Drawer search modal must continue searching across all badges and citations properly.

---

### Task 1: CSS Grid & Pill Styles in `shared/css/floral-theme.css`

**Files:**
- Modify: `shared/css/floral-theme.css`

- [ ] Add `.award-card--multi-awards` container modifier:
  - Reduce `.official-logo-img` height to `clamp(70px, 9.5vh, 100px)`.
  - Tighten card gap and margins to afford space for up to 12 award pills.
- [ ] Add `.citations-grid` styles:
  - `display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 16px;`
  - Max width: `1260px; width: 96%; margin: 0 auto;`
  - Text alignment: left.
- [ ] Add `.citation-pill` styles:
  - Glassmorphic card: `background: rgba(255, 255, 255, 0.78); backdrop-filter: blur(8px);`
  - Border: `1px solid rgba(216, 27, 96, 0.22);`
  - Border radius: `10px; padding: 6px 14px;`
  - Typography: `font-size: clamp(0.76rem, 0.95vw, 0.96rem); font-weight: 600; line-height: 1.28;`
  - Color: `var(--navy-text);`
  - Icon: `.pill-star` with gold accent `color: var(--gold-foil); font-size: 0.85rem; margin-right: 8px;`
- [ ] Add `.citation-pill--highlight` styles for special awards (e.g. Harmonized Health Awardee, Highest Donation Rate):
  - Gold/amber gradient border and soft gold glow `box-shadow: 0 4px 14px rgba(245, 158, 11, 0.18);`
- [ ] Add `.section-card` styling for category transition slides (Slide 1 and 14):
  - Centered majestic title and prominent category pill badges.

---

### Task 2: Presentation Engine Parsing in `shared/js/presentation.js`

**Files:**
- Modify: `shared/js/presentation.js`

- [ ] In `renderCurrentSlide()`:
  - Check if current slide is a `section` slide (`s.type === 'section'` or `s.isSectionHeader`).
  - Render section slide with ceremonial header and prominent category tags.
- [ ] Detect multi-citation slides:
  - If `s.citations` is an array OR `typeof s.subtitle === 'string' && s.subtitle.indexOf(' | ') !== -1`:
    - Parse citations into an array of trimmed strings.
    - If citations count >= 4:
      - Add `.award-card--multi-awards` to the `.award-card`.
      - Render `.citations-grid` with two columns.
      - Apply `.citation-pill--highlight` to items mentioning "Harmonized Health", "Highest Donation Rate", or "Special Award".
    - If citations count is 2 or 3:
      - Render as a centered or 2-column flex/grid badge list.
    - If citations count is 1:
      - Render as standard `.awardee-subtitle`.

---

### Task 3: Clean up Data in `04-consolation-and-winners/slides-data.js`

**Files:**
- Modify: `04-consolation-and-winners/slides-data.js`

- [ ] Update Slide 1:
  - `type: 'section'`
  - `title: 'AWARDING OF CONSOLATION BARANGAYS AND MUNICIPALITIES'`
  - `categories: ['BARANGAY CATEGORY', 'MUNICIPALITY CATEGORY']`
- [ ] Update Slide 14:
  - `type: 'section'`
  - `title: 'AWARDING OF TOP PERFORMING BARANGAYS, CITIES AND MUNICIPALITIES'`
  - `categories: ['TOP 3 PERFORMING BARANGAYS', 'TOP 3 PERFORMING CITIES', 'TOP 3 PERFORMING MUNICIPALITIES']`
- [ ] Verify that all 32 slides preserve 100% of the exact text from `(4) CONSOLATION AND WINNERS.pptx`.

---

### Task 4: Clean up Edge Cases in `02` and `03` Decks

**Files:**
- Modify: `02-individual-awardees/slides-data.js`
- Modify: `03-top-program-managers/slides-data.js`

- [ ] In `02-individual-awardees/slides-data.js`:
  - Slide 25 (FDA): Separate `subtitle` ("DAVAO TESTING AND QUALITY ASSURANCE LABORATORY") and `citation` ("For the unwavering support to the Provincial Epidemiology and Health Statistics Unit of Davao del Norte").
- [ ] In `03-top-program-managers/slides-data.js`:
  - Clean up slides 7, 9, 11, 32, 38 where ` | ` mixed the person's name and office with the program title, ensuring person's name is the title and office/program are cleanly structured.

---

### Task 5: Automated Testing & Visual Verification

**Files:**
- Modify: `tests/verify-presentation.js`

- [ ] Add test cases in `tests/verify-presentation.js`:
  - Verify all 32 slides in `04-consolation-and-winners` render valid HTML without `undefined`.
  - Verify that slides with multi-citations produce `.citations-grid` with the correct count of `.citation-pill` elements.
  - Verify Tagum (Slide 23) has exactly 12 citation pills matching PPTX.
  - Verify New Corella (Slide 28) has exactly 12 citation pills matching PPTX.
  - Verify Panabo (Slide 21) has exactly 10 citation pills.
  - Verify Samal (Slide 19) has exactly 8 citation pills.
- [ ] Run `node tests/verify-presentation.js` and ensure 100% tests pass.
- [ ] Perform visual check of Slide 23 and Slide 28.
