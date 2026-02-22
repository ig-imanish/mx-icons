import CallReceivedBold from "./CallReceivedBold";
import CallReceivedBroken from "./CallReceivedBroken";
import CallReceivedBulk from "./CallReceivedBulk";
import CallReceivedLinear from "./CallReceivedLinear";
import CallReceivedOutline from "./CallReceivedOutline";
import CallReceivedTwotone from "./CallReceivedTwotone";

export { CallReceivedBold, CallReceivedBroken, CallReceivedBulk, CallReceivedLinear, CallReceivedOutline, CallReceivedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-received-bold",
    Component: CallReceivedBold,
    componentName: "CallReceivedBold",
  },
  {
    variant: "broken",
    slug: "call-received-broken",
    Component: CallReceivedBroken,
    componentName: "CallReceivedBroken",
  },
  {
    variant: "bulk",
    slug: "call-received-bulk",
    Component: CallReceivedBulk,
    componentName: "CallReceivedBulk",
  },
  {
    variant: "linear",
    slug: "call-received-linear",
    Component: CallReceivedLinear,
    componentName: "CallReceivedLinear",
  },
  {
    variant: "outline",
    slug: "call-received-outline",
    Component: CallReceivedOutline,
    componentName: "CallReceivedOutline",
  },
  {
    variant: "twotone",
    slug: "call-received-twotone",
    Component: CallReceivedTwotone,
    componentName: "CallReceivedTwotone",
  },
];
