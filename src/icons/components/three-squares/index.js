import ThreeSquaresBold from "./ThreeSquaresBold";
import ThreeSquaresBroken from "./ThreeSquaresBroken";
import ThreeSquaresBulk from "./ThreeSquaresBulk";
import ThreeSquaresLinear from "./ThreeSquaresLinear";
import ThreeSquaresOutline from "./ThreeSquaresOutline";
import ThreeSquaresTwotone from "./ThreeSquaresTwotone";

export { ThreeSquaresBold, ThreeSquaresBroken, ThreeSquaresBulk, ThreeSquaresLinear, ThreeSquaresOutline, ThreeSquaresTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "three-squares-bold",
    Component: ThreeSquaresBold,
    componentName: "ThreeSquaresBold",
  },,
  {
    variant: "broken",
    slug: "three-squares-broken",
    Component: ThreeSquaresBroken,
    componentName: "ThreeSquaresBroken",
  },,
  {
    variant: "bulk",
    slug: "three-squares-bulk",
    Component: ThreeSquaresBulk,
    componentName: "ThreeSquaresBulk",
  },,
  {
    variant: "linear",
    slug: "three-squares-linear",
    Component: ThreeSquaresLinear,
    componentName: "ThreeSquaresLinear",
  },,
  {
    variant: "outline",
    slug: "three-squares-outline",
    Component: ThreeSquaresOutline,
    componentName: "ThreeSquaresOutline",
  },,
  {
    variant: "twotone",
    slug: "three-squares-twotone",
    Component: ThreeSquaresTwotone,
    componentName: "ThreeSquaresTwotone",
  }
];

export default { ThreeSquaresBold, ThreeSquaresBroken, ThreeSquaresBulk, ThreeSquaresLinear, ThreeSquaresOutline, ThreeSquaresTwotone };
