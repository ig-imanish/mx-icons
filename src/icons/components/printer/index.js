import PrinterBold from "./PrinterBold";
import PrinterBroken from "./PrinterBroken";
import PrinterBulk from "./PrinterBulk";
import PrinterLinear from "./PrinterLinear";
import PrinterOutline from "./PrinterOutline";
import PrinterTwotone from "./PrinterTwotone";

export { PrinterBold, PrinterBroken, PrinterBulk, PrinterLinear, PrinterOutline, PrinterTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "printer-bold",
    Component: PrinterBold,
    componentName: "PrinterBold",
  },
  {
    variant: "broken",
    slug: "printer-broken",
    Component: PrinterBroken,
    componentName: "PrinterBroken",
  },
  {
    variant: "bulk",
    slug: "printer-bulk",
    Component: PrinterBulk,
    componentName: "PrinterBulk",
  },
  {
    variant: "linear",
    slug: "printer-linear",
    Component: PrinterLinear,
    componentName: "PrinterLinear",
  },
  {
    variant: "outline",
    slug: "printer-outline",
    Component: PrinterOutline,
    componentName: "PrinterOutline",
  },
  {
    variant: "twotone",
    slug: "printer-twotone",
    Component: PrinterTwotone,
    componentName: "PrinterTwotone",
  },
];
