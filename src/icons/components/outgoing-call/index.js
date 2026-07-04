import OutgoingCallBold from "./OutgoingCallBold";
import OutgoingCallBroken from "./OutgoingCallBroken";
import OutgoingCallBulk from "./OutgoingCallBulk";
import OutgoingCallLinear from "./OutgoingCallLinear";
import OutgoingCallOutline from "./OutgoingCallOutline";
import OutgoingCallTwotone from "./OutgoingCallTwotone";

export { OutgoingCallBold, OutgoingCallBroken, OutgoingCallBulk, OutgoingCallLinear, OutgoingCallOutline, OutgoingCallTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "outgoing-call-bold",
    Component: OutgoingCallBold,
    componentName: "OutgoingCallBold",
  },,
  {
    variant: "broken",
    slug: "outgoing-call-broken",
    Component: OutgoingCallBroken,
    componentName: "OutgoingCallBroken",
  },,
  {
    variant: "bulk",
    slug: "outgoing-call-bulk",
    Component: OutgoingCallBulk,
    componentName: "OutgoingCallBulk",
  },,
  {
    variant: "linear",
    slug: "outgoing-call-linear",
    Component: OutgoingCallLinear,
    componentName: "OutgoingCallLinear",
  },,
  {
    variant: "outline",
    slug: "outgoing-call-outline",
    Component: OutgoingCallOutline,
    componentName: "OutgoingCallOutline",
  },,
  {
    variant: "twotone",
    slug: "outgoing-call-twotone",
    Component: OutgoingCallTwotone,
    componentName: "OutgoingCallTwotone",
  }
];

export default { OutgoingCallBold, OutgoingCallBroken, OutgoingCallBulk, OutgoingCallLinear, OutgoingCallOutline, OutgoingCallTwotone };
