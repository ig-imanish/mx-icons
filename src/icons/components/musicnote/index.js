import MusicnoteBold from "./MusicnoteBold";
import MusicnoteBroken from "./MusicnoteBroken";
import MusicnoteBulk from "./MusicnoteBulk";
import MusicnoteLinear from "./MusicnoteLinear";
import MusicnoteOutline from "./MusicnoteOutline";
import MusicnoteTwotone from "./MusicnoteTwotone";

export { MusicnoteBold, MusicnoteBroken, MusicnoteBulk, MusicnoteLinear, MusicnoteOutline, MusicnoteTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "musicnote-bold",
    Component: MusicnoteBold,
    componentName: "MusicnoteBold",
  },
  {
    variant: "broken",
    slug: "musicnote-broken",
    Component: MusicnoteBroken,
    componentName: "MusicnoteBroken",
  },
  {
    variant: "bulk",
    slug: "musicnote-bulk",
    Component: MusicnoteBulk,
    componentName: "MusicnoteBulk",
  },
  {
    variant: "linear",
    slug: "musicnote-linear",
    Component: MusicnoteLinear,
    componentName: "MusicnoteLinear",
  },
  {
    variant: "outline",
    slug: "musicnote-outline",
    Component: MusicnoteOutline,
    componentName: "MusicnoteOutline",
  },
  {
    variant: "twotone",
    slug: "musicnote-twotone",
    Component: MusicnoteTwotone,
    componentName: "MusicnoteTwotone",
  },
];
