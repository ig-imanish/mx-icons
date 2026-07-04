import GraphNewBold from "./GraphNewBold";
import GraphNewBroken from "./GraphNewBroken";
import GraphNewBulk from "./GraphNewBulk";
import GraphNewLinear from "./GraphNewLinear";
import GraphNewOutline from "./GraphNewOutline";
import GraphNewTwotone from "./GraphNewTwotone";

export { GraphNewBold, GraphNewBroken, GraphNewBulk, GraphNewLinear, GraphNewOutline, GraphNewTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "graph-new-bold",
    Component: GraphNewBold,
    componentName: "GraphNewBold",
  },,
  {
    variant: "broken",
    slug: "graph-new-broken",
    Component: GraphNewBroken,
    componentName: "GraphNewBroken",
  },,
  {
    variant: "bulk",
    slug: "graph-new-bulk",
    Component: GraphNewBulk,
    componentName: "GraphNewBulk",
  },,
  {
    variant: "linear",
    slug: "graph-new-linear",
    Component: GraphNewLinear,
    componentName: "GraphNewLinear",
  },,
  {
    variant: "outline",
    slug: "graph-new-outline",
    Component: GraphNewOutline,
    componentName: "GraphNewOutline",
  },,
  {
    variant: "twotone",
    slug: "graph-new-twotone",
    Component: GraphNewTwotone,
    componentName: "GraphNewTwotone",
  }
];

export default { GraphNewBold, GraphNewBroken, GraphNewBulk, GraphNewLinear, GraphNewOutline, GraphNewTwotone };
