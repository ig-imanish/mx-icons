import PercentageSquareBold from "./PercentageSquareBold";
import PercentageSquareBroken from "./PercentageSquareBroken";
import PercentageSquareBulk from "./PercentageSquareBulk";
import PercentageSquareLinear from "./PercentageSquareLinear";
import PercentageSquareOutline from "./PercentageSquareOutline";
import PercentageSquareTwotone from "./PercentageSquareTwotone";

export { PercentageSquareBold, PercentageSquareBroken, PercentageSquareBulk, PercentageSquareLinear, PercentageSquareOutline, PercentageSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "percentage-square-bold",
    Component: PercentageSquareBold,
    componentName: "PercentageSquareBold",
  },
  {
    variant: "broken",
    slug: "percentage-square-broken",
    Component: PercentageSquareBroken,
    componentName: "PercentageSquareBroken",
  },
  {
    variant: "bulk",
    slug: "percentage-square-bulk",
    Component: PercentageSquareBulk,
    componentName: "PercentageSquareBulk",
  },
  {
    variant: "linear",
    slug: "percentage-square-linear",
    Component: PercentageSquareLinear,
    componentName: "PercentageSquareLinear",
  },
  {
    variant: "outline",
    slug: "percentage-square-outline",
    Component: PercentageSquareOutline,
    componentName: "PercentageSquareOutline",
  },
  {
    variant: "twotone",
    slug: "percentage-square-twotone",
    Component: PercentageSquareTwotone,
    componentName: "PercentageSquareTwotone",
  },
];
