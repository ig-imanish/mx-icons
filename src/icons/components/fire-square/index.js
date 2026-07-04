import FireSquareBold from "./FireSquareBold";
import FireSquareBroken from "./FireSquareBroken";
import FireSquareBulk from "./FireSquareBulk";
import FireSquareLinear from "./FireSquareLinear";
import FireSquareOutline from "./FireSquareOutline";
import FireSquareTwotone from "./FireSquareTwotone";

export { FireSquareBold, FireSquareBroken, FireSquareBulk, FireSquareLinear, FireSquareOutline, FireSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "fire-square-bold",
    Component: FireSquareBold,
    componentName: "FireSquareBold",
  },,
  {
    variant: "broken",
    slug: "fire-square-broken",
    Component: FireSquareBroken,
    componentName: "FireSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "fire-square-bulk",
    Component: FireSquareBulk,
    componentName: "FireSquareBulk",
  },,
  {
    variant: "linear",
    slug: "fire-square-linear",
    Component: FireSquareLinear,
    componentName: "FireSquareLinear",
  },,
  {
    variant: "outline",
    slug: "fire-square-outline",
    Component: FireSquareOutline,
    componentName: "FireSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "fire-square-twotone",
    Component: FireSquareTwotone,
    componentName: "FireSquareTwotone",
  }
];

export default { FireSquareBold, FireSquareBroken, FireSquareBulk, FireSquareLinear, FireSquareOutline, FireSquareTwotone };
