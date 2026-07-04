import MagnetWaveBold from "./MagnetWaveBold";
import MagnetWaveBroken from "./MagnetWaveBroken";
import MagnetWaveBulk from "./MagnetWaveBulk";
import MagnetWaveLinear from "./MagnetWaveLinear";
import MagnetWaveOutline from "./MagnetWaveOutline";
import MagnetWaveTwotone from "./MagnetWaveTwotone";

export { MagnetWaveBold, MagnetWaveBroken, MagnetWaveBulk, MagnetWaveLinear, MagnetWaveOutline, MagnetWaveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "magnet-wave-bold",
    Component: MagnetWaveBold,
    componentName: "MagnetWaveBold",
  },,
  {
    variant: "broken",
    slug: "magnet-wave-broken",
    Component: MagnetWaveBroken,
    componentName: "MagnetWaveBroken",
  },,
  {
    variant: "bulk",
    slug: "magnet-wave-bulk",
    Component: MagnetWaveBulk,
    componentName: "MagnetWaveBulk",
  },,
  {
    variant: "linear",
    slug: "magnet-wave-linear",
    Component: MagnetWaveLinear,
    componentName: "MagnetWaveLinear",
  },,
  {
    variant: "outline",
    slug: "magnet-wave-outline",
    Component: MagnetWaveOutline,
    componentName: "MagnetWaveOutline",
  },,
  {
    variant: "twotone",
    slug: "magnet-wave-twotone",
    Component: MagnetWaveTwotone,
    componentName: "MagnetWaveTwotone",
  }
];

export default { MagnetWaveBold, MagnetWaveBroken, MagnetWaveBulk, MagnetWaveLinear, MagnetWaveOutline, MagnetWaveTwotone };
