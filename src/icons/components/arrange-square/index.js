import ArrangeSquareBold from "./ArrangeSquareBold";
import ArrangeSquareBroken from "./ArrangeSquareBroken";
import ArrangeSquareBulk from "./ArrangeSquareBulk";
import ArrangeSquareLinear from "./ArrangeSquareLinear";
import ArrangeSquareOutline from "./ArrangeSquareOutline";
import ArrangeSquareTwotone from "./ArrangeSquareTwotone";

export { ArrangeSquareBold, ArrangeSquareBroken, ArrangeSquareBulk, ArrangeSquareLinear, ArrangeSquareOutline, ArrangeSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "arrange-square-bold",
    Component: ArrangeSquareBold,
    componentName: "ArrangeSquareBold",
  },
  {
    variant: "broken",
    slug: "arrange-square-broken",
    Component: ArrangeSquareBroken,
    componentName: "ArrangeSquareBroken",
  },
  {
    variant: "bulk",
    slug: "arrange-square-bulk",
    Component: ArrangeSquareBulk,
    componentName: "ArrangeSquareBulk",
  },
  {
    variant: "linear",
    slug: "arrange-square-linear",
    Component: ArrangeSquareLinear,
    componentName: "ArrangeSquareLinear",
  },
  {
    variant: "outline",
    slug: "arrange-square-outline",
    Component: ArrangeSquareOutline,
    componentName: "ArrangeSquareOutline",
  },
  {
    variant: "twotone",
    slug: "arrange-square-twotone",
    Component: ArrangeSquareTwotone,
    componentName: "ArrangeSquareTwotone",
  },
];
