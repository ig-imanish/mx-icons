import KeySquareBold from "./KeySquareBold";
import KeySquareBroken from "./KeySquareBroken";
import KeySquareBulk from "./KeySquareBulk";
import KeySquareLinear from "./KeySquareLinear";
import KeySquareOutline from "./KeySquareOutline";
import KeySquareTwotone from "./KeySquareTwotone";

export { KeySquareBold, KeySquareBroken, KeySquareBulk, KeySquareLinear, KeySquareOutline, KeySquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "key-square-bold",
    Component: KeySquareBold,
    componentName: "KeySquareBold",
  },
  {
    variant: "broken",
    slug: "key-square-broken",
    Component: KeySquareBroken,
    componentName: "KeySquareBroken",
  },
  {
    variant: "bulk",
    slug: "key-square-bulk",
    Component: KeySquareBulk,
    componentName: "KeySquareBulk",
  },
  {
    variant: "linear",
    slug: "key-square-linear",
    Component: KeySquareLinear,
    componentName: "KeySquareLinear",
  },
  {
    variant: "outline",
    slug: "key-square-outline",
    Component: KeySquareOutline,
    componentName: "KeySquareOutline",
  },
  {
    variant: "twotone",
    slug: "key-square-twotone",
    Component: KeySquareTwotone,
    componentName: "KeySquareTwotone",
  },
];
