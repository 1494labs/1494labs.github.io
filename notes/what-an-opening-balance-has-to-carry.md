Source: https://1494labs.com/notes/what-an-opening-balance-has-to-carry/

# What an opening balance has to carry

A trial balance tells you where a fund stands. It does not tell you enough to
compute what happens next, because the calculations that matter carry history forward, and the history
they need is not on any document you can request from a custodian.

Conversion · roughly 5 minutes

## Standing still versus carrying on

A conversion is usually scoped as loading balances: cash, positions,
receivables, payables, capital. That work is real, and it is the easy part. Balances describe a fund at rest. The question a new system has to
answer on its first working day is the other one, which is what happens
next, and several of the calculations that answer it depend on things that
already happened.

## What the next calculation needs

State required to compute the first post-conversion period

| The next thing you compute | What it needs from before the cut | In a trial balance? |
| --- | --- | --- |
| Incentive fee | High-water mark and loss carryforward, per investor or series | No |
| Incentive fee for a mid-period subscriber | That investor's equalization position | No |
| Realized gain on the next sale | Cost basis by lot, and the cost-flow convention that picks between them | No |
| An investor's capital account | Per-investor contributions, distributions and allocated profit to date | The fund total only |
| Where the next distribution falls | Distributed to date and carry paid to date, cumulatively | No |
| Uncalled commitment | Called, plus whatever has been distributed subject to recall | No |
| The performance record | The return series and the dates it was calculated on | No |

## Fee history is the part that gets left behind

Positions and cash are physical. Somebody can pull a custody statement and
check them, and if they are wrong it shows up immediately and loudly.

Fee history is different in kind. A high-water mark is a memory of
something that already happened. There is no counterparty holding a copy, no
statement to reconcile against, and no external document that records it. It
exists inside the system being switched off.

That makes it the most likely thing to be dropped and the least likely to be
noticed. A fund converted without its marks reconciles perfectly on day one
and stays perfect until the first incentive calculation, which will be wrong
by an amount nobody can reconstruct, because the evidence needed to
reconstruct it was in the system that has since been decommissioned.

Ask early

Whether the outgoing system can export marks, loss carryforwards and
equalization positions per investor is worth establishing before a migration date is agreed. If the answer is no, that is a
constraint on the whole project, and it is cheaper to discover in a
meeting than in a fee run.

## Closed-end funds: the waterfall is path-dependent

For a drawdown fund the tiers are measured cumulatively across the life of
the fund. What the next distribution pays depends entirely on what has
already been paid: whether capital is back, whether the preferred return has
been satisfied, whether the manager is still in catch-up.

A fund converted with a balance sheet and a commitment schedule has no
position in that sequence at all. It cannot say which tier the next dollar
belongs to, and the first distribution after the cut will be computed from
the beginning of a waterfall that is already years in.

Uncalled commitment has the same shape. It is commitment minus called, plus any distributions made subject to
recall, and whether a given distribution was recallable is a term in the
agreement that the cash movement does not carry.

## Two different things called history

Prior periods can come across in one of two ways, and they are routinely
conflated in the same sentence.

| | Reporting-only | Rebuilt |
| --- | --- | --- |
| What arrives | The results: balances, statements, capital accounts as reported | The underlying activity, transaction by transaction |
| What you can do | Display it, print it, answer "show me last year" | Re-run an allocation, restate a period, change an assumption |
| What it needs | The old system's output | The old system's inputs, in usable form |
| Typical cost | Part of the conversion | A project of its own, and often not possible |

Reporting-only is an honest and usually correct answer. The failure is
buying it while expecting the other one, and then discovering the difference
during an audit. Pre-conversion periods should be marked as what they are,
so that a reporting-only period cannot be mistaken for one that would recompute if
you asked it to.

## The test that settles it

Before the old system is switched off, run the first post-conversion period
on both and compare. Three specific comparisons are worth more than a
reconciliation of totals:

- ✓**The incentive fee, per investor.**
A fund total can be right while two investors are
wrong in opposite directions, and that is exactly what a missing mark
looks like.

- ✓**One realized sale.**
This tests that lots and the cost-flow convention came across along with the position's market value.

- ✓**One distribution, on a closed-end fund.**
This tests that the fund knows where it stands in its own waterfall.

If that comparison cannot be run because the old system is already gone, the fund was only re-keyed, and the first calculation that
depends on history will be the one that finds out.

## What to ask a vendor

- ✓**Is there a conversion date built into the fund record**,
or does every fund have to start at inception?

- ✓**Where does a high-water mark go in?**
If there is no field for it, it is being reverse-engineered from a
transaction history you do not have.

- ✓**Are pre-conversion periods marked**,
or do they present exactly like periods the system computed itself?

- ✓**What happens when an error is found in a pre-conversion period?**
There is a right answer, which is that it is corrected as a restatement
with the original preserved, and a wrong one, which is that somebody edits the reported figures.

- [High-water marks and the partial redemption](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/), the state most likely to be missing

- [What the platform does](https://1494labs.com/fund-accounting-software/), including conversion-mode onboarding

- [Bringing data in](https://docs.1494labs.com/guide/bringing-data-in/) in the product docs: carrying high-water marks through a conversion

## How we handle it

1494 Labs models a conversion date on the fund. Periods before it are locked from the start and marked pre-conversion, so a
reporting-only period can never be mistaken for a computed one, and the
opening position carries fee history alongside the balances. Converting an existing book is quoted separately from
the subscription, and it is free for the first five early adopters.

[Request a demo](https://1494labs.com/#contact)
