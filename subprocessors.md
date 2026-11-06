Source: https://1494labs.com/subprocessors/

# Everyone who touches the data

Nine third parties, and two of them only if a customer switches something on. This page names all of them, what reaches each one, and where it runs.

Last reviewed 2026-10-18

## Processing customer workspace data

| Provider | What it does | What reaches it | Where |
| --- | --- | --- | --- |
| **Amazon Web Services** | Runs the application, the database, object storage and the document renderer, and sends outgoing email once delivery is switched on | Everything in a customer workspace | United States |
| **Cloudflare** | Network edge, TLS termination and denial-of-service protection for all three surfaces, plus Web Analytics, which counts page requests on the marketing site (1494labs.com) only | Everything sent to and from the application, in transit. Cloudflare terminates TLS, so requests and responses pass through its edge unencrypted before being re-encrypted to our servers. Nothing is stored there under our configuration | Global edge network |
| **PostHog** | Product analytics for the application: which screens are used, and where errors happen | The template of the screen opened (never an id or anything shown on it), the kind of any error, a one-way hash of the user and the workspace, and the browser type. Not the network address: our edge removes it first. No fund, investor, figure, name or email | United States |

## Only when a customer turns it on

| Provider | What it does | What reaches it | Where |
| --- | --- | --- | --- |
| **Anthropic** | The AI-assisted features, which are off unless a workspace administrator turns them on | Only what a customer sends through those features: documents and import samples they choose to process, figures they ask about, support requests, and investor names and identifiers when a feature matches an administrator's report to the fund's accounts. Nothing else from the workspace | United States |
| **OpenAI** | An alternative provider for the same AI-assisted features, used only if the features are turned on and an OpenAI model is configured for them | The same as the Anthropic row, and only in that case | United States |

## No customer workspace content

These four carry contact and website data, our source code and
operational alerts. None of them can reach a workspace, and no fund,
investor or figure passes through them unless someone chooses to email it
to us.

| Provider | What it does | What reaches it | Where |
| --- | --- | --- | --- |
| **Google** | Email for our own addresses | Anything anyone sends us by email, including an enquiry once it is forwarded on and anything a customer chooses to email us | United States |
| **Formspree** | Handles the enquiry form on the home page | What a visitor types into that form, and the network address they send it from. Nothing until they press submit | United States |
| **GitHub** | Serves this website, and holds our source code, build and support escalations | Static pages and images, code, and support escalations that carry identifiers and a link back to the ticket, never what a user wrote | United States |
| **Slack** | Operations alerts: deploys, failed checks and support notifications | Identifiers and counts, including a workspace's subdomain. No names, figures or text a user wrote | United States |

## Named here because people ask, though neither is a processor

**Spaceship** is the domain registrar and holds DNS records.
It sees no personal data.

**Market data providers** supply data to the application. When a
fund tracks an index, the platform fetches a published series. Nothing about
a customer, a fund or an investor leaves in that request.

## Changes

If a sub-processor is added or replaced, this page changes first and the
date above moves. Customers with an agreement in place are told before the
change takes effect.

- [The privacy notice](https://1494labs.com/privacy/), which is the inventory of what is collected

- [What the platform does](https://1494labs.com/)
