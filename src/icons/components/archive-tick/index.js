import ArchiveTickBold from "./ArchiveTickBold";
import ArchiveTickBroken from "./ArchiveTickBroken";
import ArchiveTickBulk from "./ArchiveTickBulk";
import ArchiveTickLinear from "./ArchiveTickLinear";
import ArchiveTickOutline from "./ArchiveTickOutline";
import ArchiveTickTwotone from "./ArchiveTickTwotone";

export { ArchiveTickBold, ArchiveTickBroken, ArchiveTickBulk, ArchiveTickLinear, ArchiveTickOutline, ArchiveTickTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-tick-bold",
    Component: ArchiveTickBold,
    componentName: "ArchiveTickBold",
  },
  {
    variant: "broken",
    slug: "archive-tick-broken",
    Component: ArchiveTickBroken,
    componentName: "ArchiveTickBroken",
  },
  {
    variant: "bulk",
    slug: "archive-tick-bulk",
    Component: ArchiveTickBulk,
    componentName: "ArchiveTickBulk",
  },
  {
    variant: "linear",
    slug: "archive-tick-linear",
    Component: ArchiveTickLinear,
    componentName: "ArchiveTickLinear",
  },
  {
    variant: "outline",
    slug: "archive-tick-outline",
    Component: ArchiveTickOutline,
    componentName: "ArchiveTickOutline",
  },
  {
    variant: "twotone",
    slug: "archive-tick-twotone",
    Component: ArchiveTickTwotone,
    componentName: "ArchiveTickTwotone",
  },
];
