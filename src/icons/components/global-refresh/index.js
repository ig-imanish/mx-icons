import GlobalRefreshBold from "./GlobalRefreshBold";
import GlobalRefreshBroken from "./GlobalRefreshBroken";
import GlobalRefreshBulk from "./GlobalRefreshBulk";
import GlobalRefreshLinear from "./GlobalRefreshLinear";
import GlobalRefreshOutline from "./GlobalRefreshOutline";
import GlobalRefreshTwotone from "./GlobalRefreshTwotone";

export { GlobalRefreshBold, GlobalRefreshBroken, GlobalRefreshBulk, GlobalRefreshLinear, GlobalRefreshOutline, GlobalRefreshTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "global-refresh-bold",
    Component: GlobalRefreshBold,
    componentName: "GlobalRefreshBold",
  },
  {
    variant: "broken",
    slug: "global-refresh-broken",
    Component: GlobalRefreshBroken,
    componentName: "GlobalRefreshBroken",
  },
  {
    variant: "bulk",
    slug: "global-refresh-bulk",
    Component: GlobalRefreshBulk,
    componentName: "GlobalRefreshBulk",
  },
  {
    variant: "linear",
    slug: "global-refresh-linear",
    Component: GlobalRefreshLinear,
    componentName: "GlobalRefreshLinear",
  },
  {
    variant: "outline",
    slug: "global-refresh-outline",
    Component: GlobalRefreshOutline,
    componentName: "GlobalRefreshOutline",
  },
  {
    variant: "twotone",
    slug: "global-refresh-twotone",
    Component: GlobalRefreshTwotone,
    componentName: "GlobalRefreshTwotone",
  },
];
