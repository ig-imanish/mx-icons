import ShieldUpBold from "./ShieldUpBold";
import ShieldUpBroken from "./ShieldUpBroken";
import ShieldUpBulk from "./ShieldUpBulk";
import ShieldUpLinear from "./ShieldUpLinear";
import ShieldUpOutline from "./ShieldUpOutline";
import ShieldUpTwotone from "./ShieldUpTwotone";

export { ShieldUpBold, ShieldUpBroken, ShieldUpBulk, ShieldUpLinear, ShieldUpOutline, ShieldUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-up-bold",
    Component: ShieldUpBold,
    componentName: "ShieldUpBold",
  },,
  {
    variant: "broken",
    slug: "shield-up-broken",
    Component: ShieldUpBroken,
    componentName: "ShieldUpBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-up-bulk",
    Component: ShieldUpBulk,
    componentName: "ShieldUpBulk",
  },,
  {
    variant: "linear",
    slug: "shield-up-linear",
    Component: ShieldUpLinear,
    componentName: "ShieldUpLinear",
  },,
  {
    variant: "outline",
    slug: "shield-up-outline",
    Component: ShieldUpOutline,
    componentName: "ShieldUpOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-up-twotone",
    Component: ShieldUpTwotone,
    componentName: "ShieldUpTwotone",
  }
];

export default { ShieldUpBold, ShieldUpBroken, ShieldUpBulk, ShieldUpLinear, ShieldUpOutline, ShieldUpTwotone };
