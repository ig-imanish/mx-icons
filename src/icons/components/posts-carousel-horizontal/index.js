import PostsCarouselHorizontalBold from "./PostsCarouselHorizontalBold";
import PostsCarouselHorizontalBroken from "./PostsCarouselHorizontalBroken";
import PostsCarouselHorizontalBulk from "./PostsCarouselHorizontalBulk";
import PostsCarouselHorizontalLinear from "./PostsCarouselHorizontalLinear";
import PostsCarouselHorizontalOutline from "./PostsCarouselHorizontalOutline";
import PostsCarouselHorizontalTwotone from "./PostsCarouselHorizontalTwotone";

export { PostsCarouselHorizontalBold, PostsCarouselHorizontalBroken, PostsCarouselHorizontalBulk, PostsCarouselHorizontalLinear, PostsCarouselHorizontalOutline, PostsCarouselHorizontalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "posts-carousel-horizontal-bold",
    Component: PostsCarouselHorizontalBold,
    componentName: "PostsCarouselHorizontalBold",
  },,
  {
    variant: "broken",
    slug: "posts-carousel-horizontal-broken",
    Component: PostsCarouselHorizontalBroken,
    componentName: "PostsCarouselHorizontalBroken",
  },,
  {
    variant: "bulk",
    slug: "posts-carousel-horizontal-bulk",
    Component: PostsCarouselHorizontalBulk,
    componentName: "PostsCarouselHorizontalBulk",
  },,
  {
    variant: "linear",
    slug: "posts-carousel-horizontal-linear",
    Component: PostsCarouselHorizontalLinear,
    componentName: "PostsCarouselHorizontalLinear",
  },,
  {
    variant: "outline",
    slug: "posts-carousel-horizontal-outline",
    Component: PostsCarouselHorizontalOutline,
    componentName: "PostsCarouselHorizontalOutline",
  },,
  {
    variant: "twotone",
    slug: "posts-carousel-horizontal-twotone",
    Component: PostsCarouselHorizontalTwotone,
    componentName: "PostsCarouselHorizontalTwotone",
  }
];

export default { PostsCarouselHorizontalBold, PostsCarouselHorizontalBroken, PostsCarouselHorizontalBulk, PostsCarouselHorizontalLinear, PostsCarouselHorizontalOutline, PostsCarouselHorizontalTwotone };
