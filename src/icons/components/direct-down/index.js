import DirectDownBold from "./DirectDownBold";
import DirectDownBroken from "./DirectDownBroken";
import DirectDownBulk from "./DirectDownBulk";
import DirectDownLinear from "./DirectDownLinear";
import DirectDownOutline from "./DirectDownOutline";
import DirectDownTwotone from "./DirectDownTwotone";

export { DirectDownBold, DirectDownBroken, DirectDownBulk, DirectDownLinear, DirectDownOutline, DirectDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-down-bold",
    Component: DirectDownBold,
    componentName: "DirectDownBold",
  },
  {
    variant: "broken",
    slug: "direct-down-broken",
    Component: DirectDownBroken,
    componentName: "DirectDownBroken",
  },
  {
    variant: "bulk",
    slug: "direct-down-bulk",
    Component: DirectDownBulk,
    componentName: "DirectDownBulk",
  },
  {
    variant: "linear",
    slug: "direct-down-linear",
    Component: DirectDownLinear,
    componentName: "DirectDownLinear",
  },
  {
    variant: "outline",
    slug: "direct-down-outline",
    Component: DirectDownOutline,
    componentName: "DirectDownOutline",
  },
  {
    variant: "twotone",
    slug: "direct-down-twotone",
    Component: DirectDownTwotone,
    componentName: "DirectDownTwotone",
  },
];
