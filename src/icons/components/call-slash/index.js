import CallSlashBold from "./CallSlashBold";
import CallSlashBroken from "./CallSlashBroken";
import CallSlashBulk from "./CallSlashBulk";
import CallSlashLinear from "./CallSlashLinear";
import CallSlashOutline from "./CallSlashOutline";
import CallSlashTwotone from "./CallSlashTwotone";

export { CallSlashBold, CallSlashBroken, CallSlashBulk, CallSlashLinear, CallSlashOutline, CallSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-slash-bold",
    Component: CallSlashBold,
    componentName: "CallSlashBold",
  },
  {
    variant: "broken",
    slug: "call-slash-broken",
    Component: CallSlashBroken,
    componentName: "CallSlashBroken",
  },
  {
    variant: "bulk",
    slug: "call-slash-bulk",
    Component: CallSlashBulk,
    componentName: "CallSlashBulk",
  },
  {
    variant: "linear",
    slug: "call-slash-linear",
    Component: CallSlashLinear,
    componentName: "CallSlashLinear",
  },
  {
    variant: "outline",
    slug: "call-slash-outline",
    Component: CallSlashOutline,
    componentName: "CallSlashOutline",
  },
  {
    variant: "twotone",
    slug: "call-slash-twotone",
    Component: CallSlashTwotone,
    componentName: "CallSlashTwotone",
  },
];
