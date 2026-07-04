import GraphUpBold from "./GraphUpBold";
import GraphUpBroken from "./GraphUpBroken";
import GraphUpBulk from "./GraphUpBulk";
import GraphUpLinear from "./GraphUpLinear";
import GraphUpOutline from "./GraphUpOutline";
import GraphUpTwotone from "./GraphUpTwotone";

export { GraphUpBold, GraphUpBroken, GraphUpBulk, GraphUpLinear, GraphUpOutline, GraphUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "graph-up-bold",
    Component: GraphUpBold,
    componentName: "GraphUpBold",
  },,
  {
    variant: "broken",
    slug: "graph-up-broken",
    Component: GraphUpBroken,
    componentName: "GraphUpBroken",
  },,
  {
    variant: "bulk",
    slug: "graph-up-bulk",
    Component: GraphUpBulk,
    componentName: "GraphUpBulk",
  },,
  {
    variant: "linear",
    slug: "graph-up-linear",
    Component: GraphUpLinear,
    componentName: "GraphUpLinear",
  },,
  {
    variant: "outline",
    slug: "graph-up-outline",
    Component: GraphUpOutline,
    componentName: "GraphUpOutline",
  },,
  {
    variant: "twotone",
    slug: "graph-up-twotone",
    Component: GraphUpTwotone,
    componentName: "GraphUpTwotone",
  }
];

export default { GraphUpBold, GraphUpBroken, GraphUpBulk, GraphUpLinear, GraphUpOutline, GraphUpTwotone };
