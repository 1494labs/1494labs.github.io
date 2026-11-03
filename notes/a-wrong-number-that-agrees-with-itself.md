Source: https://1494labs.com/notes/a-wrong-number-that-agrees-with-itself/

# A wrong number that agrees with itself

Cash reconciles against the custodian, positions against the administrator.
Both work by comparison, so both are quiet when a figure is wrong and
nothing else in the system holds a second copy of it to disagree.

Controls · roughly 6 minutes

## Where comparison controls stop

Most controls in fund accounting are comparisons: cash against the
custodian, positions against the administrator, the general ledger against
the sub-ledger. They find a great deal. All of them work the same way,
which is that they fire when two records of the same thing differ.

A management fee charged on the wrong base has no second record. Nor does
an allocation that split a period's profit on a stale ownership percentage,
or a high-water mark that was never reduced when an investor redeemed half
their holding. In each case the books balance, every statement foots, and
the investor's capital account is internally consistent. The money was either never charged or charged to the wrong person.

Why this class survives

An audit tests whether the books are consistent, and they are. These
errors tend to surface years later, when somebody rebuilds a fee from
first principles and finds it does not come out where it was booked.

## Doing the arithmetic a second time

A figure with no counterparty to check against has to be checked against
itself: derived again by a different route, from different inputs, and
compared. We do that to every fund on the platform each morning, before
anyone signs in.

Some of what is recomputed:

- ✓**Every capital account rolls forward.**
Opening, plus contributions and withdrawals, plus that account's share of
profit and loss, equals closing, to the penny, with no tolerance, for every account in every period.

- ✓**Ownership sums to one hundred percent**
exactly, with the rounding residual placed deliberately.

- ✓**The fees charged to investors add up to the fee the fund paid**,
side letters and differing rates included. If the parts do not sum to the
pool, one of the two figures is wrong.

- ✓**Every journal entry balances and the trial balance foots**,
checked daily.

- ✓**What a position is carried at agrees with the ledger's carrying value**
through every subscription, redemption and return of capital, so the two
cannot drift apart between valuations.

A failure opens an exception on the same worklist as a cash exception, carrying the
fund, the period, and the two figures that should have agreed.

## Every morning

An error found during the close is found under deadline, by the person with
least appetite for it, when the remaining options are poor. The same error
found on a Tuesday is an afternoon's work, which is most of the argument for running the checks daily.

They also do not sample. Every fund is recomputed every day, including the
ones with no activity, because an absence of activity is itself worth
testing: a fund that has quietly stopped receiving data looks the same as a
fund having a slow month until the quarter closes.

## Knowing whether a check actually ran

A check that never ran reports nothing. A check that ran and passed also
reports nothing. On a dashboard the two are indistinguishable, and the more
conditional a check is, the more often it is the first one.

A rule that applies only to funds with an incentive fee has nothing to
examine in a book that has none. It stays quiet, and so does a rule that ran
and found nothing wrong.

The distinction

A check that has never had anything to examine has not passed. Counting
it alongside the ones that did overstates what the system has actually
demonstrated.

So the morning run reports what was never exercised as well as what failed,
naming each check that no fund gave it anything to work on. Some of that is
expected, and it says so: a rule about converted funds has nothing to
report on a book containing none. The rest is genuinely untested, and it is listed as untested.

## Leaving a cell empty

The same rule applies in the reports. Where a figure cannot be computed honestly, the cell is empty and carries
its reason. A subtotal that would be
meaningless is omitted. A percentage that has lost its denominator does not
substitute one.

Somebody queries an empty cell. Nobody queries a number that looks
reasonable, which is how a wrong one ends up in an investor statement.

## What to ask any vendor

- ✓**Which figures are recomputed, and which are stored and read back?**
A figure computed once and read thereafter has nothing in the system able
to disagree with it.

- ✓**How often do the checks run, and across how many funds?**
At period end on a sample, or daily across all of them.

- ✓**Can you show me a check that did not run?**
If everything passes, ask how the system tells a pass from a check that
had nothing to examine.

- ✓**Where does a failure go?**
Ask whether it reaches a log or a worklist with an owner.

- [Which columns can be added, and which cannot](https://1494labs.com/notes/which-columns-can-be-added/), where the empty cell comes from

- [High-water marks and the partial redemption](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/), one error of this kind, in numbers

- [What the platform does](https://1494labs.com/fund-accounting-software/)

- [Cash and reconciliation](https://docs.1494labs.com/guide/cash-and-reconciliation/) in the product docs: how cash is matched against the ledger

## How we handle it

The checks are part of how the platform is built.
A rule is written as a statement that must hold for every fund, and it
runs against every fund from then on: daily, and again after every
release. It reports what was never exercised alongside what failed. The
most recent run before this note was published covered every fund on the
platform and came back clean.

[Get in touch](https://1494labs.com/#contact)
