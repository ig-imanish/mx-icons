import ScannerBold from "./ScannerBold";
import ScannerBroken from "./ScannerBroken";
import ScannerBulk from "./ScannerBulk";
import ScannerLinear from "./ScannerLinear";
import ScannerOutline from "./ScannerOutline";
import ScannerTwotone from "./ScannerTwotone";

export { ScannerBold, ScannerBroken, ScannerBulk, ScannerLinear, ScannerOutline, ScannerTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scanner-bold",
    Component: ScannerBold,
    componentName: "ScannerBold",
  },
  {
    variant: "broken",
    slug: "scanner-broken",
    Component: ScannerBroken,
    componentName: "ScannerBroken",
  },
  {
    variant: "bulk",
    slug: "scanner-bulk",
    Component: ScannerBulk,
    componentName: "ScannerBulk",
  },
  {
    variant: "linear",
    slug: "scanner-linear",
    Component: ScannerLinear,
    componentName: "ScannerLinear",
  },
  {
    variant: "outline",
    slug: "scanner-outline",
    Component: ScannerOutline,
    componentName: "ScannerOutline",
  },
  {
    variant: "twotone",
    slug: "scanner-twotone",
    Component: ScannerTwotone,
    componentName: "ScannerTwotone",
  },
];
