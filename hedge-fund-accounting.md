Source: https://1494labs.com/hedge-fund-accounting/

# Hedge Fund Accounting

For hedge fund CFOs, controllers and fund administrators.

## Accounting Capabilities

- Share classes hold the terms for unitized funds. Fee classes group investors in capital-based funds. The Share Classes and Fee Terms screens record these arrangements for funds whose investors have different fee terms.

- Fee Terms records management fee rates, calculation basis and step-down bands. The Fees screen holds period offset sources. The fee configuration supplies the terms used when the period management fee is calculated.

- The Fees screen calculates period management fees from the fund's saved terms. Accruals can be posted and reversed, giving the period fee a corresponding accounting entry in the fund's books.

- NAV records preliminary, final and restated fund values, including share-class lines. The NAV and period-close screens show the fund's strike workflow, with class results available through the share register.

- Capital Accounts shows investor balances for the selected fund. Accounting checks compare investor capital snapshots with general ledger capital, giving the investor balances a defined tie to the fund's capital accounts.

- Investor statements show opening capital, contributions, distributions, allocated income and expenses, fees and ending capital. The statement draws these amounts from the investor's recorded account and the fund's reporting period.

- Reporting groups investor statement production into runs. The team generates, reviews and publishes the statements, with failures recorded per account so an individual statement failure is isolated within the run.

- NAV supports share-class and series values, with final period strikes and daily estimates. Daily NAV estimates retain their grade and are superseded by the period close, preserving the distinction between daily and closed values.

## Related Notes

- [Equalization and the mid-period subscriber](https://1494labs.com/notes/equalization-and-the-mid-period-subscriber/)

- [High-water marks and partial redemptions](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/)

- [Side pockets and investor participation](https://1494labs.com/notes/side-pockets-and-investor-participation/)

## Questions

### Can investors in one fund have different fee terms?

Yes. Unitized funds use share classes, and capital-based funds use fee classes. The Share Classes and Fee Terms screens record these groups and their terms within the fund.

### Can a calculated management fee post to the books?

Yes. After fee terms are configured, Fees calculates the period accrual and provides posting and reversal actions. The posted accrual records the management fee in the fund's accounting books.

### Can I keep daily NAV estimates and final class NAV?

Yes. NAV supports daily estimates and final period strikes with share-class and series values. Daily estimates carry an estimate grade and are superseded by the close when final NAV is struck.

### Do investor capital accounts tie to general ledger capital?

Yes. The accounting checks compare investor capital balances with the fund's general ledger capital. Capital Accounts displays the investor balances. The tie is an accounting invariant checked across the book.

### Can I review investor statements before publishing a run?

Yes. Statement runs group generation, review and publication. Each account has its own result, allowing the team to inspect a failed item and review the generated statements before publishing the run.

## Related Accounting Pages

- [Fund of Funds Accounting](https://1494labs.com/fund-of-funds-accounting/)

- [Capital Call and Distribution Software](https://1494labs.com/capital-call-and-distribution-software/)

- [Liquidity Forecasting and Commitment Pacing](https://1494labs.com/liquidity-forecasting-and-commitment-pacing/)

- [Fund Accounting Glossary](https://1494labs.com/glossary/)

- [Capabilities and Status](https://1494labs.com/capabilities/)

## Product Screens

![The fund overview on Home: the NAV calculated for the selected period, that period's fees, and position value and operating cash read live, with the floor the cash is measured against.](https://1494labs.com/assets/screens/fund-dashboard.8d533a4c.jpg)

**NAV as of the period actually selected.** The NAV calculated for that period, with the fees accrued in it and the cash the fund can spend against its configured floor.

![A per-investor allocation for the period: six investors by name, each with opening capital, net profit and loss, and ending capital.](https://1494labs.com/assets/screens/allocation-per-investor.c3091f57.jpg)

**Each investor's roll-forward, by name.** Opening, the period's net profit and loss, ending. Shown narrowed to the columns that foot to the NAV; the same table carries profit and loss by component, fees per investor, and a rate of return with quarter and year to date geometrically linked. A period an investor was not in is marked as a gap.

![Portfolio holdings for a fund-of-funds: six named underlying managers, each with cost, value, the date it was last valued and a link to its marks.](https://1494labs.com/assets/screens/portfolio-holdings.3916f10a.jpg)

**Six managers, each at cost and at value.** The date each was last revalued sits on the row, because the age of an input is part of the number.

![A cash movements blotter of settled movements: investments into underlying managers, investor subscriptions, and transfers between the fund's own cash accounts, each with its source and counterparty.](https://1494labs.com/assets/screens/cash-movements.61bcbb09.jpg)

**Every movement carries its source, counterparty and settlement status.** Payments to underlying managers name the manager, subscriptions name the investor, and a transfer between the fund's own accounts is derived from the journal entry that moved it. One cash sub-ledger, reconciled against the bank statement.

![Seven series of one share class, one per subscription month from January 2024 to February 2026, each issued at 100.00 in its own inception period, with the January 2024 series marked as the lead.](https://1494labs.com/assets/screens/series.7f98fbc2.jpg)

**One series per subscription month.** Each is issued at 100.00 in its own inception period and measured against its own high-water mark.

![Four scheduled incentive crystallizations, two at December 2024 and two at December 2025, each posted with the amount crystallized.](https://1494labs.com/assets/screens/crystallizations.da9bddb9.jpg)

**Crystallized per series, each December.** After a down 2025, the 2024 series stayed below their high-water marks and paid nothing; the series opened at the lows paid.

## Request a Demo

Tell us which funds, structures and accounting terms you need to review.

[Request a demo](https://1494labs.com/?segment=hedge#contact)
