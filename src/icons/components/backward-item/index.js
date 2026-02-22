import BackwardItemBold from "./BackwardItemBold";
import BackwardItemBroken from "./BackwardItemBroken";
import BackwardItemBulk from "./BackwardItemBulk";
import BackwardItemLinear from "./BackwardItemLinear";
import BackwardItemOutline from "./BackwardItemOutline";
import BackwardItemTwotone from "./BackwardItemTwotone";

export { BackwardItemBold, BackwardItemBroken, BackwardItemBulk, BackwardItemLinear, BackwardItemOutline, BackwardItemTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "backward-item-bold",
    Component: BackwardItemBold,
    componentName: "BackwardItemBold",
  },
  {
    variant: "broken",
    slug: "backward-item-broken",
    Component: BackwardItemBroken,
    componentName: "BackwardItemBroken",
  },
  {
    variant: "bulk",
    slug: "backward-item-bulk",
    Component: BackwardItemBulk,
    componentName: "BackwardItemBulk",
  },
  {
    variant: "linear",
    slug: "backward-item-linear",
    Component: BackwardItemLinear,
    componentName: "BackwardItemLinear",
  },
  {
    variant: "outline",
    slug: "backward-item-outline",
    Component: BackwardItemOutline,
    componentName: "BackwardItemOutline",
  },
  {
    variant: "twotone",
    slug: "backward-item-twotone",
    Component: BackwardItemTwotone,
    componentName: "BackwardItemTwotone",
  },
];
