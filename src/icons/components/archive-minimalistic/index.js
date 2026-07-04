import ArchiveMinimalisticBold from "./ArchiveMinimalisticBold";
import ArchiveMinimalisticBroken from "./ArchiveMinimalisticBroken";
import ArchiveMinimalisticBulk from "./ArchiveMinimalisticBulk";
import ArchiveMinimalisticLinear from "./ArchiveMinimalisticLinear";
import ArchiveMinimalisticOutline from "./ArchiveMinimalisticOutline";
import ArchiveMinimalisticTwotone from "./ArchiveMinimalisticTwotone";

export { ArchiveMinimalisticBold, ArchiveMinimalisticBroken, ArchiveMinimalisticBulk, ArchiveMinimalisticLinear, ArchiveMinimalisticOutline, ArchiveMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "archive-minimalistic-bold",
    Component: ArchiveMinimalisticBold,
    componentName: "ArchiveMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "archive-minimalistic-broken",
    Component: ArchiveMinimalisticBroken,
    componentName: "ArchiveMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "archive-minimalistic-bulk",
    Component: ArchiveMinimalisticBulk,
    componentName: "ArchiveMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "archive-minimalistic-linear",
    Component: ArchiveMinimalisticLinear,
    componentName: "ArchiveMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "archive-minimalistic-outline",
    Component: ArchiveMinimalisticOutline,
    componentName: "ArchiveMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "archive-minimalistic-twotone",
    Component: ArchiveMinimalisticTwotone,
    componentName: "ArchiveMinimalisticTwotone",
  }
];

export default { ArchiveMinimalisticBold, ArchiveMinimalisticBroken, ArchiveMinimalisticBulk, ArchiveMinimalisticLinear, ArchiveMinimalisticOutline, ArchiveMinimalisticTwotone };
