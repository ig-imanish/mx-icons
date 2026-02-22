import ForwardBold from "./ForwardBold";
import ForwardBroken from "./ForwardBroken";
import ForwardBulk from "./ForwardBulk";
import ForwardLinear from "./ForwardLinear";
import ForwardOutline from "./ForwardOutline";
import ForwardTwotone from "./ForwardTwotone";

export { ForwardBold, ForwardBroken, ForwardBulk, ForwardLinear, ForwardOutline, ForwardTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "forward-bold",
    Component: ForwardBold,
    componentName: "ForwardBold",
  },
  {
    variant: "broken",
    slug: "forward-broken",
    Component: ForwardBroken,
    componentName: "ForwardBroken",
  },
  {
    variant: "bulk",
    slug: "forward-bulk",
    Component: ForwardBulk,
    componentName: "ForwardBulk",
  },
  {
    variant: "linear",
    slug: "forward-linear",
    Component: ForwardLinear,
    componentName: "ForwardLinear",
  },
  {
    variant: "outline",
    slug: "forward-outline",
    Component: ForwardOutline,
    componentName: "ForwardOutline",
  },
  {
    variant: "twotone",
    slug: "forward-twotone",
    Component: ForwardTwotone,
    componentName: "ForwardTwotone",
  },
];
