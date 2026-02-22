import EmojiNormalBold from "./EmojiNormalBold";
import EmojiNormalBroken from "./EmojiNormalBroken";
import EmojiNormalBulk from "./EmojiNormalBulk";
import EmojiNormalLinear from "./EmojiNormalLinear";
import EmojiNormalOutline from "./EmojiNormalOutline";
import EmojiNormalTwotone from "./EmojiNormalTwotone";

export { EmojiNormalBold, EmojiNormalBroken, EmojiNormalBulk, EmojiNormalLinear, EmojiNormalOutline, EmojiNormalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "emoji-normal-bold",
    Component: EmojiNormalBold,
    componentName: "EmojiNormalBold",
  },
  {
    variant: "broken",
    slug: "emoji-normal-broken",
    Component: EmojiNormalBroken,
    componentName: "EmojiNormalBroken",
  },
  {
    variant: "bulk",
    slug: "emoji-normal-bulk",
    Component: EmojiNormalBulk,
    componentName: "EmojiNormalBulk",
  },
  {
    variant: "linear",
    slug: "emoji-normal-linear",
    Component: EmojiNormalLinear,
    componentName: "EmojiNormalLinear",
  },
  {
    variant: "outline",
    slug: "emoji-normal-outline",
    Component: EmojiNormalOutline,
    componentName: "EmojiNormalOutline",
  },
  {
    variant: "twotone",
    slug: "emoji-normal-twotone",
    Component: EmojiNormalTwotone,
    componentName: "EmojiNormalTwotone",
  },
];
