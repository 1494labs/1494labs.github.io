Source: https://1494labs.com/family-office-accounting/

# Family office accounting, with the structure drawn from the capital

A family office is a web of vehicles that own each other, and the
accounting problem is what that web adds up to once the intercompany
interests are taken out.

Solutions · roughly 6 minutes

## The problem is the structure

Ask a single family office what it is worth and the answer involves a
diagram. There is a revocable trust from 1998, two more for the second
generation and one for the third. They own a holding company between them.
The holding company owns a family partnership. The partnership owns an
alternatives vehicle, a private capital vehicle, a venture vehicle, a real
estate vehicle, a public markets vehicle and a directs vehicle, and one of
those owns a co-investment vehicle underneath it.

Every one of those is a real legal entity with its own book. The number the
family wants is what all of it comes to, from where they sit, without
counting the same underlying asset twice on its way up.

- ✓Ownership derived from the capital accounts, period by period

- ✓Intercompany interests eliminated, so nothing is counted twice

- ✓Legal and consolidated views of the same structure

- ✓Trusts, GRATs, partnerships, holding companies and asset SPVs on one platform

- ✓Real assets and digital assets on the same ledger as the funds

- ✓Net worth and exposure translated into the family's reporting currency

## Ownership is derived from capital

The usual failure here is a spreadsheet of ownership percentages maintained
beside the accounting. It is correct on the day it is written and wrong the
first time somebody contributes capital, because the percentage and the
capital account are two records of one fact and only one of them gets
updated.

1494 Labs derives each ownership percentage from the capital accounts themselves,
per period. If a trust contributes to the holding company, its share moves
because its capital moved. The structure diagram and the net worth statement
are two readings of the same underlying record, so there is no version of
events where the picture disagrees with the number.

![An ownership structure drawn as a flow diagram: four family trusts converging on a holding company of $3.58bn, through a family partnership, out to six asset sleeves and a co-investment vehicle.](https://1494labs.com/assets/screens/structure-flow.49a61406.jpg)
**Four trusts, one holding company, six sleeves.** Band width is the value passing *through* each vehicle, so a holding company worth $157.5m on its own books and controlling $3.58bn reads as what it is. Nobody typed a percentage.

## What the elimination is for

A holding company's balance sheet shows an interest in the partnership
beneath it. The partnership's shows its own investments. Add the two
together and the partnership's assets appear twice, once directly and once
wrapped inside the holding company's interest.

The consolidated view removes those internal interests explicitly and shows you the removal in its own column. On a structure like the one above,
more than a billion dollars of intercompany interest is eliminated between
the legal totals and the consolidated one. That column is what lets you check the consolidated number.

## The structure, from any angle

The same structure draws as a top-down org chart, a left-to-right chart, or a
value-weighted flow. From one vehicle downward, when the question is what
this trust owns; or the entire structure at once, when the question is what
the family owns. A structure with several tops cannot be drawn from any one
of them, so the whole-structure view draws all of them at once.

![The whole ownership structure as an org chart: four trusts, a holding company, a family partnership, six asset vehicles and a co-investment vehicle.](https://1494labs.com/assets/screens/structure-graph.60cc35a2.jpg)
**Every vehicle once, with its owners converging on it.** One vehicle can have several owners, so drawing the structure as separate trees would repeat the shared vehicles once per branch.

## Beyond the marketable book

Family offices hold things funds do not. Real property, art, aircraft and
other tangible assets carry measurement and appraisal histories. Digital
assets carry custody locations. Both post to the same ledger as the fund
interests and the public equity, under the same rules and with the same
audit trail, so one consolidated statement covers all of it.

## If you already have a reporting layer

Most family offices we talk to are running two things: something that
aggregates and reports on the family's wealth, and something else keeping
the general ledger. The reporting layer is usually the one people are happy
with; the complaints are about the ledger underneath it.

This is the ledger underneath. An aggregation or reporting platform the
family is happy with should read straight from the accounting book. Everything the application does is available through a public, documented
API, and a script signs in the same way a person does, so any system your
team or vendor already runs can read the book or post to it.

Custodians, banks, portals, data vendors and the family's own warehouse
connect through that same API. For systems that will never have an
API, 58 bulk loaders accept a file. Connecting it to what
you already run is scoped as its own piece of work, against your actual
systems.

## Related reading

## What the family actually owns

A family that holds a partnership through a holding company through four trusts owns most of its assets several times over on paper. Getting to a number the family can act on means eliminating the intercompany interests, layer by layer.

![A look-through consolidation showing legal books of $12.01bn against a consolidated $1.50bn, with a per-asset table giving legal owner, asset class, valuation basis, effective ownership, gross value and attributed value.](https://1494labs.com/assets/screens/look-through-consolidation.a6726248.jpg)

**$12.01bn of legal books, $1.50bn of it actually owned.**
The gap is the same dollar counted at each layer it passes through. Every
row carries the effective ownership that got it there (40% of $157.5m is $63.0m), computed from the capital accounts, so the
consolidation and the ownership diagram cannot disagree.

- [The platform overview](https://1494labs.com/fund-accounting-software/)

- [ABOR and IBOR, and why most systems keep them apart](https://1494labs.com/notes/abor-and-ibor/)

- [Private equity fund accounting](https://1494labs.com/private-equity-fund-accounting/) · for the commitments underneath

- [Structures and ownership](https://docs.1494labs.com/guide/structures-and-ownership/) in the product docs

- [Portfolio companies and consolidation](https://docs.1494labs.com/guide/portfolio-companies-and-consolidation/) in the product docs

## Show us the fund that breaks your current system

Built for the people who sign the books.
Tell us what you run and we will walk you through it in the product,
on a running book. If you want to try it yourself, we will stand up a
sandbox seeded with reference funds for you to work in.

[Request a demo](https://1494labs.com/#contact)
