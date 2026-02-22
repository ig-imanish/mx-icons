import FilterAddBold from "./FilterAddBold";
import FilterAddBroken from "./FilterAddBroken";
import FilterAddBulk from "./FilterAddBulk";
import FilterAddLinear from "./FilterAddLinear";
import FilterAddOutline from "./FilterAddOutline";
import FilterAddTwotone from "./FilterAddTwotone";

export { FilterAddBold, FilterAddBroken, FilterAddBulk, FilterAddLinear, FilterAddOutline, FilterAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filter-add-bold",
    Component: FilterAddBold,
    componentName: "FilterAddBold",
  },
  {
    variant: "broken",
    slug: "filter-add-broken",
    Component: FilterAddBroken,
    componentName: "FilterAddBroken",
  },
  {
    variant: "bulk",
    slug: "filter-add-bulk",
    Component: FilterAddBulk,
    componentName: "FilterAddBulk",
  },
  {
    variant: "linear",
    slug: "filter-add-linear",
    Component: FilterAddLinear,
    componentName: "FilterAddLinear",
  },
  {
    variant: "outline",
    slug: "filter-add-outline",
    Component: FilterAddOutline,
    componentName: "FilterAddOutline",
  },
  {
    variant: "twotone",
    slug: "filter-add-twotone",
    Component: FilterAddTwotone,
    componentName: "FilterAddTwotone",
  },
];
