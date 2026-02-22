import LikeTagBold from "./LikeTagBold";
import LikeTagBroken from "./LikeTagBroken";
import LikeTagBulk from "./LikeTagBulk";
import LikeTagLinear from "./LikeTagLinear";
import LikeTagOutline from "./LikeTagOutline";
import LikeTagTwotone from "./LikeTagTwotone";

export { LikeTagBold, LikeTagBroken, LikeTagBulk, LikeTagLinear, LikeTagOutline, LikeTagTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "like-tag-bold",
    Component: LikeTagBold,
    componentName: "LikeTagBold",
  },
  {
    variant: "broken",
    slug: "like-tag-broken",
    Component: LikeTagBroken,
    componentName: "LikeTagBroken",
  },
  {
    variant: "bulk",
    slug: "like-tag-bulk",
    Component: LikeTagBulk,
    componentName: "LikeTagBulk",
  },
  {
    variant: "linear",
    slug: "like-tag-linear",
    Component: LikeTagLinear,
    componentName: "LikeTagLinear",
  },
  {
    variant: "outline",
    slug: "like-tag-outline",
    Component: LikeTagOutline,
    componentName: "LikeTagOutline",
  },
  {
    variant: "twotone",
    slug: "like-tag-twotone",
    Component: LikeTagTwotone,
    componentName: "LikeTagTwotone",
  },
];
