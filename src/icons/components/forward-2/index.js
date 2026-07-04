import Forward2Bold from "./Forward2Bold";
import Forward2Broken from "./Forward2Broken";
import Forward2Bulk from "./Forward2Bulk";
import Forward2Linear from "./Forward2Linear";
import Forward2Outline from "./Forward2Outline";
import Forward2Twotone from "./Forward2Twotone";

export { Forward2Bold, Forward2Broken, Forward2Bulk, Forward2Linear, Forward2Outline, Forward2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "forward-2-bold",
    Component: Forward2Bold,
    componentName: "Forward2Bold",
  },,
  {
    variant: "broken",
    slug: "forward-2-broken",
    Component: Forward2Broken,
    componentName: "Forward2Broken",
  },,
  {
    variant: "bulk",
    slug: "forward-2-bulk",
    Component: Forward2Bulk,
    componentName: "Forward2Bulk",
  },,
  {
    variant: "linear",
    slug: "forward-2-linear",
    Component: Forward2Linear,
    componentName: "Forward2Linear",
  },,
  {
    variant: "outline",
    slug: "forward-2-outline",
    Component: Forward2Outline,
    componentName: "Forward2Outline",
  },,
  {
    variant: "twotone",
    slug: "forward-2-twotone",
    Component: Forward2Twotone,
    componentName: "Forward2Twotone",
  }
];

export default { Forward2Bold, Forward2Broken, Forward2Bulk, Forward2Linear, Forward2Outline, Forward2Twotone };
