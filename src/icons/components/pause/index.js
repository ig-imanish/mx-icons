import PauseBold from "./PauseBold";
import PauseBroken from "./PauseBroken";
import PauseBulk from "./PauseBulk";
import PauseLinear from "./PauseLinear";
import PauseOff from "./PauseOff";
import PauseOutline from "./PauseOutline";
import PauseToPlayFilledTransition from "./PauseToPlayFilledTransition";
import PauseToPlayTransition from "./PauseToPlayTransition";
import PauseTwotone from "./PauseTwotone";

export { PauseBold, PauseBroken, PauseBulk, PauseLinear, PauseOff, PauseOutline, PauseToPlayFilledTransition, PauseToPlayTransition, PauseTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "pause-bold",
    Component: PauseBold,
    componentName: "PauseBold",
  },
  {
    variant: "broken",
    slug: "pause-broken",
    Component: PauseBroken,
    componentName: "PauseBroken",
  },
  {
    variant: "bulk",
    slug: "pause-bulk",
    Component: PauseBulk,
    componentName: "PauseBulk",
  },
  {
    variant: "linear",
    slug: "pause-linear",
    Component: PauseLinear,
    componentName: "PauseLinear",
  },
  {
    variant: "linear",
    slug: "pause-off",
    Component: PauseOff,
    componentName: "PauseOff",
  },
  {
    variant: "outline",
    slug: "pause-outline",
    Component: PauseOutline,
    componentName: "PauseOutline",
  },
  {
    variant: "filled",
    slug: "pause-to-play-filled-transition",
    Component: PauseToPlayFilledTransition,
    componentName: "PauseToPlayFilledTransition",
  },
  {
    variant: "linear",
    slug: "pause-to-play-transition",
    Component: PauseToPlayTransition,
    componentName: "PauseToPlayTransition",
  },
  {
    variant: "twotone",
    slug: "pause-twotone",
    Component: PauseTwotone,
    componentName: "PauseTwotone",
  },
];
