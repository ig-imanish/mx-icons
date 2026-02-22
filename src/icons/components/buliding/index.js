import BulidingBold from "./BulidingBold";
import BulidingBroken from "./BulidingBroken";
import BulidingBulk from "./BulidingBulk";
import BulidingLinear from "./BulidingLinear";
import BulidingOutline from "./BulidingOutline";
import BulidingTwotone from "./BulidingTwotone";

export { BulidingBold, BulidingBroken, BulidingBulk, BulidingLinear, BulidingOutline, BulidingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "buliding-bold",
    Component: BulidingBold,
    componentName: "BulidingBold",
  },
  {
    variant: "broken",
    slug: "buliding-broken",
    Component: BulidingBroken,
    componentName: "BulidingBroken",
  },
  {
    variant: "bulk",
    slug: "buliding-bulk",
    Component: BulidingBulk,
    componentName: "BulidingBulk",
  },
  {
    variant: "linear",
    slug: "buliding-linear",
    Component: BulidingLinear,
    componentName: "BulidingLinear",
  },
  {
    variant: "outline",
    slug: "buliding-outline",
    Component: BulidingOutline,
    componentName: "BulidingOutline",
  },
  {
    variant: "twotone",
    slug: "buliding-twotone",
    Component: BulidingTwotone,
    componentName: "BulidingTwotone",
  },
];
