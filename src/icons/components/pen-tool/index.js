import PenToolBold from "./PenToolBold";
import PenToolBroken from "./PenToolBroken";
import PenToolBulk from "./PenToolBulk";
import PenToolLinear from "./PenToolLinear";
import PenToolOutline from "./PenToolOutline";
import PenToolTwotone from "./PenToolTwotone";

export { PenToolBold, PenToolBroken, PenToolBulk, PenToolLinear, PenToolOutline, PenToolTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pen-tool-bold",
    Component: PenToolBold,
    componentName: "PenToolBold",
  },
  {
    variant: "broken",
    slug: "pen-tool-broken",
    Component: PenToolBroken,
    componentName: "PenToolBroken",
  },
  {
    variant: "bulk",
    slug: "pen-tool-bulk",
    Component: PenToolBulk,
    componentName: "PenToolBulk",
  },
  {
    variant: "linear",
    slug: "pen-tool-linear",
    Component: PenToolLinear,
    componentName: "PenToolLinear",
  },
  {
    variant: "outline",
    slug: "pen-tool-outline",
    Component: PenToolOutline,
    componentName: "PenToolOutline",
  },
  {
    variant: "twotone",
    slug: "pen-tool-twotone",
    Component: PenToolTwotone,
    componentName: "PenToolTwotone",
  },
];
