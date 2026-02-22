import BookBold from "./BookBold";
import BookBroken from "./BookBroken";
import BookBulk from "./BookBulk";
import BookLinear from "./BookLinear";
import BookOutline from "./BookOutline";
import BookTwotone from "./BookTwotone";

export { BookBold, BookBroken, BookBulk, BookLinear, BookOutline, BookTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "book-bold",
    Component: BookBold,
    componentName: "BookBold",
  },
  {
    variant: "broken",
    slug: "book-broken",
    Component: BookBroken,
    componentName: "BookBroken",
  },
  {
    variant: "bulk",
    slug: "book-bulk",
    Component: BookBulk,
    componentName: "BookBulk",
  },
  {
    variant: "linear",
    slug: "book-linear",
    Component: BookLinear,
    componentName: "BookLinear",
  },
  {
    variant: "outline",
    slug: "book-outline",
    Component: BookOutline,
    componentName: "BookOutline",
  },
  {
    variant: "twotone",
    slug: "book-twotone",
    Component: BookTwotone,
    componentName: "BookTwotone",
  },
];
