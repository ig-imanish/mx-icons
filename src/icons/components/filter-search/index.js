import FilterSearchBold from "./FilterSearchBold";
import FilterSearchBroken from "./FilterSearchBroken";
import FilterSearchBulk from "./FilterSearchBulk";
import FilterSearchLinear from "./FilterSearchLinear";
import FilterSearchOutline from "./FilterSearchOutline";
import FilterSearchTwotone from "./FilterSearchTwotone";

export { FilterSearchBold, FilterSearchBroken, FilterSearchBulk, FilterSearchLinear, FilterSearchOutline, FilterSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filter-search-bold",
    Component: FilterSearchBold,
    componentName: "FilterSearchBold",
  },
  {
    variant: "broken",
    slug: "filter-search-broken",
    Component: FilterSearchBroken,
    componentName: "FilterSearchBroken",
  },
  {
    variant: "bulk",
    slug: "filter-search-bulk",
    Component: FilterSearchBulk,
    componentName: "FilterSearchBulk",
  },
  {
    variant: "linear",
    slug: "filter-search-linear",
    Component: FilterSearchLinear,
    componentName: "FilterSearchLinear",
  },
  {
    variant: "outline",
    slug: "filter-search-outline",
    Component: FilterSearchOutline,
    componentName: "FilterSearchOutline",
  },
  {
    variant: "twotone",
    slug: "filter-search-twotone",
    Component: FilterSearchTwotone,
    componentName: "FilterSearchTwotone",
  },
];
