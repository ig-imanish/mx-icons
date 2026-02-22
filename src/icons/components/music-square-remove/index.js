import MusicSquareRemoveBold from "./MusicSquareRemoveBold";
import MusicSquareRemoveBroken from "./MusicSquareRemoveBroken";
import MusicSquareRemoveBulk from "./MusicSquareRemoveBulk";
import MusicSquareRemoveLinear from "./MusicSquareRemoveLinear";
import MusicSquareRemoveOutline from "./MusicSquareRemoveOutline";
import MusicSquareRemoveTwotone from "./MusicSquareRemoveTwotone";

export { MusicSquareRemoveBold, MusicSquareRemoveBroken, MusicSquareRemoveBulk, MusicSquareRemoveLinear, MusicSquareRemoveOutline, MusicSquareRemoveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-square-remove-bold",
    Component: MusicSquareRemoveBold,
    componentName: "MusicSquareRemoveBold",
  },
  {
    variant: "broken",
    slug: "music-square-remove-broken",
    Component: MusicSquareRemoveBroken,
    componentName: "MusicSquareRemoveBroken",
  },
  {
    variant: "bulk",
    slug: "music-square-remove-bulk",
    Component: MusicSquareRemoveBulk,
    componentName: "MusicSquareRemoveBulk",
  },
  {
    variant: "linear",
    slug: "music-square-remove-linear",
    Component: MusicSquareRemoveLinear,
    componentName: "MusicSquareRemoveLinear",
  },
  {
    variant: "outline",
    slug: "music-square-remove-outline",
    Component: MusicSquareRemoveOutline,
    componentName: "MusicSquareRemoveOutline",
  },
  {
    variant: "twotone",
    slug: "music-square-remove-twotone",
    Component: MusicSquareRemoveTwotone,
    componentName: "MusicSquareRemoveTwotone",
  },
];
