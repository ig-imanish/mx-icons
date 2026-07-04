import ShieldUserBold from "./ShieldUserBold";
import ShieldUserBroken from "./ShieldUserBroken";
import ShieldUserBulk from "./ShieldUserBulk";
import ShieldUserLinear from "./ShieldUserLinear";
import ShieldUserOutline from "./ShieldUserOutline";
import ShieldUserTwotone from "./ShieldUserTwotone";

export { ShieldUserBold, ShieldUserBroken, ShieldUserBulk, ShieldUserLinear, ShieldUserOutline, ShieldUserTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-user-bold",
    Component: ShieldUserBold,
    componentName: "ShieldUserBold",
  },,
  {
    variant: "broken",
    slug: "shield-user-broken",
    Component: ShieldUserBroken,
    componentName: "ShieldUserBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-user-bulk",
    Component: ShieldUserBulk,
    componentName: "ShieldUserBulk",
  },,
  {
    variant: "linear",
    slug: "shield-user-linear",
    Component: ShieldUserLinear,
    componentName: "ShieldUserLinear",
  },,
  {
    variant: "outline",
    slug: "shield-user-outline",
    Component: ShieldUserOutline,
    componentName: "ShieldUserOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-user-twotone",
    Component: ShieldUserTwotone,
    componentName: "ShieldUserTwotone",
  }
];

export default { ShieldUserBold, ShieldUserBroken, ShieldUserBulk, ShieldUserLinear, ShieldUserOutline, ShieldUserTwotone };
