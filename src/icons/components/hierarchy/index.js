import HierarchyBold from "./HierarchyBold";
import HierarchyBroken from "./HierarchyBroken";
import HierarchyBulk from "./HierarchyBulk";
import HierarchyLinear from "./HierarchyLinear";
import HierarchyOutline from "./HierarchyOutline";
import HierarchyTwotone from "./HierarchyTwotone";

export { HierarchyBold, HierarchyBroken, HierarchyBulk, HierarchyLinear, HierarchyOutline, HierarchyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "hierarchy-bold",
    Component: HierarchyBold,
    componentName: "HierarchyBold",
  },
  {
    variant: "broken",
    slug: "hierarchy-broken",
    Component: HierarchyBroken,
    componentName: "HierarchyBroken",
  },
  {
    variant: "bulk",
    slug: "hierarchy-bulk",
    Component: HierarchyBulk,
    componentName: "HierarchyBulk",
  },
  {
    variant: "linear",
    slug: "hierarchy-linear",
    Component: HierarchyLinear,
    componentName: "HierarchyLinear",
  },
  {
    variant: "outline",
    slug: "hierarchy-outline",
    Component: HierarchyOutline,
    componentName: "HierarchyOutline",
  },
  {
    variant: "twotone",
    slug: "hierarchy-twotone",
    Component: HierarchyTwotone,
    componentName: "HierarchyTwotone",
  },
];
