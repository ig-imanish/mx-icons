import PreviousBold from "./PreviousBold";
import PreviousBroken from "./PreviousBroken";
import PreviousBulk from "./PreviousBulk";
import PreviousLinear from "./PreviousLinear";
import PreviousOutline from "./PreviousOutline";
import PreviousTwotone from "./PreviousTwotone";

export { PreviousBold, PreviousBroken, PreviousBulk, PreviousLinear, PreviousOutline, PreviousTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "previous-bold",
    Component: PreviousBold,
    componentName: "PreviousBold",
  },
  {
    variant: "broken",
    slug: "previous-broken",
    Component: PreviousBroken,
    componentName: "PreviousBroken",
  },
  {
    variant: "bulk",
    slug: "previous-bulk",
    Component: PreviousBulk,
    componentName: "PreviousBulk",
  },
  {
    variant: "linear",
    slug: "previous-linear",
    Component: PreviousLinear,
    componentName: "PreviousLinear",
  },
  {
    variant: "outline",
    slug: "previous-outline",
    Component: PreviousOutline,
    componentName: "PreviousOutline",
  },
  {
    variant: "twotone",
    slug: "previous-twotone",
    Component: PreviousTwotone,
    componentName: "PreviousTwotone",
  },
];
