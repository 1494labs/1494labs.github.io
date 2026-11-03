Source: https://1494labs.com/notes/high-water-marks-and-partial-redemptions/

# High-water marks and the partial redemption

A high-water mark is easy to get right while nothing moves. The mistakes
happen on the way out: a partial redemption that leaves a stale loss
carryforward behind, and a full redemption that walks past an accrued fee.
Neither one breaks anything that would tell you.

Fees · roughly 4 minutes

## The mark is a level, and it belongs to the holder

A high-water mark records the highest value on which an investor has
already been charged an incentive fee. Above it, profit is new and
chargeable. Below it, the shortfall is a loss carried forward, and the
manager works back through it for nothing.

The mark therefore belongs to a holder, and it is attached
to a quantity of shares. That second half is the part that gets lost: change
the quantity and the mark has to change with it.

## What a partial redemption has to do

An investor holds 10,000 shares. The mark is $100 a share and the NAV has
fallen to $80, so $200,000 of loss is carried forward. The investor redeems
5,000 shares at $80, taking out $400,000, and leaves 5,000 shares behind.

The fund then recovers to $120 a share. Here is the same position under two
treatments of that carryforward.

5,000 remaining shares, $80 to $120

| | Carryforward left | Gain on the remainder | Chargeable | Fee at 20% |
| --- | --- | --- | --- | --- |
| Carryforward left untouched | $200,000 | $200,000 | $0 | $0 |
| Carryforward released pro rata | $100,000 | $200,000 | $100,000 | $20,000 |

The second line is the right one, and it is easy to prove without reference
to any carryforward at all. The remaining 5,000 shares went from a mark of
$100 to a NAV of $120. That is $20 a share of genuinely new profit, $100,000,
and 20% of it is $20,000.

The first line shelters that profit behind a loss the investor took half of
out of the fund in cash. Redeeming released half the shares, and the loss
attached to them left with them.

Why it survives

Nothing fails in the first line. The trial balance foots, the capital
accounts tie, the NAV is right, and the investor's statement is correct in
every figure it shows. The fee is simply smaller than it should be, and
there is no number anywhere that it disagrees with.

Note also the direction. The error never runs the other way. Skipping the
proration always shelters profit, which always favors the investor and
always costs the manager. An error with a consistent sign accumulates period after period, and it recurs every time an investor trims a position
during a drawdown.

## The other direction: redeeming above the mark

The same investor, but the fund is at $120 against a mark of $100 and an
incentive fee is accruing. On 10,000 shares the accrual attributable to them
is 20% of $20 a share, or $40,000.

They redeem in full at $120. If the fee is only settled at period end, they
leave with $1,200,000 and the accrual they generated reverses across the
investors who stayed. The fee has to **crystallize at the redemption
date**: $40,000 is charged then, and the investor receives $1,160,000.

On a partial redemption the same thing happens proportionally. Redeem 40% and
40% of the accrual crystallizes, $16,000, while the remaining 60% keeps its
mark of $100 and carries on accruing.

The ordering matters

Crystallize before setting the redemption price. A fee
calculated on a NAV that has already had the redemption taken out of it is
a fee on the wrong base, and the difference is not rounding.

## Transfers are not redemptions

When shares move between two investors, nothing has been realized and no
money has left the fund. The mark travels with the shares: the receiving
holder inherits it at the level the transferring holder carried, along with
any loss carried forward against them.

Treating a transfer as a redemption and a subscription resets the mark to the
current NAV. If the shares were underwater that quietly cancels a loss
carryforward the manager was still working through, and hands the incoming
holder a fee-free ride on the recovery.

## What to check

- ✓**Is the mark stored as a level or as an amount?**
A level per share prorates automatically when the share count changes. An
amount has to be adjusted explicitly on every partial redemption, and that
adjustment is what gets forgotten.

- ✓**Does a redemption crystallize, or wait for period end?**
Waiting means a departing investor's fee is paid by the investors who
stayed.

- ✓**Does a transfer carry the mark?**
Ask what happens to a loss carryforward when shares change hands.

- ✓**Can you produce the mark's history for one investor?**
Set at subscription, reduced by each partial redemption, reset by each
crystallization. If that history cannot be reconstructed, the current
number cannot be checked by anyone, including an auditor.

- [Equalization, and what a mid-period subscriber actually owes](https://1494labs.com/notes/equalization-and-the-mid-period-subscriber/), the same mark on the way in

- [Hedge fund accounting](https://1494labs.com/hedge-fund-accounting/), including crystallization and loss carryforwards

- [Fees: from structure to charge](https://docs.1494labs.com/guide/fees-from-structure-to-charge/) in the product docs, from accrual to crystallization

## How we handle it

1494 Labs holds the mark per capital account as a level, prorates it on
partial redemption, and crystallizes on the redemption date. Every change to a mark is an event with a source, so the
history can be read back for any investor on any date.

[Get in touch](https://1494labs.com/#contact)
