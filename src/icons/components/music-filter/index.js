import MusicFilterBold from "./MusicFilterBold";
import MusicFilterBroken from "./MusicFilterBroken";
import MusicFilterBulk from "./MusicFilterBulk";
import MusicFilterLinear from "./MusicFilterLinear";
import MusicFilterOutline from "./MusicFilterOutline";
import MusicFilterTwotone from "./MusicFilterTwotone";

export { MusicFilterBold, MusicFilterBroken, MusicFilterBulk, MusicFilterLinear, MusicFilterOutline, MusicFilterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-filter-bold",
    Component: MusicFilterBold,
    componentName: "MusicFilterBold",
  },
  {
    variant: "broken",
    slug: "music-filter-broken",
    Component: MusicFilterBroken,
    componentName: "MusicFilterBroken",
  },
  {
    variant: "bulk",
    slug: "music-filter-bulk",
    Component: MusicFilterBulk,
    componentName: "MusicFilterBulk",
  },
  {
    variant: "linear",
    slug: "music-filter-linear",
    Component: MusicFilterLinear,
    componentName: "MusicFilterLinear",
  },
  {
    variant: "outline",
    slug: "music-filter-outline",
    Component: MusicFilterOutline,
    componentName: "MusicFilterOutline",
  },
  {
    variant: "twotone",
    slug: "music-filter-twotone",
    Component: MusicFilterTwotone,
    componentName: "MusicFilterTwotone",
  },
];
