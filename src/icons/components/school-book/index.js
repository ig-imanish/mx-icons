import SchoolBookBold from "./SchoolBookBold";
import SchoolBookBroken from "./SchoolBookBroken";
import SchoolBookBulk from "./SchoolBookBulk";
import SchoolBookLinear from "./SchoolBookLinear";
import SchoolBookOutline from "./SchoolBookOutline";
import SchoolBookTwotone from "./SchoolBookTwotone";

export { SchoolBookBold, SchoolBookBroken, SchoolBookBulk, SchoolBookLinear, SchoolBookOutline, SchoolBookTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "school-book-bold",
    Component: SchoolBookBold,
    componentName: "SchoolBookBold",
  },,
  {
    variant: "broken",
    slug: "school-book-broken",
    Component: SchoolBookBroken,
    componentName: "SchoolBookBroken",
  },,
  {
    variant: "bulk",
    slug: "school-book-bulk",
    Component: SchoolBookBulk,
    componentName: "SchoolBookBulk",
  },,
  {
    variant: "linear",
    slug: "school-book-linear",
    Component: SchoolBookLinear,
    componentName: "SchoolBookLinear",
  },,
  {
    variant: "outline",
    slug: "school-book-outline",
    Component: SchoolBookOutline,
    componentName: "SchoolBookOutline",
  },,
  {
    variant: "twotone",
    slug: "school-book-twotone",
    Component: SchoolBookTwotone,
    componentName: "SchoolBookTwotone",
  }
];

export default { SchoolBookBold, SchoolBookBroken, SchoolBookBulk, SchoolBookLinear, SchoolBookOutline, SchoolBookTwotone };
