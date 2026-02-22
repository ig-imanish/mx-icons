import ReceiptSearchBold from "./ReceiptSearchBold";
import ReceiptSearchBroken from "./ReceiptSearchBroken";
import ReceiptSearchBulk from "./ReceiptSearchBulk";
import ReceiptSearchLinear from "./ReceiptSearchLinear";
import ReceiptSearchOutline from "./ReceiptSearchOutline";
import ReceiptSearchTwotone from "./ReceiptSearchTwotone";

export { ReceiptSearchBold, ReceiptSearchBroken, ReceiptSearchBulk, ReceiptSearchLinear, ReceiptSearchOutline, ReceiptSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt-search-bold",
    Component: ReceiptSearchBold,
    componentName: "ReceiptSearchBold",
  },
  {
    variant: "broken",
    slug: "receipt-search-broken",
    Component: ReceiptSearchBroken,
    componentName: "ReceiptSearchBroken",
  },
  {
    variant: "bulk",
    slug: "receipt-search-bulk",
    Component: ReceiptSearchBulk,
    componentName: "ReceiptSearchBulk",
  },
  {
    variant: "linear",
    slug: "receipt-search-linear",
    Component: ReceiptSearchLinear,
    componentName: "ReceiptSearchLinear",
  },
  {
    variant: "outline",
    slug: "receipt-search-outline",
    Component: ReceiptSearchOutline,
    componentName: "ReceiptSearchOutline",
  },
  {
    variant: "twotone",
    slug: "receipt-search-twotone",
    Component: ReceiptSearchTwotone,
    componentName: "ReceiptSearchTwotone",
  },
];
