import ShareBold from "./ShareBold";
import ShareBroken from "./ShareBroken";
import ShareBulk from "./ShareBulk";
import ShareLinear from "./ShareLinear";
import ShareOutline from "./ShareOutline";
import ShareTwotone from "./ShareTwotone";

export { ShareBold, ShareBroken, ShareBulk, ShareLinear, ShareOutline, ShareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "share-bold",
    Component: ShareBold,
    componentName: "ShareBold",
  },
  {
    variant: "broken",
    slug: "share-broken",
    Component: ShareBroken,
    componentName: "ShareBroken",
  },
  {
    variant: "bulk",
    slug: "share-bulk",
    Component: ShareBulk,
    componentName: "ShareBulk",
  },
  {
    variant: "linear",
    slug: "share-linear",
    Component: ShareLinear,
    componentName: "ShareLinear",
  },
  {
    variant: "outline",
    slug: "share-outline",
    Component: ShareOutline,
    componentName: "ShareOutline",
  },
  {
    variant: "twotone",
    slug: "share-twotone",
    Component: ShareTwotone,
    componentName: "ShareTwotone",
  },
];
