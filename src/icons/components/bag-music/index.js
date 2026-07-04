import BagMusicBold from "./BagMusicBold";
import BagMusicBroken from "./BagMusicBroken";
import BagMusicBulk from "./BagMusicBulk";
import BagMusicLinear from "./BagMusicLinear";
import BagMusicOutline from "./BagMusicOutline";
import BagMusicTwotone from "./BagMusicTwotone";

export { BagMusicBold, BagMusicBroken, BagMusicBulk, BagMusicLinear, BagMusicOutline, BagMusicTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bag-music-bold",
    Component: BagMusicBold,
    componentName: "BagMusicBold",
  },,
  {
    variant: "broken",
    slug: "bag-music-broken",
    Component: BagMusicBroken,
    componentName: "BagMusicBroken",
  },,
  {
    variant: "bulk",
    slug: "bag-music-bulk",
    Component: BagMusicBulk,
    componentName: "BagMusicBulk",
  },,
  {
    variant: "linear",
    slug: "bag-music-linear",
    Component: BagMusicLinear,
    componentName: "BagMusicLinear",
  },,
  {
    variant: "outline",
    slug: "bag-music-outline",
    Component: BagMusicOutline,
    componentName: "BagMusicOutline",
  },,
  {
    variant: "twotone",
    slug: "bag-music-twotone",
    Component: BagMusicTwotone,
    componentName: "BagMusicTwotone",
  }
];

export default { BagMusicBold, BagMusicBroken, BagMusicBulk, BagMusicLinear, BagMusicOutline, BagMusicTwotone };
