import CallCallingBold from "./CallCallingBold";
import CallCallingBroken from "./CallCallingBroken";
import CallCallingBulk from "./CallCallingBulk";
import CallCallingLinear from "./CallCallingLinear";
import CallCallingOutline from "./CallCallingOutline";
import CallCallingTwotone from "./CallCallingTwotone";

export { CallCallingBold, CallCallingBroken, CallCallingBulk, CallCallingLinear, CallCallingOutline, CallCallingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-calling-bold",
    Component: CallCallingBold,
    componentName: "CallCallingBold",
  },
  {
    variant: "broken",
    slug: "call-calling-broken",
    Component: CallCallingBroken,
    componentName: "CallCallingBroken",
  },
  {
    variant: "bulk",
    slug: "call-calling-bulk",
    Component: CallCallingBulk,
    componentName: "CallCallingBulk",
  },
  {
    variant: "linear",
    slug: "call-calling-linear",
    Component: CallCallingLinear,
    componentName: "CallCallingLinear",
  },
  {
    variant: "outline",
    slug: "call-calling-outline",
    Component: CallCallingOutline,
    componentName: "CallCallingOutline",
  },
  {
    variant: "twotone",
    slug: "call-calling-twotone",
    Component: CallCallingTwotone,
    componentName: "CallCallingTwotone",
  },
];
