# 1494labs.com

Marketing site for **1494 Labs**. Fund, partnership and portfolio accounting.

Static HTML, no build step.

## This directory is the SOURCE, not the deploy target

Nothing here reaches 1494labs.com by being pushed to the product repository. The live site is
GitHub Pages serving a **separate public repository**, `1494labs/1494labs.github.io`
(local clone: `~/dev/1494labs.github.io`), and `CNAME` in *that* repo points the
apex domain at it. The product repository is private; Pages serves the public mirror.

On 2026-09-15 eight commits of site work - a full copy rewrite, a reordered
landing page and three new sections - sat here for a day while the live site
served the build from four days earlier, because this README used to say the
site was served "from `main` at the repository root" and that reads as true
when you are standing in the product repository.

**To prepare the mirror**, use the script so every buyer page and generated
reading copy is included:

```bash
scripts/publish_site.sh --dry-run
scripts/publish_site.sh
```

The legal pages (`privacy/`, `subprocessors/`, `security/`, `terms/`) were added here on
2026-10-18 (#449) as DRAFTS naming 1494 Labs Inc.; they reach the Pages repo only when the
owner gives the publish go, and then by an explicit copy of those four directories.

These things deliberately do NOT cross over:

| What | Why |
|---|---|
| `compare/`, `compare.md` | named comparison pages live only in the public marketing repository; preserve them on every sync |
| `scripts/gen_sitemap.py` | the sitemap is generated there, from *that* repo's git history, AFTER the content commit - run it before and every `lastmod` is the previous commit's date |
| `assets/linkedin-*` | brand source files; they are not pages and have no reason to sit on a web server |

Verify with `curl -sI https://1494labs.com/ | grep -i last-modified` - Pages takes
a minute or two, and Cloudflare sits in front with a 600s TTL.

## Layout

```
index.html          the home page (styles inline)
assets/notes.css    the stylesheet for every other page
assets/fonts/       Geist Sans 400/500/600 (OFL)
assets/             mark, favicons, og.png
site.webmanifest    PWA/app icons
robots.txt          allows all, points at the sitemap
sitemap.xml         all indexable pages and their Markdown copies
CNAME               1494labs.com
.nojekyll           skip Jekyll processing
```

## Design notes

Visual decisions follow `/DESIGN.md`. Do not add colors, fonts or radii outside it. Where a design skill's house style (Impeccable, the Taste skill, Emil Kowalski's skills) disagrees with DESIGN.md, DESIGN.md wins; product facts come from `/PRODUCT.md`.

The mark is a **T-account**, the glyph of double entry. A ruled head, a center
stem dividing debit from credit, and two entries of equal weight either side.

Every page uses DESIGN.md's direction-A palette (ground `#F6F7F9`, ink
`#0A0C10`, ultramarine `#2638F0` as the one accent, crimson only for a loss,
chartreuse `#CDF25A` only behind the tie mark) and one typeface, Geist Sans
400/500/600, self-hosted from `assets/fonts/` with tabular figures on. The home page carries its styles inline; every other page
uses `assets/notes.css`. Both declare the same tokens and the same site header
(mark, wordmark, four links), so change them together. The site has one light
palette: DESIGN.md defines no dark one.

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

## Public Markdown and assistant links (#1791)

After changing any page, run `uv run python scripts/gen_site_docs.py`.
It writes `/index.md` for the home page and `<page>.md` for other pages
(for example `/notes/management-fee-offsets.md`), plus `llms.txt` and
`llms-full.txt`. It also adds reading-format links to every page and assistant
handoffs to every note. The generated files keep tables, ordered steps and
absolute source links. Noindex pages get a reading copy but are excluded from
the discovery files and sitemap. `--check` checks that the output is current.

The publishing script runs the same generator against the destination HTML.
This includes Pages-only pages and uses the public legal text rather than the
local drafts. Commit those generated changes with the published content. The
Pages repository's sitemap generator must include each page's Markdown copy;
run it after the content commit as usual.

Phase 2's initial topics were side pockets, management fee offsets and moving
a fund off spreadsheets. Subsequent topic selection uses the completed baseline
and is documented below. Named comparisons belong only in the public marketing repository,
with sourced claims and topic selection from that baseline. The initial
comparisons here cover spreadsheets and the administrator service workflow.

Baseline-driven additions on November 3, 2026 cover administrator conversion,
equalization at conversion, and high-water-mark acceptance tests. Selection
evidence is recorded in docs/research/aeo/2026-11-03-phase2-content-plan.json.
The public compare/ directory stays outside this source tree and is preserved
by the publishing script. Post-phase measurement is deferred at the owner’s request.

## Demo requests (#1791 phase 4)

The home-page form requires email and fund type. Segment pages pass an
allowlisted `segment` query parameter to preselect fund type. The local helper
`assets/demo-request.js` adds per-request timestamps and a reference only on
submission; it uses no storage or additional analytics destination. Requests
still use the native Formspree POST, including browser validation and honeypot.

The measurement baseline, private fulfillment log fields and remaining owner
decision are in `docs/research/aeo/2026-11-03-phase4-demo-path.md`. This is arranged
access to reference funds, not a public self-serve workspace. Keep the public
privacy notice's form-helper description in step when publishing this change;
update its existing public text directly rather than replacing it with the local
legal draft.

## Buyer positioning review (#1884)

The homepage holds the approved positioning. Its capability groups also feed
`llms.txt` and `llms-full.txt` through `scripts/gen_site_docs.py`. Buyer pages,
the glossary and worked notes are linked through the platform and glossary
directories. The capabilities page remains generated from
`docs/reference/capability-matrix.json`; edit the data and run
`uv run python scripts/gen_capability_page.py` before regenerating site docs.

For an unpublished review, set `PAGES_REPO` to an isolated clone on a review
branch, then run `scripts/publish_site.sh`. Commit content there before running
its sitemap generator. Push only that review branch and open a draft pull request.
The Pages source is `main`; merging or pushing to it requires the owner's go.
Preserve the public legal text, comparison pages and robots configuration.
