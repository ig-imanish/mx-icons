import HierarchySquareBold from "./HierarchySquareBold";
import HierarchySquareBroken from "./HierarchySquareBroken";
import HierarchySquareBulk from "./HierarchySquareBulk";
import HierarchySquareLinear from "./HierarchySquareLinear";
import HierarchySquareOutline from "./HierarchySquareOutline";
import HierarchySquareTwotone from "./HierarchySquareTwotone";

export { HierarchySquareBold, HierarchySquareBroken, HierarchySquareBulk, HierarchySquareLinear, HierarchySquareOutline, HierarchySquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hierarchy-square-bold",
    Component: HierarchySquareBold,
    componentName: "HierarchySquareBold",
  },
  {
    variant: "broken",
    slug: "hierarchy-square-broken",
    Component: HierarchySquareBroken,
    componentName: "HierarchySquareBroken",
  },
  {
    variant: "bulk",
    slug: "hierarchy-square-bulk",
    Component: HierarchySquareBulk,
    componentName: "HierarchySquareBulk",
  },
  {
    variant: "linear",
    slug: "hierarchy-square-linear",
    Component: HierarchySquareLinear,
    componentName: "HierarchySquareLinear",
  },
  {
    variant: "outline",
    slug: "hierarchy-square-outline",
    Component: HierarchySquareOutline,
    componentName: "HierarchySquareOutline",
  },
  {
    variant: "twotone",
    slug: "hierarchy-square-twotone",
    Component: HierarchySquareTwotone,
    componentName: "HierarchySquareTwotone",
  },
];
