import BarcodeBold from "./BarcodeBold";
import BarcodeBroken from "./BarcodeBroken";
import BarcodeBulk from "./BarcodeBulk";
import BarcodeLinear from "./BarcodeLinear";
import BarcodeOutline from "./BarcodeOutline";
import BarcodeTwotone from "./BarcodeTwotone";

export { BarcodeBold, BarcodeBroken, BarcodeBulk, BarcodeLinear, BarcodeOutline, BarcodeTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "barcode-bold",
    Component: BarcodeBold,
    componentName: "BarcodeBold",
  },
  {
    variant: "broken",
    slug: "barcode-broken",
    Component: BarcodeBroken,
    componentName: "BarcodeBroken",
  },
  {
    variant: "bulk",
    slug: "barcode-bulk",
    Component: BarcodeBulk,
    componentName: "BarcodeBulk",
  },
  {
    variant: "linear",
    slug: "barcode-linear",
    Component: BarcodeLinear,
    componentName: "BarcodeLinear",
  },
  {
    variant: "outline",
    slug: "barcode-outline",
    Component: BarcodeOutline,
    componentName: "BarcodeOutline",
  },
  {
    variant: "twotone",
    slug: "barcode-twotone",
    Component: BarcodeTwotone,
    componentName: "BarcodeTwotone",
  },
];
