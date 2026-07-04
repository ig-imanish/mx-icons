import SleepingSquareBold from "./SleepingSquareBold";
import SleepingSquareBroken from "./SleepingSquareBroken";
import SleepingSquareBulk from "./SleepingSquareBulk";
import SleepingSquareLinear from "./SleepingSquareLinear";
import SleepingSquareOutline from "./SleepingSquareOutline";
import SleepingSquareTwotone from "./SleepingSquareTwotone";

export { SleepingSquareBold, SleepingSquareBroken, SleepingSquareBulk, SleepingSquareLinear, SleepingSquareOutline, SleepingSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sleeping-square-bold",
    Component: SleepingSquareBold,
    componentName: "SleepingSquareBold",
  },,
  {
    variant: "broken",
    slug: "sleeping-square-broken",
    Component: SleepingSquareBroken,
    componentName: "SleepingSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "sleeping-square-bulk",
    Component: SleepingSquareBulk,
    componentName: "SleepingSquareBulk",
  },,
  {
    variant: "linear",
    slug: "sleeping-square-linear",
    Component: SleepingSquareLinear,
    componentName: "SleepingSquareLinear",
  },,
  {
    variant: "outline",
    slug: "sleeping-square-outline",
    Component: SleepingSquareOutline,
    componentName: "SleepingSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "sleeping-square-twotone",
    Component: SleepingSquareTwotone,
    componentName: "SleepingSquareTwotone",
  }
];

export default { SleepingSquareBold, SleepingSquareBroken, SleepingSquareBulk, SleepingSquareLinear, SleepingSquareOutline, SleepingSquareTwotone };
