Source: https://1494labs.com/reit-accounting-software/

# REIT accounting, with the qualification tests read from the book

A REIT keeps its status by passing tests every quarter and every year: what it owns, where its income comes from, how much it distributes and who owns its shares. Often those tests are computed in spreadsheets built from the general ledger after the fact. Here they recompute from the same books that produce the financial statements.

REITs · roughly 7 minutes

## Qualification, tracked as the year runs

The asset tests are measured at each quarter end: the 75% test for real estate assets, cash items and government securities, the limit on securities of taxable REIT subsidiaries, and the single-issuer and vote-or-value limits. The 75% and 95% income tests are measured year to date. Each ledger line is classified by a visible rule into rents from real property, mortgage interest, gains, dividends or TRS dividends, and the default rules can be edited. A line that no rule covers counts in the denominator and in no numerator, and is surfaced until someone classifies it.

The 90% distribution requirement is tested against REIT taxable income, which is either a figure your preparer supplies or one computed from the books. A dividend designated as a spillback for the prior year counts toward that year's test, and the 4% excise exposure on undistributed income is shown as information. At year end the ownership tests run: the 100-holder test, the five-or-fewer test, which looks through entity holders to the individuals behind them, and the 1% impermissible tenant service income test per property.

The tests flag and do not block. A failure raises a break on the reconciliation worklist, because what to do about it belongs to the REIT's management and its advisers.

## A quarter in which a test fails

The reference REIT holds one office building and earns fit-out management fees through a taxable REIT subsidiary, which pays them up as a dividend. A TRS dividend counts toward the 95% income test and not the 75% test. In the first quarter of 2025 that dominates the mix.

Reference REIT, 2025 tests

| Test | 2025-03-31 | 2025-06-30 | 2025-12-31 |
| --- | --- | --- | --- |
| 75% income, year to date | 61.93% fail | 76.48% pass | 86.79% pass |
| 95% income, year to date | 98.89% pass | 99.15% pass | 99.52% pass |
| 75% asset | 91.06% pass | 91.01% pass | 90.84% pass |
| TRS securities, 20% limit | 8.94% pass | 8.99% pass | 9.16% pass |

The first-quarter figure is 167,581.22 of qualifying income over 270,581.22 of gross income. The failure raises a break and the books carry on. Second-quarter rent restores the year-to-date ratio. A 750 line of sundry income that no rule covers is shown as unmapped rather than assumed to qualify.

At the 2025 year end the reference REIT has two shareholders, so the 100-holder test fails and says so, the five-or-fewer test is unresolved because both holders are in the top five and one is an organization, and the 1% service income test passes at 0.19%. An unresolved result states what the records would have to show to settle it.

## The operating partnership and OP units

In an UPREIT, the REIT owns most of an operating partnership and outside limited partners own the rest through OP units. The partnership is an ordinary fund in the product, with its own capital accounts, and the REIT's account in it is marked as the REIT's. Every other account is the noncontrolling interest. OP units are issued when a property is contributed, in kind, and the contribution records the property and its carryover tax basis. Units are redeemed for cash or exchanged for REIT shares. An exchange books the share issue at the units' carrying amount with no cash and no income, and the excess of fair value over carrying amount is a memorandum item.

The qualification tests look through to the partnership. The REIT is tested on its proportionate share of the partnership's assets and income, with the same classification, and the interest itself is dropped so nothing is counted twice. The noncontrolling interest report is a capital bridge folded from the partnership's own allocation runs, and it ties to them.

Reference partnership, 2025

| | REIT | Outside unitholder | Partnership |
| --- | --- | --- | --- |
| Contributions | 400,000.00 | 100,000.00 | 500,000.00 |
| Income allocated | 33,340.20 | 8,335.05 | 41,675.25 |
| Closing capital | 433,340.20 | 108,335.05 | 541,675.25 |

The outside unitholder contributed a land parcel in kind for a 20% interest. The REIT's tests count 80% of the partnership's land and cash.

## Distributions and their tax character

Earnings and profits are computed separately from GAAP income. The computation starts from book net income and bridges to REIT taxable income line by line: book depreciation added back and tax depreciation taken, straight-line rent in excess of billed removed, unrealized gains removed, and recorded book-tax adjustments applied. Each line says where it came from, and the computation lists what it could not do. It is a computation and not a return. A taxable income figure your preparer supplies always overrides it.

Reference REIT, fiscal 2025

| Item | Amount |
| --- | --- |
| Book net income | 466,590.20 |
| REIT taxable income, computed | 476,692.12 |
| Earnings and profits | 483,852.70 |
| Distributions paid | 550,000.00 |
| Characterized as ordinary dividends | 483,852.70 |
| Characterized as return of capital | 66,147.30 |

Each distribution is characterized in the order the rules set: current earnings and profits first as ordinary dividends, then designated capital gain, with its unrecaptured Section 1250 part, then return of capital. The designations are the REIT's tax decisions and are entered, and the arithmetic keeps them honest. Each holder's categories sum to what that holder received, and each category summed over holders equals the category total, to the cent. With two holders at 60% and 40%, the first receives 330,000.00, of which 290,311.62 is ordinary and 39,688.38 is return of capital, and the second receives 220,000.00, of which 193,541.08 and 26,458.92. The 90% test on the same year passes at 550,000 against a 600,000 estimate.

A dividend reinvestment plan buys shares with the distribution at the class NAV strike, through the same capital engine as any other NAV-priced subscription. The distribution stays a distribution, with its character unchanged, and the reinvestment is a separate subscription linked to it.

## NAV REIT operations

A non-traded NAV REIT can run several share classes, each with its own servicing fee accrued on holder NAV in that class. The share repurchase program measures what each offer used against the monthly and quarterly caps, commonly 2% and 5%, reports the headroom and flags an offer in a window that is already over. It blocks nothing, because a board can suspend or waive a program. Each offer prorates oversubscribed requests and carries unfilled requests forward. The advisor's fee on NAV and its performance participation over a hurdle, with loss carryforward, run through the fee engine.

## FFO and AFFO, derived

FFO follows the NAREIT definition. It starts from net income, adds real estate depreciation and amortization, and removes gains and losses on the sale of depreciable real estate and impairments. AFFO then takes off the straight-line rent adjustment, tenant improvements, leasing commissions and recurring capital expenditure, read from the lease runs and the capex actuals. For an UPREIT, FFO is stated for the consolidated REIT and split between the REIT and the outside unitholders by income share. Adjustments for unconsolidated joint ventures are not modeled, and the pack says so on that line. Per-share figures are blank for a REIT kept on capital accounts rather than shares.

Reference REIT, first quarter 2025

| Item | Amount |
| --- | --- |
| Net income | 182,122.32 |
| Real estate depreciation | 54,000.00 |
| Real estate amortization | 2,958.90 |
| FFO | 239,081.22 |
| Straight-line rent adjustment | -3,780.82 |
| Tenant improvements | -109,500.00 |
| Leasing commissions | -36,000.00 |
| AFFO | 89,800.40 |

## Properties underneath

The REIT's properties use the same lease, rent roll and property-level accounting as any [real estate fund](https://1494labs.com/real-estate-fund-accounting/), including NOI, occupancy and weighted average lease term.

## What we don't do

We keep the books and track the tests. Tax returns, and the preparation and filing of Forms 1099-DIV with taxpayer identification numbers, stay with your preparer and transfer agent. The product computes the per-holder character and files nothing. Qualification decisions stay with your tax advisers. The 100-holder count rests on the investors the book holds, so a REIT whose beneficial owners sit behind nominees will need to supply them.

## Related reading

- [Real estate fund accounting](https://1494labs.com/real-estate-fund-accounting/)

- [Registered fund accounting](https://1494labs.com/registered-fund-accounting/), which shares the repurchase-offer engine

- [Capabilities and status](https://1494labs.com/capabilities/)

## Show us the REIT

Tell us how the REIT is structured, with or without an operating partnership, and how many share classes it runs. We will walk you through a quarter in the product.

[Request a demo](https://1494labs.com/?segment=other#contact)
