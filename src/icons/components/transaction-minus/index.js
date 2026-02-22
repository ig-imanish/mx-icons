import TransactionMinusBold from "./TransactionMinusBold";
import TransactionMinusBroken from "./TransactionMinusBroken";
import TransactionMinusBulk from "./TransactionMinusBulk";
import TransactionMinusLinear from "./TransactionMinusLinear";
import TransactionMinusOutline from "./TransactionMinusOutline";
import TransactionMinusTwotone from "./TransactionMinusTwotone";

export { TransactionMinusBold, TransactionMinusBroken, TransactionMinusBulk, TransactionMinusLinear, TransactionMinusOutline, TransactionMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "transaction-minus-bold",
    Component: TransactionMinusBold,
    componentName: "TransactionMinusBold",
  },
  {
    variant: "broken",
    slug: "transaction-minus-broken",
    Component: TransactionMinusBroken,
    componentName: "TransactionMinusBroken",
  },
  {
    variant: "bulk",
    slug: "transaction-minus-bulk",
    Component: TransactionMinusBulk,
    componentName: "TransactionMinusBulk",
  },
  {
    variant: "linear",
    slug: "transaction-minus-linear",
    Component: TransactionMinusLinear,
    componentName: "TransactionMinusLinear",
  },
  {
    variant: "outline",
    slug: "transaction-minus-outline",
    Component: TransactionMinusOutline,
    componentName: "TransactionMinusOutline",
  },
  {
    variant: "twotone",
    slug: "transaction-minus-twotone",
    Component: TransactionMinusTwotone,
    componentName: "TransactionMinusTwotone",
  },
];
