Source: https://1494labs.com/fund-accounting-software/

# Fund accounting software that checks its own books

Most systems report what the books say. This one also re-checks, each morning, that the ledger, the NAV and the capital accounts still agree.

Platform overview · roughly 6 minutes

## The short version

Fund accounting software has one job that cannot be faked: at the end of a
period, the general ledger, the NAV, and every investor's capital account
have to agree with each other. Everything else on a feature list is in
service of that, and most of the pain in this industry comes from systems
where those three things are maintained separately and reconciled
afterwards.

1494 Labs is built the other way round. One ledger carries the accounting
book and the investment book. Capital accounts are built from the journal entries. Ownership is derived from the capital accounts. And each fund's arithmetic is re-checked every morning, so a book that has drifted says so in the period it drifted.

- ✓One ledger for the accounting book and the investment book

- ✓Capital accounts derived from the ledger, per investor, per period

- ✓The arithmetic of every fund re-checked every morning

- ✓Financial statements read directly from the book

- ✓Every screen uses the same public API you get, so your own systems can do anything a person can

- ✓Every money figure explains itself: its rule, inputs, source transactions, journal entries and change history

- ✓US GAAP or IFRS per fund, with the fair value hierarchy note and prior-period comparatives

- ✓Credit facilities on both sides: the fund's own borrowing lines, and the loans it makes, from term loans to committed lines with commitment fees on the undrawn balance, PIK and default interest

- ✓Form PF and Form ADV Schedule D answers with the source rows behind each one, exported for a compliance vendor or prepared for filing

## One ledger, two books

The **accounting book of record** and the **investment
book of record** answer different questions on different clocks, which
is why they usually end up in different systems with a reconciliation
between them. That reconciliation is somebody's job every morning, and it is
the source of a large share of the operational risk in fund administration.

Recording each economic event once, and treating trade date and settlement
date as two views of the same journal entries, removes the reconciliation altogether: there is one set of entries, so there
is nothing to reconcile. Ask a vendor which it is offering, one book or a
well-automated reconciliation between two. We wrote up the distinction, and how to test it, in
[ABOR and IBOR, and why most systems keep them apart](https://1494labs.com/notes/abor-and-ibor/).

![The fund overview on Home: the NAV calculated for the selected period, that period's fees, and position value and operating cash read live, with the floor the cash is measured against.](https://1494labs.com/assets/screens/fund-dashboard.8d533a4c.jpg)
**Each figure says which point in time it reflects.** NAV is the one calculated for the period you selected, fees are that period's, and anything read from the books as they stand now is marked Live, including the cash the fund can spend and the floor it is measured against.

## Every vehicle type, in one product

Pooled funds, funds-of-one, separately managed accounts, trusts, family
partnerships, holding companies and asset SPVs. Committed-capital and
subscription-funded. Unitized and capital-based. Master-feeder structures where the feeder picks
up master profit and loss through a real internal position held on the
ledger, so nobody types a journal entry for it each month.

Funding model and liquidity terms are separate fund settings. A drawdown fund
can use commitments, calls, recallable distributions and a waterfall. A
subscription-funded fund can take money at each period's final NAV, while
redemption dates, notice, lock-ups and gates set how investors leave. Both
post to the same ledger, and a fund that changes shape does not change systems.

## The books, and everything that reads them

An income statement, a balance sheet, a statement of changes in partners'
capital and a schedule of investments are four questions put to one ledger.
Ending capital on one ties to NAV on another because both read the same book.

![An income statement with trading gains, administration fee expense and directors' fees, totaling net income.](https://1494labs.com/assets/screens/income-statement.7581fcbf.jpg)
**Real operating expenses carrying their GL codes.** Expenses post through the income and expense ledger, which is also the only source the allocation to investors reads, so a cost that reaches NAV reaches capital accounts too.

![A per-investor allocation for the period: six investors by name, each with opening capital, net profit and loss, and ending capital.](https://1494labs.com/assets/screens/allocation-per-investor.c3091f57.jpg)
**The period's profit and loss, split across investors.** Opening $23,499,503.07, net $125,969.93, ending $23,625,473.00 - which is the NAV on the dashboard above. Fees and expenses are attributed per investor, directly to the accounts that bear them.

## The error that survives review

A wrong price gets argued about. The errors that survive every review are the
ones nobody looks for: a capital account that stopped tying to the ledger
three periods ago, an allocation that no longer sums to the pool, a
high-water mark lost in a redemption. Nobody re-adds a fund by hand each
month, so they surface at the audit as a restatement.
So every morning the platform re-computes the figures that are supposed
to tie, for each fund it holds, and opens an exception naming the fund, the
period and the amount where something does not. That check currently runs
against our own reference funds.

When a number does change, the change keeps its own record: prior value, new
value, delta and cause, per event. A correction stays on the record as a fact about the book.

![A NAV restatement history listing every change to a fund's NAV with prior value, new value and delta.](https://1494labs.com/assets/screens/nav-restatement.f2e59da4.jpg)
**Every change to a calculated NAV keeps its own record.** The ledger keeps the trail itself, so nobody has to remember to.

![A trial balance of thirteen accounts by code and category, with debits and credits each totaling $28,515,992.43 and a cent of rounding shown on its own line.](https://1494labs.com/assets/screens/trial-balance.164f78ab.jpg)
**And the ledger those statements read.** Debits and credits foot to the same $28,515,992.43, and the cent of rounding sits on a line of its own. Close the period and the trial balance is locked as a revision the system will not let anyone edit, which is what a statement produced a year later reads from.

## Built for the vehicle you actually run

- [Private equity and drawdown funds](https://1494labs.com/private-equity-fund-accounting/) · commitments, calls, waterfalls, carry

- [Hedge funds and subscription-funded vehicles](https://1494labs.com/hedge-fund-accounting/) · series, equalization, high-water marks

- [Family Offices](https://1494labs.com/family-office-accounting/) · consolidated net worth across the whole structure

- [Fund Administrators](https://1494labs.com/fund-administration-software/) · many clients, one platform

- [A wrong number that agrees with itself](https://1494labs.com/notes/a-wrong-number-that-agrees-with-itself/) · what the morning check is for

- [Which columns can be added](https://1494labs.com/notes/which-columns-can-be-added/) · subtotals that stay honest under grouping

- [Journal entries and the ledger](https://docs.1494labs.com/guide/journal-entries-and-the-ledger/) in the product docs

- [The API reference](https://docs.1494labs.com/developer/api/) in the product docs: every screen uses it

## Show us the fund that breaks your current system

Built for the people who sign the books.
Tell us what you run and we will walk you through it in the product,
on a running book. If you want to try it yourself, we will stand up a
sandbox seeded with reference funds for you to work in.

[Request a demo](https://1494labs.com/#contact)

## Compare your current workflow

[Compare fund accounting platforms](https://1494labs.com/compare/) with a worked close and dated product sources.

[1494 Labs vs spreadsheets](https://1494labs.com/fund-accounting-software-vs-spreadsheets/) and [1494 Labs and an outsourced administrator](https://1494labs.com/fund-accounting-software-vs-administrator/): what to test with one completed period.
