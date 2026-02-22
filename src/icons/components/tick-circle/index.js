import TickCircleBold from "./TickCircleBold";
import TickCircleBroken from "./TickCircleBroken";
import TickCircleBulk from "./TickCircleBulk";
import TickCircleLinear from "./TickCircleLinear";
import TickCircleOutline from "./TickCircleOutline";
import TickCircleTwotone from "./TickCircleTwotone";

export { TickCircleBold, TickCircleBroken, TickCircleBulk, TickCircleLinear, TickCircleOutline, TickCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "tick-circle-bold",
    Component: TickCircleBold,
    componentName: "TickCircleBold",
  },
  {
    variant: "broken",
    slug: "tick-circle-broken",
    Component: TickCircleBroken,
    componentName: "TickCircleBroken",
  },
  {
    variant: "bulk",
    slug: "tick-circle-bulk",
    Component: TickCircleBulk,
    componentName: "TickCircleBulk",
  },
  {
    variant: "linear",
    slug: "tick-circle-linear",
    Component: TickCircleLinear,
    componentName: "TickCircleLinear",
  },
  {
    variant: "outline",
    slug: "tick-circle-outline",
    Component: TickCircleOutline,
    componentName: "TickCircleOutline",
  },
  {
    variant: "twotone",
    slug: "tick-circle-twotone",
    Component: TickCircleTwotone,
    componentName: "TickCircleTwotone",
  },
];
