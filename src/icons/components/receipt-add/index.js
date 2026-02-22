import ReceiptAddBold from "./ReceiptAddBold";
import ReceiptAddBroken from "./ReceiptAddBroken";
import ReceiptAddBulk from "./ReceiptAddBulk";
import ReceiptAddLinear from "./ReceiptAddLinear";
import ReceiptAddOutline from "./ReceiptAddOutline";
import ReceiptAddTwotone from "./ReceiptAddTwotone";

export { ReceiptAddBold, ReceiptAddBroken, ReceiptAddBulk, ReceiptAddLinear, ReceiptAddOutline, ReceiptAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-add-bold",
    Component: ReceiptAddBold,
    componentName: "ReceiptAddBold",
  },
  {
    variant: "broken",
    slug: "receipt-add-broken",
    Component: ReceiptAddBroken,
    componentName: "ReceiptAddBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-add-bulk",
    Component: ReceiptAddBulk,
    componentName: "ReceiptAddBulk",
  },
  {
    variant: "linear",
    slug: "receipt-add-linear",
    Component: ReceiptAddLinear,
    componentName: "ReceiptAddLinear",
  },
  {
    variant: "outline",
    slug: "receipt-add-outline",
    Component: ReceiptAddOutline,
    componentName: "ReceiptAddOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-add-twotone",
    Component: ReceiptAddTwotone,
    componentName: "ReceiptAddTwotone",
  },
];
