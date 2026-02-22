import ReceiptSquareBold from "./ReceiptSquareBold";
import ReceiptSquareBroken from "./ReceiptSquareBroken";
import ReceiptSquareBulk from "./ReceiptSquareBulk";
import ReceiptSquareLinear from "./ReceiptSquareLinear";
import ReceiptSquareOutline from "./ReceiptSquareOutline";
import ReceiptSquareTwotone from "./ReceiptSquareTwotone";

export { ReceiptSquareBold, ReceiptSquareBroken, ReceiptSquareBulk, ReceiptSquareLinear, ReceiptSquareOutline, ReceiptSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-square-bold",
    Component: ReceiptSquareBold,
    componentName: "ReceiptSquareBold",
  },
  {
    variant: "broken",
    slug: "receipt-square-broken",
    Component: ReceiptSquareBroken,
    componentName: "ReceiptSquareBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-square-bulk",
    Component: ReceiptSquareBulk,
    componentName: "ReceiptSquareBulk",
  },
  {
    variant: "linear",
    slug: "receipt-square-linear",
    Component: ReceiptSquareLinear,
    componentName: "ReceiptSquareLinear",
  },
  {
    variant: "outline",
    slug: "receipt-square-outline",
    Component: ReceiptSquareOutline,
    componentName: "ReceiptSquareOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-square-twotone",
    Component: ReceiptSquareTwotone,
    componentName: "ReceiptSquareTwotone",
  },
];
