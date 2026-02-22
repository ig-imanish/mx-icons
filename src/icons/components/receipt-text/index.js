import ReceiptTextBold from "./ReceiptTextBold";
import ReceiptTextBroken from "./ReceiptTextBroken";
import ReceiptTextBulk from "./ReceiptTextBulk";
import ReceiptTextLinear from "./ReceiptTextLinear";
import ReceiptTextOutline from "./ReceiptTextOutline";
import ReceiptTextTwotone from "./ReceiptTextTwotone";

export { ReceiptTextBold, ReceiptTextBroken, ReceiptTextBulk, ReceiptTextLinear, ReceiptTextOutline, ReceiptTextTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-text-bold",
    Component: ReceiptTextBold,
    componentName: "ReceiptTextBold",
  },
  {
    variant: "broken",
    slug: "receipt-text-broken",
    Component: ReceiptTextBroken,
    componentName: "ReceiptTextBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-text-bulk",
    Component: ReceiptTextBulk,
    componentName: "ReceiptTextBulk",
  },
  {
    variant: "linear",
    slug: "receipt-text-linear",
    Component: ReceiptTextLinear,
    componentName: "ReceiptTextLinear",
  },
  {
    variant: "outline",
    slug: "receipt-text-outline",
    Component: ReceiptTextOutline,
    componentName: "ReceiptTextOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-text-twotone",
    Component: ReceiptTextTwotone,
    componentName: "ReceiptTextTwotone",
  },
];
