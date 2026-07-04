import ArchiveCheckBold from "./ArchiveCheckBold";
import ArchiveCheckBroken from "./ArchiveCheckBroken";
import ArchiveCheckBulk from "./ArchiveCheckBulk";
import ArchiveCheckLinear from "./ArchiveCheckLinear";
import ArchiveCheckOutline from "./ArchiveCheckOutline";
import ArchiveCheckTwotone from "./ArchiveCheckTwotone";

export { ArchiveCheckBold, ArchiveCheckBroken, ArchiveCheckBulk, ArchiveCheckLinear, ArchiveCheckOutline, ArchiveCheckTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-check-bold",
    Component: ArchiveCheckBold,
    componentName: "ArchiveCheckBold",
  },,
  {
    variant: "broken",
    slug: "archive-check-broken",
    Component: ArchiveCheckBroken,
    componentName: "ArchiveCheckBroken",
  },,
  {
    variant: "bulk",
    slug: "archive-check-bulk",
    Component: ArchiveCheckBulk,
    componentName: "ArchiveCheckBulk",
  },,
  {
    variant: "linear",
    slug: "archive-check-linear",
    Component: ArchiveCheckLinear,
    componentName: "ArchiveCheckLinear",
  },,
  {
    variant: "outline",
    slug: "archive-check-outline",
    Component: ArchiveCheckOutline,
    componentName: "ArchiveCheckOutline",
  },,
  {
    variant: "twotone",
    slug: "archive-check-twotone",
    Component: ArchiveCheckTwotone,
    componentName: "ArchiveCheckTwotone",
  }
];

export default { ArchiveCheckBold, ArchiveCheckBroken, ArchiveCheckBulk, ArchiveCheckLinear, ArchiveCheckOutline, ArchiveCheckTwotone };
