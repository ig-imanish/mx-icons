import FilterSquareBold from "./FilterSquareBold";
import FilterSquareBroken from "./FilterSquareBroken";
import FilterSquareBulk from "./FilterSquareBulk";
import FilterSquareLinear from "./FilterSquareLinear";
import FilterSquareOutline from "./FilterSquareOutline";
import FilterSquareTwotone from "./FilterSquareTwotone";

export { FilterSquareBold, FilterSquareBroken, FilterSquareBulk, FilterSquareLinear, FilterSquareOutline, FilterSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filter-square-bold",
    Component: FilterSquareBold,
    componentName: "FilterSquareBold",
  },
  {
    variant: "broken",
    slug: "filter-square-broken",
    Component: FilterSquareBroken,
    componentName: "FilterSquareBroken",
  },
  {
    variant: "bulk",
    slug: "filter-square-bulk",
    Component: FilterSquareBulk,
    componentName: "FilterSquareBulk",
  },
  {
    variant: "linear",
    slug: "filter-square-linear",
    Component: FilterSquareLinear,
    componentName: "FilterSquareLinear",
  },
  {
    variant: "outline",
    slug: "filter-square-outline",
    Component: FilterSquareOutline,
    componentName: "FilterSquareOutline",
  },
  {
    variant: "twotone",
    slug: "filter-square-twotone",
    Component: FilterSquareTwotone,
    componentName: "FilterSquareTwotone",
  },
];
