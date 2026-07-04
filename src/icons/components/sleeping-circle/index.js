import SleepingCircleBold from "./SleepingCircleBold";
import SleepingCircleBroken from "./SleepingCircleBroken";
import SleepingCircleBulk from "./SleepingCircleBulk";
import SleepingCircleLinear from "./SleepingCircleLinear";
import SleepingCircleOutline from "./SleepingCircleOutline";
import SleepingCircleTwotone from "./SleepingCircleTwotone";

export { SleepingCircleBold, SleepingCircleBroken, SleepingCircleBulk, SleepingCircleLinear, SleepingCircleOutline, SleepingCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sleeping-circle-bold",
    Component: SleepingCircleBold,
    componentName: "SleepingCircleBold",
  },,
  {
    variant: "broken",
    slug: "sleeping-circle-broken",
    Component: SleepingCircleBroken,
    componentName: "SleepingCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "sleeping-circle-bulk",
    Component: SleepingCircleBulk,
    componentName: "SleepingCircleBulk",
  },,
  {
    variant: "linear",
    slug: "sleeping-circle-linear",
    Component: SleepingCircleLinear,
    componentName: "SleepingCircleLinear",
  },,
  {
    variant: "outline",
    slug: "sleeping-circle-outline",
    Component: SleepingCircleOutline,
    componentName: "SleepingCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "sleeping-circle-twotone",
    Component: SleepingCircleTwotone,
    componentName: "SleepingCircleTwotone",
  }
];

export default { SleepingCircleBold, SleepingCircleBroken, SleepingCircleBulk, SleepingCircleLinear, SleepingCircleOutline, SleepingCircleTwotone };
