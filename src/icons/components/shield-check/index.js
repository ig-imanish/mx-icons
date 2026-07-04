import ShieldCheckBold from "./ShieldCheckBold";
import ShieldCheckBroken from "./ShieldCheckBroken";
import ShieldCheckBulk from "./ShieldCheckBulk";
import ShieldCheckLinear from "./ShieldCheckLinear";
import ShieldCheckOutline from "./ShieldCheckOutline";
import ShieldCheckTwotone from "./ShieldCheckTwotone";

export { ShieldCheckBold, ShieldCheckBroken, ShieldCheckBulk, ShieldCheckLinear, ShieldCheckOutline, ShieldCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-check-bold",
    Component: ShieldCheckBold,
    componentName: "ShieldCheckBold",
  },,
  {
    variant: "broken",
    slug: "shield-check-broken",
    Component: ShieldCheckBroken,
    componentName: "ShieldCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-check-bulk",
    Component: ShieldCheckBulk,
    componentName: "ShieldCheckBulk",
  },,
  {
    variant: "linear",
    slug: "shield-check-linear",
    Component: ShieldCheckLinear,
    componentName: "ShieldCheckLinear",
  },,
  {
    variant: "outline",
    slug: "shield-check-outline",
    Component: ShieldCheckOutline,
    componentName: "ShieldCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-check-twotone",
    Component: ShieldCheckTwotone,
    componentName: "ShieldCheckTwotone",
  }
];

export default { ShieldCheckBold, ShieldCheckBroken, ShieldCheckBulk, ShieldCheckLinear, ShieldCheckOutline, ShieldCheckTwotone };
