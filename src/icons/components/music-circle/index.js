import MusicCircleBold from "./MusicCircleBold";
import MusicCircleBroken from "./MusicCircleBroken";
import MusicCircleBulk from "./MusicCircleBulk";
import MusicCircleLinear from "./MusicCircleLinear";
import MusicCircleOutline from "./MusicCircleOutline";
import MusicCircleTwotone from "./MusicCircleTwotone";

export { MusicCircleBold, MusicCircleBroken, MusicCircleBulk, MusicCircleLinear, MusicCircleOutline, MusicCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-circle-bold",
    Component: MusicCircleBold,
    componentName: "MusicCircleBold",
  },
  {
    variant: "broken",
    slug: "music-circle-broken",
    Component: MusicCircleBroken,
    componentName: "MusicCircleBroken",
  },
  {
    variant: "bulk",
    slug: "music-circle-bulk",
    Component: MusicCircleBulk,
    componentName: "MusicCircleBulk",
  },
  {
    variant: "linear",
    slug: "music-circle-linear",
    Component: MusicCircleLinear,
    componentName: "MusicCircleLinear",
  },
  {
    variant: "outline",
    slug: "music-circle-outline",
    Component: MusicCircleOutline,
    componentName: "MusicCircleOutline",
  },
  {
    variant: "twotone",
    slug: "music-circle-twotone",
    Component: MusicCircleTwotone,
    componentName: "MusicCircleTwotone",
  },
];
