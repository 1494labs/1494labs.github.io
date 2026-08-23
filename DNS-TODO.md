# Pre-launch TODO

## 1. Formspree endpoint

`index.html` posts to `https://formspree.io/f/FORM_ID`. Create the 1494 Labs
form at formspree.io and replace `FORM_ID` with the real endpoint. Until then
the early-access form will not deliver. Same setup as the LadderOps site.

## 2. Custom domain: re-enable when DNS is ready

The `CNAME` file was removed so `1494labs.github.io` serves directly during
pre-launch iteration. With `CNAME` present, GitHub 301-redirects the
`.github.io` URL to `1494labs.com`, which is still parked.

To go live on the real domain:

1. At Spaceship, delete the parking A records and add:

   | Type  | Host  | Value                 |
   |-------|-------|-----------------------|
   | A     | `@`   | `185.199.108.153`     |
   | A     | `@`   | `185.199.109.153`     |
   | A     | `@`   | `185.199.110.153`     |
   | A     | `@`   | `185.199.111.153`     |
   | CNAME | `www` | `1494labs.github.io.` |

2. Restore the file: `echo 1494labs.com > CNAME && git add CNAME && git commit && git push`
3. Wait for the Let's Encrypt certificate, then tick **Enforce HTTPS** in
   Settings → Pages.
