import BagTickBold from "./BagTickBold";
import BagTickBroken from "./BagTickBroken";
import BagTickBulk from "./BagTickBulk";
import BagTickLinear from "./BagTickLinear";
import BagTickOutline from "./BagTickOutline";
import BagTickTwotone from "./BagTickTwotone";

export { BagTickBold, BagTickBroken, BagTickBulk, BagTickLinear, BagTickOutline, BagTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-tick-bold",
    Component: BagTickBold,
    componentName: "BagTickBold",
  },
  {
    variant: "broken",
    slug: "bag-tick-broken",
    Component: BagTickBroken,
    componentName: "BagTickBroken",
  },
  {
    variant: "bulk",
    slug: "bag-tick-bulk",
    Component: BagTickBulk,
    componentName: "BagTickBulk",
  },
  {
    variant: "linear",
    slug: "bag-tick-linear",
    Component: BagTickLinear,
    componentName: "BagTickLinear",
  },
  {
    variant: "outline",
    slug: "bag-tick-outline",
    Component: BagTickOutline,
    componentName: "BagTickOutline",
  },
  {
    variant: "twotone",
    slug: "bag-tick-twotone",
    Component: BagTickTwotone,
    componentName: "BagTickTwotone",
  },
];
