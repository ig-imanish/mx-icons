import ScanBarcodeBold from "./ScanBarcodeBold";
import ScanBarcodeBroken from "./ScanBarcodeBroken";
import ScanBarcodeBulk from "./ScanBarcodeBulk";
import ScanBarcodeLinear from "./ScanBarcodeLinear";
import ScanBarcodeOutline from "./ScanBarcodeOutline";
import ScanBarcodeTwotone from "./ScanBarcodeTwotone";

export { ScanBarcodeBold, ScanBarcodeBroken, ScanBarcodeBulk, ScanBarcodeLinear, ScanBarcodeOutline, ScanBarcodeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "scan-barcode-bold",
    Component: ScanBarcodeBold,
    componentName: "ScanBarcodeBold",
  },
  {
    variant: "broken",
    slug: "scan-barcode-broken",
    Component: ScanBarcodeBroken,
    componentName: "ScanBarcodeBroken",
  },
  {
    variant: "bulk",
    slug: "scan-barcode-bulk",
    Component: ScanBarcodeBulk,
    componentName: "ScanBarcodeBulk",
  },
  {
    variant: "linear",
    slug: "scan-barcode-linear",
    Component: ScanBarcodeLinear,
    componentName: "ScanBarcodeLinear",
  },
  {
    variant: "outline",
    slug: "scan-barcode-outline",
    Component: ScanBarcodeOutline,
    componentName: "ScanBarcodeOutline",
  },
  {
    variant: "twotone",
    slug: "scan-barcode-twotone",
    Component: ScanBarcodeTwotone,
    componentName: "ScanBarcodeTwotone",
  },
];
