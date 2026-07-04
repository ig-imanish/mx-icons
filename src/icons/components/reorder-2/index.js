import Reorder2Bold from "./Reorder2Bold";
import Reorder2Broken from "./Reorder2Broken";
import Reorder2Bulk from "./Reorder2Bulk";
import Reorder2Linear from "./Reorder2Linear";
import Reorder2Outline from "./Reorder2Outline";
import Reorder2Twotone from "./Reorder2Twotone";

export { Reorder2Bold, Reorder2Broken, Reorder2Bulk, Reorder2Linear, Reorder2Outline, Reorder2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "reorder-2-bold",
    Component: Reorder2Bold,
    componentName: "Reorder2Bold",
  },,
  {
    variant: "broken",
    slug: "reorder-2-broken",
    Component: Reorder2Broken,
    componentName: "Reorder2Broken",
  },,
  {
    variant: "bulk",
    slug: "reorder-2-bulk",
    Component: Reorder2Bulk,
    componentName: "Reorder2Bulk",
  },,
  {
    variant: "linear",
    slug: "reorder-2-linear",
    Component: Reorder2Linear,
    componentName: "Reorder2Linear",
  },,
  {
    variant: "outline",
    slug: "reorder-2-outline",
    Component: Reorder2Outline,
    componentName: "Reorder2Outline",
  },,
  {
    variant: "twotone",
    slug: "reorder-2-twotone",
    Component: Reorder2Twotone,
    componentName: "Reorder2Twotone",
  }
];

export default { Reorder2Bold, Reorder2Broken, Reorder2Bulk, Reorder2Linear, Reorder2Outline, Reorder2Twotone };
