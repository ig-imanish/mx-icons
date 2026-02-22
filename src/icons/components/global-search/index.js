import GlobalSearchBold from "./GlobalSearchBold";
import GlobalSearchBroken from "./GlobalSearchBroken";
import GlobalSearchBulk from "./GlobalSearchBulk";
import GlobalSearchLinear from "./GlobalSearchLinear";
import GlobalSearchOutline from "./GlobalSearchOutline";
import GlobalSearchTwotone from "./GlobalSearchTwotone";

export { GlobalSearchBold, GlobalSearchBroken, GlobalSearchBulk, GlobalSearchLinear, GlobalSearchOutline, GlobalSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "global-search-bold",
    Component: GlobalSearchBold,
    componentName: "GlobalSearchBold",
  },
  {
    variant: "broken",
    slug: "global-search-broken",
    Component: GlobalSearchBroken,
    componentName: "GlobalSearchBroken",
  },
  {
    variant: "bulk",
    slug: "global-search-bulk",
    Component: GlobalSearchBulk,
    componentName: "GlobalSearchBulk",
  },
  {
    variant: "linear",
    slug: "global-search-linear",
    Component: GlobalSearchLinear,
    componentName: "GlobalSearchLinear",
  },
  {
    variant: "outline",
    slug: "global-search-outline",
    Component: GlobalSearchOutline,
    componentName: "GlobalSearchOutline",
  },
  {
    variant: "twotone",
    slug: "global-search-twotone",
    Component: GlobalSearchTwotone,
    componentName: "GlobalSearchTwotone",
  },
];
