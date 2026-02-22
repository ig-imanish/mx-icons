import BrushBold from "./BrushBold";
import BrushBroken from "./BrushBroken";
import BrushBulk from "./BrushBulk";
import BrushLinear from "./BrushLinear";
import BrushOutline from "./BrushOutline";
import BrushTwotone from "./BrushTwotone";

export { BrushBold, BrushBroken, BrushBulk, BrushLinear, BrushOutline, BrushTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "brush-bold",
    Component: BrushBold,
    componentName: "BrushBold",
  },
  {
    variant: "broken",
    slug: "brush-broken",
    Component: BrushBroken,
    componentName: "BrushBroken",
  },
  {
    variant: "bulk",
    slug: "brush-bulk",
    Component: BrushBulk,
    componentName: "BrushBulk",
  },
  {
    variant: "linear",
    slug: "brush-linear",
    Component: BrushLinear,
    componentName: "BrushLinear",
  },
  {
    variant: "outline",
    slug: "brush-outline",
    Component: BrushOutline,
    componentName: "BrushOutline",
  },
  {
    variant: "twotone",
    slug: "brush-twotone",
    Component: BrushTwotone,
    componentName: "BrushTwotone",
  },
];
