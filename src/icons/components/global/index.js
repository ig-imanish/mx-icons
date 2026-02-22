import GlobalBold from "./GlobalBold";
import GlobalBroken from "./GlobalBroken";
import GlobalBulk from "./GlobalBulk";
import GlobalLinear from "./GlobalLinear";
import GlobalOutline from "./GlobalOutline";
import GlobalTwotone from "./GlobalTwotone";

export { GlobalBold, GlobalBroken, GlobalBulk, GlobalLinear, GlobalOutline, GlobalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "global-bold",
    Component: GlobalBold,
    componentName: "GlobalBold",
  },
  {
    variant: "broken",
    slug: "global-broken",
    Component: GlobalBroken,
    componentName: "GlobalBroken",
  },
  {
    variant: "bulk",
    slug: "global-bulk",
    Component: GlobalBulk,
    componentName: "GlobalBulk",
  },
  {
    variant: "linear",
    slug: "global-linear",
    Component: GlobalLinear,
    componentName: "GlobalLinear",
  },
  {
    variant: "outline",
    slug: "global-outline",
    Component: GlobalOutline,
    componentName: "GlobalOutline",
  },
  {
    variant: "twotone",
    slug: "global-twotone",
    Component: GlobalTwotone,
    componentName: "GlobalTwotone",
  },
];
