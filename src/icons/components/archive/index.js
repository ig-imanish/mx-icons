import ArchiveBold from "./ArchiveBold";
import ArchiveBroken from "./ArchiveBroken";
import ArchiveBulk from "./ArchiveBulk";
import ArchiveLinear from "./ArchiveLinear";
import ArchiveOutline from "./ArchiveOutline";
import ArchiveTwotone from "./ArchiveTwotone";

export { ArchiveBold, ArchiveBroken, ArchiveBulk, ArchiveLinear, ArchiveOutline, ArchiveTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-bold",
    Component: ArchiveBold,
    componentName: "ArchiveBold",
  },
  {
    variant: "broken",
    slug: "archive-broken",
    Component: ArchiveBroken,
    componentName: "ArchiveBroken",
  },
  {
    variant: "bulk",
    slug: "archive-bulk",
    Component: ArchiveBulk,
    componentName: "ArchiveBulk",
  },
  {
    variant: "linear",
    slug: "archive-linear",
    Component: ArchiveLinear,
    componentName: "ArchiveLinear",
  },
  {
    variant: "outline",
    slug: "archive-outline",
    Component: ArchiveOutline,
    componentName: "ArchiveOutline",
  },
  {
    variant: "twotone",
    slug: "archive-twotone",
    Component: ArchiveTwotone,
    componentName: "ArchiveTwotone",
  },
];
