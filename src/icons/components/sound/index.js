import SoundBold from "./SoundBold";
import SoundBroken from "./SoundBroken";
import SoundBulk from "./SoundBulk";
import SoundLinear from "./SoundLinear";
import SoundOutline from "./SoundOutline";
import SoundTwotone from "./SoundTwotone";

export { SoundBold, SoundBroken, SoundBulk, SoundLinear, SoundOutline, SoundTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sound-bold",
    Component: SoundBold,
    componentName: "SoundBold",
  },
  {
    variant: "broken",
    slug: "sound-broken",
    Component: SoundBroken,
    componentName: "SoundBroken",
  },
  {
    variant: "bulk",
    slug: "sound-bulk",
    Component: SoundBulk,
    componentName: "SoundBulk",
  },
  {
    variant: "linear",
    slug: "sound-linear",
    Component: SoundLinear,
    componentName: "SoundLinear",
  },
  {
    variant: "outline",
    slug: "sound-outline",
    Component: SoundOutline,
    componentName: "SoundOutline",
  },
  {
    variant: "twotone",
    slug: "sound-twotone",
    Component: SoundTwotone,
    componentName: "SoundTwotone",
  },
];
