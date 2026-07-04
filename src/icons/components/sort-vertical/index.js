import SortVerticalBold from "./SortVerticalBold";
import SortVerticalBroken from "./SortVerticalBroken";
import SortVerticalBulk from "./SortVerticalBulk";
import SortVerticalLinear from "./SortVerticalLinear";
import SortVerticalOutline from "./SortVerticalOutline";
import SortVerticalTwotone from "./SortVerticalTwotone";

export { SortVerticalBold, SortVerticalBroken, SortVerticalBulk, SortVerticalLinear, SortVerticalOutline, SortVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sort-vertical-bold",
    Component: SortVerticalBold,
    componentName: "SortVerticalBold",
  },,
  {
    variant: "broken",
    slug: "sort-vertical-broken",
    Component: SortVerticalBroken,
    componentName: "SortVerticalBroken",
  },,
  {
    variant: "bulk",
    slug: "sort-vertical-bulk",
    Component: SortVerticalBulk,
    componentName: "SortVerticalBulk",
  },,
  {
    variant: "linear",
    slug: "sort-vertical-linear",
    Component: SortVerticalLinear,
    componentName: "SortVerticalLinear",
  },,
  {
    variant: "outline",
    slug: "sort-vertical-outline",
    Component: SortVerticalOutline,
    componentName: "SortVerticalOutline",
  },,
  {
    variant: "twotone",
    slug: "sort-vertical-twotone",
    Component: SortVerticalTwotone,
    componentName: "SortVerticalTwotone",
  }
];

export default { SortVerticalBold, SortVerticalBroken, SortVerticalBulk, SortVerticalLinear, SortVerticalOutline, SortVerticalTwotone };
