import CopyBold from "./CopyBold";
import CopyBroken from "./CopyBroken";
import CopyBulk from "./CopyBulk";
import CopyLinear from "./CopyLinear";
import CopyOutline from "./CopyOutline";
import CopyTwotone from "./CopyTwotone";

export { CopyBold, CopyBroken, CopyBulk, CopyLinear, CopyOutline, CopyTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "copy-bold",
    Component: CopyBold,
    componentName: "CopyBold",
  },
  {
    variant: "broken",
    slug: "copy-broken",
    Component: CopyBroken,
    componentName: "CopyBroken",
  },
  {
    variant: "bulk",
    slug: "copy-bulk",
    Component: CopyBulk,
    componentName: "CopyBulk",
  },
  {
    variant: "linear",
    slug: "copy-linear",
    Component: CopyLinear,
    componentName: "CopyLinear",
  },
  {
    variant: "outline",
    slug: "copy-outline",
    Component: CopyOutline,
    componentName: "CopyOutline",
  },
  {
    variant: "twotone",
    slug: "copy-twotone",
    Component: CopyTwotone,
    componentName: "CopyTwotone",
  },
];
