import DirectRightBold from "./DirectRightBold";
import DirectRightBroken from "./DirectRightBroken";
import DirectRightBulk from "./DirectRightBulk";
import DirectRightLinear from "./DirectRightLinear";
import DirectRightOutline from "./DirectRightOutline";
import DirectRightTwotone from "./DirectRightTwotone";

export { DirectRightBold, DirectRightBroken, DirectRightBulk, DirectRightLinear, DirectRightOutline, DirectRightTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-right-bold",
    Component: DirectRightBold,
    componentName: "DirectRightBold",
  },
  {
    variant: "broken",
    slug: "direct-right-broken",
    Component: DirectRightBroken,
    componentName: "DirectRightBroken",
  },
  {
    variant: "bulk",
    slug: "direct-right-bulk",
    Component: DirectRightBulk,
    componentName: "DirectRightBulk",
  },
  {
    variant: "linear",
    slug: "direct-right-linear",
    Component: DirectRightLinear,
    componentName: "DirectRightLinear",
  },
  {
    variant: "outline",
    slug: "direct-right-outline",
    Component: DirectRightOutline,
    componentName: "DirectRightOutline",
  },
  {
    variant: "twotone",
    slug: "direct-right-twotone",
    Component: DirectRightTwotone,
    componentName: "DirectRightTwotone",
  },
];
