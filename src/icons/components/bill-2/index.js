import Bill2Bold from "./Bill2Bold";
import Bill2Broken from "./Bill2Broken";
import Bill2Bulk from "./Bill2Bulk";
import Bill2Linear from "./Bill2Linear";
import Bill2Outline from "./Bill2Outline";
import Bill2Twotone from "./Bill2Twotone";

export { Bill2Bold, Bill2Broken, Bill2Bulk, Bill2Linear, Bill2Outline, Bill2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "bill-2-bold",
    Component: Bill2Bold,
    componentName: "Bill2Bold",
  },,
  {
    variant: "broken",
    slug: "bill-2-broken",
    Component: Bill2Broken,
    componentName: "Bill2Broken",
  },,
  {
    variant: "bulk",
    slug: "bill-2-bulk",
    Component: Bill2Bulk,
    componentName: "Bill2Bulk",
  },,
  {
    variant: "linear",
    slug: "bill-2-linear",
    Component: Bill2Linear,
    componentName: "Bill2Linear",
  },,
  {
    variant: "outline",
    slug: "bill-2-outline",
    Component: Bill2Outline,
    componentName: "Bill2Outline",
  },,
  {
    variant: "twotone",
    slug: "bill-2-twotone",
    Component: Bill2Twotone,
    componentName: "Bill2Twotone",
  }
];

export default { Bill2Bold, Bill2Broken, Bill2Bulk, Bill2Linear, Bill2Outline, Bill2Twotone };
