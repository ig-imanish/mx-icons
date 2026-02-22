import MouseCircleBold from "./MouseCircleBold";
import MouseCircleBroken from "./MouseCircleBroken";
import MouseCircleBulk from "./MouseCircleBulk";
import MouseCircleLinear from "./MouseCircleLinear";
import MouseCircleOutline from "./MouseCircleOutline";
import MouseCircleTwotone from "./MouseCircleTwotone";

export { MouseCircleBold, MouseCircleBroken, MouseCircleBulk, MouseCircleLinear, MouseCircleOutline, MouseCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "mouse-circle-bold",
    Component: MouseCircleBold,
    componentName: "MouseCircleBold",
  },
  {
    variant: "broken",
    slug: "mouse-circle-broken",
    Component: MouseCircleBroken,
    componentName: "MouseCircleBroken",
  },
  {
    variant: "bulk",
    slug: "mouse-circle-bulk",
    Component: MouseCircleBulk,
    componentName: "MouseCircleBulk",
  },
  {
    variant: "linear",
    slug: "mouse-circle-linear",
    Component: MouseCircleLinear,
    componentName: "MouseCircleLinear",
  },
  {
    variant: "outline",
    slug: "mouse-circle-outline",
    Component: MouseCircleOutline,
    componentName: "MouseCircleOutline",
  },
  {
    variant: "twotone",
    slug: "mouse-circle-twotone",
    Component: MouseCircleTwotone,
    componentName: "MouseCircleTwotone",
  },
];
