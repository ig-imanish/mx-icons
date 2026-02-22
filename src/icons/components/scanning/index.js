import ScanningBold from "./ScanningBold";
import ScanningBroken from "./ScanningBroken";
import ScanningBulk from "./ScanningBulk";
import ScanningLinear from "./ScanningLinear";
import ScanningOutline from "./ScanningOutline";
import ScanningTwotone from "./ScanningTwotone";

export { ScanningBold, ScanningBroken, ScanningBulk, ScanningLinear, ScanningOutline, ScanningTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scanning-bold",
    Component: ScanningBold,
    componentName: "ScanningBold",
  },
  {
    variant: "broken",
    slug: "scanning-broken",
    Component: ScanningBroken,
    componentName: "ScanningBroken",
  },
  {
    variant: "bulk",
    slug: "scanning-bulk",
    Component: ScanningBulk,
    componentName: "ScanningBulk",
  },
  {
    variant: "linear",
    slug: "scanning-linear",
    Component: ScanningLinear,
    componentName: "ScanningLinear",
  },
  {
    variant: "outline",
    slug: "scanning-outline",
    Component: ScanningOutline,
    componentName: "ScanningOutline",
  },
  {
    variant: "twotone",
    slug: "scanning-twotone",
    Component: ScanningTwotone,
    componentName: "ScanningTwotone",
  },
];
