import os
import json
import re
import xml.etree.ElementTree as ET

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NC_DIR = os.path.join(BASE_DIR, 'nutrition-congress-2026')

def test_nutrition_suite():
    print("=== STARTING NUTRITION CONGRESS VERIFICATION ===")
    errors = []

    # 1. Verify Background SVG
    bg_svg = os.path.join(BASE_DIR, 'shared', 'nutrition-assets', 'nutrition-stage-bg.svg')
    if not os.path.exists(bg_svg):
        errors.append(f"Missing background SVG: {bg_svg}")
    else:
        try:
            tree = ET.parse(bg_svg)
            print(f"PASS: Background SVG is valid XML ({os.path.getsize(bg_svg)} bytes, root: {tree.getroot().tag})")
        except Exception as e:
            errors.append(f"Background SVG XML parse error: {e}")

    # 2. Verify Theme CSS
    theme_css = os.path.join(BASE_DIR, 'shared', 'css', 'nutrition-theme.css')
    if not os.path.exists(theme_css) or os.path.getsize(theme_css) < 100:
        errors.append(f"Missing or empty nutrition-theme.css: {theme_css}")
    else:
        print(f"PASS: nutrition-theme.css exists ({os.path.getsize(theme_css)} bytes)")

    # 3. Verify Decks
    expected_decks = [
        ("00-program-flow", 16),
        ("01-pangga-ko-si-sam", 8),
        ("02-outstanding-lgu", 4),
        ("03-outstanding-lnfp", 13),
        ("04-special-awards", 12),
        ("05-regional-and-pnc", 21),
        ("06-pnet-recognition", 15),
        ("07-bns-loyalty-awards", 18)
    ]

    total_slides = 0
    for folder, expected_count in expected_decks:
        deck_path = os.path.join(NC_DIR, folder)
        if not os.path.isdir(deck_path):
            errors.append(f"Missing deck directory: {folder}")
            continue

        for fname in ['index.html', 'presenter.html', 'slides-data.js']:
            fpath = os.path.join(deck_path, fname)
            if not os.path.exists(fpath) or os.path.getsize(fpath) == 0:
                errors.append(f"Missing or empty file: {folder}/{fname}")

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
                    print(f"PASS: {folder} has {count} slides (matches expected).")
        except Exception as e:
            errors.append(f"Error validating {folder}/slides-data.js: {e}")

    print(f"Total slides validated across all decks: {total_slides}")

    # 4. Verify Nutrition Hub Index
    hub_html = os.path.join(NC_DIR, 'index.html')
    if not os.path.exists(hub_html):
        errors.append("Missing nutrition-congress-2026/index.html")
    else:
        with open(hub_html, 'r', encoding='utf-8') as f:
            hub_content = f.read()
        for folder, _ in expected_decks:
            if f"{folder}/index.html" not in hub_content:
                errors.append(f"Hub index.html does not link to {folder}/index.html")
            if f"{folder}/presenter.html" not in hub_content:
                errors.append(f"Hub index.html does not link to {folder}/presenter.html")
        print("PASS: Nutrition Hub index.html contains all deck stage and presenter links.")

    # 5. Verify Main Ceremony Portal
    main_html = os.path.join(BASE_DIR, 'index.html')
    if not os.path.exists(main_html):
        errors.append("Missing root index.html")
    else:
        with open(main_html, 'r', encoding='utf-8') as f:
            main_content = f.read()
        if "nutrition-congress-2026/index.html" not in main_content:
            errors.append("Root index.html does not link to nutrition-congress-2026/index.html")
        else:
            print("PASS: Root index.html correctly links to nutrition-congress-2026/index.html")

    # 6. Verify Shared Scripts & Logos
    for asset in [
        'shared/js/presentation.js',
        'shared/js/presenter-console.js',
        'shared/js/cloud-sync.js',
        'shared/assets/logos/logo-3.png',
        'shared/assets/logos/DDN.png',
        'shared/assets/logos/PHO-Logo.png'
    ]:
        p = os.path.join(BASE_DIR, asset)
        if not os.path.exists(p):
            errors.append(f"Missing shared asset: {asset}")
        else:
            print(f"PASS: Asset exists: {asset}")

    if errors:
        print("\n=== VERIFICATION FAILED with errors: ===")
        for err in errors:
            print(f"  - {err}")
        return False
    else:
        print("\n=== ALL VERIFICATIONS PASSED SUCCESSFULLY (0 failures)! ===")
        return True

if __name__ == '__main__':
    success = test_nutrition_suite()
    exit(0 if success else 1)
