import Book2Bold from "./Book2Bold";
import Book2Broken from "./Book2Broken";
import Book2Bulk from "./Book2Bulk";
import Book2Linear from "./Book2Linear";
import Book2Outline from "./Book2Outline";
import Book2Twotone from "./Book2Twotone";

export { Book2Bold, Book2Broken, Book2Bulk, Book2Linear, Book2Outline, Book2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "book-2-bold",
    Component: Book2Bold,
    componentName: "Book2Bold",
  },,
  {
    variant: "broken",
    slug: "book-2-broken",
    Component: Book2Broken,
    componentName: "Book2Broken",
  },,
  {
    variant: "bulk",
    slug: "book-2-bulk",
    Component: Book2Bulk,
    componentName: "Book2Bulk",
  },,
  {
    variant: "linear",
    slug: "book-2-linear",
    Component: Book2Linear,
    componentName: "Book2Linear",
  },,
  {
    variant: "outline",
    slug: "book-2-outline",
    Component: Book2Outline,
    componentName: "Book2Outline",
  },,
  {
    variant: "twotone",
    slug: "book-2-twotone",
    Component: Book2Twotone,
    componentName: "Book2Twotone",
  }
];

export default { Book2Bold, Book2Broken, Book2Bulk, Book2Linear, Book2Outline, Book2Twotone };
