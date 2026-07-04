import BookmarkCircleBold from "./BookmarkCircleBold";
import BookmarkCircleBroken from "./BookmarkCircleBroken";
import BookmarkCircleBulk from "./BookmarkCircleBulk";
import BookmarkCircleLinear from "./BookmarkCircleLinear";
import BookmarkCircleOutline from "./BookmarkCircleOutline";
import BookmarkCircleTwotone from "./BookmarkCircleTwotone";

export { BookmarkCircleBold, BookmarkCircleBroken, BookmarkCircleBulk, BookmarkCircleLinear, BookmarkCircleOutline, BookmarkCircleTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bookmark-circle-bold",
    Component: BookmarkCircleBold,
    componentName: "BookmarkCircleBold",
  },,
  {
    variant: "broken",
    slug: "bookmark-circle-broken",
    Component: BookmarkCircleBroken,
    componentName: "BookmarkCircleBroken",
  },,
  {
    variant: "bulk",
    slug: "bookmark-circle-bulk",
    Component: BookmarkCircleBulk,
    componentName: "BookmarkCircleBulk",
  },,
  {
    variant: "linear",
    slug: "bookmark-circle-linear",
    Component: BookmarkCircleLinear,
    componentName: "BookmarkCircleLinear",
  },,
  {
    variant: "outline",
    slug: "bookmark-circle-outline",
    Component: BookmarkCircleOutline,
    componentName: "BookmarkCircleOutline",
  },,
  {
    variant: "twotone",
    slug: "bookmark-circle-twotone",
    Component: BookmarkCircleTwotone,
    componentName: "BookmarkCircleTwotone",
  }
];

export default { BookmarkCircleBold, BookmarkCircleBroken, BookmarkCircleBulk, BookmarkCircleLinear, BookmarkCircleOutline, BookmarkCircleTwotone };
