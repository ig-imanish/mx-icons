import MouseSquareBold from "./MouseSquareBold";
import MouseSquareBroken from "./MouseSquareBroken";
import MouseSquareBulk from "./MouseSquareBulk";
import MouseSquareLinear from "./MouseSquareLinear";
import MouseSquareOutline from "./MouseSquareOutline";
import MouseSquareTwotone from "./MouseSquareTwotone";

export { MouseSquareBold, MouseSquareBroken, MouseSquareBulk, MouseSquareLinear, MouseSquareOutline, MouseSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mouse-square-bold",
    Component: MouseSquareBold,
    componentName: "MouseSquareBold",
  },
  {
    variant: "broken",
    slug: "mouse-square-broken",
    Component: MouseSquareBroken,
    componentName: "MouseSquareBroken",
  },
  {
    variant: "bulk",
    slug: "mouse-square-bulk",
    Component: MouseSquareBulk,
    componentName: "MouseSquareBulk",
  },
  {
    variant: "linear",
    slug: "mouse-square-linear",
    Component: MouseSquareLinear,
    componentName: "MouseSquareLinear",
  },
  {
    variant: "outline",
    slug: "mouse-square-outline",
    Component: MouseSquareOutline,
    componentName: "MouseSquareOutline",
  },
  {
    variant: "twotone",
    slug: "mouse-square-twotone",
    Component: MouseSquareTwotone,
    componentName: "MouseSquareTwotone",
  },
];
