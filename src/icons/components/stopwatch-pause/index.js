import StopwatchPauseBold from "./StopwatchPauseBold";
import StopwatchPauseBroken from "./StopwatchPauseBroken";
import StopwatchPauseBulk from "./StopwatchPauseBulk";
import StopwatchPauseLinear from "./StopwatchPauseLinear";
import StopwatchPauseOutline from "./StopwatchPauseOutline";
import StopwatchPauseTwotone from "./StopwatchPauseTwotone";

export { StopwatchPauseBold, StopwatchPauseBroken, StopwatchPauseBulk, StopwatchPauseLinear, StopwatchPauseOutline, StopwatchPauseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stopwatch-pause-bold",
    Component: StopwatchPauseBold,
    componentName: "StopwatchPauseBold",
  },,
  {
    variant: "broken",
    slug: "stopwatch-pause-broken",
    Component: StopwatchPauseBroken,
    componentName: "StopwatchPauseBroken",
  },,
  {
    variant: "bulk",
    slug: "stopwatch-pause-bulk",
    Component: StopwatchPauseBulk,
    componentName: "StopwatchPauseBulk",
  },,
  {
    variant: "linear",
    slug: "stopwatch-pause-linear",
    Component: StopwatchPauseLinear,
    componentName: "StopwatchPauseLinear",
  },,
  {
    variant: "outline",
    slug: "stopwatch-pause-outline",
    Component: StopwatchPauseOutline,
    componentName: "StopwatchPauseOutline",
  },,
  {
    variant: "twotone",
    slug: "stopwatch-pause-twotone",
    Component: StopwatchPauseTwotone,
    componentName: "StopwatchPauseTwotone",
  }
];

export default { StopwatchPauseBold, StopwatchPauseBroken, StopwatchPauseBulk, StopwatchPauseLinear, StopwatchPauseOutline, StopwatchPauseTwotone };
