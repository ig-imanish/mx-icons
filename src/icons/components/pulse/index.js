import PulseBold from "./PulseBold";
import PulseBroken from "./PulseBroken";
import PulseBulk from "./PulseBulk";
import PulseLinear from "./PulseLinear";
import PulseOutline from "./PulseOutline";
import PulseTwotone from "./PulseTwotone";

export { PulseBold, PulseBroken, PulseBulk, PulseLinear, PulseOutline, PulseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pulse-bold",
    Component: PulseBold,
    componentName: "PulseBold",
  },,
  {
    variant: "broken",
    slug: "pulse-broken",
    Component: PulseBroken,
    componentName: "PulseBroken",
  },,
  {
    variant: "bulk",
    slug: "pulse-bulk",
    Component: PulseBulk,
    componentName: "PulseBulk",
  },,
  {
    variant: "linear",
    slug: "pulse-linear",
    Component: PulseLinear,
    componentName: "PulseLinear",
  },,
  {
    variant: "outline",
    slug: "pulse-outline",
    Component: PulseOutline,
    componentName: "PulseOutline",
  },,
  {
    variant: "twotone",
    slug: "pulse-twotone",
    Component: PulseTwotone,
    componentName: "PulseTwotone",
  }
];

export default { PulseBold, PulseBroken, PulseBulk, PulseLinear, PulseOutline, PulseTwotone };
