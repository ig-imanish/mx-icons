import GraphBold from "./GraphBold";
import GraphBroken from "./GraphBroken";
import GraphBulk from "./GraphBulk";
import GraphLinear from "./GraphLinear";
import GraphOutline from "./GraphOutline";
import GraphTwotone from "./GraphTwotone";

export { GraphBold, GraphBroken, GraphBulk, GraphLinear, GraphOutline, GraphTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "graph-bold",
    Component: GraphBold,
    componentName: "GraphBold",
  },
  {
    variant: "broken",
    slug: "graph-broken",
    Component: GraphBroken,
    componentName: "GraphBroken",
  },
  {
    variant: "bulk",
    slug: "graph-bulk",
    Component: GraphBulk,
    componentName: "GraphBulk",
  },
  {
    variant: "linear",
    slug: "graph-linear",
    Component: GraphLinear,
    componentName: "GraphLinear",
  },
  {
    variant: "outline",
    slug: "graph-outline",
    Component: GraphOutline,
    componentName: "GraphOutline",
  },
  {
    variant: "twotone",
    slug: "graph-twotone",
    Component: GraphTwotone,
    componentName: "GraphTwotone",
  },
];
