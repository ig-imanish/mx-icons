import MusicSquareAddBold from "./MusicSquareAddBold";
import MusicSquareAddBroken from "./MusicSquareAddBroken";
import MusicSquareAddBulk from "./MusicSquareAddBulk";
import MusicSquareAddLinear from "./MusicSquareAddLinear";
import MusicSquareAddOutline from "./MusicSquareAddOutline";
import MusicSquareAddTwotone from "./MusicSquareAddTwotone";

export { MusicSquareAddBold, MusicSquareAddBroken, MusicSquareAddBulk, MusicSquareAddLinear, MusicSquareAddOutline, MusicSquareAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "music-square-add-bold",
    Component: MusicSquareAddBold,
    componentName: "MusicSquareAddBold",
  },
  {
    variant: "broken",
    slug: "music-square-add-broken",
    Component: MusicSquareAddBroken,
    componentName: "MusicSquareAddBroken",
  },
  {
    variant: "bulk",
    slug: "music-square-add-bulk",
    Component: MusicSquareAddBulk,
    componentName: "MusicSquareAddBulk",
  },
  {
    variant: "linear",
    slug: "music-square-add-linear",
    Component: MusicSquareAddLinear,
    componentName: "MusicSquareAddLinear",
  },
  {
    variant: "outline",
    slug: "music-square-add-outline",
    Component: MusicSquareAddOutline,
    componentName: "MusicSquareAddOutline",
  },
  {
    variant: "twotone",
    slug: "music-square-add-twotone",
    Component: MusicSquareAddTwotone,
    componentName: "MusicSquareAddTwotone",
  },
];
