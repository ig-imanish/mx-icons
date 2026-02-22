import CallAddBold from "./CallAddBold";
import CallAddBroken from "./CallAddBroken";
import CallAddBulk from "./CallAddBulk";
import CallAddLinear from "./CallAddLinear";
import CallAddOutline from "./CallAddOutline";
import CallAddTwotone from "./CallAddTwotone";

export { CallAddBold, CallAddBroken, CallAddBulk, CallAddLinear, CallAddOutline, CallAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-add-bold",
    Component: CallAddBold,
    componentName: "CallAddBold",
  },
  {
    variant: "broken",
    slug: "call-add-broken",
    Component: CallAddBroken,
    componentName: "CallAddBroken",
  },
  {
    variant: "bulk",
    slug: "call-add-bulk",
    Component: CallAddBulk,
    componentName: "CallAddBulk",
  },
  {
    variant: "linear",
    slug: "call-add-linear",
    Component: CallAddLinear,
    componentName: "CallAddLinear",
  },
  {
    variant: "outline",
    slug: "call-add-outline",
    Component: CallAddOutline,
    componentName: "CallAddOutline",
  },
  {
    variant: "twotone",
    slug: "call-add-twotone",
    Component: CallAddTwotone,
    componentName: "CallAddTwotone",
  },
];
