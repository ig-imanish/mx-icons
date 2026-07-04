import SafeSquareBold from "./SafeSquareBold";
import SafeSquareBroken from "./SafeSquareBroken";
import SafeSquareBulk from "./SafeSquareBulk";
import SafeSquareLinear from "./SafeSquareLinear";
import SafeSquareOutline from "./SafeSquareOutline";
import SafeSquareTwotone from "./SafeSquareTwotone";

export { SafeSquareBold, SafeSquareBroken, SafeSquareBulk, SafeSquareLinear, SafeSquareOutline, SafeSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "safe-square-bold",
    Component: SafeSquareBold,
    componentName: "SafeSquareBold",
  },,
  {
    variant: "broken",
    slug: "safe-square-broken",
    Component: SafeSquareBroken,
    componentName: "SafeSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "safe-square-bulk",
    Component: SafeSquareBulk,
    componentName: "SafeSquareBulk",
  },,
  {
    variant: "linear",
    slug: "safe-square-linear",
    Component: SafeSquareLinear,
    componentName: "SafeSquareLinear",
  },,
  {
    variant: "outline",
    slug: "safe-square-outline",
    Component: SafeSquareOutline,
    componentName: "SafeSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "safe-square-twotone",
    Component: SafeSquareTwotone,
    componentName: "SafeSquareTwotone",
  }
];

export default { SafeSquareBold, SafeSquareBroken, SafeSquareBulk, SafeSquareLinear, SafeSquareOutline, SafeSquareTwotone };
