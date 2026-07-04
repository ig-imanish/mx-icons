import BookBookmarkBold from "./BookBookmarkBold";
import BookBookmarkBroken from "./BookBookmarkBroken";
import BookBookmarkBulk from "./BookBookmarkBulk";
import BookBookmarkLinear from "./BookBookmarkLinear";
import BookBookmarkOutline from "./BookBookmarkOutline";
import BookBookmarkTwotone from "./BookBookmarkTwotone";

export { BookBookmarkBold, BookBookmarkBroken, BookBookmarkBulk, BookBookmarkLinear, BookBookmarkOutline, BookBookmarkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "book-bookmark-bold",
    Component: BookBookmarkBold,
    componentName: "BookBookmarkBold",
  },,
  {
    variant: "broken",
    slug: "book-bookmark-broken",
    Component: BookBookmarkBroken,
    componentName: "BookBookmarkBroken",
  },,
  {
    variant: "bulk",
    slug: "book-bookmark-bulk",
    Component: BookBookmarkBulk,
    componentName: "BookBookmarkBulk",
  },,
  {
    variant: "linear",
    slug: "book-bookmark-linear",
    Component: BookBookmarkLinear,
    componentName: "BookBookmarkLinear",
  },,
  {
    variant: "outline",
    slug: "book-bookmark-outline",
    Component: BookBookmarkOutline,
    componentName: "BookBookmarkOutline",
  },,
  {
    variant: "twotone",
    slug: "book-bookmark-twotone",
    Component: BookBookmarkTwotone,
    componentName: "BookBookmarkTwotone",
  }
];

export default { BookBookmarkBold, BookBookmarkBroken, BookBookmarkBulk, BookBookmarkLinear, BookBookmarkOutline, BookBookmarkTwotone };
