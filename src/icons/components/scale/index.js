import ScaleBold from "./ScaleBold";
import ScaleBroken from "./ScaleBroken";
import ScaleBulk from "./ScaleBulk";
import ScaleLinear from "./ScaleLinear";
import ScaleOutline from "./ScaleOutline";
import ScaleTwotone from "./ScaleTwotone";

export { ScaleBold, ScaleBroken, ScaleBulk, ScaleLinear, ScaleOutline, ScaleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scale-bold",
    Component: ScaleBold,
    componentName: "ScaleBold",
  },,
  {
    variant: "broken",
    slug: "scale-broken",
    Component: ScaleBroken,
    componentName: "ScaleBroken",
  },,
  {
    variant: "bulk",
    slug: "scale-bulk",
    Component: ScaleBulk,
    componentName: "ScaleBulk",
  },,
  {
    variant: "linear",
    slug: "scale-linear",
    Component: ScaleLinear,
    componentName: "ScaleLinear",
  },,
  {
    variant: "outline",
    slug: "scale-outline",
    Component: ScaleOutline,
    componentName: "ScaleOutline",
  },,
  {
    variant: "twotone",
    slug: "scale-twotone",
    Component: ScaleTwotone,
    componentName: "ScaleTwotone",
  }
];

export default { ScaleBold, ScaleBroken, ScaleBulk, ScaleLinear, ScaleOutline, ScaleTwotone };
