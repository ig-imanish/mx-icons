import EraserSquareBold from "./EraserSquareBold";
import EraserSquareBroken from "./EraserSquareBroken";
import EraserSquareBulk from "./EraserSquareBulk";
import EraserSquareLinear from "./EraserSquareLinear";
import EraserSquareOutline from "./EraserSquareOutline";
import EraserSquareTwotone from "./EraserSquareTwotone";

export { EraserSquareBold, EraserSquareBroken, EraserSquareBulk, EraserSquareLinear, EraserSquareOutline, EraserSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "eraser-square-bold",
    Component: EraserSquareBold,
    componentName: "EraserSquareBold",
  },,
  {
    variant: "broken",
    slug: "eraser-square-broken",
    Component: EraserSquareBroken,
    componentName: "EraserSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "eraser-square-bulk",
    Component: EraserSquareBulk,
    componentName: "EraserSquareBulk",
  },,
  {
    variant: "linear",
    slug: "eraser-square-linear",
    Component: EraserSquareLinear,
    componentName: "EraserSquareLinear",
  },,
  {
    variant: "outline",
    slug: "eraser-square-outline",
    Component: EraserSquareOutline,
    componentName: "EraserSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "eraser-square-twotone",
    Component: EraserSquareTwotone,
    componentName: "EraserSquareTwotone",
  }
];

export default { EraserSquareBold, EraserSquareBroken, EraserSquareBulk, EraserSquareLinear, EraserSquareOutline, EraserSquareTwotone };
