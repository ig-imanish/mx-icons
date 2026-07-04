import SadSquareBold from "./SadSquareBold";
import SadSquareBroken from "./SadSquareBroken";
import SadSquareBulk from "./SadSquareBulk";
import SadSquareLinear from "./SadSquareLinear";
import SadSquareOutline from "./SadSquareOutline";
import SadSquareTwotone from "./SadSquareTwotone";

export { SadSquareBold, SadSquareBroken, SadSquareBulk, SadSquareLinear, SadSquareOutline, SadSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sad-square-bold",
    Component: SadSquareBold,
    componentName: "SadSquareBold",
  },,
  {
    variant: "broken",
    slug: "sad-square-broken",
    Component: SadSquareBroken,
    componentName: "SadSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "sad-square-bulk",
    Component: SadSquareBulk,
    componentName: "SadSquareBulk",
  },,
  {
    variant: "linear",
    slug: "sad-square-linear",
    Component: SadSquareLinear,
    componentName: "SadSquareLinear",
  },,
  {
    variant: "outline",
    slug: "sad-square-outline",
    Component: SadSquareOutline,
    componentName: "SadSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "sad-square-twotone",
    Component: SadSquareTwotone,
    componentName: "SadSquareTwotone",
  }
];

export default { SadSquareBold, SadSquareBroken, SadSquareBulk, SadSquareLinear, SadSquareOutline, SadSquareTwotone };
