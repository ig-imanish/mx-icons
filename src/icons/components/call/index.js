import CallBold from "./CallBold";
import CallBroken from "./CallBroken";
import CallBulk from "./CallBulk";
import CallLinear from "./CallLinear";
import CallOutline from "./CallOutline";
import CallTwotone from "./CallTwotone";

export { CallBold, CallBroken, CallBulk, CallLinear, CallOutline, CallTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-bold",
    Component: CallBold,
    componentName: "CallBold",
  },
  {
    variant: "broken",
    slug: "call-broken",
    Component: CallBroken,
    componentName: "CallBroken",
  },
  {
    variant: "bulk",
    slug: "call-bulk",
    Component: CallBulk,
    componentName: "CallBulk",
  },
  {
    variant: "linear",
    slug: "call-linear",
    Component: CallLinear,
    componentName: "CallLinear",
  },
  {
    variant: "outline",
    slug: "call-outline",
    Component: CallOutline,
    componentName: "CallOutline",
  },
  {
    variant: "twotone",
    slug: "call-twotone",
    Component: CallTwotone,
    componentName: "CallTwotone",
  },
];
