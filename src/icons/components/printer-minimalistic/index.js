import PrinterMinimalisticBold from "./PrinterMinimalisticBold";
import PrinterMinimalisticBroken from "./PrinterMinimalisticBroken";
import PrinterMinimalisticBulk from "./PrinterMinimalisticBulk";
import PrinterMinimalisticLinear from "./PrinterMinimalisticLinear";
import PrinterMinimalisticOutline from "./PrinterMinimalisticOutline";
import PrinterMinimalisticTwotone from "./PrinterMinimalisticTwotone";

export { PrinterMinimalisticBold, PrinterMinimalisticBroken, PrinterMinimalisticBulk, PrinterMinimalisticLinear, PrinterMinimalisticOutline, PrinterMinimalisticTwotone };

export const variants = [
  {
    variant: "bold",
    slug: "printer-minimalistic-bold",
    Component: PrinterMinimalisticBold,
    componentName: "PrinterMinimalisticBold",
  },,
  {
    variant: "broken",
    slug: "printer-minimalistic-broken",
    Component: PrinterMinimalisticBroken,
    componentName: "PrinterMinimalisticBroken",
  },,
  {
    variant: "bulk",
    slug: "printer-minimalistic-bulk",
    Component: PrinterMinimalisticBulk,
    componentName: "PrinterMinimalisticBulk",
  },,
  {
    variant: "linear",
    slug: "printer-minimalistic-linear",
    Component: PrinterMinimalisticLinear,
    componentName: "PrinterMinimalisticLinear",
  },,
  {
    variant: "outline",
    slug: "printer-minimalistic-outline",
    Component: PrinterMinimalisticOutline,
    componentName: "PrinterMinimalisticOutline",
  },,
  {
    variant: "twotone",
    slug: "printer-minimalistic-twotone",
    Component: PrinterMinimalisticTwotone,
    componentName: "PrinterMinimalisticTwotone",
  }
];

export default { PrinterMinimalisticBold, PrinterMinimalisticBroken, PrinterMinimalisticBulk, PrinterMinimalisticLinear, PrinterMinimalisticOutline, PrinterMinimalisticTwotone };
