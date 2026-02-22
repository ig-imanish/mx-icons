import CallOutgoingBold from "./CallOutgoingBold";
import CallOutgoingBroken from "./CallOutgoingBroken";
import CallOutgoingBulk from "./CallOutgoingBulk";
import CallOutgoingLinear from "./CallOutgoingLinear";
import CallOutgoingOutline from "./CallOutgoingOutline";
import CallOutgoingTwotone from "./CallOutgoingTwotone";

export { CallOutgoingBold, CallOutgoingBroken, CallOutgoingBulk, CallOutgoingLinear, CallOutgoingOutline, CallOutgoingTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-outgoing-bold",
    Component: CallOutgoingBold,
    componentName: "CallOutgoingBold",
  },
  {
    variant: "broken",
    slug: "call-outgoing-broken",
    Component: CallOutgoingBroken,
    componentName: "CallOutgoingBroken",
  },
  {
    variant: "bulk",
    slug: "call-outgoing-bulk",
    Component: CallOutgoingBulk,
    componentName: "CallOutgoingBulk",
  },
  {
    variant: "linear",
    slug: "call-outgoing-linear",
    Component: CallOutgoingLinear,
    componentName: "CallOutgoingLinear",
  },
  {
    variant: "outline",
    slug: "call-outgoing-outline",
    Component: CallOutgoingOutline,
    componentName: "CallOutgoingOutline",
  },
  {
    variant: "twotone",
    slug: "call-outgoing-twotone",
    Component: CallOutgoingTwotone,
    componentName: "CallOutgoingTwotone",
  },
];
