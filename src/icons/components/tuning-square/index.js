import TuningSquareBold from "./TuningSquareBold";
import TuningSquareBroken from "./TuningSquareBroken";
import TuningSquareBulk from "./TuningSquareBulk";
import TuningSquareLinear from "./TuningSquareLinear";
import TuningSquareOutline from "./TuningSquareOutline";
import TuningSquareTwotone from "./TuningSquareTwotone";

export { TuningSquareBold, TuningSquareBroken, TuningSquareBulk, TuningSquareLinear, TuningSquareOutline, TuningSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tuning-square-bold",
    Component: TuningSquareBold,
    componentName: "TuningSquareBold",
  },,
  {
    variant: "broken",
    slug: "tuning-square-broken",
    Component: TuningSquareBroken,
    componentName: "TuningSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "tuning-square-bulk",
    Component: TuningSquareBulk,
    componentName: "TuningSquareBulk",
  },,
  {
    variant: "linear",
    slug: "tuning-square-linear",
    Component: TuningSquareLinear,
    componentName: "TuningSquareLinear",
  },,
  {
    variant: "outline",
    slug: "tuning-square-outline",
    Component: TuningSquareOutline,
    componentName: "TuningSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "tuning-square-twotone",
    Component: TuningSquareTwotone,
    componentName: "TuningSquareTwotone",
  }
];

export default { TuningSquareBold, TuningSquareBroken, TuningSquareBulk, TuningSquareLinear, TuningSquareOutline, TuningSquareTwotone };
