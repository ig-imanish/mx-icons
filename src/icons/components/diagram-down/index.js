import DiagramDownBold from "./DiagramDownBold";
import DiagramDownBroken from "./DiagramDownBroken";
import DiagramDownBulk from "./DiagramDownBulk";
import DiagramDownLinear from "./DiagramDownLinear";
import DiagramDownOutline from "./DiagramDownOutline";
import DiagramDownTwotone from "./DiagramDownTwotone";

export { DiagramDownBold, DiagramDownBroken, DiagramDownBulk, DiagramDownLinear, DiagramDownOutline, DiagramDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "diagram-down-bold",
    Component: DiagramDownBold,
    componentName: "DiagramDownBold",
  },,
  {
    variant: "broken",
    slug: "diagram-down-broken",
    Component: DiagramDownBroken,
    componentName: "DiagramDownBroken",
  },,
  {
    variant: "bulk",
    slug: "diagram-down-bulk",
    Component: DiagramDownBulk,
    componentName: "DiagramDownBulk",
  },,
  {
    variant: "linear",
    slug: "diagram-down-linear",
    Component: DiagramDownLinear,
    componentName: "DiagramDownLinear",
  },,
  {
    variant: "outline",
    slug: "diagram-down-outline",
    Component: DiagramDownOutline,
    componentName: "DiagramDownOutline",
  },,
  {
    variant: "twotone",
    slug: "diagram-down-twotone",
    Component: DiagramDownTwotone,
    componentName: "DiagramDownTwotone",
  }
];

export default { DiagramDownBold, DiagramDownBroken, DiagramDownBulk, DiagramDownLinear, DiagramDownOutline, DiagramDownTwotone };
