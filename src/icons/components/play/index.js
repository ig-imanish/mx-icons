import PlayBold from "./PlayBold";
import PlayBroken from "./PlayBroken";
import PlayBulk from "./PlayBulk";
import PlayFilled from "./PlayFilled";
import PlayFilledToPauseTransition from "./PlayFilledToPauseTransition";
import PlayLinear from "./PlayLinear";
import PlayOff from "./PlayOff";
import PlayOffFilled from "./PlayOffFilled";
import PlayOffTwotone from "./PlayOffTwotone";
import PlayOutline from "./PlayOutline";
import PlayToPauseTransition from "./PlayToPauseTransition";
import PlayTwotone from "./PlayTwotone";

export { PlayBold, PlayBroken, PlayBulk, PlayFilled, PlayFilledToPauseTransition, PlayLinear, PlayOff, PlayOffFilled, PlayOffTwotone, PlayOutline, PlayToPauseTransition, PlayTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "play-bold",
    Component: PlayBold,
    componentName: "PlayBold",
  },
  {
    variant: "broken",
    slug: "play-broken",
    Component: PlayBroken,
    componentName: "PlayBroken",
  },
  {
    variant: "bulk",
    slug: "play-bulk",
    Component: PlayBulk,
    componentName: "PlayBulk",
  },
  {
    variant: "filled",
    slug: "play-filled",
    Component: PlayFilled,
    componentName: "PlayFilled",
  },
  {
    variant: "filled",
    slug: "play-filled-to-pause-transition",
    Component: PlayFilledToPauseTransition,
    componentName: "PlayFilledToPauseTransition",
  },
  {
    variant: "linear",
    slug: "play-linear",
    Component: PlayLinear,
    componentName: "PlayLinear",
  },
  {
    variant: "linear",
    slug: "play-off",
    Component: PlayOff,
    componentName: "PlayOff",
  },
  {
    variant: "filled",
    slug: "play-off-filled",
    Component: PlayOffFilled,
    componentName: "PlayOffFilled",
  },
  {
    variant: "twotone",
    slug: "play-off-twotone",
    Component: PlayOffTwotone,
    componentName: "PlayOffTwotone",
  },
  {
    variant: "outline",
    slug: "play-outline",
    Component: PlayOutline,
    componentName: "PlayOutline",
  },
  {
    variant: "linear",
    slug: "play-to-pause-transition",
    Component: PlayToPauseTransition,
    componentName: "PlayToPauseTransition",
  },
  {
    variant: "twotone",
    slug: "play-twotone",
    Component: PlayTwotone,
    componentName: "PlayTwotone",
  },
];
