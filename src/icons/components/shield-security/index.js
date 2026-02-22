import ShieldSecurityBold from "./ShieldSecurityBold";
import ShieldSecurityBulk from "./ShieldSecurityBulk";
import ShieldSecurityLinear from "./ShieldSecurityLinear";
import ShieldSecurityTwotone from "./ShieldSecurityTwotone";

export { ShieldSecurityBold, ShieldSecurityBulk, ShieldSecurityLinear, ShieldSecurityTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-security-bold",
    Component: ShieldSecurityBold,
    componentName: "ShieldSecurityBold",
  },
  {
    variant: "bulk",
    slug: "shield-security-bulk",
    Component: ShieldSecurityBulk,
    componentName: "ShieldSecurityBulk",
  },
  {
    variant: "linear",
    slug: "shield-security-linear",
    Component: ShieldSecurityLinear,
    componentName: "ShieldSecurityLinear",
  },
  {
    variant: "twotone",
    slug: "shield-security-twotone",
    Component: ShieldSecurityTwotone,
    componentName: "ShieldSecurityTwotone",
  },
];
