Source: https://1494labs.com/private-equity-fund-accounting/

# Private Equity Fund Accounting

For private equity managers and administrators running drawdown funds.

## Accounting Capabilities

- Fund setup records the legal entity, base currency and fiscal year. Closed-end funds also carry vintage, fund term, extension dates and hard cap, so the fund record contains the terms used by the accounting team.

- Waterfall setup records the hurdle, catch-up and distribution tiers for European or American carry arrangements. A policy preview shows the configured waterfall before it is used for the fund.

- Capital call notices are available as PDFs through the API. The notice carries the investor's amount, due date and wire instructions from approved bank details, for the accounting team's call-notice process.

- Distribution notices are available as PDFs through the API. Each notice belongs to a recorded distribution and provides the investor-facing document for that cash event.

- Capital Accounts shows unfunded commitments by investor and fund. A fund setting chooses the historical or spot measure, so the reported unfunded amount follows the accounting basis selected for that fund.

- The Fees screen calculates period management fees from the fund's saved terms. Accruals can be posted and reversed, giving the period fee a corresponding accounting entry in the fund's books.

- Capital Accounts shows investor balances for the selected fund. Accounting checks compare investor capital snapshots with general ledger capital, giving the investor balances a defined tie to the fund's capital accounts.

- Investor statements show opening capital, contributions, distributions, allocated income and expenses, fees and ending capital. The statement draws these amounts from the investor's recorded account and the fund's reporting period.

- The company Exit screen calculates whole-holding exit proceeds through liquidation preferences, participation and caps. The calculation uses the company's capital structure to allocate the exit value across the security classes.

- The company valuation screen records a dated mark up or down. The company's valuation method and memo stay with the mark, giving quarter-end company valuation records a date and stated calculation approach.

## Related Notes

- [European and American waterfalls](https://1494labs.com/notes/european-vs-american-waterfall/)

- [Management fee offsets](https://1494labs.com/notes/management-fee-offsets/)

## Questions

### Can I record a closed-end fund's vintage and term?

Yes. Fund setup includes vintage, investment term, extension dates and hard cap for closed-end funds, alongside the legal entity, currency and fiscal year. These fields belong to the fund record.

### Can I configure European and American waterfall terms?

Yes. Waterfall setup supports European and American policies, with hurdle, catch-up and tier terms. The policy preview calculates the configured distribution sequence so the finance team can review the terms.

### Can a company exit calculation include liquidation preferences?

Yes. Company exit waterfalls calculate proceeds using liquidation preferences, participation and caps. The supported exit action covers the whole holding and allocates the exit value across the company's security classes.

### Can I record a quarter-end portfolio company valuation?

Yes. The company valuation screen records a valuation date, method and memo with the mark. It supports company marks up or down for the reporting date being recorded.

### Can I see unfunded commitments by investor?

Yes. Capital Accounts reports unfunded commitments per investor and per fund. The fund's setting selects the historical or spot measure used in that view, giving the team a defined basis for the outstanding amount.

## Related Accounting Pages

- [Fund of Funds Accounting](https://1494labs.com/fund-of-funds-accounting/)

- [Capital Call and Distribution Software](https://1494labs.com/capital-call-and-distribution-software/)

- [Liquidity Forecasting and Commitment Pacing](https://1494labs.com/liquidity-forecasting-and-commitment-pacing/)

- [Distribution Waterfall Software](https://1494labs.com/distribution-waterfall-software/)

- [Real Estate Fund Accounting](https://1494labs.com/real-estate-fund-accounting/)

- [Fund Accounting Glossary](https://1494labs.com/glossary/)

- [Capabilities and Status](https://1494labs.com/capabilities/)

## Product Screens

![Capital accounts for a drawdown fund: $46.5m committed, $37.2m called, $9.3m uncalled, with per-LP rows and a stated recycling policy.](https://1494labs.com/assets/screens/capital-accounts.4da0f11e.jpg)

**$46.5m committed, $37.2m called, $9.3m still uncalled.** Per limited partner and in total, with recallable capital and the fund's recycling policy shown alongside.

![The waterfall builder: a named set of conventions, a stack of tiers with carry and catch-up rates, and a sample calculation panel computing preferred accrued of $46,932,807.68 and a catch-up band from hypothetical distributions.](https://1494labs.com/assets/screens/waterfall-worked-example.957ef3d5.jpg)

**The terms, before they are terms.** Start from a named set of conventions, then edit any field; every field is picked from a fixed list of options with a stated meaning, so there is no formula to get wrong. The panel on the right runs hypothetical cash through the same distribution calculation the fund uses, as you type, which is how you find out what a catch-up rate does before it governs anybody's money. The note under the conventions says the platform runs the waterfall at the fund level, and is *deliberately not called compliant*.

![A waterfall policy with four tiers - return of capital, accrued preferred, GP catch-up to 20 percent at 100 percent, split 80/20 - a clawback measurement per LP showing no exposure, and a posted distribution of $12,075,209.34: $9,300,000.00 returned as capital and $153,070.79 of GP carry.](https://1494labs.com/assets/screens/distribution-waterfall.446c8f15.jpg)

**The same seven answers, entered as tiers.** Return of capital, accrued preferred, a catch-up to 20% at 100%, then an 80/20 split, marked whole-of-fund and priced against an 8% preferred net of return of capital. Clawback exposure is measured beside the policy, per LP by default, and the posted distribution below shows what the tiers produced: $9,300,000.00 back as capital and $153,070.79 to the GP.

![Eight quarterly capital calls of $4,650,000 each, every one marked FUNDED.](https://1494labs.com/assets/screens/capital-calls.bd5b8c9b.jpg)

**Eight quarterly calls, each with its purpose and funding state.** The schedule is the audit trail: what was drawn, for what, and whether it arrived.

![A drawdown fund dashboard showing NAV, committed, called, distributed, position value and fees accrued.](https://1494labs.com/assets/screens/dashboard-drawdown.2b87b3c0.jpg)

**Committed, called and distributed reflect the drawdown funding model.** The fund's liquidity terms are configured separately.

![A balance sheet for a drawdown fund: operating cash, investments in underlying funds, accrued fees payable, capital contributions and allocated members' capital, footing to $41,960,905.72 on both sides.](https://1494labs.com/assets/screens/balance-sheet.063ac02a.jpg)

**The same fund's balance sheet.** Capital contributions of
$37,200,000.00 is the called figure from the capital accounts above, and
the page foots both sides to $41,960,905.72.

![The ILPA Capital Account statement with a notes panel explaining which rows cannot be sourced and why.](https://1494labs.com/assets/screens/ilpa-capital-account.affebef1.jpg)

**Every unsourceable row carries the note explaining it.** Carried interest accrued is zero here because the fund has no active waterfall policy, so no hypothetical liquidation can be run - and the statement says so beside the zero.

![Five LP commitments accepted at a first close, each ACTIVE, with commitment amounts and dates.](https://1494labs.com/assets/screens/commitments.3b5b072a.jpg)

**Commitments.** Accepted at the close they belong to, and the calls
that draw against them carry ILPA component codes at the point of
posting.

## Request a Demo

Tell us which funds, structures and accounting terms you need to review.

[Request a demo](https://1494labs.com/?segment=pevc#contact)
