import EmojiSadBold from "./EmojiSadBold";
import EmojiSadBroken from "./EmojiSadBroken";
import EmojiSadBulk from "./EmojiSadBulk";
import EmojiSadLinear from "./EmojiSadLinear";
import EmojiSadOutline from "./EmojiSadOutline";
import EmojiSadTwotone from "./EmojiSadTwotone";

export { EmojiSadBold, EmojiSadBroken, EmojiSadBulk, EmojiSadLinear, EmojiSadOutline, EmojiSadTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "emoji-sad-bold",
    Component: EmojiSadBold,
    componentName: "EmojiSadBold",
  },
  {
    variant: "broken",
    slug: "emoji-sad-broken",
    Component: EmojiSadBroken,
    componentName: "EmojiSadBroken",
  },
  {
    variant: "bulk",
    slug: "emoji-sad-bulk",
    Component: EmojiSadBulk,
    componentName: "EmojiSadBulk",
  },
  {
    variant: "linear",
    slug: "emoji-sad-linear",
    Component: EmojiSadLinear,
    componentName: "EmojiSadLinear",
  },
  {
    variant: "outline",
    slug: "emoji-sad-outline",
    Component: EmojiSadOutline,
    componentName: "EmojiSadOutline",
  },
  {
    variant: "twotone",
    slug: "emoji-sad-twotone",
    Component: EmojiSadTwotone,
    componentName: "EmojiSadTwotone",
  },
];
