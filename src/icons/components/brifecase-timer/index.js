import BrifecaseTimerBold from "./BrifecaseTimerBold";
import BrifecaseTimerBroken from "./BrifecaseTimerBroken";
import BrifecaseTimerBulk from "./BrifecaseTimerBulk";
import BrifecaseTimerLinear from "./BrifecaseTimerLinear";
import BrifecaseTimerOutline from "./BrifecaseTimerOutline";
import BrifecaseTimerTwotone from "./BrifecaseTimerTwotone";

export { BrifecaseTimerBold, BrifecaseTimerBroken, BrifecaseTimerBulk, BrifecaseTimerLinear, BrifecaseTimerOutline, BrifecaseTimerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "brifecase-timer-bold",
    Component: BrifecaseTimerBold,
    componentName: "BrifecaseTimerBold",
  },
  {
    variant: "broken",
    slug: "brifecase-timer-broken",
    Component: BrifecaseTimerBroken,
    componentName: "BrifecaseTimerBroken",
  },
  {
    variant: "bulk",
    slug: "brifecase-timer-bulk",
    Component: BrifecaseTimerBulk,
    componentName: "BrifecaseTimerBulk",
  },
  {
    variant: "linear",
    slug: "brifecase-timer-linear",
    Component: BrifecaseTimerLinear,
    componentName: "BrifecaseTimerLinear",
  },
  {
    variant: "outline",
    slug: "brifecase-timer-outline",
    Component: BrifecaseTimerOutline,
    componentName: "BrifecaseTimerOutline",
  },
  {
    variant: "twotone",
    slug: "brifecase-timer-twotone",
    Component: BrifecaseTimerTwotone,
    componentName: "BrifecaseTimerTwotone",
  },
];
