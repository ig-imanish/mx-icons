import FilterEditBold from "./FilterEditBold";
import FilterEditBroken from "./FilterEditBroken";
import FilterEditBulk from "./FilterEditBulk";
import FilterEditLinear from "./FilterEditLinear";
import FilterEditOutline from "./FilterEditOutline";
import FilterEditTwotone from "./FilterEditTwotone";

export { FilterEditBold, FilterEditBroken, FilterEditBulk, FilterEditLinear, FilterEditOutline, FilterEditTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filter-edit-bold",
    Component: FilterEditBold,
    componentName: "FilterEditBold",
  },
  {
    variant: "broken",
    slug: "filter-edit-broken",
    Component: FilterEditBroken,
    componentName: "FilterEditBroken",
  },
  {
    variant: "bulk",
    slug: "filter-edit-bulk",
    Component: FilterEditBulk,
    componentName: "FilterEditBulk",
  },
  {
    variant: "linear",
    slug: "filter-edit-linear",
    Component: FilterEditLinear,
    componentName: "FilterEditLinear",
  },
  {
    variant: "outline",
    slug: "filter-edit-outline",
    Component: FilterEditOutline,
    componentName: "FilterEditOutline",
  },
  {
    variant: "twotone",
    slug: "filter-edit-twotone",
    Component: FilterEditTwotone,
    componentName: "FilterEditTwotone",
  },
];
