# 1494labs.com

Marketing site for **1494 Labs**. Fund accounting that proves itself.

Static HTML, no build step.

## This directory is the SOURCE, not the deploy target

Nothing here reaches 1494labs.com by being pushed to `janus`. The live site is
GitHub Pages serving a **separate public repository**, `1494labs/1494labs.github.io`
(local clone: `~/dev/1494labs.github.io`), and `CNAME` in *that* repo points the
apex domain at it. `janus` is private; Pages serves the public mirror.

On 2026-09-15 eight commits of site work - a full copy rewrite, a reordered
landing page and three new sections - sat here for a day while the live site
served the build from four days earlier, because this README used to say the
site was served "from `main` at the repository root" and that reads as true
when you are standing in `janus`.

**To publish**, copy the pages and product screenshots into the clone, leave the
things that live only there alone, and let its own generator write the sitemap:

```bash
SRC=~/dev/janus/site DST=~/dev/1494labs.github.io
cp "$SRC/index.html" "$DST/"
for d in family-office-accounting fund-accounting-software \
         fund-administration-software hedge-fund-accounting \
         private-equity-fund-accounting notes; do
  rsync -a --exclude '.DS_Store' "$SRC/$d/" "$DST/$d/"
done
rsync -a --exclude '.DS_Store' "$SRC/assets/screens/" "$DST/assets/screens/"
cd "$DST" && git add -A && git commit        # content first...
python3 scripts/gen_sitemap.py && git add sitemap.xml && git commit
git push origin main
```

Three things deliberately do NOT cross over:

| What | Why |
|---|---|
| `privacy/` | exists only in the Pages repo; a blind mirror would delete it |
| `subprocessors/` | same |
| `security/` | same |
| `scripts/gen_sitemap.py` | the sitemap is generated there, from *that* repo's git history, AFTER the content commit - run it before and every `lastmod` is the previous commit's date |
| `assets/linkedin-*` | brand source files; they are not pages and have no reason to sit on a web server |

Verify with `curl -sI https://1494labs.com/ | grep -i last-modified` - Pages takes
a minute or two, and Cloudflare sits in front with a 600s TTL.

## Layout

```
index.html          the page (styles inline, no external requests)
assets/             mark, favicons, og.png
site.webmanifest    PWA/app icons
robots.txt          allows all, points at the sitemap
sitemap.xml         one URL for now
CNAME               1494labs.com
.nojekyll           skip Jekyll processing
```

## Design notes

The mark is a **T-account**, the glyph of double entry. A ruled head, a center
stem dividing debit from credit, and two entries of equal weight either side.

Palette and type match the product's warm-paper theme so the site and the app
read as one thing:

| Token   | Value     | Use                                    |
|---------|-----------|----------------------------------------|
| paper   | `#F7F4ED` | page ground                            |
| surface | `#FCFAF6` | raised panels                          |
| ink     | `#221F1B` | body text                              |
| teal    | `#176B75` | primary accent, the mark               |
| claret  | `#94263C` | reserved: negative/monetary loss only |

Display face is a Palatino-class serif via system stack; body is the system sans.
No webfonts, so the page has zero external requests.

## The name

In 1494 Luca Pacioli published the *Summa de arithmetica*, codifying double-entry
bookkeeping. Everything since is an implementation detail.


## Publish with the script, not a hand-typed rsync

`scripts/publish_site.sh` does the mirror. It exists because the exclusions are
load-bearing and keeping them right by memory already failed once: on
2026-09-16 `/subprocessors/` was published and the next hand-typed sync would
have deleted it, silently, because that command's exclude list still said only
`privacy/` and `scripts/`.

The script computes the risk instead of trusting a list. Anything present in the
Pages repo, absent from `site/`, and not declared in its `PAGES_ONLY` array
stops the publish. Adding a Pages-only page is then a deliberate one-line edit
in two places - that array and the table above - rather than a deletion nobody
notices.

    scripts/publish_site.sh --dry-run    # what would change
    scripts/publish_site.sh              # sync, then it tells you the sitemap step
