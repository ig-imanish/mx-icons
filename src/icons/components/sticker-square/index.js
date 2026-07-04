import StickerSquareBold from "./StickerSquareBold";
import StickerSquareBroken from "./StickerSquareBroken";
import StickerSquareBulk from "./StickerSquareBulk";
import StickerSquareLinear from "./StickerSquareLinear";
import StickerSquareOutline from "./StickerSquareOutline";
import StickerSquareTwotone from "./StickerSquareTwotone";

export { StickerSquareBold, StickerSquareBroken, StickerSquareBulk, StickerSquareLinear, StickerSquareOutline, StickerSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sticker-square-bold",
    Component: StickerSquareBold,
    componentName: "StickerSquareBold",
  },,
  {
    variant: "broken",
    slug: "sticker-square-broken",
    Component: StickerSquareBroken,
    componentName: "StickerSquareBroken",
  },,
  {
    variant: "bulk",
    slug: "sticker-square-bulk",
    Component: StickerSquareBulk,
    componentName: "StickerSquareBulk",
  },,
  {
    variant: "linear",
    slug: "sticker-square-linear",
    Component: StickerSquareLinear,
    componentName: "StickerSquareLinear",
  },,
  {
    variant: "outline",
    slug: "sticker-square-outline",
    Component: StickerSquareOutline,
    componentName: "StickerSquareOutline",
  },,
  {
    variant: "twotone",
    slug: "sticker-square-twotone",
    Component: StickerSquareTwotone,
    componentName: "StickerSquareTwotone",
  }
];

export default { StickerSquareBold, StickerSquareBroken, StickerSquareBulk, StickerSquareLinear, StickerSquareOutline, StickerSquareTwotone };
