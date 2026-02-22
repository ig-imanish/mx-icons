import ReceiptDiscountBold from "./ReceiptDiscountBold";
import ReceiptDiscountBroken from "./ReceiptDiscountBroken";
import ReceiptDiscountBulk from "./ReceiptDiscountBulk";
import ReceiptDiscountLinear from "./ReceiptDiscountLinear";
import ReceiptDiscountOutline from "./ReceiptDiscountOutline";
import ReceiptDiscountTwotone from "./ReceiptDiscountTwotone";

export { ReceiptDiscountBold, ReceiptDiscountBroken, ReceiptDiscountBulk, ReceiptDiscountLinear, ReceiptDiscountOutline, ReceiptDiscountTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-discount-bold",
    Component: ReceiptDiscountBold,
    componentName: "ReceiptDiscountBold",
  },
  {
    variant: "broken",
    slug: "receipt-discount-broken",
    Component: ReceiptDiscountBroken,
    componentName: "ReceiptDiscountBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-discount-bulk",
    Component: ReceiptDiscountBulk,
    componentName: "ReceiptDiscountBulk",
  },
  {
    variant: "linear",
    slug: "receipt-discount-linear",
    Component: ReceiptDiscountLinear,
    componentName: "ReceiptDiscountLinear",
  },
  {
    variant: "outline",
    slug: "receipt-discount-outline",
    Component: ReceiptDiscountOutline,
    componentName: "ReceiptDiscountOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-discount-twotone",
    Component: ReceiptDiscountTwotone,
    componentName: "ReceiptDiscountTwotone",
  },
];
