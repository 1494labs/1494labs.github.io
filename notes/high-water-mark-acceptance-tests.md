Source: https://1494labs.com/notes/high-water-mark-acceptance-tests/

# High-water-mark acceptance tests before the first live close

Use a recovery, a partial redemption and a gain above the mark to check that the fee engine retained the right investor state.

Fund operations · November 3, 2026

## Write down the expected economics first

Fix the fee terms, share quantity, gross value convention, high-water mark, crystallization dates and rounding rules before testing. The examples below assume a 20% incentive fee above the investor's existing high-water mark, no hurdle, no other fees and no cash flows except the stated redemption.

1. **Record the opening state.** Keep the per-share mark and the quantity it belongs to, alongside any total loss carried forward.

2. **Recover to the mark.** Confirm that a recovery through an existing loss does not create a fee under these terms.

3. **Redeem part of the holding below the mark.** Check that the state left behind belongs to the remaining shares.

4. **Recover beyond the mark.** Independently calculate the gain above the mark and the resulting fee.

5. **Check the posting and investor statement.** Trace the fee from its calculation through the ledger to the investor's ending value.

## Three checkpoints on the same holding

The investor starts with 10,000 shares at $80 and a $100 per-share mark. The opening shortfall is $200,000. It redeems 5,000 shares at $80, leaving 5,000 shares and a $100,000 shortfall.

| Checkpoint | Remaining shares | Gross price | Gain above $100 mark | Fee at 20% |
| --- | --- | --- | --- | --- |
| After partial redemption | 5,000 | $80 | $0 | $0 |
| Recovery to mark | 5,000 | $100 | $0 | $0 |
| Recovery beyond mark | 5,000 | $120 | $100,000 | $20,000 |

The final checkpoint follows directly from 5,000 × ($120 − $100) × 20%. Keeping the original $200,000 total shortfall after half the shares leave would shelter too much of the recovery. The per-share mark stays $100 in this example; the total state changes with the quantity.

## Extend the test to the actual fund terms

Add separate cases for new subscriptions, transfers, full redemptions, fee accrual reversals and the fund's own crystallization rules. Record expected results before running the system. Check the imported opening state again whenever a correct total conceals an unexpected investor fee.

1494 Labs supports investor fee calculations and a traceable ledger. Use these cases to make a [demonstration](https://1494labs.com/#contact) specific. [High-water marks and partial redemptions](https://1494labs.com/notes/high-water-marks-and-partial-redemptions/) explains the mechanism behind the test.
