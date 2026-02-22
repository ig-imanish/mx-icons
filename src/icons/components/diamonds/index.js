import DiamondsBold from "./DiamondsBold";
import DiamondsBroken from "./DiamondsBroken";
import DiamondsBulk from "./DiamondsBulk";
import DiamondsLinear from "./DiamondsLinear";
import DiamondsOutline from "./DiamondsOutline";
import DiamondsTwotone from "./DiamondsTwotone";

export { DiamondsBold, DiamondsBroken, DiamondsBulk, DiamondsLinear, DiamondsOutline, DiamondsTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "diamonds-bold",
    Component: DiamondsBold,
    componentName: "DiamondsBold",
  },
  {
    variant: "broken",
    slug: "diamonds-broken",
    Component: DiamondsBroken,
    componentName: "DiamondsBroken",
  },
  {
    variant: "bulk",
    slug: "diamonds-bulk",
    Component: DiamondsBulk,
    componentName: "DiamondsBulk",
  },
  {
    variant: "linear",
    slug: "diamonds-linear",
    Component: DiamondsLinear,
    componentName: "DiamondsLinear",
  },
  {
    variant: "outline",
    slug: "diamonds-outline",
    Component: DiamondsOutline,
    componentName: "DiamondsOutline",
  },
  {
    variant: "twotone",
    slug: "diamonds-twotone",
    Component: DiamondsTwotone,
    componentName: "DiamondsTwotone",
  },
];
