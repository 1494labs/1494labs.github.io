Source: https://1494labs.com/fund-administration-software/

# Fund Administration Software

For fund administrators accounting for many funds with different terms.

## Accounting Capabilities

- Create a fund with legal entity, vintage, term, currency, fiscal year

- Share classes or units with different fee terms

- Management fee terms with rate, basis, step-downs, offsets

- Carried interest and waterfall terms with hurdle, catch-up, tiers, European or American

- Chart of accounts per fund, with a default template

- Onboard an investor with unique ID, legal name, tax details, type

- Bank account details on the investor record for inbound and outbound cash

- Generate call notices per investor with amounts, due date, wire instructions

- Distribution notices per investor

- Unfunded commitment tracking per investor and per fund

- Mark a position to a valuation with an effective date and a source

- Calculate management fees for a period from the fee terms

- Journal entries posted from every transaction type, traceable to the source transaction

- Period open, close, lock, and reopen with an audit trail

- Close checklist and reviewer sign-off gating lock

- NAV calculation per fund and per share class at period end

- Capital accounts per investor that tie to the general ledger

- Allocation of income, expense, gains across investors by ownership, multi-level up the chain

- Trial balance per fund and period, frozen at close

- Financial statements for one fund and period (income, balance, changes in net assets, cash flow)

- Investor capital account statement (beginning, contributions, distributions, allocated income and expense, fees, ending)

- Report packs by persona, assembled and exportable as one document

- In-product support requests raised from a screen and tracked

- Generate investor statements for all accounts, review, publish and resend

## Related Notes

- [Converting from a fund administrator](https://1494labs.com/notes/converting-from-a-fund-administrator/)

- [What an opening balance has to carry](https://1494labs.com/notes/what-an-opening-balance-has-to-carry/)

- [Checking the book against outside records](https://1494labs.com/notes/a-wrong-number-that-agrees-with-itself/)

## Questions

### Can investors in one fund have different fee terms?

Yes. Unitized funds use share classes, and capital-based funds use fee classes. The Share Classes and Fee Terms screens record these groups and their terms within the fund.

### Can a calculated management fee post to the books?

Yes. After fee terms are configured, Fees calculates the period accrual and provides posting and reversal actions. The posted accrual records the management fee in the fund's accounting books.

### Can reviewer sign-off gate the period lock?

Yes. The close checklist and review events are recorded for the period. Locking checks that the required sign-off is present, and the reviewer's action remains in the period history.

### Can I retrieve the trial balance frozen at close?

Yes. Reporting includes frozen trial balances and revisions. The frozen balance keeps the ledger totals frozen at the close, so a reviewer can inspect the recorded close and the revisions attached to it.

### Can I review investor statements before publishing a run?

Yes. Statement runs group generation, review and publication. Each account has its own result, allowing the team to inspect a failed item and review the generated statements before publishing the run.

## Related Accounting Pages

- [Fund of Funds Accounting](https://1494labs.com/fund-of-funds-accounting/)

- [Capital Call and Distribution Software](https://1494labs.com/capital-call-and-distribution-software/)

- [Liquidity Forecasting and Commitment Pacing](https://1494labs.com/liquidity-forecasting-and-commitment-pacing/)

- [Fund Accounting Glossary](https://1494labs.com/glossary/)

- [Capabilities and Status](https://1494labs.com/capabilities/)

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
