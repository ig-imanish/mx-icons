import PresentationGraphBold from "./PresentationGraphBold";
import PresentationGraphBroken from "./PresentationGraphBroken";
import PresentationGraphBulk from "./PresentationGraphBulk";
import PresentationGraphLinear from "./PresentationGraphLinear";
import PresentationGraphOutline from "./PresentationGraphOutline";
import PresentationGraphTwotone from "./PresentationGraphTwotone";

export { PresentationGraphBold, PresentationGraphBroken, PresentationGraphBulk, PresentationGraphLinear, PresentationGraphOutline, PresentationGraphTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "presentation-graph-bold",
    Component: PresentationGraphBold,
    componentName: "PresentationGraphBold",
  },,
  {
    variant: "broken",
    slug: "presentation-graph-broken",
    Component: PresentationGraphBroken,
    componentName: "PresentationGraphBroken",
  },,
  {
    variant: "bulk",
    slug: "presentation-graph-bulk",
    Component: PresentationGraphBulk,
    componentName: "PresentationGraphBulk",
  },,
  {
    variant: "linear",
    slug: "presentation-graph-linear",
    Component: PresentationGraphLinear,
    componentName: "PresentationGraphLinear",
  },,
  {
    variant: "outline",
    slug: "presentation-graph-outline",
    Component: PresentationGraphOutline,
    componentName: "PresentationGraphOutline",
  },,
  {
    variant: "twotone",
    slug: "presentation-graph-twotone",
    Component: PresentationGraphTwotone,
    componentName: "PresentationGraphTwotone",
  }
];

export default { PresentationGraphBold, PresentationGraphBroken, PresentationGraphBulk, PresentationGraphLinear, PresentationGraphOutline, PresentationGraphTwotone };
