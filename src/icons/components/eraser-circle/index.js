import EraserCircleBold from "./EraserCircleBold";
import EraserCircleBroken from "./EraserCircleBroken";
import EraserCircleBulk from "./EraserCircleBulk";
import EraserCircleLinear from "./EraserCircleLinear";
import EraserCircleOutline from "./EraserCircleOutline";
import EraserCircleTwotone from "./EraserCircleTwotone";

export { EraserCircleBold, EraserCircleBroken, EraserCircleBulk, EraserCircleLinear, EraserCircleOutline, EraserCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "eraser-circle-bold",
    Component: EraserCircleBold,
    componentName: "EraserCircleBold",
  },,
  {
    variant: "broken",
    slug: "eraser-circle-broken",
    Component: EraserCircleBroken,
    componentName: "EraserCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "eraser-circle-bulk",
    Component: EraserCircleBulk,
    componentName: "EraserCircleBulk",
  },,
  {
    variant: "linear",
    slug: "eraser-circle-linear",
    Component: EraserCircleLinear,
    componentName: "EraserCircleLinear",
  },,
  {
    variant: "outline",
    slug: "eraser-circle-outline",
    Component: EraserCircleOutline,
    componentName: "EraserCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "eraser-circle-twotone",
    Component: EraserCircleTwotone,
    componentName: "EraserCircleTwotone",
  }
];

export default { EraserCircleBold, EraserCircleBroken, EraserCircleBulk, EraserCircleLinear, EraserCircleOutline, EraserCircleTwotone };
