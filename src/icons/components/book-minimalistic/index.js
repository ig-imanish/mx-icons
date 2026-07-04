import BookMinimalisticBold from "./BookMinimalisticBold";
import BookMinimalisticBroken from "./BookMinimalisticBroken";
import BookMinimalisticBulk from "./BookMinimalisticBulk";
import BookMinimalisticLinear from "./BookMinimalisticLinear";
import BookMinimalisticOutline from "./BookMinimalisticOutline";
import BookMinimalisticTwotone from "./BookMinimalisticTwotone";

export { BookMinimalisticBold, BookMinimalisticBroken, BookMinimalisticBulk, BookMinimalisticLinear, BookMinimalisticOutline, BookMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "book-minimalistic-bold",
    Component: BookMinimalisticBold,
    componentName: "BookMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "book-minimalistic-broken",
    Component: BookMinimalisticBroken,
    componentName: "BookMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "book-minimalistic-bulk",
    Component: BookMinimalisticBulk,
    componentName: "BookMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "book-minimalistic-linear",
    Component: BookMinimalisticLinear,
    componentName: "BookMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "book-minimalistic-outline",
    Component: BookMinimalisticOutline,
    componentName: "BookMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "book-minimalistic-twotone",
    Component: BookMinimalisticTwotone,
    componentName: "BookMinimalisticTwotone",
  }
];

export default { BookMinimalisticBold, BookMinimalisticBroken, BookMinimalisticBulk, BookMinimalisticLinear, BookMinimalisticOutline, BookMinimalisticTwotone };
