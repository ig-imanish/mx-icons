import SortHorizontalBold from "./SortHorizontalBold";
import SortHorizontalBroken from "./SortHorizontalBroken";
import SortHorizontalBulk from "./SortHorizontalBulk";
import SortHorizontalLinear from "./SortHorizontalLinear";
import SortHorizontalOutline from "./SortHorizontalOutline";
import SortHorizontalTwotone from "./SortHorizontalTwotone";

export { SortHorizontalBold, SortHorizontalBroken, SortHorizontalBulk, SortHorizontalLinear, SortHorizontalOutline, SortHorizontalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sort-horizontal-bold",
    Component: SortHorizontalBold,
    componentName: "SortHorizontalBold",
  },,
  {
    variant: "broken",
    slug: "sort-horizontal-broken",
    Component: SortHorizontalBroken,
    componentName: "SortHorizontalBroken",
  },,
  {
    variant: "bulk",
    slug: "sort-horizontal-bulk",
    Component: SortHorizontalBulk,
    componentName: "SortHorizontalBulk",
  },,
  {
    variant: "linear",
    slug: "sort-horizontal-linear",
    Component: SortHorizontalLinear,
    componentName: "SortHorizontalLinear",
  },,
  {
    variant: "outline",
    slug: "sort-horizontal-outline",
    Component: SortHorizontalOutline,
    componentName: "SortHorizontalOutline",
  },,
  {
    variant: "twotone",
    slug: "sort-horizontal-twotone",
    Component: SortHorizontalTwotone,
    componentName: "SortHorizontalTwotone",
  }
];

export default { SortHorizontalBold, SortHorizontalBroken, SortHorizontalBulk, SortHorizontalLinear, SortHorizontalOutline, SortHorizontalTwotone };
