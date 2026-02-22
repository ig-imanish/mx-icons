import RowVerticalBold from "./RowVerticalBold";
import RowVerticalBroken from "./RowVerticalBroken";
import RowVerticalBulk from "./RowVerticalBulk";
import RowVerticalLinear from "./RowVerticalLinear";
import RowVerticalOutline from "./RowVerticalOutline";
import RowVerticalTwotone from "./RowVerticalTwotone";

export { RowVerticalBold, RowVerticalBroken, RowVerticalBulk, RowVerticalLinear, RowVerticalOutline, RowVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "row-vertical-bold",
    Component: RowVerticalBold,
    componentName: "RowVerticalBold",
  },
  {
    variant: "broken",
    slug: "row-vertical-broken",
    Component: RowVerticalBroken,
    componentName: "RowVerticalBroken",
  },
  {
    variant: "bulk",
    slug: "row-vertical-bulk",
    Component: RowVerticalBulk,
    componentName: "RowVerticalBulk",
  },
  {
    variant: "linear",
    slug: "row-vertical-linear",
    Component: RowVerticalLinear,
    componentName: "RowVerticalLinear",
  },
  {
    variant: "outline",
    slug: "row-vertical-outline",
    Component: RowVerticalOutline,
    componentName: "RowVerticalOutline",
  },
  {
    variant: "twotone",
    slug: "row-vertical-twotone",
    Component: RowVerticalTwotone,
    componentName: "RowVerticalTwotone",
  },
];
