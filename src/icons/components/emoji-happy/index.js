import EmojiHappyBold from "./EmojiHappyBold";
import EmojiHappyBroken from "./EmojiHappyBroken";
import EmojiHappyBulk from "./EmojiHappyBulk";
import EmojiHappyLinear from "./EmojiHappyLinear";
import EmojiHappyOutline from "./EmojiHappyOutline";
import EmojiHappyTwotone from "./EmojiHappyTwotone";

export { EmojiHappyBold, EmojiHappyBroken, EmojiHappyBulk, EmojiHappyLinear, EmojiHappyOutline, EmojiHappyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "emoji-happy-bold",
    Component: EmojiHappyBold,
    componentName: "EmojiHappyBold",
  },
  {
    variant: "broken",
    slug: "emoji-happy-broken",
    Component: EmojiHappyBroken,
    componentName: "EmojiHappyBroken",
  },
  {
    variant: "bulk",
    slug: "emoji-happy-bulk",
    Component: EmojiHappyBulk,
    componentName: "EmojiHappyBulk",
  },
  {
    variant: "linear",
    slug: "emoji-happy-linear",
    Component: EmojiHappyLinear,
    componentName: "EmojiHappyLinear",
  },
  {
    variant: "outline",
    slug: "emoji-happy-outline",
    Component: EmojiHappyOutline,
    componentName: "EmojiHappyOutline",
  },
  {
    variant: "twotone",
    slug: "emoji-happy-twotone",
    Component: EmojiHappyTwotone,
    componentName: "EmojiHappyTwotone",
  },
];
