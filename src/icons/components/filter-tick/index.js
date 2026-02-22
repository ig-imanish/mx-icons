import FilterTickBold from "./FilterTickBold";
import FilterTickBroken from "./FilterTickBroken";
import FilterTickBulk from "./FilterTickBulk";
import FilterTickLinear from "./FilterTickLinear";
import FilterTickOutline from "./FilterTickOutline";
import FilterTickTwotone from "./FilterTickTwotone";

export { FilterTickBold, FilterTickBroken, FilterTickBulk, FilterTickLinear, FilterTickOutline, FilterTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filter-tick-bold",
    Component: FilterTickBold,
    componentName: "FilterTickBold",
  },
  {
    variant: "broken",
    slug: "filter-tick-broken",
    Component: FilterTickBroken,
    componentName: "FilterTickBroken",
  },
  {
    variant: "bulk",
    slug: "filter-tick-bulk",
    Component: FilterTickBulk,
    componentName: "FilterTickBulk",
  },
  {
    variant: "linear",
    slug: "filter-tick-linear",
    Component: FilterTickLinear,
    componentName: "FilterTickLinear",
  },
  {
    variant: "outline",
    slug: "filter-tick-outline",
    Component: FilterTickOutline,
    componentName: "FilterTickOutline",
  },
  {
    variant: "twotone",
    slug: "filter-tick-twotone",
    Component: FilterTickTwotone,
    componentName: "FilterTickTwotone",
  },
];
