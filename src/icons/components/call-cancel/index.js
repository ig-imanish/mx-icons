import CallCancelBold from "./CallCancelBold";
import CallCancelBroken from "./CallCancelBroken";
import CallCancelBulk from "./CallCancelBulk";
import CallCancelLinear from "./CallCancelLinear";
import CallCancelOutline from "./CallCancelOutline";
import CallCancelTwotone from "./CallCancelTwotone";

export { CallCancelBold, CallCancelBroken, CallCancelBulk, CallCancelLinear, CallCancelOutline, CallCancelTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-cancel-bold",
    Component: CallCancelBold,
    componentName: "CallCancelBold",
  },,
  {
    variant: "broken",
    slug: "call-cancel-broken",
    Component: CallCancelBroken,
    componentName: "CallCancelBroken",
  },,
  {
    variant: "bulk",
    slug: "call-cancel-bulk",
    Component: CallCancelBulk,
    componentName: "CallCancelBulk",
  },,
  {
    variant: "linear",
    slug: "call-cancel-linear",
    Component: CallCancelLinear,
    componentName: "CallCancelLinear",
  },,
  {
    variant: "outline",
    slug: "call-cancel-outline",
    Component: CallCancelOutline,
    componentName: "CallCancelOutline",
  },,
  {
    variant: "twotone",
    slug: "call-cancel-twotone",
    Component: CallCancelTwotone,
    componentName: "CallCancelTwotone",
  }
];

export default { CallCancelBold, CallCancelBroken, CallCancelBulk, CallCancelLinear, CallCancelOutline, CallCancelTwotone };
