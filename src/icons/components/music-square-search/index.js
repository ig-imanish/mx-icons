import MusicSquareSearchBold from "./MusicSquareSearchBold";
import MusicSquareSearchBroken from "./MusicSquareSearchBroken";
import MusicSquareSearchBulk from "./MusicSquareSearchBulk";
import MusicSquareSearchLinear from "./MusicSquareSearchLinear";
import MusicSquareSearchOutline from "./MusicSquareSearchOutline";
import MusicSquareSearchTwotone from "./MusicSquareSearchTwotone";

export { MusicSquareSearchBold, MusicSquareSearchBroken, MusicSquareSearchBulk, MusicSquareSearchLinear, MusicSquareSearchOutline, MusicSquareSearchTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-square-search-bold",
    Component: MusicSquareSearchBold,
    componentName: "MusicSquareSearchBold",
  },
  {
    variant: "broken",
    slug: "music-square-search-broken",
    Component: MusicSquareSearchBroken,
    componentName: "MusicSquareSearchBroken",
  },
  {
    variant: "bulk",
    slug: "music-square-search-bulk",
    Component: MusicSquareSearchBulk,
    componentName: "MusicSquareSearchBulk",
  },
  {
    variant: "linear",
    slug: "music-square-search-linear",
    Component: MusicSquareSearchLinear,
    componentName: "MusicSquareSearchLinear",
  },
  {
    variant: "outline",
    slug: "music-square-search-outline",
    Component: MusicSquareSearchOutline,
    componentName: "MusicSquareSearchOutline",
  },
  {
    variant: "twotone",
    slug: "music-square-search-twotone",
    Component: MusicSquareSearchTwotone,
    componentName: "MusicSquareSearchTwotone",
  },
];
