import ShieldPlusBold from "./ShieldPlusBold";
import ShieldPlusBroken from "./ShieldPlusBroken";
import ShieldPlusBulk from "./ShieldPlusBulk";
import ShieldPlusLinear from "./ShieldPlusLinear";
import ShieldPlusOutline from "./ShieldPlusOutline";
import ShieldPlusTwotone from "./ShieldPlusTwotone";

export { ShieldPlusBold, ShieldPlusBroken, ShieldPlusBulk, ShieldPlusLinear, ShieldPlusOutline, ShieldPlusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-plus-bold",
    Component: ShieldPlusBold,
    componentName: "ShieldPlusBold",
  },,
  {
    variant: "broken",
    slug: "shield-plus-broken",
    Component: ShieldPlusBroken,
    componentName: "ShieldPlusBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-plus-bulk",
    Component: ShieldPlusBulk,
    componentName: "ShieldPlusBulk",
  },,
  {
    variant: "linear",
    slug: "shield-plus-linear",
    Component: ShieldPlusLinear,
    componentName: "ShieldPlusLinear",
  },,
  {
    variant: "outline",
    slug: "shield-plus-outline",
    Component: ShieldPlusOutline,
    componentName: "ShieldPlusOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-plus-twotone",
    Component: ShieldPlusTwotone,
    componentName: "ShieldPlusTwotone",
  }
];

export default { ShieldPlusBold, ShieldPlusBroken, ShieldPlusBulk, ShieldPlusLinear, ShieldPlusOutline, ShieldPlusTwotone };
