import BookSquareBold from "./BookSquareBold";
import BookSquareBroken from "./BookSquareBroken";
import BookSquareBulk from "./BookSquareBulk";
import BookSquareLinear from "./BookSquareLinear";
import BookSquareOutline from "./BookSquareOutline";
import BookSquareTwotone from "./BookSquareTwotone";

export { BookSquareBold, BookSquareBroken, BookSquareBulk, BookSquareLinear, BookSquareOutline, BookSquareTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "book-square-bold",
    Component: BookSquareBold,
    componentName: "BookSquareBold",
  },
  {
    variant: "broken",
    slug: "book-square-broken",
    Component: BookSquareBroken,
    componentName: "BookSquareBroken",
  },
  {
    variant: "bulk",
    slug: "book-square-bulk",
    Component: BookSquareBulk,
    componentName: "BookSquareBulk",
  },
  {
    variant: "linear",
    slug: "book-square-linear",
    Component: BookSquareLinear,
    componentName: "BookSquareLinear",
  },
  {
    variant: "outline",
    slug: "book-square-outline",
    Component: BookSquareOutline,
    componentName: "BookSquareOutline",
  },
  {
    variant: "twotone",
    slug: "book-square-twotone",
    Component: BookSquareTwotone,
    componentName: "BookSquareTwotone",
  },
];
