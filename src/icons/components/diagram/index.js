import DiagramBold from "./DiagramBold";
import DiagramBroken from "./DiagramBroken";
import DiagramBulk from "./DiagramBulk";
import DiagramLinear from "./DiagramLinear";
import DiagramOutline from "./DiagramOutline";
import DiagramTwotone from "./DiagramTwotone";

export { DiagramBold, DiagramBroken, DiagramBulk, DiagramLinear, DiagramOutline, DiagramTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "diagram-bold",
    Component: DiagramBold,
    componentName: "DiagramBold",
  },
  {
    variant: "broken",
    slug: "diagram-broken",
    Component: DiagramBroken,
    componentName: "DiagramBroken",
  },
  {
    variant: "bulk",
    slug: "diagram-bulk",
    Component: DiagramBulk,
    componentName: "DiagramBulk",
  },
  {
    variant: "linear",
    slug: "diagram-linear",
    Component: DiagramLinear,
    componentName: "DiagramLinear",
  },
  {
    variant: "outline",
    slug: "diagram-outline",
    Component: DiagramOutline,
    componentName: "DiagramOutline",
  },
  {
    variant: "twotone",
    slug: "diagram-twotone",
    Component: DiagramTwotone,
    componentName: "DiagramTwotone",
  },
];
