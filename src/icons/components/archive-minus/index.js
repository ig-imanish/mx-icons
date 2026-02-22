import ArchiveMinusBold from "./ArchiveMinusBold";
import ArchiveMinusBroken from "./ArchiveMinusBroken";
import ArchiveMinusBulk from "./ArchiveMinusBulk";
import ArchiveMinusLinear from "./ArchiveMinusLinear";
import ArchiveMinusOutline from "./ArchiveMinusOutline";
import ArchiveMinusTwotone from "./ArchiveMinusTwotone";

export { ArchiveMinusBold, ArchiveMinusBroken, ArchiveMinusBulk, ArchiveMinusLinear, ArchiveMinusOutline, ArchiveMinusTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-minus-bold",
    Component: ArchiveMinusBold,
    componentName: "ArchiveMinusBold",
  },
  {
    variant: "broken",
    slug: "archive-minus-broken",
    Component: ArchiveMinusBroken,
    componentName: "ArchiveMinusBroken",
  },
  {
    variant: "bulk",
    slug: "archive-minus-bulk",
    Component: ArchiveMinusBulk,
    componentName: "ArchiveMinusBulk",
  },
  {
    variant: "linear",
    slug: "archive-minus-linear",
    Component: ArchiveMinusLinear,
    componentName: "ArchiveMinusLinear",
  },
  {
    variant: "outline",
    slug: "archive-minus-outline",
    Component: ArchiveMinusOutline,
    componentName: "ArchiveMinusOutline",
  },
  {
    variant: "twotone",
    slug: "archive-minus-twotone",
    Component: ArchiveMinusTwotone,
    componentName: "ArchiveMinusTwotone",
  },
];
