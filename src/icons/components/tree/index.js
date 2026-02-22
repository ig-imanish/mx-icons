import TreeBold from "./TreeBold";
import TreeBroken from "./TreeBroken";
import TreeBulk from "./TreeBulk";
import TreeLinear from "./TreeLinear";
import TreeOutline from "./TreeOutline";
import TreeTwotone from "./TreeTwotone";

export { TreeBold, TreeBroken, TreeBulk, TreeLinear, TreeOutline, TreeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tree-bold",
    Component: TreeBold,
    componentName: "TreeBold",
  },
  {
    variant: "broken",
    slug: "tree-broken",
    Component: TreeBroken,
    componentName: "TreeBroken",
  },
  {
    variant: "bulk",
    slug: "tree-bulk",
    Component: TreeBulk,
    componentName: "TreeBulk",
  },
  {
    variant: "linear",
    slug: "tree-linear",
    Component: TreeLinear,
    componentName: "TreeLinear",
  },
  {
    variant: "outline",
    slug: "tree-outline",
    Component: TreeOutline,
    componentName: "TreeOutline",
  },
  {
    variant: "twotone",
    slug: "tree-twotone",
    Component: TreeTwotone,
    componentName: "TreeTwotone",
  },
];
