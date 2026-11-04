Source: https://1494labs.com/private-equity-fund-accounting/

# Private equity fund accounting, waterfall included

The capital account is the deliverable. In a drawdown fund, calls, distributions and allocations move it, and many errors begin when those movements live in a spreadsheet.

Solutions · roughly 7 minutes

## Commitments are ledger events

In many drawdown books the capital account lives in a spreadsheet
alongside the accounting system, because the accounting system was built for
subscriptions and does not know what uncalled capital is. That spreadsheet
is then the source of truth for the number limited partners care about most.

Here, a commitment, a call, a drawdown and a distribution are events on the
ledger, each with its own status. The capital account is built from them.
Uncalled is what is left after the calls that actually happened.

- ✓Commitments, subsequent closes and equalization on late closers

- ✓Capital calls with purpose, notice and funding state

- ✓Recallable distributions and recycling policy, per fund

- ✓European and American waterfalls as configurable tiers

- ✓GP carry, per-principal vesting, clawback and LP givebacks

- ✓ILPA CC&D component codes on calls and distributions

- ✓Fund performance measured against a total-return benchmark (PME)

- ✓Subscription and asset-based credit lines: the borrowing base with per-LP exclusions, draws, repayments, interest, and returns with and without the facility

- ✓Form PF Section 4 and Form ADV Schedule D answers derived from the book, each citing its source, exported for a compliance vendor or prepared for filing

- ✓What the ledger does not hold, such as portfolio-company financials, valuation procedures and beneficial owners, entered on review screens and signed, with each correction kept beside the original

![Capital accounts for a drawdown fund: $46.5m committed, $37.2m called, $9.3m uncalled, with per-LP rows and a stated recycling policy.](https://1494labs.com/assets/screens/capital-accounts.4da0f11e.jpg)
**$46.5m committed, $37.2m called, $9.3m still uncalled.** Per limited partner and in total, with recallable capital and the fund's recycling policy shown alongside.

## Waterfalls as configurable tiers

Almost every platform offers "European" and "American" as a dropdown. Almost
no limited partnership agreement is either textbook case. Real agreements
have a preferred return with a compounding convention, a catch-up at some
rate to some target, a split that changes at a hurdle, and a whole-fund test
that may or may not apply to the catch-up.

So a waterfall here is an ordered set of tiers with their own parameters,
and the two named conventions are just two configurations of it. Carry is
held as an accrual subject to its test, so a clawback is a figure the ledger
already carries. [American vs European waterfall on the same two deals](https://1494labs.com/notes/european-vs-american-waterfall/)
runs one fund through both conventions, with the numbers.

![The waterfall builder: a named set of conventions, a stack of tiers with carry and catch-up rates, and a sample calculation panel computing preferred accrued of $46,932,807.68 and a catch-up band from hypothetical distributions.](https://1494labs.com/assets/screens/waterfall-worked-example.957ef3d5.jpg)
**The terms, before they are terms.** Start from a named set of conventions, then edit any field; every field is picked from a fixed list of options with a stated meaning, so there is no formula to get wrong. The panel on the right runs hypothetical cash through the same distribution calculation the fund uses, as you type, which is how you find out what a catch-up rate does before it governs anybody's money. The note under the conventions says the platform runs the waterfall at the fund level, and is *deliberately not called compliant*.

![A waterfall policy with four tiers - return of capital, accrued preferred, GP catch-up to 20 percent at 100 percent, split 80/20 - a clawback measurement per LP showing no exposure, and a posted distribution of $12,075,209.34: $9,300,000.00 returned as capital and $153,070.79 of GP carry.](https://1494labs.com/assets/screens/distribution-waterfall.446c8f15.jpg)
**The same seven answers, entered as tiers.** Return of capital, accrued preferred, a catch-up to 20% at 100%, then an 80/20 split, marked whole-of-fund and priced against an 8% preferred net of return of capital. Clawback exposure is measured beside the policy, per LP by default, and the posted distribution below shows what the tiers produced: $9,300,000.00 back as capital and $153,070.79 to the GP.

## Calls that move the account

A capital call is issued against commitments, noticed to the limited
partners it draws on, and funded. Each of those is a state the call actually
has, and the capital account moves when, and because, the call is funded.

![Eight quarterly capital calls of $4,650,000 each, every one marked FUNDED.](https://1494labs.com/assets/screens/capital-calls.bd5b8c9b.jpg)
**Eight quarterly calls, each with its purpose and funding state.** The schedule is the audit trail: what was drawn, for what, and whether it arrived.

## The fund knows what kind of fund it is

Funding model is set on the vehicle. A drawdown fund's dashboard
leads with committed, called and distributed; a subscription-funded fund's leads with
subscriptions and redemptions. The funding model drives those views, while
notice, lock-ups and redemption gates come from the fund's liquidity terms.

![A drawdown fund dashboard showing NAV, committed, called, distributed, position value and fees accrued.](https://1494labs.com/assets/screens/dashboard-drawdown.2b87b3c0.jpg)
**Committed, called and distributed reflect the drawdown funding model.** The fund's liquidity terms are configured separately.

![A balance sheet for a drawdown fund: operating cash, investments in underlying funds, accrued fees payable, capital contributions and allocated members' capital, footing to $41,960,905.72 on both sides.](https://1494labs.com/assets/screens/balance-sheet.063ac02a.jpg)

**The same fund's balance sheet.** Capital contributions of
$37,200,000.00 is the called figure from the capital accounts above, and
the page foots both sides to $41,960,905.72.

## ILPA, as the template itself

The ILPA Reporting Template v2.0 is a workbook with fixed rows, and it
requires every field to be present. That is where most implementations quietly
mislead: a row the book cannot source is emitted as zero, and a zero is
indistinguishable from a real nil.

![The ILPA Capital Account statement with a notes panel explaining which rows cannot be sourced and why.](https://1494labs.com/assets/screens/ilpa-capital-account.affebef1.jpg)
**Every unsourceable row carries the note explaining it.** Carried interest accrued is zero here because the fund has no active waterfall policy, so no hypothetical liquidation can be run - and the statement says so beside the zero.

## Commitments, drawn down against the ledger

A commitment is a promise the fund draws against. Unfunded is what is left of it, and it has to move every time a call is issued, a transfer splits an interest, or a secondary changes who owes the rest.

![Five LP commitments accepted at a first close, each ACTIVE, with commitment amounts and dates.](https://1494labs.com/assets/screens/commitments.3b5b072a.jpg)

**Commitments.** Accepted at the close they belong to, and the calls
that draw against them carry ILPA component codes at the point of
posting.

## Related reading

- [American vs European waterfall on the same two deals](https://1494labs.com/notes/european-vs-american-waterfall/)

- [What an opening balance has to carry](https://1494labs.com/notes/what-an-opening-balance-has-to-carry/), for a fund moving systems mid-life

- [The platform overview](https://1494labs.com/fund-accounting-software/)

- [For administrators running several drawdown clients](https://1494labs.com/fund-administration-software/)

- [Capital calls and distributions](https://docs.1494labs.com/guide/capital-calls-and-distributions/) in the product docs: what happens when carry has to come back

- [GP economics](https://docs.1494labs.com/guide/gp-economics/) in the product docs: how carry is split among principals and how it vests

## Show us the fund that breaks your current system

Built for the people who sign the books.
Tell us what you run and we will walk you through it in the product,
on a running book. If you want to try it yourself, we will stand up a
sandbox seeded with reference funds for you to work in.

[Request a demo](https://1494labs.com/?segment=pevc#contact)
