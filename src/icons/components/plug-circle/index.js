import PlugCircleBold from "./PlugCircleBold";
import PlugCircleBroken from "./PlugCircleBroken";
import PlugCircleBulk from "./PlugCircleBulk";
import PlugCircleLinear from "./PlugCircleLinear";
import PlugCircleOutline from "./PlugCircleOutline";
import PlugCircleTwotone from "./PlugCircleTwotone";

export { PlugCircleBold, PlugCircleBroken, PlugCircleBulk, PlugCircleLinear, PlugCircleOutline, PlugCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "plug-circle-bold",
    Component: PlugCircleBold,
    componentName: "PlugCircleBold",
  },,
  {
    variant: "broken",
    slug: "plug-circle-broken",
    Component: PlugCircleBroken,
    componentName: "PlugCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "plug-circle-bulk",
    Component: PlugCircleBulk,
    componentName: "PlugCircleBulk",
  },,
  {
    variant: "linear",
    slug: "plug-circle-linear",
    Component: PlugCircleLinear,
    componentName: "PlugCircleLinear",
  },,
  {
    variant: "outline",
    slug: "plug-circle-outline",
    Component: PlugCircleOutline,
    componentName: "PlugCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "plug-circle-twotone",
    Component: PlugCircleTwotone,
    componentName: "PlugCircleTwotone",
  }
];

export default { PlugCircleBold, PlugCircleBroken, PlugCircleBulk, PlugCircleLinear, PlugCircleOutline, PlugCircleTwotone };
