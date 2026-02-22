import Data2Bold from "./Data2Bold";
import Data2Broken from "./Data2Broken";
import Data2Bulk from "./Data2Bulk";
import Data2Linear from "./Data2Linear";
import Data2Outline from "./Data2Outline";
import Data2Twotone from "./Data2Twotone";

export { Data2Bold, Data2Broken, Data2Bulk, Data2Linear, Data2Outline, Data2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "data2-bold",
    Component: Data2Bold,
    componentName: "Data2Bold",
  },
  {
    variant: "broken",
    slug: "data2-broken",
    Component: Data2Broken,
    componentName: "Data2Broken",
  },
  {
    variant: "bulk",
    slug: "data2-bulk",
    Component: Data2Bulk,
    componentName: "Data2Bulk",
  },
  {
    variant: "linear",
    slug: "data2-linear",
    Component: Data2Linear,
    componentName: "Data2Linear",
  },
  {
    variant: "outline",
    slug: "data2-outline",
    Component: Data2Outline,
    componentName: "Data2Outline",
  },
  {
    variant: "twotone",
    slug: "data2-twotone",
    Component: Data2Twotone,
    componentName: "Data2Twotone",
  },
];
