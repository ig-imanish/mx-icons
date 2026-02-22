import TimerBold from "./TimerBold";
import TimerBroken from "./TimerBroken";
import TimerBulk from "./TimerBulk";
import TimerLinear from "./TimerLinear";
import TimerOutline from "./TimerOutline";
import TimerTwotone from "./TimerTwotone";

export { TimerBold, TimerBroken, TimerBulk, TimerLinear, TimerOutline, TimerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "timer-bold",
    Component: TimerBold,
    componentName: "TimerBold",
  },
  {
    variant: "broken",
    slug: "timer-broken",
    Component: TimerBroken,
    componentName: "TimerBroken",
  },
  {
    variant: "bulk",
    slug: "timer-bulk",
    Component: TimerBulk,
    componentName: "TimerBulk",
  },
  {
    variant: "linear",
    slug: "timer-linear",
    Component: TimerLinear,
    componentName: "TimerLinear",
  },
  {
    variant: "outline",
    slug: "timer-outline",
    Component: TimerOutline,
    componentName: "TimerOutline",
  },
  {
    variant: "twotone",
    slug: "timer-twotone",
    Component: TimerTwotone,
    componentName: "TimerTwotone",
  },
];
