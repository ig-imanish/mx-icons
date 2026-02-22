import Mask2Bold from "./Mask2Bold";
import Mask2Broken from "./Mask2Broken";
import Mask2Bulk from "./Mask2Bulk";
import Mask2Linear from "./Mask2Linear";
import Mask2Outline from "./Mask2Outline";
import Mask2Twotone from "./Mask2Twotone";

export { Mask2Bold, Mask2Broken, Mask2Bulk, Mask2Linear, Mask2Outline, Mask2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "mask2-bold",
    Component: Mask2Bold,
    componentName: "Mask2Bold",
  },
  {
    variant: "broken",
    slug: "mask2-broken",
    Component: Mask2Broken,
    componentName: "Mask2Broken",
  },
  {
    variant: "bulk",
    slug: "mask2-bulk",
    Component: Mask2Bulk,
    componentName: "Mask2Bulk",
  },
  {
    variant: "linear",
    slug: "mask2-linear",
    Component: Mask2Linear,
    componentName: "Mask2Linear",
  },
  {
    variant: "outline",
    slug: "mask2-outline",
    Component: Mask2Outline,
    componentName: "Mask2Outline",
  },
  {
    variant: "twotone",
    slug: "mask2-twotone",
    Component: Mask2Twotone,
    componentName: "Mask2Twotone",
  },
];
