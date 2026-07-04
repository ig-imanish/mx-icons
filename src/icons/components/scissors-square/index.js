import ScissorsSquareBold from "./ScissorsSquareBold";
import ScissorsSquareBroken from "./ScissorsSquareBroken";
import ScissorsSquareBulk from "./ScissorsSquareBulk";
import ScissorsSquareLinear from "./ScissorsSquareLinear";
import ScissorsSquareOutline from "./ScissorsSquareOutline";
import ScissorsSquareTwotone from "./ScissorsSquareTwotone";

export { ScissorsSquareBold, ScissorsSquareBroken, ScissorsSquareBulk, ScissorsSquareLinear, ScissorsSquareOutline, ScissorsSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scissors-square-bold",
    Component: ScissorsSquareBold,
    componentName: "ScissorsSquareBold",
  },,
  {
    variant: "broken",
    slug: "scissors-square-broken",
    Component: ScissorsSquareBroken,
    componentName: "ScissorsSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "scissors-square-bulk",
    Component: ScissorsSquareBulk,
    componentName: "ScissorsSquareBulk",
  },,
  {
    variant: "linear",
    slug: "scissors-square-linear",
    Component: ScissorsSquareLinear,
    componentName: "ScissorsSquareLinear",
  },,
  {
    variant: "outline",
    slug: "scissors-square-outline",
    Component: ScissorsSquareOutline,
    componentName: "ScissorsSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "scissors-square-twotone",
    Component: ScissorsSquareTwotone,
    componentName: "ScissorsSquareTwotone",
  }
];

export default { ScissorsSquareBold, ScissorsSquareBroken, ScissorsSquareBulk, ScissorsSquareLinear, ScissorsSquareOutline, ScissorsSquareTwotone };
