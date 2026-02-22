import MusicSquareBold from "./MusicSquareBold";
import MusicSquareBroken from "./MusicSquareBroken";
import MusicSquareBulk from "./MusicSquareBulk";
import MusicSquareLinear from "./MusicSquareLinear";
import MusicSquareOutline from "./MusicSquareOutline";
import MusicSquareTwotone from "./MusicSquareTwotone";

export { MusicSquareBold, MusicSquareBroken, MusicSquareBulk, MusicSquareLinear, MusicSquareOutline, MusicSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-square-bold",
    Component: MusicSquareBold,
    componentName: "MusicSquareBold",
  },
  {
    variant: "broken",
    slug: "music-square-broken",
    Component: MusicSquareBroken,
    componentName: "MusicSquareBroken",
  },
  {
    variant: "bulk",
    slug: "music-square-bulk",
    Component: MusicSquareBulk,
    componentName: "MusicSquareBulk",
  },
  {
    variant: "linear",
    slug: "music-square-linear",
    Component: MusicSquareLinear,
    componentName: "MusicSquareLinear",
  },
  {
    variant: "outline",
    slug: "music-square-outline",
    Component: MusicSquareOutline,
    componentName: "MusicSquareOutline",
  },
  {
    variant: "twotone",
    slug: "music-square-twotone",
    Component: MusicSquareTwotone,
    componentName: "MusicSquareTwotone",
  },
];
