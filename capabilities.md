Source: https://1494labs.com/capabilities/

# Fund Accounting Capabilities

38 capabilities for fund managers, allocators and fund administrators, with current status and accounting scope.

## Partnership and Investor Accounting

| Capability | Status |
| --- | --- |
| [Equalization](https://1494labs.com/notes/equalization-and-the-mid-period-subscriber/) or series accounting, chosen per fund | Shipped |
| Both the equalization-factor and series approaches, per fund. | |
| [High-water marks](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/) carried per investor | Shipped |
| The mark survives partial redemption, transfer and restatement | Shipped |
| Side pockets that split dealing NAV from total NAV | Shipped |
| Configurable [waterfall tiers](https://1494labs.com/notes/european-vs-american-waterfall/) | Shipped |
| Carry accrual, clawback and per-principal vesting | Shipped |
| Class-currency investor NAV | Shipped |
| Fund-of-funds look-through, on both ownership bases | Shipped |
| Share of the underlying fund needs a manager-reported size and is absent with a stated reason when they do not report one. | |
| Multi-level family-office ownership | Shipped |

## The ledger

| Capability | Status |
| --- | --- |
| Official and latest-knowledge books on one ledger, with the source of every line | Shipped |
| Each line can show how it would read under the other book, and the difference is exact because both figures come from the ledger itself. | |
| Multi-asset on one book | Shipped |
| Drawdown commitments, calls and distributions | Shipped |
| ILPA call/distribution notices and line-item codes | Shipped |
| RIC and BDC operations | Shipped |
| Multi-currency billing with the rate stamped at both ends | Shipped |
| Frozen trial balance at close, with graded revisions | Shipped |
| Credit facilities on both sides: the fund's own borrowing lines and the loans it makes | Shipped |
| Subscription lines and asset-based lines carry a borrowing base, draws, repayments and interest. Loans the fund makes carry their terms, servicing events and cash receipts. | |
| Form PF and Form ADV Schedule D answers derived from the book | Shipped |
| Each answer cites the rows it came from, and a missing input shows as an explicit gap. Exported for a compliance vendor or prepared for filing. | |
| Form PF inputs the ledger does not hold, entered on review screens and signed | Shipped |
| Portfolio-company financials, valuation procedures, beneficial owners and related persons are entered on review screens, drafted from the book where it has the answer, and signed. A correction adds a new signature and keeps the earlier one. Beneficial owners come from the investor's KYC record. | |

## Structures, Portfolio Companies and Forecasting

| Capability | Status |
| --- | --- |
| Blocker tax accrued at the entity and carried to each investor behind it | In progress |
| Secondaries and strip sale accounting | Shipped |
| Portfolio-company financials and KPI collection | Shipped |
| Liquidity projection and available undrawn credit | Shipped |
| Commitment pacing and cash-flow forecasts | Shipped |

## How you get at it

| Capability | Status |
| --- | --- |
| An LP-facing investor portal | Shipped |
| Investors sign in to view and download documents made available to them. | |
| Everything you can do on screen, available through the public API | Shipped |
| Saved analyses that refresh on the platform and can be pulled by other systems through the API | Shipped |
| [AI assistants can read the book through MCP](https://1494labs.com/connect-assistant/), the standard connector for AI tools | Shipped |
| Fund documents read into records for review | Shipped |
| Capital calls, distribution and redemption notices, capital account statements, vendor invoices, custodian statements, valuation memos, property appraisals, and contribution and commitment letters. Every amount and date carries a quote from the document, checked against the document's own text. | |
| Nothing AI-derived posts without a person confirming it. AI is off until your administrator turns it on, and you can use your own model provider key. | |
| Fee, waterfall and carry terms read from LPAs and side letters | Shipped |
| Each term is quoted from the agreement; you settle conflicts between documents and apply each term yourself. | |
| Your spreadsheets and exports mapped to the book's fields | Shipped |
| A value is accepted only when it matches a code the fund already uses; anything else waits for your decision. | |
| Suggested explanations for reconciliation differences | Shipped |
| A suggestion that refers to a row it was not shown is held back and cannot be approved. | |
| Documents by email | Shipped |
| Forward documents to your workspace's own address; mail from a sender you have not approved is held for you; attachments go through the same reading and review. | |
| K-1s and manager quarterly reports | In progress |
| Read and kept with the document today; they do not yet create records. | |
| A daily check that recomputes the arithmetic on every fund on the platform | Shipped |
| Capital accounts against the ledger, allocations against the pool, cash movements against the entries that produced them. | |
| Internal exceptions: a worklist, aging, and an accept-with-a-note decision | Shipped |
| An exception names the fund, the period and the amount. The check proves the book agrees with itself. Whether a price was right is a separate question, answered by checking against a custodian's numbers. | |
| External exceptions: cash against an imported bank statement, positions against a custodian's file | Shipped |
| A statement's lines auto-match the book only when exactly one movement fits; anything else is left for a person, and what is left over raises an exception on the same worklist as the internal ones. | |
| External exceptions: NAV against an outside administrator's file | Shipped |
| The Shadow tab ties an administrator's pack (fund and class NAV, capital accounts, trial balance, cash, positions, fees) to the book from CSV or XLSX, remembers each administrator's column layout, and raises every difference on the same exceptions worklist. | |

## Related Accounting Pages

- [Family office accounting software](https://1494labs.com/family-office-accounting/)

- [Look-through consolidation for family offices](https://1494labs.com/family-office-consolidation/)

- [Distribution waterfall software](https://1494labs.com/distribution-waterfall-software/)

- [Fund of funds accounting software](https://1494labs.com/fund-of-funds-accounting/)

- [Investment accounting for endowments and foundations](https://1494labs.com/endowment-foundation-accounting/)

- [Registered fund accounting software](https://1494labs.com/registered-fund-accounting/)

- [Real estate fund accounting software](https://1494labs.com/real-estate-fund-accounting/)

- [REIT accounting software](https://1494labs.com/reit-accounting-software/)
