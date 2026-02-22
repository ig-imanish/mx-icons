import LockSlashBold from "./LockSlashBold";
import LockSlashBroken from "./LockSlashBroken";
import LockSlashBulk from "./LockSlashBulk";
import LockSlashLinear from "./LockSlashLinear";
import LockSlashOutline from "./LockSlashOutline";
import LockSlashTwotone from "./LockSlashTwotone";

export { LockSlashBold, LockSlashBroken, LockSlashBulk, LockSlashLinear, LockSlashOutline, LockSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "lock-slash-bold",
    Component: LockSlashBold,
    componentName: "LockSlashBold",
  },
  {
    variant: "broken",
    slug: "lock-slash-broken",
    Component: LockSlashBroken,
    componentName: "LockSlashBroken",
  },
  {
    variant: "bulk",
    slug: "lock-slash-bulk",
    Component: LockSlashBulk,
    componentName: "LockSlashBulk",
  },
  {
    variant: "linear",
    slug: "lock-slash-linear",
    Component: LockSlashLinear,
    componentName: "LockSlashLinear",
  },
  {
    variant: "outline",
    slug: "lock-slash-outline",
    Component: LockSlashOutline,
    componentName: "LockSlashOutline",
  },
  {
    variant: "twotone",
    slug: "lock-slash-twotone",
    Component: LockSlashTwotone,
    componentName: "LockSlashTwotone",
  },
];
