import DirectUpBold from "./DirectUpBold";
import DirectUpBroken from "./DirectUpBroken";
import DirectUpBulk from "./DirectUpBulk";
import DirectUpLinear from "./DirectUpLinear";
import DirectUpOutline from "./DirectUpOutline";
import DirectUpTwotone from "./DirectUpTwotone";

export { DirectUpBold, DirectUpBroken, DirectUpBulk, DirectUpLinear, DirectUpOutline, DirectUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-up-bold",
    Component: DirectUpBold,
    componentName: "DirectUpBold",
  },
  {
    variant: "broken",
    slug: "direct-up-broken",
    Component: DirectUpBroken,
    componentName: "DirectUpBroken",
  },
  {
    variant: "bulk",
    slug: "direct-up-bulk",
    Component: DirectUpBulk,
    componentName: "DirectUpBulk",
  },
  {
    variant: "linear",
    slug: "direct-up-linear",
    Component: DirectUpLinear,
    componentName: "DirectUpLinear",
  },
  {
    variant: "outline",
    slug: "direct-up-outline",
    Component: DirectUpOutline,
    componentName: "DirectUpOutline",
  },
  {
    variant: "twotone",
    slug: "direct-up-twotone",
    Component: DirectUpTwotone,
    componentName: "DirectUpTwotone",
  },
];
