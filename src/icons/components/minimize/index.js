import MinimizeBold from "./MinimizeBold";
import MinimizeBroken from "./MinimizeBroken";
import MinimizeBulk from "./MinimizeBulk";
import MinimizeLinear from "./MinimizeLinear";
import MinimizeOutline from "./MinimizeOutline";
import MinimizeTwotone from "./MinimizeTwotone";

export { MinimizeBold, MinimizeBroken, MinimizeBulk, MinimizeLinear, MinimizeOutline, MinimizeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "minimize-bold",
    Component: MinimizeBold,
    componentName: "MinimizeBold",
  },,
  {
    variant: "broken",
    slug: "minimize-broken",
    Component: MinimizeBroken,
    componentName: "MinimizeBroken",
  },,
  {
    variant: "bulk",
    slug: "minimize-bulk",
    Component: MinimizeBulk,
    componentName: "MinimizeBulk",
  },,
  {
    variant: "linear",
    slug: "minimize-linear",
    Component: MinimizeLinear,
    componentName: "MinimizeLinear",
  },,
  {
    variant: "outline",
    slug: "minimize-outline",
    Component: MinimizeOutline,
    componentName: "MinimizeOutline",
  },,
  {
    variant: "twotone",
    slug: "minimize-twotone",
    Component: MinimizeTwotone,
    componentName: "MinimizeTwotone",
  }
];

export default { MinimizeBold, MinimizeBroken, MinimizeBulk, MinimizeLinear, MinimizeOutline, MinimizeTwotone };
