import GraphDownBold from "./GraphDownBold";
import GraphDownBroken from "./GraphDownBroken";
import GraphDownBulk from "./GraphDownBulk";
import GraphDownLinear from "./GraphDownLinear";
import GraphDownOutline from "./GraphDownOutline";
import GraphDownTwotone from "./GraphDownTwotone";

export { GraphDownBold, GraphDownBroken, GraphDownBulk, GraphDownLinear, GraphDownOutline, GraphDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "graph-down-bold",
    Component: GraphDownBold,
    componentName: "GraphDownBold",
  },,
  {
    variant: "broken",
    slug: "graph-down-broken",
    Component: GraphDownBroken,
    componentName: "GraphDownBroken",
  },,
  {
    variant: "bulk",
    slug: "graph-down-bulk",
    Component: GraphDownBulk,
    componentName: "GraphDownBulk",
  },,
  {
    variant: "linear",
    slug: "graph-down-linear",
    Component: GraphDownLinear,
    componentName: "GraphDownLinear",
  },,
  {
    variant: "outline",
    slug: "graph-down-outline",
    Component: GraphDownOutline,
    componentName: "GraphDownOutline",
  },,
  {
    variant: "twotone",
    slug: "graph-down-twotone",
    Component: GraphDownTwotone,
    componentName: "GraphDownTwotone",
  }
];

export default { GraphDownBold, GraphDownBroken, GraphDownBulk, GraphDownLinear, GraphDownOutline, GraphDownTwotone };
