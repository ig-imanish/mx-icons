import PlusMinusBold from "./PlusMinusBold";
import PlusMinusBroken from "./PlusMinusBroken";
import PlusMinusBulk from "./PlusMinusBulk";
import PlusMinusLinear from "./PlusMinusLinear";
import PlusMinusOutline from "./PlusMinusOutline";
import PlusMinusTwotone from "./PlusMinusTwotone";

export { PlusMinusBold, PlusMinusBroken, PlusMinusBulk, PlusMinusLinear, PlusMinusOutline, PlusMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "plus-minus-bold",
    Component: PlusMinusBold,
    componentName: "PlusMinusBold",
  },,
  {
    variant: "broken",
    slug: "plus-minus-broken",
    Component: PlusMinusBroken,
    componentName: "PlusMinusBroken",
  },,
  {
    variant: "bulk",
    slug: "plus-minus-bulk",
    Component: PlusMinusBulk,
    componentName: "PlusMinusBulk",
  },,
  {
    variant: "linear",
    slug: "plus-minus-linear",
    Component: PlusMinusLinear,
    componentName: "PlusMinusLinear",
  },,
  {
    variant: "outline",
    slug: "plus-minus-outline",
    Component: PlusMinusOutline,
    componentName: "PlusMinusOutline",
  },,
  {
    variant: "twotone",
    slug: "plus-minus-twotone",
    Component: PlusMinusTwotone,
    componentName: "PlusMinusTwotone",
  }
];

export default { PlusMinusBold, PlusMinusBroken, PlusMinusBulk, PlusMinusLinear, PlusMinusOutline, PlusMinusTwotone };
