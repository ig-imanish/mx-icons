import HappyemojiBold from "./HappyemojiBold";
import HappyemojiBroken from "./HappyemojiBroken";
import HappyemojiBulk from "./HappyemojiBulk";
import HappyemojiLinear from "./HappyemojiLinear";
import HappyemojiOutline from "./HappyemojiOutline";
import HappyemojiTwotone from "./HappyemojiTwotone";

export { HappyemojiBold, HappyemojiBroken, HappyemojiBulk, HappyemojiLinear, HappyemojiOutline, HappyemojiTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "happyemoji-bold",
    Component: HappyemojiBold,
    componentName: "HappyemojiBold",
  },
  {
    variant: "broken",
    slug: "happyemoji-broken",
    Component: HappyemojiBroken,
    componentName: "HappyemojiBroken",
  },
  {
    variant: "bulk",
    slug: "happyemoji-bulk",
    Component: HappyemojiBulk,
    componentName: "HappyemojiBulk",
  },
  {
    variant: "linear",
    slug: "happyemoji-linear",
    Component: HappyemojiLinear,
    componentName: "HappyemojiLinear",
  },
  {
    variant: "outline",
    slug: "happyemoji-outline",
    Component: HappyemojiOutline,
    componentName: "HappyemojiOutline",
  },
  {
    variant: "twotone",
    slug: "happyemoji-twotone",
    Component: HappyemojiTwotone,
    componentName: "HappyemojiTwotone",
  },
];
