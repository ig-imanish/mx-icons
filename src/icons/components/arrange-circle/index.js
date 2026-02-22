import ArrangeCircleBold from "./ArrangeCircleBold";
import ArrangeCircleBroken from "./ArrangeCircleBroken";
import ArrangeCircleBulk from "./ArrangeCircleBulk";
import ArrangeCircleLinear from "./ArrangeCircleLinear";
import ArrangeCircleOutline from "./ArrangeCircleOutline";
import ArrangeCircleTwotone from "./ArrangeCircleTwotone";

export { ArrangeCircleBold, ArrangeCircleBroken, ArrangeCircleBulk, ArrangeCircleLinear, ArrangeCircleOutline, ArrangeCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "arrange-circle-bold",
    Component: ArrangeCircleBold,
    componentName: "ArrangeCircleBold",
  },
  {
    variant: "broken",
    slug: "arrange-circle-broken",
    Component: ArrangeCircleBroken,
    componentName: "ArrangeCircleBroken",
  },
  {
    variant: "bulk",
    slug: "arrange-circle-bulk",
    Component: ArrangeCircleBulk,
    componentName: "ArrangeCircleBulk",
  },
  {
    variant: "linear",
    slug: "arrange-circle-linear",
    Component: ArrangeCircleLinear,
    componentName: "ArrangeCircleLinear",
  },
  {
    variant: "outline",
    slug: "arrange-circle-outline",
    Component: ArrangeCircleOutline,
    componentName: "ArrangeCircleOutline",
  },
  {
    variant: "twotone",
    slug: "arrange-circle-twotone",
    Component: ArrangeCircleTwotone,
    componentName: "ArrangeCircleTwotone",
  },
];
