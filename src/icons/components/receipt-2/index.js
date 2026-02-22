import Receipt2Bold from "./Receipt2Bold";
import Receipt2Broken from "./Receipt2Broken";
import Receipt2Bulk from "./Receipt2Bulk";
import Receipt2Linear from "./Receipt2Linear";
import Receipt2Outline from "./Receipt2Outline";
import Receipt2Twotone from "./Receipt2Twotone";

export { Receipt2Bold, Receipt2Broken, Receipt2Bulk, Receipt2Linear, Receipt2Outline, Receipt2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "receipt2-bold",
    Component: Receipt2Bold,
    componentName: "Receipt2Bold",
  },
  {
    variant: "broken",
    slug: "receipt2-broken",
    Component: Receipt2Broken,
    componentName: "Receipt2Broken",
  },
  {
    variant: "bulk",
    slug: "receipt2-bulk",
    Component: Receipt2Bulk,
    componentName: "Receipt2Bulk",
  },
  {
    variant: "linear",
    slug: "receipt2-linear",
    Component: Receipt2Linear,
    componentName: "Receipt2Linear",
  },
  {
    variant: "outline",
    slug: "receipt2-outline",
    Component: Receipt2Outline,
    componentName: "Receipt2Outline",
  },
  {
    variant: "twotone",
    slug: "receipt2-twotone",
    Component: Receipt2Twotone,
    componentName: "Receipt2Twotone",
  },
];
