import StickerBold from "./StickerBold";
import StickerBroken from "./StickerBroken";
import StickerBulk from "./StickerBulk";
import StickerLinear from "./StickerLinear";
import StickerOutline from "./StickerOutline";
import StickerTwotone from "./StickerTwotone";

export { StickerBold, StickerBroken, StickerBulk, StickerLinear, StickerOutline, StickerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "sticker-bold",
    Component: StickerBold,
    componentName: "StickerBold",
  },
  {
    variant: "broken",
    slug: "sticker-broken",
    Component: StickerBroken,
    componentName: "StickerBroken",
  },
  {
    variant: "bulk",
    slug: "sticker-bulk",
    Component: StickerBulk,
    componentName: "StickerBulk",
  },
  {
    variant: "linear",
    slug: "sticker-linear",
    Component: StickerLinear,
    componentName: "StickerLinear",
  },
  {
    variant: "outline",
    slug: "sticker-outline",
    Component: StickerOutline,
    componentName: "StickerOutline",
  },
  {
    variant: "twotone",
    slug: "sticker-twotone",
    Component: StickerTwotone,
    componentName: "StickerTwotone",
  },
];
