# 2026 Provincial Nutrition Congress Presentation Suite Implementation Plan

> **Goal**: Build a complete, stage-ready presentation suite for the **2026 Provincial Nutrition Congress and Awarding Ceremony** matching the visual identity of the stage LED backdrop from `nucserver`, with automated slide generation from `NUTRITION CONGRESS AWARDS.xlsx` and seamless portal integration.

---

## Proposed Changes

### 1. Stage Assets & Styling (`shared/`)
- **`shared/nutrition-assets/nutrition-stage-bg.svg`**:
  - Vector SVG background adapted directly from `backdrop_chocolate.html` (`nucserver`).
  - Includes: `#080302` to `#3A1C12` radial glow, Mandaya Dagmay weave pattern, subtle stardust particles, sunbeams, top and bottom golden sawtooth borders, official logos (DOH, Davao del Norte, DavNor PHO), and an open center stage.
- **`shared/css/nutrition-theme.css`**:
  - Nutrition Congress color variables, typography, metallic text gradients, gold borders, glassmorphism stage cards, contender badge lists, and speaker note styles.

### 2. Deck Generator & Presentation Decks (`nutrition-congress-2026/`)
- **`nutrition-congress-2026/generate_decks.py`**:
  - Parses all 9 sheets of `NUTRITION CONGRESS AWARDS.xlsx` and the program schedule:
    1. `00-program-flow`: Opening ceremony, prayers, anthem, welcome address, keynote, and program agenda.
    2. `01-pangga-ko-si-sam`: SAM initiative introduction + 6 Partner Plaques of Appreciation.
    3. `02-outstanding-lgu`: 10 Contenders + Winner reveal plaque (Municipality of Asuncion).
    4. `03-outstanding-lnfp`: CNAO/MNAO, CNPC/MNPC, BNS (Contenders + Winners).
    5. `04-special-awards`: Tinguha Awardees for CY 2025 and CY 2026.
    6. `05-regional-and-pnc`: Regional partner plaques + 15 Provincial Department certificates.
    7. `06-pnet-recognition`: 17 Provincial Nutrition Evaluation Team certificates.
    8. `07-bns-loyalty-awards`: 83 BNS awardees grouped by LGU with service tenure badges (10 to 35+ years).
  - Emits for each deck: `slides-data.js`, `index.html` (Stage view), and `presenter.html` (Presenter Console).

### 3. Nutrition Congress Hub (`nutrition-congress-2026/index.html`)
- Dedicated event landing page with the chocolate/gold theme, listing all 8 presentation decks, quick links to Stage & Presenter modes, and event metadata.

### 4. Ceremony Portal Integration (`index.html`)
- Add the 2026 Provincial Nutrition Congress card into the root portal alongside Health Summit and TB Summit.

---

## Tasks

### Task 1: Create Stage Background SVG and Theme CSS
- Extract SVG defs, Dagmay weave, header logos, and top/bottom borders from `backdrop_chocolate.html` into `shared/nutrition-assets/nutrition-stage-bg.svg`.
- Create `shared/css/nutrition-theme.css` with dark chocolate/espresso color palette, gold gradients, card glassmorphism, responsive font scaling, and slide layout classes.
- Verify SVG renders cleanly in browser.

### Task 2: Build `generate_decks.py` and Generate All 8 Slide Decks
- Implement Python parser for `NUTRITION CONGRESS AWARDS.xlsx` and create complete slide data for the 8 decks.
- Define HTML templates for Stage View (`index.html`), Presenter Console (`presenter.html`), and `slides-data.js`.
- Execute `python generate_decks.py` to produce all 8 folders.
- Verify slide counts and content against Excel data.

### Task 3: Build Nutrition Congress Hub Portal (`nutrition-congress-2026/index.html`)
- Create the event hub page with banner, metadata, segment cards, slide counters, and direct links to stage presentations and presenter consoles.
- Test responsive layout and styling.

### Task 4: Integrate into Main DAVNOR Ceremony Portal (`index.html`)
- Update `index.html` to include a 3-column or responsive event grid featuring:
  1. Program Health Summit 2026
  2. DAVNOR TB Summit 2026
  3. 2026 Provincial Nutrition Congress and Awarding Ceremony
- Style the card with the warm chocolate and gold theme.

### Task 5: End-to-End Verification & Interactive Testing
- Verify keyboard navigation (`←`/`→`, `Space`).
- Verify Presenter Console synchronization and note display.
- Verify Sound (`M`), Confetti (`C`), and Slide Drawer (`G`).
- Verify all links from root `index.html` to `nutrition-congress-2026/index.html` and individual decks.

---

## Verification Plan
1. Run automated Python script to verify all 8 deck folders have `slides-data.js`, `index.html`, and `presenter.html`.
2. Inspect slide counts per deck to ensure 100% of the awardees and partners from the Excel workbook are present.
3. Validate HTML and CSS files for syntax and link paths.
4. Launch local static server to test slide transitions and presenter synchronization.
