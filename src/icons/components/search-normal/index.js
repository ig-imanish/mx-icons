import SearchNormalBold from "./SearchNormalBold";
import SearchNormalBroken from "./SearchNormalBroken";
import SearchNormalBulk from "./SearchNormalBulk";
import SearchNormalLinear from "./SearchNormalLinear";
import SearchNormalOutline from "./SearchNormalOutline";
import SearchNormalTwotone from "./SearchNormalTwotone";

export { SearchNormalBold, SearchNormalBroken, SearchNormalBulk, SearchNormalLinear, SearchNormalOutline, SearchNormalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "search-normal-bold",
    Component: SearchNormalBold,
    componentName: "SearchNormalBold",
  },
  {
    variant: "broken",
    slug: "search-normal-broken",
    Component: SearchNormalBroken,
    componentName: "SearchNormalBroken",
  },
  {
    variant: "bulk",
    slug: "search-normal-bulk",
    Component: SearchNormalBulk,
    componentName: "SearchNormalBulk",
  },
  {
    variant: "linear",
    slug: "search-normal-linear",
    Component: SearchNormalLinear,
    componentName: "SearchNormalLinear",
  },
  {
    variant: "outline",
    slug: "search-normal-outline",
    Component: SearchNormalOutline,
    componentName: "SearchNormalOutline",
  },
  {
    variant: "twotone",
    slug: "search-normal-twotone",
    Component: SearchNormalTwotone,
    componentName: "SearchNormalTwotone",
  },
];
