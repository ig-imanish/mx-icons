import Book1Bold from "./Book1Bold";
import Book1Broken from "./Book1Broken";
import Book1Bulk from "./Book1Bulk";
import Book1Linear from "./Book1Linear";
import Book1Outline from "./Book1Outline";
import Book1Twotone from "./Book1Twotone";

export { Book1Bold, Book1Broken, Book1Bulk, Book1Linear, Book1Outline, Book1Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "book1-bold",
    Component: Book1Bold,
    componentName: "Book1Bold",
  },
  {
    variant: "broken",
    slug: "book1-broken",
    Component: Book1Broken,
    componentName: "Book1Broken",
  },
  {
    variant: "bulk",
    slug: "book1-bulk",
    Component: Book1Bulk,
    componentName: "Book1Bulk",
  },
  {
    variant: "linear",
    slug: "book1-linear",
    Component: Book1Linear,
    componentName: "Book1Linear",
  },
  {
    variant: "outline",
    slug: "book1-outline",
    Component: Book1Outline,
    componentName: "Book1Outline",
  },
  {
    variant: "twotone",
    slug: "book1-twotone",
    Component: Book1Twotone,
    componentName: "Book1Twotone",
  },
];
