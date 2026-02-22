import ForwardItemBold from "./ForwardItemBold";
import ForwardItemBroken from "./ForwardItemBroken";
import ForwardItemBulk from "./ForwardItemBulk";
import ForwardItemLinear from "./ForwardItemLinear";
import ForwardItemOutline from "./ForwardItemOutline";
import ForwardItemTwotone from "./ForwardItemTwotone";

export { ForwardItemBold, ForwardItemBroken, ForwardItemBulk, ForwardItemLinear, ForwardItemOutline, ForwardItemTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "forward-item-bold",
    Component: ForwardItemBold,
    componentName: "ForwardItemBold",
  },
  {
    variant: "broken",
    slug: "forward-item-broken",
    Component: ForwardItemBroken,
    componentName: "ForwardItemBroken",
  },
  {
    variant: "bulk",
    slug: "forward-item-bulk",
    Component: ForwardItemBulk,
    componentName: "ForwardItemBulk",
  },
  {
    variant: "linear",
    slug: "forward-item-linear",
    Component: ForwardItemLinear,
    componentName: "ForwardItemLinear",
  },
  {
    variant: "outline",
    slug: "forward-item-outline",
    Component: ForwardItemOutline,
    componentName: "ForwardItemOutline",
  },
  {
    variant: "twotone",
    slug: "forward-item-twotone",
    Component: ForwardItemTwotone,
    componentName: "ForwardItemTwotone",
  },
];
