import ShieldWarningBold from "./ShieldWarningBold";
import ShieldWarningBroken from "./ShieldWarningBroken";
import ShieldWarningBulk from "./ShieldWarningBulk";
import ShieldWarningLinear from "./ShieldWarningLinear";
import ShieldWarningOutline from "./ShieldWarningOutline";
import ShieldWarningTwotone from "./ShieldWarningTwotone";

export { ShieldWarningBold, ShieldWarningBroken, ShieldWarningBulk, ShieldWarningLinear, ShieldWarningOutline, ShieldWarningTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-warning-bold",
    Component: ShieldWarningBold,
    componentName: "ShieldWarningBold",
  },,
  {
    variant: "broken",
    slug: "shield-warning-broken",
    Component: ShieldWarningBroken,
    componentName: "ShieldWarningBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-warning-bulk",
    Component: ShieldWarningBulk,
    componentName: "ShieldWarningBulk",
  },,
  {
    variant: "linear",
    slug: "shield-warning-linear",
    Component: ShieldWarningLinear,
    componentName: "ShieldWarningLinear",
  },,
  {
    variant: "outline",
    slug: "shield-warning-outline",
    Component: ShieldWarningOutline,
    componentName: "ShieldWarningOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-warning-twotone",
    Component: ShieldWarningTwotone,
    componentName: "ShieldWarningTwotone",
  }
];

export default { ShieldWarningBold, ShieldWarningBroken, ShieldWarningBulk, ShieldWarningLinear, ShieldWarningOutline, ShieldWarningTwotone };
