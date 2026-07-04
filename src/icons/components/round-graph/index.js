import RoundGraphBold from "./RoundGraphBold";
import RoundGraphBroken from "./RoundGraphBroken";
import RoundGraphBulk from "./RoundGraphBulk";
import RoundGraphLinear from "./RoundGraphLinear";
import RoundGraphOutline from "./RoundGraphOutline";
import RoundGraphTwotone from "./RoundGraphTwotone";

export { RoundGraphBold, RoundGraphBroken, RoundGraphBulk, RoundGraphLinear, RoundGraphOutline, RoundGraphTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "round-graph-bold",
    Component: RoundGraphBold,
    componentName: "RoundGraphBold",
  },,
  {
    variant: "broken",
    slug: "round-graph-broken",
    Component: RoundGraphBroken,
    componentName: "RoundGraphBroken",
  },,
  {
    variant: "bulk",
    slug: "round-graph-bulk",
    Component: RoundGraphBulk,
    componentName: "RoundGraphBulk",
  },,
  {
    variant: "linear",
    slug: "round-graph-linear",
    Component: RoundGraphLinear,
    componentName: "RoundGraphLinear",
  },,
  {
    variant: "outline",
    slug: "round-graph-outline",
    Component: RoundGraphOutline,
    componentName: "RoundGraphOutline",
  },,
  {
    variant: "twotone",
    slug: "round-graph-twotone",
    Component: RoundGraphTwotone,
    componentName: "RoundGraphTwotone",
  }
];

export default { RoundGraphBold, RoundGraphBroken, RoundGraphBulk, RoundGraphLinear, RoundGraphOutline, RoundGraphTwotone };
