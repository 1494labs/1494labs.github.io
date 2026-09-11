#!/usr/bin/env python3
"""Generate sitemap.xml from the pages on disk and their git history.

WHY THIS EXISTS. The sitemap was hand-maintained, and by 2026-09-11 every one
of its nine ``lastmod`` dates was wrong - each said 2026-08-24 or -26 while the
files had actually last changed on -26 or -29. That is not cosmetic. Google
uses ``lastmod`` to schedule recrawls, and a sitemap whose dates do not match
what actually changed is a sitemap Google learns to ignore; the penalty for
being caught lying about it is that the field stops working for you at all.
Deriving the date from the commit that last touched the file removes the chance
to be wrong by hand.

TWO RULES THIS ENCODES.

A ``noindex`` page is NEVER listed. ``/privacy/`` carries
``<meta name="robots" content="noindex, follow">`` deliberately, and a sitemap
entry for it would be the site asking Google to index a page that tells it not
to - a contradiction that costs trust in the whole file. The check is on the
page's own markup rather than a list kept here, so adding a noindex page needs
no second edit.

The URL is the DIRECTORY, with its trailing slash. ``/fund-accounting-software``
(no slash) 301s to the slashed form, so listing the unslashed one would put a
redirect in the sitemap, which is exactly the "Page with redirect" that
Search Console reports as an exclusion.

Usage:
    python3 scripts/gen_sitemap.py          # rewrite sitemap.xml
    python3 scripts/gen_sitemap.py --check  # exit 1 if it is out of date
"""

from __future__ import annotations

import argparse
import pathlib
import re
import subprocess
import sys

ORIGIN = "https://1494labs.com"
ROOT = pathlib.Path(__file__).resolve().parent.parent

#: Crawl priority and change cadence per path. Google largely ignores both, but
#: they were already here and dropping them would be a change unrelated to the
#: bug being fixed. A path absent from this map gets the default below.
HINTS: dict[str, tuple[str, str]] = {
    "/": ("weekly", "1.0"),
    "/notes/": ("weekly", "0.8"),
    "/fund-accounting-software/": ("monthly", "0.9"),
}
DEFAULT_HINT = ("monthly", "0.8")
NOTE_HINT = ("monthly", "0.7")

NOINDEX = re.compile(r'<meta\s+name="robots"[^>]*content="[^"]*noindex', re.IGNORECASE)


def git_last_modified(path: pathlib.Path) -> str:
    """The date of the commit that last touched this file.

    Falls back to the filesystem mtime for a page that is not committed yet,
    which is the honest answer for a file whose history does not exist rather
    than a guess dressed as one.
    """
    result = subprocess.run(
        ["git", "log", "-1", "--format=%ad", "--date=short", "--", str(path)],
        capture_output=True,
        text=True,
        cwd=ROOT,
        check=False,
    )
    stamp = result.stdout.strip()
    if stamp:
        return stamp
    import datetime

    return datetime.date.fromtimestamp(path.stat().st_mtime).isoformat()


def url_for(page: pathlib.Path) -> str:
    rel = page.relative_to(ROOT).parent.as_posix()
    return "/" if rel == "." else f"/{rel}/"


def indexable_pages() -> list[pathlib.Path]:
    """Indexable pages, home first and then alphabetical.

    Order carries no ranking weight - the sitemap is a set, not a ballot - but
    a stable order keeps the diff of a regeneration to the lines that actually
    changed, which is what lets a reviewer see a wrong date rather than scroll
    past a reshuffle.
    """
    pages = []
    for page in ROOT.rglob("index.html"):
        if ".git" in page.parts:
            continue
        if NOINDEX.search(page.read_text(encoding="utf-8")):
            continue
        pages.append(page)
    return sorted(pages, key=lambda p: (url_for(p) != "/", url_for(p)))


def build() -> str:
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for page in indexable_pages():
        path = url_for(page)
        changefreq, priority = HINTS.get(
            path, NOTE_HINT if path.startswith("/notes/") and path != "/notes/" else DEFAULT_HINT
        )
        lines += [
            "  <url>",
            f"    <loc>{ORIGIN}{path}</loc>",
            f"    <lastmod>{git_last_modified(page)}</lastmod>",
            f"    <changefreq>{changefreq}</changefreq>",
            f"    <priority>{priority}</priority>",
            "  </url>",
        ]
    lines.append("</urlset>")
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="exit 1 if sitemap.xml is stale")
    args = parser.parse_args()

    target = ROOT / "sitemap.xml"
    fresh = build()
    if args.check:
        current = target.read_text(encoding="utf-8") if target.exists() else ""
        if current != fresh:
            print("sitemap.xml is out of date - run scripts/gen_sitemap.py", file=sys.stderr)
            return 1
        print("sitemap.xml is current")
        return 0

    target.write_text(fresh, encoding="utf-8")
    print(f"wrote {target.relative_to(ROOT)} ({len(indexable_pages())} indexable pages)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
