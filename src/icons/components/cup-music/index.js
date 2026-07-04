import CupMusicBold from "./CupMusicBold";
import CupMusicBroken from "./CupMusicBroken";
import CupMusicBulk from "./CupMusicBulk";
import CupMusicLinear from "./CupMusicLinear";
import CupMusicOutline from "./CupMusicOutline";
import CupMusicTwotone from "./CupMusicTwotone";

export { CupMusicBold, CupMusicBroken, CupMusicBulk, CupMusicLinear, CupMusicOutline, CupMusicTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cup-music-bold",
    Component: CupMusicBold,
    componentName: "CupMusicBold",
  },,
  {
    variant: "broken",
    slug: "cup-music-broken",
    Component: CupMusicBroken,
    componentName: "CupMusicBroken",
  },,
  {
    variant: "bulk",
    slug: "cup-music-bulk",
    Component: CupMusicBulk,
    componentName: "CupMusicBulk",
  },,
  {
    variant: "linear",
    slug: "cup-music-linear",
    Component: CupMusicLinear,
    componentName: "CupMusicLinear",
  },,
  {
    variant: "outline",
    slug: "cup-music-outline",
    Component: CupMusicOutline,
    componentName: "CupMusicOutline",
  },,
  {
    variant: "twotone",
    slug: "cup-music-twotone",
    Component: CupMusicTwotone,
    componentName: "CupMusicTwotone",
  }
];

export default { CupMusicBold, CupMusicBroken, CupMusicBulk, CupMusicLinear, CupMusicOutline, CupMusicTwotone };
