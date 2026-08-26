# Pre-launch TODO

Nothing outstanding. The custom domain is live.

## Reference

- Apex `1494labs.com` -> four GitHub Pages A records
  (`185.199.108-111.153`), `www` -> CNAME `1494labs.github.io`.
- DNS is managed at Spaceship. Spaceship warns about "conflicting records"
  when adding multiple A records to the same host; that warning is wrong for
  this case, since round-robin A records are exactly what GitHub requires.
- The `CNAME` file in this repo is what tells GitHub to serve the custom
  domain. Removing it makes the site serve on `1494labs.github.io` instead,
  which is useful for pre-launch iteration.
