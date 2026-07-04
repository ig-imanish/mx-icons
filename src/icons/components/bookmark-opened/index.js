import BookmarkOpenedBold from "./BookmarkOpenedBold";
import BookmarkOpenedBroken from "./BookmarkOpenedBroken";
import BookmarkOpenedBulk from "./BookmarkOpenedBulk";
import BookmarkOpenedLinear from "./BookmarkOpenedLinear";
import BookmarkOpenedOutline from "./BookmarkOpenedOutline";
import BookmarkOpenedTwotone from "./BookmarkOpenedTwotone";

export { BookmarkOpenedBold, BookmarkOpenedBroken, BookmarkOpenedBulk, BookmarkOpenedLinear, BookmarkOpenedOutline, BookmarkOpenedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "bookmark-opened-bold",
    Component: BookmarkOpenedBold,
    componentName: "BookmarkOpenedBold",
  },,
  {
    variant: "broken",
    slug: "bookmark-opened-broken",
    Component: BookmarkOpenedBroken,
    componentName: "BookmarkOpenedBroken",
  },,
  {
    variant: "bulk",
    slug: "bookmark-opened-bulk",
    Component: BookmarkOpenedBulk,
    componentName: "BookmarkOpenedBulk",
  },,
  {
    variant: "linear",
    slug: "bookmark-opened-linear",
    Component: BookmarkOpenedLinear,
    componentName: "BookmarkOpenedLinear",
  },,
  {
    variant: "outline",
    slug: "bookmark-opened-outline",
    Component: BookmarkOpenedOutline,
    componentName: "BookmarkOpenedOutline",
  },,
  {
    variant: "twotone",
    slug: "bookmark-opened-twotone",
    Component: BookmarkOpenedTwotone,
    componentName: "BookmarkOpenedTwotone",
  }
];

export default { BookmarkOpenedBold, BookmarkOpenedBroken, BookmarkOpenedBulk, BookmarkOpenedLinear, BookmarkOpenedOutline, BookmarkOpenedTwotone };
