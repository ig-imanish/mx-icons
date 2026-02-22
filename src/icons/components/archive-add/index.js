import ArchiveAddBold from "./ArchiveAddBold";
import ArchiveAddBroken from "./ArchiveAddBroken";
import ArchiveAddBulk from "./ArchiveAddBulk";
import ArchiveAddLinear from "./ArchiveAddLinear";
import ArchiveAddOutline from "./ArchiveAddOutline";
import ArchiveAddTwotone from "./ArchiveAddTwotone";

export { ArchiveAddBold, ArchiveAddBroken, ArchiveAddBulk, ArchiveAddLinear, ArchiveAddOutline, ArchiveAddTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-add-bold",
    Component: ArchiveAddBold,
    componentName: "ArchiveAddBold",
  },
  {
    variant: "broken",
    slug: "archive-add-broken",
    Component: ArchiveAddBroken,
    componentName: "ArchiveAddBroken",
  },
  {
    variant: "bulk",
    slug: "archive-add-bulk",
    Component: ArchiveAddBulk,
    componentName: "ArchiveAddBulk",
  },
  {
    variant: "linear",
    slug: "archive-add-linear",
    Component: ArchiveAddLinear,
    componentName: "ArchiveAddLinear",
  },
  {
    variant: "outline",
    slug: "archive-add-outline",
    Component: ArchiveAddOutline,
    componentName: "ArchiveAddOutline",
  },
  {
    variant: "twotone",
    slug: "archive-add-twotone",
    Component: ArchiveAddTwotone,
    componentName: "ArchiveAddTwotone",
  },
];
