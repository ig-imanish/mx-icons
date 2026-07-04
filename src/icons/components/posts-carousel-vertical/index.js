import PostsCarouselVerticalBold from "./PostsCarouselVerticalBold";
import PostsCarouselVerticalBroken from "./PostsCarouselVerticalBroken";
import PostsCarouselVerticalBulk from "./PostsCarouselVerticalBulk";
import PostsCarouselVerticalLinear from "./PostsCarouselVerticalLinear";
import PostsCarouselVerticalOutline from "./PostsCarouselVerticalOutline";
import PostsCarouselVerticalTwotone from "./PostsCarouselVerticalTwotone";

export { PostsCarouselVerticalBold, PostsCarouselVerticalBroken, PostsCarouselVerticalBulk, PostsCarouselVerticalLinear, PostsCarouselVerticalOutline, PostsCarouselVerticalTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "posts-carousel-vertical-bold",
    Component: PostsCarouselVerticalBold,
    componentName: "PostsCarouselVerticalBold",
  },,
  {
    variant: "broken",
    slug: "posts-carousel-vertical-broken",
    Component: PostsCarouselVerticalBroken,
    componentName: "PostsCarouselVerticalBroken",
  },,
  {
    variant: "bulk",
    slug: "posts-carousel-vertical-bulk",
    Component: PostsCarouselVerticalBulk,
    componentName: "PostsCarouselVerticalBulk",
  },,
  {
    variant: "linear",
    slug: "posts-carousel-vertical-linear",
    Component: PostsCarouselVerticalLinear,
    componentName: "PostsCarouselVerticalLinear",
  },,
  {
    variant: "outline",
    slug: "posts-carousel-vertical-outline",
    Component: PostsCarouselVerticalOutline,
    componentName: "PostsCarouselVerticalOutline",
  },,
  {
    variant: "twotone",
    slug: "posts-carousel-vertical-twotone",
    Component: PostsCarouselVerticalTwotone,
    componentName: "PostsCarouselVerticalTwotone",
  }
];

export default { PostsCarouselVerticalBold, PostsCarouselVerticalBroken, PostsCarouselVerticalBulk, PostsCarouselVerticalLinear, PostsCarouselVerticalOutline, PostsCarouselVerticalTwotone };
