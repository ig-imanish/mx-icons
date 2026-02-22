import DirectBold from "./DirectBold";
import DirectBroken from "./DirectBroken";
import DirectBulk from "./DirectBulk";
import DirectLinear from "./DirectLinear";
import DirectOutline from "./DirectOutline";
import DirectTwotone from "./DirectTwotone";

export { DirectBold, DirectBroken, DirectBulk, DirectLinear, DirectOutline, DirectTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-bold",
    Component: DirectBold,
    componentName: "DirectBold",
  },
  {
    variant: "broken",
    slug: "direct-broken",
    Component: DirectBroken,
    componentName: "DirectBroken",
  },
  {
    variant: "bulk",
    slug: "direct-bulk",
    Component: DirectBulk,
    componentName: "DirectBulk",
  },
  {
    variant: "linear",
    slug: "direct-linear",
    Component: DirectLinear,
    componentName: "DirectLinear",
  },
  {
    variant: "outline",
    slug: "direct-outline",
    Component: DirectOutline,
    componentName: "DirectOutline",
  },
  {
    variant: "twotone",
    slug: "direct-twotone",
    Component: DirectTwotone,
    componentName: "DirectTwotone",
  },
];
