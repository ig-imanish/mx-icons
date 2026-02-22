import LikeBold from "./LikeBold";
import LikeBroken from "./LikeBroken";
import LikeBulk from "./LikeBulk";
import LikeLinear from "./LikeLinear";
import LikeOutline from "./LikeOutline";
import LikeTwotone from "./LikeTwotone";

export { LikeBold, LikeBroken, LikeBulk, LikeLinear, LikeOutline, LikeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "like-bold",
    Component: LikeBold,
    componentName: "LikeBold",
  },
  {
    variant: "broken",
    slug: "like-broken",
    Component: LikeBroken,
    componentName: "LikeBroken",
  },
  {
    variant: "bulk",
    slug: "like-bulk",
    Component: LikeBulk,
    componentName: "LikeBulk",
  },
  {
    variant: "linear",
    slug: "like-linear",
    Component: LikeLinear,
    componentName: "LikeLinear",
  },
  {
    variant: "outline",
    slug: "like-outline",
    Component: LikeOutline,
    componentName: "LikeOutline",
  },
  {
    variant: "twotone",
    slug: "like-twotone",
    Component: LikeTwotone,
    componentName: "LikeTwotone",
  },
];
