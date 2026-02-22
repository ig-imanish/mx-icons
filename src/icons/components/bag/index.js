import BagBold from "./BagBold";
import BagBroken from "./BagBroken";
import BagBulk from "./BagBulk";
import BagLinear from "./BagLinear";
import BagOutline from "./BagOutline";
import BagTwotone from "./BagTwotone";

export { BagBold, BagBroken, BagBulk, BagLinear, BagOutline, BagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-bold",
    Component: BagBold,
    componentName: "BagBold",
  },
  {
    variant: "broken",
    slug: "bag-broken",
    Component: BagBroken,
    componentName: "BagBroken",
  },
  {
    variant: "bulk",
    slug: "bag-bulk",
    Component: BagBulk,
    componentName: "BagBulk",
  },
  {
    variant: "linear",
    slug: "bag-linear",
    Component: BagLinear,
    componentName: "BagLinear",
  },
  {
    variant: "outline",
    slug: "bag-outline",
    Component: BagOutline,
    componentName: "BagOutline",
  },
  {
    variant: "twotone",
    slug: "bag-twotone",
    Component: BagTwotone,
    componentName: "BagTwotone",
  },
];
