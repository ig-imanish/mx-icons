import EraserBold from "./EraserBold";
import EraserBroken from "./EraserBroken";
import EraserBulk from "./EraserBulk";
import EraserLinear from "./EraserLinear";
import EraserOutline from "./EraserOutline";
import EraserTwotone from "./EraserTwotone";

export { EraserBold, EraserBroken, EraserBulk, EraserLinear, EraserOutline, EraserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "eraser-bold",
    Component: EraserBold,
    componentName: "EraserBold",
  },
  {
    variant: "broken",
    slug: "eraser-broken",
    Component: EraserBroken,
    componentName: "EraserBroken",
  },
  {
    variant: "bulk",
    slug: "eraser-bulk",
    Component: EraserBulk,
    componentName: "EraserBulk",
  },
  {
    variant: "linear",
    slug: "eraser-linear",
    Component: EraserLinear,
    componentName: "EraserLinear",
  },
  {
    variant: "outline",
    slug: "eraser-outline",
    Component: EraserOutline,
    componentName: "EraserOutline",
  },
  {
    variant: "twotone",
    slug: "eraser-twotone",
    Component: EraserTwotone,
    componentName: "EraserTwotone",
  },
];
