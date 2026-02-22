import BookmarkBold from "./BookmarkBold";
import BookmarkBroken from "./BookmarkBroken";
import BookmarkBulk from "./BookmarkBulk";
import BookmarkLinear from "./BookmarkLinear";
import BookmarkOutline from "./BookmarkOutline";
import BookmarkTwotone from "./BookmarkTwotone";

export { BookmarkBold, BookmarkBroken, BookmarkBulk, BookmarkLinear, BookmarkOutline, BookmarkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bookmark-bold",
    Component: BookmarkBold,
    componentName: "BookmarkBold",
  },
  {
    variant: "broken",
    slug: "bookmark-broken",
    Component: BookmarkBroken,
    componentName: "BookmarkBroken",
  },
  {
    variant: "bulk",
    slug: "bookmark-bulk",
    Component: BookmarkBulk,
    componentName: "BookmarkBulk",
  },
  {
    variant: "linear",
    slug: "bookmark-linear",
    Component: BookmarkLinear,
    componentName: "BookmarkLinear",
  },
  {
    variant: "outline",
    slug: "bookmark-outline",
    Component: BookmarkOutline,
    componentName: "BookmarkOutline",
  },
  {
    variant: "twotone",
    slug: "bookmark-twotone",
    Component: BookmarkTwotone,
    componentName: "BookmarkTwotone",
  },
];
