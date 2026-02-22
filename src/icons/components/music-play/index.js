import MusicPlayBold from "./MusicPlayBold";
import MusicPlayBroken from "./MusicPlayBroken";
import MusicPlayBulk from "./MusicPlayBulk";
import MusicPlayLinear from "./MusicPlayLinear";
import MusicPlayOutline from "./MusicPlayOutline";
import MusicPlayTwotone from "./MusicPlayTwotone";

export { MusicPlayBold, MusicPlayBroken, MusicPlayBulk, MusicPlayLinear, MusicPlayOutline, MusicPlayTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-play-bold",
    Component: MusicPlayBold,
    componentName: "MusicPlayBold",
  },
  {
    variant: "broken",
    slug: "music-play-broken",
    Component: MusicPlayBroken,
    componentName: "MusicPlayBroken",
  },
  {
    variant: "bulk",
    slug: "music-play-bulk",
    Component: MusicPlayBulk,
    componentName: "MusicPlayBulk",
  },
  {
    variant: "linear",
    slug: "music-play-linear",
    Component: MusicPlayLinear,
    componentName: "MusicPlayLinear",
  },
  {
    variant: "outline",
    slug: "music-play-outline",
    Component: MusicPlayOutline,
    componentName: "MusicPlayOutline",
  },
  {
    variant: "twotone",
    slug: "music-play-twotone",
    Component: MusicPlayTwotone,
    componentName: "MusicPlayTwotone",
  },
];
