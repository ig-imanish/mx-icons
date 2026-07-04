import Pen2Bold from "./Pen2Bold";
import Pen2Broken from "./Pen2Broken";
import Pen2Bulk from "./Pen2Bulk";
import Pen2Linear from "./Pen2Linear";
import Pen2Outline from "./Pen2Outline";
import Pen2Twotone from "./Pen2Twotone";

export { Pen2Bold, Pen2Broken, Pen2Bulk, Pen2Linear, Pen2Outline, Pen2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "pen-2-bold",
    Component: Pen2Bold,
    componentName: "Pen2Bold",
  },,
  {
    variant: "broken",
    slug: "pen-2-broken",
    Component: Pen2Broken,
    componentName: "Pen2Broken",
  },,
  {
    variant: "bulk",
    slug: "pen-2-bulk",
    Component: Pen2Bulk,
    componentName: "Pen2Bulk",
  },,
  {
    variant: "linear",
    slug: "pen-2-linear",
    Component: Pen2Linear,
    componentName: "Pen2Linear",
  },,
  {
    variant: "outline",
    slug: "pen-2-outline",
    Component: Pen2Outline,
    componentName: "Pen2Outline",
  },,
  {
    variant: "twotone",
    slug: "pen-2-twotone",
    Component: Pen2Twotone,
    componentName: "Pen2Twotone",
  }
];

export default { Pen2Bold, Pen2Broken, Pen2Bulk, Pen2Linear, Pen2Outline, Pen2Twotone };
