import CallRemoveBold from "./CallRemoveBold";
import CallRemoveBroken from "./CallRemoveBroken";
import CallRemoveBulk from "./CallRemoveBulk";
import CallRemoveLinear from "./CallRemoveLinear";
import CallRemoveOutline from "./CallRemoveOutline";
import CallRemoveTwotone from "./CallRemoveTwotone";

export { CallRemoveBold, CallRemoveBroken, CallRemoveBulk, CallRemoveLinear, CallRemoveOutline, CallRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "call-remove-bold",
    Component: CallRemoveBold,
    componentName: "CallRemoveBold",
  },
  {
    variant: "broken",
    slug: "call-remove-broken",
    Component: CallRemoveBroken,
    componentName: "CallRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "call-remove-bulk",
    Component: CallRemoveBulk,
    componentName: "CallRemoveBulk",
  },
  {
    variant: "linear",
    slug: "call-remove-linear",
    Component: CallRemoveLinear,
    componentName: "CallRemoveLinear",
  },
  {
    variant: "outline",
    slug: "call-remove-outline",
    Component: CallRemoveOutline,
    componentName: "CallRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "call-remove-twotone",
    Component: CallRemoveTwotone,
    componentName: "CallRemoveTwotone",
  },
];
