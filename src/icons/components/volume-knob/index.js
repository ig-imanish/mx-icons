import VolumeKnobBold from "./VolumeKnobBold";
import VolumeKnobBroken from "./VolumeKnobBroken";
import VolumeKnobBulk from "./VolumeKnobBulk";
import VolumeKnobLinear from "./VolumeKnobLinear";
import VolumeKnobOutline from "./VolumeKnobOutline";
import VolumeKnobTwotone from "./VolumeKnobTwotone";

export { VolumeKnobBold, VolumeKnobBroken, VolumeKnobBulk, VolumeKnobLinear, VolumeKnobOutline, VolumeKnobTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volume-knob-bold",
    Component: VolumeKnobBold,
    componentName: "VolumeKnobBold",
  },,
  {
    variant: "broken",
    slug: "volume-knob-broken",
    Component: VolumeKnobBroken,
    componentName: "VolumeKnobBroken",
  },,
  {
    variant: "bulk",
    slug: "volume-knob-bulk",
    Component: VolumeKnobBulk,
    componentName: "VolumeKnobBulk",
  },,
  {
    variant: "linear",
    slug: "volume-knob-linear",
    Component: VolumeKnobLinear,
    componentName: "VolumeKnobLinear",
  },,
  {
    variant: "outline",
    slug: "volume-knob-outline",
    Component: VolumeKnobOutline,
    componentName: "VolumeKnobOutline",
  },,
  {
    variant: "twotone",
    slug: "volume-knob-twotone",
    Component: VolumeKnobTwotone,
    componentName: "VolumeKnobTwotone",
  }
];

export default { VolumeKnobBold, VolumeKnobBroken, VolumeKnobBulk, VolumeKnobLinear, VolumeKnobOutline, VolumeKnobTwotone };
