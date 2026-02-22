import MouseBold from "./MouseBold";
import MouseBroken from "./MouseBroken";
import MouseBulk from "./MouseBulk";
import MouseLinear from "./MouseLinear";
import MouseOutline from "./MouseOutline";
import MouseTwotone from "./MouseTwotone";

export { MouseBold, MouseBroken, MouseBulk, MouseLinear, MouseOutline, MouseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mouse-bold",
    Component: MouseBold,
    componentName: "MouseBold",
  },
  {
    variant: "broken",
    slug: "mouse-broken",
    Component: MouseBroken,
    componentName: "MouseBroken",
  },
  {
    variant: "bulk",
    slug: "mouse-bulk",
    Component: MouseBulk,
    componentName: "MouseBulk",
  },
  {
    variant: "linear",
    slug: "mouse-linear",
    Component: MouseLinear,
    componentName: "MouseLinear",
  },
  {
    variant: "outline",
    slug: "mouse-outline",
    Component: MouseOutline,
    componentName: "MouseOutline",
  },
  {
    variant: "twotone",
    slug: "mouse-twotone",
    Component: MouseTwotone,
    componentName: "MouseTwotone",
  },
];
