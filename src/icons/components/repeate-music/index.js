import RepeateMusicBold from "./RepeateMusicBold";
import RepeateMusicBroken from "./RepeateMusicBroken";
import RepeateMusicBulk from "./RepeateMusicBulk";
import RepeateMusicLinear from "./RepeateMusicLinear";
import RepeateMusicOutline from "./RepeateMusicOutline";
import RepeateMusicTwotone from "./RepeateMusicTwotone";

export { RepeateMusicBold, RepeateMusicBroken, RepeateMusicBulk, RepeateMusicLinear, RepeateMusicOutline, RepeateMusicTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "repeate-music-bold",
    Component: RepeateMusicBold,
    componentName: "RepeateMusicBold",
  },
  {
    variant: "broken",
    slug: "repeate-music-broken",
    Component: RepeateMusicBroken,
    componentName: "RepeateMusicBroken",
  },
  {
    variant: "bulk",
    slug: "repeate-music-bulk",
    Component: RepeateMusicBulk,
    componentName: "RepeateMusicBulk",
  },
  {
    variant: "linear",
    slug: "repeate-music-linear",
    Component: RepeateMusicLinear,
    componentName: "RepeateMusicLinear",
  },
  {
    variant: "outline",
    slug: "repeate-music-outline",
    Component: RepeateMusicOutline,
    componentName: "RepeateMusicOutline",
  },
  {
    variant: "twotone",
    slug: "repeate-music-twotone",
    Component: RepeateMusicTwotone,
    componentName: "RepeateMusicTwotone",
  },
];
