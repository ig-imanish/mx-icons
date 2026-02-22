import RowHorizontalBold from "./RowHorizontalBold";
import RowHorizontalBroken from "./RowHorizontalBroken";
import RowHorizontalBulk from "./RowHorizontalBulk";
import RowHorizontalLinear from "./RowHorizontalLinear";
import RowHorizontalOutline from "./RowHorizontalOutline";
import RowHorizontalTwotone from "./RowHorizontalTwotone";

export { RowHorizontalBold, RowHorizontalBroken, RowHorizontalBulk, RowHorizontalLinear, RowHorizontalOutline, RowHorizontalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "row-horizontal-bold",
    Component: RowHorizontalBold,
    componentName: "RowHorizontalBold",
  },
  {
    variant: "broken",
    slug: "row-horizontal-broken",
    Component: RowHorizontalBroken,
    componentName: "RowHorizontalBroken",
  },
  {
    variant: "bulk",
    slug: "row-horizontal-bulk",
    Component: RowHorizontalBulk,
    componentName: "RowHorizontalBulk",
  },
  {
    variant: "linear",
    slug: "row-horizontal-linear",
    Component: RowHorizontalLinear,
    componentName: "RowHorizontalLinear",
  },
  {
    variant: "outline",
    slug: "row-horizontal-outline",
    Component: RowHorizontalOutline,
    componentName: "RowHorizontalOutline",
  },
  {
    variant: "twotone",
    slug: "row-horizontal-twotone",
    Component: RowHorizontalTwotone,
    componentName: "RowHorizontalTwotone",
  },
];
