Source: https://1494labs.com/fund-accounting-api-and-ai/

# Fund Accounting API and AI

For fund managers, allocators and administrators connecting their book to other systems and AI assistants.

## Accounting Records and Notice Endpoints

- Capital call notices are available as PDFs through the API. The notice carries the investor's amount, due date and wire instructions from approved bank details, for the accounting team's call-notice process.

- Distribution notices are available as PDFs through the API. Each notice belongs to a recorded distribution and provides the investor-facing document for that cash event.

- Journal Entries shows the postings created by accounting transactions. Each journal entry retains its source type and source identifier. The entry detail displays the accounting lines and the recorded transaction source.

- Investor statements show opening capital, contributions, distributions, allocated income and expenses, fees and ending capital. The statement draws these amounts from the investor's recorded account and the fund's reporting period.

## AI Document Reading

- Fund documents read into records for review. Capital calls, distribution and redemption notices, capital account statements, vendor invoices, custodian statements, valuation memos, property appraisals, and contribution and commitment letters. Every amount and date carries a quote from the document, checked against the document's own text.

- Fee, waterfall and carry terms read from LPAs and side letters. Each term is quoted from the agreement; you settle conflicts between documents and apply each term yourself.

- Your spreadsheets and exports mapped to the book's fields. A value is accepted only when it matches a code the fund already uses; anything else waits for your decision.

- Suggested explanations for reconciliation differences. A suggestion that refers to a row it was not shown is held back and cannot be approved.

- Documents by email. Forward documents to your workspace's own address; mail from a sender you have not approved is held for you; attachments go through the same reading and review.

## Terms

Public API refers to programmatic access to accounting records. MCP connects AI assistants to tools and data. The accounting endpoints listed here cover notice PDFs, journal sources and investor statements. AI document reading turns a PDF, photo or spreadsheet into records staged for review.

## Questions

### Can I retrieve a capital call notice through the API?

Yes. The capital call notice endpoint returns a PDF with the investor's amount, due date and wire instructions. Wire instructions come from approved bank details. The notice is retrieved through the API.

### Can I retrieve an investor distribution notice?

Yes. The distribution notice endpoint returns the PDF for a recorded distribution. It provides the investor-facing notice for that distribution through the API.

### Can I identify the transaction behind a journal entry?

Yes. Each journal entry records a source type and source identifier. Journal Entries displays the posting detail and source label; underlying distribution entries also have a direct link to the source transaction.

### Can an investor statement show flows, fees and ending capital?

Yes. The capital account statement includes opening capital, contributions, distributions, allocated income and expense, fees and ending capital. It records the period's movement for the investor account and its closing balance.

### Does AI post to the ledger?

No. Records are staged and a person accepts them before they post; AI is off until an administrator turns it on.

### Which documents can it read?

Capital calls, distribution and redemption notices, capital account statements, vendor invoices, custodian statements, valuation memos, property appraisals, and contribution and commitment letters. K-1s and quarterly reports are read and kept with the document only.

## Related Accounting Pages

- [Connect an assistant](https://1494labs.com/connect-assistant/)

- [Fund of Funds Accounting](https://1494labs.com/fund-of-funds-accounting/)

- [Capital Call and Distribution Software](https://1494labs.com/capital-call-and-distribution-software/)

- [Liquidity Forecasting and Commitment Pacing](https://1494labs.com/liquidity-forecasting-and-commitment-pacing/)

- [Fund Accounting Glossary](https://1494labs.com/glossary/)

- [Capabilities and Status](https://1494labs.com/capabilities/)

## Request a Demo

Tell us which funds, structures and accounting terms you need to review.

[Request a demo](https://1494labs.com/?segment=other#contact)
