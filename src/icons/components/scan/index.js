import ScanBold from "./ScanBold";
import ScanBroken from "./ScanBroken";
import ScanBulk from "./ScanBulk";
import ScanLinear from "./ScanLinear";
import ScanOutline from "./ScanOutline";
import ScanTwotone from "./ScanTwotone";

export { ScanBold, ScanBroken, ScanBulk, ScanLinear, ScanOutline, ScanTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scan-bold",
    Component: ScanBold,
    componentName: "ScanBold",
  },
  {
    variant: "broken",
    slug: "scan-broken",
    Component: ScanBroken,
    componentName: "ScanBroken",
  },
  {
    variant: "bulk",
    slug: "scan-bulk",
    Component: ScanBulk,
    componentName: "ScanBulk",
  },
  {
    variant: "linear",
    slug: "scan-linear",
    Component: ScanLinear,
    componentName: "ScanLinear",
  },
  {
    variant: "outline",
    slug: "scan-outline",
    Component: ScanOutline,
    componentName: "ScanOutline",
  },
  {
    variant: "twotone",
    slug: "scan-twotone",
    Component: ScanTwotone,
    componentName: "ScanTwotone",
  },
];
