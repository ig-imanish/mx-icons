import MaximizeBold from "./MaximizeBold";
import MaximizeBroken from "./MaximizeBroken";
import MaximizeBulk from "./MaximizeBulk";
import MaximizeLinear from "./MaximizeLinear";
import MaximizeOutline from "./MaximizeOutline";
import MaximizeTwotone from "./MaximizeTwotone";

export { MaximizeBold, MaximizeBroken, MaximizeBulk, MaximizeLinear, MaximizeOutline, MaximizeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "maximize-bold",
    Component: MaximizeBold,
    componentName: "MaximizeBold",
  },
  {
    variant: "broken",
    slug: "maximize-broken",
    Component: MaximizeBroken,
    componentName: "MaximizeBroken",
  },
  {
    variant: "bulk",
    slug: "maximize-bulk",
    Component: MaximizeBulk,
    componentName: "MaximizeBulk",
  },
  {
    variant: "linear",
    slug: "maximize-linear",
    Component: MaximizeLinear,
    componentName: "MaximizeLinear",
  },
  {
    variant: "outline",
    slug: "maximize-outline",
    Component: MaximizeOutline,
    componentName: "MaximizeOutline",
  },
  {
    variant: "twotone",
    slug: "maximize-twotone",
    Component: MaximizeTwotone,
    componentName: "MaximizeTwotone",
  },
];
