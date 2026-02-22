import PrinterSlashBold from "./PrinterSlashBold";
import PrinterSlashBroken from "./PrinterSlashBroken";
import PrinterSlashBulk from "./PrinterSlashBulk";
import PrinterSlashLinear from "./PrinterSlashLinear";
import PrinterSlashOutline from "./PrinterSlashOutline";
import PrinterSlashTwotone from "./PrinterSlashTwotone";

export { PrinterSlashBold, PrinterSlashBroken, PrinterSlashBulk, PrinterSlashLinear, PrinterSlashOutline, PrinterSlashTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "printer-slash-bold",
    Component: PrinterSlashBold,
    componentName: "PrinterSlashBold",
  },
  {
    variant: "broken",
    slug: "printer-slash-broken",
    Component: PrinterSlashBroken,
    componentName: "PrinterSlashBroken",
  },
  {
    variant: "bulk",
    slug: "printer-slash-bulk",
    Component: PrinterSlashBulk,
    componentName: "PrinterSlashBulk",
  },
  {
    variant: "linear",
    slug: "printer-slash-linear",
    Component: PrinterSlashLinear,
    componentName: "PrinterSlashLinear",
  },
  {
    variant: "outline",
    slug: "printer-slash-outline",
    Component: PrinterSlashOutline,
    componentName: "PrinterSlashOutline",
  },
  {
    variant: "twotone",
    slug: "printer-slash-twotone",
    Component: PrinterSlashTwotone,
    componentName: "PrinterSlashTwotone",
  },
];
