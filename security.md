Source: https://1494labs.com/security/

# How we protect your data

Everything on this page can be evidenced, including where we are on independent assurance.

Last reviewed 2026-11-10

## Your books in their own database schema

Every tenant's books live in their own database schema, and every request
is routed to it before a query runs. A book query that forgets a
`WHERE` clause still cannot return another firm's rows, because
the isolation of the books is not a `WHERE` clause. User
accounts and the sign-in and access logs are the exception: they sit in a
shared schema, with every row tied to its workspace.

## An append-only audit trail

Authentication events and API access are recorded on a plane the
application itself cannot edit or truncate. That is enforced by database
triggers that prevent the application from rewriting the record.

## Signing in

- ✓**Time-based one-time-password MFA**, with a workspace-level control over whether it is required.

- ✓**Throttling that counts failed MFA challenges and failed passwords.** Counting passwords alone leaves the second factor open to grinding, which is the interesting half to attack.

- ✓**Federated identity** over OIDC, with a break-glass path that is itself audited.

## The infrastructure

| Encryption in transit | TLS between your browser and the service. Cloudflare terminates it at its edge and re-encrypts to our servers. Traffic between our internal containers stays on a private network |
| --- | --- |
| Database encryption at rest | Yes |
| Database reachable from the internet | No |
| Accidental-deletion protection | Yes |
| Automated backups | 7 days, a daily locked copy kept 35 days, and a snapshot taken before every deploy |
| Secrets | Held in AWS Parameter Store and read at boot. The machine running the application can read them and cannot change them |
| Region | United States |

## What runs before a release reaches you

- ✓**Every commit is scanned for secrets**, and the deploy refuses a revision that has not passed that scan. Not a warning, a refusal.

- ✓**Dependencies are audited weekly** and automatically. The first run found 48 known vulnerabilities; they were remediated the same day.

- ✓**Every deploy re-proves the arithmetic.** An accounting-check sweep runs after every deploy and weekly, across every live fund whenever the accounting engine changed, and it records its own verdict whether anyone is watching or not.

## Privacy in the product

The application loads only its own code and fonts: there are no trackers, advertising or external fonts. It sends narrow product analytics to PostHog through our own
edge: which screen was used, error kinds and one-way hashes, never a
figure or a name from your workspace. Your network address is
stripped, and nothing is stored on your device. A cookieless
counter on our marketing website records that a page was requested; it
does not run in the application. AI
features are off until a workspace administrator turns them on. Everything that touches data is named on the
[sub-processors](https://1494labs.com/subprocessors/) page and in the
[privacy notice](https://1494labs.com/privacy/).

## Assurance roadmap

Where we are today on independent assurance, and what comes next.

- **SOC 2.** Our controls are built to the SOC 2 criteria. A SOC 2 Type I audit is on the roadmap for Q1 2027, followed by Type II.

- **Penetration testing.** We run internal security reviews and weekly dependency audits. An independent third-party penetration test is on the roadmap for Q1 2027.

- **High availability.** Production tenants run with database replication across multiple availability zones. Backups are kept for 35 days, with a snapshot taken before every deploy.

## Reporting something

If you believe you have found a vulnerability, write to
[hello@1494labs.com](mailto:hello@1494labs.com). Tell us what
you found and how to reproduce it, and please give us a chance to fix it
before publishing. We will tell you what we did and when.

- [Sub-processors](https://1494labs.com/subprocessors/), everyone who touches the data

- [The privacy notice](https://1494labs.com/privacy/), an inventory of what is collected
