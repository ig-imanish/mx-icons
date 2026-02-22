import Ram2Bold from "./Ram2Bold";
import Ram2Broken from "./Ram2Broken";
import Ram2Bulk from "./Ram2Bulk";
import Ram2Linear from "./Ram2Linear";
import Ram2Outline from "./Ram2Outline";
import Ram2Twotone from "./Ram2Twotone";

export { Ram2Bold, Ram2Broken, Ram2Bulk, Ram2Linear, Ram2Outline, Ram2Twotone };

export const variants = [
  {
    variant: "bold",
    slug: "ram2-bold",
    Component: Ram2Bold,
    componentName: "Ram2Bold",
  },
  {
    variant: "broken",
    slug: "ram2-broken",
    Component: Ram2Broken,
    componentName: "Ram2Broken",
  },
  {
    variant: "bulk",
    slug: "ram2-bulk",
    Component: Ram2Bulk,
    componentName: "Ram2Bulk",
  },
  {
    variant: "linear",
    slug: "ram2-linear",
    Component: Ram2Linear,
    componentName: "Ram2Linear",
  },
  {
    variant: "outline",
    slug: "ram2-outline",
    Component: Ram2Outline,
    componentName: "Ram2Outline",
  },
  {
    variant: "twotone",
    slug: "ram2-twotone",
    Component: Ram2Twotone,
    componentName: "Ram2Twotone",
  },
];
