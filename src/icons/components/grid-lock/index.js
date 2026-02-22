import GridLockBold from "./GridLockBold";
import GridLockBroken from "./GridLockBroken";
import GridLockBulk from "./GridLockBulk";
import GridLockLinear from "./GridLockLinear";
import GridLockOutline from "./GridLockOutline";
import GridLockTwotone from "./GridLockTwotone";

export { GridLockBold, GridLockBroken, GridLockBulk, GridLockLinear, GridLockOutline, GridLockTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "grid-lock-bold",
    Component: GridLockBold,
    componentName: "GridLockBold",
  },
  {
    variant: "broken",
    slug: "grid-lock-broken",
    Component: GridLockBroken,
    componentName: "GridLockBroken",
  },
  {
    variant: "bulk",
    slug: "grid-lock-bulk",
    Component: GridLockBulk,
    componentName: "GridLockBulk",
  },
  {
    variant: "linear",
    slug: "grid-lock-linear",
    Component: GridLockLinear,
    componentName: "GridLockLinear",
  },
  {
    variant: "outline",
    slug: "grid-lock-outline",
    Component: GridLockOutline,
    componentName: "GridLockOutline",
  },
  {
    variant: "twotone",
    slug: "grid-lock-twotone",
    Component: GridLockTwotone,
    componentName: "GridLockTwotone",
  },
];
