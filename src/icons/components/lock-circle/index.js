import LockCircleBold from "./LockCircleBold";
import LockCircleBroken from "./LockCircleBroken";
import LockCircleBulk from "./LockCircleBulk";
import LockCircleLinear from "./LockCircleLinear";
import LockCircleOutline from "./LockCircleOutline";
import LockCircleTwotone from "./LockCircleTwotone";

export { LockCircleBold, LockCircleBroken, LockCircleBulk, LockCircleLinear, LockCircleOutline, LockCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lock-circle-bold",
    Component: LockCircleBold,
    componentName: "LockCircleBold",
  },
  {
    variant: "broken",
    slug: "lock-circle-broken",
    Component: LockCircleBroken,
    componentName: "LockCircleBroken",
  },
  {
    variant: "bulk",
    slug: "lock-circle-bulk",
    Component: LockCircleBulk,
    componentName: "LockCircleBulk",
  },
  {
    variant: "linear",
    slug: "lock-circle-linear",
    Component: LockCircleLinear,
    componentName: "LockCircleLinear",
  },
  {
    variant: "outline",
    slug: "lock-circle-outline",
    Component: LockCircleOutline,
    componentName: "LockCircleOutline",
  },
  {
    variant: "twotone",
    slug: "lock-circle-twotone",
    Component: LockCircleTwotone,
    componentName: "LockCircleTwotone",
  },
];
