import StopBold from "./StopBold";
import StopBroken from "./StopBroken";
import StopBulk from "./StopBulk";
import StopLinear from "./StopLinear";
import StopOutline from "./StopOutline";
import StopTwotone from "./StopTwotone";

export { StopBold, StopBroken, StopBulk, StopLinear, StopOutline, StopTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stop-bold",
    Component: StopBold,
    componentName: "StopBold",
  },
  {
    variant: "broken",
    slug: "stop-broken",
    Component: StopBroken,
    componentName: "StopBroken",
  },
  {
    variant: "bulk",
    slug: "stop-bulk",
    Component: StopBulk,
    componentName: "StopBulk",
  },
  {
    variant: "linear",
    slug: "stop-linear",
    Component: StopLinear,
    componentName: "StopLinear",
  },
  {
    variant: "outline",
    slug: "stop-outline",
    Component: StopOutline,
    componentName: "StopOutline",
  },
  {
    variant: "twotone",
    slug: "stop-twotone",
    Component: StopTwotone,
    componentName: "StopTwotone",
  },
];
