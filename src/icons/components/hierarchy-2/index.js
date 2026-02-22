import Hierarchy2Bold from "./Hierarchy2Bold";
import Hierarchy2Broken from "./Hierarchy2Broken";
import Hierarchy2Bulk from "./Hierarchy2Bulk";
import Hierarchy2Linear from "./Hierarchy2Linear";
import Hierarchy2Outline from "./Hierarchy2Outline";
import Hierarchy2Twotone from "./Hierarchy2Twotone";

export { Hierarchy2Bold, Hierarchy2Broken, Hierarchy2Bulk, Hierarchy2Linear, Hierarchy2Outline, Hierarchy2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "hierarchy2-bold",
    Component: Hierarchy2Bold,
    componentName: "Hierarchy2Bold",
  },
  {
    variant: "broken",
    slug: "hierarchy2-broken",
    Component: Hierarchy2Broken,
    componentName: "Hierarchy2Broken",
  },
  {
    variant: "bulk",
    slug: "hierarchy2-bulk",
    Component: Hierarchy2Bulk,
    componentName: "Hierarchy2Bulk",
  },
  {
    variant: "linear",
    slug: "hierarchy2-linear",
    Component: Hierarchy2Linear,
    componentName: "Hierarchy2Linear",
  },
  {
    variant: "outline",
    slug: "hierarchy2-outline",
    Component: Hierarchy2Outline,
    componentName: "Hierarchy2Outline",
  },
  {
    variant: "twotone",
    slug: "hierarchy2-twotone",
    Component: Hierarchy2Twotone,
    componentName: "Hierarchy2Twotone",
  },
];
