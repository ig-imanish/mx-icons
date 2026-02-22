import CallIncomingBold from "./CallIncomingBold";
import CallIncomingBroken from "./CallIncomingBroken";
import CallIncomingBulk from "./CallIncomingBulk";
import CallIncomingLinear from "./CallIncomingLinear";
import CallIncomingOutline from "./CallIncomingOutline";
import CallIncomingTwotone from "./CallIncomingTwotone";

export { CallIncomingBold, CallIncomingBroken, CallIncomingBulk, CallIncomingLinear, CallIncomingOutline, CallIncomingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-incoming-bold",
    Component: CallIncomingBold,
    componentName: "CallIncomingBold",
  },
  {
    variant: "broken",
    slug: "call-incoming-broken",
    Component: CallIncomingBroken,
    componentName: "CallIncomingBroken",
  },
  {
    variant: "bulk",
    slug: "call-incoming-bulk",
    Component: CallIncomingBulk,
    componentName: "CallIncomingBulk",
  },
  {
    variant: "linear",
    slug: "call-incoming-linear",
    Component: CallIncomingLinear,
    componentName: "CallIncomingLinear",
  },
  {
    variant: "outline",
    slug: "call-incoming-outline",
    Component: CallIncomingOutline,
    componentName: "CallIncomingOutline",
  },
  {
    variant: "twotone",
    slug: "call-incoming-twotone",
    Component: CallIncomingTwotone,
    componentName: "CallIncomingTwotone",
  },
];
