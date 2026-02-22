import VolumeMuteBold from "./VolumeMuteBold";
import VolumeMuteBroken from "./VolumeMuteBroken";
import VolumeMuteBulk from "./VolumeMuteBulk";
import VolumeMuteLinear from "./VolumeMuteLinear";
import VolumeMuteOutline from "./VolumeMuteOutline";
import VolumeMuteTwotone from "./VolumeMuteTwotone";

export { VolumeMuteBold, VolumeMuteBroken, VolumeMuteBulk, VolumeMuteLinear, VolumeMuteOutline, VolumeMuteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "volume-mute-bold",
    Component: VolumeMuteBold,
    componentName: "VolumeMuteBold",
  },
  {
    variant: "broken",
    slug: "volume-mute-broken",
    Component: VolumeMuteBroken,
    componentName: "VolumeMuteBroken",
  },
  {
    variant: "bulk",
    slug: "volume-mute-bulk",
    Component: VolumeMuteBulk,
    componentName: "VolumeMuteBulk",
  },
  {
    variant: "linear",
    slug: "volume-mute-linear",
    Component: VolumeMuteLinear,
    componentName: "VolumeMuteLinear",
  },
  {
    variant: "outline",
    slug: "volume-mute-outline",
    Component: VolumeMuteOutline,
    componentName: "VolumeMuteOutline",
  },
  {
    variant: "twotone",
    slug: "volume-mute-twotone",
    Component: VolumeMuteTwotone,
    componentName: "VolumeMuteTwotone",
  },
];
