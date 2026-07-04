import TextSquareBold from "./TextSquareBold";
import TextSquareBroken from "./TextSquareBroken";
import TextSquareBulk from "./TextSquareBulk";
import TextSquareLinear from "./TextSquareLinear";
import TextSquareOutline from "./TextSquareOutline";
import TextSquareTwotone from "./TextSquareTwotone";

export { TextSquareBold, TextSquareBroken, TextSquareBulk, TextSquareLinear, TextSquareOutline, TextSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "text-square-bold",
    Component: TextSquareBold,
    componentName: "TextSquareBold",
  },,
  {
    variant: "broken",
    slug: "text-square-broken",
    Component: TextSquareBroken,
    componentName: "TextSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "text-square-bulk",
    Component: TextSquareBulk,
    componentName: "TextSquareBulk",
  },,
  {
    variant: "linear",
    slug: "text-square-linear",
    Component: TextSquareLinear,
    componentName: "TextSquareLinear",
  },,
  {
    variant: "outline",
    slug: "text-square-outline",
    Component: TextSquareOutline,
    componentName: "TextSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "text-square-twotone",
    Component: TextSquareTwotone,
    componentName: "TextSquareTwotone",
  }
];

export default { TextSquareBold, TextSquareBroken, TextSquareBulk, TextSquareLinear, TextSquareOutline, TextSquareTwotone };
