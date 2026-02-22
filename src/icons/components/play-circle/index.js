import PlayCircleBold from "./PlayCircleBold";
import PlayCircleBroken from "./PlayCircleBroken";
import PlayCircleBulk from "./PlayCircleBulk";
import PlayCircleLinear from "./PlayCircleLinear";
import PlayCircleOutline from "./PlayCircleOutline";
import PlayCircleTwotone from "./PlayCircleTwotone";

export { PlayCircleBold, PlayCircleBroken, PlayCircleBulk, PlayCircleLinear, PlayCircleOutline, PlayCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "play-circle-bold",
    Component: PlayCircleBold,
    componentName: "PlayCircleBold",
  },
  {
    variant: "broken",
    slug: "play-circle-broken",
    Component: PlayCircleBroken,
    componentName: "PlayCircleBroken",
  },
  {
    variant: "bulk",
    slug: "play-circle-bulk",
    Component: PlayCircleBulk,
    componentName: "PlayCircleBulk",
  },
  {
    variant: "linear",
    slug: "play-circle-linear",
    Component: PlayCircleLinear,
    componentName: "PlayCircleLinear",
  },
  {
    variant: "outline",
    slug: "play-circle-outline",
    Component: PlayCircleOutline,
    componentName: "PlayCircleOutline",
  },
  {
    variant: "twotone",
    slug: "play-circle-twotone",
    Component: PlayCircleTwotone,
    componentName: "PlayCircleTwotone",
  },
];
