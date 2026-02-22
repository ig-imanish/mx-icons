import BagCrossBold from "./BagCrossBold";
import BagCrossBroken from "./BagCrossBroken";
import BagCrossBulk from "./BagCrossBulk";
import BagCrossLinear from "./BagCrossLinear";
import BagCrossOutline from "./BagCrossOutline";
import BagCrossTwotone from "./BagCrossTwotone";

export { BagCrossBold, BagCrossBroken, BagCrossBulk, BagCrossLinear, BagCrossOutline, BagCrossTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-cross-bold",
    Component: BagCrossBold,
    componentName: "BagCrossBold",
  },
  {
    variant: "broken",
    slug: "bag-cross-broken",
    Component: BagCrossBroken,
    componentName: "BagCrossBroken",
  },
  {
    variant: "bulk",
    slug: "bag-cross-bulk",
    Component: BagCrossBulk,
    componentName: "BagCrossBulk",
  },
  {
    variant: "linear",
    slug: "bag-cross-linear",
    Component: BagCrossLinear,
    componentName: "BagCrossLinear",
  },
  {
    variant: "outline",
    slug: "bag-cross-outline",
    Component: BagCrossOutline,
    componentName: "BagCrossOutline",
  },
  {
    variant: "twotone",
    slug: "bag-cross-twotone",
    Component: BagCrossTwotone,
    componentName: "BagCrossTwotone",
  },
];
