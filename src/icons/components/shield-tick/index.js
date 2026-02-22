import ShieldTickBold from "./ShieldTickBold";
import ShieldTickBroken from "./ShieldTickBroken";
import ShieldTickBulk from "./ShieldTickBulk";
import ShieldTickLinear from "./ShieldTickLinear";
import ShieldTickOutline from "./ShieldTickOutline";
import ShieldTickTwotone from "./ShieldTickTwotone";

export { ShieldTickBold, ShieldTickBroken, ShieldTickBulk, ShieldTickLinear, ShieldTickOutline, ShieldTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-tick-bold",
    Component: ShieldTickBold,
    componentName: "ShieldTickBold",
  },
  {
    variant: "broken",
    slug: "shield-tick-broken",
    Component: ShieldTickBroken,
    componentName: "ShieldTickBroken",
  },
  {
    variant: "bulk",
    slug: "shield-tick-bulk",
    Component: ShieldTickBulk,
    componentName: "ShieldTickBulk",
  },
  {
    variant: "linear",
    slug: "shield-tick-linear",
    Component: ShieldTickLinear,
    componentName: "ShieldTickLinear",
  },
  {
    variant: "outline",
    slug: "shield-tick-outline",
    Component: ShieldTickOutline,
    componentName: "ShieldTickOutline",
  },
  {
    variant: "twotone",
    slug: "shield-tick-twotone",
    Component: ShieldTickTwotone,
    componentName: "ShieldTickTwotone",
  },
];
