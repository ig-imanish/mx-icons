import FiltersBold from "./FiltersBold";
import FiltersBroken from "./FiltersBroken";
import FiltersBulk from "./FiltersBulk";
import FiltersLinear from "./FiltersLinear";
import FiltersOutline from "./FiltersOutline";
import FiltersTwotone from "./FiltersTwotone";

export { FiltersBold, FiltersBroken, FiltersBulk, FiltersLinear, FiltersOutline, FiltersTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "filters-bold",
    Component: FiltersBold,
    componentName: "FiltersBold",
  },,
  {
    variant: "broken",
    slug: "filters-broken",
    Component: FiltersBroken,
    componentName: "FiltersBroken",
  },,
  {
    variant: "bulk",
    slug: "filters-bulk",
    Component: FiltersBulk,
    componentName: "FiltersBulk",
  },,
  {
    variant: "linear",
    slug: "filters-linear",
    Component: FiltersLinear,
    componentName: "FiltersLinear",
  },,
  {
    variant: "outline",
    slug: "filters-outline",
    Component: FiltersOutline,
    componentName: "FiltersOutline",
  },,
  {
    variant: "twotone",
    slug: "filters-twotone",
    Component: FiltersTwotone,
    componentName: "FiltersTwotone",
  }
];

export default { FiltersBold, FiltersBroken, FiltersBulk, FiltersLinear, FiltersOutline, FiltersTwotone };
