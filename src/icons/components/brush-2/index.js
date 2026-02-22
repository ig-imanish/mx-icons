import Brush2Bold from "./Brush2Bold";
import Brush2Broken from "./Brush2Broken";
import Brush2Bulk from "./Brush2Bulk";
import Brush2Linear from "./Brush2Linear";
import Brush2Outline from "./Brush2Outline";
import Brush2Twotone from "./Brush2Twotone";

export { Brush2Bold, Brush2Broken, Brush2Bulk, Brush2Linear, Brush2Outline, Brush2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "brush2-bold",
    Component: Brush2Bold,
    componentName: "Brush2Bold",
  },
  {
    variant: "broken",
    slug: "brush2-broken",
    Component: Brush2Broken,
    componentName: "Brush2Broken",
  },
  {
    variant: "bulk",
    slug: "brush2-bulk",
    Component: Brush2Bulk,
    componentName: "Brush2Bulk",
  },
  {
    variant: "linear",
    slug: "brush2-linear",
    Component: Brush2Linear,
    componentName: "Brush2Linear",
  },
  {
    variant: "outline",
    slug: "brush2-outline",
    Component: Brush2Outline,
    componentName: "Brush2Outline",
  },
  {
    variant: "twotone",
    slug: "brush2-twotone",
    Component: Brush2Twotone,
    componentName: "Brush2Twotone",
  },
];
