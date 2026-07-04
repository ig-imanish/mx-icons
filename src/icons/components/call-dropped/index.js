import CallDroppedBold from "./CallDroppedBold";
import CallDroppedBroken from "./CallDroppedBroken";
import CallDroppedBulk from "./CallDroppedBulk";
import CallDroppedLinear from "./CallDroppedLinear";
import CallDroppedOutline from "./CallDroppedOutline";
import CallDroppedTwotone from "./CallDroppedTwotone";

export { CallDroppedBold, CallDroppedBroken, CallDroppedBulk, CallDroppedLinear, CallDroppedOutline, CallDroppedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-dropped-bold",
    Component: CallDroppedBold,
    componentName: "CallDroppedBold",
  },,
  {
    variant: "broken",
    slug: "call-dropped-broken",
    Component: CallDroppedBroken,
    componentName: "CallDroppedBroken",
  },,
  {
    variant: "bulk",
    slug: "call-dropped-bulk",
    Component: CallDroppedBulk,
    componentName: "CallDroppedBulk",
  },,
  {
    variant: "linear",
    slug: "call-dropped-linear",
    Component: CallDroppedLinear,
    componentName: "CallDroppedLinear",
  },,
  {
    variant: "outline",
    slug: "call-dropped-outline",
    Component: CallDroppedOutline,
    componentName: "CallDroppedOutline",
  },,
  {
    variant: "twotone",
    slug: "call-dropped-twotone",
    Component: CallDroppedTwotone,
    componentName: "CallDroppedTwotone",
  }
];

export default { CallDroppedBold, CallDroppedBroken, CallDroppedBulk, CallDroppedLinear, CallDroppedOutline, CallDroppedTwotone };
