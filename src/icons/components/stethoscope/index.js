import StethoscopeBold from "./StethoscopeBold";
import StethoscopeBroken from "./StethoscopeBroken";
import StethoscopeBulk from "./StethoscopeBulk";
import StethoscopeLinear from "./StethoscopeLinear";
import StethoscopeOutline from "./StethoscopeOutline";
import StethoscopeTwotone from "./StethoscopeTwotone";

export { StethoscopeBold, StethoscopeBroken, StethoscopeBulk, StethoscopeLinear, StethoscopeOutline, StethoscopeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "stethoscope-bold",
    Component: StethoscopeBold,
    componentName: "StethoscopeBold",
  },,
  {
    variant: "broken",
    slug: "stethoscope-broken",
    Component: StethoscopeBroken,
    componentName: "StethoscopeBroken",
  },,
  {
    variant: "bulk",
    slug: "stethoscope-bulk",
    Component: StethoscopeBulk,
    componentName: "StethoscopeBulk",
  },,
  {
    variant: "linear",
    slug: "stethoscope-linear",
    Component: StethoscopeLinear,
    componentName: "StethoscopeLinear",
  },,
  {
    variant: "outline",
    slug: "stethoscope-outline",
    Component: StethoscopeOutline,
    componentName: "StethoscopeOutline",
  },,
  {
    variant: "twotone",
    slug: "stethoscope-twotone",
    Component: StethoscopeTwotone,
    componentName: "StethoscopeTwotone",
  }
];

export default { StethoscopeBold, StethoscopeBroken, StethoscopeBulk, StethoscopeLinear, StethoscopeOutline, StethoscopeTwotone };
