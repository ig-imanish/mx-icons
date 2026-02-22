import BackwardBold from "./BackwardBold";
import BackwardBroken from "./BackwardBroken";
import BackwardBulk from "./BackwardBulk";
import BackwardLinear from "./BackwardLinear";
import BackwardOutline from "./BackwardOutline";
import BackwardTwotone from "./BackwardTwotone";

export { BackwardBold, BackwardBroken, BackwardBulk, BackwardLinear, BackwardOutline, BackwardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "backward-bold",
    Component: BackwardBold,
    componentName: "BackwardBold",
  },
  {
    variant: "broken",
    slug: "backward-broken",
    Component: BackwardBroken,
    componentName: "BackwardBroken",
  },
  {
    variant: "bulk",
    slug: "backward-bulk",
    Component: BackwardBulk,
    componentName: "BackwardBulk",
  },
  {
    variant: "linear",
    slug: "backward-linear",
    Component: BackwardLinear,
    componentName: "BackwardLinear",
  },
  {
    variant: "outline",
    slug: "backward-outline",
    Component: BackwardOutline,
    componentName: "BackwardOutline",
  },
  {
    variant: "twotone",
    slug: "backward-twotone",
    Component: BackwardTwotone,
    componentName: "BackwardTwotone",
  },
];
