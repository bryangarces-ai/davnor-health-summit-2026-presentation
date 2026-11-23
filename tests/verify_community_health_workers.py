import os
import json
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHW_DIR = os.path.join(BASE_DIR, 'community-health-workers-2026')

def test_chw_suite():
    print("=== STARTING COMMUNITY HEALTH WORKERS 2026 VERIFICATION ===")
    errors = []

    # 1. Verify Interactive Background JS & Theme CSS
    interactive_bg_js = os.path.join(BASE_DIR, 'shared', 'js', 'chw-interactive-bg.js')
    if not os.path.exists(interactive_bg_js) or os.path.getsize(interactive_bg_js) < 100:
        errors.append(f"Missing or empty chw-interactive-bg.js: {interactive_bg_js}")
    else:
        print(f"PASS: shared/js/chw-interactive-bg.js exists ({os.path.getsize(interactive_bg_js)} bytes)")

    theme_css = os.path.join(BASE_DIR, 'shared', 'css', 'chw-theme.css')
    if not os.path.exists(theme_css) or os.path.getsize(theme_css) < 100:
        errors.append(f"Missing or empty chw-theme.css: {theme_css}")
    else:
        with open(theme_css, 'r', encoding='utf-8') as f:
            css_content = f.read()
        if "url(" in css_content:
            errors.append("chw-theme.css should not use static raster image backgrounds (found url())")
        else:
            print(f"PASS: chw-theme.css uses pure digital gradients & no raster background images ({os.path.getsize(theme_css)} bytes)")

    # 2. Verify Decks
    expected_decks = [
        ("00-program-flow", 11),
        ("01-top-performing-purok-nov24", 5),
        ("02-top-performing-barangay-nov24", 7),
        ("03-top-performing-lgu-nov24", 4),
        ("04-zumba-performer", 16),
        ("05-top-performing-purok-nov25", 9),
        ("06-top-performing-barangay-nov25", 17),
        ("07-top-performing-lgu-nov25", 6),
        ("08-closing-ceremony", 4)
    ]

    total_slides = 0
    referenced_images = set()

    for folder, expected_count in expected_decks:
        deck_path = os.path.join(CHW_DIR, folder)
        if not os.path.isdir(deck_path):
            errors.append(f"Missing deck directory: {folder}")
            continue

        for fname in ['index.html', 'presenter.html', 'slides-data.js']:
            fpath = os.path.join(deck_path, fname)
            if not os.path.exists(fpath) or os.path.getsize(fpath) == 0:
                errors.append(f"Missing or empty file: {folder}/{fname}")

        # Check index.html loads interactive canvas & script
        deck_html_path = os.path.join(deck_path, 'index.html')
        with open(deck_html_path, 'r', encoding='utf-8') as f:
            deck_html = f.read()
        if "chwBackgroundCanvas" not in deck_html:
            errors.append(f"{folder}/index.html missing interactive canvas")
        if "chw-interactive-bg.js" not in deck_html:
            errors.append(f"{folder}/index.html missing chw-interactive-bg.js script")

        # Parse slides-data.js
        slides_js_path = os.path.join(deck_path, 'slides-data.js')
        try:
            with open(slides_js_path, 'r', encoding='utf-8') as f:
                content = f.read()
            match = re.search(r'var data = (\[.*?\]);', content, re.DOTALL)
            if not match:
                errors.append(f"Could not extract JSON data from {folder}/slides-data.js")
            else:
                slides = json.loads(match.group(1))
                count = len(slides)
                total_slides += count
                if count != expected_count:
                    errors.append(f"Slide count mismatch for {folder}: expected {expected_count}, got {count}")
                else:
                    print(f"PASS: {folder} has {count} slides with interactive canvas.")

                # Verify removed slides do not exist in 00-program-flow
                if folder == "00-program-flow":
                    removed_titles = [
                        "OPENING PRELIMINARIES",
                        "AWARDING OF TOP PERFORMING DHIMS",
                        "RUBY ROSAL, RMT",
                        "AWARDING OF WINNERS: ZUMBA CONTEST",
                        "DAGHANG SALAMAT UG MABUHAY ANG ATING MGA COMMUNITY HEALTH WORKERS!",
                        "DR. JOSEPHINE THERESE P. PARREÑAS",
                        "DORIS S. SOBREMISANA, RN, MAN",
                        "ARRIVAL OF PARTICIPANTS",
                        "RECOGNITION OF STAKEHOLDERS",
                        "LUNCH BREAK & FELLOWSHIP",
                        "RESUMPTION OF PROGRAM PROPER"
                    ]
                    for s in slides:
                        if s.get("title") in removed_titles:
                            errors.append(f"Found unwanted slide '{s.get('title')}' in 00-program-flow")
                    print("PASS: Verified removed slides are absent from 00-program-flow.")

                if folder == "04-zumba-performer":
                    titles = [s.get("title") for s in slides]
                    if "RUBY ROSAL, RMT" not in titles:
                        errors.append("Deck 04 missing 'RUBY ROSAL, RMT' slide")
                    else:
                        print("PASS: Verified 'RUBY ROSAL, RMT' is present in 04-zumba-performer.")
                    if "AWARDING OF WINNERS: ZUMBA CONTEST" not in titles:
                        errors.append("Deck 04 missing 'AWARDING OF WINNERS: ZUMBA CONTEST' slide")
                    else:
                        print("PASS: Verified 'AWARDING OF WINNERS: ZUMBA CONTEST' is present in 04-zumba-performer.")
                    if "AWARDING OF TOP PERFORMING DHIMS" not in titles:
                        errors.append("Deck 04 missing 'AWARDING OF TOP PERFORMING DHIMS' slide")
                    else:
                        print("PASS: Verified 'AWARDING OF TOP PERFORMING DHIMS' is present in 04-zumba-performer.")

                # Collect and check image references (speakers & logos only)
                for s in slides:
                    img = s.get('image')
                    if img:
                        referenced_images.add((folder, img))
        except Exception as e:
            errors.append(f"Error validating {folder}/slides-data.js: {e}")

    print(f"Total slides validated across all decks: {total_slides}")

    # Check referenced speaker and logo images
    for folder, img_rel in referenced_images:
        resolved = os.path.normpath(os.path.join(CHW_DIR, folder, img_rel))
        if not os.path.exists(resolved):
            errors.append(f"Broken image reference in {folder}: {img_rel} (resolved to {resolved})")

    # 3. Verify CHW Hub Index
    hub_html = os.path.join(CHW_DIR, 'index.html')
    if not os.path.exists(hub_html):
        errors.append("Missing community-health-workers-2026/index.html")
    else:
        with open(hub_html, 'r', encoding='utf-8') as f:
            hub_content = f.read()
        if "url(" in hub_content:
            errors.append("CHW Hub index.html should not use static raster background images (found url())")
        if "chwBackgroundCanvas" not in hub_content:
            errors.append("CHW Hub index.html missing interactive canvas element")
        if "chw-interactive-bg.js" not in hub_content:
            errors.append("CHW Hub index.html missing chw-interactive-bg.js script")
        for folder, _ in expected_decks:
            if f"{folder}/index.html" not in hub_content:
                errors.append(f"Hub index.html does not link to {folder}/index.html")
            if f"{folder}/presenter.html" not in hub_content:
                errors.append(f"Hub index.html does not link to {folder}/presenter.html")
            deck_num = folder.split('-')[0]
            if f"DECK {deck_num}" not in hub_content:
                errors.append(f"Hub index.html missing DECK {deck_num} badge")
            if f'<div class="deck-card-watermark">{deck_num}</div>' not in hub_content:
                errors.append(f"Hub index.html missing watermark for deck {deck_num}")
        if "overflow-y: auto !important" not in hub_content:
            errors.append("CHW Hub index.html missing overflow-y: auto !important scroll style")
        print("PASS: CHW Hub index.html has interactive background, full vertical scroll, and deck numbers 00-08.")

    # 4. Verify Main Ceremony Portal
    main_html = os.path.join(BASE_DIR, 'index.html')
    if not os.path.exists(main_html):
        errors.append("Missing root index.html")
    else:
        with open(main_html, 'r', encoding='utf-8') as f:
            main_content = f.read()
        if "community-health-workers-2026/index.html" not in main_content:
            errors.append("Root index.html does not link to community-health-workers-2026/index.html")
        if ".chw" not in main_content or "url('shared/assets/chw-theme.png')" in main_content:
            errors.append("Root index.html .chw card should not use static background image")
        else:
            print("PASS: Root index.html links to CHW Congress & uses radiant CSS gradient without image")

    # 5. Verify shared/js/presentation.js includes community-health-workers-2026
    pres_js = os.path.join(BASE_DIR, 'shared', 'js', 'presentation.js')
    with open(pres_js, 'r', encoding='utf-8') as f:
        pres_content = f.read()
    if 'community-health-workers-2026' not in pres_content:
        errors.append("shared/js/presentation.js does not recognize community-health-workers-2026")
    else:
        print("PASS: shared/js/presentation.js recognizes community-health-workers-2026")

    # 6. Verify shared/js/presenter-console.js has community-health-workers-2026 sequence
    pres_console_js = os.path.join(BASE_DIR, 'shared', 'js', 'presenter-console.js')
    with open(pres_console_js, 'r', encoding='utf-8') as f:
        console_js_content = f.read()
    if "'community-health-workers-2026'" not in console_js_content:
        errors.append("shared/js/presenter-console.js SUITE_SEQUENCES missing 'community-health-workers-2026'")
    else:
        print("PASS: shared/js/presenter-console.js includes community-health-workers-2026 sequence")

    # 7. Verify Presenter Console HTML Structure across all decks
    for folder, _ in expected_decks:
        p_html = os.path.join(CHW_DIR, folder, 'presenter.html')
        with open(p_html, 'r', encoding='utf-8') as f:
            p_content = f.read()
        for element_id in ['currentSlideFrame', 'nextSlideFrame', 'presenterSearch', 'slideNotesContent', 'prevSlideBtn', 'nextSlideBtn', 'slideCounter']:
            if f'id="{element_id}"' not in p_content:
                errors.append(f"{folder}/presenter.html missing required presenter element id='{element_id}'")
        if 'presenter-shell' not in p_content:
            errors.append(f"{folder}/presenter.html missing presenter-shell container class")

    print(f"PASS: All {len(expected_decks)} presenter.html files have standard presenter console shell and IDs.")

    # 8. Verify Slide Grid Drawer Theme Styling in chw-theme.css
    drawer_classes = ['.drawer-modal', '.drawer-content', '.drawer-header', '.drawer-search-input', '.drawer-grid', '.drawer-card', '.drawer-card:hover', '.drawer-card.active', '.drawer-card-num', '.drawer-card-title', '.drawer-card-sub']
    for cls in drawer_classes:
        if cls not in css_content:
            errors.append(f"chw-theme.css missing drawer style for {cls}")
    print("PASS: chw-theme.css has comprehensive Christmas styling for slide grid drawer.")

    print("\n=== VERIFICATION SUMMARY ===")
    if errors:
        print(f"FAILED: Found {len(errors)} errors:")
        for err in errors:
            print(f"  ❌ {err}")
        return False
    else:
        print("✅ ALL TESTS PASSED! Verification complete.")
        return True

if __name__ == '__main__':
    success = test_chw_suite()
    exit(0 if success else 1)
