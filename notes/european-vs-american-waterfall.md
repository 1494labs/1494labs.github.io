Source: https://1494labs.com/notes/european-vs-american-waterfall/

# American vs European waterfall on the same two deals

The difference is usually explained as "whole-of-fund versus deal-by-deal" and
then left there. Run the same two deals through both and the consequence shows
up as a specific number: six million dollars sitting in the wrong pocket.

Private equity · roughly 6 minutes

## The mechanism, briefly

Both structures distribute money through the same four tiers, in the same
order. What differs is *what the tiers are measured against*.

1. **Return of capital.** Investors get their contributions back.

2. **Preferred return.** Investors receive a hurdle, commonly 8%, before the manager participates in profit.

3. **Catch-up.** The manager receives most or all of the next dollars until it holds its full percentage of profit, typically 20%.

4. **Split.** Everything after that divides at the carry rate, commonly 80/20.

In a **European** waterfall, those tiers are measured across the
entire fund. No carry is paid until investors have received back
*all* contributed capital and their preferred return on it.

In an **American** waterfall, the tiers are measured deal by deal.
A profitable exit can pay carry while other investments are still outstanding,
and while the fund as a whole has returned nothing.

## The same fund, both ways

Take a fund of $100M in commitments, 20% carry over an 8% preferred return. It
makes two investments and incurs $20M of fees and expenses across its life.

The fund

| Item | Amount | Timing |
| --- | --- | --- |
| Deal A invested | $40M | Year 1 |
| Deal B invested | $40M | Year 1 |
| Fees and expenses | $20M | Across the life |
| Total contributed | $100M | |
| Deal A exits | $100M | Year 3 |
| Deal B exits | $20M | Year 5 |
| Total proceeds | $120M | |

Across the whole fund the arithmetic is simple. Investors put in $100M and
$120M comes back. **Total profit is $20M, so carry at 20% should be
$4M.** That figure is not in dispute under either structure. What
differs is when the manager gets paid, and what happens in between.

Simplification

The preferred return below is shown as a simple, non-compounding figure to
keep the mechanism visible. Real agreements specify compounding, the base it
accrues on, and whether it is charged on fees as well as investments. Those choices move the numbers; the shape of the result stays the same.

## American: the manager is paid in year 3

Deal A exits for $100M on $40M invested. Under a deal-by-deal waterfall, the
tiers run against *that deal*.

Year 3, Deal A proceeds of $100M

| Tier | To investors | To manager |
| --- | --- | --- |
| Return of Deal A capital | $40M | $0 |
| Preferred return on that capital | $10M | $0 |
| Remaining $50M, split 80/20 | $40M | $10M |
| Distributed | $90M | $10M |

The manager has now received **$10M of carry**, and on the evidence
available in year 3 that looks entirely earned. Deal A was excellent.

Then Deal B exits in year 5 for $20M against $40M invested. All $20M goes to
investors; there is no profit to share. The fund is over.

Final position, American waterfall

| Party | Contributed | Received | Net |
| --- | --- | --- | --- |
| Investors | $100M | $110M | $10M |
| Manager | $0 | $10M | $10M |

The manager took **half** of the fund's $20M profit, on a deal
structured to pay 20%. Investors are owed $6M back.

## European: the manager is paid in year 5

Same deals, same order, tiers measured across the fund.

Deal A exits for $100M in year 3. Investors have contributed $100M, so the
entire distribution returns capital. Capital is now repaid in full, but the
preferred return has not been satisfied and no profit has been recognized.
**The manager receives nothing.**

Deal B exits for $20M in year 5. Capital is already back, so this is the first
money available for the later tiers.

Year 5, remaining $20M

| Tier | To investors | To manager |
| --- | --- | --- |
| Preferred return | $16M | $0 |
| Catch-up to 20% of the $20M profit | $0 | $4M |
| Distributed | $16M | $4M |

Final position, European waterfall

| Party | Contributed | Received | Net |
| --- | --- | --- | --- |
| Investors | $100M | $116M | $16M |
| Manager | $0 | $4M | $4M |

$4M of carry on $20M of profit. Exactly 20%, arrived at without anyone
needing to give money back.

## The difference in one line

Same deals, same total proceeds

| | American | European |
| --- | --- | --- |
| Carry paid | $10M | $4M |
| Carry earned | $4M | $4M |
| Owed back | $6M | $0 |
| First payment | Year 3 | Year 5 |

The manager *earned* $4M under both. The American waterfall moved
**when it was paid**, and created a $6M
obligation that has to be honored years later.

## Which brings us to clawback

Every American waterfall carries a clawback provision requiring the manager to
return excess carry at the end of the fund. On paper this makes the two
structures equivalent. In practice it is the weakest part of the arrangement,
for reasons that have nothing to do with anyone's good faith.

- **The money was taxed on receipt.** Carry distributed in year 3
was income in year 3. Returning the gross amount in year 5 means the manager
repays money it never fully kept, unless the agreement provides for after-tax
clawback, which shifts the shortfall to investors.

- **Carry is distributed to individuals.** By year 5 some of those
people have left, retired, divorced, or died. The obligation may sit with the
management entity while the money sits with individuals, and collecting it is a governance problem.

- **It arrives at the worst moment.** A clawback is triggered by
the fund underperforming, which is the same condition under which the manager
is least able to pay.

The standard mitigations are worth knowing because they are negotiable.
**Escrow** holds back a percentage of each carry distribution,
often 20% to 30%, until the fund is wound up. **Interim clawback
tests** run the whole-fund calculation periodically through the fund's life, so an
overpayment surfaces in year 4, four years before the final test would find it.
**Guarantees** from individual principals make the obligation personal to the principals.

The accounting consequence

An American waterfall means every carry figure in your books is provisional
until the fund closes. A system that records carry as settled fact will report numbers it cannot
defend later. Carry belongs on the books as an accrual subject to a
whole-fund test, and interim clawback testing belongs in the ledger with it.

## Most funds are neither, exactly

The two-way split is a teaching device. Real agreements sit on a spectrum, and
the interesting terms are the ones that move a fund along it.

- **Deal-by-deal with a loss carryforward.** American in timing,
but realized losses on other investments must be recovered before carry is
paid. Removes much of the exposure in our example.

- **Deal-by-deal with return of all invested capital first.** Carry waits until every dollar deployed to date has come back, from every
deal including the ones still held.

- **Whole-of-fund with an early carry release.** European by
default, but permitting carry once coverage tests are met, such as remaining
holdings being valued at some multiple of unreturned capital.

- **Catch-up rates that are not 100%.** A 50% or 80% catch-up
changes the split materially and is easy to miss when reading quickly.

## What to check in the agreement

If you are modeling a fund and want to know which structure you actually have,
these determine it:

1. Are the tiers measured against the fund or against each investment?

2. Does the preferred return compound, and on what base? Does it accrue on fees as well as capital?

3. Is there a loss carryforward, and does it cover unrealized write-downs or only realized losses?

4. What is the catch-up rate, and is it 100%?

5. Is there an escrow, at what percentage, and when does it release?

6. Is clawback gross or after-tax, and is it guaranteed by individuals?

7. How often is the interim clawback test run?

Those seven answers reconstruct the waterfall. Everything else is detail
around them.

![A waterfall policy with four tiers - return of capital, accrued preferred, GP catch-up to 20 percent at 100 percent, split 80/20 - a clawback measurement per LP showing no exposure, and a posted distribution of $12,075,209.34: $9,300,000.00 returned as capital and $153,070.79 of GP carry.](https://1494labs.com/assets/screens/distribution-waterfall.446c8f15.jpg)
**The same seven answers, entered as tiers.** The split below is computed from them, and the GP's clawback exposure is measured beside the policy, per LP by default, so an interim test reads straight off the screen.

- [What an opening balance has to carry](https://1494labs.com/notes/what-an-opening-balance-has-to-carry/), including where a converted fund sits in its own waterfall

- [Private equity fund accounting](https://1494labs.com/private-equity-fund-accounting/), with the waterfall computed on the book

- [Capital calls and distributions](https://docs.1494labs.com/guide/capital-calls-and-distributions/) in the product docs: what happens when carry has to come back

- [GP economics](https://docs.1494labs.com/guide/gp-economics/) in the product docs: how carry is split among principals and how it vests

## How we think about this

1494 Labs models waterfalls as configurable tiers,
because the agreements we read are rarely either textbook case. Carry is held as an accrual subject to a whole-fund test.

[Request a demo](https://1494labs.com/#contact)
