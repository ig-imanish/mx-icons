import PaintRollerBold from "./PaintRollerBold";
import PaintRollerBroken from "./PaintRollerBroken";
import PaintRollerBulk from "./PaintRollerBulk";
import PaintRollerLinear from "./PaintRollerLinear";
import PaintRollerOutline from "./PaintRollerOutline";
import PaintRollerTwotone from "./PaintRollerTwotone";

export { PaintRollerBold, PaintRollerBroken, PaintRollerBulk, PaintRollerLinear, PaintRollerOutline, PaintRollerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "paint-roller-bold",
    Component: PaintRollerBold,
    componentName: "PaintRollerBold",
  },,
  {
    variant: "broken",
    slug: "paint-roller-broken",
    Component: PaintRollerBroken,
    componentName: "PaintRollerBroken",
  },,
  {
    variant: "bulk",
    slug: "paint-roller-bulk",
    Component: PaintRollerBulk,
    componentName: "PaintRollerBulk",
  },,
  {
    variant: "linear",
    slug: "paint-roller-linear",
    Component: PaintRollerLinear,
    componentName: "PaintRollerLinear",
  },,
  {
    variant: "outline",
    slug: "paint-roller-outline",
    Component: PaintRollerOutline,
    componentName: "PaintRollerOutline",
  },,
  {
    variant: "twotone",
    slug: "paint-roller-twotone",
    Component: PaintRollerTwotone,
    componentName: "PaintRollerTwotone",
  }
];

export default { PaintRollerBold, PaintRollerBroken, PaintRollerBulk, PaintRollerLinear, PaintRollerOutline, PaintRollerTwotone };
