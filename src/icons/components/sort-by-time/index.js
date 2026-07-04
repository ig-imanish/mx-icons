import SortByTimeBold from "./SortByTimeBold";
import SortByTimeBroken from "./SortByTimeBroken";
import SortByTimeBulk from "./SortByTimeBulk";
import SortByTimeLinear from "./SortByTimeLinear";
import SortByTimeOutline from "./SortByTimeOutline";
import SortByTimeTwotone from "./SortByTimeTwotone";

export { SortByTimeBold, SortByTimeBroken, SortByTimeBulk, SortByTimeLinear, SortByTimeOutline, SortByTimeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sort-by-time-bold",
    Component: SortByTimeBold,
    componentName: "SortByTimeBold",
  },,
  {
    variant: "broken",
    slug: "sort-by-time-broken",
    Component: SortByTimeBroken,
    componentName: "SortByTimeBroken",
  },,
  {
    variant: "bulk",
    slug: "sort-by-time-bulk",
    Component: SortByTimeBulk,
    componentName: "SortByTimeBulk",
  },,
  {
    variant: "linear",
    slug: "sort-by-time-linear",
    Component: SortByTimeLinear,
    componentName: "SortByTimeLinear",
  },,
  {
    variant: "outline",
    slug: "sort-by-time-outline",
    Component: SortByTimeOutline,
    componentName: "SortByTimeOutline",
  },,
  {
    variant: "twotone",
    slug: "sort-by-time-twotone",
    Component: SortByTimeTwotone,
    componentName: "SortByTimeTwotone",
  }
];

export default { SortByTimeBold, SortByTimeBroken, SortByTimeBulk, SortByTimeLinear, SortByTimeOutline, SortByTimeTwotone };
