import CompassSquareBold from "./CompassSquareBold";
import CompassSquareBroken from "./CompassSquareBroken";
import CompassSquareBulk from "./CompassSquareBulk";
import CompassSquareLinear from "./CompassSquareLinear";
import CompassSquareOutline from "./CompassSquareOutline";
import CompassSquareTwotone from "./CompassSquareTwotone";

export { CompassSquareBold, CompassSquareBroken, CompassSquareBulk, CompassSquareLinear, CompassSquareOutline, CompassSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "compass-square-bold",
    Component: CompassSquareBold,
    componentName: "CompassSquareBold",
  },,
  {
    variant: "broken",
    slug: "compass-square-broken",
    Component: CompassSquareBroken,
    componentName: "CompassSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "compass-square-bulk",
    Component: CompassSquareBulk,
    componentName: "CompassSquareBulk",
  },,
  {
    variant: "linear",
    slug: "compass-square-linear",
    Component: CompassSquareLinear,
    componentName: "CompassSquareLinear",
  },,
  {
    variant: "outline",
    slug: "compass-square-outline",
    Component: CompassSquareOutline,
    componentName: "CompassSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "compass-square-twotone",
    Component: CompassSquareTwotone,
    componentName: "CompassSquareTwotone",
  }
];

export default { CompassSquareBold, CompassSquareBroken, CompassSquareBulk, CompassSquareLinear, CompassSquareOutline, CompassSquareTwotone };
