import BookSavedBold from "./BookSavedBold";
import BookSavedBroken from "./BookSavedBroken";
import BookSavedBulk from "./BookSavedBulk";
import BookSavedLinear from "./BookSavedLinear";
import BookSavedOutline from "./BookSavedOutline";
import BookSavedTwotone from "./BookSavedTwotone";

export { BookSavedBold, BookSavedBroken, BookSavedBulk, BookSavedLinear, BookSavedOutline, BookSavedTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "book-saved-bold",
    Component: BookSavedBold,
    componentName: "BookSavedBold",
  },
  {
    variant: "broken",
    slug: "book-saved-broken",
    Component: BookSavedBroken,
    componentName: "BookSavedBroken",
  },
  {
    variant: "bulk",
    slug: "book-saved-bulk",
    Component: BookSavedBulk,
    componentName: "BookSavedBulk",
  },
  {
    variant: "linear",
    slug: "book-saved-linear",
    Component: BookSavedLinear,
    componentName: "BookSavedLinear",
  },
  {
    variant: "outline",
    slug: "book-saved-outline",
    Component: BookSavedOutline,
    componentName: "BookSavedOutline",
  },
  {
    variant: "twotone",
    slug: "book-saved-twotone",
    Component: BookSavedTwotone,
    componentName: "BookSavedTwotone",
  },
];
