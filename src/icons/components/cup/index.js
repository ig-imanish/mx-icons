import CupBold from "./CupBold";
import CupBroken from "./CupBroken";
import CupBulk from "./CupBulk";
import CupLinear from "./CupLinear";
import CupOutline from "./CupOutline";
import CupTwotone from "./CupTwotone";

export { CupBold, CupBroken, CupBulk, CupLinear, CupOutline, CupTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "cup-bold",
    Component: CupBold,
    componentName: "CupBold",
  },
  {
    variant: "broken",
    slug: "cup-broken",
    Component: CupBroken,
    componentName: "CupBroken",
  },
  {
    variant: "bulk",
    slug: "cup-bulk",
    Component: CupBulk,
    componentName: "CupBulk",
  },
  {
    variant: "linear",
    slug: "cup-linear",
    Component: CupLinear,
    componentName: "CupLinear",
  },
  {
    variant: "outline",
    slug: "cup-outline",
    Component: CupOutline,
    componentName: "CupOutline",
  },
  {
    variant: "twotone",
    slug: "cup-twotone",
    Component: CupTwotone,
    componentName: "CupTwotone",
  },
];
