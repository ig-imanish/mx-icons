import ClockCircleBold from "./ClockCircleBold";
import ClockCircleBroken from "./ClockCircleBroken";
import ClockCircleBulk from "./ClockCircleBulk";
import ClockCircleLinear from "./ClockCircleLinear";
import ClockCircleOutline from "./ClockCircleOutline";
import ClockCircleTwotone from "./ClockCircleTwotone";

export { ClockCircleBold, ClockCircleBroken, ClockCircleBulk, ClockCircleLinear, ClockCircleOutline, ClockCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "clock-circle-bold",
    Component: ClockCircleBold,
    componentName: "ClockCircleBold",
  },,
  {
    variant: "broken",
    slug: "clock-circle-broken",
    Component: ClockCircleBroken,
    componentName: "ClockCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "clock-circle-bulk",
    Component: ClockCircleBulk,
    componentName: "ClockCircleBulk",
  },,
  {
    variant: "linear",
    slug: "clock-circle-linear",
    Component: ClockCircleLinear,
    componentName: "ClockCircleLinear",
  },,
  {
    variant: "outline",
    slug: "clock-circle-outline",
    Component: ClockCircleOutline,
    componentName: "ClockCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "clock-circle-twotone",
    Component: ClockCircleTwotone,
    componentName: "ClockCircleTwotone",
  }
];

export default { ClockCircleBold, ClockCircleBroken, ClockCircleBulk, ClockCircleLinear, ClockCircleOutline, ClockCircleTwotone };
