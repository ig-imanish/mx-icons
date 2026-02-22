import CallMinusBold from "./CallMinusBold";
import CallMinusBroken from "./CallMinusBroken";
import CallMinusBulk from "./CallMinusBulk";
import CallMinusLinear from "./CallMinusLinear";
import CallMinusOutline from "./CallMinusOutline";
import CallMinusTwotone from "./CallMinusTwotone";

export { CallMinusBold, CallMinusBroken, CallMinusBulk, CallMinusLinear, CallMinusOutline, CallMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-minus-bold",
    Component: CallMinusBold,
    componentName: "CallMinusBold",
  },
  {
    variant: "broken",
    slug: "call-minus-broken",
    Component: CallMinusBroken,
    componentName: "CallMinusBroken",
  },
  {
    variant: "bulk",
    slug: "call-minus-bulk",
    Component: CallMinusBulk,
    componentName: "CallMinusBulk",
  },
  {
    variant: "linear",
    slug: "call-minus-linear",
    Component: CallMinusLinear,
    componentName: "CallMinusLinear",
  },
  {
    variant: "outline",
    slug: "call-minus-outline",
    Component: CallMinusOutline,
    componentName: "CallMinusOutline",
  },
  {
    variant: "twotone",
    slug: "call-minus-twotone",
    Component: CallMinusTwotone,
    componentName: "CallMinusTwotone",
  },
];
