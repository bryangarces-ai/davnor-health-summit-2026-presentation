# Design Specification: Presenter Console View & Dual-Window Projection

**Date:** 2026-11-09  
**Status:** Approved  
**Scope:** Reusable Presenter Console and Dual-Screen Projector Sync for DAVNOR Health Summit 2026 Presentation Decks

---

## 1. Overview & Objectives

In live awards ceremonies and health summits, operators need to control what is displayed on the main projector without showing control menus or navigation artifacts to the audience. Following the reference in `Advance.presentation.png` (PowerPoint Presenter View), this feature equips each ceremony deck with a **Presenter Console View** that enables:

1. **Dual-Screen Operation:** A dedicated operator screen showing the current live slide, next slide preview, elapsed presentation timer, and instant search.
2. **Audience Projector View:** A clean, distraction-free fullscreen view of the slide on the projector screen.
3. **Instant Search & Jump to Project:** Real-time search across awardee names, municipalities, award categories, and slide numbers to jump to any slide on the fly as awardees are called or schedule changes occur.
4. **Real-Time Window Synchronization:** Two-way message exchange via `BroadcastChannel` with fallback to `localStorage` event sync.

---

## 2. User Experience & Layout Specification

The Presenter Console (`presenter.html`) reproduces the PowerPoint Presenter View layout:

### 2.1 Top Control Bar
- **Display / Window Actions:**
  - `Projector Screen ↗`: Launches or focuses the audience window (`index.html?mode=projector`).
  - `End Slide Show`: Exits to the deck's main index or ceremony hub.
- **Presentation Clocks:**
  - **Elapsed Timer:** Formatted as `MM:SS` (or `H:MM:SS`), with Play/Pause and Reset buttons.
  - **Wall-Clock Time:** Live local time formatted as `HH:MM:SS AM/PM`.

### 2.2 Left Stage: Current Live Slide
- Responsive 16:9 viewport showing the slide currently rendered on the audience projector.
- Includes a subtle indicator badge: `● LIVE ON PROJECTOR`.
- Synchronizes with any animation or slide rendering logic from the shared presentation engine.

### 2.3 Right Panel: Next Slide Preview & Instant Search
- **Instant Search Input (`#presenterSearch`):**
  - Text input with search icon (`🔍 Search awardee, municipality, indicator, category...`).
  - Typing performs client-side fuzzy / substring search across the deck's slide dataset (`slides-data.js` and custom localStorage/Cloud slides).
- **Search Results Drawer / List:**
  - Displays matching results with slide index, awardee title, and municipality badge.
  - Clicking any search item immediately projects that slide on both the operator console and the audience projector window, and clears or collapses the search dropdown.
- **Next Slide Preview:**
  - Shows a scaled preview of the upcoming slide `[Index + 1]` with its title and slide number so the operator anticipates the next flow item.

### 2.4 Bottom Navigation Bar
- Slide navigation controls: `◀ Previous` and `▶ Next`.
- Slide progress counter: `Slide X of Y`.
- Quick-action buttons:
  - Celebratory Confetti Trigger (`🎉 Confetti`).
  - Sound Chime Trigger (`🔔 Chime`).
  - All Awardees Grid drawer trigger (`⊞ Grid`).
  - Fullscreen toggle for operator window (`⛶`).

---

## 3. Architecture & File Structure

### 3.1 Shared Components
- **`shared/css/presenter-console.css`**: Styling for the dark-themed Presenter View (inspired by PowerPoint Presenter View and DAVNOR dark theme).
- **`shared/js/presenter-console.js`**: Core controller class `PresenterConsoleApp` handling:
  - Slide data loading (local + Cloud overrides).
  - Current slide rendering and next slide preview.
  - Elapsed timer and clock management.
  - Search indexing and instant jump filtering.
  - `BroadcastChannel` sync and message dispatching.
- **`shared/js/presentation.js` Updates**:
  - Add listener for `davnor_projector_sync` messages (`GOTO_SLIDE`, `NEXT_SLIDE`, `PREV_SLIDE`, `TRIGGER_CONFETTI`, `TRIGGER_SOUND`).
  - Support `?mode=projector` URL query parameter: hide all floating navigation bars and progress widgets to give the audience a pure presentation view.
  - Add a **"🎙️ Presenter View"** button into the existing `control-bar` of `index.html`.

### 3.2 Deck Implementations
Starting with `01-group-awardees/`, each deck will feature:
- `presenter.html`: Lightweight HTML entry point loading:
  - `slides-data.js` (deck slides)
  - `../shared/js/logos-config.js`
  - `../shared/js/cloud-sync.js`
  - `../shared/css/floral-theme.css`
  - `../shared/css/presenter-console.css`
  - `../shared/js/presenter-console.js`
- `index.html`: Enhanced with the "Presenter View" launch button and projector mode detection.

---

## 4. Communication Protocol

### 4.1 Channel
- Channel Name: `davnor_projector_sync`
- Fallback: `localStorage.getItem('davnor_projector_sync_msg')`

### 4.2 Message Format
```json
{
  "channel": "davnor_projector_sync",
  "action": "GOTO_SLIDE",
  "deckKey": "01-group",
  "slideIndex": 14,
  "timestamp": 1731140000000
}
```

### 4.3 Supported Actions
| Action | Description |
|---|---|
| `GOTO_SLIDE` | Jump directly to `slideIndex` |
| `NEXT_SLIDE` | Advance to next slide |
| `PREV_SLIDE` | Go back to previous slide |
| `TRIGGER_CONFETTI` | Trigger confetti burst on audience screen |
| `TRIGGER_SOUND` | Play award chime on audience screen |
| `SYNC_REQUEST` | Projector asks Presenter Console for current slide index upon launch/reload |
| `SYNC_RESPONSE` | Presenter Console responds with current index |

---

## 5. Keyboard Shortcuts
- `ArrowRight` / `Space` / `PageDown`: Next slide
- `ArrowLeft` / `PageUp`: Previous slide
- `Home`: First slide
- `End`: Last slide
- `/` or `Ctrl + F`: Focus search bar
- `Escape`: Clear search / Blur search / Close modals
- `C`: Trigger confetti burst
- `M`: Toggle chime sound

---

## 6. Offline & Resilience Requirements
1. Zero internet dependency: All styles, SVGs, and scripts are bundled locally.
2. Reconnect tolerance: Projector window can be closed, reopened, or reloaded anytime without interrupting the presentation.
3. Rapid search performance: Instant response even with 100+ slides.
