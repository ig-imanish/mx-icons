import LikeDislikeBold from "./LikeDislikeBold";
import LikeDislikeBroken from "./LikeDislikeBroken";
import LikeDislikeBulk from "./LikeDislikeBulk";
import LikeDislikeLinear from "./LikeDislikeLinear";
import LikeDislikeOutline from "./LikeDislikeOutline";
import LikeDislikeTwotone from "./LikeDislikeTwotone";

export { LikeDislikeBold, LikeDislikeBroken, LikeDislikeBulk, LikeDislikeLinear, LikeDislikeOutline, LikeDislikeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "like-dislike-bold",
    Component: LikeDislikeBold,
    componentName: "LikeDislikeBold",
  },
  {
    variant: "broken",
    slug: "like-dislike-broken",
    Component: LikeDislikeBroken,
    componentName: "LikeDislikeBroken",
  },
  {
    variant: "bulk",
    slug: "like-dislike-bulk",
    Component: LikeDislikeBulk,
    componentName: "LikeDislikeBulk",
  },
  {
    variant: "linear",
    slug: "like-dislike-linear",
    Component: LikeDislikeLinear,
    componentName: "LikeDislikeLinear",
  },
  {
    variant: "outline",
    slug: "like-dislike-outline",
    Component: LikeDislikeOutline,
    componentName: "LikeDislikeOutline",
  },
  {
    variant: "twotone",
    slug: "like-dislike-twotone",
    Component: LikeDislikeTwotone,
    componentName: "LikeDislikeTwotone",
  },
];
