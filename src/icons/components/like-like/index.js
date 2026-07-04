import LikeLikeBold from "./LikeLikeBold";
import LikeLikeBroken from "./LikeLikeBroken";
import LikeLikeBulk from "./LikeLikeBulk";
import LikeLikeLinear from "./LikeLikeLinear";
import LikeLikeOutline from "./LikeLikeOutline";
import LikeLikeTwotone from "./LikeLikeTwotone";

export { LikeLikeBold, LikeLikeBroken, LikeLikeBulk, LikeLikeLinear, LikeLikeOutline, LikeLikeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "like-like-bold",
    Component: LikeLikeBold,
    componentName: "LikeLikeBold",
  },,
  {
    variant: "broken",
    slug: "like-like-broken",
    Component: LikeLikeBroken,
    componentName: "LikeLikeBroken",
  },,
  {
    variant: "bulk",
    slug: "like-like-bulk",
    Component: LikeLikeBulk,
    componentName: "LikeLikeBulk",
  },,
  {
    variant: "linear",
    slug: "like-like-linear",
    Component: LikeLikeLinear,
    componentName: "LikeLikeLinear",
  },,
  {
    variant: "outline",
    slug: "like-like-outline",
    Component: LikeLikeOutline,
    componentName: "LikeLikeOutline",
  },,
  {
    variant: "twotone",
    slug: "like-like-twotone",
    Component: LikeLikeTwotone,
    componentName: "LikeLikeTwotone",
  }
];

export default { LikeLikeBold, LikeLikeBroken, LikeLikeBulk, LikeLikeLinear, LikeLikeOutline, LikeLikeTwotone };
