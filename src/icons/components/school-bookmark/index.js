import SchoolBookmarkBold from "./SchoolBookmarkBold";
import SchoolBookmarkBroken from "./SchoolBookmarkBroken";
import SchoolBookmarkBulk from "./SchoolBookmarkBulk";
import SchoolBookmarkLinear from "./SchoolBookmarkLinear";
import SchoolBookmarkOutline from "./SchoolBookmarkOutline";
import SchoolBookmarkTwotone from "./SchoolBookmarkTwotone";

export { SchoolBookmarkBold, SchoolBookmarkBroken, SchoolBookmarkBulk, SchoolBookmarkLinear, SchoolBookmarkOutline, SchoolBookmarkTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "school-bookmark-bold",
    Component: SchoolBookmarkBold,
    componentName: "SchoolBookmarkBold",
  },,
  {
    variant: "broken",
    slug: "school-bookmark-broken",
    Component: SchoolBookmarkBroken,
    componentName: "SchoolBookmarkBroken",
  },,
  {
    variant: "bulk",
    slug: "school-bookmark-bulk",
    Component: SchoolBookmarkBulk,
    componentName: "SchoolBookmarkBulk",
  },,
  {
    variant: "linear",
    slug: "school-bookmark-linear",
    Component: SchoolBookmarkLinear,
    componentName: "SchoolBookmarkLinear",
  },,
  {
    variant: "outline",
    slug: "school-bookmark-outline",
    Component: SchoolBookmarkOutline,
    componentName: "SchoolBookmarkOutline",
  },,
  {
    variant: "twotone",
    slug: "school-bookmark-twotone",
    Component: SchoolBookmarkTwotone,
    componentName: "SchoolBookmarkTwotone",
  }
];

export default { SchoolBookmarkBold, SchoolBookmarkBroken, SchoolBookmarkBulk, SchoolBookmarkLinear, SchoolBookmarkOutline, SchoolBookmarkTwotone };
