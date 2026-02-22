import SortBold from "./SortBold";
import SortBroken from "./SortBroken";
import SortBulk from "./SortBulk";
import SortLinear from "./SortLinear";
import SortOutline from "./SortOutline";
import SortTwotone from "./SortTwotone";

export { SortBold, SortBroken, SortBulk, SortLinear, SortOutline, SortTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sort-bold",
    Component: SortBold,
    componentName: "SortBold",
  },
  {
    variant: "broken",
    slug: "sort-broken",
    Component: SortBroken,
    componentName: "SortBroken",
  },
  {
    variant: "bulk",
    slug: "sort-bulk",
    Component: SortBulk,
    componentName: "SortBulk",
  },
  {
    variant: "linear",
    slug: "sort-linear",
    Component: SortLinear,
    componentName: "SortLinear",
  },
  {
    variant: "outline",
    slug: "sort-outline",
    Component: SortOutline,
    componentName: "SortOutline",
  },
  {
    variant: "twotone",
    slug: "sort-twotone",
    Component: SortTwotone,
    componentName: "SortTwotone",
  },
];
