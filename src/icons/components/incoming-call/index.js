import IncomingCallBold from "./IncomingCallBold";
import IncomingCallBroken from "./IncomingCallBroken";
import IncomingCallBulk from "./IncomingCallBulk";
import IncomingCallLinear from "./IncomingCallLinear";
import IncomingCallOutline from "./IncomingCallOutline";
import IncomingCallTwotone from "./IncomingCallTwotone";

export { IncomingCallBold, IncomingCallBroken, IncomingCallBulk, IncomingCallLinear, IncomingCallOutline, IncomingCallTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "incoming-call-bold",
    Component: IncomingCallBold,
    componentName: "IncomingCallBold",
  },,
  {
    variant: "broken",
    slug: "incoming-call-broken",
    Component: IncomingCallBroken,
    componentName: "IncomingCallBroken",
  },,
  {
    variant: "bulk",
    slug: "incoming-call-bulk",
    Component: IncomingCallBulk,
    componentName: "IncomingCallBulk",
  },,
  {
    variant: "linear",
    slug: "incoming-call-linear",
    Component: IncomingCallLinear,
    componentName: "IncomingCallLinear",
  },,
  {
    variant: "outline",
    slug: "incoming-call-outline",
    Component: IncomingCallOutline,
    componentName: "IncomingCallOutline",
  },,
  {
    variant: "twotone",
    slug: "incoming-call-twotone",
    Component: IncomingCallTwotone,
    componentName: "IncomingCallTwotone",
  }
];

export default { IncomingCallBold, IncomingCallBroken, IncomingCallBulk, IncomingCallLinear, IncomingCallOutline, IncomingCallTwotone };
