Source: https://1494labs.com/fund-administration-software/

# Fund administration software for people who sign the books

An administrator keeps forty books at once, each with its own agreement,
its own calendar and its own idea of what a management fee is.

Solutions · roughly 6 minutes

## Forty funds, forty agreements

The administrator's difficulty is variety. One client's management fee is
charged on committed capital during the investment period and on invested
capital after it. Another's is on net asset value with a most-favored-nation
clause. A third caps organizational expenses and makes the manager bear the
excess. A platform with a house convention makes all of them somebody's
manual adjustment.

Fee structures here are composed from parts: tiered
schedules, modifiers, offsets, expense caps and four-way settlement,
configured per fund. Terms can be read out of the limited partnership
agreement into a prefilled builder, with the clause attached, and a human
confirms every one before it becomes a fund term.

- ✓Each client's data kept in its own separate store

- ✓Per-fund fiscal calendars, and a close that locks the period while current work carries on

- ✓Sign-off on the numbers tracked apart from locking the period, with a checklist and a controller's dashboard

- ✓Reconciliation exceptions on an aged, assigned worklist

- ✓Bulk CSV loaders for the systems that will never have an API

- ✓More than 1,800 API operations in one published API reference

- ✓Shadow reconciliation that ties an outside administrator's pack to the book

- ✓Investor statements laid out from a client's own PDF

## A close that actually closes

Period close moves through three stages, per fund and per period: open,
soft closed, hard closed. A hard-closed period accepts no new entries and
its trial balance is saved as a fixed record, so a statement produced a year later still ties to
what was reported at the time. A fund with negative capital or a pending crystallization is left out of
the close and listed for review.

Corrections stay possible without pretending they did not happen. Anything
in an open period is editable; a hard-closed period takes a graded, audited revision. The distinction matters because the alternative, in practice, is
an administrator keeping a private list of what the system says versus what
is true.

![A Statement of Changes in Partners' Capital, from beginning capital through contributions, net income and fees to ending capital.](https://1494labs.com/assets/screens/statement-of-changes.39e06e66.jpg)
**Ending capital ties to the dashboard NAV to the cent.** Both figures come from the same ledger, so no reconciliation runs between them.

![A fee gross-to-net statement: five management fee accruals, each from gross accrual to net fee, totaling $65,934.06 gross and net with no offsets, waivers or rebates.](https://1494labs.com/assets/screens/fee-gross-to-net.a19c17c9.jpg)
**Gross to net, per accrual, per client.** Each posted fee keeps the steps it was calculated with, in order (gross, then offsets, waivers and rebates, then net), saved when it posted, so a later change to the terms does not rewrite it.

## Exceptions with somewhere to go, and two kinds of them

A reconciliation report is only a control if somebody works it. Each exception
moves through stages (detected, assigned, explained, resolved), names the
check that found it, and sits on an aged worklist.

Be clear about which kind, because the word means different things to a
vendor and to your team. **Internal exceptions** are what the daily check produces: capital accounts against the ledger, allocations
against the pool, cash movements against the entries that produced them.
**External exceptions** come from a counterparty file, and are
the ones your morning actually consists of. Cash against the bank runs from an imported statement, positions against a custodian's file, and an outside administrator's pack (fund and class NAV, capital accounts, trial balance, cash, positions and fees, as CSV or XLSX) ties out on the Shadow tab, with each administrator's column layout remembered for next period. The worklist, the aging and the accept-with-a-note decision are the same for all three, and the screens below are a bank statement's.

![An exception detail panel for the operating cash account at 2026-06-30: the bank statement's closing balance of $747,850.00 against the book's $750,000.00, a difference of $2,150.00, a reason field, and buttons to acknowledge, resolve or accept the difference.](https://1494labs.com/assets/screens/break-detail.dc783d42.jpg)

**Expected, actual, difference, and a decision with a name on it.**
Resolve and accept are deliberately different: resolved means the
numbers now agree, accepted means they still differ and somebody decided
that is correct. Accepting requires a note, because "they differ and
that is fine" is only institutional memory if it says why.

## Every screen uses the public API

The product's own interface is built on exactly the API a client gets,
so every operation the interface performs is in the API. Custodians, banks, portals, data vendors and a client's own
warehouse all connect through the same API, and the systems that will
never have an API get bulk CSV loaders.

![A cash movements blotter of settled movements: investments into underlying managers, investor subscriptions, and transfers between the fund's own cash accounts, each with its source and counterparty.](https://1494labs.com/assets/screens/cash-movements.61bcbb09.jpg)
**Cash movements, with their sources.** Select many rows and act on them together in every table, because an administrator's day is spent on many rows at once.

## The exceptions worklist

An exception names the fund, the period and the amount. The worklist, the aging and the accept-with-a-note decision are the same whether the exception came from the daily internal check or from a counterparty file.

![The exceptions worklist: two open exceptions on the operating cash account, raised by an imported bank statement. The closing balance differs from the book by $2,150.00, and one statement line of -$2,150.00 matches nothing in the book.](https://1494labs.com/assets/screens/reconciliation-breaks.3b91eb16.jpg)

**A finding has somewhere to go.**
An imported bank statement matched every line but one, a $2,150 fee
the book never recorded, and raised two exceptions: the balance and the unmatched line. An exception ages, gets assigned, and keeps what was decided
about it, so next month's exception on the same account arrives with
last month's reasoning attached.

## Related reading

- [A wrong number that agrees with itself](https://1494labs.com/notes/a-wrong-number-that-agrees-with-itself/), the errors a reconciliation cannot see

- [What an opening balance has to carry](https://1494labs.com/notes/what-an-opening-balance-has-to-carry/), when a client fund moves over mid-life

- [The platform overview](https://1494labs.com/fund-accounting-software/)

- [Drawdown clients](https://1494labs.com/private-equity-fund-accounting/)

- [Subscription-funded clients](https://1494labs.com/hedge-fund-accounting/)

- [Family office clients](https://1494labs.com/family-office-accounting/)

- [Closing a period](https://docs.1494labs.com/guide/closing-a-period/) in the product docs

- [Cash and reconciliation](https://docs.1494labs.com/guide/cash-and-reconciliation/) in the product docs

## Show us the fund that breaks your current system

Built for the people who sign the books.
Tell us what you run and we will walk you through it in the product,
on a running book. If you want to try it yourself, we will stand up a
sandbox seeded with reference funds for you to work in.

[Request a demo](https://1494labs.com/?segment=administrator#contact)
