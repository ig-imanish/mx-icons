import CdBold from "./CdBold";
import CdBroken from "./CdBroken";
import CdBulk from "./CdBulk";
import CdLinear from "./CdLinear";
import CdOutline from "./CdOutline";
import CdTwotone from "./CdTwotone";

export { CdBold, CdBroken, CdBulk, CdLinear, CdOutline, CdTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cd-bold",
    Component: CdBold,
    componentName: "CdBold",
  },
  {
    variant: "broken",
    slug: "cd-broken",
    Component: CdBroken,
    componentName: "CdBroken",
  },
  {
    variant: "bulk",
    slug: "cd-bulk",
    Component: CdBulk,
    componentName: "CdBulk",
  },
  {
    variant: "linear",
    slug: "cd-linear",
    Component: CdLinear,
    componentName: "CdLinear",
  },
  {
    variant: "outline",
    slug: "cd-outline",
    Component: CdOutline,
    componentName: "CdOutline",
  },
  {
    variant: "twotone",
    slug: "cd-twotone",
    Component: CdTwotone,
    componentName: "CdTwotone",
  },
];
