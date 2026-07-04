import Safe2Bold from "./Safe2Bold";
import Safe2Broken from "./Safe2Broken";
import Safe2Bulk from "./Safe2Bulk";
import Safe2Linear from "./Safe2Linear";
import Safe2Outline from "./Safe2Outline";
import Safe2Twotone from "./Safe2Twotone";

export { Safe2Bold, Safe2Broken, Safe2Bulk, Safe2Linear, Safe2Outline, Safe2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "safe-2-bold",
    Component: Safe2Bold,
    componentName: "Safe2Bold",
  },,
  {
    variant: "broken",
    slug: "safe-2-broken",
    Component: Safe2Broken,
    componentName: "Safe2Broken",
  },,
  {
    variant: "bulk",
    slug: "safe-2-bulk",
    Component: Safe2Bulk,
    componentName: "Safe2Bulk",
  },,
  {
    variant: "linear",
    slug: "safe-2-linear",
    Component: Safe2Linear,
    componentName: "Safe2Linear",
  },,
  {
    variant: "outline",
    slug: "safe-2-outline",
    Component: Safe2Outline,
    componentName: "Safe2Outline",
  },,
  {
    variant: "twotone",
    slug: "safe-2-twotone",
    Component: Safe2Twotone,
    componentName: "Safe2Twotone",
  }
];

export default { Safe2Bold, Safe2Broken, Safe2Bulk, Safe2Linear, Safe2Outline, Safe2Twotone };
