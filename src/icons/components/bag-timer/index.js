import BagTimerBold from "./BagTimerBold";
import BagTimerBroken from "./BagTimerBroken";
import BagTimerBulk from "./BagTimerBulk";
import BagTimerLinear from "./BagTimerLinear";
import BagTimerOutline from "./BagTimerOutline";
import BagTimerTwotone from "./BagTimerTwotone";

export { BagTimerBold, BagTimerBroken, BagTimerBulk, BagTimerLinear, BagTimerOutline, BagTimerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-timer-bold",
    Component: BagTimerBold,
    componentName: "BagTimerBold",
  },
  {
    variant: "broken",
    slug: "bag-timer-broken",
    Component: BagTimerBroken,
    componentName: "BagTimerBroken",
  },
  {
    variant: "bulk",
    slug: "bag-timer-bulk",
    Component: BagTimerBulk,
    componentName: "BagTimerBulk",
  },
  {
    variant: "linear",
    slug: "bag-timer-linear",
    Component: BagTimerLinear,
    componentName: "BagTimerLinear",
  },
  {
    variant: "outline",
    slug: "bag-timer-outline",
    Component: BagTimerOutline,
    componentName: "BagTimerOutline",
  },
  {
    variant: "twotone",
    slug: "bag-timer-twotone",
    Component: BagTimerTwotone,
    componentName: "BagTimerTwotone",
  },
];
