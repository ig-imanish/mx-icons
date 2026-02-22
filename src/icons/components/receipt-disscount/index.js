import ReceiptDisscountBold from "./ReceiptDisscountBold";
import ReceiptDisscountBroken from "./ReceiptDisscountBroken";
import ReceiptDisscountBulk from "./ReceiptDisscountBulk";
import ReceiptDisscountLinear from "./ReceiptDisscountLinear";
import ReceiptDisscountOutline from "./ReceiptDisscountOutline";
import ReceiptDisscountTwotone from "./ReceiptDisscountTwotone";

export { ReceiptDisscountBold, ReceiptDisscountBroken, ReceiptDisscountBulk, ReceiptDisscountLinear, ReceiptDisscountOutline, ReceiptDisscountTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-disscount-bold",
    Component: ReceiptDisscountBold,
    componentName: "ReceiptDisscountBold",
  },
  {
    variant: "broken",
    slug: "receipt-disscount-broken",
    Component: ReceiptDisscountBroken,
    componentName: "ReceiptDisscountBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-disscount-bulk",
    Component: ReceiptDisscountBulk,
    componentName: "ReceiptDisscountBulk",
  },
  {
    variant: "linear",
    slug: "receipt-disscount-linear",
    Component: ReceiptDisscountLinear,
    componentName: "ReceiptDisscountLinear",
  },
  {
    variant: "outline",
    slug: "receipt-disscount-outline",
    Component: ReceiptDisscountOutline,
    componentName: "ReceiptDisscountOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-disscount-twotone",
    Component: ReceiptDisscountTwotone,
    componentName: "ReceiptDisscountTwotone",
  },
];
