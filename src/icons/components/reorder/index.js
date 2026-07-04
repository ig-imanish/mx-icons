import ReorderBold from "./ReorderBold";
import ReorderBroken from "./ReorderBroken";
import ReorderBulk from "./ReorderBulk";
import ReorderLinear from "./ReorderLinear";
import ReorderOutline from "./ReorderOutline";
import ReorderTwotone from "./ReorderTwotone";

export { ReorderBold, ReorderBroken, ReorderBulk, ReorderLinear, ReorderOutline, ReorderTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "reorder-bold",
    Component: ReorderBold,
    componentName: "ReorderBold",
  },,
  {
    variant: "broken",
    slug: "reorder-broken",
    Component: ReorderBroken,
    componentName: "ReorderBroken",
  },,
  {
    variant: "bulk",
    slug: "reorder-bulk",
    Component: ReorderBulk,
    componentName: "ReorderBulk",
  },,
  {
    variant: "linear",
    slug: "reorder-linear",
    Component: ReorderLinear,
    componentName: "ReorderLinear",
  },,
  {
    variant: "outline",
    slug: "reorder-outline",
    Component: ReorderOutline,
    componentName: "ReorderOutline",
  },,
  {
    variant: "twotone",
    slug: "reorder-twotone",
    Component: ReorderTwotone,
    componentName: "ReorderTwotone",
  }
];

export default { ReorderBold, ReorderBroken, ReorderBulk, ReorderLinear, ReorderOutline, ReorderTwotone };
