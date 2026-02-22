import TimerPauseBold from "./TimerPauseBold";
import TimerPauseBroken from "./TimerPauseBroken";
import TimerPauseBulk from "./TimerPauseBulk";
import TimerPauseLinear from "./TimerPauseLinear";
import TimerPauseOutline from "./TimerPauseOutline";
import TimerPauseTwotone from "./TimerPauseTwotone";

export { TimerPauseBold, TimerPauseBroken, TimerPauseBulk, TimerPauseLinear, TimerPauseOutline, TimerPauseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "timer-pause-bold",
    Component: TimerPauseBold,
    componentName: "TimerPauseBold",
  },
  {
    variant: "broken",
    slug: "timer-pause-broken",
    Component: TimerPauseBroken,
    componentName: "TimerPauseBroken",
  },
  {
    variant: "bulk",
    slug: "timer-pause-bulk",
    Component: TimerPauseBulk,
    componentName: "TimerPauseBulk",
  },
  {
    variant: "linear",
    slug: "timer-pause-linear",
    Component: TimerPauseLinear,
    componentName: "TimerPauseLinear",
  },
  {
    variant: "outline",
    slug: "timer-pause-outline",
    Component: TimerPauseOutline,
    componentName: "TimerPauseOutline",
  },
  {
    variant: "twotone",
    slug: "timer-pause-twotone",
    Component: TimerPauseTwotone,
    componentName: "TimerPauseTwotone",
  },
];
