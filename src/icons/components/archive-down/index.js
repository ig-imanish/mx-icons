import ArchiveDownBold from "./ArchiveDownBold";
import ArchiveDownBroken from "./ArchiveDownBroken";
import ArchiveDownBulk from "./ArchiveDownBulk";
import ArchiveDownLinear from "./ArchiveDownLinear";
import ArchiveDownOutline from "./ArchiveDownOutline";
import ArchiveDownTwotone from "./ArchiveDownTwotone";

export { ArchiveDownBold, ArchiveDownBroken, ArchiveDownBulk, ArchiveDownLinear, ArchiveDownOutline, ArchiveDownTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-down-bold",
    Component: ArchiveDownBold,
    componentName: "ArchiveDownBold",
  },,
  {
    variant: "broken",
    slug: "archive-down-broken",
    Component: ArchiveDownBroken,
    componentName: "ArchiveDownBroken",
  },,
  {
    variant: "bulk",
    slug: "archive-down-bulk",
    Component: ArchiveDownBulk,
    componentName: "ArchiveDownBulk",
  },,
  {
    variant: "linear",
    slug: "archive-down-linear",
    Component: ArchiveDownLinear,
    componentName: "ArchiveDownLinear",
  },,
  {
    variant: "outline",
    slug: "archive-down-outline",
    Component: ArchiveDownOutline,
    componentName: "ArchiveDownOutline",
  },,
  {
    variant: "twotone",
    slug: "archive-down-twotone",
    Component: ArchiveDownTwotone,
    componentName: "ArchiveDownTwotone",
  }
];

export default { ArchiveDownBold, ArchiveDownBroken, ArchiveDownBulk, ArchiveDownLinear, ArchiveDownOutline, ArchiveDownTwotone };
