import SearchStatusBold from "./SearchStatusBold";
import SearchStatusBroken from "./SearchStatusBroken";
import SearchStatusBulk from "./SearchStatusBulk";
import SearchStatusLinear from "./SearchStatusLinear";
import SearchStatusOutline from "./SearchStatusOutline";
import SearchStatusTwotone from "./SearchStatusTwotone";

export { SearchStatusBold, SearchStatusBroken, SearchStatusBulk, SearchStatusLinear, SearchStatusOutline, SearchStatusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "search-status-bold",
    Component: SearchStatusBold,
    componentName: "SearchStatusBold",
  },
  {
    variant: "broken",
    slug: "search-status-broken",
    Component: SearchStatusBroken,
    componentName: "SearchStatusBroken",
  },
  {
    variant: "bulk",
    slug: "search-status-bulk",
    Component: SearchStatusBulk,
    componentName: "SearchStatusBulk",
  },
  {
    variant: "linear",
    slug: "search-status-linear",
    Component: SearchStatusLinear,
    componentName: "SearchStatusLinear",
  },
  {
    variant: "outline",
    slug: "search-status-outline",
    Component: SearchStatusOutline,
    componentName: "SearchStatusOutline",
  },
  {
    variant: "twotone",
    slug: "search-status-twotone",
    Component: SearchStatusTwotone,
    componentName: "SearchStatusTwotone",
  },
];
