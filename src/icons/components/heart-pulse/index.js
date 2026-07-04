import HeartPulseBold from "./HeartPulseBold";
import HeartPulseBroken from "./HeartPulseBroken";
import HeartPulseBulk from "./HeartPulseBulk";
import HeartPulseLinear from "./HeartPulseLinear";
import HeartPulseOutline from "./HeartPulseOutline";
import HeartPulseTwotone from "./HeartPulseTwotone";

export { HeartPulseBold, HeartPulseBroken, HeartPulseBulk, HeartPulseLinear, HeartPulseOutline, HeartPulseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "heart-pulse-bold",
    Component: HeartPulseBold,
    componentName: "HeartPulseBold",
  },,
  {
    variant: "broken",
    slug: "heart-pulse-broken",
    Component: HeartPulseBroken,
    componentName: "HeartPulseBroken",
  },,
  {
    variant: "bulk",
    slug: "heart-pulse-bulk",
    Component: HeartPulseBulk,
    componentName: "HeartPulseBulk",
  },,
  {
    variant: "linear",
    slug: "heart-pulse-linear",
    Component: HeartPulseLinear,
    componentName: "HeartPulseLinear",
  },,
  {
    variant: "outline",
    slug: "heart-pulse-outline",
    Component: HeartPulseOutline,
    componentName: "HeartPulseOutline",
  },,
  {
    variant: "twotone",
    slug: "heart-pulse-twotone",
    Component: HeartPulseTwotone,
    componentName: "HeartPulseTwotone",
  }
];

export default { HeartPulseBold, HeartPulseBroken, HeartPulseBulk, HeartPulseLinear, HeartPulseOutline, HeartPulseTwotone };
