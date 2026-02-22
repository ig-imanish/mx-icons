import ColorsSquareBold from "./ColorsSquareBold";
import ColorsSquareBroken from "./ColorsSquareBroken";
import ColorsSquareBulk from "./ColorsSquareBulk";
import ColorsSquareLinear from "./ColorsSquareLinear";
import ColorsSquareOutline from "./ColorsSquareOutline";
import ColorsSquareTwotone from "./ColorsSquareTwotone";

export { ColorsSquareBold, ColorsSquareBroken, ColorsSquareBulk, ColorsSquareLinear, ColorsSquareOutline, ColorsSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "colors-square-bold",
    Component: ColorsSquareBold,
    componentName: "ColorsSquareBold",
  },
  {
    variant: "broken",
    slug: "colors-square-broken",
    Component: ColorsSquareBroken,
    componentName: "ColorsSquareBroken",
  },
  {
    variant: "bulk",
    slug: "colors-square-bulk",
    Component: ColorsSquareBulk,
    componentName: "ColorsSquareBulk",
  },
  {
    variant: "linear",
    slug: "colors-square-linear",
    Component: ColorsSquareLinear,
    componentName: "ColorsSquareLinear",
  },
  {
    variant: "outline",
    slug: "colors-square-outline",
    Component: ColorsSquareOutline,
    componentName: "ColorsSquareOutline",
  },
  {
    variant: "twotone",
    slug: "colors-square-twotone",
    Component: ColorsSquareTwotone,
    componentName: "ColorsSquareTwotone",
  },
];
