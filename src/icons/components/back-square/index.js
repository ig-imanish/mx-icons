import BackSquareBold from "./BackSquareBold";
import BackSquareBroken from "./BackSquareBroken";
import BackSquareBulk from "./BackSquareBulk";
import BackSquareLinear from "./BackSquareLinear";
import BackSquareOutline from "./BackSquareOutline";
import BackSquareTwotone from "./BackSquareTwotone";

export { BackSquareBold, BackSquareBroken, BackSquareBulk, BackSquareLinear, BackSquareOutline, BackSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "back-square-bold",
    Component: BackSquareBold,
    componentName: "BackSquareBold",
  },
  {
    variant: "broken",
    slug: "back-square-broken",
    Component: BackSquareBroken,
    componentName: "BackSquareBroken",
  },
  {
    variant: "bulk",
    slug: "back-square-bulk",
    Component: BackSquareBulk,
    componentName: "BackSquareBulk",
  },
  {
    variant: "linear",
    slug: "back-square-linear",
    Component: BackSquareLinear,
    componentName: "BackSquareLinear",
  },
  {
    variant: "outline",
    slug: "back-square-outline",
    Component: BackSquareOutline,
    componentName: "BackSquareOutline",
  },
  {
    variant: "twotone",
    slug: "back-square-twotone",
    Component: BackSquareTwotone,
    componentName: "BackSquareTwotone",
  },
];
