import FormatSquareBold from "./FormatSquareBold";
import FormatSquareBroken from "./FormatSquareBroken";
import FormatSquareBulk from "./FormatSquareBulk";
import FormatSquareLinear from "./FormatSquareLinear";
import FormatSquareOutline from "./FormatSquareOutline";
import FormatSquareTwotone from "./FormatSquareTwotone";

export { FormatSquareBold, FormatSquareBroken, FormatSquareBulk, FormatSquareLinear, FormatSquareOutline, FormatSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "format-square-bold",
    Component: FormatSquareBold,
    componentName: "FormatSquareBold",
  },
  {
    variant: "broken",
    slug: "format-square-broken",
    Component: FormatSquareBroken,
    componentName: "FormatSquareBroken",
  },
  {
    variant: "bulk",
    slug: "format-square-bulk",
    Component: FormatSquareBulk,
    componentName: "FormatSquareBulk",
  },
  {
    variant: "linear",
    slug: "format-square-linear",
    Component: FormatSquareLinear,
    componentName: "FormatSquareLinear",
  },
  {
    variant: "outline",
    slug: "format-square-outline",
    Component: FormatSquareOutline,
    componentName: "FormatSquareOutline",
  },
  {
    variant: "twotone",
    slug: "format-square-twotone",
    Component: FormatSquareTwotone,
    componentName: "FormatSquareTwotone",
  },
];
