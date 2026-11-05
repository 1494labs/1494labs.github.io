"""Guard every published head, including pages excluded from the private mirror."""

from pathlib import Path
import json
import re
import struct

ROOT = Path(__file__).resolve().parents[1]
NAMES = (
    "favicon.ico", "favicon.svg", "favicon-16x16.png", "favicon-32x32.png",
    "favicon-48x48.png", "apple-touch-icon.png", "site.webmanifest",
)

pages = sorted(ROOT.rglob("*.html"))
for page in pages:
    content = page.read_text()
    for name in NAMES:
        assert f"{name}?v=1808" in content, f"{page.relative_to(ROOT)}: missing versioned {name}"
    assert not re.search(r'(?:favicon\.(?:svg|ico)|favicon-\d+x\d+\.png|apple-touch-icon\.png)["\']', content), page
assert "#2438EA" in (ROOT / "assets/favicon.svg").read_text()
assert "#176B75" not in (ROOT / "assets/favicon.svg").read_text()
for size, name in [(16, "favicon-16x16.png"), (32, "favicon-32x32.png"), (48, "favicon-48x48.png"), (180, "apple-touch-icon.png"), (192, "icon-192x192.png"), (512, "icon-512x512.png")]:
    data = (ROOT / "assets" / name).read_bytes()
    assert data[:8] == b"\x89PNG\r\n\x1a\n", name
    assert struct.unpack(">II", data[16:24]) == (size, size), name
ico = (ROOT / "assets/favicon.ico").read_bytes()
assert struct.unpack("<HH", ico[:4]) == (0, 1)
count = struct.unpack("<H", ico[4:6])[0]
assert {(ico[6+i*16] or 256, ico[7+i*16] or 256) for i in range(count)} == {(16, 16), (32, 32), (48, 48)}
manifest = json.loads((ROOT / "site.webmanifest").read_text())
assert {icon["sizes"] for icon in manifest["icons"]} == {"192x192", "512x512"}
assert all("?v=1808" in icon["src"] for icon in manifest["icons"])
print(f"Current versioned icon set verified on {len(pages)} HTML pages, including legal and comparison pages.")
