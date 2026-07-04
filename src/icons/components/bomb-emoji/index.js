import BombEmojiBold from "./BombEmojiBold";
import BombEmojiBroken from "./BombEmojiBroken";
import BombEmojiBulk from "./BombEmojiBulk";
import BombEmojiLinear from "./BombEmojiLinear";
import BombEmojiOutline from "./BombEmojiOutline";
import BombEmojiTwotone from "./BombEmojiTwotone";

export { BombEmojiBold, BombEmojiBroken, BombEmojiBulk, BombEmojiLinear, BombEmojiOutline, BombEmojiTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bomb-emoji-bold",
    Component: BombEmojiBold,
    componentName: "BombEmojiBold",
  },,
  {
    variant: "broken",
    slug: "bomb-emoji-broken",
    Component: BombEmojiBroken,
    componentName: "BombEmojiBroken",
  },,
  {
    variant: "bulk",
    slug: "bomb-emoji-bulk",
    Component: BombEmojiBulk,
    componentName: "BombEmojiBulk",
  },,
  {
    variant: "linear",
    slug: "bomb-emoji-linear",
    Component: BombEmojiLinear,
    componentName: "BombEmojiLinear",
  },,
  {
    variant: "outline",
    slug: "bomb-emoji-outline",
    Component: BombEmojiOutline,
    componentName: "BombEmojiOutline",
  },,
  {
    variant: "twotone",
    slug: "bomb-emoji-twotone",
    Component: BombEmojiTwotone,
    componentName: "BombEmojiTwotone",
  }
];

export default { BombEmojiBold, BombEmojiBroken, BombEmojiBulk, BombEmojiLinear, BombEmojiOutline, BombEmojiTwotone };
