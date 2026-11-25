import os
import json
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TB_DIR = os.path.join(BASE_DIR, 'tb-summit-2026')

def test_tb_summit_suite():
    print("=== STARTING TB SUMMIT 2026 VERIFICATION ===")
    errors = []

    # 1. Verify Theme CSS and Assets
    stage_bg = os.path.join(BASE_DIR, 'shared', 'assets', 'tb-stage-background.jpg')
    if not os.path.exists(stage_bg):
        errors.append(f"Missing stage background: {stage_bg}")
    else:
        print(f"PASS: Stage background exists ({os.path.getsize(stage_bg)} bytes)")

    tb_theme = os.path.join(BASE_DIR, 'shared', 'css', 'tb-gala-theme.css')
    if not os.path.exists(tb_theme) or os.path.getsize(tb_theme) < 100:
        errors.append(f"Missing or empty tb-gala-theme.css: {tb_theme}")
    else:
        print(f"PASS: tb-gala-theme.css exists ({os.path.getsize(tb_theme)} bytes)")

    # 2. Verify Excel File
    excel_file = os.path.join(TB_DIR, 'TB SUMMIT LIST OF AWARDS.xlsx')
    if not os.path.exists(excel_file) or os.path.getsize(excel_file) == 0:
        errors.append(f"Missing or empty Excel file: {excel_file}")
    else:
        print(f"PASS: TB SUMMIT LIST OF AWARDS.xlsx exists ({os.path.getsize(excel_file)} bytes)")

    # 3. Verify Decks
    expected_decks = [
        ("00-program-flow", 34),
        ("01-special-awards", 20),
        ("02-referring-facilities", 25),
        ("03-individual-awards", 24),
        ("04-tb-providers", 11),
        ("05-top-health-centers", 16),
        ("06-top-bhw-10-4", 10),
        ("07-top-barangay-10-4", 10),
        ("08-consolation-tb-providers", 13),
        ("09-top-bhw-3-1", 5),
        ("10-top-barangay-3-1", 5),
        ("11-top-tb-providers-3-1", 9)
    ]

    total_slides = 0
    for folder, expected_count in expected_decks:
        deck_path = os.path.join(TB_DIR, folder)
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
            match = re.search(r'var data = (\[.*?\]);\s*window\.SLIDES_DATA', content, re.DOTALL)
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

                # Verify IDs sequential
                for idx, s in enumerate(slides):
                    if s.get('id') != idx:
                        errors.append(f"{folder} slide index {idx} has non-sequential id: {s.get('id')}")
        except Exception as e:
            errors.append(f"Error validating {folder}/slides-data.js: {e}")

    print(f"Total slides validated across all TB decks: {total_slides}")

    # 4. Verify TB Portal Index
    hub_html = os.path.join(TB_DIR, 'index.html')
    if not os.path.exists(hub_html):
        errors.append("Missing tb-summit-2026/index.html")
    else:
        with open(hub_html, 'r', encoding='utf-8') as f:
            hub_content = f.read()
        for folder, _ in expected_decks:
            if f"{folder}/index.html" not in hub_content:
                errors.append(f"TB Hub index.html does not link to {folder}/index.html")
            if f"{folder}/presenter.html" not in hub_content:
                errors.append(f"TB Hub index.html does not link to {folder}/presenter.html")
        print("PASS: TB Summit index.html contains all deck stage and presenter links.")

    # 5. Verify Content Specifics
    # Deck 00 checks
    d00_js = os.path.join(TB_DIR, '00-program-flow', 'slides-data.js')
    with open(d00_js, 'r', encoding='utf-8') as f:
        d00_text = f.read()
    if "DR. ALFREDO A. LACERONA" not in d00_text:
        errors.append("Deck 00 missing Dr. Lacerona welcome remarks")
    # Verify Dr. Lacerona welcome remarks has no image (NAME ONLY – NO PICTURES)
    match_lac = re.search(r'\{\s*"id":\s*22,.*?\}', d00_text, re.DOTALL)
    if match_lac and '"image":' in match_lac.group(0):
        errors.append("Deck 00 Dr. Lacerona slide violated rule: must be NAME ONLY – NO PICTURES")
    else:
        print("PASS: Deck 00 Dr. Lacerona conforms to (NAME ONLY – NO PICTURES).")
    if "PLEDGE OF COMMITMENT" not in d00_text or "STYLE SPOTLIGHT AWARDS" not in d00_text:
        errors.append("Deck 00 missing Pledge of Commitment or Style Spotlight Awards")
    else:
        print("PASS: Deck 00 contains Pledge of Commitment and Style Spotlight Awards.")

    # Deck 05 checks
    d05_js = os.path.join(TB_DIR, '05-top-health-centers', 'slides-data.js')
    with open(d05_js, 'r', encoding='utf-8') as f:
        d05_text = f.read()
    if "MUNICIPAL HEALTH OFFICE OF SAWATA" not in d05_text or "97% in 2025" not in d05_text:
        errors.append("Deck 05 missing updated Sawata 97% cure rate award")
    else:
        print("PASS: Deck 05 contains updated Sawata 97% cure rate award.")
    if "3,389 Presumptive" not in d05_text or "DAVAO REGIONAL MEDICAL CENTER" not in d05_text:
        errors.append("Deck 05 missing updated RTDL awards (3,389 Presumptive)")
    else:
        print("PASS: Deck 05 contains all RTDL awards matching cue guide.")

    # Deck 08 checks
    d08_js = os.path.join(TB_DIR, '08-consolation-tb-providers', 'slides-data.js')
    with open(d08_js, 'r', encoding='utf-8') as f:
        d08_text = f.read()
    for fac in [
        "MUNICIPAL HEALTH OFFICE OF NEW CORELLA",
        "CITY HEALTH OFFICE OF PANABO",
        "MUNICIPAL HEALTH OFFICE OF CARMEN",
        "MUNICIPAL HEALTH OFFICE OF BRAULIO E. DUJALI",
        "MUNICIPAL HEALTH OFFICE OF ASUNCION",
        "MUNICIPAL HEALTH OFFICE OF SAWATA",
        "MUNICIPAL HEALTH OFFICE OF TALAINGOD",
        "DISTRICT HEALTH OFFICE OF BABAK",
        "DISTRICT HEALTH OFFICE OF KAPUTIAN",
        "DISTRICT HEALTH OFFICE OF SAMAL"
    ]:
        if fac not in d08_text:
            errors.append(f"Deck 08 missing facility: {fac}")
    print("PASS: Deck 08 contains all 10 consolation facilities.")

    # Deck 11 checks
    d11_js = os.path.join(TB_DIR, '11-top-tb-providers-3-1', 'slides-data.js')
    with open(d11_js, 'r', encoding='utf-8') as f:
        d11_text = f.read()
    for top_fac in [
        "MUNICIPAL HEALTH OFFICE OF STO. TOMAS",
        "CITY HEALTH OFFICE OF TAGUM",
        "MUNICIPAL HEALTH OFFICE OF KAPALONG"
    ]:
        if top_fac not in d11_text:
            errors.append(f"Deck 11 missing top facility: {top_fac}")
    print("PASS: Deck 11 contains all Top 3 podium facilities.")

    if errors:
        print(f"\nFAILED with {len(errors)} errors:")
        for err in errors:
            print(f"  - {err}")
        return False
    else:
        print("\n=== ALL VERIFICATIONS PASSED SUCCESSFULLY (0 failures)! ===")
        return True

if __name__ == '__main__':
    success = test_tb_summit_suite()
    exit(0 if success else 1)
