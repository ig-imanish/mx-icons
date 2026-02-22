import ReceiptEditBold from "./ReceiptEditBold";
import ReceiptEditBroken from "./ReceiptEditBroken";
import ReceiptEditBulk from "./ReceiptEditBulk";
import ReceiptEditLinear from "./ReceiptEditLinear";
import ReceiptEditOutline from "./ReceiptEditOutline";
import ReceiptEditTwotone from "./ReceiptEditTwotone";

export { ReceiptEditBold, ReceiptEditBroken, ReceiptEditBulk, ReceiptEditLinear, ReceiptEditOutline, ReceiptEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-edit-bold",
    Component: ReceiptEditBold,
    componentName: "ReceiptEditBold",
  },
  {
    variant: "broken",
    slug: "receipt-edit-broken",
    Component: ReceiptEditBroken,
    componentName: "ReceiptEditBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-edit-bulk",
    Component: ReceiptEditBulk,
    componentName: "ReceiptEditBulk",
  },
  {
    variant: "linear",
    slug: "receipt-edit-linear",
    Component: ReceiptEditLinear,
    componentName: "ReceiptEditLinear",
  },
  {
    variant: "outline",
    slug: "receipt-edit-outline",
    Component: ReceiptEditOutline,
    componentName: "ReceiptEditOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-edit-twotone",
    Component: ReceiptEditTwotone,
    componentName: "ReceiptEditTwotone",
  },
];
