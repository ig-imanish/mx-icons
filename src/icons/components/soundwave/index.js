import SoundwaveBold from "./SoundwaveBold";
import SoundwaveBroken from "./SoundwaveBroken";
import SoundwaveBulk from "./SoundwaveBulk";
import SoundwaveLinear from "./SoundwaveLinear";
import SoundwaveOutline from "./SoundwaveOutline";
import SoundwaveTwotone from "./SoundwaveTwotone";

export { SoundwaveBold, SoundwaveBroken, SoundwaveBulk, SoundwaveLinear, SoundwaveOutline, SoundwaveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "soundwave-bold",
    Component: SoundwaveBold,
    componentName: "SoundwaveBold",
  },,
  {
    variant: "broken",
    slug: "soundwave-broken",
    Component: SoundwaveBroken,
    componentName: "SoundwaveBroken",
  },,
  {
    variant: "bulk",
    slug: "soundwave-bulk",
    Component: SoundwaveBulk,
    componentName: "SoundwaveBulk",
  },,
  {
    variant: "linear",
    slug: "soundwave-linear",
    Component: SoundwaveLinear,
    componentName: "SoundwaveLinear",
  },,
  {
    variant: "outline",
    slug: "soundwave-outline",
    Component: SoundwaveOutline,
    componentName: "SoundwaveOutline",
  },,
  {
    variant: "twotone",
    slug: "soundwave-twotone",
    Component: SoundwaveTwotone,
    componentName: "SoundwaveTwotone",
  }
];

export default { SoundwaveBold, SoundwaveBroken, SoundwaveBulk, SoundwaveLinear, SoundwaveOutline, SoundwaveTwotone };
