# 1494labs.com

Marketing site for **1494 Labs**. Fund accounting that proves itself.

Static HTML, no build step. Served by GitHub Pages from `main` at the repository
root; `CNAME` points the apex domain here.

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
