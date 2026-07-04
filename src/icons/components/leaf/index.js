import LeafBold from "./LeafBold";
import LeafBroken from "./LeafBroken";
import LeafBulk from "./LeafBulk";
import LeafLinear from "./LeafLinear";
import LeafOutline from "./LeafOutline";
import LeafTwotone from "./LeafTwotone";

export { LeafBold, LeafBroken, LeafBulk, LeafLinear, LeafOutline, LeafTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "leaf-bold",
    Component: LeafBold,
    componentName: "LeafBold",
  },,
  {
    variant: "broken",
    slug: "leaf-broken",
    Component: LeafBroken,
    componentName: "LeafBroken",
  },,
  {
    variant: "bulk",
    slug: "leaf-bulk",
    Component: LeafBulk,
    componentName: "LeafBulk",
  },,
  {
    variant: "linear",
    slug: "leaf-linear",
    Component: LeafLinear,
    componentName: "LeafLinear",
  },,
  {
    variant: "outline",
    slug: "leaf-outline",
    Component: LeafOutline,
    componentName: "LeafOutline",
  },,
  {
    variant: "twotone",
    slug: "leaf-twotone",
    Component: LeafTwotone,
    componentName: "LeafTwotone",
  }
];

export default { LeafBold, LeafBroken, LeafBulk, LeafLinear, LeafOutline, LeafTwotone };
