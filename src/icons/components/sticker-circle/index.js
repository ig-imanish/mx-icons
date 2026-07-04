import StickerCircleBold from "./StickerCircleBold";
import StickerCircleBroken from "./StickerCircleBroken";
import StickerCircleBulk from "./StickerCircleBulk";
import StickerCircleLinear from "./StickerCircleLinear";
import StickerCircleOutline from "./StickerCircleOutline";
import StickerCircleTwotone from "./StickerCircleTwotone";

export { StickerCircleBold, StickerCircleBroken, StickerCircleBulk, StickerCircleLinear, StickerCircleOutline, StickerCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sticker-circle-bold",
    Component: StickerCircleBold,
    componentName: "StickerCircleBold",
  },,
  {
    variant: "broken",
    slug: "sticker-circle-broken",
    Component: StickerCircleBroken,
    componentName: "StickerCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "sticker-circle-bulk",
    Component: StickerCircleBulk,
    componentName: "StickerCircleBulk",
  },,
  {
    variant: "linear",
    slug: "sticker-circle-linear",
    Component: StickerCircleLinear,
    componentName: "StickerCircleLinear",
  },,
  {
    variant: "outline",
    slug: "sticker-circle-outline",
    Component: StickerCircleOutline,
    componentName: "StickerCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "sticker-circle-twotone",
    Component: StickerCircleTwotone,
    componentName: "StickerCircleTwotone",
  }
];

export default { StickerCircleBold, StickerCircleBroken, StickerCircleBulk, StickerCircleLinear, StickerCircleOutline, StickerCircleTwotone };
