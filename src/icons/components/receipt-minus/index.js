import ReceiptMinusBold from "./ReceiptMinusBold";
import ReceiptMinusBroken from "./ReceiptMinusBroken";
import ReceiptMinusBulk from "./ReceiptMinusBulk";
import ReceiptMinusLinear from "./ReceiptMinusLinear";
import ReceiptMinusOutline from "./ReceiptMinusOutline";
import ReceiptMinusTwotone from "./ReceiptMinusTwotone";

export { ReceiptMinusBold, ReceiptMinusBroken, ReceiptMinusBulk, ReceiptMinusLinear, ReceiptMinusOutline, ReceiptMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-minus-bold",
    Component: ReceiptMinusBold,
    componentName: "ReceiptMinusBold",
  },
  {
    variant: "broken",
    slug: "receipt-minus-broken",
    Component: ReceiptMinusBroken,
    componentName: "ReceiptMinusBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-minus-bulk",
    Component: ReceiptMinusBulk,
    componentName: "ReceiptMinusBulk",
  },
  {
    variant: "linear",
    slug: "receipt-minus-linear",
    Component: ReceiptMinusLinear,
    componentName: "ReceiptMinusLinear",
  },
  {
    variant: "outline",
    slug: "receipt-minus-outline",
    Component: ReceiptMinusOutline,
    componentName: "ReceiptMinusOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-minus-twotone",
    Component: ReceiptMinusTwotone,
    componentName: "ReceiptMinusTwotone",
  },
];
