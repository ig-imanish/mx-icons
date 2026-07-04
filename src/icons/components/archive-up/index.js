import ArchiveUpBold from "./ArchiveUpBold";
import ArchiveUpBroken from "./ArchiveUpBroken";
import ArchiveUpBulk from "./ArchiveUpBulk";
import ArchiveUpLinear from "./ArchiveUpLinear";
import ArchiveUpOutline from "./ArchiveUpOutline";
import ArchiveUpTwotone from "./ArchiveUpTwotone";

export { ArchiveUpBold, ArchiveUpBroken, ArchiveUpBulk, ArchiveUpLinear, ArchiveUpOutline, ArchiveUpTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-up-bold",
    Component: ArchiveUpBold,
    componentName: "ArchiveUpBold",
  },,
  {
    variant: "broken",
    slug: "archive-up-broken",
    Component: ArchiveUpBroken,
    componentName: "ArchiveUpBroken",
  },,
  {
    variant: "bulk",
    slug: "archive-up-bulk",
    Component: ArchiveUpBulk,
    componentName: "ArchiveUpBulk",
  },,
  {
    variant: "linear",
    slug: "archive-up-linear",
    Component: ArchiveUpLinear,
    componentName: "ArchiveUpLinear",
  },,
  {
    variant: "outline",
    slug: "archive-up-outline",
    Component: ArchiveUpOutline,
    componentName: "ArchiveUpOutline",
  },,
  {
    variant: "twotone",
    slug: "archive-up-twotone",
    Component: ArchiveUpTwotone,
    componentName: "ArchiveUpTwotone",
  }
];

export default { ArchiveUpBold, ArchiveUpBroken, ArchiveUpBulk, ArchiveUpLinear, ArchiveUpOutline, ArchiveUpTwotone };
