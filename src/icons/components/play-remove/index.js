import PlayRemoveBold from "./PlayRemoveBold";
import PlayRemoveBroken from "./PlayRemoveBroken";
import PlayRemoveBulk from "./PlayRemoveBulk";
import PlayRemoveLinear from "./PlayRemoveLinear";
import PlayRemoveOutline from "./PlayRemoveOutline";
import PlayRemoveTwotone from "./PlayRemoveTwotone";

export { PlayRemoveBold, PlayRemoveBroken, PlayRemoveBulk, PlayRemoveLinear, PlayRemoveOutline, PlayRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "play-remove-bold",
    Component: PlayRemoveBold,
    componentName: "PlayRemoveBold",
  },
  {
    variant: "broken",
    slug: "play-remove-broken",
    Component: PlayRemoveBroken,
    componentName: "PlayRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "play-remove-bulk",
    Component: PlayRemoveBulk,
    componentName: "PlayRemoveBulk",
  },
  {
    variant: "linear",
    slug: "play-remove-linear",
    Component: PlayRemoveLinear,
    componentName: "PlayRemoveLinear",
  },
  {
    variant: "outline",
    slug: "play-remove-outline",
    Component: PlayRemoveOutline,
    componentName: "PlayRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "play-remove-twotone",
    Component: PlayRemoveTwotone,
    componentName: "PlayRemoveTwotone",
  },
];
