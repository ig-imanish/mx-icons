import FingerScanBold from "./FingerScanBold";
import FingerScanBroken from "./FingerScanBroken";
import FingerScanBulk from "./FingerScanBulk";
import FingerScanLinear from "./FingerScanLinear";
import FingerScanOutline from "./FingerScanOutline";
import FingerScanTwotone from "./FingerScanTwotone";

export { FingerScanBold, FingerScanBroken, FingerScanBulk, FingerScanLinear, FingerScanOutline, FingerScanTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "finger-scan-bold",
    Component: FingerScanBold,
    componentName: "FingerScanBold",
  },
  {
    variant: "broken",
    slug: "finger-scan-broken",
    Component: FingerScanBroken,
    componentName: "FingerScanBroken",
  },
  {
    variant: "bulk",
    slug: "finger-scan-bulk",
    Component: FingerScanBulk,
    componentName: "FingerScanBulk",
  },
  {
    variant: "linear",
    slug: "finger-scan-linear",
    Component: FingerScanLinear,
    componentName: "FingerScanLinear",
  },
  {
    variant: "outline",
    slug: "finger-scan-outline",
    Component: FingerScanOutline,
    componentName: "FingerScanOutline",
  },
  {
    variant: "twotone",
    slug: "finger-scan-twotone",
    Component: FingerScanTwotone,
    componentName: "FingerScanTwotone",
  },
];
