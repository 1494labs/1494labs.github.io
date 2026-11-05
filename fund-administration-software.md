Source: https://1494labs.com/fund-administration-software/

# Fund Administration Software

For fund administrators accounting for many funds with different terms.

## Accounting Capabilities

- Administrators: many funds with different terms on one platform, and reconciliation against bank, custodian and administrator files.

- Subscriptions, redemptions, transfers, calls, commitments, distributions and recallable capital.

- Equalization or series accounting, chosen per fund. High-water marks carried per investor through partial redemptions, transfers and restatements.

- Management and incentive fees, offsets, waterfalls with carry, clawback and vesting, and side pockets.

- Allocations by class, series and sleeve, and investor NAV in the class currency.

- Period close with a frozen trial balance and graded revisions.

- Official and latest-knowledge books on one ledger, with the source of every line.

- Cash, positions and NAV reconciled against outside files, with an exceptions worklist.

- A check that recomputes every fund's arithmetic each morning.

- NAV, capital account statements, ILPA notices, performance, and Form PF and Form ADV answers from the same book.

- Saved analyses that refresh on the platform and can be pulled through the API.

## Related Notes

- [Converting from a fund administrator](https://1494labs.com/notes/converting-from-a-fund-administrator/)

- [What an opening balance has to carry](https://1494labs.com/notes/what-an-opening-balance-has-to-carry/)

- [Checking the book against outside records](https://1494labs.com/notes/a-wrong-number-that-agrees-with-itself/)

## Related Accounting Pages

- [Fund of Funds Accounting](https://1494labs.com/fund-of-funds-accounting/)

- [Capital Call and Distribution Software](https://1494labs.com/capital-call-and-distribution-software/)

- [Liquidity Forecasting and Commitment Pacing](https://1494labs.com/liquidity-forecasting-and-commitment-pacing/)

- [Fund Accounting Glossary](https://1494labs.com/glossary/)

- [Capabilities and Status](https://1494labs.com/capabilities/)

## Questions

### Can an administrator run funds with different terms?

Each fund carries its terms for investor accounting, fees and waterfalls. Administrators can reconcile the books against bank, custodian and administrator files.

## Product Screens

![A Statement of Changes in Partners' Capital, from beginning capital through contributions, net income and fees to ending capital.](https://1494labs.com/assets/screens/statement-of-changes.39e06e66.jpg)

**Ending capital ties to the dashboard NAV to the cent.** Both figures come from the same ledger, so no reconciliation runs between them.

![A fee gross-to-net statement: five management fee accruals, each from gross accrual to net fee, totaling $65,934.06 gross and net with no offsets, waivers or rebates.](https://1494labs.com/assets/screens/fee-gross-to-net.a19c17c9.jpg)

**Gross to net, per accrual, per client.** Each posted fee keeps the steps it was calculated with, in order (gross, then offsets, waivers and rebates, then net), saved when it posted, so a later change to the terms does not rewrite it.

![An exception detail panel for the operating cash account at 2026-06-30: the bank statement's closing balance of $747,850.00 against the book's $750,000.00, a difference of $2,150.00, a reason field, and buttons to acknowledge, resolve or accept the difference.](https://1494labs.com/assets/screens/break-detail.dc783d42.jpg)

**Expected, actual, difference, and a decision with a name on it.**
Resolve and accept are deliberately different: resolved means the
numbers now agree, accepted means they still differ and somebody decided
that is correct. Accepting requires a note, because "they differ and
that is fine" is only institutional memory if it says why.

![A cash movements blotter of settled movements: investments into underlying managers, investor subscriptions, and transfers between the fund's own cash accounts, each with its source and counterparty.](https://1494labs.com/assets/screens/cash-movements.61bcbb09.jpg)

**Cash movements, with their sources.** Select many rows and act on them together in every table, because an administrator's day is spent on many rows at once.

![The exceptions worklist: two open exceptions on the operating cash account, raised by an imported bank statement. The closing balance differs from the book by $2,150.00, and one statement line of -$2,150.00 matches nothing in the book.](https://1494labs.com/assets/screens/reconciliation-breaks.3b91eb16.jpg)

**A finding has somewhere to go.**
An imported bank statement matched every line but one, a $2,150 fee
the book never recorded, and raised two exceptions: the balance and the unmatched line. An exception ages, gets assigned, and keeps what was decided
about it, so next month's exception on the same account arrives with
last month's reasoning attached.

## Request a Demo

Tell us which funds, structures and accounting terms you need to review.

[Request a demo](https://1494labs.com/?segment=administrator#contact)
