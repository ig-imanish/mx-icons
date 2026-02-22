import BoxTimeBold from "./BoxTimeBold";
import BoxTimeBroken from "./BoxTimeBroken";
import BoxTimeBulk from "./BoxTimeBulk";
import BoxTimeLinear from "./BoxTimeLinear";
import BoxTimeOutline from "./BoxTimeOutline";
import BoxTimeTwotone from "./BoxTimeTwotone";

export { BoxTimeBold, BoxTimeBroken, BoxTimeBulk, BoxTimeLinear, BoxTimeOutline, BoxTimeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "box-time-bold",
    Component: BoxTimeBold,
    componentName: "BoxTimeBold",
  },
  {
    variant: "broken",
    slug: "box-time-broken",
    Component: BoxTimeBroken,
    componentName: "BoxTimeBroken",
  },
  {
    variant: "bulk",
    slug: "box-time-bulk",
    Component: BoxTimeBulk,
    componentName: "BoxTimeBulk",
  },
  {
    variant: "linear",
    slug: "box-time-linear",
    Component: BoxTimeLinear,
    componentName: "BoxTimeLinear",
  },
  {
    variant: "outline",
    slug: "box-time-outline",
    Component: BoxTimeOutline,
    componentName: "BoxTimeOutline",
  },
  {
    variant: "twotone",
    slug: "box-time-twotone",
    Component: BoxTimeTwotone,
    componentName: "BoxTimeTwotone",
  },
];
