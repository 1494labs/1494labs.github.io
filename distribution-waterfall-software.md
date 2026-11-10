Source: https://1494labs.com/distribution-waterfall-software/

# Distribution waterfalls configured from the agreement

The waterfall decides how every distribution splits between limited partners and the GP. It is also where fund accounting most often moves into a spreadsheet, because the system's version of the waterfall is a dropdown and the agreement's version is four pages of defined terms.

Private equity · roughly 6 minutes

## Seven answers define a waterfall

Most waterfall settings offer "European" and "American" and stop there. The agreements we read are usually somewhere in between. These seven questions reconstruct almost any of them:

1. Are the tiers measured against the fund or against each investment?

2. Does the preferred return compound, and on what base? Does it accrue on fees as well as capital?

3. Is there a loss carryforward, and does it cover unrealized write-downs or only realized losses?

4. What is the catch-up rate, and is it 100%?

5. Is there an escrow, at what percentage, and when does it release?

6. Is clawback gross or after-tax, and is it guaranteed by individuals?

7. How often is the interim clawback test run?

A waterfall here is an ordered set of tiers, each with its own parameters, and the answers go straight into them. The two named conventions are starting configurations you then edit. Every field is chosen from a fixed list of options with a stated meaning, so there is no formula to get wrong.

## Test the terms before they govern money

The builder has a sample calculation beside it. Type in hypothetical distributions and it runs them through the same calculation the fund will use, as you edit. It's the quickest way to find out what an 80% catch-up does to the GP's share before it applies to anybody's money.

![The waterfall builder: a named set of conventions, a stack of tiers with carry and catch-up rates, and a sample calculation panel computing preferred accrued of $46,932,807.68 and a catch-up band from hypothetical distributions.](https://1494labs.com/assets/screens/waterfall-worked-example.957ef3d5.jpg)

**The terms, tested before they are terms.** The panel computes accrued preferred and the catch-up band from hypothetical cash, using the policy as it currently stands.

## One distribution, through four tiers

The reference fund's policy has four tiers: return of capital, accrued preferred at 8% net of returned capital, a GP catch-up to 20% at a 100% rate, then an 80/20 split, measured whole-of-fund.

A distribution of $12,075,209.34 runs through it. $9,300,000.00 goes back to the limited partners as capital, and $153,070.79 goes to the GP as carry. Each limited partner's share posts to their capital account, and the distribution carries ILPA component codes from the moment it is posted.

![A waterfall policy with four tiers, a clawback measurement per LP showing no exposure, and a posted distribution of $12,075,209.34: $9,300,000.00 returned as capital and $153,070.79 of GP carry.](https://1494labs.com/assets/screens/distribution-waterfall.446c8f15.jpg)

**The posted distribution, with clawback exposure beside the policy.** Exposure is measured per LP by default.

## Carry stays provisional until the fund proves it

Carry paid early can turn out to be overpaid. On the same two deals, an American waterfall can pay a GP $10m of carry in year 3 that the fund, measured whole, only ever earned $4m of. [That example is worked through in full here](https://1494labs.com/notes/european-vs-american-waterfall/).

So carry is held as an accrual subject to the whole-fund test, and clawback exposure is a figure the ledger already carries. An interim clawback test reads straight off the screen at any period end, which means an overpayment shows up in the year it happens.

## Who the carry belongs to

Once carry reaches the GP, it is split among the principals, and each principal's share vests per principal. LP givebacks are recorded alongside clawback. [GP economics in the product docs](https://docs.1494labs.com/guide/gp-economics/) covers how the split and the vesting work.

## Related reading

- [American vs European waterfall on the same two deals](https://1494labs.com/notes/european-vs-american-waterfall/)

- [Private equity fund accounting](https://1494labs.com/private-equity-fund-accounting/)

- [Capital calls and distributions](https://1494labs.com/capital-call-and-distribution-software/)

- [What an opening balance has to carry](https://1494labs.com/notes/what-an-opening-balance-has-to-carry/), for a fund moving systems partway through its waterfall

- [GP economics](https://docs.1494labs.com/guide/gp-economics/) in the product docs

## Show us the waterfall that breaks your current system

Send us the distribution section of the agreement. We will configure it in front of you and run your last distribution through it, or stand up a sandbox with reference funds for you to try it yourself.

[Request a demo](https://1494labs.com/?segment=pevc#contact)
