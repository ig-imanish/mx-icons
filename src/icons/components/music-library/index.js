import MusicLibraryBold from "./MusicLibraryBold";
import MusicLibraryBroken from "./MusicLibraryBroken";
import MusicLibraryBulk from "./MusicLibraryBulk";
import MusicLibraryLinear from "./MusicLibraryLinear";
import MusicLibraryOutline from "./MusicLibraryOutline";
import MusicLibraryTwotone from "./MusicLibraryTwotone";

export { MusicLibraryBold, MusicLibraryBroken, MusicLibraryBulk, MusicLibraryLinear, MusicLibraryOutline, MusicLibraryTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-library-bold",
    Component: MusicLibraryBold,
    componentName: "MusicLibraryBold",
  },,
  {
    variant: "broken",
    slug: "music-library-broken",
    Component: MusicLibraryBroken,
    componentName: "MusicLibraryBroken",
  },,
  {
    variant: "bulk",
    slug: "music-library-bulk",
    Component: MusicLibraryBulk,
    componentName: "MusicLibraryBulk",
  },,
  {
    variant: "linear",
    slug: "music-library-linear",
    Component: MusicLibraryLinear,
    componentName: "MusicLibraryLinear",
  },,
  {
    variant: "outline",
    slug: "music-library-outline",
    Component: MusicLibraryOutline,
    componentName: "MusicLibraryOutline",
  },,
  {
    variant: "twotone",
    slug: "music-library-twotone",
    Component: MusicLibraryTwotone,
    componentName: "MusicLibraryTwotone",
  }
];

export default { MusicLibraryBold, MusicLibraryBroken, MusicLibraryBulk, MusicLibraryLinear, MusicLibraryOutline, MusicLibraryTwotone };
