import DirectLeftBold from "./DirectLeftBold";
import DirectLeftBroken from "./DirectLeftBroken";
import DirectLeftBulk from "./DirectLeftBulk";
import DirectLeftLinear from "./DirectLeftLinear";
import DirectLeftOutline from "./DirectLeftOutline";
import DirectLeftTwotone from "./DirectLeftTwotone";

export { DirectLeftBold, DirectLeftBroken, DirectLeftBulk, DirectLeftLinear, DirectLeftOutline, DirectLeftTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "direct-left-bold",
    Component: DirectLeftBold,
    componentName: "DirectLeftBold",
  },
  {
    variant: "broken",
    slug: "direct-left-broken",
    Component: DirectLeftBroken,
    componentName: "DirectLeftBroken",
  },
  {
    variant: "bulk",
    slug: "direct-left-bulk",
    Component: DirectLeftBulk,
    componentName: "DirectLeftBulk",
  },
  {
    variant: "linear",
    slug: "direct-left-linear",
    Component: DirectLeftLinear,
    componentName: "DirectLeftLinear",
  },
  {
    variant: "outline",
    slug: "direct-left-outline",
    Component: DirectLeftOutline,
    componentName: "DirectLeftOutline",
  },
  {
    variant: "twotone",
    slug: "direct-left-twotone",
    Component: DirectLeftTwotone,
    componentName: "DirectLeftTwotone",
  },
];
