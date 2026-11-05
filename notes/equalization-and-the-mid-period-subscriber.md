Source: https://1494labs.com/notes/equalization-and-the-mid-period-subscriber/

# Equalization, and what a mid-period subscriber actually owes

An investor who subscribes after a drawdown can ride the recovery without
paying an incentive fee, because the loss being carried forward is somebody
else's. It is the normal consequence of running one
NAV per share, and there are only two ways out of it.

Hedge Funds · roughly 6 minutes

## The problem in one sentence

An incentive fee is charged on profit above a high-water mark. The mark
belongs to an investor, because it records what that investor has already
been charged on. A NAV per share belongs to the fund. Run a fund long
enough and those two facts collide: two investors holding identical shares
have different marks, and no single NAV per share can be correct for both.

## The free ride, with the numbers

A fund launches at $100 a share with a 20% incentive fee over a high-water
mark. Investor A subscribes $1,000,000 and receives 10,000 shares.

Year one is bad. The fund loses 20% and the NAV per share ends at $80. No
incentive fee is payable, correctly, because the fund is below its mark.
The mark stays at $100 and the fund carries forward a loss of $20 a share.

In January of year two, Investor B subscribes $800,000 at $80 and receives
10,000 shares. Year two is good: the manager returns 25% and the NAV per
share is back to $100.

End of year two, one NAV per share and one fund-level mark

| Investor | Subscribed | Now worth | Gain | Incentive fee paid |
| --- | --- | --- | --- | --- |
| A, in at $100 | $1,000,000 | $1,000,000 | $0 | $0 |
| B, in at $80 | $800,000 | $1,000,000 | $200,000 | $0 |

A is whole and owes nothing, which is right. B has made $200,000 and paid
nothing, which is not. The fund is exactly at its high-water mark, so at the
fund level no fee is due, and B's gain is sheltered by a loss B never
suffered. At 20% the manager has foregone **$40,000**, having
returned 25% to the investor who did not pay it.

Who pays

Nothing in the fund's accounts is out of balance here. The money was simply never charged. This is why the problem survives audits and
surfaces years later, usually when a manager finally reconstructs why a
strong year earned so little.

## The mirror case: a rebate nobody paid for

The same defect runs the other way when an investor buys into an accrual.

A fund sits at its mark of $100 in January and rises to $120 gross by June.
The administrator books a 20% accrual of $4 a share, so the published NAV
is $116. Investor B subscribes in July at $116. By December the fund has
given it all back: gross is $100, the accrual reverses in full, and the
published NAV is $100.

A is flat on the year and pays nothing, which is right. B paid $116 and
holds $100, a loss of $16 a share, on a gross move that was $20 a share. B
has absorbed $4 a share less than the market delivered, because B captured
the reversal of an accrual booked on gains earned between January and June,
when B was not in the fund. That $4 came out of A's pocket.

## Series accounting

Give each subscription date its own series of shares, with its own NAV and
its own high-water mark. In the first example B enters a second series at
$80, carrying a mark of $80. A's mark stays at $100.

End of year two, under series accounting

| Series | Own mark | NAV before fee | Gain above mark | Fee at 20% |
| --- | --- | --- | --- | --- |
| 1, Investor A | $100 | $100 | $0 | $0 |
| 2, Investor B | $80 | $100 | $200,000 | $40,000 |

Both answers are now right, and neither investor subsidizes the other. The
cost is that the fund is no longer one book. A fund open for monthly
subscriptions creates twelve series in its first year, each needing its own
NAV, its own mark and its own fee calculation every period.

That count is usually managed by consolidating series into a lead series at
year end, once a series has crystallized and stands at its own mark. Series
still below their mark cannot be consolidated: they carry a loss
carryforward the lead series does not, and merging them would hand that
shelter to everyone. So the series that persist are precisely the ones
nobody wants to explain, and two investors a month apart will see different
NAVs per share for what they were sold as the same fund.

## Equalization, on a single NAV

The alternative keeps one NAV per share and corrects each investor
individually at subscription. Two situations, two corrections, running in
opposite directions.

What the correction has to undo

| Investor subscribes | Without a correction | The correction |
| --- | --- | --- |
| Below the fund's mark, while a loss is carried forward | Rides the recovery without paying, sheltered by someone else's loss | Charged on each investor's gain as the fund recovers, typically by redeeming shares from them |
| Above the mark mid-period, into an accrual already in the NAV | Captures a rebate if the accrual reverses, on a fee they never bore | Pays an additional amount alongside the subscription, returned to them to the extent the accrual reverses |

One NAV per share survives, and every investor pays on that investor's profit
measured from their own entry. What it costs is that an investor's economics
no longer live entirely in their share count. A per-investor adjustment
account has to be carried, applied on the right events and shown on a
statement, and it moves for reasons the NAV per share does not explain.

Terminology

These mechanisms travel under names that are not used consistently:
equalization credit, depreciation deposit, contingent redemption,
equalization factor. Two administrators will use the same word for
different mechanics, and the offering document will sometimes use a third.
When comparing two funds, compare the mechanism and run the same example
through each. The label tells you very little.

## The problem comes from issuing shares

Everything above is a consequence of issuing units. A fund that allocates profit to capital accounts never meets it. Each partner has an
account, each account carries its own high-water mark, and profit is allocated to each account directly. Two partners who joined two years apart have two different marks and
nothing has to reconcile them, because there is no single per-unit number
trying to be correct for both.

That is why a US onshore limited partnership generally has no equalization
mechanism at all, and why the topic is barely mentioned in partnership
accounting. The offshore company issuing shares has the opposite
constraint: it needs one dealing NAV per share, quoted to investors and used
for subscriptions and redemptions, and that single number is exactly what
cannot be right for everybody.

The awkward case is the structure that has both. A master-feeder with an
onshore partnership feeder and an offshore corporate feeder runs
capital-account mechanics on one side and share mechanics on the other,
against the same underlying book. The two feeders are not doing the same
arithmetic, they should not produce the same per-investor answer, and a
system that models only one of the two will quietly force the other into its
shape.

## What to check

- ✓**Is the high-water mark held per investor or per fund?**
One mark for the whole fund is the tell. It cannot be simultaneously
correct for two investors who entered at different levels, and no amount
of reporting on top will fix it.

- ✓**What happens on a partial redemption?**
A mark that is not reduced when half the money leaves shelters the
remainder against a loss it no longer carries. This has its own
arithmetic, covered in the note below.

- ✓**Does the statement show the adjustment?**
An equalization amount buried inside a NAV per share is an amount the
investor cannot check, and it is the line they will eventually ask about.

- ✓**What happens to the series count at year end?**
Ask which series consolidate, which cannot, and what the count looks like
in year three.

- [High-water marks and the partial redemption](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/), the same mark on the way out

- [Hedge fund accounting](https://1494labs.com/hedge-fund-accounting/), including series and crystallization

- [The investor lifecycle](https://docs.1494labs.com/guide/the-investor-lifecycle/) in the product docs: subscriptions, redemptions and transfers as ledger events

## How we handle it

1494 Labs carries the high-water mark per series and per capital account, and supports both models: series accounting with a separate series for each subscription period, and equalization on a single NAV. Which one a
fund uses is a setting on the fund, because the answer is in its offering document.

[Request a demo](https://1494labs.com/#contact)
