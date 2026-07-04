import DiagramUpBold from "./DiagramUpBold";
import DiagramUpBroken from "./DiagramUpBroken";
import DiagramUpBulk from "./DiagramUpBulk";
import DiagramUpLinear from "./DiagramUpLinear";
import DiagramUpOutline from "./DiagramUpOutline";
import DiagramUpTwotone from "./DiagramUpTwotone";

export { DiagramUpBold, DiagramUpBroken, DiagramUpBulk, DiagramUpLinear, DiagramUpOutline, DiagramUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "diagram-up-bold",
    Component: DiagramUpBold,
    componentName: "DiagramUpBold",
  },,
  {
    variant: "broken",
    slug: "diagram-up-broken",
    Component: DiagramUpBroken,
    componentName: "DiagramUpBroken",
  },,
  {
    variant: "bulk",
    slug: "diagram-up-bulk",
    Component: DiagramUpBulk,
    componentName: "DiagramUpBulk",
  },,
  {
    variant: "linear",
    slug: "diagram-up-linear",
    Component: DiagramUpLinear,
    componentName: "DiagramUpLinear",
  },,
  {
    variant: "outline",
    slug: "diagram-up-outline",
    Component: DiagramUpOutline,
    componentName: "DiagramUpOutline",
  },,
  {
    variant: "twotone",
    slug: "diagram-up-twotone",
    Component: DiagramUpTwotone,
    componentName: "DiagramUpTwotone",
  }
];

export default { DiagramUpBold, DiagramUpBroken, DiagramUpBulk, DiagramUpLinear, DiagramUpOutline, DiagramUpTwotone };
