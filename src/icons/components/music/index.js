import MusicBold from "./MusicBold";
import MusicBroken from "./MusicBroken";
import MusicBulk from "./MusicBulk";
import MusicLinear from "./MusicLinear";
import MusicOutline from "./MusicOutline";
import MusicTwotone from "./MusicTwotone";

export { MusicBold, MusicBroken, MusicBulk, MusicLinear, MusicOutline, MusicTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-bold",
    Component: MusicBold,
    componentName: "MusicBold",
  },
  {
    variant: "broken",
    slug: "music-broken",
    Component: MusicBroken,
    componentName: "MusicBroken",
  },
  {
    variant: "bulk",
    slug: "music-bulk",
    Component: MusicBulk,
    componentName: "MusicBulk",
  },
  {
    variant: "linear",
    slug: "music-linear",
    Component: MusicLinear,
    componentName: "MusicLinear",
  },
  {
    variant: "outline",
    slug: "music-outline",
    Component: MusicOutline,
    componentName: "MusicOutline",
  },
  {
    variant: "twotone",
    slug: "music-twotone",
    Component: MusicTwotone,
    componentName: "MusicTwotone",
  },
];
