import ReceiptItemBold from "./ReceiptItemBold";
import ReceiptItemBroken from "./ReceiptItemBroken";
import ReceiptItemBulk from "./ReceiptItemBulk";
import ReceiptItemLinear from "./ReceiptItemLinear";
import ReceiptItemOutline from "./ReceiptItemOutline";
import ReceiptItemTwotone from "./ReceiptItemTwotone";

export { ReceiptItemBold, ReceiptItemBroken, ReceiptItemBulk, ReceiptItemLinear, ReceiptItemOutline, ReceiptItemTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-item-bold",
    Component: ReceiptItemBold,
    componentName: "ReceiptItemBold",
  },
  {
    variant: "broken",
    slug: "receipt-item-broken",
    Component: ReceiptItemBroken,
    componentName: "ReceiptItemBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-item-bulk",
    Component: ReceiptItemBulk,
    componentName: "ReceiptItemBulk",
  },
  {
    variant: "linear",
    slug: "receipt-item-linear",
    Component: ReceiptItemLinear,
    componentName: "ReceiptItemLinear",
  },
  {
    variant: "outline",
    slug: "receipt-item-outline",
    Component: ReceiptItemOutline,
    componentName: "ReceiptItemOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-item-twotone",
    Component: ReceiptItemTwotone,
    componentName: "ReceiptItemTwotone",
  },
];
