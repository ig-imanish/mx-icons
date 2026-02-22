import LockBold from "./LockBold";
import LockBroken from "./LockBroken";
import LockBulk from "./LockBulk";
import LockLinear from "./LockLinear";
import LockOutline from "./LockOutline";
import LockTwotone from "./LockTwotone";

export { LockBold, LockBroken, LockBulk, LockLinear, LockOutline, LockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lock-bold",
    Component: LockBold,
    componentName: "LockBold",
  },
  {
    variant: "broken",
    slug: "lock-broken",
    Component: LockBroken,
    componentName: "LockBroken",
  },
  {
    variant: "bulk",
    slug: "lock-bulk",
    Component: LockBulk,
    componentName: "LockBulk",
  },
  {
    variant: "linear",
    slug: "lock-linear",
    Component: LockLinear,
    componentName: "LockLinear",
  },
  {
    variant: "outline",
    slug: "lock-outline",
    Component: LockOutline,
    componentName: "LockOutline",
  },
  {
    variant: "twotone",
    slug: "lock-twotone",
    Component: LockTwotone,
    componentName: "LockTwotone",
  },
];
