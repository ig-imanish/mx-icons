import ClockSquareBold from "./ClockSquareBold";
import ClockSquareBroken from "./ClockSquareBroken";
import ClockSquareBulk from "./ClockSquareBulk";
import ClockSquareLinear from "./ClockSquareLinear";
import ClockSquareOutline from "./ClockSquareOutline";
import ClockSquareTwotone from "./ClockSquareTwotone";

export { ClockSquareBold, ClockSquareBroken, ClockSquareBulk, ClockSquareLinear, ClockSquareOutline, ClockSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clock-square-bold",
    Component: ClockSquareBold,
    componentName: "ClockSquareBold",
  },,
  {
    variant: "broken",
    slug: "clock-square-broken",
    Component: ClockSquareBroken,
    componentName: "ClockSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "clock-square-bulk",
    Component: ClockSquareBulk,
    componentName: "ClockSquareBulk",
  },,
  {
    variant: "linear",
    slug: "clock-square-linear",
    Component: ClockSquareLinear,
    componentName: "ClockSquareLinear",
  },,
  {
    variant: "outline",
    slug: "clock-square-outline",
    Component: ClockSquareOutline,
    componentName: "ClockSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "clock-square-twotone",
    Component: ClockSquareTwotone,
    componentName: "ClockSquareTwotone",
  }
];

export default { ClockSquareBold, ClockSquareBroken, ClockSquareBulk, ClockSquareLinear, ClockSquareOutline, ClockSquareTwotone };
