import ReceiptBold from "./ReceiptBold";
import ReceiptBroken from "./ReceiptBroken";
import ReceiptBulk from "./ReceiptBulk";
import ReceiptLinear from "./ReceiptLinear";
import ReceiptOutline from "./ReceiptOutline";
import ReceiptTwotone from "./ReceiptTwotone";

export { ReceiptBold, ReceiptBroken, ReceiptBulk, ReceiptLinear, ReceiptOutline, ReceiptTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-bold",
    Component: ReceiptBold,
    componentName: "ReceiptBold",
  },
  {
    variant: "broken",
    slug: "receipt-broken",
    Component: ReceiptBroken,
    componentName: "ReceiptBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-bulk",
    Component: ReceiptBulk,
    componentName: "ReceiptBulk",
  },
  {
    variant: "linear",
    slug: "receipt-linear",
    Component: ReceiptLinear,
    componentName: "ReceiptLinear",
  },
  {
    variant: "outline",
    slug: "receipt-outline",
    Component: ReceiptOutline,
    componentName: "ReceiptOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-twotone",
    Component: ReceiptTwotone,
    componentName: "ReceiptTwotone",
  },
];
