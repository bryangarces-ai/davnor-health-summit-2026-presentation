import os
import xml.etree.ElementTree as ET

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
source_html = os.path.join(base_dir, 'shared', 'nutrition-assets', 'backdrop_chocolate.html')
output_svg = os.path.join(base_dir, 'shared', 'nutrition-assets', 'nutrition-stage-bg.svg')

with open(source_html, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Defs: line 21 to 97 (0-indexed: 20 to 97)
defs_text = "".join(lines[20:97])

# 2. Base background & stardust: line 98 to 125 (0-indexed: 97 to 125)
base_text = "".join(lines[97:125])

# 3. Map watermark: line 135 to 158 (0-indexed: 134 to 158)
map_text = "".join(lines[134:158])

# 4. Top weave: line 194 to 401 (0-indexed: 193 to 401)
top_weave = "".join(lines[193:401])

# 5. Bottom weave: line 402 to 609 (0-indexed: 401 to 609)
bot_weave = "".join(lines[401:609])

# 6. Rails & cultural flourishes: line 612 to 627 (0-indexed: 611 to 627)
flourishes = "".join(lines[611:627])

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
{defs_text}

  <!-- Base Radial Glow & Weave -->
{base_text}

  <!-- Davao del Norte Map Subtle Watermark -->
  <g opacity="0.12" transform="translate(0, 30)">
{map_text}
  </g>

  <!-- Side Rails & Mandaya Cultural Side Flourishes -->
{flourishes}

  <!-- Top Geometric Tribal Weave Border -->
  <g id="top-tribal-weave">
{top_weave}
  </g>

  <!-- Bottom Geometric Tribal Weave Border -->
  <g id="bot-tribal-weave">
{bot_weave}
  </g>
</svg>"""

with open(output_svg, 'w', encoding='utf-8') as f:
    f.write(svg_content)

# Validate XML
try:
    tree = ET.parse(output_svg)
    print(f"SUCCESS: Valid SVG XML generated at {output_svg}! Root: {tree.getroot().tag}")
except Exception as e:
    print(f"XML Validation Error: {e}")
