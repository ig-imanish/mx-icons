import MinimizeSquareBold from "./MinimizeSquareBold";
import MinimizeSquareBroken from "./MinimizeSquareBroken";
import MinimizeSquareBulk from "./MinimizeSquareBulk";
import MinimizeSquareLinear from "./MinimizeSquareLinear";
import MinimizeSquareOutline from "./MinimizeSquareOutline";
import MinimizeSquareTwotone from "./MinimizeSquareTwotone";

export { MinimizeSquareBold, MinimizeSquareBroken, MinimizeSquareBulk, MinimizeSquareLinear, MinimizeSquareOutline, MinimizeSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "minimize-square-bold",
    Component: MinimizeSquareBold,
    componentName: "MinimizeSquareBold",
  },,
  {
    variant: "broken",
    slug: "minimize-square-broken",
    Component: MinimizeSquareBroken,
    componentName: "MinimizeSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "minimize-square-bulk",
    Component: MinimizeSquareBulk,
    componentName: "MinimizeSquareBulk",
  },,
  {
    variant: "linear",
    slug: "minimize-square-linear",
    Component: MinimizeSquareLinear,
    componentName: "MinimizeSquareLinear",
  },,
  {
    variant: "outline",
    slug: "minimize-square-outline",
    Component: MinimizeSquareOutline,
    componentName: "MinimizeSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "minimize-square-twotone",
    Component: MinimizeSquareTwotone,
    componentName: "MinimizeSquareTwotone",
  }
];

export default { MinimizeSquareBold, MinimizeSquareBroken, MinimizeSquareBulk, MinimizeSquareLinear, MinimizeSquareOutline, MinimizeSquareTwotone };
