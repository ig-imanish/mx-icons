import ArchiveBookBold from "./ArchiveBookBold";
import ArchiveBookBroken from "./ArchiveBookBroken";
import ArchiveBookBulk from "./ArchiveBookBulk";
import ArchiveBookLinear from "./ArchiveBookLinear";
import ArchiveBookOutline from "./ArchiveBookOutline";
import ArchiveBookTwotone from "./ArchiveBookTwotone";

export { ArchiveBookBold, ArchiveBookBroken, ArchiveBookBulk, ArchiveBookLinear, ArchiveBookOutline, ArchiveBookTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-book-bold",
    Component: ArchiveBookBold,
    componentName: "ArchiveBookBold",
  },
  {
    variant: "broken",
    slug: "archive-book-broken",
    Component: ArchiveBookBroken,
    componentName: "ArchiveBookBroken",
  },
  {
    variant: "bulk",
    slug: "archive-book-bulk",
    Component: ArchiveBookBulk,
    componentName: "ArchiveBookBulk",
  },
  {
    variant: "linear",
    slug: "archive-book-linear",
    Component: ArchiveBookLinear,
    componentName: "ArchiveBookLinear",
  },
  {
    variant: "outline",
    slug: "archive-book-outline",
    Component: ArchiveBookOutline,
    componentName: "ArchiveBookOutline",
  },
  {
    variant: "twotone",
    slug: "archive-book-twotone",
    Component: ArchiveBookTwotone,
    componentName: "ArchiveBookTwotone",
  },
];
