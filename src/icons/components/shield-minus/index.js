import ShieldMinusBold from "./ShieldMinusBold";
import ShieldMinusBroken from "./ShieldMinusBroken";
import ShieldMinusBulk from "./ShieldMinusBulk";
import ShieldMinusLinear from "./ShieldMinusLinear";
import ShieldMinusOutline from "./ShieldMinusOutline";
import ShieldMinusTwotone from "./ShieldMinusTwotone";

export { ShieldMinusBold, ShieldMinusBroken, ShieldMinusBulk, ShieldMinusLinear, ShieldMinusOutline, ShieldMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "shield-minus-bold",
    Component: ShieldMinusBold,
    componentName: "ShieldMinusBold",
  },,
  {
    variant: "broken",
    slug: "shield-minus-broken",
    Component: ShieldMinusBroken,
    componentName: "ShieldMinusBroken",
  },,
  {
    variant: "bulk",
    slug: "shield-minus-bulk",
    Component: ShieldMinusBulk,
    componentName: "ShieldMinusBulk",
  },,
  {
    variant: "linear",
    slug: "shield-minus-linear",
    Component: ShieldMinusLinear,
    componentName: "ShieldMinusLinear",
  },,
  {
    variant: "outline",
    slug: "shield-minus-outline",
    Component: ShieldMinusOutline,
    componentName: "ShieldMinusOutline",
  },,
  {
    variant: "twotone",
    slug: "shield-minus-twotone",
    Component: ShieldMinusTwotone,
    componentName: "ShieldMinusTwotone",
  }
];

export default { ShieldMinusBold, ShieldMinusBroken, ShieldMinusBulk, ShieldMinusLinear, ShieldMinusOutline, ShieldMinusTwotone };
