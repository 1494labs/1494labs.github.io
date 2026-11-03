Source: https://1494labs.com/hedge-fund-accounting/

# Hedge fund accounting, down to the series

A subscription-funded fund has to treat investors who arrived on different days fairly. Much of that work comes down to the high-water mark.

Solutions · roughly 6 minutes

## Fairness between cohorts

Two investors in the same strategy, one who subscribed in January and one in
July, should not pay the same incentive fee on the same year. Every mechanism
a subscription-funded fund uses, series accounting, [equalization](https://1494labs.com/notes/equalization-and-the-mid-period-subscriber/), the equalization
credit and depreciation deposit, exists to fix that one unfairness, and each
of them is fiddly enough that it is usually implemented in a spreadsheet.

- ✓Subscriptions, redemptions, transfers and investor-level activity on the ledger

- ✓Series accounting with per-series high-water marks and consolidation

- ✓Equalization, including the credit and depreciation deposit method

- ✓Incentive fees or incentive allocations, crystallized or accrued

- ✓Side pockets that ring-fence frozen participation and split dealing NAV from total NAV

- ✓Sleeves carried on the journal entries themselves

- ✓Form PF Sections 1 and 2 derived from positions, financing, investor and risk records, each answer citing its source

## High-water marks that survive the year

A high-water mark is easy to compute and easy to lose. It has to survive a
[partial redemption](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/), which reduces the balance it applies to without resetting
it. It has to survive a transfer between investors. It has to survive a
restatement of a prior period, when the performance it was measured against
changes underneath it. Get any of those wrong and an investor either pays
twice for the same gain or never pays for it at all.

It is one of the checks the morning run makes on every fund it holds:
each high-water mark must have survived its redemptions, its transfers
and any restatement of the period it was measured in. The check currently runs against our own reference funds.

![The fund overview on Home: the NAV calculated for the selected period, that period's fees, and position value and operating cash read live, with the floor the cash is measured against.](https://1494labs.com/assets/screens/fund-dashboard.8d533a4c.jpg)
**NAV as of the period actually selected.** The NAV calculated for that period, with the fees accrued in it and the cash the fund can spend against its configured floor.

![A per-investor allocation for the period: six investors by name, each with opening capital, net profit and loss, and ending capital.](https://1494labs.com/assets/screens/allocation-per-investor.c3091f57.jpg)
**Each investor's roll-forward, by name.** Opening, the period's net profit and loss, ending. Shown narrowed to the columns that foot to the NAV; the same table carries profit and loss by component, fees per investor, and a rate of return with quarter and year to date geometrically linked. A period an investor was not in is marked as a gap.

## A fund of funds, kept as a book

Underlying fund positions carry a cost basis, an unrealized gain and a
valuation date per manager. When a manager sends an estimate and later a
final, the true-up is a correction with its own record, and a closed period can be corrected without
breaking what was already reported.

![Portfolio holdings for a fund-of-funds: six named underlying managers, each with cost, value, the date it was last valued and a link to its marks.](https://1494labs.com/assets/screens/portfolio-holdings.3916f10a.jpg)
**Six managers, each at cost and at value.** The date each was last revalued sits on the row, because the age of an input is part of the number.

## The cash underneath

Subscriptions arrive as receivables and become cash when they clear.
Redemptions leave as payables. Treating them as cash the moment they are
recorded is how a fund's operating cash goes quietly negative on paper while
the bank account is fine, and it is a surprisingly common defect.

![A cash movements blotter of settled movements: investments into underlying managers, investor subscriptions, and transfers between the fund's own cash accounts, each with its source and counterparty.](https://1494labs.com/assets/screens/cash-movements.61bcbb09.jpg)
**Every movement carries its source, counterparty and settlement status.** Payments to underlying managers name the manager, subscriptions name the investor, and a transfer between the fund's own accounts is derived from the journal entry that moved it. One cash sub-ledger, reconciled against the bank statement.

## A series is an identity the ledger keeps

Series accounting is usually run beside the accounting system, in a workbook that remembers which cohort is which. Here each series has its own inception period and its own mark, and the morning check re-checks them.

![Seven series of one share class, one per subscription month from January 2024 to February 2026, each issued at 100.00 in its own inception period, with the January 2024 series marked as the lead.](https://1494labs.com/assets/screens/series.7f98fbc2.jpg)
**One series per subscription month.** Each is issued at 100.00 in its own inception period and measured against its own high-water mark.

## Crystallization, per investor and per event

An incentive fee crystallizes on the events the terms name, such as a redemption, a period close or a hurdle met. Each crystallization names the account it belongs to and the mark it was measured against.

![Four scheduled incentive crystallizations, two at December 2024 and two at December 2025, each posted with the amount crystallized.](https://1494labs.com/assets/screens/crystallizations.da9bddb9.jpg)
**Crystallized per series, each December.** After a down 2025, the 2024 series stayed below their high-water marks and paid nothing; the series opened at the lows paid.

## Related reading

- [The platform overview](https://1494labs.com/fund-accounting-software/)

- [Equalization, and what a mid-period subscriber actually owes](https://1494labs.com/notes/equalization-and-the-mid-period-subscriber/)

- [High-water marks and the partial redemption](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/)

- [ABOR and IBOR, and why most systems keep them apart](https://1494labs.com/notes/abor-and-ibor/)

- [For administrators running several hedge fund clients](https://1494labs.com/fund-administration-software/)

- [Fees: from structure to charge](https://docs.1494labs.com/guide/fees-from-structure-to-charge/) in the product docs

- [Side pockets](https://docs.1494labs.com/guide/side-pockets/) in the product docs

## Show us the fund that breaks your current system

Built for the people who sign the books.
Tell us what you run and we will walk you through it in the product,
on a running book. If you want to try it yourself, we will stand up a
sandbox seeded with reference funds for you to work in.

[Request a demo](https://1494labs.com/#contact)
