Source: https://1494labs.com/notes/abor-and-ibor/

# ABOR and IBOR, and why most systems keep them apart

Two books, two clocks, and a reconciliation between them that nobody wants to
own. The split is a historical accident that hardened into an architecture, and
it is worth understanding before you buy a system that assumes it.

Fund accounting · roughly 6 minutes

## Accounting and Investment Books

The **accounting book of record** is the official set of books. It
is what the auditor examines, what the administrator calculates NAV from, and what
the financial statements are built on. It follows an accounting basis, respects
period boundaries, and is deliberately conservative about recognizing things
that have not happened yet.

The **investment book of record** is the position view the
investment team works from. It answers a different question: what do we own
right now, including the trade executed twenty minutes ago that will not settle
until Wednesday, and the corporate action that has been announced but not paid.

Both are correct. They disagree because they answer different questions on different clocks,
and that disagreement is expected. The trouble is what most firms have to
do about it.

## Why they diverge

Four sources of difference account for nearly all of it.

Where the two books part company

| Dimension | Accounting book | Investment book |
| --- | --- | --- |
| **Clock** | Period-bounded, closed and locked | Continuous, intraday |
| **Recognition** | Trade date or settlement date, per policy, applied consistently | Everything known, including unsettled and pending |
| **Valuation** | Accounting basis, with a documented pricing hierarchy | Live or last marks, whatever is freshest |
| **Audience** | Auditors, administrators, LPs, regulators | Portfolio managers, risk, trading |

Say you buy a position on Monday, settling Wednesday, and the month ends
Tuesday.

The investment book shows the position on Monday, because you own the economic
exposure from the moment the trade is executed. The accounting book shows it on
Monday too if your policy is trade date, or on Wednesday if it is settlement
date, which means the position falls in the following month and the month-end
statements do not include it. Both answers are defensible under the right policy, because they answer
different questions.

## Why the split became architectural

The reason is historical, which is what makes it worth questioning.

Accounting systems were built for periodic close. They ran in batches, were designed around a monthly cycle, and optimized for producing a defensible
answer slowly. That was the right design when the alternative was paper.

Front offices needed something the accounting system could not give them: a
position view current as of this morning. So
a second system grew up beside the first, fed by the same trade files, keeping
its own version of the truth.

Once two systems hold overlapping data, a third thing appears whether anyone
designed it or not: **the reconciliation between them**. And
because that reconciliation is genuinely hard, an industry grew around it. Several
vendors now sell the reconciliation itself, which makes the split a source of
revenue for the people best placed to remove it.

The tell

If a platform sells you a reconciliation module between its own accounting
and its own position data, you are being sold a bridge between two
systems that arrived in one invoice.

## What the split actually costs

### A break list that never reaches zero

Every operations team that runs this architecture has a break list, and the
break list is never empty. Some breaks are real and matter. Most are timing
differences that will resolve themselves in two days. The expensive part is that
**a genuine problem sits in that list beside forty that will clear
themselves**, and people stop reading a list that has cried wolf for
six months.

### You cannot answer the obvious question

"What is our NAV right now?" is a reasonable question and, in a two-system
architecture, an unanswerable one. The accounting book knows as of the last
close. The investment book knows positions but not the accounting treatment.
Producing a current number means a person assembling it, which means it arrives
late and carries no assurance.

### Nobody can say which one is right

This is the corrosive one. When the two books disagree by a material amount and
the answer is needed today, someone has to adjudicate. That person is usually
the most senior operations person available, and their judgment is not
auditable. Over time the organization learns which book to trust for which
question, and that knowledge lives only in people's heads.

## The alternative, and what it actually requires

The alternative is to stop treating them as two books and start treating them
as **two views of one event stream**. Every economic event is
recorded once. Trade date and settlement date become two views of the same journal entries. The accounting view applies
period boundaries and recognition policy; the investment view does not. Neither
holds data the other lacks.

Under that design there is only one record, so there is no reconciliation
to automate. When a vendor says "our reconciliation is very good", it is
describing two books, and you should know which of the two designs you
are being shown.

It is also harder to build, for four reasons.

- **Every event must create its journal entry in one place.** The
moment any part of the system records a position without a journal entry, you have two books
again and you will not notice for a month.

- **The detail on each entry has to be rich enough for both audiences.**
Entity, fund, class, series, sleeve, currency, counterparty, custodian. If
the accounting model is thinner than the investment model, the investment
view has to be rebuilt somewhere else, and you are back where you started.

- **Close has to lock the period without stopping current work.** A
closed period must stay fixed for reporting while the current view keeps moving. Getting this
wrong in the safe direction gives you a system nobody can use intraday.

- **The agreement needs continuous proof.** If the two views are designed to agree, that agreement should still be
checked continuously, because designs fail quietly.

![A Statement of Changes in Partners' Capital, with beginning capital, contributions, allocations and ending capital.](https://1494labs.com/assets/screens/statement-of-changes.39e06e66.jpg)

**What one book looks like from the accounting side.**
This statement comes from the same journal entries the position and
exposure screens use, which is why its ending capital ties to the fund's
NAV to the cent. There is no extract between them to go stale.

## Four questions for a vendor

If you are evaluating platforms, these separate the architectures faster than a
feature matrix will.

1. **Where does the reconciliation between your accounting and position
data live?** If there is one, they are two systems. That may still be
the right purchase, but you should know what you are buying.

2. **When the two disagree, which one is authoritative, and who decides?**
A good answer names a rule. A bad answer names a person.

3. **Can you produce a NAV as of right now?**
Ask to see it done in the demo.

4. **What checks that the books are internally consistent, and how often
does it run?** "Our architecture guarantees it" is an assertion.
"These checks run every morning and here is today's output" is evidence.

A caveat worth stating

One ledger is not automatically the right answer for every firm. If your
accounting is genuinely simple and your investment process is genuinely
complex, or the reverse, two specialized systems and a small reconciliation
may cost less than migrating. The argument here is that the split should be a decision you made. Too
often it is an architecture inherited because that is how the software
was sold in 1998.

- [What an opening balance has to carry](https://1494labs.com/notes/what-an-opening-balance-has-to-carry/), if you are moving between the two architectures

- [Which columns can be added, and which cannot](https://1494labs.com/notes/which-columns-can-be-added/), once both books are one table

- [What one ledger looks like in practice](https://1494labs.com/fund-accounting-software/)

- [Securities and positions](https://docs.1494labs.com/guide/securities-and-positions/) in the product docs: lots, prices and corporate actions

## How we think about this

1494 Labs is built on the second model: the accounting book of record and the
investment book of record are views over one ledger, and the arithmetic is
re-checked every morning.

[Request a demo](https://1494labs.com/#contact)
