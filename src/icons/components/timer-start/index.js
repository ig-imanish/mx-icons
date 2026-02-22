import TimerStartBold from "./TimerStartBold";
import TimerStartBroken from "./TimerStartBroken";
import TimerStartBulk from "./TimerStartBulk";
import TimerStartLinear from "./TimerStartLinear";
import TimerStartOutline from "./TimerStartOutline";
import TimerStartTwotone from "./TimerStartTwotone";

export { TimerStartBold, TimerStartBroken, TimerStartBulk, TimerStartLinear, TimerStartOutline, TimerStartTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "timer-start-bold",
    Component: TimerStartBold,
    componentName: "TimerStartBold",
  },
  {
    variant: "broken",
    slug: "timer-start-broken",
    Component: TimerStartBroken,
    componentName: "TimerStartBroken",
  },
  {
    variant: "bulk",
    slug: "timer-start-bulk",
    Component: TimerStartBulk,
    componentName: "TimerStartBulk",
  },
  {
    variant: "linear",
    slug: "timer-start-linear",
    Component: TimerStartLinear,
    componentName: "TimerStartLinear",
  },
  {
    variant: "outline",
    slug: "timer-start-outline",
    Component: TimerStartOutline,
    componentName: "TimerStartOutline",
  },
  {
    variant: "twotone",
    slug: "timer-start-twotone",
    Component: TimerStartTwotone,
    componentName: "TimerStartTwotone",
  },
];
