Source: https://1494labs.com/notes/which-columns-can-be-added/

# Which columns can be added, and which cannot

A subtotal that is wrong looks exactly like a subtotal that is right. Every
reporting tool will happily add a column of percentages, and the resulting number is meaningless.

Reporting · roughly 5 minutes

## Four classes, three behaviors

Whether a column can be aggregated is a property of the column itself, whatever grid it sits in. The same table routinely contains columns from
three of these classes at once.

| Class | Examples | Across entities, one date | Across dates |
| --- | --- | --- | --- |
| **Flows** | Contributions, distributions, fees charged, realized gains | Add | Add |
| **Point-in-time balances** | NAV, cash, unfunded commitment, position value | Add | **Never** |
| **Rates and per-unit values** | NAV per share, price, fee rate, ownership percentage | **Never** | **Never** |
| **Derived statistics** | IRR, time-weighted return, volatility, Sharpe | Recomputed from the combined series | |

A grid of capital accounts will carry contributions, a closing balance and
an ownership percentage side by side. One of those three sums down the
page, one sums across entities but not across periods, and one never sums at
all. A tool that treats a column as a column gets two of them wrong.

![Subscriptions grouped by investor. Six investors each show a summed subtotal that foots to the $20,600,000 total, and one group is expanded to its three subscriptions with date, account, amount and posted status.](https://1494labs.com/assets/screens/grid-grouped-subtotals.314567a9.jpg)

**Grouped in place, with the rows still underneath.**
Subscriptions grouped by investor. The six subtotals foot to the $20,600,000 total above them, and the expanded group shows the three subscriptions that produce $4,800,000. Amount is a flow, so it sums; had a rate or a percentage been
on this grid it would have gone blank at the group level.

## An average of averages, in money

A fund has two share classes. Class A holds $80m at a 1.0% management fee;
Class B holds $20m at 2.0%. What is the fund's management fee rate?

| Method | Rate | Implied annual fee on $100m |
| --- | --- | --- |
| Average of the two class rates | 1.50% | $1,500,000 |
| Weighted by the capital each rate applies to | 1.20% | $1,200,000 |

$300,000 a year, and the wrong figure is the one a grid produces by default,
because averaging is what a column of percentages invites. The error also
moves with the mix, so it cannot be spotted as a constant bias: rebalance
the classes and the gap changes size without anything on screen changing
appearance.

The same trap sits one level deeper. A weighted average computed at a
subtotal must run over the individual rows beneath it. Averaging subtotals that are themselves averages compounds the
error at every level, and a deep grouping tree can be wrong by a great deal
more than this example.

## The denominator that should not move

A holdings grid shows each position as a percentage of fund NAV. The fund is
$100m: $60m of equities, $40m of credit. Group the grid by asset class and
the percentage column has to decide what it is a percentage of.

| | Equities | Credit | Total |
| --- | --- | --- | --- |
| Denominator stays fund NAV | 60% | 40% | 100% |
| Denominator becomes the group | 100% | 100% | 200% |

The second row is what a grid does if the percentage is treated as an
ordinary computed column, and it is worth noticing that it does not look
broken. Each group reads 100%, which is a plausible thing for a group to
read. Only the total gives it away, and totals of percentage columns are
frequently hidden precisely because they look odd.

For this to work the grid has to know that the denominator is external to
the rows on screen. That is a different kind of thing from a column of values, and most
reporting tools have nowhere to put it.

## Balances do not sum across time

Group a capital-account grid by month and the closing balance column will
offer a total. Twelve monthly NAVs added together is twelve times the
average NAV, a number with no referent: the fund never held it, and it is
not a cash flow either.

Contributions in the next column over do sum across those same twelve
months, correctly, because a flow is a quantity of money that moved. So the rule has to attach to the column itself.
A balance column under a date grouping should go blank at and above the date
level, while the flow column beside it keeps totaling.

## Statistics have no shortcut

A group's volatility is the volatility of the group's composite return
series. Averaging the members' volatilities gets it
wrong under any weighting, because the members' returns are correlated and the statistic
depends on that correlation. The same holds for Sharpe, beta and tracking
error. A group's IRR is the IRR of the combined cash flow stream, so it needs the members' cash flows themselves.

So the honest answer at a subtotal is either the recomputed statistic or
nothing. If the composite series has not been built, there is no correct
number available, and any figure in that cell is invented.

## Blank, with a reason, is an answer

The whole argument

An empty cell looks like something failed. A computed cell that should
have been empty looks like it worked. The second one is the expensive
mistake, and it is the one that reaches an investor, because nothing about
it invites a second look.

A cell that cannot be computed honestly should say so, and say why: no
composite series, denominator not resolvable at this level, not additive
across dates. That turns a silent wrong answer into a visible limitation,
which is a thing a controller can work with.

## What to check

- ✓**Can you total a NAV-per-share column?**
If the tool permits it, someone will do it eventually, and the first time
it matters will be in front of somebody's investor.

- ✓**Under grouping, does a percentage keep its denominator?**
Group a holdings view by anything and look at the total.

- ✓**Does a balance column blank out on a date axis**
while the flow column beside it keeps summing?

- ✓**What appears when a subtotal cannot be computed?**
A zero is the worst possible answer, because zero is a value.

- ✓**What survives an export?**
Every one of these rules is enforced by the grid. A spreadsheet has no
idea which column is which, and will add all of them on request. If the
analysis only exists after an export, none of this protects it.

- [A wrong number that agrees with itself](https://1494labs.com/notes/a-wrong-number-that-agrees-with-itself/), when the total ties and is still wrong

- [ABOR and IBOR](https://1494labs.com/notes/abor-and-ibor/), two books that group the same positions differently

- [For administrators](https://1494labs.com/fund-administration-software/), many clients on one platform

- [Statements and reporting](https://docs.1494labs.com/guide/statements-and-reporting/) in the product docs

- [All notes](https://1494labs.com/notes/)

## How we handle it

In 1494 Labs each column carries its own rule for how it adds up, each
percentage keeps its denominator through any grouping, and a subtotal that cannot be computed honestly renders blank with its reason. A saved analysis has its own address, so the cut a controller builds on
screen can also be pulled by another system through the API, with the
rules still applied.

[Get in touch](https://1494labs.com/#contact)
