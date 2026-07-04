import StopwatchPlayBold from "./StopwatchPlayBold";
import StopwatchPlayBroken from "./StopwatchPlayBroken";
import StopwatchPlayBulk from "./StopwatchPlayBulk";
import StopwatchPlayLinear from "./StopwatchPlayLinear";
import StopwatchPlayOutline from "./StopwatchPlayOutline";
import StopwatchPlayTwotone from "./StopwatchPlayTwotone";

export { StopwatchPlayBold, StopwatchPlayBroken, StopwatchPlayBulk, StopwatchPlayLinear, StopwatchPlayOutline, StopwatchPlayTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stopwatch-play-bold",
    Component: StopwatchPlayBold,
    componentName: "StopwatchPlayBold",
  },,
  {
    variant: "broken",
    slug: "stopwatch-play-broken",
    Component: StopwatchPlayBroken,
    componentName: "StopwatchPlayBroken",
  },,
  {
    variant: "bulk",
    slug: "stopwatch-play-bulk",
    Component: StopwatchPlayBulk,
    componentName: "StopwatchPlayBulk",
  },,
  {
    variant: "linear",
    slug: "stopwatch-play-linear",
    Component: StopwatchPlayLinear,
    componentName: "StopwatchPlayLinear",
  },,
  {
    variant: "outline",
    slug: "stopwatch-play-outline",
    Component: StopwatchPlayOutline,
    componentName: "StopwatchPlayOutline",
  },,
  {
    variant: "twotone",
    slug: "stopwatch-play-twotone",
    Component: StopwatchPlayTwotone,
    componentName: "StopwatchPlayTwotone",
  }
];

export default { StopwatchPlayBold, StopwatchPlayBroken, StopwatchPlayBulk, StopwatchPlayLinear, StopwatchPlayOutline, StopwatchPlayTwotone };
