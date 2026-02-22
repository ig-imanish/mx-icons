import ShieldBulk from "./ShieldBulk";
import ShieldLinear from "./ShieldLinear";
import ShieldOutline from "./ShieldOutline";
import ShieldTwotone from "./ShieldTwotone";

export { ShieldBulk, ShieldLinear, ShieldOutline, ShieldTwotone };

export const variants = [
  {
    variant: "bulk",
    slug: "shield-bulk",
    Component: ShieldBulk,
    componentName: "ShieldBulk",
  },
  {
    variant: "linear",
    slug: "shield-linear",
    Component: ShieldLinear,
    componentName: "ShieldLinear",
  },
  {
    variant: "outline",
    slug: "shield-outline",
    Component: ShieldOutline,
    componentName: "ShieldOutline",
  },
  {
    variant: "twotone",
    slug: "shield-twotone",
    Component: ShieldTwotone,
    componentName: "ShieldTwotone",
  },
];
