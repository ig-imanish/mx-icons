import PlayCricleBold from "./PlayCricleBold";
import PlayCricleBroken from "./PlayCricleBroken";
import PlayCricleBulk from "./PlayCricleBulk";
import PlayCricleLinear from "./PlayCricleLinear";
import PlayCricleOutline from "./PlayCricleOutline";
import PlayCricleTwotone from "./PlayCricleTwotone";

export { PlayCricleBold, PlayCricleBroken, PlayCricleBulk, PlayCricleLinear, PlayCricleOutline, PlayCricleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "play-cricle-bold",
    Component: PlayCricleBold,
    componentName: "PlayCricleBold",
  },
  {
    variant: "broken",
    slug: "play-cricle-broken",
    Component: PlayCricleBroken,
    componentName: "PlayCricleBroken",
  },
  {
    variant: "bulk",
    slug: "play-cricle-bulk",
    Component: PlayCricleBulk,
    componentName: "PlayCricleBulk",
  },
  {
    variant: "linear",
    slug: "play-cricle-linear",
    Component: PlayCricleLinear,
    componentName: "PlayCricleLinear",
  },
  {
    variant: "outline",
    slug: "play-cricle-outline",
    Component: PlayCricleOutline,
    componentName: "PlayCricleOutline",
  },
  {
    variant: "twotone",
    slug: "play-cricle-twotone",
    Component: PlayCricleTwotone,
    componentName: "PlayCricleTwotone",
  },
];
