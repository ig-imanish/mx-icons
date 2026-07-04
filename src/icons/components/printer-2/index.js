import Printer2Bold from "./Printer2Bold";
import Printer2Broken from "./Printer2Broken";
import Printer2Bulk from "./Printer2Bulk";
import Printer2Linear from "./Printer2Linear";
import Printer2Outline from "./Printer2Outline";
import Printer2Twotone from "./Printer2Twotone";

export { Printer2Bold, Printer2Broken, Printer2Bulk, Printer2Linear, Printer2Outline, Printer2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "printer-2-bold",
    Component: Printer2Bold,
    componentName: "Printer2Bold",
  },,
  {
    variant: "broken",
    slug: "printer-2-broken",
    Component: Printer2Broken,
    componentName: "Printer2Broken",
  },,
  {
    variant: "bulk",
    slug: "printer-2-bulk",
    Component: Printer2Bulk,
    componentName: "Printer2Bulk",
  },,
  {
    variant: "linear",
    slug: "printer-2-linear",
    Component: Printer2Linear,
    componentName: "Printer2Linear",
  },,
  {
    variant: "outline",
    slug: "printer-2-outline",
    Component: Printer2Outline,
    componentName: "Printer2Outline",
  },,
  {
    variant: "twotone",
    slug: "printer-2-twotone",
    Component: Printer2Twotone,
    componentName: "Printer2Twotone",
  }
];

export default { Printer2Bold, Printer2Broken, Printer2Bulk, Printer2Linear, Printer2Outline, Printer2Twotone };
