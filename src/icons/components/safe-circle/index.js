import SafeCircleBold from "./SafeCircleBold";
import SafeCircleBroken from "./SafeCircleBroken";
import SafeCircleBulk from "./SafeCircleBulk";
import SafeCircleLinear from "./SafeCircleLinear";
import SafeCircleOutline from "./SafeCircleOutline";
import SafeCircleTwotone from "./SafeCircleTwotone";

export { SafeCircleBold, SafeCircleBroken, SafeCircleBulk, SafeCircleLinear, SafeCircleOutline, SafeCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "safe-circle-bold",
    Component: SafeCircleBold,
    componentName: "SafeCircleBold",
  },,
  {
    variant: "broken",
    slug: "safe-circle-broken",
    Component: SafeCircleBroken,
    componentName: "SafeCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "safe-circle-bulk",
    Component: SafeCircleBulk,
    componentName: "SafeCircleBulk",
  },,
  {
    variant: "linear",
    slug: "safe-circle-linear",
    Component: SafeCircleLinear,
    componentName: "SafeCircleLinear",
  },,
  {
    variant: "outline",
    slug: "safe-circle-outline",
    Component: SafeCircleOutline,
    componentName: "SafeCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "safe-circle-twotone",
    Component: SafeCircleTwotone,
    componentName: "SafeCircleTwotone",
  }
];

export default { SafeCircleBold, SafeCircleBroken, SafeCircleBulk, SafeCircleLinear, SafeCircleOutline, SafeCircleTwotone };
