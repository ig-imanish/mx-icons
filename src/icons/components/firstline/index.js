import FirstlineBold from "./FirstlineBold";
import FirstlineBroken from "./FirstlineBroken";
import FirstlineBulk from "./FirstlineBulk";
import FirstlineLinear from "./FirstlineLinear";
import FirstlineOutline from "./FirstlineOutline";
import FirstlineTwotone from "./FirstlineTwotone";

export { FirstlineBold, FirstlineBroken, FirstlineBulk, FirstlineLinear, FirstlineOutline, FirstlineTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "firstline-bold",
    Component: FirstlineBold,
    componentName: "FirstlineBold",
  },
  {
    variant: "broken",
    slug: "firstline-broken",
    Component: FirstlineBroken,
    componentName: "FirstlineBroken",
  },
  {
    variant: "bulk",
    slug: "firstline-bulk",
    Component: FirstlineBulk,
    componentName: "FirstlineBulk",
  },
  {
    variant: "linear",
    slug: "firstline-linear",
    Component: FirstlineLinear,
    componentName: "FirstlineLinear",
  },
  {
    variant: "outline",
    slug: "firstline-outline",
    Component: FirstlineOutline,
    componentName: "FirstlineOutline",
  },
  {
    variant: "twotone",
    slug: "firstline-twotone",
    Component: FirstlineTwotone,
    componentName: "FirstlineTwotone",
  },
];
